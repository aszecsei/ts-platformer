// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"core\\game.ts":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
var Game = /** @class */function () {
    function Game() {}
    Game.prototype.SetUpScreen = function (ScreenType) {
        var mOldScreen = this.currentScreen;
        var newScreen = new ScreenType(mOldScreen);
        this.currentScreen = newScreen;
    };
    return Game;
}();
exports.game = new Game();
},{}],"config.ts":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.DEBUG = true;
exports.FPS_LIST_SIZE = 20;
},{}],"core\\input.ts":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
var Key;
(function (Key) {
    Key[Key["BACKSPACE"] = 8] = "BACKSPACE";
    Key[Key["TAB"] = 9] = "TAB";
    Key[Key["ENTER"] = 13] = "ENTER";
    Key[Key["SHIFT"] = 16] = "SHIFT";
    Key[Key["CTRL"] = 17] = "CTRL";
    Key[Key["ALT"] = 18] = "ALT";
    Key[Key["PAUSE_BREAK"] = 19] = "PAUSE_BREAK";
    Key[Key["CAPS_LOCK"] = 20] = "CAPS_LOCK";
    Key[Key["ESCAPE"] = 27] = "ESCAPE";
    Key[Key["SPACE"] = 32] = "SPACE";
    Key[Key["PAGE_UP"] = 33] = "PAGE_UP";
    Key[Key["PAGE_DOWN"] = 34] = "PAGE_DOWN";
    Key[Key["END"] = 35] = "END";
    Key[Key["HOME"] = 36] = "HOME";
    Key[Key["LEFT_ARROW"] = 37] = "LEFT_ARROW";
    Key[Key["UP_ARROW"] = 38] = "UP_ARROW";
    Key[Key["RIGHT_ARROW"] = 39] = "RIGHT_ARROW";
    Key[Key["DOWN_ARROW"] = 40] = "DOWN_ARROW";
    Key[Key["INSERT"] = 45] = "INSERT";
    Key[Key["DELETE"] = 46] = "DELETE";
    Key[Key["ZERO"] = 48] = "ZERO";
    Key[Key["ONE"] = 49] = "ONE";
    Key[Key["TWO"] = 50] = "TWO";
    Key[Key["THREE"] = 51] = "THREE";
    Key[Key["FOUR"] = 52] = "FOUR";
    Key[Key["FIVE"] = 53] = "FIVE";
    Key[Key["SIX"] = 54] = "SIX";
    Key[Key["SEVEN"] = 55] = "SEVEN";
    Key[Key["EIGHT"] = 56] = "EIGHT";
    Key[Key["NINE"] = 57] = "NINE";
    Key[Key["A"] = 65] = "A";
    Key[Key["B"] = 66] = "B";
    Key[Key["C"] = 67] = "C";
    Key[Key["D"] = 68] = "D";
    Key[Key["E"] = 69] = "E";
    Key[Key["F"] = 70] = "F";
    Key[Key["G"] = 71] = "G";
    Key[Key["H"] = 72] = "H";
    Key[Key["I"] = 73] = "I";
    Key[Key["J"] = 74] = "J";
    Key[Key["K"] = 75] = "K";
    Key[Key["L"] = 76] = "L";
    Key[Key["M"] = 77] = "M";
    Key[Key["N"] = 78] = "N";
    Key[Key["O"] = 79] = "O";
    Key[Key["P"] = 80] = "P";
    Key[Key["Q"] = 81] = "Q";
    Key[Key["R"] = 81] = "R";
    Key[Key["S"] = 83] = "S";
    Key[Key["T"] = 84] = "T";
    Key[Key["U"] = 85] = "U";
    Key[Key["V"] = 86] = "V";
    Key[Key["W"] = 87] = "W";
    Key[Key["X"] = 88] = "X";
    Key[Key["Y"] = 89] = "Y";
    Key[Key["Z"] = 90] = "Z";
    Key[Key["WIN_LEFT"] = 91] = "WIN_LEFT";
    Key[Key["WIN_RIGHT"] = 92] = "WIN_RIGHT";
    Key[Key["SELECT"] = 93] = "SELECT";
    Key[Key["NUM_ZERO"] = 96] = "NUM_ZERO";
    Key[Key["NUM_ONE"] = 97] = "NUM_ONE";
    Key[Key["NUM_TWO"] = 98] = "NUM_TWO";
    Key[Key["NUM_THREE"] = 99] = "NUM_THREE";
    Key[Key["NUM_FOUR"] = 100] = "NUM_FOUR";
    Key[Key["NUM_FIVE"] = 101] = "NUM_FIVE";
    Key[Key["NUM_SIX"] = 102] = "NUM_SIX";
    Key[Key["NUM_SEVEN"] = 103] = "NUM_SEVEN";
    Key[Key["NUM_EIGHT"] = 104] = "NUM_EIGHT";
    Key[Key["NUM_NINE"] = 105] = "NUM_NINE";
    Key[Key["MULTIPLY"] = 106] = "MULTIPLY";
    Key[Key["ADD"] = 107] = "ADD";
    Key[Key["SUBTRACT"] = 109] = "SUBTRACT";
    Key[Key["DECIMAL"] = 110] = "DECIMAL";
    Key[Key["DIVIDE"] = 111] = "DIVIDE";
    Key[Key["F1"] = 112] = "F1";
    Key[Key["F2"] = 113] = "F2";
    Key[Key["F3"] = 114] = "F3";
    Key[Key["F4"] = 115] = "F4";
    Key[Key["F5"] = 116] = "F5";
    Key[Key["F6"] = 117] = "F6";
    Key[Key["F7"] = 118] = "F7";
    Key[Key["F8"] = 119] = "F8";
    Key[Key["F9"] = 120] = "F9";
    Key[Key["F10"] = 121] = "F10";
    Key[Key["F11"] = 122] = "F11";
    Key[Key["F12"] = 123] = "F12";
    Key[Key["NUM_LOCK"] = 144] = "NUM_LOCK";
    Key[Key["SCROLL_LOCK"] = 145] = "SCROLL_LOCK";
    Key[Key["SEMICOLON"] = 186] = "SEMICOLON";
    Key[Key["EQUALS"] = 187] = "EQUALS";
    Key[Key["COMMA"] = 188] = "COMMA";
    Key[Key["DASH"] = 189] = "DASH";
    Key[Key["PERIOD"] = 190] = "PERIOD";
    Key[Key["FORWARD_SLASH"] = 191] = "FORWARD_SLASH";
    Key[Key["GRAVE_ACCENT"] = 192] = "GRAVE_ACCENT";
    Key[Key["OPEN_BRACKET"] = 219] = "OPEN_BRACKET";
    Key[Key["BACK_SLASH"] = 220] = "BACK_SLASH";
    Key[Key["CLOSE_BRACKET"] = 221] = "CLOSE_BRACKET";
    Key[Key["SINGLE_QUOTE"] = 222] = "SINGLE_QUOTE";
})(Key = exports.Key || (exports.Key = {}));
var CInputManager = /** @class */function () {
    function CInputManager() {
        this._pressed = new Set();
        this._lastPressed = new Set();
    }
    CInputManager.prototype.isDown = function (keyCode) {
        return this._pressed.has(keyCode);
    };
    CInputManager.prototype.pressed = function (keyCode) {
        return this._pressed.has(keyCode) && !this._lastPressed.has(keyCode);
    };
    CInputManager.prototype.isUp = function (keyCode) {
        return !this._pressed.has(keyCode);
    };
    CInputManager.prototype.released = function (keyCode) {
        return !this._pressed.has(keyCode) && this._lastPressed.has(keyCode);
    };
    CInputManager.prototype.onKeydown = function (event) {
        this._pressed.add(event.keyCode);
        event.preventDefault();
    };
    CInputManager.prototype.onKeyup = function (event) {
        this._pressed["delete"](event.keyCode);
        event.preventDefault();
    };
    CInputManager.prototype.flush = function () {
        var _this = this;
        this._lastPressed.clear();
        this._pressed.forEach(function (k) {
            return _this._lastPressed.add(k);
        });
    };
    return CInputManager;
}();
exports.INPUT_MANAGER = new CInputManager();
},{}],"core\\screen.ts":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
var Screen = /** @class */function () {
    function Screen() {}
    Screen.UpdateScreen = function () {
        Screen._height = document.documentElement.clientHeight;
        Screen._width = document.documentElement.clientWidth;
        Screen._dpr = window.devicePixelRatio;
    };
    Object.defineProperty(Screen, "height", {
        get: function get() {
            return Screen._height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Screen, "width", {
        get: function get() {
            return Screen._width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Screen, "dpr", {
        get: function get() {
            return Screen._dpr;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Screen, "resolution", {
        get: function get() {
            return {
                height: Screen._height,
                width: Screen._width
            };
        },
        enumerable: true,
        configurable: true
    });
    return Screen;
}();
exports["default"] = Screen;
},{}],"core\\main.ts":[function(require,module,exports) {
"use strict";

var __importStar = this && this.__importStar || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    }result["default"] = mod;
    return result;
};
var __importDefault = this && this.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
};
exports.__esModule = true;
var config = __importStar(require("../config"));
var game_1 = require("./game");
var input_1 = require("./input");
var screen_1 = __importDefault(require("./screen"));
function init() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var resizeCanvas = function resizeCanvas() {
        canvas.width = screen_1["default"].width;
        canvas.height = screen_1["default"].height;
    };
    resizeCanvas();
    ctx.imageSmoothingEnabled = false;
    ctx.textBaseline = 'middle';
    var last = -1;
    var fpsList = [0];
    window.addEventListener('keyup', function (event) {
        return input_1.INPUT_MANAGER.onKeyup(event);
    });
    window.addEventListener('keydown', function (event) {
        return input_1.INPUT_MANAGER.onKeydown(event);
    });
    var gameloop = function gameloop(timestamp) {
        var inc = 0;
        if (last) {
            inc = timestamp - last;
        }
        last = timestamp;
        screen_1["default"].UpdateScreen();
        resizeCanvas();
        ctx.clearRect(0, 0, screen_1["default"].width, screen_1["default"].height);
        game_1.game.currentScreen.update(inc);
        game_1.game.currentScreen.draw(ctx, inc);
        if (config.DEBUG) {
            fpsList.push(inc);
            if (fpsList.length > config.FPS_LIST_SIZE) {
                fpsList.shift();
                ctx.fillStyle = 'white';
                ctx.font = '1em "Arial"';
                var avgFPS = fpsList.reduce(function (x, y) {
                    return x + y;
                }, 0) / config.FPS_LIST_SIZE;
                ctx.fillText("FPS: " + (1000 / avgFPS).toFixed(3), 50, 50);
            }
        }
        input_1.INPUT_MANAGER.flush();
        window.requestAnimationFrame(gameloop);
    };
    window.requestAnimationFrame(gameloop);
}
exports["default"] = init;
},{"../config":"config.ts","./game":"core\\game.ts","./input":"core\\input.ts","./screen":"core\\screen.ts"}],"core\\resource-manager.ts":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
var images = new Map();
function getImage(name) {
    return images.get(name);
}
exports.getImage = getImage;
function loadImage(name, path) {
    var img = new Image();
    img.src = path;
    images.set(name, img);
}
exports.loadImage = loadImage;
},{}],"core\\text.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
};
exports.__esModule = true;
var screen_1 = __importDefault(require("./screen"));
var Alignment;
(function (Alignment) {
    Alignment[Alignment["Left"] = 0] = "Left";
    Alignment[Alignment["Center"] = 1] = "Center";
    Alignment[Alignment["Right"] = 2] = "Right";
})(Alignment = exports.Alignment || (exports.Alignment = {}));
var TextAnchor;
(function (TextAnchor) {
    TextAnchor[TextAnchor["UpperLeft"] = 0] = "UpperLeft";
    TextAnchor[TextAnchor["UpperCenter"] = 1] = "UpperCenter";
    TextAnchor[TextAnchor["UpperRight"] = 2] = "UpperRight";
    TextAnchor[TextAnchor["MiddleLeft"] = 3] = "MiddleLeft";
    TextAnchor[TextAnchor["MiddleCenter"] = 4] = "MiddleCenter";
    TextAnchor[TextAnchor["MiddleRight"] = 5] = "MiddleRight";
    TextAnchor[TextAnchor["LowerLeft"] = 6] = "LowerLeft";
    TextAnchor[TextAnchor["LowerCenter"] = 7] = "LowerCenter";
    TextAnchor[TextAnchor["LowerRight"] = 8] = "LowerRight";
})(TextAnchor = exports.TextAnchor || (exports.TextAnchor = {}));
var Text = /** @class */function () {
    function Text() {
        this.alignment = Alignment.Left;
        this.anchor = TextAnchor.MiddleCenter;
        this.characterSize = 1;
        this.color = 'white';
        this.font = 'Arial';
        this.fontSize = '16pt';
        this.fontStyle = 'normal';
        this.fontVariant = 'normal';
        this.fontWeight = 'normal';
        this.lineSpacing = undefined;
        this.text = '';
    }
    Text.prototype.draw = function (ctx, deltaTime) {
        ctx.fillStyle = this.color;
        var fontSizeAndSpacing = this.lineSpacing ? this.fontSize + "/" + this.lineSpacing : this.fontSize;
        ctx.font = this.fontStyle + " " + this.fontVariant + " " + this.fontWeight + " " + fontSizeAndSpacing + " \"" + this.font + "\"";
        // TODO: Positioning based on alignment, anchor, character size
        ctx.fillText(this.text, (screen_1["default"].width - ctx.measureText(this.text).width) / 2, screen_1["default"].height / 2 - 50);
    };
    return Text;
}();
exports["default"] = Text;
},{"./screen":"core\\screen.ts"}],"platformer\\scenes\\title-scene.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
};
exports.__esModule = true;
var text_1 = __importDefault(require("../../core/text"));
var TitleScene = /** @class */function () {
    function TitleScene() {
        this.titleText = new text_1["default"]();
        this.titleText.text = 'Platformer';
        this.titleText.fontSize = '64pt';
        this.titleText.lineSpacing = '72pt';
    }
    TitleScene.prototype.name = function () {
        return 'Title Screen';
    };
    TitleScene.prototype.update = function () {
        // Do nothing
    };
    TitleScene.prototype.draw = function (ctx, deltaTime) {
        this.titleText.draw(ctx, deltaTime);
    };
    return TitleScene;
}();
exports["default"] = TitleScene;
},{"../../core/text":"core\\text.ts"}],"platformer\\resources\\images\\alic_face.png":[function(require,module,exports) {
module.exports = "/alic_face.4f776062.png";
},{}],"index.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
};
var __importStar = this && this.__importStar || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    }result["default"] = mod;
    return result;
};
exports.__esModule = true;
var game_1 = require("./core/game");
var main_1 = __importDefault(require("./core/main"));
var ResourceManager = __importStar(require("./core/resource-manager"));
var title_scene_1 = __importDefault(require("./platformer/scenes/title-scene"));
/// <reference path="./typings/images.d.ts" />
var alic_face_png_1 = __importDefault(require("./platformer/resources/images/alic_face.png"));
// Load all resources
ResourceManager.loadImage('alic', alic_face_png_1["default"]);
main_1["default"]();
game_1.game.SetUpScreen(title_scene_1["default"]);
},{"./core/game":"core\\game.ts","./core/main":"core\\main.ts","./core/resource-manager":"core\\resource-manager.ts","./platformer/scenes/title-scene":"platformer\\scenes\\title-scene.ts","./platformer/resources/images/alic_face.png":"platformer\\resources\\images\\alic_face.png"}],"C:\\Users\\aszecsei\\AppData\\Local\\Yarn\\Data\\global\\node_modules\\parcel-bundler\\src\\builtins\\hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';

var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '51938' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();

      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["C:\\Users\\aszecsei\\AppData\\Local\\Yarn\\Data\\global\\node_modules\\parcel-bundler\\src\\builtins\\hmr-runtime.js","index.ts"], null)
//# sourceMappingURL=/src.85af62c7.map