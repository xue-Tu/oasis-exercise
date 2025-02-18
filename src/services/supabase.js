import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://nhrmlnjviyoallijqbvy.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ocm1sbmp2aXlvYWxsaWpxYnZ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkzMzkwMzQsImV4cCI6MjA1NDkxNTAzNH0.8KYMPDXjppapq83x0NqvLGgM9YcX7_8xJjYsaNXEUKs"
);

export default supabase;
