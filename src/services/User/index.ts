import axios from "axios";

import Auth from "../Auth";

const USER_API_URL = import.meta.env.VITE_API_URL + "/api/v1/users";

const getMe = async () => {
  const headers = Auth.getAuthenticatedHeader();
  const response = await axios.get(USER_API_URL + "/me", headers);
  return response.data;
};

const UserService = {
  getMe,
};

export default UserService;