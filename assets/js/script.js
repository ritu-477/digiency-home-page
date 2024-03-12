const iconbox = document.querySelector('.iconbox');
const menulist = document.querySelector('.menulist');

iconbox.addEventListener('click', function () {
    menulist.classList.toggle('show');
    document.body.classList.toggle(".overflowhidden");
});