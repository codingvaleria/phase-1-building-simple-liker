// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likeButtons = document.getElementsByClassName("like");

for (const likeButton of likeButtons) {
  likeButton.addEventListener("click", (event) => {
    mimicServerCall()
      .then(() => {
        likeButton.innerHTML = `Like! <span class="like-glyph activated-heart">${FULL_HEART}</span>`;
        likeButton.addEventListener("click", (event) => {
          likeButton.innerHTML = `Like! <span class="like-glyph ">${EMPTY_HEART}</span>`;

        })
      })
      .catch((error) => {
        const modal = document.getElementById("modal")
        modal.setAttribute("class", "");
        const modalMessage = document.getElementById("modal-message")
        modalMessage.innerHTML = error;
        setTimeout(() => {
          modal.setAttribute("class", "hidden");
        }, 3000);
      })
  })

}




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
