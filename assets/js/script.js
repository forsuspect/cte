function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  const menuToggle = document.getElementById('menuToggle');
  if (navLinks.classList.contains('active')) {
      closeMenu();
  } else {
      navLinks.style.display = 'flex';
      setTimeout(() => {
          navLinks.classList.add('active');
          menuToggle.textContent = '✖';
      }, 10);
  }
}

function closeMenu() {
  const navLinks = document.getElementById('navLinks');
  const menuToggle = document.getElementById('menuToggle');
  navLinks.classList.remove('active');
  setTimeout(() => {
      if (window.innerWidth <= 768) {
          navLinks.style.display = 'none';
      }
      menuToggle.textContent = '☰';
  }, 300);
}

window.addEventListener('resize', () => {
  const navLinks = document.getElementById('navLinks');
  if (window.innerWidth > 768) {
      navLinks.style.display = 'flex';
  } else if (!navLinks.classList.contains('active')) {
      navLinks.style.display = 'none';
  }
});

// Liderança 

let currentIndex = 0;
        const carousel = document.getElementById('carousel');
        const cards = document.querySelectorAll('.card');
        const totalCards = cards.length;
        const cardWidth = cards[0].offsetWidth + 20;

        function moveCarousel(direction) {
            currentIndex += direction;
            if (currentIndex < 0) {
                currentIndex = totalCards - 1;
                carousel.style.transition = 'none';
                carousel.style.transform = `translateX(${-currentIndex * cardWidth}px)`;
                setTimeout(() => {
                    carousel.style.transition = 'transform 0.5s ease-in-out';
                });
            } else if (currentIndex >= totalCards) {
                currentIndex = 0;
                carousel.style.transition = 'none';
                carousel.style.transform = `translateX(0px)`;
                setTimeout(() => {
                    carousel.style.transition = 'transform 0.5s ease-in-out';
                });
            } else {
                carousel.style.transform = `translateX(${-currentIndex * cardWidth}px)`;
            }
        }

        function autoSlide() {
            moveCarousel(1);
            setTimeout(autoSlide, 3000);
        }

        setTimeout(autoSlide, 3000);

        function showMessage(mestre) {
            alert(`${mestre} é um dos grandes mestres do Jiu-Jitsu!`);
        }