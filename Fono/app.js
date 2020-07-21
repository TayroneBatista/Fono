const navSlide = () => {
    const burguer = document.querySelector('.burguer');
    const nav = document.querySelector('.nav-links');
    const navlinks = document.querySelectorAll('.nav-links li');
    

    burguer.addEventListener('click', ()=> {

        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navlinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = '';
            }else{
                link.style.animation = `navLinkFade 0.5s forwards ${index/7 + 1}s`;    
            }
        });

    });

    //burguer animation

    burguer.classList.toggle('toggle');
    
}

navSlide();