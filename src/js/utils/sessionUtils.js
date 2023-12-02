const SessionUtils = {
  setSession(key, value) {
    return sessionStorage.setItem(key, value);
  },

  getSession(key) {
    return sessionStorage.getItem(key);
  },

  destroySession(key) {
    return sessionStorage.removeItem(key);
  },
};

export default SessionUtils;
