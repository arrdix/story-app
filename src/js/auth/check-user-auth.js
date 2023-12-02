import Config from '../config/config';
import SessionUtils from '../utils/sessionUtils';

export const checkUserAuth = {
  authPage: ['login.html', 'register.html'],

  checkLoginState() {
    const userToken = SessionUtils.getSession(Config.USER_TOKEN_KEY);
    const isUserSignIn = Boolean(userToken);
    const isUserOnAuthPage = this._isUserOnAuthPage(this.authPage);

    if (isUserSignIn) {
      if (isUserOnAuthPage) {
        window.location.href = '/';
      }
    } else {
      // eslint-disable-next-line no-lonely-if
      if (!isUserOnAuthPage) {
        window.location.href = 'login.html';
      }
    }
  },

  _isUserOnAuthPage(pages) {
    const filteredPage = pages.filter((page) => window.location.pathname.endsWith(page));
    return Boolean(filteredPage.length);
  },
};
