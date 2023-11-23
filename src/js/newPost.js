import { render } from "lit";
import { stories } from "./dataSource";

export function initNewPost() {
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
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }
    form.classList.add('was-validated');
    event.preventDefault();
    storeData(image.value, description.value)
  })

  function storeData(photoUrl, description) {
    const currentDate = new Date();
    const iso8601Format = currentDate.toISOString();

    const newStory = {
      id: generateRandomID(16),
      name: 'Julia Garner',
      description: description,
      photoUrl: photoUrl,
      createdAt: iso8601Format
    }

    stories.unshift(newStory);
  }

  function generateRandomID(length) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      result += chars[randomIndex];
    }

    return `story-${result}`;
  }
}