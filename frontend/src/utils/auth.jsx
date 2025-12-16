import axios from "axios";

export const checkAuth = async () => {
  try {
    const backend = import.meta.env.VITE_BACKEND_PORT_LINK;
    const res = await axios.get(`${backend}/api/users/auth-user`, {
      withCredentials: true,
    });

    return res.data?.data?.logged_In === true;
  } catch {
    return false;
  }
};
