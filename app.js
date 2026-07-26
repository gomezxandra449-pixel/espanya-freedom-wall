// 🔑 PUT YOUR SUPABASE KEYS
const supabaseUrl = "https://sjyjiphjllvnswzgsnwk.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNqeWppcGhqbGx2bnN3emdzbndrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ5OTExMzYsImV4cCI6MjEwMDU2NzEzNn0.0oFmsAsVHB96RgOs33sCTYDPkCCH0Jxdl-vDN8HOc1E";

const { createClient } = supabase;
const supabaseClient = createClient(supabaseUrl, supabaseKey);

// 🚀 POST MESSAGE
async function postMessage() {
  const input = document.getElementById("messageInput");
  const message = input.value.trim();

  if (!message) {
    alert("Write something!");
    return;
  }

  const { error } = await supabaseClient
    .from("letters")
.insert([{
  title: "Anonymous",
  message: message
}])

  if (error) {
    console.error(error);
    alert("Error: " + error.message);c
  } else {
    alert("Posted!");
    input.value = "";
  }
}