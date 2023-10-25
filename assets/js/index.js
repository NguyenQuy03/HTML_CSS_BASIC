
const navbarMobie = document.querySelector(".js-navbar-mobile");
      const navbarContainer = document.querySelector(
        ".js-navbar-mobile-container"
      );
      const navbarClose = document.querySelector(".js-navbar-mobile-close");
      const menuHeader = document.querySelector(".js-menu-header");
      const navbarItems = document.querySelectorAll(".js-nav-item");

      function showNavbarMobile() {
        navbarMobie.classList.add("open");
      }

      function hideNavbarMobile() {
        navbarMobie.classList.remove("open");
      }

      for (var navbarItem of navbarItems) {
        navbarItem.addEventListener("click", hideNavbarMobile);
      }

      menuHeader.addEventListener("click", showNavbarMobile);
      navbarClose.addEventListener("click", hideNavbarMobile);
      navbarMobie.addEventListener("click", hideNavbarMobile);
      navbarContainer.addEventListener("click", function (event) {
        event.stopPropagation();
      });

const modalImage = document.querySelector(".js-modal-image");
      const modalImageClose = document.querySelector(".js-modal-image-close");
      const desImages = document.querySelectorAll(".tech-item");
      const modalImg = document.querySelector(".js-modal-img");
      const modalContentItems = document.querySelectorAll(".tech-item img");
      const modalCaption = document.querySelector(".js-modal-caption");

      console.log(modalImg.src);
      function showModalImage() {
        modalImage.classList.add("open");
      }

      function hideModalImage() {
        modalImage.classList.remove("open");
      }

      for (var modalContentItem of modalContentItems) {
        modalContentItem.onclick = function () {
          modalImg.src = this.src;
          modalContentItem.classList.add("show-modal-image-content");
          showModalImage();
          modalCaption.innerHTML = this.alt;
        };
        console.log(this.alt);
      }

      modalImageClose.addEventListener("click", hideModalImage);
      modalImage.addEventListener("click", hideModalImage);