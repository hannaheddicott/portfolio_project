const background = document.getElementById('background');
        let xPos = 0;
        let yPos = 0;

        function animateBackground() {
            // Change these values to control the speed and direction
            xPos -= 1; // Move left
            yPos -= 0.5; // Move up

            // Update the background position
            background.style.backgroundPosition = `${xPos}px ${yPos}px`;

            // Repeat the animation
            requestAnimationFrame(animateBackground);
        }

        // Start the animation
        animateBackground();