//Displying the message
const { hash } = window.location;
const message = atob(hash.replace("#", ""));
if (message) {
  document.querySelector("#message-form").classList.add("hide");
  document.querySelector("#message-show").classList.remove("hide");
  document.querySelector("h1").innerHTML = message;
}

//Handelling form submition
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  //toggoling element visisbility
  document.querySelector("#message-form").classList.add("hide");
  document.querySelector("#link-form").classList.remove("hide");

  const input = document.querySelector("#message-input");
  //Base64 encoding
  const encrypted = btoa(input.value);

  //Generating the URL
  const linkInput = document.querySelector("#link-input");
  linkInput.value = `${window.location}#${encrypted}`;
  linkInput.select(); //to select the link to copy it easily
});
