var quote=["Be yourself; everyone else is already taken.”― Oscar Wilde" ,
    "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”― Marilyn Monroe",
    "“So many books, so little time.”― Frank Zappa",
    "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”― Albert Einstein"
]
    

var randomIndex = Math.floor(Math.random() * quote.length);
function RandomQuote() {
      if (quote.length === 0) {
        document.getElementById("mainpargh").innerHTML = "Refresh The Page For Quotes";
        return;
      }

      var randomIndex = Math.floor(Math.random() * quote.length);
      document.getElementById("mainpargh").innerHTML = quote[randomIndex];
    
      quote.splice(randomIndex, 1);
    }
// document.getElementById("mainpargh").innerHTML=(quote[randomIndex]);