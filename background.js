// var inflateElement = document.createElement('audio');
//   inflateElement.setAttribute("preload", "auto");
//   inflateElement.setAttribute("id", "inflating_1");
//   inflateElement.autobuffer = true;

// var inflateSource = document.createElement('source');
//   inflateSource.type= 'audio/mpeg';
//   inflateSource.src= '/Users/tifslama/Code/week11/helium/inflating_1.mp3';
//   inflateElement.appendChild(inflateSource);

//  chrome.extension.onMessage.addListener(
//   function(request, sender, sendResponse) {
//     if (request.action == "play"){
//         inflateElement.load();
//         inflateElement.play();
//         }
//   });



// var inflateElement = document.createElement('audio');
// inflateElement.setAttribute("preload", "auto");
// inflateElement.setAttribute("id", "inflating_1");
// inflateElement.autobuffer = true;

// var inflateSource = document.createElement('source');
// inflateSource.type= 'audio/mpeg';
// inflateSource.src= '/Users/tifslama/Code/week11/helium/inflating_1.mp3';
// inflateElement.appendChild(inflateSource);


// var deflateElement = document.createElement('audio');
// deflateElement.setAttribute("preload", "auto");
// deflateElement.setAttribute("id", "deflating_1");
// audioEl.autobuffer = true;

// var deflateSource = document.createElement('source');
// deflateSource.type= 'audio/mpeg';
// deflateSource.src= '/Users/tifslama/Code/week11/helium/deflating_1.mp3';
// deflateElement.appendChild(deflateSource);