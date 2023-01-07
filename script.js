const quotes = [
  {
    quote: `“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.”`,
    writer: ` "Martin Fowler"`,
  },
  {
    quote: `“First, solve the problem. Then, write the code.”`,
    writer: `"John Johnson"`,
  },
  {
    quote: `“Experience is the name everyone gives to their mistakes.” `,
    writer: `"Oscar Wilde"`,
  },
  {
    quote: ` “When to use iterative development? You should use iterative development only on projects that you want to succeed.” `,
    writer: ` "Martin Fowler" `,
  },
  {
    quote: `“Before software can be reusable it first has to be usable.” `,
    writer: `"Ralph Johnson" `,
  },
  {
    quote: ` “Optimism is an occupational hazard of programming: feedback is the treament. “ `,
    writer: ` "Kent Beck"`,
  },
];

let btn = document.querySelector(".btn");
let qu = document.querySelector(".quote");
let wr = document.querySelector(".writer");

btn.addEventListener("click", function () {
  let ran = Math.floor(Math.random() * quotes.length);
  qu.innerText = quotes[ran].quote;
  wr.innerText = quotes[ran].writer;
});
