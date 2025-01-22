var posts=["2025/01/19/1/","2025/01/22/3/","2025/01/19/2/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };