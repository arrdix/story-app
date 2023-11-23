import { LocalStorage } from "./localStorage";

export function fetchDataFromAPI() {
  return fetch('https://raw.githubusercontent.com/dicodingacademy/a565-webtools-labs/099-shared-files/proyek-awal/DATA.json')
    .then(response => {
      return response.json();
    })
    .then(responseJson => {
      if (!responseJson.error) {
        let stories = [];
        responseJson.listStory.forEach(story => {
          stories.push(story);
        })
        LocalStorage.saveData('STORIES', stories);
        return Promise.resolve(responseJson.message)
      } else {
        return Promise.reject(new Error('Error: API response has an error!'))
      }
    })
    .catch(error => {
      errorHandle('Error: failed to get data from API!');
      return Promise.reject(error);
    });

  function errorHandle(message) {
    const alertElement = document.querySelector('.alert');
    alertElement.classList.add('alert-danger');
    alertElement.innerHTML = `${message}`;
  }
}