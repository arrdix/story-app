import { stories } from "./dataSource";
const moment = require('moment');

export function renderStories() {
  function renderCard() {
    stories.forEach((story, index) => {
      const isFirstIndex = index == 0;
      const rawDate = story.createdAt;
      const formattedDateFromNow = moment(rawDate).fromNow();
      const formattedDate = moment(rawDate).format('MMMM D, YYYY h:mm A');
      const carouselInner = document.querySelector('.carousel-inner');
      const carouselItem = document.createElement('div');
      carouselItem.setAttribute('class', `carousel-item rounded-5 ${isFirstIndex ? " active" : ""}`);
      carouselItem.setAttribute('id', `${story.id}`);
      carouselItem.innerHTML = `
        <div class="card text-bg-dark">
          <img src="${story.photoUrl}" class="card-img p-0" alt="Story Image">
          <div class="card-backdrop position-absolute"></div>
          <div class="card-img-overlay">
            <div class="card-title d-flex justify-content-start gap-2">
              <img src="${story.photoUrl}" class="rounded-pill border border-3 border-light w-5" alt="">
              <div class="d-flex flex-column">
                <p class="m-0">${story.name}</p>
                <p class="fs-12 m-0">${formattedDateFromNow} | ${formattedDate}</p>
              </div>
            </div>
            <div class="card-body p-0">
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