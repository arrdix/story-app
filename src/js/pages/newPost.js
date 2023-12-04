import { initNavbar } from '../utils/navbar';
import Stories from '../network/stories';
import { errorHandler } from '../utils/errorHandler';

export function initNewPost() {
  window.addEventListener('load', () => {
    const loadingElement = document.querySelector('.loading-element');
    loadingElement.classList.add('d-none');

    const leftCol = document.querySelector('#left-col');
    setTimeout(() => {
      leftCol.classList.add('show');
    }, 500);

    const mainCol = document.querySelector('#main-col');
    setTimeout(() => {
      mainCol.classList.add('show');
    }, 1000);

    const form = document.getElementById('new-post-form');
    const image = document.getElementById('image');
    const description = document.getElementById('description');

    image.addEventListener('change', (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
          const preview = document.getElementById('image-preview');
          preview.src = e.target.result;
        };

        reader.readAsDataURL(file);
      }
    });

    description.addEventListener('input', (event) => {
      const inputValue = event.target.value;
      const descriptionPreview = document.getElementById('description-preview');
      descriptionPreview.textContent = inputValue;
    });

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!form.checkValidity()) {
        const postSpinner = document.getElementById('post-spinner');
        postSpinner.classList.add('d-none');

        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');

      if (image.files[0]) {
        const anonymousCheck = document.getElementById('anonymous-check').checked;
        if (anonymousCheck) {
          genereateAnonymousNewStory(
            description.value,
            image.files[0],
            generateRandomLat(),
            generateRandomLon(),
          );
        } else {
          generateNewStory(
            description.value,
            image.files[0],
            generateRandomLat(),
            generateRandomLon(),
          );
        }
      }
    });

    async function genereateAnonymousNewStory(descriptionStory, photoStory, latStory, lonStory) {
      imageValidation(photoStory);

      try {
        const postSpinner = document.getElementById('post-spinner');
        postSpinner.classList.remove('d-none');

        const newStory = createFormData(descriptionStory, photoStory, latStory, lonStory);
        await Stories.addStoryGuest(newStory);
        window.location.href = '/';
      } catch (error) {
        errorHandler(error);
      }
    }

    async function generateNewStory(descriptionStory, photoStory, latStory, lonStory) {
      try {
        imageValidation(photoStory);
        const postSpinner = document.getElementById('post-spinner');
        postSpinner.classList.remove('d-none');

        const newStory = createFormData(descriptionStory, photoStory, latStory, lonStory);
        await Stories.addStory(newStory);
        window.location.href = '/';
      } catch (error) {
        errorHandler(error);
      }
    }

    function imageValidation(photoStory) {
      if (!photoStory.type.startsWith('image/')) {
        throw new Error('The story photo must be a valid image');
      }
    }

    function createFormData(descriptionStory, photo, latStory, lonStory) {
      const newStory = new FormData();
      newStory.append('description', descriptionStory);
      newStory.append('photo', photo);
      newStory.append('lat', latStory);
      newStory.append('lon', lonStory);

      return newStory;
    }

    function generateRandomLat() {
      let randomLat;
      for (let i = 0; i < 90; i++) {
        randomLat = Math.random() * i;
      }
      if (randomLat < 45) randomLat *= -1;
      return randomLat.toFixed(6);
    }

    function generateRandomLon() {
      let randomLon;
      for (let i = 0; i < 180; i++) {
        randomLon = Math.random() * i;
      }
      if (randomLon < 90) randomLon *= -1;
      return randomLon.toFixed(6);
    }

    initNavbar();
  });
}
