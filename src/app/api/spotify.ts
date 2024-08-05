// app/api/spotify/nowplaying/route.ts
import { NextApiRequest, NextApiResponse } from "next"

// Environment variables (loaded from your .env file)
const client_id = process.env.SPOTIFY_CLIENT_ID as string
const client_secret = process.env.SPOTIFY_CLIENT_SECRET as string
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN as string

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64")
const NOW_PLAYING_ENDPOINT = "https://api.spotify.com/v1/me/player/currently-playing"
const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token"

// Helper function to get an access token
async function getAccessToken() {
  const params = new URLSearchParams()
  params.append("grant_type", "refresh_token")
  params.append("refresh_token", refresh_token)

  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params,
  })

  if (!response.ok) {
    throw new Error("Failed to get access token")
  }

  return response.json()
}

// Main handler function
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { access_token } = await getAccessToken()
    const response = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })

    if (response.status !== 200) {
      res.status(200).json({ isPlaying: false })
      return
    }

    const data = await response.json()
    if (!data.item) {
      res.status(200).json({ isPlaying: false })
      return
    }

    const result = {
      isPlaying: data.is_playing,
      title: data.item.name,
      artist: data.item.artists.map((artist: { name: any }) => artist.name).join(", "),
      albumImageUrl: data.item.album.images[0].url,
      songUrl: data.item.external_urls.spotify,
    }

    res.status(200).json(result)
  } catch (error) {
    console.error("Error getting now playing data:", error)
    res.status(500).json({ error: "Internal Server Error" })
  }
}
