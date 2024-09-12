document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.classList.add('hover');
        });

        item.addEventListener('mouseleave', () => {
            item.classList.remove('hover');
        });
    });
});