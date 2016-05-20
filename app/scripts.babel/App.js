var App = (function () {
  var mainElement = null;

  var init = function () {

    document.addEventListener('DOMSubtreeModified', function () {
      if (mainElement === null && document.getElementById('main') !== null) {
        mainElement = document.getElementById('main');
        console.log('load ended');
        console.log('observe start');
        AudioManager.setup();
        /*mainElement.addEventListener('ready', function () {
          console.log('hi 1'); //onreadystatechange
        });*/

        var observer = new MutationObserver(function(mutations) {
          mutations.forEach(function(mutation) {
            AudioManager.setup();
            //mainElement.addEventListener('onload', AudioManager.setup);
            /*mainElement.addEventListener('ready', function () {
              console.log('hi 2');
            });*/
          });
        });

        // configuration of the observer:
        var config = { attributes: true, childList: true, characterData: true };

        // pass in the target node, as well as the observer options
        observer.observe(document.getElementsByClassName('app two')[0], config);
      }
    });

    window.addEventListener('load', function () {
      console.log('Page loaded');
    });
  };


  return {
    init: init,
  }
}());

App.init();
