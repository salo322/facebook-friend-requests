let value  = $('.bl').html();
chrome.storage.local.set({friends:  value}, function() {
}); 

let lengths = $('.bl').children();
let num = lengths.length;
chrome.storage.local.set({leng: num});

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
     
      if (request.greeting === "active"){
        let but = document.querySelectorAll('.bs a.z.bb.bt.bu.bd.ba');
        for (const item of but) {
            item.click()
            }
        
      }
        
    });

  


   

