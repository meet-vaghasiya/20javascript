const videoElement = document.getElementById("video");
const button = document.getElementById("button");

async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    console.log("error ");
    // in long project there are many try and catch block and many error comes from which block we need  to print in console
  }
}

button.addEventListener("click", async () => {
  // disable button
  button.disabled = true;
  await videoElement.requestPictureInPicture();
  button.disabled = false;
});

selectMediaStream();
