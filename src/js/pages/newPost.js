import { initNavbar } from "../utils/navbar";
import { LocalStorage } from "../utils/localStorage";
import Stories from "../network/stories";

export function initNewPost() {
  window.addEventListener('load', () => {
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

    image.addEventListener('change', event => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();

        reader.onload = function(e) {
          const preview = document.getElementById('image-preview');
          preview.src = e.target.result;
        }

        reader.readAsDataURL(file);
      }
    })

    description.addEventListener('input', event => {
      const inputValue = event.target.value;
      const descriptionPreview = document.getElementById('description-preview');
      descriptionPreview.textContent = inputValue;
    })

    form.addEventListener('submit', event => {
      event.preventDefault();
      if (!form.checkValidity()) {
        const postSpinner = document.getElementById('post-spinner');
        postSpinner.classList.add('d-none');
        
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');

      if (image.files[0]) {
        generateNewStory(
          description.value,
          image.files[0],
          generateRandomLat(), 
          generateRandomLon(),
        );
      }
    })

    async function generateNewStory(description, photo, lat, lon) {
      if (!photo.type.startsWith('image/')) {
        return window.alert('The story photo must be a valid image');
      }

      const newStory = new FormData();
      newStory.append('description', description);
      newStory.append('photo', photo);
      newStory.append('lat', lat);
      newStory.append('lon', lon);

      try {
        const postSpinner = document.getElementById('post-spinner');
        postSpinner.classList.remove('d-none');

        const response = await Stories.addStory(newStory);
        window.alert(response.data.message);
        window.location.href = '/';
      } catch (error) {
        window.alert(error);
      }
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
  })
}