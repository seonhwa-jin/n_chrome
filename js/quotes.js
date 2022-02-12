const quotes = [
  {
    quote: "Blaze with the fire that is never extinguished.",
    author: "Luisa Sigea",
  },
  {
    quote: "If you're never scared or embarrassed or hurt, it means you never take any chances.",
    author: "Julia Sorel",
  },
  {
    quote: "Genius is nothing but a great capacity for patience.",
    author: "Buffon",
  },
  {
    quote: "Self-respect is the cornerstone of all virtue.",
    author: "John Herschel",
  },
  {
    quote: "God doesn't require us to succeed; he only requires that you try.",
    author: "Mother Teresa",
  },
  {
    quote: "Just because something doesn't do what you planned it to do doesn't mean it's useless.",
    author: "Thomas A. Edison",
  },
  {
    quote: "Education is a progressive discovery of our own ignorance.",
    author: "Will Durant",
  },
  {
    quote: "It is only the ignorant who despise education.",
    author: "Publilius Syrus",
  },
  {
    quote: "A great secret of success is to go through life as a man who never gets used up.",
    author: "Albert Schweitzer",
  },
  {
    quote: "You are built not to shrink down to less but to blossom into more.",
    author: "Oprah Winfrey",
  },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;