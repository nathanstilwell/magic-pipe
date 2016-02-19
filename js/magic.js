(function (global) {

  //
  //  Vars
  //

  var prefix = 'meetup-makes-it-magical--';
  var magicStyleUrl = 'https://cdn.rawgit.com/nathanstilwell/54f147004fc83b5d3885/raw/22ab7a581c5377ff2c679a93f6c02f1d1c2f1cdc/magical.css';
  var supercornUrl = 'https://raw.githubusercontent.com/upright-netizen/uprightnetizen.com/102d1d84259c54189ad31110668455f167302d3c/img/supercorn.gif';
  var supercornClassname = prefix + 'supercorn';
  var magicCSSId = prefix + 'magic_style';
  var rainbowId = prefix + 'rainbow-everything';
  var unicornId = prefix + 'unicorn-container';
  var toggleClass = prefix + 'magic';
  var body = document.getElementsByTagName('body')[0];
  var magicCSSExists = document.getElementById(magicCSSId);
  var cssPromise;

  //
  //  Functions
  //

  var removeMagic = function () {
    body.classList.remove(toggleClass);
  }

  var addMagic = function () {
    body.classList.add(toggleClass);
  };

  var loadCSS = function(url, id) {
    return new Promise(function (resolve) {
      var link = document.createElement('link');
      var img = document.createElement('img');

      link.type = 'text/css';
      link.rel = 'stylesheet';
      link.id = id;
      link.href = url;

      document.getElementsByTagName('head')[0].appendChild(link);

      img.onerror = function(){
        resolve();
      }

      img.src = url;
    }); // promise
  }

  var makeRainbowOverlay = function makeRainbowOverlay (id) {
    if (!document.getElementById(id)) {
      var rainbows = document.createElement('div');
      rainbows.className = id;
      rainbows.id = id;
      rainbows.addEventListener('click', removeMagic);
      body.appendChild(rainbows);
    }
  }

  var makeMagictitle = function makeMagictitle () {
    var title = document.createElement('h2');
    var m = document.createElement('span');
    var a = document.createElement('span');
    var g = document.createElement('span');
    var i = document.createElement('span');
    var c = document.createElement('span');
    var bang = document.createElement('span');

    m.innerText = 'M';
    a.innerText = 'a';
    g.innerText = 'g';
    i.innerText = 'i';
    c.innerText = 'c';
    bang.innerText = '!';

    title.className = prefix + 'magic-title';
    title.appendChild(m);
    title.appendChild(a);
    title.appendChild(g);
    title.appendChild(i);
    title.appendChild(c);
    title.appendChild(bang);
    return title;
  }

  var makeSupercorn = function makeSupercorn (url) {
    var supercorn = document.createElement('img');
    supercorn.className = supercornClassname;
    supercorn.setAttribute('src', url);
    return supercorn;
  }

  var makeUnicornOverlay = function makeUnicornOverlay (id) {
    if (!document.getElementById(id)) {
      var unicorns = document.createElement('div');
      unicorns.className = id;
      unicorns.id = id;
      unicorns.addEventListener('click', removeMagic);

      var supercorn = makeSupercorn(supercornUrl);
      var magicTitle = makeMagictitle();

      unicorns.appendChild(magicTitle);
      unicorns.appendChild(supercorn);
      body.appendChild(unicorns);
    }
  }

  //
  //  Fire it up!!!
  //
  var goForMagic = function () {
    makeRainbowOverlay(rainbowId);
    makeUnicornOverlay(unicornId);

    // Wait a sec for paint
    setTimeout(function () {
      addMagic();
    }, 200);
  }

  // Add CSS and go
  if (!magicCSSExists) {
    loadCSS(magicStyleUrl, magicCSSId).then(goForMagic);
  } else {
    goForMagic();
  }

  window.bringBackThoseMagicalTimes = addMagic;
}(window));
