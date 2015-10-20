Template.postsList.onRendered(function() {
  this.find('.wrapper')._uihooks = {
    moveElement: function(node, next){
      var $node = $(node), $next = $(next);
      var oldTop = $node.offset().top;
      var height = $node.outerHeight(true);

      // 找出 next 与 node 之间所有的元素
      var $inBetween = $next.nextUntil(node);
      if($inBetween.length === 0){
        $inBetween = $node.nextUntil(next);
      }
      console.log($node, $next, oldTop, height, $inBetween);

      $node.insertBefore(next);

      var newTop = $node.offset().top;

      $node
        .removeClass('animate')
        .css('top', oldTop - newTop);

      $inBetween
        .removeClass('animate')
        .css('top', oldTop < newTop ? height : -1 * height);

      $node.offset();

      $node.addClass('animate').css('top', 0);
      $inBetween.addClass('animate').css('top', 0);
    },
    insertElement: function(node, next){
      $(node)
        .hide()
        .insertBefore(next)
        .fadeIn();
    },
    removeElement: function(node){
      $(node).fadeOut(function(){
        $(this).remove();
      });
    }
  }
});

Template.postsList.helpers({
  posts: function() {
    return Posts.find({}, {sort: {submitted: -1}});
  }
});
