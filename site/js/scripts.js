(function () {

  $('.match-height').matchHeight();

  $('#nav-mobile-toggle').click(function () {
    $('#header-nav').toggleClass('on');
  });

  $('ul#header-nav li.' + $('body').attr('id')).addClass('selected');
  
  /* MODAL */
  
  $('#playerModal').on('show.bs.modal', function (e) {
    var 
      $this = $('#playerModal'),
      $trigger = $(e.relatedTarget),
      episode = $trigger.data('episode')
      $iframe = $this.find('iframe'),
      description = $trigger.data('description'),
      title = 'Episode ' + $trigger.data('number')+': ' + $trigger.data('title')
    ;
    
    if(episode) {
      $this.find('h5').html(title);
      $this.find('p.description').html(description);
      $iframe.attr('src', $iframe.data('src') + episode + '/embed?style=artwork&autoplay=1');
    }
  });
  $('#playerModal').on('hide.bs.modal', function (e) {
    var 
      $this = $('#playerModal'),
      $iframe = $this.find('iframe')
    ;
    // clear iframe src
    $iframe.attr('src', '');
    // clear title
    $this.find('h5').html('Loading...');
  });
  
  /* LOAD MORE */
  // via https://tobiasahlin.com/blog/infinite-scroll-with-jekyll/
  // https://github.com/tobiasahlin/infinite-jekyll
  // Load the JSON file containing all URLs
  var 
    allEpisodes,
    $target = $('#ajax-target')
  ;
  
  $.getJSON("/episodes.json", function(data) {
    allEpisodes = data["episodes"];
  });
    
  $('a.load-more').click(function() {
    $target.append(allEpisodes[1]);
  });
  
})();