document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('spread-form');
    const readingResults = document.getElementById('reading-results');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        // Get the selected spread type
        const spreadType = document.getElementById('spread-type').value;

        // Clear previous results
        readingResults.innerHTML = '';

        // Fetch the tarot reading based on the selected spread type (could be from an API or static data)
        const reading = await getTarotReading(spreadType);
        displayReading(reading);
    });

    // Mock function to simulate fetching tarot reading data
    function getTarotReading(spreadType) {
        // Simulated response for each spread type
        const readings = {
            "3_card_decision": [
                { card: "The Fool", meaning: "Starting a new journey" },
                { card: "The Empress", meaning: "Creativity and nurturing" },
                { card: "The Hanged Man", meaning: "Seeing things from a new perspective" }
            ],
            "3_card_probability": [
                { card: "The Tower", meaning: "A sudden upheaval" },
                { card: "The Star", meaning: "Hope and inspiration" },
                { card: "The Wheel of Fortune", meaning: "The cycle of life" }
            ],
            "10_card_celtic_cross": [
                { card: "The Magician", meaning: "Manifestation and power" },
                { card: "The Lovers", meaning: "Love and decisions" },
                // more cards for the Celtic Cross spread...
            ]
            // Add more spreads here
        };

        // Return the appropriate reading based on the spread type
        return readings[spreadType] || [];
    }

    // Function to display the tarot reading in the page
    function displayReading(reading) {
        reading.forEach((card, index) => {
            const cardElement = document.createElement('div');
            cardElement.classList.add('result-card');

            const cardTitle = document.createElement('div');
            cardTitle.classList.add('card-title');
            cardTitle.textContent = `Card ${index + 1}: ${card.card}`;

            const cardMeaning = document.createElement('div');
            cardMeaning.classList.add('card-meaning');
            cardMeaning.textContent = card.meaning;

            cardElement.appendChild(cardTitle);
            cardElement.appendChild(cardMeaning);
            readingResults.appendChild(cardElement);
        });
    }
});
