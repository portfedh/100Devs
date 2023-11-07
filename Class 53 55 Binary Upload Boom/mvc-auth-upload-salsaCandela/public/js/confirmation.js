window.onload = function () {
  console.log("Confirmation Client Js Script running");

  const imageElement = document.getElementById("qrCode-image");
  const downloadButton = document.getElementById("downloadButton");
  const apiEndpoint = apiUrl;
  const originalUsername = userName;
  const modUsername = originalUsername.split(" ").join("");
  const fileName = modUsername + "_" + userId + ".png";

  // Fetch the PNG image from the API.
  fetch(apiEndpoint)
    .then((response) => response.blob())
    .then((blob) => {
      const imageURL = URL.createObjectURL(blob);
      imageElement.src = imageURL;
      downloadButton.removeAttribute("disabled");
      downloadButton.addEventListener("click", () => {
        // Create a temporary link to trigger the download.
        const a = document.createElement("a");
        a.href = imageURL;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      });
    })
    .catch((error) => console.error("Error fetching image:", error));
};
