import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://kgkwuhvxfjdbpicjbjco.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtna3d1aHZ4ZmpkYnBpY2piamNvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc3MDc5NjcsImV4cCI6MjAxMzI4Mzk2N30.lH3wfWzq9PQ1DWHZvG5y1mF4bTeUdL30qoswPEly7dU";
export const supabase = createClient(supabaseUrl, supabaseKey);
