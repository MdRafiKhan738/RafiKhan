"use client"
import { Canvas, useFrame } from "@react-three/fiber"
import { useMemo, useRef } from "react"
import * as THREE from "three"

function StarsLayer({ count, depth, size, speed }) {
  const pointsRef = useRef()
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3]     = (Math.random() - 0.5) * 50
      arr[i * 3 + 1] = (Math.random() - 0.5) * 50
      arr[i * 3 + 2] = -Math.random() * depth
    }
    return arr
  }, [count, depth])

  useFrame((_, delta) => {
    pointsRef.current.rotation.y += speed * delta
    pointsRef.current.rotation.x += speed * 0.4 * delta
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#ffffff"
        size={size}
        sizeAttenuation
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  )
}

export default function RafiStars() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 75 }}>
        <StarsLayer count={800} depth={40} size={0.015} speed={0.005} />
        <StarsLayer count={500} depth={25} size={0.02} speed={0.01} />
        <StarsLayer count={250} depth={15} size={0.03} speed={0.02} />
      </Canvas>
    </div>
  )
}