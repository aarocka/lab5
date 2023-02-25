"use strict";
// This function creates a slideshow object
// It takes two parameters: an array of objects,
// each having an 'fileName' and a 'caption' property
// and a string that specifies the style to be used

function MakeSlideShow (objList, style) {
    if (!objList[0].fileName || !objList[0].caption) {
        throw ("MakeSlideShow expects an array of objects, each having an 'image' and a 'caption' property");
    } 

    var slideShow = document.createElement("div");
    slideShow.classList.add(style);

    // add a div that will hold the image
    var div = document.createElement("div");
    slideShow.appendChild(div);

    // add image into the div & set the image's src attribute to show picture
    var myImage = document.createElement("img");
    div.append(myImage);
    
    var buttonDiv = document.createElement("div");
    slideShow.appendChild(buttonDiv);

    //add a br tag to make the caption appear on a separate lines
    var br = document.createElement("br");
    div.appendChild(br);

    //add caption under the image
    var caption =document.createElement("span");
    caption.classList.add("captionStyle");
    caption.id="caption";
    div.appendChild(caption);

    // add back button under the image (and empty paragraph)
    var backButton = document.createElement("button");
    backButton.innerHTML = " &lt; ";
    buttonDiv.appendChild(backButton);

    // add forward button under the image (and empty paragraph)
    var fwdButton = document.createElement("button");
    fwdButton.innerHTML = " &gt; ";
    buttonDiv.appendChild(fwdButton);

    // private variable that keeps track of which image is showing
    var picNum = 0;
    setPic();

    function setPic() {
        myImage.src = objList[picNum].fileName;
        caption.innerHTML = objList[picNum].caption;
    }

    // Advance to next image in the picture list
    function nextPic() {

        if (picNum < objList.length-1) {
            picNum++;
        }
        setPic();
    }

    // Go to the previous image in the picture list
    function prevPic() {

        if (picNum > 0) {
            picNum--;
        }
        setPic();
    }

    // add next and previous funcionality to next and previous buttons
    backButton.onclick = prevPic;
    fwdButton.onclick = nextPic;

    slideShow.setPicNum = function (newNum) {
        if ((newNum >= 0) && (newNum < objList.length)) {
            picNum = newNum;
            // change the src attribute of the image element to the desired new image)				
            setPic();
        }
    };

    return slideShow;
}