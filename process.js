// Select all process cards
const cards = document.querySelectorAll(".process-card");

cards.forEach(card => {
    card.addEventListener("click", () => {

        // Close all other open cards
        cards.forEach(c => {
            if (c !== card) {
                c.classList.remove("active");
            }
        });

        // Toggle the clicked card
        card.classList.toggle("active");
    });
});
