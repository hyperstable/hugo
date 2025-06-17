console.log('Main.js loaded!');

// Dropdown fix for sidebar
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded - fixing dropdowns...');
    
    function initSidebarDropdowns() {
        const dropdownButtons = document.querySelectorAll('.sidebar-dropdown button.btn');
        console.log('Found dropdown buttons:', dropdownButtons.length);
        
        if (dropdownButtons.length === 0) {
            console.log('No dropdown buttons found, retrying in 500ms...');
            setTimeout(initSidebarDropdowns, 500);
            return;
        }
        
        dropdownButtons.forEach((button, index) => {
            console.log(`Setting up dropdown ${index}: ${button.textContent.trim()}`);
            
            const dropdown = button.closest('.sidebar-dropdown');
            const submenu = dropdown.querySelector('.sidebar-submenu');
            
            if (submenu) {
                // Remove any existing handlers
                button.replaceWith(button.cloneNode(true));
                const newButton = dropdown.querySelector('button.btn');
                
                // Add click handler
                newButton.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    console.log('Clicked:', this.textContent.trim());
                    
                    // Toggle this dropdown
                    if (submenu.style.display === 'block') {
                        submenu.style.display = 'none';
                        dropdown.classList.remove('active');
                    } else {
                        // Close all other dropdowns
                        document.querySelectorAll('.sidebar-submenu').forEach(menu => {
                            menu.style.display = 'none';
                        });
                        document.querySelectorAll('.sidebar-dropdown').forEach(dd => {
                            dd.classList.remove('active');
                        });
                        
                        // Open this one
                        submenu.style.display = 'block';
                        dropdown.classList.add('active');
                    }
                });
                
                // Set initial state
                submenu.style.display = 'none';
            }
        });
        
        // Add styles for visual feedback
        if (!document.getElementById('dropdown-styles')) {
            const style = document.createElement('style');
            style.id = 'dropdown-styles';
            style.textContent = `
                .sidebar-dropdown button.btn {
                    cursor: pointer !important;
                    position: relative;
                    padding-right: 25px !important;
                }
                .sidebar-dropdown button.btn::after {
                    content: '▼';
                    position: absolute;
                    right: 10px;
                    top: 50%;
                    transform: translateY(-50%);
                    transition: transform 0.3s;
                    font-size: 0.7em;
                    opacity: 0.6;
                }
                .sidebar-dropdown.active button.btn::after {
                    transform: translateY(-50%) rotate(-180deg);
                }
                .sidebar-dropdown.active button.btn {
                    background-color: rgba(0,0,0,0.05);
                    font-weight: 600;
                }
                .sidebar-submenu {
                    display: none;
                }
            `;
            document.head.appendChild(style);
        }
        
        // Auto-open current section
        const currentPath = window.location.pathname;
        document.querySelectorAll('.sidebar-nested-link').forEach(link => {
            if (link.href === window.location.href) {
                const submenu = link.closest('.sidebar-submenu');
                const dropdown = link.closest('.sidebar-dropdown');
                if (submenu && dropdown) {
                    submenu.style.display = 'block';
                    dropdown.classList.add('active');
                    console.log('Auto-opened current section');
                }
            }
        });
    }
    
    // Initialize dropdowns
    initSidebarDropdowns();
});

// Also try on window load
window.addEventListener('load', function() {
    console.log('Window loaded - checking dropdowns again...');
    if (document.querySelectorAll('.sidebar-dropdown.active').length === 0) {
        console.log('No active dropdowns found, reinitializing...');
        // Trigger DOMContentLoaded handler again
        document.dispatchEvent(new Event('DOMContentLoaded'));
    }
});
