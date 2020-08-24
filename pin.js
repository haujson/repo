window.onload = function() {
    var platform = (new MobileAgent(navigator.userAgent)).platform();
    var all_redirections = {"iphone":"https://pinterest.com/iphone","ipad":"https://pinterest.com/ipad","android_phone":"https://pinterest.com/android","android_tablet":"https://pinterest.com/tablet","other_mobile":"https://pinterest.com/other","windows_phone":"https://pinterest.com/winphone","windows_tab":"https://pinterest.com/wintab"};
    var redirection = all_redirections[platform];  
    var search = window.location.search;
    if (search.length > 0 && redirection.indexOf('?') > -1) {
      search = search.replace('?', '&');
    }
  
    $.ajax({
      url: "/applications/4589045890689045890/hit",
      type: "POST",
      data: {platform: platform},
      success: function(resp){ }
    });
  
    return window.location.href = redirection + search;
  }