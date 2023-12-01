import axios from "axios";
import ApiEndpoint from "../config/api-endpoint"
import Config from "../config/config"
import Auth from "./auth";

const Stories = {
  async addStory(data) {
    return await axios.post(ApiEndpoint.ADD_NEW, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${Auth.USER_TOKEN}`
      }
    })
  },

  async addStoryGuest({description, photo, lon, lat}) {
    const data = {description, photo, lon, lat};

    return await axios.post(ApiEndpoint.GUEST_ADD_NEW, data);
  },

  async getAllStories(page, size, location) {
    return await axios.get(ApiEndpoint.ALL_STORIES(page, size, location), {
      headers: {
        'Authorization': `Bearer ${Auth.USER_TOKEN}`
      }
    })
  }
}

export default Stories;