---
weight: 190
title: "Interest rates"
date: "2025-06-07T09:43:50+02:00"
lastmod: "2025-06-07T09:43:50+02:00"
draft: false
toc: false
katex: true
---

Interest charged to borrowers is obtained as the sum of the following components:

1. Manual rate ($r_m$)
1. Vault utilization rate ($r_u$)
2. Peg rate ($r_p$)

### Manual rate

The manual interest rate is static and set by the protocol as a constant value and represents the minimum interest rate that the protocol charges.

### Vault utilization rate

Hyperstable uses Morpho's AdaptiveCurve interest rate model at the vault level, which is engineered to maintain the ratio of the borrowed asset (USH) over the supplied asset (collateral), close to a preselected target. When the (vault specific) collateral ratio is above the set target, the interest rate automatically trends towards zero.

### Peg rate

The purpose of the peg based interest rate is to manage supply and demand for USH and keep the stablecoin trading at one dollar. If USH is trading above one dollar, the interest rate is lowered. If USH is trading below one dollar, the interest rate is raised. Just like the vault collateralization rate, under normal circumstances (when USH trading at or above one dollar, aka at ''peg''), the peg rate trends towards zero.

### Total interest rate

The total interest rate ($r$) charged to borrowers is the sum of the above.

$$
r = r_m + r_u + r_p
$$
