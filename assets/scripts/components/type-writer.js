! function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("Typewriter", [], t) : "object" == typeof exports ? exports.Typewriter = t() : e.Typewriter = t()
}("undefined" != typeof self ? self : this, (() => (() => {
    var e = {
            75: function (e) {
                (function () {
                    var t, n, r, o, a, i;
                    "undefined" != typeof performance && null !== performance && performance.now ? e.exports = function () {
                        return performance.now()
                    } : "undefined" != typeof process && null !== process && process.hrtime ? (e.exports = function () {
                        return (t() - a) / 1e6
                    }, n = process.hrtime, o = (t = function () {
                        var e;
                        return 1e9 * (e = n())[0] + e[1]
                    })(), i = 1e9 * process.uptime(), a = o - i) : Date.now ? (e.exports = function () {
                        return Date.now() - r
                    }, r = Date.now()) : (e.exports = function () {
                        return (new Date).getTime() - r
                    }, r = (new Date).getTime())
                }).call(this)
            },
            4087: (e, t, n) => {
                for (var r = n(75), o = "undefined" == typeof window ? n.g : window, a = ["moz", "webkit"], i = "AnimationFrame", s = o["request" + i], u = o["cancel" + i] || o["cancelRequest" + i], l = 0; !s && l < a.length; l++) s = o[a[l] + "Request" + i], u = o[a[l] + "Cancel" + i] || o[a[l] + "CancelRequest" + i];
                if (!s || !u) {
                    var c = 0,
                        p = 0,
                        d = [];
                    s = function (e) {
                        if (0 === d.length) {
                            var t = r(),
                                n = Math.max(0, 16.666666666666668 - (t - c));
                            c = n + t, setTimeout((function () {
                                var e = d.slice(0);
                                d.length = 0;
                                for (var t = 0; t < e.length; t++)
                                    if (!e[t].cancelled) try {
                                        e[t].callback(c)
                                    } catch (e) {
                                        setTimeout((function () {
                                            throw e
                                        }), 0)
                                    }
                            }), Math.round(n))
                        }
                        return d.push({
                            handle: ++p,
                            callback: e,
                            cancelled: !1
                        }), p
                    }, u = function (e) {
                        for (var t = 0; t < d.length; t++) d[t].handle === e && (d[t].cancelled = !0)
                    }
                }
                e.exports = function (e) {
                    return s.call(o, e)
                }, e.exports.cancel = function () {
                    u.apply(o, arguments)
                }, e.exports.polyfill = function (e) {
                    e || (e = o), e.requestAnimationFrame = s, e.cancelAnimationFrame = u
                }
            }
        },
        t = {};

    function n(r) {
        var o = t[r];
        if (void 0 !== o) return o.exports;
        var a = t[r] = {
            exports: {}
        };
        return e[r].call(a.exports, a, a.exports, n), a.exports
    }
    n.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return n.d(t, {
            a: t
        }), t
    }, n.d = (e, t) => {
        for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
        })
    }, n.g = function () {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t);
    var r = {};
    return (() => {
        "use strict";
        n.d(r, {
            default: () => C
        });
        var e = n(4087),
            t = n.n(e);
        const o = function (e) {
                return new RegExp(/<[a-z][\s\S]*>/i).test(e)
            },
            a = function (e, t) {
                return Math.floor(Math.random() * (t - e + 1)) + e
            };
        var i = "TYPE_CHARACTER",
            s = "REMOVE_CHARACTER",
            u = "REMOVE_ALL",
            l = "REMOVE_LAST_VISIBLE_NODE",
            c = "PAUSE_FOR",
            p = "CALL_FUNCTION",
            d = "ADD_HTML_TAG_ELEMENT",
            f = "CHANGE_DELETE_SPEED",
            v = "CHANGE_DELAY",
            h = "CHANGE_CURSOR",
            m = "PASTE_STRING",
            y = "HTML_TAG";

        function g(e) {
            return g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, g(e)
        }

        function E(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function w(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? E(Object(n), !0).forEach((function (t) {
                    A(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : E(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function b(e) {
            return function (e) {
                if (Array.isArray(e)) return T(e)
            }(e) || function (e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
            }(e) || function (e, t) {
                if (e) {
                    if ("string" == typeof e) return T(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? T(e, t) : void 0
                }
            }(e) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function T(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r
        }

        function S(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, N(r.key), r)
            }
        }

        function A(e, t, n) {
            return (t = N(t)) in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function N(e) {
            var t = function (e, t) {
                if ("object" !== g(e) || null === e) return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, "string");
                    if ("object" !== g(r)) return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(e);
            return "symbol" === g(t) ? t : String(t)
        }
        const C = function () {
            function n(r, g) {
                var E = this;
                if (function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, n), A(this, "state", {
                        cursorAnimation: null,
                        lastFrameTime: null,
                        pauseUntil: null,
                        eventQueue: [],
                        eventLoop: null,
                        eventLoopPaused: !1,
                        reverseCalledEvents: [],
                        calledEvents: [],
                        visibleNodes: [],
                        initialOptions: null,
                        elements: {
                            container: null,
                            wrapper: document.createElement("span"),
                            cursor: document.createElement("span")
                        }
                    }), A(this, "options", {
                        strings: null,
                        cursor: "|",
                        delay: "natural",
                        pauseFor: 1500,
                        deleteSpeed: "natural",
                        loop: !1,
                        autoStart: !1,
                        devMode: !1,
                        skipAddStyles: !1,
                        wrapperClassName: "Typewriter__wrapper",
                        cursorClassName: "Typewriter__cursor",
                        stringSplitter: null,
                        onCreateTextNode: null,
                        onRemoveNode: null
                    }), A(this, "setupWrapperElement", (function () {
                        E.state.elements.container && (E.state.elements.wrapper.className = E.options.wrapperClassName, E.state.elements.cursor.className = E.options.cursorClassName, E.state.elements.cursor.innerHTML = E.options.cursor, E.state.elements.container.innerHTML = "", E.state.elements.container.appendChild(E.state.elements.wrapper), E.state.elements.container.appendChild(E.state.elements.cursor))
                    })), A(this, "start", (function () {
                        return E.state.eventLoopPaused = !1, E.runEventLoop(), E
                    })), A(this, "pause", (function () {
                        return E.state.eventLoopPaused = !0, E
                    })), A(this, "stop", (function () {
                        return E.state.eventLoop && ((0, e.cancel)(E.state.eventLoop), E.state.eventLoop = null), E
                    })), A(this, "pauseFor", (function (e) {
                        return E.addEventToQueue(c, {
                            ms: e
                        }), E
                    })), A(this, "typeOutAllStrings", (function () {
                        return "string" == typeof E.options.strings ? (E.typeString(E.options.strings).pauseFor(E.options.pauseFor), E) : (E.options.strings.forEach((function (e) {
                            E.typeString(e).pauseFor(E.options.pauseFor).deleteAll(E.options.deleteSpeed)
                        })), E)
                    })), A(this, "typeString", (function (e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                        if (o(e)) return E.typeOutHTMLString(e, t);
                        if (e) {
                            var n = (E.options || {}).stringSplitter,
                                r = "function" == typeof n ? n(e) : e.split("");
                            E.typeCharacters(r, t)
                        }
                        return E
                    })), A(this, "pasteString", (function (e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                        return o(e) ? E.typeOutHTMLString(e, t, !0) : (e && E.addEventToQueue(m, {
                            character: e,
                            node: t
                        }), E)
                    })), A(this, "typeOutHTMLString", (function (e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = arguments.length > 2 ? arguments[2] : void 0,
                            r = function (e) {
                                var t = document.createElement("div");
                                return t.innerHTML = e, t.childNodes
                            }(e);
                        if (r.length > 0)
                            for (var o = 0; o < r.length; o++) {
                                var a = r[o],
                                    i = a.innerHTML;
                                a && 3 !== a.nodeType ? (a.innerHTML = "", E.addEventToQueue(d, {
                                    node: a,
                                    parentNode: t
                                }), n ? E.pasteString(i, a) : E.typeString(i, a)) : a.textContent && (n ? E.pasteString(a.textContent, t) : E.typeString(a.textContent, t))
                            }
                        return E
                    })), A(this, "deleteAll", (function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "natural";
                        return E.addEventToQueue(u, {
                            speed: e
                        }), E
                    })), A(this, "changeDeleteSpeed", (function (e) {
                        if (!e) throw new Error("Must provide new delete speed");
                        return E.addEventToQueue(f, {
                            speed: e
                        }), E
                    })), A(this, "changeDelay", (function (e) {
                        if (!e) throw new Error("Must provide new delay");
                        return E.addEventToQueue(v, {
                            delay: e
                        }), E
                    })), A(this, "changeCursor", (function (e) {
                        if (!e) throw new Error("Must provide new cursor");
                        return E.addEventToQueue(h, {
                            cursor: e
                        }), E
                    })), A(this, "deleteChars", (function (e) {
                        if (!e) throw new Error("Must provide amount of characters to delete");
                        for (var t = 0; t < e; t++) E.addEventToQueue(s);
                        return E
                    })), A(this, "callFunction", (function (e, t) {
                        if (!e || "function" != typeof e) throw new Error("Callback must be a function");
                        return E.addEventToQueue(p, {
                            cb: e,
                            thisArg: t
                        }), E
                    })), A(this, "typeCharacters", (function (e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                        if (!e || !Array.isArray(e)) throw new Error("Characters must be an array");
                        return e.forEach((function (e) {
                            E.addEventToQueue(i, {
                                character: e,
                                node: t
                            })
                        })), E
                    })), A(this, "removeCharacters", (function (e) {
                        if (!e || !Array.isArray(e)) throw new Error("Characters must be an array");
                        return e.forEach((function () {
                            E.addEventToQueue(s)
                        })), E
                    })), A(this, "addEventToQueue", (function (e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        return E.addEventToStateProperty(e, t, n, "eventQueue")
                    })), A(this, "addReverseCalledEvent", (function (e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        return E.options.loop ? E.addEventToStateProperty(e, t, n, "reverseCalledEvents") : E
                    })), A(this, "addEventToStateProperty", (function (e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            r = arguments.length > 3 ? arguments[3] : void 0,
                            o = {
                                eventName: e,
                                eventArgs: t || {}
                            };
                        return E.state[r] = n ? [o].concat(b(E.state[r])) : [].concat(b(E.state[r]), [o]), E
                    })), A(this, "runEventLoop", (function () {
                        E.state.lastFrameTime || (E.state.lastFrameTime = Date.now());
                        var e = Date.now(),
                            n = e - E.state.lastFrameTime;
                        if (!E.state.eventQueue.length) {
                            if (!E.options.loop) return;
                            E.state.eventQueue = b(E.state.calledEvents), E.state.calledEvents = [], E.options = w({}, E.state.initialOptions)
                        }
                        if (E.state.eventLoop = t()(E.runEventLoop), !E.state.eventLoopPaused) {
                            if (E.state.pauseUntil) {
                                if (e < E.state.pauseUntil) return;
                                E.state.pauseUntil = null
                            }
                            var r, o = b(E.state.eventQueue),
                                g = o.shift();
                            if (!(n <= (r = g.eventName === l || g.eventName === s ? "natural" === E.options.deleteSpeed ? a(40, 80) : E.options.deleteSpeed : "natural" === E.options.delay ? a(120, 160) : E.options.delay))) {
                                var T = g.eventName,
                                    S = g.eventArgs;
                                switch (E.logInDevMode({
                                    currentEvent: g,
                                    state: E.state,
                                    delay: r
                                }), T) {
                                    case m:
                                    case i:
                                        var A = S.character,
                                            N = S.node,
                                            C = document.createTextNode(A),
                                            _ = C;
                                        E.options.onCreateTextNode && "function" == typeof E.options.onCreateTextNode && (_ = E.options.onCreateTextNode(A, C)), _ && (N ? N.appendChild(_) : E.state.elements.wrapper.appendChild(_)), E.state.visibleNodes = [].concat(b(E.state.visibleNodes), [{
                                            type: "TEXT_NODE",
                                            character: A,
                                            node: _
                                        }]);
                                        break;
                                    case s:
                                        o.unshift({
                                            eventName: l,
                                            eventArgs: {
                                                removingCharacterNode: !0
                                            }
                                        });
                                        break;
                                    case c:
                                        var O = g.eventArgs.ms;
                                        E.state.pauseUntil = Date.now() + parseInt(O);
                                        break;
                                    case p:
                                        var L = g.eventArgs,
                                            D = L.cb,
                                            M = L.thisArg;
                                        D.call(M, {
                                            elements: E.state.elements
                                        });
                                        break;
                                    case d:
                                        var x = g.eventArgs,
                                            P = x.node,
                                            j = x.parentNode;
                                        j ? j.appendChild(P) : E.state.elements.wrapper.appendChild(P), E.state.visibleNodes = [].concat(b(E.state.visibleNodes), [{
                                            type: y,
                                            node: P,
                                            parentNode: j || E.state.elements.wrapper
                                        }]);
                                        break;
                                    case u:
                                        var R = E.state.visibleNodes,
                                            k = S.speed,
                                            Q = [];
                                        k && Q.push({
                                            eventName: f,
                                            eventArgs: {
                                                speed: k,
                                                temp: !0
                                            }
                                        });
                                        for (var F = 0, H = R.length; F < H; F++) Q.push({
                                            eventName: l,
                                            eventArgs: {
                                                removingCharacterNode: !1
                                            }
                                        });
                                        k && Q.push({
                                            eventName: f,
                                            eventArgs: {
                                                speed: E.options.deleteSpeed,
                                                temp: !0
                                            }
                                        }), o.unshift.apply(o, Q);
                                        break;
                                    case l:
                                        var I = g.eventArgs.removingCharacterNode;
                                        if (E.state.visibleNodes.length) {
                                            var U = E.state.visibleNodes.pop(),
                                                q = U.type,
                                                G = U.node,
                                                Y = U.character;
                                            E.options.onRemoveNode && "function" == typeof E.options.onRemoveNode && E.options.onRemoveNode({
                                                node: G,
                                                character: Y
                                            }), G && G.parentNode.removeChild(G), q === y && I && o.unshift({
                                                eventName: l,
                                                eventArgs: {}
                                            })
                                        }
                                        break;
                                    case f:
                                        E.options.deleteSpeed = g.eventArgs.speed;
                                        break;
                                    case v:
                                        E.options.delay = g.eventArgs.delay;
                                        break;
                                    case h:
                                        E.options.cursor = g.eventArgs.cursor, E.state.elements.cursor.innerHTML = g.eventArgs.cursor
                                }
                                E.options.loop && (g.eventName === l || g.eventArgs && g.eventArgs.temp || (E.state.calledEvents = [].concat(b(E.state.calledEvents), [g]))), E.state.eventQueue = o, E.state.lastFrameTime = e
                            }
                        }
                    })), r)
                    if ("string" == typeof r) {
                        var T = document.querySelector(r);
                        if (!T) throw new Error("Could not find container element");
                        this.state.elements.container = T
                    } else this.state.elements.container = r;
                g && (this.options = w(w({}, this.options), g)), this.state.initialOptions = w({}, this.options), this.init()
            }
            var r, g;
            return r = n, (g = [{
                key: "init",
                value: function () {
                    var e, t;
                    this.setupWrapperElement(), this.addEventToQueue(h, {
                        cursor: this.options.cursor
                    }, !0), this.addEventToQueue(u, null, !0), !window || window.___TYPEWRITER_JS_STYLES_ADDED___ || this.options.skipAddStyles || (e = ".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}", (t = document.createElement("style")).appendChild(document.createTextNode(e)), document.head.appendChild(t), window.___TYPEWRITER_JS_STYLES_ADDED___ = !0), !0 === this.options.autoStart && this.options.strings && this.typeOutAllStrings().start()
                }
            }, {
                key: "logInDevMode",
                value: function (e) {
                    this.options.devMode && console.log(e)
                }
            }]) && S(r.prototype, g), Object.defineProperty(r, "prototype", {
                writable: !1
            }), n
        }()
    })(), r.default
})()));
//# sourceMappingURL=core.js.map