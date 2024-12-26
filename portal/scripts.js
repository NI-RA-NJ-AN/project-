const enrollmentForm = document.getElementById('enrollment-form');
if (enrollmentForm) {
    enrollmentForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const course = document.getElementById('course').value;
        alert(`You have successfully enrolled in ${course}!`);
    });
}

// Sample Dynamic Content for Dashboard
const dashboardContent = document.querySelector('main#content ul');
if (dashboardContent) {
    const courses = [
        { name: 'Course 1', progress: '50%' },
        { name: 'Course 2', progress: '75%' },
        { name: 'Course 3', progress: '75%' },
        { name: 'Course 4', progress: 'Not' }
    ];

    dashboardContent.innerHTML = '';
    courses.forEach(course => {
        const li = document.createElement('li');
        li.textContent = `${course.name}: ${course.progress} completed`;
        dashboardContent.appendChild(li);
    });
}