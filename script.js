function enterSite() {
    const clickToEnter = document.querySelector('.click-to-enter');
    clickToEnter.classList.add('fadeOut');

    setTimeout(() => {
        clickToEnter.style.display = 'none';
        document.title = "welcome";
        let audio = document.getElementById('background-music');
        audio.play();
        audio.volume = 0.15;
        let content = document.getElementById('content');
        content.style.display = 'block';
        content.classList.add('fade');
        document.getElementById('background').style.opacity = '1';
    }, 1000);
}