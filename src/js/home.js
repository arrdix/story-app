import { fetchDataFromAPI } from "./dataSource";
import { initNavbar } from "./navbar";
import { renderStories } from "./stories";

export function initHome() {
  fetchDataFromAPI()
    .then(() => {
      run();
    })

  function run() {
    initNavbar();
    renderStories();
  }
}