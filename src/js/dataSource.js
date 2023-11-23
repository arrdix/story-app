export let stories = [];

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

export function fetchDataFromAPI() {
  return fetch('https://raw.githubusercontent.com/dicodingacademy/a565-webtools-labs/099-shared-files/proyek-awal/DATA.json')
    .then(response => {
      return response.json();
    })
    .then(responseJson => {
      if (!responseJson.error) {
        storeData(responseJson.listStory);
        return Promise.resolve()
      } else {
        return Promise.reject(new Error('Error: API response has an error!'))
      }
    })
    .catch(error => {
      errorHandle('Error: failed to get data from API!');
      return Promise.reject(error);
    });

  function storeData(storiesFromAPI) {
    stories = storiesFromAPI;
  }

  function errorHandle(message) {
    const alertElement = document.querySelector('.alert');
    alertElement.classList.add('alert-danger');
    alertElement.innerHTML = `${message}`;
  }
}