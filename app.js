// 🔑 PUT YOUR SUPABASE KEYS
const supabaseUrl = "https://YOUR_PROJECT_ID.supabase.co";
const supabaseKey = "YOUR_ANON_PUBLIC_KEY";

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
    .from("table")
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