import Config from "../config/config"
import TokenUtils from "../utils/tokenUtils"

export const checkUserAuth = {
  authPage: ['login.html', 'register.html'],

  checkLoginState() {
    const userToken = TokenUtils.getUserToken(Config.USER_TOKEN_KEY);
    const isUserSignIn = Boolean(userToken);
    const isUserOnAuthPage = this._isUserOnAuthPage(this.authPage);

    if (isUserSignIn) {
      if (isUserOnAuthPage) {
        window.location.href = '/';
      }
    } else {
      if (!isUserOnAuthPage) {
        window.location.href = 'login.html';
      }
    }
  },

  _isUserOnAuthPage(pages) {
    const filteredPage = pages.filter(page => window.location.pathname.endsWith(page));
    return Boolean(filteredPage.length);
  }
}