let value  = $('.bl').html();
chrome.storage.local.set({friends:  value}, function() {
console.log('Value is set to ' + value);
});

