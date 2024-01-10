document.addEventListener('DOMContentLoaded', function () {
    const burgerBar = document.querySelector('.burger-bar');
    const navList = document.querySelector('.NavItem');

    burgerBar.addEventListener('click', function () {
        navList.classList.toggle('show');
    });
    navList.querySelectorAll('div').forEach(function (item) {
        item.addEventListener('click', function () {
            navList.classList.remove('show');
        });
    });
});
