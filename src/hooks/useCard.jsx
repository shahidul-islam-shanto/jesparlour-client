import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";

const useCard = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const {
    refetch,
    data: card = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["card", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/card?email=${user?.email}`);
      return res.data;
    },
    enabled: !!user?.email,
  });

  return [card, refetch, isLoading, error];
};

export default useCard;
