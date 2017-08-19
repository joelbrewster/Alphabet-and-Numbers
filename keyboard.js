var keyCodes = {
  48: '10',
  49: '1',
  50: '2',
  51: '3',
  52: '4',
  53: '5',
  54: '6',
  55: '7',
  56: '8',
  57: '9',
  65: 'Aa',
  66: 'Bb',
  67: 'Cc',
  68: 'Dd',
  69: 'Ee',
  70: 'Ff',
  71: 'Gg',
  72: 'Hh',
  73: 'Ii',
  74: 'Jj',
  75: 'Kk',
  76: 'Ll',
  77: 'Mm',
  78: 'Nn',
  79: 'Oo',
  80: 'Pp',
  81: 'Qq',
  82: 'Rr',
  83: 'Ss',
  84: 'Tt',
  85: 'Uu',
  86: 'Vv',
  87: 'Ww',
  88: 'Xx',
  89: 'Yy',
  90: 'Zz',
  191: '💩'
};

var body = document.querySelector('body');

body.onkeydown = function (e) {

  if (keyCodes[e.keyCode]) {
    var key = keyCodes[e.keyCode];
    var image = 'images/' + key + '.jpg';

    document.querySelector('.text-display').innerHTML = keyCodes[e.keyCode];
    body.style.backgroundImage = 'url(' + image + ')';
  }
};