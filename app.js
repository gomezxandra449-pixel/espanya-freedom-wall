alert("1. app.js loaded");

const SUPABASE_URL = "https://sjyjiphjllvnswzgsvnw.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNqeWppcGhqbGx2bnN3emdzbndrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ5OTExMzYsImV4cCI6MjEwMDU2NzEzNn0.0oFmsAsVHB96RgOs33sCTYDPkCCH0Jxdl-vDN8HOc1E";

const supabase = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);

async function sendLetter() {
  alert("2. sendLetter started");

  const title = document.getElementById("title").value.trim();
  const message = document.getElementById("message").value.trim();

  alert("3. Title = " + title);

  const { data, error } = await supabase
    .from("letters")
    .insert([
      {
        title: title,
        message: message
      }
    ]);

  if (error) {
    alert("ERROR: " + error.message);
  } else {
    alert("SUCCESS!");
  }
}