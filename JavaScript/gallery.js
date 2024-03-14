function showZoomedImage(imageUrl, imageTitle, imageDescription) {
    // Create the zoomed image container
    var zoomedImageContainer = document.createElement('div');
    zoomedImageContainer.className = 'zoomed-image-container';
    zoomedImageContainer.onclick = function() {
      document.body.removeChild(zoomedImageContainer);
    };

    // Create the card element
    var card = document.createElement('div');
    card.className = 'card';

    // Create the image element
    var zoomedImage = document.createElement('img');
    zoomedImage.src = imageUrl;

     // Create the title element
     var title = document.createElement('h2');
     title.textContent = imageTitle;

    // Create the description element
    var description = document.createElement('p');
    description.textContent = imageDescription;

    // Add the image and description to the card
    card.appendChild(zoomedImage);
    card.appendChild(title);
    card.appendChild(description);

    // Add the card to the container
    zoomedImageContainer.appendChild(card);

    // Add the container to the body
    document.body.appendChild(zoomedImageContainer);
  }

  const theme1 = document.getElementById("theme-1");
  const theme2 = document.getElementById("theme-2");
  const theme3 = document.getElementById("theme-3");
  const size1 = document.getElementById("size-1");
  const size2 = document.getElementById("size-2");
  const size3 = document.getElementById("size-3");
  
  function updateClass(targetClass) {
    const currentClasses = document.body.className.split(" ");
    const updatedClasses = currentClasses.filter(c => !c.startsWith("theme-") && !c.startsWith("size-"));
    updatedClasses.push(targetClass);
    document.body.className = updatedClasses.join(" ");
  }
  
  theme1.addEventListener("click", () => updateClass("theme-1"));
  theme2.addEventListener("click", () => updateClass("theme-2"));
  theme3.addEventListener("click", () => updateClass("theme-3"));
  size1.addEventListener("click", () => updateClass("size-1"));
  size2.addEventListener("click", () => updateClass("size-2"));
  size3.addEventListener("click", () => updateClass("size-3"));
  

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

  