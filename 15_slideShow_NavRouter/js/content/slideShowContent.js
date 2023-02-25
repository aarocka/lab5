"use strict";

function slideShowContent() {

    var content = `
        <style>
            p {
                margin-left: 1.5rem;
            }
            .flexContainer {
                display:flex; 
                flex-direction: row;
            }
            .flexContainer .slideShow {
                width: 50%; /* to fit two slideshows side by side in the flexContainer */
                box-sizing: border-box; /* makes padding and border counted in the width */
            }
        </style>
        <h3>My Slide Show Components</h3>
        <p>
            I hope you enjoy my slide show pictures !!!
        </p>
    `;
    var ele = document.createElement("div");
    ele.innerHTML = content; // the HTML code specified just above...
    var twoObjects = document.createElement("div");
    twoObjects.classList.add('flexContainer'); // see styling in this file, above...
    ele.appendChild(twoObjects);

    var myPicList = [
        "http://cis-linux2.temple.edu/~sallyk/pics_cat/pic1.png",
        "http://cis-linux2.temple.edu/~sallyk/pics_cat/pic2.png",
        "http://cis-linux2.temple.edu/~sallyk/pics_cat/pic3.png"
    ];

    var ss1 = MakeSlideShow(myPicList,"slideShow");
    twoObjects.appendChild(ss1);

    // Example showing why you need to get the ss reference, so the HTML page can invoke 
    // any public methods that may be available from the returned slide show object.
    ss1.setPicNum(2);

    // create second slideshow object
    var otherPicList = [
        "http://cis-linux2.temple.edu/~sallyk/pics_cat/pic4.png",
        "http://cis-linux2.temple.edu/~sallyk/pics_cat/pic5.png",
        "http://cis-linux2.temple.edu/~sallyk/pics_cat/pic6.png"
    ];
    var ss2 = MakeSlideShow(otherPicList,"slideShow");
    twoObjects.appendChild(ss2);

    return ele;
}