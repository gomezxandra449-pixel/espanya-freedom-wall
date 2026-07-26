// 🔑 PUT YOUR SUPABASE KEYS
const supabaseUrl = "https://sjyjiphjllvnswzgsnwk.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNqeWppcGhqbGx2bnN3emdzbndrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ5OTExMzYsImV4cCI6MjEwMDU2NzEzNn0.0oFmsAsVHB96RgOs33sCTYDPkCCH0Jxdl-vDN8HOc1E";

const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);

// 🚀 POST MESSAGE
async function postMessage() {
  const input = document.getElementById("messageInput");
  const message = input.value.trim();

  if (!message) {
    alert("Write something!");
    return;
  }

  const { error } = await supabaseClient
    .from("freedom_wall")
    .insert([{ content: message }]);

  if (error) {
    console.error(error);
    alert("Failed to post!");
  } else {
    alert("Posted!");
    input.value = "";
  }
}