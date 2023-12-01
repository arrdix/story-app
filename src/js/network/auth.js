import axios from "axios"
import ApiEndpoint from "../config/api-endpoint"
import TokenUtils from "../utils/tokenUtils"
import Config from "../config/config"

const Auth = {
  async register({name, email, password}) {
    return await axios.post(ApiEndpoint.REGISTER, { name, email, password,})
  },

  async login({email, password}) {
    return await axios.post(ApiEndpoint.LOGIN, { email, password })
  },

  USER_TOKEN: TokenUtils.getUserToken(Config.USER_TOKEN_KEY),
}

export default Auth;