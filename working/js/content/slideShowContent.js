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
            //image list from ajax call            

        // Create a DOM element (div) like a CGF would do. 
        var ele = document.createElement("div");
        
        // style ele as a flex box and place two divs in that flex box
        // (each 50% wide). Each of these divs will hold one slide show.

        ele.innerHTML = `
          <style>
            .ssFlex {
              display:flex;
              flex-direction:row;
            }
            .ssFlex .ssHolder {
              width: 50%;
              box-sizing:border-box;
              text-align:center;
            }
          </style>
          <div class="firstDiv ssHolder">
            <h2>First SlideShow</h2>
          </div>
          <div class="secondDiv ssHolder">
            <h2>Second SlideShow</h2>
          </div>
        `;

        ele.classList.add("ssFlex"); // must style ele as ssFlex to pick up the 
        // above styling.

        // Get a reference to the two divs into which you want to place 
        // slide show components. 
        var firstDiv = ele.getElementsByClassName("firstDiv")[0];
        var secondDiv = ele.getElementsByClassName("secondDiv")[0];

        // Shows how an ajax error is handled -- you'll see an error 
        // message on the page. waterFunnn.json is mispelled.
        ajax("json/cars.json", processCarList, firstDiv);
        function processCarList(carList) {
            // MakeSlideShow expects a property called "image", so provide that... 
            for (var i = 0; i < carList.length; i++) {
                carList[i].pic = carList[i].photo;
                carList[i].caption = carList[i].make;
                console.log("image " + i + " " + carList[i].image);
            }

            console.log("funList after setting image properties");
            console.log(carList);

            var ss = MakeSlideShow(carList, "slideShow");
            //document.getElementById("content").appendChild(ss);
            firstDiv.appendChild(ss);

            // Example showing why you need to get the ss reference, so the HTML page can invoke 
            // any public methods that may be available from the returned slide show object.
            ss.setPicNum(1);
        }

        
        ajax("json/waterFun.json", processWaterList, secondDiv);
        function processWaterList(waterFunList) {
            
            // MakeSlideShow expects a property called "image", so provide that... 
            for (var i = 0; i < waterFunList.length; i++) {
                waterFunList[i].pic = waterFunList[i].pic;
                waterFunList[i].caption = waterFunList[i].item;
                console.log("image " + i + " " + waterFunList[i].image);
            }

            var ss = MakeSlideShow(waterFunList, "slideShow");
            secondDiv.appendChild(ss);

            // Example showing why you need to get the ss reference, so the HTML page can invoke 
            // any public methods that may be available from the returned slide show object.
            ss.setPicNum(2);
        }

        // add ele into the content area. 
        // If using NavRouter, you'd just return ele at the end of the CGF 
        // (content generating function).
        document.getElementById("content").appendChild(ele);
        return ele;
}