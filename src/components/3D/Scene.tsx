import React, { useRef, useEffect } from "react"
import { useThree } from "@react-three/fiber"
import { GridHelper } from "three"
import { OrbitControls } from "@react-three/drei"
import Model from "./Model"

interface SceneProps {
  path: string
}

function Scene({ path }: SceneProps) {
  const { scene, camera } = useThree()
  const gridRef = useRef<GridHelper>(null)

  useEffect(() => {
    const grid = new GridHelper(1000, 1000)
    scene.add(grid)
    return () => {
      scene.remove(grid)
    }
  }, [scene])

  useEffect(() => {
    camera.position.set(0, 6, 5) // Set the camera position
    // camera.lookAt(0, 0, 0) // Ensure the camera looks at (0, 0, 0)
  }, [camera])

  return (
    <>
      <React.Suspense fallback={null}>
        <Model path={path} />
      </React.Suspense>
      <ambientLight intensity={1.5} />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls target={[0, 4, 0]} /> // Set the target to eye level (x, y, z)
    </>
  )
}

export default Scene
