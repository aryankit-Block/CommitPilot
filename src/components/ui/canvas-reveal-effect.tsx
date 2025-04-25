"use client";
import { cn } from "@/lib/utils";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import React, { useMemo, useRef } from "react";
import * as THREE from "three";

interface Uniforms {
  uTime: number;
  uResolution: [number, number];
  uMouse: [number, number];
  uProgress: number;
  u_colors: number[][];
  u_opacities: number[];
  u_total_size: number;
  u_dot_size: number;
}

interface ShaderMaterialProps {
  source: string;
  uniforms: Uniforms;
  maxFps?: number;
}

const ShaderMaterial: React.FC<ShaderMaterialProps> = ({
  source,
  uniforms,
  maxFps = 60,
}) => {
  const { size } = useThree();
  const ref = useRef<THREE.Mesh>(null);
  let lastFrameTime = 0;

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const timestamp = clock.getElapsedTime();
    if (timestamp - lastFrameTime < 1 / maxFps) {
      return;
    }
    lastFrameTime = timestamp;

    const material = ref.current.material as THREE.ShaderMaterial;
    const timeLocation = material.uniforms.u_time;
    timeLocation.value = timestamp;
  });

  const getUniforms = () => {
    const preparedUniforms: Record<string, { value: any; type: string }> = {};

    for (const uniformName in uniforms) {
      const uniform = uniforms[uniformName as keyof Uniforms];

      switch (typeof uniform) {
        case 'number':
          preparedUniforms[uniformName] = { value: uniform, type: '1f' };
          break;
        case 'object':
          if (Array.isArray(uniform)) {
            preparedUniforms[uniformName] = { 
              value: new THREE.Vector2().fromArray(uniform), 
              type: '2f' 
            };
          }
          break;
      }
    }

    preparedUniforms["u_time"] = { value: 0, type: '1f' };
    preparedUniforms["u_resolution"] = {
      value: new THREE.Vector2(size.width * 2, size.height * 2),
      type: '2f'
    };
    return preparedUniforms;
  };

  const material = useMemo(() => {
    const materialObject = new THREE.ShaderMaterial({
      vertexShader: `
        precision mediump float;
        in vec2 coordinates;
        uniform vec2 u_resolution;
        out vec2 fragCoord;
        void main(){
          float x = position.x;
          float y = position.y;
          gl_Position = vec4(x, y, 0.0, 1.0);
          fragCoord = (position.xy + vec2(1.0)) * 0.5 * u_resolution;
          fragCoord.y = u_resolution.y - fragCoord.y;
        }
      `,
      fragmentShader: source,
      uniforms: getUniforms(),
      glslVersion: THREE.GLSL3,
      blending: THREE.CustomBlending,
      blendSrc: THREE.SrcAlphaFactor,
      blendDst: THREE.OneFactor,
    });

    return materialObject;
  }, [size.width, size.height, source]);

  return (
    <mesh ref={ref}>
      <planeGeometry args={[2, 2]} />
      <primitive object={material} attach="material" />
    </mesh>
  );
};

interface ShaderProps {
  source: string;
  uniforms: Uniforms;
  maxFps?: number;
}

const Shader: React.FC<ShaderProps> = ({ source, uniforms, maxFps = 60 }) => {
  return (
    <Canvas className="absolute inset-0 h-full w-full">
      <ShaderMaterial source={source} uniforms={uniforms} maxFps={maxFps} />
    </Canvas>
  );
};

export const CanvasRevealEffect = ({
  animationSpeed = 0.4,
  opacities = [0.3, 0.3, 0.3, 0.5, 0.5, 0.5, 0.8, 0.8, 0.8, 1],
  colors = [[0, 255, 255]],
  containerClassName,
  dotSize,
  showGradient = true,
}: {
  /**
   * 0.1 - slower
   * 1.0 - faster
   */
  animationSpeed?: number;
  opacities?: number[];
  colors?: number[][];
  containerClassName?: string;
  dotSize?: number;
  showGradient?: boolean;
}) => {
  return (
    <div className={cn("h-full relative bg-white w-full", containerClassName)}>
      <div className="h-full w-full">
        <Shader
          source={`
            precision mediump float;
            uniform float u_time;
            uniform vec2 u_resolution;
            out vec4 fragColor;
            
            void main() {
              vec2 st = gl_FragCoord.xy / u_resolution.xy;
              fragColor = vec4(st.x, st.y, 0.5, 1.0);
            }
          `}
          uniforms={{
            uTime: 0,
            uResolution: [0, 0],
            uMouse: [0, 0],
            uProgress: 0,
            u_colors: colors,
            u_opacities: opacities,
            u_total_size: dotSize,
            u_dot_size: dotSize,
          }}
        />
      </div>
      {showGradient && (
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-[84%]" />
      )}
    </div>
  );
};

interface DotMatrixProps {
  colors?: number[][];
  opacities?: number[];
  totalSize?: number;
  dotSize?: number;
  shader?: string;
  center?: ("x" | "y")[];
}

const DotMatrix = ({
  colors = [[0, 255, 255]],
  dotSize = 3,
  opacities = [0.3, 0.3, 0.3, 0.5, 0.5, 0.5, 0.8, 0.8, 0.8, 1],
  shader = "",
  center = ["x", "y"],
}: {
  colors?: number[][];
  dotSize?: number;
  opacities?: number[];
  shader?: string;
  center?: string[];
}) => {
  const uniforms: Uniforms = {
    uTime: 0,
    uResolution: [0, 0],
    uMouse: [0, 0],
    uProgress: 0,
    u_colors: colors,
    u_opacities: opacities,
    u_total_size: dotSize,
    u_dot_size: dotSize,
  };

  const colorsArray = colors.flat();
  const opacitiesArray = opacities;

  return (
    <Shader
      source={`
        precision mediump float;
        uniform float u_time;
        uniform vec2 u_resolution;
        uniform vec3 u_colors[${colors.length}];
        uniform float u_opacities[${opacities.length}];
        uniform float u_total_size;
        uniform float u_dot_size;
        out vec4 fragColor;
        
        ${shader}
        
        void main() {
          vec2 st = gl_FragCoord.xy / u_resolution.xy;
          vec2 st2 = st * u_total_size;
          vec2 ipos = floor(st2);
          vec2 fpos = fract(st2);
          
          float opacity = u_opacities[int(mod(ipos.x + ipos.y, float(${opacities.length})))];
          vec3 color = u_colors[int(mod(ipos.x + ipos.y, float(${colors.length})))];
          
          float dot = smoothstep(u_dot_size, 0.0, length(fpos - 0.5));
          fragColor = vec4(color / 255.0, opacity * dot);
        }
      `}
      uniforms={uniforms}
    />
  );
};
