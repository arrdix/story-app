import moment from "moment";
import Stories from "../network/stories";

export function renderStoryDetail(id) {
  async function getStoryById(id) {
    try {
      const response = await Stories.getStoriesById(id);
      renderComponent(response.data.story);
    } catch (error) {
      window.alert(error);
    }
  }

  function renderComponent(story) {
    const formattedDateFromNow = moment(story.createdAt).fromNow();

    const storyDetail = document.getElementById('story-detail');
    storyDetail.setAttribute('name', story.name);
    storyDetail.setAttribute('createdAt', formattedDateFromNow);
    storyDetail.setAttribute('description', story.description);
    storyDetail.setAttribute('photoUrl', story.photoUrl);
    storyDetail.setAttribute('lat', story.lat);
    storyDetail.setAttribute('lon', story.lon);

    const mainStoryDetail = document.getElementById('main-story-detail');
    mainStoryDetail.setAttribute('name', story.name);
    mainStoryDetail.setAttribute('createdAt', formattedDateFromNow);
    mainStoryDetail.setAttribute('description', story.description);
    mainStoryDetail.setAttribute('photoUrl', story.photoUrl);
  }

  getStoryById(id);
}