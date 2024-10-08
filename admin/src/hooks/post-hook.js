import { useMutation } from "@tanstack/react-query";
import axios from "axios";

import { API_URL } from "../utils";

export const useAnalytics = (toast, toggle, token) => {
  return useMutation({
    mutationFn: async (val) => {
      toggle();

      const { data } = await axios.post(
        `${API_URL}/posts/admin-analytics?query=${val}`,
        null,
        {
          headers: {
            Authorization: `Bearer${token}`,
          },
        }
      );
      return data;
    },
    onError: (error) => {
      toggle();
      const errorMessage = error?.response?.data?.message;
      toast.error(errorMessage ?? error.message);
      if (errorMessage === "Authentication failed") {
        localStorage.removeItem("user");
      }
    },
    onSuccess: (data) => {
      toggle();
      toast.success(data?.message);
    },
  });
};
