const { createClient } = require("@supabase/supabase-js");

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://zjcjdostbortnzbwlivb.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpqY2pkb3N0Ym9ydG56YndsaXZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ0MTE0NjMsImV4cCI6MjAzOTk4NzQ2M30.5KLHXmLFRzx2PJEqplql8Fi-iaFiFbJAIdol6lfdjjg"
);

module.exports = supabase;
