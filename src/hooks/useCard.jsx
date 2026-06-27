import React from "react";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
import { useQueries } from "@tanstack/react-query";

const useCard = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { refetch, data: card = [] } = useQueries({
    queryKey: ["card", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/card?email=${user?.email}`);
      return res.data;
    },
  });

  return [card, refetch];
};

export default useCard;
