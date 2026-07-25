const SUPABASE_URL="https://sjyjiphjllvnswzgsvnw.supabase.co";

const SUPABASE_ANON_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNqeWppcGhqbGx2bnN3emdzbndrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ5OTExMzYsImV4cCI6MjEwMDU2NzEzNn0.0oFmsAsVHB96RgOs33sCTYDPkCCH0Jxdl-vDN8HOc1E";

import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://sjyjiphjllvnswzgsnwk.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

async function loadLetters(){

const {data,error}=await supabase
.from("letters")
.select("*")
.order("id",{ascending:false});

const div=document.getElementById("letters");

if(error){
div.innerHTML=error.message;
return;
}

data.forEach(letter=>{

div.innerHTML+=`
<div style="margin-bottom:20px;border-bottom:1px solid #ddd;padding-bottom:10px;">
<h3>${letter.title}</h3>
<p>${letter.message}</p>
</div>
`;

});

}

loadLetters();