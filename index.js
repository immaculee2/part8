
const likeBtns = document.querySelectorAll(".likebtn");

likeBtns.forEach(function(btn) {
    btn.addEventListener("click", function()
     {
        
         btn.textContent = "✔Liked" 
           
        } 
         
)});
let reply = document.getElementById("reply");
let replyOne = document.getElementById("replyOne");
reply.addEventListener("click",function(){
    replyOne.classList.toggle("hidden")
})
let replyTwo = document.getElementById("replyTwo");
let reply2 = document.getElementById("reply2");
replyTwo.addEventListener("click",function(){
    reply2.classList.toggle("hidden")
})
let replyThree = document.getElementById("replyThree");
let reply3 = document.getElementById("reply3");
reply3.addEventListener("click",function(){
    replyThree.classList.toggle("hidden")
})


  const subscribeDiv = document.getElementById("subscribeDiv");
const subscribeRed = document.getElementById("subscribe-red"); // optional if closeSign exists
const closeSign = document.getElementById("closeSign");
const subscribe = document.getElementById("subscribe-redOne");
const subscribeBlack = document.getElementById("subscribe-black");

// Show modal when clicking either "subscribeBlack" or "subscribe"
subscribeBlack.addEventListener("click", function(){
    subscribeDiv.classList.remove("hidden");
})

subscribe.addEventListener("click", function(){
    subscribeDiv.classList.remove("hidden");
})

// Hide modal when clicking close button
closeSign.addEventListener("click", function(){
    subscribeDiv.classList.add("hidden");
})

  subscribeRed.addEventListener("click", function(){
    subscribeDiv.classList.add("hidden")

  })

  
