
const supabaseUrl = "https://sjyjiphjllvnswzgsnwk.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNqeWppcGhqbGx2bnN3emdzbndrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ5OTExMzYsImV4cCI6MjEwMDU2NzEzNn0.0oFmsAsVHB96RgOs33sCTYDPkCCH0Jxdl-vDN8HOc1E";

const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);

// 📤 SEND MESSAGE
async function sendMessage() {
  const message = document.getElementById("messageInput").value;

  if (!message) {
    alert("Write something first!");
    return;
  }

  const { error } = await supabaseClient
    .from("letters") // table name
    .insert([{ content: message }]);

  if (error) {
    console.error(error);
    alert("Error sending message!");
  } else {
    document.getElementById("messageInput").value = "";
    loadMessages();
  }
}

// 📥 LOAD MESSAGES
async function loadMessages() {
  const { data, error } = await supabaseClient
    .from("letters")
    .select("*")
    .order("id", { ascending: false });

  if (error) {
    console.error(error);
    return;
  }

  const list = document.getElementById("messageList");
  list.innerHTML = "";

  data.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item.content;
    list.appendChild(li);
  });
}

// 🔄 LOAD ON START
loadMessages();