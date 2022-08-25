// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const modal = document.querySelector("div#modal");
modal.setAttribute("class", "hidden")

const heartBtn = document.getElementsByClassName("like-glyph");
heartBtn.addEventListener('click', ()=>{
  mimicServerCall()
  .then(()=>{
    if(heartBtn === EMPTY_HEART){
      heartBtn.textContent = FULL_HEART;
      heartBtn.setAttribute("class", "activated-heart");
    }
    else{
      heartBtn.textContent = EMPTY_HEART;
      heartBtn.classList.remove("activated-heart")
    }    
  })
  .catch((e)=>{
    setTimeout(()=>{
      modal.classList.remove("hidden");
      modal.textContent = e;
    },3000)
    

  })
})






//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
