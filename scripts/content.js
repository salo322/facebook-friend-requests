let value  = document.querySelector('#friends_center_main div:nth-child(2)').innerHTML; 
chrome.storage.local.set({friends:  value}, function() {
}); 

let lengths = document.querySelector('#friends_center_main div:nth-child(2)').children;
let num = lengths.length;
chrome.storage.local.set({leng: num});



chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
     
      if (request.greeting === "active"){
   let but = document.querySelectorAll('._54k8._52jg._56bs._26vk._56b_._3cqr._5uc2._8yo0._56bu');  
  for (const item of but) {
        item.click()
    }
    
            
      }
    });
  
    chrome.runtime.onMessage.addListener(
      function(request, sender, sendResponse) {
       
        if (request.sending === "message")
         alert('woooorks')
      });
  


   

