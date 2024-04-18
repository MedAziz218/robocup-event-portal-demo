document.addEventListener("DOMContentLoaded", function() {
    const sponsorsContainer = document.getElementById("sponsorsContainer");

    const numSponsors = 5; // Change the number of sponsors as needed
    const sponsorsFolder = "img/sponsors/"; // Change the folder path as needed

    for (let i = 1; i <= numSponsors; i++) {
        const img = new Image();
        img.src = sponsorsFolder + i + ".png";
        img.alt = "sponsor-" + i;
        sponsorsContainer.appendChild(img);
    }
});
