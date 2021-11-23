const quotes = [
  {
    quote: "The way to get started is to quit talking and begin.",
    author: "Walt Disney",
  },
  {
    quote: "Success is not final, failure is not fatal: it is the COURAGE TO CONTINUE that counts.",
    author: "Winston Curchill",
  },
  {
    quote: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    author: "Albert Einstein",
  },
  {
    quote: "Never bend your head. Always hold it high. Look the world straight in the eye.",
    author: "Helen Keller",
  },
  {
    quote: "Noting is impossible. The word itself says \"I'm possible!\".",
    author: "Audery Hepburn",
  },
  {
    quote: "Never bend your head. Always hold it high. Look the world straight in the eye.",
    author: "Helen Keller",
  },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;