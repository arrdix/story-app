import Config from "./config";

const ApiEndpoint = {
  REGISTER: `${Config.BASE_URL}/register`,
  LOGIN: `${Config.BASE_URL}/login`,
  ADD_NEW: `${Config.BASE_URL}/stories`,
  GUEST_ADD_NEW: `${Config.BASE_URL}/stories/guest`,
  DETAIL_STORY: (id) => `${Config.BASE_URL}/stories/${id}`,
  ALL_STORIES: (page, size, loc) => `
    ${Config.BASE_URL}/stories?${page ? "page=" + page : ""}${size ? "&size=" + size : ""}${loc ? "&location=" + loc : ""}
  `,
}

export default ApiEndpoint;