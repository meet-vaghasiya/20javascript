const imageContainer = document.getElementById("img-container");
const loader = document.getElementById("loader");

let photoArray = [];
let imageLoaded = 0;
let totalImages = 0;
const count = 10;
const apiKey = "0risXkIeGt8LqgEyi3c9Je8YyeslXvaGsu1ImiToQNY";

const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

//check if image is loaded or not
function imageLoading() {
  imageLoaded++;
  if (imageLoaded === totalImages) {
    ready = true;
    loader.hidden = true;
  }
  console.log("image is loaded");
}

//helper function to set attrinbute  on dom elements

function setAttributes(element, attibutes) {
  for (const key in attibutes) {
    element.setAttribute(key, attibutes[key]);
  }
}

//  create element for links & photos and add to dom

function displayPhoto() {
  imageLoaded = 0;
  // console.log(photoArray);
  totalImages = photoArray.length;
  photoArray.forEach((photo) => {
    const item = document.createElement("a");
    // item.setAttribute('href',photo.links.html)
    // item.setAttribute('target','_blank')
    setAttributes(item, {
      href: photo.links.html,
      target: "_blank",
    });

    const img = document.createElement("img");
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });
    // img.setAttribute('src',photo.urls.regular)
    // img.setAttribute('alt',photo.alt_description)
    // img.setAttribute('title',photo.alt_description)

    // // put image instde a tag and then put both in img-container elemt
    img.addEventListener("load", imageLoading);

    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}

// get photoes from url

async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photoArray = await response.json();
    displayPhoto();
  } catch (error) {
    //catch error here
  }
}

// scroll event

window.addEventListener("scroll", (e) => {
  // console.log(e)
  // console.log(window.innerHeight,window.scrollY,document.body.offsetHeight)
  // windlow.innerHeight give value of window screen size
  //  window.scrollY give value of scrolling of top
  //  body.offsetHeight give total height of body till last

  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 &&
    ready
  ) {
    ready = false;
    getPhotos();
  }
});
getPhotos();
