const key = document.getElementById("key");
const keypressContainer = document.querySelector(".keypress");

const playsong = (key) => {
  const audio = new Audio();
  audio.src = "./audio/" + key + ".mp3";
  audio.play();
};

document.addEventListener("keypress", (e) => {
  if (e.key === "b") {
    keypressContainer.style.background = "blue";
  } else if (e.key === "e") {
    keypressContainer.style.background = "yellow";
  } else if (e.key === "p") {
    keypressContainer.style.background = "pink";
  } else if (e.key === "a") {
    keypressContainer.style.background = "red";
  } else if (e.key === "m") {
    keypressContainer.style.background = "orange";
  }

  key.textContent = e.key;
  playsong(e.key);
});
