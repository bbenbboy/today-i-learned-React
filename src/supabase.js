import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://uwvgektpdyvkttrfhvel.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV3dmdla3RwZHl2a3R0cmZodmVsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc2NTA1MDksImV4cCI6MTk5MzIyNjUwOX0.-K6Us1WjeJhyaJR7vDXQbYKTTcMkoUoQVy04rxdNmaI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
