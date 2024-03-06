document.addEventListener('DOMContentLoaded', function () {
    const roomListings = document.querySelectorAll('.room');
    const overlay = document.querySelector('.overlay');
    const overlayContent = document.querySelector('.overlay-content');
    const closeBtn = document.querySelector('.close-btn');

    roomListings.forEach(room => {
        const moreInfoBtn = room.querySelector('.more-info-btn');
        const details = room.querySelector('.details');
        const roomInfo = details.innerHTML;

        moreInfoBtn.addEventListener('click', () => {
            overlayContent.innerHTML = roomInfo;
            overlay.classList.add('active');
        });
    });

    closeBtn.addEventListener('click', () => {
        overlay.classList.remove('active');
    });
});

// Swiper
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // LightBox

  function lightbox() {
    document.querySelectorAll('.lightbox-images-container .img-container img').forEach(image => {

      image.onclick = () => {
        document.querySelector('.lightbox').style.display = 'block';
        document.querySelector('.lightbox .img-container img').src = image.getAttribute('src');
      } 
    
  });

  document.querySelector('.lightbox span').onclick = () => {
    document.querySelector('.lightbox').style.display = 'none';
  }
  }
  lightbox();
