const SUPABASE_URL = "https://sjyjiphjllvnswzgsvnw.supabase.co";

const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNqeWppcGhqbGx2bnN3emdzbndrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ5OTExMzYsImV4cCI6MjEwMDU2NzEzNn0.0oFmsAsVHB96RgOs33sCTYDPkCCH0Jxdl-vDN8HOc1E";

const supabase = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);

async function sendLetter() {
  const title = document.getElementById("title").value.trim();
  const message = document.getElementById("message").value.trim();
  const status = document.getElementById("status");

  if (!title || !message) {
    status.textContent = "Please enter a title and message.";
    return;
  }

  const { error } = await supabase
    .from("letters")
    .insert([
      {
        title: title,
        message: message
      }
    ]);

  if (error) {
    status.textContent = "Error: " + error.message;
  } else {
    status.textContent = "✅ Letter sent successfully!";
    document.getElementById("title").value = "";
    document.getElementById("message").value = "";
  }
}