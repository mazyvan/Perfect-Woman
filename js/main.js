document.addEventListener("DOMContentLoaded", function() {
  var toggleList = document.getElementsByClassName("cmn-toggle");
  var toggles = toArray(toggleList);
  toggles.forEach(function(toggle) {
    toggle.onclick = onClick;
    toggle.checked = false;
  });

  // check all but one toggle on load
  setTimeout(function () {
    shuffle(toggles);
    for (var i = 1; i < toggles.length; i++) {
      toggles[i].checked = true;
    };
  }, 100);


  function onClick(e) {
    // get all checked toggle switches
    var togglesChecked = toggles.filter(function(toggle) {
      return toggle.checked;
    })

    if (togglesChecked.length === toggles.length) {
      // don't uncheck last clicked
      togglesChecked = togglesChecked.filter(function(toggle) {
        return toggle !== e.target;
      })

      // uncheck random remaining toggle
      togglesChecked[randBetween(0, togglesChecked.length)].checked = false;
    }
  }
});


function toArray(obj) {
  var array = [];
  for (var i = obj.length >>> 0; i--;) {
    array[i] = obj[i];
  }
  return array;
}

function shuffle(a) {
  for (var i = a.length; i; i--) {
    var j = Math.floor(Math.random() * i);
    [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
}

function randBetween(min, max) {
  return Math.floor((Math.random() * max) + min);
}