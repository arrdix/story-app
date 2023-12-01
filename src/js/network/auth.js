import axios from "axios"
import ApiEndpoint from "../config/api-endpoint"
import Config from "../config/config"
import SessionUtils from "../utils/sessionUtils"

const Auth = {
  async register({name, email, password}) {
    return await axios.post(ApiEndpoint.REGISTER, { name, email, password,})
  },

  async login({email, password}) {
    return await axios.post(ApiEndpoint.LOGIN, { email, password })
  },

  USER_TOKEN: SessionUtils.getSession(Config.USER_TOKEN_KEY),
  USER_NAME: SessionUtils.getSession(Config.USER_NAME_KEY),
}

export default Auth;