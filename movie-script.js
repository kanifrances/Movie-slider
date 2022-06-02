const movieContainers = [...document.querySelectorAll('.movie-container')];
const nextButtons = [...document.querySelectorAll('.next-button')];
const previousButtons = [...document.querySelectorAll('.previous-button')];

movieContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nextButtons[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

   previousButtons[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})