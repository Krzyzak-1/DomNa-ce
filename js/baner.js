(() => {

    const button = document.querySelector('.main-navigation__burger');
    const banner = document.querySelector('.baner');
    
    
    const toggleClass = () =>
    {
            banner.classList.toggle('baner-changed');
    };
    
        button.addEventListener('click', toggleClass);
        banner.addEventListener('click' , toggleClass);
    
    
    })();