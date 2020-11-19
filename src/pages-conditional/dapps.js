import React, { useState } from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { graphql } from "gatsby"

import Card from "../components/Card"
import CalloutBanner from "../components/CalloutBanner"
import ProductCard from "../components/ProductCard"
import GhostCard from "../components/GhostCard"
import Link from "../components/Link"
import Warning from "../components/Warning"
import Emoji from "../components/Emoji"
import DappsFeatures from "../components/DappsFeatures"
import Eth2Articles from "../components/Eth2Articles"
import Eth2Diagram from "../components/Eth2Diagram"
import ButtonLink from "../components/ButtonLink"
import PageMetadata from "../components/PageMetadata"
import ProductList from "../components/ProductList"
import {
  CardContainer,
  Content,
  Page,
  Divider,
  CenterDivider,
  Eth2Header,
  Eth2HeaderGradient,
} from "../components/SharedStyledComponents"

const HeroContainer = styled.div`
  padding-left: 2rem;
  padding-top: 8rem;
  padding-bottom: 8rem;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    margin-top: -8rem;
    margin-left: -6rem;
    margin-bottom: -8rem;
  }
`

const HeroCard = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  margin-bottom: 0rem;
  border-radius: 2px;
  padding: 0rem 4rem;
  /* background: linear-gradient(
    285.24deg,
    #f7cbc0 0%,
    #fbeae3 17.81%,
    #f4b1ab 29.8%,
    #8476d9 49.78%,
    #85acf9 54.14%,
    #1c1ce1 61.77%,
    #000000 69.77%
  ); */
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    flex-direction: column;
    /* background: linear-gradient(
      360deg,
      #f7cbc0 0%,
      #fbeae3 -0.19%,
      #f4b1ab 5.8%,
      #8476d9 16.78%,
      #85acf9 26%,
      #1c1ce1 36.77%,
      #000000 57.77%
    ); */
  }
`

const Hero = styled(Img)`
  flex: 1 1 50%;
  background-size: cover;
  background-repeat: no-repeat;
  margin-top: 3rem;
  margin-right: 3rem;
  width: 100%;
  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    align-self: center;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
    width: 100%;
    margin-bottom: 2rem;
  }
`

const Image = styled(Img)`
  max-width: 300px;
  margin: 2rem 6rem;
  margin-bottom: 3rem;
`

const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const Title = styled.h1`
  text-transform: uppercase;
  font-size: 14px;
  color: ${(props) => props.theme.colors.text300};
`

const HeroSubtitle = styled.div`
  font-size: 24px;
  line-height: 140%;
  max-width: 560px;
  color: ${(props) => props.theme.colors.text200};
  margin-top: 1rem;
  margin-bottom: 2rem;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    font-size: 20px;
  }
`

const Subtitle = styled.div`
  font-size: 24px;
  line-height: 140%;
  color: ${(props) => props.theme.colors.text200};
  margin-top: 1rem;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    font-size: 20px;
  }
`

const Row = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    flex-direction: column;
  }
`

const IntroRow = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  background: ${(props) => props.theme.colors.background};
  border-radius: 32px;
  padding: 2rem;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    flex-direction: column;
  }
`

const ButtonRow = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
`

const TwoColumnContent = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  margin-right: 2rem;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    flex-direction: column;
    align-items: flex-start;
    margin-left: 0rem;
    margin-right: 0rem;
  }
`

const H2 = styled.h2`
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: left;
`
const StyledWarning = styled(Warning)`
  margin: 0rem 0 0rem;
  width: 50%;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    width: 100%;
  }
`

const OptionContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    flex-direction: column;
    width: 100%;
  }
`

const MobileOptionContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 4rem;
  display: none;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    display: initial;
    flex-direction: column;
    width: 100%;
  }
`

const Option = styled.div`
  border-radius: 32px;
  border: 1px solid
    ${(props) =>
      props.isActive ? props.theme.colors.primary : props.theme.colors.border};
  box-shadow: ${(props) =>
    props.isActive ? props.theme.colors.tableBoxShadow : `none`};
  display: flex;
  align-items: center;
  padding: 1rem 1.5rem;
  margin: 0.5rem;
  cursor: pointer;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    width: 100%;
    justify-content: center;
    margin-left: 1rem;
    margin-right: 1rem;
  }
`

const OptionText = styled.div`
  font-size: 24px;
  line-height: 100%;
  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
    font-size: 16px;
    font-weight: 600;
  }
`

const Column = styled.div`
  flex: 1 1 75%;
  margin-bottom: 1.5rem;
  margin-right: 2rem;
  width: 100%;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    margin-right: 0rem;
    margin-left: 0rem;
  }
`

const CentreCard = styled(Card)`
  flex: 1 1 30%;
  min-width: 240px;
  margin: 1rem;
  padding: 1.5rem;
  text-align: center;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    flex: 1 1 30%;
  }
`

const StyledButton = styled(ButtonLink)`
  margin-right: 1rem;
  margin-bottom: 2rem;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    margin-bottom: 1rem;
  }
`

const StyledCardContainer = styled(CardContainer)`
  margin-top: 2rem;
  margin-bottom: 3rem;
`

const StyledCard = styled(Card)`
  flex: 1 1 30%;
  min-width: 240px;
  box-shadow: ${(props) => props.theme.colors.tableBoxShadow};
  margin: 1rem;
  padding: 1.5rem;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    flex: 1 1 30%;
  }

  &:hover {
    border-radius: 4px;
    box-shadow: 0px 8px 17px rgba(0, 0, 0, 0.15);
    background: ${(props) => props.theme.colors.tableBackgroundHover};
    transition: transform 0.1s;
    transform: scale(1.02);
  }
`

const FullWidthContainer = styled(Page)`
  margin: 0rem 0rem;
  margin-bottom: 4rem;
  border-top: 1px solid ${(props) => props.theme.colors.border};
  background: ${(props) => props.theme.colors.ednBackground};
  padding: 2rem 0rem;
  padding-top: 4rem;
`

const StepBoxContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 1rem 0rem;
  margin-bottom: 4rem;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    flex-wrap: wrap;
  }
`

const StepBox = styled(Link)`
  border: 1px solid ${(props) => props.theme.colors.border};
  background: ${(props) => props.theme.colors.background};
  padding: 0rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.colors.text};
  text-decoration: none;
  width: 100%;
  &:hover {
    background: ${(props) => props.theme.colors.ednBackground};
    transition: transform 0.2s;
    transform: scale(1.05);
  }
`

const H3 = styled.h3`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 0.5rem;
  a {
    display: none;
  }
`

const CenterText = styled.p`
  text-align: center;
  max-width: 800px;
`

const LeftColumn = styled.div`
  margin-right: 2rem;
  width: 100%;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    margin: auto 0rem;
  }
`

const RightColumn = styled.div`
  margin-left: 2rem;
  width: 100%;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    margin: auto 0rem;
  }
`

const Suggestion = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`

const About = styled.div`
  margin-top: 3rem;
`

const Box = styled.div`
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
`

const TextNoMargin = styled.p`
  margin-bottom: 0rem;
  margin-right: 1rem;
`
const AddDapp = styled.div`
  border-radius: 2px;
  border: 1px solid ${(props) => props.theme.colors.border};
  padding: 1.5rem;
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ActionCardContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`

const paths = [
  {
    emoji: ":open_lock:",
    title: "Open access",
    description:
      "Finance services running on Ethereum have no sign up requirements. If you have funds and an internet connection, you’re good to go.",
  },
  {
    emoji: ":bank:",
    title: "A new token economy",
    description:
      "There’s a whole world of tokens that you can interact with across these financial products. People are building new tokens on top of Ethereum all the time.",
  },
  {
    emoji: ":scales:",
    title: "Stablecoins",
    description:
      "Teams have built stablecoins – a less volatile cryptocurrency. These allow you to experiment and use crypto without the risk and uncertainty.",
  },
  {
    emoji: ":chains:",
    title: "Interconnected financial services",
    description:
      "Financial products in the Ethereum space are all modular and compatible with one another. New configurations of these modules are hitting the market all the time, increasing what you can do with your crypto.",
  },
]
const artsCollectibles = [
  {
    emoji: ":white_check_mark:",
    title: "Ownership is provable",
    description:
      "When art is tokenised on Ethereum, ownership can be proved for all to see. You can trace the artwork's journey from creation to its current holder. This prevents forgeries.",
  },
  {
    emoji: ":man_singer:",
    title: "Fairer for creators",
    description:
      "Paying to stream music or buy artwork is far fairer to the artists. With Ethereum there's less need for intermediaries. And if intermediaries are needed, their costs are not as high because platforms don't need to pay for the infrastructure of the network and payments are native to Ethereum.",
  },
  {
    emoji: ":shopping_bags:",
    title: "Collectibles go with you",
    description:
      "Tokenised collectibles are tied to your Ethereum address. That means they're not tied to the platform. This means you can sell things like in-game items on any Ethereum marketplace, not just in the game itself.",
  },
  {
    emoji: ":office_building:",
    title: "Infrastructure already in place",
    description:
      "The tools and products already exist for you to tokenise your art and sell it! And your tokens can be sold on any and all Ethereum collectibles platform.",
  },
]

const games = [
  {
    emoji: ":crossed_swords:",
    title: "Game items double as tokens",
    description:
      "Whether it's virtual land or trading cards, your items are tradeable on colletibles markets. Your in-game items have real-world value.",
  },
  {
    emoji: ":european_castle:",
    title: "Your saves are safe",
    description:
      "You own your items, and in some cases your progress, not game companies. So you won't lose anything if the company behind the game is attacked, suffers a server malfunction, or disbands.",
  },
  {
    emoji: ":handshake:",
    title: "Provable fairness",
    description:
      "In the same way Ethereum payments are available to anyone to verify, games can use this quality to ensure fairness. In theory, everything is verifiable from the number of critical hits to the size of an opponent's war chest.",
  },
]

const DappsPage = ({ data }) => {
  const [isFinance, setIsFinance] = useState(true)
  const [isTechnology, setIsTechnology] = useState(false)
  const [isCollectibles, setIsCollectibles] = useState(false)
  const [isGaming, setIsGaming] = useState(false)

  const lending = [
    {
      title: "Aave",
      description: "Lend your tokens to earn interest and withdraw any time.",
      link: "https://aave.com/",
      image: data.aave.childImageSharp.fluid,
    },
    {
      title: "Compound",
      description: "Lend your tokens to earn interest and withdraw any time.",
      link: "https://compound.finance/",
      image: data.compound.childImageSharp.fluid,
    },
  ]

  const dex = [
    {
      title: "Uniswap",
      description: "Swap tokens simply or provide tokens for % rewards.",
      link: "https://uniswap.org/",
      image: data.uniswap.childImageSharp.fluid,
    },
    {
      title: "Dai",
      description: "The most popular stablecoin, a token with a stable value.",
      link: "https://oasis.app//",
      image: data.dai.childImageSharp.fluid,
    },
  ]

  const trading = [
    {
      title: "Polymarket",
      description: "Bet on outcomes. Trade on information markets.",
      link: "https://polymarket.com",
      image: data.polymarket.childImageSharp.fluid,
    },
    {
      title: "Loopring",
      description: "Peer-to-peer trading platform built for speed.",
      link: "https://loopring.org/#/",
      image: data.loopring.childImageSharp.fluid,
    },
  ]

  const lottery = [
    {
      title: "Gitcoin Grants",
      description:
        "Crowdfunding for Ethereum community projects with amplified contributions.",
      link: "https://gitcoin.co/grants/?",
      image: data.gitcoin.childImageSharp.fluid,
    },
  ]

  const payments = [
    {
      title: "Tornado cash",
      description: "Send anonymous transactions on Ethereum.",
      link: "https://tornado.cash/",
      image: data.tornado.childImageSharp.fluid,
    },
    {
      title: "Sablier",
      description: "Stream money in real-time.",
      link: "https://pay.sablier.finance/",
      image: data.sablier.childImageSharp.fluid,
    },
  ]

  const investments = [
    {
      title: "Token Sets",
      description: "Crypto investment strategies that automatically rebalance.",
      link: "https://www.tokensets.com/",
      image: data.set.childImageSharp.fluid,
    },
    {
      title: "PoolTogether",
      description: "A lottery you can't lose. Prizes every week.",
      link: "https://pooltogether.com/",
      image: data.pooltogether.childImageSharp.fluid,
    },
  ]

  const computing = [
    {
      title: "Golem",
      description: "Access shared computing power or rent your own resources.",
      link: "https://golem.network/",
      image: data.golem.childImageSharp.fluid,
    },
    {
      title: "radicle.xyz",
      description:
        "Secure peer-to-peer code collaboration without intermediaries.",
      link: "https://radicle.xyz/",
      image: data.radicle.childImageSharp.fluid,
    },
  ]

  const marketplaces = [
    {
      title: "Gitcoin",
      description: "Earn crypto working on open-source software.",
      link: "https://gitcoin.co/",
      image: data.gitcoin.childImageSharp.fluid,
    },
  ]

  const utilities = [
    {
      title: "Ethereum Name Service (ENS)",
      description:
        "User-friendly names for Ethereum addresses and decentralized sites.",
      link: "http://ens.domains/",
      image: data.ens.childImageSharp.fluid,
    },
  ]

  const browsers = [
    {
      title: "Brave",
      description:
        "Earn tokens for browsing and support your favorite creators with them.",
      link: "https://brave.com/",
      image: data.brave.childImageSharp.fluid,
    },
    {
      title: "Opera",
      description:
        "Send crypto from your browser to merchants, other users and apps.",
      link: "https://www.opera.com/crypto",
      image: data.opera.childImageSharp.fluid,
    },
  ]

  const arts = [
    {
      title: "Foundation",
      description:
        "Invest in unique editions of digital artwork and trade pieces with other buyers.",
      link: "https://foundation.app/",
      image: data.foundation.childImageSharp.fluid,
    },
    {
      title: "SuperRare",
      description:
        "Buy digital artworks direct from artists or in secondary markets. ",
      link: "https://www.superrare.co",
      image: data.superrare.childImageSharp.fluid,
    },
    {
      title: "Nifty Gateway",
      description:
        "Buy works on-chain from top artists, athletes, brands, and creators.",
      link: "https://niftygateway.com/",
      image: data.nifty.childImageSharp.fluid,
    },
  ]

  const music = [
    {
      title: "Audius",
      description:
        "Decentralized streaming platform. Listens = money for creators, not labels.",
      link: "https://audius.co/",
      image: data.audius.childImageSharp.fluid,
    },
  ]

  const collectibles = [
    {
      title: "OpenSea",
      description: "Buy, sell, discover, and trade limited-edition goods.",
      link: "https://opensea.io/",
      image: data.opensea.childImageSharp.fluid,
    },
    {
      title: "marble.cards",
      description: "Create and trade unique digital cards based on URLs.",
      link: "https://marble.cards/",
      image: data.marble.childImageSharp.fluid,
    },
    {
      title: "Rarible",
      description: "Create, sell and buy tokenised collectibles.",
      link: "https://rarible.com/",
      image: data.rarible.childImageSharp.fluid,
    },
    {
      title: "CryptoPunks",
      description:
        "Buy, bid on, and offer punks for sale – one of the first token collectibles on Ethereum.",
      link: "https://www.larvalabs.com/cryptopunks",
      image: data.cryptopunks.childImageSharp.fluid,
    },
  ]

  const worlds = [
    {
      title: "Cryptovoxels",
      description:
        "Create art galleries, build stores, and buy land – an Ethereum virtual world.",
      link: "https://www.cryptovoxels.com/",
      image: data.cryptovoxels.childImageSharp.fluid,
    },
    {
      title: "Decentraland",
      description:
        "Collect, trade virtual land in a virtual world you can explore.",
      link: "https://decentraland.org/",
      image: data.decentraland.childImageSharp.fluid,
    },
  ]

  const competitive = [
    {
      title: "Axie Infinity",
      description:
        "Trade and battle creatures called Axies. And earn as you play – available on mobile",
      link: "https://axieinfinity.com/",
      image: data.axie.childImageSharp.fluid,
    },
    {
      title: "Gods Unchained",
      description:
        "Strategic trading card game. Earn cards by playing that you can sell in real life.",
      link: "https://godsunchained.com/",
      image: data.gods.childImageSharp.fluid,
    },
    {
      title: "Dark Forest",
      description:
        "Conquer planets in an infinite, procedurally-generated, cryptographically-specified universe.",
      link: "https://zkga.me/",
      image: data.darkforest.childImageSharp.fluid,
    },
  ]

  const choices = [
    {
      name: "Uniswap",
      description:
        "Swap your tokens with ease. A community favourite that allows you to trade tokens with peers across the network. If you've swapped tokens in your wallet before, chances are you've used Uniswap's technology.",
      url: "https://uniswap.exchange/swap",
      image: data.uniswapec.childImageSharp.fixed,
      alt: "Uniswap Logo",
      background: "#212F46",
    },
    {
      name: "DarkForest",
      description:
        "Play against others to conquer planets in a procedurally-generated universe and try out bleeding-edge Ethereum scaling/privacy technology. Maybe one for those already familiar with Ethereum.",
      url: "https://zkga.me",
      image: data.darkforestec.childImageSharp.fixed,
      alt: "Darkforest logo",
      background: "#080808",
    },
    {
      name: "Foundation",
      description:
        "Invest in culture. Buy, trade, and sell unique digital artwork and fashion from some incredible artists, musicians, and  brands.",
      url: "https://foundation.app",
      image: data.foundationec.childImageSharp.fixed,
      alt: "Foundation logo",
      background: "#ffffff",
    },
    {
      name: "PoolTogether",
      description:
        "Buy tickets to the no-loss lottery. Each week, the interest generated from the sum of the entire ticket pool is distributed to one lucky winner. You can swap your tickets back for $ whenever you like.",
      url: "https://pooltogether.com",
      image: data.pooltogetherec.childImageSharp.fixed,
      alt: "Pooltogether logo",
      background: "#7E4CF2",
    },
  ]

  return (
    <Page>
      <PageMetadata
        title="Decentralized applications (dapps)"
        description="Unstoppable applications that run on Ethereum."
      />
      <Content>
        <HeroCard>
          <HeroContainer>
            <Title>Decentralized applications</Title>
            <Eth2Header>Ethereum-powered tools and services</Eth2Header>
            <HeroSubtitle>
              Dapps are a growing movement of applications that use Ethereum to
              disrupt business models or invent new ones.
            </HeroSubtitle>
            <ButtonRow>
              <StyledButton to="#">Explore dapps</StyledButton>
              <StyledButton isSecondary to="#">
                What are dapps?
              </StyledButton>
            </ButtonRow>
          </HeroContainer>
          <Hero fluid={data.doge.childImageSharp.fluid} />
        </HeroCard>
      </Content>
      <Content>
        <H2>Get started</H2>
        <p>
          To try a dapp, you'll need a wallet and some ETH. A wallet will you
          allow you to connect, or log in. And you'll need ETH to pay any{" "}
          <Link to="/glossary/#transaction-fee">transaction fees</Link>.
        </p>
        <Row>
          <StepBoxContainer>
            <StepBox to="/eth/">
              <div>
                <H3>1. Get some ETH</H3>
                <p>Dapp actions cost a transaction fee</p>
              </div>
              <ButtonLink isSecondary to="/eth/">
                Get ETH
              </ButtonLink>
            </StepBox>
            <StepBox to="/wallets/">
              <div>
                <H3>2. Set up a wallet</H3>
                <p>A wallet is your “login” for a dapp</p>
              </div>
              <ButtonLink isSecondary to="/wallets/">
                Find wallet
              </ButtonLink>
            </StepBox>
            <StepBox to="#explore">
              <div>
                <H3>3. Ready?</H3>
                <p>Choose a dapp to try out</p>
              </div>
              <ButtonLink to="#explore">Go</ButtonLink>
            </StepBox>
          </StepBoxContainer>
        </Row>
        <h3>
          Editors' choices <Emoji text=":+1:" size={1} />
        </h3>
        <p>
          A few dapps the ethereum.org team are loving right now. Explore more
          dapps below.
        </p>
        <ActionCardContainer>
          {choices.map((choice, idx) => {
            return (
              <ProductCard
                key={idx}
                background={choice.background}
                url={choice.url}
                alt={choice.alt}
                image={choice.image}
                name={choice.name}
              >
                {choice.description}
              </ProductCard>
            )
          })}
        </ActionCardContainer>
      </Content>
      <FullWidthContainer>
        <H2 id="#explore">Explore dapps</H2>
        <CenterText>
          A lot of dapps are still experimental, testing the possibilties of
          decentralized networks. But there have been some successful early
          movers in the technology, financial, gaming and collectibles
          categories.
        </CenterText>
        <h3>Choose category</h3>
        <OptionContainer>
          <Option
            isActive={isFinance}
            onClick={() => [
              setIsGaming(false),
              setIsCollectibles(false),
              setIsTechnology(false),
              setIsFinance(true),
            ]}
          >
            <Emoji mr={`1rem`} text=":money_with_wings:" />
            <OptionText>Finance</OptionText>
          </Option>
          <Option
            isActive={isTechnology}
            onClick={() => [
              setIsGaming(false),
              setIsCollectibles(false),
              setIsTechnology(true),
              setIsFinance(false),
            ]}
          >
            <Emoji mr={`1rem`} text=":keyboard:" />
            <OptionText>Technology</OptionText>
          </Option>
          <Option
            isActive={isCollectibles}
            onClick={() => [
              setIsGaming(false),
              setIsCollectibles(true),
              setIsTechnology(false),
              setIsFinance(false),
            ]}
          >
            <Emoji mr={`1rem`} text=":frame_with_picture:" />
            <OptionText>Arts and collectibles</OptionText>
          </Option>
          <Option
            isActive={isGaming}
            onClick={() => [
              setIsGaming(true),
              setIsCollectibles(false),
              setIsTechnology(false),
              setIsFinance(false),
            ]}
          >
            <Emoji mr={`1rem`} text=":video_game:" />
            <OptionText>Gaming</OptionText>
          </Option>
        </OptionContainer>
        {isFinance && (
          <Content>
            <IntroRow>
              <Column>
                <H2>
                  Decentralized Finance{" "}
                  <Emoji
                    size={"2rem"}
                    ml={"0.5rem"}
                    text=":money_with_wings:"
                  />
                </H2>
                <Subtitle>
                  These are applications that focus on building out financial
                  services using cryptocurrencies. They offer the likes of
                  lending, borrowing, earning interest, and private payments –
                  no personal data required.
                </Subtitle>
              </Column>
              <StyledWarning>
                <H2>Always do your own research</H2>
                Ethereum is a new technology and most applications are new.
                Before depositing any large quantities of money, make sure you
                understand the risks.
              </StyledWarning>
            </IntroRow>
            <TwoColumnContent>
              <LeftColumn>
                <ProductList
                  category="Lending and borrowing"
                  content={lending}
                />
              </LeftColumn>
              <RightColumn>
                <ProductList category="Investments" content={investments} />
              </RightColumn>
            </TwoColumnContent>
            <TwoColumnContent>
              <LeftColumn>
                <ProductList
                  category="Stablecoins and token swaps"
                  content={dex}
                />
              </LeftColumn>
              <RightColumn>
                <ProductList category="Crowdfunding" content={lottery} />
              </RightColumn>
            </TwoColumnContent>
            <TwoColumnContent>
              <LeftColumn>
                <ProductList category="Payments" content={payments} />
              </LeftColumn>
              <RightColumn>
                <ProductList
                  category="Trading and prediction markets"
                  content={trading}
                />
              </RightColumn>
            </TwoColumnContent>
            <CalloutBanner
              title="View wallets"
              description="Wallets are dapps too. Find one based on the features that suit you."
              image={data.wallet.childImageSharp.fluid}
              maxImageWidth={300}
            >
              <div>
                <ButtonLink to="/wallets/find-wallet/">Find wallet</ButtonLink>
              </div>
            </CalloutBanner>
            <AddDapp>
              <div>
                <H2>Add dapp</H2>
                <TextNoMargin>
                  Before you raise an issue, read{" "}
                  <Link to="/contributing/adding-products/">
                    the listing policy
                  </Link>
                </TextNoMargin>
              </div>
              <ButtonLink
                isSecondary
                to="https://github.com/ethereum/ethereum-org-website/issues/new?assignees=&labels=Type%3A+Feature&template=suggest_dapp.md&title="
              >
                Suggest dapp
              </ButtonLink>
            </AddDapp>
            <CenterDivider />
            <About>
              <H2>
                The magic <Emoji size={"1rem"} text=":sparkles:" /> behind
                decentralized finance
              </H2>
              <p>
                What is it about Ethereum that allows decentalized finance
                applications to thrive?
              </p>
              <CardContainer>
                {paths.map((path, idx) => {
                  return (
                    <CentreCard
                      key={idx}
                      emoji={path.emoji}
                      title={path.title}
                      description={path.description}
                    />
                  )
                })}
              </CardContainer>
            </About>
          </Content>
        )}
        {isGaming && (
          <Content>
            <IntroRow>
              <Column>
                <H2>
                  Decentralized gaming{" "}
                  <Emoji size={"2rem"} ml={"0.5rem"} text=":video_game:" />
                </H2>
                <Subtitle>
                  These are applications that focus on digital ownership,
                  increasing earning potential for creators, and inventing new
                  ways to invest in your favourite creators and their work.
                </Subtitle>
              </Column>
              <StyledWarning>
                <H2>Always do your own research</H2>
                Ethereum is a new technology and most applications are new.
                Before depositing any large quantities of money, make sure you
                understand the risks.
              </StyledWarning>
            </IntroRow>
            <TwoColumnContent>
              <LeftColumn>
                <ProductList category="Virtual worlds" content={worlds} />
              </LeftColumn>
              <RightColumn>
                <ProductList category="Competition" content={competitive} />
              </RightColumn>
            </TwoColumnContent>
            <AddDapp>
              <div>
                <H2>Add dapp</H2>
                <TextNoMargin>
                  Before you raise an issue, read{" "}
                  <Link to="/contributing/adding-products/">
                    the listing policy
                  </Link>
                </TextNoMargin>
              </div>
              <ButtonLink
                isSecondary
                to="https://github.com/ethereum/ethereum-org-website/issues/new?assignees=&labels=Type%3A+Feature&template=suggest_dapp.md&title="
              >
                Suggest dapp
              </ButtonLink>
            </AddDapp>
            <CenterDivider />
            <About>
              <H2>
                The magic <Emoji size={"1rem"} text=":sparkles:" /> behind
                decentralized gaming
              </H2>
              <p>What is it about Ethereum that allows the arts to thrive?</p>
              <CardContainer>
                {games.map((game, idx) => {
                  return (
                    <CentreCard
                      key={idx}
                      emoji={game.emoji}
                      title={game.title}
                      description={game.description}
                    />
                  )
                })}
              </CardContainer>
            </About>
          </Content>
        )}
        {isTechnology && (
          <Content>
            <IntroRow>
              <Column>
                <H2>
                  Decentralized Technology{" "}
                  <Emoji size={"2rem"} ml={"0.5rem"} text=":keyboard:" />
                </H2>
                <Subtitle>
                  These are applications that focus on decentralizing developer
                  tools, incorporating cryptoeconomic systems into existing
                  technology, and creating marketplaces for open-source
                  development work.
                </Subtitle>
              </Column>
              <StyledWarning>
                <H2>Always do your own research</H2>
                Ethereum is a new technology and most applications are new.
                Before depositing any large quantities of money, make sure you
                understand the risks.
              </StyledWarning>
            </IntroRow>
            <TwoColumnContent>
              <LeftColumn>
                <ProductList category="Utilities" content={utilities} />
              </LeftColumn>
              <RightColumn>
                <ProductList category="Marketplaces" content={marketplaces} />
              </RightColumn>
            </TwoColumnContent>
            <TwoColumnContent>
              <LeftColumn>
                <ProductList category="Developer tools" content={computing} />
              </LeftColumn>
              <RightColumn>
                <ProductList category="Browsers" content={browsers} />
              </RightColumn>
            </TwoColumnContent>
            <AddDapp>
              <div>
                <H2>Add dapp</H2>
                <TextNoMargin>
                  Before you raise an issue, read{" "}
                  <Link to="/contributing/adding-products/">
                    the listing policy
                  </Link>
                </TextNoMargin>
              </div>
              <ButtonLink
                isSecondary
                to="https://github.com/ethereum/ethereum-org-website/issues/new?assignees=&labels=Type%3A+Feature&template=suggest_dapp.md&title="
              >
                Suggest dapp
              </ButtonLink>
            </AddDapp>
          </Content>
        )}
        {isCollectibles && (
          <Content>
            <IntroRow>
              <Column>
                <H2>
                  Decentralized arts and collectibles{" "}
                  <Emoji
                    size={"2rem"}
                    ml={"0.5rem"}
                    text=":frame_with_picture:"
                  />
                </H2>
                <Subtitle>
                  These are applications that focus on digital ownership,
                  increasing earning potential for creators, and inventing new
                  ways to invest in your favourite creators and their work.
                </Subtitle>
              </Column>
              <StyledWarning>
                <H2>Always do your own research</H2>
                Ethereum is a new technology and most applications are new.
                Before depositing any large quantities of money, make sure you
                understand the risks.
              </StyledWarning>
            </IntroRow>
            <TwoColumnContent>
              <LeftColumn>
                <ProductList category="Art and fashion" content={arts} />

                <ProductList category="Music" content={music} />
              </LeftColumn>
              <RightColumn>
                <ProductList
                  category="Digital collectibles"
                  content={collectibles}
                />
              </RightColumn>
            </TwoColumnContent>
            <AddDapp>
              <div>
                <H2>Add dapp</H2>
                <TextNoMargin>
                  Before you raise an issue, read{" "}
                  <Link to="/contributing/adding-products/">
                    the listing policy
                  </Link>
                </TextNoMargin>
              </div>
              <ButtonLink
                isSecondary
                to="https://github.com/ethereum/ethereum-org-website/issues/new?assignees=&labels=Type%3A+Feature&template=suggest_dapp.md&title="
              >
                Suggest dapp
              </ButtonLink>
            </AddDapp>
            <CenterDivider />
            <About>
              <H2>
                The magic <Emoji size={"1rem"} text=":sparkles:" /> behind
                decentralized collectibles and streaming
              </H2>
              <p>What is it about Ethereum that allows the arts to thrive?</p>
              <CardContainer>
                {artsCollectibles.map((art, idx) => {
                  return (
                    <CentreCard
                      key={idx}
                      emoji={art.emoji}
                      title={art.title}
                      description={art.description}
                    />
                  )
                })}
              </CardContainer>
            </About>
          </Content>
        )}
        <MobileOptionContainer>
          <h3>Browse another category</h3>
          <Option
            isActive={isFinance}
            onClick={() => [
              setIsGaming(false),
              setIsCollectibles(false),
              setIsTechnology(false),
              setIsFinance(true),
            ]}
          >
            <Emoji mr={`1rem`} text=":money_with_wings:" />
            <OptionText>Finance</OptionText>
          </Option>
          <Option
            isActive={isTechnology}
            onClick={() => [
              setIsGaming(false),
              setIsCollectibles(false),
              setIsTechnology(true),
              setIsFinance(false),
            ]}
          >
            <Emoji mr={`1rem`} text=":keyboard:" />
            <OptionText>Technology</OptionText>
          </Option>
          <Option
            isActive={isCollectibles}
            onClick={() => [
              setIsGaming(false),
              setIsCollectibles(true),
              setIsTechnology(false),
              setIsFinance(false),
            ]}
          >
            <Emoji mr={`1rem`} text=":frame_with_picture:" />
            <OptionText>Collectibles</OptionText>
          </Option>
          <Option
            isActive={isGaming}
            onClick={() => [
              setIsGaming(true),
              setIsCollectibles(false),
              setIsTechnology(false),
              setIsFinance(false),
            ]}
          >
            <Emoji mr={`1rem`} text=":video_game:" />
            <OptionText>Gaming</OptionText>
          </Option>
        </MobileOptionContainer>
      </FullWidthContainer>
      <Content>
        <ImageContainer>
          <GhostCard>
            <Image fixed={data.magicians.childImageSharp.fixed} />
          </GhostCard>
        </ImageContainer>
        <Box>
          <H2>The magic behind dapps</H2>
          <CenterText>
            Dapps might feel like regular apps. But behind the scenes dapps have
            some special qualities because they inherit all of Ethereum’s
            superpowers. Here's what makes dapps different from apps.
          </CenterText>
          <Link to="/what-is-ethereum/">What makes Ethereum great?</Link>
        </Box>
        <DappsFeatures />
        <Row>
          <LeftColumn>
            <H2>Smart contracts</H2>
            <p>How do smart contracts work from a non-technical perspective?</p>
          </LeftColumn>
          <RightColumn>
            <CalloutBanner
              title="Learn to build a dapp"
              description="Our community developer portal has docs, tools, and frameworks to help you start building a dapp."
              image={data.developers.childImageSharp.fluid}
              maxImageWidth={600}
            >
              <div>
                <ButtonLink to="/developers/">Start building</ButtonLink>
              </div>
            </CalloutBanner>
          </RightColumn>
        </Row>
      </Content>
    </Page>
  )
}

export default DappsPage

export const dappImage = graphql`
  fragment dappImage on File {
    childImageSharp {
      fluid(maxWidth: 80) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
export const editorImage = graphql`
  fragment editorImage on File {
    childImageSharp {
      fixed(height: 80, quality: 100) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`

export const query = graphql`
  query {
    doge: file(relativePath: { eq: "doge-computer.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    magicians: file(relativePath: { eq: "magicians.png" }) {
      childImageSharp {
        fixed(width: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    developers: file(relativePath: { eq: "developers-eth-blocks.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    wallet: file(relativePath: { eq: "wallet.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    uniswapec: file(relativePath: { eq: "dapps/uni.png" }) {
      ...editorImage
    }
    foundationec: file(relativePath: { eq: "dapps/foundation.png" }) {
      ...editorImage
    }
    darkforestec: file(relativePath: { eq: "dapps/darkforest.png" }) {
      ...editorImage
    }
    pooltogetherec: file(relativePath: { eq: "dapps/pooltogether.png" }) {
      ...editorImage
    }
    aave: file(relativePath: { eq: "dapps/aave.png" }) {
      ...dappImage
    }
    compound: file(relativePath: { eq: "dapps/compound.png" }) {
      ...dappImage
    }
    pooltogether: file(relativePath: { eq: "dapps/pooltogether.png" }) {
      ...dappImage
    }
    uniswap: file(relativePath: { eq: "dapps/uni.png" }) {
      ...dappImage
    }
    dai: file(relativePath: { eq: "dapps/stabledai.png" }) {
      ...dappImage
    }
    set: file(relativePath: { eq: "dapps/set.png" }) {
      ...dappImage
    }
    tornado: file(relativePath: { eq: "dapps/tornado.png" }) {
      ...dappImage
    }
    loopring: file(relativePath: { eq: "dapps/loopring.png" }) {
      ...dappImage
    }
    polymarket: file(relativePath: { eq: "dapps/polymarket.png" }) {
      ...dappImage
    }
    sablier: file(relativePath: { eq: "dapps/sablier.png" }) {
      ...dappImage
    }
    golem: file(relativePath: { eq: "dapps/golem.png" }) {
      ...dappImage
    }
    gitcoin: file(relativePath: { eq: "dapps/gitcoin.png" }) {
      ...dappImage
    }
    ens: file(relativePath: { eq: "dapps/ens.png" }) {
      ...dappImage
    }
    radicle: file(relativePath: { eq: "dapps/radicle.png" }) {
      ...dappImage
    }
    brave: file(relativePath: { eq: "dapps/brave.png" }) {
      ...dappImage
    }
    opera: file(relativePath: { eq: "dapps/opera.png" }) {
      ...dappImage
    }
    foundation: file(relativePath: { eq: "dapps/foundation.png" }) {
      ...dappImage
    }
    superrare: file(relativePath: { eq: "dapps/superrare.png" }) {
      ...dappImage
    }
    audius: file(relativePath: { eq: "dapps/audius.png" }) {
      ...dappImage
    }
    marble: file(relativePath: { eq: "dapps/marble.png" }) {
      ...dappImage
    }
    nifty: file(relativePath: { eq: "dapps/nifty.png" }) {
      ...dappImage
    }
    opensea: file(relativePath: { eq: "dapps/opensea.png" }) {
      ...dappImage
    }
    rarible: file(relativePath: { eq: "dapps/rarible.png" }) {
      ...dappImage
    }
    decentraland: file(relativePath: { eq: "dapps/decentraland.png" }) {
      ...dappImage
    }
    cryptopunks: file(relativePath: { eq: "dapps/cryptopunks.png" }) {
      ...dappImage
    }
    darkforest: file(relativePath: { eq: "dapps/darkforest.png" }) {
      ...dappImage
    }
    axie: file(relativePath: { eq: "dapps/axie.png" }) {
      ...dappImage
    }
    gods: file(relativePath: { eq: "dapps/gods.png" }) {
      ...dappImage
    }
    cryptovoxels: file(relativePath: { eq: "dapps/cryptovoxels.png" }) {
      ...dappImage
    }
  }
`
