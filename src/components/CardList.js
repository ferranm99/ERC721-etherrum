import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

import Link from "./Link"

const Table = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  box-shadow: ${(props) => props.theme.colors.tableBoxShadow};
`

const Item = styled(Link)`
  display: flex;
  justify-content: space-between;
  color: ${(props) => props.theme.colors.text} !important;
  box-shadow: 0 1px 1px ${(props) => props.theme.colors.tableItemBoxShadow};
  margin-bottom: 1px;
  padding: 1rem;
  width: 100%;
  color: #000;
  &:hover {
    border-radius: 4px;
    box-shadow: 0 0 1px ${(props) => props.theme.colors.primary};
    background: ${(props) => props.theme.colors.tableBackgroundHover};
  }
`

const ItemTitle = styled.div``

const ItemDesc = styled.div`
  margin-bottom: 0;
  opacity: 0.6;
`

const LeftContainer = styled.div`
  flex: 1 1 75%;
  display: flex;
  flex-direction: column;
  margin-right: 2rem;
`
const RightContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1rem;
  flex-wrap: wrap;
`

const Image = styled(Img)`
  min-width: 20px;
  margin-right: 1rem;
`

const CardList = ({ content }) => {
  return (
    <Table>
      {content.map((listItem, idx) => {
        const { title, description, caption, link, image } = listItem
        return (
          <Item key={idx} to={link}>
            {image && <Image fixed={image} />}
            <LeftContainer>
              <ItemTitle>{title}</ItemTitle>
              <ItemDesc>{description}</ItemDesc>
            </LeftContainer>
            <RightContainer>
              <ItemDesc>{caption}</ItemDesc>
            </RightContainer>
          </Item>
        )
      })}
    </Table>
  )
}

export default CardList
