chrome.storage.local.get(['friends'],function(result) {
   $(".ul_list").html(result.friends);
  
  });

