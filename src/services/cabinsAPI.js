import supabase from "./supabase";

export async function getCabins({ status }) {
  const res = supabase.from("cabins");
  let data;

  if (status) {
    if (status === "all") data = await res.select("*");

    if (status === "no-discount")
      data = await res.select("*").eq("discount", 0);

    if (status === "with-discount")
      data = await res.select("*").gt("discount", 0);
  }

  if (data.error) throw new Error("Could not fetch cabins data");

  return data.data;
}

export async function addCabin(cabin) {
  const { data, error } = await supabase
    .from("cabins")
    .insert([cabin])
    .select();

  if (error) throw new Error("Couldn't copy this row");

  return data;
}

export async function updateCabin(cabin) {
  const { data, error } = await supabase
    .from("cabins")
    .update(cabin)
    .eq("id", cabin.id)
    .select();

  if (error) throw new Error(error.message);

  return data;
}

export async function deleteCabin(id) {
  console.log(id);
  const { error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) throw new Error("Couldn't delete cabin");
}
