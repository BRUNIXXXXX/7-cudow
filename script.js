function darkMagic(){
    let header = document.getElementsByClassName("dropdown-content");
    console.log(HTMLCollection[0])
    let banner = document.getElementsByClassName("dropdown-hitbox");
    console.log(banner.HTMLCollection)
    console.log(header)
    console.log(banner)
    for(let i=0; i<banner.lenght; i++) {
    let bannerStyle = window.getComputedStyle(banner);
    let bannerHeight = bannerStyle.getPropertyValue('height');

    header.style.marginTop = bannerHeight;
    }
}

setInterval(darkMagic, 1);