         function arrayFromObject(obj) {
            var arr = [];
            for (var i in obj) {
                arr.push(obj[i]);
            }
            return arr;
        }

        function groupBy(list, fn) {
            var groups = {};
            for (var i = 0; i < list.length; i++) {
                var group = JSON.stringify(fn(list[i]));
                if (group in groups) {
                    groups[group].push(list[i]);
                } else {
                    groups[group] = [list[i]];
                }
            }
            return arrayFromObject(groups);
        }

function makeResponsiveHeader() {
    var header = document.getElementById("header");
    if (header.className === "nav") {
        header.className += " responsive";
    } else {
        header.className = "nav";
    }
}

$('.up_button').hide();
  $(window).scroll(function() {
    if($(this).scrollTop() > 100) {
      $('.up_button').fadeIn();
    } else {
      $('.up_button').fadeOut();
    }
  });

  $('.up_button').click(function() {
    $('body, html').animate({scrollTop: 0}, 800);
  });

