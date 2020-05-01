chrome.storage.local.get(['friends','leng'],function(result) {
   $(".ul_list").html(result.friends);
   $('.userNum').html(result.leng)
  });

  