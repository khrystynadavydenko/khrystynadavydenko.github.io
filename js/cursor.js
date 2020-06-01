
        // idea from
        // https://codepen.io/clementGir/pen/RQqvQx
        // but fixed bug of disapearing cursor on long scroll 
        // idea of js implementation from 
        // https://tympanus.net/codrops/2019/01/31/custom-cursor-effects/

        // set the starting position of the cursor outside of the screen
        let clientX = -100;
        let clientY = -100;

        const $bigBall = document.querySelector('.cursor__ball--big');
        const $smallBall = document.querySelector('.cursor__ball--small');
        const $hoverables = document.querySelectorAll('.hoverable');

        const initCursor = () => {
            // add listener to track the current mouse position
            document.addEventListener("mousemove", e => {
                clientX = e.clientX;
                clientY = e.clientY;
            });

            // transform the innerCursor to the current mouse position
            // use requestAnimationFrame() for smooth performance
            const render = () => {
                //innerCursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
                // if you are already using TweenMax in your project, you might as well
                // use TweenMax.set() instead
                TweenMax.set($smallBall, {
                    x: clientX - 5,
                    y: clientY - 7
                });

                TweenMax.to($bigBall, .4, {
                    x: clientX - 15,
                    y: clientY - 15
                });

                requestAnimationFrame(render);
            };
            requestAnimationFrame(render);
        };

        initCursor();

        const initHovers = () => {

            // find the center of the link element and set stuckX and stuckY
            // these are needed to set the position of the noisy circle
            const handleMouseEnter = e => {
                /*                
                const navItem = e.currentTarget;
                const navItemBox = navItem.getBoundingClientRect();
                stuckX = Math.round(navItemBox.left + navItemBox.width / 2);
                stuckY = Math.round(navItemBox.top + navItemBox.height / 2); 
                */
                TweenMax.to($bigBall, .3, {
                    scale: 4
                });
                isStuck = true;
            };

            // reset isStuck on mouseLeave
            const handleMouseLeave = () => {
                TweenMax.to($bigBall, .3, {
                    scale: 1
                });
                isStuck = false;
            };

            // add event listeners to all items
            $hoverables.forEach(item => {
                item.addEventListener("mouseenter", handleMouseEnter);
                item.addEventListener("mouseleave", handleMouseLeave);
            });
        };

        initHovers();
  
