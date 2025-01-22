var posts=["2025/01/19/1/","2025/01/19/2/","2025/01/14/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };