import axios from "axios";
import ApiEndpoint from "../config/api-endpoint"
import Auth from "./auth";

const Stories = {
  axiosInstance: axios.create({
    headers: {
      'Authorization': `Bearer ${Auth.USER_TOKEN}`
    },
    timeout: 5000,
  }),

  async getAllStories(page, size, location) {
    return await this.axiosInstance.get(ApiEndpoint.ALL_STORIES(page, size, location), {
      headers: {
        'Authorization': `Bearer ${Auth.USER_TOKEN}`
      }
    })
  },

  async getStoriesById(id) {
    return await this.axiosInstance.get(ApiEndpoint.DETAIL_STORY(id), {
      headers: {
        'Authorization': `Bearer ${Auth.USER_TOKEN}`
      }
    })
  },

  async addStory(data) {
    return await axios.post(ApiEndpoint.ADD_NEW, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${Auth.USER_TOKEN}`
      }
    })
  },

  async addStoryGuest(data) {
    return await axios.post(ApiEndpoint.GUEST_ADD_NEW, data);
  },
}

export default Stories;