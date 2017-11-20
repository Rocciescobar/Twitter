window.addEventListener('load', function() {
  var catchPost = document.getElementById('catch-post');
  var button = document.getElementById('save-post');
  var containerPosts = document.getElementById('container-posts');
  var counter = document.querySelector('.counter');

  catchPost.addEventListener('keyup', function() {
    var postLength = catchPost.value.length;
    var characters = 140 - postLength;
    counter.textContent = characters;

    if (postLength < 120) {
      counter.className = 'text-color';
      button.disabled = false;
    } else if (postLength > 120 && postLength < 130) {
      counter.className = 'text-color-120';
      button.disabled = false;
    } else if (postLength > 130 && postLength < 140) {
      counter.className = 'text-color-130';
      button.disabled = false;
    } else if (postLength > 140) {
      counter.className = 'text-color';
      button.disabled = true;      
    }  
  });

  button.addEventListener('click', function(event) {
    for (var i = 0; i < catchPost.value.length; i++) {
      if (catchPost.value[i] === ' ') {
        event.preventDefault();        
      } else {
        var post = document.createElement('p');
        post.textContent = catchPost.value;
        containerPosts.appendChild(post);
        post.classList.add('posts');
        catchPost.value = '';
        counter.textContent = 140;
        counter.className = 'text-color';
        catchPost.style.height = '66px';
      }
    }
  });

  catchPost.addEventListener('keydown', function() {
    var keyboardEnter = this;
    setTimeout(function() {
      keyboardEnter.style.cssText = 'height:auto';
      keyboardEnter.style.cssText = 'height:' + keyboardEnter.scrollHeight + 'px';
    }, 0);
  });
});