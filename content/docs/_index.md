---
title: Hyperstable
type: docs
---

Hyperstable is a crypto-backed, over-collateralized and decentralized stablecoin that is designed to trade at one US dollar.

| |
|:------|:-----|
| **Borrowers** | Mint USH against supported Collateral Types |
| **Liquidity providers** |  Farm and earn PEG tokens by providing liquidity on AMM's like Curve and staking their LP tokens |
| **PEG holders** |  Lock their tokens into vePEG to earn 100% of protocol revenue generated via Interest and Liquidation fees, receive Incentives, Vote on Emissions and get protected from dilution via Rebases |

<style>
/* Dropdown styling */
.sidebar-dropdown button.btn {
    cursor: pointer !important;
    position: relative;
    padding-right: 30px !important;
}
.sidebar-dropdown button.btn::after {
    content: "▼";
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 0.7em;
    opacity: 0.5;
    transition: transform 0.3s;
}
.sidebar-dropdown.active button.btn::after {
    transform: translateY(-50%) rotate(-180deg);
}
.sidebar-submenu {
    transition: all 0.3s ease;
}
</style>

<script>
// Dropdown functionality for Hyperstable docs
(function() {
    'use strict';

    console.log('[Hyperstable] Initializing sidebar dropdowns...');

    function setupDropdowns() {
        const dropdowns = document.querySelectorAll('.sidebar-dropdown');

        if (dropdowns.length === 0) {
            console.log('[Hyperstable] No dropdowns found, retrying...');
            setTimeout(setupDropdowns, 500);
            return;
        }

        console.log(`[Hyperstable] Found ${dropdowns.length} dropdowns`);

        dropdowns.forEach((dropdown, index) => {
            const button = dropdown.querySelector('button.btn');
            const submenu = dropdown.querySelector('.sidebar-submenu');

            if (button && submenu && !button.hasAttribute('data-dropdown-initialized')) {
                // Mark as initialized to prevent duplicate handlers
                button.setAttribute('data-dropdown-initialized', 'true');

                // Set initial state
                submenu.style.display = 'none';
                dropdown.classList.remove('active');

                // Add click handler
                button.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();

                    const isOpen = submenu.style.display === 'block';

                    // Close all dropdowns
                    document.querySelectorAll('.sidebar-dropdown').forEach(dd => {
                        dd.classList.remove('active');
                        const sm = dd.querySelector('.sidebar-submenu');
                        if (sm) sm.style.display = 'none';
                    });

                    // Toggle current dropdown
                    if (!isOpen) {
                        submenu.style.display = 'block';
                        dropdown.classList.add('active');
                    }
                });

                console.log(`[Hyperstable] Initialized dropdown ${index}: ${button.textContent.trim()}`);
            }
        });

        // Auto-open current section
        const currentPath = window.location.pathname;
        document.querySelectorAll('.sidebar-nested-link').forEach(link => {
            if (link.href === window.location.href || currentPath.includes(link.pathname)) {
                const parentSubmenu = link.closest('.sidebar-submenu');
                const parentDropdown = link.closest('.sidebar-dropdown');

                if (parentSubmenu && parentDropdown) {
                    parentSubmenu.style.display = 'block';
                    parentDropdown.classList.add('active');
                    console.log('[Hyperstable] Auto-opened current section');
                }
            }
        });
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setupDropdowns);
    } else {
        // DOM already loaded
        setupDropdowns();
    }

    // Backup initialization after delay
    setTimeout(setupDropdowns, 1000);

    // Re-initialize if sidebar is dynamically loaded
    const observer = new MutationObserver(function(mutations) {
        if (document.querySelector('.sidebar-dropdown button:not([data-dropdown-initialized])')) {
            setupDropdowns();
        }
    });

    // Start observing
    if (document.querySelector('.sidebar-wrapper, #sidebar')) {
        observer.observe(document.querySelector('.sidebar-wrapper, #sidebar'), {
            childList: true,
            subtree: true
        });
    }
})();
</script>
