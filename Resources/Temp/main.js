const imageElement = document.getElementById('image');
const downloadButton = document.getElementById('downloadButton');

// Replace 'YOUR_API_ENDPOINT' with the actual API endpoint that returns the PNG image.
const apiEndpoint = ' https://api.qrserver.com/v1/create-qr-code/?data=64fe539e80f4b0443779b680&amp;amp;size=200x200';

// Fetch the PNG image from the API.
fetch(apiEndpoint)
    .then((response) => response.blob())
    .then((blob) => {
        const imageURL = URL.createObjectURL(blob);
        imageElement.src = imageURL;
        downloadButton.removeAttribute('disabled');
        downloadButton.addEventListener('click', () => {
            // Create a temporary link to trigger the download.
            const a = document.createElement('a');
            a.href = imageURL;
            a.download = 'image.png';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        });
    })
    .catch((error) => console.error('Error fetching image:', error));
