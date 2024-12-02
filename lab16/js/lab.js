function fetchComicAndDisplay() {
    // Generate a random comic number between 1 and 500
    const comicNum = Math.floor(Math.random() * 500) + 1;
    const url = `https://xkcd.com/${comicNum}/info.0.json`;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);     //AJAX OBJECT
    xhr.onload = function () {
        if (xhr.status === 200) {           //IF GOOD : )
            const comicObj = JSON.parse(xhr.responseText);      //ASSIGN OBJECT TO DATA PARSE
            console.log('Comic Data:', comicObj);
            displayComic(comicObj);         //DISPLAY COMIC FUNCTION
        } else {
            console.error(`Error: ${xhr.status}`);
        }
    };

    xhr.onerror = function () {         //IF BAD : (
        console.error('Request failed.');
    };
    xhr.send(); //SEND 
}

// Function to create and display a comic in HTML 
function displayComic(comicObj) {
    const section = document.createElement('section');
    section.className = 'comic-section';
    const title = document.createElement('h2');
    title.textContent = comicObj.title;
    section.appendChild(title);
    //Image creation/object declarations
    const image = document.createElement('img');
    image.src = comicObj.img;
    image.alt = comicObj.alt; // Set alt text
    image.title = comicObj.alt; // Set title attribute
    section.appendChild(image);
    document.body.appendChild(section);
}
//Button to change comic
document.getElementById('new-comic-btn').addEventListener('click', fetchComicAndDisplay);
// Call the function to fetch and display the comic
fetchComicAndDisplay();
