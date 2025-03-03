const searchInput = document.getElementById('search');
const labList = document.querySelector('.lab-list');

searchInput.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase();
    const labs = labList.querySelectorAll('li');

    labs.forEach(lab => {
        const text = lab.textContent.toLowerCase();
        lab.style.display = text.includes(searchTerm) ? '' : 'none';
    });
});
