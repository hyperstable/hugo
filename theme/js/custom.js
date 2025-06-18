// Function to ensure logo stays at top of sidebar
function ensureLogoAtTop() {
    const sidebarScrollbox = document.querySelector('.sidebar-scrollbox');
    const existingLogo = document.querySelector('.sidebar-logo');
    
    // If logo doesn't exist, add it
    if (sidebarScrollbox && !existingLogo) {
        const logoPath = (typeof path_to_root !== 'undefined' ? path_to_root : '') + 'logo.svg';
        
        const logoHtml = `
            <div class="sidebar-logo">
                <a href="${typeof path_to_root !== 'undefined' ? path_to_root : '/'}">
                    <img src="${logoPath}" alt="Hyperstable Logo">
                </a>
            </div>
        `;
        sidebarScrollbox.insertAdjacentHTML('afterbegin', logoHtml);
    }
    // If logo exists but is not first, move it to top
    else if (existingLogo && existingLogo.parentElement.firstElementChild !== existingLogo) {
        existingLogo.parentElement.insertBefore(existingLogo, existingLogo.parentElement.firstElementChild);
    }
}

// Try multiple times to ensure logo stays at top after TOC loads
document.addEventListener('DOMContentLoaded', function() {
    // Initial attempt
    ensureLogoAtTop();
    
    // Try again after short delay
    setTimeout(ensureLogoAtTop, 100);
    
    // Watch for changes to sidebar content
    const observer = new MutationObserver(function(mutations) {
        ensureLogoAtTop();
    });
    
    // Start observing the sidebar for changes
    const sidebar = document.querySelector('.sidebar-scrollbox');
    if (sidebar) {
        observer.observe(sidebar, { childList: true, subtree: true });
        
        // Stop observing after 2 seconds to prevent performance issues
        setTimeout(() => observer.disconnect(), 2000);
    }
});
