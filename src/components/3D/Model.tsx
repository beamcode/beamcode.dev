import React, { useRef, useEffect } from "react"
import { useFrame, useLoader } from "@react-three/fiber"
import { FBXLoader } from "three-stdlib"
import * as THREE from "three"

interface ModelProps {
  path: string
}

export default function Model({ path }: ModelProps) {
  const fbx = useLoader(FBXLoader, path)
  const modelRef = useRef<THREE.Group>(null)
  const mixer = useRef<THREE.AnimationMixer>(null)

  useEffect(() => {
    if (fbx.animations.length && modelRef.current) {
      mixer.current = new THREE.AnimationMixer(modelRef.current)
      const action = mixer.current.clipAction(fbx.animations[0])
      action.play()
    }
  }, [fbx])

  useFrame((state, delta) => {
    if (mixer.current) {
      mixer.current.update(delta)
    }
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01
    }
  })

  return (
    <group ref={modelRef} position={[0, 0, 0]} scale={[0.05, 0.05, 0.05]}>
      <primitive object={fbx} />
    </group>
  )
}
