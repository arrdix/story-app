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
      console.log('error');
    })
}