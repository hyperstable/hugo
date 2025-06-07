---
weight: 140
title: "Lock"
icon: "article"
date: "2025-06-06T14:49:59+02:00"
lastmod: "2025-06-06T14:49:59+02:00"
draft: false
toc: false
---
# Lock PEG

Hyperstable uses two tokens to manage its utility and governance:

- `PEG` (ERC-20), is distributed to liquidity providers through emissions

- `vePEG` (ERC-721), is used for governance, to vote on emissions, to earn all protocol revenue generated via interest and receive incentives. `vePEG` is protected from dilution via rebases.

## Vote Escrow

The "ve" in ` vePEG` stands for : vote escrow, which is a mechanism used in decentralized governance to ensure fairness and transparency in decision-making. Any `PEG` holder can vote escrow their tokens and receive `vePEG` in exchange. With Hyperstable, we call this locking. 

## Locking

The maximum lock period is 1 year, following the linear relationship shown below:

- 100 `PEG` locked for 1 year will become 100 `vePEG`
- 100 `PEG` locked for 3 months will become 25 `vePEG`

The longer the locking time, the higher the voting power of the underlying locked balance. Additional `PEG` tokens can be added to a Lock at any time. 

Additionally, Hyperstable locks can be set into auto-max lock, which are treated by the protocol as being locked for the maximum duration of 1 year, and their voting power does not decay. The auto-max lock feature can be turned on and off for each lock.
