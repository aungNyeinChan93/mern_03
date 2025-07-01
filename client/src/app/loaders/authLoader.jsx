import toast from "react-hot-toast";
import axiosClient from "../config/axiosClient";
import { redirect } from "react-router";

const authLoader = async () => {
  try {
    const token = localStorage.getItem("token");
    if (!token) return redirect("/auth/login");
    const { data } = await axiosClient.get(`/api/v1/auth/userInfo`);
    if (data.success) {
      return { auth: data.result };
    }
  } catch (error) {
    console.error(error);
    toast.error(error.message);
  }

  //   return null;
};

export default authLoader;
