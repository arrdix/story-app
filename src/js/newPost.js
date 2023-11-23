import { render } from "lit";

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
      event.preventDefault()
      event.stopPropagation()
    }
    form.classList.add('was-validated');
  })
}