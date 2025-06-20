document.addEventListener('DOMContentLoaded', () => {
    const listItems = document.querySelectorAll('li');

    let lastScrollY = window.scrollY; // Initialize last scroll position
    let timeout;
// commit
    //commit-1
    //next commit
    window.addEventListener('scroll', () => {
        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(() => {
            const pointer = window.innerHeight / 2; // Middle of the screen

            listItems.forEach(item => {
                const itemRect = item.getBoundingClientRect();
                const itemMiddle = itemRect.top + itemRect.height / 2; // Correct calculation of itemMiddle

                // Highlight effect
                if (Math.abs(pointer - itemMiddle) < 100) { // Increased sensitivity
                    item.classList.add('highlight');
                } else {
                    item.classList.remove('highlight');
                }

                // Align left or right based on scroll direction
                if (window.scrollY > lastScrollY) {
                    // Scrolling down
                    item.classList.toggle('right-align', itemMiddle < pointer);
                    item.classList.toggle('left-align', itemMiddle >= pointer);
                } else {
                    // Scrolling up
                    item.classList.toggle('left-align', itemMiddle < pointer);
                    item.classList.toggle('right-align', itemMiddle >= pointer);
                }

                // Ensure only visible items are aligned
                if (itemRect.top < window.innerHeight && itemRect.bottom > 0) {
                    item.classList.add(itemMiddle < pointer ? 'left-align' : 'right-align');
                } else {
                    item.classList.remove('left-align', 'right-align');
                }
            });

            lastScrollY = window.scrollY; // Update last scroll position
        }, 100); // Throttle scroll events
    });
});
