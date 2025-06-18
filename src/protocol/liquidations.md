# Liquidations

Loan liquidation is the process of closing a loan by repaying it with USH. A loan may be liquidated when a borrower's health factor drops below the minimum threshold. With Hyperstable, anyone is able to (partially) repay loans that fall below the minimum health factor.

In practice, this means bots will be actively monitoring all loans, looking for opportunities to liquidate.

The liquidator receives a preset liquidation reward as a percentage of the repaid USH debt and the borrower pays a liquidation fee to the protocol as a percentage of the remaining overcollateralization at the time of the liquidation.

The liquidation fee is a source of revenue for the protocol that first gets transferred to a safety buffer (one per vault). The safety buffer tracks a percentage of the total USH debt in the vault, safety buffer "overflow" gets distributed to `vePEG` (`PEG` lockers) in USH.

In the rare case where a liquidation is unprofitable for the liquidator who calls it (and the safety buffer has insufficient funds to cover the difference), an alternate liquidation process known as "redistribution" comes into play.

In this -edge case- scenario, the system makes the liquidator whole by drawing the required amount of collateral from the vault and redistributes the losses between all debtors in the system relative to their share of the collateral in the vault.
