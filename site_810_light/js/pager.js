/*!
 * jQuery JavaScript Library v1.7.2
 * http://jquery.com/
 *
 * Copyright 2011, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2011, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Wed Mar 21 12:46:34 2012 -0700
 */
(function (a, b) {
    function h(a) {
        var b = g[a] = {},
            c, d;
        a = a.split(/\s+/);
        for (c = 0, d = a.length; c < d; c++) b[a[c]] = !0;
        return b
    }
    function l(a, c, d) {
        if (d === b && a.nodeType === 1) {
            var e = "data-" + c.replace(k, "-$1").toLowerCase();
            d = a.getAttribute(e);
            if (typeof d == "string") {
                try {
                    d = d === "true" ? !0 : d === "false" ? !1 : d === "null" ? null : f.isNumeric(d) ? +d : j.test(d) ? f.parseJSON(d) : d
                } catch (g) {}
                f.data(a, c, d)
            } else d = b
        }
        return d
    }
    function m(a) {
        for (var b in a) {
            if (b === "data" && f.isEmptyObject(a[b])) continue;
            if (b !== "toJSON") return !1
        }
        return !0
    }
    function n(a, b, c) {
        var d = b + "defer",
            e = b + "queue",
            g = b + "mark",
            h = f._data(a, d);
        h && (c === "queue" || !f._data(a, e)) && (c === "mark" || !f._data(a, g)) && setTimeout(function () {
            !f._data(a, e) && !f._data(a, g) && (f.removeData(a, d, !0), h.fire())
        }, 0)
    }
    function J() {
        return !1
    }
    function K() {
        return !0
    }
    function S(a) {
        return !a || !a.parentNode || a.parentNode.nodeType === 11
    }
    function T(a, b, c) {
        b = b || 0;
        if (f.isFunction(b)) return f.grep(a, function (a, d) {
            var e = !! b.call(a, d, a);
            return e === c
        });
        if (b.nodeType) return f.grep(a, function (a, d) {
            return a === b === c
        });
        if (typeof b == "string") {
            var d = f.grep(a, function (a) {
                return a.nodeType === 1
            });
            if (O.test(b)) return f.filter(b, d, !c);
            b = f.filter(b, d)
        }
        return f.grep(a, function (a, d) {
            return f.inArray(a, b) >= 0 === c
        })
    }
    function U(a) {
        var b = V.split("|"),
            c = a.createDocumentFragment();
        if (c.createElement) while (b.length) c.createElement(b.pop());
        return c
    }
    function ib(a, b) {
        return f.nodeName(a, "table") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }
    function jb(a, b) {
        if (b.nodeType !== 1 || !f.hasData(a)) return;
        var c, d, e, g = f._data(a),
            h = f._data(b, g),
            i = g.events;
        if (i) {
            delete h.handle,
            h.events = {};
            for (c in i) for (d = 0, e = i[c].length; d < e; d++) f.event.add(b, c, i[c][d])
        }
        h.data && (h.data = f.extend({}, h.data))
    }
    function kb(a, b) {
        var c;
        if (b.nodeType !== 1) return;
        b.clearAttributes && b.clearAttributes(),
        b.mergeAttributes && b.mergeAttributes(a),
        c = b.nodeName.toLowerCase(),
        c === "object" ? b.outerHTML = a.outerHTML : c !== "input" || a.type !== "checkbox" && a.type !== "radio" ? c === "option" ? b.selected = a.defaultSelected : c === "input" || c === "textarea" ? b.defaultValue = a.defaultValue : c === "script" && b.text !== a.text && (b.text = a.text) : (a.checked && (b.defaultChecked = b.checked = a.checked), b.value !== a.value && (b.value = a.value)),
        b.removeAttribute(f.expando),
        b.removeAttribute("_submit_attached"),
        b.removeAttribute("_change_attached")
    }
    function lb(a) {
        return typeof a.getElementsByTagName != "undefined" ? a.getElementsByTagName("*") : typeof a.querySelectorAll != "undefined" ? a.querySelectorAll("*") : []
    }
    function mb(a) {
        if (a.type === "checkbox" || a.type === "radio") a.defaultChecked = a.checked
    }
    function nb(a) {
        var b = (a.nodeName || "").toLowerCase();
        b === "input" ? mb(a) : b !== "script" && typeof a.getElementsByTagName != "undefined" && f.grep(a.getElementsByTagName("input"), mb)
    }
    function ob(a) {
        var b = c.createElement("div");
        return hb.appendChild(b),
        b.innerHTML = a.outerHTML,
        b.firstChild
    }
    function Bb(a, b, c) {
        var d = b === "width" ? a.offsetWidth : a.offsetHeight,
            e = b === "width" ? 1 : 0,
            g = 4;
        if (d > 0) {
            if (c !== "border") for (; e < g; e += 2) c || (d -= parseFloat(f.css(a, "padding" + xb[e])) || 0),
            c === "margin" ? d += parseFloat(f.css(a, c + xb[e])) || 0 : d -= parseFloat(f.css(a, "border" + xb[e] + "Width")) || 0;
            return d + "px"
        }
        d = yb(a, b);
        if (d < 0 || d == null) d = a.style[b];
        if (tb.test(d)) return d;
        d = parseFloat(d) || 0;
        if (c) for (; e < g; e += 2) d += parseFloat(f.css(a, "padding" + xb[e])) || 0,
        c !== "padding" && (d += parseFloat(f.css(a, "border" + xb[e] + "Width")) || 0),
        c === "margin" && (d += parseFloat(f.css(a, c + xb[e])) || 0);
        return d + "px"
    }
    function Yb(a) {
        return function (b, c) {
            typeof b != "string" && (c = b, b = "*");
            if (f.isFunction(c)) {
                var d = b.toLowerCase().split(Ob),
                    e = 0,
                    g = d.length,
                    h, i, j;
                for (; e < g; e++) h = d[e],
                j = /^\+/.test(h),
                j && (h = h.substr(1) || "*"),
                i = a[h] = a[h] || [],
                i[j ? "unshift" : "push"](c)
            }
        }
    }
    function Zb(a, c, d, e, f, g) {
        f = f || c.dataTypes[0],
        g = g || {}, g[f] = !0;
        var h = a[f],
            i = 0,
            j = h ? h.length : 0,
            k = a === Sb,
            l;
        for (; i < j && (k || !l); i++) l = h[i](c, d, e),
        typeof l == "string" && (!k || g[l] ? l = b : (c.dataTypes.unshift(l), l = Zb(a, c, d, e, l, g)));
        return (k || !l) && !g["*"] && (l = Zb(a, c, d, e, "*", g)),
        l
    }
    function $b(a, c) {
        var d, e, g = f.ajaxSettings.flatOptions || {};
        for (d in c) c[d] !== b && ((g[d] ? a : e || (e = {}))[d] = c[d]);
        e && f.extend(!0, a, e)
    }
    function _b(a, b, c, d) {
        if (f.isArray(b)) f.each(b, function (b, e) {
            c || Db.test(a) ? d(a, e) : _b(a + "[" + (typeof e == "object" ? b : "") + "]", e, c, d)
        });
        else if (!c && f.type(b) === "object") for (var e in b) _b(a + "[" + e + "]", b[e], c, d);
        else d(a, b)
    }
    function ac(a, c, d) {
        var e = a.contents,
            f = a.dataTypes,
            g = a.responseFields,
            h, i, j, k;
        for (i in g) i in d && (c[g[i]] = d[i]);
        while (f[0] === "*") f.shift(),
        h === b && (h = a.mimeType || c.getResponseHeader("content-type"));
        if (h) for (i in e) if (e[i] && e[i].test(h)) {
            f.unshift(i);
            break
        }
        if (f[0] in d) j = f[0];
        else {
            for (i in d) {
                if (!f[0] || a.converters[i + " " + f[0]]) {
                    j = i;
                    break
                }
                k || (k = i)
            }
            j = j || k
        }
        if (j) return j !== f[0] && f.unshift(j),
        d[j]
    }
    function bc(a, c) {
        a.dataFilter && (c = a.dataFilter(c, a.dataType));
        var d = a.dataTypes,
            e = {},
            g, h, i = d.length,
            j, k = d[0],
            l, m, n, o, p;
        for (g = 1; g < i; g++) {
            if (g === 1) for (h in a.converters) typeof h == "string" && (e[h.toLowerCase()] = a.converters[h]);
            l = k,
            k = d[g];
            if (k === "*") k = l;
            else if (l !== "*" && l !== k) {
                m = l + " " + k,
                n = e[m] || e["* " + k];
                if (!n) {
                    p = b;
                    for (o in e) {
                        j = o.split(" ");
                        if (j[0] === l || j[0] === "*") {
                            p = e[j[1] + " " + k];
                            if (p) {
                                o = e[o],
                                o === !0 ? n = p : p === !0 && (n = o);
                                break
                            }
                        }
                    }
                }!n && !p && f.error("No conversion from " + m.replace(" ", " to ")),
                n !== !0 && (c = n ? n(c) : p(o(c)))
            }
        }
        return c
    }
    function hc() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }
    function ic() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }
    function rc() {
        return setTimeout(sc, 0),
        qc = f.now()
    }
    function sc() {
        qc = b
    }
    function tc(a, b) {
        var c = {};
        return f.each(pc.concat.apply([], pc.slice(0, b)), function () {
            c[this] = a
        }),
        c
    }
    function uc(a) {
        if (!jc[a]) {
            var b = c.body,
                d = f("<" + a + ">").appendTo(b),
                e = d.css("display");
            d.remove();
            if (e === "none" || e === "") {
                kc || (kc = c.createElement("iframe"), kc.frameBorder = kc.width = kc.height = 0),
                b.appendChild(kc);
                if (!lc || !kc.createElement) lc = (kc.contentWindow || kc.contentDocument).document,
                lc.write((f.support.boxModel ? "<!doctype html>" : "") + "<html><body>"),
                lc.close();
                d = lc.createElement(a),
                lc.body.appendChild(d),
                e = f.css(d, "display"),
                b.removeChild(kc)
            }
            jc[a] = e
        }
        return jc[a]
    }
    function yc(a) {
        return f.isWindow(a) ? a : a.nodeType === 9 ? a.defaultView || a.parentWindow : !1
    }
    var c = a.document,
        d = a.navigator,
        e = a.location,
        f = function () {
            function J() {
                if (e.isReady) return;
                try {
                    c.documentElement.doScroll("left")
                } catch (a) {
                    setTimeout(J, 1);
                    return
                }
                e.ready()
            }
            var e = function (a, b) {
                return new e.fn.init(a, b, h)
            },
                f = a.jQuery,
                g = a.$,
                h, i = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
                j = /\S/,
                k = /^\s+/,
                l = /\s+$/,
                m = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
                n = /^[\],:{}\s]*$/,
                o = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                p = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                q = /(?:^|:|,)(?:\s*\[)+/g,
                r = /(webkit)[ \/]([\w.]+)/,
                s = /(opera)(?:.*version)?[ \/]([\w.]+)/,
                t = /(msie) ([\w.]+)/,
                u = /(mozilla)(?:.*? rv:([\w.]+))?/,
                v = /-([a-z]|[0-9])/ig,
                w = /^-ms-/,
                x = function (a, b) {
                    return (b + "").toUpperCase()
                },
                y = d.userAgent,
                z, A, B, C = Object.prototype.toString,
                D = Object.prototype.hasOwnProperty,
                E = Array.prototype.push,
                F = Array.prototype.slice,
                G = String.prototype.trim,
                H = Array.prototype.indexOf,
                I = {};
            return e.fn = e.prototype = {
                constructor: e,
                init: function (a, d, f) {
                    var g, h, j, k;
                    if (!a) return this;
                    if (a.nodeType) return this.context = this[0] = a,
                    this.length = 1,
                    this;
                    if (a === "body" && !d && c.body) return this.context = c,
                    this[0] = c.body,
                    this.selector = a,
                    this.length = 1,
                    this;
                    if (typeof a == "string") {
                        a.charAt(0) === "<" && a.charAt(a.length - 1) === ">" && a.length >= 3 ? g = [null, a, null] : g = i.exec(a);
                        if (g && (g[1] || !d)) {
                            if (g[1]) return d = d instanceof e ? d[0] : d,
                            k = d ? d.ownerDocument || d : c,
                            j = m.exec(a),
                            j ? e.isPlainObject(d) ? (a = [c.createElement(j[1])], e.fn.attr.call(a, d, !0)) : a = [k.createElement(j[1])] : (j = e.buildFragment([g[1]], [k]), a = (j.cacheable ? e.clone(j.fragment) : j.fragment).childNodes),
                            e.merge(this, a);
                            h = c.getElementById(g[2]);
                            if (h && h.parentNode) {
                                if (h.id !== g[2]) return f.find(a);
                                this.length = 1,
                                this[0] = h
                            }
                            return this.context = c,
                            this.selector = a,
                            this
                        }
                        return !d || d.jquery ? (d || f).find(a) : this.constructor(d).find(a)
                    }
                    return e.isFunction(a) ? f.ready(a) : (a.selector !== b && (this.selector = a.selector, this.context = a.context), e.makeArray(a, this))
                }, selector: "",
                jquery: "1.7.2",
                length: 0,
                size: function () {
                    return this.length
                }, toArray: function () {
                    return F.call(this, 0)
                }, get: function (a) {
                    return a == null ? this.toArray() : a < 0 ? this[this.length + a] : this[a]
                }, pushStack: function (a, b, c) {
                    var d = this.constructor();
                    return e.isArray(a) ? E.apply(d, a) : e.merge(d, a),
                    d.prevObject = this,
                    d.context = this.context,
                    b === "find" ? d.selector = this.selector + (this.selector ? " " : "") + c : b && (d.selector = this.selector + "." + b + "(" + c + ")"),
                    d
                }, each: function (a, b) {
                    return e.each(this, a, b)
                }, ready: function (a) {
                    return e.bindReady(),
                    A.add(a),
                    this
                }, eq: function (a) {
                    return a = +a,
                    a === -1 ? this.slice(a) : this.slice(a, a + 1)
                }, first: function () {
                    return this.eq(0)
                }, last: function () {
                    return this.eq(-1)
                }, slice: function () {
                    return this.pushStack(F.apply(this, arguments), "slice", F.call(arguments).join(","))
                }, map: function (a) {
                    return this.pushStack(e.map(this, function (b, c) {
                        return a.call(b, c, b)
                    }))
                }, end: function () {
                    return this.prevObject || this.constructor(null)
                }, push: E,
                sort: [].sort,
                splice: [].splice
            }, e.fn.init.prototype = e.fn,
            e.extend = e.fn.extend = function () {
                var a, c, d, f, g, h, i = arguments[0] || {},
                    j = 1,
                    k = arguments.length,
                    l = !1;
                typeof i == "boolean" && (l = i, i = arguments[1] || {}, j = 2),
                typeof i != "object" && !e.isFunction(i) && (i = {}),
                k === j && (i = this, --j);
                for (; j < k; j++) if ((a = arguments[j]) != null) for (c in a) {
                    d = i[c],
                    f = a[c];
                    if (i === f) continue;
                    l && f && (e.isPlainObject(f) || (g = e.isArray(f))) ? (g ? (g = !1, h = d && e.isArray(d) ? d : []) : h = d && e.isPlainObject(d) ? d : {}, i[c] = e.extend(l, h, f)) : f !== b && (i[c] = f)
                }
                return i
            }, e.extend({
                noConflict: function (b) {
                    return a.$ === e && (a.$ = g),
                    b && a.jQuery === e && (a.jQuery = f),
                    e
                }, isReady: !1,
                readyWait: 1,
                holdReady: function (a) {
                    a ? e.readyWait++ : e.ready(!0)
                }, ready: function (a) {
                    if (a === !0 && !--e.readyWait || a !== !0 && !e.isReady) {
                        if (!c.body) return setTimeout(e.ready, 1);
                        e.isReady = !0;
                        if (a !== !0 && --e.readyWait > 0) return;
                        A.fireWith(c, [e]),
                        e.fn.trigger && e(c).trigger("ready").off("ready")
                    }
                }, bindReady: function () {
                    if (A) return;
                    A = e.Callbacks("once memory");
                    if (c.readyState === "complete") return setTimeout(e.ready, 1);
                    if (c.addEventListener) c.addEventListener("DOMContentLoaded", B, !1),
                    a.addEventListener("load", e.ready, !1);
                    else if (c.attachEvent) {
                        c.attachEvent("onreadystatechange", B),
                        a.attachEvent("onload", e.ready);
                        var b = !1;
                        try {
                            b = a.frameElement == null
                        } catch (d) {}
                        c.documentElement.doScroll && b && J()
                    }
                }, isFunction: function (a) {
                    return e.type(a) === "function"
                }, isArray: Array.isArray ||
                function (a) {
                    return e.type(a) === "array"
                }, isWindow: function (a) {
                    return a != null && a == a.window
                }, isNumeric: function (a) {
                    return !isNaN(parseFloat(a)) && isFinite(a)
                }, type: function (a) {
                    return a == null ? String(a) : I[C.call(a)] || "object"
                }, isPlainObject: function (a) {
                    if (!a || e.type(a) !== "object" || a.nodeType || e.isWindow(a)) return !1;
                    try {
                        if (a.constructor && !D.call(a, "constructor") && !D.call(a.constructor.prototype, "isPrototypeOf")) return !1
                    } catch (c) {
                        return !1
                    }
                    var d;
                    for (d in a);
                    return d === b || D.call(a, d)
                }, isEmptyObject: function (a) {
                    for (var b in a) return !1;
                    return !0
                }, error: function (a) {
                    throw new Error(a)
                }, parseJSON: function (b) {
                    if (typeof b != "string" || !b) return null;
                    b = e.trim(b);
                    if (a.JSON && a.JSON.parse) return a.JSON.parse(b);
                    if (n.test(b.replace(o, "@").replace(p, "]").replace(q, ""))) return (new Function("return " + b))();
                    e.error("Invalid JSON: " + b)
                }, parseXML: function (c) {
                    if (typeof c != "string" || !c) return null;
                    var d, f;
                    try {
                        a.DOMParser ? (f = new DOMParser, d = f.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(c))
                    } catch (g) {
                        d = b
                    }
                    return (!d || !d.documentElement || d.getElementsByTagName("parsererror").length) && e.error("Invalid XML: " + c),
                    d
                }, noop: function () {}, globalEval: function (b) {
                    b && j.test(b) && (a.execScript ||
                    function (b) {
                        a.eval.call(a, b)
                    })(b)
                }, camelCase: function (a) {
                    return a.replace(w, "ms-").replace(v, x)
                }, nodeName: function (a, b) {
                    return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
                }, each: function (a, c, d) {
                    var f, g = 0,
                        h = a.length,
                        i = h === b || e.isFunction(a);
                    if (d) {
                        if (i) {
                            for (f in a) if (c.apply(a[f], d) === !1) break
                        } else for (; g < h;) if (c.apply(a[g++], d) === !1) break
                    } else if (i) {
                        for (f in a) if (c.call(a[f], f, a[f]) === !1) break
                    } else for (; g < h;) if (c.call(a[g], g, a[g++]) === !1) break;
                    return a
                }, trim: G ?
                function (a) {
                    return a == null ? "" : G.call(a)
                } : function (a) {
                    return a == null ? "" : a.toString().replace(k, "").replace(l, "")
                }, makeArray: function (a, b) {
                    var c = b || [];
                    if (a != null) {
                        var d = e.type(a);
                        a.length == null || d === "string" || d === "function" || d === "regexp" || e.isWindow(a) ? E.call(c, a) : e.merge(c, a)
                    }
                    return c
                }, inArray: function (a, b, c) {
                    var d;
                    if (b) {
                        if (H) return H.call(b, a, c);
                        d = b.length,
                        c = c ? c < 0 ? Math.max(0, d + c) : c : 0;
                        for (; c < d; c++) if (c in b && b[c] === a) return c
                    }
                    return -1
                }, merge: function (a, c) {
                    var d = a.length,
                        e = 0;
                    if (typeof c.length == "number") for (var f = c.length; e < f; e++) a[d++] = c[e];
                    else while (c[e] !== b) a[d++] = c[e++];
                    return a.length = d,
                    a
                }, grep: function (a, b, c) {
                    var d = [],
                        e;
                    c = !! c;
                    for (var f = 0, g = a.length; f < g; f++) e = !! b(a[f], f),
                    c !== e && d.push(a[f]);
                    return d
                }, map: function (a, c, d) {
                    var f, g, h = [],
                        i = 0,
                        j = a.length,
                        k = a instanceof e || j !== b && typeof j == "number" && (j > 0 && a[0] && a[j - 1] || j === 0 || e.isArray(a));
                    if (k) for (; i < j; i++) f = c(a[i], i, d),
                    f != null && (h[h.length] = f);
                    else for (g in a) f = c(a[g], g, d),
                    f != null && (h[h.length] = f);
                    return h.concat.apply([], h)
                }, guid: 1,
                proxy: function (a, c) {
                    if (typeof c == "string") {
                        var d = a[c];
                        c = a,
                        a = d
                    }
                    if (!e.isFunction(a)) return b;
                    var f = F.call(arguments, 2),
                        g = function () {
                            return a.apply(c, f.concat(F.call(arguments)))
                        };
                    return g.guid = a.guid = a.guid || g.guid || e.guid++,
                    g
                }, access: function (a, c, d, f, g, h, i) {
                    var j, k = d == null,
                        l = 0,
                        m = a.length;
                    if (d && typeof d == "object") {
                        for (l in d) e.access(a, c, l, d[l], 1, h, f);
                        g = 1
                    } else if (f !== b) {
                        j = i === b && e.isFunction(f),
                        k && (j ? (j = c, c = function (a, b, c) {
                            return j.call(e(a), c)
                        }) : (c.call(a, f), c = null));
                        if (c) for (; l < m; l++) c(a[l], d, j ? f.call(a[l], l, c(a[l], d)) : f, i);
                        g = 1
                    }
                    return g ? a : k ? c.call(a) : m ? c(a[0], d) : h
                }, now: function () {
                    return (new Date).getTime()
                }, uaMatch: function (a) {
                    a = a.toLowerCase();
                    var b = r.exec(a) || s.exec(a) || t.exec(a) || a.indexOf("compatible") < 0 && u.exec(a) || [];
                    return {
                        browser: b[1] || "",
                        version: b[2] || "0"
                    }
                }, sub: function () {
                    function a(b, c) {
                        return new a.fn.init(b, c)
                    }
                    e.extend(!0, a, this),
                    a.superclass = this,
                    a.fn = a.prototype = this(),
                    a.fn.constructor = a,
                    a.sub = this.sub,
                    a.fn.init = function (d, f) {
                        return f && f instanceof e && !(f instanceof a) && (f = a(f)),
                        e.fn.init.call(this, d, f, b)
                    }, a.fn.init.prototype = a.fn;
                    var b = a(c);
                    return a
                }, browser: {}
            }),
            e.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (a, b) {
                I["[object " + b + "]"] = b.toLowerCase()
            }),
            z = e.uaMatch(y),
            z.browser && (e.browser[z.browser] = !0, e.browser.version = z.version),
            e.browser.webkit && (e.browser.safari = !0),
            j.test(" ") && (k = /^[\s\xA0]+/, l = /[\s\xA0]+$/),
            h = e(c),
            c.addEventListener ? B = function () {
                c.removeEventListener("DOMContentLoaded", B, !1),
                e.ready()
            } : c.attachEvent && (B = function () {
                c.readyState === "complete" && (c.detachEvent("onreadystatechange", B), e.ready())
            }),
            e
        }(),
        g = {};
    f.Callbacks = function (a) {
        a = a ? g[a] || h(a) : {};
        var c = [],
            d = [],
            e, i, j, k, l, m, n = function (b) {
                var d, e, g, h, i;
                for (d = 0, e = b.length; d < e; d++) g = b[d],
                h = f.type(g),
                h === "array" ? n(g) : h === "function" && (!a.unique || !p.has(g)) && c.push(g)
            },
            o = function (b, f) {
                f = f || [],
                e = !a.memory || [b, f],
                i = !0,
                j = !0,
                m = k || 0,
                k = 0,
                l = c.length;
                for (; c && m < l; m++) if (c[m].apply(b, f) === !1 && a.stopOnFalse) {
                    e = !0;
                    break
                }
                j = !1,
                c && (a.once ? e === !0 ? p.disable() : c = [] : d && d.length && (e = d.shift(), p.fireWith(e[0], e[1])))
            },
            p = {
                add: function () {
                    if (c) {
                        var a = c.length;
                        n(arguments),
                        j ? l = c.length : e && e !== !0 && (k = a, o(e[0], e[1]))
                    }
                    return this
                }, remove: function () {
                    if (c) {
                        var b = arguments,
                            d = 0,
                            e = b.length;
                        for (; d < e; d++) for (var f = 0; f < c.length; f++) if (b[d] === c[f]) {
                            j && f <= l && (l--, f <= m && m--),
                            c.splice(f--, 1);
                            if (a.unique) break
                        }
                    }
                    return this
                }, has: function (a) {
                    if (c) {
                        var b = 0,
                            d = c.length;
                        for (; b < d; b++) if (a === c[b]) return !0
                    }
                    return !1
                }, empty: function () {
                    return c = [],
                    this
                }, disable: function () {
                    return c = d = e = b,
                    this
                }, disabled: function () {
                    return !c
                }, lock: function () {
                    return d = b,
                    (!e || e === !0) && p.disable(),
                    this
                }, locked: function () {
                    return !d
                }, fireWith: function (b, c) {
                    return d && (j ? a.once || d.push([b, c]) : (!a.once || !e) && o(b, c)),
                    this
                }, fire: function () {
                    return p.fireWith(this, arguments),
                    this
                }, fired: function () {
                    return !!i
                }
            };
        return p
    };
    var i = [].slice;
    f.extend({
        Deferred: function (a) {
            var b = f.Callbacks("once memory"),
                c = f.Callbacks("once memory"),
                d = f.Callbacks("memory"),
                e = "pending",
                g = {
                    resolve: b,
                    reject: c,
                    notify: d
                },
                h = {
                    done: b.add,
                    fail: c.add,
                    progress: d.add,
                    state: function () {
                        return e
                    }, isResolved: b.fired,
                    isRejected: c.fired,
                    then: function (a, b, c) {
                        return i.done(a).fail(b).progress(c),
                        this
                    }, always: function () {
                        return i.done.apply(i, arguments).fail.apply(i, arguments),
                        this
                    }, pipe: function (a, b, c) {
                        return f.Deferred(function (d) {
                            f.each({
                                done: [a, "resolve"],
                                fail: [b, "reject"],
                                progress: [c, "notify"]
                            }, function (a, b) {
                                var c = b[0],
                                    e = b[1],
                                    g;
                                f.isFunction(c) ? i[a](function () {
                                    g = c.apply(this, arguments),
                                    g && f.isFunction(g.promise) ? g.promise().then(d.resolve, d.reject, d.notify) : d[e + "With"](this === i ? d : this, [g])
                                }) : i[a](d[e])
                            })
                        }).promise()
                    }, promise: function (a) {
                        if (a == null) a = h;
                        else for (var b in h) a[b] = h[b];
                        return a
                    }
                },
                i = h.promise({}),
                j;
            for (j in g) i[j] = g[j].fire,
            i[j + "With"] = g[j].fireWith;
            return i.done(function () {
                e = "resolved"
            }, c.disable, d.lock).fail(function () {
                e = "rejected"
            }, b.disable, d.lock),
            a && a.call(i, i),
            i
        }, when: function (a) {
            function l(a) {
                return function (c) {
                    b[a] = arguments.length > 1 ? i.call(arguments, 0) : c,
                    --g || j.resolveWith(j, b)
                }
            }
            function m(a) {
                return function (b) {
                    e[a] = arguments.length > 1 ? i.call(arguments, 0) : b,
                    j.notifyWith(k, e)
                }
            }
            var b = i.call(arguments, 0),
                c = 0,
                d = b.length,
                e = new Array(d),
                g = d,
                h = d,
                j = d <= 1 && a && f.isFunction(a.promise) ? a : f.Deferred(),
                k = j.promise();
            if (d > 1) {
                for (; c < d; c++) b[c] && b[c].promise && f.isFunction(b[c].promise) ? b[c].promise().then(l(c), j.reject, m(c)) : --g;
                g || j.resolveWith(j, b)
            } else j !== a && j.resolveWith(j, d ? [a] : []);
            return k
        }
    }),
    f.support = function () {
        var b, d, e, g, h, i, j, k, l, m, n, o, p = c.createElement("div"),
            q = c.documentElement;
        p.setAttribute("className", "t"),
        p.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",
        d = p.getElementsByTagName("*"),
        e = p.getElementsByTagName("a")[0];
        if (!d || !d.length || !e) return {};
        g = c.createElement("select"),
        h = g.appendChild(c.createElement("option")),
        i = p.getElementsByTagName("input")[0],
        b = {
            leadingWhitespace: p.firstChild.nodeType === 3,
            tbody: !p.getElementsByTagName("tbody").length,
            htmlSerialize: !! p.getElementsByTagName("link").length,
            style: /top/.test(e.getAttribute("style")),
            hrefNormalized: e.getAttribute("href") === "/a",
            opacity: /^0.55/.test(e.style.opacity),
            cssFloat: !! e.style.cssFloat,
            checkOn: i.value === "on",
            optSelected: h.selected,
            getSetAttribute: p.className !== "t",
            enctype: !! c.createElement("form").enctype,
            html5Clone: c.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            pixelMargin: !0
        }, f.boxModel = b.boxModel = c.compatMode === "CSS1Compat",
        i.checked = !0,
        b.noCloneChecked = i.cloneNode(!0).checked,
        g.disabled = !0,
        b.optDisabled = !h.disabled;
        try {
            delete p.test
        } catch (r) {
            b.deleteExpando = !1
        }!p.addEventListener && p.attachEvent && p.fireEvent && (p.attachEvent("onclick", function () {
            b.noCloneEvent = !1
        }), p.cloneNode(!0).fireEvent("onclick")),
        i = c.createElement("input"),
        i.value = "t",
        i.setAttribute("type", "radio"),
        b.radioValue = i.value === "t",
        i.setAttribute("checked", "checked"),
        i.setAttribute("name", "t"),
        p.appendChild(i),
        j = c.createDocumentFragment(),
        j.appendChild(p.lastChild),
        b.checkClone = j.cloneNode(!0).cloneNode(!0).lastChild.checked,
        b.appendChecked = i.checked,
        j.removeChild(i),
        j.appendChild(p);
        if (p.attachEvent) for (n in {
            submit: 1,
            change: 1,
            focusin: 1
        }) m = "on" + n,
        o = m in p,
        o || (p.setAttribute(m, "return;"), o = typeof p[m] == "function"),
        b[n + "Bubbles"] = o;
        return j.removeChild(p),
        j = g = h = p = i = null,
        f(function () {
            var d, e, g, h, i, j, l, m, n, q, r, s, t, u = c.getElementsByTagName("body")[0];
            if (!u) return;
            m = 1,
            t = "padding:0;margin:0;border:",
            r = "position:absolute;top:0;left:0;width:1px;height:1px;",
            s = t + "0;visibility:hidden;",
            n = "style='" + r + t + "5px solid #000;",
            q = "<div " + n + "display:block;'><div style='" + t + "0;display:block;overflow:hidden;'></div></div>" + "<table " + n + "' cellpadding='0' cellspacing='0'>" + "<tr><td></td></tr></table>",
            d = c.createElement("div"),
            d.style.cssText = s + "width:0;height:0;position:static;top:0;margin-top:" + m + "px",
            u.insertBefore(d, u.firstChild),
            p = c.createElement("div"),
            d.appendChild(p),
            p.innerHTML = "<table><tr><td style='" + t + "0;display:none'></td><td>t</td></tr></table>",
            k = p.getElementsByTagName("td"),
            o = k[0].offsetHeight === 0,
            k[0].style.display = "",
            k[1].style.display = "none",
            b.reliableHiddenOffsets = o && k[0].offsetHeight === 0,
            a.getComputedStyle && (p.innerHTML = "", l = c.createElement("div"), l.style.width = "0", l.style.marginRight = "0", p.style.width = "2px", p.appendChild(l), b.reliableMarginRight = (parseInt((a.getComputedStyle(l, null) || {
                marginRight: 0
            }).marginRight, 10) || 0) === 0),
            typeof p.style.zoom != "undefined" && (p.innerHTML = "", p.style.width = p.style.padding = "1px", p.style.border = 0, p.style.overflow = "hidden", p.style.display = "inline", p.style.zoom = 1, b.inlineBlockNeedsLayout = p.offsetWidth === 3, p.style.display = "block", p.style.overflow = "visible", p.innerHTML = "<div style='width:5px;'></div>", b.shrinkWrapBlocks = p.offsetWidth !== 3),
            p.style.cssText = r + s,
            p.innerHTML = q,
            e = p.firstChild,
            g = e.firstChild,
            i = e.nextSibling.firstChild.firstChild,
            j = {
                doesNotAddBorder: g.offsetTop !== 5,
                doesAddBorderForTableAndCells: i.offsetTop === 5
            }, g.style.position = "fixed",
            g.style.top = "20px",
            j.fixedPosition = g.offsetTop === 20 || g.offsetTop === 15,
            g.style.position = g.style.top = "",
            e.style.overflow = "hidden",
            e.style.position = "relative",
            j.subtractsBorderForOverflowNotVisible = g.offsetTop === -5,
            j.doesNotIncludeMarginInBodyOffset = u.offsetTop !== m,
            a.getComputedStyle && (p.style.marginTop = "1%", b.pixelMargin = (a.getComputedStyle(p, null) || {
                marginTop: 0
            }).marginTop !== "1%"),
            typeof d.style.zoom != "undefined" && (d.style.zoom = 1),
            u.removeChild(d),
            l = p = d = null,
            f.extend(b, j)
        }),
        b
    }();
    var j = /^(?:\{.*\}|\[.*\])$/,
        k = /([A-Z])/g;
    f.extend({
        cache: {}, uuid: 0,
        expando: "jQuery" + (f.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        }, hasData: function (a) {
            return a = a.nodeType ? f.cache[a[f.expando]] : a[f.expando],
            !! a && !m(a)
        }, data: function (a, c, d, e) {
            if (!f.acceptData(a)) return;
            var g, h, i, j = f.expando,
                k = typeof c == "string",
                l = a.nodeType,
                m = l ? f.cache : a,
                n = l ? a[j] : a[j] && j,
                o = c === "events";
            if ((!n || !m[n] || !o && !e && !m[n].data) && k && d === b) return;
            n || (l ? a[j] = n = ++f.uuid : n = j),
            m[n] || (m[n] = {}, l || (m[n].toJSON = f.noop));
            if (typeof c == "object" || typeof c == "function") e ? m[n] = f.extend(m[n], c) : m[n].data = f.extend(m[n].data, c);
            return g = h = m[n],
            e || (h.data || (h.data = {}), h = h.data),
            d !== b && (h[f.camelCase(c)] = d),
            o && !h[c] ? g.events : (k ? (i = h[c], i == null && (i = h[f.camelCase(c)])) : i = h, i)
        }, removeData: function (a, b, c) {
            if (!f.acceptData(a)) return;
            var d, e, g, h = f.expando,
                i = a.nodeType,
                j = i ? f.cache : a,
                k = i ? a[h] : h;
            if (!j[k]) return;
            if (b) {
                d = c ? j[k] : j[k].data;
                if (d) {
                    f.isArray(b) || (b in d ? b = [b] : (b = f.camelCase(b), b in d ? b = [b] : b = b.split(" ")));
                    for (e = 0, g = b.length; e < g; e++) delete d[b[e]];
                    if (!(c ? m : f.isEmptyObject)(d)) return
                }
            }
            if (!c) {
                delete j[k].data;
                if (!m(j[k])) return
            }
            f.support.deleteExpando || !j.setInterval ? delete j[k] : j[k] = null,
            i && (f.support.deleteExpando ? delete a[h] : a.removeAttribute ? a.removeAttribute(h) : a[h] = null)
        }, _data: function (a, b, c) {
            return f.data(a, b, c, !0)
        }, acceptData: function (a) {
            if (a.nodeName) {
                var b = f.noData[a.nodeName.toLowerCase()];
                if (b) return b !== !0 && a.getAttribute("classid") === b
            }
            return !0
        }
    }),
    f.fn.extend({
        data: function (a, c) {
            var d, e, g, h, i, j = this[0],
                k = 0,
                m = null;
            if (a === b) {
                if (this.length) {
                    m = f.data(j);
                    if (j.nodeType === 1 && !f._data(j, "parsedAttrs")) {
                        g = j.attributes;
                        for (i = g.length; k < i; k++) h = g[k].name,
                        h.indexOf("data-") === 0 && (h = f.camelCase(h.substring(5)), l(j, h, m[h]));
                        f._data(j, "parsedAttrs", !0)
                    }
                }
                return m
            }
            return typeof a == "object" ? this.each(function () {
                f.data(this, a)
            }) : (d = a.split(".", 2), d[1] = d[1] ? "." + d[1] : "", e = d[1] + "!", f.access(this, function (c) {
                if (c === b) return m = this.triggerHandler("getData" + e, [d[0]]),
                m === b && j && (m = f.data(j, a), m = l(j, a, m)),
                m === b && d[1] ? this.data(d[0]) : m;
                d[1] = c,
                this.each(function () {
                    var b = f(this);
                    b.triggerHandler("setData" + e, d),
                    f.data(this, a, c),
                    b.triggerHandler("changeData" + e, d)
                })
            }, null, c, arguments.length > 1, null, !1))
        }, removeData: function (a) {
            return this.each(function () {
                f.removeData(this, a)
            })
        }
    }),
    f.extend({
        _mark: function (a, b) {
            a && (b = (b || "fx") + "mark", f._data(a, b, (f._data(a, b) || 0) + 1))
        }, _unmark: function (a, b, c) {
            a !== !0 && (c = b, b = a, a = !1);
            if (b) {
                c = c || "fx";
                var d = c + "mark",
                    e = a ? 0 : (f._data(b, d) || 1) - 1;
                e ? f._data(b, d, e) : (f.removeData(b, d, !0), n(b, c, "mark"))
            }
        }, queue: function (a, b, c) {
            var d;
            if (a) return b = (b || "fx") + "queue",
            d = f._data(a, b),
            c && (!d || f.isArray(c) ? d = f._data(a, b, f.makeArray(c)) : d.push(c)),
            d || []
        }, dequeue: function (a, b) {
            b = b || "fx";
            var c = f.queue(a, b),
                d = c.shift(),
                e = {};
            d === "inprogress" && (d = c.shift()),
            d && (b === "fx" && c.unshift("inprogress"), f._data(a, b + ".run", e), d.call(a, function () {
                f.dequeue(a, b)
            }, e)),
            c.length || (f.removeData(a, b + "queue " + b + ".run", !0), n(a, b, "queue"))
        }
    }),
    f.fn.extend({
        queue: function (a, c) {
            var d = 2;
            return typeof a != "string" && (c = a, a = "fx", d--),
            arguments.length < d ? f.queue(this[0], a) : c === b ? this : this.each(function () {
                var b = f.queue(this, a, c);
                a === "fx" && b[0] !== "inprogress" && f.dequeue(this, a)
            })
        }, dequeue: function (a) {
            return this.each(function () {
                f.dequeue(this, a)
            })
        }, delay: function (a, b) {
            return a = f.fx ? f.fx.speeds[a] || a : a,
            b = b || "fx",
            this.queue(b, function (b, c) {
                var d = setTimeout(b, a);
                c.stop = function () {
                    clearTimeout(d)
                }
            })
        }, clearQueue: function (a) {
            return this.queue(a || "fx", [])
        }, promise: function (a, c) {
            function m() {
                --h || d.resolveWith(e, [e])
            }
            typeof a != "string" && (c = a, a = b),
            a = a || "fx";
            var d = f.Deferred(),
                e = this,
                g = e.length,
                h = 1,
                i = a + "defer",
                j = a + "queue",
                k = a + "mark",
                l;
            while (g--) if (l = f.data(e[g], i, b, !0) || (f.data(e[g], j, b, !0) || f.data(e[g], k, b, !0)) && f.data(e[g], i, f.Callbacks("once memory"), !0)) h++,
            l.add(m);
            return m(),
            d.promise(c)
        }
    });
    var o = /[\n\t\r]/g,
        p = /\s+/,
        q = /\r/g,
        r = /^(?:button|input)$/i,
        s = /^(?:button|input|object|select|textarea)$/i,
        t = /^a(?:rea)?$/i,
        u = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        v = f.support.getSetAttribute,
        w, x, y;
    f.fn.extend({
        attr: function (a, b) {
            return f.access(this, f.attr, a, b, arguments.length > 1)
        }, removeAttr: function (a) {
            return this.each(function () {
                f.removeAttr(this, a)
            })
        }, prop: function (a, b) {
            return f.access(this, f.prop, a, b, arguments.length > 1)
        }, removeProp: function (a) {
            return a = f.propFix[a] || a,
            this.each(function () {
                try {
                    this[a] = b,
                    delete this[a]
                } catch (c) {}
            })
        }, addClass: function (a) {
            var b, c, d, e, g, h, i;
            if (f.isFunction(a)) return this.each(function (b) {
                f(this).addClass(a.call(this, b, this.className))
            });
            if (a && typeof a == "string") {
                b = a.split(p);
                for (c = 0, d = this.length; c < d; c++) {
                    e = this[c];
                    if (e.nodeType === 1) if (!e.className && b.length === 1) e.className = a;
                    else {
                        g = " " + e.className + " ";
                        for (h = 0, i = b.length; h < i; h++)~g.indexOf(" " + b[h] + " ") || (g += b[h] + " ");
                        e.className = f.trim(g)
                    }
                }
            }
            return this
        }, removeClass: function (a) {
            var c, d, e, g, h, i, j;
            if (f.isFunction(a)) return this.each(function (b) {
                f(this).removeClass(a.call(this, b, this.className))
            });
            if (a && typeof a == "string" || a === b) {
                c = (a || "").split(p);
                for (d = 0, e = this.length; d < e; d++) {
                    g = this[d];
                    if (g.nodeType === 1 && g.className) if (a) {
                        h = (" " + g.className + " ").replace(o, " ");
                        for (i = 0, j = c.length; i < j; i++) h = h.replace(" " + c[i] + " ", " ");
                        g.className = f.trim(h)
                    } else g.className = ""
                }
            }
            return this
        }, toggleClass: function (a, b) {
            var c = typeof a,
                d = typeof b == "boolean";
            return f.isFunction(a) ? this.each(function (c) {
                f(this).toggleClass(a.call(this, c, this.className, b), b)
            }) : this.each(function () {
                if (c === "string") {
                    var e, g = 0,
                        h = f(this),
                        i = b,
                        j = a.split(p);
                    while (e = j[g++]) i = d ? i : !h.hasClass(e),
                    h[i ? "addClass" : "removeClass"](e)
                } else if (c === "undefined" || c === "boolean") this.className && f._data(this, "__className__", this.className),
                this.className = this.className || a === !1 ? "" : f._data(this, "__className__") || ""
            })
        }, hasClass: function (a) {
            var b = " " + a + " ",
                c = 0,
                d = this.length;
            for (; c < d; c++) if (this[c].nodeType === 1 && (" " + this[c].className + " ").replace(o, " ").indexOf(b) > -1) return !0;
            return !1
        }, val: function (a) {
            var c, d, e, g = this[0];
            if (!arguments.length) {
                if (g) return c = f.valHooks[g.type] || f.valHooks[g.nodeName.toLowerCase()],
                c && "get" in c && (d = c.get(g, "value")) !== b ? d : (d = g.value, typeof d == "string" ? d.replace(q, "") : d == null ? "" : d);
                return
            }
            return e = f.isFunction(a),
            this.each(function (d) {
                var g = f(this),
                    h;
                if (this.nodeType !== 1) return;
                e ? h = a.call(this, d, g.val()) : h = a,
                h == null ? h = "" : typeof h == "number" ? h += "" : f.isArray(h) && (h = f.map(h, function (a) {
                    return a == null ? "" : a + ""
                })),
                c = f.valHooks[this.type] || f.valHooks[this.nodeName.toLowerCase()];
                if (!c || !("set" in c) || c.set(this, h, "value") === b) this.value = h
            })
        }
    }),
    f.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var b = a.attributes.value;
                    return !b || b.specified ? a.value : a.text
                }
            }, select: {
                get: function (a) {
                    var b, c, d, e, g = a.selectedIndex,
                        h = [],
                        i = a.options,
                        j = a.type === "select-one";
                    if (g < 0) return null;
                    c = j ? g : 0,
                    d = j ? g + 1 : i.length;
                    for (; c < d; c++) {
                        e = i[c];
                        if (e.selected && (f.support.optDisabled ? !e.disabled : e.getAttribute("disabled") === null) && (!e.parentNode.disabled || !f.nodeName(e.parentNode, "optgroup"))) {
                            b = f(e).val();
                            if (j) return b;
                            h.push(b)
                        }
                    }
                    return j && !h.length && i.length ? f(i[g]).val() : h
                }, set: function (a, b) {
                    var c = f.makeArray(b);
                    return f(a).find("option").each(function () {
                        this.selected = f.inArray(f(this).val(), c) >= 0
                    }),
                    c.length || (a.selectedIndex = -1),
                    c
                }
            }
        }, attrFn: {
            val: !0,
            css: !0,
            html: !0,
            text: !0,
            data: !0,
            width: !0,
            height: !0,
            offset: !0
        }, attr: function (a, c, d, e) {
            var g, h, i, j = a.nodeType;
            if (!a || j === 3 || j === 8 || j === 2) return;
            if (e && c in f.attrFn) return f(a)[c](d);
            if (typeof a.getAttribute == "undefined") return f.prop(a, c, d);
            i = j !== 1 || !f.isXMLDoc(a),
            i && (c = c.toLowerCase(), h = f.attrHooks[c] || (u.test(c) ? x : w));
            if (d !== b) {
                if (d === null) {
                    f.removeAttr(a, c);
                    return
                }
                return h && "set" in h && i && (g = h.set(a, d, c)) !== b ? g : (a.setAttribute(c, "" + d), d)
            }
            return h && "get" in h && i && (g = h.get(a, c)) !== null ? g : (g = a.getAttribute(c), g === null ? b : g)
        }, removeAttr: function (a, b) {
            var c, d, e, g, h, i = 0;
            if (b && a.nodeType === 1) {
                d = b.toLowerCase().split(p),
                g = d.length;
                for (; i < g; i++) e = d[i],
                e && (c = f.propFix[e] || e, h = u.test(e), h || f.attr(a, e, ""), a.removeAttribute(v ? e : c), h && c in a && (a[c] = !1))
            }
        }, attrHooks: {
            type: {
                set: function (a, b) {
                    if (r.test(a.nodeName) && a.parentNode) f.error("type property can't be changed");
                    else if (!f.support.radioValue && b === "radio" && f.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b),
                        c && (a.value = c),
                        b
                    }
                }
            }, value: {
                get: function (a, b) {
                    return w && f.nodeName(a, "button") ? w.get(a, b) : b in a ? a.value : null
                }, set: function (a, b, c) {
                    if (w && f.nodeName(a, "button")) return w.set(a, b, c);
                    a.value = b
                }
            }
        }, propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        }, prop: function (a, c, d) {
            var e, g, h, i = a.nodeType;
            if (!a || i === 3 || i === 8 || i === 2) return;
            return h = i !== 1 || !f.isXMLDoc(a),
            h && (c = f.propFix[c] || c, g = f.propHooks[c]),
            d !== b ? g && "set" in g && (e = g.set(a, d, c)) !== b ? e : a[c] = d : g && "get" in g && (e = g.get(a, c)) !== null ? e : a[c]
        }, propHooks: {
            tabIndex: {
                get: function (a) {
                    var c = a.getAttributeNode("tabindex");
                    return c && c.specified ? parseInt(c.value, 10) : s.test(a.nodeName) || t.test(a.nodeName) && a.href ? 0 : b
                }
            }
        }
    }),
    f.attrHooks.tabindex = f.propHooks.tabIndex,
    x = {
        get: function (a, c) {
            var d, e = f.prop(a, c);
            return e === !0 || typeof e != "boolean" && (d = a.getAttributeNode(c)) && d.nodeValue !== !1 ? c.toLowerCase() : b
        }, set: function (a, b, c) {
            var d;
            return b === !1 ? f.removeAttr(a, c) : (d = f.propFix[c] || c, d in a && (a[d] = !0), a.setAttribute(c, c.toLowerCase())),
            c
        }
    }, v || (y = {
        name: !0,
        id: !0,
        coords: !0
    }, w = f.valHooks.button = {
        get: function (a, c) {
            var d;
            return d = a.getAttributeNode(c),
            d && (y[c] ? d.nodeValue !== "" : d.specified) ? d.nodeValue : b
        }, set: function (a, b, d) {
            var e = a.getAttributeNode(d);
            return e || (e = c.createAttribute(d), a.setAttributeNode(e)),
            e.nodeValue = b + ""
        }
    }, f.attrHooks.tabindex.set = w.set, f.each(["width", "height"], function (a, b) {
        f.attrHooks[b] = f.extend(f.attrHooks[b], {
            set: function (a, c) {
                if (c === "") return a.setAttribute(b, "auto"),
                c
            }
        })
    }), f.attrHooks.contenteditable = {
        get: w.get,
        set: function (a, b, c) {
            b === "" && (b = "false"),
            w.set(a, b, c)
        }
    }),
    f.support.hrefNormalized || f.each(["href", "src", "width", "height"], function (a, c) {
        f.attrHooks[c] = f.extend(f.attrHooks[c], {
            get: function (a) {
                var d = a.getAttribute(c, 2);
                return d === null ? b : d
            }
        })
    }),
    f.support.style || (f.attrHooks.style = {
        get: function (a) {
            return a.style.cssText.toLowerCase() || b
        }, set: function (a, b) {
            return a.style.cssText = "" + b
        }
    }),
    f.support.optSelected || (f.propHooks.selected = f.extend(f.propHooks.selected, {
        get: function (a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex),
            null
        }
    })),
    f.support.enctype || (f.propFix.enctype = "encoding"),
    f.support.checkOn || f.each(["radio", "checkbox"], function () {
        f.valHooks[this] = {
            get: function (a) {
                return a.getAttribute("value") === null ? "on" : a.value
            }
        }
    }),
    f.each(["radio", "checkbox"], function () {
        f.valHooks[this] = f.extend(f.valHooks[this], {
            set: function (a, b) {
                if (f.isArray(b)) return a.checked = f.inArray(f(a).val(), b) >= 0
            }
        })
    });
    var z = /^(?:textarea|input|select)$/i,
        A = /^([^\.]*)?(?:\.(.+))?$/,
        B = /(?:^|\s)hover(\.\S+)?\b/,
        C = /^key/,
        D = /^(?:mouse|contextmenu)|click/,
        E = /^(?:focusinfocus|focusoutblur)$/,
        F = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,
        G = function (a) {
            var b = F.exec(a);
            return b && (
            b[1] = (b[1] || "").toLowerCase(), b[3] = b[3] && new RegExp("(?:^|\\s)" + b[3] + "(?:\\s|$)")),
            b
        },
        H = function (a, b) {
            var c = a.attributes || {};
            return (!b[1] || a.nodeName.toLowerCase() === b[1]) && (!b[2] || (c.id || {}).value === b[2]) && (!b[3] || b[3].test((c["class"] || {}).value))
        },
        I = function (a) {
            return f.event.special.hover ? a : a.replace(B, "mouseenter$1 mouseleave$1")
        };
    f.event = {
        add: function (a, c, d, e, g) {
            var h, i, j, k, l, m, n, o, p, q, r, s;
            if (a.nodeType === 3 || a.nodeType === 8 || !c || !d || !(h = f._data(a))) return;
            d.handler && (p = d, d = p.handler, g = p.selector),
            d.guid || (d.guid = f.guid++),
            j = h.events,
            j || (h.events = j = {}),
            i = h.handle,
            i || (h.handle = i = function (a) {
                return typeof f == "undefined" || !! a && f.event.triggered === a.type ? b : f.event.dispatch.apply(i.elem, arguments)
            }, i.elem = a),
            c = f.trim(I(c)).split(" ");
            for (k = 0; k < c.length; k++) {
                l = A.exec(c[k]) || [],
                m = l[1],
                n = (l[2] || "").split(".").sort(),
                s = f.event.special[m] || {}, m = (g ? s.delegateType : s.bindType) || m,
                s = f.event.special[m] || {}, o = f.extend({
                    type: m,
                    origType: l[1],
                    data: e,
                    handler: d,
                    guid: d.guid,
                    selector: g,
                    quick: g && G(g),
                    namespace: n.join(".")
                }, p),
                r = j[m];
                if (!r) {
                    r = j[m] = [],
                    r.delegateCount = 0;
                    if (!s.setup || s.setup.call(a, e, n, i) === !1) a.addEventListener ? a.addEventListener(m, i, !1) : a.attachEvent && a.attachEvent("on" + m, i)
                }
                s.add && (s.add.call(a, o), o.handler.guid || (o.handler.guid = d.guid)),
                g ? r.splice(r.delegateCount++, 0, o) : r.push(o),
                f.event.global[m] = !0
            }
            a = null
        }, global: {}, remove: function (a, b, c, d, e) {
            var g = f.hasData(a) && f._data(a),
                h, i, j, k, l, m, n, o, p, q, r, s;
            if (!g || !(o = g.events)) return;
            b = f.trim(I(b || "")).split(" ");
            for (h = 0; h < b.length; h++) {
                i = A.exec(b[h]) || [],
                j = k = i[1],
                l = i[2];
                if (!j) {
                    for (j in o) f.event.remove(a, j + b[h], c, d, !0);
                    continue
                }
                p = f.event.special[j] || {}, j = (d ? p.delegateType : p.bindType) || j,
                r = o[j] || [],
                m = r.length,
                l = l ? new RegExp("(^|\\.)" + l.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null;
                for (n = 0; n < r.length; n++) s = r[n],
                (e || k === s.origType) && (!c || c.guid === s.guid) && (!l || l.test(s.namespace)) && (!d || d === s.selector || d === "**" && s.selector) && (r.splice(n--, 1), s.selector && r.delegateCount--, p.remove && p.remove.call(a, s));
                r.length === 0 && m !== r.length && ((!p.teardown || p.teardown.call(a, l) === !1) && f.removeEvent(a, j, g.handle), delete o[j])
            }
            f.isEmptyObject(o) && (q = g.handle, q && (q.elem = null), f.removeData(a, ["events", "handle"], !0))
        }, customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        }, trigger: function (c, d, e, g) {
            if (!e || e.nodeType !== 3 && e.nodeType !== 8) {
                var h = c.type || c,
                    i = [],
                    j, k, l, m, n, o, p, q, r, s;
                if (E.test(h + f.event.triggered)) return;
                h.indexOf("!") >= 0 && (h = h.slice(0, -1), k = !0),
                h.indexOf(".") >= 0 && (i = h.split("."), h = i.shift(), i.sort());
                if ((!e || f.event.customEvent[h]) && !f.event.global[h]) return;
                c = typeof c == "object" ? c[f.expando] ? c : new f.Event(h, c) : new f.Event(h),
                c.type = h,
                c.isTrigger = !0,
                c.exclusive = k,
                c.namespace = i.join("."),
                c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + i.join("\\.(?:.*\\.)?") + "(\\.|$)") : null,
                o = h.indexOf(":") < 0 ? "on" + h : "";
                if (!e) {
                    j = f.cache;
                    for (l in j) j[l].events && j[l].events[h] && f.event.trigger(c, d, j[l].handle.elem, !0);
                    return
                }
                c.result = b,
                c.target || (c.target = e),
                d = d != null ? f.makeArray(d) : [],
                d.unshift(c),
                p = f.event.special[h] || {};
                if (p.trigger && p.trigger.apply(e, d) === !1) return;
                r = [
                    [e, p.bindType || h]
                ];
                if (!g && !p.noBubble && !f.isWindow(e)) {
                    s = p.delegateType || h,
                    m = E.test(s + h) ? e : e.parentNode,
                    n = null;
                    for (; m; m = m.parentNode) r.push([m, s]),
                    n = m;
                    n && n === e.ownerDocument && r.push([n.defaultView || n.parentWindow || a, s])
                }
                for (l = 0; l < r.length && !c.isPropagationStopped(); l++) m = r[l][0],
                c.type = r[l][1],
                q = (f._data(m, "events") || {})[c.type] && f._data(m, "handle"),
                q && q.apply(m, d),
                q = o && m[o],
                q && f.acceptData(m) && q.apply(m, d) === !1 && c.preventDefault();
                return c.type = h,
                !g && !c.isDefaultPrevented() && (!p._default || p._default.apply(e.ownerDocument, d) === !1) && (h !== "click" || !f.nodeName(e, "a")) && f.acceptData(e) && o && e[h] && (h !== "focus" && h !== "blur" || c.target.offsetWidth !== 0) && !f.isWindow(e) && (n = e[o], n && (e[o] = null), f.event.triggered = h, e[h](), f.event.triggered = b, n && (e[o] = n)),
                c.result
            }
            return
        }, dispatch: function (c) {
            c = f.event.fix(c || a.event);
            var d = (f._data(this, "events") || {})[c.type] || [],
                e = d.delegateCount,
                g = [].slice.call(arguments, 0),
                h = !c.exclusive && !c.namespace,
                i = f.event.special[c.type] || {},
                j = [],
                k, l, m, n, o, p, q, r, s, t, u;
            g[0] = c,
            c.delegateTarget = this;
            if (i.preDispatch && i.preDispatch.call(this, c) === !1) return;
            if (e && (!c.button || c.type !== "click")) {
                n = f(this),
                n.context = this.ownerDocument || this;
                for (m = c.target; m != this; m = m.parentNode || this) if (m.disabled !== !0) {
                    p = {}, r = [],
                    n[0] = m;
                    for (k = 0; k < e; k++) s = d[k],
                    t = s.selector,
                    p[t] === b && (p[t] = s.quick ? H(m, s.quick) : n.is(t)),
                    p[t] && r.push(s);
                    r.length && j.push({
                        elem: m,
                        matches: r
                    })
                }
            }
            d.length > e && j.push({
                elem: this,
                matches: d.slice(e)
            });
            for (k = 0; k < j.length && !c.isPropagationStopped(); k++) {
                q = j[k],
                c.currentTarget = q.elem;
                for (l = 0; l < q.matches.length && !c.isImmediatePropagationStopped(); l++) {
                    s = q.matches[l];
                    if (h || !c.namespace && !s.namespace || c.namespace_re && c.namespace_re.test(s.namespace)) c.data = s.data,
                    c.handleObj = s,
                    o = ((f.event.special[s.origType] || {}).handle || s.handler).apply(q.elem, g),
                    o !== b && (c.result = o, o === !1 && (c.preventDefault(), c.stopPropagation()))
                }
            }
            return i.postDispatch && i.postDispatch.call(this, c),
            c.result
        }, props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {}, keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (a, b) {
                return a.which == null && (a.which = b.charCode != null ? b.charCode : b.keyCode),
                a
            }
        }, mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (a, d) {
                var e, f, g, h = d.button,
                    i = d.fromElement;
                return a.pageX == null && d.clientX != null && (e = a.target.ownerDocument || c, f = e.documentElement, g = e.body, a.pageX = d.clientX + (f && f.scrollLeft || g && g.scrollLeft || 0) - (f && f.clientLeft || g && g.clientLeft || 0), a.pageY = d.clientY + (f && f.scrollTop || g && g.scrollTop || 0) - (f && f.clientTop || g && g.clientTop || 0)),
                !a.relatedTarget && i && (a.relatedTarget = i === a.target ? d.toElement : i),
                !a.which && h !== b && (a.which = h & 1 ? 1 : h & 2 ? 3 : h & 4 ? 2 : 0),
                a
            }
        }, fix: function (a) {
            if (a[f.expando]) return a;
            var d, e, g = a,
                h = f.event.fixHooks[a.type] || {},
                i = h.props ? this.props.concat(h.props) : this.props;
            a = f.Event(g);
            for (d = i.length; d;) e = i[--d],
            a[e] = g[e];
            return a.target || (a.target = g.srcElement || c),
            a.target.nodeType === 3 && (a.target = a.target.parentNode),
            a.metaKey === b && (a.metaKey = a.ctrlKey),
            h.filter ? h.filter(a, g) : a
        }, special: {
            ready: {
                setup: f.bindReady
            }, load: {
                noBubble: !0
            }, focus: {
                delegateType: "focusin"
            }, blur: {
                delegateType: "focusout"
            }, beforeunload: {
                setup: function (a, b, c) {
                    f.isWindow(this) && (this.onbeforeunload = c)
                }, teardown: function (a, b) {
                    this.onbeforeunload === b && (this.onbeforeunload = null)
                }
            }
        }, simulate: function (a, b, c, d) {
            var e = f.extend(new f.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? f.event.trigger(e, null, b) : f.event.dispatch.call(b, e),
            e.isDefaultPrevented() && c.preventDefault()
        }
    }, f.event.handle = f.event.dispatch,
    f.removeEvent = c.removeEventListener ?
    function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    } : function (a, b, c) {
        a.detachEvent && a.detachEvent("on" + b, c)
    }, f.Event = function (a, b) {
        if (!(this instanceof f.Event)) return new f.Event(a, b);
        a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? K : J) : this.type = a,
        b && f.extend(this, b),
        this.timeStamp = a && a.timeStamp || f.now(),
        this[f.expando] = !0
    }, f.Event.prototype = {
        preventDefault: function () {
            this.isDefaultPrevented = K;
            var a = this.originalEvent;
            if (!a) return;
            a.preventDefault ? a.preventDefault() : a.returnValue = !1
        }, stopPropagation: function () {
            this.isPropagationStopped = K;
            var a = this.originalEvent;
            if (!a) return;
            a.stopPropagation && a.stopPropagation(),
            a.cancelBubble = !0
        }, stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = K,
            this.stopPropagation()
        }, isDefaultPrevented: J,
        isPropagationStopped: J,
        isImmediatePropagationStopped: J
    }, f.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function (a, b) {
        f.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function (a) {
                var c = this,
                    d = a.relatedTarget,
                    e = a.handleObj,
                    g = e.selector,
                    h;
                if (!d || d !== c && !f.contains(c, d)) a.type = e.origType,
                h = e.handler.apply(this, arguments),
                a.type = b;
                return h
            }
        }
    }),
    f.support.submitBubbles || (f.event.special.submit = {
        setup: function () {
            if (f.nodeName(this, "form")) return !1;
            f.event.add(this, "click._submit keypress._submit", function (a) {
                var c = a.target,
                    d = f.nodeName(c, "input") || f.nodeName(c, "button") ? c.form : b;
                d && !d._submit_attached && (f.event.add(d, "submit._submit", function (a) {
                    a._submit_bubble = !0
                }), d._submit_attached = !0)
            })
        }, postDispatch: function (a) {
            a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && f.event.simulate("submit", this.parentNode, a, !0))
        }, teardown: function () {
            if (f.nodeName(this, "form")) return !1;
            f.event.remove(this, "._submit")
        }
    }),
    f.support.changeBubbles || (f.event.special.change = {
        setup: function () {
            if (z.test(this.nodeName)) {
                if (this.type === "checkbox" || this.type === "radio") f.event.add(this, "propertychange._change", function (a) {
                    a.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                }),
                f.event.add(this, "click._change", function (a) {
                    this._just_changed && !a.isTrigger && (this._just_changed = !1, f.event.simulate("change", this, a, !0))
                });
                return !1
            }
            f.event.add(this, "beforeactivate._change", function (a) {
                var b = a.target;
                z.test(b.nodeName) && !b._change_attached && (f.event.add(b, "change._change", function (a) {
                    this.parentNode && !a.isSimulated && !a.isTrigger && f.event.simulate("change", this.parentNode, a, !0)
                }), b._change_attached = !0)
            })
        }, handle: function (a) {
            var b = a.target;
            if (this !== b || a.isSimulated || a.isTrigger || b.type !== "radio" && b.type !== "checkbox") return a.handleObj.handler.apply(this, arguments)
        }, teardown: function () {
            return f.event.remove(this, "._change"),
            z.test(this.nodeName)
        }
    }),
    f.support.focusinBubbles || f.each({
        focus: "focusin",
        blur: "focusout"
    }, function (a, b) {
        var d = 0,
            e = function (a) {
                f.event.simulate(b, a.target, f.event.fix(a), !0)
            };
        f.event.special[b] = {
            setup: function () {
                d++ === 0 && c.addEventListener(a, e, !0)
            }, teardown: function () {
                --d === 0 && c.removeEventListener(a, e, !0)
            }
        }
    }),
    f.fn.extend({
        on: function (a, c, d, e, g) {
            var h, i;
            if (typeof a == "object") {
                typeof c != "string" && (d = d || c, c = b);
                for (i in a) this.on(i, c, d, a[i], g);
                return this
            }
            d == null && e == null ? (e = c, d = c = b) : e == null && (typeof c == "string" ? (e = d, d = b) : (e = d, d = c, c = b));
            if (e === !1) e = J;
            else if (!e) return this;
            return g === 1 && (h = e, e = function (a) {
                return f().off(a),
                h.apply(this, arguments)
            }, e.guid = h.guid || (h.guid = f.guid++)),
            this.each(function () {
                f.event.add(this, a, e, d, c)
            })
        }, one: function (a, b, c, d) {
            return this.on(a, b, c, d, 1)
        }, off: function (a, c, d) {
            if (a && a.preventDefault && a.handleObj) {
                var e = a.handleObj;
                return f(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler),
                this
            }
            if (typeof a == "object") {
                for (var g in a) this.off(g, c, a[g]);
                return this
            }
            if (c === !1 || typeof c == "function") d = c,
            c = b;
            return d === !1 && (d = J),
            this.each(function () {
                f.event.remove(this, a, d, c)
            })
        }, bind: function (a, b, c) {
            return this.on(a, null, b, c)
        }, unbind: function (a, b) {
            return this.off(a, null, b)
        }, live: function (a, b, c) {
            return f(this.context).on(a, this.selector, b, c),
            this
        }, die: function (a, b) {
            return f(this.context).off(a, this.selector || "**", b),
            this
        }, delegate: function (a, b, c, d) {
            return this.on(b, a, c, d)
        }, undelegate: function (a, b, c) {
            return arguments.length == 1 ? this.off(a, "**") : this.off(b, a, c)
        }, trigger: function (a, b) {
            return this.each(function () {
                f.event.trigger(a, b, this)
            })
        }, triggerHandler: function (a, b) {
            if (this[0]) return f.event.trigger(a, b, this[0], !0)
        }, toggle: function (a) {
            var b = arguments,
                c = a.guid || f.guid++,
                d = 0,
                e = function (c) {
                    var e = (f._data(this, "lastToggle" + a.guid) || 0) % d;
                    return f._data(this, "lastToggle" + a.guid, e + 1),
                    c.preventDefault(),
                    b[e].apply(this, arguments) || !1
                };
            e.guid = c;
            while (d < b.length) b[d++].guid = c;
            return this.click(e)
        }, hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    }),
    f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
        f.fn[b] = function (a, c) {
            return c == null && (c = a, a = null),
            arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }, f.attrFn && (f.attrFn[b] = !0),
        C.test(b) && (f.event.fixHooks[b] = f.event.keyHooks),
        D.test(b) && (f.event.fixHooks[b] = f.event.mouseHooks)
    }),


    function () {
        function w(a, b, c, e, f, g) {
            for (var h = 0, i = e.length; h < i; h++) {
                var j = e[h];
                if (j) {
                    var k = !1;
                    j = j[a];
                    while (j) {
                        if (j[d] === c) {
                            k = e[j.sizset];
                            break
                        }
                        j.nodeType === 1 && !g && (j[d] = c, j.sizset = h);
                        if (j.nodeName.toLowerCase() === b) {
                            k = j;
                            break
                        }
                        j = j[a]
                    }
                    e[h] = k
                }
            }
        }
        function x(a, b, c, e, f, g) {
            for (var h = 0, i = e.length; h < i; h++) {
                var j = e[h];
                if (j) {
                    var k = !1;
                    j = j[a];
                    while (j) {
                        if (j[d] === c) {
                            k = e[j.sizset];
                            break
                        }
                        if (j.nodeType === 1) {
                            g || (j[d] = c, j.sizset = h);
                            if (typeof b != "string") {
                                if (j === b) {
                                    k = !0;
                                    break
                                }
                            } else if (m.filter(b, [j]).length > 0) {
                                k = j;
                                break
                            }
                        }
                        j = j[a]
                    }
                    e[h] = k
                }
            }
        }
        var a = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
            d = "sizcache" + (Math.random() + "").replace(".", ""),
            e = 0,
            g = Object.prototype.toString,
            h = !1,
            i = !0,
            j = /\\/g,
            k = /\r\n/g,
            l = /\W/;
        [0, 0].sort(function () {
            return i = !1,
            0
        });
        var m = function (b, d, e, f) {
            e = e || [],
            d = d || c;
            var h = d;
            if (d.nodeType !== 1 && d.nodeType !== 9) return [];
            if (!b || typeof b != "string") return e;
            var i, j, k, l, n, q, r, t, u = !0,
                v = m.isXML(d),
                w = [],
                x = b;
            do {
                a.exec(""), i = a.exec(x);
                if (i) {
                    x = i[3],
                    w.push(i[1]);
                    if (i[2]) {
                        l = i[3];
                        break
                    }
                }
            } while (i);
            if (w.length > 1 && p.exec(b)) if (w.length === 2 && o.relative[w[0]]) j = y(w[0] + w[1], d, f);
            else {
                j = o.relative[w[0]] ? [d] : m(w.shift(), d);
                while (w.length) b = w.shift(),
                o.relative[b] && (b += w.shift()),
                j = y(b, j, f)
            } else {
                !f && w.length > 1 && d.nodeType === 9 && !v && o.match.ID.test(w[0]) && !o.match.ID.test(w[w.length - 1]) && (n = m.find(w.shift(), d, v), d = n.expr ? m.filter(n.expr, n.set)[0] : n.set[0]);
                if (d) {
                    n = f ? {
                        expr: w.pop(),
                        set: s(f)
                    } : m.find(w.pop(), w.length !== 1 || w[0] !== "~" && w[0] !== "+" || !d.parentNode ? d : d.parentNode, v),
                    j = n.expr ? m.filter(n.expr, n.set) : n.set,
                    w.length > 0 ? k = s(j) : u = !1;
                    while (w.length) q = w.pop(),
                    r = q,
                    o.relative[q] ? r = w.pop() : q = "",
                    r == null && (r = d),
                    o.relative[q](k, r, v)
                } else k = w = []
            }
            k || (k = j),
            k || m.error(q || b);
            if (g.call(k) === "[object Array]") if (!u) e.push.apply(e, k);
            else if (d && d.nodeType === 1) for (t = 0; k[t] != null; t++) k[t] && (k[t] === !0 || k[t].nodeType === 1 && m.contains(d, k[t])) && e.push(j[t]);
            else for (t = 0; k[t] != null; t++) k[t] && k[t].nodeType === 1 && e.push(j[t]);
            else s(k, e);
            return l && (m(l, h, e, f), m.uniqueSort(e)),
            e
        };
        m.uniqueSort = function (a) {
            if (u) {
                h = i,
                a.sort(u);
                if (h) for (var b = 1; b < a.length; b++) a[b] === a[b - 1] && a.splice(b--, 1)
            }
            return a
        }, m.matches = function (a, b) {
            return m(a, null, null, b)
        }, m.matchesSelector = function (a, b) {
            return m(b, null, null, [a]).length > 0
        }, m.find = function (a, b, c) {
            var d, e, f, g, h, i;
            if (!a) return [];
            for (e = 0, f = o.order.length; e < f; e++) {
                h = o.order[e];
                if (g = o.leftMatch[h].exec(a)) {
                    i = g[1],
                    g.splice(1, 1);
                    if (i.substr(i.length - 1) !== "\\") {
                        g[1] = (g[1] || "").replace(j, ""),
                        d = o.find[h](g, b, c);
                        if (d != null) {
                            a = a.replace(o.match[h], "");
                            break
                        }
                    }
                }
            }
            return d || (d = typeof b.getElementsByTagName != "undefined" ? b.getElementsByTagName("*") : []),
            {
                set: d,
                expr: a
            }
        }, m.filter = function (a, c, d, e) {
            var f, g, h, i, j, k, l, n, p, q = a,
                r = [],
                s = c,
                t = c && c[0] && m.isXML(c[0]);
            while (a && c.length) {
                for (h in o.filter) if ((f = o.leftMatch[h].exec(a)) != null && f[2]) {
                    k = o.filter[h],
                    l = f[1],
                    g = !1,
                    f.splice(1, 1);
                    if (l.substr(l.length - 1) === "\\") continue;
                    s === r && (r = []);
                    if (o.preFilter[h]) {
                        f = o.preFilter[h](f, s, d, r, e, t);
                        if (!f) g = i = !0;
                        else if (f === !0) continue
                    }
                    if (f) for (n = 0;
                    (j = s[n]) != null; n++) j && (i = k(j, f, n, s), p = e ^ i, d && i != null ? p ? g = !0 : s[n] = !1 : p && (r.push(j), g = !0));
                    if (i !== b) {
                        d || (s = r),
                        a = a.replace(o.match[h], "");
                        if (!g) return [];
                        break
                    }
                }
                if (a === q) {
                    if (g != null) break;
                    m.error(a)
                }
                q = a
            }
            return s
        }, m.error = function (a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        };
        var n = m.getText = function (a) {
            var b, c, d = a.nodeType,
                e = "";
            if (d) {
                if (d === 1 || d === 9 || d === 11) {
                    if (typeof a.textContent == "string") return a.textContent;
                    if (typeof a.innerText == "string") return a.innerText.replace(k, "");
                    for (a = a.firstChild; a; a = a.nextSibling) e += n(a)
                } else if (d === 3 || d === 4) return a.nodeValue
            } else for (b = 0; c = a[b]; b++) c.nodeType !== 8 && (e += n(c));
            return e
        },
            o = m.selectors = {
                order: ["ID", "NAME", "TAG"],
                match: {
                    ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                    CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                    NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                    ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                    TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                    CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                    POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                    PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
                }, leftMatch: {}, attrMap: {
                    "class": "className",
                    "for": "htmlFor"
                }, attrHandle: {
                    href: function (a) {
                        return a.getAttribute("href")
                    }, type: function (a) {
                        return a.getAttribute("type")
                    }
                }, relative: {
                    "+": function (a, b) {
                        var c = typeof b == "string",
                            d = c && !l.test(b),
                            e = c && !d;
                        d && (b = b.toLowerCase());
                        for (var f = 0, g = a.length, h; f < g; f++) if (h = a[f]) {
                            while ((h = h.previousSibling) && h.nodeType !== 1);
                            a[f] = e || h && h.nodeName.toLowerCase() === b ? h || !1 : h === b
                        }
                        e && m.filter(b, a, !0)
                    }, ">": function (a, b) {
                        var c, d = typeof b == "string",
                            e = 0,
                            f = a.length;
                        if (d && !l.test(b)) {
                            b = b.toLowerCase();
                            for (; e < f; e++) {
                                c = a[e];
                                if (c) {
                                    var g = c.parentNode;
                                    a[e] = g.nodeName.toLowerCase() === b ? g : !1
                                }
                            }
                        } else {
                            for (; e < f; e++) c = a[e],
                            c && (a[e] = d ? c.parentNode : c.parentNode === b);
                            d && m.filter(b, a, !0)
                        }
                    }, "": function (a, b, c) {
                        var d, f = e++,
                            g = x;
                        typeof b == "string" && !l.test(b) && (b = b.toLowerCase(), d = b, g = w),
                        g("parentNode", b, f, a, d, c)
                    }, "~": function (a, b, c) {
                        var d, f = e++,
                            g = x;
                        typeof b == "string" && !l.test(b) && (b = b.toLowerCase(), d = b, g = w),
                        g("previousSibling", b, f, a, d, c)
                    }
                }, find: {
                    ID: function (a, b, c) {
                        if (typeof b.getElementById != "undefined" && !c) {
                            var d = b.getElementById(a[1]);
                            return d && d.parentNode ? [d] : []
                        }
                    }, NAME: function (a, b) {
                        if (typeof b.getElementsByName != "undefined") {
                            var c = [],
                                d = b.getElementsByName(a[1]);
                            for (var e = 0, f = d.length; e < f; e++) d[e].getAttribute("name") === a[1] && c.push(d[e]);
                            return c.length === 0 ? null : c
                        }
                    }, TAG: function (a, b) {
                        if (typeof b.getElementsByTagName != "undefined") return b.getElementsByTagName(a[1])
                    }
                }, preFilter: {
                    CLASS: function (a, b, c, d, e, f) {
                        a = " " + a[1].replace(j, "") + " ";
                        if (f) return a;
                        for (var g = 0, h;
                        (h = b[g]) != null; g++) h && (e ^ (h.className && (" " + h.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a) >= 0) ? c || d.push(h) : c && (b[g] = !1));
                        return !1
                    }, ID: function (a) {
                        return a[1].replace(j, "")
                    }, TAG: function (a, b) {
                        return a[1].replace(j, "").toLowerCase()
                    }, CHILD: function (a) {
                        if (a[1] === "nth") {
                            a[2] || m.error(a[0]),
                            a[2] = a[2].replace(/^\+|\s*/g, "");
                            var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2] === "even" && "2n" || a[2] === "odd" && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
                            a[2] = b[1] + (b[2] || 1) - 0,
                            a[3] = b[3] - 0
                        } else a[2] && m.error(a[0]);
                        return a[0] = e++,
                        a
                    }, ATTR: function (a, b, c, d, e, f) {
                        var g = a[1] = a[1].replace(j, "");
                        return !f && o.attrMap[g] && (a[1] = o.attrMap[g]),
                        a[4] = (a[4] || a[5] || "").replace(j, ""),
                        a[2] === "~=" && (a[4] = " " + a[4] + " "),
                        a
                    }, PSEUDO: function (b, c, d, e, f) {
                        if (b[1] === "not") {
                            if (!((a.exec(b[3]) || "").length > 1 || /^\w/.test(b[3]))) {
                                var g = m.filter(b[3], c, d, !0 ^ f);
                                return d || e.push.apply(e, g),
                                !1
                            }
                            b[3] = m(b[3], null, null, c)
                        } else if (o.match.POS.test(b[0]) || o.match.CHILD.test(b[0])) return !0;
                        return b
                    }, POS: function (a) {
                        return a.unshift(!0),
                        a
                    }
                }, filters: {
                    enabled: function (a) {
                        return a.disabled === !1 && a.type !== "hidden"
                    }, disabled: function (a) {
                        return a.disabled === !0
                    }, checked: function (a) {
                        return a.checked === !0
                    }, selected: function (a) {
                        return a.parentNode && a.parentNode.selectedIndex,
                        a.selected === !0
                    }, parent: function (a) {
                        return !!a.firstChild
                    }, empty: function (a) {
                        return !a.firstChild
                    }, has: function (a, b, c) {
                        return !!m(c[3], a).length
                    }, header: function (a) {
                        return /h\d/i.test(a.nodeName)
                    }, text: function (a) {
                        var b = a.getAttribute("type"),
                            c = a.type;
                        return a.nodeName.toLowerCase() === "input" && "text" === c && (b === c || b === null)
                    }, radio: function (a) {
                        return a.nodeName.toLowerCase() === "input" && "radio" === a.type
                    }, checkbox: function (a) {
                        return a.nodeName.toLowerCase() === "input" && "checkbox" === a.type
                    }, file: function (a) {
                        return a.nodeName.toLowerCase() === "input" && "file" === a.type
                    }, password: function (a) {
                        return a.nodeName.toLowerCase() === "input" && "password" === a.type
                    }, submit: function (a) {
                        var b = a.nodeName.toLowerCase();
                        return (b === "input" || b === "button") && "submit" === a.type
                    }, image: function (a) {
                        return a.nodeName.toLowerCase() === "input" && "image" === a.type
                    }, reset: function (a) {
                        var b = a.nodeName.toLowerCase();
                        return (b === "input" || b === "button") && "reset" === a.type
                    }, button: function (a) {
                        var b = a.nodeName.toLowerCase();
                        return b === "input" && "button" === a.type || b === "button"
                    }, input: function (a) {
                        return /input|select|textarea|button/i.test(a.nodeName)
                    }, focus: function (a) {
                        return a === a.ownerDocument.activeElement
                    }
                }, setFilters: {
                    first: function (a, b) {
                        return b === 0
                    }, last: function (a, b, c, d) {
                        return b === d.length - 1
                    }, even: function (a, b) {
                        return b % 2 === 0
                    }, odd: function (a, b) {
                        return b % 2 === 1
                    }, lt: function (a, b, c) {
                        return b < c[3] - 0
                    }, gt: function (a, b, c) {
                        return b > c[3] - 0
                    }, nth: function (a, b, c) {
                        return c[3] - 0 === b
                    }, eq: function (a, b, c) {
                        return c[3] - 0 === b
                    }
                }, filter: {
                    PSEUDO: function (a, b, c, d) {
                        var e = b[1],
                            f = o.filters[e];
                        if (f) return f(a, c, b, d);
                        if (e === "contains") return (a.textContent || a.innerText || n([a]) || "").indexOf(b[3]) >= 0;
                        if (e === "not") {
                            var g = b[3];
                            for (var h = 0, i = g.length; h < i; h++) if (g[h] === a) return !1;
                            return !0
                        }
                        m.error(e)
                    }, CHILD: function (a, b) {
                        var c, e, f, g, h, i, j, k = b[1],
                            l = a;
                        switch (k) {
                        case "only":
                        case "first":
                            while (l = l.previousSibling) if (l.nodeType === 1) return !1;
                            if (k === "first") return !0;
                            l = a;
                        case "last":
                            while (l = l.nextSibling) if (l.nodeType === 1) return !1;
                            return !0;
                        case "nth":
                            c = b[2],
                            e = b[3];
                            if (c === 1 && e === 0) return !0;
                            f = b[0],
                            g = a.parentNode;
                            if (g && (g[d] !== f || !a.nodeIndex)) {
                                i = 0;
                                for (l = g.firstChild; l; l = l.nextSibling) l.nodeType === 1 && (l.nodeIndex = ++i);
                                g[d] = f
                            }
                            return j = a.nodeIndex - e,
                            c === 0 ? j === 0 : j % c === 0 && j / c >= 0
                        }
                    }, ID: function (a, b) {
                        return a.nodeType === 1 && a.getAttribute("id") === b
                    }, TAG: function (a, b) {
                        return b === "*" && a.nodeType === 1 || !! a.nodeName && a.nodeName.toLowerCase() === b
                    }, CLASS: function (a, b) {
                        return (" " + (a.className || a.getAttribute("class")) + " ").indexOf(b) > -1
                    }, ATTR: function (a, b) {
                        var c = b[1],
                            d = m.attr ? m.attr(a, c) : o.attrHandle[c] ? o.attrHandle[c](a) : a[c] != null ? a[c] : a.getAttribute(c),
                            e = d + "",
                            f = b[2],
                            g = b[4];
                        return d == null ? f === "!=" : !f && m.attr ? d != null : f === "=" ? e === g : f === "*=" ? e.indexOf(g) >= 0 : f === "~=" ? (" " + e + " ").indexOf(g) >= 0 : g ? f === "!=" ? e !== g : f === "^=" ? e.indexOf(g) === 0 : f === "$=" ? e.substr(e.length - g.length) === g : f === "|=" ? e === g || e.substr(0, g.length + 1) === g + "-" : !1 : e && d !== !1
                    }, POS: function (a, b, c, d) {
                        var e = b[2],
                            f = o.setFilters[e];
                        if (f) return f(a, c, b, d)
                    }
                }
            },
            p = o.match.POS,
            q = function (a, b) {
                return "\\" + (b - 0 + 1)
            };
        for (var r in o.match) o.match[r] = new RegExp(o.match[r].source + /(?![^\[]*\])(?![^\(]*\))/.source),
        o.leftMatch[r] = new RegExp(/(^(?:.|\r|\n)*?)/.source + o.match[r].source.replace(/\\(\d+)/g, q));
        o.match.globalPOS = p;
        var s = function (a, b) {
            return a = Array.prototype.slice.call(a, 0),
            b ? (b.push.apply(b, a), b) : a
        };
        try {
            Array.prototype.slice.call(c.documentElement.childNodes, 0)[0].nodeType
        } catch (t) {
            s = function (a, b) {
                var c = 0,
                    d = b || [];
                if (g.call(a) === "[object Array]") Array.prototype.push.apply(d, a);
                else if (typeof a.length == "number") for (var e = a.length; c < e; c++) d.push(a[c]);
                else for (; a[c]; c++) d.push(a[c]);
                return d
            }
        }
        var u, v;
        c.documentElement.compareDocumentPosition ? u = function (a, b) {
            return a === b ? (h = !0, 0) : !a.compareDocumentPosition || !b.compareDocumentPosition ? a.compareDocumentPosition ? -1 : 1 : a.compareDocumentPosition(b) & 4 ? -1 : 1
        } : (u = function (a, b) {
            if (a === b) return h = !0,
            0;
            if (a.sourceIndex && b.sourceIndex) return a.sourceIndex - b.sourceIndex;
            var c, d, e = [],
                f = [],
                g = a.parentNode,
                i = b.parentNode,
                j = g;
            if (g === i) return v(a, b);
            if (!g) return -1;
            if (!i) return 1;
            while (j) e.unshift(j),
            j = j.parentNode;
            j = i;
            while (j) f.unshift(j),
            j = j.parentNode;
            c = e.length,
            d = f.length;
            for (var k = 0; k < c && k < d; k++) if (e[k] !== f[k]) return v(e[k], f[k]);
            return k === c ? v(a, f[k], -1) : v(e[k], b, 1)
        }, v = function (a, b, c) {
            if (a === b) return c;
            var d = a.nextSibling;
            while (d) {
                if (d === b) return -1;
                d = d.nextSibling
            }
            return 1
        }),


        function () {
            var a = c.createElement("div"),
                d = "script" + (new Date).getTime(),
                e = c.documentElement;
            a.innerHTML = "<a name='" + d + "'/>",
            e.insertBefore(a, e.firstChild),
            c.getElementById(d) && (o.find.ID = function (a, c, d) {
                if (typeof c.getElementById != "undefined" && !d) {
                    var e = c.getElementById(a[1]);
                    return e ? e.id === a[1] || typeof e.getAttributeNode != "undefined" && e.getAttributeNode("id").nodeValue === a[1] ? [e] : b : []
                }
            }, o.filter.ID = function (a, b) {
                var c = typeof a.getAttributeNode != "undefined" && a.getAttributeNode("id");
                return a.nodeType === 1 && c && c.nodeValue === b
            }),
            e.removeChild(a),
            e = a = null
        }(),


        function () {
            var a = c.createElement("div");
            a.appendChild(c.createComment("")),
            a.getElementsByTagName("*").length > 0 && (o.find.TAG = function (a, b) {
                var c = b.getElementsByTagName(a[1]);
                if (a[1] === "*") {
                    var d = [];
                    for (var e = 0; c[e]; e++) c[e].nodeType === 1 && d.push(c[e]);
                    c = d
                }
                return c
            }),
            a.innerHTML = "<a href='#'></a>",
            a.firstChild && typeof a.firstChild.getAttribute != "undefined" && a.firstChild.getAttribute("href") !== "#" && (o.attrHandle.href = function (a) {
                return a.getAttribute("href", 2)
            }),
            a = null
        }(),
        c.querySelectorAll &&
        function () {
            var a = m,
                b = c.createElement("div"),
                d = "__sizzle__";
            b.innerHTML = "<p class='TEST'></p>";
            if (b.querySelectorAll && b.querySelectorAll(".TEST").length === 0) return;
            m = function (b, e, f, g) {
                e = e || c;
                if (!g && !m.isXML(e)) {
                    var h = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);
                    if (h && (e.nodeType === 1 || e.nodeType === 9)) {
                        if (h[1]) return s(e.getElementsByTagName(b), f);
                        if (h[2] && o.find.CLASS && e.getElementsByClassName) return s(e.getElementsByClassName(h[2]), f)
                    }
                    if (e.nodeType === 9) {
                        if (b === "body" && e.body) return s([e.body], f);
                        if (h && h[3]) {
                            var i = e.getElementById(h[3]);
                            if (!i || !i.parentNode) return s([], f);
                            if (i.id === h[3]) return s([i], f)
                        }
                        try {
                            return s(e.querySelectorAll(b), f)
                        } catch (j) {}
                    } else if (e.nodeType === 1 && e.nodeName.toLowerCase() !== "object") {
                        var k = e,
                            l = e.getAttribute("id"),
                            n = l || d,
                            p = e.parentNode,
                            q = /^\s*[+~]/.test(b);
                        l ? n = n.replace(/'/g, "\\$&") : e.setAttribute("id", n),
                        q && p && (e = e.parentNode);
                        try {
                            if (!q || p) return s(e.querySelectorAll("[id='" + n + "'] " + b), f)
                        } catch (r) {} finally {
                            l || k.removeAttribute("id")
                        }
                    }
                }
                return a(b, e, f, g)
            };
            for (var e in a) m[e] = a[e];
            b = null
        }(),


        function () {
            var a = c.documentElement,
                b = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.msMatchesSelector;
            if (b) {
                var d = !b.call(c.createElement("div"), "div"),
                    e = !1;
                try {
                    b.call(c.documentElement, "[test!='']:sizzle")
                } catch (f) {
                    e = !0
                }
                m.matchesSelector = function (a, c) {
                    c = c.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
                    if (!m.isXML(a)) try {
                        if (e || !o.match.PSEUDO.test(c) && !/!=/.test(c)) {
                            var f = b.call(a, c);
                            if (f || !d || a.document && a.document.nodeType !== 11) return f
                        }
                    } catch (g) {}
                    return m(c, null, null, [a]).length > 0
                }
            }
        }(),


        function () {
            var a = c.createElement("div");
            a.innerHTML = "<div class='test e'></div><div class='test'></div>";
            if (!a.getElementsByClassName || a.getElementsByClassName("e").length === 0) return;
            a.lastChild.className = "e";
            if (a.getElementsByClassName("e").length === 1) return;
            o.order.splice(1, 0, "CLASS"),
            o.find.CLASS = function (a, b, c) {
                if (typeof b.getElementsByClassName != "undefined" && !c) return b.getElementsByClassName(a[1])
            }, a = null
        }(),
        c.documentElement.contains ? m.contains = function (a, b) {
            return a !== b && (a.contains ? a.contains(b) : !0)
        } : c.documentElement.compareDocumentPosition ? m.contains = function (a, b) {
            return !!(a.compareDocumentPosition(b) & 16)
        } : m.contains = function () {
            return !1
        }, m.isXML = function (a) {
            var b = (a ? a.ownerDocument || a : 0).documentElement;
            return b ? b.nodeName !== "HTML" : !1
        };
        var y = function (a, b, c) {
            var d, e = [],
                f = "",
                g = b.nodeType ? [b] : b;
            while (d = o.match.PSEUDO.exec(a)) f += d[0],
            a = a.replace(o.match.PSEUDO, "");
            a = o.relative[a] ? a + "*" : a;
            for (var h = 0, i = g.length; h < i; h++) m(a, g[h], e, c);
            return m.filter(f, e)
        };
        m.attr = f.attr,
        m.selectors.attrMap = {}, f.find = m,
        f.expr = m.selectors,
        f.expr[":"] = f.expr.filters,
        f.unique = m.uniqueSort,
        f.text = m.getText,
        f.isXMLDoc = m.isXML,
        f.contains = m.contains
    }();
    var L = /Until$/,
        M = /^(?:parents|prevUntil|prevAll)/,
        N = /,/,
        O = /^.[^:#\[\.,]*$/,
        P = Array.prototype.slice,
        Q = f.expr.match.globalPOS,
        R = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    f.fn.extend({
        find: function (a) {
            var b = this,
                c, d;
            if (typeof a != "string") return f(a).filter(function () {
                for (c = 0, d = b.length; c < d; c++) if (f.contains(b[c], this)) return !0
            });
            var e = this.pushStack("", "find", a),
                g, h, i;
            for (c = 0, d = this.length; c < d; c++) {
                g = e.length,
                f.find(a, this[c], e);
                if (c > 0) for (h = g; h < e.length; h++) for (i = 0; i < g; i++) if (e[i] === e[h]) {
                    e.splice(h--, 1);
                    break
                }
            }
            return e
        }, has: function (a) {
            var b = f(a);
            return this.filter(function () {
                for (var a = 0, c = b.length; a < c; a++) if (f.contains(this, b[a])) return !0
            })
        }, not: function (a) {
            return this.pushStack(T(this, a, !1), "not", a)
        }, filter: function (a) {
            return this.pushStack(T(this, a, !0), "filter", a)
        }, is: function (a) {
            return !!a && (typeof a == "string" ? Q.test(a) ? f(a, this.context).index(this[0]) >= 0 : f.filter(a, this).length > 0 : this.filter(a).length > 0)
        }, closest: function (a, b) {
            var c = [],
                d, e, g = this[0];
            if (f.isArray(a)) {
                var h = 1;
                while (g && g.ownerDocument && g !== b) {
                    for (d = 0; d < a.length; d++) f(g).is(a[d]) && c.push({
                        selector: a[d],
                        elem: g,
                        level: h
                    });
                    g = g.parentNode,
                    h++
                }
                return c
            }
            var i = Q.test(a) || typeof a != "string" ? f(a, b || this.context) : 0;
            for (d = 0, e = this.length; d < e; d++) {
                g = this[d];
                while (g) {
                    if (i ? i.index(g) > -1 : f.find.matchesSelector(g, a)) {
                        c.push(g);
                        break
                    }
                    g = g.parentNode;
                    if (!g || !g.ownerDocument || g === b || g.nodeType === 11) break
                }
            }
            return c = c.length > 1 ? f.unique(c) : c,
            this.pushStack(c, "closest", a)
        }, index: function (a) {
            return a ? typeof a == "string" ? f.inArray(this[0], f(a)) : f.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        }, add: function (a, b) {
            var c = typeof a == "string" ? f(a, b) : f.makeArray(a && a.nodeType ? [a] : a),
                d = f.merge(this.get(), c);
            return this.pushStack(S(c[0]) || S(d[0]) ? d : f.unique(d))
        }, andSelf: function () {
            return this.add(this.prevObject)
        }
    }),
    f.each({
        parent: function (a) {
            var b = a.parentNode;
            return b && b.nodeType !== 11 ? b : null
        }, parents: function (a) {
            return f.dir(a, "parentNode")
        }, parentsUntil: function (a, b, c) {
            return f.dir(a, "parentNode", c)
        }, next: function (a) {
            return f.nth(a, 2, "nextSibling")
        }, prev: function (a) {
            return f.nth(a, 2, "previousSibling")
        }, nextAll: function (a) {
            return f.dir(a, "nextSibling")
        }, prevAll: function (a) {
            return f.dir(a, "previousSibling")
        }, nextUntil: function (a, b, c) {
            return f.dir(a, "nextSibling", c)
        }, prevUntil: function (a, b, c) {
            return f.dir(a, "previousSibling", c)
        }, siblings: function (a) {
            return f.sibling((a.parentNode || {}).firstChild, a)
        }, children: function (a) {
            return f.sibling(a.firstChild)
        }, contents: function (a) {
            return f.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : f.makeArray(a.childNodes)
        }
    }, function (a, b) {
        f.fn[a] = function (c, d) {
            var e = f.map(this, b, c);
            return L.test(a) || (d = c),
            d && typeof d == "string" && (e = f.filter(d, e)),
            e = this.length > 1 && !R[a] ? f.unique(e) : e,
            (this.length > 1 || N.test(d)) && M.test(a) && (e = e.reverse()),
            this.pushStack(e, a, P.call(arguments).join(","))
        }
    }),
    f.extend({
        filter: function (a, b, c) {
            return c && (a = ":not(" + a + ")"),
            b.length === 1 ? f.find.matchesSelector(b[0], a) ? [b[0]] : [] : f.find.matches(a, b)
        }, dir: function (a, c, d) {
            var e = [],
                g = a[c];
            while (g && g.nodeType !== 9 && (d === b || g.nodeType !== 1 || !f(g).is(d))) g.nodeType === 1 && e.push(g),
            g = g[c];
            return e
        }, nth: function (a, b, c, d) {
            b = b || 1;
            var e = 0;
            for (; a; a = a[c]) if (a.nodeType === 1 && ++e === b) break;
            return a
        }, sibling: function (a, b) {
            var c = [];
            for (; a; a = a.nextSibling) a.nodeType === 1 && a !== b && c.push(a);
            return c
        }
    });
    var V = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        W = / jQuery\d+="(?:\d+|null)"/g,
        X = /^\s+/,
        Y = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
        Z = /<([\w:]+)/,
        $ = /<tbody/i,
        _ = /<|&#?\w+;/,
        ab = /<(?:script|style)/i,
        bb = /<(?:script|object|embed|option|style)/i,
        cb = new RegExp("<(?:" + V + ")[\\s/>]", "i"),
        db = /checked\s*(?:[^=]|=\s*.checked.)/i,
        eb = /\/(java|ecma)script/i,
        fb = /^\s*<!(?:\[CDATA\[|\-\-)/,
        gb = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        },
        hb = U(c);
    gb.optgroup = gb.option,

    gb.tbody = gb.tfoot = gb.colgroup = gb.caption = gb.thead,
    gb.th = gb.td,
    f.support.htmlSerialize || (gb._default = [1, "div<div>", "</div>"]),
    f.fn.extend({
        text: function (a) {
            return f.access(this, function (a) {
                return a === b ? f.text(this) : this.empty().append((this[0] && this[0].ownerDocument || c).createTextNode(a))
            }, null, a, arguments.length)
        }, wrapAll: function (a) {
            if (f.isFunction(a)) return this.each(function (b) {
                f(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = f(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]),
                b.map(function () {
                    var a = this;
                    while (a.firstChild && a.firstChild.nodeType === 1) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        }, wrapInner: function (a) {
            return f.isFunction(a) ? this.each(function (b) {
                f(this).wrapInner(a.call(this, b))
            }) : this.each(function () {
                var b = f(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        }, wrap: function (a) {
            var b = f.isFunction(a);
            return this.each(function (c) {
                f(this).wrapAll(b ? a.call(this, c) : a)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                f.nodeName(this, "body") || f(this).replaceWith(this.childNodes)
            }).end()
        }, append: function () {
            return this.domManip(arguments, !0, function (a) {
                this.nodeType === 1 && this.appendChild(a)
            })
        }, prepend: function () {
            return this.domManip(arguments, !0, function (a) {
                this.nodeType === 1 && this.insertBefore(a, this.firstChild)
            })
        }, before: function () {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function (a) {
                this.parentNode.insertBefore(a, this)
            });
            if (arguments.length) {
                var a = f.clean(arguments);
                return a.push.apply(a, this.toArray()),
                this.pushStack(a, "before", arguments)
            }
        }, after: function () {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function (a) {
                this.parentNode.insertBefore(a, this.nextSibling)
            });
            if (arguments.length) {
                var a = this.pushStack(this, "after", arguments);
                return a.push.apply(a, f.clean(arguments)),
                a
            }
        }, remove: function (a, b) {
            for (var c = 0, d;
            (d = this[c]) != null; c++) if (!a || f.filter(a, [d]).length)!b && d.nodeType === 1 && (f.cleanData(d.getElementsByTagName("*")), f.cleanData([d])),
            d.parentNode && d.parentNode.removeChild(d);
            return this
        }, empty: function () {
            for (var a = 0, b;
            (b = this[a]) != null; a++) {
                b.nodeType === 1 && f.cleanData(b.getElementsByTagName("*"));
                while (b.firstChild) b.removeChild(b.firstChild)
            }
            return this
        }, clone: function (a, b) {
            return a = a == null ? !1 : a,
            b = b == null ? a : b,
            this.map(function () {
                return f.clone(this, a, b)
            })
        }, html: function (a) {
            return f.access(this, function (a) {
                var c = this[0] || {},
                    d = 0,
                    e = this.length;
                if (a === b) return c.nodeType === 1 ? c.innerHTML.replace(W, "") : null;
                if (typeof a == "string" && !ab.test(a) && (f.support.leadingWhitespace || !X.test(a)) && !gb[(Z.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(Y, "<$1></$2>");
                    try {
                        for (; d < e; d++) c = this[d] || {}, c.nodeType === 1 && (f.cleanData(c.getElementsByTagName("*")), c.innerHTML = a);
                        c = 0
                    } catch (g) {}
                }
                c && this.empty().append(a)
            }, null, a, arguments.length)
        }, replaceWith: function (a) {
            return this[0] && this[0].parentNode ? f.isFunction(a) ? this.each(function (b) {
                var c = f(this),
                    d = c.html();
                c.replaceWith(a.call(this, b, d))
            }) : (typeof a != "string" && (a = f(a).detach()), this.each(function () {
                var b = this.nextSibling,
                    c = this.parentNode;
                f(this).remove(),
                b ? f(b).before(a) : f(c).append(a)
            })) : this.length ? this.pushStack(f(f.isFunction(a) ? a() : a), "replaceWith", a) : this
        }, detach: function (a) {
            return this.remove(a, !0)
        }, domManip: function (a, c, d) {
            var e, g, h, i, j = a[0],
                k = [];
            if (!f.support.checkClone && arguments.length === 3 && typeof j == "string" && db.test(j)) return this.each(function () {
                f(this).domManip(a, c, d, !0)
            });
            if (f.isFunction(j)) return this.each(function (e) {
                var g = f(this);
                a[0] = j.call(this, e, c ? g.html() : b),
                g.domManip(a, c, d)
            });
            if (this[0]) {
                i = j && j.parentNode,
                f.support.parentNode && i && i.nodeType === 11 && i.childNodes.length === this.length ? e = {
                    fragment: i
                } : e = f.buildFragment(a, this, k),
                h = e.fragment,
                h.childNodes.length === 1 ? g = h = h.firstChild : g = h.firstChild;
                if (g) {
                    c = c && f.nodeName(g, "tr");
                    for (var l = 0, m = this.length, n = m - 1; l < m; l++) d.call(c ? ib(this[l], g) : this[l], e.cacheable || m > 1 && l < n ? f.clone(h, !0, !0) : h)
                }
                k.length && f.each(k, function (a, b) {
                    b.src ? f.ajax({
                        type: "GET",
                        global: !1,
                        url: b.src,
                        async: !1,
                        dataType: "script"
                    }) : f.globalEval((b.text || b.textContent || b.innerHTML || "").replace(fb, "/*$0*/")),
                    b.parentNode && b.parentNode.removeChild(b)
                })
            }
            return this
        }
    }),
    f.buildFragment = function (a, b, d) {
        var e, g, h, i, j = a[0];
        return b && b[0] && (i = b[0].ownerDocument || b[0]),
        i.createDocumentFragment || (i = c),
        a.length === 1 && typeof j == "string" && j.length < 512 && i === c && j.charAt(0) === "<" && !bb.test(j) && (f.support.checkClone || !db.test(j)) && (f.support.html5Clone || !cb.test(j)) && (g = !0, h = f.fragments[j], h && h !== 1 && (e = h)),
        e || (e = i.createDocumentFragment(), f.clean(a, i, e, d)),
        g && (f.fragments[j] = h ? e : 1),
        {
            fragment: e,
            cacheable: g
        }
    }, f.fragments = {}, f.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (a, b) {
        f.fn[a] = function (c) {
            var d = [],
                e = f(c),
                g = this.length === 1 && this[0].parentNode;
            if (g && g.nodeType === 11 && g.childNodes.length === 1 && e.length === 1) return e[b](this[0]),
            this;
            for (var h = 0, i = e.length; h < i; h++) {
                var j = (h > 0 ? this.clone(!0) : this).get();
                f(e[h])[b](j),
                d = d.concat(j)
            }
            return this.pushStack(d, a, e.selector)
        }
    }),
    f.extend({
        clone: function (a, b, c) {
            var d, e, g, h = f.support.html5Clone || f.isXMLDoc(a) || !cb.test("<" + a.nodeName + ">") ? a.cloneNode(!0) : ob(a);
            if ((!f.support.noCloneEvent || !f.support.noCloneChecked) && (a.nodeType === 1 || a.nodeType === 11) && !f.isXMLDoc(a)) {
                kb(a, h),
                d = lb(a),
                e = lb(h);
                for (g = 0; d[g]; ++g) e[g] && kb(d[g], e[g])
            }
            if (b) {
                jb(a, h);
                if (c) {
                    d = lb(a),
                    e = lb(h);
                    for (g = 0; d[g]; ++g) jb(d[g], e[g])
                }
            }
            return d = e = null,
            h
        }, clean: function (a, b, d, e) {
            var g, h, i, j = [];
            b = b || c,
            typeof b.createElement == "undefined" && (b = b.ownerDocument || b[0] && b[0].ownerDocument || c);
            for (var k = 0, l;
            (l = a[k]) != null; k++) {
                typeof l == "number" && (l += "");
                if (!l) continue;
                if (typeof l == "string") if (!_.test(l)) l = b.createTextNode(l);
                else {
                    l = l.replace(Y, "<$1></$2>");
                    var m = (Z.exec(l) || ["", ""])[1].toLowerCase(),
                        n = gb[m] || gb._default,
                        o = n[0],
                        p = b.createElement("div"),
                        q = hb.childNodes,
                        r;
                    b === c ? hb.appendChild(p) : U(b).appendChild(p),
                    p.innerHTML = n[1] + l + n[2];
                    while (o--) p = p.lastChild;
                    if (!f.support.tbody) {
                        var s = $.test(l),
                            t = m === "table" && !s ? p.firstChild && p.firstChild.childNodes : n[1] === "<table>" && !s ? p.childNodes : [];
                        for (i = t.length - 1; i >= 0; --i) f.nodeName(t[i], "tbody") && !t[i].childNodes.length && t[i].parentNode.removeChild(t[i])
                    }!f.support.leadingWhitespace && X.test(l) && p.insertBefore(b.createTextNode(X.exec(l)[0]), p.firstChild),
                    l = p.childNodes,
                    p && (p.parentNode.removeChild(p), q.length > 0 && (r = q[q.length - 1], r && r.parentNode && r.parentNode.removeChild(r)))
                }
                var u;
                if (!f.support.appendChecked) if (l[0] && typeof(u = l.length) == "number") for (i = 0; i < u; i++) nb(l[i]);
                else nb(l);
                l.nodeType ? j.push(l) : j = f.merge(j, l)
            }
            if (d) {
                g = function (a) {
                    return !a.type || eb.test(a.type)
                };
                for (k = 0; j[k]; k++) {
                    h = j[k];
                    if (e && f.nodeName(h, "script") && (!h.type || eb.test(h.type))) e.push(h.parentNode ? h.parentNode.removeChild(h) : h);
                    else {
                        if (h.nodeType === 1) {
                            var v = f.grep(h.getElementsByTagName("script"), g);
                            j.splice.apply(j, [k + 1, 0].concat(v))
                        }
                        d.appendChild(h)
                    }
                }
            }
            return j
        }, cleanData: function (a) {
            var b, c, d = f.cache,
                e = f.event.special,
                g = f.support.deleteExpando;
            for (var h = 0, i;
            (i = a[h]) != null; h++) {
                if (i.nodeName && f.noData[i.nodeName.toLowerCase()]) continue;
                c = i[f.expando];
                if (c) {
                    b = d[c];
                    if (b && b.events) {
                        for (var j in b.events) e[j] ? f.event.remove(i, j) : f.removeEvent(i, j, b.handle);
                        b.handle && (b.handle.elem = null)
                    }
                    g ? delete i[f.expando] : i.removeAttribute && i.removeAttribute(f.expando),
                    delete d[c]
                }
            }
        }
    });
    var pb = /alpha\([^)]*\)/i,
        qb = /opacity=([^)]*)/,
        rb = /([A-Z]|^ms)/g,
        sb = /^[\-+]?(?:\d*\.)?\d+$/i,
        tb = /^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,
        ub = /^([\-+])=([\-+.\de]+)/,
        vb = /^margin/,
        wb = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        xb = ["Top", "Right", "Bottom", "Left"],
        yb, zb, Ab;
    f.fn.css = function (a, c) {
        return f.access(this, function (a, c, d) {
            return d !== b ? f.style(a, c, d) : f.css(a, c)
        }, a, c, arguments.length > 1)
    }, f.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = yb(a, "opacity");
                        return c === "" ? "1" : c
                    }
                    return a.style.opacity
                }
            }
        }, cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        }, cssProps: {
            "float": f.support.cssFloat ? "cssFloat" : "styleFloat"
        }, style: function (a, c, d, e) {
            if (!a || a.nodeType === 3 || a.nodeType === 8 || !a.style) return;
            var g, h, i = f.camelCase(c),
                j = a.style,
                k = f.cssHooks[i];
            c = f.cssProps[i] || i;
            if (d === b) return k && "get" in k && (g = k.get(a, !1, e)) !== b ? g : j[c];
            h = typeof d,
            h === "string" && (g = ub.exec(d)) && (d = +(g[1] + 1) * +g[2] + parseFloat(f.css(a, c)), h = "number");
            if (d == null || h === "number" && isNaN(d)) return;
            h === "number" && !f.cssNumber[i] && (d += "px");
            if (!k || !("set" in k) || (d = k.set(a, d)) !== b) try {
                j[c] = d
            } catch (l) {}
        }, css: function (a, c, d) {
            var e, g;
            c = f.camelCase(c),
            g = f.cssHooks[c],
            c = f.cssProps[c] || c,
            c === "cssFloat" && (c = "float");
            if (g && "get" in g && (e = g.get(a, !0, d)) !== b) return e;
            if (yb) return yb(a, c)
        }, swap: function (a, b, c) {
            var d = {},
                e, f;
            for (f in b) d[f] = a.style[f],
            a.style[f] = b[f];
            e = c.call(a);
            for (f in b) a.style[f] = d[f];
            return e
        }
    }),
    f.curCSS = f.css,
    c.defaultView && c.defaultView.getComputedStyle && (zb = function (a, b) {
        var c, d, e, g, h = a.style;
        return b = b.replace(rb, "-$1").toLowerCase(),
        (d = a.ownerDocument.defaultView) && (e = d.getComputedStyle(a, null)) && (c = e.getPropertyValue(b), c === "" && !f.contains(a.ownerDocument.documentElement, a) && (c = f.style(a, b))),
        !f.support.pixelMargin && e && vb.test(b) && tb.test(c) && (g = h.width, h.width = c, c = e.width, h.width = g),
        c
    }),
    c.documentElement.currentStyle && (Ab = function (a, b) {
        var c, d, e, f = a.currentStyle && a.currentStyle[b],
            g = a.style;
        return f == null && g && (e = g[b]) && (f = e),
        tb.test(f) && (c = g.left, d = a.runtimeStyle && a.runtimeStyle.left, d && (a.runtimeStyle.left = a.currentStyle.left), g.left = b === "fontSize" ? "1em" : f, f = g.pixelLeft + "px", g.left = c, d && (a.runtimeStyle.left = d)),
        f === "" ? "auto" : f
    }),
    yb = zb || Ab,
    f.each(["height", "width"], function (a, b) {
        f.cssHooks[b] = {
            get: function (a, c, d) {
                if (c) return a.offsetWidth !== 0 ? Bb(a, b, d) : f.swap(a, wb, function () {
                    return Bb(a, b, d)
                })
            }, set: function (a, b) {
                return sb.test(b) ? b + "px" : b
            }
        }
    }),
    f.support.opacity || (f.cssHooks.opacity = {
        get: function (a, b) {
            return qb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : b ? "1" : ""
        }, set: function (a, b) {
            var c = a.style,
                d = a.currentStyle,
                e = f.isNumeric(b) ? "alpha(opacity=" + b * 100 + ")" : "",
                g = d && d.filter || c.filter || "";
            c.zoom = 1;
            if (b >= 1 && f.trim(g.replace(pb, "")) === "") {
                c.removeAttribute("filter");
                if (d && !d.filter) return
            }
            c.filter = pb.test(g) ? g.replace(pb, e) : g + " " + e
        }
    }),
    f(function () {
        f.support.reliableMarginRight || (f.cssHooks.marginRight = {
            get: function (a, b) {
                return f.swap(a, {
                    display: "inline-block"
                }, function () {
                    return b ? yb(a, "margin-right") : a.style.marginRight
                })
            }
        })
    }),
    f.expr && f.expr.filters && (f.expr.filters.hidden = function (a) {
        var b = a.offsetWidth,
            c = a.offsetHeight;
        return b === 0 && c === 0 || !f.support.reliableHiddenOffsets && (a.style && a.style.display || f.css(a, "display")) === "none"
    }, f.expr.filters.visible = function (a) {
        return !f.expr.filters.hidden(a)
    }),
    f.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (a, b) {
        f.cssHooks[a + b] = {
            expand: function (c) {
                var d, e = typeof c == "string" ? c.split(" ") : [c],
                    f = {};
                for (d = 0; d < 4; d++) f[a + xb[d] + b] = e[d] || e[d - 2] || e[0];
                return f
            }
        }
    });
    var Cb = /%20/g,
        Db = /\[\]$/,
        Eb = /\r?\n/g,
        Fb = /#.*$/,
        Gb = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        Hb = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        Ib = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
        Jb = /^(?:GET|HEAD)$/,
        Kb = /^\/\//,
        Lb = /\?/,
        Mb = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        Nb = /^(?:select|textarea)/i,
        Ob = /\s+/,
        Pb = /([?&])_=[^&]*/,
        Qb = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
        Rb = f.fn.load,
        Sb = {},
        Tb = {},
        Ub, Vb, Wb = ["*/"] + ["*"];
    try {
        Ub = e.href
    } catch (Xb) {
        Ub = c.createElement("a"),
        Ub.href = "",
        Ub = Ub.href
    }
    Vb = Qb.exec(Ub.toLowerCase()) || [],
    f.fn.extend({
        load: function (a, c, d) {
            if (typeof a != "string" && Rb) return Rb.apply(this, arguments);
            if (!this.length) return this;
            var e = a.indexOf(" ");
            if (e >= 0) {
                var g = a.slice(e, a.length);
                a = a.slice(0, e)
            }
            var h = "GET";
            c && (f.isFunction(c) ? (d = c, c = b) : typeof c == "object" && (c = f.param(c, f.ajaxSettings.traditional), h = "POST"));
            var i = this;
            return f.ajax({
                url: a,
                type: h,
                dataType: "html",
                data: c,
                complete: function (a, b, c) {
                    c = a.responseText,
                    a.isResolved() && (a.done(function (a) {
                        c = a
                    }), i.html(g ? f("<div>").append(c.replace(Mb, "")).find(g) : c)),
                    d && i.each(d, [c, b, a])
                }
            }),
            this
        }, serialize: function () {
            return f.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                return this.elements ? f.makeArray(this.elements) : this
            }).filter(function () {
                return this.name && !this.disabled && (this.checked || Nb.test(this.nodeName) || Hb.test(this.type))
            }).map(function (a, b) {
                var c = f(this).val();
                return c == null ? null : f.isArray(c) ? f.map(c, function (a, c) {
                    return {
                        name: b.name,
                        value: a.replace(Eb, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(Eb, "\r\n")
                }
            }).get()
        }
    }),
    f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (a, b) {
        f.fn[b] = function (a) {
            return this.on(b, a)
        }
    }),
    f.each(["get", "post"], function (a, c) {
        f[c] = function (a, d, e, g) {
            return f.isFunction(d) && (g = g || e, e = d, d = b),
            f.ajax({
                type: c,
                url: a,
                data: d,
                success: e,
                dataType: g
            })
        }
    }),
    f.extend({
        getScript: function (a, c) {
            return f.get(a, b, c, "script")
        }, getJSON: function (a, b, c) {
            return f.get(a, b, c, "json")
        }, ajaxSetup: function (a, b) {
            return b ? $b(a, f.ajaxSettings) : (b = a, a = f.ajaxSettings),
            $b(a, b),
            a
        }, ajaxSettings: {
            url: Ub,
            isLocal: Ib.test(Vb[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": Wb
            }, contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            }, responseFields: {
                xml: "responseXML",
                text: "responseText"
            }, converters: {
                "* text": a.String,
                "text html": !0,
                "text json": f.parseJSON,
                "text xml": f.parseXML
            }, flatOptions: {
                context: !0,
                url: !0
            }
        }, ajaxPrefilter: Yb(Sb),
        ajaxTransport: Yb(Tb),
        ajax: function (a, c) {
            function w(a, c, l, m) {
                if (s === 2) return;
                s = 2,
                q && clearTimeout(q),
                p = b,
                n = m || "",
                v.readyState = a > 0 ? 4 : 0;
                var o, r, u, w = c,
                    x = l ? ac(d, v, l) : b,
                    y, z;
                if (a >= 200 && a < 300 || a === 304) {
                    if (d.ifModified) {
                        if (y = v.getResponseHeader("Last-Modified")) f.lastModified[k] = y;
                        if (z = v.getResponseHeader("Etag")) f.etag[k] = z
                    }
                    if (a === 304) w = "notmodified",
                    o = !0;
                    else try {
                        r = bc(d, x),
                        w = "success",
                        o = !0
                    } catch (A) {
                        w = "parsererror",
                        u = A
                    }
                } else {
                    u = w;
                    if (!w || a) w = "error",
                    a < 0 && (a = 0)
                }
                v.status = a,
                v.statusText = "" + (c || w),
                o ? h.resolveWith(e, [r, w, v]) : h.rejectWith(e, [v, w, u]),
                v.statusCode(j),
                j = b,
                t && g.trigger("ajax" + (o ? "Success" : "Error"), [v, d, o ? r : u]),
                i.fireWith(e, [v, w]),
                t && (g.trigger("ajaxComplete", [v, d]), --f.active || f.event.trigger("ajaxStop"))
            }
            typeof a == "object" && (c = a, a = b),
            c = c || {};
            var d = f.ajaxSetup({}, c),
                e = d.context || d,
                g = e !== d && (e.nodeType || e instanceof f) ? f(e) : f.event,
                h = f.Deferred(),
                i = f.Callbacks("once memory"),
                j = d.statusCode || {},
                k, l = {},
                m = {},
                n, o, p, q, r, s = 0,
                t, u, v = {
                    readyState: 0,
                    setRequestHeader: function (a, b) {
                        if (!s) {
                            var c = a.toLowerCase();
                            a = m[c] = m[c] || a,
                            l[a] = b
                        }
                        return this
                    }, getAllResponseHeaders: function () {
                        return s === 2 ? n : null
                    }, getResponseHeader: function (a) {
                        var c;
                        if (s === 2) {
                            if (!o) {
                                o = {};
                                while (c = Gb.exec(n)) o[c[1].toLowerCase()] = c[2]
                            }
                            c = o[a.toLowerCase()]
                        }
                        return c === b ? null : c
                    }, overrideMimeType: function (a) {
                        return s || (d.mimeType = a),
                        this
                    }, abort: function (a) {
                        return a = a || "abort",
                        p && p.abort(a),
                        w(0, a),
                        this
                    }
                };
            h.promise(v),
            v.success = v.done,
            v.error = v.fail,
            v.complete = i.add,
            v.statusCode = function (a) {
                if (a) {
                    var b;
                    if (s < 2) for (b in a) j[b] = [j[b], a[b]];
                    else b = a[v.status],
                    v.then(b, b)
                }
                return this
            }, d.url = ((a || d.url) + "").replace(Fb, "").replace(Kb, Vb[1] + "//"),
            d.dataTypes = f.trim(d.dataType || "*").toLowerCase().split(Ob),
            d.crossDomain == null && (r = Qb.exec(d.url.toLowerCase()), d.crossDomain = !(!r || r[1] == Vb[1] && r[2] == Vb[2] && (r[3] || (r[1] === "http:" ? 80 : 443)) == (Vb[3] || (Vb[1] === "http:" ? 80 : 443)))),
            d.data && d.processData && typeof d.data != "string" && (d.data = f.param(d.data, d.traditional)),
            Zb(Sb, d, c, v);
            if (s === 2) return !1;
            t = d.global,
            d.type = d.type.toUpperCase(),
            d.hasContent = !Jb.test(d.type),
            t && f.active++ === 0 && f.event.trigger("ajaxStart");
            if (!d.hasContent) {
                d.data && (d.url += (Lb.test(d.url) ? "&" : "?") + d.data, delete d.data),
                k = d.url;
                if (d.cache === !1) {
                    var x = f.now(),
                        y = d.url.replace(Pb, "$1_=" + x);
                    d.url = y + (y === d.url ? (Lb.test(d.url) ? "&" : "?") + "_=" + x : "")
                }
            }(d.data && d.hasContent && d.contentType !== !1 || c.contentType) && v.setRequestHeader("Content-Type", d.contentType),
            d.ifModified && (k = k || d.url, f.lastModified[k] && v.setRequestHeader("If-Modified-Since", f.lastModified[k]), f.etag[k] && v.setRequestHeader("If-None-Match", f.etag[k])),
            v.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + (d.dataTypes[0] !== "*" ? ", " + Wb + "; q=0.01" : "") : d.accepts["*"]);
            for (u in d.headers) v.setRequestHeader(u, d.headers[u]);
            if (!d.beforeSend || d.beforeSend.call(e, v, d) !== !1 && s !== 2) {
                for (u in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) v[u](d[u]);
                p = Zb(Tb, d, c, v);
                if (!p) w(-1, "No Transport");
                else {
                    v.readyState = 1,
                    t && g.trigger("ajaxSend", [v, d]),
                    d.async && d.timeout > 0 && (q = setTimeout(function () {
                        v.abort("timeout")
                    }, d.timeout));
                    try {
                        s = 1,
                        p.send(l, w)
                    } catch (z) {
                        if (!(s < 2)) throw z;
                        w(-1, z)
                    }
                }
                return v
            }
            return v.abort(),
            !1
        }, param: function (a, c) {
            var d = [],
                e = function (a, b) {
                    b = f.isFunction(b) ? b() : b,
                    d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
                };
            c === b && (c = f.ajaxSettings.traditional);
            if (f.isArray(a) || a.jquery && !f.isPlainObject(a)) f.each(a, function () {
                e(this.name, this.value)
            });
            else for (var g in a) _b(g, a[g], c, e);
            return d.join("&").replace(Cb, "+")
        }
    }),
    f.extend({
        active: 0,
        lastModified: {}, etag: {}
    });
    var cc = f.now(),
        dc = /(\=)\?(&|$)|\?\?/i;
    f.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            return f.expando + "_" + cc++
        }
    }),
    f.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e = typeof b.data == "string" && /^application\/x\-www\-form\-urlencoded/.test(b.contentType);
        if (b.dataTypes[0] === "jsonp" || b.jsonp !== !1 && (dc.test(b.url) || e && dc.test(b.data))) {
            var g, h = b.jsonpCallback = f.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback,
                i = a[h],
                j = b.url,
                k = b.data,
                l = "$1" + h + "$2";
            return b.jsonp !== !1 && (j = j.replace(dc, l), b.url === j && (e && (k = k.replace(dc, l)), b.data === k && (j += (/\?/.test(j) ? "&" : "?") + b.jsonp + "=" + h))),
            b.url = j,
            b.data = k,
            a[h] = function (a) {
                g = [a]
            }, d.always(function () {
                a[h] = i,
                g && f.isFunction(i) && a[h](g[0])
            }),
            b.converters["script json"] = function () {
                return g || f.error(h + " was not called"),
                g[0]
            }, b.dataTypes[0] = "json",
            "script"
        }
    }),
    f.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        }, contents: {
            script: /javascript|ecmascript/
        }, converters: {
            "text script": function (a) {
                return f.globalEval(a),
                a
            }
        }
    }),
    f.ajaxPrefilter("script", function (a) {
        a.cache === b && (a.cache = !1),
        a.crossDomain && (a.type = "GET", a.global = !1)
    }),
    f.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var d, e = c.head || c.getElementsByTagName("head")[0] || c.documentElement;
            return {
                send: function (f, g) {
                    d = c.createElement("script"),
                    d.async = "async",
                    a.scriptCharset && (d.charset = a.scriptCharset),
                    d.src = a.url,
                    d.onload = d.onreadystatechange = function (a, c) {
                        if (c || !d.readyState || /loaded|complete/.test(d.readyState)) d.onload = d.onreadystatechange = null,
                        e && d.parentNode && e.removeChild(d),
                        d = b,
                        c || g(200, "success")
                    }, e.insertBefore(d, e.firstChild)
                }, abort: function () {
                    d && d.onload(0, 1)
                }
            }
        }
    });
    var ec = a.ActiveXObject ?
    function () {
        for (var a in gc) gc[a](0, 1)
    } : !1,
        fc = 0,
        gc;
    f.ajaxSettings.xhr = a.ActiveXObject ?
    function () {
        return !this.isLocal && hc() || ic()
    } : hc,


    function (a) {
        f.extend(f.support, {
            ajax: !! a,
            cors: !! a && "withCredentials" in a
        })
    }(f.ajaxSettings.xhr()),
    f.support.ajax && f.ajaxTransport(function (c) {
        if (!c.crossDomain || f.support.cors) {
            var d;
            return {
                send: function (e, g) {
                    var h = c.xhr(),
                        i, j;
                    c.username ? h.open(c.type, c.url, c.async, c.username, c.password) : h.open(c.type, c.url, c.async);
                    if (c.xhrFields) for (j in c.xhrFields) h[j] = c.xhrFields[j];
                    c.mimeType && h.overrideMimeType && h.overrideMimeType(c.mimeType),
                    !c.crossDomain && !e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (j in e) h.setRequestHeader(j, e[j])
                    } catch (k) {}
                    h.send(c.hasContent && c.data || null),
                    d = function (a, e) {
                        var j, k, l, m, n;
                        try {
                            if (d && (e || h.readyState === 4)) {
                                d = b,
                                i && (h.onreadystatechange = f.noop, ec && delete gc[i]);
                                if (e) h.readyState !== 4 && h.abort();
                                else {
                                    j = h.status,
                                    l = h.getAllResponseHeaders(),
                                    m = {}, n = h.responseXML,
                                    n && n.documentElement && (m.xml = n);
                                    try {
                                        m.text = h.responseText
                                    } catch (a) {}
                                    try {
                                        k = h.statusText
                                    } catch (o) {
                                        k = ""
                                    }!j && c.isLocal && !c.crossDomain ? j = m.text ? 200 : 404 : j === 1223 && (j = 204)
                                }
                            }
                        } catch (p) {
                            e || g(-1, p)
                        }
                        m && g(j, k, m, l)
                    }, !c.async || h.readyState === 4 ? d() : (i = ++fc, ec && (gc || (gc = {}, f(a).unload(ec)), gc[i] = d), h.onreadystatechange = d)
                }, abort: function () {
                    d && d(0, 1)
                }
            }
        }
    });
    var jc = {},
        kc, lc, mc = /^(?:toggle|show|hide)$/,
        nc = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
        oc, pc = [
            ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
            ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
            ["opacity"]
        ],
        qc;
    f.fn.extend({
        show: function (a, b, c) {
            var d, e;
            if (a || a === 0) return this.animate(tc("show", 3), a, b, c);
            for (var g = 0, h = this.length; g < h; g++) d = this[g],
            d.style && (e = d.style.display, !f._data(d, "olddisplay") && e === "none" && (e = d.style.display = ""), (e === "" && f.css(d, "display") === "none" || !f.contains(d.ownerDocument.documentElement, d)) && f._data(d, "olddisplay", uc(d.nodeName)));
            for (g = 0; g < h; g++) {
                d = this[g];
                if (d.style) {
                    e = d.style.display;
                    if (e === "" || e === "none") d.style.display = f._data(d, "olddisplay") || ""
                }
            }
            return this
        }, hide: function (a, b, c) {
            if (a || a === 0) return this.animate(tc("hide", 3), a, b, c);
            var d, e, g = 0,
                h = this.length;
            for (; g < h; g++) d = this[g],
            d.style && (e = f.css(d, "display"), e !== "none" && !f._data(d, "olddisplay") && f._data(d, "olddisplay", e));
            for (g = 0; g < h; g++) this[g].style && (this[g].style.display = "none");
            return this
        }, _toggle: f.fn.toggle,
        toggle: function (a, b, c) {
            var d = typeof a == "boolean";
            return f.isFunction(a) && f.isFunction(b) ? this._toggle.apply(this, arguments) : a == null || d ? this.each(function () {
                var b = d ? a : f(this).is(":hidden");
                f(this)[b ? "show" : "hide"]()
            }) : this.animate(tc("toggle", 3), a, b, c),
            this
        }, fadeTo: function (a, b, c, d) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        }, animate: function (a, b, c, d) {
            function g() {
                e.queue === !1 && f._mark(this);
                var b = f.extend({}, e),
                    c = this.nodeType === 1,
                    d = c && f(this).is(":hidden"),
                    g, h, i, j, k, l, m, n, o, p, q;
                b.animatedProperties = {};
                for (i in a) {
                    g = f.camelCase(i),
                    i !== g && (a[g] = a[i], delete a[i]);
                    if ((k = f.cssHooks[g]) && "expand" in k) {
                        l = k.expand(a[g]),
                        delete a[g];
                        for (i in l) i in a || (a[i] = l[i])
                    }
                }
                for (g in a) {
                    h = a[g],
                    f.isArray(h) ? (b.animatedProperties[g] = h[1], h = a[g] = h[0]) : b.animatedProperties[g] = b.specialEasing && b.specialEasing[g] || b.easing || "swing";
                    if (h === "hide" && d || h === "show" && !d) return b.complete.call(this);
                    c && (g === "height" || g === "width") && (b.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], f.css(this, "display") === "inline" && f.css(this, "float") === "none" && (!f.support.inlineBlockNeedsLayout || uc(this.nodeName) === "inline" ? this.style.display = "inline-block" : this.style.zoom = 1))
                }
                b.overflow != null && (this.style.overflow = "hidden");
                for (i in a) j = new f.fx(this, b, i),
                h = a[i],
                mc.test(h) ? (q = f._data(this, "toggle" + i) || (h === "toggle" ? d ? "show" : "hide" : 0), q ? (f._data(this, "toggle" + i, q === "show" ? "hide" : "show"), j[q]()) : j[h]()) : (m = nc.exec(h), n = j.cur(), m ? (o = parseFloat(m[2]), p = m[3] || (f.cssNumber[i] ? "" : "px"), p !== "px" && (f.style(this, i, (o || 1) + p), n = (o || 1) / j.cur() * n, f.style(this, i, n + p)), m[1] && (o = (m[1] === "-=" ? -1 : 1) * o + n), j.custom(n, o, p)) : j.custom(n, h, ""));
                return !0
            }
            var e = f.speed(b, c, d);
            return f.isEmptyObject(a) ? this.each(e.complete, [!1]) : (a = f.extend({}, a), e.queue === !1 ? this.each(g) : this.queue(e.queue, g))
        }, stop: function (a, c, d) {
            return typeof a != "string" && (d = c, c = a, a = b),
            c && a !== !1 && this.queue(a || "fx", []),
            this.each(function () {
                function h(a, b, c) {
                    var e = b[c];
                    f.removeData(a, c, !0),
                    e.stop(d)
                }
                var b, c = !1,
                    e = f.timers,
                    g = f._data(this);
                d || f._unmark(!0, this);
                if (a == null) for (b in g) g[b] && g[b].stop && b.indexOf(".run") === b.length - 4 && h(this, g, b);
                else g[b = a + ".run"] && g[b].stop && h(this, g, b);
                for (b = e.length; b--;) e[b].elem === this && (a == null || e[b].queue === a) && (d ? e[b](!0) : e[b].saveState(), c = !0, e.splice(b, 1));
                (!d || !c) && f.dequeue(this, a)
            })
        }
    }),
    f.each({
        slideDown: tc("show", 1),
        slideUp: tc("hide", 1),
        slideToggle: tc("toggle", 1),
        fadeIn: {
            opacity: "show"
        }, fadeOut: {
            opacity: "hide"
        }, fadeToggle: {
            opacity: "toggle"
        }
    }, function (a, b) {
        f.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d)
        }
    }),
    f.extend({
        speed: function (a, b, c) {
            var d = a && typeof a == "object" ? f.extend({}, a) : {
                complete: c || !c && b || f.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !f.isFunction(b) && b
            };
            d.duration = f.fx.off ? 0 : typeof d.duration == "number" ? d.duration : d.duration in f.fx.speeds ? f.fx.speeds[d.duration] : f.fx.speeds._default;
            if (d.queue == null || d.queue === !0) d.queue = "fx";
            return d.old = d.complete,
            d.complete = function (a) {
                f.isFunction(d.old) && d.old.call(this),
                d.queue ? f.dequeue(this, d.queue) : a !== !1 && f._unmark(this)
            }, d
        }, easing: {
            linear: function (a) {
                return a
            }, swing: function (a) {
                return -Math.cos(a * Math.PI) / 2 + .5
            }
        }, timers: [],
        fx: function (a, b, c) {
            this.options = b,
            this.elem = a,
            this.prop = c,
            b.orig = b.orig || {}
        }
    }),
    f.fx.prototype = {
        update: function () {
            this.options.step && this.options.step.call(this.elem, this.now, this),
            (f.fx.step[this.prop] || f.fx.step._default)(this)
        }, cur: function () {
            if (this.elem[this.prop] == null || !! this.elem.style && this.elem.style[this.prop] != null) {
                var a, b = f.css(this.elem, this.prop);
                return isNaN(a = parseFloat(b)) ? !b || b === "auto" ? 0 : b : a
            }
            return this.elem[this.prop]
        }, custom: function (a, c, d) {
            function h(a) {
                return e.step(a)
            }
            var e = this,
                g = f.fx;
            this.startTime = qc || rc(),
            this.end = c,
            this.now = this.start = a,
            this.pos = this.state = 0,
            this.unit = d || this.unit || (f.cssNumber[this.prop] ? "" : "px"),
            h.queue = this.options.queue,
            h.elem = this.elem,
            h.saveState = function () {
                f._data(e.elem, "fxshow" + e.prop) === b && (e.options.hide ? f._data(e.elem, "fxshow" + e.prop, e.start) : e.options.show && f._data(e.elem, "fxshow" + e.prop, e.end))
            }, h() && f.timers.push(h) && !oc && (oc = setInterval(g.tick, g.interval))
        }, show: function () {
            var a = f._data(this.elem, "fxshow" + this.prop);
            this.options.orig[this.prop] = a || f.style(this.elem, this.prop),
            this.options.show = !0,
            a !== b ? this.custom(this.cur(), a) : this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur()),
            f(this.elem).show()
        }, hide: function () {
            this.options.orig[this.prop] = f._data(this.elem, "fxshow" + this.prop) || f.style(this.elem, this.prop),
            this.options.hide = !0,
            this.custom(this.cur(), 0)
        }, step: function (a) {
            var b, c, d, e = qc || rc(),
                g = !0,
                h = this.elem,
                i = this.options;
            if (a || e >= i.duration + this.startTime) {
                this.now = this.end,
                this.pos = this.state = 1,
                this.update(),
                i.animatedProperties[this.prop] = !0;
                for (b in i.animatedProperties) i.animatedProperties[b] !== !0 && (g = !1);
                if (g) {
                    i.overflow != null && !f.support.shrinkWrapBlocks && f.each(["", "X", "Y"], function (a, b) {
                        h.style["overflow" + b] = i.overflow[a]
                    }),
                    i.hide && f(h).hide();
                    if (i.hide || i.show) for (b in i.animatedProperties) f.style(h, b, i.orig[b]),
                    f.removeData(h, "fxshow" + b, !0),
                    f.removeData(h, "toggle" + b, !0);
                    d = i.complete,
                    d && (i.complete = !1, d.call(h))
                }
                return !1
            }
            return i.duration == Infinity ? this.now = e : (c = e - this.startTime, this.state = c / i.duration, this.pos = f.easing[i.animatedProperties[this.prop]](this.state, c, 0, 1, i.duration), this.now = this.start + (this.end - this.start) * this.pos),
            this.update(),
            !0
        }
    }, f.extend(f.fx, {
        tick: function () {
            var a, b = f.timers,
                c = 0;
            for (; c < b.length; c++) a = b[c],
            !a() && b[c] === a && b.splice(c--, 1);
            b.length || f.fx.stop()
        }, interval: 13,
        stop: function () {
            clearInterval(oc),
            oc = null
        }, speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        }, step: {
            opacity: function (a) {
                f.style(a.elem, "opacity", a.now)
            }, _default: function (a) {
                a.elem.style && a.elem.style[a.prop] != null ? a.elem.style[a.prop] = a.now + a.unit : a.elem[a.prop] = a.now
            }
        }
    }),
    f.each(pc.concat.apply([], pc), function (a, b) {
        b.indexOf("margin") && (f.fx.step[b] = function (a) {
            f.style(a.elem, b, Math.max(0, a.now) + a.unit)
        })
    }),
    f.expr && f.expr.filters && (f.expr.filters.animated = function (a) {
        return f.grep(f.timers, function (b) {
            return a === b.elem
        }).length
    });
    var vc, wc = /^t(?:able|d|h)$/i,
        xc = /^(?:body|html)$/i;
    "getBoundingClientRect" in c.documentElement ? vc = function (a, b, c, d) {
        try {
            d = a.getBoundingClientRect()
        } catch (e) {}
        if (!d || !f.contains(c, a)) return d ? {
            top: d.top,
            left: d.left
        } : {
            top: 0,
            left: 0
        };
        var g = b.body,
            h = yc(b),
            i = c.clientTop || g.clientTop || 0,
            j = c.clientLeft || g.clientLeft || 0,
            k = h.pageYOffset || f.support.boxModel && c.scrollTop || g.scrollTop,
            l = h.pageXOffset || f.support.boxModel && c.scrollLeft || g.scrollLeft,
            m = d.top + k - i,
            n = d.left + l - j;
        return {
            top: m,
            left: n
        }
    } : vc = function (a, b, c) {
        var d, e = a.offsetParent,
            g = a,
            h = b.body,
            i = b.defaultView,
            j = i ? i.getComputedStyle(a, null) : a.currentStyle,
            k = a.offsetTop,
            l = a.offsetLeft;
        while ((a = a.parentNode) && a !== h && a !== c) {
            if (f.support.fixedPosition && j.position === "fixed") break;
            d = i ? i.getComputedStyle(a, null) : a.currentStyle,
            k -= a.scrollTop,
            l -= a.scrollLeft,
            a === e && (k += a.offsetTop, l += a.offsetLeft, f.support.doesNotAddBorder && (!f.support.doesAddBorderForTableAndCells || !wc.test(a.nodeName)) && (k += parseFloat(d.borderTopWidth) || 0, l += parseFloat(d.borderLeftWidth) || 0), g = e, e = a.offsetParent),
            f.support.subtractsBorderForOverflowNotVisible && d.overflow !== "visible" && (k += parseFloat(d.borderTopWidth) || 0, l += parseFloat(d.borderLeftWidth) || 0),
            j = d
        }
        if (j.position === "relative" || j.position === "static") k += h.offsetTop,
        l += h.offsetLeft;
        return f.support.fixedPosition && j.position === "fixed" && (k += Math.max(c.scrollTop, h.scrollTop), l += Math.max(c.scrollLeft, h.scrollLeft)),
        {
            top: k,
            left: l
        }
    }, f.fn.offset = function (a) {
        if (arguments.length) return a === b ? this : this.each(function (b) {
            f.offset.setOffset(this, a, b)
        });
        var c = this[0],
            d = c && c.ownerDocument;
        return d ? c === d.body ? f.offset.bodyOffset(c) : vc(c, d, d.documentElement) : null
    }, f.offset = {
        bodyOffset: function (a) {
            var b = a.offsetTop,
                c = a.offsetLeft;
            return f.support.doesNotIncludeMarginInBodyOffset && (b += parseFloat(f.css(a, "marginTop")) || 0, c += parseFloat(f.css(a, "marginLeft")) || 0),
            {
                top: b,
                left: c
            }
        }, setOffset: function (a, b, c) {
            var d = f.css(a, "position");
            d === "static" && (a.style.position = "relative");
            var e = f(a),
                g = e.offset(),
                h = f.css(a, "top"),
                i = f.css(a, "left"),
                j = (d === "absolute" || d === "fixed") && f.inArray("auto", [h, i]) > -1,
                k = {},
                l = {},
                m, n;
            j ? (l = e.position(), m = l.top, n = l.left) : (m = parseFloat(h) || 0, n = parseFloat(i) || 0),
            f.isFunction(b) && (b = b.call(a, c, g)),
            b.top != null && (k.top = b.top - g.top + m),
            b.left != null && (k.left = b.left - g.left + n),
            "using" in b ? b.using.call(a, k) : e.css(k)
        }
    }, f.fn.extend({
        position: function () {
            if (!this[0]) return null;
            var a = this[0],
                b = this.offsetParent(),
                c = this.offset(),
                d = xc.test(b[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : b.offset();
            return c.top -= parseFloat(f.css(a, "marginTop")) || 0,
            c.left -= parseFloat(f.css(a, "marginLeft")) || 0,
            d.top += parseFloat(f.css(b[0], "borderTopWidth")) || 0,
            d.left += parseFloat(f.css(b[0], "borderLeftWidth")) || 0,
            {
                top: c.top - d.top,
                left: c.left - d.left
            }
        }, offsetParent: function () {
            return this.map(function () {
                var a = this.offsetParent || c.body;
                while (a && !xc.test(a.nodeName) && f.css(a, "position") === "static") a = a.offsetParent;
                return a
            })
        }
    }),
    f.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (a, c) {
        var d = /Y/.test(c);
        f.fn[a] = function (e) {
            return f.access(this, function (a, e, g) {
                var h = yc(a);
                if (g === b) return h ? c in h ? h[c] : f.support.boxModel && h.document.documentElement[e] || h.document.body[e] : a[e];
                h ? h.scrollTo(d ? f(h).scrollLeft() : g, d ? g : f(h).scrollTop()) : a[e] = g
            }, a, e, arguments.length, null)
        }
    }),
    f.each({
        Height: "height",
        Width: "width"
    }, function (a, c) {
        var d = "client" + a,
            e = "scroll" + a,
            g = "offset" + a;
        f.fn["inner" + a] = function () {
            var a = this[0];
            return a ? a.style ? parseFloat(f.css(a, c, "padding")) : this[c]() : null
        }, f.fn["outer" + a] = function (a) {
            var b = this[0];
            return b ? b.style ? parseFloat(f.css(b, c, a ? "margin" : "border")) : this[c]() : null
        }, f.fn[c] = function (a) {
            return f.access(this, function (a, c, h) {
                var i, j, k, l;
                if (f.isWindow(a)) return i = a.document,
                j = i.documentElement[d],
                f.support.boxModel && j || i.body && i.body[d] || j;
                if (a.nodeType === 9) return i = a.documentElement,
                i[d] >= i[e] ? i[d] : Math.max(a.body[e], i[e], a.body[g], i[g]);
                if (h === b) return k = f.css(a, c),
                l = parseFloat(k),
                f.isNumeric(l) ? l : k;
                f(a).css(c, h)
            }, c, a, arguments.length, null)
        }
    }),
    a.jQuery = a.$ = f,
    typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function () {
        return f
    })
})(window),


function (a, b) {
    var c;
    a.rails = c = {
        linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with]",
        inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not(button[type])",
        disableSelector: "input[data-disable-with], button[data-disable-with], textarea[data-disable-with]",
        enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled",
        requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",
        fileInputSelector: "input:file",
        linkDisableSelector: "a[data-disable-with]",
        CSRFProtection: function (b) {
            var c = a('meta[name="csrf-token"]').attr("content");
            c && b.setRequestHeader("X-CSRF-Token", c)
        }, fire: function (b, c, d) {
            var e = a.Event(c);
            return b.trigger(e, d),
            e.result !== !1
        }, confirm: function (a) {
            return confirm(a)
        }, ajax: function (b) {
            return a.ajax(b)
        }, href: function (a) {
            return a.attr("href")
        }, handleRemote: function (d) {
            var e, f, g, h, i, j;
            if (c.fire(d, "ajax:before")) {
                h = d.data("cross-domain") || null,
                i = d.data("type") || a.ajaxSettings && a.ajaxSettings.dataType;
                if (d.is("form")) {
                    e = d.attr("method"),
                    f = d.attr("action"),
                    g = d.serializeArray();
                    var k = d.data("ujs:submit-button");
                    k && (g.push(k), d.data("ujs:submit-button", null))
                } else d.is(c.inputChangeSelector) ? (e = d.data("method"), f = d.data("url"), g = d.serialize(), d.data("params") && (g = g + "&" + d.data("params"))) : (e = d.data("method"), f = c.href(d), g = d.data("params") || null);
                return j = {
                    type: e || "GET",
                    data: g,
                    dataType: i,
                    crossDomain: h,
                    beforeSend: function (a, e) {
                        return e.dataType === b && a.setRequestHeader("accept", "*/*;q=0.5, " + e.accepts.script),
                        c.fire(d, "ajax:beforeSend", [a, e])
                    }, success: function (a, b, c) {
                        d.trigger("ajax:success", [a, b, c])
                    }, complete: function (a, b) {
                        d.trigger("ajax:complete", [a, b])
                    }, error: function (a, b, c) {
                        d.trigger("ajax:error", [a, b, c])
                    }
                }, f && (j.url = f),
                c.ajax(j)
            }
            return !1
        }, handleMethod: function (d) {
            var e = c.href(d),
                f = d.data("method"),
                g = d.attr("target"),
                h = a("meta[name=csrf-token]").attr("content"),
                i = a("meta[name=csrf-param]").attr("content"),
                j = a('<form method="post" action="' + e + '"></form>'),
                k = '<input name="_method" value="' + f + '" type="hidden" />';
            i !== b && h !== b && (k += '<input name="' + i + '" value="' + h + '" type="hidden" />'),
            g && j.attr("target", g),
            j.hide().append(k).appendTo("body"),
            j.submit()
        }, disableFormElements: function (b) {
            b.find(c.disableSelector).each(function () {
                var b = a(this),
                    c = b.is("button") ? "html" : "val";
                b.data("ujs:enable-with", b[c]()),
                b[c](b.data("disable-with")),
                b.prop("disabled", !0)
            })
        }, enableFormElements: function (b) {
            b.find(c.enableSelector).each(function () {
                var b = a(this),
                    c = b.is("button") ? "html" : "val";
                b.data("ujs:enable-with") && b[c](b.data("ujs:enable-with")),
                b.prop("disabled", !1)
            })
        }, allowAction: function (a) {
            var b = a.data("confirm"),
                d = !1,
                e;
            return b ? (c.fire(a, "confirm") && (d = c.confirm(b), e = c.fire(a, "confirm:complete", [d])), d && e) : !0
        }, blankInputs: function (b, c, d) {
            var e = a(),
                f, g = c || "input,textarea";
            return b.find(g).each(function () {
                f = a(this);
                if (d ? f.val() : !f.val()) e = e.add(f)
            }),
            e.length ? e : !1
        }, nonBlankInputs: function (a, b) {
            return c.blankInputs(a, b, !0)
        }, stopEverything: function (b) {
            return a(b.target).trigger("ujs:everythingStopped"),
            b.stopImmediatePropagation(),
            !1
        }, callFormSubmitBindings: function (c, d) {
            var e = c.data("events"),
                f = !0;
            return e !== b && e.submit !== b && a.each(e.submit, function (a, b) {
                if (typeof b.handler == "function") return f = b.handler(d)
            }),
            f
        }, disableElement: function (a) {
            a.data("ujs:enable-with", a.html()),
            a.html(a.data("disable-with")),
            a.bind("click.railsDisable", function (a) {
                return c.stopEverything(a)
            })
        }, enableElement: function (a) {
            a.data("ujs:enable-with") !== b && (a.html(a.data("ujs:enable-with")), a.data("ujs:enable-with", !1)),
            a.unbind("click.railsDisable")
        }
    }, a.ajaxPrefilter(function (a, b, d) {
        a.crossDomain || c.CSRFProtection(d)
    }),
    a(document).delegate(c.linkDisableSelector, "ajax:complete", function () {
        c.enableElement(a(this))
    }),
    a(document).delegate(c.linkClickSelector, "click.rails", function (d) {
        var e = a(this),
            f = e.data("method"),
            g = e.data("params");
        if (!c.allowAction(e)) return c.stopEverything(d);
        e.is(c.linkDisableSelector) && c.disableElement(e);
        if (e.data("remote") !== b) return (d.metaKey || d.ctrlKey) && (!f || f === "GET") && !g ? !0 : (c.handleRemote(e) === !1 && c.enableElement(e), !1);
        if (e.data("method")) return c.handleMethod(e),
        !1
    }),
    a(document).delegate(c.inputChangeSelector, "change.rails", function (b) {
        var d = a(this);
        return c.allowAction(d) ? (c.handleRemote(d), !1) : c.stopEverything(b)
    }),
    a(document).delegate(c.formSubmitSelector, "submit.rails", function (d) {
        var e = a(this),
            f = e.data("remote") !== b,
            g = c.blankInputs(e, c.requiredInputSelector),
            h = c.nonBlankInputs(e, c.fileInputSelector);
        if (!c.allowAction(e)) return c.stopEverything(d);
        if (g && e.attr("novalidate") == b && c.fire(e, "ajax:aborted:required", [g])) return c.stopEverything(d);
        if (f) return h ? c.fire(e, "ajax:aborted:file", [h]) : !a.support.submitBubbles && a().jquery < "1.7" && c.callFormSubmitBindings(e, d) === !1 ? c.stopEverything(d) : (c.handleRemote(e), !1);
        setTimeout(function () {
            c.disableFormElements(e)
        }, 13)
    }),
    a(document).delegate(c.formInputClickSelector, "click.rails", function (b) {
        var d = a(this);
        if (!c.allowAction(d)) return c.stopEverything(b);
        var e = d.attr("name"),
            f = e ? {
                name: e,
                value: d.val()
            } : null;
        d.closest("form").data("ujs:submit-button", f)
    }),
    a(document).delegate(c.formSubmitSelector, "ajax:beforeSend.rails", function (b) {
        this == b.target && c.disableFormElements(a(this))
    }),
    a(document).delegate(c.formSubmitSelector, "ajax:complete.rails", function (b) {
        this == b.target && c.enableFormElements(a(this))
    })
}(jQuery),


function (a, b, c) {
    a.fn.jScrollPane = function (d) {
        function e(d, e) {
            function U(b) {
                var e, g, r, s, u, v, x = !1,
                    y = !1;
                f = b;
                if (h === c) u = d.scrollTop(),
                v = d.scrollLeft(),
                d.css({
                    overflow: "hidden",
                    padding: 0
                }),
                i = d.innerWidth() + M,
                j = d.innerHeight(),
                d.width(i),
                h = a('<div class="jspPane" />').css("padding", L).append(d.children()),
                k = a('<div class="jspContainer" />').css({
                    width: i + "px",
                    height: j + "px"
                }).append(h).appendTo(d);
                else {
                    d.css("width", ""),
                    x = f.stickToBottom && qb(),
                    y = f.stickToRight && rb(),
                    s = d.innerWidth() + M != i || d.outerHeight() != j,
                    s && (i = d.innerWidth() + M, j = d.innerHeight(), k.css({
                        width: i + "px",
                        height: j + "px"
                    }));
                    if (!s && N == l && h.outerHeight() == m) {
                        d.width(i);
                        return
                    }
                    N = l,
                    h.css("width", ""),
                    d.width(i),
                    k.find(">.jspVerticalBar,>.jspHorizontalBar").remove().end()
                }
                h.css("overflow", "auto"),
                b.contentWidth ? l = b.contentWidth : l = h[0].scrollWidth,
                m = h[0].scrollHeight,
                h.css("overflow", ""),
                n = l / i,
                o = m / j,
                p = o > 1,
                q = n > 1,
                !q && !p ? (d.removeClass("jspScrollable"), h.css({
                    top: 0,
                    width: k.width() - M
                }), tb(), wb(), yb(), db()) : (d.addClass("jspScrollable"), e = f.maintainPosition && (t || w), e && (g = ob(), r = pb()), V(), X(), Z(), e && (mb(y ? l - i : g, !1), lb(x ? m - j : r, !1)), vb(), sb(), Bb(), f.enableKeyboardNavigation && xb(), f.clickOnTrack && cb(), zb(), f.hijackInternalLinks && Ab()),
                f.autoReinitialise && !K ? K = setInterval(function () {
                    U(f)
                }, f.autoReinitialiseDelay) : !f.autoReinitialise && K && clearInterval(K),
                u && d.scrollTop(0) && lb(u, !1),
                v && d.scrollLeft(0) && mb(v, !1),
                d.trigger("jsp-initialised", [q || p])
            }
            function V() {
                p && (k.append(a('<div class="jspVerticalBar" />').append(a('<div class="jspCap jspCapTop" />'), a('<div class="jspTrack" />').append(a('<div class="jspDrag" />').append(a('<div class="jspDragTop" />'), a('<div class="jspDragBottom" />'))), a('<div class="jspCap jspCapBottom" />'))), x = k.find(">.jspVerticalBar"), y = x.find(">.jspTrack"), r = y.find(">.jspDrag"), f.showArrows && (C = a('<a class="jspArrow jspArrowUp" />').bind("mousedown.jsp", ab(0, -1)).bind("click.jsp", ub), D = a('<a class="jspArrow jspArrowDown" />').bind("mousedown.jsp", ab(0, 1)).bind("click.jsp", ub), f.arrowScrollOnHover && (C.bind("mouseover.jsp", ab(0, -1, C)), D.bind("mouseover.jsp", ab(0, 1, D))), _(y, f.verticalArrowPositions, C, D)), A = j, k.find(">.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow").each(function () {
                    A -= a(this).outerHeight()
                }), r.hover(function () {
                    r.addClass("jspHover")
                }, function () {
                    r.removeClass("jspHover")
                }).bind("mousedown.jsp", function (b) {
                    a("html").bind("dragstart.jsp selectstart.jsp", ub),
                    r.addClass("jspActive");
                    var c = b.pageY - r.position().top;
                    return a("html").bind("mousemove.jsp", function (a) {
                        fb(a.pageY - c, !1)
                    }).bind("mouseup.jsp mouseleave.jsp", eb),
                    !1
                }), W())
            }
            function W() {
                y.height(A + "px"),
                t = 0,
                z = f.verticalGutter + y.outerWidth(),
                h.width(i - z - M);
                try {
                    x.position().left === 0 && h.css("margin-left", z + "px")
                } catch (a) {}
            }
            function X() {
                q && (k.append(a('<div class="jspHorizontalBar" />').append(a('<div class="jspCap jspCapLeft" />'), a('<div class="jspTrack" />').append(a('<div class="jspDrag" />').append(a('<div class="jspDragLeft" />'), a('<div class="jspDragRight" />'))), a('<div class="jspCap jspCapRight" />'))), E = k.find(">.jspHorizontalBar"), F = E.find(">.jspTrack"), u = F.find(">.jspDrag"), f.showArrows && (I = a('<a class="jspArrow jspArrowLeft" />').bind("mousedown.jsp", ab(-1, 0)).bind("click.jsp", ub), J = a('<a class="jspArrow jspArrowRight" />').bind("mousedown.jsp", ab(1, 0)).bind("click.jsp", ub), f.arrowScrollOnHover && (I.bind("mouseover.jsp", ab(-1, 0, I)), J.bind("mouseover.jsp", ab(1, 0, J))), _(F, f.horizontalArrowPositions, I, J)), u.hover(function () {
                    u.addClass("jspHover")
                }, function () {
                    u.removeClass("jspHover")
                }).bind("mousedown.jsp", function (b) {
                    a("html").bind("dragstart.jsp selectstart.jsp", ub),
                    u.addClass("jspActive");
                    var c = b.pageX - u.position().left;
                    return a("html").bind("mousemove.jsp", function (a) {
                        hb(a.pageX - c, !1)
                    }).bind("mouseup.jsp mouseleave.jsp", eb),
                    !1
                }), G = k.innerWidth(), Y())
            }
            function Y() {
                k.find(">.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow").each(function () {
                    G -= a(this).outerWidth()
                }),
                F.width(G + "px"),
                w = 0
            }
            function Z() {
                if (q && p) {
                    var b = F.outerHeight(),
                        c = y.outerWidth();
                    A -= b,
                    a(E).find(">.jspCap:visible,>.jspArrow").each(function () {
                        G += a(this).outerWidth()
                    }),
                    G -= c,
                    j -= c,
                    i -= b,
                    F.parent().append(a('<div class="jspCorner" />').css("width", b + "px")),
                    W(),
                    Y()
                }
                q && h.width(k.outerWidth() - M + "px"),
                m = h.outerHeight(),
                o = m / j,
                q && (H = Math.ceil(1 / n * G), H > f.horizontalDragMaxWidth ? H = f.horizontalDragMaxWidth : H < f.horizontalDragMinWidth && (H = f.horizontalDragMinWidth), u.width(H + "px"), v = G - H, ib(w)),
                p && (B = Math.ceil(1 / o * A), B > f.verticalDragMaxHeight ? B = f.verticalDragMaxHeight : B < f.verticalDragMinHeight && (B = f.verticalDragMinHeight), r.height(B + "px"), s = A - B, gb(t))
            }
            function _(a, b, c, d) {
                var e = "before",
                    f = "after",
                    g;
                b == "os" && (b = /Mac/.test(navigator.platform) ? "after" : "split"),
                b == e ? f = b : b == f && (e = b, g = c, c = d, d = g),
                a[e](c)[f](d)
            }
            function ab(a, b, c) {
                return function () {
                    return bb(a, b, this, c),
                    this.blur(),
                    !1
                }
            }
            function bb(b, c, d, e) {
                d = a(d).addClass("jspActive");
                var h, i, j = !0,
                    k = function () {
                        b !== 0 && g.scrollByX(b * f.arrowButtonSpeed),
                        c !== 0 && g.scrollByY(c * f.arrowButtonSpeed),
                        i = setTimeout(k, j ? f.initialDelay : f.arrowRepeatFreq),
                        j = !1
                    };
                k(),
                h = e ? "mouseout.jsp" : "mouseup.jsp",
                e = e || a("html"),
                e.bind(h, function () {
                    d.removeClass("jspActive"),
                    i && clearTimeout(i),
                    i = null,
                    e.unbind(h)
                })
            }
            function cb() {
                db(),
                p && y.bind("mousedown.jsp", function (b) {
                    if (b.originalTarget === c || b.originalTarget == b.currentTarget) {
                        var d = a(this),
                            e = d.offset(),
                            h = b.pageY - e.top - t,
                            i, k = !0,
                            l = function () {
                                var a = d.offset(),
                                    c = b.pageY - a.top - B / 2,
                                    e = j * f.scrollPagePercent,
                                    o = s * e / (m - j);
                                if (h < 0) t - o > c ? g.scrollByY(-e) : fb(c);
                                else {
                                    if (!(h > 0)) {
                                        n();
                                        return
                                    }
                                    t + o < c ? g.scrollByY(e) : fb(c)
                                }
                                i = setTimeout(l, k ? f.initialDelay : f.trackClickRepeatFreq),
                                k = !1
                            },
                            n = function () {
                                i && clearTimeout(i),
                                i = null,
                                a(document).unbind("mouseup.jsp", n)
                            };
                        return l(),
                        a(document).bind("mouseup.jsp", n),
                        !1
                    }
                }),
                q && F.bind("mousedown.jsp", function (b) {
                    if (b.originalTarget === c || b.originalTarget == b.currentTarget) {
                        var d = a(this),
                            e = d.offset(),
                            h = b.pageX - e.left - w,
                            j, k = !0,
                            m = function () {
                                var a = d.offset(),
                                    c = b.pageX - a.left - H / 2,
                                    e = i * f.scrollPagePercent,
                                    o = v * e / (l - i);
                                if (h < 0) w - o > c ? g.scrollByX(-e) : hb(c);
                                else {
                                    if (!(h > 0)) {
                                        n();
                                        return
                                    }
                                    w + o < c ? g.scrollByX(e) : hb(c)
                                }
                                j = setTimeout(m, k ? f.initialDelay : f.trackClickRepeatFreq),
                                k = !1
                            },
                            n = function () {
                                j && clearTimeout(j),
                                j = null,
                                a(document).unbind("mouseup.jsp", n)
                            };
                        return m(),
                        a(document).bind("mouseup.jsp", n),
                        !1
                    }
                })
            }
            function db() {
                F && F.unbind("mousedown.jsp"),
                y && y.unbind("mousedown.jsp")
            }
            function eb() {
                a("html").unbind("dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp"),
                r && r.removeClass("jspActive"),
                u && u.removeClass("jspActive")
            }
            function fb(a, b) {
                if (!p) return;
                a < 0 ? a = 0 : a > s && (a = s),
                b === c && (b = f.animateScroll),
                b ? g.animate(r, "top", a, gb) : (r.css("top", a), gb(a))
            }
            function gb(b) {
                b === c && (b = r.position().top),
                k.scrollTop(0),
                t = b;
                var e = t === 0,
                    f = t == s,
                    g = b / s,
                    h = -g * (m - j);
                if (O != e || Q != f) O = e,
                Q = f,
                d.trigger("jsp-arrow-change", [O, Q, P, R]);
                jb(e, f),
                d.trigger("jsp-scroll-y", [-h, e, f]).trigger("scroll"),
                a("#know-more").hasClass("open") ? myScroll.positionContent(-h - know_more.h, know_more.h) : myScroll.positionContent(-h, 0),
                a("#bottom").css({
                    marginTop: h
                }),
                a("#know-more").css({
                    top: h
                })
            }
            function hb(a, b) {
                if (!q) return;
                a < 0 ? a = 0 : a > v && (a = v),
                b === c && (b = f.animateScroll),
                b ? g.animate(u, "left", a, ib) : (u.css("left", a), ib(a))
            }
            function ib(a) {
                a === c && (a = u.position().left),
                k.scrollTop(0),
                w = a;
                var b = w === 0,
                    e = w == v,
                    f = a / v,
                    g = -f * (l - i);
                if (P != b || R != e) P = b,
                R = e,
                d.trigger("jsp-arrow-change", [O, Q, P, R]);
                kb(b, e),
                h.css("left", g),
                d.trigger("jsp-scroll-x", [-g, b, e]).trigger("scroll")
            }
            function jb(a, b) {
                f.showArrows && (C[a ? "addClass" : "removeClass"]("jspDisabled"), D[b ? "addClass" : "removeClass"]("jspDisabled"))
            }
            function kb(a, b) {
                f.showArrows && (I[a ? "addClass" : "removeClass"]("jspDisabled"), J[b ? "addClass" : "removeClass"]("jspDisabled"))
            }
            function lb(a, b) {
                var c = a / (m - j);
                fb(c * s, b)
            }
            function mb(a, b) {
                var c = a / (l - i);
                hb(c * v, b)
            }
            function nb(b, c, d) {
                var e, g, h, l = 0,
                    m = 0,
                    n, o, p, q, r, s;
                try {
                    e = a(b)
                } catch (t) {
                    return
                }
                g = e.outerHeight(),
                h = e.outerWidth(),
                k.scrollTop(0),
                k.scrollLeft(0);
                while (!e.is(".jspPane")) {
                    l += e.position().top,
                    m += e.position().left,
                    e = e.offsetParent();
                    if (/^body|html$/i.test(e[0].nodeName)) return
                }
                n = pb(),
                p = n + j,
                l < n || c ? r = l - f.verticalGutter : l + g > p && (r = l - j + g + f.verticalGutter),
                r && lb(r, d),
                o = ob(),
                q = o + i,
                m < o || c ? s = m - f.horizontalGutter : m + h > q && (s = m - i + h + f.horizontalGutter),
                s && mb(s, d)
            }
            function ob() {
                return -h.position().left
            }
            function pb() {
                return parseInt(a(".col.left").css("marginTop"))
            }
            function qb() {
                var a = m - j;
                return a > 20 && a - pb() < 10
            }
            function rb() {
                var a = l - i;
                return a > 20 && a - ob() < 10
            }
            function sb() {
                k.unbind(T).bind(T, function (a, b, c, d) {
                    var e = w,
                        h = t;
                    return g.scrollBy(c * f.mouseWheelSpeed, -d * f.mouseWheelSpeed, !1),
                    e == w && h == t
                })
            }
            function tb() {
                k.unbind(T)
            }
            function ub() {
                return !1
            }
            function vb() {
                h.find(":input,a").unbind("focus.jsp").bind("focus.jsp", function (a) {
                    nb(a.target, !1)
                })
            }
            function wb() {
                h.find(":input,a").unbind("focus.jsp")
            }
            function xb() {
                function i() {
                    var a = w,
                        d = t;
                    switch (b) {
                    case 40:
                        g.scrollByY(f.keyboardSpeed, !1);
                        break;
                    case 38:
                        g.scrollByY(-f.keyboardSpeed, !1);
                        break;
                    case 34:
                    case 32:
                        g.scrollByY(j * f.scrollPagePercent, !1);
                        break;
                    case 33:
                        g.scrollByY(-j * f.scrollPagePercent, !1);
                        break;
                    case 39:
                        g.scrollByX(f.keyboardSpeed, !1);
                        break;
                    case 37:
                        g.scrollByX(-f.keyboardSpeed, !1)
                    }
                    return c = a != w || d != t,
                    c
                }
                var b, c, e = [];
                q && e.push(E[0]),
                p && e.push(x[0]),
                h.focus(function () {
                    d.focus()
                }),
                d.attr("tabindex", 0).unbind("keydown.jsp keypress.jsp").bind("keydown.jsp", function (d) {
                    if (d.target !== this && (!e.length || !a(d.target).closest(e).length)) return;
                    var f = w,
                        g = t;
                    switch (d.keyCode) {
                    case 40:
                    case 38:
                    case 34:
                    case 32:
                    case 33:
                    case 39:
                    case 37:
                        b = d.keyCode,
                        i();
                        break;
                    case 35:
                        lb(m - j),
                        b = null;
                        break;
                    case 36:
                        lb(0),
                        b = null
                    }
                    return c = d.keyCode == b && f != w || g != t,
                    !c
                }).bind("keypress.jsp", function (a) {
                    return a.keyCode == b && i(),
                    !c
                }),
                f.hideFocus ? (d.css("outline", "none"), "hideFocus" in k[0] && d.attr("hideFocus", !0)) : (d.css("outline", ""), "hideFocus" in k[0] && d.attr("hideFocus", !1))
            }
            function yb() {
                d.attr("tabindex", "-1").removeAttr("tabindex").unbind("keydown.jsp keypress.jsp")
            }
            function zb() {
                if (location.hash && location.hash.length > 1) {
                    var b, c, d = escape(location.hash.substr(1));
                    try {
                        b = a("#" + d + ', a[name="' + d + '"]')
                    } catch (e) {
                        return
                    }
                    b.length && h.find(d) && (k.scrollTop() === 0 ? c = setInterval(function () {
                        k.scrollTop() > 0 && (nb(b, !0), a(document).scrollTop(k.position().top), clearInterval(c))
                    }, 50) : (nb(b, !0), a(document).scrollTop(k.position().top)))
                }
            }
            function Ab() {
                if (a(document.body).data("jspHijack")) return;
                a(document.body).data("jspHijack", !0),
                a(document.body).delegate("a[href*=#]", "click", function (c) {
                    var d = this.href.substr(0, this.href.indexOf("#")),
                        e = location.href,
                        f, g, h, i, j, k;
                    location.href.indexOf("#") !== -1 && (e = location.href.substr(0, location.href.indexOf("#")));
                    if (d !== e) return;
                    f = escape(this.href.substr(this.href.indexOf("#") + 1)),
                    g;
                    try {
                        g = a("#" + f + ', a[name="' + f + '"]')
                    } catch (l) {
                        return
                    }
                    if (!g.length) return;
                    h = g.closest(".jspScrollable"),
                    i = h.data("jsp"),
                    i.scrollToElement(g, !0),
                    h[0].scrollIntoView && (j = a(b).scrollTop(), k = g.offset().top, (k < j || k > j + a(b).height()) && h[0].scrollIntoView()),
                    c.preventDefault()
                })
            }
            function Bb() {
                var a, b, c, d, e, f = !1;
                k.unbind("touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick").bind("touchstart.jsp", function (g) {
                    var h = g.originalEvent.touches[0];
                    a = ob(),
                    b = pb(),
                    c = h.pageX,
                    d = h.pageY,
                    e = !1,
                    f = !0
                }).bind("touchmove.jsp", function (a) {
                    if (!f) return;
                    var h = a.originalEvent.touches[0],
                        i = w,
                        j = t;
                    return g.scrollTo(0, -b + d - h.pageY),
                    e = e || Math.abs(c - h.pageX) > 5 || Math.abs(d - h.pageY) > 5,
                    i == w && j == t
                }).bind("touchend.jsp", function (a) {
                    f = !1
                }).bind("click.jsp-touchclick", function (a) {
                    if (e) return e = !1,
                    !1
                })
            }
            function Cb() {
                var a = pb(),
                    b = ob();
                d.removeClass("jspScrollable").unbind(".jsp"),
                d.replaceWith(S.append(h.children())),
                S.scrollTop(a),
                S.scrollLeft(b),
                K && clearInterval(K)
            }
            var f, g = this,
                h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O = !0,
                P = !0,
                Q = !1,
                R = !1,
                S = d.clone(!1, !1).empty(),
                T = a.fn.mwheelIntent ? "mwheelIntent.jsp" : "mousewheel.jsp";
            L = d.css("paddingTop") + " " + d.css("paddingRight") + " " + d.css("paddingBottom") + " " + d.css("paddingLeft"),
            M = (parseInt(d.css("paddingLeft"), 10) || 0) + (parseInt(d.css("paddingRight"), 10) || 0),
            a.extend(g, {
                reinitialise: function (b) {
                    b = a.extend({}, f, b),
                    U(b)
                }, scrollToElement: function (a, b, c) {
                    nb(a, b, c)
                }, scrollTo: function (a, b, c) {
                    mb(a, c),
                    lb(b, c)
                }, scrollToX: function (a, b) {
                    mb(a, b)
                }, scrollToY: function (a, b) {
                    lb(a, b)
                }, scrollToPercentX: function (a, b) {
                    mb(a * (l - i), b)
                }, scrollToPercentY: function (a, b) {
                    lb(a * (m - j), b)
                }, scrollBy: function (a, b, c) {
                    g.scrollByX(a, c),
                    g.scrollByY(b, c)
                }, scrollByX: function (a, b) {
                    var c = ob() + Math[a < 0 ? "floor" : "ceil"](a),
                        d = c / (l - i);
                    hb(d * v, b)
                }, scrollByY: function (a, b) {
                    var c = pb() + Math[a < 0 ? "floor" : "ceil"](a),
                        d = c / (m - j);
                    fb(d * s, b)
                }, positionDragX: function (a, b) {
                    hb(a, b)
                }, positionDragY: function (a, b) {
                    fb(a, b)
                }, animate: function (a, b, c, d) {
                    var e = {};
                    e[b] = c,
                    a.animate(e, {
                        duration: f.animateDuration,
                        easing: f.animateEase,
                        queue: !1,
                        step: d
                    })
                }, getContentPositionX: function () {
                    return ob()
                }, getContentPositionY: function () {
                    return pb()
                }, getContentWidth: function () {
                    return l
                }, getContentHeight: function () {
                    return m
                }, getPercentScrolledX: function () {
                    return ob() / (l - i)
                }, getPercentScrolledY: function () {
                    return pb() / (m - j)
                }, getIsScrollableH: function () {
                    return q
                }, getIsScrollableV: function () {
                    return p
                }, getContentPane: function () {
                    return h
                }, scrollToBottom: function (a) {
                    fb(s, a)
                }, hijackInternalLinks: a.noop,
                destroy: function () {
                    Cb()
                }
            }),
            U(e)
        }
        return d = a.extend({}, a.fn.jScrollPane.defaults, d),
        a.each(["mouseWheelSpeed", "arrowButtonSpeed", "trackClickSpeed", "keyboardSpeed"], function () {
            d[this] = d[this] || d.speed
        }),
        this.each(function () {
            var b = a(this),
                c = b.data("jsp");
            c ? c.reinitialise(d) : (a("script", b).filter("[type=text/javascript],not([type])").remove(), c = new e(b, d), b.data("jsp", c))
        })
    }, a.fn.jScrollPane.defaults = {
        showArrows: !1,
        maintainPosition: !0,
        stickToBottom: !1,
        stickToRight: !1,
        clickOnTrack: !0,
        autoReinitialise: !1,
        autoReinitialiseDelay: 500,
        verticalDragMinHeight: 0,
        verticalDragMaxHeight: 99999,
        horizontalDragMinWidth: 0,
        horizontalDragMaxWidth: 99999,
        contentWidth: c,
        animateScroll: !1,
        animateDuration: 300,
        animateEase: "linear",
        hijackInternalLinks: !1,
        verticalGutter: 4,
        horizontalGutter: 4,
        mouseWheelSpeed: 0,
        arrowButtonSpeed: 0,
        arrowRepeatFreq: 50,
        arrowScrollOnHover: !1,
        trackClickSpeed: 0,
        trackClickRepeatFreq: 70,
        verticalArrowPositions: "split",
        horizontalArrowPositions: "split",
        enableKeyboardNavigation: !0,
        hideFocus: !1,
        keyboardSpeed: 0,
        initialDelay: 300,
        speed: 30,
        scrollPagePercent: .8
    }
}(jQuery, this);
var polyClip = new
function () {
    function h(b, c) {
        f[b] = new Image;
        var d = f[b];
        $(c).attr("data-polyclip-index", b),
        $(d).bind("load", function () {
            a.drawShape(b, c)
        }),
        d.src = c.src
    }
    function i(b) {
        e++,
        a.drawShape(e, b.target)
    }
    function j() {
        return !!document.createElement("canvas").getContext
    }
    function k(a, b) {
        return Math.floor(Math.random() * (b - a + 1)) + a
    }
    function l(a, b) {
        var c, d = parseInt(jQuery.trim(b[0])),
            e = parseInt(jQuery.trim(b[1]));
        for (var f = -1; f <= 1; f++) for (var g = 0; g <= 1; g++) {
            c = a.getImageData(d + f, e + g, 1, 1).data[3];
            if (c != 0) return !0
        }
        return !1
    }
    var a = this,
        b, c, d = [],
        e = -1,
        f = [],
        g = 0;
    a.isOldIE = window.G_vmlCanvasManager,
    a.init = function () {
        c = $("img[data-polyclip]"),
        c.each(h)
    }, a.drawShape = function (b, c) {
        var e = $(c),
            f = document.createElement("canvas");
        f.width = c.offsetWidth,
        f.height = c.offsetHeight,
        f.id = "polyClip" + b;
        var g = jQuery.trim(e.attr("data-polyclip")).split(","),
            h = c.src;
        d[f.id] = [],
        e.replaceWith(f),
        a.isOldIE && G_vmlCanvasManager.initElement(f);
        var i = f.getContext("2d");
        for (var j = 0; j < g.length; j += 2) {
            var k = parseInt(jQuery.trim(g[j])),
                m = parseInt(jQuery.trim(g[j + 1]));
            d[f.id].push({
                x: k,
                y: m
            }),
            j == 0 ? i.moveTo(k, m) : i.lineTo(k, m)
        }
        if (a.isOldIE) {
            i.fillStyle = "",
            i.fill();
            var n = $("fill", f).get(0);
            n.color = "",
            n.src = c.src,
            n.type = "tile",
            n.alignShape = !1
        } else {
            var o = new Image;
            o.onload = function () {
                var a = i.createPattern(o, "repeat");
                i.fillStyle = a,
                i.fill(),
                l(i, g) || o.src.indexOf("?chromeError") < 0 && (o.src += "?chromeError")
            }, o.src = h
        }
    }, a.findObject = function (b) {
        var c = b.currentTarget;
        if ($(c).hasClass("cropParent")) return $(c);
        for (var e in d) if (d.hasOwnProperty(e)) {
            var f = $("#" + e),
                g = b.pageX,
                h = b.pageY;
            if (a.isInPolygon(f, g, h, !0)) return f
        }
    }, a.isInPolygon = function (a, b, c, e) {
        var f = a.get(0),
            g = d[f.id],
            h = g.length,
            i, j, k, l, m, n, o, p, q, r = !1,
            s = {
                left: 0,
                top: 0
            };
        e && (s = a.offset());
        if (h < 3) return !1;
        k = g[h - 1].x + s.left,
        l = g[h - 1].y + s.top;
        for (q = 0; q < h; q++) i = g[q].x + s.left,
        j = g[q].y + s.top,
        i > k ? (m = k, o = i, n = l, p = j) : (m = i, o = k, n = j, p = l),
        i < b == b <= k && (c - n) * (o - m) < (p - n) * (b - m) && (r = !r),
        k = i,
        l = j;
        return r
    }
};
document.write('<style type="text/css">img[data-polyclip], img.polyClip { visibility: hidden; }</style>'),
polyClip.isOldIE && $(window).bind("load", polyClip.init),


eval(function (a, b, c, d, e, f) {
    e = function (a) {
        return (a < b ? "" : e(parseInt(a / b))) + ((a %= b) > 35 ? String.fromCharCode(a + 29) : a.toString(36))
    };
    if (!"".replace(/^/, String)) {
        while (c--) f[e(c)] = d[c] || e(c);
        d = [function (a) {
            return f[a]
        }],
        e = function () {
            return "\\w+"
        }, c = 1
    }
    while (c--) d[c] && (a = a.replace(new RegExp("\\b" + e(c) + "\\b", "g"), d[c]));
    return a
}("h.j['J']=h.j['C'];h.H(h.j,{D:'y',C:9(x,t,b,c,d){6 h.j[h.j.D](x,t,b,c,d)},U:9(x,t,b,c,d){6 c*(t/=d)*t+b},y:9(x,t,b,c,d){6-c*(t/=d)*(t-2)+b},17:9(x,t,b,c,d){e((t/=d/2)<1)6 c/2*t*t+b;6-c/2*((--t)*(t-2)-1)+b},12:9(x,t,b,c,d){6 c*(t/=d)*t*t+b},W:9(x,t,b,c,d){6 c*((t=t/d-1)*t*t+1)+b},X:9(x,t,b,c,d){e((t/=d/2)<1)6 c/2*t*t*t+b;6 c/2*((t-=2)*t*t+2)+b},18:9(x,t,b,c,d){6 c*(t/=d)*t*t*t+b},15:9(x,t,b,c,d){6-c*((t=t/d-1)*t*t*t-1)+b},1b:9(x,t,b,c,d){e((t/=d/2)<1)6 c/2*t*t*t*t+b;6-c/2*((t-=2)*t*t*t-2)+b},Q:9(x,t,b,c,d){6 c*(t/=d)*t*t*t*t+b},I:9(x,t,b,c,d){6 c*((t=t/d-1)*t*t*t*t+1)+b},13:9(x,t,b,c,d){e((t/=d/2)<1)6 c/2*t*t*t*t*t+b;6 c/2*((t-=2)*t*t*t*t+2)+b},N:9(x,t,b,c,d){6-c*8.B(t/d*(8.g/2))+c+b},M:9(x,t,b,c,d){6 c*8.n(t/d*(8.g/2))+b},L:9(x,t,b,c,d){6-c/2*(8.B(8.g*t/d)-1)+b},O:9(x,t,b,c,d){6(t==0)?b:c*8.i(2,10*(t/d-1))+b},P:9(x,t,b,c,d){6(t==d)?b+c:c*(-8.i(2,-10*t/d)+1)+b},S:9(x,t,b,c,d){e(t==0)6 b;e(t==d)6 b+c;e((t/=d/2)<1)6 c/2*8.i(2,10*(t-1))+b;6 c/2*(-8.i(2,-10*--t)+2)+b},R:9(x,t,b,c,d){6-c*(8.o(1-(t/=d)*t)-1)+b},K:9(x,t,b,c,d){6 c*8.o(1-(t=t/d-1)*t)+b},T:9(x,t,b,c,d){e((t/=d/2)<1)6-c/2*(8.o(1-t*t)-1)+b;6 c/2*(8.o(1-(t-=2)*t)+1)+b},F:9(x,t,b,c,d){f s=1.l;f p=0;f a=c;e(t==0)6 b;e((t/=d)==1)6 b+c;e(!p)p=d*.3;e(a<8.u(c)){a=c;f s=p/4}m f s=p/(2*8.g)*8.r(c/a);6-(a*8.i(2,10*(t-=1))*8.n((t*d-s)*(2*8.g)/p))+b},E:9(x,t,b,c,d){f s=1.l;f p=0;f a=c;e(t==0)6 b;e((t/=d)==1)6 b+c;e(!p)p=d*.3;e(a<8.u(c)){a=c;f s=p/4}m f s=p/(2*8.g)*8.r(c/a);6 a*8.i(2,-10*t)*8.n((t*d-s)*(2*8.g)/p)+c+b},G:9(x,t,b,c,d){f s=1.l;f p=0;f a=c;e(t==0)6 b;e((t/=d/2)==2)6 b+c;e(!p)p=d*(.3*1.5);e(a<8.u(c)){a=c;f s=p/4}m f s=p/(2*8.g)*8.r(c/a);e(t<1)6-.5*(a*8.i(2,10*(t-=1))*8.n((t*d-s)*(2*8.g)/p))+b;6 a*8.i(2,-10*(t-=1))*8.n((t*d-s)*(2*8.g)/p)*.5+c+b},1a:9(x,t,b,c,d,s){e(s==v)s=1.l;6 c*(t/=d)*t*((s+1)*t-s)+b},19:9(x,t,b,c,d,s){e(s==v)s=1.l;6 c*((t=t/d-1)*t*((s+1)*t+s)+1)+b},14:9(x,t,b,c,d,s){e(s==v)s=1.l;e((t/=d/2)<1)6 c/2*(t*t*(((s*=(1.z))+1)*t-s))+b;6 c/2*((t-=2)*t*(((s*=(1.z))+1)*t+s)+2)+b},A:9(x,t,b,c,d){6 c-h.j.w(x,d-t,0,c,d)+b},w:9(x,t,b,c,d){e((t/=d)<(1/2.k)){6 c*(7.q*t*t)+b}m e(t<(2/2.k)){6 c*(7.q*(t-=(1.5/2.k))*t+.k)+b}m e(t<(2.5/2.k)){6 c*(7.q*(t-=(2.V/2.k))*t+.Y)+b}m{6 c*(7.q*(t-=(2.16/2.k))*t+.11)+b}},Z:9(x,t,b,c,d){e(t<d/2)6 h.j.A(x,t*2,0,c,d)*.5+b;6 h.j.w(x,t*2-d,0,c,d)*.5+c*.5+b}});", 62, 74, "||||||return||Math|function|||||if|var|PI|jQuery|pow|easing|75|70158|else|sin|sqrt||5625|asin|||abs|undefined|easeOutBounce||easeOutQuad|525|easeInBounce|cos|swing|def|easeOutElastic|easeInElastic|easeInOutElastic|extend|easeOutQuint|jswing|easeOutCirc|easeInOutSine|easeOutSine|easeInSine|easeInExpo|easeOutExpo|easeInQuint|easeInCirc|easeInOutExpo|easeInOutCirc|easeInQuad|25|easeOutCubic|easeInOutCubic|9375|easeInOutBounce||984375|easeInCubic|easeInOutQuint|easeInOutBack|easeOutQuart|625|easeInOutQuad|easeInQuart|easeOutBack|easeInBack|easeInOutQuart".split("|"), 0, {})),


function () {}.call(this);
var cols_h = [],
    isTouch = navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/Android/i);

$(document).ready(function () {
    $("html, document, body").scrollTop(0),
    $("#know-more, #wrapper, #bottom, #header_top").css({
        visibility: "hidden"
    }),
    $("body").append('<p id="preloader" />'),
    theForm.init(),
    $.browser.opera || $("#contact_issue").each(function () {
        var a = $(this).attr("title") !== undefined ? $(this).attr("title") : "";
        $("option:selected", this).val() != "" && (a = $("option:selected", this).text()),
        $(this).css({
            "z-index": 10,
            opacity: 0,
            "-khtml-appearance": "none"
        }).after('<span class="select">' + a + "</span>").change(function () {
            val = $("option:selected", this).text(),
            $(this).next().text(val)
        })
    }),
    $(".notice .close").click(function () {
        $(".notice").slideUp("fast", function () {
            $(this).remove()
        })
    }),

    $('a[rel="contacts"]').bind("click", function () {
        isTouch ? $("#scrollContainer").data("jsp").scrollTo(0, $("#bottom").position().top, !0) : $("html, document, body").animate({
            scrollTop: $("#bottom").offset().top
        }, 1500, "easeInOutExpo")
    }),
    $('a[rel="home"]').bind("click", function () {
        isTouch ? $("#scrollContainer").data("jsp").scrollTo(0, $("#home").position().top, !0) : $("html, document, body").animate({
            scrollTop: $("#home").offset().top
        }, 1500, "easeInOutExpo")
    })
}),

$(window).load(function () {
    layout.setPositions(),
    layout.init(),
    know_more.init(),
    myScroll.init(),
    polyClip.init(),
    $("#preloader").fadeOut("fast", function () {
        $(this).remove(),
        $("#know-more, #wrapper, #bottom, #header_top").css({
            display: "none",
            visibility: "visible"
        }).fadeIn("fast")
    })
}),
$(window).resize(function () {
    layout.setPositions()
});

var layout = {
    setPositions: function () {
        var a = $(window).width();
        $(".col").each(function (b) {
            b == 0 ? $(this).css({
                left: (a - 768) / 2
            }) : b == 1 ? $(this).css({
                left: (a - 768) / 2 + 256
            }) : $(this).css({
                left: (a - 768) / 2 + 256 + 256
            })
        }),
        $("#short-menu, #know-more, #bottom, #footer, #header_top").css({
            marginLeft: (a - 768) / 2
        })
    }, init: function () {
        layout.wh = $(window).height(),
        $(".col").each(function (a) {
            var b = $(this).find("> div").length,
                c = $(this).hasClass("middle");
            $(this).find("> div").each(function (a) {
                if ($(this).hasClass("image")) {
                    $(this).next().hasClass("image") && $(this).css({
                        marginBottom: -45
                    });
                }
            })
        })
    }
},
    myScroll = {
        maxHeightColumn: 0,
        refIndex: 0,
        init: function () {
            $(".col").each(function (a) {
                var b = $(this).outerHeight();
                myScroll.maxHeightColumn = myScroll.maxHeightColumn > b ? myScroll.maxHeightColumn : b,
                cols_h[a] = b
            }),
            myScroll.refIndex = cols_h.indexOf(myScroll.maxHeightColumn),
            $("#wrapper").height(myScroll.maxHeightColumn),
            isTouch && ($("#know-more, #wrapper, #bottom, #header_top").wrapAll('<div id="scrollContainer" />'), $("#scrollContainer").height(layout.wh - 1).jScrollPane({
                clickOnTrack: !1
            })),
            myScroll.header1Offset = parseInt($("#header1").position().top) + 20,
            $(".col.middle").css({
                marginTop: -myScroll.header1Offset
            }),
            $("#header2").length && (myScroll.header2Offset = parseInt($("#header2").position().top), myScroll.header2Height = $("#header2").height()),
            myScroll.listen()
        }, listen: function (a) {
            var b = a ? know_more.h : 0;
            isTouch || $(window).bind("scroll", function (a) {
                a.preventDefault();
                var c = $(document).scrollTop();
                c -= b,
                myScroll.positionContent(c, b)
            })
        }, sleep: function () {
            $(window).unbind("scroll")
        }, positionContent: function (a, b) {
            var c = a / (cols_h[myScroll.refIndex] - layout.wh);
            a > 0 ? ($(".col").each(function (d) {
                d == myScroll.refIndex ? $(this).css({
                    marginTop: -a - b
                }) : d != 1 ? c <= 1 ? $(this).css({
                    marginTop: -(b + (cols_h[d] - layout.wh) * c)
                }) : $(this).css({
                    marginTop: -b - (cols_h[d] - layout.wh) - (a - cols_h[myScroll.refIndex] + layout.wh)
                }) : -myScroll.header1Offset + myScroll.header1Offset * c < 0 ? $(".col").eq(1).css({
                    marginTop: -myScroll.header1Offset + myScroll.header1Offset * c - b,
                    height: "auto"
                }) : $(".col").eq(1).css({
                    marginTop: -(a - cols_h[myScroll.refIndex] + layout.wh) - b,
                    height: layout.wh
                })
            }), a >= 250 && !$("#short-menu").hasClass("open") ? $("#short-menu").stop(!0, !0).addClass("open").animate({
                top: 0
            }, 1e3, "easeInOutExpo") : a <= 250 && $("#short-menu").hasClass("open") && $("#short-menu").stop(!0, !0).removeClass("open").animate({
                top: "-73px"
            }, 1e3, "easeInOutExpo")) : $(".col").each(function (c) {
                c == myScroll.refIndex || c != 1 ? $(this).css({
                    marginTop: -a - b
                }) : $(this).css({
                    marginTop: -(myScroll.header1Offset + (a + b))
                })
            });
            if (a == 0 || a == -b) $(".col").eq(1).css({
                marginTop: -myScroll.header1Offset
            }),
            $("#header2").css({
                position: "static",
                marginTop: -45
            }).next().css({
                marginTop: 0
            })
        }
    },
    know_more = {
        init: function () {
            know_more.el = $("#know-more"),
            know_more.h = $(know_more.el).outerHeight(),
            $(know_more.el).css({
                marginTop:322,height:0
            }),
            $('a[rel="know-more"]').bind("click", function (a) {
                a.preventDefault(),
                $(window).scrollTop() == 0 ? know_more.expand() : isTouch ? ($("#scrollContainer").data("jsp").scrollTo(0, 0, !0), know_more.expand()) : $("html, document, body").animate({
                    scrollTop: 0
                }, 1500, "easeInOutExpo", function () {
                    know_more.expand()
                })
            }),
            $("a.km-close").bind("click", function (a) {
                a.preventDefault(),
                know_more.collapse()
            })
        }, expand: function () {
            $(know_more.el).animate({
                marginTop: 322,height: know_more.h
            }, 1500, "easeInOutExpo", function () {
                $(this).addClass("open")
            }),
			
                isTouch && $("#scrollContainer").data("jsp").reinitialise(),
                myScroll.listen(!0)
				
        }, collapse: function () {
            myScroll.sleep(),
            $(know_more.el).animate({
                height: -know_more.h
            }, 1500, "easeInOutExpo", function () {
                $(this).removeClass("open"),
                isTouch && ($("#scrollContainer").data("jsp").scrollTo(0, 0), $("#scrollContainer").data("jsp").reinitialise())
            }),
            $(".col.left, .col.right").animate({
                marginTop: 0
            }, 1500, "easeInOutExpo"),
            $(".col.middle").animate({
                marginTop: -myScroll.header1Offset
            }, 1500, "easeInOutExpo"),
            $("#wrapper").animate({
                marginTop: 0
            }, 1500, "easeInOutExpo", function () {
                myScroll.listen(!1)
            }),
            $("html,body,document").stop(!0, !1).animate({
                scrollTop: 0
            })
        }
    },
    
	
    theForm = {
        init: function () {
            $(".radio a").each(function () {
                $(this).click(function () {
                    $(".radio a").removeClass("active"),
                    $(this).addClass("active")
                })
            }),
            $('form input[type="submit"]').click(function (a) {
                a.preventDefault(),
                theForm.validate() && $("#new_contact").submit()
            })
        }, validate: function () {
            var a = !1;
            return $("span.message").remove(),
            $("#contact_name").val() == "" && (a = !0, $("#contact_name").parent().append('<span class="message">can\'t be blank</span>')),
            $("#contact_surname").val() == "" && (a = !0, $("#contact_surname").parent().append('<span class="message">can\'t be blank</span>')),
            $("#contact_phone").val() == "" && (a = !0, $("#contact_phone").parent().append('<span class="message">can\'t be blank</span>')),
            $("#contact_email").val() == "" ? (a = !0, $("#contact_email").parent().append('<span class="message">can\'t be blank</span>')) : reg.test($("#contact_email").val()) == 0 && (a = !0, $("#contact_email").parent().append('<span class="message">Email is invalid</span>')),
            $(".radio a.active").length && $(".radio a.active").data("value") == "company" && $("#contact_company").val() == "" && ($("#contact_company").parent().append('<span class="message">can\'t be blank</span>'), a = !0),
            $("#contact_message").val() == "" && (a = !0, $("#contact_message").parent().append('<span class="message">can\'t be blank</span>')),
            a ? !1 : !0
        }
    };
Array.max = function (a) {
    return Math.max.apply(Math, a)
}, Array.prototype.indexOf || (Array.prototype.indexOf = function (a) {
    var b = this.length,
        c = Number(arguments[1]) || 0;
    c = c < 0 ? Math.ceil(c) : Math.floor(c),
    c < 0 && (c += b);
    for (; c < b; c++) if (c in this && this[c] === a) return c;
    return -1
});
var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
(function () {}).call(this),


function () {
    $(function () {})
}.call(this);

;(function($){
	$.fn.forms=function(o){
		return this.each(function(){
			var th=$(this)
				,_=th.data('forms')||{
					errorCl:'error',
					emptyCl:'empty',
					invalidCl:'invalid',
					notRequiredCl:'notRequired',
					successCl:'success',
					successShow:'4000',
					mailHandlerURL:'bat/MailHandler.php',
					ownerEmail:'support@template-help.com',
					stripHTML:true,
					smtpMailServer:'localhost',
					targets:'input,textarea',
					controls:'a[data-type=reset],a[data-type=submit]',
					validate:true,
					rx:{
						".name":{rx:/^[a-zA-Z'][a-zA-Z-' ]+[a-zA-Z']?$/,target:'input'},
						".state":{rx:/^[a-zA-Z'][a-zA-Z-' ]+[a-zA-Z']?$/,target:'input'},
						".email":{rx:/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i,target:'input'},
						".phone":{rx:/^\+?(\d[\d\-\+\(\) ]{5,}\d$)/,target:'input'},
						".fax":{rx:/^\+?(\d[\d\-\+\(\) ]{5,}\d$)/,target:'input'},
						".message":{rx:/.{20}/,target:'textarea'}
					},
					preFu:function(){
						_.labels.each(function(){
							var label=$(this),
								inp=$(_.targets,this),
								defVal=inp.val(),
								trueVal=(function(){
											var tmp=inp.is('input')?(tmp=label.html().match(/value=['"](.+?)['"].+/),!!tmp&&!!tmp[1]&&tmp[1]):inp.html()
											return defVal==''?defVal:tmp
										})()
							trueVal!=defVal
								&&inp.val(defVal=trueVal||defVal)
							label.data({defVal:defVal})								
							inp
								.bind('focus',function(){
									inp.val()==defVal
										&&(inp.val(''),_.hideEmptyFu(label),label.removeClass(_.invalidCl))
								})
								.bind('blur',function(){
									_.validateFu(label)
									if(_.isEmpty(label))
										inp.val(defVal)
										,_.hideErrorFu(label.removeClass(_.invalidCl))											
								})
								.bind('keyup',function(){
									label.hasClass(_.invalidCl)
										&&_.validateFu(label)
								})
							label.find('.'+_.errorCl+',.'+_.emptyCl).css({display:'block'}).hide()
						})
						_.success=$('.'+_.successCl,_.form).hide()
					},
					isRequired:function(el){							
						return !el.hasClass(_.notRequiredCl)
					},
					isValid:function(el){							
						var ret=true
						$.each(_.rx,function(k,d){
							if(el.is(k))
								ret=d.rx.test(el.find(d.target).val())										
						})
						return ret							
					},
					isEmpty:function(el){
						var tmp
						return (tmp=el.find(_.targets).val())==''||tmp==el.data('defVal')
					},
					validateFu:function(el){							
						el.each(function(){
							var th=$(this)
								,req=_.isRequired(th)
								,empty=_.isEmpty(th)
								,valid=_.isValid(th)								
							
							if(empty&&req)
								_.showEmptyFu(th.addClass(_.invalidCl))
							else
								_.hideEmptyFu(th.removeClass(_.invalidCl))
							
							if(!empty)
								if(valid)
									_.hideErrorFu(th.removeClass(_.invalidCl))
								else
									_.showErrorFu(th.addClass(_.invalidCl))								
						})
					},
					getValFromLabel:function(label){
						var val=$('input,textarea',label).val()
							,defVal=label.data('defVal')								
						return label.length?val==defVal?'nope':val:'nope'
					}
					,submitFu:function(){
						_.validateFu(_.labels)							
						if(!_.form.has('.'+_.invalidCl).length)
							$.ajax({
								type: "POST",
								url:_.mailHandlerURL,
								data:{
									name:_.getValFromLabel($('.name',_.form)),
									email:_.getValFromLabel($('.email',_.form)),
									phone:_.getValFromLabel($('.phone',_.form)),
									fax:_.getValFromLabel($('.fax',_.form)),
									state:_.getValFromLabel($('.state',_.form)),
									message:_.getValFromLabel($('.message',_.form)),
									owner_email:_.ownerEmail,
									stripHTML:_.stripHTML
								},
								success: function(){
									_.showFu()
								}
							})			
					},
					showFu:function(){
						_.success.slideDown(function(){
							setTimeout(function(){
								_.success.slideUp()
								_.form.trigger('reset')
							},_.successShow)
						})
					},
					controlsFu:function(){
						$(_.controls,_.form).each(function(){
							var th=$(this)
							th
								.bind('click',function(){
									_.form.trigger(th.data('type'))
									return false
								})
						})
					},
					showErrorFu:function(label){
						label.find('.'+_.errorCl).slideDown()
					},
					hideErrorFu:function(label){
						label.find('.'+_.errorCl).slideUp()
					},
					showEmptyFu:function(label){
						label.find('.'+_.emptyCl).slideDown()
						_.hideErrorFu(label)
					},
					hideEmptyFu:function(label){
						label.find('.'+_.emptyCl).slideUp()
					},
					init:function(){
						_.form=_.me						
						_.labels=$('label',_.form)

						_.preFu()
						
						_.controlsFu()
														
						_.form
							.bind('submit',function(){
								if(_.validate)
									_.submitFu()
								else
									_.form[0].submit()
								return false
							})
							.bind('reset',function(){
								_.labels.removeClass(_.invalidCl)									
								_.labels.each(function(){
									var th=$(this)
									_.hideErrorFu(th)
									_.hideEmptyFu(th)
								})
							})
						_.form.trigger('reset')
					}
				}
			_.me||_.init(_.me=th.data({forms:_}))
			typeof o=='object'
				&&$.extend(_,o)
		})
	}
})(jQuery)
