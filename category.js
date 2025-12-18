    
        document.addEventListener('DOMContentLoaded', () => {
            const navItems = document.querySelectorAll('.nav-item');

            navItems.forEach(item => {
                item.addEventListener('mouseenter', () => {
                    const dropdown = item.querySelector('.dropdown');
                    dropdown.style.display = 'block';
                });

                item.addEventListener('mouseleave', () => {
                    const dropdown = item.querySelector('.dropdown');
                    dropdown.style.display = 'none';
                });
            });
        });
       // JavaScript (script.js)
document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('myVideo');
    const pauseBtn = document.getElementById('pauseBtn');
    const container = document.querySelector('.video-container');

    // Play video on hover
    container.addEventListener('mouseenter', function() {
        video.play();
    });

    // Pause video when mouse leaves
    container.addEventListener('mouseleave', function() {
        video.pause();
        pauseBtn.textContent = 'Pause'; // Reset button text
    });


    pauseBtn.addEventListener('click', function() {
        if (video.paused) {
            video.play();
            pauseBtn.textContent = 'Pause';
        } else {
            video.pause();
            pauseBtn.textContent = 'Play';
        }
    });
});