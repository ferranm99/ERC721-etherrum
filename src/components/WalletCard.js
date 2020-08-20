import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

import Link from "./Link"

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.background};
  box-shadow: inset 0px -1px 0px rgba(0, 0, 0, 0.1);
  min-height: 200px;
`

const Image = styled(Img)`
  width: 100%;
  max-width: 372px;
  max-height: 257px;
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    max-width: 311px;
  }
`

const Card = styled(Link)`
  /* TODO discuss size w/ Ryan */
  flex: 1 1 300px;
  max-width: 360px;
  margin: 1rem;

  color: ${(props) => props.theme.colors.text};
  box-shadow: 0px 14px 66px rgba(0, 0, 0, 0.07),
    0px 10px 17px rgba(0, 0, 0, 0.03), 0px 4px 7px rgba(0, 0, 0, 0.05);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${(props) => props.theme.colors.searchBackground};
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.colors.lightBorder};
  text-decoration: none;

  &:hover {
    box-shadow: 0px 8px 17px rgba(0, 0, 0, 0.15);
    background: ${(props) => props.theme.colors.tableBackgroundHover};
    transition: transform 0.1s;
    transform: scale(1.02);
  }
`

const Content = styled.div`
  padding: 1.5rem;
`

const Title = styled.h3``

const Description = styled.p`
  opacity: 0.8;
  font-size: ${(props) => props.theme.fontSizes.s};
`

const WalletCard = ({ wallet }) => {
  return (
    <Card to={wallet.url} hideArrow={true}>
      <ImageWrapper background={wallet.brandColor}>
        <Image
          fixed={wallet.image.childImageSharp.fixed}
          alt={wallet.imageAlt}
        />
      </ImageWrapper>
      <Content>
        <Title>{wallet.name}</Title>
        <Description>{wallet.description}</Description>
        {/* {content.map((rowItem, idx) => {
            const { emoji, category } = rowItem
            return (
              <Row>
                <RowText>{category}</RowText>
                <Emoji svg text={emoji} />
              </Row>
            )
          })} */}
      </Content>
    </Card>
  )
}

export default WalletCard
