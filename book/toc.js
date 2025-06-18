// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item affix "><a href="introduction.html">Introduction</a></li><li class="chapter-item affix "><li class="spacer"></li><li class="chapter-item affix "><li class="part-title">Protocol</li><li class="chapter-item "><a href="protocol/ush.html"><strong aria-hidden="true">1.</strong> USH</a></li><li class="chapter-item "><a href="protocol/mint.html"><strong aria-hidden="true">2.</strong> Mint</a></li><li class="chapter-item "><a href="protocol/farm.html"><strong aria-hidden="true">3.</strong> Farm</a></li><li class="chapter-item "><a href="protocol/lock.html"><strong aria-hidden="true">4.</strong> Lock</a></li><li class="chapter-item "><a href="protocol/vote.html"><strong aria-hidden="true">5.</strong> Vote</a></li><li class="chapter-item "><a href="protocol/bonus.html"><strong aria-hidden="true">6.</strong> Bonus</a></li><li class="chapter-item "><a href="protocol/gauge.html"><strong aria-hidden="true">7.</strong> Gauge</a></li><li class="chapter-item "><a href="protocol/incentivize.html"><strong aria-hidden="true">8.</strong> Incentive</a></li><li class="chapter-item "><a href="protocol/interest_rates.html"><strong aria-hidden="true">9.</strong> Interest rate</a></li><li class="chapter-item "><a href="protocol/liquidations.html"><strong aria-hidden="true">10.</strong> Liquidations</a></li><li class="chapter-item "><a href="protocol/health_factor.html"><strong aria-hidden="true">11.</strong> Health factor</a></li><li class="chapter-item "><a href="protocol/collateral_types.html"><strong aria-hidden="true">12.</strong> Collateral types</a></li><li class="chapter-item affix "><li class="part-title">PEG</li><li class="chapter-item "><a href="peg/token.html"><strong aria-hidden="true">13.</strong> Token</a></li><li class="chapter-item "><a href="peg/distribution.html"><strong aria-hidden="true">14.</strong> Distribution</a></li><li class="chapter-item "><a href="peg/emission.html"><strong aria-hidden="true">15.</strong> Emissions</a></li><li class="chapter-item "><a href="peg/rebase.html"><strong aria-hidden="true">16.</strong> Rebase</a></li><li class="chapter-item affix "><li class="part-title">Security</li><li class="chapter-item "><a href="security/audits.html"><strong aria-hidden="true">17.</strong> Audits</a></li><li class="chapter-item "><a href="security/bug_bounty.html"><strong aria-hidden="true">18.</strong> Bug bounty</a></li><li class="chapter-item affix "><li class="part-title">Contracts</li><li class="chapter-item "><a href="contracts/hyperevm.html"><strong aria-hidden="true">19.</strong> HyperEVM</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
