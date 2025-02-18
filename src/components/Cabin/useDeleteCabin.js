import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin as deleteCabinApi } from "../../services/cabinsAPI";
import toast from "react-hot-toast";

export default function useDeleteCabin() {
  const queryClient = useQueryClient();

  const {
    mutate: deleteCabin,
    isPending: isDeleting,
    error,
  } = useMutation({
    mutationKey: ["deleteCabin"],
    mutationFn: (id) =>
      toast.promise(deleteCabinApi(id), {
        loading: "deleting",
        success: () => {
          queryClient.invalidateQueries({ active: true });
          return `删除成功`;
        },
        error: `删除失败`,
      }),
  });

  return {
    deleteCabin,
    isDeleting,
    error,
  };
}
