var AudioManager = (function () {

  var setup = function () {
    var main = document.getElementById('main');
    var audios = document.getElementsByTagName('audio');
    var audio;
    var file;
    var icon;
    var style;
    var img;

    if (main !== null) {
      icon = document.getElementsByClassName('btn-audio icon icon-audio-play')[0]; //'blob:https%3A//web.whatsapp.com/3fb66b51-facf-43db-b5f5-1d5078705f40';
      style = (typeof icon === 'undefined') ? '' : (icon.currentStyle || window.getComputedStyle(icon, false));
      img = (typeof icon === 'undefined') ? '' : style.backgroundImage.slice(4, -1);

      for (var i = 0; i < audios.length; i++) {
        audio = audios[i].parentNode;
        if ((typeof audio !== 'undefined') && (audio.className !== 'audio is-processed')) {
          audio.className = 'audio is-processed';
          file = audio.getElementsByTagName('audio')[0];
          if (typeof file !== 'undefined') {
            var src = file.getAttribute('src');
            var myRegexp = /[^\/]+$/g;
            var fileName = myRegexp.exec(src)[0];
            var msg = audio.parentNode.parentNode.parentNode.parentNode.parentNode;
            var side = (msg.className.indexOf('message-out') > -1) ? 'left' : 'right';

            var a = document.createElement('a');
            var linkText = document.createTextNode('Download');
            a.appendChild(linkText);
            var span = document.createElement('span');
            span.style.cssText = 'width: 14px;' +
                              'height: 18px;' +
                              'background: url(' + img + ');' +
                              'background-position: -1072px -1084px;' +
                              'display:block;' +
                              'position: absolute;' +
                              'left: 50%;' +
                                'margin-left: -7px;' +
                                'top: 50%;' +
                              'margin-top: -9px;';
            a.appendChild(span);
            a.title = 'Click to download';
            a.style.cssText = 'width: 60px;' +
                              'height: 60px;' +
                              'background: rgba(255,255,255,0.7);' +
                              'border-radius: 5px;' +
                              'border: 1px solid #fff;' +
                                'text-indent: -9999px;' +
                                'position: absolute;' +
                                'z-index:100;' +
                                'top:2px;' +
                              side + ':2px;';
            a.href = src;
            a.target = '_blank';
            a.download = fileName + '.ogg';
            audio.appendChild(a);
          }
        }
      }
    }
  }

  return {
    setup: setup
  }
}());

AudioManager.setup();
