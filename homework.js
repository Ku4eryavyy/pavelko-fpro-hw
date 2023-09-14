document.addEventListener("DOMContentLoaded", function () {
    const images = [
        "1.jpg",
        "2.jpg",
        "3.jpg",
        "4.jpg",
        "5.jpg",
        "6.jpg",
        "7.jpg",
        "8.jpg",
        "9.jpg"
    ];

    const randomImageButton = document.getElementById("random-image-button");
    const randomImageElement = document.getElementById("random-image");

    randomImageButton.addEventListener("click", function () {
        const randomIndex = Math.floor(Math.random() * images.length);
        const randomImageName = images[randomIndex];

        const imagePath = "images/" + randomImageName;
        randomImageElement.src = imagePath;
    });
});
