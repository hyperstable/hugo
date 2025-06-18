# Introduction

Welcome to the Hyperstable documentation. This guide provides comprehensive technical information about our decentralized stablecoin protocol and its ecosystem.

## What is Hyperstable?

Hyperstable is a decentralized finance (DeFi) protocol that enables users to mint **USH**, an over-collateralized stablecoin designed to maintain a stable value relative to one US dollar. The protocol combines battle-tested DeFi mechanics with innovative features to create a robust and sustainable stablecoin ecosystem.

## Key Features

### USH Stablecoin

- **Decentralized and crypto-backed**: USH is backed by a diverse set of cryptocurrency collateral
- **Over-collateralized**: All USH in circulation is backed by collateral worth more than the minted amount
- **Stable by design**: Multiple mechanisms work together to maintain USH's peg to $1

### Collateral System

- **Multiple collateral types**: Support for HYPE, wstHYPE, uBTC, and uETH
- **Isolated vaults**: Each collateral type has its own risk parameters
- **Dynamic interest rates**: Rates adjust based on utilization, peg stability, and protocol parameters

### PEG Token & Governance

- **Dual token model**: PEG for liquidity incentives, vePEG for governance
- **Vote escrow mechanism**: Lock PEG to receive vePEG and participate in governance
- **Revenue sharing**: vePEG holders earn 100% of protocol revenue from interest and liquidation fees
- **Anti-dilution rebases**: vePEG holders are protected from supply dilution

### Liquidity & Incentives

- **Gauge voting**: vePEG holders direct PEG emissions to liquidity pools
- **Farming rewards**: Liquidity providers earn PEG tokens
- **Bribe marketplace**: External incentives to influence gauge votes
- **Sustainable emissions**: Carefully designed tokenomics for long-term stability

## How It Works

1. **Mint USH**: Deposit supported collateral to mint USH stablecoins
2. **Manage positions**: Monitor health factors and manage collateralization ratios
3. **Provide liquidity**: Supply liquidity to USH pairs and earn PEG rewards
4. **Lock for governance**: Convert PEG to vePEG to vote and earn protocol revenue
5. **Direct emissions**: Vote on gauges to direct liquidity incentives

## Architecture Overview

The Hyperstable protocol consists of several interconnected components:

- **Core Protocol**: USH minting, collateral management, and liquidations
- **PEG Tokenomics**: Emission scheduling, vote escrow, and rebasing
- **Gauge System**: Liquidity incentives and voting mechanisms
- **Risk Management**: Interest rate models, liquidation system, and safety buffers

## Getting Started

This documentation is organized into four main sections:

- **[Protocol](./protocol/ush.md)**: Core mechanics of USH, minting, and risk management
- **[PEG](./peg/token.md)**: Tokenomics, distribution, and governance features
- **[Security](./security/audits.md)**: Audit reports and security practices
- **[Contracts](./contracts/hyperevm.md)**: Deployed contract addresses and technical details

Whether you're a user looking to mint USH, a liquidity provider seeking rewards, or a developer building on Hyperstable, this documentation provides all the information you need to understand and interact with the protocol.

## Community & Support

Join our community to stay updated and get support:

- Discord: [Join our server](https://discord.hyperstable.xyz/)
- Twitter: [@HyperstableX](https://x.com/hyperstableX)
- GitHub: [hyperstable](https://github.com/hyperstable)

---

*Hyperstable is an experimental protocol. Users should understand the risks involved with DeFi protocols, including smart contract risk, liquidation risk, and potential loss of funds. Always do your own research.*
