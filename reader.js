// 🔑 SAME KEYS HERE
const supabaseUrl = "https://sjyjiphjllvnswzgsnwk.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNqeWppcGhqbGx2bnN3emdzbndrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ5OTExMzYsImV4cCI6MjEwMDU2NzEzNn0.0oFmsAsVHB96RgOs33sCTYDPkCCH0Jxdl-vDN8HOc1E";

const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);

// 📖 LOAD MESSAGES
async function loadMessages() {
  const { data, error } = await supabaseClient
    .from("freedom_wall")
    .select("*")
    .order("id", { ascending: false });

  const container = document.getElementById("postsContainer");
  container.innerHTML = "";

  if (error) {
    console.error(error);
    container.innerHTML = "<p>Error loading messages</p>";
    return;
  }

  if (data.length === 0) {
    container.innerHTML = "<p>No messages yet...</p>";
    return;
  }

  data.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    card.textContent = item.content;
    container.appendChild(card);
  });
}

// 🔄 RUN
loadMessages();