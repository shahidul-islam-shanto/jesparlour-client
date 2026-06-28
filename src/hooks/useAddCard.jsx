import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useAddCard = () => {
  const axiosPublic = useAxiosPublic();

  const {
    data: addToCart = [],
    refetch,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["addToCart"],
    queryFn: async () => {
      const res = await axiosPublic.get("/addToCart");
      return res.data;
    },
  });
  return [addToCart, refetch, isLoading, error];
};

export default useAddCard;
