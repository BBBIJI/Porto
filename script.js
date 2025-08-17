    const ball = document.querySelector('.circle-container');
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      // Move the ball vertically based on scroll
      ball.style.transform = `translateY(${scrollY}px)`;
    });