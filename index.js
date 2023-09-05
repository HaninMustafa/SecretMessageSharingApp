//Handelling form submition
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.querySelector("input");

  //Base64 encoding
  console.log(input.value);
});
