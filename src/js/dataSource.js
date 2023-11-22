export let stories = [];

export function fetchDataFromAPI() {
  fetch('https://raw.githubusercontent.com/dicodingacademy/a565-webtools-labs/099-shared-files/proyek-awal/DATA.json')
    .then(response => {
      return response.json();
    })
    .then(responseJson => {
      if (!responseJson.error) {
        responseJson.listStory.forEach(item => {
          stories.unshift(item);
        })
      }
    })
    .catch(error => {
      const alertElement = document.querySelector('.alert');
      alertElement.classList.add('alert-danger');
      alertElement.innerHTML = `Error: failed to get data from API!`;
    })
}

export function fetchDataFromUserInput(id, createdAt, description, name, photoUrl) {
  const story = {
    id: id,
    createdAt: createdAt,
    description: description,
    name: name,
    photoUrl, photoUrl
  }

  stories.unshift(story);
}