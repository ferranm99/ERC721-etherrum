import React, { useState, useEffect } from "react"
import { useIntl } from "gatsby-plugin-intl"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import axios from "axios"
import Icon from "../components/Icon"
import styled from "styled-components"
import CodeModal from "../components/CodeModal"
import CalloutBanner from "../components/CalloutBanner"
import Codeblock from "../components/Codeblock"
import Tooltip from "../components/Tooltip"
import StatsBoxGrid from "../components/StatsBoxGrid"
import TitleCardList from "../components/TitleCardList"
import { translateMessageId } from "../utils/translations"
import Morpher from "../components/Morpher"
import PageMetadata from "../components/PageMetadata"
import Translation from "../components/Translation"
import Link from "../components/Link"
import ButtonLink from "../components/ButtonLink"
import ActionCard from "../components/ActionCard"
import {
  GrayContainer,
  CardContainer,
  Content,
  H2,
  LeftColumn,
} from "../components/SharedStyledComponents"

const Hero = styled(Img)`
  width: 100%;
  min-height: 380px;
  max-height: 440px;
  background-size: cover;
  background: no-repeat 50px;
  margin-bottom: 2rem;
`

const StyledContent = styled(Content)`
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    padding: 1rem 1rem;
  }
`

const H1 = styled.h1`
  font-size: 40px;
  font-weight: 700;
  margin-top: 1rem;
  margin-bottom: 0rem;
`

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  margin: 0 auto;
`

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`

const ButtonRow = styled.div`
  display: flex;
  align-items: flex-start;
  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
    flex-direction: column;
  }
`

const StyledButtonLink = styled(ButtonLink)`
  margin-left: 0.5rem;
  margin-top: 0rem;
  display: flex;
  align-items: center;
  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
    margin-top: 1rem;
    margin-left: 0rem;
  }
`

const CodeboxModal = styled(CodeModal)`
  .modal-component-container {
    padding: 0;
    left: 0;
    right: 0;
    bottom: 0;
    top: 50%;
  }
  .modal-component {
    max-width: 100%;
    max-height: 50%;
    padding: 0rem;
  }
  .modal-component-content {
    margin-top: 3rem;
    width: 100%;
    overflow: auto;
  }
`

const IntroRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
  margin-top: 1rem;
  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
    flex-direction: column-reverse;
    margin: 0rem;
  }
`

const RowReverse = styled.div`
  display: flex;
  flex-direction: row-reverse;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    flex-direction: column-reverse;
    align-items: center;
  }
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    flex-direction: column-reverse;
    align-items: center;
  }
`

const ImageContainer = styled.div`
  background: "#F1FFFD";
  display: flex;
  height: 100%;
  width: 100%;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    width: 75%;
  }
`

const Description = styled.p`
  color: ${(props) => props.theme.colors.text200};
  max-width: 55ch;
  text-align: center;
  align-self: center;
  font-size: 20px;
  margin-top: 1rem;
`

const StyledGrayContainer = styled(GrayContainer)`
  box-shadow: inset 0px 0px 0px
    ${(props) => props.theme.colors.tableItemBoxShadow};
  padding: 0rem;
  padding-bottom: 4rem;
  margin-top: 0rem;
`
const StyledCard = styled(ActionCard)`
  min-width: 480px;
  margin: 1rem;
  border-radius: 2px;
  border: 1px solid ${(props) => props.theme.colors.text};
  background: ${(props) => props.theme.colors.background};
  box-shadow: ${(props) => props.theme.colors.cardBoxShadow};
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    flex: 1 1 30%;
    min-width: 240px;
  }
`
const Tout = styled(ActionCard)`
  min-width: 400px;
  margin: 1rem;
  border-radius: 2px;
  border: 1px solid ${(props) => props.theme.colors.text};
  background: ${(props) => props.theme.colors.background};
  box-shadow: ${(props) => props.theme.colors.cardBoxShadow};
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    flex: 1 1 30%;
    min-width: 240px;
  }
`

const StyledCardContainer = styled(CardContainer)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  margin: 0rem;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    flex-direction: column;
  }
`

const Image = styled(Img)`
  max-height: 480px;
  background-size: cover;
  background: no-repeat 50px;
`

const IntroImage = styled(Img)`
  width: 100%;
  background-size: cover;
  background: no-repeat 50px;
`

const FeatureImage = styled(Img)`
  width: 100%;
`

const Subtitle = styled.div`
  margin-bottom: 2rem;
  font-size: 20px;
  line-height: 140%;
`

const EthereumIntroContainer = styled.div`
  background: ${(props) => props.theme.colors.homeBoxTurquoise};
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  padding-left: 2rem;
  width: 100%;
  height: 720px;
  margin-top: -1px;
  border-top: 1px solid ${(props) => props.theme.colors.text};
  border-bottom: 1px solid ${(props) => props.theme.colors.text};
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    flex-direction: column-reverse;
    height: 100%;
    padding-top: 2rem;
    padding-left: 0rem;
    padding-bottom: 2rem;
  }
`

const FinanceContainer = styled.div`
  background: ${(props) => props.theme.colors.homeBoxOrange};
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 720px;
  margin-top: -1px;
  border-top: 1px solid ${(props) => props.theme.colors.text};
  border-bottom: 1px solid ${(props) => props.theme.colors.text};
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    flex-direction: column-reverse;
    height: 100%;
    height: 100%;
    padding-top: 2rem;
    padding-right: 0rem;
    padding-bottom: 2rem;
  }
`

const InternetContainer = styled.div`
  background: ${(props) => props.theme.colors.homeBoxPink};
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  padding-left: 2rem;
  height: 720px;
  width: 100%;
  margin-top: -1px;
  margin-bottom: 0rem;
  border-top: 1px solid ${(props) => props.theme.colors.text};
  border-bottom: 1px solid ${(props) => props.theme.colors.text};
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    flex-direction: column-reverse;
    height: 100%;
    padding-top: 2rem;
    padding-left: 0rem;
    padding-bottom: 2rem;
  }
`

const DeveloperContainer = styled.div`
  background: ${(props) => props.theme.colors.homeBoxPurple};
  display: flex;
  align-items: center;
  flex-direction: row;
  height: 720px;
  width: 100%;
  margin-top: -1px;
  border-top: 1px solid ${(props) => props.theme.colors.text};
  border-bottom: 1px solid ${(props) => props.theme.colors.text};
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    flex-direction: column;
    height: 100%;
  }
`

const FeatureContent = styled(LeftColumn)`
  padding: 6rem;
  height: 100%;
  width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    padding: 2rem;
  }
`

const LeftColumnContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const IntroLeftColumn = styled(LeftColumn)`
  padding: 6rem;
  height: 100%;
  width: 100%;
  margin: 0;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    padding: 1rem;
  }
`

const StyledIcon = styled(Icon)`
  fill: ${(props) => props.theme.colors.text};
  margin-right: 0.5rem;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
  }
  &:hover {
    fill: ${(props) => props.theme.colors.primary};
  }
  &:active {
    fill: ${(props) => props.theme.colors.primary};
  }
  &:focus {
    fill: ${(props) => props.theme.colors.primary};
  }
`

const StyledH2 = styled(H2)`
  margin-bottom: 0.5rem;
  font-family: serif;
`

const StyledCardList = styled(TitleCardList)`
  margin-right: 4rem;
  max-width: 624px;
  border: 1px solid ${(props) => props.theme.colors.text};
  box-shadow: ${(props) => props.theme.colors.cardBoxShadow};
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    margin-right: 0rem;
    max-width: 100%;
  }
`

const StyledCalloutBanner = styled(CalloutBanner)`
  margin: 8rem 0 4rem;
  padding: 0rem 4rem;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    margin-bottom: 4rem;
    padding: 2rem;
  }
`

const ChangeContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  min-height: 33px; /* prevents jump when price loads*/
`

const Change = styled.div`
  font-size: 24px;
  line-height: 140%;
  color: ${(props) =>
    props.isNegativeChange
      ? props.theme.colors.success
      : props.theme.colors.fail300};
`

const ChangeTime = styled.span`
  font-size: 16px;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: 0.04em;
  margin-left: 0.5rem;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.text300};
`

const StatRow = styled.div`
  display: flex;
  flex-direction: column;
`

const tooltipContent = (
  <div>
    <Translation id="data-provided-by" />{" "}
    <Link to="https://www.coingecko.com/en/api">coingecko.com</Link>
  </div>
)

const HomePage = ({ data }) => {
  const intl = useIntl()
  const [isModalOpen, setModalOpen] = useState(false)
  const [activeCode, setActiveCode] = useState(0)
  const [ethPrice, setEthPrice] = useState({
    currentPriceUSD: 0,
    percentChangeUSD: 0,
    hasError: false,
  })
  const [valueLocked, setValueLocked] = useState({
    total: 0,
    percentChange: 0,
    hasError: false,
  })
  const [nodes, setNodes] = useState({
    total: 0,
    percentChange: 0,
    hasError: false,
  })
  const [txns, setTxns] = useState({
    countToday: 0,
    percentChange: 0,
    hasError: false,
  })

  useEffect(() => {
    // Fetch ETH Price - Coin Gecko
    const fetchPrice = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd&include_24hr_change=true"
        )
        const { usd, usd_24h_change } = response.data.ethereum
        setEthPrice({
          currentPriceUSD: usd,
          percentChangeUSD: +usd_24h_change.toFixed(2),
          hasError: false,
        })
      } catch (error) {
        console.error(error)
        setEthPrice({
          hasError: true,
        })
      }
    }
    fetchPrice()

    // Fetch Ethereum Node data - Etherscan.io (Serverless lambda function)
    const fetchNodes = async () => {
      try {
        const response = await axios.get("/.netlify/functions/etherscan")
        const { data } = response
        let total = 0
        for (const country of data) {
          total += country.value
        }
        setNodes({
          total,
          hasError: false,
        })
      } catch (error) {
        console.error(error)
        setNodes({
          hasError: true,
        })
      }
    }
    fetchNodes()

    // Fetch Total Value Locked (TVL) in DeFi - DeFi Pulse (Serverless lambda function)
    const fetchTotalValueLocked = async () => {
      try {
        const responseAll = await axios.get("/.netlify/functions/defipulse-all")
        const responseOther = await axios.get(
          "/.netlify/functions/defipulse-other"
        )
        const { data: dataAll } = responseAll
        const { data: dataOther } = responseOther
        // Subtract most recent value (in USD) locked in Lightning Network (index 0)
        const tvlEthereum = dataAll.All.total - dataOther[0].tvlUSD
        setValueLocked({
          total: tvlEthereum,
          hasError: false,
        })
      } catch (error) {
        console.error(error)
        setValueLocked({
          hasError: true,
        })
      }
    }
    fetchTotalValueLocked()

    // Fetch Last 24hr Transaction Count - Coinmetrics.io (Serverless lambda function)
    const fetchTxnCount = async () => {
      try {
        const response = await axios.get("/.netlify/functions/coinmetrics")
        const { series } = response.data.metricData
        const countYesterday = +series[series.length - 2].values[0]
        const countToday = +series[series.length - 1].values[0]
        setTxns({
          countToday,
          percentChange: (
            ((countToday - countYesterday) / countYesterday) *
            100
          ).toFixed(2),
          deltaChange: countToday - countYesterday,
          hasError: false,
        })
      } catch (error) {
        console.error(error)
        setTxns({
          hasError: true,
        })
      }
    }
    fetchTxnCount()
  }, [])

  const toCommaString = (num) => {
    // Takes a number and returns a string with thousand-separating commas
    const rgx = /(\d+)(\d{3})/
    let numString = num.toString()
    while (rgx.test(numString)) {
      numString = numString.replace(rgx, "$1,$2")
    }
    return numString
  }

  const toShortString = (num) => {
    // Takes a number and returns a string abbreviated to 2 decimals
    // with M/B/T indicator for millions/billions/trillions, respectively.
    // Returns comma string if not large enough for abbreviation
    return num >= 1e12
      ? // Trillions: 10^12
        (num / 1e12).toFixed(2) + " T"
      : num >= 1e9
      ? // Billions: 10^9
        (num / 1e9).toFixed(2) + " B"
      : num >= 1e6
      ? // Millions: 10^6
        (num / 1e6).toFixed(2) + "  M"
      : toCommaString(num)
  }

  // Calculate changes
  const isNegativeChange =
    ethPrice.percentChangeUSD && ethPrice.percentChangeUSD < 0

  const priceChange = ethPrice.percentChangeUSD
    ? isNegativeChange
      ? `${ethPrice.percentChangeUSD}% ↘`
      : `${ethPrice.percentChangeUSD}% ↗`
    : ``

  // Price loading handlers
  const isLoadingPrice = !ethPrice.currentPriceUSD
  let price = isLoadingPrice ? (
    <Translation id="loading" />
  ) : (
    <StatRow>
      <span>
        ${toCommaString(ethPrice.currentPriceUSD)}{" "}
        <Tooltip content={tooltipContent}>
          <StyledIcon name="info" />
        </Tooltip>
      </span>
      <ChangeContainer>
        <Change>
          {priceChange}
          <ChangeTime>
            <Translation id="last-24-hrs" />
          </ChangeTime>
        </Change>
      </ChangeContainer>
    </StatRow>
  )
  if (ethPrice.hasError) {
    price = <Translation id="loading-error-refresh" />
  }

  // TVL loading handlers
  const isLoadingTVL = !valueLocked.total
  let tvl = isLoadingTVL ? (
    <Translation id="loading" />
  ) : (
    <StatRow>
      <span>
        ${toShortString(valueLocked.total)}{" "}
        <Tooltip content={tooltipContent}>
          <StyledIcon name="info" />
        </Tooltip>
      </span>
    </StatRow>
  )
  if (valueLocked.hasError) {
    tvl = <Translation id="loading-error-refresh" />
  }

  // Node count loading handlers
  const isLoadingNodes = !nodes.total
  let totalNodes = isLoadingNodes ? (
    <Translation id="loading" />
  ) : (
    <StatRow>
      <span>
        {toCommaString(nodes.total)}{" "}
        <Tooltip content={tooltipContent}>
          <StyledIcon name="info" />
        </Tooltip>
      </span>
    </StatRow>
  )
  if (nodes.hasError) {
    totalNodes = <Translation id="loading-error-refresh" />
  }

  // Node count loading handlers
  const isLoadingTxns = !txns.countToday
  let txnCount = isLoadingTxns ? (
    <Translation id="loading" />
  ) : (
    <StatRow>
      <span>
        {toShortString(txns.countToday)}{" "}
        <Tooltip content={tooltipContent}>
          <StyledIcon name="info" />
        </Tooltip>
      </span>
    </StatRow>
  )
  if (txns.hasError) {
    txnCount = <Translation id="loading-error-refresh" />
  }

  const toggleCodeExample = (id) => {
    setActiveCode(id)
    setModalOpen(true)
  }

  const cards = [
    {
      image: data.robotfixed.childImageSharp.fixed,
      title: translateMessageId("page-index-get-started-wallet-title", intl),
      description: translateMessageId(
        "page-index-get-started-wallet-description",
        intl
      ),
      alt: translateMessageId("page-index-get-started-wallet-image-alt", intl),
      to: "/wallets/find-wallet/",
    },

    {
      image: data.ethfixed.childImageSharp.fixed,
      title: translateMessageId("page-index-get-started-eth-title", intl),
      description: translateMessageId(
        "page-index-get-started-eth-description",
        intl
      ),
      alt: translateMessageId("page-index-get-started-eth-image-alt", intl),
      to: "/get-eth/",
    },
    {
      image: data.dogefixed.childImageSharp.fixed,
      title: translateMessageId("page-index-get-started-dapps-title", intl),
      description: translateMessageId(
        "page-index-get-started-dapps-description",
        intl
      ),
      alt: translateMessageId("page-index-get-started-dapps-image-alt", intl),
      to: "/dapps/",
    },
    {
      image: data.devfixed.childImageSharp.fixed,
      title: translateMessageId("page-index-get-started-devs-title", intl),
      description: translateMessageId(
        "page-index-get-started-devs-description",
        intl
      ),
      alt: translateMessageId("page-index-get-started-devs-image-alt", intl),
      to: "/developers/",
    },
  ]

  const touts = [
    {
      image: data.docking.childImageSharp.fixed,
      alt: translateMessageId("page-index-tout-eth2-image-alt", intl),
      title: translateMessageId("page-index-tout-eth2-title", intl),
      description: translateMessageId("page-index-tout-eth2-description", intl),
      to: "/eth2/",
    },
    {
      image: data.infrastructurefixed.childImageSharp.fixed,
      alt: translateMessageId("page-index-tout-enterprise-image-alt", intl),
      title: translateMessageId("page-index-tout-enterprise-title", intl),
      description: translateMessageId(
        "page-index-tout-enterprise-description",
        intl
      ),
      to: "/enterprise/",
    },
    {
      image: data.enterprise.childImageSharp.fixed,
      alt: translateMessageId("page-index-tout-community-image-alt", intl),
      title: translateMessageId("page-index-tout-community-title", intl),
      description: translateMessageId(
        "page-index-tout-community-description",
        intl
      ),
      to: "/enterprise/",
    },
  ]

  const features = [
    {
      title: price,
      description: translateMessageId(
        "page-index-network-stats-eth-price-description",
        intl
      ),
      emoji: ":money_with_wings:",
      color: "background",
      explainer: translateMessageId(
        "page-index-network-stats-eth-price-explainer",
        intl
      ),
    },
    {
      title: txnCount,
      description: translateMessageId(
        "page-index-network-stats-tx-day-description",
        intl
      ),
      emoji: ":handshake:",
      color: "background",
      explainer: translateMessageId(
        "page-index-network-stats-tx-day-explainer",
        intl
      ),
    },
    {
      title: tvl,
      description: translateMessageId(
        "page-index-network-stats-value-defi-description",
        intl
      ),
      emoji: ":chart_with_upwards_trend:",
      color: "background",
      explainer: translateMessageId(
        "page-index-network-stats-value-defi-explainer",
        intl
      ),
    },
    {
      title: totalNodes,
      description: translateMessageId(
        "page-index-network-stats-nodes-description",
        intl
      ),
      emoji: ":computer:",
      color: "background",
      explainer: translateMessageId(
        "page-index-network-stats-nodes-explainer",
        intl
      ),
    },
  ]

  // TODO import code content from source file for easier maintenance
  // so we don't have to set here as plain text, e.g.
  // import { SimpleToken } from "../data/SimpleToken.sol"
  const codeExamples = [
    {
      title: translateMessageId(
        "page-index-developers-code-example-title-1",
        intl
      ),
      description: translateMessageId(
        "page-index-developers-code-example-description-1",
        intl
      ),
      codeLanguage: "language-solidity",
      code: `// SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;

// This is a smart contract - a program that can be deployed to the Ethereum blockchain.
contract SimpleToken {
    // An address is comparable to an email address - it's used to identify an account on Ethereum.
    address public owner;
    uint256 public constant token_supply = 1000000000000;

    // A mapping is essentially a hash table data structure.
    // This mapping assigns an unsigned integer (the token balance) to an address (the token holder).
    mapping (address => uint) public balances;


  // When 'SimpleToken' contract is deployed:
  // 1. set the deploying address as the owner of the contract
  // 2. set the token balance of the owner to the total token supply
    constructor() {
        owner = msg.sender;
        balances[owner] = token_supply;
    }

    // Sends an amount of tokens from any caller to any address.
    function transfer(address receiver, uint amount) public {
        // The sender must have enough tokens to send
        require(amount <= balances[msg.sender], "Insufficient balance.");

        // Adjusts token balances of the two addresses
        balances[msg.sender] -= amount;
        balances[receiver] += amount;
    }
}
      `,
    },
    {
      title: translateMessageId(
        "page-index-developers-code-example-title-2",
        intl
      ),
      description: translateMessageId(
        "page-index-developers-code-example-description-2",
        intl
      ),
      codeLanguage: "language-javascript",
      code: `const ethers = require("ethers");

// Create a wallet instance from a mnemonic...
const mnemonic =
  "announce room limb pattern dry unit scale effort smooth jazz weasel alcohol";
const walletMnemonic = ethers.Wallet.fromMnemonic(mnemonic);

// ...or from a private key
const walletPrivateKey = new ethers.Wallet(walletMnemonic.privateKey);

// ...or create a wallet from a random private key
const randomWallet = ethers.Wallet.createRandom();

walletMnemonic.address;
// '0x71CB05EE1b1F506fF321Da3dac38f25c0c9ce6E1'

// The internal cryptographic components
walletMnemonic.privateKey;
// '0x1da6847600b0ee25e9ad9a52abbd786dd2502fa4005dd5af9310b7cc7a3b25db'
walletMnemonic.publicKey;
// '0x04b9e72dfd423bcf95b3801ac93f4392be5ff22143f9980eb78b3a860c4843bfd04829ae61cdba4b3b1978ac5fc64f5cc2f4350e35a108a9c9a92a81200a60cd64'

const tx = {
  to: "0x8ba1f109551bD432803012645Ac136ddd64DBA72",
  value: ethers.utils.parseEther("1.0"),
};

// Sign a transaction
walletMnemonic.signTransaction(tx);
// { Promise: '0xf865808080948ba1f109551bd432803012645ac136ddd64dba72880de0b6b3a7640000801ca0918e294306d177ab7bd664f5e141436563854ebe0a3e523b9690b4922bbb52b8a01181612cec9c431c4257a79b8c9f0c980a2c49bb5a0e6ac52949163eeb565dfc' }

// Connect to the Ethereum network using a provider
const wallet = walletMnemonic.connect(provider);

// Query the network
wallet.getBalance();
// { Promise: { BigNumber: "42" } }
wallet.getTransactionCount();
// { Promise: 0 }

// Send ether
wallet.sendTransaction(tx);

// Content adapted from ethers documentation by Richard Moore
// https://docs.ethers.io/v5/api/signer/#Wallet
// https://github.com/ethers-io/ethers.js/blob/master/docs/v5/api/signer/README.md#methods
// Content is licensed under the Creative Commons License:
// https://choosealicense.com/licenses/cc-by-4.0/      
      `,
    },
    {
      title: translateMessageId(
        "page-index-developers-code-example-title-3",
        intl
      ),
      description: translateMessageId(
        "page-index-developers-code-example-description-3",
        intl
      ),
      codeLanguage: "language-solidity",
      code: `// SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;

// This is a smart contract - a program that can be deployed to the Ethereum blockchain.
contract SimpleDomainRegistry {

    address public owner;
    // Hypothetical cost to register a domain name
    uint constant public DOMAIN_NAME_COST = 1 ether;

    // A mapping is essentially a hash table data structure.
    // This mapping assigns an address (the domain holder) to a string (the domain name).
    mapping (string => address) public domainNames;


  // When 'SimpleDomainRegistry' contract is deployed,
  // set the deploying address as the owner of the contract.
    constructor() {
        owner = msg.sender;
    }

    // Registers a domain name (if not already registerd)
    function register(string memory domainName) public payable {
        require(msg.value >= DOMAIN_NAME_COST, "Insufficient amount.");
        require(domainNames[domainName] == address(0), "Domain name already registered.");
        domainNames[domainName] = msg.sender;
    }

    // Transfers a domain name to another address
    function transfer(address receiver, string memory domainName) public {
        require(domainNames[domainName] == msg.sender, "Only the domain name owner can transfer.");
        domainNames[domainName] = receiver;
    }

    // Withdraw funds from contract
    function withdraw() public {
        require(msg.sender == owner, "Only the contract owner can withdraw.");
        msg.sender.transfer(address(this).balance);
    }
}
      `,
    },
  ]

  return (
    <Page>
      <PageMetadata
        title={translateMessageId("page-index-meta-title", intl)}
        description={translateMessageId("page-index-meta-description", intl)}
      />
      <Hero
        fluid={data.hero.childImageSharp.fluid}
        alt={translateMessageId("page-index-hero-image-alt", intl)}
        loading="eager"
      />
      <H1>
        <Translation id="page-index-title" />
      </H1>
      <StyledContent>
        <Header>
          <Description>
            <Translation id="page-index-description" />
          </Description>
          <Morpher />
        </Header>
      </StyledContent>
      <StyledGrayContainer>
        <StyledContent>
          <IntroRow>
            <IntroLeftColumn>
              <H2>
                <Translation id="page-index-get-started" />
              </H2>
              <Subtitle>
                <Translation id="page-index-get-started-description" />
              </Subtitle>
            </IntroLeftColumn>
            <ImageContainer>
              <IntroImage
                fluid={data.hackathon.childImageSharp.fluid}
                alt={translateMessageId(
                  "page-index-get-started-image-alt",
                  intl
                )}
              />
            </ImageContainer>
          </IntroRow>
          <StyledCardContainer>
            {cards.map((card, idx) => {
              return (
                <StyledCard
                  key={idx}
                  title={card.title}
                  description={card.description}
                  to={card.to}
                  image={card.image}
                  alt={card.alt}
                ></StyledCard>
              )
            })}
          </StyledCardContainer>
        </StyledContent>
      </StyledGrayContainer>
      <EthereumIntroContainer>
        <RowReverse>
          <FeatureContent>
            <StyledH2>
              <Translation id="page-index-what-is-ethereum" />
            </StyledH2>
            <Subtitle>
              <Translation id="page-index-what-is-ethereum-description" />
            </Subtitle>
            <div>
              <ButtonLink to="/what-is-ethereum/">
                <Translation id="page-index-what-is-ethereum-button" />
              </ButtonLink>
            </div>
          </FeatureContent>
          <ImageContainer>
            <FeatureImage
              fluid={data.ethereum.childImageSharp.fluid}
              alt={translateMessageId(
                "page-index-what-is-ethereum-image-alt",
                intl
              )}
            />
          </ImageContainer>
        </RowReverse>
      </EthereumIntroContainer>
      <FinanceContainer>
        <Row>
          <FeatureContent>
            <LeftColumnContent>
              <StyledH2>
                <Translation id="page-index-defi" />
              </StyledH2>
              <Subtitle>
                <Translation id="page-index-defi-description" />
              </Subtitle>
              <div>
                <ButtonLink to="/dapps/">
                  <Translation id="page-index-defi-button" />
                </ButtonLink>
              </div>
            </LeftColumnContent>
          </FeatureContent>
          <ImageContainer>
            <FeatureImage
              fluid={data.impact.childImageSharp.fluid}
              alt={translateMessageId("page-index-defi-image-alt", intl)}
            />
          </ImageContainer>
        </Row>
      </FinanceContainer>

      <InternetContainer>
        <RowReverse>
          <FeatureContent>
            <LeftColumnContent>
              <StyledH2>
                <Translation id="page-index-internet" />
              </StyledH2>
              <Subtitle>
                <Translation id="page-index-internet-description" />
              </Subtitle>
              <ButtonRow>
                <ButtonLink to="/dapps/">
                  <Translation id="page-index-internet-button" />
                </ButtonLink>
                <StyledButtonLink isSecondary to="/wallets/">
                  <Translation id="page-index-internet-secondary-button" />
                </StyledButtonLink>
              </ButtonRow>
            </LeftColumnContent>
          </FeatureContent>
          <ImageContainer>
            <FeatureImage
              fluid={data.future.childImageSharp.fluid}
              alt={translateMessageId("page-index-internet-image-alt", intl)}
            />
          </ImageContainer>
        </RowReverse>
      </InternetContainer>
      <DeveloperContainer>
        <CodeboxModal
          isOpen={isModalOpen}
          setIsOpen={setModalOpen}
          title={codeExamples[activeCode].title}
        >
          <Codeblock
            codeLanguage={codeExamples[activeCode].codeLanguage}
            allowCollapse={false}
          >
            {codeExamples[activeCode].code}
          </Codeblock>
        </CodeboxModal>
        <FeatureContent>
          <LeftColumnContent>
            <StyledH2>
              <Translation id="page-index-developers" />
            </StyledH2>
            <Subtitle>
              <Translation id="page-index-developers-description" />
            </Subtitle>
            <ButtonRow>
              <ButtonLink to="/developers/">
                <Translation id="page-index-developers-button" />
              </ButtonLink>
            </ButtonRow>
          </LeftColumnContent>
        </FeatureContent>
        <Content>
          <StyledCardList
            content={codeExamples}
            limit={5}
            clickHandler={toggleCodeExample}
            header="Code examples"
            icon="code"
            isCode
          />
        </Content>
      </DeveloperContainer>
      <StyledGrayContainer>
        <StyledContent>
          <H2>
            <Translation id="page-index-network-stats-title" />
          </H2>
          <Subtitle>
            <Translation id="page-index-network-stats-subtitle" />
          </Subtitle>
        </StyledContent>
        <StatsBoxGrid items={features} />
      </StyledGrayContainer>
      <StyledContent>
        <H2>
          <Translation id="page-index-touts-header" />
        </H2>
      </StyledContent>
      <StyledContent>
        <StyledCardContainer>
          {touts.map((tout, idx) => {
            return (
              <Tout
                key={idx}
                title={tout.title}
                description={tout.description}
                to={tout.to}
                image={tout.image}
              ></Tout>
            )
          })}
        </StyledCardContainer>
        <StyledCalloutBanner
          title={translateMessageId(
            "page-index-contribution-banner-title",
            intl
          )}
          description={translateMessageId(
            "page-index-contribution-banner-description",
            intl
          )}
          image={data.finance.childImageSharp.fluid}
          maxImageWidth={600}
          alt={translateMessageId(
            "page-index-contribution-banner-image-alt",
            intl
          )}
        >
          <ButtonRow>
            <ButtonLink to="/contributing/">
              <Translation id="page-index-contribution-banner-button" />
            </ButtonLink>
            <StyledButtonLink
              isSecondary
              to="https://github.com/ethereum/ethereum-org-website"
            >
              <StyledIcon name="github" /> GitHub
            </StyledButtonLink>
          </ButtonRow>
        </StyledCalloutBanner>
      </StyledContent>
    </Page>
  )
}

export default HomePage

export const query = graphql`
  query {
    hero: file(relativePath: { eq: "home/hero.png" }) {
      childImageSharp {
        fluid(maxWidth: 1440) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ethereum: file(relativePath: { eq: "what-is-ethereum.png" }) {
      childImageSharp {
        fluid(maxWidth: 1440) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    enterprise: file(relativePath: { eq: "enterprise-eth.png" }) {
      childImageSharp {
        fixed(width: 320) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    dogefixed: file(relativePath: { eq: "doge-computer.png" }) {
      childImageSharp {
        fixed(width: 320) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    robotfixed: file(relativePath: { eq: "wallet-cropped.png" }) {
      childImageSharp {
        fixed(width: 320) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    ethfixed: file(relativePath: { eq: "eth.png" }) {
      childImageSharp {
        fixed(width: 320) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    devfixed: file(relativePath: { eq: "developers-eth-blocks.png" }) {
      childImageSharp {
        fixed(width: 320) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    future: file(relativePath: { eq: "future_transparent.png" }) {
      childImageSharp {
        fluid(maxWidth: 1440) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    impact: file(relativePath: { eq: "impact_transparent.png" }) {
      childImageSharp {
        fluid(maxWidth: 1440) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    finance: file(relativePath: { eq: "finance_transparent.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    hackathon: file(relativePath: { eq: "hackathon_transparent.png" }) {
      childImageSharp {
        fluid(maxWidth: 1440) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    infrastructurefixed: file(
      relativePath: { eq: "infrastructure_transparent.png" }
    ) {
      childImageSharp {
        fixed(width: 320) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    docking: file(relativePath: { eq: "eth2/docking.png" }) {
      childImageSharp {
        fixed(width: 320) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
