(function (window, undefined) {
  var elements;

  if ( ! document.querySelectorAll) {
    return;
  }

  elements = document.querySelectorAll('pre');
  Array.prototype.forEach.call(elements, function (pre, index) {
    var anchor = document.createElement('a');

    anchor.href = '#';
    anchor.appendChild(document.createTextNode('Toggle'));
    anchor.addEventListener('click', function (event) {
      event.preventDefault();
      pre.style.display = (pre.style.display === 'none') ? 'block' : 'none';
    }, false);

    pre.style.display = 'none';
    pre.parentNode.insertBefore(anchor, pre);
  });

  (function setupExceptionExample() {
    var clicks = 0;
    $('h1').click(function () {
      clicks += 1;
      if (clicks > 3) {
        throw 'overzealous clicking error';
      }
    });
  })();

  function innerFunctionOne() {
    example = 42;
    console.log("I am innerFunctionOne() calling innerFunctionTwo()");
    innerFunctionTwo();
  }

  function innerFunctionTwo() {
    window.example = 'something else';
    console.log("I am innerFunctionTwo() calling innerFunctionThree()");
    innerFunctionThree();
  }

  function innerFunctionThree() {
    window.example = null;
    console.log("I am innerFunctionThree() calling console.trace()");
    console.trace();
  }

  function arrayConcatenation(string, total) {
    var array = [], i = 0;

    console.time('Joining one million array items');
    for (i = 0; i < total; i += 1) {
      array.push(string);
    }
    array.join('');
    console.timeEnd('Joining one million array items');
  }

  function stringConcatenation(string, total) {
    var result = '', i = 0;

    console.time('Concatenating one million strings');
    for (i = 0; i < total; i += 1) {
      result += string;
    }
    console.timeEnd('Concatenating one million strings');
  }

  window.timeExample = function () {
    var total = 1000000, string = '<li>This is a list item</li>';
    stringConcatenation(string, total);
    arrayConcatenation(string, total);
  };

  window.traceExample = function () {
    console.log("Calling: innerFunctionOne()");
    innerFunctionOne();
  };

  window.assertExample = function (oops) {
    console.log('');
    console.debug('');
  };

  window.example = 'I\'m a global variable!';

  window.bands = {
    beatles: ['George Harrison', 'John Lennon', 'Paul McCartney', 'Ringo Starr'],
    stones:  ['Mick Jagger', 'Keith Richards', 'Charlie Watts', 'Ronnie Wood'],
    monkeys: ['Monkey One', 'Monkey Two', 'Monkey Three', 'Monkey Four']
  };

  window.jams = [
    'strawberry', 'raspberry', 'blackcurrent', 'quince', 'loganberry'
  ];

})(this);
