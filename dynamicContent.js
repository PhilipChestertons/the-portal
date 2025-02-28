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





// NOTIFICATIONS
  document.addEventListener("DOMContentLoaded", function () {
      const notificationsDialog = document.getElementById("notifcations");
      const notificationsBell = document.getElementById("notifications-bell");
      const closeButton = notificationsDialog.querySelector("button[aria-label='Close']");

      notificationsBell.addEventListener("click", (event) => {
          event.preventDefault(); // Prevent default link behavior
          if (!notificationsDialog.open) {
              notificationsDialog.showModal();
              setTimeout(() => {
                  notificationsDialog.classList.add("open");
              }, 10);
          }
      });

      closeButton.addEventListener("click", () => {
          notificationsDialog.classList.remove("open");
          setTimeout(() => {
              notificationsDialog.close();
          }, 300); // Matches transition duration
      });
  });


  // SHOW NOTIFICATION BELL ON ICON
  document.addEventListener("DOMContentLoaded", function () {
      const closeButton = document.getElementById("close");
      const notificationIcon = document.getElementById("icon-notification-bell");
      const offerSubmittedDialog = document.getElementById("Offer-Submitted");

      closeButton.addEventListener("click", function () {
          offerSubmittedDialog.close(); // Close the modal
          notificationIcon.style.visibility = "visible"; // Show the notification bell
      });
  });
