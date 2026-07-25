alert("1. app.js loaded");

const SUPABASE_URL = "https://sjyjiphjllvnswzgsvnw.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNqeWppcGhqbGx2bnN3emdzbndrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ5OTExMzYsImV4cCI6MjEwMDU2NzEzNn0.0oFmsAsVHB96RgOs33sCTYDPkCCH0Jxdl-vDN8HOc1E";

alert("2. Before createClient");

const supabase = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);

alert("3. After createClient");

async function sendLetter() {
  alert("4. sendLetter() called");

  const title = document.getElementById("title").value.trim();
  const message = document.getElementById("message").value.trim();

  alert("5. Title: " + title);
}