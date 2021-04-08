import React from "react"
import styled from "styled-components"

import Link from "../components/Link"
import Icon from "../components/Icon"
import InfoBanner from "../components/InfoBanner"
import Emoji from "../components/Emoji"
import ButtonLink from "../components/ButtonLink"
import { Page, Content, Divider } from "../components/SharedStyledComponents"

const StyledPage = styled(Page)`
  margin-top: 4rem;
  margin-bottom: 4rem;
  max-width: ${(props) => props.theme.breakpoints.l};
  align-self: flex-start;
`

const H1 = styled.h1`
  font-size: 64px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0px;
  text-align: left;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    font-size: 48px;
  }
`

const H2 = styled.h2`
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0px;
  text-align: left;
`

const InfoBannerContainer = styled.div`
  width: 75%;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    width: 100%;
  }
`

const StyledIcon = styled(Icon)`
  margin-right: 1rem;
  min-width: 32px;
`

const Row = styled.div`
  display: flex;
  align-items: center;
`

const StudioRedirectPage = () => (
  <StyledPage>
    <Content>
      <Emoji size={6} mb={"2rem"} text=":sunset_over_buildings:" />
      <H1>We're sunsetting Studio</H1>
      <p>
        If you've created any projects that you'd like to save, you should
        download them immediately. This version of Studio will be disabled
        within a few weeks.
      </p>
      <p>
        You can access any projects you've created from the project URL, e.g.{" "}
        <pre>https://studio.ethereum.org/5fc7e8c326b4730012373621</pre>
        You will no longer be able to access the Ethereum Studio homepage.
      </p>
      <InfoBannerContainer>
        <InfoBanner mb={"2rem"}>
          <Row>
            <StyledIcon size={32} name="codeDownload" />
            Look for the "download code" icon in Studio's file explorer to
            download your project. This will export a ZIP for you.
          </Row>
        </InfoBanner>
      </InfoBannerContainer>
      <Divider />
      <H2>What to use instead</H2>
      <p>
        We recommend using Remix as an alternative web IDE for your Solidity
        development. Additionally, we encourage you to consider{" "}
        <Link to="/developers/local-environment/">
          setting up a local development environment
        </Link>
        . Check out our developer portal for tools, documentation, and more.
      </p>
      <ButtonLink mr={"1rem"} isSecondary to="https://remix.ethereum.org">
        Use Remix
      </ButtonLink>
      <Link isSecondary to="/developers/">
        Developer portal
      </Link>
    </Content>
  </StyledPage>
)

export default StudioRedirectPage
