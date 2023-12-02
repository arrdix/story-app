export class LocalStorage {
  static stories = LocalStorage.getData('STORIES') || [];

  static storeData(story) {
    LocalStorage.stories.unshift(story);
    this.saveData('STORIES', LocalStorage.stories);
  }

  static saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  static getData(key) {
    const rawData = localStorage.getItem(key);
    return rawData ? JSON.parse(rawData) : null;
  }
}
