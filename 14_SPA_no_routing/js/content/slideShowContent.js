"use strict";

/* 
 * Any JS code that we have stored under folder "js/components" is code that will 
 * output content that the router will inject into the content area. 
 * 
 * These functions take no input parameters (router is not supplying any) and 
 * they output a single DOM element (usually a div) that the router willl 
 * inject into the content area.
 * 
 * These functions ARE ALLOWED to know everything about the HTML page and any 
 * CSS rules that are available to the HTML page. They are non-reusable components 
 * written by the HTML coder.
 */


function slideShowContent() {
    
    var content = `
    <style>
        .slideShowContainer {
            display:flex; 
            flex-direction: row;
        }
        .slideShow {
            box-sizing: border-box; 
            width: 33.3%;
        }
    </style>
`;

    var container = document.createElement("div");
    container.innerHTML = content;
    container.classList.add("slideShowContainer");   

    var myPicList = [
        "http://cis-linux2.temple.edu/~sallyk/pics_cat/pic1.png",
        "http://cis-linux2.temple.edu/~sallyk/pics_cat/pic2.png",
        "http://cis-linux2.temple.edu/~sallyk/pics_cat/pic3.png"
    ];
    var ss1 = MakeSlideShow(myPicList,"slideShow");
    container.appendChild(ss1);

    // Example showing why you need to get the ss reference, so the HTML page can invoke 
    // any public methods that may be available from the returned slide show object.
    ss1.setPicNum(1);

    // create second slideshow object
    var secondPicList = [
        "http://cis-linux2.temple.edu/~sallyk/pics_cat/pic4.png",
        "http://cis-linux2.temple.edu/~sallyk/pics_cat/pic5.png",
        "http://cis-linux2.temple.edu/~sallyk/pics_cat/pic6.png"
    ];
    var ss2 = MakeSlideShow(secondPicList,"slideShow");
    container.appendChild(ss2);

    // create third slideshow object
    var thirdPicList = [
        "http://cis-linux2.temple.edu/~sallyk/pics_cat/pic7.png",
        "http://cis-linux2.temple.edu/~sallyk/pics_cat/pic8.png",
        "http://cis-linux2.temple.edu/~sallyk/pics_cat/pic9.png"
    ];
    var ss3 = MakeSlideShow(thirdPicList,"slideShow");
    container.appendChild(ss3);

    return container;
}