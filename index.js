const subscribe = document.getElementById("subscribe");
let subscribeBlack = document.getElementById("subscribe-black");
let subscribeRed = document.getElementById("subscribe-red");
let closeSign = document.getElementById("closeSign")
subscribeBlack.addEventListener("click",function(){
    subscribe.classList.remove("hidden");
})
subscribeRed.addEventListener("click",function(){
    subscribe.classList.add("hidden")
})
 closeSign.addEventListener("click",function(){
    subscribe.classList.add("hidden")
 })
//  let likebtn = document.getElementById("likebtn");
//  likebtn.addEventListener("click", function(){
//     likebtn.textContent = "liked";
//  })
const likeBtns = document.querySelectorAll(".likebtn");

likeBtns.forEach(function(btn) {
    btn.addEventListener("click", function()
     {
        
         btn.textContent = "Liked" 
           
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
