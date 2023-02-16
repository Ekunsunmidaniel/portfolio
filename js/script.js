const year = document.querySelector('.year');
const currentYear = new Date().getFullYear();
year.innerHTML = currentYear;

const links = document.querySelectorAll('a');

// links.forEach(link => {
//     link.addEventListener('click', e => {
//         e.preventDefault();
//         const href = links.getAttribute('href');

//         if(href === '#') {
//             window.scrollTo({
//                 top: 0,
//                 behavior: 'smooth'
//             });
//         }
//     })
// });