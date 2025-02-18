import supabase from "./supabase";

export async function getBookings() {
  let { data: bookings, error } = await supabase.from("bookings").select("*");

  if (error) throw new Error("Could not fetch bookings data");

  return bookings;
}
