import React from "react";

import { useForm } from "react-hook-form";
import FormRow from "./FormRow";
import useAddCabin from "../../components/Cabin/useAddCabin";
import useUpdateCabin from "../../components/Cabin/useUpdateCabin";
import Button from "../../Ui/Button/Button";

function CreateCabinForm({ close, cabin }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    defaultValues: {
      ...cabin,
    },
  });

  const { addCabin, isAdding } = useAddCabin();
  const { updateCabin, isUpdating } = useUpdateCabin();

  function onSubmit(data) {
    if (cabin?.id) {
      updateCabin(
        { ...cabin, ...data },
        {
          onSuccess: () => {
            close();
          },
        }
      );
      return;
    }

    const newCabin = { ...data };

    addCabin(newCabin, {
      onSuccess: () => {
        close();
      },
    });
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="border  divide-y-2 divide-gray-100/70 border-gray-200/50 rounded-sm px-8 py-4">
      <FormRow name="Cabin Name" field="cabin" message={errors?.cabin?.message}>
        <input
          className="h-9 indent-2 border border-gray-300/50 rounded-md"
          type="text"
          name="cabin"
          id="cabin"
          {...register("name", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow
        name="Maximum capacity"
        field="capacity"
        message={errors?.capacity?.message}>
        <input
          className="h-9 indent-2 border border-gray-300/50 rounded-md"
          type="number"
          name="capacity"
          id="capacity"
          {...register("maxCapacity", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow
        name="Regular Price"
        field="price"
        message={errors?.price?.message}>
        <input
          className="h-9 indent-2 border border-gray-300/50 rounded-md"
          type="number"
          name="price"
          id="price"
          {...register("regularPrice", {
            required: "This field is required",
            min: {
              value: 0,
              message: "This value maust than 0",
            },
          })}
        />
      </FormRow>

      <FormRow
        name="Discount"
        field="discount"
        message={errors?.discount?.message}>
        <input
          className="h-9 indent-2 border border-gray-300/50 rounded-md"
          type="number"
          name="discount"
          id="discount"
          defaultValue={0}
          {...register("discount", {
            required: "This field is required",
            min: {
              value: 0,
              message: "This value maust than 0",
            },
            validate: (value) =>
              Number(value) < Number(getValues("regularPrice")) ||
              "discount value must less than price",
          })}
        />
      </FormRow>

      <div className="grid grid-cols-3 py-2 items-center">
        <label htmlFor="description" className="text-sm ">
          Description for website
        </label>
        <textarea
          rows={4}
          className=" border border-gray-300/50 rounded-md"
          name="description"
          id="description"
          {...register("description")}
        />
      </div>
      {/* Button Section */}
      <div className="flex pt-3 justify-end gap-4 ">
        <Button type="reset">Cancel</Button>
        <Button disabled={isAdding || isUpdating}>
          {cabin?.id ? "Update Cabin" : "Create new cabin"}
        </Button>
      </div>
    </form>
  );
}

export default CreateCabinForm;
