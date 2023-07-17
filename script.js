const cardRating = document.querySelector('[data-card-rating]');
const submitedRating = document.querySelector('[data-submited-rating]');

const containerRating = document.querySelector('[data-rating]');
const ratingNumberList = containerRating.querySelectorAll('[data-rating-number]');
const choseRatingParapraph = document.querySelector('[data-chose-rating]');
const submitButton = document.querySelector('[data-submit-button]');

let numberSelected = 0;

/** @param {MouseEvent} event*/
function enableRating(event) {
    const clickedElement = event.target;

    if(clickedElement.classList.contains("rating-number")) {
        ratingNumberList.forEach(rating => rating.classList.remove('active-rating'));
        clickedElement.classList.add('active-rating');
        numberSelected = parseInt(clickedElement.textContent);
        console.log(numberSelected);

        submitButton.classList.add('actived-button');
    }
};

function enableThankyouCard() {
    submitedRating.classList.add('active');
    disableCardRating();
    renderParagraph();
}

function disableCardRating() {
    cardRating.classList.add('disable');
}

function renderParagraph() {
    choseRatingParapraph.innerHTML = `You selected ${numberSelected} out of 5`;
}

containerRating.addEventListener('click', enableRating);
submitButton.addEventListener('click', enableThankyouCard);