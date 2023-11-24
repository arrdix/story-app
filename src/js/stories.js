import { LocalStorage } from "./localStorage";
const moment = require('moment');

export function renderStories() {
  function renderCard() {
    const stories = LocalStorage.stories;
    console.log(stories);
    stories.forEach((story, index) => {
      const isFirstIndex = index == 0;
      const isOwner = story.name === 'Julia Garner';
      const rawDate = story.createdAt;
      const formattedDateFromNow = moment(rawDate).fromNow();
      const formattedDate = moment(rawDate).format('MMMM D, YYYY h:mm A');
      const carouselInner = document.querySelector('.carousel-inner');
      const carouselItem = document.createElement('div');
      carouselItem.setAttribute('class', `carousel-item rounded-5 h-100 ${isFirstIndex ? " active" : ""}`);
      carouselItem.setAttribute('id', `${story.id}`);
      carouselItem.innerHTML = `
        <div class="card h-100 text-light">
          <img src="${story.photoUrl}" class="card-img h-100 object-fit-cover p-0" alt="Story Image">
          <div class="card-backdrop position-absolute top-50 start-50 translate-middle"></div>
          <div class="card-img-overlay">
            <div class="card-title d-flex justify-content-start ps-2 pt-2 gap-2">
              <img src="${isOwner ? "/julia-garner.jpg" : story.photoUrl}" class="rounded-pill border border-3 border-light w-5" alt="">
              <div class="d-flex flex-column">
                <p class="m-0">${story.name}</p>
                <p class="fs-12 m-0">${formattedDateFromNow} | ${formattedDate}</p>
              </div>
            </div>
            <div class="card-body p-0 ps-2">
              <p class="card-text fs-8">${story.description}</p>
            </div>
          </div>
        </div>
      `;
      carouselInner.append(carouselItem);
      renderIndicators(index);
    })
  }

  function renderIndicators(index) {
    const isFirstIndex = index == 0;
    const carouselIndicators = document.querySelector('.carousel-indicators');
    const btnIndicator = document.createElement('button');
    btnIndicator.setAttribute('class', `${isFirstIndex ? "active" : ""}`)
    btnIndicator.setAttribute('type', 'button');
    btnIndicator.setAttribute('data-bs-target', '#mainCarousel');
    btnIndicator.setAttribute('data-bs-slide-to', `${index}`);
    btnIndicator.setAttribute('aria-current', 'true');
    btnIndicator.setAttribute('aria-lable', `Slide-${index + 1}`);
    carouselIndicators.append(btnIndicator);
  }

  renderCard();
}