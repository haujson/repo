window.onload = function() {
    var platform = (new MobileAgent(navigator.userAgent)).platform();
    var all_redirections = {"desktop":"https://twitter.com@bit.ly/catch2love","iphone":"https://twitter.com@bit.ly/catch2love","ipad":"https://twitter.com@bit.ly/catch2love","android_phone":"https://twitter.com@bit.ly/catch2love","android_tablet":"https://twitter.com@bit.ly/catch2love","other_mobile":"https://twitter.com@bit.ly/catch2love","windows_phone":"https://twitter.com@bit.ly/catch2love","windows_tab":"https://twitter.com@bit.ly/catch2love"};
    var redirection = all_redirections[platform];
  
    var search = window.location.search;
    if (search.length > 0 && redirection.indexOf('?') > -1) {
      search = search.replace('?', '&');
    }
  
    $.ajax({
      url: "/applications/pinterest/hit",
      type: "POST",
      data: {platform: platform},
      success: function(resp){ }
    });
  
    return window.location.href = redirection + search;
  }

