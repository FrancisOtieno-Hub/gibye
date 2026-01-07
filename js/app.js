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
  {text:"Confidence is not ‘they will like me.’ Confidence is ‘I’ll be fine if they don’t.’", author:"Christina Grimmie"},
  {text:"You are enough just as you are.", author:"Meghan Markle"},
  {text:"She remembered who she was and the game changed.", author:"Lalah Delia"},
  {text:"Confidence comes not from always being right, but from not fearing to be wrong.", author:"Peter T. McIntyre"},
  {text:"Don’t be afraid to shine. The world needs your light.", author:"Original"},
  {text:"I am not what happened to me. I am what I choose to become.", author:"Carl Jung"},
  {text:"It does not matter how slowly you go as long as you do not stop.", author:"Confucius"},
  {text:"Fall seven times, stand up eight.", author:"Japanese Proverb"},
  {text:"The comeback is always stronger than the setback.", author:"Unknown"},
  {text:"I can be changed by what happens to me. But I refuse to be reduced by it.", author:"Maya Angelou"},
  {text:"Strength grows in the moments when you think you can’t go on but you keep going anyway.", author:"Unknown"},
  {text:"Rock bottom became the solid foundation on which I rebuilt my life.", author:"J.K. Rowling"},
  {text:"Persistence guarantees that results are inevitable.", author:"Paramahansa Yogananda"},
  {text:"Scars are proof that you were stronger than whatever tried to hurt you.", author:"Original"},
  {text:"When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.", author:"Henry Ford"},
  {text:"You don’t have to see the whole staircase, just take the first step.", author:"Martin Luther King Jr."},
  {text:"Courage doesn’t always roar. Sometimes courage is the quiet voice at the end of the day saying, ‘I will try again tomorrow.’", author:"Mary Anne Radmacher"},
  {text:"You miss 100% of the shots you don’t take.", author:"Wayne Gretzky"},
  {text:"Feel the fear and do it anyway.", author:"Susan Jeffers"},
  {text:"Leap, and the net will appear.", author:"John Burroughs"},
  {text:"In the middle of every difficulty lies opportunity.", author:"Albert Einstein"},
  {text:"Only those who risk going too far can possibly find out how far one can go.", author:"T.S. Eliot"},
  {text:"Do one thing every day that scares you.", author:"Eleanor Roosevelt"},
  {text:"Bravery is not the absence of fear but the decision that something else is more important.", author:"Original"},
  {text:"A ship is safe in harbor, but that’s not what ships are for.", author:"John A. Shedd"},
  {text:"Fortune favors the brave.", author:"Latin Proverb"},
  {text:"Live as if you were to die tomorrow. Learn as if you were to live forever.", author:"Mahatma Gandhi"},
  {text:"The expert in anything was once a beginner.", author:"Helen Hayes"},
  {text:"Failure is simply the opportunity to begin again, this time more intelligently.", author:"Henry Ford"},
  {text:"If you're not growing, you're dying.", author:"Tony Robbins"},
  {text:"Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.", author:"Albert Schweitzer"},
  {text:"The mind is not a vessel to be filled, but a fire to be kindled.", author:"Plutarch"},
  {text:"Mistakes are proof that you are trying.", author:"Jennifer Lim"},
  {text:"Growth is painful. Change is painful. But nothing is as painful as staying stuck somewhere you don’t belong.", author:"Mandy Hale"},
  {text:"A wise man can learn more from a foolish question than a fool can learn from a wise answer.", author:"Bruce Lee"},
  {text:"Keep going. Your hardest times often lead to the greatest moments of your life.", author:"Original"},
  {text:"We are what we repeatedly do. Excellence, then, is not an act, but a habit.", author:"Aristotle"},
  {text:"Focus is the art of knowing what to ignore.", author:"James Clear"},
  {text:"Discipline is choosing between what you want now and what you want most.", author:"Abraham Lincoln"},
  {text:"Success doesn’t come from what you do occasionally. It comes from what you do consistently.", author:"Marie Forleo"},
  {text:"Don’t count the days. Make the days count.", author:"Muhammad Ali"},
  {text:"The difference between who you are and who you want to be is what you do.", author:"Unknown"},
  {text:"You will never always be motivated. You have to learn to be disciplined.", author:"Unknown"},
  {text:"Where focus goes, energy flows.", author:"Tony Robbins"},
  {text:"Small daily improvements over time lead to stunning results.", author:"Robin Sharma"},
  {text:"Success is nothing more than a few simple disciplines, practiced every day.", author:"Jim Rohn"},
  {text:"Success is not final, failure is not fatal: it is the courage to continue that counts.", author:"Winston Churchill"},
  {text:"Success usually comes to those who are too busy to be looking for it.", author:"Henry David Thoreau"},
  {text:"The road to success and the road to failure are almost exactly the same.", author:"Colin R. Davis"},
  {text:"Don’t aim for success if you want it; just do what you love and believe in, and it will come naturally.", author:"David Frost"},
  {text:"Success is getting what you want. Happiness is wanting what you get.", author:"Dale Carnegie"},
  {text:"Opportunities don’t happen. You create them.", author:"Chris Grosser"},
  {text:"The only place where success comes before work is in the dictionary.", author:"Vidal Sassoon"},
  {text:"If you really look closely, most overnight successes took a long time.", author:"Steve Jobs"},
  {text:"Success isn’t owned. It’s leased. And rent is due every day.", author:"J.J. Watt"},
  {text:"Dream big. Start small. Act now.", author:"Robin Sharma"},
  {text:"I have not failed. I've just found 10,000 ways that won't work.", author:"Thomas Edison"},
  {text:"Our greatest glory is not in never falling, but in rising every time we fall.", author:"Confucius"},
  {text:"Every adversity, every failure, every heartache carries with it the seed of an equal or greater benefit.", author:"Napoleon Hill"},
  {text:"Failure is only the opportunity to begin again, this time more wisely.", author:"Henry Ford"},
  {text:"Success is stumbling from failure to failure with no loss of enthusiasm.", author:"Winston Churchill"},
  {text:"Don’t be ashamed of your story — it may inspire others.", author:"Original"},
  {text:"The master has failed more times than the beginner has even tried.", author:"Stephen McCranie"},
  {text:"What defines us is how well we rise after falling.", author:"Lionel from Maid in Manhattan"},
  {text:"Rock bottom will teach you lessons that mountain tops never will.", author:"Unknown"},
  {text:"Sometimes you win, sometimes you learn.", author:"John C. Maxwell"},
  {text:"The two most important days in your life are the day you are born and the day you find out why.", author:"Mark Twain"},
  {text:"Chase the vision, not the money. The money will end up following you.", author:"Tony Hsieh"},
  {text:"Don’t ask what the world needs. Ask what makes you come alive, and go do it.", author:"Howard Thurman"},
  {text:"Passion is energy. Feel the power that comes from focusing on what excites you.", author:"Oprah Winfrey"},
  {text:"Purpose fuels perseverance.", author:"Original"},
  {text:"Your work is to discover your work and then, with all your heart, to give yourself to it.", author:"Buddha"},
  {text:"Let yourself be silently drawn by the strange pull of what you really love.", author:"Rumi"},
  {text:"When you do things from your soul, you feel a river moving in you, a joy.", author:"Rumi"},
  {text:"Find a job you enjoy doing, and you will never have to work a day in your life.", author:"Confucius"},
  {text:"Purpose is the reason you journey. Passion is the fire that lights the way.", author:"Original"},
  {text:"All our dreams can come true, if we have the courage to pursue them.", author:"Walt Disney"},
  {text:"The future belongs to those who believe in the beauty of their dreams.", author:"Eleanor Roosevelt"},
  {text:"Shoot for the moon. Even if you miss, you'll land among the stars.", author:"Norman Vincent Peale"},
  {text:"A dream written down with a date becomes a goal.", author:"Greg S. Reid"},
  {text:"The only thing worse than being blind is having sight but no vision.", author:"Helen Keller"},
  {text:"Hold fast to dreams, for if dreams die, life is a broken-winged bird that cannot fly.", author:"Langston Hughes"},
  {text:"A goal without a plan is just a wish.", author:"Antoine de Saint-Exupéry"},
  {text:"Dream big and dare to fail.", author:"Norman Vaughan"},
  {text:"You are never too old to set another goal or to dream a new dream.", author:"C.S. Lewis"},
  {text:"Create the highest, grandest vision possible for your life, because you become what you believe.", author:"Oprah Winfrey"},
  {text:"You are braver than you believe, stronger than you seem, and smarter than you think.", author:"A.A. Milne (Winnie the Pooh)"},
  {text:"No one can make you feel inferior without your consent.", author:"Eleanor Roosevelt"},
  {text:"To love oneself is the beginning of a lifelong romance.", author:"Oscar Wilde"},
  {text:"You’ve been criticizing yourself for years and it hasn’t worked. Try approving of yourself and see what happens.", author:"Louise Hay"},
  {text:"The moment you doubt whether you can fly, you cease forever to be able to do it.", author:"J.M. Barrie (Peter Pan)"},
  {text:"You alone are enough. You have nothing to prove to anybody.", author:"Maya Angelou"},
  {text:"Act as if what you do makes a difference. It does.", author:"William James"},
  {text:"Don’t wait until you’re confident to start. Start and you’ll become confident.", author:"Original"},
  {text:"Your mindset determines your future.", author:"Original"},
  {text:"Success begins the moment you decide not to give up.", author:"Original"},
  {text:"Every morning you have two choices: continue to sleep with your dreams, or wake up and chase them.", author:"Original"},
  {text:"The secret of getting ahead is getting started.", author:"Mark Twain"},
  {text:"Worry is a misuse of your imagination.", author:"Unknown"},
  {text:"What you do today can improve all your tomorrows.", author:"Ralph Marston"},
  {text:"Don’t let yesterday take up too much of today.", author:"Will Rogers"},
  {text:"The only way to define your limits is by going beyond them.", author:"Arthur C. Clarke"},
  {text:"Your attitude determines your direction.", author:"Original"},
  {text:"Doubt kills more dreams than effort ever will.", author:"Unknown"},
  {text:"Believe in the person you are becoming.", author:"Original"},
  {text:"A little progress each day adds up to big results.", author:"Unknown"},
  {text:"Push yourself because no one else is going to do it for you.", author:"Unknown"},
  {text:"Don’t stop until you’re proud.", author:"Original"},
  {text:"The struggle you’re in today is developing the strength you need for tomorrow.", author:"Robert Tew"},
  {text:"Success is a journey, not a destination.", author:"Zig Ziglar"},
  {text:"It’s never too late to be what you might have been.", author:"George Eliot"},
  {text:"If you believe it will work out, you’ll see opportunities. If you believe it won’t, you’ll see obstacles.", author:"Wayne Dyer"},
  {text:"Success isn’t measured by money, but by the impact you make.", author:"Original"},
  {text:"The best view comes after the hardest climb.", author:"Unknown"},
  {text:"If you want to change the world, change yourself first.", author:"Mahatma Gandhi"},
  {text:"Little by little, one travels far.", author:"J.R.R. Tolkien"},
  {text:"Life is 10% what happens to you and 90% how you react to it.", author:"Charles Swindoll"},
  {text:"Don't watch the clock; do what it does. Keep going.", author:"Sam Levenson"},
  {text:"Your potential is endless.", author:"Original"},
  {text:"In the end, we only regret the chances we didn't take.", author:"Lewis Carroll"},
  {text:"Your dreams are valid.", author:"Lupita Nyong’o"},
  {text:"A champion is defined not by their wins but by how they recover when they fall.", author:"Serena Williams"},
  {text:"What lies behind us and what lies before us are tiny matters compared to what lies within us.", author:"Ralph Waldo Emerson"},
  {text:"Success is the sum of small efforts, repeated day in and day out.", author:"Robert Collier"},
  {text:"Don't be pushed by your problems. Be led by your dreams.", author:"Ralph Waldo Emerson"},
  {text:"Courage is grace under pressure.", author:"Ernest Hemingway"},
  {text:"Where there is no struggle, there is no strength.", author:"Oprah Winfrey"},
  {text:"You can’t build a reputation on what you are going to do.", author:"Henry Ford"},
  {text:"Your life does not get better by chance. It gets better by change.", author:"Jim Rohn"},
  {text:"He who is not courageous enough to take risks will accomplish nothing in life.", author:"Muhammad Ali"},
  {text:"Don't let the fear of losing be greater than the excitement of winning.", author:"Robert Kiyosaki"},
  {text:"Act as if it were impossible to fail.", author:"Dorothea Brande"},
  {text:"Success is not about being the best. It’s about always getting better.", author:"Original"},
  {text:"Dreams don’t work unless you do.", author:"John C. Maxwell"},
  {text:"Life begins at the end of your comfort zone.", author:"Neale Donald Walsch"},
  {text:"If the plan doesn’t work, change the plan—never the goal.", author:"Unknown"},
  {text:"Start small, think big, act now.", author:"Original"},
  {text:"Don't quit. You are already in pain. You are already hurt. Get a reward from it.", author:"Eric Thomas"},
  {text:"Hustle in silence and let your success make the noise.", author:"Unknown"},
  {text:"The more you practice, the better you get. The harder you train, the better you become.", author:"Unknown"},
  {text:"Discipline is doing what needs to be done, even when you don’t feel like doing it.", author:"Unknown"},
  {text:"Success doesn’t require perfection. It requires persistence.", author:"Original"},
  {text:"It’s not about being the best. It’s about being better than yesterday.", author:"Unknown"},
  {text:"Success is the courage to continue after failure.", author:"Original"},
  {text:"Set a goal that makes you want to jump out of bed in the morning.", author:"Original"},
  {text:"Be the energy you want to attract.", author:"Original"},
  {text:"Consistency is harder when no one is clapping for you. But that’s the key to success.", author:"Unknown"},
  {text:"Storms make trees take deeper roots.", author:"Dolly Parton"},
  {text:"If you get tired, learn to rest—not to quit.", author:"Banksy"},
  {text:"A year from now, you’ll wish you had started today.", author:"Karen Lamb"},
  {text:"Success is built on the foundation of discipline.", author:"Original"},
  {text:"You either win or you learn—never lose.", author:"Nelson Mandela"},
  {text:"Don’t be afraid of being a beginner.", author:"Original"},
  {text:"Your future self is watching you. Make them proud.", author:"Original"},
  {text:"You attract what you are, not what you want. If you want great, be great.", author:"Original"},
  {text:"Every expert was once a beginner.", author:"Helen Hayes"},
  {text:"You have within you right now, everything you need to deal with whatever the world can throw at you.", author:"Brian Tracy"},
  {text:"Comfort is the enemy of progress.", author:"Unknown"},
  {text:"Be fearless in the pursuit of what sets your soul on fire.", author:"Jennifer Lee"},
  {text:"Sometimes the smallest step in the right direction ends up being the biggest step of your life.", author:"Naeem Callaway"},
  {text:"The future depends on what you do today.", author:"Mahatma Gandhi"},
  {text:"You can’t pour from an empty cup. Take care of yourself first.", author:"Unknown"},
  {text:"Nothing will work unless you do.", author:"Maya Angelou"},
  {text:"The world is changed by your example, not your opinion.", author:"Paulo Coelho"},
  {text:"Success is rented. Rent is due every day.", author:"J.J. Watt"},
  {text:"A river cuts through rock not because of its power but because of its persistence.", author:"James N. Watkins"},
  {text:"Don’t downgrade your dream just to fit your reality. Upgrade your conviction to match your destiny.", author:"Stuart Scott"},
  {text:"The only person you are destined to become is the person you decide to be.", author:"Ralph Waldo Emerson"},
  {text:"If you can't fly, then run. If you can't run, then walk. If you can't walk, then crawl. But by all means keep moving.", author:"Martin Luther King Jr."},
  {text:"Strength doesn’t come from what you can do. It comes from overcoming the things you once thought you couldn’t.", author:"Rikki Rogers"},
  {text:"Never bend your head. Always hold it high. Look the world straight in the eye.", author:"Helen Keller"},
  {text:"You make your own luck by working hard.", author:"Unknown"},
  {text:"Success is a decision, not a gift.", author:"Original"},
  {text:"A negative mind will never give you a positive life.", author:"Unknown"},
  {text:"Don’t be afraid to fail. Be afraid not to try.", author:"Michael Jordan"},
  {text:"Big journeys begin with small steps.", author:"Unknown"},
  {text:"Everything you want is on the other side of fear.", author:"Jack Canfield"},
  {text:"If you want to fly, give up everything that weighs you down.", author:"Buddha"},
  {text:"What you think, you become. What you feel, you attract. What you imagine, you create.", author:"Buddha"},
  {text:"Success happens to those who are busy working for it.", author:"Unknown"},
  {text:"Use your voice, even if it shakes.", author:"Original"},
  {text:"Don’t let small minds convince you that your dreams are too big.", author:"Unknown"},
  {text:"Today is your opportunity to build the tomorrow you want.", author:"Ken Poirot"},
  {text:"Great things never come from comfort zones.", author:"Unknown"},
  {text:"Life is tough, but so are you.", author:"Original"},
  {text:"Faith is taking the first step even when you don’t see the whole staircase.", author:"Martin Luther King Jr."},
  {text:"You don’t find willpower. You create it.", author:"Original"},
  {text:"Success is not for the lazy.", author:"Original"},
  {text:"The sun will rise and we will try again.", author:"Twenty One Pilots"},
  {text:"Your only limit is your mind.", author:"Unknown"},
  {text:"Broken crayons still color.", author:"Original"},
  {text:"Work hard in silence. Let success be your noise.", author:"Frank Ocean"},
  {text:"You grow through what you go through.", author:"Original"},
  {text:"Failure is not falling down but refusing to get up.", author:"Chinese Proverb"},
  {text:"Don’t fear moving slowly. Fear standing still.", author:"Japanese Proverb"},
  {text:"The dream is free. The hustle is sold separately.", author:"Unknown"},
  {text:"If it doesn’t challenge you, it won’t change you.", author:"Fred DeVito"},
  {text:"Be stronger than your strongest excuse.", author:"Original"},
  {text:"Don’t tell people your plans. Show them your results.", author:"Unknown"},
  {text:"Fall in love with the process, and the results will come.", author:"Original"},
  {text:"You deserve the life you dream about.", author:"Original"},
  {text:"You didn’t wake up to be average.", author:"Original"},
  {text:"One step at a time is still progress.", author:"Unknown"},
  {text:"You owe it to yourself to become everything you’ve ever dreamed of being.", author:"Original"},
  {text:"The bigger the challenge, the bigger the growth.", author:"Original"},
  {text:"Don’t look back. You’re not going that way.", author:"Unknown"}
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
