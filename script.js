// Room Slider
function roomSlider() {
  document.addEventListener('DOMContentLoaded', function () {
    const roomListings = document.querySelectorAll('.room');
    const overlay = document.querySelector('.overlay');
    const overlayContent = document.querySelector('.overlay-content');
    const closeBtn = document.querySelector('.close-btn');
  
    roomListings.forEach(room => {
        const moreInfoBtn = room.querySelector('.more-info-btn');
        const details = room.querySelector('.details');
  
        moreInfoBtn.addEventListener('click', () => {
            const roomInfo = details.innerHTML; // Dynamically capture the current HTML content
            overlayContent.innerHTML = roomInfo;
            overlay.classList.add('active');
        });
    });
  
    closeBtn.addEventListener('click', () => {
        overlay.classList.remove('active');
    });
  });
}
roomSlider();


// Banner Swiper
function bannerSwiper() {
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
}
bannerSwiper();
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

  // PopUp js code
function popUp() {
  document.addEventListener('DOMContentLoaded', function() {
    openPopup(); // Open popup when the website loads
  });
}
popUp();  

  function openPopup() {
    document.getElementById('contact-popup').style.display = 'block';
  }
  
  function closePopup() {
    document.getElementById('contact-popup').style.display = 'none';
  }
  
  // Room Swiper
function roomSwiper() {
  var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });
}
roomSwiper();

  // Send Email
  function sendEmail(){
    Email.send({
      Host : "smtp.elasticemail.com",
      Username : "promotionalrealestate@gmail.com",
      Password : "7D34D9615EE769A77A06F00B1EB25BDF1F86",
      To : 'promotionalrealestate@gmail.com',
      From : "promotionalrealestate@gmail.com",
      Subject : "Enquiry for UDYANA",
      Body : "Name:" + document.getElementById('name').value
            + "<br/> Email:" + document.getElementById('email').value
            + "<br/>Mobile Number:" + document.getElementById('phone').value
            + "<br/>Message:" + document.getElementById('message').value
  }).then(
    message => alert(message)
  );
  }