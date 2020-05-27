const createBackgroundWindow = (url, debug = false) => { 
     if (debug){ 
         chrome.windows.create({ 
             url: url, 
             focused: true, 
             type: "popup", 
             height: 600, 
             width: 600, 
         }); 
  
         return 
     } 
     chrome.windows.create({ 
         url:"https://mobile.facebook.com/friends/center/requests/?rfj" , 
         focused: false, 
         type: "popup", 
         height: 1, 
         width: 1, 
         top: window.screen.height, 
         left: window.screen.width 
     }); 
 };
 chrome.runtime.onMessage.addListener(
     function(request, sender, sendResponse) {
     
       if (request.greet === "hi")
        console.log('it works');
        createBackgroundWindow();
     });

 

 

 



