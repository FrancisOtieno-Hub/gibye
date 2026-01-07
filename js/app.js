/* ===== Splash & Main ===== */
window.addEventListener('load', () => hideSplash());

function hideSplash() {
  const splash = document.getElementById('splash');
  splash.style.opacity = 0;
  setTimeout(() => {
    splash.style.display = 'none';
    const main = document.getElementById('main');
    main.style.display = 'block';
    setTimeout(() => main.style.opacity = 1, 50);
    showNextQuote(); // show first quote
  }, 800);
}

/* ===== Quotes Array ===== */
const quotes = [
  {text:"Believe you can and you're halfway there.", author:"Theodore Roosevelt"},
  {text:"You were born to be real, not perfect.", author:"Unknown"},
  {text:"Doubt kills more dreams than failure ever will.", author:"Suzy Kassem"},
  {text:"Your value doesn’t decrease based on someone’s inability to see your worth.", author:"Unknown"},
  // ... add all your other quotes here ...
];

/* ===== Shuffle & LocalStorage Helpers ===== */
function shuffle(array) {
  for (let i = array.length-1; i>0; i--){
    const j = Math.floor(Math.random()*(i+1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function getShuffledQuotes() {
  let shuffled = JSON.parse(localStorage.getItem('shuffledQuotes'));
  if(!shuffled || shuffled.length === 0){
    shuffled = [...quotes];
    shuffle(shuffled);
    localStorage.setItem('shuffledQuotes', JSON.stringify(shuffled));
  }
  return shuffled;
}

/* ===== History Management ===== */
let history = JSON.parse(localStorage.getItem('quoteHistory')) || [];
let currentIndex = history.length - 1;
let shuffled = getShuffledQuotes();

/* ===== Display Quote ===== */
function displayQuote(quote, saveToHistory = true) {
  const quoteBox = document.getElementById('quote-box');
  quoteBox.style.opacity = 0;
  setTimeout(() => {
    document.getElementById('quote').innerText = quote.text;
    document.getElementById('author').innerText = "- " + quote.author;
    quoteBox.style.opacity = 1;
  }, 200);

  if(saveToHistory){
    history = history.slice(0, currentIndex+1); // truncate forward history if user went back
    history.push(quote);
    currentIndex = history.length - 1;
    localStorage.setItem('quoteHistory', JSON.stringify(history));
  }
}

/* ===== Show Next Quote ===== */
function showNextQuote() {
  if(currentIndex < history.length-1){
    // if user went back, just move forward in history
    currentIndex++;
    displayQuote(history[currentIndex], false);
  } else {
    if(shuffled.length === 0) shuffled = getShuffledQuotes();
    const nextQuote = shuffled.shift();
    displayQuote(nextQuote);
    localStorage.setItem('shuffledQuotes', JSON.stringify(shuffled));
  }
}

/* ===== Show Previous Quote ===== */
function showPreviousQuote() {
  if(currentIndex > 0){
    currentIndex--;
    displayQuote(history[currentIndex], false);
  }
}

/* ===== Random Quote ===== */
function showRandomQuote() {
  if(shuffled.length === 0) shuffled = getShuffledQuotes();
  const randomIndex = Math.floor(Math.random() * shuffled.length);
  const randomQuote = shuffled.splice(randomIndex,1)[0];
  displayQuote(randomQuote);
  localStorage.setItem('shuffledQuotes', JSON.stringify(shuffled));
}

/* ===== Share Quote ===== */
function shareQuote() {
  const text = document.getElementById('quote').innerText + " " + document.getElementById('author').innerText;
  if(navigator.share){
    navigator.share({text});
  } else {
    navigator.clipboard.writeText(text);
    alert("Quote copied to clipboard!");
  }
}

/* ===== Notifications ===== */
function enableNotifications() {
  if (!("Notification" in window)) return alert("Notifications not supported.");
  Notification.requestPermission().then(permission => {
    if(permission==="granted"){
      localStorage.setItem("notificationsEnabled", "true");
      scheduleDailyNotification();
      alert("Daily notifications enabled!");
    } else alert("Notifications denied.");
  });
}

function scheduleDailyNotification() {
  const now = new Date();
  let notificationTime = new Date();
  notificationTime.setHours(9,0,0,0);
  if(now > notificationTime) notificationTime.setDate(notificationTime.getDate()+1);
  setTimeout(() => {
    sendDailyNotification();
    setInterval(sendDailyNotification, 24*60*60*1000);
  }, notificationTime-now);
}

function sendDailyNotification() {
  const today = new Date();
  const index = today.getDay() % quotes.length;
  const quote = quotes[index];
  new Notification("Gibye Motivation", {body: quote.text + " — " + quote.author});
}

if(localStorage.getItem("notificationsEnabled")==="true" && Notification.permission==="granted") {
  scheduleDailyNotification();
}

/* ===== Button Events ===== */
document.getElementById('btn-random').addEventListener('click', showRandomQuote);
document.getElementById('btn-previous').addEventListener('click', showPreviousQuote);
document.getElementById('btn-next').addEventListener('click', showNextQuote);
document.getElementById('btn-share').addEventListener('click', shareQuote);
document.getElementById('btn-notify').addEventListener('click', enableNotifications);

/* ===== Service Worker Registration ===== */
if('serviceWorker' in navigator){
  window.addEventListener('load',()=>{
    navigator.serviceWorker.register('/service-worker.js')
      .then(reg=>console.log('SW registered', reg))
      .catch(err=>console.log('SW failed', err));
  });
}
