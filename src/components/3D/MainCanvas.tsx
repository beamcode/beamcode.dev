"use client"

import React from "react"
import { Canvas } from "@react-three/fiber"
import Scene from "./Scene"

export default function MainCanvas() {
  return (
    <div className="border-2 border-gray-200 rounded-lg">
      <Canvas
        style={{ height: "50vh", width: "100%" }}
        camera={{
          position: [0, 0, 0], // Camera position (x, y, z)
          fov: 90, // Field of view (in degrees)
        }}
      >
        <Scene path="/3d-models/amy2.fbx" />
      </Canvas>
    </div>
  )
}
