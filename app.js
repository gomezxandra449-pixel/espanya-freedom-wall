
const SUPABASE_URL = "https://sjyjiphjllvnswzgsvnw.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNqeWppcGhqbGx2bnN3emdzbndrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ5OTExMzYsImV4cCI6MjEwMDU2NzEzNn0.0oFmsAsVHB96RgOs33sCTYDPkCCH0Jxdl-vDN8HOc1E";

// create client
const supabase = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);

// ===============================
// Send Letter
// ===============================
async function sendLetter() {
  const titleInput = document.getElementById("title");
  const messageInput = document.getElementById("message");
  const status = document.getElementById("status");

  const title = titleInput.value.trim();
  const message = messageInput.value.trim();

  // check empty
  if (!title || !message) {
    status.textContent = "Please enter a title and message.";
    return;
  }

  status.textContent = "Sending...";

  try {
    const { error } = await supabase
      .from("letters")
      .insert([{ title, message }]);

    if (error) throw error;

    status.textContent = "✅ Letter sent!";
    titleInput.value = "";
    messageInput.value = "";

  } catch (err) {
    console.error(err);
    status.textContent = "❌ Error: " + err.message;
  }
}

// ===============================
// Button Click
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("sendBtn");
  button.addEventListener("click", sendLetter);
});