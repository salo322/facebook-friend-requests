chrome.storage.local.get(['friends','leng'],function(result) {
   $(".ul_list").html(result.friends);
   $('.userNum').html(result.leng);
  });
  
 let button =  document.querySelector('.activeB');
 button.addEventListener('click', function(){

   if (button.value === "inactive") {
       button.value = 'active';
       $('.active').html('activated');
       chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
       chrome.tabs.sendMessage(tabs[0].id, {greeting: "active"})
    
      });
        
   } else {
       button.value = 'inactive';
       $('.active').html('Deactivated');
   }
 })



  
   
 