document.addEventListener('DOMContentLoaded', function () {
    const rollerContent = document.querySelector('.roller-content');
    let offset = 0;

    function scrollRoller() {
        offset -= 1;
        if (Math.abs(offset) >= rollerContent.scrollWidth - rollerContent.clientWidth) {
            offset = 0;
        }
        rollerContent.style.transform = `translateX(${offset}px)`;
        requestAnimationFrame(scrollRoller);
    }

    scrollRoller();
});
