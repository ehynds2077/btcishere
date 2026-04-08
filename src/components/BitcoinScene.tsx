import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, Text } from "@react-three/drei"
import type { Mesh } from "three"

function Coin() {
  const meshRef = useRef<Mesh>(null)

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.3
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.6}>
      <group rotation={[0.4, 0, 0.1]}>
        <mesh ref={meshRef}>
          <cylinderGeometry args={[2, 2, 0.25, 64]} />
          <meshStandardMaterial
            color="#d4a020"
            metalness={0.9}
            roughness={0.2}
          />
        </mesh>
        <Text
          position={[0, 0.131, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          fontSize={1.8}
          color="#b8860b"
          anchorX="center"
          anchorY="middle"
          font="https://fonts.gstatic.com/s/spacegrotesk/v16/V8mDoQDjQSkFtoMM3T6r8E7mPbF4Cw.woff2"
        >
          ₿
        </Text>
        <Text
          position={[0, -0.131, 0]}
          rotation={[Math.PI / 2, 0, Math.PI]}
          fontSize={1.8}
          color="#b8860b"
          anchorX="center"
          anchorY="middle"
          font="https://fonts.gstatic.com/s/spacegrotesk/v16/V8mDoQDjQSkFtoMM3T6r8E7mPbF4Cw.woff2"
        >
          ₿
        </Text>
      </group>
    </Float>
  )
}

export function BitcoinScene() {
  return (
    <div className="absolute inset-0 hidden sm:block" aria-hidden>
      <Canvas
        gl={{ alpha: true, antialias: true }}
        camera={{ position: [0, 0, 7], fov: 45 }}
        style={{ pointerEvents: "none" }}
      >
        <ambientLight intensity={0.3} />
        <pointLight
          position={[4, 4, 4]}
          intensity={80}
          color="#e8a020"
        />
        <pointLight
          position={[-3, 2, 3]}
          intensity={40}
          color="#c89030"
        />
        <Coin />
      </Canvas>
    </div>
  )
}
