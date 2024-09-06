
const ratePage = document.getElementById('rate-page');

const reviewPage = document.getElementById('review-page');
const rating = document.querySelectorAll('.r-star');
const review = document.getElementById('review');
const input = document.getElementById('input');
const starContainer = document.getElementById('star-container');

let selectedRating = null;

rating.forEach(star =>{
    star.addEventListener('click', ()=>{
        starContainer.innerHTML = '';

        const ratingValue = star.dataset.value;
        
        for(let i = 0; i < ratingValue; i++){
        const starImage = document.createElement('img');
            starImage.src = './images/icon-star.svg';
            starImage.alt = 'stars';
            starContainer.append(starImage);
        }       
    });

});

rating.forEach(ratingStars =>{
    ratingStars.addEventListener('click', ()=>{
        selectedRating = ratingStars.dataset.value;
    });
});

input.addEventListener('click', ()=>{
    if(selectedRating){
        review.textContent = `You chose ${selectedRating} out of 5`;
    
    reviewPage.classList.remove('hidden');
    ratePage.classList.add('hidden');
    }else{
        alert('Choose a rating');
    }

    
});












// rating.forEach(ratingStar =>{
// ratingStar.addEventListener('click', ()=>{
    
// if(ratingStar.dataset.value == '1'){
//     review.textContent = 'You chose 1 out of 5 stars';
// }else if(ratingStar.dataset.value == '2'){
//     review.textContent = 'You chose 2 out of 5 stars';
// }else if(ratingStar.dataset.value == '3'){
//     review.textContent = 'You chose 3 out of 5 stars';
// }else if(ratingStar.dataset.value == '4'){
//     review.textContent = 'You chose 4 out of 5 stars';
// }else if(ratingStar.dataset.value == '5'){
// review.textContent = 'You chose 5 out of 5 stars';
// }
// reviewPage.classList.remove('hidden');
// ratePage.classList.add('hidden');

// });
// });

