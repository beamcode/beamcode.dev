"use client"

import { useEffect, useState } from "react"
import { twMerge } from "tailwind-merge"
import Image from "next/image"
import Link from "next/link"
import MusicBars from "./musicBars/MusicBars"
import { SquareArrowOutUpRight } from "lucide-react"

interface SpotifyData {
  isPlaying: boolean
  songUrl: string
  albumImageUrl: string
  title: string
  artist: string
  durationMs: number
  progressMs: number
}

export default function SpotifyWidget({ className }: { className?: string }) {
  const [data, setData] = useState<SpotifyData>()
  const [failedAttempts, setFailedAttempts] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [isInitialLoad, setIsInitialLoad] = useState(true)

  const fetchData = async () => {
    try {
      setIsLoading(true)
      const res = await fetch("/api/spotify/nowplaying")
      const json = await res.json()
      setData(json)
      setFailedAttempts(0)
    } catch (error) {
      console.error("Error fetching data:", error)
      setFailedAttempts((prev) => prev + 1)
    } finally {
      setIsLoading(false)
      setIsInitialLoad(false)
    }
  }

  function formatTime(ms: number) {
    const totalSeconds = Math.floor(ms / 1000)
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = totalSeconds % 60
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (failedAttempts < 3) {
        fetchData()
      } else {
        clearInterval(interval)
      }
    }, 2000)
    return () => clearInterval(interval)
  }, [failedAttempts])

  return (
    <>
      {data?.isPlaying ? (
        <Link
          href={data.songUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={twMerge(
            "dark:border-opacity-10 group flex w-full min-w-fit justify-between gap-4 overflow-hidden rounded-xl border border-zinc-200 bg-gray-50 p-3 transition-all hover:scale-[1.02] dark:border-zinc-800 dark:bg-zinc-900",
            className
          )}
        >
          {/* Album Image */}
          <div className="aspect-square size-24 rounded-md bg-gray-200 dark:bg-gray-600">
            <a href={data.songUrl} target="_blank" rel="noopener noreferrer">
              <Image
                className="size-full rounded-md object-contain"
                src={data.albumImageUrl}
                alt="Album art"
                sizes="100vw"
                width={0}
                height={0}
              />
            </a>
          </div>

          {/* Song Info */}
          <div className="flex w-full flex-col">
            <div className="flex h-full flex-col justify-between gap-2">
              <div>
                <h1 className="text-lg font-medium text-gray-900 dark:text-white">{data.title}</h1>
                <p className="text-base text-gray-500 dark:text-gray-400">{data.artist}</p>
              </div>
              <div className="flex h-fit items-center gap-2">
                <span className="text-xs text-gray-400">{formatTime(data.progressMs)}</span>
                <div className="h-1.5 w-full gap-1 rounded-full bg-gray-300 dark:bg-gray-700">
                  <div
                    className="h-full rounded-full bg-gray-700 transition-all dark:bg-gray-300"
                    style={{
                      width: `${(data.progressMs / data.durationMs) * 100}%`,
                    }}
                  />
                </div>
                <span className="text-xs text-gray-400">{formatTime(data.durationMs)}</span>
              </div>
            </div>
          </div>

          {/* Spotify Logo and Bars */}
          <div className="flex max-w-6 flex-col items-center justify-between">
            <Image
              src="/images/spotify.png"
              alt="Spotify logo"
              width={0}
              height={0}
              sizes="100vw"
              className="size-fit object-contain"
            />
            <MusicBars />
            <SquareArrowOutUpRight size={20} />
          </div>
        </Link>
      ) : (
        <div
          className={twMerge(
            "dark:border-opacity-10 flex w-full min-w-fit justify-between gap-4 overflow-hidden rounded-xl border border-zinc-200 bg-gray-50 p-3 dark:border-zinc-800 dark:bg-zinc-900",
            className
          )}
        >
          {/* Album Image */}
          <div className="aspect-square size-24 rounded-md bg-gray-200 dark:bg-gray-600" />

          {/* Skeleton */}
          <div className="flex w-full flex-col">
            {isInitialLoad && isLoading ? (
              <div className="flex h-full flex-col justify-between gap-2">
                <div className="space-y-2">
                  <div className="h-6 max-w-48 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
                  <div className="h-5 max-w-32 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
                </div>
                <div className="flex h-fit items-center gap-2 overflow-hidden">
                  <div className="h-4 w-12 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
                  <div className="h-1.5 w-full animate-pulse rounded-full bg-gray-200 dark:bg-gray-700" />
                  <div className="h-4 w-12 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
                </div>
              </div>
            ) : (
              <div className="flex grow flex-col items-center justify-center">
                <p className="text-base font-medium text-gray-500 dark:text-gray-400">
                  Music paused.
                </p>
              </div>
            )}
          </div>

          {/* Spotify Logo */}
          <div className="flex max-w-6 flex-col items-center justify-between">
            <Image
              src="/images/spotify.png"
              alt="Spotify logo"
              width={0}
              height={0}
              sizes="100vw"
              className="size-fit object-contain"
            />
            {isInitialLoad && !isLoading && <SquareArrowOutUpRight size={20} />}
          </div>
        </div>
      )}
    </>
  )
}
