let passwordEl = document.getElementById("password");

function generate() {
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!#$%&'()*+,-./";
  let randomPassword = " ";
  for (let i = 0; i < 13; i++) {
    randomPassword += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  passwordEl.value = randomPassword;
}
