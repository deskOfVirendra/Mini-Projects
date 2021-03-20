const topbar = document.querySelector('.navbar');
const navBtn = document.getElementById('navClick');
navBtn.addEventListener('click', function () {
    topbar.classList.toggle('expanded');
});