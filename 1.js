let currentIndex = 0;

function slide(direction) {
    const projects = document.querySelector('.projects');
    const projectCount = document.querySelectorAll('.project').length;

    if (direction === 'left') {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : projectCount - 1;
    } else if (direction === 'right') {
        currentIndex = (currentIndex < projectCount - 1) ? currentIndex + 1 : 0;
    }

    const offset = -currentIndex * 250; // 250px is the width of each project
    projects.style.transform = `translateX(${offset}px)`;
}
