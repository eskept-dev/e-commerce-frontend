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

  return response.data;
};

const setTokens = (accessToken: string, refreshToken: string) => {
  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("refreshToken", refreshToken);
};

const Auth = {
  login,
  setTokens,
};

export default Auth;