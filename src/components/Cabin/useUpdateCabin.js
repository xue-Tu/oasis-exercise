import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCabin as updateCabinApi } from "../../services/cabinsAPI";
import toast from "react-hot-toast";

export default function useUpdateCabin() {
  const queryClient = useQueryClient();

  const {
    mutate: updateCabin,
    isPending: isUpdating,
    error,
  } = useMutation({
    mutationKey: ["updateCabin"],
    mutationFn: (data) =>
      toast.promise(updateCabinApi(data), {
        loading: "isAdding",
        success: () => {
          queryClient.invalidateQueries({
            active: true,
          });

          return "更改成功";
        },
        error: "更改失败",
      }),
  });

  return { updateCabin, isUpdating, error };
}
