module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"1":"components/about-us-banner","2":"components/banner","3":"components/best-deal-slider","4":"components/blog","5":"components/blog-sidebar","6":"components/brand-card","7":"components/comment-form","8":"components/pagination","9":"components/product-card","10":"components/product-carousel","11":"components/small-banner","12":"components/tag","13":"components/top-brand-slider","14":"components/trending-product","15":"components/u-icomponents-alert","16":"components/u-icomponents-modal","17":"components/u-icomponents-slide-over","18":"pages/404.vue","19":"pages/about.vue","20":"pages/cart.vue","21":"pages/checkout.vue","22":"pages/contact.vue","23":"pages/forgot.vue","24":"pages/index.vue","25":"pages/login.vue","26":"pages/product/_slug.vue","27":"pages/product/brand.vue","28":"pages/product/index.vue","29":"pages/register.vue","30":"pages/resetPassword.vue","31":"pages/thanks.vue","32":"pages/verify.vue"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/_nuxt/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 33);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("ufo");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesServer; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesServer.js


function addStylesServer (parentId, list, isProduction, context) {
  if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
    context = __VUE_SSR_CONTEXT__
  }
  if (context) {
    if (!context.hasOwnProperty('styles')) {
      Object.defineProperty(context, 'styles', {
        enumerable: true,
        get: function() {
          return renderStyles(context._styles)
        }
      })
      // expose renderStyles for vue-server-renderer (vuejs/#6353)
      context._renderStyles = renderStyles
    }

    var styles = context._styles || (context._styles = {})
    list = listToStyles(parentId, list)
    if (isProduction) {
      addStyleProd(styles, list)
    } else {
      addStyleDev(styles, list)
    }
  }
}

// In production, render as few style tags as possible.
// (mostly because IE9 has a limit on number of style tags)
function addStyleProd (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      // group style tags by media types.
      var id = part.media || 'default'
      var style = styles[id]
      if (style) {
        if (style.ids.indexOf(part.id) < 0) {
          style.ids.push(part.id)
          style.css += '\n' + part.css
        }
      } else {
        styles[id] = {
          ids: [part.id],
          css: part.css,
          media: part.media
        }
      }
    }
  }
}

// In dev we use individual style tag for each module for hot-reload
// and source maps.
function addStyleDev (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      styles[part.id] = {
        ids: [part.id],
        css: part.css,
        media: part.media
      }
    }
  }
}

function renderStyles (styles) {
  var css = ''
  for (var key in styles) {
    var style = styles[key]
    css += '<style data-vue-ssr-id="' + style.ids.join(' ') + '"' +
        (style.media ? ( ' media="' + style.media + '"' ) : '') + '>' +
        style.css + '</style>'
  }
  return css
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("vuex");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer.vue?vue&type=template&id=d798d46e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<footer class=\"w-full bg-gray-100\"><div class=\"w-full border-b border-solid border-gray-200\"><div class=\"w-[94%] xl:w-11/12 max-w-[1440px] mx-auto\"><div class=\"md:grid md:grid-cols-2 md:py-6 lg:grid-cols-3 justify-center\"><div class=\"text-center md:text-left flex flex-col md:flex-row md:gap-6 items-center md:border-r border-solid border-gray-300\"><div class=\"p-3 text-center text-2xl border-2 border-solid border-red-500 rounded-full w-14 h-14 leading-12 inline-block\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M19 9.062s-5.188-.333-7 1.938c2-4.896 7-5.938 7-5.938v-2l5 4-5 4.019v-2.019zm-18.974 14.938h23.947l-11.973-11.607-11.974 \n                            11.607zm1.673-14l10.291-7.488 3.053 2.218c.712-.459 1.391-.805 1.953-1.054l-5.006-3.637-11.99 8.725v12.476l7.352-7.127-5.653-4.113zm15.753 \n                            4.892l6.548 6.348v-11.612l-6.548 5.264z\"></path></svg></div> <div><h2 class=\"text-xl font-bold\">\n                                Tham gia nhận thư để được giảm giá 10%\n                                <br>\n                                cho đơn hàng tiếp theo!\n                            </h2></div></div> <div class=\"text-center\"><p class=\"text-gray-400 font-bold px-10 text-base my-4\">\n                            Đăng ký nhận thư để nhận được <br>\n                            thông tin mới nhất\n                        </p></div> <div class=\"col-start-1 col-end-3 lg:col-auto mt-4\"><form class=\"flex items-center w-full mx-auto border border-solid border-gray-300 rounded-full\" style=\"max-width: 480px;\"><input type=\"text\" placeholder=\"Địa chỉ email\" class=\"w-full border-black rounded-l-full \n                    outline-none py-4 ml-10 bg-gray-100 text-sm font-bold\n                    \"> <span><input type=\"submit\" value=\"ĐĂNG KÝ\" class=\"block relative top-0 \n                        bg-black rounded-full px-4 leading-4 h-11 m-1\n                        text-xs text-white\n                        \"></span></form></div></div></div></div> <div class=\"w-full border-b border-solid border-gray-200 pb-10\"><div class=\"w-[94%] xl:w-11/12 max-w-[1440px] mx-auto mt-4\"><div class=\"flex items-center justify-center\"><div class=\"md:mb-10\"><div class=\"py-4\"><img"+(_vm._ssrAttr("src",__webpack_require__(7)))+" alt class=\"max-h-28\"></div> <div class=\"flex flex-col text-yellow-600\"><div class=\"flex flex-col md:flex-row md:items-center justify-center lg:justify-start mb-2\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 0c-4.198 0-8 3.403-8 7.602 0 \n                                    4.198 3.469 9.21 8 16.398 4.531-7.188 \n                                    8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z\" fill=\"orange\"></path></svg> <span class=\"text-black text-sm font-bold mb-2\">Đường Hậu Giang, Phường 9, Quận 6,<br>\n                                    TP.Hồ Chí Minh\n                                </span></div> <div class=\"flex flex-col md:flex-row md:items-center justify-center lg:justify-start mb-2 md:mb-0\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 \n                                    1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z\" fill=\"orange\"></path></svg> <span class=\"text-black text-sm font-bold mb-2 md:mb-0\">0909 96 82 92</span></div></div></div></div></div></div> <div class=\"w-[94%] xl:w-11/12 max-w-[1440px] mx-auto text-center py-3 flex items-center justify-between\"><div><span class=\"text-black font-medium text-xs\">@ 2021 FPT PETSTORE</span></div> <div><img src=\"https://developers.momo.vn/images/favicon/ms-icon-310x310.png\" width=\"35px\" alt class=\"mx-auto mt-4 md:mt-0\"></div></div></footer>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Footer.vue?vue&type=template&id=d798d46e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Footervue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/Footer.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Footervue_type_script_lang_js_ = (Footervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Footer.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Footervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "af41195e"
  
)

/* harmony default export */ var Footer = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Footer: __webpack_require__(6).default})


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo.d198c64.png";

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/**
  * vee-validate v3.0.11
  * (c) 2019 Abdelrahman Awad
  * @license MIT
  */
(function (global, factory) {
   true ? factory(exports, __webpack_require__(0)) : undefined;
})(this, function (exports, Vue) {
  'use strict';

  Vue = Vue && Vue.hasOwnProperty('default') ? Vue['default'] : Vue;
  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation. All rights reserved.
  Licensed under the Apache License, Version 2.0 (the "License"); you may not use
  this file except in compliance with the License. You may obtain a copy of the
  License at http://www.apache.org/licenses/LICENSE-2.0
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
  WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
  MERCHANTABLITY OR NON-INFRINGEMENT.
    See the Apache Version 2.0 License for specific language governing permissions
  and limitations under the License.
  ***************************************************************************** */

  var __assign = function () {
    __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];

        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }

      return t;
    };

    return __assign.apply(this, arguments);
  };

  function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }

      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }

      function step(result) {
        result.done ? resolve(result.value) : new P(function (resolve) {
          resolve(result.value);
        }).then(fulfilled, rejected);
      }

      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  }

  function __generator(thisArg, body) {
    var _ = {
      label: 0,
      sent: function () {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
        f,
        y,
        t,
        g;
    return g = {
      next: verb(0),
      "throw": verb(1),
      "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
      return this;
    }), g;

    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }

    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");

      while (_) try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }

      if (op[0] & 5) throw op[1];
      return {
        value: op[0] ? op[1] : void 0,
        done: true
      };
    }
  }

  function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

    for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

    return r;
  }

  var isNaN = function (value) {
    // NaN is the one value that does not equal itself.
    // eslint-disable-next-line
    return value !== value;
  };
  /**
   * Checks if the values are either null or undefined.
   */


  var isNullOrUndefined = function (value) {
    return value === null || value === undefined;
  };
  /**
   * Creates the default flags object.
   */


  var createFlags = function () {
    return {
      untouched: true,
      touched: false,
      dirty: false,
      pristine: true,
      valid: false,
      invalid: false,
      validated: false,
      pending: false,
      required: false,
      changed: false
    };
  };
  /**
   * Checks if the value is an object.
   */


  var isObject = function (obj) {
    return obj !== null && obj && typeof obj === 'object' && !Array.isArray(obj);
  };

  function identity(x) {
    return x;
  }
  /**
   * Shallow object comparison.
   */


  var isEqual = function (lhs, rhs) {
    if (lhs instanceof RegExp && rhs instanceof RegExp) {
      return isEqual(lhs.source, rhs.source) && isEqual(lhs.flags, rhs.flags);
    }

    if (Array.isArray(lhs) && Array.isArray(rhs)) {
      if (lhs.length !== rhs.length) return false;

      for (var i = 0; i < lhs.length; i++) {
        if (!isEqual(lhs[i], rhs[i])) {
          return false;
        }
      }

      return true;
    } // if both are objects, compare each key recursively.


    if (isObject(lhs) && isObject(rhs)) {
      return Object.keys(lhs).every(function (key) {
        return isEqual(lhs[key], rhs[key]);
      }) && Object.keys(rhs).every(function (key) {
        return isEqual(lhs[key], rhs[key]);
      });
    }

    if (isNaN(lhs) && isNaN(rhs)) {
      return true;
    }

    return lhs === rhs;
  };

  var includes = function (collection, item) {
    return collection.indexOf(item) !== -1;
  };
  /**
   * Parses a rule string expression.
   */


  var parseRule = function (rule) {
    var params = [];
    var name = rule.split(':')[0];

    if (includes(rule, ':')) {
      params = rule.split(':').slice(1).join(':').split(',');
    }

    return {
      name: name,
      params: params
    };
  };
  /**
   * Debounces a function.
   */


  var debounce = function (fn, wait, token) {
    if (wait === void 0) {
      wait = 0;
    }

    if (token === void 0) {
      token = {
        cancelled: false
      };
    }

    if (wait === 0) {
      return fn;
    }

    var timeout;
    return function () {
      var args = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }

      var later = function () {
        timeout = undefined; // check if the fn call was cancelled.

        if (!token.cancelled) fn.apply(void 0, args);
      }; // because we might want to use Node.js setTimout for SSR.


      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };
  /**
   * Emits a warning to the console.
   */


  var warn = function (message) {
    console.warn("[vee-validate] " + message);
  };
  /**
   * Normalizes the given rules expression.
   */


  var normalizeRules = function (rules) {
    // if falsy value return an empty object.
    var acc = {};
    Object.defineProperty(acc, '_$$isNormalized', {
      value: true,
      writable: false,
      enumerable: false,
      configurable: false
    });

    if (!rules) {
      return acc;
    } // Object is already normalized, skip.


    if (isObject(rules) && rules._$$isNormalized) {
      return rules;
    }

    if (isObject(rules)) {
      return Object.keys(rules).reduce(function (prev, curr) {
        var params = [];

        if (rules[curr] === true) {
          params = [];
        } else if (Array.isArray(rules[curr])) {
          params = rules[curr];
        } else if (isObject(rules[curr])) {
          params = rules[curr];
        } else {
          params = [rules[curr]];
        }

        if (rules[curr] !== false) {
          prev[curr] = params;
        }

        return prev;
      }, acc);
    }
    /* istanbul ignore if */


    if (typeof rules !== 'string') {
      warn('rules must be either a string or an object.');
      return acc;
    }

    return rules.split('|').reduce(function (prev, rule) {
      var parsedRule = parseRule(rule);

      if (!parsedRule.name) {
        return prev;
      }

      prev[parsedRule.name] = parsedRule.params;
      return prev;
    }, acc);
  };
  /**
   * Checks if a function is callable.
   */


  var isCallable = function (func) {
    return typeof func === 'function';
  };

  function computeClassObj(names, flags) {
    var acc = {};
    var keys = Object.keys(flags);
    var length = keys.length;

    var _loop_1 = function (i) {
      var flag = keys[i];
      var className = names && names[flag] || flag;
      var value = flags[flag];

      if (isNullOrUndefined(value)) {
        return "continue";
      }

      if ((flag === 'valid' || flag === 'invalid') && !flags.validated) {
        return "continue";
      }

      if (typeof className === 'string') {
        acc[className] = value;
      } else if (Array.isArray(className)) {
        className.forEach(function (cls) {
          acc[cls] = value;
        });
      }
    };

    for (var i = 0; i < length; i++) {
      _loop_1(i);
    }

    return acc;
  }
  /* istanbul ignore next */


  function _copyArray(arrayLike) {
    var array = [];
    var length = arrayLike.length;

    for (var i = 0; i < length; i++) {
      array.push(arrayLike[i]);
    }

    return array;
  }
  /**
   * Converts an array-like object to array, provides a simple polyfill for Array.from
   */


  function toArray(arrayLike) {
    if (isCallable(Array.from)) {
      return Array.from(arrayLike);
    }
    /* istanbul ignore next */


    return _copyArray(arrayLike);
  }

  function findIndex(arrayLike, predicate) {
    var array = Array.isArray(arrayLike) ? arrayLike : toArray(arrayLike);

    if (isCallable(array.findIndex)) {
      return array.findIndex(predicate);
    }
    /* istanbul ignore next */


    for (var i = 0; i < array.length; i++) {
      if (predicate(array[i], i)) {
        return i;
      }
    }
    /* istanbul ignore next */


    return -1;
  }
  /**
   * finds the first element that satisfies the predicate callback, polyfills array.find
   */


  function find(arrayLike, predicate) {
    var array = Array.isArray(arrayLike) ? arrayLike : toArray(arrayLike);
    var idx = findIndex(array, predicate);
    return idx === -1 ? undefined : array[idx];
  }

  function merge(target, source) {
    Object.keys(source).forEach(function (key) {
      if (isObject(source[key])) {
        if (!target[key]) {
          target[key] = {};
        }

        merge(target[key], source[key]);
        return;
      }

      target[key] = source[key];
    });
    return target;
  }

  function values(obj) {
    if (isCallable(Object.values)) {
      return Object.values(obj);
    } // fallback to keys()

    /* istanbul ignore next */


    return Object.keys(obj).map(function (k) {
      return obj[k];
    });
  }

  var isEmptyArray = function (arr) {
    return Array.isArray(arr) && arr.length === 0;
  };

  var interpolate = function (template, values) {
    return template.replace(/\{([^}]+)\}/g, function (_, p) {
      return p in values ? values[p] : "{" + p + "}";
    });
  }; // Checks if a given value is not an empty string or null or undefined.


  var isSpecified = function (val) {
    if (val === '') {
      return false;
    }

    return !isNullOrUndefined(val);
  };

  var RULES = {};

  function normalizeSchema(schema) {
    if (schema.params && schema.params.length) {
      schema.params = schema.params.map(function (param) {
        if (typeof param === 'string') {
          return {
            name: param
          };
        }

        return param;
      });
    }

    return schema;
  }

  var RuleContainer =
  /** @class */
  function () {
    function RuleContainer() {}

    RuleContainer.extend = function (name, schema) {
      // if rule already exists, overwrite it.
      var rule = normalizeSchema(schema);

      if (RULES[name]) {
        RULES[name] = merge(RULES[name], schema);
        return;
      }

      RULES[name] = __assign({
        lazy: false,
        computesRequired: false
      }, rule);
    };

    RuleContainer.iterate = function (fn) {
      var keys = Object.keys(RULES);
      var length = keys.length;

      for (var i = 0; i < length; i++) {
        fn(keys[i], RULES[keys[i]]);
      }
    };

    RuleContainer.isLazy = function (name) {
      return !!(RULES[name] && RULES[name].lazy);
    };

    RuleContainer.isRequireRule = function (name) {
      return !!(RULES[name] && RULES[name].computesRequired);
    };

    RuleContainer.isTargetRule = function (name) {
      var definition = RuleContainer.getRuleDefinition(name);

      if (!definition || !definition.params) {
        return false;
      }

      return definition.params.some(function (param) {
        return !!param.isTarget;
      });
    };

    RuleContainer.getTargetParamNames = function (rule, params) {
      var definition = RuleContainer.getRuleDefinition(rule);

      if (Array.isArray(params)) {
        return params.filter(function (_, idx) {
          return definition.params && find(definition.params, function (p, i) {
            return !!p.isTarget && i === idx;
          });
        });
      }

      return Object.keys(params).filter(function (key) {
        return definition.params && find(definition.params, function (p) {
          return !!p.isTarget && p.name === key;
        });
      }).map(function (key) {
        return params[key];
      });
    };

    RuleContainer.getRuleDefinition = function (ruleName) {
      return RULES[ruleName];
    };

    return RuleContainer;
  }();
  /**
   * Adds a custom validator to the list of validation rules.
   */


  function extend(name, schema) {
    // makes sure new rules are properly formatted.
    guardExtend(name, schema); // Full schema object.

    if (typeof schema === 'object') {
      RuleContainer.extend(name, schema);
      return;
    }

    RuleContainer.extend(name, {
      validate: schema
    });
  }
  /**
   * Guards from extension violations.
   */


  function guardExtend(name, validator) {
    if (isCallable(validator)) {
      return;
    }

    if (isCallable(validator.validate)) {
      return;
    }

    if (RuleContainer.getRuleDefinition(name)) {
      return;
    }

    throw new Error("Extension Error: The validator '" + name + "' must be a function or have a 'validate' method.");
  }

  var DEFAULT_CONFIG = {
    defaultMessage: "{_field_} is not valid.",
    skipOptional: true,
    classes: {
      touched: 'touched',
      untouched: 'untouched',
      valid: 'valid',
      invalid: 'invalid',
      pristine: 'pristine',
      dirty: 'dirty' // control has been interacted with

    },
    bails: true,
    mode: 'aggressive',
    useConstraintAttrs: true
  };

  var currentConfig = __assign({}, DEFAULT_CONFIG);

  var getConfig = function () {
    return currentConfig;
  };

  var setConfig = function (newConf) {
    currentConfig = __assign(__assign({}, currentConfig), newConf);
  };

  var configure = function (cfg) {
    setConfig(cfg);
  };
  /**
   * Validates a value against the rules.
   */


  function validate(value, rules, options) {
    if (options === void 0) {
      options = {};
    }

    return __awaiter(this, void 0, void 0, function () {
      var shouldBail, skipIfEmpty, field, result, errors, ruleMap;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            shouldBail = options && options.bails;
            skipIfEmpty = options && options.skipIfEmpty;
            field = {
              name: options && options.name || '{field}',
              rules: normalizeRules(rules),
              bails: isNullOrUndefined(shouldBail) ? true : shouldBail,
              skipIfEmpty: isNullOrUndefined(skipIfEmpty) ? true : skipIfEmpty,
              forceRequired: false,
              crossTable: options && options.values || {},
              names: options && options.names || {},
              customMessages: options && options.customMessages || {}
            };
            return [4
            /*yield*/
            , _validate(field, value, options)];

          case 1:
            result = _a.sent();
            errors = [];
            ruleMap = {};
            result.errors.forEach(function (e) {
              errors.push(e.msg);
              ruleMap[e.rule] = e.msg;
            });
            return [2
            /*return*/
            , {
              valid: result.valid,
              errors: errors,
              failedRules: ruleMap
            }];
        }
      });
    });
  }
  /**
   * Starts the validation process.
   */


  function _validate(field, value, _a) {
    var _b = (_a === void 0 ? {} : _a).isInitial,
        isInitial = _b === void 0 ? false : _b;
    return __awaiter(this, void 0, void 0, function () {
      var _c, shouldSkip, errors, rules, length, i, rule, result;

      return __generator(this, function (_d) {
        switch (_d.label) {
          case 0:
            return [4
            /*yield*/
            , _shouldSkip(field, value)];

          case 1:
            _c = _d.sent(), shouldSkip = _c.shouldSkip, errors = _c.errors;

            if (shouldSkip) {
              return [2
              /*return*/
              , {
                valid: !errors.length,
                errors: errors
              }];
            }

            rules = Object.keys(field.rules).filter(function (rule) {
              return !RuleContainer.isRequireRule(rule);
            });
            length = rules.length;
            i = 0;
            _d.label = 2;

          case 2:
            if (!(i < length)) return [3
            /*break*/
            , 5];

            if (isInitial && RuleContainer.isLazy(rules[i])) {
              return [3
              /*break*/
              , 4];
            }

            rule = rules[i];
            return [4
            /*yield*/
            , _test(field, value, {
              name: rule,
              params: field.rules[rule]
            })];

          case 3:
            result = _d.sent();

            if (!result.valid && result.error) {
              errors.push(result.error);

              if (field.bails) {
                return [2
                /*return*/
                , {
                  valid: false,
                  errors: errors
                }];
              }
            }

            _d.label = 4;

          case 4:
            i++;
            return [3
            /*break*/
            , 2];

          case 5:
            return [2
            /*return*/
            , {
              valid: !errors.length,
              errors: errors
            }];
        }
      });
    });
  }

  function _shouldSkip(field, value) {
    return __awaiter(this, void 0, void 0, function () {
      var requireRules, length, errors, isEmpty, isEmptyAndOptional, isRequired, i, rule, result;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            requireRules = Object.keys(field.rules).filter(RuleContainer.isRequireRule);
            length = requireRules.length;
            errors = [];
            isEmpty = isNullOrUndefined(value) || value === '' || isEmptyArray(value);
            isEmptyAndOptional = isEmpty && field.skipIfEmpty;
            isRequired = false;
            i = 0;
            _a.label = 1;

          case 1:
            if (!(i < length)) return [3
            /*break*/
            , 4];
            rule = requireRules[i];
            return [4
            /*yield*/
            , _test(field, value, {
              name: rule,
              params: field.rules[rule]
            })];

          case 2:
            result = _a.sent();

            if (!isObject(result)) {
              throw new Error('Require rules has to return an object (see docs)');
            }

            if (result.required) {
              isRequired = true;
            }

            if (!result.valid && result.error) {
              errors.push(result.error); // Exit early as the field is required and failed validation.

              if (field.bails) {
                return [2
                /*return*/
                , {
                  shouldSkip: true,
                  errors: errors
                }];
              }
            }

            _a.label = 3;

          case 3:
            i++;
            return [3
            /*break*/
            , 1];

          case 4:
            if (isEmpty && !isRequired && !field.skipIfEmpty) {
              return [2
              /*return*/
              , {
                shouldSkip: false,
                errors: errors
              }];
            } // field is configured to run through the pipeline regardless


            if (!field.bails && !isEmptyAndOptional) {
              return [2
              /*return*/
              , {
                shouldSkip: false,
                errors: errors
              }];
            } // skip if the field is not required and has an empty value.


            return [2
            /*return*/
            , {
              shouldSkip: !isRequired && isEmpty,
              errors: errors
            }];
        }
      });
    });
  }
  /**
   * Tests a single input value against a rule.
   */


  function _test(field, value, rule) {
    return __awaiter(this, void 0, void 0, function () {
      var ruleSchema, params, normalizedValue, result, values;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            ruleSchema = RuleContainer.getRuleDefinition(rule.name);

            if (!ruleSchema || !ruleSchema.validate) {
              throw new Error("No such validator '" + rule.name + "' exists.");
            }

            params = _buildParams(rule.params, ruleSchema.params, field.crossTable);
            normalizedValue = ruleSchema.castValue ? ruleSchema.castValue(value) : value;
            return [4
            /*yield*/
            , ruleSchema.validate(normalizedValue, params)];

          case 1:
            result = _a.sent();

            if (typeof result === 'string') {
              values = __assign(__assign({}, params || {}), {
                _field_: field.name,
                _value_: value,
                _rule_: rule.name
              });
              return [2
              /*return*/
              , {
                valid: false,
                error: {
                  rule: rule.name,
                  msg: interpolate(result, values)
                }
              }];
            }

            if (!isObject(result)) {
              result = {
                valid: result,
                data: {}
              };
            }

            return [2
            /*return*/
            , {
              valid: result.valid,
              required: result.required,
              data: result.data || {},
              error: result.valid ? undefined : _generateFieldError(field, value, ruleSchema, rule.name, params, result.data)
            }];
        }
      });
    });
  }
  /**
   * Generates error messages.
   */


  function _generateFieldError(field, value, ruleSchema, ruleName, params, data) {
    var values = __assign(__assign(__assign(__assign({}, params || {}), data || {}), {
      _field_: field.name,
      _value_: value,
      _rule_: ruleName
    }), _getTargetNames(field, ruleSchema, ruleName));

    if (Object.prototype.hasOwnProperty.call(field.customMessages, ruleName) && typeof field.customMessages[ruleName] === 'string') {
      return {
        msg: _normalizeMessage(field.customMessages[ruleName], field.name, values),
        rule: ruleName
      };
    }

    if (ruleSchema.message) {
      return {
        msg: _normalizeMessage(ruleSchema.message, field.name, values),
        rule: ruleName
      };
    }

    return {
      msg: _normalizeMessage(getConfig().defaultMessage, field.name, values),
      rule: ruleName
    };
  }

  function _getTargetNames(field, ruleSchema, ruleName) {
    if (ruleSchema.params) {
      var numTargets = ruleSchema.params.filter(function (param) {
        return param.isTarget;
      }).length;

      if (numTargets > 0) {
        var names = {};

        for (var index = 0; index < ruleSchema.params.length; index++) {
          var param = ruleSchema.params[index];

          if (param.isTarget) {
            var key = field.rules[ruleName][index];
            var name_1 = field.names[key] || key;

            if (numTargets === 1) {
              names._target_ = name_1;
              break;
            } else {
              names["_" + param.name + "Target_"] = name_1;
            }
          }
        }

        return names;
      }
    }

    return {};
  }

  function _normalizeMessage(template, field, values) {
    if (typeof template === 'function') {
      return template(field, values);
    }

    return interpolate(template, __assign(__assign({}, values), {
      _field_: field
    }));
  }

  function _buildParams(provided, defined, crossTable) {
    var params = {};

    if (!defined && !Array.isArray(provided)) {
      throw new Error('You provided an object params to a rule that has no defined schema.');
    } // Rule probably uses an array for their args, keep it as is.


    if (Array.isArray(provided) && !defined) {
      return provided;
    }

    var definedRules; // collect the params schema.

    if (!defined || defined.length < provided.length && Array.isArray(provided)) {
      var lastDefinedParam_1; // collect any additional parameters in the last item.

      definedRules = provided.map(function (_, idx) {
        var param = defined && defined[idx];
        lastDefinedParam_1 = param || lastDefinedParam_1;

        if (!param) {
          param = lastDefinedParam_1;
        }

        return param;
      });
    } else {
      definedRules = defined;
    } // Match the provided array length with a temporary schema.


    for (var i = 0; i < definedRules.length; i++) {
      var options = definedRules[i];
      var value = options.default; // if the provided is an array, map element value.

      if (Array.isArray(provided)) {
        if (i in provided) {
          value = provided[i];
        }
      } else {
        // If the param exists in the provided object.
        if (options.name in provided) {
          value = provided[options.name]; // if the provided is the first param value.
        } else if (definedRules.length === 1) {
          value = provided;
        }
      } // if the param is a target, resolve the target value.


      if (options.isTarget) {
        value = crossTable[value];
      } // If there is a transformer defined.


      if (options.cast) {
        value = options.cast(value);
      } // already been set, probably multiple values.


      if (params[options.name]) {
        params[options.name] = Array.isArray(params[options.name]) ? params[options.name] : [params[options.name]];
        params[options.name].push(value);
      } else {
        // set the value.
        params[options.name] = value;
      }
    }

    return params;
  }

  function install(_, config) {
    setConfig(config);
  }

  var aggressive = function () {
    return {
      on: ['input', 'blur']
    };
  };

  var lazy = function () {
    return {
      on: ['change']
    };
  };

  var eager = function (_a) {
    var errors = _a.errors;

    if (errors.length) {
      return {
        on: ['input', 'change']
      };
    }

    return {
      on: ['change', 'blur']
    };
  };

  var passive = function () {
    return {
      on: []
    };
  };

  var modes = {
    aggressive: aggressive,
    eager: eager,
    passive: passive,
    lazy: lazy
  };

  var setInteractionMode = function (mode, implementation) {
    setConfig({
      mode: mode
    });

    if (!implementation) {
      return;
    }

    if (!isCallable(implementation)) {
      throw new Error('A mode implementation must be a function');
    }

    modes[mode] = implementation;
  };

  var Dictionary =
  /** @class */
  function () {
    function Dictionary(locale, dictionary) {
      this.container = {};
      this.locale = locale;
      this.merge(dictionary);
    }

    Dictionary.prototype.resolve = function (field, rule, values) {
      return this.format(this.locale, field, rule, values);
    };

    Dictionary.prototype._hasLocale = function (locale) {
      return !!this.container[locale];
    };

    Dictionary.prototype.format = function (locale, field, rule, values) {
      var message; // find if specific message for that field was specified.

      var dict = this.container[locale] && this.container[locale].fields && this.container[locale].fields[field];

      if (dict && dict[rule]) {
        message = dict[rule];
      }

      if (!message && this._hasLocale(locale) && this._hasMessage(locale, rule)) {
        message = this.container[locale].messages[rule];
      }

      if (!message) {
        message = getConfig().defaultMessage;
      }

      if (this._hasName(locale, field)) {
        field = this.getName(locale, field);
      }

      return isCallable(message) ? message(field, values) : interpolate(message, __assign(__assign({}, values), {
        _field_: field
      }));
    };

    Dictionary.prototype.merge = function (dictionary) {
      merge(this.container, dictionary);
    };

    Dictionary.prototype.hasRule = function (name) {
      var locale = this.container[this.locale];
      if (!locale) return false;
      return !!(locale.messages && locale.messages[name]);
    };

    Dictionary.prototype.getName = function (locale, key) {
      return this.container[locale].names[key];
    };

    Dictionary.prototype._hasMessage = function (locale, key) {
      return !!(this._hasLocale(locale) && this.container[locale].messages && this.container[locale].messages[key]);
    };

    Dictionary.prototype._hasName = function (locale, key) {
      return !!(this._hasLocale(locale) && this.container[locale].names && this.container[locale].names[key]);
    };

    return Dictionary;
  }();

  var DICTIONARY;
  var INSTALLED = false;

  function updateRules() {
    if (INSTALLED) {
      return;
    }

    RuleContainer.iterate(function (name, schema) {
      var _a, _b;

      if (schema.message && !DICTIONARY.hasRule(name)) {
        DICTIONARY.merge((_a = {}, _a[DICTIONARY.locale] = {
          messages: (_b = {}, _b[name] = schema.message, _b)
        }, _a));
      }

      extend(name, {
        message: function (field, values) {
          return DICTIONARY.resolve(field, name, values || {});
        }
      });
    });
    INSTALLED = true;
  }

  function localize(locale, dictionary) {
    var _a;

    if (!DICTIONARY) {
      DICTIONARY = new Dictionary('en', {});
    }

    if (typeof locale === 'string') {
      DICTIONARY.locale = locale;

      if (dictionary) {
        DICTIONARY.merge((_a = {}, _a[locale] = dictionary, _a));
      }

      updateRules();
      return;
    }

    DICTIONARY.merge(locale);
    updateRules();
  }

  var isEvent = function (evt) {
    if (!evt) {
      return false;
    }

    if (typeof Event !== 'undefined' && isCallable(Event) && evt instanceof Event) {
      return true;
    } // this is for IE

    /* istanbul ignore next */


    if (evt && evt.srcElement) {
      return true;
    }

    return false;
  };

  function normalizeEventValue(value) {
    if (!isEvent(value)) {
      return value;
    }

    var input = value.target;

    if (input.type === 'file' && input.files) {
      return toArray(input.files);
    } // If the input has a `v-model.number` modifier applied.


    if (input._vModifiers && input._vModifiers.number) {
      // as per the spec the v-model.number uses parseFloat
      var valueAsNumber = parseFloat(input.value);

      if (isNaN(valueAsNumber)) {
        return input.value;
      }

      return valueAsNumber;
    }

    if (input._vModifiers && input._vModifiers.trim) {
      var trimmedValue = typeof input.value === 'string' ? input.value.trim() : input.value;
      return trimmedValue;
    }

    return input.value;
  }

  var isTextInput = function (vnode) {
    var attrs = vnode.data && vnode.data.attrs || vnode.elm; // it will fallback to being a text input per browsers spec.

    if (vnode.tag === 'input' && (!attrs || !attrs.type)) {
      return true;
    }

    if (vnode.tag === 'textarea') {
      return true;
    }

    return includes(['text', 'password', 'search', 'email', 'tel', 'url', 'number'], attrs && attrs.type);
  }; // export const isCheckboxOrRadioInput = (vnode: VNode): boolean => {
  //   const attrs = (vnode.data && vnode.data.attrs) || vnode.elm;
  //   return includes(['radio', 'checkbox'], attrs && attrs.type);
  // };
  // Gets the model object on the vnode.


  function findModel(vnode) {
    if (!vnode.data) {
      return undefined;
    } // Component Model
    // THIS IS NOT TYPED IN OFFICIAL VUE TYPINGS
    // eslint-disable-next-line


    var nonStandardVNodeData = vnode.data;

    if ('model' in nonStandardVNodeData) {
      return nonStandardVNodeData.model;
    }

    if (!vnode.data.directives) {
      return undefined;
    }

    return find(vnode.data.directives, function (d) {
      return d.name === 'model';
    });
  }

  function findValue(vnode) {
    var model = findModel(vnode);

    if (model) {
      return {
        value: model.value
      };
    }

    var config = findModelConfig(vnode);
    var prop = config && config.prop || 'value';

    if (vnode.componentOptions && vnode.componentOptions.propsData && prop in vnode.componentOptions.propsData) {
      var propsDataWithValue = vnode.componentOptions.propsData;
      return {
        value: propsDataWithValue[prop]
      };
    }

    if (vnode.data && vnode.data.domProps && 'value' in vnode.data.domProps) {
      return {
        value: vnode.data.domProps.value
      };
    }

    return undefined;
  }

  function extractChildren(vnode) {
    if (Array.isArray(vnode)) {
      return vnode;
    }

    if (Array.isArray(vnode.children)) {
      return vnode.children;
    }
    /* istanbul ignore next */


    if (vnode.componentOptions && Array.isArray(vnode.componentOptions.children)) {
      return vnode.componentOptions.children;
    }

    return [];
  }

  function extractVNodes(vnode) {
    if (!Array.isArray(vnode) && findValue(vnode) !== undefined) {
      return [vnode];
    }

    var children = extractChildren(vnode);
    return children.reduce(function (nodes, node) {
      var candidates = extractVNodes(node);

      if (candidates.length) {
        nodes.push.apply(nodes, candidates);
      }

      return nodes;
    }, []);
  } // Resolves v-model config if exists.


  function findModelConfig(vnode) {
    /* istanbul ignore next */
    if (!vnode.componentOptions) return null; // This is also not typed in the standard Vue TS.

    return vnode.componentOptions.Ctor.options.model;
  } // Adds a listener to vnode listener object.


  function mergeVNodeListeners(obj, eventName, handler) {
    // no listener at all.
    if (isNullOrUndefined(obj[eventName])) {
      obj[eventName] = [handler];
      return;
    } // Is an invoker.


    if (isCallable(obj[eventName]) && obj[eventName].fns) {
      var invoker = obj[eventName];
      invoker.fns = Array.isArray(invoker.fns) ? invoker.fns : [invoker.fns];

      if (!includes(invoker.fns, handler)) {
        invoker.fns.push(handler);
      }

      return;
    }

    if (isCallable(obj[eventName])) {
      var prev = obj[eventName];
      obj[eventName] = [prev];
    }

    if (Array.isArray(obj[eventName]) && !includes(obj[eventName], handler)) {
      obj[eventName].push(handler);
    }
  } // Adds a listener to a native HTML vnode.


  function addNativeNodeListener(node, eventName, handler) {
    /* istanbul ignore next */
    if (!node.data) {
      node.data = {};
    }

    if (isNullOrUndefined(node.data.on)) {
      node.data.on = {};
    }

    mergeVNodeListeners(node.data.on, eventName, handler);
  } // Adds a listener to a Vue component vnode.


  function addComponentNodeListener(node, eventName, handler) {
    /* istanbul ignore next */
    if (!node.componentOptions) {
      return;
    }
    /* istanbul ignore next */


    if (!node.componentOptions.listeners) {
      node.componentOptions.listeners = {};
    }

    mergeVNodeListeners(node.componentOptions.listeners, eventName, handler);
  }

  function addVNodeListener(vnode, eventName, handler) {
    if (vnode.componentOptions) {
      addComponentNodeListener(vnode, eventName, handler);
      return;
    }

    addNativeNodeListener(vnode, eventName, handler);
  } // Determines if `change` should be used over `input` for listeners.


  function getInputEventName(vnode, model) {
    // Is a component.
    if (vnode.componentOptions) {
      var event_1 = (findModelConfig(vnode) || {
        event: 'input'
      }).event;
      return event_1;
    } // Lazy Models typically use change event


    if (model && model.modifiers && model.modifiers.lazy) {
      return 'change';
    } // is a textual-type input.


    if (isTextInput(vnode)) {
      return 'input';
    }

    return 'change';
  } // TODO: Type this one properly.


  function normalizeSlots(slots, ctx) {
    var acc = [];
    return Object.keys(slots).reduce(function (arr, key) {
      slots[key].forEach(function (vnode) {
        if (!vnode.context) {
          slots[key].context = ctx;

          if (!vnode.data) {
            vnode.data = {};
          }

          vnode.data.slot = key;
        }
      });
      return arr.concat(slots[key]);
    }, acc);
  }

  function resolveTextualRules(vnode) {
    var attrs = vnode.data && vnode.data.attrs;
    var rules = {};
    if (!attrs) return rules;

    if (attrs.type === 'email') {
      rules.email = ['multiple' in attrs];
    }

    if (attrs.pattern) {
      rules.regex = attrs.pattern;
    }

    if (attrs.maxlength >= 0) {
      rules.max = attrs.maxlength;
    }

    if (attrs.minlength >= 0) {
      rules.min = attrs.minlength;
    }

    if (attrs.type === 'number') {
      if (isSpecified(attrs.min)) {
        rules.min_value = Number(attrs.min);
      }

      if (isSpecified(attrs.max)) {
        rules.max_value = Number(attrs.max);
      }
    }

    return rules;
  }

  function resolveRules(vnode) {
    var htmlTags = ['input', 'select'];
    var attrs = vnode.data && vnode.data.attrs;

    if (!includes(htmlTags, vnode.tag) || !attrs) {
      return {};
    }

    var rules = {};

    if ('required' in attrs && attrs.required !== false) {
      rules.required = attrs.type === 'checkbox' ? [true] : true;
    }

    if (isTextInput(vnode)) {
      return normalizeRules(__assign(__assign({}, rules), resolveTextualRules(vnode)));
    }

    return normalizeRules(rules);
  }

  function normalizeChildren(context, slotProps) {
    if (context.$scopedSlots.default) {
      return context.$scopedSlots.default(slotProps) || [];
    }

    return context.$slots.default || [];
  }
  /**
   * Determines if a provider needs to run validation.
   */


  function shouldValidate(ctx, value) {
    // when an immediate/initial validation is needed and wasn't done before.
    if (!ctx._ignoreImmediate && ctx.immediate) {
      return true;
    } // when the value changes for whatever reason.


    if (ctx.value !== value && ctx.normalizedEvents.length) {
      return true;
    } // when it needs validation due to props/cross-fields changes.


    if (ctx._needsValidation) {
      return true;
    } // when the initial value is undefined and the field wasn't rendered yet.


    if (!ctx.initialized && value === undefined) {
      return true;
    }

    return false;
  }

  function createValidationCtx(ctx) {
    return __assign(__assign({}, ctx.flags), {
      errors: ctx.messages,
      classes: ctx.classes,
      failedRules: ctx.failedRules,
      reset: function () {
        return ctx.reset();
      },
      validate: function () {
        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        return ctx.validate.apply(ctx, args);
      },
      ariaInput: {
        'aria-invalid': ctx.flags.invalid ? 'true' : 'false',
        'aria-required': ctx.isRequired ? 'true' : 'false',
        'aria-errormessage': "vee_" + ctx.id
      },
      ariaMsg: {
        id: "vee_" + ctx.id,
        'aria-live': ctx.messages.length ? 'assertive' : 'off'
      }
    });
  }

  function onRenderUpdate(vm, value) {
    if (!vm.initialized) {
      vm.initialValue = value;
    }

    var validateNow = shouldValidate(vm, value);
    vm._needsValidation = false;
    vm.value = value;
    vm._ignoreImmediate = true;

    if (!validateNow) {
      return;
    }

    vm.validateSilent().then(vm.immediate || vm.flags.validated ? vm.applyResult : identity);
  }

  function computeModeSetting(ctx) {
    var compute = isCallable(ctx.mode) ? ctx.mode : modes[ctx.mode];
    return compute({
      errors: ctx.messages,
      value: ctx.value,
      flags: ctx.flags
    });
  } // Creates the common handlers for a validatable context.


  function createCommonHandlers(vm) {
    if (!vm.$veeOnInput) {
      vm.$veeOnInput = function (e) {
        vm.syncValue(e); // track and keep the value updated.

        vm.setFlags({
          dirty: true,
          pristine: false
        });
      };
    }

    var onInput = vm.$veeOnInput;

    if (!vm.$veeOnBlur) {
      vm.$veeOnBlur = function () {
        vm.setFlags({
          touched: true,
          untouched: false
        });
      };
    } // Blur event listener.


    var onBlur = vm.$veeOnBlur;
    var onValidate = vm.$veeHandler;
    var mode = computeModeSetting(vm); // Handle debounce changes.

    if (!onValidate || vm.$veeDebounce !== vm.debounce) {
      onValidate = debounce(function () {
        vm.$nextTick(function () {
          var pendingPromise = vm.validateSilent(); // avoids race conditions between successive validations.

          vm._pendingValidation = pendingPromise;
          pendingPromise.then(function (result) {
            if (pendingPromise === vm._pendingValidation) {
              vm.applyResult(result);
              vm._pendingValidation = undefined;
            }
          });
        });
      }, mode.debounce || vm.debounce); // Cache the handler so we don't create it each time.

      vm.$veeHandler = onValidate; // cache the debounce value so we detect if it was changed.

      vm.$veeDebounce = vm.debounce;
    }

    return {
      onInput: onInput,
      onBlur: onBlur,
      onValidate: onValidate
    };
  } // Adds all plugin listeners to the vnode.


  function addListeners(vm, node) {
    var value = findValue(node); // cache the input eventName.

    vm._inputEventName = vm._inputEventName || getInputEventName(node, findModel(node));
    onRenderUpdate(vm, value && value.value);

    var _a = createCommonHandlers(vm),
        onInput = _a.onInput,
        onBlur = _a.onBlur,
        onValidate = _a.onValidate;

    addVNodeListener(node, vm._inputEventName, onInput);
    addVNodeListener(node, 'blur', onBlur); // add the validation listeners.

    vm.normalizedEvents.forEach(function (evt) {
      addVNodeListener(node, evt, onValidate);
    });
    vm.initialized = true;
  }

  var PROVIDER_COUNTER = 0;

  function data() {
    var messages = [];
    var defaultValues = {
      messages: messages,
      value: undefined,
      initialized: false,
      initialValue: undefined,
      flags: createFlags(),
      failedRules: {},
      isDeactivated: false,
      id: ''
    };
    return defaultValues;
  }

  var ValidationProvider = Vue.extend({
    inject: {
      $_veeObserver: {
        from: '$_veeObserver',
        default: function () {
          if (!this.$vnode.context.$_veeObserver) {
            this.$vnode.context.$_veeObserver = createObserver();
          }

          return this.$vnode.context.$_veeObserver;
        }
      }
    },
    props: {
      vid: {
        type: String,
        default: ''
      },
      name: {
        type: String,
        default: null
      },
      mode: {
        type: [String, Function],
        default: function () {
          return getConfig().mode;
        }
      },
      rules: {
        type: [Object, String],
        default: null
      },
      immediate: {
        type: Boolean,
        default: false
      },
      persist: {
        type: Boolean,
        default: false
      },
      bails: {
        type: Boolean,
        default: function () {
          return getConfig().bails;
        }
      },
      skipIfEmpty: {
        type: Boolean,
        default: function () {
          return getConfig().skipOptional;
        }
      },
      debounce: {
        type: Number,
        default: 0
      },
      tag: {
        type: String,
        default: 'span'
      },
      slim: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      customMessages: {
        type: Object,
        default: function () {
          return {};
        }
      }
    },
    watch: {
      rules: {
        deep: true,
        handler: function (val, oldVal) {
          this._needsValidation = !isEqual(val, oldVal);
        }
      }
    },
    data: data,
    computed: {
      fieldDeps: function () {
        var _this = this;

        return Object.keys(this.normalizedRules).filter(RuleContainer.isTargetRule).reduce(function (acc, rule) {
          var deps = RuleContainer.getTargetParamNames(rule, _this.normalizedRules[rule]);
          acc.push.apply(acc, deps);
          deps.forEach(function (depName) {
            watchCrossFieldDep(_this, depName);
          });
          return acc;
        }, []);
      },
      normalizedEvents: function () {
        var _this = this;

        var on = computeModeSetting(this).on;
        return (on || []).map(function (e) {
          if (e === 'input') {
            return _this._inputEventName;
          }

          return e;
        });
      },
      isRequired: function () {
        var rules = __assign(__assign({}, this._resolvedRules), this.normalizedRules);

        var isRequired = Object.keys(rules).some(RuleContainer.isRequireRule);
        this.flags.required = !!isRequired;
        return isRequired;
      },
      classes: function () {
        var names = getConfig().classes;
        return computeClassObj(names, this.flags);
      },
      normalizedRules: function () {
        return normalizeRules(this.rules);
      }
    },
    render: function (h) {
      var _this = this;

      this.registerField();
      var ctx = createValidationCtx(this);
      var children = normalizeChildren(this, ctx); // Handle single-root slot.

      extractVNodes(children).forEach(function (input) {
        _this._resolvedRules = getConfig().useConstraintAttrs ? resolveRules(input) : {};
        addListeners(_this, input);
      });
      return this.slim && children.length <= 1 ? children[0] : h(this.tag, children);
    },
    beforeDestroy: function () {
      // cleanup reference.
      this.$_veeObserver.unsubscribe(this.id);
    },
    activated: function () {
      this.$_veeObserver.subscribe(this);
      this.isDeactivated = false;
    },
    deactivated: function () {
      this.$_veeObserver.unsubscribe(this.id);
      this.isDeactivated = true;
    },
    methods: {
      setFlags: function (flags) {
        var _this = this;

        Object.keys(flags).forEach(function (flag) {
          _this.flags[flag] = flags[flag];
        });
      },
      syncValue: function (v) {
        var value = normalizeEventValue(v);
        this.value = value;
        this.flags.changed = this.initialValue !== value;
      },
      reset: function () {
        this.messages = [];
        this.initialValue = this.value;
        var flags = createFlags();
        flags.required = this.isRequired;
        this.setFlags(flags);
        this.validateSilent();
      },
      validate: function () {
        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        return __awaiter(this, void 0, void 0, function () {
          var result;
          return __generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                if (args.length > 0) {
                  this.syncValue(args[0]);
                }

                return [4
                /*yield*/
                , this.validateSilent()];

              case 1:
                result = _a.sent();
                this.applyResult(result);
                return [2
                /*return*/
                , result];
            }
          });
        });
      },
      validateSilent: function () {
        return __awaiter(this, void 0, void 0, function () {
          var rules, result;
          return __generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                this.setFlags({
                  pending: true
                });
                rules = __assign(__assign({}, this._resolvedRules), this.normalizedRules);
                Object.defineProperty(rules, '_$$isNormalized', {
                  value: true,
                  writable: false,
                  enumerable: false,
                  configurable: false
                });
                return [4
                /*yield*/
                , validate(this.value, rules, {
                  name: this.name,
                  values: createValuesLookup(this),
                  bails: this.bails,
                  skipIfEmpty: this.skipIfEmpty,
                  isInitial: !this.initialized,
                  customMessages: this.customMessages
                })];

              case 1:
                result = _a.sent();
                this.setFlags({
                  pending: false
                });
                this.setFlags({
                  valid: result.valid,
                  invalid: !result.valid
                });
                return [2
                /*return*/
                , result];
            }
          });
        });
      },
      setErrors: function (errors) {
        this.applyResult({
          errors: errors,
          failedRules: {}
        });
      },
      applyResult: function (_a) {
        var errors = _a.errors,
            failedRules = _a.failedRules;
        this.messages = errors;
        this.failedRules = __assign({}, failedRules || {});
        this.setFlags({
          valid: !errors.length,
          changed: this.value !== this.initialValue,
          invalid: !!errors.length,
          validated: true
        });
      },
      registerField: function () {
        updateRenderingContextRefs(this);
      }
    }
  });

  function createValuesLookup(vm) {
    var providers = vm.$_veeObserver.refs;
    var reduced = {};
    return vm.fieldDeps.reduce(function (acc, depName) {
      if (!providers[depName]) {
        return acc;
      }

      acc[depName] = providers[depName].value;
      return acc;
    }, reduced);
  }

  function extractId(vm) {
    if (vm.vid) {
      return vm.vid;
    }

    if (vm.name) {
      return vm.name;
    }

    if (vm.id) {
      return vm.id;
    }

    PROVIDER_COUNTER++;
    return "_vee_" + PROVIDER_COUNTER;
  }

  function updateRenderingContextRefs(vm) {
    var providedId = extractId(vm);
    var id = vm.id; // Nothing has changed.

    if (vm.isDeactivated || id === providedId && vm.$_veeObserver.refs[id]) {
      return;
    } // vid was changed.


    if (id !== providedId && vm.$_veeObserver.refs[id] === vm) {
      vm.$_veeObserver.unsubscribe(id);
    }

    vm.id = providedId;
    vm.$_veeObserver.subscribe(vm);
  }

  function createObserver() {
    return {
      refs: {},
      subscribe: function (vm) {
        this.refs[vm.id] = vm;
      },
      unsubscribe: function (id) {
        delete this.refs[id];
      }
    };
  }

  function watchCrossFieldDep(ctx, depName, withHooks) {
    if (withHooks === void 0) {
      withHooks = true;
    }

    var providers = ctx.$_veeObserver.refs;

    if (!ctx._veeWatchers) {
      ctx._veeWatchers = {};
    }

    if (!providers[depName] && withHooks) {
      return ctx.$once('hook:mounted', function () {
        watchCrossFieldDep(ctx, depName, false);
      });
    }

    if (!isCallable(ctx._veeWatchers[depName]) && providers[depName]) {
      ctx._veeWatchers[depName] = providers[depName].$watch('value', function () {
        if (ctx.flags.validated) {
          ctx._needsValidation = true;
          ctx.validate();
        }
      });
    }
  }

  var flagMergingStrategy = {
    pristine: 'every',
    dirty: 'some',
    touched: 'some',
    untouched: 'every',
    valid: 'every',
    invalid: 'some',
    pending: 'some',
    validated: 'every',
    changed: 'some'
  };

  function mergeFlags(lhs, rhs, strategy) {
    var stratName = flagMergingStrategy[strategy];
    return [lhs, rhs][stratName](function (f) {
      return f;
    });
  }

  var OBSERVER_COUNTER = 0;

  function data$1() {
    var refs = {};
    var refsByName = {};
    var inactiveRefs = {}; // FIXME: Not sure of this one can be typed, circular type reference.

    var observers = [];
    return {
      id: '',
      refs: refs,
      refsByName: refsByName,
      observers: observers,
      inactiveRefs: inactiveRefs
    };
  }

  var ValidationObserver = Vue.extend({
    name: 'ValidationObserver',
    provide: function () {
      return {
        $_veeObserver: this
      };
    },
    inject: {
      $_veeObserver: {
        from: '$_veeObserver',
        default: function () {
          if (!this.$vnode.context.$_veeObserver) {
            return null;
          }

          return this.$vnode.context.$_veeObserver;
        }
      }
    },
    props: {
      tag: {
        type: String,
        default: 'span'
      },
      vid: {
        type: String,
        default: function () {
          return "obs_" + OBSERVER_COUNTER++;
        }
      },
      slim: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    data: data$1,
    computed: {
      ctx: function () {
        var _this = this;

        var ctx = {
          errors: {},
          passes: function (cb) {
            return _this.validate().then(function (result) {
              if (result) {
                return cb();
              }
            });
          },
          validate: function () {
            var args = [];

            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }

            return _this.validate.apply(_this, args);
          },
          reset: function () {
            return _this.reset();
          }
        };
        return __spreadArrays(values(this.refs), Object.keys(this.inactiveRefs).map(function (key) {
          return {
            vid: key,
            flags: _this.inactiveRefs[key].flags,
            messages: _this.inactiveRefs[key].errors
          };
        }), this.observers).reduce(function (acc, provider) {
          Object.keys(flagMergingStrategy).forEach(function (flag) {
            var flags = provider.flags || provider.ctx;

            if (!(flag in acc)) {
              acc[flag] = flags[flag];
              return;
            }

            acc[flag] = mergeFlags(acc[flag], flags[flag], flag);
          });
          acc.errors[provider.id] = provider.messages || values(provider.ctx.errors).reduce(function (errs, obsErrors) {
            return errs.concat(obsErrors);
          }, []);
          return acc;
        }, ctx);
      }
    },
    created: function () {
      this.id = this.vid;

      if (this.$_veeObserver) {
        this.$_veeObserver.subscribe(this, 'observer');
      }
    },
    activated: function () {
      if (this.$_veeObserver) {
        this.$_veeObserver.subscribe(this, 'observer');
      }
    },
    deactivated: function () {
      if (this.$_veeObserver) {
        this.$_veeObserver.unsubscribe(this.id, 'observer');
      }
    },
    beforeDestroy: function () {
      if (this.$_veeObserver) {
        this.$_veeObserver.unsubscribe(this.id, 'observer');
      }
    },
    render: function (h) {
      var children = normalizeChildren(this, this.ctx);
      return this.slim && children.length <= 1 ? children[0] : h(this.tag, {
        on: this.$listeners
      }, children);
    },
    methods: {
      subscribe: function (subscriber, kind) {
        var _a, _b;

        if (kind === void 0) {
          kind = 'provider';
        }

        if (kind === 'observer') {
          this.observers.push(subscriber);
          return;
        }

        this.refs = __assign(__assign({}, this.refs), (_a = {}, _a[subscriber.id] = subscriber, _a));
        this.refsByName = __assign(__assign({}, this.refsByName), (_b = {}, _b[subscriber.name] = subscriber, _b));

        if (subscriber.persist) {
          this.restoreProviderState(subscriber);
        }
      },
      unsubscribe: function (id, kind) {
        if (kind === void 0) {
          kind = 'provider';
        }

        if (kind === 'provider') {
          this.removeProvider(id);
          return;
        }

        var idx = findIndex(this.observers, function (o) {
          return o.id === id;
        });

        if (idx !== -1) {
          this.observers.splice(idx, 1);
        }
      },
      validate: function (_a) {
        var _b = (_a === void 0 ? {} : _a).silent,
            silent = _b === void 0 ? false : _b;
        return __awaiter(this, void 0, void 0, function () {
          var results;
          return __generator(this, function (_c) {
            switch (_c.label) {
              case 0:
                return [4
                /*yield*/
                , Promise.all(__spreadArrays(values(this.refs).filter(function (r) {
                  return !r.disabled;
                }).map(function (ref) {
                  return ref[silent ? 'validateSilent' : 'validate']().then(function (r) {
                    return r.valid;
                  });
                }), this.observers.filter(function (o) {
                  return !o.disabled;
                }).map(function (obs) {
                  return obs.validate({
                    silent: silent
                  });
                })))];

              case 1:
                results = _c.sent();
                return [2
                /*return*/
                , results.every(function (r) {
                  return r;
                })];
            }
          });
        });
      },
      reset: function () {
        var _this = this;

        Object.keys(this.inactiveRefs).forEach(function (key) {
          _this.$delete(_this.inactiveRefs, key);
        });
        return __spreadArrays(values(this.refs), this.observers).forEach(function (ref) {
          return ref.reset();
        });
      },
      restoreProviderState: function (provider) {
        var id = provider.id;
        var state = this.inactiveRefs[id];

        if (!state) {
          return;
        }

        provider.setFlags(state.flags);
        provider.applyResult(state);
        this.$delete(this.inactiveRefs, provider.id);
      },
      removeProvider: function (id) {
        var provider = this.refs[id];

        if (!provider) {
          // FIXME: inactive refs are not being cleaned up.
          return;
        }

        if (provider.persist) {
          // save it for the next time.
          this.inactiveRefs[id] = {
            flags: provider.flags,
            errors: provider.messages,
            failedRules: provider.failedRules
          };
        }

        this.$delete(this.refs, id);
        this.$delete(this.refsByName, provider.name);
      },
      setErrors: function (errors) {
        var _this = this;

        Object.keys(errors).forEach(function (key) {
          var provider = _this.refs[key] || _this.refsByName[key];
          if (!provider) return;
          provider.setErrors(errors[key] || []);
        });
        this.observers.forEach(function (observer) {
          observer.setErrors(errors);
        });
      }
    }
  });

  function withValidation(component, mapProps) {
    if (mapProps === void 0) {
      mapProps = identity;
    }

    var options = 'options' in component ? component.options : component;
    var providerOpts = ValidationProvider.options;
    var hoc = {
      name: (options.name || 'AnonymousHoc') + "WithValidation",
      props: __assign({}, providerOpts.props),
      data: providerOpts.data,
      computed: __assign({}, providerOpts.computed),
      methods: __assign({}, providerOpts.methods),
      beforeDestroy: providerOpts.beforeDestroy,
      inject: providerOpts.inject
    };
    var eventName = options.model && options.model.event || 'input';

    hoc.render = function (h) {
      var _a;

      this.registerField();
      var vctx = createValidationCtx(this);

      var listeners = __assign({}, this.$listeners);

      var model = findModel(this.$vnode);
      this._inputEventName = this._inputEventName || getInputEventName(this.$vnode, model);
      var value = findValue(this.$vnode);
      onRenderUpdate(this, value && value.value);

      var _b = createCommonHandlers(this),
          onInput = _b.onInput,
          onBlur = _b.onBlur,
          onValidate = _b.onValidate;

      mergeVNodeListeners(listeners, eventName, onInput);
      mergeVNodeListeners(listeners, 'blur', onBlur);
      this.normalizedEvents.forEach(function (evt) {
        mergeVNodeListeners(listeners, evt, onValidate);
      }); // Props are any attrs not associated with ValidationProvider Plus the model prop.
      // WARNING: Accidental prop overwrite will probably happen.

      var prop = (findModelConfig(this.$vnode) || {
        prop: 'value'
      }).prop;

      var props = __assign(__assign(__assign({}, this.$attrs), (_a = {}, _a[prop] = model && model.value, _a)), mapProps(vctx));

      return h(options, {
        attrs: this.$attrs,
        props: props,
        on: listeners
      }, normalizeSlots(this.$slots, this.$vnode.context));
    };

    return hoc;
  }

  var version = '3.0.11';
  exports.ValidationObserver = ValidationObserver;
  exports.ValidationProvider = ValidationProvider;
  exports.configure = configure;
  exports.extend = extend;
  exports.install = install;
  exports.localize = localize;
  exports.setInteractionMode = setInteractionMode;
  exports.validate = validate;
  exports.version = version;
  exports.withValidation = withValidation;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
});

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("defu");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("vue-no-ssr");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("requrl");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

// This file is intentionally left empty for noop aliases

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HeaderMobile.vue?vue&type=template&id=4b9954be&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"w-[94%] xl:w-11/12 mx-auto py-4 flex justify-between font-bold\">","</div>",[_vm._ssrNode("<button class=\"toggle-open-menu focus:outline-none\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\"><path d=\"M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z\" fill=\"red\"></path></svg></button> "),(_vm.mobileMenu)?_vm._ssrNode("<div class=\"toggle-menu-items fixed top-0 left-0 bg-white shadow-md w-60 h-full animate-OpenMenuMobile\" style=\"z-index: 9999;\">","</div>",[_vm._ssrNode("<div class=\"p-3 flex justify-end font-bold bg-red-500\"><button class=\"toggle-close-menu text-white focus:outline-none\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" viewBox=\"0 0 24 24\"><path d=\"M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z\" fill=\"white\"></path></svg></button></div> "),_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li class=\"p-4 border-b hover:bg-red-500 hover:text-white transition-all duration-500\">","</li>",[_c('nuxt-link',{attrs:{"to":"/"}},[_vm._v("Trang chủ")])],1),_vm._ssrNode(" <li class=\"toggle-menu-items-link p-4 border-b hover:bg-red-500 hover:text-white transition-all duration-500 flex items-center justify-between\"><a href=\"/danh-muc/shop-thu-y\">Sản phẩm thú y</a> <button class=\"toggle-menu-items-link-btn focus:outline-none\"><i class=\"fas fa-chevron-right\"></i></button></li> <li class=\"p-4 border-b hover:bg-red-500 hover:text-white transition-all duration-500\"><a href=\"/danh-muc/shop-cho-cho\">Sản phẩm cho chó</a></li> <li class=\"p-4 border-b hover:bg-red-500 hover:text-white transition-all duration-500\"><a href=\"/danh-muc/shop-cho-meo\">Sản phẩm cho mèo</a></li> "),_vm._ssrNode("<li class=\"p-4 border-b hover:bg-red-500 hover:text-white transition-all duration-500\">","</li>",[_c('nuxt-link',{attrs:{"to":"/tin-tuc"}},[_vm._v("Tin tức")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"p-4 border-b hover:bg-red-500 hover:text-white transition-all duration-500\">","</li>",[_c('nuxt-link',{attrs:{"to":"/gioi-thieu"}},[_vm._v("Giới thiệu")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"p-4 border-b hover:bg-red-500 hover:text-white transition-all duration-500\">","</li>",[_c('nuxt-link',{attrs:{"to":"/lien-he"}},[_vm._v("Liên hệ")])],1)],2)])],2):_vm._e(),_vm._ssrNode(" "),_c('nuxt-link',{attrs:{"to":"/"}},[_c('img',{staticClass:"max-h-20",attrs:{"src":__webpack_require__(7),"alt":"logo"}})]),_vm._ssrNode(" <div class=\"flex items-center gap-2\"><i class=\"fas fa-stream\"></i> <div class=\"shopping-cart relative mr-2\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\"><path d=\"M20 7h-4v-3c0-2.209-1.791-4-4-4s-4 1.791-4 4v3h-4l-2 17h20l-2-17zm-11-3c0-1.654 1.346-3 3-3s3 1.346 3 3v3h-6v-3zm-4.751 18l1.529-13h2.222v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h6v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h2.222l1.529 13h-15.502z\" fill=\"red\"></path></svg> <span"+(_vm._ssrClass("flex w-4 h-4 text-xs font-arial rounded-full items-center justify-center absolute -top-2 -right-2",_vm.badgeBg))+">0</span></div></div>")],2),_vm._ssrNode(" <div class=\"lg:hidden w-full fixed z-50 bottom-0 text-lg bg-white\" style=\"box-shadow: 0 1px 12px 2px hsl(0deg 0% 56% / 30%);\"><div class=\"w-[94%] xl:w-11/12 mx-auto grid grid-cols-4 text-center py-3\"><div><a href=\"#\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"#2c3e50\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"inline-block icon icon-tabler icon-tabler-building-store\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path> <line x1=\"3\" y1=\"21\" x2=\"21\" y2=\"21\"></line> <path d=\"M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4\"></path> <line x1=\"5\" y1=\"21\" x2=\"5\" y2=\"10.85\"></line> <line x1=\"19\" y1=\"21\" x2=\"19\" y2=\"10.85\"></line> <path d=\"M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4\"></path></svg></a></div> <div><a href=\"#\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"#2c3e50\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"inline-block icon icon-tabler icon-tabler-user\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path> <circle cx=\"12\" cy=\"7\" r=\"4\"></circle> <path d=\"M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2\"></path></svg></a></div> <div><a href=\"#\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"#2c3e50\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"inline-block icon icon-tabler icon-tabler-search\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path> <circle cx=\"10\" cy=\"10\" r=\"7\"></circle> <line x1=\"21\" y1=\"21\" x2=\"15\" y2=\"15\"></line></svg></a></div> <div><a href=\"#\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"#2c3e50\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"inline-block icon icon-tabler icon-tabler-heart\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path> <path d=\"M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572\"></path></svg></a></div></div></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/HeaderMobile.vue?vue&type=template&id=4b9954be&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HeaderMobile.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var HeaderMobilevue_type_script_lang_js_ = ({
  props: ["iconColor", "badgeBg"],

  data() {
    return {
      mobileMenu: false
    };
  }

});
// CONCATENATED MODULE: ./components/HeaderMobile.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_HeaderMobilevue_type_script_lang_js_ = (HeaderMobilevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/HeaderMobile.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(49)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_HeaderMobilevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "2fafb6c5"
  
)

/* harmony default export */ var HeaderMobile = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DropdownMenu.vue?vue&type=template&id=426533aa&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{staticClass:"flex-grow px-8"},[_vm._ssrNode("<ul"+(_vm._ssrClass("flex gap-4 xl:gap-8 items-center text-lg relative",_vm.textColor || 'text-white'))+">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{staticClass:"font-semibold",attrs:{"to":"/"}},[_vm._v("\n                Trang chủ\n            ")])],1),_vm._ssrNode(" "),_vm._l((_vm.category),function(c){return _vm._ssrNode("<li class=\"group\">","</li>",[_c('nuxt-link',{staticClass:"font-semibold",attrs:{"to":{ name: 'shop-by-category', params: { slug: c.slug } }}},[_vm._v("\n                "+_vm._s(c.name)+"\n                "),_c('svg',{staticClass:"inline-block",attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"10","height":"10","fill":_vm.textColor || 'white',"stroke":_vm.textColor || 'white',"viewBox":"0 0 24 24"}},[_c('path',{attrs:{"d":"M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"}})])]),_vm._ssrNode(" "),_c('SubMenu',{attrs:{"childrenCategories":c.children_categories}})],2)}),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"relative group\">","</li>",[_c('nuxt-link',{staticClass:"font-semibold",attrs:{"to":"/tin-tuc"}},[_vm._v("\n                Tin tức\n            ")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"relative group\">","</li>",[_c('nuxt-link',{staticClass:"font-semibold",attrs:{"to":"/gioi-thieu"}},[_vm._v("\n                Giới thiệu\n            ")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"relative group\">","</li>",[_c('nuxt-link',{staticClass:"font-semibold",attrs:{"to":"/lien-he"}},[_vm._v("\n                Liên hệ\n            ")])],1)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/DropdownMenu.vue?vue&type=template&id=426533aa&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DropdownMenu.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var DropdownMenuvue_type_script_lang_js_ = ({
  props: ['textColor', 'category'],
  computed: {}
});
// CONCATENATED MODULE: ./components/DropdownMenu.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_DropdownMenuvue_type_script_lang_js_ = (DropdownMenuvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/DropdownMenu.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_DropdownMenuvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2673e9c6"
  
)

/* harmony default export */ var DropdownMenu = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {SubMenu: __webpack_require__(76).default})


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("vue-client-only");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("cookie");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("jwt-decode");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(38);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("162ac6c2", content, true, context)
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(40);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("53f61d5f", content, true, context)
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(50);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("5b59e6fc", content, true, context)
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(52);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("3428f0a6", content, true, context)
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(54);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("99c3e6a2", content, true, context)
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(56);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("dce1e308", content, true, context)
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(58);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("44e96896", content, true, context)
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(60);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("8e6e8538", content, true, context)
};

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ShopHeader.vue?vue&type=template&id=b6490990&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"border-b border-solid border-gray-100 border-opacity-20\" data-v-b6490990>","</div>",[_vm._ssrNode("<div class=\"w-11/12 mx-auto py-4\" data-v-b6490990>","</div>",[_vm._ssrNode("<div class=\"flex items-center justify-between\" data-v-b6490990>","</div>",[_vm._ssrNode("<div class=\"flex items-center flex-grow\" data-v-b6490990>","</div>",[_c('nuxt-link',{attrs:{"to":"/"}},[_c('img',{staticClass:"max-h-28 pr-10",attrs:{"src":__webpack_require__(7),"alt":"logo"}})]),_vm._ssrNode(" "),_c('DropdownMenu',{attrs:{"category":_vm.category}})],2),_vm._ssrNode(" <div class=\"w-1/4 flex justify-end gap-5 text-2xl text-black pl-10\" data-v-b6490990><div data-v-b6490990><a href=\"#\" data-v-b6490990><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"27\" height=\"27\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"white\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"icon icon-tabler icon-tabler-user\" data-v-b6490990><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\" data-v-b6490990></path> <circle cx=\"12\" cy=\"7\" r=\"4\" data-v-b6490990></circle> <path d=\"M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2\" data-v-b6490990></path></svg></a></div> <div data-v-b6490990><a href=\"#\" data-v-b6490990><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"27\" height=\"27\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"white\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"icon icon-tabler icon-tabler-heart\" data-v-b6490990><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\" data-v-b6490990></path> <path d=\"M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572\" data-v-b6490990></path></svg></a></div> <div class=\"shopping-cart relative\" data-v-b6490990><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"27\" height=\"27\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"white\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"icon icon-tabler icon-tabler-shopping-cart\" data-v-b6490990><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\" data-v-b6490990></path> <circle cx=\"6\" cy=\"19\" r=\"2\" data-v-b6490990></circle> <circle cx=\"17\" cy=\"19\" r=\"2\" data-v-b6490990></circle> <path d=\"M17 17h-11v-14h-2\" data-v-b6490990></path> <path d=\"M6 5l14 1l-1 7h-13\" data-v-b6490990></path></svg> <span class=\"inline-block nav-color w-5 h-5 leading-5 absolute rounded-full font-sans text-white text-xs text-center -top-2 -right-3\" data-v-b6490990>\n                            0\n                        </span></div></div>")],2)])]),_vm._ssrNode(" "),_c('Breadcrumbs')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ShopHeader.vue?vue&type=template&id=b6490990&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ShopHeader.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var ShopHeadervue_type_script_lang_js_ = ({
  computed: { ...Object(external_vuex_["mapState"])({
      category: state => {
        return state.category.category;
      }
    })
  }
});
// CONCATENATED MODULE: ./components/ShopHeader.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ShopHeadervue_type_script_lang_js_ = (ShopHeadervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/ShopHeader.vue



function injectStyles (context) {
  
  var style1 = __webpack_require__(51)
if (style1.__inject__) style1.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ShopHeadervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "b6490990",
  "045f53d9"
  
)

/* harmony default export */ var ShopHeader = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {DropdownMenu: __webpack_require__(15).default,Breadcrumbs: __webpack_require__(78).default})


/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("vue-meta");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("vue-lazyload");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(34);
module.exports = __webpack_require__(75);


/***/ }),
/* 34 */
/***/ (function(module, exports) {

global.installComponents = function (component, components) {
  var options = typeof component.exports === 'function'
    ? component.exports.extendOptions
    : component.options

  if (typeof component.exports === 'function') {
    options.components = component.exports.options.components
  }

  options.components = options.components || {}

  for (var i in components) {
    options.components[i] = options.components[i] || components[i]
  }


  if (options.functional) {
    provideFunctionalComponents(component, options.components)
  }
}

var functionalPatchKey = '_functionalComponents'

function provideFunctionalComponents(component, components) {
  if (component.exports[functionalPatchKey]) {
    return
  }
  component.exports[functionalPatchKey] = true

  var render = component.exports.render
  component.exports.render = function (h, vm) {
    return render(h, Object.assign({}, vm, {
      _c: function (n, a, b) {
        return vm._c(components[n] || n, a, b)
      }
    }))
  }
}


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (context) {
  const {
    redirect,
    $auth
  } = context;

  if (!$auth.loggedIn) {
    redirect('/dashboard/login');
  }
});

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (context) {
  const {
    redirect,
    $auth
  } = context;

  if ($auth.loggedIn) {
    redirect('/dashboard');
  }
});

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".__nuxt-error-page{\n  padding:1rem;\n  background:#f7f8fb;\n  color:#47494e;\n  text-align:center;\n  display:flex;\n  justify-content:center;\n  align-items:center;\n  flex-direction:column;\n  font-family:sans-serif;\n  font-weight:100!important;\n  -ms-text-size-adjust:100%;\n  -webkit-text-size-adjust:100%;\n  -webkit-font-smoothing:antialiased;\n  position:absolute;\n  top:0;\n  left:0;\n  right:0;\n  bottom:0\n}\n.__nuxt-error-page .error{\n  max-width:450px\n}\n.__nuxt-error-page .title{\n  font-size:1.5rem;\n  margin-top:15px;\n  color:#47494e;\n  margin-bottom:8px\n}\n.__nuxt-error-page .description{\n  color:#7f828b;\n  line-height:21px;\n  margin-bottom:10px\n}\n.__nuxt-error-page a{\n  color:#7f828b!important;\n  text-decoration:none\n}\n.__nuxt-error-page .logo{\n  position:fixed;\n  left:12px;\n  bottom:12px\n}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".nuxt-progress{\n  position:fixed;\n  top:0;\n  left:0;\n  right:0;\n  height:2px;\n  width:0;\n  opacity:1;\n  transition:width .1s,opacity .4s;\n  background-color:#000;\n  z-index:999999\n}\n.nuxt-progress.nuxt-progress-notransition{\n  transition:none\n}\n.nuxt-progress-failed{\n  background-color:red\n}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(42);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4).default("54b08540", content, true)

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*! tailwindcss v2.2.2 | MIT License | https://tailwindcss.com*/\n\n/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n/*\r\nDocument\r\n========\r\n*/\n\n/**\r\nUse a better box model (opinionated).\r\n*/\n\n*,\r\n::before,\r\n::after {\n  box-sizing: border-box;\n}\n\n/**\r\nUse a more readable tab size (opinionated).\r\n*/\n\nhtml {\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n     tab-size: 4;\n}\n\n/**\r\n1. Correct the line height in all browsers.\r\n2. Prevent adjustments of font size after orientation changes in iOS.\r\n*/\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/*\r\nSections\r\n========\r\n*/\n\n/**\r\nRemove the margin in all browsers.\r\n*/\n\nbody {\n  margin: 0;\n}\n\n/**\r\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\r\n*/\n\nbody {\n  font-family:\r\n\t\tsystem-ui,\r\n\t\t-apple-system, /* Firefox supports this but not yet `system-ui` */\r\n\t\t'Segoe UI',\r\n\t\tRoboto,\r\n\t\tHelvetica,\r\n\t\tArial,\r\n\t\tsans-serif,\r\n\t\t'Apple Color Emoji',\r\n\t\t'Segoe UI Emoji';\n}\n\n/*\r\nGrouping content\r\n================\r\n*/\n\n/**\r\n1. Add the correct height in Firefox.\r\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\r\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n}\n\n/*\r\nText-level semantics\r\n====================\r\n*/\n\n/**\r\nAdd the correct text decoration in Chrome, Edge, and Safari.\r\n*/\n\nabbr[title] {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/**\r\nAdd the correct font weight in Edge and Safari.\r\n*/\n\nb,\r\nstrong {\n  font-weight: bolder;\n}\n\n/**\r\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\r\n2. Correct the odd 'em' font sizing in all browsers.\r\n*/\n\ncode,\r\nkbd,\r\nsamp,\r\npre {\n  font-family:\r\n\t\tui-monospace,\r\n\t\tSFMono-Regular,\r\n\t\tConsolas,\r\n\t\t'Liberation Mono',\r\n\t\tMenlo,\r\n\t\tmonospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\r\nAdd the correct font size in all browsers.\r\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/**\r\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\r\n*/\n\nsub,\r\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\r\nTabular data\r\n============\r\n*/\n\n/**\r\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\r\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\r\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n}\n\n/*\r\nForms\r\n=====\r\n*/\n\n/**\r\n1. Change the font styles in all browsers.\r\n2. Remove the margin in Firefox and Safari.\r\n*/\n\nbutton,\r\ninput,\r\noptgroup,\r\nselect,\r\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\r\nRemove the inheritance of text transform in Edge and Firefox.\r\n1. Remove the inheritance of text transform in Firefox.\r\n*/\n\nbutton,\r\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\r\nCorrect the inability to style clickable types in iOS and Safari.\r\n*/\n\nbutton,\r\n[type='button'],\r\n[type='reset'],\r\n[type='submit'] {\n  -webkit-appearance: button;\n}\n\n/**\r\nRemove the inner border and padding in Firefox.\r\n*/\n\n::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\r\nRestore the focus styles unset by the previous rule.\r\n*/\n\n:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\r\nRemove the additional ':invalid' styles in Firefox.\r\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\r\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/**\r\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\r\n*/\n\nlegend {\n  padding: 0;\n}\n\n/**\r\nAdd the correct vertical alignment in Chrome and Firefox.\r\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\r\nCorrect the cursor style of increment and decrement buttons in Safari.\r\n*/\n\n::-webkit-inner-spin-button,\r\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\r\n1. Correct the odd appearance in Chrome and Safari.\r\n2. Correct the outline style in Safari.\r\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\r\nRemove the inner padding in Chrome and Safari on macOS.\r\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\r\n1. Correct the inability to style clickable types in iOS and Safari.\r\n2. Change font properties to 'inherit' in Safari.\r\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\r\nInteractive\r\n===========\r\n*/\n\n/*\r\nAdd the correct display in Chrome and Safari.\r\n*/\n\nsummary {\n  display: list-item;\n}\n\n/**\r\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\r\n * A thin layer on top of normalize.css that provides a starting point more\r\n * suitable for web applications.\r\n */\n\n/**\r\n * Removes the default spacing and border for appropriate elements.\r\n */\n\nblockquote,\r\ndl,\r\ndd,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\nhr,\r\nfigure,\r\np,\r\npre {\n  margin: 0;\n}\n\nbutton {\n  background-color: transparent;\n  background-image: none;\n}\n\n/**\r\n * Work around a Firefox/IE bug where the transparent `button` background\r\n * results in a loss of the default `button` focus styles.\r\n */\n\nbutton:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nol,\r\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/**\r\n * Tailwind custom reset styles\r\n */\n\n/**\r\n * 1. Use the user's configured `sans` font-family (with Tailwind's default\r\n *    sans-serif font stack as a fallback) as a sane default.\r\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\r\n *    to override it to ensure consistency even when using the default theme.\r\n */\n\nhtml {\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 1 */\n  line-height: 1.5; /* 2 */\n}\n\n/**\r\n * Inherit font-family and line-height from `html` so users can set them as\r\n * a class directly on the `html` element.\r\n */\n\nbody {\n  font-family: inherit;\n  line-height: inherit;\n}\n\n/**\r\n * 1. Prevent padding and border from affecting element width.\r\n *\r\n *    We used to set this in the html element and inherit from\r\n *    the parent element for everything else. This caused issues\r\n *    in shadow-dom-enhanced elements like <details> where the content\r\n *    is wrapped by a div with box-sizing set to `content-box`.\r\n *\r\n *    https://github.com/mozdevs/cssremedy/issues/4\r\n *\r\n *\r\n * 2. Allow adding a border to an element by just adding a border-width.\r\n *\r\n *    By default, the way the browser specifies that an element should have no\r\n *    border is by setting it's border-style to `none` in the user-agent\r\n *    stylesheet.\r\n *\r\n *    In order to easily add borders to elements by just setting the `border-width`\r\n *    property, we change the default border-style for all elements to `solid`, and\r\n *    use border-width to hide them instead. This way our `border` utilities only\r\n *    need to set the `border-width` property instead of the entire `border`\r\n *    shorthand, making our border utilities much more straightforward to compose.\r\n *\r\n *    https://github.com/tailwindcss/tailwindcss/pull/116\r\n */\n\n*,\r\n::before,\r\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: currentColor; /* 2 */\n}\n\n/*\r\n * Ensure horizontal rules are visible by default\r\n */\n\nhr {\n  border-top-width: 1px;\n}\n\n/**\r\n * Undo the `border-style: none` reset that Normalize applies to images so that\r\n * our `border-{width}` utilities have the expected effect.\r\n *\r\n * The Normalize reset is unnecessary for us since we default the border-width\r\n * to 0 on all elements.\r\n *\r\n * https://github.com/tailwindcss/tailwindcss/issues/362\r\n */\n\nimg {\n  border-style: solid;\n}\n\ntextarea {\n  resize: vertical;\n}\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\ninput::placeholder,\r\ntextarea::placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\nbutton,\r\n[role=\"button\"] {\n  cursor: pointer;\n}\n\ntable {\n  border-collapse: collapse;\n}\n\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/**\r\n * Reset links to optimize for opt-in styling instead of\r\n * opt-out.\r\n */\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/**\r\n * Reset form element properties that are easy to forget to\r\n * style explicitly so you don't inadvertently introduce\r\n * styles that deviate from your design system. These styles\r\n * supplement a partial reset that is already applied by\r\n * normalize.css.\r\n */\n\nbutton,\r\ninput,\r\noptgroup,\r\nselect,\r\ntextarea {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\n\n/**\r\n * Use the configured 'mono' font family for elements that\r\n * are expected to be rendered with a monospace font, falling\r\n * back to the system monospace stack if there is no configured\r\n * 'mono' font family.\r\n */\n\npre,\r\ncode,\r\nkbd,\r\nsamp {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n\n/**\r\n * 1. Make replaced elements `display: block` by default as that's\r\n *    the behavior you want almost all of the time. Inspired by\r\n *    CSS Remedy, with `svg` added as well.\r\n *\r\n *    https://github.com/mozdevs/cssremedy/issues/14\r\n * \r\n * 2. Add `vertical-align: middle` to align replaced elements more\r\n *    sensibly by default when overriding `display` by adding a\r\n *    utility like `inline`.\r\n *\r\n *    This can trigger a poorly considered linting error in some\r\n *    tools but is included by design.\r\n * \r\n *    https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210\r\n */\n\nimg,\r\nsvg,\r\nvideo,\r\ncanvas,\r\naudio,\r\niframe,\r\nembed,\r\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/**\r\n * Constrain images and videos to the parent width and preserve\r\n * their intrinsic aspect ratio.\r\n *\r\n * https://github.com/mozdevs/cssremedy/issues/14\r\n */\n\nimg,\r\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n*, ::before, ::after{\n  --tw-border-opacity:1;\n  border-color:rgba(229, 231, 235, var(--tw-border-opacity));\n}\n\n.container{\n  width:100%;\n}\n\n@media (min-width: 375px){\n  .container{\n    max-width:375px;\n  }\n}\n\n@media (min-width: 480px){\n  .container{\n    max-width:480px;\n  }\n}\n\n@media (min-width: 540px){\n  .container{\n    max-width:540px;\n  }\n}\n\n@media (min-width: 640px){\n  .container{\n    max-width:640px;\n  }\n}\n\n@media (min-width: 768px){\n  .container{\n    max-width:768px;\n  }\n}\n\n@media (min-width: 1024px){\n  .container{\n    max-width:1024px;\n  }\n}\n\n@media (min-width: 1200px){\n  .container{\n    max-width:1200px;\n  }\n}\n\n@media (min-width: 1280px){\n  .container{\n    max-width:1280px;\n  }\n}\n\n@media (min-width: 1536px){\n  .container{\n    max-width:1536px;\n  }\n}\n\n.sr-only{\n  position:absolute !important;\n  width:1px !important;\n  height:1px !important;\n  padding:0 !important;\n  margin:-1px !important;\n  overflow:hidden !important;\n  clip:rect(0, 0, 0, 0) !important;\n  white-space:nowrap !important;\n  border-width:0 !important;\n}\n\n.pointer-events-none{\n  pointer-events:none !important;\n}\n\n.visible{\n  visibility:visible !important;\n}\n\n.invisible{\n  visibility:hidden !important;\n}\n\n.group:hover .group-hover\\:visible{\n  visibility:visible !important;\n}\n\n.fixed{\n  position:fixed !important;\n}\n\n.absolute{\n  position:absolute !important;\n}\n\n.relative{\n  position:relative !important;\n}\n\n.inset-0{\n  top:0px !important;\n  right:0px !important;\n  bottom:0px !important;\n  left:0px !important;\n}\n\n.inset-y-0{\n  top:0px !important;\n  bottom:0px !important;\n}\n\n.top-0{\n  top:0px !important;\n}\n\n.top-2{\n  top:0.5rem !important;\n}\n\n.top-4{\n  top:1rem !important;\n}\n\n.top-8{\n  top:2rem !important;\n}\n\n.top-20{\n  top:5rem !important;\n}\n\n.-top-2{\n  top:-0.5rem !important;\n}\n\n.top-2\\/4{\n  top:50% !important;\n}\n\n.right-0{\n  right:0px !important;\n}\n\n.right-1{\n  right:0.25rem !important;\n}\n\n.right-2{\n  right:0.5rem !important;\n}\n\n.right-4{\n  right:1rem !important;\n}\n\n.-right-2{\n  right:-0.5rem !important;\n}\n\n.-right-3{\n  right:-0.75rem !important;\n}\n\n.bottom-0{\n  bottom:0px !important;\n}\n\n.bottom-2{\n  bottom:0.5rem !important;\n}\n\n.bottom-5{\n  bottom:1.25rem !important;\n}\n\n.bottom-96{\n  bottom:24rem !important;\n}\n\n.left-0{\n  left:0px !important;\n}\n\n.left-2{\n  left:0.5rem !important;\n}\n\n.left-3{\n  left:0.75rem !important;\n}\n\n.left-2\\/4{\n  left:50% !important;\n}\n\n.z-50{\n  z-index:50 !important;\n}\n\n.order-1{\n  order:1 !important;\n}\n\n.order-2{\n  order:2 !important;\n}\n\n.col-start-1{\n  grid-column-start:1 !important;\n}\n\n.col-end-3{\n  grid-column-end:3 !important;\n}\n\n.float-left{\n  float:left !important;\n}\n\n.clear-both{\n  clear:both !important;\n}\n\n.m-1{\n  margin:0.25rem !important;\n}\n\n.m-auto{\n  margin:auto !important;\n}\n\n.mx-1{\n  margin-left:0.25rem !important;\n  margin-right:0.25rem !important;\n}\n\n.mx-2{\n  margin-left:0.5rem !important;\n  margin-right:0.5rem !important;\n}\n\n.mx-4{\n  margin-left:1rem !important;\n  margin-right:1rem !important;\n}\n\n.mx-auto{\n  margin-left:auto !important;\n  margin-right:auto !important;\n}\n\n.mx-px{\n  margin-left:1px !important;\n  margin-right:1px !important;\n}\n\n.my-0{\n  margin-top:0px !important;\n  margin-bottom:0px !important;\n}\n\n.my-1{\n  margin-top:0.25rem !important;\n  margin-bottom:0.25rem !important;\n}\n\n.my-2{\n  margin-top:0.5rem !important;\n  margin-bottom:0.5rem !important;\n}\n\n.my-3{\n  margin-top:0.75rem !important;\n  margin-bottom:0.75rem !important;\n}\n\n.my-4{\n  margin-top:1rem !important;\n  margin-bottom:1rem !important;\n}\n\n.my-6{\n  margin-top:1.5rem !important;\n  margin-bottom:1.5rem !important;\n}\n\n.my-10{\n  margin-top:2.5rem !important;\n  margin-bottom:2.5rem !important;\n}\n\n.my-20{\n  margin-top:5rem !important;\n  margin-bottom:5rem !important;\n}\n\n.my-0\\.5{\n  margin-top:0.125rem !important;\n  margin-bottom:0.125rem !important;\n}\n\n.mt-1{\n  margin-top:0.25rem !important;\n}\n\n.mt-2{\n  margin-top:0.5rem !important;\n}\n\n.mt-3{\n  margin-top:0.75rem !important;\n}\n\n.mt-4{\n  margin-top:1rem !important;\n}\n\n.mt-5{\n  margin-top:1.25rem !important;\n}\n\n.mt-6{\n  margin-top:1.5rem !important;\n}\n\n.mt-7{\n  margin-top:1.75rem !important;\n}\n\n.mt-8{\n  margin-top:2rem !important;\n}\n\n.mt-10{\n  margin-top:2.5rem !important;\n}\n\n.mt-12{\n  margin-top:3rem !important;\n}\n\n.mt-20{\n  margin-top:5rem !important;\n}\n\n.mt-32{\n  margin-top:8rem !important;\n}\n\n.mr-1{\n  margin-right:0.25rem !important;\n}\n\n.mr-2{\n  margin-right:0.5rem !important;\n}\n\n.mr-3{\n  margin-right:0.75rem !important;\n}\n\n.mr-4{\n  margin-right:1rem !important;\n}\n\n.mr-5{\n  margin-right:1.25rem !important;\n}\n\n.mb-0{\n  margin-bottom:0px !important;\n}\n\n.mb-2{\n  margin-bottom:0.5rem !important;\n}\n\n.mb-3{\n  margin-bottom:0.75rem !important;\n}\n\n.mb-4{\n  margin-bottom:1rem !important;\n}\n\n.mb-5{\n  margin-bottom:1.25rem !important;\n}\n\n.mb-6{\n  margin-bottom:1.5rem !important;\n}\n\n.mb-8{\n  margin-bottom:2rem !important;\n}\n\n.mb-10{\n  margin-bottom:2.5rem !important;\n}\n\n.mb-12{\n  margin-bottom:3rem !important;\n}\n\n.mb-20{\n  margin-bottom:5rem !important;\n}\n\n.mb-px{\n  margin-bottom:1px !important;\n}\n\n.mb-0\\.5{\n  margin-bottom:0.125rem !important;\n}\n\n.mb-2\\.5{\n  margin-bottom:0.625rem !important;\n}\n\n.ml-1{\n  margin-left:0.25rem !important;\n}\n\n.ml-3{\n  margin-left:0.75rem !important;\n}\n\n.ml-5{\n  margin-left:1.25rem !important;\n}\n\n.ml-6{\n  margin-left:1.5rem !important;\n}\n\n.ml-10{\n  margin-left:2.5rem !important;\n}\n\n.-ml-8{\n  margin-left:-2rem !important;\n}\n\n.group:hover .group-hover\\:mt-8{\n  margin-top:2rem !important;\n}\n\n.box-border{\n  box-sizing:border-box !important;\n}\n\n.block{\n  display:block !important;\n}\n\n.inline-block{\n  display:inline-block !important;\n}\n\n.inline{\n  display:inline !important;\n}\n\n.flex{\n  display:flex !important;\n}\n\n.inline-flex{\n  display:inline-flex !important;\n}\n\n.table{\n  display:table !important;\n}\n\n.grid{\n  display:grid !important;\n}\n\n.hidden{\n  display:none !important;\n}\n\n.h-1{\n  height:0.25rem !important;\n}\n\n.h-3{\n  height:0.75rem !important;\n}\n\n.h-4{\n  height:1rem !important;\n}\n\n.h-5{\n  height:1.25rem !important;\n}\n\n.h-6{\n  height:1.5rem !important;\n}\n\n.h-7{\n  height:1.75rem !important;\n}\n\n.h-8{\n  height:2rem !important;\n}\n\n.h-9{\n  height:2.25rem !important;\n}\n\n.h-10{\n  height:2.5rem !important;\n}\n\n.h-11{\n  height:2.75rem !important;\n}\n\n.h-12{\n  height:3rem !important;\n}\n\n.h-14{\n  height:3.5rem !important;\n}\n\n.h-16{\n  height:4rem !important;\n}\n\n.h-28{\n  height:7rem !important;\n}\n\n.h-40{\n  height:10rem !important;\n}\n\n.h-48{\n  height:12rem !important;\n}\n\n.h-80{\n  height:20rem !important;\n}\n\n.h-auto{\n  height:auto !important;\n}\n\n.h-px{\n  height:1px !important;\n}\n\n.h-1\\.5{\n  height:0.375rem !important;\n}\n\n.h-full{\n  height:100% !important;\n}\n\n.h-screen{\n  height:100vh !important;\n}\n\n.h-\\[60px\\]{\n  height:60px !important;\n}\n\n.h-\\[250px\\]{\n  height:250px !important;\n}\n\n.max-h-20{\n  max-height:5rem !important;\n}\n\n.max-h-28{\n  max-height:7rem !important;\n}\n\n.min-h-screen{\n  min-height:100vh !important;\n}\n\n.w-1{\n  width:0.25rem !important;\n}\n\n.w-3{\n  width:0.75rem !important;\n}\n\n.w-4{\n  width:1rem !important;\n}\n\n.w-5{\n  width:1.25rem !important;\n}\n\n.w-6{\n  width:1.5rem !important;\n}\n\n.w-7{\n  width:1.75rem !important;\n}\n\n.w-8{\n  width:2rem !important;\n}\n\n.w-9{\n  width:2.25rem !important;\n}\n\n.w-10{\n  width:2.5rem !important;\n}\n\n.w-12{\n  width:3rem !important;\n}\n\n.w-14{\n  width:3.5rem !important;\n}\n\n.w-16{\n  width:4rem !important;\n}\n\n.w-20{\n  width:5rem !important;\n}\n\n.w-24{\n  width:6rem !important;\n}\n\n.w-32{\n  width:8rem !important;\n}\n\n.w-60{\n  width:15rem !important;\n}\n\n.w-80{\n  width:20rem !important;\n}\n\n.w-96{\n  width:24rem !important;\n}\n\n.w-auto{\n  width:auto !important;\n}\n\n.w-1\\.5{\n  width:0.375rem !important;\n}\n\n.w-1\\/2{\n  width:50% !important;\n}\n\n.w-1\\/4{\n  width:25% !important;\n}\n\n.w-2\\/4{\n  width:50% !important;\n}\n\n.w-5\\/6{\n  width:83.333333% !important;\n}\n\n.w-5\\/12{\n  width:41.666667% !important;\n}\n\n.w-7\\/12{\n  width:58.333333% !important;\n}\n\n.w-11\\/12{\n  width:91.666667% !important;\n}\n\n.w-full{\n  width:100% !important;\n}\n\n.w-screen{\n  width:100vw !important;\n}\n\n.w-\\[60px\\]{\n  width:60px !important;\n}\n\n.w-\\[97\\%\\]{\n  width:97% !important;\n}\n\n.w-\\[94\\%\\]{\n  width:94% !important;\n}\n\n.min-w-full{\n  min-width:100% !important;\n}\n\n.min-w-max{\n  min-width:-webkit-max-content !important;\n  min-width:-moz-max-content !important;\n  min-width:max-content !important;\n}\n\n.min-w-\\[52px\\]{\n  min-width:52px !important;\n}\n\n.max-w-xs{\n  max-width:20rem !important;\n}\n\n.max-w-xl{\n  max-width:36rem !important;\n}\n\n.max-w-full{\n  max-width:100% !important;\n}\n\n.max-w-\\[1440px\\]{\n  max-width:1440px !important;\n}\n\n.flex-1{\n  flex:1 1 0% !important;\n}\n\n.flex-shrink-0{\n  flex-shrink:0 !important;\n}\n\n.flex-grow{\n  flex-grow:1 !important;\n}\n\n.transform{\n  --tw-translate-x:0 !important;\n  --tw-translate-y:0 !important;\n  --tw-rotate:0 !important;\n  --tw-skew-x:0 !important;\n  --tw-skew-y:0 !important;\n  --tw-scale-x:1 !important;\n  --tw-scale-y:1 !important;\n  transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) !important;\n}\n\n.translate-x-0{\n  --tw-translate-x:0px !important;\n}\n\n.translate-x-12{\n  --tw-translate-x:3rem !important;\n}\n\n.translate-x-20{\n  --tw-translate-x:5rem !important;\n}\n\n.translate-x-full{\n  --tw-translate-x:100% !important;\n}\n\n.-translate-x-2\\/4{\n  --tw-translate-x:-50% !important;\n}\n\n.-translate-y-2\\/4{\n  --tw-translate-y:-50% !important;\n}\n\n@-webkit-keyframes spin{\n  to{\n    transform:rotate(360deg);\n  }\n}\n\n@keyframes spin{\n  to{\n    transform:rotate(360deg);\n  }\n}\n\n@-webkit-keyframes ping{\n  75%, 100%{\n    transform:scale(2);\n    opacity:0;\n  }\n}\n\n@keyframes ping{\n  75%, 100%{\n    transform:scale(2);\n    opacity:0;\n  }\n}\n\n@-webkit-keyframes pulse{\n  50%{\n    opacity:.5;\n  }\n}\n\n@keyframes pulse{\n  50%{\n    opacity:.5;\n  }\n}\n\n@-webkit-keyframes bounce{\n  0%, 100%{\n    transform:translateY(-25%);\n    -webkit-animation-timing-function:cubic-bezier(0.8,0,1,1);\n            animation-timing-function:cubic-bezier(0.8,0,1,1);\n  }\n\n  50%{\n    transform:none;\n    -webkit-animation-timing-function:cubic-bezier(0,0,0.2,1);\n            animation-timing-function:cubic-bezier(0,0,0.2,1);\n  }\n}\n\n@keyframes bounce{\n  0%, 100%{\n    transform:translateY(-25%);\n    -webkit-animation-timing-function:cubic-bezier(0.8,0,1,1);\n            animation-timing-function:cubic-bezier(0.8,0,1,1);\n  }\n\n  50%{\n    transform:none;\n    -webkit-animation-timing-function:cubic-bezier(0,0,0.2,1);\n            animation-timing-function:cubic-bezier(0,0,0.2,1);\n  }\n}\n\n@-webkit-keyframes OpenMenuMobile{\n  0%{\n    opacity:0;\n    width:0%;\n    transform:translateX(-30%);\n    transition:all .3s ease-in;\n  }\n\n  100%{\n    opacity:1;\n    width:100%;\n    transform:translateX(0);\n    transition:all .3s ease-in;\n  }\n}\n\n@keyframes OpenMenuMobile{\n  0%{\n    opacity:0;\n    width:0%;\n    transform:translateX(-30%);\n    transition:all .3s ease-in;\n  }\n\n  100%{\n    opacity:1;\n    width:100%;\n    transform:translateX(0);\n    transition:all .3s ease-in;\n  }\n}\n\n@-webkit-keyframes toggleScale{\n  0%{\n    opacity:0;\n    width:0%;\n    transform:rolate(0deg);\n    transition:all .3s ease-in;\n  }\n\n  100%{\n    opacity:1;\n    width:100%;\n    transform:rolate(360deg);\n    transition:all .3s ease-in;\n  }\n}\n\n@keyframes toggleScale{\n  0%{\n    opacity:0;\n    width:0%;\n    transform:rolate(0deg);\n    transition:all .3s ease-in;\n  }\n\n  100%{\n    opacity:1;\n    width:100%;\n    transform:rolate(360deg);\n    transition:all .3s ease-in;\n  }\n}\n\n.animate-spin{\n  -webkit-animation:spin 1s linear infinite !important;\n          animation:spin 1s linear infinite !important;\n}\n\n.animate-OpenMenuMobile{\n  -webkit-animation:OpenMenuMobile .7s !important;\n          animation:OpenMenuMobile .7s !important;\n}\n\n.cursor-pointer{\n  cursor:pointer !important;\n}\n\n.cursor-text{\n  cursor:text !important;\n}\n\n.appearance-none{\n  -webkit-appearance:none !important;\n     -moz-appearance:none !important;\n          appearance:none !important;\n}\n\n.grid-cols-1{\n  grid-template-columns:repeat(1, minmax(0, 1fr)) !important;\n}\n\n.grid-cols-2{\n  grid-template-columns:repeat(2, minmax(0, 1fr)) !important;\n}\n\n.grid-cols-3{\n  grid-template-columns:repeat(3, minmax(0, 1fr)) !important;\n}\n\n.grid-cols-4{\n  grid-template-columns:repeat(4, minmax(0, 1fr)) !important;\n}\n\n.grid-cols-6{\n  grid-template-columns:repeat(6, minmax(0, 1fr)) !important;\n}\n\n.flex-row{\n  flex-direction:row !important;\n}\n\n.flex-col{\n  flex-direction:column !important;\n}\n\n.flex-col-reverse{\n  flex-direction:column-reverse !important;\n}\n\n.flex-wrap{\n  flex-wrap:wrap !important;\n}\n\n.flex-nowrap{\n  flex-wrap:nowrap !important;\n}\n\n.items-start{\n  align-items:flex-start !important;\n}\n\n.items-end{\n  align-items:flex-end !important;\n}\n\n.items-center{\n  align-items:center !important;\n}\n\n.justify-start{\n  justify-content:flex-start !important;\n}\n\n.justify-end{\n  justify-content:flex-end !important;\n}\n\n.justify-center{\n  justify-content:center !important;\n}\n\n.justify-between{\n  justify-content:space-between !important;\n}\n\n.justify-around{\n  justify-content:space-around !important;\n}\n\n.justify-items-center{\n  justify-items:center !important;\n}\n\n.gap-2{\n  gap:0.5rem !important;\n}\n\n.gap-3{\n  gap:0.75rem !important;\n}\n\n.gap-4{\n  gap:1rem !important;\n}\n\n.gap-5{\n  gap:1.25rem !important;\n}\n\n.gap-6{\n  gap:1.5rem !important;\n}\n\n.gap-px{\n  gap:1px !important;\n}\n\n.gap-x-2{\n  -moz-column-gap:0.5rem !important;\n       column-gap:0.5rem !important;\n}\n\n.gap-x-3{\n  -moz-column-gap:0.75rem !important;\n       column-gap:0.75rem !important;\n}\n\n.gap-x-4{\n  -moz-column-gap:1rem !important;\n       column-gap:1rem !important;\n}\n\n.gap-x-8{\n  -moz-column-gap:2rem !important;\n       column-gap:2rem !important;\n}\n\n.gap-x-10{\n  -moz-column-gap:2.5rem !important;\n       column-gap:2.5rem !important;\n}\n\n.gap-y-4{\n  row-gap:1rem !important;\n}\n\n.gap-y-px{\n  row-gap:1px !important;\n}\n\n.overflow-hidden{\n  overflow:hidden !important;\n}\n\n.overflow-x-auto{\n  overflow-x:auto !important;\n}\n\n.overflow-y-auto{\n  overflow-y:auto !important;\n}\n\n.overflow-y-scroll{\n  overflow-y:scroll !important;\n}\n\n.truncate{\n  overflow:hidden !important;\n  text-overflow:ellipsis !important;\n  white-space:nowrap !important;\n}\n\n.break-words{\n  overflow-wrap:break-word !important;\n}\n\n.rounded{\n  border-radius:0.25rem !important;\n}\n\n.rounded-md{\n  border-radius:0.375rem !important;\n}\n\n.rounded-lg{\n  border-radius:0.5rem !important;\n}\n\n.rounded-xl{\n  border-radius:0.75rem !important;\n}\n\n.rounded-full{\n  border-radius:9999px !important;\n}\n\n.rounded-r-full{\n  border-top-right-radius:9999px !important;\n  border-bottom-right-radius:9999px !important;\n}\n\n.rounded-b-none{\n  border-bottom-right-radius:0px !important;\n  border-bottom-left-radius:0px !important;\n}\n\n.rounded-l-lg{\n  border-top-left-radius:0.5rem !important;\n  border-bottom-left-radius:0.5rem !important;\n}\n\n.rounded-l-full{\n  border-top-left-radius:9999px !important;\n  border-bottom-left-radius:9999px !important;\n}\n\n.rounded-tr-full{\n  border-top-right-radius:9999px !important;\n}\n\n.rounded-br-full{\n  border-bottom-right-radius:9999px !important;\n}\n\n.border-2{\n  border-width:2px !important;\n}\n\n.border{\n  border-width:1px !important;\n}\n\n.border-t-2{\n  border-top-width:2px !important;\n}\n\n.border-t{\n  border-top-width:1px !important;\n}\n\n.border-r{\n  border-right-width:1px !important;\n}\n\n.border-b-2{\n  border-bottom-width:2px !important;\n}\n\n.border-b{\n  border-bottom-width:1px !important;\n}\n\n.border-l-2{\n  border-left-width:2px !important;\n}\n\n.border-l-4{\n  border-left-width:4px !important;\n}\n\n.border-solid{\n  border-style:solid !important;\n}\n\n.border-dashed{\n  border-style:dashed !important;\n}\n\n.border-\\[\\#ebebeb\\]{\n  --tw-border-opacity:1 !important;\n  border-color:rgba(235, 235, 235, var(--tw-border-opacity)) !important;\n}\n\n.border-transparent{\n  border-color:transparent !important;\n}\n\n.border-black{\n  --tw-border-opacity:1 !important;\n  border-color:rgba(0, 0, 0, var(--tw-border-opacity)) !important;\n}\n\n.border-gray-100{\n  --tw-border-opacity:1 !important;\n  border-color:rgba(243, 244, 246, var(--tw-border-opacity)) !important;\n}\n\n.border-gray-200{\n  --tw-border-opacity:1 !important;\n  border-color:rgba(229, 231, 235, var(--tw-border-opacity)) !important;\n}\n\n.border-gray-300{\n  --tw-border-opacity:1 !important;\n  border-color:rgba(209, 213, 219, var(--tw-border-opacity)) !important;\n}\n\n.border-gray-400{\n  --tw-border-opacity:1 !important;\n  border-color:rgba(156, 163, 175, var(--tw-border-opacity)) !important;\n}\n\n.border-red-500{\n  --tw-border-opacity:1 !important;\n  border-color:rgba(239, 68, 68, var(--tw-border-opacity)) !important;\n}\n\n.border-red-600{\n  --tw-border-opacity:1 !important;\n  border-color:rgba(220, 38, 38, var(--tw-border-opacity)) !important;\n}\n\n.border-red-700{\n  --tw-border-opacity:1 !important;\n  border-color:rgba(185, 28, 28, var(--tw-border-opacity)) !important;\n}\n\n.border-yellow-600{\n  --tw-border-opacity:1 !important;\n  border-color:rgba(217, 119, 6, var(--tw-border-opacity)) !important;\n}\n\n.border-green-500{\n  --tw-border-opacity:1 !important;\n  border-color:rgba(16, 185, 129, var(--tw-border-opacity)) !important;\n}\n\n.border-green-700{\n  --tw-border-opacity:1 !important;\n  border-color:rgba(4, 120, 87, var(--tw-border-opacity)) !important;\n}\n\n.hover\\:border-petshop-orange:hover{\n  --tw-border-opacity:1 !important;\n  border-color:rgba(237, 100, 54, var(--tw-border-opacity)) !important;\n}\n\n.hover\\:border-black:hover{\n  --tw-border-opacity:1 !important;\n  border-color:rgba(0, 0, 0, var(--tw-border-opacity)) !important;\n}\n\n.hover\\:border-gray-300:hover{\n  --tw-border-opacity:1 !important;\n  border-color:rgba(209, 213, 219, var(--tw-border-opacity)) !important;\n}\n\n.hover\\:border-red-500:hover{\n  --tw-border-opacity:1 !important;\n  border-color:rgba(239, 68, 68, var(--tw-border-opacity)) !important;\n}\n\n.focus\\:border-indigo-500:focus{\n  --tw-border-opacity:1 !important;\n  border-color:rgba(99, 102, 241, var(--tw-border-opacity)) !important;\n}\n\n.border-opacity-20{\n  --tw-border-opacity:0.2 !important;\n}\n\n.bg-transparent{\n  background-color:transparent !important;\n}\n\n.bg-black{\n  --tw-bg-opacity:1 !important;\n  background-color:rgba(0, 0, 0, var(--tw-bg-opacity)) !important;\n}\n\n.bg-white{\n  --tw-bg-opacity:1 !important;\n  background-color:rgba(255, 255, 255, var(--tw-bg-opacity)) !important;\n}\n\n.bg-gray-50{\n  --tw-bg-opacity:1 !important;\n  background-color:rgba(249, 250, 251, var(--tw-bg-opacity)) !important;\n}\n\n.bg-gray-100{\n  --tw-bg-opacity:1 !important;\n  background-color:rgba(243, 244, 246, var(--tw-bg-opacity)) !important;\n}\n\n.bg-gray-200{\n  --tw-bg-opacity:1 !important;\n  background-color:rgba(229, 231, 235, var(--tw-bg-opacity)) !important;\n}\n\n.bg-gray-400{\n  --tw-bg-opacity:1 !important;\n  background-color:rgba(156, 163, 175, var(--tw-bg-opacity)) !important;\n}\n\n.bg-gray-500{\n  --tw-bg-opacity:1 !important;\n  background-color:rgba(107, 114, 128, var(--tw-bg-opacity)) !important;\n}\n\n.bg-gray-800{\n  --tw-bg-opacity:1 !important;\n  background-color:rgba(31, 41, 55, var(--tw-bg-opacity)) !important;\n}\n\n.bg-red-100{\n  --tw-bg-opacity:1 !important;\n  background-color:rgba(254, 226, 226, var(--tw-bg-opacity)) !important;\n}\n\n.bg-red-300{\n  --tw-bg-opacity:1 !important;\n  background-color:rgba(252, 165, 165, var(--tw-bg-opacity)) !important;\n}\n\n.bg-red-500{\n  --tw-bg-opacity:1 !important;\n  background-color:rgba(239, 68, 68, var(--tw-bg-opacity)) !important;\n}\n\n.bg-red-600{\n  --tw-bg-opacity:1 !important;\n  background-color:rgba(220, 38, 38, var(--tw-bg-opacity)) !important;\n}\n\n.bg-yellow-500{\n  --tw-bg-opacity:1 !important;\n  background-color:rgba(245, 158, 11, var(--tw-bg-opacity)) !important;\n}\n\n.bg-yellow-800{\n  --tw-bg-opacity:1 !important;\n  background-color:rgba(146, 64, 14, var(--tw-bg-opacity)) !important;\n}\n\n.bg-green-300{\n  --tw-bg-opacity:1 !important;\n  background-color:rgba(110, 231, 183, var(--tw-bg-opacity)) !important;\n}\n\n.bg-green-500{\n  --tw-bg-opacity:1 !important;\n  background-color:rgba(16, 185, 129, var(--tw-bg-opacity)) !important;\n}\n\n.bg-blue-300{\n  --tw-bg-opacity:1 !important;\n  background-color:rgba(147, 197, 253, var(--tw-bg-opacity)) !important;\n}\n\n.bg-blue-500{\n  --tw-bg-opacity:1 !important;\n  background-color:rgba(59, 130, 246, var(--tw-bg-opacity)) !important;\n}\n\n.bg-blue-600{\n  --tw-bg-opacity:1 !important;\n  background-color:rgba(37, 99, 235, var(--tw-bg-opacity)) !important;\n}\n\n.bg-blue-800{\n  --tw-bg-opacity:1 !important;\n  background-color:rgba(30, 64, 175, var(--tw-bg-opacity)) !important;\n}\n\n.bg-purple-900{\n  --tw-bg-opacity:1 !important;\n  background-color:rgba(76, 29, 149, var(--tw-bg-opacity)) !important;\n}\n\n.hover\\:bg-petshop-orange:hover{\n  --tw-bg-opacity:1 !important;\n  background-color:rgba(237, 100, 54, var(--tw-bg-opacity)) !important;\n}\n\n.hover\\:bg-black:hover{\n  --tw-bg-opacity:1 !important;\n  background-color:rgba(0, 0, 0, var(--tw-bg-opacity)) !important;\n}\n\n.hover\\:bg-gray-50:hover{\n  --tw-bg-opacity:1 !important;\n  background-color:rgba(249, 250, 251, var(--tw-bg-opacity)) !important;\n}\n\n.hover\\:bg-red-500:hover{\n  --tw-bg-opacity:1 !important;\n  background-color:rgba(239, 68, 68, var(--tw-bg-opacity)) !important;\n}\n\n.hover\\:bg-red-600:hover{\n  --tw-bg-opacity:1 !important;\n  background-color:rgba(220, 38, 38, var(--tw-bg-opacity)) !important;\n}\n\n.hover\\:bg-red-700:hover{\n  --tw-bg-opacity:1 !important;\n  background-color:rgba(185, 28, 28, var(--tw-bg-opacity)) !important;\n}\n\n.hover\\:bg-red-800:hover{\n  --tw-bg-opacity:1 !important;\n  background-color:rgba(153, 27, 27, var(--tw-bg-opacity)) !important;\n}\n\n.hover\\:bg-yellow-500:hover{\n  --tw-bg-opacity:1 !important;\n  background-color:rgba(245, 158, 11, var(--tw-bg-opacity)) !important;\n}\n\n.hover\\:bg-blue-500:hover{\n  --tw-bg-opacity:1 !important;\n  background-color:rgba(59, 130, 246, var(--tw-bg-opacity)) !important;\n}\n\n.hover\\:bg-blue-700:hover{\n  --tw-bg-opacity:1 !important;\n  background-color:rgba(29, 78, 216, var(--tw-bg-opacity)) !important;\n}\n\n.hover\\:bg-blue-800:hover{\n  --tw-bg-opacity:1 !important;\n  background-color:rgba(30, 64, 175, var(--tw-bg-opacity)) !important;\n}\n\n.hover\\:bg-purple-500:hover{\n  --tw-bg-opacity:1 !important;\n  background-color:rgba(139, 92, 246, var(--tw-bg-opacity)) !important;\n}\n\n.even\\:bg-white:nth-child(even){\n  --tw-bg-opacity:1 !important;\n  background-color:rgba(255, 255, 255, var(--tw-bg-opacity)) !important;\n}\n\n.bg-opacity-75{\n  --tw-bg-opacity:0.75 !important;\n}\n\n.bg-cover{\n  background-size:cover !important;\n}\n\n.bg-fixed{\n  background-attachment:fixed !important;\n}\n\n.bg-center{\n  background-position:center !important;\n}\n\n.bg-no-repeat{\n  background-repeat:no-repeat !important;\n}\n\n.fill-current{\n  fill:currentColor !important;\n}\n\n.object-cover{\n  -o-object-fit:cover !important;\n     object-fit:cover !important;\n}\n\n.p-1{\n  padding:0.25rem !important;\n}\n\n.p-2{\n  padding:0.5rem !important;\n}\n\n.p-3{\n  padding:0.75rem !important;\n}\n\n.p-4{\n  padding:1rem !important;\n}\n\n.p-5{\n  padding:1.25rem !important;\n}\n\n.p-8{\n  padding:2rem !important;\n}\n\n.p-9{\n  padding:2.25rem !important;\n}\n\n.p-12{\n  padding:3rem !important;\n}\n\n.p-14{\n  padding:3.5rem !important;\n}\n\n.px-1{\n  padding-left:0.25rem !important;\n  padding-right:0.25rem !important;\n}\n\n.px-2{\n  padding-left:0.5rem !important;\n  padding-right:0.5rem !important;\n}\n\n.px-3{\n  padding-left:0.75rem !important;\n  padding-right:0.75rem !important;\n}\n\n.px-4{\n  padding-left:1rem !important;\n  padding-right:1rem !important;\n}\n\n.px-5{\n  padding-left:1.25rem !important;\n  padding-right:1.25rem !important;\n}\n\n.px-6{\n  padding-left:1.5rem !important;\n  padding-right:1.5rem !important;\n}\n\n.px-7{\n  padding-left:1.75rem !important;\n  padding-right:1.75rem !important;\n}\n\n.px-8{\n  padding-left:2rem !important;\n  padding-right:2rem !important;\n}\n\n.px-10{\n  padding-left:2.5rem !important;\n  padding-right:2.5rem !important;\n}\n\n.py-0{\n  padding-top:0px !important;\n  padding-bottom:0px !important;\n}\n\n.py-1{\n  padding-top:0.25rem !important;\n  padding-bottom:0.25rem !important;\n}\n\n.py-2{\n  padding-top:0.5rem !important;\n  padding-bottom:0.5rem !important;\n}\n\n.py-3{\n  padding-top:0.75rem !important;\n  padding-bottom:0.75rem !important;\n}\n\n.py-4{\n  padding-top:1rem !important;\n  padding-bottom:1rem !important;\n}\n\n.py-5{\n  padding-top:1.25rem !important;\n  padding-bottom:1.25rem !important;\n}\n\n.py-6{\n  padding-top:1.5rem !important;\n  padding-bottom:1.5rem !important;\n}\n\n.py-8{\n  padding-top:2rem !important;\n  padding-bottom:2rem !important;\n}\n\n.py-10{\n  padding-top:2.5rem !important;\n  padding-bottom:2.5rem !important;\n}\n\n.py-11{\n  padding-top:2.75rem !important;\n  padding-bottom:2.75rem !important;\n}\n\n.py-12{\n  padding-top:3rem !important;\n  padding-bottom:3rem !important;\n}\n\n.py-20{\n  padding-top:5rem !important;\n  padding-bottom:5rem !important;\n}\n\n.py-32{\n  padding-top:8rem !important;\n  padding-bottom:8rem !important;\n}\n\n.py-80{\n  padding-top:20rem !important;\n  padding-bottom:20rem !important;\n}\n\n.py-0\\.5{\n  padding-top:0.125rem !important;\n  padding-bottom:0.125rem !important;\n}\n\n.py-2\\.5{\n  padding-top:0.625rem !important;\n  padding-bottom:0.625rem !important;\n}\n\n.py-3\\.5{\n  padding-top:0.875rem !important;\n  padding-bottom:0.875rem !important;\n}\n\n.pt-2{\n  padding-top:0.5rem !important;\n}\n\n.pt-4{\n  padding-top:1rem !important;\n}\n\n.pt-5{\n  padding-top:1.25rem !important;\n}\n\n.pt-6{\n  padding-top:1.5rem !important;\n}\n\n.pt-8{\n  padding-top:2rem !important;\n}\n\n.pt-10{\n  padding-top:2.5rem !important;\n}\n\n.pr-2{\n  padding-right:0.5rem !important;\n}\n\n.pr-4{\n  padding-right:1rem !important;\n}\n\n.pr-7{\n  padding-right:1.75rem !important;\n}\n\n.pr-8{\n  padding-right:2rem !important;\n}\n\n.pr-10{\n  padding-right:2.5rem !important;\n}\n\n.pr-12{\n  padding-right:3rem !important;\n}\n\n.pr-20{\n  padding-right:5rem !important;\n}\n\n.pb-3{\n  padding-bottom:0.75rem !important;\n}\n\n.pb-4{\n  padding-bottom:1rem !important;\n}\n\n.pb-8{\n  padding-bottom:2rem !important;\n}\n\n.pb-10{\n  padding-bottom:2.5rem !important;\n}\n\n.pb-20{\n  padding-bottom:5rem !important;\n}\n\n.pl-2{\n  padding-left:0.5rem !important;\n}\n\n.pl-3{\n  padding-left:0.75rem !important;\n}\n\n.pl-4{\n  padding-left:1rem !important;\n}\n\n.pl-7{\n  padding-left:1.75rem !important;\n}\n\n.pl-10{\n  padding-left:2.5rem !important;\n}\n\n.text-left{\n  text-align:left !important;\n}\n\n.text-center{\n  text-align:center !important;\n}\n\n.text-justify{\n  text-align:justify !important;\n}\n\n.align-baseline{\n  vertical-align:baseline !important;\n}\n\n.align-middle{\n  vertical-align:middle !important;\n}\n\n.align-bottom{\n  vertical-align:bottom !important;\n}\n\n.font-sans{\n  font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\" !important;\n}\n\n.font-mono{\n  font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace !important;\n}\n\n.font-nunito{\n  font-family:Nunito, sans-serif !important;\n}\n\n.text-xs{\n  font-size:0.75rem !important;\n  line-height:1rem !important;\n}\n\n.text-sm{\n  font-size:0.875rem !important;\n  line-height:1.25rem !important;\n}\n\n.text-base{\n  font-size:1rem !important;\n  line-height:1.5rem !important;\n}\n\n.text-lg{\n  font-size:1.125rem !important;\n  line-height:1.75rem !important;\n}\n\n.text-xl{\n  font-size:1.25rem !important;\n  line-height:1.75rem !important;\n}\n\n.text-2xl{\n  font-size:1.5rem !important;\n  line-height:2rem !important;\n}\n\n.text-3xl{\n  font-size:1.875rem !important;\n  line-height:2.25rem !important;\n}\n\n.text-4xl{\n  font-size:2.25rem !important;\n  line-height:2.5rem !important;\n}\n\n.text-5xl{\n  font-size:3rem !important;\n  line-height:1 !important;\n}\n\n.text-6xl{\n  font-size:3.75rem !important;\n  line-height:1 !important;\n}\n\n.text-\\[8px\\]{\n  font-size:8px !important;\n}\n\n.text-\\[11px\\]{\n  font-size:11px !important;\n}\n\n.text-\\[12px\\]{\n  font-size:12px !important;\n}\n\n.text-\\[13px\\]{\n  font-size:13px !important;\n}\n\n.text-\\[14px\\]{\n  font-size:14px !important;\n}\n\n.text-\\[15px\\]{\n  font-size:15px !important;\n}\n\n.text-\\[16px\\]{\n  font-size:16px !important;\n}\n\n.text-\\[20px\\]{\n  font-size:20px !important;\n}\n\n.text-\\[22px\\]{\n  font-size:22px !important;\n}\n\n.text-\\[24px\\]{\n  font-size:24px !important;\n}\n\n.text-\\[25px\\]{\n  font-size:25px !important;\n}\n\n.text-\\[30px\\]{\n  font-size:30px !important;\n}\n\n.text-\\[34px\\]{\n  font-size:34px !important;\n}\n\n.font-extralight{\n  font-weight:200 !important;\n}\n\n.font-light{\n  font-weight:300 !important;\n}\n\n.font-normal{\n  font-weight:400 !important;\n}\n\n.font-medium{\n  font-weight:500 !important;\n}\n\n.font-semibold{\n  font-weight:600 !important;\n}\n\n.font-bold{\n  font-weight:700 !important;\n}\n\n.font-black{\n  font-weight:900 !important;\n}\n\n.uppercase{\n  text-transform:uppercase !important;\n}\n\n.italic{\n  font-style:italic !important;\n}\n\n.leading-3{\n  line-height:.75rem !important;\n}\n\n.leading-4{\n  line-height:1rem !important;\n}\n\n.leading-5{\n  line-height:1.25rem !important;\n}\n\n.leading-6{\n  line-height:1.5rem !important;\n}\n\n.leading-7{\n  line-height:1.75rem !important;\n}\n\n.leading-8{\n  line-height:2rem !important;\n}\n\n.leading-9{\n  line-height:2.25rem !important;\n}\n\n.leading-10{\n  line-height:2.5rem !important;\n}\n\n.leading-12{\n  line-height:3rem !important;\n}\n\n.leading-14{\n  line-height:3.5rem !important;\n}\n\n.leading-none{\n  line-height:1 !important;\n}\n\n.leading-tight{\n  line-height:1.25 !important;\n}\n\n.leading-normal{\n  line-height:1.5 !important;\n}\n\n.leading-relaxed{\n  line-height:1.625 !important;\n}\n\n.leading-loose{\n  line-height:2 !important;\n}\n\n.tracking-tight{\n  letter-spacing:-0.025em !important;\n}\n\n.tracking-wider{\n  letter-spacing:0.05em !important;\n}\n\n.tracking-widest{\n  letter-spacing:0.1em !important;\n}\n\n.text-black{\n  --tw-text-opacity:1 !important;\n  color:rgba(0, 0, 0, var(--tw-text-opacity)) !important;\n}\n\n.text-white{\n  --tw-text-opacity:1 !important;\n  color:rgba(255, 255, 255, var(--tw-text-opacity)) !important;\n}\n\n.text-gray-200{\n  --tw-text-opacity:1 !important;\n  color:rgba(229, 231, 235, var(--tw-text-opacity)) !important;\n}\n\n.text-gray-300{\n  --tw-text-opacity:1 !important;\n  color:rgba(209, 213, 219, var(--tw-text-opacity)) !important;\n}\n\n.text-gray-400{\n  --tw-text-opacity:1 !important;\n  color:rgba(156, 163, 175, var(--tw-text-opacity)) !important;\n}\n\n.text-gray-500{\n  --tw-text-opacity:1 !important;\n  color:rgba(107, 114, 128, var(--tw-text-opacity)) !important;\n}\n\n.text-gray-600{\n  --tw-text-opacity:1 !important;\n  color:rgba(75, 85, 99, var(--tw-text-opacity)) !important;\n}\n\n.text-gray-700{\n  --tw-text-opacity:1 !important;\n  color:rgba(55, 65, 81, var(--tw-text-opacity)) !important;\n}\n\n.text-gray-900{\n  --tw-text-opacity:1 !important;\n  color:rgba(17, 24, 39, var(--tw-text-opacity)) !important;\n}\n\n.text-red-400{\n  --tw-text-opacity:1 !important;\n  color:rgba(248, 113, 113, var(--tw-text-opacity)) !important;\n}\n\n.text-red-500{\n  --tw-text-opacity:1 !important;\n  color:rgba(239, 68, 68, var(--tw-text-opacity)) !important;\n}\n\n.text-red-600{\n  --tw-text-opacity:1 !important;\n  color:rgba(220, 38, 38, var(--tw-text-opacity)) !important;\n}\n\n.text-yellow-400{\n  --tw-text-opacity:1 !important;\n  color:rgba(251, 191, 36, var(--tw-text-opacity)) !important;\n}\n\n.text-yellow-500{\n  --tw-text-opacity:1 !important;\n  color:rgba(245, 158, 11, var(--tw-text-opacity)) !important;\n}\n\n.text-yellow-600{\n  --tw-text-opacity:1 !important;\n  color:rgba(217, 119, 6, var(--tw-text-opacity)) !important;\n}\n\n.text-yellow-800{\n  --tw-text-opacity:1 !important;\n  color:rgba(146, 64, 14, var(--tw-text-opacity)) !important;\n}\n\n.text-green-500{\n  --tw-text-opacity:1 !important;\n  color:rgba(16, 185, 129, var(--tw-text-opacity)) !important;\n}\n\n.text-green-900{\n  --tw-text-opacity:1 !important;\n  color:rgba(6, 78, 59, var(--tw-text-opacity)) !important;\n}\n\n.text-blue-400{\n  --tw-text-opacity:1 !important;\n  color:rgba(96, 165, 250, var(--tw-text-opacity)) !important;\n}\n\n.text-blue-500{\n  --tw-text-opacity:1 !important;\n  color:rgba(59, 130, 246, var(--tw-text-opacity)) !important;\n}\n\n.text-blue-700{\n  --tw-text-opacity:1 !important;\n  color:rgba(29, 78, 216, var(--tw-text-opacity)) !important;\n}\n\n.text-blue-800{\n  --tw-text-opacity:1 !important;\n  color:rgba(30, 64, 175, var(--tw-text-opacity)) !important;\n}\n\n.text-purple-900{\n  --tw-text-opacity:1 !important;\n  color:rgba(76, 29, 149, var(--tw-text-opacity)) !important;\n}\n\n.hover\\:text-white:hover{\n  --tw-text-opacity:1 !important;\n  color:rgba(255, 255, 255, var(--tw-text-opacity)) !important;\n}\n\n.hover\\:text-red-400:hover{\n  --tw-text-opacity:1 !important;\n  color:rgba(248, 113, 113, var(--tw-text-opacity)) !important;\n}\n\n.hover\\:text-red-500:hover{\n  --tw-text-opacity:1 !important;\n  color:rgba(239, 68, 68, var(--tw-text-opacity)) !important;\n}\n\n.hover\\:text-red-600:hover{\n  --tw-text-opacity:1 !important;\n  color:rgba(220, 38, 38, var(--tw-text-opacity)) !important;\n}\n\n.hover\\:text-yellow-300:hover{\n  --tw-text-opacity:1 !important;\n  color:rgba(252, 211, 77, var(--tw-text-opacity)) !important;\n}\n\n.hover\\:text-yellow-500:hover{\n  --tw-text-opacity:1 !important;\n  color:rgba(245, 158, 11, var(--tw-text-opacity)) !important;\n}\n\n.hover\\:text-yellow-600:hover{\n  --tw-text-opacity:1 !important;\n  color:rgba(217, 119, 6, var(--tw-text-opacity)) !important;\n}\n\n.hover\\:text-yellow-700:hover{\n  --tw-text-opacity:1 !important;\n  color:rgba(180, 83, 9, var(--tw-text-opacity)) !important;\n}\n\n.hover\\:text-blue-400:hover{\n  --tw-text-opacity:1 !important;\n  color:rgba(96, 165, 250, var(--tw-text-opacity)) !important;\n}\n\n.hover\\:text-blue-800:hover{\n  --tw-text-opacity:1 !important;\n  color:rgba(30, 64, 175, var(--tw-text-opacity)) !important;\n}\n\n.underline{\n  text-decoration:underline !important;\n}\n\n.line-through{\n  text-decoration:line-through !important;\n}\n\n.antialiased{\n  -webkit-font-smoothing:antialiased !important;\n  -moz-osx-font-smoothing:grayscale !important;\n}\n\n.opacity-0{\n  opacity:0 !important;\n}\n\n.opacity-25{\n  opacity:0.25 !important;\n}\n\n.opacity-50{\n  opacity:0.5 !important;\n}\n\n.opacity-75{\n  opacity:0.75 !important;\n}\n\n.opacity-100{\n  opacity:1 !important;\n}\n\n.group:hover .group-hover\\:opacity-100{\n  opacity:1 !important;\n}\n\n*, ::before, ::after{\n  --tw-shadow:0 0 #0000;\n}\n\n.shadow-sm{\n  --tw-shadow:0 1px 2px 0 rgba(0, 0, 0, 0.05) !important;\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow) !important;\n}\n\n.shadow{\n  --tw-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06) !important;\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow) !important;\n}\n\n.shadow-md{\n  --tw-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06) !important;\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow) !important;\n}\n\n.shadow-xl{\n  --tw-shadow:0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04) !important;\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow) !important;\n}\n\n.outline-none{\n  outline:2px solid transparent !important;\n  outline-offset:2px !important;\n}\n\n.focus\\:outline-none:focus{\n  outline:2px solid transparent !important;\n  outline-offset:2px !important;\n}\n\n*, ::before, ::after{\n  --tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);\n  --tw-ring-offset-width:0px;\n  --tw-ring-offset-color:#fff;\n  --tw-ring-color:rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow:0 0 #0000;\n  --tw-ring-shadow:0 0 #0000;\n}\n\n.focus\\:ring-2:focus{\n  --tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color) !important;\n  --tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color) !important;\n  box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000) !important;\n}\n\n.focus\\:ring-white:focus{\n  --tw-ring-opacity:1 !important;\n  --tw-ring-color:rgba(255, 255, 255, var(--tw-ring-opacity)) !important;\n}\n\n.focus\\:ring-red-500:focus{\n  --tw-ring-opacity:1 !important;\n  --tw-ring-color:rgba(239, 68, 68, var(--tw-ring-opacity)) !important;\n}\n\n.focus\\:ring-indigo-500:focus{\n  --tw-ring-opacity:1 !important;\n  --tw-ring-color:rgba(99, 102, 241, var(--tw-ring-opacity)) !important;\n}\n\n.focus\\:ring-offset-2:focus{\n  --tw-ring-offset-width:2px !important;\n}\n\n.filter{\n  --tw-blur:var(--tw-empty,/*!*/ /*!*/) !important;\n  --tw-brightness:var(--tw-empty,/*!*/ /*!*/) !important;\n  --tw-contrast:var(--tw-empty,/*!*/ /*!*/) !important;\n  --tw-grayscale:var(--tw-empty,/*!*/ /*!*/) !important;\n  --tw-hue-rotate:var(--tw-empty,/*!*/ /*!*/) !important;\n  --tw-invert:var(--tw-empty,/*!*/ /*!*/) !important;\n  --tw-saturate:var(--tw-empty,/*!*/ /*!*/) !important;\n  --tw-sepia:var(--tw-empty,/*!*/ /*!*/) !important;\n  --tw-drop-shadow:var(--tw-empty,/*!*/ /*!*/) !important;\n  filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow) !important;\n}\n\n.hover\\:filter:hover{\n  --tw-blur:var(--tw-empty,/*!*/ /*!*/) !important;\n  --tw-brightness:var(--tw-empty,/*!*/ /*!*/) !important;\n  --tw-contrast:var(--tw-empty,/*!*/ /*!*/) !important;\n  --tw-grayscale:var(--tw-empty,/*!*/ /*!*/) !important;\n  --tw-hue-rotate:var(--tw-empty,/*!*/ /*!*/) !important;\n  --tw-invert:var(--tw-empty,/*!*/ /*!*/) !important;\n  --tw-saturate:var(--tw-empty,/*!*/ /*!*/) !important;\n  --tw-sepia:var(--tw-empty,/*!*/ /*!*/) !important;\n  --tw-drop-shadow:var(--tw-empty,/*!*/ /*!*/) !important;\n  filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow) !important;\n}\n\n.blur-md{\n  --tw-blur:blur(12px) !important;\n}\n\n.contrast-200{\n  --tw-contrast:contrast(2) !important;\n}\n\n.grayscale{\n  --tw-grayscale:grayscale(100%) !important;\n}\n\n.transition-all{\n  transition-property:all !important;\n  transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1) !important;\n  transition-duration:150ms !important;\n}\n\n.transition{\n  transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter !important;\n  transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter !important;\n  transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter !important;\n  transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1) !important;\n  transition-duration:150ms !important;\n}\n\n.transition-colors{\n  transition-property:background-color, border-color, color, fill, stroke !important;\n  transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1) !important;\n  transition-duration:150ms !important;\n}\n\n.transition-opacity{\n  transition-property:opacity !important;\n  transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1) !important;\n  transition-duration:150ms !important;\n}\n\n.duration-200{\n  transition-duration:200ms !important;\n}\n\n.duration-300{\n  transition-duration:300ms !important;\n}\n\n.duration-500{\n  transition-duration:500ms !important;\n}\n\n.duration-700{\n  transition-duration:700ms !important;\n}\n\n.ease-out{\n  transition-timing-function:cubic-bezier(0, 0, 0.2, 1) !important;\n}\n\n.ease-in-out{\n  transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1) !important;\n}\n\n@media (min-width: 375px){\n  .ip6\\:h-\\[293px\\]{\n    height:293px !important;\n  }\n}\n\n@media (min-width: 540px){\n}\n\n@media (min-width: 640px){\n  .sm\\:mx-0{\n    margin-left:0px !important;\n    margin-right:0px !important;\n  }\n\n  .sm\\:my-8{\n    margin-top:2rem !important;\n    margin-bottom:2rem !important;\n  }\n\n  .sm\\:mt-0{\n    margin-top:0px !important;\n  }\n\n  .sm\\:ml-3{\n    margin-left:0.75rem !important;\n  }\n\n  .sm\\:ml-4{\n    margin-left:1rem !important;\n  }\n\n  .sm\\:-ml-10{\n    margin-left:-2.5rem !important;\n  }\n\n  .sm\\:block{\n    display:block !important;\n  }\n\n  .sm\\:inline-block{\n    display:inline-block !important;\n  }\n\n  .sm\\:flex{\n    display:flex !important;\n  }\n\n  .sm\\:h-10{\n    height:2.5rem !important;\n  }\n\n  .sm\\:h-screen{\n    height:100vh !important;\n  }\n\n  .sm\\:w-10{\n    width:2.5rem !important;\n  }\n\n  .sm\\:w-auto{\n    width:auto !important;\n  }\n\n  .sm\\:w-full{\n    width:100% !important;\n  }\n\n  .sm\\:max-w-lg{\n    max-width:32rem !important;\n  }\n\n  .sm\\:flex-row-reverse{\n    flex-direction:row-reverse !important;\n  }\n\n  .sm\\:items-start{\n    align-items:flex-start !important;\n  }\n\n  .sm\\:p-0{\n    padding:0px !important;\n  }\n\n  .sm\\:p-6{\n    padding:1.5rem !important;\n  }\n\n  .sm\\:px-6{\n    padding-left:1.5rem !important;\n    padding-right:1.5rem !important;\n  }\n\n  .sm\\:pr-4{\n    padding-right:1rem !important;\n  }\n\n  .sm\\:pb-4{\n    padding-bottom:1rem !important;\n  }\n\n  .sm\\:text-left{\n    text-align:left !important;\n  }\n\n  .sm\\:align-middle{\n    vertical-align:middle !important;\n  }\n\n  .sm\\:text-sm{\n    font-size:0.875rem !important;\n    line-height:1.25rem !important;\n  }\n\n  .sm\\:duration-700{\n    transition-duration:700ms !important;\n  }\n}\n\n@media (min-width: 768px){\n  .md\\:top-40{\n    top:10rem !important;\n  }\n\n  .md\\:right-1\\/2{\n    right:50% !important;\n  }\n\n  .md\\:bottom-8{\n    bottom:2rem !important;\n  }\n\n  .md\\:left-6{\n    left:1.5rem !important;\n  }\n\n  .md\\:order-2{\n    order:2 !important;\n  }\n\n  .md\\:mt-0{\n    margin-top:0px !important;\n  }\n\n  .md\\:mt-10{\n    margin-top:2.5rem !important;\n  }\n\n  .md\\:mr-3{\n    margin-right:0.75rem !important;\n  }\n\n  .md\\:mb-0{\n    margin-bottom:0px !important;\n  }\n\n  .md\\:mb-10{\n    margin-bottom:2.5rem !important;\n  }\n\n  .md\\:flex{\n    display:flex !important;\n  }\n\n  .md\\:grid{\n    display:grid !important;\n  }\n\n  .md\\:h-10{\n    height:2.5rem !important;\n  }\n\n  .md\\:h-\\[480px\\]{\n    height:480px !important;\n  }\n\n  .md\\:w-10{\n    width:2.5rem !important;\n  }\n\n  .md\\:w-1\\/2{\n    width:50% !important;\n  }\n\n  .md\\:w-2\\/4{\n    width:50% !important;\n  }\n\n  .md\\:w-2\\/5{\n    width:40% !important;\n  }\n\n  .md\\:w-2\\/6{\n    width:33.333333% !important;\n  }\n\n  .md\\:w-full{\n    width:100% !important;\n  }\n\n  .md\\:grid-cols-2{\n    grid-template-columns:repeat(2, minmax(0, 1fr)) !important;\n  }\n\n  .md\\:grid-cols-3{\n    grid-template-columns:repeat(3, minmax(0, 1fr)) !important;\n  }\n\n  .md\\:flex-row{\n    flex-direction:row !important;\n  }\n\n  .md\\:items-center{\n    align-items:center !important;\n  }\n\n  .md\\:gap-6{\n    gap:1.5rem !important;\n  }\n\n  .md\\:gap-x-4{\n    -moz-column-gap:1rem !important;\n         column-gap:1rem !important;\n  }\n\n  .md\\:border-r{\n    border-right-width:1px !important;\n  }\n\n  .md\\:px-8{\n    padding-left:2rem !important;\n    padding-right:2rem !important;\n  }\n\n  .md\\:px-10{\n    padding-left:2.5rem !important;\n    padding-right:2.5rem !important;\n  }\n\n  .md\\:py-6{\n    padding-top:1.5rem !important;\n    padding-bottom:1.5rem !important;\n  }\n\n  .md\\:pt-24{\n    padding-top:6rem !important;\n  }\n\n  .md\\:text-left{\n    text-align:left !important;\n  }\n\n  .md\\:text-xl{\n    font-size:1.25rem !important;\n    line-height:1.75rem !important;\n  }\n\n  .md\\:text-2xl{\n    font-size:1.5rem !important;\n    line-height:2rem !important;\n  }\n\n  .md\\:text-4xl{\n    font-size:2.25rem !important;\n    line-height:2.5rem !important;\n  }\n\n  .md\\:text-\\[14px\\]{\n    font-size:14px !important;\n  }\n\n  .md\\:text-\\[52px\\]{\n    font-size:52px !important;\n  }\n\n  .md\\:leading-10{\n    line-height:2.5rem !important;\n  }\n\n  .md\\:leading-none{\n    line-height:1 !important;\n  }\n\n  .md\\:tracking-wide{\n    letter-spacing:0.025em !important;\n  }\n}\n\n@media (min-width: 1024px){\n  .lg\\:absolute{\n    position:absolute !important;\n  }\n\n  .lg\\:relative{\n    position:relative !important;\n  }\n\n  .lg\\:top-1\\/4{\n    top:25% !important;\n  }\n\n  .lg\\:bottom-0{\n    bottom:0px !important;\n  }\n\n  .lg\\:col-auto{\n    grid-column:auto !important;\n  }\n\n  .lg\\:clear-none{\n    clear:none !important;\n  }\n\n  .lg\\:my-0{\n    margin-top:0px !important;\n    margin-bottom:0px !important;\n  }\n\n  .lg\\:mt-0{\n    margin-top:0px !important;\n  }\n\n  .lg\\:mt-10{\n    margin-top:2.5rem !important;\n  }\n\n  .lg\\:mb-0{\n    margin-bottom:0px !important;\n  }\n\n  .lg\\:block{\n    display:block !important;\n  }\n\n  .lg\\:flex{\n    display:flex !important;\n  }\n\n  .lg\\:hidden{\n    display:none !important;\n  }\n\n  .lg\\:h-\\[580px\\]{\n    height:580px !important;\n  }\n\n  .lg\\:w-16{\n    width:4rem !important;\n  }\n\n  .lg\\:w-20{\n    width:5rem !important;\n  }\n\n  .lg\\:w-24{\n    width:6rem !important;\n  }\n\n  .lg\\:w-1\\/2{\n    width:50% !important;\n  }\n\n  .lg\\:w-3\\/4{\n    width:75% !important;\n  }\n\n  .lg\\:w-1\\/5{\n    width:20% !important;\n  }\n\n  .lg\\:w-4\\/5{\n    width:80% !important;\n  }\n\n  .lg\\:w-11\\/12{\n    width:91.666667% !important;\n  }\n\n  .lg\\:w-\\[25\\%\\]{\n    width:25% !important;\n  }\n\n  .lg\\:w-\\[30\\%\\]{\n    width:30% !important;\n  }\n\n  .lg\\:w-\\[75\\%\\]{\n    width:75% !important;\n  }\n\n  .lg\\:w-\\[70\\%\\]{\n    width:70% !important;\n  }\n\n  .lg\\:max-w-\\[1440px\\]{\n    max-width:1440px !important;\n  }\n\n  .lg\\:grid-cols-2{\n    grid-template-columns:repeat(2, minmax(0, 1fr)) !important;\n  }\n\n  .lg\\:grid-cols-3{\n    grid-template-columns:repeat(3, minmax(0, 1fr)) !important;\n  }\n\n  .lg\\:flex-row{\n    flex-direction:row !important;\n  }\n\n  .lg\\:justify-start{\n    justify-content:flex-start !important;\n  }\n\n  .lg\\:justify-end{\n    justify-content:flex-end !important;\n  }\n\n  .lg\\:gap-6{\n    gap:1.5rem !important;\n  }\n\n  .lg\\:rounded-md{\n    border-radius:0.375rem !important;\n  }\n\n  .lg\\:rounded-l-none{\n    border-top-left-radius:0px !important;\n    border-bottom-left-radius:0px !important;\n  }\n\n  .lg\\:border-0{\n    border-width:0px !important;\n  }\n\n  .lg\\:border-b{\n    border-bottom-width:1px !important;\n  }\n\n  .lg\\:bg-transparent{\n    background-color:transparent !important;\n  }\n\n  .lg\\:p-8{\n    padding:2rem !important;\n  }\n\n  .lg\\:p-16{\n    padding:4rem !important;\n  }\n\n  .lg\\:px-10{\n    padding-left:2.5rem !important;\n    padding-right:2.5rem !important;\n  }\n\n  .lg\\:px-20{\n    padding-left:5rem !important;\n    padding-right:5rem !important;\n  }\n\n  .lg\\:px-32{\n    padding-left:8rem !important;\n    padding-right:8rem !important;\n  }\n\n  .lg\\:py-0{\n    padding-top:0px !important;\n    padding-bottom:0px !important;\n  }\n\n  .lg\\:pr-4{\n    padding-right:1rem !important;\n  }\n\n  .lg\\:pr-10{\n    padding-right:2.5rem !important;\n  }\n\n  .lg\\:pb-32{\n    padding-bottom:8rem !important;\n  }\n\n  .lg\\:pl-8{\n    padding-left:2rem !important;\n  }\n\n  .lg\\:pl-10{\n    padding-left:2.5rem !important;\n  }\n\n  .lg\\:pl-20{\n    padding-left:5rem !important;\n  }\n\n  .lg\\:text-center{\n    text-align:center !important;\n  }\n\n  .lg\\:text-3xl{\n    font-size:1.875rem !important;\n    line-height:2.25rem !important;\n  }\n\n  .lg\\:text-4xl{\n    font-size:2.25rem !important;\n    line-height:2.5rem !important;\n  }\n\n  .lg\\:text-6xl{\n    font-size:3.75rem !important;\n    line-height:1 !important;\n  }\n\n  .lg\\:text-8xl{\n    font-size:6rem !important;\n    line-height:1 !important;\n  }\n\n  .lg\\:text-\\[14px\\]{\n    font-size:14px !important;\n  }\n\n  .lg\\:text-\\[32px\\]{\n    font-size:32px !important;\n  }\n}\n\n@media (min-width: 1280px){\n  .xl\\:mb-0{\n    margin-bottom:0px !important;\n  }\n\n  .xl\\:w-64{\n    width:16rem !important;\n  }\n\n  .xl\\:w-3\\/4{\n    width:75% !important;\n  }\n\n  .xl\\:w-2\\/5{\n    width:40% !important;\n  }\n\n  .xl\\:w-11\\/12{\n    width:91.666667% !important;\n  }\n\n  .xl\\:w-full{\n    width:100% !important;\n  }\n\n  .xl\\:grid-cols-3{\n    grid-template-columns:repeat(3, minmax(0, 1fr)) !important;\n  }\n\n  .xl\\:gap-8{\n    gap:2rem !important;\n  }\n\n  .xl\\:pl-40{\n    padding-left:10rem !important;\n  }\n\n  .xl\\:text-\\[34px\\]{\n    font-size:34px !important;\n  }\n}\n\n@media (min-width: 480px){\n  .\\[480\\]\\:mt-0{\n    margin-top:0px !important;\n  }\n\n  .\\[480\\]\\:flex-nowrap{\n    flex-wrap:nowrap !important;\n  }\n}\n\n@media (min-width: 1536px){\n}\n\n@media (min-width: 1200px){\n  .owl\\:grid{\n    display:grid !important;\n  }\n\n  .owl\\:grid-cols-4{\n    grid-template-columns:repeat(4, minmax(0, 1fr)) !important;\n  }\n\n  .owl\\:gap-4{\n    gap:1rem !important;\n  }\n}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(44);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4).default("0dbad226", content, true)

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * Quill Editor v1.3.7\n * https://quilljs.com/\n * Copyright (c) 2014, Jason Chen\n * Copyright (c) 2013, salesforce.com\n */\n\n.ql-container{\n  box-sizing:border-box;\n  font-family:Helvetica,Arial,sans-serif;\n  font-size:13px;\n  height:100%;\n  margin:0;\n  position:relative\n}\n\n.ql-container.ql-disabled .ql-tooltip{\n  visibility:hidden\n}\n\n.ql-container.ql-disabled .ql-editor ul[data-checked]>li:before{\n  pointer-events:none\n}\n\n.ql-clipboard{\n  left:-100000px;\n  height:1px;\n  overflow-y:hidden;\n  position:absolute;\n  top:50%\n}\n\n.ql-clipboard p{\n  margin:0;\n  padding:0\n}\n\n.ql-editor{\n  box-sizing:border-box;\n  line-height:1.42;\n  height:100%;\n  outline:none;\n  overflow-y:auto;\n  padding:12px 15px;\n  -o-tab-size:4;\n     tab-size:4;\n  -moz-tab-size:4;\n  text-align:left;\n  white-space:pre-wrap;\n  word-wrap:break-word\n}\n\n.ql-editor>*{\n  cursor:text\n}\n\n.ql-editor blockquote,.ql-editor h1,.ql-editor h2,.ql-editor h3,.ql-editor h4,.ql-editor h5,.ql-editor h6,.ql-editor ol,.ql-editor p,.ql-editor pre,.ql-editor ul{\n  margin:0;\n  padding:0;\n  counter-reset:list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9\n}\n\n.ql-editor ol,.ql-editor ul{\n  padding-left:1.5em\n}\n\n.ql-editor ol>li,.ql-editor ul>li{\n  list-style-type:none\n}\n\n.ql-editor ul>li:before{\n  content:\"\\2022\"\n}\n\n.ql-editor ul[data-checked=false],.ql-editor ul[data-checked=true]{\n  pointer-events:none\n}\n\n.ql-editor ul[data-checked=false]>li *,.ql-editor ul[data-checked=true]>li *{\n  pointer-events:all\n}\n\n.ql-editor ul[data-checked=false]>li:before,.ql-editor ul[data-checked=true]>li:before{\n  color:#777;\n  cursor:pointer;\n  pointer-events:all\n}\n\n.ql-editor ul[data-checked=true]>li:before{\n  content:\"\\2611\"\n}\n\n.ql-editor ul[data-checked=false]>li:before{\n  content:\"\\2610\"\n}\n\n.ql-editor li:before{\n  display:inline-block;\n  white-space:nowrap;\n  width:1.2em\n}\n\n.ql-editor li:not(.ql-direction-rtl):before{\n  margin-left:-1.5em;\n  margin-right:.3em;\n  text-align:right\n}\n\n.ql-editor li.ql-direction-rtl:before{\n  margin-left:.3em;\n  margin-right:-1.5em\n}\n\n.ql-editor ol li:not(.ql-direction-rtl),.ql-editor ul li:not(.ql-direction-rtl){\n  padding-left:1.5em\n}\n\n.ql-editor ol li.ql-direction-rtl,.ql-editor ul li.ql-direction-rtl{\n  padding-right:1.5em\n}\n\n.ql-editor ol li{\n  counter-reset:list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n  counter-increment:list-0\n}\n\n.ql-editor ol li:before{\n  content:counter(list-0,decimal) \". \"\n}\n\n.ql-editor ol li.ql-indent-1{\n  counter-increment:list-1\n}\n\n.ql-editor ol li.ql-indent-1:before{\n  content:counter(list-1,lower-alpha) \". \"\n}\n\n.ql-editor ol li.ql-indent-1{\n  counter-reset:list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9\n}\n\n.ql-editor ol li.ql-indent-2{\n  counter-increment:list-2\n}\n\n.ql-editor ol li.ql-indent-2:before{\n  content:counter(list-2,lower-roman) \". \"\n}\n\n.ql-editor ol li.ql-indent-2{\n  counter-reset:list-3 list-4 list-5 list-6 list-7 list-8 list-9\n}\n\n.ql-editor ol li.ql-indent-3{\n  counter-increment:list-3\n}\n\n.ql-editor ol li.ql-indent-3:before{\n  content:counter(list-3,decimal) \". \"\n}\n\n.ql-editor ol li.ql-indent-3{\n  counter-reset:list-4 list-5 list-6 list-7 list-8 list-9\n}\n\n.ql-editor ol li.ql-indent-4{\n  counter-increment:list-4\n}\n\n.ql-editor ol li.ql-indent-4:before{\n  content:counter(list-4,lower-alpha) \". \"\n}\n\n.ql-editor ol li.ql-indent-4{\n  counter-reset:list-5 list-6 list-7 list-8 list-9\n}\n\n.ql-editor ol li.ql-indent-5{\n  counter-increment:list-5\n}\n\n.ql-editor ol li.ql-indent-5:before{\n  content:counter(list-5,lower-roman) \". \"\n}\n\n.ql-editor ol li.ql-indent-5{\n  counter-reset:list-6 list-7 list-8 list-9\n}\n\n.ql-editor ol li.ql-indent-6{\n  counter-increment:list-6\n}\n\n.ql-editor ol li.ql-indent-6:before{\n  content:counter(list-6,decimal) \". \"\n}\n\n.ql-editor ol li.ql-indent-6{\n  counter-reset:list-7 list-8 list-9\n}\n\n.ql-editor ol li.ql-indent-7{\n  counter-increment:list-7\n}\n\n.ql-editor ol li.ql-indent-7:before{\n  content:counter(list-7,lower-alpha) \". \"\n}\n\n.ql-editor ol li.ql-indent-7{\n  counter-reset:list-8 list-9\n}\n\n.ql-editor ol li.ql-indent-8{\n  counter-increment:list-8\n}\n\n.ql-editor ol li.ql-indent-8:before{\n  content:counter(list-8,lower-roman) \". \"\n}\n\n.ql-editor ol li.ql-indent-8{\n  counter-reset:list-9\n}\n\n.ql-editor ol li.ql-indent-9{\n  counter-increment:list-9\n}\n\n.ql-editor ol li.ql-indent-9:before{\n  content:counter(list-9,decimal) \". \"\n}\n\n.ql-editor .ql-indent-1:not(.ql-direction-rtl){\n  padding-left:3em\n}\n\n.ql-editor li.ql-indent-1:not(.ql-direction-rtl){\n  padding-left:4.5em\n}\n\n.ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right{\n  padding-right:3em\n}\n\n.ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right{\n  padding-right:4.5em\n}\n\n.ql-editor .ql-indent-2:not(.ql-direction-rtl){\n  padding-left:6em\n}\n\n.ql-editor li.ql-indent-2:not(.ql-direction-rtl){\n  padding-left:7.5em\n}\n\n.ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right{\n  padding-right:6em\n}\n\n.ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right{\n  padding-right:7.5em\n}\n\n.ql-editor .ql-indent-3:not(.ql-direction-rtl){\n  padding-left:9em\n}\n\n.ql-editor li.ql-indent-3:not(.ql-direction-rtl){\n  padding-left:10.5em\n}\n\n.ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right{\n  padding-right:9em\n}\n\n.ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right{\n  padding-right:10.5em\n}\n\n.ql-editor .ql-indent-4:not(.ql-direction-rtl){\n  padding-left:12em\n}\n\n.ql-editor li.ql-indent-4:not(.ql-direction-rtl){\n  padding-left:13.5em\n}\n\n.ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right{\n  padding-right:12em\n}\n\n.ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right{\n  padding-right:13.5em\n}\n\n.ql-editor .ql-indent-5:not(.ql-direction-rtl){\n  padding-left:15em\n}\n\n.ql-editor li.ql-indent-5:not(.ql-direction-rtl){\n  padding-left:16.5em\n}\n\n.ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right{\n  padding-right:15em\n}\n\n.ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right{\n  padding-right:16.5em\n}\n\n.ql-editor .ql-indent-6:not(.ql-direction-rtl){\n  padding-left:18em\n}\n\n.ql-editor li.ql-indent-6:not(.ql-direction-rtl){\n  padding-left:19.5em\n}\n\n.ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right{\n  padding-right:18em\n}\n\n.ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right{\n  padding-right:19.5em\n}\n\n.ql-editor .ql-indent-7:not(.ql-direction-rtl){\n  padding-left:21em\n}\n\n.ql-editor li.ql-indent-7:not(.ql-direction-rtl){\n  padding-left:22.5em\n}\n\n.ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right{\n  padding-right:21em\n}\n\n.ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right{\n  padding-right:22.5em\n}\n\n.ql-editor .ql-indent-8:not(.ql-direction-rtl){\n  padding-left:24em\n}\n\n.ql-editor li.ql-indent-8:not(.ql-direction-rtl){\n  padding-left:25.5em\n}\n\n.ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right{\n  padding-right:24em\n}\n\n.ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right{\n  padding-right:25.5em\n}\n\n.ql-editor .ql-indent-9:not(.ql-direction-rtl){\n  padding-left:27em\n}\n\n.ql-editor li.ql-indent-9:not(.ql-direction-rtl){\n  padding-left:28.5em\n}\n\n.ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right{\n  padding-right:27em\n}\n\n.ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right{\n  padding-right:28.5em\n}\n\n.ql-editor .ql-video{\n  display:block;\n  max-width:100%\n}\n\n.ql-editor .ql-video.ql-align-center{\n  margin:0 auto\n}\n\n.ql-editor .ql-video.ql-align-right{\n  margin:0 0 0 auto\n}\n\n.ql-editor .ql-bg-black{\n  background-color:#000\n}\n\n.ql-editor .ql-bg-red{\n  background-color:#e60000\n}\n\n.ql-editor .ql-bg-orange{\n  background-color:#f90\n}\n\n.ql-editor .ql-bg-yellow{\n  background-color:#ff0\n}\n\n.ql-editor .ql-bg-green{\n  background-color:#008a00\n}\n\n.ql-editor .ql-bg-blue{\n  background-color:#06c\n}\n\n.ql-editor .ql-bg-purple{\n  background-color:#93f\n}\n\n.ql-editor .ql-color-white{\n  color:#fff\n}\n\n.ql-editor .ql-color-red{\n  color:#e60000\n}\n\n.ql-editor .ql-color-orange{\n  color:#f90\n}\n\n.ql-editor .ql-color-yellow{\n  color:#ff0\n}\n\n.ql-editor .ql-color-green{\n  color:#008a00\n}\n\n.ql-editor .ql-color-blue{\n  color:#06c\n}\n\n.ql-editor .ql-color-purple{\n  color:#93f\n}\n\n.ql-editor .ql-font-serif{\n  font-family:Georgia,Times New Roman,serif\n}\n\n.ql-editor .ql-font-monospace{\n  font-family:Monaco,Courier New,monospace\n}\n\n.ql-editor .ql-size-small{\n  font-size:.75em\n}\n\n.ql-editor .ql-size-large{\n  font-size:1.5em\n}\n\n.ql-editor .ql-size-huge{\n  font-size:2.5em\n}\n\n.ql-editor .ql-direction-rtl{\n  direction:rtl;\n  text-align:inherit\n}\n\n.ql-editor .ql-align-center{\n  text-align:center\n}\n\n.ql-editor .ql-align-justify{\n  text-align:justify\n}\n\n.ql-editor .ql-align-right{\n  text-align:right\n}\n\n.ql-editor.ql-blank:before{\n  color:rgba(0,0,0,.6);\n  content:attr(data-placeholder);\n  font-style:italic;\n  left:15px;\n  pointer-events:none;\n  position:absolute;\n  right:15px\n}\n\n.ql-snow.ql-toolbar:after,.ql-snow .ql-toolbar:after{\n  clear:both;\n  content:\"\";\n  display:table\n}\n\n.ql-snow.ql-toolbar button,.ql-snow .ql-toolbar button{\n  background:none;\n  border:none;\n  cursor:pointer;\n  display:inline-block;\n  float:left;\n  height:24px;\n  padding:3px 5px;\n  width:28px\n}\n\n.ql-snow.ql-toolbar button svg,.ql-snow .ql-toolbar button svg{\n  float:left;\n  height:100%\n}\n\n.ql-snow.ql-toolbar button:active:hover,.ql-snow .ql-toolbar button:active:hover{\n  outline:none\n}\n\n.ql-snow.ql-toolbar input.ql-image[type=file],.ql-snow .ql-toolbar input.ql-image[type=file]{\n  display:none\n}\n\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected,.ql-snow .ql-toolbar .ql-picker-item.ql-selected,.ql-snow.ql-toolbar .ql-picker-item:hover,.ql-snow .ql-toolbar .ql-picker-item:hover,.ql-snow.ql-toolbar .ql-picker-label.ql-active,.ql-snow .ql-toolbar .ql-picker-label.ql-active,.ql-snow.ql-toolbar .ql-picker-label:hover,.ql-snow .ql-toolbar .ql-picker-label:hover,.ql-snow.ql-toolbar button.ql-active,.ql-snow .ql-toolbar button.ql-active,.ql-snow.ql-toolbar button:focus,.ql-snow .ql-toolbar button:focus,.ql-snow.ql-toolbar button:hover,.ql-snow .ql-toolbar button:hover{\n  color:#06c\n}\n\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,.ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,.ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,.ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,.ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,.ql-snow.ql-toolbar button.ql-active .ql-fill,.ql-snow .ql-toolbar button.ql-active .ql-fill,.ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,.ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,.ql-snow.ql-toolbar button:focus .ql-fill,.ql-snow .ql-toolbar button:focus .ql-fill,.ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,.ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,.ql-snow.ql-toolbar button:hover .ql-fill,.ql-snow .ql-toolbar button:hover .ql-fill,.ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill,.ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill{\n  fill:#06c\n}\n\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,.ql-snow.ql-toolbar button.ql-active .ql-stroke,.ql-snow .ql-toolbar button.ql-active .ql-stroke,.ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,.ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,.ql-snow.ql-toolbar button:focus .ql-stroke,.ql-snow .ql-toolbar button:focus .ql-stroke,.ql-snow.ql-toolbar button:focus .ql-stroke-miter,.ql-snow .ql-toolbar button:focus .ql-stroke-miter,.ql-snow.ql-toolbar button:hover .ql-stroke,.ql-snow .ql-toolbar button:hover .ql-stroke,.ql-snow.ql-toolbar button:hover .ql-stroke-miter,.ql-snow .ql-toolbar button:hover .ql-stroke-miter{\n  stroke:#06c\n}\n\n@media (pointer:coarse){\n  .ql-snow.ql-toolbar button:hover:not(.ql-active),.ql-snow .ql-toolbar button:hover:not(.ql-active){\n    color:#444\n  }\n\n  .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-fill,.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-fill,.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill{\n    fill:#444\n  }\n\n  .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke,.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke,.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter{\n    stroke:#444\n  }\n}\n\n.ql-snow,.ql-snow *{\n  box-sizing:border-box\n}\n\n.ql-snow .ql-hidden{\n  display:none\n}\n\n.ql-snow .ql-out-bottom,.ql-snow .ql-out-top{\n  visibility:hidden\n}\n\n.ql-snow .ql-tooltip{\n  position:absolute;\n  transform:translateY(10px)\n}\n\n.ql-snow .ql-tooltip a{\n  cursor:pointer;\n  text-decoration:none\n}\n\n.ql-snow .ql-tooltip.ql-flip{\n  transform:translateY(-10px)\n}\n\n.ql-snow .ql-formats{\n  display:inline-block;\n  vertical-align:middle\n}\n\n.ql-snow .ql-formats:after{\n  clear:both;\n  content:\"\";\n  display:table\n}\n\n.ql-snow .ql-stroke{\n  fill:none;\n  stroke:#444;\n  stroke-linecap:round;\n  stroke-linejoin:round;\n  stroke-width:2\n}\n\n.ql-snow .ql-stroke-miter{\n  fill:none;\n  stroke:#444;\n  stroke-miterlimit:10;\n  stroke-width:2\n}\n\n.ql-snow .ql-fill,.ql-snow .ql-stroke.ql-fill{\n  fill:#444\n}\n\n.ql-snow .ql-empty{\n  fill:none\n}\n\n.ql-snow .ql-even{\n  fill-rule:evenodd\n}\n\n.ql-snow .ql-stroke.ql-thin,.ql-snow .ql-thin{\n  stroke-width:1\n}\n\n.ql-snow .ql-transparent{\n  opacity:.4\n}\n\n.ql-snow .ql-direction svg:last-child{\n  display:none\n}\n\n.ql-snow .ql-direction.ql-active svg:last-child{\n  display:inline\n}\n\n.ql-snow .ql-direction.ql-active svg:first-child{\n  display:none\n}\n\n.ql-snow .ql-editor h1{\n  font-size:2em\n}\n\n.ql-snow .ql-editor h2{\n  font-size:1.5em\n}\n\n.ql-snow .ql-editor h3{\n  font-size:1.17em\n}\n\n.ql-snow .ql-editor h4{\n  font-size:1em\n}\n\n.ql-snow .ql-editor h5{\n  font-size:.83em\n}\n\n.ql-snow .ql-editor h6{\n  font-size:.67em\n}\n\n.ql-snow .ql-editor a{\n  text-decoration:underline\n}\n\n.ql-snow .ql-editor blockquote{\n  border-left:4px solid #ccc;\n  margin-bottom:5px;\n  margin-top:5px;\n  padding-left:16px\n}\n\n.ql-snow .ql-editor code,.ql-snow .ql-editor pre{\n  background-color:#f0f0f0;\n  border-radius:3px\n}\n\n.ql-snow .ql-editor pre{\n  white-space:pre-wrap;\n  margin-bottom:5px;\n  margin-top:5px;\n  padding:5px 10px\n}\n\n.ql-snow .ql-editor code{\n  font-size:85%;\n  padding:2px 4px\n}\n\n.ql-snow .ql-editor pre.ql-syntax{\n  background-color:#23241f;\n  color:#f8f8f2;\n  overflow:visible\n}\n\n.ql-snow .ql-editor img{\n  max-width:100%\n}\n\n.ql-snow .ql-picker{\n  color:#444;\n  display:inline-block;\n  float:left;\n  font-size:14px;\n  font-weight:500;\n  height:24px;\n  position:relative;\n  vertical-align:middle\n}\n\n.ql-snow .ql-picker-label{\n  cursor:pointer;\n  display:inline-block;\n  height:100%;\n  padding-left:8px;\n  padding-right:2px;\n  position:relative;\n  width:100%\n}\n\n.ql-snow .ql-picker-label:before{\n  display:inline-block;\n  line-height:22px\n}\n\n.ql-snow .ql-picker-options{\n  background-color:#fff;\n  display:none;\n  min-width:100%;\n  padding:4px 8px;\n  position:absolute;\n  white-space:nowrap\n}\n\n.ql-snow .ql-picker-options .ql-picker-item{\n  cursor:pointer;\n  display:block;\n  padding-bottom:5px;\n  padding-top:5px\n}\n\n.ql-snow .ql-picker.ql-expanded .ql-picker-label{\n  color:#ccc;\n  z-index:2\n}\n\n.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill{\n  fill:#ccc\n}\n\n.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke{\n  stroke:#ccc\n}\n\n.ql-snow .ql-picker.ql-expanded .ql-picker-options{\n  display:block;\n  margin-top:-1px;\n  top:100%;\n  z-index:1\n}\n\n.ql-snow .ql-color-picker,.ql-snow .ql-icon-picker{\n  width:28px\n}\n\n.ql-snow .ql-color-picker .ql-picker-label,.ql-snow .ql-icon-picker .ql-picker-label{\n  padding:2px 4px\n}\n\n.ql-snow .ql-color-picker .ql-picker-label svg,.ql-snow .ql-icon-picker .ql-picker-label svg{\n  right:4px\n}\n\n.ql-snow .ql-icon-picker .ql-picker-options{\n  padding:4px 0\n}\n\n.ql-snow .ql-icon-picker .ql-picker-item{\n  height:24px;\n  width:24px;\n  padding:2px 4px\n}\n\n.ql-snow .ql-color-picker .ql-picker-options{\n  padding:3px 5px;\n  width:152px\n}\n\n.ql-snow .ql-color-picker .ql-picker-item{\n  border:1px solid transparent;\n  float:left;\n  height:16px;\n  margin:2px;\n  padding:0;\n  width:16px\n}\n\n.ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg{\n  position:absolute;\n  margin-top:-9px;\n  right:0;\n  top:50%;\n  width:18px\n}\n\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=\"\"]):before,.ql-snow .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=\"\"]):before,.ql-snow .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=\"\"]):before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=\"\"]):before,.ql-snow .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=\"\"]):before,.ql-snow .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=\"\"]):before{\n  content:attr(data-label)\n}\n\n.ql-snow .ql-picker.ql-header{\n  width:98px\n}\n\n.ql-snow .ql-picker.ql-header .ql-picker-item:before,.ql-snow .ql-picker.ql-header .ql-picker-label:before{\n  content:\"Normal\"\n}\n\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]:before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"1\"]:before{\n  content:\"Heading 1\"\n}\n\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]:before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"2\"]:before{\n  content:\"Heading 2\"\n}\n\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]:before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"3\"]:before{\n  content:\"Heading 3\"\n}\n\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]:before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"4\"]:before{\n  content:\"Heading 4\"\n}\n\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]:before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"5\"]:before{\n  content:\"Heading 5\"\n}\n\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]:before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"6\"]:before{\n  content:\"Heading 6\"\n}\n\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]:before{\n  font-size:2em\n}\n\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]:before{\n  font-size:1.5em\n}\n\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]:before{\n  font-size:1.17em\n}\n\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]:before{\n  font-size:1em\n}\n\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]:before{\n  font-size:.83em\n}\n\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]:before{\n  font-size:.67em\n}\n\n.ql-snow .ql-picker.ql-font{\n  width:108px\n}\n\n.ql-snow .ql-picker.ql-font .ql-picker-item:before,.ql-snow .ql-picker.ql-font .ql-picker-label:before{\n  content:\"Sans Serif\"\n}\n\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]:before,.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=serif]:before{\n  content:\"Serif\"\n}\n\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]:before,.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=monospace]:before{\n  content:\"Monospace\"\n}\n\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]:before{\n  font-family:Georgia,Times New Roman,serif\n}\n\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]:before{\n  font-family:Monaco,Courier New,monospace\n}\n\n.ql-snow .ql-picker.ql-size{\n  width:98px\n}\n\n.ql-snow .ql-picker.ql-size .ql-picker-item:before,.ql-snow .ql-picker.ql-size .ql-picker-label:before{\n  content:\"Normal\"\n}\n\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]:before,.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=small]:before{\n  content:\"Small\"\n}\n\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]:before,.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=large]:before{\n  content:\"Large\"\n}\n\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]:before,.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=huge]:before{\n  content:\"Huge\"\n}\n\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]:before{\n  font-size:10px\n}\n\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]:before{\n  font-size:18px\n}\n\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]:before{\n  font-size:32px\n}\n\n.ql-snow .ql-color-picker.ql-background .ql-picker-item{\n  background-color:#fff\n}\n\n.ql-snow .ql-color-picker.ql-color .ql-picker-item{\n  background-color:#000\n}\n\n.ql-toolbar.ql-snow{\n  border:1px solid #ccc;\n  box-sizing:border-box;\n  font-family:\"Helvetica Neue\",\"Helvetica\",\"Arial\",sans-serif;\n  padding:8px\n}\n\n.ql-toolbar.ql-snow .ql-formats{\n  margin-right:15px\n}\n\n.ql-toolbar.ql-snow .ql-picker-label{\n  border:1px solid transparent\n}\n\n.ql-toolbar.ql-snow .ql-picker-options{\n  border:1px solid transparent;\n  box-shadow:0 2px 8px rgba(0,0,0,.2)\n}\n\n.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label,.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options{\n  border-color:#ccc\n}\n\n.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item.ql-selected,.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item:hover{\n  border-color:#000\n}\n\n.ql-toolbar.ql-snow+.ql-container.ql-snow{\n  border-top:0\n}\n\n.ql-snow .ql-tooltip{\n  background-color:#fff;\n  border:1px solid #ccc;\n  box-shadow:0 0 5px #ddd;\n  color:#444;\n  padding:5px 12px;\n  white-space:nowrap\n}\n\n.ql-snow .ql-tooltip:before{\n  content:\"Visit URL:\";\n  line-height:26px;\n  margin-right:8px\n}\n\n.ql-snow .ql-tooltip input[type=text]{\n  display:none;\n  border:1px solid #ccc;\n  font-size:13px;\n  height:26px;\n  margin:0;\n  padding:3px 5px;\n  width:170px\n}\n\n.ql-snow .ql-tooltip a.ql-preview{\n  display:inline-block;\n  max-width:200px;\n  overflow-x:hidden;\n  text-overflow:ellipsis;\n  vertical-align:top\n}\n\n.ql-snow .ql-tooltip a.ql-action:after{\n  border-right:1px solid #ccc;\n  content:\"Edit\";\n  margin-left:16px;\n  padding-right:8px\n}\n\n.ql-snow .ql-tooltip a.ql-remove:before{\n  content:\"Remove\";\n  margin-left:8px\n}\n\n.ql-snow .ql-tooltip a{\n  line-height:26px\n}\n\n.ql-snow .ql-tooltip.ql-editing a.ql-preview,.ql-snow .ql-tooltip.ql-editing a.ql-remove{\n  display:none\n}\n\n.ql-snow .ql-tooltip.ql-editing input[type=text]{\n  display:inline-block\n}\n\n.ql-snow .ql-tooltip.ql-editing a.ql-action:after{\n  border-right:0;\n  content:\"Save\";\n  padding-right:0\n}\n\n.ql-snow .ql-tooltip[data-mode=link]:before{\n  content:\"Enter link:\"\n}\n\n.ql-snow .ql-tooltip[data-mode=formula]:before{\n  content:\"Enter formula:\"\n}\n\n.ql-snow .ql-tooltip[data-mode=video]:before{\n  content:\"Enter video:\"\n}\n\n.ql-snow a{\n  color:#06c\n}\n\n.ql-container.ql-snow{\n  border:1px solid #ccc\n}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(46);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4).default("c6168274", content, true)

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * Quill Editor v1.3.7\n * https://quilljs.com/\n * Copyright (c) 2014, Jason Chen\n * Copyright (c) 2013, salesforce.com\n */\n\n.ql-container{\n  box-sizing:border-box;\n  font-family:Helvetica,Arial,sans-serif;\n  font-size:13px;\n  height:100%;\n  margin:0;\n  position:relative\n}\n\n.ql-container.ql-disabled .ql-tooltip{\n  visibility:hidden\n}\n\n.ql-container.ql-disabled .ql-editor ul[data-checked]>li:before{\n  pointer-events:none\n}\n\n.ql-clipboard{\n  left:-100000px;\n  height:1px;\n  overflow-y:hidden;\n  position:absolute;\n  top:50%\n}\n\n.ql-clipboard p{\n  margin:0;\n  padding:0\n}\n\n.ql-editor{\n  box-sizing:border-box;\n  line-height:1.42;\n  height:100%;\n  outline:none;\n  overflow-y:auto;\n  padding:12px 15px;\n  -o-tab-size:4;\n     tab-size:4;\n  -moz-tab-size:4;\n  text-align:left;\n  white-space:pre-wrap;\n  word-wrap:break-word\n}\n\n.ql-editor>*{\n  cursor:text\n}\n\n.ql-editor blockquote,.ql-editor h1,.ql-editor h2,.ql-editor h3,.ql-editor h4,.ql-editor h5,.ql-editor h6,.ql-editor ol,.ql-editor p,.ql-editor pre,.ql-editor ul{\n  margin:0;\n  padding:0;\n  counter-reset:list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9\n}\n\n.ql-editor ol,.ql-editor ul{\n  padding-left:1.5em\n}\n\n.ql-editor ol>li,.ql-editor ul>li{\n  list-style-type:none\n}\n\n.ql-editor ul>li:before{\n  content:\"\\2022\"\n}\n\n.ql-editor ul[data-checked=false],.ql-editor ul[data-checked=true]{\n  pointer-events:none\n}\n\n.ql-editor ul[data-checked=false]>li *,.ql-editor ul[data-checked=true]>li *{\n  pointer-events:all\n}\n\n.ql-editor ul[data-checked=false]>li:before,.ql-editor ul[data-checked=true]>li:before{\n  color:#777;\n  cursor:pointer;\n  pointer-events:all\n}\n\n.ql-editor ul[data-checked=true]>li:before{\n  content:\"\\2611\"\n}\n\n.ql-editor ul[data-checked=false]>li:before{\n  content:\"\\2610\"\n}\n\n.ql-editor li:before{\n  display:inline-block;\n  white-space:nowrap;\n  width:1.2em\n}\n\n.ql-editor li:not(.ql-direction-rtl):before{\n  margin-left:-1.5em;\n  margin-right:.3em;\n  text-align:right\n}\n\n.ql-editor li.ql-direction-rtl:before{\n  margin-left:.3em;\n  margin-right:-1.5em\n}\n\n.ql-editor ol li:not(.ql-direction-rtl),.ql-editor ul li:not(.ql-direction-rtl){\n  padding-left:1.5em\n}\n\n.ql-editor ol li.ql-direction-rtl,.ql-editor ul li.ql-direction-rtl{\n  padding-right:1.5em\n}\n\n.ql-editor ol li{\n  counter-reset:list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n  counter-increment:list-0\n}\n\n.ql-editor ol li:before{\n  content:counter(list-0,decimal) \". \"\n}\n\n.ql-editor ol li.ql-indent-1{\n  counter-increment:list-1\n}\n\n.ql-editor ol li.ql-indent-1:before{\n  content:counter(list-1,lower-alpha) \". \"\n}\n\n.ql-editor ol li.ql-indent-1{\n  counter-reset:list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9\n}\n\n.ql-editor ol li.ql-indent-2{\n  counter-increment:list-2\n}\n\n.ql-editor ol li.ql-indent-2:before{\n  content:counter(list-2,lower-roman) \". \"\n}\n\n.ql-editor ol li.ql-indent-2{\n  counter-reset:list-3 list-4 list-5 list-6 list-7 list-8 list-9\n}\n\n.ql-editor ol li.ql-indent-3{\n  counter-increment:list-3\n}\n\n.ql-editor ol li.ql-indent-3:before{\n  content:counter(list-3,decimal) \". \"\n}\n\n.ql-editor ol li.ql-indent-3{\n  counter-reset:list-4 list-5 list-6 list-7 list-8 list-9\n}\n\n.ql-editor ol li.ql-indent-4{\n  counter-increment:list-4\n}\n\n.ql-editor ol li.ql-indent-4:before{\n  content:counter(list-4,lower-alpha) \". \"\n}\n\n.ql-editor ol li.ql-indent-4{\n  counter-reset:list-5 list-6 list-7 list-8 list-9\n}\n\n.ql-editor ol li.ql-indent-5{\n  counter-increment:list-5\n}\n\n.ql-editor ol li.ql-indent-5:before{\n  content:counter(list-5,lower-roman) \". \"\n}\n\n.ql-editor ol li.ql-indent-5{\n  counter-reset:list-6 list-7 list-8 list-9\n}\n\n.ql-editor ol li.ql-indent-6{\n  counter-increment:list-6\n}\n\n.ql-editor ol li.ql-indent-6:before{\n  content:counter(list-6,decimal) \". \"\n}\n\n.ql-editor ol li.ql-indent-6{\n  counter-reset:list-7 list-8 list-9\n}\n\n.ql-editor ol li.ql-indent-7{\n  counter-increment:list-7\n}\n\n.ql-editor ol li.ql-indent-7:before{\n  content:counter(list-7,lower-alpha) \". \"\n}\n\n.ql-editor ol li.ql-indent-7{\n  counter-reset:list-8 list-9\n}\n\n.ql-editor ol li.ql-indent-8{\n  counter-increment:list-8\n}\n\n.ql-editor ol li.ql-indent-8:before{\n  content:counter(list-8,lower-roman) \". \"\n}\n\n.ql-editor ol li.ql-indent-8{\n  counter-reset:list-9\n}\n\n.ql-editor ol li.ql-indent-9{\n  counter-increment:list-9\n}\n\n.ql-editor ol li.ql-indent-9:before{\n  content:counter(list-9,decimal) \". \"\n}\n\n.ql-editor .ql-indent-1:not(.ql-direction-rtl){\n  padding-left:3em\n}\n\n.ql-editor li.ql-indent-1:not(.ql-direction-rtl){\n  padding-left:4.5em\n}\n\n.ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right{\n  padding-right:3em\n}\n\n.ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right{\n  padding-right:4.5em\n}\n\n.ql-editor .ql-indent-2:not(.ql-direction-rtl){\n  padding-left:6em\n}\n\n.ql-editor li.ql-indent-2:not(.ql-direction-rtl){\n  padding-left:7.5em\n}\n\n.ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right{\n  padding-right:6em\n}\n\n.ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right{\n  padding-right:7.5em\n}\n\n.ql-editor .ql-indent-3:not(.ql-direction-rtl){\n  padding-left:9em\n}\n\n.ql-editor li.ql-indent-3:not(.ql-direction-rtl){\n  padding-left:10.5em\n}\n\n.ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right{\n  padding-right:9em\n}\n\n.ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right{\n  padding-right:10.5em\n}\n\n.ql-editor .ql-indent-4:not(.ql-direction-rtl){\n  padding-left:12em\n}\n\n.ql-editor li.ql-indent-4:not(.ql-direction-rtl){\n  padding-left:13.5em\n}\n\n.ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right{\n  padding-right:12em\n}\n\n.ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right{\n  padding-right:13.5em\n}\n\n.ql-editor .ql-indent-5:not(.ql-direction-rtl){\n  padding-left:15em\n}\n\n.ql-editor li.ql-indent-5:not(.ql-direction-rtl){\n  padding-left:16.5em\n}\n\n.ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right{\n  padding-right:15em\n}\n\n.ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right{\n  padding-right:16.5em\n}\n\n.ql-editor .ql-indent-6:not(.ql-direction-rtl){\n  padding-left:18em\n}\n\n.ql-editor li.ql-indent-6:not(.ql-direction-rtl){\n  padding-left:19.5em\n}\n\n.ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right{\n  padding-right:18em\n}\n\n.ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right{\n  padding-right:19.5em\n}\n\n.ql-editor .ql-indent-7:not(.ql-direction-rtl){\n  padding-left:21em\n}\n\n.ql-editor li.ql-indent-7:not(.ql-direction-rtl){\n  padding-left:22.5em\n}\n\n.ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right{\n  padding-right:21em\n}\n\n.ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right{\n  padding-right:22.5em\n}\n\n.ql-editor .ql-indent-8:not(.ql-direction-rtl){\n  padding-left:24em\n}\n\n.ql-editor li.ql-indent-8:not(.ql-direction-rtl){\n  padding-left:25.5em\n}\n\n.ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right{\n  padding-right:24em\n}\n\n.ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right{\n  padding-right:25.5em\n}\n\n.ql-editor .ql-indent-9:not(.ql-direction-rtl){\n  padding-left:27em\n}\n\n.ql-editor li.ql-indent-9:not(.ql-direction-rtl){\n  padding-left:28.5em\n}\n\n.ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right{\n  padding-right:27em\n}\n\n.ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right{\n  padding-right:28.5em\n}\n\n.ql-editor .ql-video{\n  display:block;\n  max-width:100%\n}\n\n.ql-editor .ql-video.ql-align-center{\n  margin:0 auto\n}\n\n.ql-editor .ql-video.ql-align-right{\n  margin:0 0 0 auto\n}\n\n.ql-editor .ql-bg-black{\n  background-color:#000\n}\n\n.ql-editor .ql-bg-red{\n  background-color:#e60000\n}\n\n.ql-editor .ql-bg-orange{\n  background-color:#f90\n}\n\n.ql-editor .ql-bg-yellow{\n  background-color:#ff0\n}\n\n.ql-editor .ql-bg-green{\n  background-color:#008a00\n}\n\n.ql-editor .ql-bg-blue{\n  background-color:#06c\n}\n\n.ql-editor .ql-bg-purple{\n  background-color:#93f\n}\n\n.ql-editor .ql-color-white{\n  color:#fff\n}\n\n.ql-editor .ql-color-red{\n  color:#e60000\n}\n\n.ql-editor .ql-color-orange{\n  color:#f90\n}\n\n.ql-editor .ql-color-yellow{\n  color:#ff0\n}\n\n.ql-editor .ql-color-green{\n  color:#008a00\n}\n\n.ql-editor .ql-color-blue{\n  color:#06c\n}\n\n.ql-editor .ql-color-purple{\n  color:#93f\n}\n\n.ql-editor .ql-font-serif{\n  font-family:Georgia,Times New Roman,serif\n}\n\n.ql-editor .ql-font-monospace{\n  font-family:Monaco,Courier New,monospace\n}\n\n.ql-editor .ql-size-small{\n  font-size:.75em\n}\n\n.ql-editor .ql-size-large{\n  font-size:1.5em\n}\n\n.ql-editor .ql-size-huge{\n  font-size:2.5em\n}\n\n.ql-editor .ql-direction-rtl{\n  direction:rtl;\n  text-align:inherit\n}\n\n.ql-editor .ql-align-center{\n  text-align:center\n}\n\n.ql-editor .ql-align-justify{\n  text-align:justify\n}\n\n.ql-editor .ql-align-right{\n  text-align:right\n}\n\n.ql-editor.ql-blank:before{\n  color:rgba(0,0,0,.6);\n  content:attr(data-placeholder);\n  font-style:italic;\n  left:15px;\n  pointer-events:none;\n  position:absolute;\n  right:15px\n}\n\n.ql-bubble.ql-toolbar:after,.ql-bubble .ql-toolbar:after{\n  clear:both;\n  content:\"\";\n  display:table\n}\n\n.ql-bubble.ql-toolbar button,.ql-bubble .ql-toolbar button{\n  background:none;\n  border:none;\n  cursor:pointer;\n  display:inline-block;\n  float:left;\n  height:24px;\n  padding:3px 5px;\n  width:28px\n}\n\n.ql-bubble.ql-toolbar button svg,.ql-bubble .ql-toolbar button svg{\n  float:left;\n  height:100%\n}\n\n.ql-bubble.ql-toolbar button:active:hover,.ql-bubble .ql-toolbar button:active:hover{\n  outline:none\n}\n\n.ql-bubble.ql-toolbar input.ql-image[type=file],.ql-bubble .ql-toolbar input.ql-image[type=file]{\n  display:none\n}\n\n.ql-bubble.ql-toolbar .ql-picker-item.ql-selected,.ql-bubble .ql-toolbar .ql-picker-item.ql-selected,.ql-bubble.ql-toolbar .ql-picker-item:hover,.ql-bubble .ql-toolbar .ql-picker-item:hover,.ql-bubble.ql-toolbar .ql-picker-label.ql-active,.ql-bubble .ql-toolbar .ql-picker-label.ql-active,.ql-bubble.ql-toolbar .ql-picker-label:hover,.ql-bubble .ql-toolbar .ql-picker-label:hover,.ql-bubble.ql-toolbar button.ql-active,.ql-bubble .ql-toolbar button.ql-active,.ql-bubble.ql-toolbar button:focus,.ql-bubble .ql-toolbar button:focus,.ql-bubble.ql-toolbar button:hover,.ql-bubble .ql-toolbar button:hover{\n  color:#fff\n}\n\n.ql-bubble.ql-toolbar .ql-picker-item.ql-selected .ql-fill,.ql-bubble .ql-toolbar .ql-picker-item.ql-selected .ql-fill,.ql-bubble.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,.ql-bubble .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,.ql-bubble.ql-toolbar .ql-picker-item:hover .ql-fill,.ql-bubble .ql-toolbar .ql-picker-item:hover .ql-fill,.ql-bubble.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,.ql-bubble .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,.ql-bubble.ql-toolbar .ql-picker-label.ql-active .ql-fill,.ql-bubble .ql-toolbar .ql-picker-label.ql-active .ql-fill,.ql-bubble.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,.ql-bubble .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,.ql-bubble.ql-toolbar .ql-picker-label:hover .ql-fill,.ql-bubble .ql-toolbar .ql-picker-label:hover .ql-fill,.ql-bubble.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,.ql-bubble .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,.ql-bubble.ql-toolbar button.ql-active .ql-fill,.ql-bubble .ql-toolbar button.ql-active .ql-fill,.ql-bubble.ql-toolbar button.ql-active .ql-stroke.ql-fill,.ql-bubble .ql-toolbar button.ql-active .ql-stroke.ql-fill,.ql-bubble.ql-toolbar button:focus .ql-fill,.ql-bubble .ql-toolbar button:focus .ql-fill,.ql-bubble.ql-toolbar button:focus .ql-stroke.ql-fill,.ql-bubble .ql-toolbar button:focus .ql-stroke.ql-fill,.ql-bubble.ql-toolbar button:hover .ql-fill,.ql-bubble .ql-toolbar button:hover .ql-fill,.ql-bubble.ql-toolbar button:hover .ql-stroke.ql-fill,.ql-bubble .ql-toolbar button:hover .ql-stroke.ql-fill{\n  fill:#fff\n}\n\n.ql-bubble.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,.ql-bubble .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,.ql-bubble.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,.ql-bubble .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,.ql-bubble.ql-toolbar .ql-picker-item:hover .ql-stroke,.ql-bubble .ql-toolbar .ql-picker-item:hover .ql-stroke,.ql-bubble.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,.ql-bubble .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,.ql-bubble.ql-toolbar .ql-picker-label.ql-active .ql-stroke,.ql-bubble .ql-toolbar .ql-picker-label.ql-active .ql-stroke,.ql-bubble.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,.ql-bubble .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,.ql-bubble.ql-toolbar .ql-picker-label:hover .ql-stroke,.ql-bubble .ql-toolbar .ql-picker-label:hover .ql-stroke,.ql-bubble.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,.ql-bubble .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,.ql-bubble.ql-toolbar button.ql-active .ql-stroke,.ql-bubble .ql-toolbar button.ql-active .ql-stroke,.ql-bubble.ql-toolbar button.ql-active .ql-stroke-miter,.ql-bubble .ql-toolbar button.ql-active .ql-stroke-miter,.ql-bubble.ql-toolbar button:focus .ql-stroke,.ql-bubble .ql-toolbar button:focus .ql-stroke,.ql-bubble.ql-toolbar button:focus .ql-stroke-miter,.ql-bubble .ql-toolbar button:focus .ql-stroke-miter,.ql-bubble.ql-toolbar button:hover .ql-stroke,.ql-bubble .ql-toolbar button:hover .ql-stroke,.ql-bubble.ql-toolbar button:hover .ql-stroke-miter,.ql-bubble .ql-toolbar button:hover .ql-stroke-miter{\n  stroke:#fff\n}\n\n@media (pointer:coarse){\n  .ql-bubble.ql-toolbar button:hover:not(.ql-active),.ql-bubble .ql-toolbar button:hover:not(.ql-active){\n    color:#ccc\n  }\n\n  .ql-bubble.ql-toolbar button:hover:not(.ql-active) .ql-fill,.ql-bubble .ql-toolbar button:hover:not(.ql-active) .ql-fill,.ql-bubble.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,.ql-bubble .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill{\n    fill:#ccc\n  }\n\n  .ql-bubble.ql-toolbar button:hover:not(.ql-active) .ql-stroke,.ql-bubble .ql-toolbar button:hover:not(.ql-active) .ql-stroke,.ql-bubble.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,.ql-bubble .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter{\n    stroke:#ccc\n  }\n}\n\n.ql-bubble,.ql-bubble *{\n  box-sizing:border-box\n}\n\n.ql-bubble .ql-hidden{\n  display:none\n}\n\n.ql-bubble .ql-out-bottom,.ql-bubble .ql-out-top{\n  visibility:hidden\n}\n\n.ql-bubble .ql-tooltip{\n  position:absolute;\n  transform:translateY(10px)\n}\n\n.ql-bubble .ql-tooltip a{\n  cursor:pointer;\n  text-decoration:none\n}\n\n.ql-bubble .ql-tooltip.ql-flip{\n  transform:translateY(-10px)\n}\n\n.ql-bubble .ql-formats{\n  display:inline-block;\n  vertical-align:middle\n}\n\n.ql-bubble .ql-formats:after{\n  clear:both;\n  content:\"\";\n  display:table\n}\n\n.ql-bubble .ql-stroke{\n  fill:none;\n  stroke:#ccc;\n  stroke-linecap:round;\n  stroke-linejoin:round;\n  stroke-width:2\n}\n\n.ql-bubble .ql-stroke-miter{\n  fill:none;\n  stroke:#ccc;\n  stroke-miterlimit:10;\n  stroke-width:2\n}\n\n.ql-bubble .ql-fill,.ql-bubble .ql-stroke.ql-fill{\n  fill:#ccc\n}\n\n.ql-bubble .ql-empty{\n  fill:none\n}\n\n.ql-bubble .ql-even{\n  fill-rule:evenodd\n}\n\n.ql-bubble .ql-stroke.ql-thin,.ql-bubble .ql-thin{\n  stroke-width:1\n}\n\n.ql-bubble .ql-transparent{\n  opacity:.4\n}\n\n.ql-bubble .ql-direction svg:last-child{\n  display:none\n}\n\n.ql-bubble .ql-direction.ql-active svg:last-child{\n  display:inline\n}\n\n.ql-bubble .ql-direction.ql-active svg:first-child{\n  display:none\n}\n\n.ql-bubble .ql-editor h1{\n  font-size:2em\n}\n\n.ql-bubble .ql-editor h2{\n  font-size:1.5em\n}\n\n.ql-bubble .ql-editor h3{\n  font-size:1.17em\n}\n\n.ql-bubble .ql-editor h4{\n  font-size:1em\n}\n\n.ql-bubble .ql-editor h5{\n  font-size:.83em\n}\n\n.ql-bubble .ql-editor h6{\n  font-size:.67em\n}\n\n.ql-bubble .ql-editor a{\n  text-decoration:underline\n}\n\n.ql-bubble .ql-editor blockquote{\n  border-left:4px solid #ccc;\n  margin-bottom:5px;\n  margin-top:5px;\n  padding-left:16px\n}\n\n.ql-bubble .ql-editor code,.ql-bubble .ql-editor pre{\n  background-color:#f0f0f0;\n  border-radius:3px\n}\n\n.ql-bubble .ql-editor pre{\n  white-space:pre-wrap;\n  margin-bottom:5px;\n  margin-top:5px;\n  padding:5px 10px\n}\n\n.ql-bubble .ql-editor code{\n  font-size:85%;\n  padding:2px 4px\n}\n\n.ql-bubble .ql-editor pre.ql-syntax{\n  background-color:#23241f;\n  color:#f8f8f2;\n  overflow:visible\n}\n\n.ql-bubble .ql-editor img{\n  max-width:100%\n}\n\n.ql-bubble .ql-picker{\n  color:#ccc;\n  display:inline-block;\n  float:left;\n  font-size:14px;\n  font-weight:500;\n  height:24px;\n  position:relative;\n  vertical-align:middle\n}\n\n.ql-bubble .ql-picker-label{\n  cursor:pointer;\n  display:inline-block;\n  height:100%;\n  padding-left:8px;\n  padding-right:2px;\n  position:relative;\n  width:100%\n}\n\n.ql-bubble .ql-picker-label:before{\n  display:inline-block;\n  line-height:22px\n}\n\n.ql-bubble .ql-picker-options{\n  background-color:#444;\n  display:none;\n  min-width:100%;\n  padding:4px 8px;\n  position:absolute;\n  white-space:nowrap\n}\n\n.ql-bubble .ql-picker-options .ql-picker-item{\n  cursor:pointer;\n  display:block;\n  padding-bottom:5px;\n  padding-top:5px\n}\n\n.ql-bubble .ql-picker.ql-expanded .ql-picker-label{\n  color:#777;\n  z-index:2\n}\n\n.ql-bubble .ql-picker.ql-expanded .ql-picker-label .ql-fill{\n  fill:#777\n}\n\n.ql-bubble .ql-picker.ql-expanded .ql-picker-label .ql-stroke{\n  stroke:#777\n}\n\n.ql-bubble .ql-picker.ql-expanded .ql-picker-options{\n  display:block;\n  margin-top:-1px;\n  top:100%;\n  z-index:1\n}\n\n.ql-bubble .ql-color-picker,.ql-bubble .ql-icon-picker{\n  width:28px\n}\n\n.ql-bubble .ql-color-picker .ql-picker-label,.ql-bubble .ql-icon-picker .ql-picker-label{\n  padding:2px 4px\n}\n\n.ql-bubble .ql-color-picker .ql-picker-label svg,.ql-bubble .ql-icon-picker .ql-picker-label svg{\n  right:4px\n}\n\n.ql-bubble .ql-icon-picker .ql-picker-options{\n  padding:4px 0\n}\n\n.ql-bubble .ql-icon-picker .ql-picker-item{\n  height:24px;\n  width:24px;\n  padding:2px 4px\n}\n\n.ql-bubble .ql-color-picker .ql-picker-options{\n  padding:3px 5px;\n  width:152px\n}\n\n.ql-bubble .ql-color-picker .ql-picker-item{\n  border:1px solid transparent;\n  float:left;\n  height:16px;\n  margin:2px;\n  padding:0;\n  width:16px\n}\n\n.ql-bubble .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg{\n  position:absolute;\n  margin-top:-9px;\n  right:0;\n  top:50%;\n  width:18px\n}\n\n.ql-bubble .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=\"\"]):before,.ql-bubble .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=\"\"]):before,.ql-bubble .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=\"\"]):before,.ql-bubble .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=\"\"]):before,.ql-bubble .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=\"\"]):before,.ql-bubble .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=\"\"]):before{\n  content:attr(data-label)\n}\n\n.ql-bubble .ql-picker.ql-header{\n  width:98px\n}\n\n.ql-bubble .ql-picker.ql-header .ql-picker-item:before,.ql-bubble .ql-picker.ql-header .ql-picker-label:before{\n  content:\"Normal\"\n}\n\n.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]:before,.ql-bubble .ql-picker.ql-header .ql-picker-label[data-value=\"1\"]:before{\n  content:\"Heading 1\"\n}\n\n.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]:before,.ql-bubble .ql-picker.ql-header .ql-picker-label[data-value=\"2\"]:before{\n  content:\"Heading 2\"\n}\n\n.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]:before,.ql-bubble .ql-picker.ql-header .ql-picker-label[data-value=\"3\"]:before{\n  content:\"Heading 3\"\n}\n\n.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]:before,.ql-bubble .ql-picker.ql-header .ql-picker-label[data-value=\"4\"]:before{\n  content:\"Heading 4\"\n}\n\n.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]:before,.ql-bubble .ql-picker.ql-header .ql-picker-label[data-value=\"5\"]:before{\n  content:\"Heading 5\"\n}\n\n.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]:before,.ql-bubble .ql-picker.ql-header .ql-picker-label[data-value=\"6\"]:before{\n  content:\"Heading 6\"\n}\n\n.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]:before{\n  font-size:2em\n}\n\n.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]:before{\n  font-size:1.5em\n}\n\n.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]:before{\n  font-size:1.17em\n}\n\n.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]:before{\n  font-size:1em\n}\n\n.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]:before{\n  font-size:.83em\n}\n\n.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]:before{\n  font-size:.67em\n}\n\n.ql-bubble .ql-picker.ql-font{\n  width:108px\n}\n\n.ql-bubble .ql-picker.ql-font .ql-picker-item:before,.ql-bubble .ql-picker.ql-font .ql-picker-label:before{\n  content:\"Sans Serif\"\n}\n\n.ql-bubble .ql-picker.ql-font .ql-picker-item[data-value=serif]:before,.ql-bubble .ql-picker.ql-font .ql-picker-label[data-value=serif]:before{\n  content:\"Serif\"\n}\n\n.ql-bubble .ql-picker.ql-font .ql-picker-item[data-value=monospace]:before,.ql-bubble .ql-picker.ql-font .ql-picker-label[data-value=monospace]:before{\n  content:\"Monospace\"\n}\n\n.ql-bubble .ql-picker.ql-font .ql-picker-item[data-value=serif]:before{\n  font-family:Georgia,Times New Roman,serif\n}\n\n.ql-bubble .ql-picker.ql-font .ql-picker-item[data-value=monospace]:before{\n  font-family:Monaco,Courier New,monospace\n}\n\n.ql-bubble .ql-picker.ql-size{\n  width:98px\n}\n\n.ql-bubble .ql-picker.ql-size .ql-picker-item:before,.ql-bubble .ql-picker.ql-size .ql-picker-label:before{\n  content:\"Normal\"\n}\n\n.ql-bubble .ql-picker.ql-size .ql-picker-item[data-value=small]:before,.ql-bubble .ql-picker.ql-size .ql-picker-label[data-value=small]:before{\n  content:\"Small\"\n}\n\n.ql-bubble .ql-picker.ql-size .ql-picker-item[data-value=large]:before,.ql-bubble .ql-picker.ql-size .ql-picker-label[data-value=large]:before{\n  content:\"Large\"\n}\n\n.ql-bubble .ql-picker.ql-size .ql-picker-item[data-value=huge]:before,.ql-bubble .ql-picker.ql-size .ql-picker-label[data-value=huge]:before{\n  content:\"Huge\"\n}\n\n.ql-bubble .ql-picker.ql-size .ql-picker-item[data-value=small]:before{\n  font-size:10px\n}\n\n.ql-bubble .ql-picker.ql-size .ql-picker-item[data-value=large]:before{\n  font-size:18px\n}\n\n.ql-bubble .ql-picker.ql-size .ql-picker-item[data-value=huge]:before{\n  font-size:32px\n}\n\n.ql-bubble .ql-color-picker.ql-background .ql-picker-item{\n  background-color:#fff\n}\n\n.ql-bubble .ql-color-picker.ql-color .ql-picker-item{\n  background-color:#000\n}\n\n.ql-bubble .ql-toolbar .ql-formats{\n  margin:8px 12px 8px 0\n}\n\n.ql-bubble .ql-toolbar .ql-formats:first-child{\n  margin-left:12px\n}\n\n.ql-bubble .ql-color-picker svg{\n  margin:1px\n}\n\n.ql-bubble .ql-color-picker .ql-picker-item.ql-selected,.ql-bubble .ql-color-picker .ql-picker-item:hover{\n  border-color:#fff\n}\n\n.ql-bubble .ql-tooltip{\n  background-color:#444;\n  border-radius:25px;\n  color:#fff\n}\n\n.ql-bubble .ql-tooltip-arrow{\n  border-left:6px solid transparent;\n  border-right:6px solid transparent;\n  content:\" \";\n  display:block;\n  left:50%;\n  margin-left:-6px;\n  position:absolute\n}\n\n.ql-bubble .ql-tooltip:not(.ql-flip) .ql-tooltip-arrow{\n  border-bottom:6px solid #444;\n  top:-6px\n}\n\n.ql-bubble .ql-tooltip.ql-flip .ql-tooltip-arrow{\n  border-top:6px solid #444;\n  bottom:-6px\n}\n\n.ql-bubble .ql-tooltip.ql-editing .ql-tooltip-editor{\n  display:block\n}\n\n.ql-bubble .ql-tooltip.ql-editing .ql-formats{\n  visibility:hidden\n}\n\n.ql-bubble .ql-tooltip-editor{\n  display:none\n}\n\n.ql-bubble .ql-tooltip-editor input[type=text]{\n  background:transparent;\n  border:none;\n  color:#fff;\n  font-size:13px;\n  height:100%;\n  outline:none;\n  padding:10px 20px;\n  position:absolute;\n  width:100%\n}\n\n.ql-bubble .ql-tooltip-editor a{\n  top:10px;\n  position:absolute;\n  right:20px\n}\n\n.ql-bubble .ql-tooltip-editor a:before{\n  color:#ccc;\n  content:\"\\D7\";\n  font-size:16px;\n  font-weight:700\n}\n\n.ql-container.ql-bubble:not(.ql-disabled) a{\n  position:relative;\n  white-space:nowrap\n}\n\n.ql-container.ql-bubble:not(.ql-disabled) a:before{\n  background-color:#444;\n  border-radius:15px;\n  top:-5px;\n  font-size:12px;\n  color:#fff;\n  content:attr(href);\n  font-weight:400;\n  overflow:hidden;\n  padding:5px 15px;\n  text-decoration:none;\n  z-index:1\n}\n\n.ql-container.ql-bubble:not(.ql-disabled) a:after{\n  border-top:6px solid #444;\n  border-left:6px solid transparent;\n  border-right:6px solid transparent;\n  top:0;\n  content:\" \";\n  height:0;\n  width:0\n}\n\n.ql-container.ql-bubble:not(.ql-disabled) a:after,.ql-container.ql-bubble:not(.ql-disabled) a:before{\n  left:0;\n  margin-left:50%;\n  position:absolute;\n  transform:translate(-50%,-100%);\n  transition:visibility 0s ease .2s;\n  visibility:hidden\n}\n\n.ql-container.ql-bubble:not(.ql-disabled) a:hover:after,.ql-container.ql-bubble:not(.ql-disabled) a:hover:before{\n  visibility:visible\n}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(48);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4).default("2a80d0b4", content, true)

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * Quill Editor v1.3.7\n * https://quilljs.com/\n * Copyright (c) 2014, Jason Chen\n * Copyright (c) 2013, salesforce.com\n */\n\n.ql-container{\n  box-sizing:border-box;\n  font-family:Helvetica,Arial,sans-serif;\n  font-size:13px;\n  height:100%;\n  margin:0;\n  position:relative\n}\n\n.ql-container.ql-disabled .ql-tooltip{\n  visibility:hidden\n}\n\n.ql-container.ql-disabled .ql-editor ul[data-checked]>li:before{\n  pointer-events:none\n}\n\n.ql-clipboard{\n  left:-100000px;\n  height:1px;\n  overflow-y:hidden;\n  position:absolute;\n  top:50%\n}\n\n.ql-clipboard p{\n  margin:0;\n  padding:0\n}\n\n.ql-editor{\n  box-sizing:border-box;\n  line-height:1.42;\n  height:100%;\n  outline:none;\n  overflow-y:auto;\n  padding:12px 15px;\n  -o-tab-size:4;\n     tab-size:4;\n  -moz-tab-size:4;\n  text-align:left;\n  white-space:pre-wrap;\n  word-wrap:break-word\n}\n\n.ql-editor>*{\n  cursor:text\n}\n\n.ql-editor blockquote,.ql-editor h1,.ql-editor h2,.ql-editor h3,.ql-editor h4,.ql-editor h5,.ql-editor h6,.ql-editor ol,.ql-editor p,.ql-editor pre,.ql-editor ul{\n  margin:0;\n  padding:0;\n  counter-reset:list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9\n}\n\n.ql-editor ol,.ql-editor ul{\n  padding-left:1.5em\n}\n\n.ql-editor ol>li,.ql-editor ul>li{\n  list-style-type:none\n}\n\n.ql-editor ul>li:before{\n  content:\"\\2022\"\n}\n\n.ql-editor ul[data-checked=false],.ql-editor ul[data-checked=true]{\n  pointer-events:none\n}\n\n.ql-editor ul[data-checked=false]>li *,.ql-editor ul[data-checked=true]>li *{\n  pointer-events:all\n}\n\n.ql-editor ul[data-checked=false]>li:before,.ql-editor ul[data-checked=true]>li:before{\n  color:#777;\n  cursor:pointer;\n  pointer-events:all\n}\n\n.ql-editor ul[data-checked=true]>li:before{\n  content:\"\\2611\"\n}\n\n.ql-editor ul[data-checked=false]>li:before{\n  content:\"\\2610\"\n}\n\n.ql-editor li:before{\n  display:inline-block;\n  white-space:nowrap;\n  width:1.2em\n}\n\n.ql-editor li:not(.ql-direction-rtl):before{\n  margin-left:-1.5em;\n  margin-right:.3em;\n  text-align:right\n}\n\n.ql-editor li.ql-direction-rtl:before{\n  margin-left:.3em;\n  margin-right:-1.5em\n}\n\n.ql-editor ol li:not(.ql-direction-rtl),.ql-editor ul li:not(.ql-direction-rtl){\n  padding-left:1.5em\n}\n\n.ql-editor ol li.ql-direction-rtl,.ql-editor ul li.ql-direction-rtl{\n  padding-right:1.5em\n}\n\n.ql-editor ol li{\n  counter-reset:list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n  counter-increment:list-0\n}\n\n.ql-editor ol li:before{\n  content:counter(list-0,decimal) \". \"\n}\n\n.ql-editor ol li.ql-indent-1{\n  counter-increment:list-1\n}\n\n.ql-editor ol li.ql-indent-1:before{\n  content:counter(list-1,lower-alpha) \". \"\n}\n\n.ql-editor ol li.ql-indent-1{\n  counter-reset:list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9\n}\n\n.ql-editor ol li.ql-indent-2{\n  counter-increment:list-2\n}\n\n.ql-editor ol li.ql-indent-2:before{\n  content:counter(list-2,lower-roman) \". \"\n}\n\n.ql-editor ol li.ql-indent-2{\n  counter-reset:list-3 list-4 list-5 list-6 list-7 list-8 list-9\n}\n\n.ql-editor ol li.ql-indent-3{\n  counter-increment:list-3\n}\n\n.ql-editor ol li.ql-indent-3:before{\n  content:counter(list-3,decimal) \". \"\n}\n\n.ql-editor ol li.ql-indent-3{\n  counter-reset:list-4 list-5 list-6 list-7 list-8 list-9\n}\n\n.ql-editor ol li.ql-indent-4{\n  counter-increment:list-4\n}\n\n.ql-editor ol li.ql-indent-4:before{\n  content:counter(list-4,lower-alpha) \". \"\n}\n\n.ql-editor ol li.ql-indent-4{\n  counter-reset:list-5 list-6 list-7 list-8 list-9\n}\n\n.ql-editor ol li.ql-indent-5{\n  counter-increment:list-5\n}\n\n.ql-editor ol li.ql-indent-5:before{\n  content:counter(list-5,lower-roman) \". \"\n}\n\n.ql-editor ol li.ql-indent-5{\n  counter-reset:list-6 list-7 list-8 list-9\n}\n\n.ql-editor ol li.ql-indent-6{\n  counter-increment:list-6\n}\n\n.ql-editor ol li.ql-indent-6:before{\n  content:counter(list-6,decimal) \". \"\n}\n\n.ql-editor ol li.ql-indent-6{\n  counter-reset:list-7 list-8 list-9\n}\n\n.ql-editor ol li.ql-indent-7{\n  counter-increment:list-7\n}\n\n.ql-editor ol li.ql-indent-7:before{\n  content:counter(list-7,lower-alpha) \". \"\n}\n\n.ql-editor ol li.ql-indent-7{\n  counter-reset:list-8 list-9\n}\n\n.ql-editor ol li.ql-indent-8{\n  counter-increment:list-8\n}\n\n.ql-editor ol li.ql-indent-8:before{\n  content:counter(list-8,lower-roman) \". \"\n}\n\n.ql-editor ol li.ql-indent-8{\n  counter-reset:list-9\n}\n\n.ql-editor ol li.ql-indent-9{\n  counter-increment:list-9\n}\n\n.ql-editor ol li.ql-indent-9:before{\n  content:counter(list-9,decimal) \". \"\n}\n\n.ql-editor .ql-indent-1:not(.ql-direction-rtl){\n  padding-left:3em\n}\n\n.ql-editor li.ql-indent-1:not(.ql-direction-rtl){\n  padding-left:4.5em\n}\n\n.ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right{\n  padding-right:3em\n}\n\n.ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right{\n  padding-right:4.5em\n}\n\n.ql-editor .ql-indent-2:not(.ql-direction-rtl){\n  padding-left:6em\n}\n\n.ql-editor li.ql-indent-2:not(.ql-direction-rtl){\n  padding-left:7.5em\n}\n\n.ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right{\n  padding-right:6em\n}\n\n.ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right{\n  padding-right:7.5em\n}\n\n.ql-editor .ql-indent-3:not(.ql-direction-rtl){\n  padding-left:9em\n}\n\n.ql-editor li.ql-indent-3:not(.ql-direction-rtl){\n  padding-left:10.5em\n}\n\n.ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right{\n  padding-right:9em\n}\n\n.ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right{\n  padding-right:10.5em\n}\n\n.ql-editor .ql-indent-4:not(.ql-direction-rtl){\n  padding-left:12em\n}\n\n.ql-editor li.ql-indent-4:not(.ql-direction-rtl){\n  padding-left:13.5em\n}\n\n.ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right{\n  padding-right:12em\n}\n\n.ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right{\n  padding-right:13.5em\n}\n\n.ql-editor .ql-indent-5:not(.ql-direction-rtl){\n  padding-left:15em\n}\n\n.ql-editor li.ql-indent-5:not(.ql-direction-rtl){\n  padding-left:16.5em\n}\n\n.ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right{\n  padding-right:15em\n}\n\n.ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right{\n  padding-right:16.5em\n}\n\n.ql-editor .ql-indent-6:not(.ql-direction-rtl){\n  padding-left:18em\n}\n\n.ql-editor li.ql-indent-6:not(.ql-direction-rtl){\n  padding-left:19.5em\n}\n\n.ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right{\n  padding-right:18em\n}\n\n.ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right{\n  padding-right:19.5em\n}\n\n.ql-editor .ql-indent-7:not(.ql-direction-rtl){\n  padding-left:21em\n}\n\n.ql-editor li.ql-indent-7:not(.ql-direction-rtl){\n  padding-left:22.5em\n}\n\n.ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right{\n  padding-right:21em\n}\n\n.ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right{\n  padding-right:22.5em\n}\n\n.ql-editor .ql-indent-8:not(.ql-direction-rtl){\n  padding-left:24em\n}\n\n.ql-editor li.ql-indent-8:not(.ql-direction-rtl){\n  padding-left:25.5em\n}\n\n.ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right{\n  padding-right:24em\n}\n\n.ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right{\n  padding-right:25.5em\n}\n\n.ql-editor .ql-indent-9:not(.ql-direction-rtl){\n  padding-left:27em\n}\n\n.ql-editor li.ql-indent-9:not(.ql-direction-rtl){\n  padding-left:28.5em\n}\n\n.ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right{\n  padding-right:27em\n}\n\n.ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right{\n  padding-right:28.5em\n}\n\n.ql-editor .ql-video{\n  display:block;\n  max-width:100%\n}\n\n.ql-editor .ql-video.ql-align-center{\n  margin:0 auto\n}\n\n.ql-editor .ql-video.ql-align-right{\n  margin:0 0 0 auto\n}\n\n.ql-editor .ql-bg-black{\n  background-color:#000\n}\n\n.ql-editor .ql-bg-red{\n  background-color:#e60000\n}\n\n.ql-editor .ql-bg-orange{\n  background-color:#f90\n}\n\n.ql-editor .ql-bg-yellow{\n  background-color:#ff0\n}\n\n.ql-editor .ql-bg-green{\n  background-color:#008a00\n}\n\n.ql-editor .ql-bg-blue{\n  background-color:#06c\n}\n\n.ql-editor .ql-bg-purple{\n  background-color:#93f\n}\n\n.ql-editor .ql-color-white{\n  color:#fff\n}\n\n.ql-editor .ql-color-red{\n  color:#e60000\n}\n\n.ql-editor .ql-color-orange{\n  color:#f90\n}\n\n.ql-editor .ql-color-yellow{\n  color:#ff0\n}\n\n.ql-editor .ql-color-green{\n  color:#008a00\n}\n\n.ql-editor .ql-color-blue{\n  color:#06c\n}\n\n.ql-editor .ql-color-purple{\n  color:#93f\n}\n\n.ql-editor .ql-font-serif{\n  font-family:Georgia,Times New Roman,serif\n}\n\n.ql-editor .ql-font-monospace{\n  font-family:Monaco,Courier New,monospace\n}\n\n.ql-editor .ql-size-small{\n  font-size:.75em\n}\n\n.ql-editor .ql-size-large{\n  font-size:1.5em\n}\n\n.ql-editor .ql-size-huge{\n  font-size:2.5em\n}\n\n.ql-editor .ql-direction-rtl{\n  direction:rtl;\n  text-align:inherit\n}\n\n.ql-editor .ql-align-center{\n  text-align:center\n}\n\n.ql-editor .ql-align-justify{\n  text-align:justify\n}\n\n.ql-editor .ql-align-right{\n  text-align:right\n}\n\n.ql-editor.ql-blank:before{\n  color:rgba(0,0,0,.6);\n  content:attr(data-placeholder);\n  font-style:italic;\n  left:15px;\n  pointer-events:none;\n  position:absolute;\n  right:15px\n}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderMobile_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderMobile_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderMobile_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderMobile_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderMobile_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".nav-color{\n  background-color:#ffe4e1!important\n}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopHeader_vue_vue_type_style_index_1_id_b6490990_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopHeader_vue_vue_type_style_index_1_id_b6490990_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopHeader_vue_vue_type_style_index_1_id_b6490990_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopHeader_vue_vue_type_style_index_1_id_b6490990_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopHeader_vue_vue_type_style_index_1_id_b6490990_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".nav-color[data-v-b6490990]{\n  background-color:#ed6436!important\n}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_1_id_59c4469b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_1_id_59c4469b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_1_id_59c4469b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_1_id_59c4469b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_1_id_59c4469b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".nav-color[data-v-59c4469b]{\n  background-color:#ffe4e1!important\n}\n.body-color[data-v-59c4469b]{\n  background-color:#fff\n}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeHeader_vue_vue_type_style_index_0_id_0b133c05_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeHeader_vue_vue_type_style_index_0_id_0b133c05_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeHeader_vue_vue_type_style_index_0_id_0b133c05_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeHeader_vue_vue_type_style_index_0_id_0b133c05_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeHeader_vue_vue_type_style_index_0_id_0b133c05_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".nav-color[data-v-0b133c05]{\n  background-color:#ed6436!important\n}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetailHeader_vue_vue_type_style_index_0_id_3d1432b6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetailHeader_vue_vue_type_style_index_0_id_3d1432b6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetailHeader_vue_vue_type_style_index_0_id_3d1432b6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetailHeader_vue_vue_type_style_index_0_id_3d1432b6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetailHeader_vue_vue_type_style_index_0_id_3d1432b6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".nav-color[data-v-3d1432b6]{\n  background-color:#ffe4e1!important\n}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_shop_vue_vue_type_style_index_1_id_35a1a3dc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_shop_vue_vue_type_style_index_1_id_35a1a3dc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_shop_vue_vue_type_style_index_1_id_35a1a3dc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_shop_vue_vue_type_style_index_1_id_35a1a3dc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_shop_vue_vue_type_style_index_1_id_35a1a3dc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".nav-color[data-v-35a1a3dc]{\n  background-color:#ed6436!important\n}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getters", function() { return getters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
const state = () => {};
const getters = {};
const mutations = {};
const actions = {};

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  async getBrands({
    commit
  }, params) {
    try {
      console.log(params);
      const response = await this.$services.Brand.all(params);
      commit("SET_BRAND", response.data);
    } catch (error) {
      console.log(error.data);
    }
  }

});

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  SET_BRAND(state, brands) {
    state.brands = brands;
  }

});

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (() => ({
  brands: []
}));

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  addToCart({
    state,
    commit
  }, product) {
    const cartItem = state.cart.find(item => {
      return item.id === product.id;
    });

    if (!cartItem) {
      commit('CART_PUSH', product);
    } else {
      commit('INCREASE_CART_QUANTITY', {
        cartItem,
        product
      });
    }

    commit('SET_CART_TO_LOCALSTORAGE');
  },

  getLocalStorageCart({
    commit
  }) {
    commit("SET_CART", JSON.parse(localStorage.getItem("cart")));
  },

  updateCart({
    state,
    commit
  }, {
    id,
    quantity
  }) {
    const cartItem = state.cart.find(item => item.id === id);
    commit('UPDATE_CART', {
      cartItem,
      quantity
    });
  },

  clearCart({
    commit
  }) {
    commit('CLEAR_CART');
    commit('UNSET_LOCALSTORAGE_CART');
  },

  deleteCart({
    commit
  }, deleteId) {
    commit('DELETE_CART', deleteId);
    commit('SET_CART_TO_LOCALSTORAGE');
  }

});

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  CART_PUSH(state, product) {
    state.cart.push(product);
  },

  SET_CART(state, product) {
    state.cart = product || [];
  },

  INCREASE_CART_QUANTITY(_, {
    cartItem,
    product
  }) {
    cartItem.quantity += product.quantity;
  },

  DELETE_CART(state, deleteId) {
    state.cart = state.cart.filter(cartItem => cartItem.id != deleteId);
  },

  SET_CART_TO_LOCALSTORAGE(state) {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  },

  UNSET_LOCALSTORAGE_CART() {
    localStorage.removeItem('cart');
  },

  CLEAR_CART(state) {
    state.cart = [];
  },

  UPDATE_CART(_, {
    cartItem,
    quantity
  }) {
    cartItem.quantity = +quantity;
  }

});

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (() => ({
  cart: []
}));

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  async getCategory({
    commit
  }, type) {
    try {
      const response = await this.$services.Category.all(type);
      commit("SET_CATEGORY", response.data);
    } catch (error) {
      throw error;
    }
  }

});

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  SET_CATEGORY(state, category) {
    state.category = category;
  }

});

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (() => ({
  category: []
}));

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  async getProducts({
    commit
  }) {
    try {
      const response = await this.$services.Product.all();
      commit("SET_PRODUCT", response.data);
    } catch (error) {
      throw error;
    }
  }

});

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  SET_PRODUCT(state, products) {
    state.products = products;
  }

});

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (() => ({
  products: []
}));

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/loading.3a3d32d.gif";

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "ufo"
var external_ufo_ = __webpack_require__(2);

// EXTERNAL MODULE: external "node-fetch"
var external_node_fetch_ = __webpack_require__(29);
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_);

// CONCATENATED MODULE: ./.nuxt/middleware.js
const middleware = {};
middleware['authenticated'] = __webpack_require__(35);
middleware['authenticated'] = middleware['authenticated'].default || middleware['authenticated'];
middleware['unauthenticated'] = __webpack_require__(36);
middleware['unauthenticated'] = middleware['unauthenticated'].default || middleware['unauthenticated'];
/* harmony default export */ var _nuxt_middleware = (middleware);
// CONCATENATED MODULE: ./.nuxt/utils.js

 // window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)

if (false) {}

function createGetCounter(counterObject, defaultKey = '') {
  return function getCounter(id = defaultKey) {
    if (counterObject[id] === undefined) {
      counterObject[id] = 0;
    }

    return counterObject[id]++;
  };
}
function empty() {}
function globalHandleError(error) {
  if (external_vue_default.a.config.errorHandler) {
    external_vue_default.a.config.errorHandler(error);
  }
}
function interopDefault(promise) {
  return promise.then(m => m.default || m);
}
function hasFetch(vm) {
  return vm.$options && typeof vm.$options.fetch === 'function' && !vm.$options.fetch.length;
}
function purifyData(data) {
  if (true) {
    return data;
  }

  return Object.entries(data).filter(([key, value]) => {
    const valid = !(value instanceof Function) && !(value instanceof Promise);

    if (!valid) {
      console.warn(`${key} is not able to be stringified. This will break in a production environment.`);
    }

    return valid;
  }).reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {});
}
function getChildrenComponentInstancesUsingFetch(vm, instances = []) {
  const children = vm.$children || [];

  for (const child of children) {
    if (child.$fetch) {
      instances.push(child);
      continue; // Don't get the children since it will reload the template
    }

    if (child.$children) {
      getChildrenComponentInstancesUsingFetch(child, instances);
    }
  }

  return instances;
}
function applyAsyncData(Component, asyncData) {
  if ( // For SSR, we once all this function without second param to just apply asyncData
  // Prevent doing this for each SSR request
  !asyncData && Component.options.__hasNuxtData) {
    return;
  }

  const ComponentData = Component.options._originDataFn || Component.options.data || function () {
    return {};
  };

  Component.options._originDataFn = ComponentData;

  Component.options.data = function () {
    const data = ComponentData.call(this, this);

    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }

    return { ...data,
      ...asyncData
    };
  };

  Component.options.__hasNuxtData = true;

  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}
function sanitizeComponent(Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }

  if (!Component.options) {
    Component = external_vue_default.a.extend(Component); // fix issue #6

    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  } // If no component name defined, set file path as name, (also fixes #5703)


  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }

  return Component;
}
function getMatchedComponents(route, matches = false, prop = 'components') {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m[prop]).map(key => {
      matches && matches.push(index);
      return m[prop][key];
    });
  }));
}
function getMatchedComponentsInstances(route, matches = false) {
  return getMatchedComponents(route, matches, 'instances');
}
function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m.components).reduce((promises, key) => {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index));
      } else {
        delete m.components[key];
      }

      return promises;
    }, []);
  }));
}
function resolveRouteComponents(route, fn) {
  return Promise.all(flatMapComponents(route, async (Component, instance, match, key) => {
    // If component is a function, resolve it
    if (typeof Component === 'function' && !Component.options) {
      try {
        Component = await Component();
      } catch (error) {
        // Handle webpack chunk loading errors
        // This may be due to a new deployment or a network problem
        if (error && error.name === 'ChunkLoadError' && typeof window !== 'undefined' && window.sessionStorage) {
          const timeNow = Date.now();
          const previousReloadTime = parseInt(window.sessionStorage.getItem('nuxt-reload')); // check for previous reload time not to reload infinitely

          if (!previousReloadTime || previousReloadTime + 60000 < timeNow) {
            window.sessionStorage.setItem('nuxt-reload', timeNow);
            window.location.reload(true
            /* skip cache */
            );
          }
        }

        throw error;
      }
    }

    match.components[key] = Component = sanitizeComponent(Component);
    return typeof fn === 'function' ? fn(Component, instance, match, key) : Component;
  }));
}
async function getRouteData(route) {
  if (!route) {
    return;
  } // Make sure the components are resolved (code-splitting)


  await resolveRouteComponents(route); // Send back a copy of route with meta based on Component definition

  return { ...route,
    meta: getMatchedComponents(route).map((Component, index) => {
      return { ...Component.options.meta,
        ...(route.matched[index] || {}).meta
      };
    })
  };
}
async function setContext(app, context) {
  // If context not defined, create it
  if (!app.context) {
    app.context = {
      isStatic: false,
      isDev: false,
      isHMR: false,
      app,
      store: app.store,
      payload: context.payload,
      error: context.error,
      base: app.router.options.base,
      env: {
        "BASE_URL": "http://157.245.55.243/api",
        "API_SECRET": ":D=)):D"
      }
    }; // Only set once

    if (context.req) {
      app.context.req = context.req;
    }

    if (context.res) {
      app.context.res = context.res;
    }

    if (context.ssrContext) {
      app.context.ssrContext = context.ssrContext;
    }

    app.context.redirect = (status, path, query) => {
      if (!status) {
        return;
      }

      app.context._redirected = true; // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })

      let pathType = typeof path;

      if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
        query = path || {};
        path = status;
        pathType = typeof path;
        status = 302;
      }

      if (pathType === 'object') {
        path = app.router.resolve(path).route.fullPath;
      } // "/absolute/route", "./relative/route" or "../relative/route"


      if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
        app.context.next({
          path,
          query,
          status
        });
      } else {
        path = Object(external_ufo_["withQuery"])(path, query);

        if (true) {
          app.context.next({
            path,
            status
          });
        }

        if (false) {}
      }
    };

    if (true) {
      app.context.beforeNuxtRender = fn => context.beforeRenderFns.push(fn);
    }

    if (false) {}
  } // Dynamic keys


  const [currentRouteData, fromRouteData] = await Promise.all([getRouteData(context.route), getRouteData(context.from)]);

  if (context.route) {
    app.context.route = currentRouteData;
  }

  if (context.from) {
    app.context.from = fromRouteData;
  }

  app.context.next = context.next;
  app.context._redirected = false;
  app.context._errored = false;
  app.context.isHMR = false;
  app.context.params = app.context.route.params || {};
  app.context.query = app.context.route.query || {};
}
function middlewareSeries(promises, appContext) {
  if (!promises.length || appContext._redirected || appContext._errored) {
    return Promise.resolve();
  }

  return promisify(promises[0], appContext).then(() => {
    return middlewareSeries(promises.slice(1), appContext);
  });
}
function promisify(fn, context) {
  let promise;

  if (fn.length === 2) {
    // fn(context, callback)
    promise = new Promise(resolve => {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }

        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }

  if (promise && promise instanceof Promise && typeof promise.then === 'function') {
    return promise;
  }

  return Promise.resolve(promise);
} // Imported from vue-router

function getLocation(base, mode) {
  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '');
  }

  base = decodeURI(base).slice(0, -1); // consideration is base is normalized with trailing slash

  let path = decodeURI(window.location.pathname);

  if (base && path.startsWith(base)) {
    path = path.slice(base.length);
  }

  const fullPath = (path || '/') + window.location.search + window.location.hash;
  return Object(external_ufo_["normalizeURL"])(fullPath);
} // Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */

function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function getQueryDiff(toQuery, fromQuery) {
  const diff = {};
  const queries = { ...toQuery,
    ...fromQuery
  };

  for (const k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true;
    }
  }

  return diff;
}
function normalizeError(err) {
  let message;

  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = `[${err.constructor.name}]`;
    }
  } else {
    message = err.message || err;
  }

  return { ...err,
    message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  };
}
/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */

const PATH_REGEXP = new RegExp([// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)', // Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');
/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */

function parse(str, options) {
  const tokens = [];
  let key = 0;
  let index = 0;
  let path = '';
  const defaultDelimiter = options && options.delimiter || '/';
  let res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    const m = res[0];
    const escaped = res[1];
    const offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length; // Ignore already escaped sequences.

    if (escaped) {
      path += escaped[1];
      continue;
    }

    const next = str[index];
    const prefix = res[2];
    const name = res[3];
    const capture = res[4];
    const group = res[5];
    const modifier = res[6];
    const asterisk = res[7]; // Push the current path onto the tokens.

    if (path) {
      tokens.push(path);
      path = '';
    }

    const partial = prefix != null && next != null && next !== prefix;
    const repeat = modifier === '+' || modifier === '*';
    const optional = modifier === '?' || modifier === '*';
    const delimiter = res[2] || defaultDelimiter;
    const pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  } // Match any characters still remaining.


  if (index < str.length) {
    path += str.substr(index);
  } // If the path exists, push it onto the end.


  if (path) {
    tokens.push(path);
  }

  return tokens;
}
/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */


function encodeURIComponentPretty(str, slashAllowed) {
  const re = slashAllowed ? /[?#]/g : /[/?#]/g;
  return encodeURI(str).replace(re, c => {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */


function encodeAsterisk(str) {
  return encodeURIComponentPretty(str, true);
}
/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */


function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}
/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */


function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}
/**
 * Expose a method for transforming tokens into the path function.
 */


function tokensToFunction(tokens, options) {
  // Compile all the tokens into regexps.
  const matches = new Array(tokens.length); // Compile all the patterns before compilation.

  for (let i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }

  return function (obj, opts) {
    let path = '';
    const data = obj || {};
    const options = opts || {};
    const encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];

      if (typeof token === 'string') {
        path += token;
        continue;
      }

      const value = data[token.name || 'pathMatch'];
      let segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (let j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}
/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */


function flags(options) {
  return options && options.sensitive ? '' : 'i';
}

function addLifecycleHook(vm, hook, fn) {
  if (!vm.$options[hook]) {
    vm.$options[hook] = [];
  }

  if (!vm.$options[hook].includes(fn)) {
    vm.$options[hook].push(fn);
  }
}
const urlJoin = external_ufo_["joinURL"];
const stripTrailingSlash = external_ufo_["withoutTrailingSlash"];
const isSamePath = external_ufo_["isSamePath"];
function setScrollRestoration(newVal) {
  try {
    window.history.scrollRestoration = newVal;
  } catch (e) {}
}
// CONCATENATED MODULE: ./.nuxt/mixins/fetch.server.js



async function serverPrefetch() {
  if (!this._fetchOnServer) {
    return;
  } // Call and await on $fetch


  try {
    await this.$options.fetch.call(this);
  } catch (err) {
    if (false) {}

    this.$fetchState.error = normalizeError(err);
  }

  this.$fetchState.pending = false; // Define an ssrKey for hydration

  this._fetchKey = this._fetchKey || this.$ssrContext.fetchCounters['']++; // Add data-fetch-key on parent element of Component

  const attrs = this.$vnode.data.attrs = this.$vnode.data.attrs || {};
  attrs['data-fetch-key'] = this._fetchKey; // Add to ssrContext for window.__NUXT__.fetch

  this.$ssrContext.nuxt.fetch[this._fetchKey] = this.$fetchState.error ? {
    _error: this.$fetchState.error
  } : purifyData(this._data);
}

/* harmony default export */ var fetch_server = ({
  created() {
    if (!hasFetch(this)) {
      return;
    }

    if (typeof this.$options.fetchOnServer === 'function') {
      this._fetchOnServer = this.$options.fetchOnServer.call(this) !== false;
    } else {
      this._fetchOnServer = this.$options.fetchOnServer !== false;
    }

    const defaultKey = this.$options._scopeId || this.$options.name || '';
    const getCounter = createGetCounter(this.$ssrContext.fetchCounters, defaultKey);

    if (typeof this.$options.fetchKey === 'function') {
      this._fetchKey = this.$options.fetchKey.call(this, getCounter);
    } else {
      const key = 'string' === typeof this.$options.fetchKey ? this.$options.fetchKey : defaultKey;
      this._fetchKey = key ? key + ':' + getCounter(key) : String(getCounter(key));
    } // Added for remove vue undefined warning while ssr


    this.$fetch = () => {}; // issue #8043


    external_vue_default.a.util.defineReactive(this, '$fetchState', {
      pending: true,
      error: null,
      timestamp: Date.now()
    });
    addLifecycleHook(this, 'serverPrefetch', serverPrefetch);
  }

});
// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(5);
var external_vuex_default = /*#__PURE__*/__webpack_require__.n(external_vuex_);

// EXTERNAL MODULE: external "vue-meta"
var external_vue_meta_ = __webpack_require__(30);
var external_vue_meta_default = /*#__PURE__*/__webpack_require__.n(external_vue_meta_);

// EXTERNAL MODULE: external "vue-client-only"
var external_vue_client_only_ = __webpack_require__(16);
var external_vue_client_only_default = /*#__PURE__*/__webpack_require__.n(external_vue_client_only_);

// EXTERNAL MODULE: external "vue-no-ssr"
var external_vue_no_ssr_ = __webpack_require__(11);
var external_vue_no_ssr_default = /*#__PURE__*/__webpack_require__.n(external_vue_no_ssr_);

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(17);
var external_vue_router_default = /*#__PURE__*/__webpack_require__.n(external_vue_router_);

// CONCATENATED MODULE: ./.nuxt/router.scrollBehavior.js


if (false) {}

function shouldScrollToTop(route) {
  const Pages = getMatchedComponents(route);

  if (Pages.length === 1) {
    const {
      options = {}
    } = Pages[0];
    return options.scrollToTop !== false;
  }

  return Pages.some(({
    options
  }) => options && options.scrollToTop);
}

/* harmony default export */ var router_scrollBehavior = (function (to, from, savedPosition) {
  // If the returned position is falsy or an empty object, will retain current scroll position
  let position = false;
  const isRouteChanged = to !== from; // savedPosition is only available for popstate navigations (back button)

  if (savedPosition) {
    position = savedPosition;
  } else if (isRouteChanged && shouldScrollToTop(to)) {
    position = {
      x: 0,
      y: 0
    };
  }

  const nuxt = window.$nuxt;

  if ( // Initial load (vuejs/vue-router#3199)
  !isRouteChanged || // Route hash changes
  to.path === from.path && to.hash !== from.hash) {
    nuxt.$nextTick(() => nuxt.$emit('triggerScroll'));
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash; // CSS.escape() is not supported with IE and Edge.

        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1));
        }

        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = {
              selector: hash
            };
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).');
        }
      }

      resolve(position);
    });
  });
});
// CONCATENATED MODULE: ./.nuxt/router.js






const _cefa2778 = () => interopDefault(__webpack_require__.e(/* import() | pages/404.vue */ 18).then(__webpack_require__.bind(null, 117)));

const _b1a2bc44 = () => interopDefault(__webpack_require__.e(/* import() | pages/index.vue */ 24).then(__webpack_require__.bind(null, 118)));

const _2aa0fc48 = () => interopDefault(__webpack_require__.e(/* import() | pages/product/brand.vue */ 27).then(__webpack_require__.bind(null, 119)));

const _2d0a7cb2 = () => interopDefault(__webpack_require__.e(/* import() | pages/product/index.vue */ 28).then(__webpack_require__.bind(null, 120)));

const _3077bf42 = () => interopDefault(__webpack_require__.e(/* import() | pages/product/_slug.vue */ 26).then(__webpack_require__.bind(null, 121)));

const _17c95fc4 = () => interopDefault(__webpack_require__.e(/* import() | pages/cart.vue */ 20).then(__webpack_require__.bind(null, 122)));

const _720cc8ea = () => interopDefault(__webpack_require__.e(/* import() | pages/checkout.vue */ 21).then(__webpack_require__.bind(null, 123)));

const _f1438da8 = () => interopDefault(__webpack_require__.e(/* import() | pages/contact.vue */ 22).then(__webpack_require__.bind(null, 124)));

const _f11271ce = () => interopDefault(__webpack_require__.e(/* import() | pages/about.vue */ 19).then(__webpack_require__.bind(null, 125)));

const _53b7e826 = () => interopDefault(__webpack_require__.e(/* import() | pages/thanks.vue */ 31).then(__webpack_require__.bind(null, 126)));

const _70d644f5 = () => interopDefault(__webpack_require__.e(/* import() | pages/login.vue */ 25).then(__webpack_require__.bind(null, 127)));

const _95d89872 = () => interopDefault(__webpack_require__.e(/* import() | pages/register.vue */ 29).then(__webpack_require__.bind(null, 128)));

const _0288bb47 = () => interopDefault(__webpack_require__.e(/* import() | pages/forgot.vue */ 23).then(__webpack_require__.bind(null, 129)));

const _a8c533d4 = () => interopDefault(__webpack_require__.e(/* import() | pages/resetPassword.vue */ 30).then(__webpack_require__.bind(null, 130)));

const _51aa74c6 = () => interopDefault(__webpack_require__.e(/* import() | pages/verify.vue */ 32).then(__webpack_require__.bind(null, 131)));

const emptyFn = () => {};

external_vue_default.a.use(external_vue_router_default.a);
const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior: router_scrollBehavior,
  routes: [{
    path: "*",
    component: _cefa2778,
    name: "404"
  }, {
    path: "/",
    component: _b1a2bc44,
    name: "home-page"
  }, {
    path: "/thuong-hieu/:slug",
    component: _2aa0fc48,
    name: "shop-by-brand"
  }, {
    path: "/danh-muc/:slug",
    component: _2d0a7cb2,
    name: "shop-by-category"
  }, {
    path: "/san-pham/:slug",
    component: _3077bf42,
    name: "product-detail"
  }, {
    path: "/gio-hang",
    component: _17c95fc4,
    name: "cart"
  }, {
    path: "/thanh-toan",
    component: _720cc8ea,
    name: "checkout"
  }, {
    path: "/lien-he",
    component: _f1438da8,
    name: "contact"
  }, {
    path: "/gioi-thieu",
    component: _f11271ce,
    name: "about"
  }, {
    path: "/thanh-cong",
    component: _53b7e826,
    name: "thanks"
  }, {
    path: "/dang-nhap",
    component: _70d644f5,
    name: "login"
  }, {
    path: "/dang-ky",
    component: _95d89872,
    name: "register"
  }, {
    path: "/quen-mat-khau",
    component: _0288bb47,
    name: "forgot-password"
  }, {
    path: "/reset-password",
    component: _a8c533d4,
    name: "reset-pasword"
  }, {
    path: "/verify-email",
    component: _51aa74c6,
    name: "verify"
  }],
  fallback: false
};
function createRouter(ssrContext, config) {
  const base = config._app && config._app.basePath || routerOptions.base;
  const router = new external_vue_router_default.a({ ...routerOptions,
    base
  }); // TODO: remove in Nuxt 3

  const originalPush = router.push;

  router.push = function push(location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort);
  };

  const resolve = router.resolve.bind(router);

  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = Object(external_ufo_["normalizeURL"])(to);
    }

    return resolve(to, current, append);
  };

  return router;
}
// CONCATENATED MODULE: ./.nuxt/components/nuxt-child.js
/* harmony default export */ var nuxt_child = ({
  name: 'NuxtChild',
  functional: true,
  props: {
    nuxtChildKey: {
      type: String,
      default: ''
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    }
  },

  render(_, {
    parent,
    data,
    props
  }) {
    const h = parent.$createElement;
    data.nuxtChild = true;
    const _parent = parent;
    const transitions = parent.$nuxt.nuxt.transitions;
    const defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    let depth = 0;

    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }

      parent = parent.$parent;
    }

    data.nuxtChildDepth = depth;
    const transition = transitions[depth] || defaultTransition;
    const transitionProps = {};
    transitionsKeys.forEach(key => {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    const listeners = {};
    listenersKeys.forEach(key => {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key].bind(_parent);
      }
    });

    if (false) {} // make sure that leave is called asynchronous (fix #5703)


    if (transition.css === false) {
      const leave = listeners.leave; // only add leave listener when user didnt provide one
      // or when it misses the done argument

      if (!leave || leave.length < 2) {
        listeners.leave = (el, done) => {
          if (leave) {
            leave.call(_parent, el);
          }

          _parent.$nextTick(done);
        };
      }
    }

    let routerView = h('routerView', data);

    if (props.keepAlive) {
      routerView = h('keep-alive', {
        props: props.keepAliveProps
      }, [routerView]);
    }

    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [routerView]);
  }

});
const transitionsKeys = ['name', 'mode', 'appear', 'css', 'type', 'duration', 'enterClass', 'leaveClass', 'appearClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'appearActiveClass', 'enterToClass', 'leaveToClass', 'appearToClass'];
const listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled', 'beforeAppear', 'appear', 'afterAppear', 'appearCancelled'];
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=template&id=5eb69f1c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"__nuxt-error-page"},[_vm._ssrNode("<div class=\"error\">","</div>",[_vm._ssrNode("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"90\" height=\"90\" fill=\"#DBE1EC\" viewBox=\"0 0 48 48\"><path d=\"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z\"></path></svg> <div class=\"title\">"+_vm._ssrEscape(_vm._s(_vm.message))+"</div> "),(_vm.statusCode === 404)?_vm._ssrNode("<p class=\"description\">","</p>",[(typeof _vm.$route === 'undefined')?_vm._ssrNode("<a href=\"/\" class=\"error-link\">","</a>"):_c('NuxtLink',{staticClass:"error-link",attrs:{"to":"/"}},[_vm._v("Back to the home page")])],1):_vm._e(),_vm._ssrNode(" <div class=\"logo\"><a href=\"https://nuxtjs.org\" target=\"_blank\" rel=\"noopener\">Nuxt</a></div>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=template&id=5eb69f1c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var nuxt_errorvue_type_script_lang_js_ = ({
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    statusCode() {
      return this.error && this.error.statusCode || 500;
    },

    message() {
      return this.error.message || 'Error';
    }

  },

  head() {
    return {
      title: this.message,
      meta: [{
        name: 'viewport',
        content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0'
      }]
    };
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_errorvue_type_script_lang_js_ = (nuxt_errorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(37)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_error_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_errorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "1238fc2e"
  
)

/* harmony default export */ var nuxt_error = (nuxt_error_component.exports);
// CONCATENATED MODULE: ./.nuxt/components/nuxt.js




/* harmony default export */ var components_nuxt = ({
  name: 'Nuxt',
  components: {
    NuxtChild: nuxt_child,
    NuxtError: nuxt_error
  },
  props: {
    nuxtChildKey: {
      type: String,
      default: undefined
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    },
    name: {
      type: String,
      default: 'default'
    }
  },

  errorCaptured(error) {
    // if we receive and error while showing the NuxtError component
    // capture the error and force an immediate update so we re-render
    // without the NuxtError component
    if (this.displayingNuxtError) {
      this.errorFromNuxtError = error;
      this.$forceUpdate();
    }
  },

  computed: {
    routerViewKey() {
      // If nuxtChildKey prop is given or current route has children
      if (typeof this.nuxtChildKey !== 'undefined' || this.$route.matched.length > 1) {
        return this.nuxtChildKey || compile(this.$route.matched[0].path)(this.$route.params);
      }

      const [matchedRoute] = this.$route.matched;

      if (!matchedRoute) {
        return this.$route.path;
      }

      const Component = matchedRoute.components.default;

      if (Component && Component.options) {
        const {
          options
        } = Component;

        if (options.key) {
          return typeof options.key === 'function' ? options.key(this.$route) : options.key;
        }
      }

      const strict = /\/$/.test(matchedRoute.path);
      return strict ? this.$route.path : this.$route.path.replace(/\/$/, '');
    }

  },

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$root.$options.nuxt);
  },

  render(h) {
    // if there is no error
    if (!this.nuxt.err) {
      // Directly return nuxt child
      return h('NuxtChild', {
        key: this.routerViewKey,
        props: this.$props
      });
    } // if an error occurred within NuxtError show a simple
    // error message instead to prevent looping


    if (this.errorFromNuxtError) {
      this.$nextTick(() => this.errorFromNuxtError = false);
      return h('div', {}, [h('h2', 'An error occurred while showing the error page'), h('p', 'Unfortunately an error occurred and while showing the error page another error occurred'), h('p', `Error details: ${this.errorFromNuxtError.toString()}`), h('nuxt-link', {
        props: {
          to: '/'
        }
      }, 'Go back to home')]);
    } // track if we are showing the NuxtError component


    this.displayingNuxtError = true;
    this.$nextTick(() => this.displayingNuxtError = false);
    return h(nuxt_error, {
      props: {
        error: this.nuxt.err
      }
    });
  }

});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
/* harmony default export */ var nuxt_loadingvue_type_script_lang_js_ = ({
  name: 'NuxtLoading',

  data() {
    return {
      percent: 0,
      show: false,
      canSucceed: true,
      reversed: false,
      skipTimerCount: 0,
      rtl: false,
      throttle: 200,
      duration: 5000,
      continuous: false
    };
  },

  computed: {
    left() {
      if (!this.continuous && !this.rtl) {
        return false;
      }

      return this.rtl ? this.reversed ? '0px' : 'auto' : !this.reversed ? '0px' : 'auto';
    }

  },

  beforeDestroy() {
    this.clear();
  },

  methods: {
    clear() {
      clearInterval(this._timer);
      clearTimeout(this._throttle);
      this._timer = null;
    },

    start() {
      this.clear();
      this.percent = 0;
      this.reversed = false;
      this.skipTimerCount = 0;
      this.canSucceed = true;

      if (this.throttle) {
        this._throttle = setTimeout(() => this.startTimer(), this.throttle);
      } else {
        this.startTimer();
      }

      return this;
    },

    set(num) {
      this.show = true;
      this.canSucceed = true;
      this.percent = Math.min(100, Math.max(0, Math.floor(num)));
      return this;
    },

    get() {
      return this.percent;
    },

    increase(num) {
      this.percent = Math.min(100, Math.floor(this.percent + num));
      return this;
    },

    decrease(num) {
      this.percent = Math.max(0, Math.floor(this.percent - num));
      return this;
    },

    pause() {
      clearInterval(this._timer);
      return this;
    },

    resume() {
      this.startTimer();
      return this;
    },

    finish() {
      this.percent = this.reversed ? 0 : 100;
      this.hide();
      return this;
    },

    hide() {
      this.clear();
      setTimeout(() => {
        this.show = false;
        this.$nextTick(() => {
          this.percent = 0;
          this.reversed = false;
        });
      }, 500);
      return this;
    },

    fail(error) {
      this.canSucceed = false;
      return this;
    },

    startTimer() {
      if (!this.show) {
        this.show = true;
      }

      if (typeof this._cut === 'undefined') {
        this._cut = 10000 / Math.floor(this.duration);
      }

      this._timer = setInterval(() => {
        /**
         * When reversing direction skip one timers
         * so 0, 100 are displayed for two iterations
         * also disable css width transitioning
         * which otherwise interferes and shows
         * a jojo effect
         */
        if (this.skipTimerCount > 0) {
          this.skipTimerCount--;
          return;
        }

        if (this.reversed) {
          this.decrease(this._cut);
        } else {
          this.increase(this._cut);
        }

        if (this.continuous) {
          if (this.percent >= 100) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          } else if (this.percent <= 0) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          }
        }
      }, 100);
    }

  },

  render(h) {
    let el = h(false);

    if (this.show) {
      el = h('div', {
        staticClass: 'nuxt-progress',
        class: {
          'nuxt-progress-notransition': this.skipTimerCount > 0,
          'nuxt-progress-failed': !this.canSucceed
        },
        style: {
          width: this.percent + '%',
          left: this.left
        }
      });
    }

    return el;
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_loadingvue_type_script_lang_js_ = (nuxt_loadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue
var nuxt_loading_render, nuxt_loading_staticRenderFns


function nuxt_loading_injectStyles (context) {
  
  var style0 = __webpack_require__(39)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_loading_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_loadingvue_type_script_lang_js_,
  nuxt_loading_render,
  nuxt_loading_staticRenderFns,
  false,
  nuxt_loading_injectStyles,
  null,
  "4261a8dd"
  
)

/* harmony default export */ var nuxt_loading = (nuxt_loading_component.exports);
// EXTERNAL MODULE: ./node_modules/@nuxtjs/tailwindcss/dist/runtime/tailwind.css
var tailwind = __webpack_require__(41);

// EXTERNAL MODULE: ./node_modules/quill/dist/quill.snow.css
var quill_snow = __webpack_require__(43);

// EXTERNAL MODULE: ./node_modules/quill/dist/quill.bubble.css
var quill_bubble = __webpack_require__(45);

// EXTERNAL MODULE: ./node_modules/quill/dist/quill.core.css
var quill_core = __webpack_require__(47);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/auth.vue?vue&type=template&id=3abe226b&
var authvue_type_template_id_3abe226b_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('Nuxt')}
var authvue_type_template_id_3abe226b_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/auth.vue?vue&type=template&id=3abe226b&

// CONCATENATED MODULE: ./layouts/auth.vue

var script = {}


/* normalize component */

var auth_component = Object(componentNormalizer["a" /* default */])(
  script,
  authvue_type_template_id_3abe226b_render,
  authvue_type_template_id_3abe226b_staticRenderFns,
  false,
  null,
  null,
  "881a7d8a"
  
)

/* harmony default export */ var auth = (auth_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/blogs.vue?vue&type=template&id=6ce4af76&
var blogsvue_type_template_id_6ce4af76_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"font-nunito antialiased mb-12 lg:mb-0 body-color"},[_vm._ssrNode("<header class=\"w-full bg-white lg:hidden\">","</header>",[_c('HeaderMobile',{attrs:{"iconColor":'black',"badgeBg":'nav-color'}})],1),_vm._ssrNode(" "),_vm._ssrNode("<header class=\"w-full hidden lg:block bg-cover bg-no-repeat bg-center\" style=\"background-image: url('https://wpbingosite.com/wordpress/petio/wp-content/uploads/2021/03/breadcumd.jpg');\">","</header>",[_c('ShopHeader')],1),_vm._ssrNode(" "),_c('Nuxt'),_vm._ssrNode(" "),_c('Footer')],2)}
var blogsvue_type_template_id_6ce4af76_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/blogs.vue?vue&type=template&id=6ce4af76&

// EXTERNAL MODULE: ./components/Footer.vue + 4 modules
var Footer = __webpack_require__(6);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/blogs.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var blogsvue_type_script_lang_js_ = ({
  components: {
    Footer: Footer["default"]
  }
});
// CONCATENATED MODULE: ./layouts/blogs.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_blogsvue_type_script_lang_js_ = (blogsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./layouts/blogs.vue



function blogs_injectStyles (context) {
  
  
}

/* normalize component */

var blogs_component = Object(componentNormalizer["a" /* default */])(
  layouts_blogsvue_type_script_lang_js_,
  blogsvue_type_template_id_6ce4af76_render,
  blogsvue_type_template_id_6ce4af76_staticRenderFns,
  false,
  blogs_injectStyles,
  null,
  "ad923ce4"
  
)

/* harmony default export */ var blogs = (blogs_component.exports);

/* nuxt-component-imports */
installComponents(blogs_component, {HeaderMobile: __webpack_require__(14).default,ShopHeader: __webpack_require__(28).default,Footer: __webpack_require__(6).default})

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/contact.vue?vue&type=template&id=29238c3c&
var contactvue_type_template_id_29238c3c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"font-nunito antialiased mb-12 lg:mb-0 body-color"},[_c('TheHeaderSecond'),_vm._ssrNode(" "),_c('Nuxt'),_vm._ssrNode(" "),_c('TheFooter')],2)}
var contactvue_type_template_id_29238c3c_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/contact.vue?vue&type=template&id=29238c3c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/contact.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var contactvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./layouts/contact.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_contactvue_type_script_lang_js_ = (contactvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./layouts/contact.vue



function contact_injectStyles (context) {
  
  
}

/* normalize component */

var contact_component = Object(componentNormalizer["a" /* default */])(
  layouts_contactvue_type_script_lang_js_,
  contactvue_type_template_id_29238c3c_render,
  contactvue_type_template_id_29238c3c_staticRenderFns,
  false,
  contact_injectStyles,
  null,
  "0615c846"
  
)

/* harmony default export */ var contact = (contact_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=template&id=59c4469b&scoped=true&
var defaultvue_type_template_id_59c4469b_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"border-box font-nunito antialiased mb-12 lg:mb-0 body-color"},[_vm._ssrNode("<header class=\"w-full nav-color lg:hidden\" data-v-59c4469b>","</header>",[_c('HeaderMobile',{attrs:{"badgeBg":'bg-white'}})],1),_vm._ssrNode(" "),_c('HomeHeader'),_vm._ssrNode(" "),_c('Nuxt'),_vm._ssrNode(" "),_c('Footer')],2)}
var defaultvue_type_template_id_59c4469b_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/default.vue?vue&type=template&id=59c4469b&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var defaultvue_type_script_lang_js_ = ({
  async fetch() {
    //server 
    try {
      await this.$store.dispatch('category/getCategory', 'product');
    } catch (error) {
      console.log(error);
    }
  },

  created() {
    if (false) {}
  }

});
// CONCATENATED MODULE: ./layouts/default.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_defaultvue_type_script_lang_js_ = (defaultvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./layouts/default.vue



function default_injectStyles (context) {
  
  var style1 = __webpack_require__(53)
if (style1.__inject__) style1.__inject__(context)

}

/* normalize component */

var default_component = Object(componentNormalizer["a" /* default */])(
  layouts_defaultvue_type_script_lang_js_,
  defaultvue_type_template_id_59c4469b_scoped_true_render,
  defaultvue_type_template_id_59c4469b_scoped_true_staticRenderFns,
  false,
  default_injectStyles,
  "59c4469b",
  "3f0c5504"
  
)

/* harmony default export */ var layouts_default = (default_component.exports);

/* nuxt-component-imports */
installComponents(default_component, {HeaderMobile: __webpack_require__(14).default,HomeHeader: __webpack_require__(79).default,Footer: __webpack_require__(6).default})

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/login.vue?vue&type=template&id=12b81134&
var loginvue_type_template_id_12b81134_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('Nuxt')}
var loginvue_type_template_id_12b81134_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/login.vue?vue&type=template&id=12b81134&

// CONCATENATED MODULE: ./layouts/login.vue

var login_script = {}


/* normalize component */

var login_component = Object(componentNormalizer["a" /* default */])(
  login_script,
  loginvue_type_template_id_12b81134_render,
  loginvue_type_template_id_12b81134_staticRenderFns,
  false,
  null,
  null,
  "07781fe6"
  
)

/* harmony default export */ var login = (login_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/product.vue?vue&type=template&id=5b071ca8&
var productvue_type_template_id_5b071ca8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"font-nunito antialiased mb-12 lg:mb-0 body-color"},[_c('ProductDetailHeader'),_vm._ssrNode(" "),_c('Nuxt'),_vm._ssrNode(" "),_c('TheFooter')],2)}
var productvue_type_template_id_5b071ca8_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/product.vue?vue&type=template&id=5b071ca8&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/product.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var productvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./layouts/product.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_productvue_type_script_lang_js_ = (productvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./layouts/product.vue



function product_injectStyles (context) {
  
  
}

/* normalize component */

var product_component = Object(componentNormalizer["a" /* default */])(
  layouts_productvue_type_script_lang_js_,
  productvue_type_template_id_5b071ca8_render,
  productvue_type_template_id_5b071ca8_staticRenderFns,
  false,
  product_injectStyles,
  null,
  "bcc675a8"
  
)

/* harmony default export */ var product = (product_component.exports);

/* nuxt-component-imports */
installComponents(product_component, {ProductDetailHeader: __webpack_require__(81).default})

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/shop.vue?vue&type=template&id=35a1a3dc&scoped=true&
var shopvue_type_template_id_35a1a3dc_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"border-box font-nunito antialiased mb-12 lg:mb-0 body-color"},[_vm._ssrNode("<header class=\"w-full bg-white lg:hidden\" data-v-35a1a3dc>","</header>",[_c('HeaderMobile',{attrs:{"iconColor":'black',"badgeBg":'nav-color'}})],1),_vm._ssrNode(" "),_vm._ssrNode("<header class=\"w-full hidden lg:block bg-cover bg-no-repeat bg-center\" style=\"background-image: url('https://wpbingosite.com/wordpress/petio/wp-content/uploads/2021/03/breadcumd.jpg');\" data-v-35a1a3dc>","</header>",[_c('ShopHeader')],1),_vm._ssrNode(" "),_c('Nuxt'),_vm._ssrNode(" "),_c('Footer')],2)}
var shopvue_type_template_id_35a1a3dc_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/shop.vue?vue&type=template&id=35a1a3dc&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/shop.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var shopvue_type_script_lang_js_ = ({
  async fetch() {
    if (!this.$store.state.category.category.length) {
      console.log('true');
      await this.$store.dispatch('category/getCategory', 'product');
    }
  }

});
// CONCATENATED MODULE: ./layouts/shop.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_shopvue_type_script_lang_js_ = (shopvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./layouts/shop.vue



function shop_injectStyles (context) {
  
  var style1 = __webpack_require__(59)
if (style1.__inject__) style1.__inject__(context)

}

/* normalize component */

var shop_component = Object(componentNormalizer["a" /* default */])(
  layouts_shopvue_type_script_lang_js_,
  shopvue_type_template_id_35a1a3dc_scoped_true_render,
  shopvue_type_template_id_35a1a3dc_scoped_true_staticRenderFns,
  false,
  shop_injectStyles,
  "35a1a3dc",
  "51ff6789"
  
)

/* harmony default export */ var shop = (shop_component.exports);

/* nuxt-component-imports */
installComponents(shop_component, {HeaderMobile: __webpack_require__(14).default,ShopHeader: __webpack_require__(28).default,Footer: __webpack_require__(6).default})

// CONCATENATED MODULE: ./.nuxt/App.js
















const layouts = {
  "_auth": sanitizeComponent(auth),
  "_blogs": sanitizeComponent(blogs),
  "_contact": sanitizeComponent(contact),
  "_default": sanitizeComponent(layouts_default),
  "_login": sanitizeComponent(login),
  "_product": sanitizeComponent(product),
  "_shop": sanitizeComponent(shop)
};
/* harmony default export */ var App = ({
  render(h, props) {
    const loadingEl = h('NuxtLoading', {
      ref: 'loading'
    });
    const layoutEl = h(this.layout || 'nuxt');
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl]);
    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll');
          });
        }

      }
    }, [templateEl]);
    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, transitionEl]);
  },

  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: '',
    nbFetching: 0
  }),

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$options.nuxt);
  },

  created() {
    // Add this.$nuxt in child instances
    this.$root.$options.$nuxt = this;

    if (false) {} // Add $nuxt.error()


    this.error = this.nuxt.error; // Add $nuxt.context

    this.context = this.$options.context;
  },

  async mounted() {
    this.$loading = this.$refs.loading;
  },

  watch: {
    'nuxt.err': 'errorChanged'
  },
  computed: {
    isOffline() {
      return !this.isOnline;
    },

    isFetching() {
      return this.nbFetching > 0;
    }

  },
  methods: {
    refreshOnlineStatus() {
      if (false) {}
    },

    async refresh() {
      const pages = getMatchedComponentsInstances(this.$route);

      if (!pages.length) {
        return;
      }

      this.$loading.start();
      const promises = pages.map(page => {
        const p = []; // Old fetch

        if (page.$options.fetch && page.$options.fetch.length) {
          p.push(promisify(page.$options.fetch, this.context));
        }

        if (page.$fetch) {
          p.push(page.$fetch());
        } else {
          // Get all component instance to call $fetch
          for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
            p.push(component.$fetch());
          }
        }

        if (page.$options.asyncData) {
          p.push(promisify(page.$options.asyncData, this.context).then(newData => {
            for (const key in newData) {
              external_vue_default.a.set(page.$data, key, newData[key]);
            }
          }));
        }

        return Promise.all(p);
      });

      try {
        await Promise.all(promises);
      } catch (error) {
        this.$loading.fail(error);
        globalHandleError(error);
        this.error(error);
      }

      this.$loading.finish();
    },

    errorChanged() {
      if (this.nuxt.err) {
        if (this.$loading) {
          if (this.$loading.fail) {
            this.$loading.fail(this.nuxt.err);
          }

          if (this.$loading.finish) {
            this.$loading.finish();
          }
        }

        let errorLayout = (nuxt_error.options || nuxt_error).layout;

        if (typeof errorLayout === 'function') {
          errorLayout = errorLayout(this.context);
        }

        this.setLayout(errorLayout);
      }
    },

    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      this.layoutName = layout;
      this.layout = layouts['_' + layout];
      return this.layout;
    },

    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      return Promise.resolve(layouts['_' + layout]);
    }

  },
  components: {
    NuxtLoading: nuxt_loading
  }
});
// CONCATENATED MODULE: ./.nuxt/store.js


external_vue_default.a.use(external_vuex_default.a);
const VUEX_PROPERTIES = ['state', 'getters', 'actions', 'mutations'];
let store_store = {};

(function updateModules() {
  store_store = normalizeRoot(__webpack_require__(61), 'store/index.js'); // If store is an exported method = classic mode (deprecated)
  // Enforce store modules

  store_store.modules = store_store.modules || {};
  resolveStoreModules(__webpack_require__(62), 'brand/actions.js');
  resolveStoreModules(__webpack_require__(63), 'brand/mutations.js');
  resolveStoreModules(__webpack_require__(64), 'brand/state.js');
  resolveStoreModules(__webpack_require__(65), 'cart/actions.js');
  resolveStoreModules(__webpack_require__(66), 'cart/mutations.js');
  resolveStoreModules(__webpack_require__(67), 'cart/state.js');
  resolveStoreModules(__webpack_require__(68), 'category/actions.js');
  resolveStoreModules(__webpack_require__(69), 'category/mutations.js');
  resolveStoreModules(__webpack_require__(70), 'category/state.js');
  resolveStoreModules(__webpack_require__(71), 'product/actions.js');
  resolveStoreModules(__webpack_require__(72), 'product/mutations.js');
  resolveStoreModules(__webpack_require__(73), 'product/state.js'); // If the environment supports hot reloading...
})(); // createStore


const createStore = store_store instanceof Function ? store_store : () => {
  return new external_vuex_default.a.Store(Object.assign({
    strict: "production" !== 'production'
  }, store_store));
};

function normalizeRoot(moduleData, filePath) {
  moduleData = moduleData.default || moduleData;

  if (moduleData.commit) {
    throw new Error(`[nuxt] ${filePath} should export a method that returns a Vuex instance.`);
  }

  if (typeof moduleData !== 'function') {
    // Avoid TypeError: setting a property that has only a getter when overwriting top level keys
    moduleData = Object.assign({}, moduleData);
  }

  return normalizeModule(moduleData, filePath);
}

function normalizeModule(moduleData, filePath) {
  if (moduleData.state && typeof moduleData.state !== 'function') {
    console.warn(`'state' should be a method that returns an object in ${filePath}`);
    const state = Object.assign({}, moduleData.state); // Avoid TypeError: setting a property that has only a getter when overwriting top level keys

    moduleData = Object.assign({}, moduleData, {
      state: () => state
    });
  }

  return moduleData;
}

function resolveStoreModules(moduleData, filename) {
  moduleData = moduleData.default || moduleData; // Remove store src + extension (./foo/index.js -> foo/index)

  const namespace = filename.replace(/\.(js|mjs)$/, '');
  const namespaces = namespace.split('/');
  let moduleName = namespaces[namespaces.length - 1];
  const filePath = `store/${filename}`;
  moduleData = moduleName === 'state' ? normalizeState(moduleData, filePath) : normalizeModule(moduleData, filePath); // If src is a known Vuex property

  if (VUEX_PROPERTIES.includes(moduleName)) {
    const property = moduleName;
    const propertyStoreModule = getStoreModule(store_store, namespaces, {
      isProperty: true
    }); // Replace state since it's a function

    mergeProperty(propertyStoreModule, moduleData, property);
    return;
  } // If file is foo/index.js, it should be saved as foo


  const isIndexModule = moduleName === 'index';

  if (isIndexModule) {
    namespaces.pop();
    moduleName = namespaces[namespaces.length - 1];
  }

  const storeModule = getStoreModule(store_store, namespaces);

  for (const property of VUEX_PROPERTIES) {
    mergeProperty(storeModule, moduleData[property], property);
  }

  if (moduleData.namespaced === false) {
    delete storeModule.namespaced;
  }
}

function normalizeState(moduleData, filePath) {
  if (typeof moduleData !== 'function') {
    console.warn(`${filePath} should export a method that returns an object`);
    const state = Object.assign({}, moduleData);
    return () => state;
  }

  return normalizeModule(moduleData, filePath);
}

function getStoreModule(storeModule, namespaces, {
  isProperty = false
} = {}) {
  // If ./mutations.js
  if (!namespaces.length || isProperty && namespaces.length === 1) {
    return storeModule;
  }

  const namespace = namespaces.shift();
  storeModule.modules[namespace] = storeModule.modules[namespace] || {};
  storeModule.modules[namespace].namespaced = true;
  storeModule.modules[namespace].modules = storeModule.modules[namespace].modules || {};
  return getStoreModule(storeModule.modules[namespace], namespaces, {
    isProperty
  });
}

function mergeProperty(storeModule, moduleData, property) {
  if (!moduleData) {
    return;
  }

  if (property === 'state') {
    storeModule.state = moduleData || storeModule.state;
  } else {
    storeModule[property] = Object.assign({}, storeModule[property], moduleData);
  }
}
// CONCATENATED MODULE: ./.nuxt/components/utils.js
// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options;
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {});
  return {
    render(h) {
      const attrs = {};
      const props = {};

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key];
        } else {
          attrs[key] = this.$attrs[key];
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots
      }, this.$slots.default);
    }

  };
}
// CONCATENATED MODULE: ./.nuxt/components/plugin.js


const components = {
  AboutUsBanner: () => __webpack_require__.e(/* import() | components/about-us-banner */ 1).then(__webpack_require__.bind(null, 106)).then(c => wrapFunctional(c.default || c)),
  Banner: () => __webpack_require__.e(/* import() | components/banner */ 2).then(__webpack_require__.bind(null, 108)).then(c => wrapFunctional(c.default || c)),
  BestDealSlider: () => __webpack_require__.e(/* import() | components/best-deal-slider */ 3).then(__webpack_require__.bind(null, 104)).then(c => wrapFunctional(c.default || c)),
  Blog: () => __webpack_require__.e(/* import() | components/blog */ 4).then(__webpack_require__.bind(null, 110)).then(c => wrapFunctional(c.default || c)),
  BlogSidebar: () => __webpack_require__.e(/* import() | components/blog-sidebar */ 5).then(__webpack_require__.bind(null, 134)).then(c => wrapFunctional(c.default || c)),
  BrandCard: () => __webpack_require__.e(/* import() | components/brand-card */ 6).then(__webpack_require__.bind(null, 88)).then(c => wrapFunctional(c.default || c)),
  Breadcrumbs: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 78)).then(c => wrapFunctional(c.default || c)),
  CommentForm: () => __webpack_require__.e(/* import() | components/comment-form */ 7).then(__webpack_require__.bind(null, 107)).then(c => wrapFunctional(c.default || c)),
  DropdownMenu: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 15)).then(c => wrapFunctional(c.default || c)),
  Footer: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 6)).then(c => wrapFunctional(c.default || c)),
  HeaderMobile: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 14)).then(c => wrapFunctional(c.default || c)),
  HomeHeader: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 79)).then(c => wrapFunctional(c.default || c)),
  Pagination: () => __webpack_require__.e(/* import() | components/pagination */ 8).then(__webpack_require__.bind(null, 90)).then(c => wrapFunctional(c.default || c)),
  ProductCard: () => __webpack_require__.e(/* import() | components/product-card */ 9).then(__webpack_require__.bind(null, 89)).then(c => wrapFunctional(c.default || c)),
  ProductCarousel: () => __webpack_require__.e(/* import() | components/product-carousel */ 10).then(__webpack_require__.bind(null, 135)).then(c => wrapFunctional(c.default || c)),
  ProductDetailHeader: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 81)).then(c => wrapFunctional(c.default || c)),
  Search: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 80)).then(c => wrapFunctional(c.default || c)),
  ShopHeader: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 28)).then(c => wrapFunctional(c.default || c)),
  SmallBanner: () => __webpack_require__.e(/* import() | components/small-banner */ 11).then(__webpack_require__.bind(null, 109)).then(c => wrapFunctional(c.default || c)),
  SubMenu: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 76)).then(c => wrapFunctional(c.default || c)),
  SubMenuItem: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 77)).then(c => wrapFunctional(c.default || c)),
  Tag: () => __webpack_require__.e(/* import() | components/tag */ 12).then(__webpack_require__.bind(null, 111)).then(c => wrapFunctional(c.default || c)),
  TopBrandSlider: () => __webpack_require__.e(/* import() | components/top-brand-slider */ 13).then(__webpack_require__.bind(null, 103)).then(c => wrapFunctional(c.default || c)),
  TrendingProduct: () => __webpack_require__.e(/* import() | components/trending-product */ 14).then(__webpack_require__.bind(null, 105)).then(c => wrapFunctional(c.default || c)),
  UIcomponentsAlert: () => __webpack_require__.e(/* import() | components/u-icomponents-alert */ 15).then(__webpack_require__.bind(null, 91)).then(c => wrapFunctional(c.default || c)),
  UIcomponentsModal: () => __webpack_require__.e(/* import() | components/u-icomponents-modal */ 16).then(__webpack_require__.bind(null, 132)).then(c => wrapFunctional(c.default || c)),
  UIcomponentsSlideOver: () => __webpack_require__.e(/* import() | components/u-icomponents-slide-over */ 17).then(__webpack_require__.bind(null, 133)).then(c => wrapFunctional(c.default || c))
};

for (const name in components) {
  external_vue_default.a.component(name, components[name]);
  external_vue_default.a.component('Lazy' + name, components[name]);
}
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(9);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "defu"
var external_defu_ = __webpack_require__(10);
var external_defu_default = /*#__PURE__*/__webpack_require__.n(external_defu_);

// CONCATENATED MODULE: ./.nuxt/axios.js

 // Axios.prototype cannot be modified

const axiosExtra = {
  setBaseURL(baseURL) {
    this.defaults.baseURL = baseURL;
  },

  setHeader(name, value, scopes = 'common') {
    for (const scope of Array.isArray(scopes) ? scopes : [scopes]) {
      if (!value) {
        delete this.defaults.headers[scope][name];
        continue;
      }

      this.defaults.headers[scope][name] = value;
    }
  },

  setToken(token, type, scopes = 'common') {
    const value = !token ? null : (type ? type + ' ' : '') + token;
    this.setHeader('Authorization', value, scopes);
  },

  onRequest(fn) {
    this.interceptors.request.use(config => fn(config) || config);
  },

  onResponse(fn) {
    this.interceptors.response.use(response => fn(response) || response);
  },

  onRequestError(fn) {
    this.interceptors.request.use(undefined, error => fn(error) || Promise.reject(error));
  },

  onResponseError(fn) {
    this.interceptors.response.use(undefined, error => fn(error) || Promise.reject(error));
  },

  onError(fn) {
    this.onRequestError(fn);
    this.onResponseError(fn);
  },

  create(options) {
    return createAxiosInstance(external_defu_default()(options, this.defaults));
  }

}; // Request helpers ($get, $post, ...)

for (const method of ['request', 'delete', 'get', 'head', 'options', 'post', 'put', 'patch']) {
  axiosExtra['$' + method] = function () {
    return this[method].apply(this, arguments).then(res => res && res.data);
  };
}

const extendAxiosInstance = axios => {
  for (const key in axiosExtra) {
    axios[key] = axiosExtra[key].bind(axios);
  }
};

const createAxiosInstance = axiosOptions => {
  // Create new axios instance
  const axios = external_axios_default.a.create(axiosOptions);
  axios.CancelToken = external_axios_default.a.CancelToken;
  axios.isCancel = external_axios_default.a.isCancel; // Extend axios proto

  extendAxiosInstance(axios); // Intercept to apply default headers

  axios.onRequest(config => {
    config.headers = { ...axios.defaults.headers.common,
      ...config.headers
    };
  }); // Setup interceptors

  setupCredentialsInterceptor(axios);
  setupProgress(axios);
  return axios;
};

const setupCredentialsInterceptor = axios => {
  // Send credentials only to relative and API Backend requests
  axios.onRequest(config => {
    if (config.withCredentials === undefined) {
      if (!/^https?:\/\//i.test(config.url) || config.url.indexOf(config.baseURL) === 0) {
        config.withCredentials = true;
      }
    }
  });
};

const setupProgress = axios => {
  if (true) {
    return;
  } // A noop loading inteterface for when $nuxt is not yet ready


  const noopLoading = {
    finish: () => {},
    start: () => {},
    fail: () => {},
    set: () => {}
  };

  const $loading = () => {
    const $nuxt = typeof window !== 'undefined' && window['$nuxt'];
    return $nuxt && $nuxt.$loading && $nuxt.$loading.set ? $nuxt.$loading : noopLoading;
  };

  let currentRequests = 0;
  axios.onRequest(config => {
    if (config && config.progress === false) {
      return;
    }

    currentRequests++;
  });
  axios.onResponse(response => {
    if (response && response.config && response.config.progress === false) {
      return;
    }

    currentRequests--;

    if (currentRequests <= 0) {
      currentRequests = 0;
      $loading().finish();
    }
  });
  axios.onError(error => {
    if (error && error.config && error.config.progress === false) {
      return;
    }

    currentRequests--;

    if (external_axios_default.a.isCancel(error)) {
      if (currentRequests <= 0) {
        currentRequests = 0;
        $loading().finish();
      }

      return;
    }

    $loading().fail();
    $loading().finish();
  });

  const onProgress = e => {
    if (!currentRequests || !e.total) {
      return;
    }

    const progress = e.loaded * 100 / (e.total * currentRequests);
    $loading().set(Math.min(100, progress));
  };

  axios.defaults.onUploadProgress = onProgress;
  axios.defaults.onDownloadProgress = onProgress;
};

/* harmony default export */ var _nuxt_axios = ((ctx, inject) => {
  // runtimeConfig
  const runtimeConfig = ctx.$config && ctx.$config.axios || {}; // baseURL

  const baseURL =  false ? undefined : runtimeConfig.baseURL || runtimeConfig.baseUrl || process.env._AXIOS_BASE_URL_ || 'http://localhost:3000/'; // Create fresh objects for all default header scopes
  // Axios creates only one which is shared across SSR requests!
  // https://github.com/mzabriskie/axios/blob/master/lib/defaults.js

  const headers = {
    "common": {
      "Accept": "application/json, text/plain, */*"
    },
    "delete": {},
    "get": {},
    "head": {},
    "post": {},
    "put": {},
    "patch": {}
  };
  const axiosOptions = {
    baseURL,
    headers
  }; // Proxy SSR request headers headers

  if ( true && ctx.req && ctx.req.headers) {
    const reqHeaders = { ...ctx.req.headers
    };

    for (const h of ["accept", "cf-connecting-ip", "cf-ray", "content-length", "content-md5", "content-type", "host", "x-forwarded-host", "x-forwarded-port", "x-forwarded-proto"]) {
      delete reqHeaders[h];
    }

    axiosOptions.headers.common = { ...reqHeaders,
      ...axiosOptions.headers.common
    };
  }

  if (true) {
    // Don't accept brotli encoding because Node can't parse it
    axiosOptions.headers.common['accept-encoding'] = 'gzip, deflate';
  }

  const axios = createAxiosInstance(axiosOptions); // Inject axios to the context as $axios

  ctx.$axios = axios;
  inject('axios', axios);
});
// EXTERNAL MODULE: ./.nuxt/empty.js
var _nuxt_empty = __webpack_require__(13);

// EXTERNAL MODULE: external "vue-lazyload"
var external_vue_lazyload_ = __webpack_require__(31);
var external_vue_lazyload_default = /*#__PURE__*/__webpack_require__.n(external_vue_lazyload_);

// CONCATENATED MODULE: ./plugins/lazy-load.js



const loadimage = __webpack_require__(74);

external_vue_default.a.use(external_vue_lazyload_default.a, {
  preLoad: 1.3,
  error: '/404.png',
  loading: loadimage,
  attempt: 3,
  listenEvents: ['scroll', 'touchmove', 'transitionend']
});
// CONCATENATED MODULE: ./services/AuthService.js
const resource = "http://157.245.55.243/api";
/* harmony default export */ var AuthService = ($axios => ({
  login(payload) {
    return $axios.post(`${resource}/login`, payload);
  },

  register(payload) {
    return $axios.post(`${resource}/register`, payload);
  }

}));
// CONCATENATED MODULE: ./services/CategoryService.js
const CategoryService_resource = "http://157.245.55.243/api" + '/category';
/* harmony default export */ var CategoryService = ($axios => ({
  all(type) {
    let params = {};

    if (type) {
      params = {
        type
      };
    }

    return $axios.get(CategoryService_resource, {
      params
    });
  },

  categoryWithProduct(slug, params = {}) {
    return $axios.get(CategoryService_resource + `/p/${slug}`, {
      params
    });
  },

  store(payload) {
    return $axios.post(CategoryService_resource, payload);
  },

  show(id) {
    return $axios.get(`${CategoryService_resource}/${id}`);
  },

  update(id, payload) {
    return $axios.put(`${CategoryService_resource}/${id}`, payload);
  },

  delete(id) {
    return $axios.delete(`${CategoryService_resource}/${id}`);
  }

}));
// CONCATENATED MODULE: ./services/ContactService.js
const ContactService_resource = 'http://localhost:8000/api/lien-he';
/* harmony default export */ var ContactService = ($axios => ({
  post(payload) {
    return $axios.post(`${ContactService_resource}`, payload);
  }

}));
// CONCATENATED MODULE: ./services/ProductService.js
const ProductService_resource = "http://157.245.55.243/api" + '/product';
/* harmony default export */ var ProductService = ($axios => ({
  all() {
    return $axios.get(ProductService_resource);
  },

  getSaleProduct() {
    return $axios.get(ProductService_resource, {
      params: {
        sale: true
      }
    });
  },

  getTrendingProduct() {
    return $axios.get(ProductService_resource, {
      params: {
        trending: true
      }
    });
  },

  store(payload) {
    return $axios.post(ProductService_resource, payload, {
      headers: {
        'Content-Type': 'multipart/form-data;boundary=' + Math.random().toString().substr(2)
      }
    });
  },

  show(slug) {
    return $axios.get(`${ProductService_resource}/${slug}`);
  },

  update(id, payload) {
    return $axios.put(`${ProductService_resource}/${id}`, payload);
  },

  delete(id) {
    return $axios.delete(`${ProductService_resource}/${id}`);
  }

}));
// CONCATENATED MODULE: ./services/BrandService.js
const BrandService_resource = "http://157.245.55.243/api" + '/brand';
/* harmony default export */ var BrandService = ($axios => ({
  all(params) {
    console.log(params);
    return $axios.get(BrandService_resource, {
      params
    });
  },

  productsByBrand(slug, params = {}) {
    return $axios.get(BrandService_resource + `/${slug}`, {
      params
    });
  }

}));
// CONCATENATED MODULE: ./services/ProductReview.js
const ProductReview_resource = "http://157.245.55.243/api" + '/product-review';
/* harmony default export */ var ProductReview = ($axios => ({
  store(payload) {
    return $axios.post(ProductReview_resource, payload);
  }

}));
// CONCATENATED MODULE: ./services/Service.js






/* harmony default export */ var Service = ($axios => ({
  Auth: AuthService($axios),
  Category: CategoryService($axios),
  Contact: ContactService($axios),
  Product: ProductService($axios),
  Brand: BrandService($axios),
  ProductReview: ProductReview($axios)
}));
// CONCATENATED MODULE: ./plugins/services.js

/* harmony default export */ var services = ((ctx, inject) => {
  inject('services', Service(ctx.$axios));
});
// EXTERNAL MODULE: ./node_modules/vee-validate/dist/vee-validate.js
var vee_validate = __webpack_require__(8);

// CONCATENATED MODULE: ./node_modules/vee-validate/dist/rules.js
/**
  * vee-validate v3.0.11
  * (c) 2019 Abdelrahman Awad
  * @license MIT
  */

/**
 * Some Alpha Regex helpers.
 * https://github.com/chriso/validator.js/blob/master/src/lib/alpha.js
 */
var alpha = {
  en: /^[A-Z]*$/i,
  cs: /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]*$/i,
  da: /^[A-ZÆØÅ]*$/i,
  de: /^[A-ZÄÖÜß]*$/i,
  es: /^[A-ZÁÉÍÑÓÚÜ]*$/i,
  fr: /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]*$/i,
  it: /^[A-Z\xC0-\xFF]*$/i,
  lt: /^[A-ZĄČĘĖĮŠŲŪŽ]*$/i,
  nl: /^[A-ZÉËÏÓÖÜ]*$/i,
  hu: /^[A-ZÁÉÍÓÖŐÚÜŰ]*$/i,
  pl: /^[A-ZĄĆĘŚŁŃÓŻŹ]*$/i,
  pt: /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]*$/i,
  ru: /^[А-ЯЁ]*$/i,
  sk: /^[A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ]*$/i,
  sr: /^[A-ZČĆŽŠĐ]*$/i,
  sv: /^[A-ZÅÄÖ]*$/i,
  tr: /^[A-ZÇĞİıÖŞÜ]*$/i,
  uk: /^[А-ЩЬЮЯЄІЇҐ]*$/i,
  ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]*$/,
  az: /^[A-ZÇƏĞİıÖŞÜ]*$/i
};
var alphaSpaces = {
  en: /^[A-Z\s]*$/i,
  cs: /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ\s]*$/i,
  da: /^[A-ZÆØÅ\s]*$/i,
  de: /^[A-ZÄÖÜß\s]*$/i,
  es: /^[A-ZÁÉÍÑÓÚÜ\s]*$/i,
  fr: /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ\s]*$/i,
  it: /^[A-Z\xC0-\xFF\s]*$/i,
  lt: /^[A-ZĄČĘĖĮŠŲŪŽ\s]*$/i,
  nl: /^[A-ZÉËÏÓÖÜ\s]*$/i,
  hu: /^[A-ZÁÉÍÓÖŐÚÜŰ\s]*$/i,
  pl: /^[A-ZĄĆĘŚŁŃÓŻŹ\s]*$/i,
  pt: /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ\s]*$/i,
  ru: /^[А-ЯЁ\s]*$/i,
  sk: /^[A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ\s]*$/i,
  sr: /^[A-ZČĆŽŠĐ\s]*$/i,
  sv: /^[A-ZÅÄÖ\s]*$/i,
  tr: /^[A-ZÇĞİıÖŞÜ\s]*$/i,
  uk: /^[А-ЩЬЮЯЄІЇҐ\s]*$/i,
  ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ\s]*$/,
  az: /^[A-ZÇƏĞİıÖŞÜ\s]*$/i
};
var alphanumeric = {
  en: /^[0-9A-Z]*$/i,
  cs: /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]*$/i,
  da: /^[0-9A-ZÆØÅ]$/i,
  de: /^[0-9A-ZÄÖÜß]*$/i,
  es: /^[0-9A-ZÁÉÍÑÓÚÜ]*$/i,
  fr: /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]*$/i,
  it: /^[0-9A-Z\xC0-\xFF]*$/i,
  lt: /^[0-9A-ZĄČĘĖĮŠŲŪŽ]*$/i,
  hu: /^[0-9A-ZÁÉÍÓÖŐÚÜŰ]*$/i,
  nl: /^[0-9A-ZÉËÏÓÖÜ]*$/i,
  pl: /^[0-9A-ZĄĆĘŚŁŃÓŻŹ]*$/i,
  pt: /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]*$/i,
  ru: /^[0-9А-ЯЁ]*$/i,
  sk: /^[0-9A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ]*$/i,
  sr: /^[0-9A-ZČĆŽŠĐ]*$/i,
  sv: /^[0-9A-ZÅÄÖ]*$/i,
  tr: /^[0-9A-ZÇĞİıÖŞÜ]*$/i,
  uk: /^[0-9А-ЩЬЮЯЄІЇҐ]*$/i,
  ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]*$/,
  az: /^[0-9A-ZÇƏĞİıÖŞÜ]*$/i
};
var alphaDash = {
  en: /^[0-9A-Z_-]*$/i,
  cs: /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ_-]*$/i,
  da: /^[0-9A-ZÆØÅ_-]*$/i,
  de: /^[0-9A-ZÄÖÜß_-]*$/i,
  es: /^[0-9A-ZÁÉÍÑÓÚÜ_-]*$/i,
  fr: /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ_-]*$/i,
  it: /^[0-9A-Z\xC0-\xFF_-]*$/i,
  lt: /^[0-9A-ZĄČĘĖĮŠŲŪŽ_-]*$/i,
  nl: /^[0-9A-ZÉËÏÓÖÜ_-]*$/i,
  hu: /^[0-9A-ZÁÉÍÓÖŐÚÜŰ_-]*$/i,
  pl: /^[0-9A-ZĄĆĘŚŁŃÓŻŹ_-]*$/i,
  pt: /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ_-]*$/i,
  ru: /^[0-9А-ЯЁ_-]*$/i,
  sk: /^[0-9A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ_-]*$/i,
  sr: /^[0-9A-ZČĆŽŠĐ_-]*$/i,
  sv: /^[0-9A-ZÅÄÖ_-]*$/i,
  tr: /^[0-9A-ZÇĞİıÖŞÜ_-]*$/i,
  uk: /^[0-9А-ЩЬЮЯЄІЇҐ_-]*$/i,
  ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ_-]*$/,
  az: /^[0-9A-ZÇƏĞİıÖŞÜ_-]*$/i
};

var validate = function (value, _a) {
  var _b = (_a === void 0 ? {} : _a).locale,
      locale = _b === void 0 ? '' : _b;

  if (Array.isArray(value)) {
    return value.every(function (val) {
      return validate(val, {
        locale: locale
      });
    });
  } // Match at least one locale.


  if (!locale) {
    return Object.keys(alpha).some(function (loc) {
      return alpha[loc].test(value);
    });
  }

  return (alpha[locale] || alpha.en).test(value);
};

var params = [{
  name: 'locale'
}];
var alpha$1 = {
  validate: validate,
  params: params
};

var validate$1 = function (value, _a) {
  var _b = (_a === void 0 ? {} : _a).locale,
      locale = _b === void 0 ? '' : _b;

  if (Array.isArray(value)) {
    return value.every(function (val) {
      return validate$1(val, {
        locale: locale
      });
    });
  } // Match at least one locale.


  if (!locale) {
    return Object.keys(alphaDash).some(function (loc) {
      return alphaDash[loc].test(value);
    });
  }

  return (alphaDash[locale] || alphaDash.en).test(value);
};

var params$1 = [{
  name: 'locale'
}];
var alpha_dash = {
  validate: validate$1,
  params: params$1
};

var validate$2 = function (value, _a) {
  var _b = (_a === void 0 ? {} : _a).locale,
      locale = _b === void 0 ? '' : _b;

  if (Array.isArray(value)) {
    return value.every(function (val) {
      return validate$2(val, {
        locale: locale
      });
    });
  } // Match at least one locale.


  if (!locale) {
    return Object.keys(alphanumeric).some(function (loc) {
      return alphanumeric[loc].test(value);
    });
  }

  return (alphanumeric[locale] || alphanumeric.en).test(value);
};

var params$2 = [{
  name: 'locale'
}];
var alpha_num = {
  validate: validate$2,
  params: params$2
};

var validate$3 = function (value, _a) {
  var _b = (_a === void 0 ? {} : _a).locale,
      locale = _b === void 0 ? '' : _b;

  if (Array.isArray(value)) {
    return value.every(function (val) {
      return validate$3(val, {
        locale: locale
      });
    });
  } // Match at least one locale.


  if (!locale) {
    return Object.keys(alphaSpaces).some(function (loc) {
      return alphaSpaces[loc].test(value);
    });
  }

  return (alphaSpaces[locale] || alphaSpaces.en).test(value);
};

var params$3 = [{
  name: 'locale'
}];
var alpha_spaces = {
  validate: validate$3,
  params: params$3
};

var validate$4 = function (value, _a) {
  var _b = _a === void 0 ? {} : _a,
      min = _b.min,
      max = _b.max;

  if (Array.isArray(value)) {
    return value.every(function (val) {
      return !!validate$4(val, {
        min: min,
        max: max
      });
    });
  }

  return Number(min) <= value && Number(max) >= value;
};

var params$4 = [{
  name: 'min'
}, {
  name: 'max'
}];
var between = {
  validate: validate$4,
  params: params$4
};

var validate$5 = function (value, _a) {
  var target = _a.target;
  return String(value) === String(target);
};

var params$5 = [{
  name: 'target',
  isTarget: true
}];
var confirmed = {
  validate: validate$5,
  params: params$5
};

var validate$6 = function (value, _a) {
  var length = _a.length;

  if (Array.isArray(value)) {
    return value.every(function (val) {
      return validate$6(val, {
        length: length
      });
    });
  }

  var strVal = String(value);
  return /^[0-9]*$/.test(strVal) && strVal.length === length;
};

var params$6 = [{
  name: 'length',
  cast: function (value) {
    return Number(value);
  }
}];
var digits = {
  validate: validate$6,
  params: params$6
};

var validateImage = function (file, width, height) {
  var URL = window.URL || window.webkitURL;
  return new Promise(function (resolve) {
    var image = new Image();

    image.onerror = function () {
      return resolve(false);
    };

    image.onload = function () {
      return resolve(image.width === width && image.height === height);
    };

    image.src = URL.createObjectURL(file);
  });
};

var validate$7 = function (files, _a) {
  var width = _a.width,
      height = _a.height;
  var list = [];
  files = Array.isArray(files) ? files : [files];

  for (var i = 0; i < files.length; i++) {
    // if file is not an image, reject.
    if (!/\.(jpg|svg|jpeg|png|bmp|gif)$/i.test(files[i].name)) {
      return Promise.resolve(false);
    }

    list.push(files[i]);
  }

  return Promise.all(list.map(function (file) {
    return validateImage(file, width, height);
  })).then(function (values) {
    return values.every(function (v) {
      return v;
    });
  });
};

var params$7 = [{
  name: 'width',
  cast: function (value) {
    return Number(value);
  }
}, {
  name: 'height',
  cast: function (value) {
    return Number(value);
  }
}];
var dimensions = {
  validate: validate$7,
  params: params$7
};

var validate$8 = function (value, _a) {
  var multiple = (_a === void 0 ? {} : _a).multiple; // eslint-disable-next-line

  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (multiple && !Array.isArray(value)) {
    value = String(value).split(',').map(function (emailStr) {
      return emailStr.trim();
    });
  }

  if (Array.isArray(value)) {
    return value.every(function (val) {
      return re.test(String(val));
    });
  }

  return re.test(String(value));
};

var params$8 = [{
  name: 'multiple',
  default: false
}];
var email = {
  validate: validate$8,
  params: params$8
};
/**
 * Checks if the values are either null or undefined.
 */

var isNullOrUndefined = function (value) {
  return value === null || value === undefined;
};

var includes = function (collection, item) {
  return collection.indexOf(item) !== -1;
};
/**
 * Checks if a function is callable.
 */


var isCallable = function (func) {
  return typeof func === 'function';
};
/* istanbul ignore next */


function _copyArray(arrayLike) {
  var array = [];
  var length = arrayLike.length;

  for (var i = 0; i < length; i++) {
    array.push(arrayLike[i]);
  }

  return array;
}
/**
 * Converts an array-like object to array, provides a simple polyfill for Array.from
 */


function toArray(arrayLike) {
  if (isCallable(Array.from)) {
    return Array.from(arrayLike);
  }
  /* istanbul ignore next */


  return _copyArray(arrayLike);
}

var isEmptyArray = function (arr) {
  return Array.isArray(arr) && arr.length === 0;
};

var validate$9 = function (value, options) {
  if (Array.isArray(value)) {
    return value.every(function (val) {
      return validate$9(val, options);
    });
  }

  return toArray(options).some(function (item) {
    // eslint-disable-next-line
    return item == value;
  });
};

var oneOf = {
  validate: validate$9
};

var validate$a = function (value, args) {
  return !validate$9(value, args);
};

var excluded = {
  validate: validate$a
};

var validate$b = function (files, extensions) {
  var regex = new RegExp(".(" + extensions.join('|') + ")$", 'i');

  if (Array.isArray(files)) {
    return files.every(function (file) {
      return regex.test(file.name);
    });
  }

  return regex.test(files.name);
};

var ext = {
  validate: validate$b
};

var validate$c = function (files) {
  var regex = /\.(jpg|svg|jpeg|png|bmp|gif)$/i;

  if (Array.isArray(files)) {
    return files.every(function (file) {
      return regex.test(file.name);
    });
  }

  return regex.test(files.name);
};

var rules_image = {
  validate: validate$c
};

var validate$d = function (value) {
  if (Array.isArray(value)) {
    return value.every(function (val) {
      return /^-?[0-9]+$/.test(String(val));
    });
  }

  return /^-?[0-9]+$/.test(String(value));
};

var integer = {
  validate: validate$d
};

var validate$e = function (value, _a) {
  var other = _a.other;
  return value === other;
};

var params$9 = [{
  name: 'other'
}];
var is = {
  validate: validate$e,
  params: params$9
};

var validate$f = function (value, _a) {
  var other = _a.other;
  return value !== other;
};

var params$a = [{
  name: 'other'
}];
var is_not = {
  validate: validate$f,
  params: params$a
};

var validate$g = function (value, _a) {
  var length = _a.length;

  if (isNullOrUndefined(value)) {
    return false;
  }

  if (typeof value === 'number') {
    value = String(value);
  }

  if (!value.length) {
    value = toArray(value);
  }

  return value.length === length;
};

var params$b = [{
  name: 'length',
  cast: function (value) {
    return Number(value);
  }
}];
var rules_length = {
  validate: validate$g,
  params: params$b
};

var validate$h = function (value, _a) {
  var length = _a.length;

  if (isNullOrUndefined(value)) {
    return length >= 0;
  }

  if (Array.isArray(value)) {
    return value.every(function (val) {
      return validate$h(val, {
        length: length
      });
    });
  }

  return String(value).length <= length;
};

var params$c = [{
  name: 'length',
  cast: function (value) {
    return Number(value);
  }
}];
var max = {
  validate: validate$h,
  params: params$c
};

var validate$i = function (value, _a) {
  var max = _a.max;

  if (isNullOrUndefined(value) || value === '') {
    return false;
  }

  if (Array.isArray(value)) {
    return value.length > 0 && value.every(function (val) {
      return validate$i(val, {
        max: max
      });
    });
  }

  return Number(value) <= max;
};

var params$d = [{
  name: 'max',
  cast: function (value) {
    return Number(value);
  }
}];
var max_value = {
  validate: validate$i,
  params: params$d
};

var validate$j = function (files, mimes) {
  var regex = new RegExp(mimes.join('|').replace('*', '.+') + "$", 'i');

  if (Array.isArray(files)) {
    return files.every(function (file) {
      return regex.test(file.type);
    });
  }

  return regex.test(files.type);
};

var mimes = {
  validate: validate$j
};

var validate$k = function (value, _a) {
  var length = _a.length;

  if (isNullOrUndefined(value)) {
    return false;
  }

  if (Array.isArray(value)) {
    return value.every(function (val) {
      return validate$k(val, {
        length: length
      });
    });
  }

  return String(value).length >= length;
};

var params$e = [{
  name: 'length',
  cast: function (value) {
    return Number(value);
  }
}];
var min = {
  validate: validate$k,
  params: params$e
};

var validate$l = function (value, _a) {
  var min = _a.min;

  if (isNullOrUndefined(value) || value === '') {
    return false;
  }

  if (Array.isArray(value)) {
    return value.length > 0 && value.every(function (val) {
      return validate$l(val, {
        min: min
      });
    });
  }

  return Number(value) >= min;
};

var params$f = [{
  name: 'min',
  cast: function (value) {
    return Number(value);
  }
}];
var min_value = {
  validate: validate$l,
  params: params$f
};
var ar = /^[٠١٢٣٤٥٦٧٨٩]+$/;
var en = /^[0-9]+$/;

var validate$m = function (value) {
  var testValue = function (val) {
    var strValue = String(val);
    return en.test(strValue) || ar.test(strValue);
  };

  if (Array.isArray(value)) {
    return value.every(testValue);
  }

  return testValue(value);
};

var numeric = {
  validate: validate$m
};

var validate$n = function (value, _a) {
  var regex = _a.regex;

  if (Array.isArray(value)) {
    return value.every(function (val) {
      return validate$n(val, {
        regex: regex
      });
    });
  }

  return regex.test(String(value));
};

var params$g = [{
  name: 'regex',
  cast: function (value) {
    if (typeof value === 'string') {
      return new RegExp(value);
    }

    return value;
  }
}];
var regex = {
  validate: validate$n,
  params: params$g
};

var validate$o = function (value, _a) {
  var allowFalse = (_a === void 0 ? {
    allowFalse: true
  } : _a).allowFalse;
  var result = {
    valid: false,
    required: true
  };

  if (isNullOrUndefined(value) || isEmptyArray(value)) {
    return result;
  } // incase a field considers `false` as an empty value like checkboxes.


  if (value === false && !allowFalse) {
    return result;
  }

  result.valid = !!String(value).trim().length;
  return result;
};

var computesRequired = true;
var params$h = [{
  name: 'allowFalse',
  default: true
}];
var required = {
  validate: validate$o,
  params: params$h,
  computesRequired: computesRequired
};

var testEmpty = function (value) {
  return isEmptyArray(value) || includes([false, null, undefined], value) || !String(value).trim().length;
};

var validate$p = function (value, _a) {
  var target = _a.target,
      values = _a.values;
  var required;

  if (values && values.length) {
    if (!Array.isArray(values) && typeof values === 'string') {
      values = [values];
    } // eslint-disable-next-line


    required = values.some(function (val) {
      return val == String(target).trim();
    });
  } else {
    required = !testEmpty(target);
  }

  if (!required) {
    return {
      valid: true,
      required: required
    };
  }

  return {
    valid: !testEmpty(value),
    required: required
  };
};

var params$i = [{
  name: 'target',
  isTarget: true
}, {
  name: 'values'
}];
var computesRequired$1 = true;
var required_if = {
  validate: validate$p,
  params: params$i,
  computesRequired: computesRequired$1
};

var validate$q = function (files, _a) {
  var size = _a.size;

  if (isNaN(size)) {
    return false;
  }

  var nSize = size * 1024;

  if (!Array.isArray(files)) {
    return files.size <= nSize;
  }

  for (var i = 0; i < files.length; i++) {
    if (files[i].size > nSize) {
      return false;
    }
  }

  return true;
};

var params$j = [{
  name: 'size',
  cast: function (value) {
    return Number(value);
  }
}];
var size = {
  validate: validate$q,
  params: params$j
};

// CONCATENATED MODULE: ./plugins/vee-validate.js


Object(vee_validate["extend"])('isValidateEmail', {
  validate: value => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(value).toLowerCase());
  },
  message: "Vui lòng nhập đúng định dạng email"
}); // rule để validate form 

Object(vee_validate["extend"])("required", { ...required,
  message: "Hãy nhập trường này"
});
Object(vee_validate["extend"])("alpha", { ...alpha$1,
  message: "This field must only contain alphabetic characters"
});
Object(vee_validate["extend"])("vnPhone", {
  validate: value => {
    const re = /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/;
    return re.test(String(value).toLowerCase());
  },
  message: "Hãy nhập đúng định dạng số điện thoại!"
});
// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(32);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// CONCATENATED MODULE: ./plugins/filters.js


external_vue_default.a.filter('formatDate', function (value) {
  if (value) {
    return external_moment_default()(String(value)).format('DD/MM/YYYY hh:mm');
  }
});
external_vue_default.a.filter('toVndCurrency', function (value) {
  if (typeof value !== "number") {
    return value;
  }

  var formatter = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
    minimumFractionDigits: 0
  });
  return formatter.format(value);
});
external_vue_default.a.filter('percentage', function (value) {
  if (!value) {
    return '0%';
  }

  return `${+value}%`;
});
// EXTERNAL MODULE: external "requrl"
var external_requrl_ = __webpack_require__(12);

// EXTERNAL MODULE: external "cookie"
var external_cookie_ = __webpack_require__(18);

// EXTERNAL MODULE: external "jwt-decode"
var external_jwt_decode_ = __webpack_require__(19);

// CONCATENATED MODULE: ./node_modules/@nuxtjs/auth-next/dist/runtime.mjs






const isUnset = (o) => typeof o === "undefined" || o === null;
const isSet = (o) => !isUnset(o);
const isSameURL = (ctx, a, b) => normalizePath(a, ctx) === normalizePath(b, ctx);
function isRelativeURL(u) {
  return u && u.length && new RegExp([
    "^\\/([a-zA-Z0-9@\\-%_~.:]",
    "[/a-zA-Z0-9@\\-%_~.:]*)?",
    "([?][^#]*)?(#[^#]*)?$"
  ].join("")).test(u);
}
function parseQuery(queryString) {
  const query = {};
  const pairs = queryString.split("&");
  for (let i = 0; i < pairs.length; i++) {
    const pair = pairs[i].split("=");
    query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || "");
  }
  return query;
}
function encodeQuery(queryObject) {
  return Object.entries(queryObject).filter(([_key, value]) => typeof value !== "undefined").map(([key, value]) => encodeURIComponent(key) + (value != null ? "=" + encodeURIComponent(value) : "")).join("&");
}
function routeOption(route, key, value) {
  return route.matched.some((m) => {
    if (false) {} else {
      return Object.values(m.components).some((component) => Object.values(component._Ctor).some((ctor) => ctor.options && ctor.options[key] === value));
    }
  });
}
function runtime_getMatchedComponents(route, matches = []) {
  return [].concat(...[], ...route.matched.map(function(m, index) {
    return Object.keys(m.components).map(function(key) {
      matches.push(index);
      return m.components[key];
    });
  }));
}
function normalizePath(path = "", ctx) {
  let result = path.split("?")[0];
  if (ctx && ctx.base) {
    result = result.replace(ctx.base, "/");
  }
  if (result.charAt(result.length - 1) === "/") {
    result = result.slice(0, -1);
  }
  result = result.replace(/\/+/g, "/");
  return result;
}
function encodeValue(val) {
  if (typeof val === "string") {
    return val;
  }
  return JSON.stringify(val);
}
function decodeValue(val) {
  if (typeof val === "string") {
    try {
      return JSON.parse(val);
    } catch (_) {
    }
  }
  return val;
}
function getProp(holder, propName) {
  if (!propName || !holder || typeof holder !== "object") {
    return holder;
  }
  if (propName in holder) {
    return holder[propName];
  }
  const propParts = Array.isArray(propName) ? propName : (propName + "").split(".");
  let result = holder;
  while (propParts.length && result) {
    result = result[propParts.shift()];
  }
  return result;
}
function addTokenPrefix(token, tokenType) {
  if (!token || !tokenType || typeof token !== "string" || token.startsWith(tokenType)) {
    return token;
  }
  return tokenType + " " + token;
}
function removeTokenPrefix(token, tokenType) {
  if (!token || !tokenType || typeof token !== "string") {
    return token;
  }
  return token.replace(tokenType + " ", "");
}
function runtime_urlJoin(...args) {
  return args.join("/").replace(/[/]+/g, "/").replace(/^(.+):\//, "$1://").replace(/^file:/, "file:/").replace(/\/(\?|&|#[^!])/g, "$1").replace(/\?/g, "&").replace("&", "?");
}
function cleanObj(obj) {
  for (const key in obj) {
    if (obj[key] === void 0) {
      delete obj[key];
    }
  }
  return obj;
}
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
function randomString(length) {
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

class runtime_Storage {
  constructor(ctx, options) {
    this.ctx = ctx;
    this.options = options;
    this._initState();
  }
  setUniversal(key, value) {
    if (isUnset(value)) {
      return this.removeUniversal(key);
    }
    this.setCookie(key, value);
    this.setLocalStorage(key, value);
    this.setState(key, value);
    return value;
  }
  getUniversal(key) {
    let value;
    if (true) {
      value = this.getState(key);
    }
    if (isUnset(value)) {
      value = this.getCookie(key);
    }
    if (isUnset(value)) {
      value = this.getLocalStorage(key);
    }
    if (isUnset(value)) {
      value = this.getState(key);
    }
    return value;
  }
  syncUniversal(key, defaultValue) {
    let value = this.getUniversal(key);
    if (isUnset(value) && isSet(defaultValue)) {
      value = defaultValue;
    }
    if (isSet(value)) {
      this.setUniversal(key, value);
    }
    return value;
  }
  removeUniversal(key) {
    this.removeState(key);
    this.removeLocalStorage(key);
    this.removeCookie(key);
  }
  _initState() {
    external_vue_.set(this, "_state", {});
    this._useVuex = this.options.vuex && !!this.ctx.store;
    if (this._useVuex) {
      const storeModule = {
        namespaced: true,
        state: () => this.options.initialState,
        mutations: {
          SET(state, payload) {
            external_vue_.set(state, payload.key, payload.value);
          }
        }
      };
      this.ctx.store.registerModule(this.options.vuex.namespace, storeModule, {
        preserveState: Boolean(this.ctx.store.state[this.options.vuex.namespace])
      });
      this.state = this.ctx.store.state[this.options.vuex.namespace];
    } else {
      external_vue_.set(this, "state", {});
      console.warn("[AUTH] The Vuex Store is not activated. This might cause issues in auth module behavior, like redirects not working properly.To activate it, see https://nuxtjs.org/docs/2.x/directory-structure/store");
    }
  }
  setState(key, value) {
    if (key[0] === "_") {
      external_vue_.set(this._state, key, value);
    } else if (this._useVuex) {
      this.ctx.store.commit(this.options.vuex.namespace + "/SET", {
        key,
        value
      });
    } else {
      external_vue_.set(this.state, key, value);
    }
    return value;
  }
  getState(key) {
    if (key[0] !== "_") {
      return this.state[key];
    } else {
      return this._state[key];
    }
  }
  watchState(key, fn) {
    if (this._useVuex) {
      return this.ctx.store.watch((state) => getProp(state[this.options.vuex.namespace], key), fn);
    }
  }
  removeState(key) {
    this.setState(key, void 0);
  }
  setLocalStorage(key, value) {
    if (isUnset(value)) {
      return this.removeLocalStorage(key);
    }
    if (typeof localStorage === "undefined" || !this.options.localStorage) {
      return;
    }
    const _key = this.options.localStorage.prefix + key;
    try {
      localStorage.setItem(_key, encodeValue(value));
    } catch (e) {
      if (!this.options.ignoreExceptions) {
        throw e;
      }
    }
    return value;
  }
  getLocalStorage(key) {
    if (typeof localStorage === "undefined" || !this.options.localStorage) {
      return;
    }
    const _key = this.options.localStorage.prefix + key;
    const value = localStorage.getItem(_key);
    return decodeValue(value);
  }
  removeLocalStorage(key) {
    if (typeof localStorage === "undefined" || !this.options.localStorage) {
      return;
    }
    const _key = this.options.localStorage.prefix + key;
    localStorage.removeItem(_key);
  }
  getCookies() {
    const cookieStr =  false ? undefined : this.ctx.req.headers.cookie;
    return external_cookie_.parse(cookieStr || "") || {};
  }
  setCookie(key, value, options = {}) {
    if (!this.options.cookie ||  true && !this.ctx.res) {
      return;
    }
    const _prefix = options.prefix !== void 0 ? options.prefix : this.options.cookie.prefix;
    const _key = _prefix + key;
    const _options = Object.assign({}, this.options.cookie.options, options);
    const _value = encodeValue(value);
    if (isUnset(value)) {
      _options.maxAge = -1;
    }
    if (typeof _options.expires === "number") {
      _options.expires = new Date(Date.now() + _options.expires * 864e5);
    }
    const serializedCookie = external_cookie_.serialize(_key, _value, _options);
    if (false) {} else if ( true && this.ctx.res) {
      const cookies = this.ctx.res.getHeader("Set-Cookie") || [];
      cookies.unshift(serializedCookie);
      this.ctx.res.setHeader("Set-Cookie", cookies.filter((v, i, arr) => arr.findIndex((val) => val.startsWith(v.substr(0, v.indexOf("=")))) === i));
    }
    return value;
  }
  getCookie(key) {
    if (!this.options.cookie ||  true && !this.ctx.req) {
      return;
    }
    const _key = this.options.cookie.prefix + key;
    const cookies = this.getCookies();
    const value = cookies[_key] ? decodeURIComponent(cookies[_key]) : void 0;
    return decodeValue(value);
  }
  removeCookie(key, options) {
    this.setCookie(key, void 0, options);
  }
}

class runtime_Auth {
  constructor(ctx, options) {
    this.strategies = {};
    this._errorListeners = [];
    this._redirectListeners = [];
    this.ctx = ctx;
    this.options = options;
    const initialState = {user: null, loggedIn: false};
    const storage2 = new runtime_Storage(ctx, {...options, ...{initialState}});
    this.$storage = storage2;
    this.$state = storage2.state;
  }
  get state() {
    if (!this._stateWarnShown) {
      this._stateWarnShown = true;
      console.warn("[AUTH] $auth.state is deprecated. Please use $auth.$state or top level props like $auth.loggedIn");
    }
    return this.$state;
  }
  get strategy() {
    return this.getStrategy();
  }
  getStrategy(throwException = true) {
    if (throwException) {
      if (!this.$state.strategy) {
        throw new Error("No strategy is set!");
      }
      if (!this.strategies[this.$state.strategy]) {
        throw new Error("Strategy not supported: " + this.$state.strategy);
      }
    }
    return this.strategies[this.$state.strategy];
  }
  get user() {
    return this.$state.user;
  }
  get loggedIn() {
    return this.$state.loggedIn;
  }
  get busy() {
    return this.$storage.getState("busy");
  }
  async init() {
    if (this.options.resetOnError) {
      this.onError((...args) => {
        if (typeof this.options.resetOnError !== "function" || this.options.resetOnError(...args)) {
          this.reset();
        }
      });
    }
    this.$storage.syncUniversal("strategy", this.options.defaultStrategy);
    if (!this.getStrategy(false)) {
      this.$storage.setUniversal("strategy", this.options.defaultStrategy);
      if (!this.getStrategy(false)) {
        return Promise.resolve();
      }
    }
    try {
      await this.mounted();
    } catch (error) {
      this.callOnError(error);
    } finally {
      if (false) {}
    }
  }
  getState(key) {
    if (!this._getStateWarnShown) {
      this._getStateWarnShown = true;
      console.warn("[AUTH] $auth.getState is deprecated. Please use $auth.$storage.getState() or top level props like $auth.loggedIn");
    }
    return this.$storage.getState(key);
  }
  registerStrategy(name, strategy) {
    this.strategies[name] = strategy;
  }
  setStrategy(name) {
    if (name === this.$storage.getUniversal("strategy")) {
      return Promise.resolve();
    }
    if (!this.strategies[name]) {
      throw new Error(`Strategy ${name} is not defined!`);
    }
    this.reset();
    this.$storage.setUniversal("strategy", name);
    return this.mounted();
  }
  mounted(...args) {
    if (!this.getStrategy().mounted) {
      return this.fetchUserOnce();
    }
    return Promise.resolve(this.getStrategy().mounted(...args)).catch((error) => {
      this.callOnError(error, {method: "mounted"});
      return Promise.reject(error);
    });
  }
  loginWith(name, ...args) {
    return this.setStrategy(name).then(() => this.login(...args));
  }
  login(...args) {
    if (!this.getStrategy().login) {
      return Promise.resolve();
    }
    return this.wrapLogin(this.getStrategy().login(...args)).catch((error) => {
      this.callOnError(error, {method: "login"});
      return Promise.reject(error);
    });
  }
  fetchUser(...args) {
    if (!this.getStrategy().fetchUser) {
      return Promise.resolve();
    }
    return Promise.resolve(this.getStrategy().fetchUser(...args)).catch((error) => {
      this.callOnError(error, {method: "fetchUser"});
      return Promise.reject(error);
    });
  }
  logout(...args) {
    if (!this.getStrategy().logout) {
      this.reset();
      return Promise.resolve();
    }
    return Promise.resolve(this.getStrategy().logout(...args)).catch((error) => {
      this.callOnError(error, {method: "logout"});
      return Promise.reject(error);
    });
  }
  setUserToken(token, refreshToken) {
    if (!this.getStrategy().setUserToken) {
      this.getStrategy().token.set(token);
      return Promise.resolve();
    }
    return Promise.resolve(this.getStrategy().setUserToken(token, refreshToken)).catch((error) => {
      this.callOnError(error, {method: "setUserToken"});
      return Promise.reject(error);
    });
  }
  reset(...args) {
    if (!this.getStrategy().reset) {
      this.setUser(false);
      this.getStrategy().token.reset();
      this.getStrategy().refreshToken.reset();
    }
    return this.getStrategy().reset(...args);
  }
  refreshTokens() {
    if (!this.getStrategy().refreshController) {
      return Promise.resolve();
    }
    return Promise.resolve(this.getStrategy().refreshController.handleRefresh()).catch((error) => {
      this.callOnError(error, {method: "refreshTokens"});
      return Promise.reject(error);
    });
  }
  check(...args) {
    if (!this.getStrategy().check) {
      return {valid: true};
    }
    return this.getStrategy().check(...args);
  }
  fetchUserOnce(...args) {
    if (!this.$state.user) {
      return this.fetchUser(...args);
    }
    return Promise.resolve();
  }
  setUser(user) {
    this.$storage.setState("user", user);
    let check = {valid: Boolean(user)};
    if (check.valid) {
      check = this.check();
    }
    this.$storage.setState("loggedIn", check.valid);
  }
  request(endpoint, defaults = {}) {
    const _endpoint = typeof defaults === "object" ? Object.assign({}, defaults, endpoint) : endpoint;
    if (_endpoint.baseURL === "") {
      _endpoint.baseURL = external_requrl_(this.ctx.req);
    }
    if (!this.ctx.app.$axios) {
      console.error("[AUTH] add the @nuxtjs/axios module to nuxt.config file");
      return;
    }
    return this.ctx.app.$axios.request(_endpoint).catch((error) => {
      this.callOnError(error, {method: "request"});
      return Promise.reject(error);
    });
  }
  requestWith(strategy, endpoint, defaults) {
    const token = this.getStrategy().token.get();
    const _endpoint = Object.assign({}, defaults, endpoint);
    const tokenName = this.strategies[strategy].options.token.name || "Authorization";
    if (!_endpoint.headers) {
      _endpoint.headers = {};
    }
    if (!_endpoint.headers[tokenName] && isSet(token) && token && typeof token === "string") {
      _endpoint.headers[tokenName] = token;
    }
    return this.request(_endpoint);
  }
  wrapLogin(promise) {
    this.$storage.setState("busy", true);
    this.error = null;
    return Promise.resolve(promise).then((response) => {
      this.$storage.setState("busy", false);
      return response;
    }).catch((error) => {
      this.$storage.setState("busy", false);
      return Promise.reject(error);
    });
  }
  onError(listener) {
    this._errorListeners.push(listener);
  }
  callOnError(error, payload = {}) {
    this.error = error;
    for (const fn of this._errorListeners) {
      fn(error, payload);
    }
  }
  redirect(name, noRouter = false) {
    if (!this.options.redirect) {
      return;
    }
    const from = this.options.fullPathRedirect ? this.ctx.route.fullPath : this.ctx.route.path;
    let to = this.options.redirect[name];
    if (!to) {
      return;
    }
    if (this.options.rewriteRedirects) {
      if (name === "login" && isRelativeURL(from) && !isSameURL(this.ctx, to, from)) {
        this.$storage.setUniversal("redirect", from);
      }
      if (name === "home") {
        const redirect = this.$storage.getUniversal("redirect");
        this.$storage.setUniversal("redirect", null);
        if (isRelativeURL(redirect)) {
          to = redirect;
        }
      }
    }
    to = this.callOnRedirect(to, from) || to;
    if (isSameURL(this.ctx, to, from)) {
      return;
    }
    if (false) {} else {
      this.ctx.redirect(to, this.ctx.query);
    }
  }
  onRedirect(listener) {
    this._redirectListeners.push(listener);
  }
  callOnRedirect(to, from) {
    for (const fn of this._redirectListeners) {
      to = fn(to, from) || to;
    }
    return to;
  }
  hasScope(scope) {
    const userScopes = this.$state.user && getProp(this.$state.user, this.options.scopeKey);
    if (!userScopes) {
      return false;
    }
    if (Array.isArray(userScopes)) {
      return userScopes.includes(scope);
    }
    return Boolean(getProp(userScopes, scope));
  }
}

const authMiddleware = async (ctx) => {
  if (routeOption(ctx.route, "auth", false)) {
    return;
  }
  const matches = [];
  const Components = runtime_getMatchedComponents(ctx.route, matches);
  if (!Components.length) {
    return;
  }
  const {login, callback} = ctx.$auth.options.redirect;
  const pageIsInGuestMode = routeOption(ctx.route, "auth", "guest");
  const insidePage = (page) => normalizePath(ctx.route.path, ctx) === normalizePath(page, ctx);
  if (ctx.$auth.$state.loggedIn) {
    const {
      tokenExpired,
      refreshTokenExpired,
      isRefreshable
    } = ctx.$auth.check(true);
    if (!login || insidePage(login) || pageIsInGuestMode) {
      ctx.$auth.redirect("home");
    }
    if (refreshTokenExpired) {
      ctx.$auth.reset();
    } else if (tokenExpired) {
      if (isRefreshable) {
        try {
          await ctx.$auth.refreshTokens();
        } catch (error) {
          ctx.$auth.reset();
        }
      } else {
        ctx.$auth.reset();
      }
    }
  } else if (!pageIsInGuestMode && (!callback || !insidePage(callback))) {
    ctx.$auth.redirect("login");
  }
};

class ExpiredAuthSessionError extends Error {
  constructor() {
    super("Both token and refresh token have expired. Your request was aborted.");
    this.name = "ExpiredAuthSessionError";
  }
}

class RefreshController {
  constructor(scheme) {
    this.scheme = scheme;
    this._refreshPromise = null;
    this.$auth = scheme.$auth;
  }
  handleRefresh() {
    if (this._refreshPromise) {
      return this._refreshPromise;
    }
    return this._doRefresh();
  }
  _doRefresh() {
    this._refreshPromise = new Promise((resolve, reject) => {
      this.scheme.refreshTokens().then((response) => {
        this._refreshPromise = null;
        resolve(response);
      }).catch((error) => {
        this._refreshPromise = null;
        reject(error);
      });
    });
    return this._refreshPromise;
  }
}

var TokenStatusEnum;
(function(TokenStatusEnum2) {
  TokenStatusEnum2["UNKNOWN"] = "UNKNOWN";
  TokenStatusEnum2["VALID"] = "VALID";
  TokenStatusEnum2["EXPIRED"] = "EXPIRED";
})(TokenStatusEnum || (TokenStatusEnum = {}));
class TokenStatus {
  constructor(token, tokenExpiresAt) {
    this._status = this._calculate(token, tokenExpiresAt);
  }
  unknown() {
    return TokenStatusEnum.UNKNOWN === this._status;
  }
  valid() {
    return TokenStatusEnum.VALID === this._status;
  }
  expired() {
    return TokenStatusEnum.EXPIRED === this._status;
  }
  _calculate(token, tokenExpiresAt) {
    const now = Date.now();
    try {
      if (!token || !tokenExpiresAt) {
        return TokenStatusEnum.UNKNOWN;
      }
    } catch (error) {
      return TokenStatusEnum.UNKNOWN;
    }
    const timeSlackMillis = 500;
    tokenExpiresAt -= timeSlackMillis;
    if (now < tokenExpiresAt) {
      return TokenStatusEnum.VALID;
    }
    return TokenStatusEnum.EXPIRED;
  }
}

class runtime_RefreshToken {
  constructor(scheme, storage) {
    this.scheme = scheme;
    this.$storage = storage;
  }
  get() {
    const _key = this.scheme.options.refreshToken.prefix + this.scheme.name;
    return this.$storage.getUniversal(_key);
  }
  set(tokenValue) {
    const refreshToken = addTokenPrefix(tokenValue, this.scheme.options.refreshToken.type);
    this._setToken(refreshToken);
    this._updateExpiration(refreshToken);
    return refreshToken;
  }
  sync() {
    const refreshToken = this._syncToken();
    this._syncExpiration();
    return refreshToken;
  }
  reset() {
    this._setToken(false);
    this._setExpiration(false);
  }
  status() {
    return new TokenStatus(this.get(), this._getExpiration());
  }
  _getExpiration() {
    const _key = this.scheme.options.refreshToken.expirationPrefix + this.scheme.name;
    return this.$storage.getUniversal(_key);
  }
  _setExpiration(expiration) {
    const _key = this.scheme.options.refreshToken.expirationPrefix + this.scheme.name;
    return this.$storage.setUniversal(_key, expiration);
  }
  _syncExpiration() {
    const _key = this.scheme.options.refreshToken.expirationPrefix + this.scheme.name;
    return this.$storage.syncUniversal(_key);
  }
  _updateExpiration(refreshToken) {
    let refreshTokenExpiration;
    const _tokenIssuedAtMillis = Date.now();
    const _tokenTTLMillis = Number(this.scheme.options.refreshToken.maxAge) * 1e3;
    const _tokenExpiresAtMillis = _tokenTTLMillis ? _tokenIssuedAtMillis + _tokenTTLMillis : 0;
    try {
      refreshTokenExpiration = external_jwt_decode_(refreshToken + "").exp * 1e3 || _tokenExpiresAtMillis;
    } catch (error) {
      refreshTokenExpiration = _tokenExpiresAtMillis;
      if (!(error && error.name === "InvalidTokenError")) {
        throw error;
      }
    }
    return this._setExpiration(refreshTokenExpiration || false);
  }
  _setToken(refreshToken) {
    const _key = this.scheme.options.refreshToken.prefix + this.scheme.name;
    return this.$storage.setUniversal(_key, refreshToken);
  }
  _syncToken() {
    const _key = this.scheme.options.refreshToken.prefix + this.scheme.name;
    return this.$storage.syncUniversal(_key);
  }
}

class RequestHandler {
  constructor(scheme, axios) {
    this.scheme = scheme;
    this.axios = axios;
    this.interceptor = null;
  }
  setHeader(token) {
    if (this.scheme.options.token.global) {
      this.axios.setHeader(this.scheme.options.token.name, token);
    }
  }
  clearHeader() {
    if (this.scheme.options.token.global) {
      this.axios.setHeader(this.scheme.options.token.name, false);
    }
  }
  initializeRequestInterceptor(refreshEndpoint) {
    this.interceptor = this.axios.interceptors.request.use(async (config) => {
      if (!this._needToken(config) || config.url === refreshEndpoint) {
        return config;
      }
      const {
        valid,
        tokenExpired,
        refreshTokenExpired,
        isRefreshable
      } = this.scheme.check(true);
      let isValid = valid;
      if (refreshTokenExpired) {
        this.scheme.reset();
        throw new ExpiredAuthSessionError();
      }
      if (tokenExpired) {
        if (!isRefreshable) {
          this.scheme.reset();
          throw new ExpiredAuthSessionError();
        }
        isValid = await this.scheme.refreshTokens().then(() => true).catch(() => {
          this.scheme.reset();
          throw new ExpiredAuthSessionError();
        });
      }
      const token = this.scheme.token.get();
      if (!isValid) {
        if (!token && this._requestHasAuthorizationHeader(config)) {
          throw new ExpiredAuthSessionError();
        }
        return config;
      }
      return this._getUpdatedRequestConfig(config, token);
    });
  }
  reset() {
    this.axios.interceptors.request.eject(this.interceptor);
    this.interceptor = null;
  }
  _needToken(config) {
    const options = this.scheme.options;
    return options.token.global || Object.values(options.endpoints).some((endpoint) => typeof endpoint === "object" ? endpoint.url === config.url : endpoint === config.url);
  }
  _getUpdatedRequestConfig(config, token) {
    if (typeof token === "string") {
      config.headers[this.scheme.options.token.name] = token;
    }
    return config;
  }
  _requestHasAuthorizationHeader(config) {
    return !!config.headers.common[this.scheme.options.token.name];
  }
}

class runtime_Token {
  constructor(scheme, storage) {
    this.scheme = scheme;
    this.$storage = storage;
  }
  get() {
    const _key = this.scheme.options.token.prefix + this.scheme.name;
    return this.$storage.getUniversal(_key);
  }
  set(tokenValue) {
    const token = addTokenPrefix(tokenValue, this.scheme.options.token.type);
    this._setToken(token);
    this._updateExpiration(token);
    if (typeof token === "string") {
      this.scheme.requestHandler.setHeader(token);
    }
    return token;
  }
  sync() {
    const token = this._syncToken();
    this._syncExpiration();
    if (typeof token === "string") {
      this.scheme.requestHandler.setHeader(token);
    }
    return token;
  }
  reset() {
    this.scheme.requestHandler.clearHeader();
    this._setToken(false);
    this._setExpiration(false);
  }
  status() {
    return new TokenStatus(this.get(), this._getExpiration());
  }
  _getExpiration() {
    const _key = this.scheme.options.token.expirationPrefix + this.scheme.name;
    return this.$storage.getUniversal(_key);
  }
  _setExpiration(expiration) {
    const _key = this.scheme.options.token.expirationPrefix + this.scheme.name;
    return this.$storage.setUniversal(_key, expiration);
  }
  _syncExpiration() {
    const _key = this.scheme.options.token.expirationPrefix + this.scheme.name;
    return this.$storage.syncUniversal(_key);
  }
  _updateExpiration(token) {
    let tokenExpiration;
    const _tokenIssuedAtMillis = Date.now();
    const _tokenTTLMillis = Number(this.scheme.options.token.maxAge) * 1e3;
    const _tokenExpiresAtMillis = _tokenTTLMillis ? _tokenIssuedAtMillis + _tokenTTLMillis : 0;
    try {
      tokenExpiration = external_jwt_decode_(token + "").exp * 1e3 || _tokenExpiresAtMillis;
    } catch (error) {
      tokenExpiration = _tokenExpiresAtMillis;
      if (!(error && error.name === "InvalidTokenError")) {
        throw error;
      }
    }
    return this._setExpiration(tokenExpiration || false);
  }
  _setToken(token) {
    const _key = this.scheme.options.token.prefix + this.scheme.name;
    return this.$storage.setUniversal(_key, token);
  }
  _syncToken() {
    const _key = this.scheme.options.token.prefix + this.scheme.name;
    return this.$storage.syncUniversal(_key);
  }
}

class runtime_BaseScheme {
  constructor($auth, ...options) {
    this.$auth = $auth;
    this.options = options.reduce((p, c) => external_defu_(p, c), {});
  }
  get name() {
    return this.options.name;
  }
}

const DEFAULTS = {
  name: "local",
  endpoints: {
    login: {
      url: "/api/auth/login",
      method: "post"
    },
    logout: {
      url: "/api/auth/logout",
      method: "post"
    },
    user: {
      url: "/api/auth/user",
      method: "get"
    }
  },
  token: {
    property: "token",
    type: "Bearer",
    name: "Authorization",
    maxAge: 1800,
    global: true,
    required: true,
    prefix: "_token.",
    expirationPrefix: "_token_expiration."
  },
  user: {
    property: "user",
    autoFetch: true
  },
  clientId: false,
  grantType: false,
  scope: false
};
class LocalScheme extends runtime_BaseScheme {
  constructor($auth, options, ...defaults) {
    super($auth, options, ...defaults, DEFAULTS);
    this.token = new runtime_Token(this, this.$auth.$storage);
    this.requestHandler = new RequestHandler(this, this.$auth.ctx.$axios);
  }
  check(checkStatus = false) {
    const response = {
      valid: false,
      tokenExpired: false
    };
    const token = this.token.sync();
    if (!token) {
      return response;
    }
    if (!checkStatus) {
      response.valid = true;
      return response;
    }
    const tokenStatus = this.token.status();
    if (tokenStatus.expired()) {
      response.tokenExpired = true;
      return response;
    }
    response.valid = true;
    return response;
  }
  mounted({
    tokenCallback = () => this.$auth.reset(),
    refreshTokenCallback = void 0
  } = {}) {
    const {tokenExpired, refreshTokenExpired} = this.check(true);
    if (refreshTokenExpired && typeof refreshTokenCallback === "function") {
      refreshTokenCallback();
    } else if (tokenExpired && typeof tokenCallback === "function") {
      tokenCallback();
    }
    this.initializeRequestInterceptor();
    return this.$auth.fetchUserOnce();
  }
  async login(endpoint, {reset = true} = {}) {
    if (!this.options.endpoints.login) {
      return;
    }
    if (reset) {
      this.$auth.reset({resetInterceptor: false});
    }
    if (this.options.clientId) {
      endpoint.data.client_id = this.options.clientId;
    }
    if (this.options.grantType) {
      endpoint.data.grant_type = this.options.grantType;
    }
    if (this.options.scope) {
      endpoint.data.scope = this.options.scope;
    }
    const response = await this.$auth.request(endpoint, this.options.endpoints.login);
    this.updateTokens(response);
    if (!this.requestHandler.interceptor) {
      this.initializeRequestInterceptor();
    }
    if (this.options.user.autoFetch) {
      await this.fetchUser();
    }
    return response;
  }
  setUserToken(token) {
    this.token.set(token);
    return this.fetchUser();
  }
  fetchUser(endpoint) {
    if (!this.check().valid) {
      return Promise.resolve();
    }
    if (!this.options.endpoints.user) {
      this.$auth.setUser({});
      return Promise.resolve();
    }
    return this.$auth.requestWith(this.name, endpoint, this.options.endpoints.user).then((response) => {
      const userData = getProp(response.data, this.options.user.property);
      if (!userData) {
        const error = new Error(`User Data response does not contain field ${this.options.user.property}`);
        return Promise.reject(error);
      }
      this.$auth.setUser(userData);
      return response;
    }).catch((error) => {
      this.$auth.callOnError(error, {method: "fetchUser"});
      return Promise.reject(error);
    });
  }
  async logout(endpoint = {}) {
    if (this.options.endpoints.logout) {
      await this.$auth.requestWith(this.name, endpoint, this.options.endpoints.logout).catch(() => {
      });
    }
    return this.$auth.reset();
  }
  reset({resetInterceptor = true} = {}) {
    this.$auth.setUser(false);
    this.token.reset();
    if (resetInterceptor) {
      this.requestHandler.reset();
    }
  }
  updateTokens(response) {
    const token = this.options.token.required ? getProp(response.data, this.options.token.property) : true;
    this.token.set(token);
  }
  initializeRequestInterceptor() {
    this.requestHandler.initializeRequestInterceptor();
  }
}

const DEFAULTS$1 = {
  name: "cookie",
  cookie: {
    name: null
  },
  token: {
    type: "",
    property: "",
    maxAge: false,
    global: false,
    required: false
  },
  endpoints: {
    csrf: null
  }
};
class CookieScheme extends LocalScheme {
  constructor($auth, options) {
    super($auth, options, DEFAULTS$1);
  }
  mounted() {
    if (true) {
      this.$auth.ctx.$axios.setHeader("referer", this.$auth.ctx.req.headers.host);
    }
    return super.mounted();
  }
  check() {
    const response = {valid: false};
    if (!super.check().valid) {
      return response;
    }
    if (this.options.cookie.name) {
      const cookies = this.$auth.$storage.getCookies();
      response.valid = Boolean(cookies[this.options.cookie.name]);
      return response;
    }
    response.valid = true;
    return response;
  }
  async login(endpoint) {
    this.$auth.reset();
    if (this.options.endpoints.csrf) {
      await this.$auth.request(this.options.endpoints.csrf, {
        maxRedirects: 0
      });
    }
    return super.login(endpoint, {reset: false});
  }
  reset() {
    if (this.options.cookie.name) {
      this.$auth.$storage.setCookie(this.options.cookie.name, null, {
        prefix: ""
      });
    }
    return super.reset();
  }
}

const DEFAULTS$2 = {
  name: "oauth2",
  accessType: null,
  redirectUri: null,
  logoutRedirectUri: null,
  clientId: null,
  audience: null,
  grantType: null,
  responseMode: null,
  acrValues: null,
  autoLogout: false,
  endpoints: {
    logout: "",
    authorization: "",
    token: "",
    userInfo: ""
  },
  scope: [],
  token: {
    property: "access_token",
    type: "Bearer",
    name: "Authorization",
    maxAge: 1800,
    global: true,
    prefix: "_token.",
    expirationPrefix: "_token_expiration."
  },
  refreshToken: {
    property: "refresh_token",
    maxAge: 60 * 60 * 24 * 30,
    prefix: "_refresh_token.",
    expirationPrefix: "_refresh_token_expiration."
  },
  user: {
    property: false
  },
  responseType: "token",
  codeChallengeMethod: "implicit"
};
class runtime_Oauth2Scheme extends runtime_BaseScheme {
  constructor($auth, options, ...defaults) {
    super($auth, options, ...defaults, DEFAULTS$2);
    this.req = $auth.ctx.req;
    this.token = new runtime_Token(this, this.$auth.$storage);
    this.refreshToken = new runtime_RefreshToken(this, this.$auth.$storage);
    this.refreshController = new RefreshController(this);
    this.requestHandler = new RequestHandler(this, this.$auth.ctx.$axios);
  }
  get scope() {
    return Array.isArray(this.options.scope) ? this.options.scope.join(" ") : this.options.scope;
  }
  get redirectURI() {
    const basePath = this.$auth.ctx.base || "";
    const path = normalizePath(basePath + "/" + this.$auth.options.redirect.callback);
    return this.options.redirectUri || runtime_urlJoin(external_requrl_(this.req), path);
  }
  get logoutRedirectURI() {
    return this.options.logoutRedirectUri || runtime_urlJoin(external_requrl_(this.req), this.$auth.options.redirect.logout);
  }
  check(checkStatus = false) {
    const response = {
      valid: false,
      tokenExpired: false,
      refreshTokenExpired: false,
      isRefreshable: true
    };
    const token = this.token.sync();
    this.refreshToken.sync();
    if (!token) {
      return response;
    }
    if (!checkStatus) {
      response.valid = true;
      return response;
    }
    const tokenStatus = this.token.status();
    const refreshTokenStatus = this.refreshToken.status();
    if (refreshTokenStatus.expired()) {
      response.refreshTokenExpired = true;
      return response;
    }
    if (tokenStatus.expired()) {
      response.tokenExpired = true;
      return response;
    }
    response.valid = true;
    return response;
  }
  async mounted() {
    const {tokenExpired, refreshTokenExpired} = this.check(true);
    if (refreshTokenExpired || tokenExpired && this.options.autoLogout) {
      this.$auth.reset();
    }
    this.requestHandler.initializeRequestInterceptor(this.options.endpoints.token);
    const redirected = await this._handleCallback();
    if (!redirected) {
      return this.$auth.fetchUserOnce();
    }
  }
  reset() {
    this.$auth.setUser(false);
    this.token.reset();
    this.refreshToken.reset();
    this.requestHandler.reset();
  }
  async login(_opts = {}) {
    const opts = {
      protocol: "oauth2",
      response_type: this.options.responseType,
      access_type: this.options.accessType,
      client_id: this.options.clientId,
      redirect_uri: this.redirectURI,
      scope: this.scope,
      state: _opts.state || randomString(10),
      code_challenge_method: this.options.codeChallengeMethod,
      ..._opts.params
    };
    if (this.options.audience) {
      opts.audience = this.options.audience;
    }
    if (opts.response_type.includes("token")) {
      opts.nonce = _opts.nonce || randomString(10);
    }
    if (opts.code_challenge_method) {
      switch (opts.code_challenge_method) {
        case "plain":
        case "S256":
          {
            const state = this.generateRandomString();
            this.$auth.$storage.setUniversal(this.name + ".pkce_state", state);
            const codeVerifier = this.generateRandomString();
            this.$auth.$storage.setUniversal(this.name + ".pkce_code_verifier", codeVerifier);
            const codeChallenge = await this.pkceChallengeFromVerifier(codeVerifier, opts.code_challenge_method === "S256");
            opts.code_challenge = window.encodeURIComponent(codeChallenge);
          }
          break;
      }
    }
    if (this.options.responseMode) {
      opts.response_mode = this.options.responseMode;
    }
    if (this.options.acrValues) {
      opts.acr_values = this.options.acrValues;
    }
    this.$auth.$storage.setUniversal(this.name + ".state", opts.state);
    const url = this.options.endpoints.authorization + "?" + encodeQuery(opts);
    window.location.replace(url);
  }
  logout() {
    if (this.options.endpoints.logout) {
      const opts = {
        client_id: this.options.clientId + "",
        logout_uri: this.logoutRedirectURI
      };
      const url = this.options.endpoints.logout + "?" + encodeQuery(opts);
      window.location.replace(url);
    }
    return this.$auth.reset();
  }
  async fetchUser() {
    if (!this.check().valid) {
      return;
    }
    if (!this.options.endpoints.userInfo) {
      this.$auth.setUser({});
      return;
    }
    const response = await this.$auth.requestWith(this.name, {
      url: this.options.endpoints.userInfo
    });
    this.$auth.setUser(getProp(response.data, this.options.user.property));
  }
  async _handleCallback() {
    if (this.$auth.options.redirect && normalizePath(this.$auth.ctx.route.path, this.$auth.ctx) !== normalizePath(this.$auth.options.redirect.callback, this.$auth.ctx)) {
      return;
    }
    if (true) {
      return;
    }
    const hash = parseQuery(this.$auth.ctx.route.hash.substr(1));
    const parsedQuery = Object.assign({}, this.$auth.ctx.route.query, hash);
    let token = parsedQuery[this.options.token.property];
    let refreshToken;
    if (this.options.refreshToken.property) {
      refreshToken = parsedQuery[this.options.refreshToken.property];
    }
    const state = this.$auth.$storage.getUniversal(this.name + ".state");
    this.$auth.$storage.setUniversal(this.name + ".state", null);
    if (state && parsedQuery.state !== state) {
      return;
    }
    if (this.options.responseType === "code" && parsedQuery.code) {
      let codeVerifier;
      if (this.options.codeChallengeMethod && this.options.codeChallengeMethod !== "implicit") {
        codeVerifier = this.$auth.$storage.getUniversal(this.name + ".pkce_code_verifier");
        this.$auth.$storage.setUniversal(this.name + ".pkce_code_verifier", null);
      }
      const response = await this.$auth.request({
        method: "post",
        url: this.options.endpoints.token,
        baseURL: "",
        data: encodeQuery({
          code: parsedQuery.code,
          client_id: this.options.clientId + "",
          redirect_uri: this.redirectURI,
          response_type: this.options.responseType,
          audience: this.options.audience,
          grant_type: this.options.grantType,
          code_verifier: codeVerifier
        })
      });
      token = getProp(response.data, this.options.token.property) || token;
      refreshToken = getProp(response.data, this.options.refreshToken.property) || refreshToken;
    }
    if (!token || !token.length) {
      return;
    }
    this.token.set(token);
    if (refreshToken && refreshToken.length) {
      this.refreshToken.set(refreshToken);
    }
    this.$auth.redirect("home", true);
    return true;
  }
  async refreshTokens() {
    const refreshToken = this.refreshToken.get();
    if (!refreshToken) {
      return;
    }
    const refreshTokenStatus = this.refreshToken.status();
    if (refreshTokenStatus.expired()) {
      this.$auth.reset();
      throw new ExpiredAuthSessionError();
    }
    this.requestHandler.clearHeader();
    const response = await this.$auth.request({
      method: "post",
      url: this.options.endpoints.token,
      baseURL: "",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: encodeQuery({
        refresh_token: removeTokenPrefix(refreshToken, this.options.token.type),
        client_id: this.options.clientId + "",
        grant_type: "refresh_token"
      })
    }).catch((error) => {
      this.$auth.callOnError(error, {method: "refreshToken"});
      return Promise.reject(error);
    });
    this.updateTokens(response);
    return response;
  }
  updateTokens(response) {
    const token = getProp(response.data, this.options.token.property);
    const refreshToken = getProp(response.data, this.options.refreshToken.property);
    this.token.set(token);
    if (refreshToken) {
      this.refreshToken.set(refreshToken);
    }
  }
  async pkceChallengeFromVerifier(v, hashValue) {
    if (hashValue) {
      const hashed = await this._sha256(v);
      return this._base64UrlEncode(hashed);
    }
    return v;
  }
  generateRandomString() {
    const array = new Uint32Array(28);
    window.crypto.getRandomValues(array);
    return Array.from(array, (dec) => ("0" + dec.toString(16)).substr(-2)).join("");
  }
  _sha256(plain) {
    const encoder = new TextEncoder();
    const data = encoder.encode(plain);
    return window.crypto.subtle.digest("SHA-256", data);
  }
  _base64UrlEncode(str) {
    return btoa(String.fromCharCode.apply(null, new Uint8Array(str))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  }
}

const DEFAULTS$3 = {
  name: "refresh",
  endpoints: {
    refresh: {
      url: "/api/auth/refresh",
      method: "post"
    }
  },
  refreshToken: {
    property: "refresh_token",
    data: "refresh_token",
    maxAge: 60 * 60 * 24 * 30,
    required: true,
    tokenRequired: false,
    prefix: "_refresh_token.",
    expirationPrefix: "_refresh_token_expiration."
  },
  autoLogout: false
};
class RefreshScheme extends LocalScheme {
  constructor($auth, options) {
    super($auth, options, DEFAULTS$3);
    this.refreshToken = new runtime_RefreshToken(this, this.$auth.$storage);
    this.refreshController = new RefreshController(this);
  }
  check(checkStatus = false) {
    const response = {
      valid: false,
      tokenExpired: false,
      refreshTokenExpired: false,
      isRefreshable: true
    };
    const token = this.token.sync();
    const refreshToken = this.refreshToken.sync();
    if (!token || !refreshToken) {
      return response;
    }
    if (!checkStatus) {
      response.valid = true;
      return response;
    }
    const tokenStatus = this.token.status();
    const refreshTokenStatus = this.refreshToken.status();
    if (refreshTokenStatus.expired()) {
      response.refreshTokenExpired = true;
      return response;
    }
    if (tokenStatus.expired()) {
      response.tokenExpired = true;
      return response;
    }
    response.valid = true;
    return response;
  }
  mounted() {
    return super.mounted({
      tokenCallback: () => {
        if (this.options.autoLogout) {
          this.$auth.reset();
        }
      },
      refreshTokenCallback: () => {
        this.$auth.reset();
      }
    });
  }
  refreshTokens() {
    if (!this.options.endpoints.refresh) {
      return Promise.resolve();
    }
    if (!this.check().valid) {
      return Promise.resolve();
    }
    const refreshTokenStatus = this.refreshToken.status();
    if (refreshTokenStatus.expired()) {
      this.$auth.reset();
      throw new ExpiredAuthSessionError();
    }
    if (!this.options.refreshToken.tokenRequired) {
      this.requestHandler.clearHeader();
    }
    const endpoint = {
      data: {
        client_id: void 0,
        grant_type: void 0
      }
    };
    if (this.options.refreshToken.required && this.options.refreshToken.data) {
      endpoint.data[this.options.refreshToken.data] = this.refreshToken.get();
    }
    if (this.options.clientId) {
      endpoint.data.client_id = this.options.clientId;
    }
    if (this.options.grantType) {
      endpoint.data.grant_type = "refresh_token";
    }
    cleanObj(endpoint.data);
    return this.$auth.request(endpoint, this.options.endpoints.refresh).then((response) => {
      this.updateTokens(response, {isRefreshing: true});
      return response;
    }).catch((error) => {
      this.$auth.callOnError(error, {method: "refreshToken"});
      return Promise.reject(error);
    });
  }
  setUserToken(token, refreshToken) {
    this.token.set(token);
    if (refreshToken) {
      this.refreshToken.set(refreshToken);
    }
    return this.fetchUser();
  }
  reset({resetInterceptor = true} = {}) {
    this.$auth.setUser(false);
    this.token.reset();
    this.refreshToken.reset();
    if (resetInterceptor) {
      this.requestHandler.reset();
    }
  }
  updateTokens(response, {isRefreshing = false, updateOnRefresh = true} = {}) {
    const token = this.options.token.required ? getProp(response.data, this.options.token.property) : true;
    const refreshToken = this.options.refreshToken.required ? getProp(response.data, this.options.refreshToken.property) : true;
    this.token.set(token);
    if (refreshToken && (!isRefreshing || isRefreshing && updateOnRefresh)) {
      this.refreshToken.set(refreshToken);
    }
  }
  initializeRequestInterceptor() {
    this.requestHandler.initializeRequestInterceptor(this.options.endpoints.refresh.url);
  }
}

class Auth0Scheme extends runtime_Oauth2Scheme {
  logout() {
    this.$auth.reset();
    const opts = {
      client_id: this.options.clientId + "",
      returnTo: this.logoutRedirectURI
    };
    const url = this.options.endpoints.logout + "?" + encodeQuery(opts);
    window.location.replace(url);
  }
}

class LaravelJWTScheme extends RefreshScheme {
  updateTokens(response, {isRefreshing = false, updateOnRefresh = false} = {}) {
    super.updateTokens(response, {isRefreshing, updateOnRefresh});
  }
}



// CONCATENATED MODULE: ./.nuxt/auth.js

 // Active schemes


_nuxt_middleware.auth = authMiddleware;
/* harmony default export */ var _nuxt_auth = (function (ctx, inject) {
  // Options
  const options = {
    "resetOnError": false,
    "ignoreExceptions": false,
    "scopeKey": "scope",
    "rewriteRedirects": true,
    "fullPathRedirect": false,
    "watchLoggedIn": true,
    "redirect": false,
    "vuex": {
      "namespace": "auth"
    },
    "cookie": {
      "prefix": "auth.",
      "options": {
        "path": "/"
      }
    },
    "localStorage": {
      "prefix": "auth."
    },
    "defaultStrategy": "laravelJWT"
  }; // Create a new Auth instance

  const $auth = new runtime_Auth(ctx, options); // Register strategies
  // laravelJWT

  $auth.registerStrategy('laravelJWT', new LaravelJWTScheme($auth, {
    "url": "http://157.245.55.243/api",
    "token": {
      "property": "token",
      "maxAge": 3600,
      "required": true,
      "type": "Bearer"
    },
    "user": {
      "property": false,
      "autoFetch": true
    },
    "endpoints": {
      "login": {
        "url": "http://157.245.55.243/api/login"
      },
      "refresh": {
        "url": "http://157.245.55.243/api/api/auth/refresh"
      },
      "logout": {
        "url": "http://157.245.55.243/api/logout"
      },
      "user": {
        "url": "http://157.245.55.243/api/user",
        "method": "get"
      }
    },
    "name": "laravelJWT",
    "refreshToken": {
      "property": false,
      "data": false,
      "maxAge": 1209600,
      "required": false,
      "tokenRequired": true
    },
    "clientId": false,
    "grantType": false
  })); // Inject it to nuxt context as $auth

  inject('auth', $auth);
  ctx.$auth = $auth; // Initialize auth

  return $auth.init().catch(error => {
    if (false) {}
  });
});
// CONCATENATED MODULE: ./.nuxt/index.js












/* Plugins */

 // Source: .\\components\\plugin.js (mode: 'all')

 // Source: .\\axios.js (mode: 'all')

 // Source: ..\\plugins\\quill.js (mode: 'client')

 // Source: ..\\plugins\\lazy-load.js (mode: 'all')

 // Source: ..\\plugins\\services.js (mode: 'all')

 // Source: ..\\plugins\\vee-validate.js (mode: 'all')

 // Source: ..\\plugins\\filters.js (mode: 'all')

 // Source: ..\\plugins\\uikit.js (mode: 'client')

 // Source: ..\\plugins\\starRating.js (mode: 'client')

 // Source: .\\auth.js (mode: 'all')
// Component: <ClientOnly>

external_vue_default.a.component(external_vue_client_only_default.a.name, external_vue_client_only_default.a); // TODO: Remove in Nuxt 3: <NoSsr>

external_vue_default.a.component(external_vue_no_ssr_default.a.name, { ...external_vue_no_ssr_default.a,

  render(h, ctx) {
    if (false) {}

    return external_vue_no_ssr_default.a.render(h, ctx);
  }

}); // Component: <NuxtChild>

external_vue_default.a.component(nuxt_child.name, nuxt_child);
external_vue_default.a.component('NChild', nuxt_child); // Component NuxtLink is imported in server.js or client.js
// Component: <Nuxt>

external_vue_default.a.component(components_nuxt.name, components_nuxt);
Object.defineProperty(external_vue_default.a.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt;

    if (false) {}

    return globalNuxt;
  },

  configurable: true
});
external_vue_default.a.use(external_vue_meta_default.a, {
  "keyName": "head",
  "attribute": "data-n-head",
  "ssrAttribute": "data-n-head-ssr",
  "tagIDKeyName": "hid"
});
const defaultTransition = {
  "name": "page",
  "mode": "out-in",
  "appear": false,
  "appearClass": "appear",
  "appearActiveClass": "appear-active",
  "appearToClass": "appear-to"
};
const originalRegisterModule = external_vuex_default.a.Store.prototype.registerModule;

function registerModule(path, rawModule, options = {}) {
  const preserveState =  false && (false);
  return originalRegisterModule.call(this, path, rawModule, {
    preserveState,
    ...options
  });
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config);
  const store = createStore(ssrContext); // Add this.$router into store actions/mutations

  store.$router = router; // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141

  store.registerModule = registerModule; // Create Root instance
  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.

  const app = {
    head: {
      "title": "Pet-Market",
      "htmlAttrs": {
        "lang": "en"
      },
      "meta": [{
        "charset": "utf-8"
      }, {
        "name": "viewport",
        "content": "width=device-width, initial-scale=1"
      }, {
        "hid": "description",
        "name": "description",
        "content": ""
      }],
      "link": [{
        "rel": "icon",
        "type": "image\u002Fx-icon",
        "href": "\u002Ffavicon.ico"
      }, {
        "rel": "stylesheet",
        "href": "https:\u002F\u002Ffonts.googleapis.com\u002Fcss2?family=Nunito&display=swap"
      }, {
        "rel": "stylesheet",
        "href": "https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Kaushan+Script|Source+Sans+Pro"
      }, {
        "rel": "stylesheet",
        "href": "\u002Fuikit-core.min.css"
      }],
      "script": [{
        "type": "module",
        "src": "\u002Fuikit.min.js",
        "ssr": false
      }],
      "style": []
    },
    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],

      setTransitions(transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions];
        }

        transitions = transitions.map(transition => {
          if (!transition) {
            transition = defaultTransition;
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, {
              name: transition
            });
          } else {
            transition = Object.assign({}, defaultTransition, transition);
          }

          return transition;
        });
        this.$options.nuxt.transitions = transitions;
        return transitions;
      },

      err: null,
      dateErr: null,

      error(err) {
        err = err || null;
        app.context._errored = Boolean(err);
        err = err ? normalizeError(err) : null;
        let nuxt = app.nuxt; // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207

        if (this) {
          nuxt = this.nuxt || this.$options.nuxt;
        }

        nuxt.dateErr = Date.now();
        nuxt.err = err; // Used in src/server.js

        if (ssrContext) {
          ssrContext.nuxt.error = err;
        }

        return err;
      }

    },
    ...App
  }; // Make app available into store via this.app

  store.app = app;
  const next = ssrContext ? ssrContext.next : location => app.router.push(location); // Resolve route

  let route;

  if (ssrContext) {
    route = router.resolve(ssrContext.url).route;
  } else {
    const path = getLocation(router.options.base, router.options.mode);
    route = router.resolve(path).route;
  } // Set context to app.context


  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  });

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided');
    }

    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`);
    }

    key = '$' + key; // Add into app

    app[key] = value; // Add into context

    if (!app.context[key]) {
      app.context[key] = value;
    } // Add into store


    store[key] = app[key]; // Check if plugin not already installed

    const installKey = '__nuxt_' + key + '_installed__';

    if (external_vue_default.a[installKey]) {
      return;
    }

    external_vue_default.a[installKey] = true; // Call Vue.use() to install the plugin into vm

    external_vue_default.a.use(() => {
      if (!Object.prototype.hasOwnProperty.call(external_vue_default.a.prototype, key)) {
        Object.defineProperty(external_vue_default.a.prototype, key, {
          get() {
            return this.$root.$options[key];
          }

        });
      }
    });
  } // Inject runtime config as $config


  inject('config', config);

  if (false) {} // Add enablePreview(previewData = {}) in context for plugins


  if (false) {} // Plugin execution


  if (typeof /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (typeof _nuxt_axios === 'function') {
    await _nuxt_axios(app.context, inject);
  }

  if (false) {}

  if (typeof /* Cannot get final name for export "default" in "./plugins/lazy-load.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./plugins/lazy-load.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (typeof services === 'function') {
    await services(app.context, inject);
  }

  if (typeof /* Cannot get final name for export "default" in "./plugins/vee-validate.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./plugins/vee-validate.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (typeof /* Cannot get final name for export "default" in "./plugins/filters.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./plugins/filters.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (false) {}

  if (false) {}

  if (typeof _nuxt_auth === 'function') {
    await _nuxt_auth(app.context, inject);
  } // Lock enablePreview in context


  if (false) {} // Wait for async component to be resolved first


  await new Promise((resolve, reject) => {
    const {
      route
    } = router.resolve(app.context.route.fullPath); // Ignore 404s rather than blindly replacing URL

    if (!route.matched.length && false) {
      return resolve();
    }

    router.replace(route, resolve, err => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err);
      if (err.type !== 2
      /* NavigationFailureType.redirected */
      ) return resolve(); // navigated to a different route in router guard

      const unregister = router.afterEach(async (to, from) => {
        if ( true && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath;
        }

        app.context.route = await getRouteData(to);
        app.context.params = to.params || {};
        app.context.query = to.query || {};
        unregister();
        resolve();
      });
    });
  });
  return {
    store,
    app,
    router
  };
}


// CONCATENATED MODULE: ./.nuxt/components/nuxt-link.server.js

/* harmony default export */ var nuxt_link_server = ({
  name: 'NuxtLink',
  extends: external_vue_default.a.component('RouterLink'),
  props: {
    prefetch: {
      type: Boolean,
      default: false
    },
    noPrefetch: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./.nuxt/server.js







 // should be included after ./index.js
// Update serverPrefetch strategy

external_vue_default.a.config.optionMergeStrategies.serverPrefetch = external_vue_default.a.config.optionMergeStrategies.created; // Fetch mixin

if (!external_vue_default.a.__nuxt__fetch__mixin__) {
  external_vue_default.a.mixin(fetch_server);
  external_vue_default.a.__nuxt__fetch__mixin__ = true;
} // Component: <NuxtLink>


external_vue_default.a.component(nuxt_link_server.name, nuxt_link_server);
external_vue_default.a.component('NLink', nuxt_link_server);

if (!global.fetch) {
  global.fetch = external_node_fetch_default.a;
}

const noopApp = () => new external_vue_default.a({
  render: h => h('div', {
    domProps: {
      id: '__nuxt'
    }
  })
});

const createNext = ssrContext => opts => {
  // If static target, render on client-side
  ssrContext.redirected = opts;

  if (ssrContext.target === 'static' || !ssrContext.res) {
    ssrContext.nuxt.serverRendered = false;
    return;
  }

  let fullPath = Object(external_ufo_["withQuery"])(opts.path, opts.query);
  const $config = ssrContext.runtimeConfig || {};
  const routerBase = $config._app && $config._app.basePath || '/';

  if (!fullPath.startsWith('http') && routerBase !== '/' && !fullPath.startsWith(routerBase)) {
    fullPath = Object(external_ufo_["joinURL"])(routerBase, fullPath);
  } // Avoid loop redirect


  if (decodeURI(fullPath) === decodeURI(ssrContext.url)) {
    ssrContext.redirected = false;
    return;
  }

  ssrContext.res.writeHead(opts.status, {
    Location: Object(external_ufo_["normalizeURL"])(fullPath)
  });
  ssrContext.res.end();
}; // This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.


/* harmony default export */ var server = __webpack_exports__["default"] = (async ssrContext => {
  // Create ssrContext.next for simulate next() of beforeEach() when wanted to redirect
  ssrContext.redirected = false;
  ssrContext.next = createNext(ssrContext); // Used for beforeNuxtRender({ Components, nuxtState })

  ssrContext.beforeRenderFns = []; // Nuxt object (window.{{globals.context}}, defaults to window.__NUXT__)

  ssrContext.nuxt = {
    layout: 'default',
    data: [],
    fetch: {},
    error: null,
    state: null,
    serverRendered: true,
    routePath: ''
  };
  ssrContext.fetchCounters = {}; // Remove query from url is static target
  // Public runtime config

  ssrContext.nuxt.config = ssrContext.runtimeConfig.public;

  if (ssrContext.nuxt.config._app) {
    __webpack_require__.p = Object(external_ufo_["joinURL"])(ssrContext.nuxt.config._app.cdnURL, ssrContext.nuxt.config._app.assetsPath);
  } // Create the app definition and the instance (created for each request)


  const {
    app,
    router,
    store
  } = await createApp(ssrContext, ssrContext.runtimeConfig.private);

  const _app = new external_vue_default.a(app); // Add ssr route path to nuxt context so we can account for page navigation between ssr and csr


  ssrContext.nuxt.routePath = app.context.route.path; // Add meta infos (used in renderer.js)

  ssrContext.meta = _app.$meta(); // Keep asyncData for each matched component in ssrContext (used in app/utils.js via this.$ssrContext)

  ssrContext.asyncData = {};

  const beforeRender = async () => {
    // Call beforeNuxtRender() methods
    await Promise.all(ssrContext.beforeRenderFns.map(fn => promisify(fn, {
      Components,
      nuxtState: ssrContext.nuxt
    })));

    ssrContext.rendered = () => {
      // Add the state from the vuex store
      ssrContext.nuxt.state = store.state;
    };
  };

  const renderErrorPage = async () => {
    // Don't server-render the page in static target
    if (ssrContext.target === 'static') {
      ssrContext.nuxt.serverRendered = false;
    } // Load layout for error page


    const layout = (nuxt_error.options || nuxt_error).layout;
    const errLayout = typeof layout === 'function' ? layout.call(nuxt_error, app.context) : layout;
    ssrContext.nuxt.layout = errLayout || 'default';
    await _app.loadLayout(errLayout);

    _app.setLayout(errLayout);

    await beforeRender();
    return _app;
  };

  const render404Page = () => {
    app.context.error({
      statusCode: 404,
      path: ssrContext.url,
      message: 'This page could not be found'
    });
    return renderErrorPage();
  }; // Components are already resolved by setContext -> getRouteData (app/utils.js)


  const Components = getMatchedComponents(app.context.route);
  /*
  ** Dispatch store nuxtServerInit
  */

  if (store._actions && store._actions.nuxtServerInit) {
    try {
      await store.dispatch('nuxtServerInit', app.context);
    } catch (err) {
      console.debug('Error occurred when calling nuxtServerInit: ', err.message);
      throw err;
    }
  } // ...If there is a redirect or an error, stop the process


  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call global middleware (nuxt.config.js)
  */


  let midd = [];
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Set layout
  */


  let layout = Components.length ? Components[0].options.layout : nuxt_error.layout;

  if (typeof layout === 'function') {
    layout = layout(app.context);
  }

  await _app.loadLayout(layout);

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  layout = _app.setLayout(layout);
  ssrContext.nuxt.layout = _app.layoutName;
  /*
  ** Call middleware (layout + pages)
  */

  midd = [];
  layout = sanitizeComponent(layout);

  if (layout.options.middleware) {
    midd = midd.concat(layout.options.middleware);
  }

  Components.forEach(Component => {
    if (Component.options.middleware) {
      midd = midd.concat(Component.options.middleware);
    }
  });
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call .validate()
  */


  let isValid = true;

  try {
    for (const Component of Components) {
      if (typeof Component.options.validate !== 'function') {
        continue;
      }

      isValid = await Component.options.validate(app.context);

      if (!isValid) {
        break;
      }
    }
  } catch (validationError) {
    // ...If .validate() threw an error
    app.context.error({
      statusCode: validationError.statusCode || '500',
      message: validationError.message
    });
    return renderErrorPage();
  } // ...If .validate() returned false


  if (!isValid) {
    // Render a 404 error page
    return render404Page();
  } // If no Components found, returns 404


  if (!Components.length) {
    return render404Page();
  } // Call asyncData & fetch hooks on components matched by the route.


  const asyncDatas = await Promise.all(Components.map(Component => {
    const promises = []; // Call asyncData(context)

    if (Component.options.asyncData && typeof Component.options.asyncData === 'function') {
      const promise = promisify(Component.options.asyncData, app.context);
      promise.then(asyncDataResult => {
        ssrContext.asyncData[Component.cid] = asyncDataResult;
        applyAsyncData(Component);
        return asyncDataResult;
      });
      promises.push(promise);
    } else {
      promises.push(null);
    } // Call fetch(context)


    if (Component.options.fetch && Component.options.fetch.length) {
      promises.push(Component.options.fetch(app.context));
    } else {
      promises.push(null);
    }

    return Promise.all(promises);
  })); // datas are the first row of each

  ssrContext.nuxt.data = asyncDatas.map(r => r[0] || {}); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  } // Call beforeNuxtRender methods & add store state


  await beforeRender();
  return _app;
});

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SubMenu.vue?vue&type=template&id=623f75aa&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"w-full h-80 absolute bg-white shadow-md mt-6 left-0 p-4 uppercase font-bold\n        opacity-0 invisible group-hover:mt-8 group-hover:opacity-100 group-hover:visible transition-all duration-500",staticStyle:{"z-index":"9999","box-shadow":"0 0 20px -5px"}},[_vm._ssrNode("<ul class=\"w-full h-full grid grid-cols-3 overflow-y-scroll\">","</ul>",_vm._l((_vm.childrenCategories),function(childrenCategory){return _vm._ssrNode("<li class=\"pr-20\">","</li>",[_c('nuxt-link',{staticClass:"block pt-6 border-b pb-4 font-roboto text-[14px] text-gray-600 hover:text-yellow-500",attrs:{"to":{ name: 'shop-by-category', params: { slug: childrenCategory.slug } }}},[_vm._v("\n                "+_vm._s(childrenCategory.name)+"\n            ")]),_vm._ssrNode(" "),_c('SubMenuItem',{attrs:{"childrenCategories":childrenCategory.children_categories}})],2)}),0)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/SubMenu.vue?vue&type=template&id=623f75aa&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SubMenu.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var SubMenuvue_type_script_lang_js_ = ({
  props: ['childrenCategories']
});
// CONCATENATED MODULE: ./components/SubMenu.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_SubMenuvue_type_script_lang_js_ = (SubMenuvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/SubMenu.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_SubMenuvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "4f11a5f9"
  
)

/* harmony default export */ var SubMenu = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {SubMenuItem: __webpack_require__(77).default})


/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SubMenuItem.vue?vue&type=template&id=7085c5d3&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',_vm._l((_vm.childrenCategories),function(childrenCategory){return _vm._ssrNode("<li class=\"my-3\">","</li>",[_c('nuxt-link',{staticClass:"font-sans text-[13px] hover:text-yellow-500 text-gray-500 transition ease-out duration-300",attrs:{"to":{ name: 'shop-by-category', params: { slug: childrenCategory.slug } }}},[_vm._v("\n        "+_vm._s(childrenCategory.name)+"\n        ")])],1)}),0)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/SubMenuItem.vue?vue&type=template&id=7085c5d3&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SubMenuItem.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var SubMenuItemvue_type_script_lang_js_ = ({
  props: ['childrenCategories']
});
// CONCATENATED MODULE: ./components/SubMenuItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_SubMenuItemvue_type_script_lang_js_ = (SubMenuItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/SubMenuItem.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_SubMenuItemvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "1ccda9a8"
  
)

/* harmony default export */ var SubMenuItem = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Breadcrumbs.vue?vue&type=template&id=16450a79&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"flex justify-center items-center bg-center bg-cover py-11"},[_vm._ssrNode("<div class=\"text-white text-center\"><h1 class=\"text-4xl font-semibold\">Shop</h1> <div class=\"mt-3 text-center text-sm\"><a href=\"#\" class=\"mr-1\">\n                Home\n            </a> <span class=\"mr-1\">\n                /\n            </span>\n            Shop\n        </div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Breadcrumbs.vue?vue&type=template&id=16450a79&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Breadcrumbs.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Breadcrumbsvue_type_script_lang_js_ = ({
  computed: {
    crumbs() {
      const crumbs = [];
      this.$route.matched.forEach((item, i, {
        length
      }) => {
        const crumb = {};
        crumb.path = item.path;
        crumb.name = this.$i18n.t('route.' + (item.name || item.path)); // is last item?

        if (i === length - 1) {
          // is param route? .../.../:id
          if (item.regex.keys.length > 0) {
            crumbs.push({
              path: item.path.replace(/\/:[^/:]*$/, ''),
              name: this.$i18n.t('route.' + item.name.replace(/-[^-]*$/, ''))
            });
            crumb.path = this.$route.path;
            crumb.name = this.$i18n.t('route.' + this.$route.name, [crumb.path.match(/[^/]*$/)[0]]);
          }

          crumb.classes = 'is-active';
        }

        crumbs.push(crumb);
      });
      return crumbs;
    }

  }
});
// CONCATENATED MODULE: ./components/Breadcrumbs.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Breadcrumbsvue_type_script_lang_js_ = (Breadcrumbsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Breadcrumbs.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Breadcrumbsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4c9bfd8a"
  
)

/* harmony default export */ var Breadcrumbs = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HomeHeader.vue?vue&type=template&id=0b133c05&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{staticClass:"w-full hidden lg:block"},[_vm._ssrNode("<div class=\"w-[94%] xl:w-11/12 max-w-[1440px] mx-auto py-4\" data-v-0b133c05>","</div>",[_vm._ssrNode("<div class=\"flex items-center justify-between pb-8\" data-v-0b133c05>","</div>",[_vm._ssrNode("<div class=\"w-1/4\" data-v-0b133c05>","</div>",[_c('nuxt-link',{attrs:{"to":"/"}},[_c('img',{staticClass:"max-h-28 pr-10",attrs:{"src":__webpack_require__(7),"alt":"logo"}})])],1),_vm._ssrNode(" "),_c('Search'),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"w-1/4 flex justify-end items-center gap-5 text-2xl text-black pl-10\" data-v-0b133c05>","</div>",[(!_vm.$auth.loggedIn)?_vm._ssrNode("<div data-v-0b133c05>","</div>",[_c('nuxt-link',{attrs:{"to":"/dang-nhap"}},[_c('svg',{staticClass:"icon icon-tabler icon-tabler-login",attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","stroke-width":"1.5","stroke":"#2c3e50","fill":"none","stroke-linecap":"round","stroke-linejoin":"round"}},[_c('path',{attrs:{"stroke":"none","d":"M0 0h24v24H0z","fill":"none"}}),_vm._v(" "),_c('path',{attrs:{"d":"M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"}}),_vm._v(" "),_c('path',{attrs:{"d":"M20 12h-13l3 -3m0 6l-3 -3"}})])])],1):_vm._ssrNode("<div class=\"relative\" data-v-0b133c05>","</div>",[_vm._ssrNode("<button class=\"block h-7 w-7 rounded-full overflow-hidden focus:outline-none\" data-v-0b133c05><img"+(_vm._ssrAttr("src",_vm.$auth.user.path_img
                                    ? _vm.$auth.user.path_img
                                    : 'https://www.pngkey.com/png/detail/230-2301779_best-classified-apps-default-user-profile.png'))+" alt=\"avatar\" class=\"h-full w-full border-black object-cover\" data-v-0b133c05></button> "),(_vm.profileDropDown)?_vm._ssrNode("<div class=\"absolute text-base right-0 w-32 mt-2 py-2 bg-white border rounded shadow-xl\" data-v-0b133c05>","</div>",[_c('nuxt-link',{staticClass:"transition-colors duration-200 block px-4 py-1 text-normal text-gray-900 rounded hover:bg-purple-500 hover:text-white",attrs:{"to":"/profile","href":"#"}},[_vm._v("Profile")]),_vm._ssrNode(" <div class=\"py-2\" data-v-0b133c05><hr data-v-0b133c05></div> <span class=\"transition-colors duration-200 block px-4 py-1 text-normal text-gray-900 rounded hover:bg-purple-500 hover:text-white\" data-v-0b133c05>\n                            Logout\n                        </span>")],2):_vm._e()],2),_vm._ssrNode(" "),_vm._ssrNode("<div data-v-0b133c05>","</div>",[_c('nuxt-link',{attrs:{"to":"/"}},[_c('svg',{staticClass:"icon icon-tabler icon-tabler-heart",attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"27","height":"27","viewBox":"0 0 24 24","stroke-width":"1.5","stroke":"#2c3e50","fill":"none","stroke-linecap":"round","stroke-linejoin":"round"}},[_c('path',{attrs:{"stroke":"none","d":"M0 0h24v24H0z","fill":"none"}}),_vm._v(" "),_c('path',{attrs:{"d":"M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"}})])])],1),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"shopping-cart relative",attrs:{"to":"/gio-hang"}},[_c('svg',{staticClass:"icon icon-tabler icon-tabler-shopping-cart",attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"27","height":"27","viewBox":"0 0 24 24","stroke-width":"1.5","stroke":"#2c3e50","fill":"none","stroke-linecap":"round","stroke-linejoin":"round"}},[_c('path',{attrs:{"stroke":"none","d":"M0 0h24v24H0z","fill":"none"}}),_vm._v(" "),_c('circle',{attrs:{"cx":"6","cy":"19","r":"2"}}),_vm._v(" "),_c('circle',{attrs:{"cx":"17","cy":"19","r":"2"}}),_vm._v(" "),_c('path',{attrs:{"d":"M17 17h-11v-14h-2"}}),_vm._v(" "),_c('path',{attrs:{"d":"M6 5l14 1l-1 7h-13"}})]),_vm._v(" "),_c('span',{staticClass:"inline-block nav-color w-5 h-5 leading-5 absolute rounded-full font-sans text-white text-xs text-center -top-2 -right-3"},[_vm._v("\n                        "+_vm._s(_vm.cart.length)+"\n                    ")])])],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"flex items-center justify-between nav-color rounded-full py-3\" data-v-0b133c05>","</div>",[_c('DropdownMenu',{attrs:{"category":_vm.category}}),_vm._ssrNode(" <div class=\"w-auto text-white font-semibold text-md leading-none pr-4\" data-v-0b133c05><span data-v-0b133c05>Miễn phí giao hàng cho đơn hàng &gt; 100k</span></div>")],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/HomeHeader.vue?vue&type=template&id=0b133c05&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HomeHeader.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var HomeHeadervue_type_script_lang_js_ = ({
  data() {
    return {
      profileDropDown: false
    };
  },

  computed: { ...Object(external_vuex_["mapState"])({
      category: state => {
        return state.category.category;
      },
      cart: state => state.cart.cart
    })
  },
  methods: {
    async logout() {
      try {
        await this.$auth.logout();
        this.$router.push({
          name: 'home-page'
        });
      } catch (error) {
        console.log(error);
      }
    }

  }
});
// CONCATENATED MODULE: ./components/HomeHeader.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_HomeHeadervue_type_script_lang_js_ = (HomeHeadervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/HomeHeader.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(55)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_HomeHeadervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0b133c05",
  "6035de82"
  
)

/* harmony default export */ var HomeHeader = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Search: __webpack_require__(80).default,DropdownMenu: __webpack_require__(15).default})


/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Search.vue?vue&type=template&id=724ba2b1&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('form',{staticClass:"flex flex-1 justify-center"},[_vm._ssrNode("<input type=\"text\" placeholder=\"Tìm kiếm...\" class=\"w-full py-3.5 border border-solid border-gray-400 rounded-l-full pl-7 outline-none text-sm font-bold\" style=\"max-width: 700px\"> <button type=\"submit\" class=\"bg-black text-white px-7 rounded-r-full\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"3\" stroke=\"white\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"icon icon-tabler icon-tabler-search\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path> <circle cx=\"10\" cy=\"10\" r=\"7\"></circle> <line x1=\"21\" y1=\"21\" x2=\"15\" y2=\"15\"></line></svg></button>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Search.vue?vue&type=template&id=724ba2b1&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Search.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "295a54de"
  
)

/* harmony default export */ var Search = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ProductDetailHeader.vue?vue&type=template&id=3d1432b6&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"border-b border-solid border-gray-100 border-opacity-20"},[_vm._ssrNode("<div class=\"w-11/12 mx-auto py-4\" data-v-3d1432b6>","</div>",[_vm._ssrNode("<div class=\"flex items-center justify-between\" data-v-3d1432b6>","</div>",[_vm._ssrNode("<div class=\"flex items-center flex-grow\" data-v-3d1432b6>","</div>",[_c('nuxt-link',{attrs:{"to":"/"}},[_c('img',{staticClass:"max-h-28 pr-10",attrs:{"src":__webpack_require__(7),"alt":"logo"}})]),_vm._ssrNode(" "),_c('DropdownMenu',{attrs:{"textColor":'black'}})],2),_vm._ssrNode(" <div class=\"w-1/4 flex justify-end gap-5 text-2xl text-black pl-10\" data-v-3d1432b6><div data-v-3d1432b6><a href=\"#\" data-v-3d1432b6><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"27\" height=\"27\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"black\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"icon icon-tabler icon-tabler-user\" data-v-3d1432b6><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\" data-v-3d1432b6></path> <circle cx=\"12\" cy=\"7\" r=\"4\" data-v-3d1432b6></circle> <path d=\"M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2\" data-v-3d1432b6></path></svg></a></div> <div data-v-3d1432b6><a href=\"#\" data-v-3d1432b6><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"27\" height=\"27\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"black\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"icon icon-tabler icon-tabler-heart\" data-v-3d1432b6><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\" data-v-3d1432b6></path> <path d=\"M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572\" data-v-3d1432b6></path></svg></a></div> <div class=\"shopping-cart relative\" data-v-3d1432b6><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"27\" height=\"27\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"black\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"icon icon-tabler icon-tabler-shopping-cart\" data-v-3d1432b6><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\" data-v-3d1432b6></path> <circle cx=\"6\" cy=\"19\" r=\"2\" data-v-3d1432b6></circle> <circle cx=\"17\" cy=\"19\" r=\"2\" data-v-3d1432b6></circle> <path d=\"M17 17h-11v-14h-2\" data-v-3d1432b6></path> <path d=\"M6 5l14 1l-1 7h-13\" data-v-3d1432b6></path></svg> <span class=\"inline-block nav-color w-5 h-5 leading-5 absolute rounded-full font-sans text-white text-xs text-center -top-2 -right-3\" data-v-3d1432b6>\n                        0\n                    </span></div></div>")],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ProductDetailHeader.vue?vue&type=template&id=3d1432b6&scoped=true&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/ProductDetailHeader.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(57)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3d1432b6",
  "7b187d07"
  
)

/* harmony default export */ var ProductDetailHeader = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {DropdownMenu: __webpack_require__(15).default})


/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map