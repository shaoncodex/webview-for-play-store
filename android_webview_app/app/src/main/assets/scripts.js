// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('WebView App initialized');
    
    // Add touch effect to all interactive elements
    const interactiveElements = document.querySelectorAll('a, button');
    
    interactiveElements.forEach(element => {
        element.addEventListener('touchstart', function() {
            this.classList.add('touch-active');
        });
        
        element.addEventListener('touchend', function() {
            this.classList.remove('touch-active');
        });
    });
    
    // Check if the app is running in a WebView
    const isInWebView = function() {
        const userAgent = navigator.userAgent.toLowerCase();
        return userAgent.indexOf('android') > -1;
    };
    
    // Custom behavior for when running in WebView
    if (isInWebView()) {
        console.log('Running in Android WebView');
        // You can add WebView-specific behavior here
    }
    
    // Handle internal navigation within the app
    const internalLinks = document.querySelectorAll('a[href$=".html"]');
    
    internalLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            console.log('Navigating to:', this.getAttribute('href'));
        });
    });
});
