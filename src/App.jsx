import { useState } from 'react'
import './App.css'

function App() {  

  const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "The best way to predict the future is to create it. - Peter Drucker",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "You miss 100% of the shots you don't take. - Wayne Gretzky",
    "Whether you think you can or you think you can't, you're right. - Henry Ford",
    "I have not failed. I've just found 10,000 ways that won't work. - Thomas Edison",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Hardships often prepare ordinary people for an extraordinary destiny. - C.S. Lewis",
    "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us. - Ralph Waldo Emerson",
    "The purpose of our lives is to be happy. - Dalai Lama",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "Get busy living or get busy dying. - Stephen King",
    "You have within you right now, everything you need to deal with whatever the world can throw at you. - Brian Tracy",
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson",
    "Perfection is not attainable, but if we chase perfection we can catch excellence. - Vince Lombardi",
    "What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
    "The only place where success comes before work is in the dictionary. - Vidal Sassoon",
    "Don't be afraid to give up the good to go for the great. - John D. Rockefeller",
    "I find that the harder I work, the more luck I seem to have. - Thomas Jefferson",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "I never dreamed about success. I worked for it. - Estée Lauder",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
    "The difference between who you are and who you want to be is what you do. - Charles Duhigg",
    "Success is walking from failure to failure with no loss of enthusiasm. - Winston Churchill",
    "If you are not willing to risk the usual, you will have to settle for the ordinary. - Jim Rohn",
    "Opportunities don't happen. You create them. - Chris Grosser",
    "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart. - Roy T. Bennett",
    "Dream big and dare to fail. - Norman Vaughan",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "Act as if what you do makes a difference. It does. - William James",
    "Success is not in what you have, but who you are. - Bo Bennett",
    "The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh",
    "The harder the conflict, the more glorious the triumph. - Thomas Paine",
    "Don’t wait. The time will never be just right. - Napoleon Hill",
    "The future depends on what you do today. - Mahatma Gandhi",
    "Start where you are. Use what you have. Do what you can. - Arthur Ashe",
    "Success seems to be connected with action. Successful people keep moving. They make mistakes but they don't quit. - Conrad Hilton",
    "It is our choices that show what we truly are, far more than our abilities. - J.K. Rowling",
    "Success is getting what you want, happiness is wanting what you get. - W.P. Kinsella",
    "If you want to achieve greatness stop asking for permission. - Anonymous",
    "The best revenge is massive success. - Frank Sinatra",
    "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it. - Jordan Belfort",
    "We become what we think about. - Earl Nightingale",
    "Success is how high you bounce when you hit bottom. - George S. Patton"
];

const [Quotes, setQuotes] = useState("The only way to do great work is to love what you do. - Steve Jobs")


  function handleRandomQuote(){

    const randomQuote = Math.floor(Math.random() * quotes.length)
    setQuotes(quotes[randomQuote]);

  }

  return (
    <>
    <div className='main-div'>
      <h1>Random Quotes Genrater</h1>
      <h3 className='quote-txt' >{Quotes}</h3>
      <button className='btn' onClick={handleRandomQuote}>Generate Quote</button>
      </div>
    </>
  )
}

export default App
