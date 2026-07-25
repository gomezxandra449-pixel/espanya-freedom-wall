console.log("JS LOADED");
// ✅ TEST: check if JS loads
alert("app.js loaded");

// ===============================
// Supabase Setup
// ===============================

// 🔴 REPLACE THESE WITH YOUR REAL VALUES
const SUPABASE_URL = "https://sjyjiphjllvnswzgsnwk.supabase.co/rest/v1/";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNqeWppcGhqbGx2bnN3emdzbndrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ5OTExMzYsImV4cCI6MjEwMDU2NzEzNn0.0oFmsAsVHB96RgOs33sCTYDPkCCH0Jxdl-vDN8HOc1E";

// ✅ create client
const supabase = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);

// ===============================
// Send Letter (GLOBAL FUNCTION)
// ===============================
window.sendLetter = async function () {
  alert("Button clicked"); // ✅ debug

  const title = document.getElementById("title").value.trim();
  const message = document.getElementById("message").value.trim();
  const status = document.getElementById("status");

  if (!title || !message) {
    status.textContent = "Please enter a title and message.";
    return;
  }

  status.textContent = "Sending...";

  try {
    const { error } = await client
  .from("letters")
  .insert([{ title, message }]);
    if (error) throw error;

    status.textContent = "✅ Sent successfully!";
  } catch (err) {
    console.error(err);
    status.textContent = "❌ Error: " + err.message;
  }
};