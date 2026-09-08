// Supabase project config — shared across pages that need database access.
// Project: sadhana-portfolio
const SUPABASE_URL = "https://jayvcgjpzquhwsjsfbjh.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpheXZjZ2pwenF1aHdzanNmYmpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg4MzQ2MDUsImV4cCI6MjEwNDQxMDYwNX0.Ttg3QKoXZmQIuTheoB1fbfa3ANa1hSg_aKQpbg0bvGg";

// `supabase` here refers to the global from the CDN script (@supabase/supabase-js),
// loaded via a <script> tag before this file. We name our client `supabaseClient`
// to avoid clashing with that global.
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
