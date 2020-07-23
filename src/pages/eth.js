import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import { Twemoji } from "react-emoji-render"

import Card from "../components/Card"
import EthVideo from "../components/EthVideo"
import Callout from "../components/Callout"
import Button from "../components/Button"
import CalloutBanner from "../components/CalloutBanner"
import Link from "../components/Link"
import CardList from "../components/CardList"
import HorizontalCard from "../components/HorizontalCard"
import { Page } from "../components/SharedStyledComponents"
import EthPriceCard from "../components/EthPriceCard"

const Divider = styled.div`
  margin-bottom: 4rem;
  margin-top: 4rem;
  width: 10%;
  height: 0.25rem;
  background-color: ${(props) => props.theme.colors.homeDivider};
`

const Content = styled.div`
  width: 100%;
  padding: 1rem 0;
  @media (max-width: ${(props) => props.theme.breakpoints.xl}) {
    padding: 1rem 2rem;
  }
`

const Emoji = styled(Twemoji)`
  & > img {
    width: 3em !important;
    height: 3em !important;
  }
  margin-bottom: 2rem;
`

const Slogan = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 140%;
`

const Title = styled.h1`
  font-size: 14px;
  line-height: 140%;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.textSidebar};
`

const Caption = styled.p`
  font-size: 14px;
  line-height: 140%;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.textSidebar};
`
const CaptionLink = styled.a`
  font-size: 14px;
  line-height: 140%;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
`

const Subtitle = styled.div`
  font-size: 20px;
  line-height: 140%;
  color: ${(props) => props.theme.colors.text200};
`
const SubtitleTwo = styled.div`
  font-size: 20px;
  line-height: 140%;
  margin-bottom: 2rem;
  color: ${(props) => props.theme.colors.text300};
`

const HeroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
    flex-direction: column-reverse;
  }
`

const InfoBanner = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 1rem 1.5rem;
  background: #f8f8fe; /* TODO add color to theme */
  border: 1px solid #a4a4f3; /* TODO add color to theme */
  background-color: ${(props) => props.theme.colors.searchBackground};
  border-radius: 4px;
  margin: 2rem 2rem 0;
`

const InfoCopy = styled.p`
  margin-bottom: 0px;
  margin-left: 1.5rem;
  color: ${(props) => props.theme.colors.text};
`

const InfoEmoji = styled(Emoji)`
  & > img {
    width: 3em !important;
    height: 3em !important;
  }
  margin-bottom: 0rem;
`

const StyledVideo = styled(EthVideo)`
  flex: 1 1 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Header = styled.header`
  flex: 1 1 50%;
  margin-top: 8rem;
  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
    margin-top: 0;
  }
`

// TODO move to shared styles
const GrayContainer = styled.div`
  width: 100%;
  padding: 4rem 0rem;
  margin-top: 2rem;
  background: ${(props) => props.theme.colors.grayBackground};
  box-shadow: inset 0px 1px 0px
    ${(props) => props.theme.colors.tableItemBoxShadow};
`

const OrangeContainer = styled.div`
  width: 100%;
  padding: 4rem 0rem;
  margin-top: 2rem;
  background: ${(props) => props.theme.colors.primary300};
  box-shadow: inset 0px 1px 0px
    ${(props) => props.theme.colors.tableItemBoxShadow};
`

const Intro = styled.div`
  max-width: 608px;
  padding: 0rem 2rem;
`

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -1rem;
  margin-right: -1rem;
  padding: 0rem 2rem;
`

const ActionCardContainer = styled(CardContainer)`
  justify-content: center;
  margin-bottom: 3rem;
`

const StyledCard = styled(Card)`
  flex: 1 1 30%;
  max-width: 420px;
  min-width: 240px;
  margin: 1rem;
  padding: 1.5rem;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    flex: 1 1 30%;
  }
`

const TokenCard = styled(StyledCard)`
  flex: 1 1 25%;
  max-width: 320px;
  min-width: 240px;
  margin: 1rem;
  padding: 1.5rem;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    flex: 1 1 25%;
    max-width: 100%;
    min-width: 240px;
  }
`

const TokenCardVert = styled(HorizontalCard)`
  min-width: 100%;
  margin: 0.5rem 0rem;
  border-radius: 0px;
`

const Banner = styled(Img)`
  height: fit-content;
  width: 100%;
`

const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  margin-bottom: 4rem;
`

const BannerContent = styled.div`
  position: absolute;
  padding: 0.5rem;
  top: 0%;
  left: 29%;
  width: 40%;
  text-align: center;
  justify-content: center;
`

const BannerMessage = styled.h2`
  font-size: 48px;
  line-height: 140%;
  color: ${(props) => props.theme.colors.text};
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    font-size: 32px;
    top: 35%;
  }
`

const BannerCopy = styled.p`
  font-size: 20px;
  line-height: 140%;
  color: ${(props) => props.theme.colors.text200};
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    font-size: 32px;
    top: 35%;
  }
`

const TwoColumnContent = styled(Content)`
  display: flex;
  margin-top: 3rem;
  margin-bottom: 3rem;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    flex-direction: column;
    align-items: flex-start;
    margin-top: 3rem;
  }
`

const IntroTwoColumnContent = styled(Content)`
  display: flex;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    flex-direction: column;
    align-items: flex-start;
  }
`

const Column = styled.div`
  flex: 0 0 50%;
  max-width: 50%;
  margin-bottom: 2rem;
  padding-right: 1.5rem;
  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
    max-width: 100%;
  }
  margin-right: 1rem;
`

const CardColumn = styled.div`
  flex: 0 1 50%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
`

const SingleCard = styled(StyledCard)`
  margin: 0;
  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    margin-right: 2rem;
  }
  a {
    text-decoration: underline;
  }
`

const GradientContainer = styled(GrayContainer)`
  background: linear-gradient(
    49.21deg,
    rgba(127, 127, 213, 0.2) 19.87%,
    rgba(134, 168, 231, 0.2) 58.46%,
    rgba(145, 234, 228, 0.2) 97.05%
  );
  display: flex;
  justify-content: center;
  margin-bottom: 4rem;
`

const StyledCallout = styled(Callout)`
  flex: 1 1 424px;
`

const EthPrice = styled.div`
  background: linear-gradient(
    180deg,
    rgba(207, 236, 224, 0.4) 0%,
    rgba(207, 236, 224, 0) 100%
  );
  border-radius: 2px;
  padding: 1.5rem;
  margin-top: 3rem;
  border: 1px solid ${(props) => props.theme.colors.lightBorder};

  display: flex;
  max-width: 424px;
`

const TextDivider = styled.div`
  margin-bottom: 2rem;
  margin-top: 2rem;
  width: 10%;
  height: 1px;
  background-color: ${(props) => props.theme.colors.searchResultBackground};
`

const CentralColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 960px;
  margin: 4rem;
`

const Image = styled(Img)`
  flex: 0 1 50%;
  height: 100%;
  width: 100%;
  max-width: 600px;
`

const tokens = [
  {
    emoji: ":scales:",
    title: "Stablecoins",
    description:
      "Tokens that mirror the value of traditional currency like dollars. This makes them more stable.",
  },
  {
    emoji: ":ballot_box_with_ballot:",
    title: "Governance tokens",
    description:
      "Tokens that represent voting power in decentralized organisations. The token should increase in value as the organisation becomes more popular/successful.",
  },
  {
    emoji: ":pile_of_poo:",
    title: "Sh*t coins",
    description:
      "Anyone can make their own tokens. So do your research before investing in any tokens. ",
  },
  {
    emoji: ":frame_with_picture:",
    title: "Non-fungible tokens (NFTs)",
    description:
      "Tokens that you can’t send or receive in decimal parts. They can represent a digital asset or a physical object that has been tokenised to prove ownership. ",
  },
]

const benefits = [
  {
    emoji: ":woman_technologist:",
    title: "It's really yours",
    description:
      "No entity holds your ETH on your behalf so you're always in control. With Ethereum you are your own bank and your wallet is your proof of ownership.",
  },
  {
    emoji: ":shield:",
    title: "Secured by cryptography",
    description:
      "Internet money may sound dangerous but it's secured by advanced cryptography which makes payments nearly impossible to intercept. ",
  },
  {
    emoji: ":handshake:",
    title: "Peer-to-peer",
    description:
      "You don't need intermediary services, like banks, to send your ETH. It's like handing money over in-person but you can do it securely with anyone, anywhere.",
  },
  {
    emoji: ":money_with_wings:",
    title: "No one controls it",
    description:
      "There's no one in control of ETH and no entity that mints or prints it. This means it's decentralized and global, ETH has no borders and no entity has the authority to stop or censor payments.",
  },
  {
    emoji: ":signal_strength:",
    title: "Open to anyone",
    description:
      "You only need a data connection and an Ethereum address to accept ETH. You don't need access to a bank account to accept payments. ",
  },
  {
    emoji: ":earth_africa:",
    title: "Fast, global payments",
    description:
      "You can send ETH cheaply to anyone with an Ethereum wallet, anywhere in the world. Fees are usually lower than traditional payment methods",
  },
]

const cardListContent = [
  {
    link: "https://docs.ethhub.io/ethereum-basics/monetary-policy/",
    title: "Ethereum's monetary policy",
    description: "EthHub",
    caption: "Updated often",
  },
  {
    link: "https://medium.com/ethhub/why-ether-is-valuable-2b4e39e01eb3",
    title: "Why Ether is valuable",
    description: "Anthony Sassano",
    caption: "January 2019",
  },
  {
    link:
      "https://support.mycrypto.com/how-to/getting-started/how-to-buy-ether-with-usd",
    title: "How to buy Ether",
    description: "MyCrypto",
    caption: "Updated often",
  },
]

const mining = [
  {
    link: "https://www.coindesk.com/learn/ethereum-101/ethereum-mining-works",
    title: "How Ethereum mining works",
    description: "Coindesk",
    caption: "March 2017",
  },
]

const WhatIsEthereumPage = (props) => {
  const data = props.data
  return (
    <Page>
      <Content>
        <HeroContainer>
          <Header>
            <Title>What is Eth?</Title>
            <Slogan>The fuel for our digital future</Slogan>
            <Subtitle>
              ETH is the currency of Ethereum – it powers the network.
            </Subtitle>
            <SubtitleTwo>
              You can use it, send it, receieve it, earn it and so much more...
            </SubtitleTwo>
            <EthPriceCard />
            <Button to="/eth/get-eth" title="where to buy eth">
              Get ETH
            </Button>

            {/*
            <EthPrice>
              <EthPriceCurrent>
                <Caption>Current price</Caption>
                <EthPriceValue>$200.89</EthPriceValue>
                <Button to="#">Get ETH</Button>
              </EthPriceCurrent>
              <EthPriceSwitcher>
                <CaptionLink href="#">1 day</CaptionLink>
                <CaptionLink href="#">1 week</CaptionLink>
                <CaptionLink href="#">1 month</CaptionLink>
                <PriceTrendUp>1.67%</PriceTrendUp>
              </EthPriceSwitcher>
            </EthPrice>
          */}
          </Header>
          <StyledVideo />
        </HeroContainer>
      </Content>
      <GrayContainer>
        <Content>
          <Column>
            <p>
              ETH is a cryptocurrency. Like Bitcoin, it's an internet-based
              currency that you can use in transactions. If you’re new to
              crypto, here's how ETH is different from traditional money.
            </p>
          </Column>
        </Content>
        <CardContainer>
          {benefits.map((benefits, idx) => {
            return (
              <StyledCard
                key={idx}
                emoji={benefits.emoji}
                title={benefits.title}
                description={benefits.description}
              />
            )
          })}
        </CardContainer>

        <InfoBanner>
          <InfoEmoji svg text=":wave:" />
          <InfoCopy>
            <b>Want to buy some Ethereum?</b> It's common to mix up Ethereum and
            ETH. But Ethereum is the digital ecosystem where ETH is an accepted
            cryptocurrency. ETH is what you're probably looking to buy.{" "}
            <Link to="/what-is-ethereum/">More on Ethereum</Link>.
          </InfoCopy>
        </InfoBanner>
      </GrayContainer>
      <CentralColumn>
        <h2>What's unique about ETH?</h2>
        <p>
          There are many cryptocurrencies and lots of other tokens on Ethereum,
          but there are some things that only ETH can do.
        </p>
        <Image fluid={data.eth.childImageSharp.fluid} />
        <Divider />
        <Emoji svg text=":fuel_pump:" />
        <div>
          <h4>ETH fuels the Ethereum economy</h4>
          <p>
            When you send ETH or use an Ethereum application, you'll need to pay
            a small fee in ETH. This fee is an incentive for a miner to process
            and verify your transaction. Miners are like the record-keepers of
            Ethereum – they check and prove that no one is cheating. But doing
            this is expensive, so your fee has to cover their costs.
          </p>
          <p>
            The work miners do keeps Ethereum secure and decentralized (without
            central ownership). So, in essence,{" "}
            <strong>ETH powers Ethereum</strong>.
          </p>
          <CardList content={mining} />
        </div>
        <TextDivider />
        <Emoji svg text=":shield:" />
        <div>
          <h4>ETH secures the Ethereum network</h4>
          <p>
            ETH is designed to make network hacks unprofitable. A hack would
            decimate the price of ETH and make it nearly impossible to sell.
            Plus, preparing the computing power you’d need would be an
            investment in itself. Thanks to ETH, hacking Ethereum would cost you
            more than you’d gain.
          </p>
          <p>
            This is why ETH remains important even when there are so many other{" "}
            <Link to="/eth/#tokens">tokens on Ethereum</Link>
          </p>
        </div>
        <TextDivider />
        <Emoji svg text=":gem_stone:" />
        <div>
          <h4>ETH underpins the Ethereum financial system</h4>
          <p>
            Not content with payments, the Ethereum community is building a
            financial system that's peer-to-peer and accessible to everyone.
          </p>
          <p>
            Right now, you can borrow, lend and earn interest on ETH. You can
            even use it as collateral to generate entirely different
            cryptocurrency tokens on Ethereum.
          </p>
          <p>
            Not only is ETH a key component in many of these services, but you
            also need ETH to manage your investments. Even to lend a token,
            you'll need to pay a transaction fee in ETH.
          </p>
        </div>
        <TextDivider />
        <Emoji svg text=":milky_way:" />
        <div>
          <h4>ETH evolves with the community's imagination</h4>
          <p>
            Because Ethereum is programmable, developers can mould ETH to their
            imagination. The things you can do with ETH grows daily.
          </p>
          <p>
            Back in 2015, all you could do was send ETH from one Ethereum
            account to another...
          </p>
          <p>
            Right now, you can{" "}
            <Link to="https://sablier.finance">stream ETH</Link> to pay someone
            or receive funds in real time. You can seamlesly{" "}
            <Link to="https://uniswap.exchange/swap">
              trade ETH with other tokens
            </Link>{" "}
            including Bitcoin. Eventually, you'll be able to play a part in
            securing Ethereum by staking your ETH and earning more in return.
          </p>
        </div>
      </CentralColumn>
      <CalloutBanner
        title="Where to get ETH"
        description="You can get ETH from an exchange or a wallet that lets you buy ETH directly. Different regions and countries have different policies, so we’ve put together a list to help you find services that let you buy ETH where you live ."
        image={data.eth_cat.childImageSharp.fluid}
        maxImageWidth={300}
      >
        <div>
          <Button to="#">Get ETH</Button>
        </div>
      </CalloutBanner>
      <Divider />
      <Content id="tokens">
        <h2>More on ETH</h2>
      </Content>
      <TwoColumnContent>
        <Column>
          <h3>How is ETH valuable?</h3>
          <p>
            ETH is valuable to users of Ethereum because you need to spend it to
            use Ethereum.
          </p>
          <p>
            As Ethereum grows, the demand for ETH and its price increase too.
            The amount of ETH created is also set to drop over time, increasing
            its scarcity. Less ETH is created per day now than a few years ago.
          </p>
          <p>
            Of course, while Ethereum isn't mainstream technology, a lot of
            ETH's value comes from speculation. Investors and traders buy ETH,
            like they buy Bitcoin and other cryptocurrencies, because they
            believe it will gain value over time.
          </p>
        </Column>
        <Column>
          <h3>From the community</h3>
          <CardList content={cardListContent} />
        </Column>
      </TwoColumnContent>
      <TwoColumnContent>
        <Column>
          <h3 id="tokens">ETH isn't the only crypto on Ethereum</h3>
          <p>
            Anyone can create tokens and trade them on Ethereum. People have
            tokenised traditional currencies, their real estate, their art and
            even themselves!{" "}
          </p>
          <p>
            So Ethereum is home to thousands of tokens – some more useful and
            valuable than others. Developers are constantly building new tokens
            that unlock new possibilities and open new markets.
          </p>
          <p id="tokens">
            {" "}
            If you'd like to learn more about tokens, our friends at EthHub have
            written a couple of great overviews:{" "}
          </p>
          <Link to="https://docs.ethhub.io/guides/a-straightforward-guide-erc20-tokens/">
            Ethereum tokens
          </Link>
          <br />
          <Link to="https://docs.ethhub.io/built-on-ethereum/erc-token-standards/erc721/#summary">
            Non-fungible tokens
          </Link>
        </Column>
        <Column>
          <h3>Popular types of token</h3>

          {tokens.map((token, idx) => {
            return (
              <TokenCardVert
                key={idx}
                emoji={token.emoji}
                title={token.title}
                description={token.description}
              />
            )
          })}
        </Column>
      </TwoColumnContent>
    </Page>
  )
}

export default WhatIsEthereumPage

export const query = graphql`
  query {
    banner: file(relativePath: { eq: "home/eth_tokens.png" }) {
      childImageSharp {
        fluid(maxHeight: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    dapps: file(relativePath: { eq: "home/doge_computer.png" }) {
      childImageSharp {
        fixed(width: 372) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    eth: file(relativePath: { eq: "eth_wip.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    eth_cat: file(relativePath: { eq: "eth_logo_1.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
