const container = document.querySelector('.container');
const allBtn = document.querySelector('#all');
const cseBtn = document.querySelector('#cse');
const wddBtn = document.querySelector('#wdd');

cseBtn.addEventListener('click', () => {
    let cseCourses = courses.filter(course => course.subject === 'CSE');
    createCourseCard(cseCourses);
    updateTotalCredits(cseCourses);
});

wddBtn.addEventListener('click', () => {
    let wddCourses = courses.filter(course => course.subject === 'WDD');
    createCourseCard(wddCourses);
    updateTotalCredits(wddCourses);
});

allBtn.addEventListener('click', () => {
    createCourseCard(courses);
    updateTotalCredits(courses);
});