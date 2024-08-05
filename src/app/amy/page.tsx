"use client"

import MainCanvas from "@/components/3D/MainCanvas"
import SpotifyPlayer from "@/components/SpotifyEmbed"
import MacTerminal from "@/components/Terminal"
import ThemeButtonEmoji from "@/components/ThemeButtonEmoji"
import ThemeButton from "@/components/ThemeButton"
import ThemeToggleFancy from "@/components/ThemeToggle"
import SpotifyWidget from "@/components/SpotifyWidget"
import VercelBox from "@/components/VercelBox"
import AnimBg from "@/components/VantaBackground"
import ThemeSelector from "@/components/ThemeSelector"

export default function Page() {
  return (
    <div className="space-y-6">
      <h1 className="mb-10 font-medium">This is amy, plz be nice to her</h1>
      <MainCanvas />
      <SpotifyPlayer />
      <MacTerminal />
      <ThemeButtonEmoji clicked={() => {}} />
      <ThemeButton clicked={() => {}} />
      <ThemeToggleFancy clicked={() => {}} />
      <ThemeSelector />
      <SpotifyWidget />
      <VercelBox
        marginTopLeft={[10, 10]}
        marginTopRight={[60, 10]}
        marginBottomLeft={[10, 10]}
        marginBottomRight={[30, 10]}
        colorClass="bg-secondary"
      >
        <div className="h-40 overflow-hidden">
          <AnimBg className={"p-2"}>{""}</AnimBg>
        </div>
      </VercelBox>
    </div>
  )
}
