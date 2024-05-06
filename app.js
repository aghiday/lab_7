// JavaScript object representing the auction item
const auctionItem = {
  name: "Item Name",
  description: "Item Description",
  startingBid: 100,
  highestBid: 100
};

// Variable to keep track of the current highest bid
let currentHighestBid = 100;

// Initialize the countdown timer
let timeRemaining = 60; // 60 seconds for the countdown

function startTimer() {
    const timerInterval = setInterval(() => {
        if (timeRemaining > 0) {
            timeRemaining -= 1; // decrease time by 1 second
            document.getElementById('time-remaining').textContent = `Time Remaining: ${timeRemaining} seconds`;
        } else {
            clearInterval(timerInterval);
            document.getElementById('time-remaining').textContent = "Auction ended";
            alert('The auction has ended!');
        }
    }, 1000); // update every second
}

// Function to handle the form submission
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the form from submitting normally

    const newBid = parseInt(document.getElementById('bid-amount').value, 10);

    // Check if the new bid is higher than the current highest bid
    if (newBid > currentHighestBid) {
        currentHighestBid = newBid;  // Update the current highest bid
        auctionItem.highestBid = newBid;  // Update the highest bid in the auction item object

        // Update the UI
        document.getElementById('current-bid').textContent = `$${newBid}`;
        document.getElementById('highest-bid').textContent = `$${newBid}`;
    } else {
        alert('Your bid must be higher than the current highest bid!');
    }
});

// Initialize the UI with auction item details and start the timer
window.onload = function() {
    document.getElementById('item-container').querySelector('h2').textContent = auctionItem.name;
    document.getElementById('item-container').querySelector('p').textContent = auctionItem.description;
    document.getElementById('highest-bid').textContent = `$${auctionItem.highestBid}`;

    // Start the countdown timer
    startTimer();
};
