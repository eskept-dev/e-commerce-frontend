import axios from "axios";

const AUTH_API_URL = import.meta.env.VITE_API_URL + "/api/v1/auth";

const login = async (email: string, password: string) => {
  const response = await axios.post(
    AUTH_API_URL + "/login",
    { email, password },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return response;
};

const logout = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
};

const setTokens = (accessToken: string, refreshToken: string) => {
  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("refreshToken", refreshToken);
};

const getAuthenticatedHeader = (headers: any = {}) => {
  const accessToken = localStorage.getItem("accessToken");
  return {
    headers: {
      ...headers,
      Authorization: `Bearer ${accessToken}`,
    },
  };
};

const verifyToken = async () => {
  const headers = getAuthenticatedHeader();
  const response = await axios.get(AUTH_API_URL + "/verify-token", headers);
  return response;
};

const sendActivationEmail = async (email: string) => {
  const response = await axios.post(
    AUTH_API_URL + "/send-activation-email",
    { email },
  );
  return response;
};

const AuthService = {
  login,
  logout,
  setTokens,
  getAuthenticatedHeader,
  verifyToken,
  sendActivationEmail,
};

export default AuthService;