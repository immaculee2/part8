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
