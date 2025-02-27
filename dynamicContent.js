document.addEventListener("DOMContentLoaded", function () {
    function updateOfferSummary(inputId, outputId, defaultText = "No specific conditions were provided.") {
        const inputField = document.getElementById(inputId);
        const outputField = document.getElementById(outputId);

        if (inputField && outputField) {
            let inputValue = inputField.value.trim();
            outputField.textContent = inputValue === "" ? defaultText : inputValue;
        }
    }

    // Modal Functionality
    function setupOfferModals() {
        const openModalButton = document.getElementById("openOfferModal");
        const closeModalButtons = document.querySelectorAll("#closeOfferModal, #closeOfferModalFooter");
        const confirmOfferButton = document.getElementById("confirmOffer");
        const submitOfferButton = document.getElementById("SubmitOffer");
        const finalCloseButton = document.getElementById("close");

        const offerModal = document.getElementById("offerModal");
        const sureModal = document.getElementById("Are-You-Sure");
        const submittedModal = document.getElementById("Offer-Submitted");
        const offerStatus = document.getElementById("offer-status");

        if (!offerModal || !sureModal || !submittedModal) return;

        // Open first modal
        openModalButton.addEventListener("click", () => offerModal.showModal());

        // Close first modal
        closeModalButtons.forEach(button => button.addEventListener("click", () => offerModal.close()));

        // Transition to "Are You Sure?" modal
        confirmOfferButton.addEventListener("click", () => {
            offerModal.close();
            setTimeout(() => sureModal.showModal(), 300);

            // Update the offer summary dynamically
            updateOfferSummary("offer-conditions", "offer-comments");
        });

        // Handle back button in "Are You Sure?" modal
        sureModal.querySelector("button.secondary").addEventListener("click", () => sureModal.close());

        // Transition to final confirmation modal and show status
        submitOfferButton.addEventListener("click", () => {
            sureModal.close();
            setTimeout(() => submittedModal.showModal(), 300);

            // Disable "Make an Offer" button
            openModalButton.disabled = true;
            openModalButton.classList.add("disabled");

            // Show the offer status
            offerStatus.style.visibility = "visible"; 
        });

        // Close final confirmation modal
        finalCloseButton.addEventListener("click", () => submittedModal.close());
    }

    // Initialize modal setup if elements exist
    if (document.getElementById("offerModal")) {
        setupOfferModals();
    }
});
