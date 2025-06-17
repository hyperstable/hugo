console.log('Sidebar fix loading...');

document.addEventListener('DOMContentLoaded', function() {
    console.log('Fixing custom sidebar dropdowns...');
    
    // Find all sidebar dropdown buttons
    const dropdownButtons = document.querySelectorAll('.sidebar-dropdown button.btn');
    console.log('Found dropdown buttons:', dropdownButtons.length);
    
    dropdownButtons.forEach((button, index) => {
        console.log(`Setting up dropdown ${index}: ${button.textContent.trim()}`);
        
        // Get the submenu
        const dropdown = button.closest('.sidebar-dropdown');
        const submenu = dropdown.querySelector('.sidebar-submenu');
        
        if (submenu) {
            // Add click handler
            button.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                console.log('Clicked:', button.textContent.trim());
                
                // Toggle active class on dropdown
                dropdown.classList.toggle('active');
                
                // Toggle visibility of submenu
                if (submenu.style.display === 'block') {
                    submenu.style.display = 'none';
                } else {
                    // Close other dropdowns first
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
            
            // Set initial state (closed)
            submenu.style.display = 'none';
        }
    });
    
    // Open current section if on a child page
    const currentPath = window.location.pathname;
    console.log('Current path:', currentPath);
    
    document.querySelectorAll('.sidebar-nested-link').forEach(link => {
        if (link.href === window.location.href) {
            console.log('Found current page:', link.textContent);
            const submenu = link.closest('.sidebar-submenu');
            const dropdown = link.closest('.sidebar-dropdown');
            if (submenu && dropdown) {
                submenu.style.display = 'block';
                dropdown.classList.add('active');
            }
        }
    });
});

// Also add some CSS to show active state
const style = document.createElement('style');
style.textContent = `
    .sidebar-dropdown button.btn {
        cursor: pointer;
        width: 100%;
        text-align: left;
        border: none;
        background: none;
        padding: 0.5rem 1rem;
        transition: background-color 0.2s;
    }
    .sidebar-dropdown button.btn:hover {
        background-color: rgba(0,0,0,0.05);
    }
    .sidebar-dropdown.active button.btn {
        background-color: rgba(0,0,0,0.1);
        font-weight: 600;
    }
    .sidebar-submenu {
        transition: all 0.3s ease;
        overflow: hidden;
    }
    .sidebar-dropdown button.btn::after {
        content: '▼';
        float: right;
        transition: transform 0.3s;
        font-size: 0.8em;
    }
    .sidebar-dropdown.active button.btn::after {
        transform: rotate(-180deg);
    }
`;
document.head.appendChild(style);
