import { useQuery } from "@tanstack/react-query";

import api from "@/configs/api";

const useGetCategories = () => {
  // This route have not limit query

  const queryFn = () => api.get("/categories");
  const queryKey = ["categories-navbar"];

  return useQuery({ queryKey, queryFn });
};

export { useGetCategories };
