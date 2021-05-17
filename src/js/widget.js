window.twttr = (function (d, s, id) {
  var t, js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src= "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);
  return window.twttr || (t = { _e: [], ready: function (f) { t._e.push(f) } });
}(document, "script", "twitter-wjs"));


twttr.ready( function(twttr){

    twttr.events.bind('rendered',function (event) { 
    
    var tgt = event.target;
    
    $(tgt).contents().find(".EmbeddedTweet").css({  
        "border":"2px solid black",
        "border-radius":"7px",
        "max-width":"180px",
        "max-height": "300px"
        
       });
    
     });
    
    });