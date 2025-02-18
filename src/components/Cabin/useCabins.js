import { useQuery } from "@tanstack/react-query";
import { getCabins as getCabinsAPI } from "../../services/cabinsAPI";
import { useSearchParams } from "react-router-dom";

function useCabins() {
  const [searchParams] = useSearchParams();
  const status = searchParams.get("status") || "all";

  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ["cabins", status],
    queryFn: () => getCabinsAPI({ status }),
  });

  return {
    isLoading,
    cabins,
    error,
  };
}

export default useCabins;
