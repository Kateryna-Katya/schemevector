document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-button');
    const iconContainer = menuBtn.querySelector('.icon');
    const modalMenu = document.querySelector('.modal');
    const menuItem = document.querySelectorAll('.menu-list-item');
    const header = document.querySelector('.header');
  
    let isMenuOpen = false;
  
    const burgerIcon = `
<svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M5.16699 15.5H25.8337" stroke="#E8E4DA" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
  <path d="M5.16699 7.75H25.8337" stroke="#E8E4DA" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
  <path d="M5.16699 23.25H25.8337" stroke="#E8E4DA" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
</svg>
    `;
  
    const crossIcon = `
<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M21.19 3.60882C21.3568 3.49758 21.557 3.4476 21.7565 3.46741C21.956 3.48722 22.1425 3.57559 22.2842 3.71745C22.4258 3.85932 22.5139 4.04592 22.5334 4.24545C22.553 4.44498 22.5027 4.64511 22.3912 4.81175L22.2803 4.94695L14.2255 13L22.2803 21.0548L22.3912 21.19C22.5017 21.3567 22.5511 21.5564 22.5312 21.7554C22.5112 21.9543 22.423 22.1403 22.2817 22.2816C22.1403 22.423 21.9543 22.5112 21.7554 22.5311C21.5564 22.5511 21.3567 22.5017 21.19 22.3912L21.0548 22.2803L13 14.2255L4.94696 22.2803C4.86701 22.3631 4.77138 22.4291 4.66564 22.4745C4.55991 22.5199 4.44618 22.5438 4.33111 22.5448C4.21603 22.5458 4.10191 22.5239 3.9954 22.4803C3.88889 22.4368 3.79212 22.3724 3.71075 22.291C3.62938 22.2097 3.56502 22.1129 3.52145 22.0064C3.47787 21.8999 3.45594 21.7857 3.45694 21.6707C3.45794 21.5556 3.48185 21.4419 3.52727 21.3361C3.57269 21.2304 3.63872 21.1348 3.72149 21.0548L11.7746 13L3.72149 4.94695L3.60883 4.81175C3.49655 4.64499 3.44574 4.44439 3.4651 4.24429C3.48445 4.0442 3.57276 3.85705 3.71491 3.7149C3.85706 3.57275 4.04421 3.48444 4.2443 3.46509C4.4444 3.44573 4.645 3.49654 4.81176 3.60882L4.94696 3.72148L13 11.7745L21.0548 3.72148L21.19 3.60882Z" fill="#E8E4DA" />
</svg>
    `;
  
    menuBtn.addEventListener('click', () => {
      isMenuOpen = !isMenuOpen;
      iconContainer.innerHTML = isMenuOpen ? crossIcon : burgerIcon;
      isMenuOpen ? openModal() : closeModal();
    });
  
    menuItem.forEach(item =>
      item.addEventListener('click', () => {
        closeModal();
        iconContainer.innerHTML = burgerIcon;
        isMenuOpen = false;
      })
    );
  
    window.addEventListener('scroll', blurHeader);
  
    function openModal() {
      modalMenu.style.display = 'block';
    }
  
    function closeModal() {
      modalMenu.style.display = 'none';
    }
  
    function blurHeader() {
      if (!header) return;
      if (window.scrollY > 60) {
        header.classList.add('header-scroll');
      } else {
        header.classList.remove('header-scroll');
      }
    }
  });