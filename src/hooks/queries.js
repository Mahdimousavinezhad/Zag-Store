import { useQuery } from "@tanstack/react-query";

import api from "@/configs/api";

const useGetCategoriesNavbar = () => {
  const queryFn = () => api.get("/categories");
  const queryKey = ["categories-navbar"];

  return useQuery({ queryKey, queryFn });
};

export { useGetCategoriesNavbar };
