const btn = document.querySelector(".talk");

const content = document.querySelector(".content");

// Greetinig
const greeting = [
  "I'm great thanks for asking, Ramadan Mubarak Amin",
  "I'm better than you haha!",
  "I'm feeling awesome because IID is arround the corner",
  "I'm doing great, What about you?"
];
// What kind of person is he
const arab = [
  "Arab is an amazing friend of mine",
  "is he from Saudi Arabia, he seems more like saudis than somali haha!",
  "he's very professional and kind ",
  "Yes, He should be studying Data science instead of International Trade hahah! just kidding ",
  "He seems very happy every time "
];

// define speach recognition
const speechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new speechRecognition();

recognition.onstart = function() {
  console.log("Voice regnition started You can speak now ....");
};
recognition.onresult = function(event) {
  const current = event.resultIndex;
  const transcript = event.results[current][0].transcript;
  content.textContent = transcript;
  Speak(transcript);
};

// listen event
btn.addEventListener("click", e => {
  recognition.start();
  content.textContent = "I'm listening ... ";
  hideText();
});

function Speak(message) {
  const speech = new SpeechSynthesisUtterance();
  speech.text =
    "I don't know what you said, and I'm feeling hungry right now so back to me after I eat";
  if (message.includes("friend")) {
    const text = arab[Math.floor(Math.random() * arab.length)];
    speech.text = text;
  }
  if (message.includes("how are you")) {
    const text = greeting[Math.floor(Math.random() * greeting.length)];
    speech.text = text;
  }

  speech.valume = 1;
  speech.rate = 1;
  speech.pitch = 1;
  window.speechSynthesis.speak(speech);
}

function hideText() {
  setTimeout(() => {
    content.textContent = "";
  }, 9000);
}
