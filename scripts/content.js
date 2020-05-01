let value  = $('.bl').html();
chrome.storage.local.set({friends:  value}, function() {

}); 

let lengths = $('.bl').children();
let num = lengths.length;
console.log(num);
chrome.storage.local.set({leng: num});


