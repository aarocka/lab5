"use strict";

function MakeSlideShow (picList, style) {

    var slideShow = document.createElement("div");
    slideShow.classList.add(style);

    // add a div that will hold the image
    var div = document.createElement("div");
    slideShow.appendChild(div);

    // add image into the div & set the image's src attribute to show picture
    var myImage = document.createElement("img");
    div.append(myImage);

    // add back button under the image 
    var backButton = document.createElement("button");
    backButton.innerHTML = " &lt; ";
    slideShow.appendChild(backButton);

    // add forward button under the image 
    var fwdButton = document.createElement("button");
    fwdButton.innerHTML = " &gt; ";
    slideShow.appendChild(fwdButton);

    // private variable that keeps track of which image is showing
    var picNum = 0;
    setPic();

    function setPic() {
        myImage.src = picList[picNum];
    }

    // Advance to next image in the picture list
    function nextPic() {
        picNum++;
        if (picNum >= picList.length) {
            picNum = 0;
        }
        setPic();
    }

    // Go to the previous image in the picture list
    function prevPic() {
        picNum--;
        if (picNum < 0) {
            picNum = picList.length - 1;
        }
        setPic();
    }

    // add previous and back functionality to the previous and back buttons.
    backButton.onclick = prevPic;
    fwdButton.onclick = nextPic;


    // go: AUTO ADVANCE
    var intervalHandler; // declare variable with MakeSlideShow scope.
    slideShow.go = function (intervalMillisecs) {
        // setInterval is a built-in JS function that invokes a function (1st parameter)
        // repeatedly, every so often (2nd parameter).
        intervalHandler = setInterval(nextPic, intervalMillisecs);
    };

    // goWithDelay: AUTO ADVANCE WITH DELAY
    // just like go but delay the first invokation of setInterval...
    slideShow.goWithDelay = function (intervalMillisecs, delayMillisecs) {
        setTimeout(function () {
            intervalHandler = setInterval(nextPic, intervalMillisecs);
        }, delayMillisecs);
    };

    // STOP AUTO ADVANCE
    // this is why you need variable intervalHandler to have MakeSlideShow scope.
    slideShow.stop = function () {
        clearInterval(intervalHandler);
    };

    slideShow.setPicNum = function (newNum) {
        if ((newNum >= 0) && (newNum < picList.length)) {
            picNum = newNum;
            setPic();
        }
    };

    return slideShow;
}