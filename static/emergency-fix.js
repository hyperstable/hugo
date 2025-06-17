// Emergency Bootstrap loader
(function() {
    console.log('Emergency fix starting...');
    
    // Check if Bootstrap exists
    if (typeof bootstrap === 'undefined') {
        console.log('Bootstrap not found, injecting...');
        
        // Inject Bootstrap CSS
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css';
        document.head.appendChild(link);
        
        // Inject Bootstrap JS
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js';
        script.onload = function() {
            console.log('Bootstrap injected successfully!');
            
            // Now fix dropdowns
            fixDropdowns();
        };
        document.head.appendChild(script);
    } else {
        fixDropdowns();
    }
    
    function fixDropdowns() {
        console.log('Fixing dropdowns...');
        
        // Method 1: Fix existing collapse elements
        document.querySelectorAll('[data-bs-toggle="collapse"]').forEach(el => {
            if (typeof bootstrap !== 'undefined') {
                new bootstrap.Collapse(el, { toggle: false });
            }
        });
        
        // Method 2: Manual dropdown handler
        document.querySelectorAll('a[href^="#"]').forEach(link => {
            const target = document.querySelector(link.getAttribute('href'));
            if (target && target.classList.contains('collapse')) {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    if (typeof bootstrap !== 'undefined') {
                        bootstrap.Collapse.getOrCreateInstance(target).toggle();
                    } else {
                        // Manual toggle
                        target.classList.toggle('show');
                        target.style.display = target.classList.contains('show') ? 'block' : 'none';
                    }
                });
            }
        });
    }
})();

// Run immediately and after load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        setTimeout(() => {
            if (typeof bootstrap === 'undefined') {
                location.reload(); // Last resort - reload once
            }
        }, 2000);
    });
}
