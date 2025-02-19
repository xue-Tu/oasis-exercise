import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addCabin as addCabinApi } from "../../services/cabinsAPI";
import toast from "react-hot-toast";

export default function useAddCabin() {
  const queryClient = useQueryClient();

  const { mutate: addCabin, isPending: isAdding } = useMutation({
    mutationKey: ["addCabin"],
    mutationFn: (data) =>
      toast.promise(addCabinApi(data), {
        loading: "isAdding",
        success: () => {
          queryClient.invalidateQueries({
            active: true,
          });

          return "添加成功";
        },
        error: "增加失败",
      }),
  });

  return { addCabin, isAdding };
}
