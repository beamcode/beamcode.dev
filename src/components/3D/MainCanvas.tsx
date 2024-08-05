"use client"

import React from "react"
import { Canvas } from "@react-three/fiber"
import Scene from "./Scene"

export default function MainCanvas() {
  return (
    <div className="rounded-lg border border-primary">
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
