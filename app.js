// ==============================
// Supabase Connection
// ==============================

alert("1. app.js loaded");

const SUPABASE_URL = "https://sjyjiphjllvnswzgsvnw.supabase.co";
const SUPABASE_ANON_KEY = "YOUR_ANON_KEY_HERE";

const supabase = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);

// ==============================
// Send Letter
// ==============================

async function sendLetter() {
  alert("2. sendLetter() started");

  const title = document.getElementById("title").value.trim();
  const message = document.getElementById("message").value.trim();
  const status = document.getElementById("status");

  if (!title || !message) {
    alert("3. Title or message is empty");
    status.textContent = "Please enter a title and message.";
    return;
  }

  alert("4. Sending to Supabase...");

  const { error } = await supabase
    .from("letters")
    .insert([
      {
        title: title,
        message: message
      }
    ]);

  if (error) {
    alert("5. ERROR: " + error.message);
    status.textContent = "Error: " + error.message;
  } else {
    alert("6. SUCCESS!");
    status.textContent = "✅ Letter sent successfully!";

    document.getElementById("title").value = "";
    document.getElementById("message").value = "";
  }
}