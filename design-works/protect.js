(function () {
  "use strict";

  var blockedKeys = new Set(["s", "u", "p", "i", "j", "c"]);

  document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
  });

  document.addEventListener("dragstart", function (event) {
    event.preventDefault();
  });

  document.addEventListener("selectstart", function (event) {
    event.preventDefault();
  });

  document.addEventListener("keydown", function (event) {
    var key = event.key.toLowerCase();
    var blockedShortcut =
      (event.ctrlKey || event.metaKey) && blockedKeys.has(key);

    if (blockedShortcut || key === "f12") {
      event.preventDefault();
      event.stopPropagation();
    }
  });
})();
