const quotes = [
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Do not wait to strike till the iron is hot, but make it hot by striking. - William Butler Yeats",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "It always seems impossible until it's done. - Nelson Mandela",
    "Life is really simple, but we insist on making it complicated. - Confucius",
    "He who is brave is free. - Seneca",
    "The best revenge is to be unlike him who performed the injustice. - Marcus Aurelius",
    "It is not that we have a short time to live, but that we waste much of it. - Seneca",
    "The greatest wealth is to live content with little. - Plato",
    "Knowing yourself is the beginning of all wisdom. - Aristotle",
    "The only true wisdom is in knowing you know nothing. - Socrates",
];

// Additional quotes without duplicates
const additionalQuotes = [
    "He who fears death will never do anything worth of a man who is alive. - Seneca",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "Excellence is an art won by training and habituation. - Aristotle",
    "What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar",
    "The best way to predict the future is to create it. - Peter Drucker",
    "The only source of knowledge is experience. - Albert Einstein",
    "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
    "It's not that I'm so smart, it's just that I stay with problems longer. - Albert Einstein",
    "Our greatest glory is not in never falling, but in rising every time we fall. - Confucius",
    "The only thing we have to fear is fear itself. - Franklin D. Roosevelt",
    "The only thing we never get enough of is love; and the only thing we never give enough of is love. - Henry Miller",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "You miss 100% of the shots you don't take. - Wayne Gretzky",
    "The only easy day was yesterday. - Navy SEALs",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it. - Jordan Belfort",
    "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
    "You have within you right now, everything you need to deal with whatever the world can throw at you. - Brian Tracy",
    "Success is not in what you have, but who you are. - Bo Bennett",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "The best way to predict the future is to create it. - Peter Drucker",
    "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it. - Jordan Belfort",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
];

// Combine the two lists and remove duplicates
const uniqueQuotes = Array.from(new Set([...quotes, ...additionalQuotes]));

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * uniqueQuotes.length);
    const quoteElement = document.getElementById("quote");
    quoteElement.textContent = uniqueQuotes[randomIndex];
}

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get the entered email
    const email = document.getElementById('email').value;

    // Open the default email client with a mailto link
    window.location.href = `mailto:${email}?subject=Random%20Quote%20Generator%20Feedback&body=Hello,%0A%0AI have some feedback or questions regarding the Random Quote Generator.%0A%0A`;

    // Clear the form
    document.getElementById('contactForm').reset();
});
