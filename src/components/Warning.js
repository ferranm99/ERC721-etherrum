import React from "react"
import styled from "styled-components"
import { Twemoji } from "react-emoji-render"

// TODO merge with InfoBanner.js
const InfoContainer = styled.div`
  width: 100%;
  max-width: 876px;
  color: ${(props) => props.theme.colors.black300};
  padding: 16px 24px;
  background: ${(props) => props.theme.colors.warning};
  display: flex;
  flex-direction: column;
`

const Emoji = styled(Twemoji)`
  margin-right: 1rem;
  & > img {
    width: 1.5em !important;
    height: 1.5em !important;
    min-width: 24px;
    min-height: 24px;
  }
`

const Warning = ({ className, emoji, children }) => {
  return (
    <InfoContainer className={className}>
      {emoji && <Emoji svg text={emoji} />}
      {children}
    </InfoContainer>
  )
}

export default Warning
