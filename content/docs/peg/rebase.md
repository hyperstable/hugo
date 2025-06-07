---
weight: 340
title: "Rebase"
icon: "article"
date: "2025-06-07T10:34:16+02:00"
lastmod: "2025-06-07T10:34:16+02:00"
draft: false
toc: false
katex: true
---
# Rebase

`vePEG` holders receive a rebase proportional to `PEG` emissions and to the ratio of `vePEG` to `PEG` supply, reducing vote power dilution for `vePEG`.

The weekly rebase amount is calculated with the following formula:

$$
w_{rb} = 0.5 w_e \left( 1 - \frac{s_{vePEG}}{s_{PEG}}\right)^2
$$

Here, the weekly rebase amount ($w_{rb}$) is proportional to the weekly emissions ($w_e$) and the ratio between locked and liquid `PEG` tokens. 
This rebase formula will reward `vePEG` holders most when locking rates decrease, incentivizing new lockers to step in. `vePEG` supply does not affect weekly emissions distributed to liquidity providers.
