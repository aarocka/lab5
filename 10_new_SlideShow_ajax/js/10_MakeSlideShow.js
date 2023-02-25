"use strict";

// every object in picObjList is expected to have a property: image.


function MakeSlideShow(picObjList, style) {

    if (!picObjList || !picObjList[0] || !picObjList[0].image) {
        var eMsg = "MakeSlideShow requires an array of objects that have an image property "+
                "-- see function setPic (in MakeSlideShow) to see why.";
        alert(eMsg);
        throw new Error(eMsg);
        return; // should not really need this, just being cautious
    }

    // MakeSlideShow expects each object in array picObjList to have these properties: 
    //    .image (referenced in private function setPic)
    //    nothing else (this version of MakeSlideShow does not implement a caption...) 

    // get reference to the DOM object inside which the SlideShow image 
    // and buttons will be created.
    var slideShow = document.createElement("div");
    slideShow.classList.add(style);

    // add a div that will hold the image
    var div = document.createElement("div");
    slideShow.appendChild(div);

    // add image into the div & set the image's src attribute to show picture
    var myImage = document.createElement("img");
    div.append(myImage);

    // add back button under the image (and empty paragraph)
    var backButton = document.createElement("button");
    backButton.innerHTML = " &lt; ";
    slideShow.appendChild(backButton);

    // add forward button under the image (and empty paragraph)
    var fwdButton = document.createElement("button");
    fwdButton.innerHTML = " &gt; ";
    slideShow.appendChild(fwdButton);

    // private variable that keeps track of which image is showing
    var picNum = 0;
    setPic();

    function setPic() {
        myImage.src = picObjList[picNum].image;
    }

    // Advance to next image in the picture list
    function nextPic() {

        if (picNum < picObjList.length - 1) {
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
        if ((newNum >= 0) && (newNum < picObjList.length)) {
            picNum = newNum;
            // change the src attribute of the image element to the desired new image)				
            setPic();
        }
    };

    return slideShow;
}