"use strict";
(() => {
    // enums are a way to create a set of named constants
    // enums are useful for creating a set of named constants
    // enums must be named in uppercamelcase
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 0] = "min";
        AudioLevel[AudioLevel["medium"] = 1] = "medium";
        AudioLevel[AudioLevel["max"] = 2] = "max";
    })(AudioLevel || (AudioLevel = {}));
})();
