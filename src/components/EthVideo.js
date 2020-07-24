import React, { useContext } from "react"
import { ThemeContext } from "styled-components"

import darkVideo from "../assets/ethereum-hero-dark.mp4"
import lightVideo from "../assets/ethereum-hero-light.mp4"

const EthVideo = ({ className }) => {
  const themeContext = useContext(ThemeContext)
  const isDarkTheme = themeContext.isDark

  return (
    <div className={className}>
      <video
        id="hero-video"
        alt={`ETH glyph video - ${isDarkTheme ? "Dark" : "Light"}`}
        width="100%"
        height="auto"
        src={isDarkTheme ? darkVideo : lightVideo}
        playsInline
        autoPlay
        loop
        muted
      />
    </div>
  )
}

export default EthVideo
