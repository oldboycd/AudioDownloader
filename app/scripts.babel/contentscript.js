var App = function () {
  var mainElement = null;

  var init = function () {
    document.addEventListener('DOMSubtreeModified', function () {
      if (mainElement === null && document.getElementById('main') !== null) {
        mainElement = document.getElementById('main');
        console.log('load ended');
        console.log('observe start');

        var observer = new MutationObserver(function(mutations) {
          mutations.forEach(function(mutation) {
            console.log(mutation.type);
          });
        });

        // configuration of the observer:
        var config = { attributes: true, childList: true, characterData: true };

        // pass in the target node, as well as the observer options
        observer.observe(document.getElementById('app'), config);
      }
    })
  };

  return {
    init: init,
  }
}();

App.init();
