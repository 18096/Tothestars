document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.getElementById("popupOverlay");
    const popup = document.getElementById("imagePopup");

    // Navigate to Details Page
    window.navigateToDetails = function () {
        const url = "details.html"; // Replace this with the correct details page URL
        window.location.href = url;
    };

    // Open Image Popup
    window.openImagePopup = function () {
        overlay.style.display = "block";
        popup.style.display = "block";
        setTimeout(() => {
            overlay.style.opacity = "1";
            popup.style.opacity = "1";
        }, 10); // Adding a small delay for smooth animation
    };

    // Close Image Popup
    window.closeImagePopup = function () {
        overlay.style.opacity = "0";
        popup.style.opacity = "0";
        setTimeout(() => {
            overlay.style.display = "none";
            popup.style.display = "none";
        }, 300); // Matches the transition duration
    };
});
