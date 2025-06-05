if(window.history.replaceState){
    window.history.replaceState(null, null, window.location.href);
}


document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('#menu-btn');
    const navbar = document.querySelector('header nav');
    const navLinks = document.querySelectorAll('header nav a');

    menuBtn.addEventListener('click', (event) => {
        event.stopPropagation(); 
        navbar.classList.toggle('active');
        menuBtn.classList.toggle('fa-times');
        menuBtn.classList.toggle('fa-bars');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            if (window.innerWidth <= 700) {
                event.preventDefault();
                const url = link.getAttribute('href');
                if (url && url !== '#') {
                    navbar.classList.remove('active');
                    menuBtn.classList.remove('fa-times');
                    menuBtn.classList.add('fa-bars');
                    setTimeout(() => {
                        window.location.href = url;
                    }, 200); 
                }
            }
        });
    });

    document.addEventListener('click', (event) => {
        if (window.innerWidth <= 700) {
            if (!navbar.contains(event.target) && !menuBtn.contains(event.target)) {
                navbar.classList.remove('active');
                menuBtn.classList.remove('fa-times');
                menuBtn.classList.add('fa-bars');
            }
        }
    });

    window.addEventListener('scroll', () => {
        if (window.innerWidth <= 700) {
            navbar.classList.remove('active');
            menuBtn.classList.remove('fa-times');
            menuBtn.classList.add('fa-bars');
        }
    });

    document.addEventListener('touchstart', (event) => {
        if (window.innerWidth <= 700) {
            if (!navbar.contains(event.target) && !menuBtn.contains(event.target)) {
                navbar.classList.remove('active');
                menuBtn.classList.remove('fa-times');
                menuBtn.classList.add('fa-bars');
            }
        }
    });

    document.body.style.opacity = 1;

    const links = document.querySelectorAll("a[href]");
    links.forEach(link => {
      link.addEventListener("click", function (e) {
        const href = link.getAttribute("href");
        if (href.startsWith("#") || link.target === "_blank") return; 

        e.preventDefault();
        document.body.classList.add("fade-out");

        setTimeout(() => {
          window.location.href = href;
        }, 500); 
      });
    });

    window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  

    

});