document.addEventListener('DOMContentLoaded', function() {
    const mainContent = document.querySelector('.main-content');

    function adjustMainContentSize() {
        const width = window.innerWidth;

        // Adjust the height of the main content based on the viewport width
        if (width > 1600) {
            mainContent.style.height = '600px'; // Large screens
        } else if (width > 992) {
            mainContent.style.height = '500px'; // Medium screens
        } else if (width > 768) {
            mainContent.style.height = '400px'; // Small screens
        } else {
            mainContent.style.height = '300px'; // Extra small screens
        }
    }

    // Initial adjustment
    adjustMainContentSize();

    // Adjust size on window resize
    window.addEventListener('resize', adjustMainContentSize);
});