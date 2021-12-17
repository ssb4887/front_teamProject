/**
 * Swiper 4.3.5
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://www.idangero.us/swiper/
 *
 * Copyright 2014-2018 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: July 31, 2018
 */
!function (e, t) { "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Swiper = t() }(this, function () { "use strict"; var f = "undefined" == typeof document ? { body: {}, addEventListener: function () { }, removeEventListener: function () { }, activeElement: { blur: function () { }, nodeName: "" }, querySelector: function () { return null }, querySelectorAll: function () { return [] }, getElementById: function () { return null }, createEvent: function () { return { initEvent: function () { } } }, createElement: function () { return { children: [], childNodes: [], style: {}, setAttribute: function () { }, getElementsByTagName: function () { return [] } } }, location: { hash: "" } } : document, B = "undefined" == typeof window ? { document: f, navigator: { userAgent: "" }, location: {}, history: {}, CustomEvent: function () { return this }, addEventListener: function () { }, removeEventListener: function () { }, getComputedStyle: function () { return { getPropertyValue: function () { return "" } } }, Image: function () { }, Date: function () { }, screen: {}, setTimeout: function () { }, clearTimeout: function () { } } : window, l = function (e) { for (var t = 0; t < e.length; t += 1)this[t] = e[t]; return this.length = e.length, this }; function L(e, t) { var a = [], i = 0; if (e && !t && e instanceof l) return e; if (e) if ("string" == typeof e) { var s, r, n = e.trim(); if (0 <= n.indexOf("<") && 0 <= n.indexOf(">")) { var o = "div"; for (0 === n.indexOf("<li") && (o = "ul"), 0 === n.indexOf("<tr") && (o = "tbody"), 0 !== n.indexOf("<td") && 0 !== n.indexOf("<th") || (o = "tr"), 0 === n.indexOf("<tbody") && (o = "table"), 0 === n.indexOf("<option") && (o = "select"), (r = f.createElement(o)).innerHTML = n, i = 0; i < r.childNodes.length; i += 1)a.push(r.childNodes[i]) } else for (s = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || f).querySelectorAll(e.trim()) : [f.getElementById(e.trim().split("#")[1])], i = 0; i < s.length; i += 1)s[i] && a.push(s[i]) } else if (e.nodeType || e === B || e === f) a.push(e); else if (0 < e.length && e[0].nodeType) for (i = 0; i < e.length; i += 1)a.push(e[i]); return new l(a) } function r(e) { for (var t = [], a = 0; a < e.length; a += 1)-1 === t.indexOf(e[a]) && t.push(e[a]); return t } L.fn = l.prototype, L.Class = l, L.Dom7 = l; var t = { addClass: function (e) { if (void 0 === e) return this; for (var t = e.split(" "), a = 0; a < t.length; a += 1)for (var i = 0; i < this.length; i += 1)void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.add(t[a]); return this }, removeClass: function (e) { for (var t = e.split(" "), a = 0; a < t.length; a += 1)for (var i = 0; i < this.length; i += 1)void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.remove(t[a]); return this }, hasClass: function (e) { return !!this[0] && this[0].classList.contains(e) }, toggleClass: function (e) { for (var t = e.split(" "), a = 0; a < t.length; a += 1)for (var i = 0; i < this.length; i += 1)void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.toggle(t[a]); return this }, attr: function (e, t) { var a = arguments; if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0; for (var i = 0; i < this.length; i += 1)if (2 === a.length) this[i].setAttribute(e, t); else for (var s in e) this[i][s] = e[s], this[i].setAttribute(s, e[s]); return this }, removeAttr: function (e) { for (var t = 0; t < this.length; t += 1)this[t].removeAttribute(e); return this }, data: function (e, t) { var a; if (void 0 !== t) { for (var i = 0; i < this.length; i += 1)(a = this[i]).dom7ElementDataStorage || (a.dom7ElementDataStorage = {}), a.dom7ElementDataStorage[e] = t; return this } if (a = this[0]) { if (a.dom7ElementDataStorage && e in a.dom7ElementDataStorage) return a.dom7ElementDataStorage[e]; var s = a.getAttribute("data-" + e); return s || void 0 } }, transform: function (e) { for (var t = 0; t < this.length; t += 1) { var a = this[t].style; a.webkitTransform = e, a.transform = e } return this }, transition: function (e) { "string" != typeof e && (e += "ms"); for (var t = 0; t < this.length; t += 1) { var a = this[t].style; a.webkitTransitionDuration = e, a.transitionDuration = e } return this }, on: function () { for (var e, t = [], a = arguments.length; a--;)t[a] = arguments[a]; var i = t[0], r = t[1], n = t[2], s = t[3]; function o(e) { var t = e.target; if (t) { var a = e.target.dom7EventData || []; if (a.indexOf(e) < 0 && a.unshift(e), L(t).is(r)) n.apply(t, a); else for (var i = L(t).parents(), s = 0; s < i.length; s += 1)L(i[s]).is(r) && n.apply(i[s], a) } } function l(e) { var t = e && e.target && e.target.dom7EventData || []; t.indexOf(e) < 0 && t.unshift(e), n.apply(this, t) } "function" == typeof t[1] && (i = (e = t)[0], n = e[1], s = e[2], r = void 0), s || (s = !1); for (var d, p = i.split(" "), c = 0; c < this.length; c += 1) { var u = this[c]; if (r) for (d = 0; d < p.length; d += 1) { var h = p[d]; u.dom7LiveListeners || (u.dom7LiveListeners = {}), u.dom7LiveListeners[h] || (u.dom7LiveListeners[h] = []), u.dom7LiveListeners[h].push({ listener: n, proxyListener: o }), u.addEventListener(h, o, s) } else for (d = 0; d < p.length; d += 1) { var v = p[d]; u.dom7Listeners || (u.dom7Listeners = {}), u.dom7Listeners[v] || (u.dom7Listeners[v] = []), u.dom7Listeners[v].push({ listener: n, proxyListener: l }), u.addEventListener(v, l, s) } } return this }, off: function () { for (var e, t = [], a = arguments.length; a--;)t[a] = arguments[a]; var i = t[0], s = t[1], r = t[2], n = t[3]; "function" == typeof t[1] && (i = (e = t)[0], r = e[1], n = e[2], s = void 0), n || (n = !1); for (var o = i.split(" "), l = 0; l < o.length; l += 1)for (var d = o[l], p = 0; p < this.length; p += 1) { var c = this[p], u = void 0; if (!s && c.dom7Listeners ? u = c.dom7Listeners[d] : s && c.dom7LiveListeners && (u = c.dom7LiveListeners[d]), u && u.length) for (var h = u.length - 1; 0 <= h; h -= 1) { var v = u[h]; r && v.listener === r ? (c.removeEventListener(d, v.proxyListener, n), u.splice(h, 1)) : r || (c.removeEventListener(d, v.proxyListener, n), u.splice(h, 1)) } } return this }, trigger: function () { for (var e = [], t = arguments.length; t--;)e[t] = arguments[t]; for (var a = e[0].split(" "), i = e[1], s = 0; s < a.length; s += 1)for (var r = a[s], n = 0; n < this.length; n += 1) { var o = this[n], l = void 0; try { l = new B.CustomEvent(r, { detail: i, bubbles: !0, cancelable: !0 }) } catch (e) { (l = f.createEvent("Event")).initEvent(r, !0, !0), l.detail = i } o.dom7EventData = e.filter(function (e, t) { return 0 < t }), o.dispatchEvent(l), o.dom7EventData = [], delete o.dom7EventData } return this }, transitionEnd: function (t) { var a, i = ["webkitTransitionEnd", "transitionend"], s = this; function r(e) { if (e.target === this) for (t.call(this, e), a = 0; a < i.length; a += 1)s.off(i[a], r) } if (t) for (a = 0; a < i.length; a += 1)s.on(i[a], r); return this }, outerWidth: function (e) { if (0 < this.length) { if (e) { var t = this.styles(); return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left")) } return this[0].offsetWidth } return null }, outerHeight: function (e) { if (0 < this.length) { if (e) { var t = this.styles(); return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom")) } return this[0].offsetHeight } return null }, offset: function () { if (0 < this.length) { var e = this[0], t = e.getBoundingClientRect(), a = f.body, i = e.clientTop || a.clientTop || 0, s = e.clientLeft || a.clientLeft || 0, r = e === B ? B.scrollY : e.scrollTop, n = e === B ? B.scrollX : e.scrollLeft; return { top: t.top + r - i, left: t.left + n - s } } return null }, css: function (e, t) { var a; if (1 === arguments.length) { if ("string" != typeof e) { for (a = 0; a < this.length; a += 1)for (var i in e) this[a].style[i] = e[i]; return this } if (this[0]) return B.getComputedStyle(this[0], null).getPropertyValue(e) } if (2 === arguments.length && "string" == typeof e) { for (a = 0; a < this.length; a += 1)this[a].style[e] = t; return this } return this }, each: function (e) { if (!e) return this; for (var t = 0; t < this.length; t += 1)if (!1 === e.call(this[t], t, this[t])) return this; return this }, html: function (e) { if (void 0 === e) return this[0] ? this[0].innerHTML : void 0; for (var t = 0; t < this.length; t += 1)this[t].innerHTML = e; return this }, text: function (e) { if (void 0 === e) return this[0] ? this[0].textContent.trim() : null; for (var t = 0; t < this.length; t += 1)this[t].textContent = e; return this }, is: function (e) { var t, a, i = this[0]; if (!i || void 0 === e) return !1; if ("string" == typeof e) { if (i.matches) return i.matches(e); if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e); if (i.msMatchesSelector) return i.msMatchesSelector(e); for (t = L(e), a = 0; a < t.length; a += 1)if (t[a] === i) return !0; return !1 } if (e === f) return i === f; if (e === B) return i === B; if (e.nodeType || e instanceof l) { for (t = e.nodeType ? [e] : e, a = 0; a < t.length; a += 1)if (t[a] === i) return !0; return !1 } return !1 }, index: function () { var e, t = this[0]; if (t) { for (e = 0; null !== (t = t.previousSibling);)1 === t.nodeType && (e += 1); return e } }, eq: function (e) { if (void 0 === e) return this; var t, a = this.length; return new l(a - 1 < e ? [] : e < 0 ? (t = a + e) < 0 ? [] : [this[t]] : [this[e]]) }, append: function () { for (var e, t = [], a = arguments.length; a--;)t[a] = arguments[a]; for (var i = 0; i < t.length; i += 1) { e = t[i]; for (var s = 0; s < this.length; s += 1)if ("string" == typeof e) { var r = f.createElement("div"); for (r.innerHTML = e; r.firstChild;)this[s].appendChild(r.firstChild) } else if (e instanceof l) for (var n = 0; n < e.length; n += 1)this[s].appendChild(e[n]); else this[s].appendChild(e) } return this }, prepend: function (e) { var t, a, i = this; for (t = 0; t < this.length; t += 1)if ("string" == typeof e) { var s = f.createElement("div"); for (s.innerHTML = e, a = s.childNodes.length - 1; 0 <= a; a -= 1)i[t].insertBefore(s.childNodes[a], i[t].childNodes[0]) } else if (e instanceof l) for (a = 0; a < e.length; a += 1)i[t].insertBefore(e[a], i[t].childNodes[0]); else i[t].insertBefore(e, i[t].childNodes[0]); return this }, next: function (e) { return 0 < this.length ? e ? this[0].nextElementSibling && L(this[0].nextElementSibling).is(e) ? new l([this[0].nextElementSibling]) : new l([]) : this[0].nextElementSibling ? new l([this[0].nextElementSibling]) : new l([]) : new l([]) }, nextAll: function (e) { var t = [], a = this[0]; if (!a) return new l([]); for (; a.nextElementSibling;) { var i = a.nextElementSibling; e ? L(i).is(e) && t.push(i) : t.push(i), a = i } return new l(t) }, prev: function (e) { if (0 < this.length) { var t = this[0]; return e ? t.previousElementSibling && L(t.previousElementSibling).is(e) ? new l([t.previousElementSibling]) : new l([]) : t.previousElementSibling ? new l([t.previousElementSibling]) : new l([]) } return new l([]) }, prevAll: function (e) { var t = [], a = this[0]; if (!a) return new l([]); for (; a.previousElementSibling;) { var i = a.previousElementSibling; e ? L(i).is(e) && t.push(i) : t.push(i), a = i } return new l(t) }, parent: function (e) { for (var t = [], a = 0; a < this.length; a += 1)null !== this[a].parentNode && (e ? L(this[a].parentNode).is(e) && t.push(this[a].parentNode) : t.push(this[a].parentNode)); return L(r(t)) }, parents: function (e) { for (var t = [], a = 0; a < this.length; a += 1)for (var i = this[a].parentNode; i;)e ? L(i).is(e) && t.push(i) : t.push(i), i = i.parentNode; return L(r(t)) }, closest: function (e) { var t = this; return void 0 === e ? new l([]) : (t.is(e) || (t = t.parents(e).eq(0)), t) }, find: function (e) { for (var t = [], a = 0; a < this.length; a += 1)for (var i = this[a].querySelectorAll(e), s = 0; s < i.length; s += 1)t.push(i[s]); return new l(t) }, children: function (e) { for (var t = [], a = 0; a < this.length; a += 1)for (var i = this[a].childNodes, s = 0; s < i.length; s += 1)e ? 1 === i[s].nodeType && L(i[s]).is(e) && t.push(i[s]) : 1 === i[s].nodeType && t.push(i[s]); return new l(r(t)) }, remove: function () { for (var e = 0; e < this.length; e += 1)this[e].parentNode && this[e].parentNode.removeChild(this[e]); return this }, add: function () { for (var e = [], t = arguments.length; t--;)e[t] = arguments[t]; var a, i; for (a = 0; a < e.length; a += 1) { var s = L(e[a]); for (i = 0; i < s.length; i += 1)this[this.length] = s[i], this.length += 1 } return this }, styles: function () { return this[0] ? B.getComputedStyle(this[0], null) : {} } }; Object.keys(t).forEach(function (e) { L.fn[e] = t[e] }); var e, a, i, X = { deleteProps: function (e) { var t = e; Object.keys(t).forEach(function (e) { try { t[e] = null } catch (e) { } try { delete t[e] } catch (e) { } }) }, nextTick: function (e, t) { return void 0 === t && (t = 0), setTimeout(e, t) }, now: function () { return Date.now() }, getTranslate: function (e, t) { var a, i, s; void 0 === t && (t = "x"); var r = B.getComputedStyle(e, null); return B.WebKitCSSMatrix ? (6 < (i = r.transform || r.webkitTransform).split(",").length && (i = i.split(", ").map(function (e) { return e.replace(",", ".") }).join(", ")), s = new B.WebKitCSSMatrix("none" === i ? "" : i)) : a = (s = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (i = B.WebKitCSSMatrix ? s.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])), "y" === t && (i = B.WebKitCSSMatrix ? s.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])), i || 0 }, parseUrlQuery: function (e) { var t, a, i, s, r = {}, n = e || B.location.href; if ("string" == typeof n && n.length) for (s = (a = (n = -1 < n.indexOf("?") ? n.replace(/\S*\?/, "") : "").split("&").filter(function (e) { return "" !== e })).length, t = 0; t < s; t += 1)i = a[t].replace(/#\S+/g, "").split("="), r[decodeURIComponent(i[0])] = void 0 === i[1] ? void 0 : decodeURIComponent(i[1]) || ""; return r }, isObject: function (e) { return "object" == typeof e && null !== e && e.constructor && e.constructor === Object }, extend: function () { for (var e = [], t = arguments.length; t--;)e[t] = arguments[t]; for (var a = Object(e[0]), i = 1; i < e.length; i += 1) { var s = e[i]; if (null != s) for (var r = Object.keys(Object(s)), n = 0, o = r.length; n < o; n += 1) { var l = r[n], d = Object.getOwnPropertyDescriptor(s, l); void 0 !== d && d.enumerable && (X.isObject(a[l]) && X.isObject(s[l]) ? X.extend(a[l], s[l]) : !X.isObject(a[l]) && X.isObject(s[l]) ? (a[l] = {}, X.extend(a[l], s[l])) : a[l] = s[l]) } } return a } }, Y = (i = f.createElement("div"), { touch: B.Modernizr && !0 === B.Modernizr.touch || !!("ontouchstart" in B || B.DocumentTouch && f instanceof B.DocumentTouch), pointerEvents: !(!B.navigator.pointerEnabled && !B.PointerEvent), prefixedPointerEvents: !!B.navigator.msPointerEnabled, transition: (a = i.style, "transition" in a || "webkitTransition" in a || "MozTransition" in a), transforms3d: B.Modernizr && !0 === B.Modernizr.csstransforms3d || (e = i.style, "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e), flexbox: function () { for (var e = i.style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), a = 0; a < t.length; a += 1)if (t[a] in e) return !0; return !1 }(), observer: "MutationObserver" in B || "WebkitMutationObserver" in B, passiveListener: function () { var e = !1; try { var t = Object.defineProperty({}, "passive", { get: function () { e = !0 } }); B.addEventListener("testPassiveListener", null, t) } catch (e) { } return e }(), gestures: "ongesturestart" in B }), s = function (e) { void 0 === e && (e = {}); var t = this; t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach(function (e) { t.on(e, t.params.on[e]) }) }, n = { components: { configurable: !0 } }; s.prototype.on = function (e, t, a) { var i = this; if ("function" != typeof t) return i; var s = a ? "unshift" : "push"; return e.split(" ").forEach(function (e) { i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][s](t) }), i }, s.prototype.once = function (i, s, e) { var r = this; if ("function" != typeof s) return r; return r.on(i, function e() { for (var t = [], a = arguments.length; a--;)t[a] = arguments[a]; s.apply(r, t), r.off(i, e) }, e) }, s.prototype.off = function (e, i) { var s = this; return s.eventsListeners && e.split(" ").forEach(function (a) { void 0 === i ? s.eventsListeners[a] = [] : s.eventsListeners[a].forEach(function (e, t) { e === i && s.eventsListeners[a].splice(t, 1) }) }), s }, s.prototype.emit = function () { for (var e = [], t = arguments.length; t--;)e[t] = arguments[t]; var a, i, s, r = this; return r.eventsListeners && ("string" == typeof e[0] || Array.isArray(e[0]) ? (a = e[0], i = e.slice(1, e.length), s = r) : (a = e[0].events, i = e[0].data, s = e[0].context || r), (Array.isArray(a) ? a : a.split(" ")).forEach(function (e) { if (r.eventsListeners && r.eventsListeners[e]) { var t = []; r.eventsListeners[e].forEach(function (e) { t.push(e) }), t.forEach(function (e) { e.apply(s, i) }) } })), r }, s.prototype.useModulesParams = function (a) { var i = this; i.modules && Object.keys(i.modules).forEach(function (e) { var t = i.modules[e]; t.params && X.extend(a, t.params) }) }, s.prototype.useModules = function (i) { void 0 === i && (i = {}); var s = this; s.modules && Object.keys(s.modules).forEach(function (e) { var a = s.modules[e], t = i[e] || {}; a.instance && Object.keys(a.instance).forEach(function (e) { var t = a.instance[e]; s[e] = "function" == typeof t ? t.bind(s) : t }), a.on && s.on && Object.keys(a.on).forEach(function (e) { s.on(e, a.on[e]) }), a.create && a.create.bind(s)(t) }) }, n.components.set = function (e) { this.use && this.use(e) }, s.installModule = function (t) { for (var e = [], a = arguments.length - 1; 0 < a--;)e[a] = arguments[a + 1]; var i = this; i.prototype.modules || (i.prototype.modules = {}); var s = t.name || Object.keys(i.prototype.modules).length + "_" + X.now(); return (i.prototype.modules[s] = t).proto && Object.keys(t.proto).forEach(function (e) { i.prototype[e] = t.proto[e] }), t.static && Object.keys(t.static).forEach(function (e) { i[e] = t.static[e] }), t.install && t.install.apply(i, e), i }, s.use = function (e) { for (var t = [], a = arguments.length - 1; 0 < a--;)t[a] = arguments[a + 1]; var i = this; return Array.isArray(e) ? (e.forEach(function (e) { return i.installModule(e) }), i) : i.installModule.apply(i, [e].concat(t)) }, Object.defineProperties(s, n); var o = { updateSize: function () { var e, t, a = this, i = a.$el; e = void 0 !== a.params.width ? a.params.width : i[0].clientWidth, t = void 0 !== a.params.height ? a.params.height : i[0].clientHeight, 0 === e && a.isHorizontal() || 0 === t && a.isVertical() || (e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10), t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10), X.extend(a, { width: e, height: t, size: a.isHorizontal() ? e : t })) }, updateSlides: function () { var e = this, t = e.params, a = e.$wrapperEl, i = e.size, s = e.rtlTranslate, r = e.wrongRTL, n = e.virtual && t.virtual.enabled, o = n ? e.virtual.slides.length : e.slides.length, l = a.children("." + e.params.slideClass), d = n ? e.virtual.slides.length : l.length, p = [], c = [], u = [], h = t.slidesOffsetBefore; "function" == typeof h && (h = t.slidesOffsetBefore.call(e)); var v = t.slidesOffsetAfter; "function" == typeof v && (v = t.slidesOffsetAfter.call(e)); var f = e.snapGrid.length, m = e.snapGrid.length, g = t.spaceBetween, b = -h, w = 0, y = 0; if (void 0 !== i) { var x, E; "string" == typeof g && 0 <= g.indexOf("%") && (g = parseFloat(g.replace("%", "")) / 100 * i), e.virtualSize = -g, s ? l.css({ marginLeft: "", marginTop: "" }) : l.css({ marginRight: "", marginBottom: "" }), 1 < t.slidesPerColumn && (x = Math.floor(d / t.slidesPerColumn) === d / e.params.slidesPerColumn ? d : Math.ceil(d / t.slidesPerColumn) * t.slidesPerColumn, "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (x = Math.max(x, t.slidesPerView * t.slidesPerColumn))); for (var T, S = t.slidesPerColumn, C = x / S, M = C - (t.slidesPerColumn * C - d), z = 0; z < d; z += 1) { E = 0; var k = l.eq(z); if (1 < t.slidesPerColumn) { var P = void 0, $ = void 0, L = void 0; "column" === t.slidesPerColumnFill ? (L = z - ($ = Math.floor(z / S)) * S, (M < $ || $ === M && L === S - 1) && S <= (L += 1) && (L = 0, $ += 1), P = $ + L * x / S, k.css({ "-webkit-box-ordinal-group": P, "-moz-box-ordinal-group": P, "-ms-flex-order": P, "-webkit-order": P, order: P })) : $ = z - (L = Math.floor(z / C)) * C, k.css("margin-" + (e.isHorizontal() ? "top" : "left"), 0 !== L && t.spaceBetween && t.spaceBetween + "px").attr("data-swiper-column", $).attr("data-swiper-row", L) } if ("none" !== k.css("display")) { if ("auto" === t.slidesPerView) { var I = B.getComputedStyle(k[0], null), D = k[0].style.transform, O = k[0].style.webkitTransform; D && (k[0].style.transform = "none"), O && (k[0].style.webkitTransform = "none"), E = e.isHorizontal() ? k[0].getBoundingClientRect().width + parseFloat(I.getPropertyValue("margin-left")) + parseFloat(I.getPropertyValue("margin-right")) : k[0].getBoundingClientRect().height + parseFloat(I.getPropertyValue("margin-top")) + parseFloat(I.getPropertyValue("margin-bottom")), D && (k[0].style.transform = D), O && (k[0].style.webkitTransform = O), t.roundLengths && (E = Math.floor(E)) } else E = (i - (t.slidesPerView - 1) * g) / t.slidesPerView, t.roundLengths && (E = Math.floor(E)), l[z] && (e.isHorizontal() ? l[z].style.width = E + "px" : l[z].style.height = E + "px"); l[z] && (l[z].swiperSlideSize = E), u.push(E), t.centeredSlides ? (b = b + E / 2 + w / 2 + g, 0 === w && 0 !== z && (b = b - i / 2 - g), 0 === z && (b = b - i / 2 - g), Math.abs(b) < .001 && (b = 0), t.roundLengths && (b = Math.floor(b)), y % t.slidesPerGroup == 0 && p.push(b), c.push(b)) : (t.roundLengths && (b = Math.floor(b)), y % t.slidesPerGroup == 0 && p.push(b), c.push(b), b = b + E + g), e.virtualSize += E + g, w = E, y += 1 } } if (e.virtualSize = Math.max(e.virtualSize, i) + v, s && r && ("slide" === t.effect || "coverflow" === t.effect) && a.css({ width: e.virtualSize + t.spaceBetween + "px" }), Y.flexbox && !t.setWrapperSize || (e.isHorizontal() ? a.css({ width: e.virtualSize + t.spaceBetween + "px" }) : a.css({ height: e.virtualSize + t.spaceBetween + "px" })), 1 < t.slidesPerColumn && (e.virtualSize = (E + t.spaceBetween) * x, e.virtualSize = Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween, e.isHorizontal() ? a.css({ width: e.virtualSize + t.spaceBetween + "px" }) : a.css({ height: e.virtualSize + t.spaceBetween + "px" }), t.centeredSlides)) { T = []; for (var A = 0; A < p.length; A += 1) { var H = p[A]; t.roundLengths && (H = Math.floor(H)), p[A] < e.virtualSize + p[0] && T.push(H) } p = T } if (!t.centeredSlides) { T = []; for (var G = 0; G < p.length; G += 1) { var N = p[G]; t.roundLengths && (N = Math.floor(N)), p[G] <= e.virtualSize - i && T.push(N) } p = T, 1 < Math.floor(e.virtualSize - i) - Math.floor(p[p.length - 1]) && p.push(e.virtualSize - i) } 0 === p.length && (p = [0]), 0 !== t.spaceBetween && (e.isHorizontal() ? s ? l.css({ marginLeft: g + "px" }) : l.css({ marginRight: g + "px" }) : l.css({ marginBottom: g + "px" })), X.extend(e, { slides: l, snapGrid: p, slidesGrid: c, slidesSizesGrid: u }), d !== o && e.emit("slidesLengthChange"), p.length !== f && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), c.length !== m && e.emit("slidesGridLengthChange"), (t.watchSlidesProgress || t.watchSlidesVisibility) && e.updateSlidesOffset() } }, updateAutoHeight: function (e) { var t, a = this, i = [], s = 0; if ("number" == typeof e ? a.setTransition(e) : !0 === e && a.setTransition(a.params.speed), "auto" !== a.params.slidesPerView && 1 < a.params.slidesPerView) for (t = 0; t < Math.ceil(a.params.slidesPerView); t += 1) { var r = a.activeIndex + t; if (r > a.slides.length) break; i.push(a.slides.eq(r)[0]) } else i.push(a.slides.eq(a.activeIndex)[0]); for (t = 0; t < i.length; t += 1)if (void 0 !== i[t]) { var n = i[t].offsetHeight; s = s < n ? n : s } s && a.$wrapperEl.css("height", s + "px") }, updateSlidesOffset: function () { for (var e = this.slides, t = 0; t < e.length; t += 1)e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop }, updateSlidesProgress: function (e) { void 0 === e && (e = this && this.translate || 0); var t = this, a = t.params, i = t.slides, s = t.rtlTranslate; if (0 !== i.length) { void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset(); var r = -e; s && (r = e), i.removeClass(a.slideVisibleClass); for (var n = 0; n < i.length; n += 1) { var o = i[n], l = (r + (a.centeredSlides ? t.minTranslate() : 0) - o.swiperSlideOffset) / (o.swiperSlideSize + a.spaceBetween); if (a.watchSlidesVisibility) { var d = -(r - o.swiperSlideOffset), p = d + t.slidesSizesGrid[n]; (0 <= d && d < t.size || 0 < p && p <= t.size || d <= 0 && p >= t.size) && i.eq(n).addClass(a.slideVisibleClass) } o.progress = s ? -l : l } } }, updateProgress: function (e) { void 0 === e && (e = this && this.translate || 0); var t = this, a = t.params, i = t.maxTranslate() - t.minTranslate(), s = t.progress, r = t.isBeginning, n = t.isEnd, o = r, l = n; 0 === i ? n = r = !(s = 0) : (r = (s = (e - t.minTranslate()) / i) <= 0, n = 1 <= s), X.extend(t, { progress: s, isBeginning: r, isEnd: n }), (a.watchSlidesProgress || a.watchSlidesVisibility) && t.updateSlidesProgress(e), r && !o && t.emit("reachBeginning toEdge"), n && !l && t.emit("reachEnd toEdge"), (o && !r || l && !n) && t.emit("fromEdge"), t.emit("progress", s) }, updateSlidesClasses: function () { var e, t = this, a = t.slides, i = t.params, s = t.$wrapperEl, r = t.activeIndex, n = t.realIndex, o = t.virtual && i.virtual.enabled; a.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (e = o ? t.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + r + '"]') : a.eq(r)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + n + '"]').addClass(i.slideDuplicateActiveClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + n + '"]').addClass(i.slideDuplicateActiveClass)); var l = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass); i.loop && 0 === l.length && (l = a.eq(0)).addClass(i.slideNextClass); var d = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass); i.loop && 0 === d.length && (d = a.eq(-1)).addClass(i.slidePrevClass), i.loop && (l.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), d.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass)) }, updateActiveIndex: function (e) { var t, a = this, i = a.rtlTranslate ? a.translate : -a.translate, s = a.slidesGrid, r = a.snapGrid, n = a.params, o = a.activeIndex, l = a.realIndex, d = a.snapIndex, p = e; if (void 0 === p) { for (var c = 0; c < s.length; c += 1)void 0 !== s[c + 1] ? i >= s[c] && i < s[c + 1] - (s[c + 1] - s[c]) / 2 ? p = c : i >= s[c] && i < s[c + 1] && (p = c + 1) : i >= s[c] && (p = c); n.normalizeSlideIndex && (p < 0 || void 0 === p) && (p = 0) } if ((t = 0 <= r.indexOf(i) ? r.indexOf(i) : Math.floor(p / n.slidesPerGroup)) >= r.length && (t = r.length - 1), p !== o) { var u = parseInt(a.slides.eq(p).attr("data-swiper-slide-index") || p, 10); X.extend(a, { snapIndex: t, realIndex: u, previousIndex: o, activeIndex: p }), a.emit("activeIndexChange"), a.emit("snapIndexChange"), l !== u && a.emit("realIndexChange"), a.emit("slideChange") } else t !== d && (a.snapIndex = t, a.emit("snapIndexChange")) }, updateClickedSlide: function (e) { var t = this, a = t.params, i = L(e.target).closest("." + a.slideClass)[0], s = !1; if (i) for (var r = 0; r < t.slides.length; r += 1)t.slides[r] === i && (s = !0); if (!i || !s) return t.clickedSlide = void 0, void (t.clickedIndex = void 0); t.clickedSlide = i, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(L(i).attr("data-swiper-slide-index"), 10) : t.clickedIndex = L(i).index(), a.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide() } }; var d = { getTranslate: function (e) { void 0 === e && (e = this.isHorizontal() ? "x" : "y"); var t = this.params, a = this.rtlTranslate, i = this.translate, s = this.$wrapperEl; if (t.virtualTranslate) return a ? -i : i; var r = X.getTranslate(s[0], e); return a && (r = -r), r || 0 }, setTranslate: function (e, t) { var a = this, i = a.rtlTranslate, s = a.params, r = a.$wrapperEl, n = a.progress, o = 0, l = 0; a.isHorizontal() ? o = i ? -e : e : l = e, s.roundLengths && (o = Math.floor(o), l = Math.floor(l)), s.virtualTranslate || (Y.transforms3d ? r.transform("translate3d(" + o + "px, " + l + "px, 0px)") : r.transform("translate(" + o + "px, " + l + "px)")), a.previousTranslate = a.translate, a.translate = a.isHorizontal() ? o : l; var d = a.maxTranslate() - a.minTranslate(); (0 === d ? 0 : (e - a.minTranslate()) / d) !== n && a.updateProgress(e), a.emit("setTranslate", a.translate, t) }, minTranslate: function () { return -this.snapGrid[0] }, maxTranslate: function () { return -this.snapGrid[this.snapGrid.length - 1] } }; var p = { setTransition: function (e, t) { this.$wrapperEl.transition(e), this.emit("setTransition", e, t) }, transitionStart: function (e, t) { void 0 === e && (e = !0); var a = this, i = a.activeIndex, s = a.params, r = a.previousIndex; s.autoHeight && a.updateAutoHeight(); var n = t; if (n || (n = r < i ? "next" : i < r ? "prev" : "reset"), a.emit("transitionStart"), e && i !== r) { if ("reset" === n) return void a.emit("slideResetTransitionStart"); a.emit("slideChangeTransitionStart"), "next" === n ? a.emit("slideNextTransitionStart") : a.emit("slidePrevTransitionStart") } }, transitionEnd: function (e, t) { void 0 === e && (e = !0); var a = this, i = a.activeIndex, s = a.previousIndex; a.animating = !1, a.setTransition(0); var r = t; if (r || (r = s < i ? "next" : i < s ? "prev" : "reset"), a.emit("transitionEnd"), e && i !== s) { if ("reset" === r) return void a.emit("slideResetTransitionEnd"); a.emit("slideChangeTransitionEnd"), "next" === r ? a.emit("slideNextTransitionEnd") : a.emit("slidePrevTransitionEnd") } } }; var c = { slideTo: function (e, t, a, i) { void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === a && (a = !0); var s = this, r = e; r < 0 && (r = 0); var n = s.params, o = s.snapGrid, l = s.slidesGrid, d = s.previousIndex, p = s.activeIndex, c = s.rtlTranslate; if (s.animating && n.preventInteractionOnTransition) return !1; var u = Math.floor(r / n.slidesPerGroup); u >= o.length && (u = o.length - 1), (p || n.initialSlide || 0) === (d || 0) && a && s.emit("beforeSlideChangeStart"); var h, v = -o[u]; if (s.updateProgress(v), n.normalizeSlideIndex) for (var f = 0; f < l.length; f += 1)-Math.floor(100 * v) >= Math.floor(100 * l[f]) && (r = f); if (s.initialized && r !== p) { if (!s.allowSlideNext && v < s.translate && v < s.minTranslate()) return !1; if (!s.allowSlidePrev && v > s.translate && v > s.maxTranslate() && (p || 0) !== r) return !1 } return h = p < r ? "next" : r < p ? "prev" : "reset", c && -v === s.translate || !c && v === s.translate ? (s.updateActiveIndex(r), n.autoHeight && s.updateAutoHeight(), s.updateSlidesClasses(), "slide" !== n.effect && s.setTranslate(v), "reset" !== h && (s.transitionStart(a, h), s.transitionEnd(a, h)), !1) : (0 !== t && Y.transition ? (s.setTransition(t), s.setTranslate(v), s.updateActiveIndex(r), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, i), s.transitionStart(a, h), s.animating || (s.animating = !0, s.onSlideToWrapperTransitionEnd || (s.onSlideToWrapperTransitionEnd = function (e) { s && !s.destroyed && e.target === this && (s.$wrapperEl[0].removeEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.$wrapperEl[0].removeEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd), s.onSlideToWrapperTransitionEnd = null, delete s.onSlideToWrapperTransitionEnd, s.transitionEnd(a, h)) }), s.$wrapperEl[0].addEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.$wrapperEl[0].addEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd))) : (s.setTransition(0), s.setTranslate(v), s.updateActiveIndex(r), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, i), s.transitionStart(a, h), s.transitionEnd(a, h)), !0) }, slideToLoop: function (e, t, a, i) { void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === a && (a = !0); var s = e; return this.params.loop && (s += this.loopedSlides), this.slideTo(s, t, a, i) }, slideNext: function (e, t, a) { void 0 === e && (e = this.params.speed), void 0 === t && (t = !0); var i = this, s = i.params, r = i.animating; return s.loop ? !r && (i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft, i.slideTo(i.activeIndex + s.slidesPerGroup, e, t, a)) : i.slideTo(i.activeIndex + s.slidesPerGroup, e, t, a) }, slidePrev: function (e, t, a) { void 0 === e && (e = this.params.speed), void 0 === t && (t = !0); var i = this, s = i.params, r = i.animating, n = i.snapGrid, o = i.slidesGrid, l = i.rtlTranslate; if (s.loop) { if (r) return !1; i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft } function d(e) { return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e) } var p, c = d(l ? i.translate : -i.translate), u = n.map(function (e) { return d(e) }), h = (o.map(function (e) { return d(e) }), n[u.indexOf(c)], n[u.indexOf(c) - 1]); return void 0 !== h && (p = o.indexOf(h)) < 0 && (p = i.activeIndex - 1), i.slideTo(p, e, t, a) }, slideReset: function (e, t, a) { return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, a) }, slideToClosest: function (e, t, a) { void 0 === e && (e = this.params.speed), void 0 === t && (t = !0); var i = this, s = i.activeIndex, r = Math.floor(s / i.params.slidesPerGroup); if (r < i.snapGrid.length - 1) { var n = i.rtlTranslate ? i.translate : -i.translate, o = i.snapGrid[r]; (i.snapGrid[r + 1] - o) / 2 < n - o && (s = i.params.slidesPerGroup) } return i.slideTo(s, e, t, a) }, slideToClickedSlide: function () { var e, t = this, a = t.params, i = t.$wrapperEl, s = "auto" === a.slidesPerView ? t.slidesPerViewDynamic() : a.slidesPerView, r = t.clickedIndex; if (a.loop) { if (t.animating) return; e = parseInt(L(t.clickedSlide).attr("data-swiper-slide-index"), 10), a.centeredSlides ? r < t.loopedSlides - s / 2 || r > t.slides.length - t.loopedSlides + s / 2 ? (t.loopFix(), r = i.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + a.slideDuplicateClass + ")").eq(0).index(), X.nextTick(function () { t.slideTo(r) })) : t.slideTo(r) : r > t.slides.length - s ? (t.loopFix(), r = i.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + a.slideDuplicateClass + ")").eq(0).index(), X.nextTick(function () { t.slideTo(r) })) : t.slideTo(r) } else t.slideTo(r) } }; var u = { loopCreate: function () { var i = this, e = i.params, t = i.$wrapperEl; t.children("." + e.slideClass + "." + e.slideDuplicateClass).remove(); var s = t.children("." + e.slideClass); if (e.loopFillGroupWithBlank) { var a = e.slidesPerGroup - s.length % e.slidesPerGroup; if (a !== e.slidesPerGroup) { for (var r = 0; r < a; r += 1) { var n = L(f.createElement("div")).addClass(e.slideClass + " " + e.slideBlankClass); t.append(n) } s = t.children("." + e.slideClass) } } "auto" !== e.slidesPerView || e.loopedSlides || (e.loopedSlides = s.length), i.loopedSlides = parseInt(e.loopedSlides || e.slidesPerView, 10), i.loopedSlides += e.loopAdditionalSlides, i.loopedSlides > s.length && (i.loopedSlides = s.length); var o = [], l = []; s.each(function (e, t) { var a = L(t); e < i.loopedSlides && l.push(t), e < s.length && e >= s.length - i.loopedSlides && o.push(t), a.attr("data-swiper-slide-index", e) }); for (var d = 0; d < l.length; d += 1)t.append(L(l[d].cloneNode(!0)).addClass(e.slideDuplicateClass)); for (var p = o.length - 1; 0 <= p; p -= 1)t.prepend(L(o[p].cloneNode(!0)).addClass(e.slideDuplicateClass)) }, loopFix: function () { var e, t = this, a = t.params, i = t.activeIndex, s = t.slides, r = t.loopedSlides, n = t.allowSlidePrev, o = t.allowSlideNext, l = t.snapGrid, d = t.rtlTranslate; t.allowSlidePrev = !0, t.allowSlideNext = !0; var p = -l[i] - t.getTranslate(); i < r ? (e = s.length - 3 * r + i, e += r, t.slideTo(e, 0, !1, !0) && 0 !== p && t.setTranslate((d ? -t.translate : t.translate) - p)) : ("auto" === a.slidesPerView && 2 * r <= i || i >= s.length - r) && (e = -s.length + i + r, e += r, t.slideTo(e, 0, !1, !0) && 0 !== p && t.setTranslate((d ? -t.translate : t.translate) - p)); t.allowSlidePrev = n, t.allowSlideNext = o }, loopDestroy: function () { var e = this.$wrapperEl, t = this.params, a = this.slides; e.children("." + t.slideClass + "." + t.slideDuplicateClass).remove(), a.removeAttr("data-swiper-slide-index") } }; var h = { setGrabCursor: function (e) { if (!(Y.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked)) { var t = this.el; t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab" } }, unsetGrabCursor: function () { Y.touch || this.params.watchOverflow && this.isLocked || (this.el.style.cursor = "") } }; var v = { appendSlide: function (e) { var t = this, a = t.$wrapperEl, i = t.params; if (i.loop && t.loopDestroy(), "object" == typeof e && "length" in e) for (var s = 0; s < e.length; s += 1)e[s] && a.append(e[s]); else a.append(e); i.loop && t.loopCreate(), i.observer && Y.observer || t.update() }, prependSlide: function (e) { var t = this, a = t.params, i = t.$wrapperEl, s = t.activeIndex; a.loop && t.loopDestroy(); var r = s + 1; if ("object" == typeof e && "length" in e) { for (var n = 0; n < e.length; n += 1)e[n] && i.prepend(e[n]); r = s + e.length } else i.prepend(e); a.loop && t.loopCreate(), a.observer && Y.observer || t.update(), t.slideTo(r, 0, !1) }, addSlide: function (e, t) { var a = this, i = a.$wrapperEl, s = a.params, r = a.activeIndex; s.loop && (r -= a.loopedSlides, a.loopDestroy(), a.slides = i.children("." + s.slideClass)); var n = a.slides.length; if (e <= 0) a.prependSlide(t); else if (n <= e) a.appendSlide(t); else { for (var o = e < r ? r + 1 : r, l = [], d = n - 1; e <= d; d -= 1) { var p = a.slides.eq(d); p.remove(), l.unshift(p) } if ("object" == typeof t && "length" in t) { for (var c = 0; c < t.length; c += 1)t[c] && i.append(t[c]); o = e < r ? r + t.length : r } else i.append(t); for (var u = 0; u < l.length; u += 1)i.append(l[u]); s.loop && a.loopCreate(), s.observer && Y.observer || a.update(), s.loop ? a.slideTo(o + a.loopedSlides, 0, !1) : a.slideTo(o, 0, !1) } }, removeSlide: function (e) { var t = this, a = t.params, i = t.$wrapperEl, s = t.activeIndex; a.loop && (s -= t.loopedSlides, t.loopDestroy(), t.slides = i.children("." + a.slideClass)); var r, n = s; if ("object" == typeof e && "length" in e) { for (var o = 0; o < e.length; o += 1)r = e[o], t.slides[r] && t.slides.eq(r).remove(), r < n && (n -= 1); n = Math.max(n, 0) } else r = e, t.slides[r] && t.slides.eq(r).remove(), r < n && (n -= 1), n = Math.max(n, 0); a.loop && t.loopCreate(), a.observer && Y.observer || t.update(), a.loop ? t.slideTo(n + t.loopedSlides, 0, !1) : t.slideTo(n, 0, !1) }, removeAllSlides: function () { for (var e = [], t = 0; t < this.slides.length; t += 1)e.push(t); this.removeSlide(e) } }, m = function () { var e = B.navigator.userAgent, t = { ios: !1, android: !1, androidChrome: !1, desktop: !1, windows: !1, iphone: !1, ipod: !1, ipad: !1, cordova: B.cordova || B.phonegap, phonegap: B.cordova || B.phonegap }, a = e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/), i = e.match(/(Android);?[\s\/]+([\d.]+)?/), s = e.match(/(iPad).*OS\s([\d_]+)/), r = e.match(/(iPod)(.*OS\s([\d_]+))?/), n = !s && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/); if (a && (t.os = "windows", t.osVersion = a[2], t.windows = !0), i && !a && (t.os = "android", t.osVersion = i[2], t.android = !0, t.androidChrome = 0 <= e.toLowerCase().indexOf("chrome")), (s || n || r) && (t.os = "ios", t.ios = !0), n && !r && (t.osVersion = n[2].replace(/_/g, "."), t.iphone = !0), s && (t.osVersion = s[2].replace(/_/g, "."), t.ipad = !0), r && (t.osVersion = r[3] ? r[3].replace(/_/g, ".") : null, t.iphone = !0), t.ios && t.osVersion && 0 <= e.indexOf("Version/") && "10" === t.osVersion.split(".")[0] && (t.osVersion = e.toLowerCase().split("version/")[1].split(" ")[0]), t.desktop = !(t.os || t.android || t.webView), t.webView = (n || s || r) && e.match(/.*AppleWebKit(?!.*Safari)/i), t.os && "ios" === t.os) { var o = t.osVersion.split("."), l = f.querySelector('meta[name="viewport"]'); t.minimalUi = !t.webView && (r || n) && (1 * o[0] == 7 ? 1 <= 1 * o[1] : 7 < 1 * o[0]) && l && 0 <= l.getAttribute("content").indexOf("minimal-ui") } return t.pixelRatio = B.devicePixelRatio || 1, t }(); function g() { var e = this, t = e.params, a = e.el; if (!a || 0 !== a.offsetWidth) { t.breakpoints && e.setBreakpoint(); var i = e.allowSlideNext, s = e.allowSlidePrev, r = e.snapGrid; if (e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), t.freeMode) { var n = Math.min(Math.max(e.translate, e.maxTranslate()), e.minTranslate()); e.setTranslate(n), e.updateActiveIndex(), e.updateSlidesClasses(), t.autoHeight && e.updateAutoHeight() } else e.updateSlidesClasses(), ("auto" === t.slidesPerView || 1 < t.slidesPerView) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0); e.allowSlidePrev = s, e.allowSlideNext = i, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow() } } var b = { attachEvents: function () { var e = this, t = e.params, a = e.touchEvents, i = e.el, s = e.wrapperEl; e.onTouchStart = function (e) { var t = this, a = t.touchEventsData, i = t.params, s = t.touches; if (!t.animating || !i.preventInteractionOnTransition) { var r = e; if (r.originalEvent && (r = r.originalEvent), a.isTouchEvent = "touchstart" === r.type, (a.isTouchEvent || !("which" in r) || 3 !== r.which) && (!a.isTouched || !a.isMoved)) if (i.noSwiping && L(r.target).closest(i.noSwipingSelector ? i.noSwipingSelector : "." + i.noSwipingClass)[0]) t.allowClick = !0; else if (!i.swipeHandler || L(r).closest(i.swipeHandler)[0]) { s.currentX = "touchstart" === r.type ? r.targetTouches[0].pageX : r.pageX, s.currentY = "touchstart" === r.type ? r.targetTouches[0].pageY : r.pageY; var n = s.currentX, o = s.currentY, l = i.edgeSwipeDetection || i.iOSEdgeSwipeDetection, d = i.edgeSwipeThreshold || i.iOSEdgeSwipeThreshold; if (!l || !(n <= d || n >= B.screen.width - d)) { if (X.extend(a, { isTouched: !0, isMoved: !1, allowTouchCallbacks: !0, isScrolling: void 0, startMoving: void 0 }), s.startX = n, s.startY = o, a.touchStartTime = X.now(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, 0 < i.threshold && (a.allowThresholdMove = !1), "touchstart" !== r.type) { var p = !0; L(r.target).is(a.formElements) && (p = !1), f.activeElement && L(f.activeElement).is(a.formElements) && f.activeElement !== r.target && f.activeElement.blur(), p && t.allowTouchMove && r.preventDefault() } t.emit("touchStart", r) } } } }.bind(e), e.onTouchMove = function (e) { var t = this, a = t.touchEventsData, i = t.params, s = t.touches, r = t.rtlTranslate, n = e; if (n.originalEvent && (n = n.originalEvent), a.isTouched) { if (!a.isTouchEvent || "mousemove" !== n.type) { var o = "touchmove" === n.type ? n.targetTouches[0].pageX : n.pageX, l = "touchmove" === n.type ? n.targetTouches[0].pageY : n.pageY; if (n.preventedByNestedSwiper) return s.startX = o, void (s.startY = l); if (!t.allowTouchMove) return t.allowClick = !1, void (a.isTouched && (X.extend(s, { startX: o, startY: l, currentX: o, currentY: l }), a.touchStartTime = X.now())); if (a.isTouchEvent && i.touchReleaseOnEdges && !i.loop) if (t.isVertical()) { if (l < s.startY && t.translate <= t.maxTranslate() || l > s.startY && t.translate >= t.minTranslate()) return a.isTouched = !1, void (a.isMoved = !1) } else if (o < s.startX && t.translate <= t.maxTranslate() || o > s.startX && t.translate >= t.minTranslate()) return; if (a.isTouchEvent && f.activeElement && n.target === f.activeElement && L(n.target).is(a.formElements)) return a.isMoved = !0, void (t.allowClick = !1); if (a.allowTouchCallbacks && t.emit("touchMove", n), !(n.targetTouches && 1 < n.targetTouches.length)) { s.currentX = o, s.currentY = l; var d, p = s.currentX - s.startX, c = s.currentY - s.startY; if (!(t.params.threshold && Math.sqrt(Math.pow(p, 2) + Math.pow(c, 2)) < t.params.threshold)) if (void 0 === a.isScrolling && (t.isHorizontal() && s.currentY === s.startY || t.isVertical() && s.currentX === s.startX ? a.isScrolling = !1 : 25 <= p * p + c * c && (d = 180 * Math.atan2(Math.abs(c), Math.abs(p)) / Math.PI, a.isScrolling = t.isHorizontal() ? d > i.touchAngle : 90 - d > i.touchAngle)), a.isScrolling && t.emit("touchMoveOpposite", n), void 0 === a.startMoving && (s.currentX === s.startX && s.currentY === s.startY || (a.startMoving = !0)), a.isScrolling) a.isTouched = !1; else if (a.startMoving) { t.allowClick = !1, n.preventDefault(), i.touchMoveStopPropagation && !i.nested && n.stopPropagation(), a.isMoved || (i.loop && t.loopFix(), a.startTranslate = t.getTranslate(), t.setTransition(0), t.animating && t.$wrapperEl.trigger("webkitTransitionEnd transitionend"), a.allowMomentumBounce = !1, !i.grabCursor || !0 !== t.allowSlideNext && !0 !== t.allowSlidePrev || t.setGrabCursor(!0), t.emit("sliderFirstMove", n)), t.emit("sliderMove", n), a.isMoved = !0; var u = t.isHorizontal() ? p : c; s.diff = u, u *= i.touchRatio, r && (u = -u), t.swipeDirection = 0 < u ? "prev" : "next", a.currentTranslate = u + a.startTranslate; var h = !0, v = i.resistanceRatio; if (i.touchReleaseOnEdges && (v = 0), 0 < u && a.currentTranslate > t.minTranslate() ? (h = !1, i.resistance && (a.currentTranslate = t.minTranslate() - 1 + Math.pow(-t.minTranslate() + a.startTranslate + u, v))) : u < 0 && a.currentTranslate < t.maxTranslate() && (h = !1, i.resistance && (a.currentTranslate = t.maxTranslate() + 1 - Math.pow(t.maxTranslate() - a.startTranslate - u, v))), h && (n.preventedByNestedSwiper = !0), !t.allowSlideNext && "next" === t.swipeDirection && a.currentTranslate < a.startTranslate && (a.currentTranslate = a.startTranslate), !t.allowSlidePrev && "prev" === t.swipeDirection && a.currentTranslate > a.startTranslate && (a.currentTranslate = a.startTranslate), 0 < i.threshold) { if (!(Math.abs(u) > i.threshold || a.allowThresholdMove)) return void (a.currentTranslate = a.startTranslate); if (!a.allowThresholdMove) return a.allowThresholdMove = !0, s.startX = s.currentX, s.startY = s.currentY, a.currentTranslate = a.startTranslate, void (s.diff = t.isHorizontal() ? s.currentX - s.startX : s.currentY - s.startY) } i.followFinger && ((i.freeMode || i.watchSlidesProgress || i.watchSlidesVisibility) && (t.updateActiveIndex(), t.updateSlidesClasses()), i.freeMode && (0 === a.velocities.length && a.velocities.push({ position: s[t.isHorizontal() ? "startX" : "startY"], time: a.touchStartTime }), a.velocities.push({ position: s[t.isHorizontal() ? "currentX" : "currentY"], time: X.now() })), t.updateProgress(a.currentTranslate), t.setTranslate(a.currentTranslate)) } } } } else a.startMoving && a.isScrolling && t.emit("touchMoveOpposite", n) }.bind(e), e.onTouchEnd = function (e) { var t = this, a = t.touchEventsData, i = t.params, s = t.touches, r = t.rtlTranslate, n = t.$wrapperEl, o = t.slidesGrid, l = t.snapGrid, d = e; if (d.originalEvent && (d = d.originalEvent), a.allowTouchCallbacks && t.emit("touchEnd", d), a.allowTouchCallbacks = !1, !a.isTouched) return a.isMoved && i.grabCursor && t.setGrabCursor(!1), a.isMoved = !1, void (a.startMoving = !1); i.grabCursor && a.isMoved && a.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1); var p, c = X.now(), u = c - a.touchStartTime; if (t.allowClick && (t.updateClickedSlide(d), t.emit("tap", d), u < 300 && 300 < c - a.lastClickTime && (a.clickTimeout && clearTimeout(a.clickTimeout), a.clickTimeout = X.nextTick(function () { t && !t.destroyed && t.emit("click", d) }, 300)), u < 300 && c - a.lastClickTime < 300 && (a.clickTimeout && clearTimeout(a.clickTimeout), t.emit("doubleTap", d))), a.lastClickTime = X.now(), X.nextTick(function () { t.destroyed || (t.allowClick = !0) }), !a.isTouched || !a.isMoved || !t.swipeDirection || 0 === s.diff || a.currentTranslate === a.startTranslate) return a.isTouched = !1, a.isMoved = !1, void (a.startMoving = !1); if (a.isTouched = !1, a.isMoved = !1, a.startMoving = !1, p = i.followFinger ? r ? t.translate : -t.translate : -a.currentTranslate, i.freeMode) { if (p < -t.minTranslate()) return void t.slideTo(t.activeIndex); if (p > -t.maxTranslate()) return void (t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1)); if (i.freeModeMomentum) { if (1 < a.velocities.length) { var h = a.velocities.pop(), v = a.velocities.pop(), f = h.position - v.position, m = h.time - v.time; t.velocity = f / m, t.velocity /= 2, Math.abs(t.velocity) < i.freeModeMinimumVelocity && (t.velocity = 0), (150 < m || 300 < X.now() - h.time) && (t.velocity = 0) } else t.velocity = 0; t.velocity *= i.freeModeMomentumVelocityRatio, a.velocities.length = 0; var g = 1e3 * i.freeModeMomentumRatio, b = t.velocity * g, w = t.translate + b; r && (w = -w); var y, x, E = !1, T = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio; if (w < t.maxTranslate()) i.freeModeMomentumBounce ? (w + t.maxTranslate() < -T && (w = t.maxTranslate() - T), y = t.maxTranslate(), E = !0, a.allowMomentumBounce = !0) : w = t.maxTranslate(), i.loop && i.centeredSlides && (x = !0); else if (w > t.minTranslate()) i.freeModeMomentumBounce ? (w - t.minTranslate() > T && (w = t.minTranslate() + T), y = t.minTranslate(), E = !0, a.allowMomentumBounce = !0) : w = t.minTranslate(), i.loop && i.centeredSlides && (x = !0); else if (i.freeModeSticky) { for (var S, C = 0; C < l.length; C += 1)if (l[C] > -w) { S = C; break } w = -(w = Math.abs(l[S] - w) < Math.abs(l[S - 1] - w) || "next" === t.swipeDirection ? l[S] : l[S - 1]) } if (x && t.once("transitionEnd", function () { t.loopFix() }), 0 !== t.velocity) g = r ? Math.abs((-w - t.translate) / t.velocity) : Math.abs((w - t.translate) / t.velocity); else if (i.freeModeSticky) return void t.slideToClosest(); i.freeModeMomentumBounce && E ? (t.updateProgress(y), t.setTransition(g), t.setTranslate(w), t.transitionStart(!0, t.swipeDirection), t.animating = !0, n.transitionEnd(function () { t && !t.destroyed && a.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(i.speed), t.setTranslate(y), n.transitionEnd(function () { t && !t.destroyed && t.transitionEnd() })) })) : t.velocity ? (t.updateProgress(w), t.setTransition(g), t.setTranslate(w), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, n.transitionEnd(function () { t && !t.destroyed && t.transitionEnd() }))) : t.updateProgress(w), t.updateActiveIndex(), t.updateSlidesClasses() } else if (i.freeModeSticky) return void t.slideToClosest(); (!i.freeModeMomentum || u >= i.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses()) } else { for (var M = 0, z = t.slidesSizesGrid[0], k = 0; k < o.length; k += i.slidesPerGroup)void 0 !== o[k + i.slidesPerGroup] ? p >= o[k] && p < o[k + i.slidesPerGroup] && (z = o[(M = k) + i.slidesPerGroup] - o[k]) : p >= o[k] && (M = k, z = o[o.length - 1] - o[o.length - 2]); var P = (p - o[M]) / z; if (u > i.longSwipesMs) { if (!i.longSwipes) return void t.slideTo(t.activeIndex); "next" === t.swipeDirection && (P >= i.longSwipesRatio ? t.slideTo(M + i.slidesPerGroup) : t.slideTo(M)), "prev" === t.swipeDirection && (P > 1 - i.longSwipesRatio ? t.slideTo(M + i.slidesPerGroup) : t.slideTo(M)) } else { if (!i.shortSwipes) return void t.slideTo(t.activeIndex); "next" === t.swipeDirection && t.slideTo(M + i.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(M) } } }.bind(e), e.onClick = function (e) { this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation())) }.bind(e); var r = "container" === t.touchEventsTarget ? i : s, n = !!t.nested; if (Y.touch || !Y.pointerEvents && !Y.prefixedPointerEvents) { if (Y.touch) { var o = !("touchstart" !== a.start || !Y.passiveListener || !t.passiveListeners) && { passive: !0, capture: !1 }; r.addEventListener(a.start, e.onTouchStart, o), r.addEventListener(a.move, e.onTouchMove, Y.passiveListener ? { passive: !1, capture: n } : n), r.addEventListener(a.end, e.onTouchEnd, o) } (t.simulateTouch && !m.ios && !m.android || t.simulateTouch && !Y.touch && m.ios) && (r.addEventListener("mousedown", e.onTouchStart, !1), f.addEventListener("mousemove", e.onTouchMove, n), f.addEventListener("mouseup", e.onTouchEnd, !1)) } else r.addEventListener(a.start, e.onTouchStart, !1), f.addEventListener(a.move, e.onTouchMove, n), f.addEventListener(a.end, e.onTouchEnd, !1); (t.preventClicks || t.preventClicksPropagation) && r.addEventListener("click", e.onClick, !0), e.on(m.ios || m.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", g, !0) }, detachEvents: function () { var e = this, t = e.params, a = e.touchEvents, i = e.el, s = e.wrapperEl, r = "container" === t.touchEventsTarget ? i : s, n = !!t.nested; if (Y.touch || !Y.pointerEvents && !Y.prefixedPointerEvents) { if (Y.touch) { var o = !("onTouchStart" !== a.start || !Y.passiveListener || !t.passiveListeners) && { passive: !0, capture: !1 }; r.removeEventListener(a.start, e.onTouchStart, o), r.removeEventListener(a.move, e.onTouchMove, n), r.removeEventListener(a.end, e.onTouchEnd, o) } (t.simulateTouch && !m.ios && !m.android || t.simulateTouch && !Y.touch && m.ios) && (r.removeEventListener("mousedown", e.onTouchStart, !1), f.removeEventListener("mousemove", e.onTouchMove, n), f.removeEventListener("mouseup", e.onTouchEnd, !1)) } else r.removeEventListener(a.start, e.onTouchStart, !1), f.removeEventListener(a.move, e.onTouchMove, n), f.removeEventListener(a.end, e.onTouchEnd, !1); (t.preventClicks || t.preventClicksPropagation) && r.removeEventListener("click", e.onClick, !0), e.off(m.ios || m.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", g) } }; var w, y = { setBreakpoint: function () { var e = this, t = e.activeIndex, a = e.initialized, i = e.loopedSlides; void 0 === i && (i = 0); var s = e.params, r = s.breakpoints; if (r && (!r || 0 !== Object.keys(r).length)) { var n = e.getBreakpoint(r); if (n && e.currentBreakpoint !== n) { var o = n in r ? r[n] : e.originalParams, l = s.loop && o.slidesPerView !== s.slidesPerView; X.extend(e.params, o), X.extend(e, { allowTouchMove: e.params.allowTouchMove, allowSlideNext: e.params.allowSlideNext, allowSlidePrev: e.params.allowSlidePrev }), e.currentBreakpoint = n, l && a && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - i + e.loopedSlides, 0, !1)), e.emit("breakpoint", o) } } }, getBreakpoint: function (e) { if (e) { var t = !1, a = []; Object.keys(e).forEach(function (e) { a.push(e) }), a.sort(function (e, t) { return parseInt(e, 10) - parseInt(t, 10) }); for (var i = 0; i < a.length; i += 1) { var s = a[i]; s >= B.innerWidth && !t && (t = s) } return t || "max" } } }, I = { isIE: !!B.navigator.userAgent.match(/Trident/g) || !!B.navigator.userAgent.match(/MSIE/g), isSafari: (w = B.navigator.userAgent.toLowerCase(), 0 <= w.indexOf("safari") && w.indexOf("chrome") < 0 && w.indexOf("android") < 0), isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(B.navigator.userAgent) }; var x = { init: !0, direction: "horizontal", touchEventsTarget: "container", initialSlide: 0, speed: 300, preventInteractionOnTransition: !1, edgeSwipeDetection: !1, edgeSwipeThreshold: 20, freeMode: !1, freeModeMomentum: !0, freeModeMomentumRatio: 1, freeModeMomentumBounce: !0, freeModeMomentumBounceRatio: 1, freeModeMomentumVelocityRatio: 1, freeModeSticky: !1, freeModeMinimumVelocity: .02, autoHeight: !1, setWrapperSize: !1, virtualTranslate: !1, effect: "slide", breakpoints: void 0, spaceBetween: 0, slidesPerView: 1, slidesPerColumn: 1, slidesPerColumnFill: "column", slidesPerGroup: 1, centeredSlides: !1, slidesOffsetBefore: 0, slidesOffsetAfter: 0, normalizeSlideIndex: !0, watchOverflow: !1, roundLengths: !1, touchRatio: 1, touchAngle: 45, simulateTouch: !0, shortSwipes: !0, longSwipes: !0, longSwipesRatio: .5, longSwipesMs: 300, followFinger: !0, allowTouchMove: !0, threshold: 0, touchMoveStopPropagation: !0, touchReleaseOnEdges: !1, uniqueNavElements: !0, resistance: !0, resistanceRatio: .85, watchSlidesProgress: !1, watchSlidesVisibility: !1, grabCursor: !1, preventClicks: !0, preventClicksPropagation: !0, slideToClickedSlide: !1, preloadImages: !0, updateOnImagesReady: !0, loop: !1, loopAdditionalSlides: 0, loopedSlides: null, loopFillGroupWithBlank: !1, allowSlidePrev: !0, allowSlideNext: !0, swipeHandler: null, noSwiping: !0, noSwipingClass: "swiper-no-swiping", noSwipingSelector: null, passiveListeners: !0, containerModifierClass: "swiper-container-", slideClass: "swiper-slide", slideBlankClass: "swiper-slide-invisible-blank", slideActiveClass: "swiper-slide-active", slideDuplicateActiveClass: "swiper-slide-duplicate-active", slideVisibleClass: "swiper-slide-visible", slideDuplicateClass: "swiper-slide-duplicate", slideNextClass: "swiper-slide-next", slideDuplicateNextClass: "swiper-slide-duplicate-next", slidePrevClass: "swiper-slide-prev", slideDuplicatePrevClass: "swiper-slide-duplicate-prev", wrapperClass: "swiper-wrapper", runCallbacksOnInit: !0 }, E = { update: o, translate: d, transition: p, slide: c, loop: u, grabCursor: h, manipulation: v, events: b, breakpoints: y, checkOverflow: { checkOverflow: function () { var e = this, t = e.isLocked; e.isLocked = 1 === e.snapGrid.length, e.allowSlideNext = !e.isLocked, e.allowSlidePrev = !e.isLocked, t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"), t && t !== e.isLocked && (e.isEnd = !1, e.navigation.update()) } }, classes: { addClasses: function () { var t = this.classNames, a = this.params, e = this.rtl, i = this.$el, s = []; s.push(a.direction), a.freeMode && s.push("free-mode"), Y.flexbox || s.push("no-flexbox"), a.autoHeight && s.push("autoheight"), e && s.push("rtl"), 1 < a.slidesPerColumn && s.push("multirow"), m.android && s.push("android"), m.ios && s.push("ios"), I.isIE && (Y.pointerEvents || Y.prefixedPointerEvents) && s.push("wp8-" + a.direction), s.forEach(function (e) { t.push(a.containerModifierClass + e) }), i.addClass(t.join(" ")) }, removeClasses: function () { var e = this.$el, t = this.classNames; e.removeClass(t.join(" ")) } }, images: { loadImage: function (e, t, a, i, s, r) { var n; function o() { r && r() } e.complete && s ? o() : t ? ((n = new B.Image).onload = o, n.onerror = o, i && (n.sizes = i), a && (n.srcset = a), t && (n.src = t)) : o() }, preloadImages: function () { var e = this; function t() { null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady"))) } e.imagesToLoad = e.$el.find("img"); for (var a = 0; a < e.imagesToLoad.length; a += 1) { var i = e.imagesToLoad[a]; e.loadImage(i, i.currentSrc || i.getAttribute("src"), i.srcset || i.getAttribute("srcset"), i.sizes || i.getAttribute("sizes"), !0, t) } } } }, T = {}, S = function (u) { function h() { for (var e, t, s, a = [], i = arguments.length; i--;)a[i] = arguments[i]; 1 === a.length && a[0].constructor && a[0].constructor === Object ? s = a[0] : (t = (e = a)[0], s = e[1]), s || (s = {}), s = X.extend({}, s), t && !s.el && (s.el = t), u.call(this, s), Object.keys(E).forEach(function (t) { Object.keys(E[t]).forEach(function (e) { h.prototype[e] || (h.prototype[e] = E[t][e]) }) }); var r = this; void 0 === r.modules && (r.modules = {}), Object.keys(r.modules).forEach(function (e) { var t = r.modules[e]; if (t.params) { var a = Object.keys(t.params)[0], i = t.params[a]; if ("object" != typeof i) return; if (!(a in s && "enabled" in i)) return; !0 === s[a] && (s[a] = { enabled: !0 }), "object" != typeof s[a] || "enabled" in s[a] || (s[a].enabled = !0), s[a] || (s[a] = { enabled: !1 }) } }); var n = X.extend({}, x); r.useModulesParams(n), r.params = X.extend({}, n, T, s), r.originalParams = X.extend({}, r.params), r.passedParams = X.extend({}, s); var o = (r.$ = L)(r.params.el); if (t = o[0]) { if (1 < o.length) { var l = []; return o.each(function (e, t) { var a = X.extend({}, s, { el: t }); l.push(new h(a)) }), l } t.swiper = r, o.data("swiper", r); var d, p, c = o.children("." + r.params.wrapperClass); return X.extend(r, { $el: o, el: t, $wrapperEl: c, wrapperEl: c[0], classNames: [], slides: L(), slidesGrid: [], snapGrid: [], slidesSizesGrid: [], isHorizontal: function () { return "horizontal" === r.params.direction }, isVertical: function () { return "vertical" === r.params.direction }, rtl: "rtl" === t.dir.toLowerCase() || "rtl" === o.css("direction"), rtlTranslate: "horizontal" === r.params.direction && ("rtl" === t.dir.toLowerCase() || "rtl" === o.css("direction")), wrongRTL: "-webkit-box" === c.css("display"), activeIndex: 0, realIndex: 0, isBeginning: !0, isEnd: !1, translate: 0, previousTranslate: 0, progress: 0, velocity: 0, animating: !1, allowSlideNext: r.params.allowSlideNext, allowSlidePrev: r.params.allowSlidePrev, touchEvents: (d = ["touchstart", "touchmove", "touchend"], p = ["mousedown", "mousemove", "mouseup"], Y.pointerEvents ? p = ["pointerdown", "pointermove", "pointerup"] : Y.prefixedPointerEvents && (p = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), r.touchEventsTouch = { start: d[0], move: d[1], end: d[2] }, r.touchEventsDesktop = { start: p[0], move: p[1], end: p[2] }, Y.touch || !r.params.simulateTouch ? r.touchEventsTouch : r.touchEventsDesktop), touchEventsData: { isTouched: void 0, isMoved: void 0, allowTouchCallbacks: void 0, touchStartTime: void 0, isScrolling: void 0, currentTranslate: void 0, startTranslate: void 0, allowThresholdMove: void 0, formElements: "input, select, option, textarea, button, video", lastClickTime: X.now(), clickTimeout: void 0, velocities: [], allowMomentumBounce: void 0, isTouchEvent: void 0, startMoving: void 0 }, allowClick: !0, allowTouchMove: r.params.allowTouchMove, touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 }, imagesToLoad: [], imagesLoaded: 0 }), r.useModules(), r.params.init && r.init(), r } } u && (h.__proto__ = u); var e = { extendedDefaults: { configurable: !0 }, defaults: { configurable: !0 }, Class: { configurable: !0 }, $: { configurable: !0 } }; return ((h.prototype = Object.create(u && u.prototype)).constructor = h).prototype.slidesPerViewDynamic = function () { var e = this, t = e.params, a = e.slides, i = e.slidesGrid, s = e.size, r = e.activeIndex, n = 1; if (t.centeredSlides) { for (var o, l = a[r].swiperSlideSize, d = r + 1; d < a.length; d += 1)a[d] && !o && (n += 1, s < (l += a[d].swiperSlideSize) && (o = !0)); for (var p = r - 1; 0 <= p; p -= 1)a[p] && !o && (n += 1, s < (l += a[p].swiperSlideSize) && (o = !0)) } else for (var c = r + 1; c < a.length; c += 1)i[c] - i[r] < s && (n += 1); return n }, h.prototype.update = function () { var a = this; if (a && !a.destroyed) { var e = a.snapGrid, t = a.params; t.breakpoints && a.setBreakpoint(), a.updateSize(), a.updateSlides(), a.updateProgress(), a.updateSlidesClasses(), a.params.freeMode ? (i(), a.params.autoHeight && a.updateAutoHeight()) : (("auto" === a.params.slidesPerView || 1 < a.params.slidesPerView) && a.isEnd && !a.params.centeredSlides ? a.slideTo(a.slides.length - 1, 0, !1, !0) : a.slideTo(a.activeIndex, 0, !1, !0)) || i(), t.watchOverflow && e !== a.snapGrid && a.checkOverflow(), a.emit("update") } function i() { var e = a.rtlTranslate ? -1 * a.translate : a.translate, t = Math.min(Math.max(e, a.maxTranslate()), a.minTranslate()); a.setTranslate(t), a.updateActiveIndex(), a.updateSlidesClasses() } }, h.prototype.init = function () { var e = this; e.initialized || (e.emit("beforeInit"), e.params.breakpoints && e.setBreakpoint(), e.addClasses(), e.params.loop && e.loopCreate(), e.updateSize(), e.updateSlides(), e.params.watchOverflow && e.checkOverflow(), e.params.grabCursor && e.setGrabCursor(), e.params.preloadImages && e.preloadImages(), e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit), e.attachEvents(), e.initialized = !0, e.emit("init")) }, h.prototype.destroy = function (e, t) { void 0 === e && (e = !0), void 0 === t && (t = !0); var a = this, i = a.params, s = a.$el, r = a.$wrapperEl, n = a.slides; return void 0 === a.params || a.destroyed || (a.emit("beforeDestroy"), a.initialized = !1, a.detachEvents(), i.loop && a.loopDestroy(), t && (a.removeClasses(), s.removeAttr("style"), r.removeAttr("style"), n && n.length && n.removeClass([i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")), a.emit("destroy"), Object.keys(a.eventsListeners).forEach(function (e) { a.off(e) }), !1 !== e && (a.$el[0].swiper = null, a.$el.data("swiper", null), X.deleteProps(a)), a.destroyed = !0), null }, h.extendDefaults = function (e) { X.extend(T, e) }, e.extendedDefaults.get = function () { return T }, e.defaults.get = function () { return x }, e.Class.get = function () { return u }, e.$.get = function () { return L }, Object.defineProperties(h, e), h }(s), C = { name: "device", proto: { device: m }, static: { device: m } }, M = { name: "support", proto: { support: Y }, static: { support: Y } }, z = { name: "browser", proto: { browser: I }, static: { browser: I } }, k = { name: "resize", create: function () { var e = this; X.extend(e, { resize: { resizeHandler: function () { e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize")) }, orientationChangeHandler: function () { e && !e.destroyed && e.initialized && e.emit("orientationchange") } } }) }, on: { init: function () { B.addEventListener("resize", this.resize.resizeHandler), B.addEventListener("orientationchange", this.resize.orientationChangeHandler) }, destroy: function () { B.removeEventListener("resize", this.resize.resizeHandler), B.removeEventListener("orientationchange", this.resize.orientationChangeHandler) } } }, P = { func: B.MutationObserver || B.WebkitMutationObserver, attach: function (e, t) { void 0 === t && (t = {}); var a = this, i = new P.func(function (e) { if (1 !== e.length) { var t = function () { a.emit("observerUpdate", e[0]) }; B.requestAnimationFrame ? B.requestAnimationFrame(t) : B.setTimeout(t, 0) } else a.emit("observerUpdate", e[0]) }); i.observe(e, { attributes: void 0 === t.attributes || t.attributes, childList: void 0 === t.childList || t.childList, characterData: void 0 === t.characterData || t.characterData }), a.observer.observers.push(i) }, init: function () { var e = this; if (Y.observer && e.params.observer) { if (e.params.observeParents) for (var t = e.$el.parents(), a = 0; a < t.length; a += 1)e.observer.attach(t[a]); e.observer.attach(e.$el[0], { childList: !1 }), e.observer.attach(e.$wrapperEl[0], { attributes: !1 }) } }, destroy: function () { this.observer.observers.forEach(function (e) { e.disconnect() }), this.observer.observers = [] } }, $ = { name: "observer", params: { observer: !1, observeParents: !1 }, create: function () { X.extend(this, { observer: { init: P.init.bind(this), attach: P.attach.bind(this), destroy: P.destroy.bind(this), observers: [] } }) }, on: { init: function () { this.observer.init() }, destroy: function () { this.observer.destroy() } } }, D = { update: function (e) { var t = this, a = t.params, i = a.slidesPerView, s = a.slidesPerGroup, r = a.centeredSlides, n = t.virtual, o = n.from, l = n.to, d = n.slides, p = n.slidesGrid, c = n.renderSlide, u = n.offset; t.updateActiveIndex(); var h, v, f, m = t.activeIndex || 0; h = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", r ? (v = Math.floor(i / 2) + s, f = Math.floor(i / 2) + s) : (v = i + (s - 1), f = s); var g = Math.max((m || 0) - f, 0), b = Math.min((m || 0) + v, d.length - 1), w = (t.slidesGrid[g] || 0) - (t.slidesGrid[0] || 0); function y() { t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load() } if (X.extend(t.virtual, { from: g, to: b, offset: w, slidesGrid: t.slidesGrid }), o === g && l === b && !e) return t.slidesGrid !== p && w !== u && t.slides.css(h, w + "px"), void t.updateProgress(); if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, { offset: w, from: g, to: b, slides: function () { for (var e = [], t = g; t <= b; t += 1)e.push(d[t]); return e }() }), void y(); var x = [], E = []; if (e) t.$wrapperEl.find("." + t.params.slideClass).remove(); else for (var T = o; T <= l; T += 1)(T < g || b < T) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + T + '"]').remove(); for (var S = 0; S < d.length; S += 1)g <= S && S <= b && (void 0 === l || e ? E.push(S) : (l < S && E.push(S), S < o && x.push(S))); E.forEach(function (e) { t.$wrapperEl.append(c(d[e], e)) }), x.sort(function (e, t) { return e < t }).forEach(function (e) { t.$wrapperEl.prepend(c(d[e], e)) }), t.$wrapperEl.children(".swiper-slide").css(h, w + "px"), y() }, renderSlide: function (e, t) { var a = this, i = a.params.virtual; if (i.cache && a.virtual.cache[t]) return a.virtual.cache[t]; var s = i.renderSlide ? L(i.renderSlide.call(a, e, t)) : L('<div class="' + a.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>"); return s.attr("data-swiper-slide-index") || s.attr("data-swiper-slide-index", t), i.cache && (a.virtual.cache[t] = s), s }, appendSlide: function (e) { this.virtual.slides.push(e), this.virtual.update(!0) }, prependSlide: function (e) { var t = this; if (t.virtual.slides.unshift(e), t.params.virtual.cache) { var a = t.virtual.cache, i = {}; Object.keys(a).forEach(function (e) { i[e + 1] = a[e] }), t.virtual.cache = i } t.virtual.update(!0), t.slideNext(0) } }, O = { name: "virtual", params: { virtual: { enabled: !1, slides: [], cache: !0, renderSlide: null, renderExternal: null } }, create: function () { var e = this; X.extend(e, { virtual: { update: D.update.bind(e), appendSlide: D.appendSlide.bind(e), prependSlide: D.prependSlide.bind(e), renderSlide: D.renderSlide.bind(e), slides: e.params.virtual.slides, cache: {} } }) }, on: { beforeInit: function () { var e = this; if (e.params.virtual.enabled) { e.classNames.push(e.params.containerModifierClass + "virtual"); var t = { watchSlidesProgress: !0 }; X.extend(e.params, t), X.extend(e.originalParams, t), e.virtual.update() } }, setTranslate: function () { this.params.virtual.enabled && this.virtual.update() } } }, A = { handle: function (e) { var t = this, a = t.rtlTranslate, i = e; i.originalEvent && (i = i.originalEvent); var s = i.keyCode || i.charCode; if (!t.allowSlideNext && (t.isHorizontal() && 39 === s || t.isVertical() && 40 === s)) return !1; if (!t.allowSlidePrev && (t.isHorizontal() && 37 === s || t.isVertical() && 38 === s)) return !1; if (!(i.shiftKey || i.altKey || i.ctrlKey || i.metaKey || f.activeElement && f.activeElement.nodeName && ("input" === f.activeElement.nodeName.toLowerCase() || "textarea" === f.activeElement.nodeName.toLowerCase()))) { if (t.params.keyboard.onlyInViewport && (37 === s || 39 === s || 38 === s || 40 === s)) { var r = !1; if (0 < t.$el.parents("." + t.params.slideClass).length && 0 === t.$el.parents("." + t.params.slideActiveClass).length) return; var n = B.innerWidth, o = B.innerHeight, l = t.$el.offset(); a && (l.left -= t.$el[0].scrollLeft); for (var d = [[l.left, l.top], [l.left + t.width, l.top], [l.left, l.top + t.height], [l.left + t.width, l.top + t.height]], p = 0; p < d.length; p += 1) { var c = d[p]; 0 <= c[0] && c[0] <= n && 0 <= c[1] && c[1] <= o && (r = !0) } if (!r) return } t.isHorizontal() ? (37 !== s && 39 !== s || (i.preventDefault ? i.preventDefault() : i.returnValue = !1), (39 === s && !a || 37 === s && a) && t.slideNext(), (37 === s && !a || 39 === s && a) && t.slidePrev()) : (38 !== s && 40 !== s || (i.preventDefault ? i.preventDefault() : i.returnValue = !1), 40 === s && t.slideNext(), 38 === s && t.slidePrev()), t.emit("keyPress", s) } }, enable: function () { this.keyboard.enabled || (L(f).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0) }, disable: function () { this.keyboard.enabled && (L(f).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1) } }, H = { name: "keyboard", params: { keyboard: { enabled: !1, onlyInViewport: !0 } }, create: function () { X.extend(this, { keyboard: { enabled: !1, enable: A.enable.bind(this), disable: A.disable.bind(this), handle: A.handle.bind(this) } }) }, on: { init: function () { this.params.keyboard.enabled && this.keyboard.enable() }, destroy: function () { this.keyboard.enabled && this.keyboard.disable() } } }; var G = { lastScrollTime: X.now(), event: -1 < B.navigator.userAgent.indexOf("firefox") ? "DOMMouseScroll" : function () { var e = "onwheel", t = e in f; if (!t) { var a = f.createElement("div"); a.setAttribute(e, "return;"), t = "function" == typeof a[e] } return !t && f.implementation && f.implementation.hasFeature && !0 !== f.implementation.hasFeature("", "") && (t = f.implementation.hasFeature("Events.wheel", "3.0")), t }() ? "wheel" : "mousewheel", normalize: function (e) { var t = 0, a = 0, i = 0, s = 0; return "detail" in e && (a = e.detail), "wheelDelta" in e && (a = -e.wheelDelta / 120), "wheelDeltaY" in e && (a = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = a, a = 0), i = 10 * t, s = 10 * a, "deltaY" in e && (s = e.deltaY), "deltaX" in e && (i = e.deltaX), (i || s) && e.deltaMode && (1 === e.deltaMode ? (i *= 40, s *= 40) : (i *= 800, s *= 800)), i && !t && (t = i < 1 ? -1 : 1), s && !a && (a = s < 1 ? -1 : 1), { spinX: t, spinY: a, pixelX: i, pixelY: s } }, handleMouseEnter: function () { this.mouseEntered = !0 }, handleMouseLeave: function () { this.mouseEntered = !1 }, handle: function (e) { var t = e, a = this, i = a.params.mousewheel; if (!a.mouseEntered && !i.releaseOnEdges) return !0; t.originalEvent && (t = t.originalEvent); var s = 0, r = a.rtlTranslate ? -1 : 1, n = G.normalize(t); if (i.forceToAxis) if (a.isHorizontal()) { if (!(Math.abs(n.pixelX) > Math.abs(n.pixelY))) return !0; s = n.pixelX * r } else { if (!(Math.abs(n.pixelY) > Math.abs(n.pixelX))) return !0; s = n.pixelY } else s = Math.abs(n.pixelX) > Math.abs(n.pixelY) ? -n.pixelX * r : -n.pixelY; if (0 === s) return !0; if (i.invert && (s = -s), a.params.freeMode) { a.params.loop && a.loopFix(); var o = a.getTranslate() + s * i.sensitivity, l = a.isBeginning, d = a.isEnd; if (o >= a.minTranslate() && (o = a.minTranslate()), o <= a.maxTranslate() && (o = a.maxTranslate()), a.setTransition(0), a.setTranslate(o), a.updateProgress(), a.updateActiveIndex(), a.updateSlidesClasses(), (!l && a.isBeginning || !d && a.isEnd) && a.updateSlidesClasses(), a.params.freeModeSticky && (clearTimeout(a.mousewheel.timeout), a.mousewheel.timeout = X.nextTick(function () { a.slideToClosest() }, 300)), a.emit("scroll", t), a.params.autoplay && a.params.autoplayDisableOnInteraction && a.autoplay.stop(), o === a.minTranslate() || o === a.maxTranslate()) return !0 } else { if (60 < X.now() - a.mousewheel.lastScrollTime) if (s < 0) if (a.isEnd && !a.params.loop || a.animating) { if (i.releaseOnEdges) return !0 } else a.slideNext(), a.emit("scroll", t); else if (a.isBeginning && !a.params.loop || a.animating) { if (i.releaseOnEdges) return !0 } else a.slidePrev(), a.emit("scroll", t); a.mousewheel.lastScrollTime = (new B.Date).getTime() } return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1 }, enable: function () { var e = this; if (!G.event) return !1; if (e.mousewheel.enabled) return !1; var t = e.$el; return "container" !== e.params.mousewheel.eventsTarged && (t = L(e.params.mousewheel.eventsTarged)), t.on("mouseenter", e.mousewheel.handleMouseEnter), t.on("mouseleave", e.mousewheel.handleMouseLeave), t.on(G.event, e.mousewheel.handle), e.mousewheel.enabled = !0 }, disable: function () { var e = this; if (!G.event) return !1; if (!e.mousewheel.enabled) return !1; var t = e.$el; return "container" !== e.params.mousewheel.eventsTarged && (t = L(e.params.mousewheel.eventsTarged)), t.off(G.event, e.mousewheel.handle), !(e.mousewheel.enabled = !1) } }, N = { update: function () { var e = this, t = e.params.navigation; if (!e.params.loop) { var a = e.navigation, i = a.$nextEl, s = a.$prevEl; s && 0 < s.length && (e.isBeginning ? s.addClass(t.disabledClass) : s.removeClass(t.disabledClass), s[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass)), i && 0 < i.length && (e.isEnd ? i.addClass(t.disabledClass) : i.removeClass(t.disabledClass), i[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass)) } }, init: function () { var e, t, a = this, i = a.params.navigation; (i.nextEl || i.prevEl) && (i.nextEl && (e = L(i.nextEl), a.params.uniqueNavElements && "string" == typeof i.nextEl && 1 < e.length && 1 === a.$el.find(i.nextEl).length && (e = a.$el.find(i.nextEl))), i.prevEl && (t = L(i.prevEl), a.params.uniqueNavElements && "string" == typeof i.prevEl && 1 < t.length && 1 === a.$el.find(i.prevEl).length && (t = a.$el.find(i.prevEl))), e && 0 < e.length && e.on("click", function (e) { e.preventDefault(), a.isEnd && !a.params.loop || a.slideNext() }), t && 0 < t.length && t.on("click", function (e) { e.preventDefault(), a.isBeginning && !a.params.loop || a.slidePrev() }), X.extend(a.navigation, { $nextEl: e, nextEl: e && e[0], $prevEl: t, prevEl: t && t[0] })) }, destroy: function () { var e = this.navigation, t = e.$nextEl, a = e.$prevEl; t && t.length && (t.off("click"), t.removeClass(this.params.navigation.disabledClass)), a && a.length && (a.off("click"), a.removeClass(this.params.navigation.disabledClass)) } }, V = { update: function () { var e = this, t = e.rtl, s = e.params.pagination; if (s.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) { var r, a = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length, i = e.pagination.$el, n = e.params.loop ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length; if (e.params.loop ? ((r = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup)) > a - 1 - 2 * e.loopedSlides && (r -= a - 2 * e.loopedSlides), n - 1 < r && (r -= n), r < 0 && "bullets" !== e.params.paginationType && (r = n + r)) : r = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0, "bullets" === s.type && e.pagination.bullets && 0 < e.pagination.bullets.length) { var o, l, d, p = e.pagination.bullets; if (s.dynamicBullets && (e.pagination.bulletSize = p.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0), i.css(e.isHorizontal() ? "width" : "height", e.pagination.bulletSize * (s.dynamicMainBullets + 4) + "px"), 1 < s.dynamicMainBullets && void 0 !== e.previousIndex && (e.pagination.dynamicBulletIndex += r - e.previousIndex, e.pagination.dynamicBulletIndex > s.dynamicMainBullets - 1 ? e.pagination.dynamicBulletIndex = s.dynamicMainBullets - 1 : e.pagination.dynamicBulletIndex < 0 && (e.pagination.dynamicBulletIndex = 0)), o = r - e.pagination.dynamicBulletIndex, d = ((l = o + (Math.min(p.length, s.dynamicMainBullets) - 1)) + o) / 2), p.removeClass(s.bulletActiveClass + " " + s.bulletActiveClass + "-next " + s.bulletActiveClass + "-next-next " + s.bulletActiveClass + "-prev " + s.bulletActiveClass + "-prev-prev " + s.bulletActiveClass + "-main"), 1 < i.length) p.each(function (e, t) { var a = L(t), i = a.index(); i === r && a.addClass(s.bulletActiveClass), s.dynamicBullets && (o <= i && i <= l && a.addClass(s.bulletActiveClass + "-main"), i === o && a.prev().addClass(s.bulletActiveClass + "-prev").prev().addClass(s.bulletActiveClass + "-prev-prev"), i === l && a.next().addClass(s.bulletActiveClass + "-next").next().addClass(s.bulletActiveClass + "-next-next")) }); else if (p.eq(r).addClass(s.bulletActiveClass), s.dynamicBullets) { for (var c = p.eq(o), u = p.eq(l), h = o; h <= l; h += 1)p.eq(h).addClass(s.bulletActiveClass + "-main"); c.prev().addClass(s.bulletActiveClass + "-prev").prev().addClass(s.bulletActiveClass + "-prev-prev"), u.next().addClass(s.bulletActiveClass + "-next").next().addClass(s.bulletActiveClass + "-next-next") } if (s.dynamicBullets) { var v = Math.min(p.length, s.dynamicMainBullets + 4), f = (e.pagination.bulletSize * v - e.pagination.bulletSize) / 2 - d * e.pagination.bulletSize, m = t ? "right" : "left"; p.css(e.isHorizontal() ? m : "top", f + "px") } } if ("fraction" === s.type && (i.find("." + s.currentClass).text(s.formatFractionCurrent(r + 1)), i.find("." + s.totalClass).text(s.formatFractionTotal(n))), "progressbar" === s.type) { var g; g = s.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical"; var b = (r + 1) / n, w = 1, y = 1; "horizontal" === g ? w = b : y = b, i.find("." + s.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + w + ") scaleY(" + y + ")").transition(e.params.speed) } "custom" === s.type && s.renderCustom ? (i.html(s.renderCustom(e, r + 1, n)), e.emit("paginationRender", e, i[0])) : e.emit("paginationUpdate", e, i[0]), i[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](s.lockClass) } }, render: function () { var e = this, t = e.params.pagination; if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) { var a = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length, i = e.pagination.$el, s = ""; if ("bullets" === t.type) { for (var r = e.params.loop ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length, n = 0; n < r; n += 1)t.renderBullet ? s += t.renderBullet.call(e, n, t.bulletClass) : s += "<" + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + ">"; i.html(s), e.pagination.bullets = i.find("." + t.bulletClass) } "fraction" === t.type && (s = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>', i.html(s)), "progressbar" === t.type && (s = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : '<span class="' + t.progressbarFillClass + '"></span>', i.html(s)), "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0]) } }, init: function () { var a = this, e = a.params.pagination; if (e.el) { var t = L(e.el); 0 !== t.length && (a.params.uniqueNavElements && "string" == typeof e.el && 1 < t.length && 1 === a.$el.find(e.el).length && (t = a.$el.find(e.el)), "bullets" === e.type && e.clickable && t.addClass(e.clickableClass), t.addClass(e.modifierClass + e.type), "bullets" === e.type && e.dynamicBullets && (t.addClass("" + e.modifierClass + e.type + "-dynamic"), a.pagination.dynamicBulletIndex = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && t.addClass(e.progressbarOppositeClass), e.clickable && t.on("click", "." + e.bulletClass, function (e) { e.preventDefault(); var t = L(this).index() * a.params.slidesPerGroup; a.params.loop && (t += a.loopedSlides), a.slideTo(t) }), X.extend(a.pagination, { $el: t, el: t[0] })) } }, destroy: function () { var e = this, t = e.params.pagination; if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) { var a = e.pagination.$el; a.removeClass(t.hiddenClass), a.removeClass(t.modifierClass + t.type), e.pagination.bullets && e.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && a.off("click", "." + t.bulletClass) } } }, R = { setTranslate: function () { var e = this; if (e.params.scrollbar.el && e.scrollbar.el) { var t = e.scrollbar, a = e.rtlTranslate, i = e.progress, s = t.dragSize, r = t.trackSize, n = t.$dragEl, o = t.$el, l = e.params.scrollbar, d = s, p = (r - s) * i; a ? 0 < (p = -p) ? (d = s - p, p = 0) : r < -p + s && (d = r + p) : p < 0 ? (d = s + p, p = 0) : r < p + s && (d = r - p), e.isHorizontal() ? (Y.transforms3d ? n.transform("translate3d(" + p + "px, 0, 0)") : n.transform("translateX(" + p + "px)"), n[0].style.width = d + "px") : (Y.transforms3d ? n.transform("translate3d(0px, " + p + "px, 0)") : n.transform("translateY(" + p + "px)"), n[0].style.height = d + "px"), l.hide && (clearTimeout(e.scrollbar.timeout), o[0].style.opacity = 1, e.scrollbar.timeout = setTimeout(function () { o[0].style.opacity = 0, o.transition(400) }, 1e3)) } }, setTransition: function (e) { this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e) }, updateSize: function () { var e = this; if (e.params.scrollbar.el && e.scrollbar.el) { var t = e.scrollbar, a = t.$dragEl, i = t.$el; a[0].style.width = "", a[0].style.height = ""; var s, r = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight, n = e.size / e.virtualSize, o = n * (r / e.size); s = "auto" === e.params.scrollbar.dragSize ? r * n : parseInt(e.params.scrollbar.dragSize, 10), e.isHorizontal() ? a[0].style.width = s + "px" : a[0].style.height = s + "px", i[0].style.display = 1 <= n ? "none" : "", e.params.scrollbarHide && (i[0].style.opacity = 0), X.extend(t, { trackSize: r, divider: n, moveDivider: o, dragSize: s }), t.$el[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass) } }, setDragPosition: function (e) { var t, a = this, i = a.scrollbar, s = a.rtlTranslate, r = i.$el, n = i.dragSize, o = i.trackSize; t = ((a.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY) - r.offset()[a.isHorizontal() ? "left" : "top"] - n / 2) / (o - n), t = Math.max(Math.min(t, 1), 0), s && (t = 1 - t); var l = a.minTranslate() + (a.maxTranslate() - a.minTranslate()) * t; a.updateProgress(l), a.setTranslate(l), a.updateActiveIndex(), a.updateSlidesClasses() }, onDragStart: function (e) { var t = this, a = t.params.scrollbar, i = t.scrollbar, s = t.$wrapperEl, r = i.$el, n = i.$dragEl; t.scrollbar.isTouched = !0, e.preventDefault(), e.stopPropagation(), s.transition(100), n.transition(100), i.setDragPosition(e), clearTimeout(t.scrollbar.dragTimeout), r.transition(0), a.hide && r.css("opacity", 1), t.emit("scrollbarDragStart", e) }, onDragMove: function (e) { var t = this.scrollbar, a = this.$wrapperEl, i = t.$el, s = t.$dragEl; this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), a.transition(0), i.transition(0), s.transition(0), this.emit("scrollbarDragMove", e)) }, onDragEnd: function (e) { var t = this, a = t.params.scrollbar, i = t.scrollbar.$el; t.scrollbar.isTouched && (t.scrollbar.isTouched = !1, a.hide && (clearTimeout(t.scrollbar.dragTimeout), t.scrollbar.dragTimeout = X.nextTick(function () { i.css("opacity", 0), i.transition(400) }, 1e3)), t.emit("scrollbarDragEnd", e), a.snapOnRelease && t.slideToClosest()) }, enableDraggable: function () { var e = this; if (e.params.scrollbar.el) { var t = e.scrollbar, a = e.touchEvents, i = e.touchEventsDesktop, s = e.params, r = t.$el[0], n = !(!Y.passiveListener || !s.passiveListeners) && { passive: !1, capture: !1 }, o = !(!Y.passiveListener || !s.passiveListeners) && { passive: !0, capture: !1 }; Y.touch || !Y.pointerEvents && !Y.prefixedPointerEvents ? (Y.touch && (r.addEventListener(a.start, e.scrollbar.onDragStart, n), r.addEventListener(a.move, e.scrollbar.onDragMove, n), r.addEventListener(a.end, e.scrollbar.onDragEnd, o)), (s.simulateTouch && !m.ios && !m.android || s.simulateTouch && !Y.touch && m.ios) && (r.addEventListener("mousedown", e.scrollbar.onDragStart, n), f.addEventListener("mousemove", e.scrollbar.onDragMove, n), f.addEventListener("mouseup", e.scrollbar.onDragEnd, o))) : (r.addEventListener(i.start, e.scrollbar.onDragStart, n), f.addEventListener(i.move, e.scrollbar.onDragMove, n), f.addEventListener(i.end, e.scrollbar.onDragEnd, o)) } }, disableDraggable: function () { var e = this; if (e.params.scrollbar.el) { var t = e.scrollbar, a = e.touchEvents, i = e.touchEventsDesktop, s = e.params, r = t.$el[0], n = !(!Y.passiveListener || !s.passiveListeners) && { passive: !1, capture: !1 }, o = !(!Y.passiveListener || !s.passiveListeners) && { passive: !0, capture: !1 }; Y.touch || !Y.pointerEvents && !Y.prefixedPointerEvents ? (Y.touch && (r.removeEventListener(a.start, e.scrollbar.onDragStart, n), r.removeEventListener(a.move, e.scrollbar.onDragMove, n), r.removeEventListener(a.end, e.scrollbar.onDragEnd, o)), (s.simulateTouch && !m.ios && !m.android || s.simulateTouch && !Y.touch && m.ios) && (r.removeEventListener("mousedown", e.scrollbar.onDragStart, n), f.removeEventListener("mousemove", e.scrollbar.onDragMove, n), f.removeEventListener("mouseup", e.scrollbar.onDragEnd, o))) : (r.removeEventListener(i.start, e.scrollbar.onDragStart, n), f.removeEventListener(i.move, e.scrollbar.onDragMove, n), f.removeEventListener(i.end, e.scrollbar.onDragEnd, o)) } }, init: function () { var e = this; if (e.params.scrollbar.el) { var t = e.scrollbar, a = e.$el, i = e.params.scrollbar, s = L(i.el); e.params.uniqueNavElements && "string" == typeof i.el && 1 < s.length && 1 === a.find(i.el).length && (s = a.find(i.el)); var r = s.find("." + e.params.scrollbar.dragClass); 0 === r.length && (r = L('<div class="' + e.params.scrollbar.dragClass + '"></div>'), s.append(r)), X.extend(t, { $el: s, el: s[0], $dragEl: r, dragEl: r[0] }), i.draggable && t.enableDraggable() } }, destroy: function () { this.scrollbar.disableDraggable() } }, F = { setTransform: function (e, t) { var a = this.rtl, i = L(e), s = a ? -1 : 1, r = i.attr("data-swiper-parallax") || "0", n = i.attr("data-swiper-parallax-x"), o = i.attr("data-swiper-parallax-y"), l = i.attr("data-swiper-parallax-scale"), d = i.attr("data-swiper-parallax-opacity"); if (n || o ? (n = n || "0", o = o || "0") : this.isHorizontal() ? (n = r, o = "0") : (o = r, n = "0"), n = 0 <= n.indexOf("%") ? parseInt(n, 10) * t * s + "%" : n * t * s + "px", o = 0 <= o.indexOf("%") ? parseInt(o, 10) * t + "%" : o * t + "px", null != d) { var p = d - (d - 1) * (1 - Math.abs(t)); i[0].style.opacity = p } if (null == l) i.transform("translate3d(" + n + ", " + o + ", 0px)"); else { var c = l - (l - 1) * (1 - Math.abs(t)); i.transform("translate3d(" + n + ", " + o + ", 0px) scale(" + c + ")") } }, setTranslate: function () { var i = this, e = i.$el, t = i.slides, s = i.progress, r = i.snapGrid; e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (e, t) { i.parallax.setTransform(t, s) }), t.each(function (e, t) { var a = t.progress; 1 < i.params.slidesPerGroup && "auto" !== i.params.slidesPerView && (a += Math.ceil(e / 2) - s * (r.length - 1)), a = Math.min(Math.max(a, -1), 1), L(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (e, t) { i.parallax.setTransform(t, a) }) }) }, setTransition: function (s) { void 0 === s && (s = this.params.speed); this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (e, t) { var a = L(t), i = parseInt(a.attr("data-swiper-parallax-duration"), 10) || s; 0 === s && (i = 0), a.transition(i) }) } }, W = { getDistanceBetweenTouches: function (e) { if (e.targetTouches.length < 2) return 1; var t = e.targetTouches[0].pageX, a = e.targetTouches[0].pageY, i = e.targetTouches[1].pageX, s = e.targetTouches[1].pageY; return Math.sqrt(Math.pow(i - t, 2) + Math.pow(s - a, 2)) }, onGestureStart: function (e) { var t = this, a = t.params.zoom, i = t.zoom, s = i.gesture; if (i.fakeGestureTouched = !1, i.fakeGestureMoved = !1, !Y.gestures) { if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return; i.fakeGestureTouched = !0, s.scaleStart = W.getDistanceBetweenTouches(e) } s.$slideEl && s.$slideEl.length || (s.$slideEl = L(e.target).closest(".swiper-slide"), 0 === s.$slideEl.length && (s.$slideEl = t.slides.eq(t.activeIndex)), s.$imageEl = s.$slideEl.find("img, svg, canvas"), s.$imageWrapEl = s.$imageEl.parent("." + a.containerClass), s.maxRatio = s.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio, 0 !== s.$imageWrapEl.length) ? (s.$imageEl.transition(0), t.zoom.isScaling = !0) : s.$imageEl = void 0 }, onGestureChange: function (e) { var t = this.params.zoom, a = this.zoom, i = a.gesture; if (!Y.gestures) { if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return; a.fakeGestureMoved = !0, i.scaleMove = W.getDistanceBetweenTouches(e) } i.$imageEl && 0 !== i.$imageEl.length && (Y.gestures ? this.zoom.scale = e.scale * a.currentScale : a.scale = i.scaleMove / i.scaleStart * a.currentScale, a.scale > i.maxRatio && (a.scale = i.maxRatio - 1 + Math.pow(a.scale - i.maxRatio + 1, .5)), a.scale < t.minRatio && (a.scale = t.minRatio + 1 - Math.pow(t.minRatio - a.scale + 1, .5)), i.$imageEl.transform("translate3d(0,0,0) scale(" + a.scale + ")")) }, onGestureEnd: function (e) { var t = this.params.zoom, a = this.zoom, i = a.gesture; if (!Y.gestures) { if (!a.fakeGestureTouched || !a.fakeGestureMoved) return; if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !m.android) return; a.fakeGestureTouched = !1, a.fakeGestureMoved = !1 } i.$imageEl && 0 !== i.$imageEl.length && (a.scale = Math.max(Math.min(a.scale, i.maxRatio), t.minRatio), i.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + a.scale + ")"), a.currentScale = a.scale, a.isScaling = !1, 1 === a.scale && (i.$slideEl = void 0)) }, onTouchStart: function (e) { var t = this.zoom, a = t.gesture, i = t.image; a.$imageEl && 0 !== a.$imageEl.length && (i.isTouched || (m.android && e.preventDefault(), i.isTouched = !0, i.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, i.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY)) }, onTouchMove: function (e) { var t = this, a = t.zoom, i = a.gesture, s = a.image, r = a.velocity; if (i.$imageEl && 0 !== i.$imageEl.length && (t.allowClick = !1, s.isTouched && i.$slideEl)) { s.isMoved || (s.width = i.$imageEl[0].offsetWidth, s.height = i.$imageEl[0].offsetHeight, s.startX = X.getTranslate(i.$imageWrapEl[0], "x") || 0, s.startY = X.getTranslate(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), t.rtl && (s.startX = -s.startX, s.startY = -s.startY)); var n = s.width * a.scale, o = s.height * a.scale; if (!(n < i.slideWidth && o < i.slideHeight)) { if (s.minX = Math.min(i.slideWidth / 2 - n / 2, 0), s.maxX = -s.minX, s.minY = Math.min(i.slideHeight / 2 - o / 2, 0), s.maxY = -s.minY, s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !s.isMoved && !a.isScaling) { if (t.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)) return void (s.isTouched = !1); if (!t.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)) return void (s.isTouched = !1) } e.preventDefault(), e.stopPropagation(), s.isMoved = !0, s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX, s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY, s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)), s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)), s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)), s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)), r.prevPositionX || (r.prevPositionX = s.touchesCurrent.x), r.prevPositionY || (r.prevPositionY = s.touchesCurrent.y), r.prevTime || (r.prevTime = Date.now()), r.x = (s.touchesCurrent.x - r.prevPositionX) / (Date.now() - r.prevTime) / 2, r.y = (s.touchesCurrent.y - r.prevPositionY) / (Date.now() - r.prevTime) / 2, Math.abs(s.touchesCurrent.x - r.prevPositionX) < 2 && (r.x = 0), Math.abs(s.touchesCurrent.y - r.prevPositionY) < 2 && (r.y = 0), r.prevPositionX = s.touchesCurrent.x, r.prevPositionY = s.touchesCurrent.y, r.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)") } } }, onTouchEnd: function () { var e = this.zoom, t = e.gesture, a = e.image, i = e.velocity; if (t.$imageEl && 0 !== t.$imageEl.length) { if (!a.isTouched || !a.isMoved) return a.isTouched = !1, void (a.isMoved = !1); a.isTouched = !1, a.isMoved = !1; var s = 300, r = 300, n = i.x * s, o = a.currentX + n, l = i.y * r, d = a.currentY + l; 0 !== i.x && (s = Math.abs((o - a.currentX) / i.x)), 0 !== i.y && (r = Math.abs((d - a.currentY) / i.y)); var p = Math.max(s, r); a.currentX = o, a.currentY = d; var c = a.width * e.scale, u = a.height * e.scale; a.minX = Math.min(t.slideWidth / 2 - c / 2, 0), a.maxX = -a.minX, a.minY = Math.min(t.slideHeight / 2 - u / 2, 0), a.maxY = -a.minY, a.currentX = Math.max(Math.min(a.currentX, a.maxX), a.minX), a.currentY = Math.max(Math.min(a.currentY, a.maxY), a.minY), t.$imageWrapEl.transition(p).transform("translate3d(" + a.currentX + "px, " + a.currentY + "px,0)") } }, onTransitionEnd: function () { var e = this.zoom, t = e.gesture; t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl.transform("translate3d(0,0,0)"), t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0, e.scale = 1, e.currentScale = 1) }, toggle: function (e) { var t = this.zoom; t.scale && 1 !== t.scale ? t.out() : t.in(e) }, in: function (e) { var t, a, i, s, r, n, o, l, d, p, c, u, h, v, f, m, g = this, b = g.zoom, w = g.params.zoom, y = b.gesture, x = b.image; (y.$slideEl || (y.$slideEl = g.clickedSlide ? L(g.clickedSlide) : g.slides.eq(g.activeIndex), y.$imageEl = y.$slideEl.find("img, svg, canvas"), y.$imageWrapEl = y.$imageEl.parent("." + w.containerClass)), y.$imageEl && 0 !== y.$imageEl.length) && (y.$slideEl.addClass("" + w.zoomedSlideClass), void 0 === x.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, a = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = x.touchesStart.x, a = x.touchesStart.y), b.scale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, b.currentScale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, e ? (f = y.$slideEl[0].offsetWidth, m = y.$slideEl[0].offsetHeight, i = y.$slideEl.offset().left + f / 2 - t, s = y.$slideEl.offset().top + m / 2 - a, o = y.$imageEl[0].offsetWidth, l = y.$imageEl[0].offsetHeight, d = o * b.scale, p = l * b.scale, h = -(c = Math.min(f / 2 - d / 2, 0)), v = -(u = Math.min(m / 2 - p / 2, 0)), (r = i * b.scale) < c && (r = c), h < r && (r = h), (n = s * b.scale) < u && (n = u), v < n && (n = v)) : n = r = 0, y.$imageWrapEl.transition(300).transform("translate3d(" + r + "px, " + n + "px,0)"), y.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + b.scale + ")")) }, out: function () { var e = this, t = e.zoom, a = e.params.zoom, i = t.gesture; i.$slideEl || (i.$slideEl = e.clickedSlide ? L(e.clickedSlide) : e.slides.eq(e.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas"), i.$imageWrapEl = i.$imageEl.parent("." + a.containerClass)), i.$imageEl && 0 !== i.$imageEl.length && (t.scale = 1, t.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass("" + a.zoomedSlideClass), i.$slideEl = void 0) }, enable: function () { var e = this, t = e.zoom; if (!t.enabled) { t.enabled = !0; var a = !("touchstart" !== e.touchEvents.start || !Y.passiveListener || !e.params.passiveListeners) && { passive: !0, capture: !1 }; Y.gestures ? (e.$wrapperEl.on("gesturestart", ".swiper-slide", t.onGestureStart, a), e.$wrapperEl.on("gesturechange", ".swiper-slide", t.onGestureChange, a), e.$wrapperEl.on("gestureend", ".swiper-slide", t.onGestureEnd, a)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.on(e.touchEvents.start, ".swiper-slide", t.onGestureStart, a), e.$wrapperEl.on(e.touchEvents.move, ".swiper-slide", t.onGestureChange, a), e.$wrapperEl.on(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, a)), e.$wrapperEl.on(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove) } }, disable: function () { var e = this, t = e.zoom; if (t.enabled) { e.zoom.enabled = !1; var a = !("touchstart" !== e.touchEvents.start || !Y.passiveListener || !e.params.passiveListeners) && { passive: !0, capture: !1 }; Y.gestures ? (e.$wrapperEl.off("gesturestart", ".swiper-slide", t.onGestureStart, a), e.$wrapperEl.off("gesturechange", ".swiper-slide", t.onGestureChange, a), e.$wrapperEl.off("gestureend", ".swiper-slide", t.onGestureEnd, a)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.off(e.touchEvents.start, ".swiper-slide", t.onGestureStart, a), e.$wrapperEl.off(e.touchEvents.move, ".swiper-slide", t.onGestureChange, a), e.$wrapperEl.off(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, a)), e.$wrapperEl.off(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove) } } }, q = { loadInSlide: function (e, l) { void 0 === l && (l = !0); var d = this, p = d.params.lazy; if (void 0 !== e && 0 !== d.slides.length) { var c = d.virtual && d.params.virtual.enabled ? d.$wrapperEl.children("." + d.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : d.slides.eq(e), t = c.find("." + p.elementClass + ":not(." + p.loadedClass + "):not(." + p.loadingClass + ")"); !c.hasClass(p.elementClass) || c.hasClass(p.loadedClass) || c.hasClass(p.loadingClass) || (t = t.add(c[0])), 0 !== t.length && t.each(function (e, t) { var i = L(t); i.addClass(p.loadingClass); var s = i.attr("data-background"), r = i.attr("data-src"), n = i.attr("data-srcset"), o = i.attr("data-sizes"); d.loadImage(i[0], r || s, n, o, !1, function () { if (null != d && d && (!d || d.params) && !d.destroyed) { if (s ? (i.css("background-image", 'url("' + s + '")'), i.removeAttr("data-background")) : (n && (i.attr("srcset", n), i.removeAttr("data-srcset")), o && (i.attr("sizes", o), i.removeAttr("data-sizes")), r && (i.attr("src", r), i.removeAttr("data-src"))), i.addClass(p.loadedClass).removeClass(p.loadingClass), c.find("." + p.preloaderClass).remove(), d.params.loop && l) { var e = c.attr("data-swiper-slide-index"); if (c.hasClass(d.params.slideDuplicateClass)) { var t = d.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + d.params.slideDuplicateClass + ")"); d.lazy.loadInSlide(t.index(), !1) } else { var a = d.$wrapperEl.children("." + d.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]'); d.lazy.loadInSlide(a.index(), !1) } } d.emit("lazyImageReady", c[0], i[0]) } }), d.emit("lazyImageLoad", c[0], i[0]) }) } }, load: function () { var i = this, t = i.$wrapperEl, a = i.params, s = i.slides, e = i.activeIndex, r = i.virtual && a.virtual.enabled, n = a.lazy, o = a.slidesPerView; function l(e) { if (r) { if (t.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0 } else if (s[e]) return !0; return !1 } function d(e) { return r ? L(e).attr("data-swiper-slide-index") : L(e).index() } if ("auto" === o && (o = 0), i.lazy.initialImageLoaded || (i.lazy.initialImageLoaded = !0), i.params.watchSlidesVisibility) t.children("." + a.slideVisibleClass).each(function (e, t) { var a = r ? L(t).attr("data-swiper-slide-index") : L(t).index(); i.lazy.loadInSlide(a) }); else if (1 < o) for (var p = e; p < e + o; p += 1)l(p) && i.lazy.loadInSlide(p); else i.lazy.loadInSlide(e); if (n.loadPrevNext) if (1 < o || n.loadPrevNextAmount && 1 < n.loadPrevNextAmount) { for (var c = n.loadPrevNextAmount, u = o, h = Math.min(e + u + Math.max(c, u), s.length), v = Math.max(e - Math.max(u, c), 0), f = e + o; f < h; f += 1)l(f) && i.lazy.loadInSlide(f); for (var m = v; m < e; m += 1)l(m) && i.lazy.loadInSlide(m) } else { var g = t.children("." + a.slideNextClass); 0 < g.length && i.lazy.loadInSlide(d(g)); var b = t.children("." + a.slidePrevClass); 0 < b.length && i.lazy.loadInSlide(d(b)) } } }, j = { LinearSpline: function (e, t) { var a, i, s, r, n, o = function (e, t) { for (i = -1, a = e.length; 1 < a - i;)e[s = a + i >> 1] <= t ? i = s : a = s; return a }; return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function (e) { return e ? (n = o(this.x, e), r = n - 1, (e - this.x[r]) * (this.y[n] - this.y[r]) / (this.x[n] - this.x[r]) + this.y[r]) : 0 }, this }, getInterpolateFunction: function (e) { var t = this; t.controller.spline || (t.controller.spline = t.params.loop ? new j.LinearSpline(t.slidesGrid, e.slidesGrid) : new j.LinearSpline(t.snapGrid, e.snapGrid)) }, setTranslate: function (e, t) { var a, i, s = this, r = s.controller.control; function n(e) { var t = s.rtlTranslate ? -s.translate : s.translate; "slide" === s.params.controller.by && (s.controller.getInterpolateFunction(e), i = -s.controller.spline.interpolate(-t)), i && "container" !== s.params.controller.by || (a = (e.maxTranslate() - e.minTranslate()) / (s.maxTranslate() - s.minTranslate()), i = (t - s.minTranslate()) * a + e.minTranslate()), s.params.controller.inverse && (i = e.maxTranslate() - i), e.updateProgress(i), e.setTranslate(i, s), e.updateActiveIndex(), e.updateSlidesClasses() } if (Array.isArray(r)) for (var o = 0; o < r.length; o += 1)r[o] !== t && r[o] instanceof S && n(r[o]); else r instanceof S && t !== r && n(r) }, setTransition: function (t, e) { var a, i = this, s = i.controller.control; function r(e) { e.setTransition(t, i), 0 !== t && (e.transitionStart(), e.params.autoHeight && X.nextTick(function () { e.updateAutoHeight() }), e.$wrapperEl.transitionEnd(function () { s && (e.params.loop && "slide" === i.params.controller.by && e.loopFix(), e.transitionEnd()) })) } if (Array.isArray(s)) for (a = 0; a < s.length; a += 1)s[a] !== e && s[a] instanceof S && r(s[a]); else s instanceof S && e !== s && r(s) } }, K = { makeElFocusable: function (e) { return e.attr("tabIndex", "0"), e }, addElRole: function (e, t) { return e.attr("role", t), e }, addElLabel: function (e, t) { return e.attr("aria-label", t), e }, disableEl: function (e) { return e.attr("aria-disabled", !0), e }, enableEl: function (e) { return e.attr("aria-disabled", !1), e }, onEnterKey: function (e) { var t = this, a = t.params.a11y; if (13 === e.keyCode) { var i = L(e.target); t.navigation && t.navigation.$nextEl && i.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? t.a11y.notify(a.lastSlideMessage) : t.a11y.notify(a.nextSlideMessage)), t.navigation && t.navigation.$prevEl && i.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? t.a11y.notify(a.firstSlideMessage) : t.a11y.notify(a.prevSlideMessage)), t.pagination && i.is("." + t.params.pagination.bulletClass) && i[0].click() } }, notify: function (e) { var t = this.a11y.liveRegion; 0 !== t.length && (t.html(""), t.html(e)) }, updateNavigation: function () { var e = this; if (!e.params.loop) { var t = e.navigation, a = t.$nextEl, i = t.$prevEl; i && 0 < i.length && (e.isBeginning ? e.a11y.disableEl(i) : e.a11y.enableEl(i)), a && 0 < a.length && (e.isEnd ? e.a11y.disableEl(a) : e.a11y.enableEl(a)) } }, updatePagination: function () { var i = this, s = i.params.a11y; i.pagination && i.params.pagination.clickable && i.pagination.bullets && i.pagination.bullets.length && i.pagination.bullets.each(function (e, t) { var a = L(t); i.a11y.makeElFocusable(a), i.a11y.addElRole(a, "button"), i.a11y.addElLabel(a, s.paginationBulletMessage.replace(/{{index}}/, a.index() + 1)) }) }, init: function () { var e = this; e.$el.append(e.a11y.liveRegion); var t, a, i = e.params.a11y; e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (a = e.navigation.$prevEl), t && (e.a11y.makeElFocusable(t), e.a11y.addElRole(t, "button"), e.a11y.addElLabel(t, i.nextSlideMessage), t.on("keydown", e.a11y.onEnterKey)), a && (e.a11y.makeElFocusable(a), e.a11y.addElRole(a, "button"), e.a11y.addElLabel(a, i.prevSlideMessage), a.on("keydown", e.a11y.onEnterKey)), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", "." + e.params.pagination.bulletClass, e.a11y.onEnterKey) }, destroy: function () { var e, t, a = this; a.a11y.liveRegion && 0 < a.a11y.liveRegion.length && a.a11y.liveRegion.remove(), a.navigation && a.navigation.$nextEl && (e = a.navigation.$nextEl), a.navigation && a.navigation.$prevEl && (t = a.navigation.$prevEl), e && e.off("keydown", a.a11y.onEnterKey), t && t.off("keydown", a.a11y.onEnterKey), a.pagination && a.params.pagination.clickable && a.pagination.bullets && a.pagination.bullets.length && a.pagination.$el.off("keydown", "." + a.params.pagination.bulletClass, a.a11y.onEnterKey) } }, U = { init: function () { var e = this; if (e.params.history) { if (!B.history || !B.history.pushState) return e.params.history.enabled = !1, void (e.params.hashNavigation.enabled = !0); var t = e.history; t.initialized = !0, t.paths = U.getPathValues(), (t.paths.key || t.paths.value) && (t.scrollToSlide(0, t.paths.value, e.params.runCallbacksOnInit), e.params.history.replaceState || B.addEventListener("popstate", e.history.setHistoryPopState)) } }, destroy: function () { this.params.history.replaceState || B.removeEventListener("popstate", this.history.setHistoryPopState) }, setHistoryPopState: function () { this.history.paths = U.getPathValues(), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1) }, getPathValues: function () { var e = B.location.pathname.slice(1).split("/").filter(function (e) { return "" !== e }), t = e.length; return { key: e[t - 2], value: e[t - 1] } }, setHistory: function (e, t) { if (this.history.initialized && this.params.history.enabled) { var a = this.slides.eq(t), i = U.slugify(a.attr("data-history")); B.location.pathname.includes(e) || (i = e + "/" + i); var s = B.history.state; s && s.value === i || (this.params.history.replaceState ? B.history.replaceState({ value: i }, null, i) : B.history.pushState({ value: i }, null, i)) } }, slugify: function (e) { return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "") }, scrollToSlide: function (e, t, a) { var i = this; if (t) for (var s = 0, r = i.slides.length; s < r; s += 1) { var n = i.slides.eq(s); if (U.slugify(n.attr("data-history")) === t && !n.hasClass(i.params.slideDuplicateClass)) { var o = n.index(); i.slideTo(o, e, a) } } else i.slideTo(0, e, a) } }, _ = { onHashCange: function () { var e = this, t = f.location.hash.replace("#", ""); t !== e.slides.eq(e.activeIndex).attr("data-hash") && e.slideTo(e.$wrapperEl.children("." + e.params.slideClass + '[data-hash="' + t + '"]').index()) }, setHash: function () { var e = this; if (e.hashNavigation.initialized && e.params.hashNavigation.enabled) if (e.params.hashNavigation.replaceState && B.history && B.history.replaceState) B.history.replaceState(null, null, "#" + e.slides.eq(e.activeIndex).attr("data-hash") || ""); else { var t = e.slides.eq(e.activeIndex), a = t.attr("data-hash") || t.attr("data-history"); f.location.hash = a || "" } }, init: function () { var e = this; if (!(!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled)) { e.hashNavigation.initialized = !0; var t = f.location.hash.replace("#", ""); if (t) for (var a = 0, i = e.slides.length; a < i; a += 1) { var s = e.slides.eq(a); if ((s.attr("data-hash") || s.attr("data-history")) === t && !s.hasClass(e.params.slideDuplicateClass)) { var r = s.index(); e.slideTo(r, 0, e.params.runCallbacksOnInit, !0) } } e.params.hashNavigation.watchState && L(B).on("hashchange", e.hashNavigation.onHashCange) } }, destroy: function () { this.params.hashNavigation.watchState && L(B).off("hashchange", this.hashNavigation.onHashCange) } }, Z = { run: function () { var e = this, t = e.slides.eq(e.activeIndex), a = e.params.autoplay.delay; t.attr("data-swiper-autoplay") && (a = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), e.autoplay.timeout = X.nextTick(function () { e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) }, a) }, start: function () { var e = this; return void 0 === e.autoplay.timeout && (!e.autoplay.running && (e.autoplay.running = !0, e.emit("autoplayStart"), e.autoplay.run(), !0)) }, stop: function () { var e = this; return !!e.autoplay.running && (void 0 !== e.autoplay.timeout && (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout), e.autoplay.timeout = void 0), e.autoplay.running = !1, e.emit("autoplayStop"), !0)) }, pause: function (e) { var t = this; t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), t.autoplay.paused = !0, 0 !== e && t.params.autoplay.waitForTransition ? (t.$wrapperEl[0].addEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].addEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd)) : (t.autoplay.paused = !1, t.autoplay.run()))) } }, Q = { setTranslate: function () { for (var e = this, t = e.slides, a = 0; a < t.length; a += 1) { var i = e.slides.eq(a), s = -i[0].swiperSlideOffset; e.params.virtualTranslate || (s -= e.translate); var r = 0; e.isHorizontal() || (r = s, s = 0); var n = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0); i.css({ opacity: n }).transform("translate3d(" + s + "px, " + r + "px, 0px)") } }, setTransition: function (e) { var a = this, t = a.slides, i = a.$wrapperEl; if (t.transition(e), a.params.virtualTranslate && 0 !== e) { var s = !1; t.transitionEnd(function () { if (!s && a && !a.destroyed) { s = !0, a.animating = !1; for (var e = ["webkitTransitionEnd", "transitionend"], t = 0; t < e.length; t += 1)i.trigger(e[t]) } }) } } }, J = { setTranslate: function () { var e, t = this, a = t.$el, i = t.$wrapperEl, s = t.slides, r = t.width, n = t.height, o = t.rtlTranslate, l = t.size, d = t.params.cubeEffect, p = t.isHorizontal(), c = t.virtual && t.params.virtual.enabled, u = 0; d.shadow && (p ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = L('<div class="swiper-cube-shadow"></div>'), i.append(e)), e.css({ height: r + "px" })) : 0 === (e = a.find(".swiper-cube-shadow")).length && (e = L('<div class="swiper-cube-shadow"></div>'), a.append(e))); for (var h = 0; h < s.length; h += 1) { var v = s.eq(h), f = h; c && (f = parseInt(v.attr("data-swiper-slide-index"), 10)); var m = 90 * f, g = Math.floor(m / 360); o && (m = -m, g = Math.floor(-m / 360)); var b = Math.max(Math.min(v[0].progress, 1), -1), w = 0, y = 0, x = 0; f % 4 == 0 ? (w = 4 * -g * l, x = 0) : (f - 1) % 4 == 0 ? (w = 0, x = 4 * -g * l) : (f - 2) % 4 == 0 ? (w = l + 4 * g * l, x = l) : (f - 3) % 4 == 0 && (w = -l, x = 3 * l + 4 * l * g), o && (w = -w), p || (y = w, w = 0); var E = "rotateX(" + (p ? 0 : -m) + "deg) rotateY(" + (p ? m : 0) + "deg) translate3d(" + w + "px, " + y + "px, " + x + "px)"; if (b <= 1 && -1 < b && (u = 90 * f + 90 * b, o && (u = 90 * -f - 90 * b)), v.transform(E), d.slideShadows) { var T = p ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"), S = p ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom"); 0 === T.length && (T = L('<div class="swiper-slide-shadow-' + (p ? "left" : "top") + '"></div>'), v.append(T)), 0 === S.length && (S = L('<div class="swiper-slide-shadow-' + (p ? "right" : "bottom") + '"></div>'), v.append(S)), T.length && (T[0].style.opacity = Math.max(-b, 0)), S.length && (S[0].style.opacity = Math.max(b, 0)) } } if (i.css({ "-webkit-transform-origin": "50% 50% -" + l / 2 + "px", "-moz-transform-origin": "50% 50% -" + l / 2 + "px", "-ms-transform-origin": "50% 50% -" + l / 2 + "px", "transform-origin": "50% 50% -" + l / 2 + "px" }), d.shadow) if (p) e.transform("translate3d(0px, " + (r / 2 + d.shadowOffset) + "px, " + -r / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + d.shadowScale + ")"); else { var C = Math.abs(u) - 90 * Math.floor(Math.abs(u) / 90), M = 1.5 - (Math.sin(2 * C * Math.PI / 360) / 2 + Math.cos(2 * C * Math.PI / 360) / 2), z = d.shadowScale, k = d.shadowScale / M, P = d.shadowOffset; e.transform("scale3d(" + z + ", 1, " + k + ") translate3d(0px, " + (n / 2 + P) + "px, " + -n / 2 / k + "px) rotateX(-90deg)") } var $ = I.isSafari || I.isUiWebView ? -l / 2 : 0; i.transform("translate3d(0px,0," + $ + "px) rotateX(" + (t.isHorizontal() ? 0 : u) + "deg) rotateY(" + (t.isHorizontal() ? -u : 0) + "deg)") }, setTransition: function (e) { var t = this.$el; this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e) } }, ee = { setTranslate: function () { for (var e = this, t = e.slides, a = e.rtlTranslate, i = 0; i < t.length; i += 1) { var s = t.eq(i), r = s[0].progress; e.params.flipEffect.limitRotation && (r = Math.max(Math.min(s[0].progress, 1), -1)); var n = -180 * r, o = 0, l = -s[0].swiperSlideOffset, d = 0; if (e.isHorizontal() ? a && (n = -n) : (d = l, o = -n, n = l = 0), s[0].style.zIndex = -Math.abs(Math.round(r)) + t.length, e.params.flipEffect.slideShadows) { var p = e.isHorizontal() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top"), c = e.isHorizontal() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom"); 0 === p.length && (p = L('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "left" : "top") + '"></div>'), s.append(p)), 0 === c.length && (c = L('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "right" : "bottom") + '"></div>'), s.append(c)), p.length && (p[0].style.opacity = Math.max(-r, 0)), c.length && (c[0].style.opacity = Math.max(r, 0)) } s.transform("translate3d(" + l + "px, " + d + "px, 0px) rotateX(" + o + "deg) rotateY(" + n + "deg)") } }, setTransition: function (e) { var a = this, t = a.slides, i = a.activeIndex, s = a.$wrapperEl; if (t.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), a.params.virtualTranslate && 0 !== e) { var r = !1; t.eq(i).transitionEnd(function () { if (!r && a && !a.destroyed) { r = !0, a.animating = !1; for (var e = ["webkitTransitionEnd", "transitionend"], t = 0; t < e.length; t += 1)s.trigger(e[t]) } }) } } }, te = { setTranslate: function () { for (var e = this, t = e.width, a = e.height, i = e.slides, s = e.$wrapperEl, r = e.slidesSizesGrid, n = e.params.coverflowEffect, o = e.isHorizontal(), l = e.translate, d = o ? t / 2 - l : a / 2 - l, p = o ? n.rotate : -n.rotate, c = n.depth, u = 0, h = i.length; u < h; u += 1) { var v = i.eq(u), f = r[u], m = (d - v[0].swiperSlideOffset - f / 2) / f * n.modifier, g = o ? p * m : 0, b = o ? 0 : p * m, w = -c * Math.abs(m), y = o ? 0 : n.stretch * m, x = o ? n.stretch * m : 0; Math.abs(x) < .001 && (x = 0), Math.abs(y) < .001 && (y = 0), Math.abs(w) < .001 && (w = 0), Math.abs(g) < .001 && (g = 0), Math.abs(b) < .001 && (b = 0); var E = "translate3d(" + x + "px," + y + "px," + w + "px)  rotateX(" + b + "deg) rotateY(" + g + "deg)"; if (v.transform(E), v[0].style.zIndex = 1 - Math.abs(Math.round(m)), n.slideShadows) { var T = o ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"), S = o ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom"); 0 === T.length && (T = L('<div class="swiper-slide-shadow-' + (o ? "left" : "top") + '"></div>'), v.append(T)), 0 === S.length && (S = L('<div class="swiper-slide-shadow-' + (o ? "right" : "bottom") + '"></div>'), v.append(S)), T.length && (T[0].style.opacity = 0 < m ? m : 0), S.length && (S[0].style.opacity = 0 < -m ? -m : 0) } } (Y.pointerEvents || Y.prefixedPointerEvents) && (s[0].style.perspectiveOrigin = d + "px 50%") }, setTransition: function (e) { this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e) } }, ae = [C, M, z, k, $, O, H, { name: "mousewheel", params: { mousewheel: { enabled: !1, releaseOnEdges: !1, invert: !1, forceToAxis: !1, sensitivity: 1, eventsTarged: "container" } }, create: function () { var e = this; X.extend(e, { mousewheel: { enabled: !1, enable: G.enable.bind(e), disable: G.disable.bind(e), handle: G.handle.bind(e), handleMouseEnter: G.handleMouseEnter.bind(e), handleMouseLeave: G.handleMouseLeave.bind(e), lastScrollTime: X.now() } }) }, on: { init: function () { this.params.mousewheel.enabled && this.mousewheel.enable() }, destroy: function () { this.mousewheel.enabled && this.mousewheel.disable() } } }, { name: "navigation", params: { navigation: { nextEl: null, prevEl: null, hideOnClick: !1, disabledClass: "swiper-button-disabled", hiddenClass: "swiper-button-hidden", lockClass: "swiper-button-lock" } }, create: function () { X.extend(this, { navigation: { init: N.init.bind(this), update: N.update.bind(this), destroy: N.destroy.bind(this) } }) }, on: { init: function () { this.navigation.init(), this.navigation.update() }, toEdge: function () { this.navigation.update() }, fromEdge: function () { this.navigation.update() }, destroy: function () { this.navigation.destroy() }, click: function (e) { var t = this.navigation, a = t.$nextEl, i = t.$prevEl; !this.params.navigation.hideOnClick || L(e.target).is(i) || L(e.target).is(a) || (a && a.toggleClass(this.params.navigation.hiddenClass), i && i.toggleClass(this.params.navigation.hiddenClass)) } } }, { name: "pagination", params: { pagination: { el: null, bulletElement: "span", clickable: !1, hideOnClick: !1, renderBullet: null, renderProgressbar: null, renderFraction: null, renderCustom: null, progressbarOpposite: !1, type: "bullets", dynamicBullets: !1, dynamicMainBullets: 1, formatFractionCurrent: function (e) { return e }, formatFractionTotal: function (e) { return e }, bulletClass: "swiper-pagination-bullet", bulletActiveClass: "swiper-pagination-bullet-active", modifierClass: "swiper-pagination-", currentClass: "swiper-pagination-current", totalClass: "swiper-pagination-total", hiddenClass: "swiper-pagination-hidden", progressbarFillClass: "swiper-pagination-progressbar-fill", progressbarOppositeClass: "swiper-pagination-progressbar-opposite", clickableClass: "swiper-pagination-clickable", lockClass: "swiper-pagination-lock" } }, create: function () { var e = this; X.extend(e, { pagination: { init: V.init.bind(e), render: V.render.bind(e), update: V.update.bind(e), destroy: V.destroy.bind(e), dynamicBulletIndex: 0 } }) }, on: { init: function () { this.pagination.init(), this.pagination.render(), this.pagination.update() }, activeIndexChange: function () { this.params.loop ? this.pagination.update() : void 0 === this.snapIndex && this.pagination.update() }, snapIndexChange: function () { this.params.loop || this.pagination.update() }, slidesLengthChange: function () { this.params.loop && (this.pagination.render(), this.pagination.update()) }, snapGridLengthChange: function () { this.params.loop || (this.pagination.render(), this.pagination.update()) }, destroy: function () { this.pagination.destroy() }, click: function (e) { var t = this; t.params.pagination.el && t.params.pagination.hideOnClick && 0 < t.pagination.$el.length && !L(e.target).hasClass(t.params.pagination.bulletClass) && t.pagination.$el.toggleClass(t.params.pagination.hiddenClass) } } }, { name: "scrollbar", params: { scrollbar: { el: null, dragSize: "auto", hide: !1, draggable: !1, snapOnRelease: !0, lockClass: "swiper-scrollbar-lock", dragClass: "swiper-scrollbar-drag" } }, create: function () { var e = this; X.extend(e, { scrollbar: { init: R.init.bind(e), destroy: R.destroy.bind(e), updateSize: R.updateSize.bind(e), setTranslate: R.setTranslate.bind(e), setTransition: R.setTransition.bind(e), enableDraggable: R.enableDraggable.bind(e), disableDraggable: R.disableDraggable.bind(e), setDragPosition: R.setDragPosition.bind(e), onDragStart: R.onDragStart.bind(e), onDragMove: R.onDragMove.bind(e), onDragEnd: R.onDragEnd.bind(e), isTouched: !1, timeout: null, dragTimeout: null } }) }, on: { init: function () { this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate() }, update: function () { this.scrollbar.updateSize() }, resize: function () { this.scrollbar.updateSize() }, observerUpdate: function () { this.scrollbar.updateSize() }, setTranslate: function () { this.scrollbar.setTranslate() }, setTransition: function (e) { this.scrollbar.setTransition(e) }, destroy: function () { this.scrollbar.destroy() } } }, { name: "parallax", params: { parallax: { enabled: !1 } }, create: function () { X.extend(this, { parallax: { setTransform: F.setTransform.bind(this), setTranslate: F.setTranslate.bind(this), setTransition: F.setTransition.bind(this) } }) }, on: { beforeInit: function () { this.params.parallax.enabled && (this.params.watchSlidesProgress = !0) }, init: function () { this.params.parallax && this.parallax.setTranslate() }, setTranslate: function () { this.params.parallax && this.parallax.setTranslate() }, setTransition: function (e) { this.params.parallax && this.parallax.setTransition(e) } } }, { name: "zoom", params: { zoom: { enabled: !1, maxRatio: 3, minRatio: 1, toggle: !0, containerClass: "swiper-zoom-container", zoomedSlideClass: "swiper-slide-zoomed" } }, create: function () { var t = this, a = { enabled: !1, scale: 1, currentScale: 1, isScaling: !1, gesture: { $slideEl: void 0, slideWidth: void 0, slideHeight: void 0, $imageEl: void 0, $imageWrapEl: void 0, maxRatio: 3 }, image: { isTouched: void 0, isMoved: void 0, currentX: void 0, currentY: void 0, minX: void 0, minY: void 0, maxX: void 0, maxY: void 0, width: void 0, height: void 0, startX: void 0, startY: void 0, touchesStart: {}, touchesCurrent: {} }, velocity: { x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0 } }; "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function (e) { a[e] = W[e].bind(t) }), X.extend(t, { zoom: a }) }, on: { init: function () { this.params.zoom.enabled && this.zoom.enable() }, destroy: function () { this.zoom.disable() }, touchStart: function (e) { this.zoom.enabled && this.zoom.onTouchStart(e) }, touchEnd: function (e) { this.zoom.enabled && this.zoom.onTouchEnd(e) }, doubleTap: function (e) { this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e) }, transitionEnd: function () { this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd() } } }, { name: "lazy", params: { lazy: { enabled: !1, loadPrevNext: !1, loadPrevNextAmount: 1, loadOnTransitionStart: !1, elementClass: "swiper-lazy", loadingClass: "swiper-lazy-loading", loadedClass: "swiper-lazy-loaded", preloaderClass: "swiper-lazy-preloader" } }, create: function () { X.extend(this, { lazy: { initialImageLoaded: !1, load: q.load.bind(this), loadInSlide: q.loadInSlide.bind(this) } }) }, on: { beforeInit: function () { this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1) }, init: function () { this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load() }, scroll: function () { this.params.freeMode && !this.params.freeModeSticky && this.lazy.load() }, resize: function () { this.params.lazy.enabled && this.lazy.load() }, scrollbarDragMove: function () { this.params.lazy.enabled && this.lazy.load() }, transitionStart: function () { var e = this; e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded) && e.lazy.load() }, transitionEnd: function () { this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load() } } }, { name: "controller", params: { controller: { control: void 0, inverse: !1, by: "slide" } }, create: function () { var e = this; X.extend(e, { controller: { control: e.params.controller.control, getInterpolateFunction: j.getInterpolateFunction.bind(e), setTranslate: j.setTranslate.bind(e), setTransition: j.setTransition.bind(e) } }) }, on: { update: function () { this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline) }, resize: function () { this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline) }, observerUpdate: function () { this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline) }, setTranslate: function (e, t) { this.controller.control && this.controller.setTranslate(e, t) }, setTransition: function (e, t) { this.controller.control && this.controller.setTransition(e, t) } } }, { name: "a11y", params: { a11y: { enabled: !0, notificationClass: "swiper-notification", prevSlideMessage: "Previous slide", nextSlideMessage: "Next slide", firstSlideMessage: "This is the first slide", lastSlideMessage: "This is the last slide", paginationBulletMessage: "Go to slide {{index}}" } }, create: function () { var t = this; X.extend(t, { a11y: { liveRegion: L('<span class="' + t.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>') } }), Object.keys(K).forEach(function (e) { t.a11y[e] = K[e].bind(t) }) }, on: { init: function () { this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation()) }, toEdge: function () { this.params.a11y.enabled && this.a11y.updateNavigation() }, fromEdge: function () { this.params.a11y.enabled && this.a11y.updateNavigation() }, paginationUpdate: function () { this.params.a11y.enabled && this.a11y.updatePagination() }, destroy: function () { this.params.a11y.enabled && this.a11y.destroy() } } }, { name: "history", params: { history: { enabled: !1, replaceState: !1, key: "slides" } }, create: function () { var e = this; X.extend(e, { history: { init: U.init.bind(e), setHistory: U.setHistory.bind(e), setHistoryPopState: U.setHistoryPopState.bind(e), scrollToSlide: U.scrollToSlide.bind(e), destroy: U.destroy.bind(e) } }) }, on: { init: function () { this.params.history.enabled && this.history.init() }, destroy: function () { this.params.history.enabled && this.history.destroy() }, transitionEnd: function () { this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex) } } }, { name: "hash-navigation", params: { hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 } }, create: function () { var e = this; X.extend(e, { hashNavigation: { initialized: !1, init: _.init.bind(e), destroy: _.destroy.bind(e), setHash: _.setHash.bind(e), onHashCange: _.onHashCange.bind(e) } }) }, on: { init: function () { this.params.hashNavigation.enabled && this.hashNavigation.init() }, destroy: function () { this.params.hashNavigation.enabled && this.hashNavigation.destroy() }, transitionEnd: function () { this.hashNavigation.initialized && this.hashNavigation.setHash() } } }, { name: "autoplay", params: { autoplay: { enabled: !1, delay: 3e3, waitForTransition: !0, disableOnInteraction: !0, stopOnLastSlide: !1, reverseDirection: !1 } }, create: function () { var t = this; X.extend(t, { autoplay: { running: !1, paused: !1, run: Z.run.bind(t), start: Z.start.bind(t), stop: Z.stop.bind(t), pause: Z.pause.bind(t), onTransitionEnd: function (e) { t && !t.destroyed && t.$wrapperEl && e.target === this && (t.$wrapperEl[0].removeEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].removeEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd), t.autoplay.paused = !1, t.autoplay.running ? t.autoplay.run() : t.autoplay.stop()) } } }) }, on: { init: function () { this.params.autoplay.enabled && this.autoplay.start() }, beforeTransitionStart: function (e, t) { this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop()) }, sliderFirstMove: function () { this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause()) }, destroy: function () { this.autoplay.running && this.autoplay.stop() } } }, { name: "effect-fade", params: { fadeEffect: { crossFade: !1 } }, create: function () { X.extend(this, { fadeEffect: { setTranslate: Q.setTranslate.bind(this), setTransition: Q.setTransition.bind(this) } }) }, on: { beforeInit: function () { var e = this; if ("fade" === e.params.effect) { e.classNames.push(e.params.containerModifierClass + "fade"); var t = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !0 }; X.extend(e.params, t), X.extend(e.originalParams, t) } }, setTranslate: function () { "fade" === this.params.effect && this.fadeEffect.setTranslate() }, setTransition: function (e) { "fade" === this.params.effect && this.fadeEffect.setTransition(e) } } }, { name: "effect-cube", params: { cubeEffect: { slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: .94 } }, create: function () { X.extend(this, { cubeEffect: { setTranslate: J.setTranslate.bind(this), setTransition: J.setTransition.bind(this) } }) }, on: { beforeInit: function () { var e = this; if ("cube" === e.params.effect) { e.classNames.push(e.params.containerModifierClass + "cube"), e.classNames.push(e.params.containerModifierClass + "3d"); var t = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, resistanceRatio: 0, spaceBetween: 0, centeredSlides: !1, virtualTranslate: !0 }; X.extend(e.params, t), X.extend(e.originalParams, t) } }, setTranslate: function () { "cube" === this.params.effect && this.cubeEffect.setTranslate() }, setTransition: function (e) { "cube" === this.params.effect && this.cubeEffect.setTransition(e) } } }, { name: "effect-flip", params: { flipEffect: { slideShadows: !0, limitRotation: !0 } }, create: function () { X.extend(this, { flipEffect: { setTranslate: ee.setTranslate.bind(this), setTransition: ee.setTransition.bind(this) } }) }, on: { beforeInit: function () { var e = this; if ("flip" === e.params.effect) { e.classNames.push(e.params.containerModifierClass + "flip"), e.classNames.push(e.params.containerModifierClass + "3d"); var t = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !0 }; X.extend(e.params, t), X.extend(e.originalParams, t) } }, setTranslate: function () { "flip" === this.params.effect && this.flipEffect.setTranslate() }, setTransition: function (e) { "flip" === this.params.effect && this.flipEffect.setTransition(e) } } }, { name: "effect-coverflow", params: { coverflowEffect: { rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: !0 } }, create: function () { X.extend(this, { coverflowEffect: { setTranslate: te.setTranslate.bind(this), setTransition: te.setTransition.bind(this) } }) }, on: { beforeInit: function () { var e = this; "coverflow" === e.params.effect && (e.classNames.push(e.params.containerModifierClass + "coverflow"), e.classNames.push(e.params.containerModifierClass + "3d"), e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0) }, setTranslate: function () { "coverflow" === this.params.effect && this.coverflowEffect.setTranslate() }, setTransition: function (e) { "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e) } } }]; return void 0 === S.use && (S.use = S.Class.use, S.installModule = S.Class.installModule), S.use(ae), S });
//# sourceMappingURL=swiper.min.js.map

/*!
 * Masonry PACKAGED v4.2.2
 * Cascading grid layout library
 * https://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */

!function (t, e) { "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) { return e(t, i) }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery) }(window, function (t, e) { "use strict"; function i(i, r, a) { function h(t, e, n) { var o, r = "$()." + i + '("' + e + '")'; return t.each(function (t, h) { var u = a.data(h, i); if (!u) return void s(i + " not initialized. Cannot call methods, i.e. " + r); var d = u[e]; if (!d || "_" == e.charAt(0)) return void s(r + " is not a valid method"); var l = d.apply(u, n); o = void 0 === o ? l : o }), void 0 !== o ? o : t } function u(t, e) { t.each(function (t, n) { var o = a.data(n, i); o ? (o.option(e), o._init()) : (o = new r(n, e), a.data(n, i, o)) }) } a = a || e || t.jQuery, a && (r.prototype.option || (r.prototype.option = function (t) { a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t)) }), a.fn[i] = function (t) { if ("string" == typeof t) { var e = o.call(arguments, 1); return h(this, t, e) } return u(this, t), this }, n(a)) } function n(t) { !t || t && t.bridget || (t.bridget = i) } var o = Array.prototype.slice, r = t.console, s = "undefined" == typeof r ? function () { } : function (t) { r.error(t) }; return n(e || t.jQuery), i }), function (t, e) { "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e() }("undefined" != typeof window ? window : this, function () { function t() { } var e = t.prototype; return e.on = function (t, e) { if (t && e) { var i = this._events = this._events || {}, n = i[t] = i[t] || []; return -1 == n.indexOf(e) && n.push(e), this } }, e.once = function (t, e) { if (t && e) { this.on(t, e); var i = this._onceEvents = this._onceEvents || {}, n = i[t] = i[t] || {}; return n[e] = !0, this } }, e.off = function (t, e) { var i = this._events && this._events[t]; if (i && i.length) { var n = i.indexOf(e); return -1 != n && i.splice(n, 1), this } }, e.emitEvent = function (t, e) { var i = this._events && this._events[t]; if (i && i.length) { i = i.slice(0), e = e || []; for (var n = this._onceEvents && this._onceEvents[t], o = 0; o < i.length; o++) { var r = i[o], s = n && n[r]; s && (this.off(t, r), delete n[r]), r.apply(this, e) } return this } }, e.allOff = function () { delete this._events, delete this._onceEvents }, t }), function (t, e) { "function" == typeof define && define.amd ? define("get-size/get-size", e) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e() }(window, function () { "use strict"; function t(t) { var e = parseFloat(t), i = -1 == t.indexOf("%") && !isNaN(e); return i && e } function e() { } function i() { for (var t = { width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 }, e = 0; u > e; e++) { var i = h[e]; t[i] = 0 } return t } function n(t) { var e = getComputedStyle(t); return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), e } function o() { if (!d) { d = !0; var e = document.createElement("div"); e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box"; var i = document.body || document.documentElement; i.appendChild(e); var o = n(e); s = 200 == Math.round(t(o.width)), r.isBoxSizeOuter = s, i.removeChild(e) } } function r(e) { if (o(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) { var r = n(e); if ("none" == r.display) return i(); var a = {}; a.width = e.offsetWidth, a.height = e.offsetHeight; for (var d = a.isBorderBox = "border-box" == r.boxSizing, l = 0; u > l; l++) { var c = h[l], f = r[c], m = parseFloat(f); a[c] = isNaN(m) ? 0 : m } var p = a.paddingLeft + a.paddingRight, g = a.paddingTop + a.paddingBottom, y = a.marginLeft + a.marginRight, v = a.marginTop + a.marginBottom, _ = a.borderLeftWidth + a.borderRightWidth, z = a.borderTopWidth + a.borderBottomWidth, E = d && s, b = t(r.width); b !== !1 && (a.width = b + (E ? 0 : p + _)); var x = t(r.height); return x !== !1 && (a.height = x + (E ? 0 : g + z)), a.innerWidth = a.width - (p + _), a.innerHeight = a.height - (g + z), a.outerWidth = a.width + y, a.outerHeight = a.height + v, a } } var s, a = "undefined" == typeof console ? e : function (t) { console.error(t) }, h = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"], u = h.length, d = !1; return r }), function (t, e) { "use strict"; "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e() }(window, function () { "use strict"; var t = function () { var t = window.Element.prototype; if (t.matches) return "matches"; if (t.matchesSelector) return "matchesSelector"; for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) { var n = e[i], o = n + "MatchesSelector"; if (t[o]) return o } }(); return function (e, i) { return e[t](i) } }), function (t, e) { "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (i) { return e(t, i) }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector) }(window, function (t, e) { var i = {}; i.extend = function (t, e) { for (var i in e) t[i] = e[i]; return t }, i.modulo = function (t, e) { return (t % e + e) % e }; var n = Array.prototype.slice; i.makeArray = function (t) { if (Array.isArray(t)) return t; if (null === t || void 0 === t) return []; var e = "object" == typeof t && "number" == typeof t.length; return e ? n.call(t) : [t] }, i.removeFrom = function (t, e) { var i = t.indexOf(e); -1 != i && t.splice(i, 1) }, i.getParent = function (t, i) { for (; t.parentNode && t != document.body;)if (t = t.parentNode, e(t, i)) return t }, i.getQueryElement = function (t) { return "string" == typeof t ? document.querySelector(t) : t }, i.handleEvent = function (t) { var e = "on" + t.type; this[e] && this[e](t) }, i.filterFindElements = function (t, n) { t = i.makeArray(t); var o = []; return t.forEach(function (t) { if (t instanceof HTMLElement) { if (!n) return void o.push(t); e(t, n) && o.push(t); for (var i = t.querySelectorAll(n), r = 0; r < i.length; r++)o.push(i[r]) } }), o }, i.debounceMethod = function (t, e, i) { i = i || 100; var n = t.prototype[e], o = e + "Timeout"; t.prototype[e] = function () { var t = this[o]; clearTimeout(t); var e = arguments, r = this; this[o] = setTimeout(function () { n.apply(r, e), delete r[o] }, i) } }, i.docReady = function (t) { var e = document.readyState; "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t) }, i.toDashed = function (t) { return t.replace(/(.)([A-Z])/g, function (t, e, i) { return e + "-" + i }).toLowerCase() }; var o = t.console; return i.htmlInit = function (e, n) { i.docReady(function () { var r = i.toDashed(n), s = "data-" + r, a = document.querySelectorAll("[" + s + "]"), h = document.querySelectorAll(".js-" + r), u = i.makeArray(a).concat(i.makeArray(h)), d = s + "-options", l = t.jQuery; u.forEach(function (t) { var i, r = t.getAttribute(s) || t.getAttribute(d); try { i = r && JSON.parse(r) } catch (a) { return void (o && o.error("Error parsing " + s + " on " + t.className + ": " + a)) } var h = new e(t, i); l && l.data(t, n, h) }) }) }, i }), function (t, e) { "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize)) }(window, function (t, e) { "use strict"; function i(t) { for (var e in t) return !1; return e = null, !0 } function n(t, e) { t && (this.element = t, this.layout = e, this.position = { x: 0, y: 0 }, this._create()) } function o(t) { return t.replace(/([A-Z])/g, function (t) { return "-" + t.toLowerCase() }) } var r = document.documentElement.style, s = "string" == typeof r.transition ? "transition" : "WebkitTransition", a = "string" == typeof r.transform ? "transform" : "WebkitTransform", h = { WebkitTransition: "webkitTransitionEnd", transition: "transitionend" }[s], u = { transform: a, transition: s, transitionDuration: s + "Duration", transitionProperty: s + "Property", transitionDelay: s + "Delay" }, d = n.prototype = Object.create(t.prototype); d.constructor = n, d._create = function () { this._transn = { ingProperties: {}, clean: {}, onEnd: {} }, this.css({ position: "absolute" }) }, d.handleEvent = function (t) { var e = "on" + t.type; this[e] && this[e](t) }, d.getSize = function () { this.size = e(this.element) }, d.css = function (t) { var e = this.element.style; for (var i in t) { var n = u[i] || i; e[n] = t[i] } }, d.getPosition = function () { var t = getComputedStyle(this.element), e = this.layout._getOption("originLeft"), i = this.layout._getOption("originTop"), n = t[e ? "left" : "right"], o = t[i ? "top" : "bottom"], r = parseFloat(n), s = parseFloat(o), a = this.layout.size; -1 != n.indexOf("%") && (r = r / 100 * a.width), -1 != o.indexOf("%") && (s = s / 100 * a.height), r = isNaN(r) ? 0 : r, s = isNaN(s) ? 0 : s, r -= e ? a.paddingLeft : a.paddingRight, s -= i ? a.paddingTop : a.paddingBottom, this.position.x = r, this.position.y = s }, d.layoutPosition = function () { var t = this.layout.size, e = {}, i = this.layout._getOption("originLeft"), n = this.layout._getOption("originTop"), o = i ? "paddingLeft" : "paddingRight", r = i ? "left" : "right", s = i ? "right" : "left", a = this.position.x + t[o]; e[r] = this.getXValue(a), e[s] = ""; var h = n ? "paddingTop" : "paddingBottom", u = n ? "top" : "bottom", d = n ? "bottom" : "top", l = this.position.y + t[h]; e[u] = this.getYValue(l), e[d] = "", this.css(e), this.emitEvent("layout", [this]) }, d.getXValue = function (t) { var e = this.layout._getOption("horizontal"); return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px" }, d.getYValue = function (t) { var e = this.layout._getOption("horizontal"); return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px" }, d._transitionTo = function (t, e) { this.getPosition(); var i = this.position.x, n = this.position.y, o = t == this.position.x && e == this.position.y; if (this.setPosition(t, e), o && !this.isTransitioning) return void this.layoutPosition(); var r = t - i, s = e - n, a = {}; a.transform = this.getTranslate(r, s), this.transition({ to: a, onTransitionEnd: { transform: this.layoutPosition }, isCleaning: !0 }) }, d.getTranslate = function (t, e) { var i = this.layout._getOption("originLeft"), n = this.layout._getOption("originTop"); return t = i ? t : -t, e = n ? e : -e, "translate3d(" + t + "px, " + e + "px, 0)" }, d.goTo = function (t, e) { this.setPosition(t, e), this.layoutPosition() }, d.moveTo = d._transitionTo, d.setPosition = function (t, e) { this.position.x = parseFloat(t), this.position.y = parseFloat(e) }, d._nonTransition = function (t) { this.css(t.to), t.isCleaning && this._removeStyles(t.to); for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this) }, d.transition = function (t) { if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t); var e = this._transn; for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i]; for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0); if (t.from) { this.css(t.from); var n = this.element.offsetHeight; n = null } this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0 }; var l = "opacity," + o(a); d.enableTransition = function () { if (!this.isTransitioning) { var t = this.layout.options.transitionDuration; t = "number" == typeof t ? t + "ms" : t, this.css({ transitionProperty: l, transitionDuration: t, transitionDelay: this.staggerDelay || 0 }), this.element.addEventListener(h, this, !1) } }, d.onwebkitTransitionEnd = function (t) { this.ontransitionend(t) }, d.onotransitionend = function (t) { this.ontransitionend(t) }; var c = { "-webkit-transform": "transform" }; d.ontransitionend = function (t) { if (t.target === this.element) { var e = this._transn, n = c[t.propertyName] || t.propertyName; if (delete e.ingProperties[n], i(e.ingProperties) && this.disableTransition(), n in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[n]), n in e.onEnd) { var o = e.onEnd[n]; o.call(this), delete e.onEnd[n] } this.emitEvent("transitionEnd", [this]) } }, d.disableTransition = function () { this.removeTransitionStyles(), this.element.removeEventListener(h, this, !1), this.isTransitioning = !1 }, d._removeStyles = function (t) { var e = {}; for (var i in t) e[i] = ""; this.css(e) }; var f = { transitionProperty: "", transitionDuration: "", transitionDelay: "" }; return d.removeTransitionStyles = function () { this.css(f) }, d.stagger = function (t) { t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms" }, d.removeElem = function () { this.element.parentNode.removeChild(this.element), this.css({ display: "" }), this.emitEvent("remove", [this]) }, d.remove = function () { return s && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function () { this.removeElem() }), void this.hide()) : void this.removeElem() }, d.reveal = function () { delete this.isHidden, this.css({ display: "" }); var t = this.layout.options, e = {}, i = this.getHideRevealTransitionEndProperty("visibleStyle"); e[i] = this.onRevealTransitionEnd, this.transition({ from: t.hiddenStyle, to: t.visibleStyle, isCleaning: !0, onTransitionEnd: e }) }, d.onRevealTransitionEnd = function () { this.isHidden || this.emitEvent("reveal") }, d.getHideRevealTransitionEndProperty = function (t) { var e = this.layout.options[t]; if (e.opacity) return "opacity"; for (var i in e) return i }, d.hide = function () { this.isHidden = !0, this.css({ display: "" }); var t = this.layout.options, e = {}, i = this.getHideRevealTransitionEndProperty("hiddenStyle"); e[i] = this.onHideTransitionEnd, this.transition({ from: t.visibleStyle, to: t.hiddenStyle, isCleaning: !0, onTransitionEnd: e }) }, d.onHideTransitionEnd = function () { this.isHidden && (this.css({ display: "none" }), this.emitEvent("hide")) }, d.destroy = function () { this.css({ position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: "" }) }, n }), function (t, e) { "use strict"; "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (i, n, o, r) { return e(t, i, n, o, r) }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item) }(window, function (t, e, i, n, o) { "use strict"; function r(t, e) { var i = n.getQueryElement(t); if (!i) return void (h && h.error("Bad element for " + this.constructor.namespace + ": " + (i || t))); this.element = i, u && (this.$element = u(this.element)), this.options = n.extend({}, this.constructor.defaults), this.option(e); var o = ++l; this.element.outlayerGUID = o, c[o] = this, this._create(); var r = this._getOption("initLayout"); r && this.layout() } function s(t) { function e() { t.apply(this, arguments) } return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e } function a(t) { if ("number" == typeof t) return t; var e = t.match(/(^\d*\.?\d*)(\w*)/), i = e && e[1], n = e && e[2]; if (!i.length) return 0; i = parseFloat(i); var o = m[n] || 1; return i * o } var h = t.console, u = t.jQuery, d = function () { }, l = 0, c = {}; r.namespace = "outlayer", r.Item = o, r.defaults = { containerStyle: { position: "relative" }, initLayout: !0, originLeft: !0, originTop: !0, resize: !0, resizeContainer: !0, transitionDuration: "0.4s", hiddenStyle: { opacity: 0, transform: "scale(0.001)" }, visibleStyle: { opacity: 1, transform: "scale(1)" } }; var f = r.prototype; n.extend(f, e.prototype), f.option = function (t) { n.extend(this.options, t) }, f._getOption = function (t) { var e = this.constructor.compatOptions[t]; return e && void 0 !== this.options[e] ? this.options[e] : this.options[t] }, r.compatOptions = { initLayout: "isInitLayout", horizontal: "isHorizontal", layoutInstant: "isLayoutInstant", originLeft: "isOriginLeft", originTop: "isOriginTop", resize: "isResizeBound", resizeContainer: "isResizingContainer" }, f._create = function () { this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), n.extend(this.element.style, this.options.containerStyle); var t = this._getOption("resize"); t && this.bindResize() }, f.reloadItems = function () { this.items = this._itemize(this.element.children) }, f._itemize = function (t) { for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], o = 0; o < e.length; o++) { var r = e[o], s = new i(r, this); n.push(s) } return n }, f._filterFindItemElements = function (t) { return n.filterFindElements(t, this.options.itemSelector) }, f.getItemElements = function () { return this.items.map(function (t) { return t.element }) }, f.layout = function () { this._resetLayout(), this._manageStamps(); var t = this._getOption("layoutInstant"), e = void 0 !== t ? t : !this._isLayoutInited; this.layoutItems(this.items, e), this._isLayoutInited = !0 }, f._init = f.layout, f._resetLayout = function () { this.getSize() }, f.getSize = function () { this.size = i(this.element) }, f._getMeasurement = function (t, e) { var n, o = this.options[t]; o ? ("string" == typeof o ? n = this.element.querySelector(o) : o instanceof HTMLElement && (n = o), this[t] = n ? i(n)[e] : o) : this[t] = 0 }, f.layoutItems = function (t, e) { t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout() }, f._getItemsForLayout = function (t) { return t.filter(function (t) { return !t.isIgnored }) }, f._layoutItems = function (t, e) { if (this._emitCompleteOnItems("layout", t), t && t.length) { var i = []; t.forEach(function (t) { var n = this._getItemLayoutPosition(t); n.item = t, n.isInstant = e || t.isLayoutInstant, i.push(n) }, this), this._processLayoutQueue(i) } }, f._getItemLayoutPosition = function () { return { x: 0, y: 0 } }, f._processLayoutQueue = function (t) { this.updateStagger(), t.forEach(function (t, e) { this._positionItem(t.item, t.x, t.y, t.isInstant, e) }, this) }, f.updateStagger = function () { var t = this.options.stagger; return null === t || void 0 === t ? void (this.stagger = 0) : (this.stagger = a(t), this.stagger) }, f._positionItem = function (t, e, i, n, o) { n ? t.goTo(e, i) : (t.stagger(o * this.stagger), t.moveTo(e, i)) }, f._postLayout = function () { this.resizeContainer() }, f.resizeContainer = function () { var t = this._getOption("resizeContainer"); if (t) { var e = this._getContainerSize(); e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1)) } }, f._getContainerSize = d, f._setContainerMeasure = function (t, e) { if (void 0 !== t) { var i = this.size; i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px" } }, f._emitCompleteOnItems = function (t, e) { function i() { o.dispatchEvent(t + "Complete", null, [e]) } function n() { s++, s == r && i() } var o = this, r = e.length; if (!e || !r) return void i(); var s = 0; e.forEach(function (e) { e.once(t, n) }) }, f.dispatchEvent = function (t, e, i) { var n = e ? [e].concat(i) : i; if (this.emitEvent(t, n), u) if (this.$element = this.$element || u(this.element), e) { var o = u.Event(e); o.type = t, this.$element.trigger(o, i) } else this.$element.trigger(t, i) }, f.ignore = function (t) { var e = this.getItem(t); e && (e.isIgnored = !0) }, f.unignore = function (t) { var e = this.getItem(t); e && delete e.isIgnored }, f.stamp = function (t) { t = this._find(t), t && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this)) }, f.unstamp = function (t) { t = this._find(t), t && t.forEach(function (t) { n.removeFrom(this.stamps, t), this.unignore(t) }, this) }, f._find = function (t) { return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = n.makeArray(t)) : void 0 }, f._manageStamps = function () { this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this)) }, f._getBoundingRect = function () { var t = this.element.getBoundingClientRect(), e = this.size; this._boundingRect = { left: t.left + e.paddingLeft + e.borderLeftWidth, top: t.top + e.paddingTop + e.borderTopWidth, right: t.right - (e.paddingRight + e.borderRightWidth), bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth) } }, f._manageStamp = d, f._getElementOffset = function (t) { var e = t.getBoundingClientRect(), n = this._boundingRect, o = i(t), r = { left: e.left - n.left - o.marginLeft, top: e.top - n.top - o.marginTop, right: n.right - e.right - o.marginRight, bottom: n.bottom - e.bottom - o.marginBottom }; return r }, f.handleEvent = n.handleEvent, f.bindResize = function () { t.addEventListener("resize", this), this.isResizeBound = !0 }, f.unbindResize = function () { t.removeEventListener("resize", this), this.isResizeBound = !1 }, f.onresize = function () { this.resize() }, n.debounceMethod(r, "onresize", 100), f.resize = function () { this.isResizeBound && this.needsResizeLayout() && this.layout() }, f.needsResizeLayout = function () { var t = i(this.element), e = this.size && t; return e && t.innerWidth !== this.size.innerWidth }, f.addItems = function (t) { var e = this._itemize(t); return e.length && (this.items = this.items.concat(e)), e }, f.appended = function (t) { var e = this.addItems(t); e.length && (this.layoutItems(e, !0), this.reveal(e)) }, f.prepended = function (t) { var e = this._itemize(t); if (e.length) { var i = this.items.slice(0); this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i) } }, f.reveal = function (t) { if (this._emitCompleteOnItems("reveal", t), t && t.length) { var e = this.updateStagger(); t.forEach(function (t, i) { t.stagger(i * e), t.reveal() }) } }, f.hide = function (t) { if (this._emitCompleteOnItems("hide", t), t && t.length) { var e = this.updateStagger(); t.forEach(function (t, i) { t.stagger(i * e), t.hide() }) } }, f.revealItemElements = function (t) { var e = this.getItems(t); this.reveal(e) }, f.hideItemElements = function (t) { var e = this.getItems(t); this.hide(e) }, f.getItem = function (t) { for (var e = 0; e < this.items.length; e++) { var i = this.items[e]; if (i.element == t) return i } }, f.getItems = function (t) { t = n.makeArray(t); var e = []; return t.forEach(function (t) { var i = this.getItem(t); i && e.push(i) }, this), e }, f.remove = function (t) { var e = this.getItems(t); this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function (t) { t.remove(), n.removeFrom(this.items, t) }, this) }, f.destroy = function () { var t = this.element.style; t.height = "", t.position = "", t.width = "", this.items.forEach(function (t) { t.destroy() }), this.unbindResize(); var e = this.element.outlayerGUID; delete c[e], delete this.element.outlayerGUID, u && u.removeData(this.element, this.constructor.namespace) }, r.data = function (t) { t = n.getQueryElement(t); var e = t && t.outlayerGUID; return e && c[e] }, r.create = function (t, e) { var i = s(r); return i.defaults = n.extend({}, r.defaults), n.extend(i.defaults, e), i.compatOptions = n.extend({}, r.compatOptions), i.namespace = t, i.data = r.data, i.Item = s(o), n.htmlInit(i, t), u && u.bridget && u.bridget(t, i), i }; var m = { ms: 1, s: 1e3 }; return r.Item = o, r }), function (t, e) { "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize) }(window, function (t, e) { var i = t.create("masonry"); i.compatOptions.fitWidth = "isFitWidth"; var n = i.prototype; return n._resetLayout = function () { this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = []; for (var t = 0; t < this.cols; t++)this.colYs.push(0); this.maxY = 0, this.horizontalColIndex = 0 }, n.measureColumns = function () { if (this.getContainerWidth(), !this.columnWidth) { var t = this.items[0], i = t && t.element; this.columnWidth = i && e(i).outerWidth || this.containerWidth } var n = this.columnWidth += this.gutter, o = this.containerWidth + this.gutter, r = o / n, s = n - o % n, a = s && 1 > s ? "round" : "floor"; r = Math[a](r), this.cols = Math.max(r, 1) }, n.getContainerWidth = function () { var t = this._getOption("fitWidth"), i = t ? this.element.parentNode : this.element, n = e(i); this.containerWidth = n && n.innerWidth }, n._getItemLayoutPosition = function (t) { t.getSize(); var e = t.size.outerWidth % this.columnWidth, i = e && 1 > e ? "round" : "ceil", n = Math[i](t.size.outerWidth / this.columnWidth); n = Math.min(n, this.cols); for (var o = this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition", r = this[o](n, t), s = { x: this.columnWidth * r.col, y: r.y }, a = r.y + t.size.outerHeight, h = n + r.col, u = r.col; h > u; u++)this.colYs[u] = a; return s }, n._getTopColPosition = function (t) { var e = this._getTopColGroup(t), i = Math.min.apply(Math, e); return { col: e.indexOf(i), y: i } }, n._getTopColGroup = function (t) { if (2 > t) return this.colYs; for (var e = [], i = this.cols + 1 - t, n = 0; i > n; n++)e[n] = this._getColGroupY(n, t); return e }, n._getColGroupY = function (t, e) { if (2 > e) return this.colYs[t]; var i = this.colYs.slice(t, t + e); return Math.max.apply(Math, i) }, n._getHorizontalColPosition = function (t, e) { var i = this.horizontalColIndex % this.cols, n = t > 1 && i + t > this.cols; i = n ? 0 : i; var o = e.size.outerWidth && e.size.outerHeight; return this.horizontalColIndex = o ? i + t : this.horizontalColIndex, { col: i, y: this._getColGroupY(i, t) } }, n._manageStamp = function (t) { var i = e(t), n = this._getElementOffset(t), o = this._getOption("originLeft"), r = o ? n.left : n.right, s = r + i.outerWidth, a = Math.floor(r / this.columnWidth); a = Math.max(0, a); var h = Math.floor(s / this.columnWidth); h -= s % this.columnWidth ? 0 : 1, h = Math.min(this.cols - 1, h); for (var u = this._getOption("originTop"), d = (u ? n.top : n.bottom) + i.outerHeight, l = a; h >= l; l++)this.colYs[l] = Math.max(d, this.colYs[l]) }, n._getContainerSize = function () { this.maxY = Math.max.apply(Math, this.colYs); var t = { height: this.maxY }; return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t }, n._getContainerFitWidth = function () { for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];)t++; return (this.cols - t) * this.columnWidth - this.gutter }, n.needsResizeLayout = function () { var t = this.containerWidth; return this.getContainerWidth(), t != this.containerWidth }, i });

/*! jQuery UI - v1.12.1 - 2016-09-14
* http://jqueryui.com
* Includes: widget.js, position.js, data.js, disable-selection.js, effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js, focusable.js, form-reset-mixin.js, jquery-1-7.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/accordion.js, widgets/autocomplete.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/datepicker.js, widgets/dialog.js, widgets/draggable.js, widgets/droppable.js, widgets/menu.js, widgets/mouse.js, widgets/progressbar.js, widgets/resizable.js, widgets/selectable.js, widgets/selectmenu.js, widgets/slider.js, widgets/sortable.js, widgets/spinner.js, widgets/tabs.js, widgets/tooltip.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */

(function (factory) {
    if (typeof define === "function" && define.amd) {

        // AMD. Register as an anonymous module.
        define(["jquery"], factory);
    } else {

        // Browser globals
        factory(jQuery);
    }
}(function ($) {

    $.ui = $.ui || {};

    var version = $.ui.version = "1.12.1";


    /*!
     * jQuery UI Widget 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */

    //>>label: Widget
    //>>group: Core
    //>>description: Provides a factory for creating stateful widgets with a common API.
    //>>docs: http://api.jqueryui.com/jQuery.widget/
    //>>demos: http://jqueryui.com/widget/



    var widgetUuid = 0;
    var widgetSlice = Array.prototype.slice;

    $.cleanData = (function (orig) {
        return function (elems) {
            var events, elem, i;
            for (i = 0; (elem = elems[i]) != null; i++) {
                try {

                    // Only trigger remove when necessary to save time
                    events = $._data(elem, "events");
                    if (events && events.remove) {
                        $(elem).triggerHandler("remove");
                    }

                    // Http://bugs.jquery.com/ticket/8235
                } catch (e) { }
            }
            orig(elems);
        };
    })($.cleanData);

    $.widget = function (name, base, prototype) {
        var existingConstructor, constructor, basePrototype;

        // ProxiedPrototype allows the provided prototype to remain unmodified
        // so that it can be used as a mixin for multiple widgets (#8876)
        var proxiedPrototype = {};

        var namespace = name.split(".")[0];
        name = name.split(".")[1];
        var fullName = namespace + "-" + name;

        if (!prototype) {
            prototype = base;
            base = $.Widget;
        }

        if ($.isArray(prototype)) {
            prototype = $.extend.apply(null, [{}].concat(prototype));
        }

        // Create selector for plugin
        $.expr[":"][fullName.toLowerCase()] = function (elem) {
            return !!$.data(elem, fullName);
        };

        $[namespace] = $[namespace] || {};
        existingConstructor = $[namespace][name];
        constructor = $[namespace][name] = function (options, element) {

            // Allow instantiation without "new" keyword
            if (!this._createWidget) {
                return new constructor(options, element);
            }

            // Allow instantiation without initializing for simple inheritance
            // must use "new" keyword (the code above always passes args)
            if (arguments.length) {
                this._createWidget(options, element);
            }
        };

        // Extend with the existing constructor to carry over any static properties
        $.extend(constructor, existingConstructor, {
            version: prototype.version,

            // Copy the object used to create the prototype in case we need to
            // redefine the widget later
            _proto: $.extend({}, prototype),

            // Track widgets that inherit from this widget in case this widget is
            // redefined after a widget inherits from it
            _childConstructors: []
        });

        basePrototype = new base();

        // We need to make the options hash a property directly on the new instance
        // otherwise we'll modify the options hash on the prototype that we're
        // inheriting from
        basePrototype.options = $.widget.extend({}, basePrototype.options);
        $.each(prototype, function (prop, value) {
            if (!$.isFunction(value)) {
                proxiedPrototype[prop] = value;
                return;
            }
            proxiedPrototype[prop] = (function () {
                function _super() {
                    return base.prototype[prop].apply(this, arguments);
                }

                function _superApply(args) {
                    return base.prototype[prop].apply(this, args);
                }

                return function () {
                    var __super = this._super;
                    var __superApply = this._superApply;
                    var returnValue;

                    this._super = _super;
                    this._superApply = _superApply;

                    returnValue = value.apply(this, arguments);

                    this._super = __super;
                    this._superApply = __superApply;

                    return returnValue;
                };
            })();
        });
        constructor.prototype = $.widget.extend(basePrototype, {

            // TODO: remove support for widgetEventPrefix
            // always use the name + a colon as the prefix, e.g., draggable:start
            // don't prefix for widgets that aren't DOM-based
            widgetEventPrefix: existingConstructor ? (basePrototype.widgetEventPrefix || name) : name
        }, proxiedPrototype, {
            constructor: constructor,
            namespace: namespace,
            widgetName: name,
            widgetFullName: fullName
        });

        // If this widget is being redefined then we need to find all widgets that
        // are inheriting from it and redefine all of them so that they inherit from
        // the new version of this widget. We're essentially trying to replace one
        // level in the prototype chain.
        if (existingConstructor) {
            $.each(existingConstructor._childConstructors, function (i, child) {
                var childPrototype = child.prototype;

                // Redefine the child widget using the same prototype that was
                // originally used, but inherit from the new version of the base
                $.widget(childPrototype.namespace + "." + childPrototype.widgetName, constructor,
                    child._proto);
            });

            // Remove the list of existing child constructors from the old constructor
            // so the old child constructors can be garbage collected
            delete existingConstructor._childConstructors;
        } else {
            base._childConstructors.push(constructor);
        }

        $.widget.bridge(name, constructor);

        return constructor;
    };

    $.widget.extend = function (target) {
        var input = widgetSlice.call(arguments, 1);
        var inputIndex = 0;
        var inputLength = input.length;
        var key;
        var value;

        for (; inputIndex < inputLength; inputIndex++) {
            for (key in input[inputIndex]) {
                value = input[inputIndex][key];
                if (input[inputIndex].hasOwnProperty(key) && value !== undefined) {

                    // Clone objects
                    if ($.isPlainObject(value)) {
                        target[key] = $.isPlainObject(target[key]) ?
                            $.widget.extend({}, target[key], value) :

                            // Don't extend strings, arrays, etc. with objects
                            $.widget.extend({}, value);

                        // Copy everything else by reference
                    } else {
                        target[key] = value;
                    }
                }
            }
        }
        return target;
    };

    $.widget.bridge = function (name, object) {
        var fullName = object.prototype.widgetFullName || name;
        $.fn[name] = function (options) {
            var isMethodCall = typeof options === "string";
            var args = widgetSlice.call(arguments, 1);
            var returnValue = this;

            if (isMethodCall) {

                // If this is an empty collection, we need to have the instance method
                // return undefined instead of the jQuery instance
                if (!this.length && options === "instance") {
                    returnValue = undefined;
                } else {
                    this.each(function () {
                        var methodValue;
                        var instance = $.data(this, fullName);

                        if (options === "instance") {
                            returnValue = instance;
                            return false;
                        }

                        if (!instance) {
                            return $.error("cannot call methods on " + name +
                                " prior to initialization; " +
                                "attempted to call method '" + options + "'");
                        }

                        if (!$.isFunction(instance[options]) || options.charAt(0) === "_") {
                            return $.error("no such method '" + options + "' for " + name +
                                " widget instance");
                        }

                        methodValue = instance[options].apply(instance, args);

                        if (methodValue !== instance && methodValue !== undefined) {
                            returnValue = methodValue && methodValue.jquery ?
                                returnValue.pushStack(methodValue.get()) :
                                methodValue;
                            return false;
                        }
                    });
                }
            } else {

                // Allow multiple hashes to be passed on init
                if (args.length) {
                    options = $.widget.extend.apply(null, [options].concat(args));
                }

                this.each(function () {
                    var instance = $.data(this, fullName);
                    if (instance) {
                        instance.option(options || {});
                        if (instance._init) {
                            instance._init();
                        }
                    } else {
                        $.data(this, fullName, new object(options, this));
                    }
                });
            }

            return returnValue;
        };
    };

    $.Widget = function ( /* options, element */) { };
    $.Widget._childConstructors = [];

    $.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",

        options: {
            classes: {},
            disabled: false,

            // Callbacks
            create: null
        },

        _createWidget: function (options, element) {
            element = $(element || this.defaultElement || this)[0];
            this.element = $(element);
            this.uuid = widgetUuid++;
            this.eventNamespace = "." + this.widgetName + this.uuid;

            this.bindings = $();
            this.hoverable = $();
            this.focusable = $();
            this.classesElementLookup = {};

            if (element !== this) {
                $.data(element, this.widgetFullName, this);
                this._on(true, this.element, {
                    remove: function (event) {
                        if (event.target === element) {
                            this.destroy();
                        }
                    }
                });
                this.document = $(element.style ?

                    // Element within the document
                    element.ownerDocument :

                    // Element is window or document
                    element.document || element);
                this.window = $(this.document[0].defaultView || this.document[0].parentWindow);
            }

            this.options = $.widget.extend({},
                this.options,
                this._getCreateOptions(),
                options);

            this._create();

            if (this.options.disabled) {
                this._setOptionDisabled(this.options.disabled);
            }

            this._trigger("create", null, this._getCreateEventData());
            this._init();
        },

        _getCreateOptions: function () {
            return {};
        },

        _getCreateEventData: $.noop,

        _create: $.noop,

        _init: $.noop,

        destroy: function () {
            var that = this;

            this._destroy();
            $.each(this.classesElementLookup, function (key, value) {
                that._removeClass(value, key);
            });

            // We can probably remove the unbind calls in 2.0
            // all event bindings should go through this._on()
            this.element
                .off(this.eventNamespace)
                .removeData(this.widgetFullName);
            this.widget()
                .off(this.eventNamespace)
                .removeAttr("aria-disabled");

            // Clean up events and states
            this.bindings.off(this.eventNamespace);
        },

        _destroy: $.noop,

        widget: function () {
            return this.element;
        },

        option: function (key, value) {
            var options = key;
            var parts;
            var curOption;
            var i;

            if (arguments.length === 0) {

                // Don't return a reference to the internal hash
                return $.widget.extend({}, this.options);
            }

            if (typeof key === "string") {

                // Handle nested keys, e.g., "foo.bar" => { foo: { bar: ___ } }
                options = {};
                parts = key.split(".");
                key = parts.shift();
                if (parts.length) {
                    curOption = options[key] = $.widget.extend({}, this.options[key]);
                    for (i = 0; i < parts.length - 1; i++) {
                        curOption[parts[i]] = curOption[parts[i]] || {};
                        curOption = curOption[parts[i]];
                    }
                    key = parts.pop();
                    if (arguments.length === 1) {
                        return curOption[key] === undefined ? null : curOption[key];
                    }
                    curOption[key] = value;
                } else {
                    if (arguments.length === 1) {
                        return this.options[key] === undefined ? null : this.options[key];
                    }
                    options[key] = value;
                }
            }

            this._setOptions(options);

            return this;
        },

        _setOptions: function (options) {
            var key;

            for (key in options) {
                this._setOption(key, options[key]);
            }

            return this;
        },

        _setOption: function (key, value) {
            if (key === "classes") {
                this._setOptionClasses(value);
            }

            this.options[key] = value;

            if (key === "disabled") {
                this._setOptionDisabled(value);
            }

            return this;
        },

        _setOptionClasses: function (value) {
            var classKey, elements, currentElements;

            for (classKey in value) {
                currentElements = this.classesElementLookup[classKey];
                if (value[classKey] === this.options.classes[classKey] ||
                    !currentElements ||
                    !currentElements.length) {
                    continue;
                }

                // We are doing this to create a new jQuery object because the _removeClass() call
                // on the next line is going to destroy the reference to the current elements being
                // tracked. We need to save a copy of this collection so that we can add the new classes
                // below.
                elements = $(currentElements.get());
                this._removeClass(currentElements, classKey);

                // We don't use _addClass() here, because that uses this.options.classes
                // for generating the string of classes. We want to use the value passed in from
                // _setOption(), this is the new value of the classes option which was passed to
                // _setOption(). We pass this value directly to _classes().
                elements.addClass(this._classes({
                    element: elements,
                    keys: classKey,
                    classes: value,
                    add: true
                }));
            }
        },

        _setOptionDisabled: function (value) {
            this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!value);

            // If the widget is becoming disabled, then nothing is interactive
            if (value) {
                this._removeClass(this.hoverable, null, "ui-state-hover");
                this._removeClass(this.focusable, null, "ui-state-focus");
            }
        },

        enable: function () {
            return this._setOptions({ disabled: false });
        },

        disable: function () {
            return this._setOptions({ disabled: true });
        },

        _classes: function (options) {
            var full = [];
            var that = this;

            options = $.extend({
                element: this.element,
                classes: this.options.classes || {}
            }, options);

            function processClassString(classes, checkOption) {
                var current, i;
                for (i = 0; i < classes.length; i++) {
                    current = that.classesElementLookup[classes[i]] || $();
                    if (options.add) {
                        current = $($.unique(current.get().concat(options.element.get())));
                    } else {
                        current = $(current.not(options.element).get());
                    }
                    that.classesElementLookup[classes[i]] = current;
                    full.push(classes[i]);
                    if (checkOption && options.classes[classes[i]]) {
                        full.push(options.classes[classes[i]]);
                    }
                }
            }

            this._on(options.element, {
                "remove": "_untrackClassesElement"
            });

            if (options.keys) {
                processClassString(options.keys.match(/\S+/g) || [], true);
            }
            if (options.extra) {
                processClassString(options.extra.match(/\S+/g) || []);
            }

            return full.join(" ");
        },

        _untrackClassesElement: function (event) {
            var that = this;
            $.each(that.classesElementLookup, function (key, value) {
                if ($.inArray(event.target, value) !== -1) {
                    that.classesElementLookup[key] = $(value.not(event.target).get());
                }
            });
        },

        _removeClass: function (element, keys, extra) {
            return this._toggleClass(element, keys, extra, false);
        },

        _addClass: function (element, keys, extra) {
            return this._toggleClass(element, keys, extra, true);
        },

        _toggleClass: function (element, keys, extra, add) {
            add = (typeof add === "boolean") ? add : extra;
            var shift = (typeof element === "string" || element === null),
                options = {
                    extra: shift ? keys : extra,
                    keys: shift ? element : keys,
                    element: shift ? this.element : element,
                    add: add
                };
            options.element.toggleClass(this._classes(options), add);
            return this;
        },

        _on: function (suppressDisabledCheck, element, handlers) {
            var delegateElement;
            var instance = this;

            // No suppressDisabledCheck flag, shuffle arguments
            if (typeof suppressDisabledCheck !== "boolean") {
                handlers = element;
                element = suppressDisabledCheck;
                suppressDisabledCheck = false;
            }

            // No element argument, shuffle and use this.element
            if (!handlers) {
                handlers = element;
                element = this.element;
                delegateElement = this.widget();
            } else {
                element = delegateElement = $(element);
                this.bindings = this.bindings.add(element);
            }

            $.each(handlers, function (event, handler) {
                function handlerProxy() {

                    // Allow widgets to customize the disabled handling
                    // - disabled as an array instead of boolean
                    // - disabled class as method for disabling individual parts
                    if (!suppressDisabledCheck &&
                        (instance.options.disabled === true ||
                            $(this).hasClass("ui-state-disabled"))) {
                        return;
                    }
                    return (typeof handler === "string" ? instance[handler] : handler)
                        .apply(instance, arguments);
                }

                // Copy the guid so direct unbinding works
                if (typeof handler !== "string") {
                    handlerProxy.guid = handler.guid =
                        handler.guid || handlerProxy.guid || $.guid++;
                }

                var match = event.match(/^([\w:-]*)\s*(.*)$/);
                var eventName = match[1] + instance.eventNamespace;
                var selector = match[2];

                if (selector) {
                    delegateElement.on(eventName, selector, handlerProxy);
                } else {
                    element.on(eventName, handlerProxy);
                }
            });
        },

        _off: function (element, eventName) {
            eventName = (eventName || "").split(" ").join(this.eventNamespace + " ") +
                this.eventNamespace;
            element.off(eventName).off(eventName);

            // Clear the stack to avoid memory leaks (#10056)
            this.bindings = $(this.bindings.not(element).get());
            this.focusable = $(this.focusable.not(element).get());
            this.hoverable = $(this.hoverable.not(element).get());
        },

        _delay: function (handler, delay) {
            function handlerProxy() {
                return (typeof handler === "string" ? instance[handler] : handler)
                    .apply(instance, arguments);
            }
            var instance = this;
            return setTimeout(handlerProxy, delay || 0);
        },

        _hoverable: function (element) {
            this.hoverable = this.hoverable.add(element);
            this._on(element, {
                mouseenter: function (event) {
                    this._addClass($(event.currentTarget), null, "ui-state-hover");
                },
                mouseleave: function (event) {
                    this._removeClass($(event.currentTarget), null, "ui-state-hover");
                }
            });
        },

        _focusable: function (element) {
            this.focusable = this.focusable.add(element);
            this._on(element, {
                focusin: function (event) {
                    this._addClass($(event.currentTarget), null, "ui-state-focus");
                },
                focusout: function (event) {
                    this._removeClass($(event.currentTarget), null, "ui-state-focus");
                }
            });
        },

        _trigger: function (type, event, data) {
            var prop, orig;
            var callback = this.options[type];

            data = data || {};
            event = $.Event(event);
            event.type = (type === this.widgetEventPrefix ?
                type :
                this.widgetEventPrefix + type).toLowerCase();

            // The original event may come from any element
            // so we need to reset the target on the new event
            event.target = this.element[0];

            // Copy original event properties over to the new event
            orig = event.originalEvent;
            if (orig) {
                for (prop in orig) {
                    if (!(prop in event)) {
                        event[prop] = orig[prop];
                    }
                }
            }

            this.element.trigger(event, data);
            return !($.isFunction(callback) &&
                callback.apply(this.element[0], [event].concat(data)) === false ||
                event.isDefaultPrevented());
        }
    };

    $.each({ show: "fadeIn", hide: "fadeOut" }, function (method, defaultEffect) {
        $.Widget.prototype["_" + method] = function (element, options, callback) {
            if (typeof options === "string") {
                options = { effect: options };
            }

            var hasOptions;
            var effectName = !options ?
                method :
                options === true || typeof options === "number" ?
                    defaultEffect :
                    options.effect || defaultEffect;

            options = options || {};
            if (typeof options === "number") {
                options = { duration: options };
            }

            hasOptions = !$.isEmptyObject(options);
            options.complete = callback;

            if (options.delay) {
                element.delay(options.delay);
            }

            if (hasOptions && $.effects && $.effects.effect[effectName]) {
                element[method](options);
            } else if (effectName !== method && element[effectName]) {
                element[effectName](options.duration, options.easing, callback);
            } else {
                element.queue(function (next) {
                    $(this)[method]();
                    if (callback) {
                        callback.call(element[0]);
                    }
                    next();
                });
            }
        };
    });

    var widget = $.widget;


    /*!
     * jQuery UI Position 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/position/
     */

    //>>label: Position
    //>>group: Core
    //>>description: Positions elements relative to other elements.
    //>>docs: http://api.jqueryui.com/position/
    //>>demos: http://jqueryui.com/position/


    (function () {
        var cachedScrollbarWidth,
            max = Math.max,
            abs = Math.abs,
            rhorizontal = /left|center|right/,
            rvertical = /top|center|bottom/,
            roffset = /[\+\-]\d+(\.[\d]+)?%?/,
            rposition = /^\w+/,
            rpercent = /%$/,
            _position = $.fn.position;

        function getOffsets(offsets, width, height) {
            return [
                parseFloat(offsets[0]) * (rpercent.test(offsets[0]) ? width / 100 : 1),
                parseFloat(offsets[1]) * (rpercent.test(offsets[1]) ? height / 100 : 1)
            ];
        }

        function parseCss(element, property) {
            return parseInt($.css(element, property), 10) || 0;
        }

        function getDimensions(elem) {
            var raw = elem[0];
            if (raw.nodeType === 9) {
                return {
                    width: elem.width(),
                    height: elem.height(),
                    offset: { top: 0, left: 0 }
                };
            }
            if ($.isWindow(raw)) {
                return {
                    width: elem.width(),
                    height: elem.height(),
                    offset: { top: elem.scrollTop(), left: elem.scrollLeft() }
                };
            }
            if (raw.preventDefault) {
                return {
                    width: 0,
                    height: 0,
                    offset: { top: raw.pageY, left: raw.pageX }
                };
            }
            return {
                width: elem.outerWidth(),
                height: elem.outerHeight(),
                offset: elem.offset()
            };
        }

        $.position = {
            scrollbarWidth: function () {
                if (cachedScrollbarWidth !== undefined) {
                    return cachedScrollbarWidth;
                }
                var w1, w2,
                    div = $("<div " +
                        "style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'>" +
                        "<div style='height:100px;width:auto;'></div></div>"),
                    innerDiv = div.children()[0];

                $("body").append(div);
                w1 = innerDiv.offsetWidth;
                div.css("overflow", "scroll");

                w2 = innerDiv.offsetWidth;

                if (w1 === w2) {
                    w2 = div[0].clientWidth;
                }

                div.remove();

                return (cachedScrollbarWidth = w1 - w2);
            },
            getScrollInfo: function (within) {
                var overflowX = within.isWindow || within.isDocument ? "" :
                    within.element.css("overflow-x"),
                    overflowY = within.isWindow || within.isDocument ? "" :
                        within.element.css("overflow-y"),
                    hasOverflowX = overflowX === "scroll" ||
                        (overflowX === "auto" && within.width < within.element[0].scrollWidth),
                    hasOverflowY = overflowY === "scroll" ||
                        (overflowY === "auto" && within.height < within.element[0].scrollHeight);
                return {
                    width: hasOverflowY ? $.position.scrollbarWidth() : 0,
                    height: hasOverflowX ? $.position.scrollbarWidth() : 0
                };
            },
            getWithinInfo: function (element) {
                var withinElement = $(element || window),
                    isWindow = $.isWindow(withinElement[0]),
                    isDocument = !!withinElement[0] && withinElement[0].nodeType === 9,
                    hasOffset = !isWindow && !isDocument;
                return {
                    element: withinElement,
                    isWindow: isWindow,
                    isDocument: isDocument,
                    offset: hasOffset ? $(element).offset() : { left: 0, top: 0 },
                    scrollLeft: withinElement.scrollLeft(),
                    scrollTop: withinElement.scrollTop(),
                    width: withinElement.outerWidth(),
                    height: withinElement.outerHeight()
                };
            }
        };

        $.fn.position = function (options) {
            if (!options || !options.of) {
                return _position.apply(this, arguments);
            }

            // Make a copy, we don't want to modify arguments
            options = $.extend({}, options);

            var atOffset, targetWidth, targetHeight, targetOffset, basePosition, dimensions,
                target = $(options.of),
                within = $.position.getWithinInfo(options.within),
                scrollInfo = $.position.getScrollInfo(within),
                collision = (options.collision || "flip").split(" "),
                offsets = {};

            dimensions = getDimensions(target);
            if (target[0].preventDefault) {

                // Force left top to allow flipping
                options.at = "left top";
            }
            targetWidth = dimensions.width;
            targetHeight = dimensions.height;
            targetOffset = dimensions.offset;

            // Clone to reuse original targetOffset later
            basePosition = $.extend({}, targetOffset);

            // Force my and at to have valid horizontal and vertical positions
            // if a value is missing or invalid, it will be converted to center
            $.each(["my", "at"], function () {
                var pos = (options[this] || "").split(" "),
                    horizontalOffset,
                    verticalOffset;

                if (pos.length === 1) {
                    pos = rhorizontal.test(pos[0]) ?
                        pos.concat(["center"]) :
                        rvertical.test(pos[0]) ?
                            ["center"].concat(pos) :
                            ["center", "center"];
                }
                pos[0] = rhorizontal.test(pos[0]) ? pos[0] : "center";
                pos[1] = rvertical.test(pos[1]) ? pos[1] : "center";

                // Calculate offsets
                horizontalOffset = roffset.exec(pos[0]);
                verticalOffset = roffset.exec(pos[1]);
                offsets[this] = [
                    horizontalOffset ? horizontalOffset[0] : 0,
                    verticalOffset ? verticalOffset[0] : 0
                ];

                // Reduce to just the positions without the offsets
                options[this] = [
                    rposition.exec(pos[0])[0],
                    rposition.exec(pos[1])[0]
                ];
            });

            // Normalize collision option
            if (collision.length === 1) {
                collision[1] = collision[0];
            }

            if (options.at[0] === "right") {
                basePosition.left += targetWidth;
            } else if (options.at[0] === "center") {
                basePosition.left += targetWidth / 2;
            }

            if (options.at[1] === "bottom") {
                basePosition.top += targetHeight;
            } else if (options.at[1] === "center") {
                basePosition.top += targetHeight / 2;
            }

            atOffset = getOffsets(offsets.at, targetWidth, targetHeight);
            basePosition.left += atOffset[0];
            basePosition.top += atOffset[1];

            return this.each(function () {
                var collisionPosition, using,
                    elem = $(this),
                    elemWidth = elem.outerWidth(),
                    elemHeight = elem.outerHeight(),
                    marginLeft = parseCss(this, "marginLeft"),
                    marginTop = parseCss(this, "marginTop"),
                    collisionWidth = elemWidth + marginLeft + parseCss(this, "marginRight") +
                        scrollInfo.width,
                    collisionHeight = elemHeight + marginTop + parseCss(this, "marginBottom") +
                        scrollInfo.height,
                    position = $.extend({}, basePosition),
                    myOffset = getOffsets(offsets.my, elem.outerWidth(), elem.outerHeight());

                if (options.my[0] === "right") {
                    position.left -= elemWidth;
                } else if (options.my[0] === "center") {
                    position.left -= elemWidth / 2;
                }

                if (options.my[1] === "bottom") {
                    position.top -= elemHeight;
                } else if (options.my[1] === "center") {
                    position.top -= elemHeight / 2;
                }

                position.left += myOffset[0];
                position.top += myOffset[1];

                collisionPosition = {
                    marginLeft: marginLeft,
                    marginTop: marginTop
                };

                $.each(["left", "top"], function (i, dir) {
                    if ($.ui.position[collision[i]]) {
                        $.ui.position[collision[i]][dir](position, {
                            targetWidth: targetWidth,
                            targetHeight: targetHeight,
                            elemWidth: elemWidth,
                            elemHeight: elemHeight,
                            collisionPosition: collisionPosition,
                            collisionWidth: collisionWidth,
                            collisionHeight: collisionHeight,
                            offset: [atOffset[0] + myOffset[0], atOffset[1] + myOffset[1]],
                            my: options.my,
                            at: options.at,
                            within: within,
                            elem: elem
                        });
                    }
                });

                if (options.using) {

                    // Adds feedback as second argument to using callback, if present
                    using = function (props) {
                        var left = targetOffset.left - position.left,
                            right = left + targetWidth - elemWidth,
                            top = targetOffset.top - position.top,
                            bottom = top + targetHeight - elemHeight,
                            feedback = {
                                target: {
                                    element: target,
                                    left: targetOffset.left,
                                    top: targetOffset.top,
                                    width: targetWidth,
                                    height: targetHeight
                                },
                                element: {
                                    element: elem,
                                    left: position.left,
                                    top: position.top,
                                    width: elemWidth,
                                    height: elemHeight
                                },
                                horizontal: right < 0 ? "left" : left > 0 ? "right" : "center",
                                vertical: bottom < 0 ? "top" : top > 0 ? "bottom" : "middle"
                            };
                        if (targetWidth < elemWidth && abs(left + right) < targetWidth) {
                            feedback.horizontal = "center";
                        }
                        if (targetHeight < elemHeight && abs(top + bottom) < targetHeight) {
                            feedback.vertical = "middle";
                        }
                        if (max(abs(left), abs(right)) > max(abs(top), abs(bottom))) {
                            feedback.important = "horizontal";
                        } else {
                            feedback.important = "vertical";
                        }
                        options.using.call(this, props, feedback);
                    };
                }

                elem.offset($.extend(position, { using: using }));
            });
        };

        $.ui.position = {
            fit: {
                left: function (position, data) {
                    var within = data.within,
                        withinOffset = within.isWindow ? within.scrollLeft : within.offset.left,
                        outerWidth = within.width,
                        collisionPosLeft = position.left - data.collisionPosition.marginLeft,
                        overLeft = withinOffset - collisionPosLeft,
                        overRight = collisionPosLeft + data.collisionWidth - outerWidth - withinOffset,
                        newOverRight;

                    // Element is wider than within
                    if (data.collisionWidth > outerWidth) {

                        // Element is initially over the left side of within
                        if (overLeft > 0 && overRight <= 0) {
                            newOverRight = position.left + overLeft + data.collisionWidth - outerWidth -
                                withinOffset;
                            position.left += overLeft - newOverRight;

                            // Element is initially over right side of within
                        } else if (overRight > 0 && overLeft <= 0) {
                            position.left = withinOffset;

                            // Element is initially over both left and right sides of within
                        } else {
                            if (overLeft > overRight) {
                                position.left = withinOffset + outerWidth - data.collisionWidth;
                            } else {
                                position.left = withinOffset;
                            }
                        }

                        // Too far left -> align with left edge
                    } else if (overLeft > 0) {
                        position.left += overLeft;

                        // Too far right -> align with right edge
                    } else if (overRight > 0) {
                        position.left -= overRight;

                        // Adjust based on position and margin
                    } else {
                        position.left = max(position.left - collisionPosLeft, position.left);
                    }
                },
                top: function (position, data) {
                    var within = data.within,
                        withinOffset = within.isWindow ? within.scrollTop : within.offset.top,
                        outerHeight = data.within.height,
                        collisionPosTop = position.top - data.collisionPosition.marginTop,
                        overTop = withinOffset - collisionPosTop,
                        overBottom = collisionPosTop + data.collisionHeight - outerHeight - withinOffset,
                        newOverBottom;

                    // Element is taller than within
                    if (data.collisionHeight > outerHeight) {

                        // Element is initially over the top of within
                        if (overTop > 0 && overBottom <= 0) {
                            newOverBottom = position.top + overTop + data.collisionHeight - outerHeight -
                                withinOffset;
                            position.top += overTop - newOverBottom;

                            // Element is initially over bottom of within
                        } else if (overBottom > 0 && overTop <= 0) {
                            position.top = withinOffset;

                            // Element is initially over both top and bottom of within
                        } else {
                            if (overTop > overBottom) {
                                position.top = withinOffset + outerHeight - data.collisionHeight;
                            } else {
                                position.top = withinOffset;
                            }
                        }

                        // Too far up -> align with top
                    } else if (overTop > 0) {
                        position.top += overTop;

                        // Too far down -> align with bottom edge
                    } else if (overBottom > 0) {
                        position.top -= overBottom;

                        // Adjust based on position and margin
                    } else {
                        position.top = max(position.top - collisionPosTop, position.top);
                    }
                }
            },
            flip: {
                left: function (position, data) {
                    var within = data.within,
                        withinOffset = within.offset.left + within.scrollLeft,
                        outerWidth = within.width,
                        offsetLeft = within.isWindow ? within.scrollLeft : within.offset.left,
                        collisionPosLeft = position.left - data.collisionPosition.marginLeft,
                        overLeft = collisionPosLeft - offsetLeft,
                        overRight = collisionPosLeft + data.collisionWidth - outerWidth - offsetLeft,
                        myOffset = data.my[0] === "left" ?
                            -data.elemWidth :
                            data.my[0] === "right" ?
                                data.elemWidth :
                                0,
                        atOffset = data.at[0] === "left" ?
                            data.targetWidth :
                            data.at[0] === "right" ?
                                -data.targetWidth :
                                0,
                        offset = -2 * data.offset[0],
                        newOverRight,
                        newOverLeft;

                    if (overLeft < 0) {
                        newOverRight = position.left + myOffset + atOffset + offset + data.collisionWidth -
                            outerWidth - withinOffset;
                        if (newOverRight < 0 || newOverRight < abs(overLeft)) {
                            position.left += myOffset + atOffset + offset;
                        }
                    } else if (overRight > 0) {
                        newOverLeft = position.left - data.collisionPosition.marginLeft + myOffset +
                            atOffset + offset - offsetLeft;
                        if (newOverLeft > 0 || abs(newOverLeft) < overRight) {
                            position.left += myOffset + atOffset + offset;
                        }
                    }
                },
                top: function (position, data) {
                    var within = data.within,
                        withinOffset = within.offset.top + within.scrollTop,
                        outerHeight = within.height,
                        offsetTop = within.isWindow ? within.scrollTop : within.offset.top,
                        collisionPosTop = position.top - data.collisionPosition.marginTop,
                        overTop = collisionPosTop - offsetTop,
                        overBottom = collisionPosTop + data.collisionHeight - outerHeight - offsetTop,
                        top = data.my[1] === "top",
                        myOffset = top ?
                            -data.elemHeight :
                            data.my[1] === "bottom" ?
                                data.elemHeight :
                                0,
                        atOffset = data.at[1] === "top" ?
                            data.targetHeight :
                            data.at[1] === "bottom" ?
                                -data.targetHeight :
                                0,
                        offset = -2 * data.offset[1],
                        newOverTop,
                        newOverBottom;
                    if (overTop < 0) {
                        newOverBottom = position.top + myOffset + atOffset + offset + data.collisionHeight -
                            outerHeight - withinOffset;
                        if (newOverBottom < 0 || newOverBottom < abs(overTop)) {
                            position.top += myOffset + atOffset + offset;
                        }
                    } else if (overBottom > 0) {
                        newOverTop = position.top - data.collisionPosition.marginTop + myOffset + atOffset +
                            offset - offsetTop;
                        if (newOverTop > 0 || abs(newOverTop) < overBottom) {
                            position.top += myOffset + atOffset + offset;
                        }
                    }
                }
            },
            flipfit: {
                left: function () {
                    $.ui.position.flip.left.apply(this, arguments);
                    $.ui.position.fit.left.apply(this, arguments);
                },
                top: function () {
                    $.ui.position.flip.top.apply(this, arguments);
                    $.ui.position.fit.top.apply(this, arguments);
                }
            }
        };

    })();

    var position = $.ui.position;


    /*!
     * jQuery UI :data 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */

    //>>label: :data Selector
    //>>group: Core
    //>>description: Selects elements which have data stored under the specified key.
    //>>docs: http://api.jqueryui.com/data-selector/


    var data = $.extend($.expr[":"], {
        data: $.expr.createPseudo ?
            $.expr.createPseudo(function (dataName) {
                return function (elem) {
                    return !!$.data(elem, dataName);
                };
            }) :

            // Support: jQuery <1.8
            function (elem, i, match) {
                return !!$.data(elem, match[3]);
            }
    });

    /*!
     * jQuery UI Disable Selection 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */

    //>>label: disableSelection
    //>>group: Core
    //>>description: Disable selection of text content within the set of matched elements.
    //>>docs: http://api.jqueryui.com/disableSelection/

    // This file is deprecated


    var disableSelection = $.fn.extend({
        disableSelection: (function () {
            var eventType = "onselectstart" in document.createElement("div") ?
                "selectstart" :
                "mousedown";

            return function () {
                return this.on(eventType + ".ui-disableSelection", function (event) {
                    event.preventDefault();
                });
            };
        })(),

        enableSelection: function () {
            return this.off(".ui-disableSelection");
        }
    });


    /*!
     * jQuery UI Effects 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */

    //>>label: Effects Core
    //>>group: Effects
    // jscs:disable maximumLineLength
    //>>description: Extends the internal jQuery effects. Includes morphing and easing. Required by all other effects.
    // jscs:enable maximumLineLength
    //>>docs: http://api.jqueryui.com/category/effects-core/
    //>>demos: http://jqueryui.com/effect/



    var dataSpace = "ui-effects-",
        dataSpaceStyle = "ui-effects-style",
        dataSpaceAnimated = "ui-effects-animated",

        // Create a local jQuery because jQuery Color relies on it and the
        // global may not exist with AMD and a custom build (#10199)
        jQuery = $;

    $.effects = {
        effect: {}
    };

    /*!
     * jQuery Color Animations v2.1.2
     * https://github.com/jquery/jquery-color
     *
     * Copyright 2014 jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * Date: Wed Jan 16 08:47:09 2013 -0600
     */
    (function (jQuery, undefined) {

        var stepHooks = "backgroundColor borderBottomColor borderLeftColor borderRightColor " +
            "borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",

            // Plusequals test for += 100 -= 100
            rplusequals = /^([\-+])=\s*(\d+\.?\d*)/,

            // A set of RE's that can match strings and generate color tuples.
            stringParsers = [{
                re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                parse: function (execResult) {
                    return [
                        execResult[1],
                        execResult[2],
                        execResult[3],
                        execResult[4]
                    ];
                }
            }, {
                re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                parse: function (execResult) {
                    return [
                        execResult[1] * 2.55,
                        execResult[2] * 2.55,
                        execResult[3] * 2.55,
                        execResult[4]
                    ];
                }
            }, {

                // This regex ignores A-F because it's compared against an already lowercased string
                re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                parse: function (execResult) {
                    return [
                        parseInt(execResult[1], 16),
                        parseInt(execResult[2], 16),
                        parseInt(execResult[3], 16)
                    ];
                }
            }, {

                // This regex ignores A-F because it's compared against an already lowercased string
                re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                parse: function (execResult) {
                    return [
                        parseInt(execResult[1] + execResult[1], 16),
                        parseInt(execResult[2] + execResult[2], 16),
                        parseInt(execResult[3] + execResult[3], 16)
                    ];
                }
            }, {
                re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                space: "hsla",
                parse: function (execResult) {
                    return [
                        execResult[1],
                        execResult[2] / 100,
                        execResult[3] / 100,
                        execResult[4]
                    ];
                }
            }],

            // JQuery.Color( )
            color = jQuery.Color = function (color, green, blue, alpha) {
                return new jQuery.Color.fn.parse(color, green, blue, alpha);
            },
            spaces = {
                rgba: {
                    props: {
                        red: {
                            idx: 0,
                            type: "byte"
                        },
                        green: {
                            idx: 1,
                            type: "byte"
                        },
                        blue: {
                            idx: 2,
                            type: "byte"
                        }
                    }
                },

                hsla: {
                    props: {
                        hue: {
                            idx: 0,
                            type: "degrees"
                        },
                        saturation: {
                            idx: 1,
                            type: "percent"
                        },
                        lightness: {
                            idx: 2,
                            type: "percent"
                        }
                    }
                }
            },
            propTypes = {
                "byte": {
                    floor: true,
                    max: 255
                },
                "percent": {
                    max: 1
                },
                "degrees": {
                    mod: 360,
                    floor: true
                }
            },
            support = color.support = {},

            // Element for support tests
            supportElem = jQuery("<p>")[0],

            // Colors = jQuery.Color.names
            colors,

            // Local aliases of functions called often
            each = jQuery.each;

        // Determine rgba support immediately
        supportElem.style.cssText = "background-color:rgba(1,1,1,.5)";
        support.rgba = supportElem.style.backgroundColor.indexOf("rgba") > -1;

        // Define cache name and alpha properties
        // for rgba and hsla spaces
        each(spaces, function (spaceName, space) {
            space.cache = "_" + spaceName;
            space.props.alpha = {
                idx: 3,
                type: "percent",
                def: 1
            };
        });

        function clamp(value, prop, allowEmpty) {
            var type = propTypes[prop.type] || {};

            if (value == null) {
                return (allowEmpty || !prop.def) ? null : prop.def;
            }

            // ~~ is an short way of doing floor for positive numbers
            value = type.floor ? ~~value : parseFloat(value);

            // IE will pass in empty strings as value for alpha,
            // which will hit this case
            if (isNaN(value)) {
                return prop.def;
            }

            if (type.mod) {

                // We add mod before modding to make sure that negatives values
                // get converted properly: -10 -> 350
                return (value + type.mod) % type.mod;
            }

            // For now all property types without mod have min and max
            return 0 > value ? 0 : type.max < value ? type.max : value;
        }

        function stringParse(string) {
            var inst = color(),
                rgba = inst._rgba = [];

            string = string.toLowerCase();

            each(stringParsers, function (i, parser) {
                var parsed,
                    match = parser.re.exec(string),
                    values = match && parser.parse(match),
                    spaceName = parser.space || "rgba";

                if (values) {
                    parsed = inst[spaceName](values);

                    // If this was an rgba parse the assignment might happen twice
                    // oh well....
                    inst[spaces[spaceName].cache] = parsed[spaces[spaceName].cache];
                    rgba = inst._rgba = parsed._rgba;

                    // Exit each( stringParsers ) here because we matched
                    return false;
                }
            });

            // Found a stringParser that handled it
            if (rgba.length) {

                // If this came from a parsed string, force "transparent" when alpha is 0
                // chrome, (and maybe others) return "transparent" as rgba(0,0,0,0)
                if (rgba.join() === "0,0,0,0") {
                    jQuery.extend(rgba, colors.transparent);
                }
                return inst;
            }

            // Named colors
            return colors[string];
        }

        color.fn = jQuery.extend(color.prototype, {
            parse: function (red, green, blue, alpha) {
                if (red === undefined) {
                    this._rgba = [null, null, null, null];
                    return this;
                }
                if (red.jquery || red.nodeType) {
                    red = jQuery(red).css(green);
                    green = undefined;
                }

                var inst = this,
                    type = jQuery.type(red),
                    rgba = this._rgba = [];

                // More than 1 argument specified - assume ( red, green, blue, alpha )
                if (green !== undefined) {
                    red = [red, green, blue, alpha];
                    type = "array";
                }

                if (type === "string") {
                    return this.parse(stringParse(red) || colors._default);
                }

                if (type === "array") {
                    each(spaces.rgba.props, function (key, prop) {
                        rgba[prop.idx] = clamp(red[prop.idx], prop);
                    });
                    return this;
                }

                if (type === "object") {
                    if (red instanceof color) {
                        each(spaces, function (spaceName, space) {
                            if (red[space.cache]) {
                                inst[space.cache] = red[space.cache].slice();
                            }
                        });
                    } else {
                        each(spaces, function (spaceName, space) {
                            var cache = space.cache;
                            each(space.props, function (key, prop) {

                                // If the cache doesn't exist, and we know how to convert
                                if (!inst[cache] && space.to) {

                                    // If the value was null, we don't need to copy it
                                    // if the key was alpha, we don't need to copy it either
                                    if (key === "alpha" || red[key] == null) {
                                        return;
                                    }
                                    inst[cache] = space.to(inst._rgba);
                                }

                                // This is the only case where we allow nulls for ALL properties.
                                // call clamp with alwaysAllowEmpty
                                inst[cache][prop.idx] = clamp(red[key], prop, true);
                            });

                            // Everything defined but alpha?
                            if (inst[cache] &&
                                jQuery.inArray(null, inst[cache].slice(0, 3)) < 0) {

                                // Use the default of 1
                                inst[cache][3] = 1;
                                if (space.from) {
                                    inst._rgba = space.from(inst[cache]);
                                }
                            }
                        });
                    }
                    return this;
                }
            },
            is: function (compare) {
                var is = color(compare),
                    same = true,
                    inst = this;

                each(spaces, function (_, space) {
                    var localCache,
                        isCache = is[space.cache];
                    if (isCache) {
                        localCache = inst[space.cache] || space.to && space.to(inst._rgba) || [];
                        each(space.props, function (_, prop) {
                            if (isCache[prop.idx] != null) {
                                same = (isCache[prop.idx] === localCache[prop.idx]);
                                return same;
                            }
                        });
                    }
                    return same;
                });
                return same;
            },
            _space: function () {
                var used = [],
                    inst = this;
                each(spaces, function (spaceName, space) {
                    if (inst[space.cache]) {
                        used.push(spaceName);
                    }
                });
                return used.pop();
            },
            transition: function (other, distance) {
                var end = color(other),
                    spaceName = end._space(),
                    space = spaces[spaceName],
                    startColor = this.alpha() === 0 ? color("transparent") : this,
                    start = startColor[space.cache] || space.to(startColor._rgba),
                    result = start.slice();

                end = end[space.cache];
                each(space.props, function (key, prop) {
                    var index = prop.idx,
                        startValue = start[index],
                        endValue = end[index],
                        type = propTypes[prop.type] || {};

                    // If null, don't override start value
                    if (endValue === null) {
                        return;
                    }

                    // If null - use end
                    if (startValue === null) {
                        result[index] = endValue;
                    } else {
                        if (type.mod) {
                            if (endValue - startValue > type.mod / 2) {
                                startValue += type.mod;
                            } else if (startValue - endValue > type.mod / 2) {
                                startValue -= type.mod;
                            }
                        }
                        result[index] = clamp((endValue - startValue) * distance + startValue, prop);
                    }
                });
                return this[spaceName](result);
            },
            blend: function (opaque) {

                // If we are already opaque - return ourself
                if (this._rgba[3] === 1) {
                    return this;
                }

                var rgb = this._rgba.slice(),
                    a = rgb.pop(),
                    blend = color(opaque)._rgba;

                return color(jQuery.map(rgb, function (v, i) {
                    return (1 - a) * blend[i] + a * v;
                }));
            },
            toRgbaString: function () {
                var prefix = "rgba(",
                    rgba = jQuery.map(this._rgba, function (v, i) {
                        return v == null ? (i > 2 ? 1 : 0) : v;
                    });

                if (rgba[3] === 1) {
                    rgba.pop();
                    prefix = "rgb(";
                }

                return prefix + rgba.join() + ")";
            },
            toHslaString: function () {
                var prefix = "hsla(",
                    hsla = jQuery.map(this.hsla(), function (v, i) {
                        if (v == null) {
                            v = i > 2 ? 1 : 0;
                        }

                        // Catch 1 and 2
                        if (i && i < 3) {
                            v = Math.round(v * 100) + "%";
                        }
                        return v;
                    });

                if (hsla[3] === 1) {
                    hsla.pop();
                    prefix = "hsl(";
                }
                return prefix + hsla.join() + ")";
            },
            toHexString: function (includeAlpha) {
                var rgba = this._rgba.slice(),
                    alpha = rgba.pop();

                if (includeAlpha) {
                    rgba.push(~~(alpha * 255));
                }

                return "#" + jQuery.map(rgba, function (v) {

                    // Default to 0 when nulls exist
                    v = (v || 0).toString(16);
                    return v.length === 1 ? "0" + v : v;
                }).join("");
            },
            toString: function () {
                return this._rgba[3] === 0 ? "transparent" : this.toRgbaString();
            }
        });
        color.fn.parse.prototype = color.fn;

        // Hsla conversions adapted from:
        // https://code.google.com/p/maashaack/source/browse/packages/graphics/trunk/src/graphics/colors/HUE2RGB.as?r=5021

        function hue2rgb(p, q, h) {
            h = (h + 1) % 1;
            if (h * 6 < 1) {
                return p + (q - p) * h * 6;
            }
            if (h * 2 < 1) {
                return q;
            }
            if (h * 3 < 2) {
                return p + (q - p) * ((2 / 3) - h) * 6;
            }
            return p;
        }

        spaces.hsla.to = function (rgba) {
            if (rgba[0] == null || rgba[1] == null || rgba[2] == null) {
                return [null, null, null, rgba[3]];
            }
            var r = rgba[0] / 255,
                g = rgba[1] / 255,
                b = rgba[2] / 255,
                a = rgba[3],
                max = Math.max(r, g, b),
                min = Math.min(r, g, b),
                diff = max - min,
                add = max + min,
                l = add * 0.5,
                h, s;

            if (min === max) {
                h = 0;
            } else if (r === max) {
                h = (60 * (g - b) / diff) + 360;
            } else if (g === max) {
                h = (60 * (b - r) / diff) + 120;
            } else {
                h = (60 * (r - g) / diff) + 240;
            }

            // Chroma (diff) == 0 means greyscale which, by definition, saturation = 0%
            // otherwise, saturation is based on the ratio of chroma (diff) to lightness (add)
            if (diff === 0) {
                s = 0;
            } else if (l <= 0.5) {
                s = diff / add;
            } else {
                s = diff / (2 - add);
            }
            return [Math.round(h) % 360, s, l, a == null ? 1 : a];
        };

        spaces.hsla.from = function (hsla) {
            if (hsla[0] == null || hsla[1] == null || hsla[2] == null) {
                return [null, null, null, hsla[3]];
            }
            var h = hsla[0] / 360,
                s = hsla[1],
                l = hsla[2],
                a = hsla[3],
                q = l <= 0.5 ? l * (1 + s) : l + s - l * s,
                p = 2 * l - q;

            return [
                Math.round(hue2rgb(p, q, h + (1 / 3)) * 255),
                Math.round(hue2rgb(p, q, h) * 255),
                Math.round(hue2rgb(p, q, h - (1 / 3)) * 255),
                a
            ];
        };

        each(spaces, function (spaceName, space) {
            var props = space.props,
                cache = space.cache,
                to = space.to,
                from = space.from;

            // Makes rgba() and hsla()
            color.fn[spaceName] = function (value) {

                // Generate a cache for this space if it doesn't exist
                if (to && !this[cache]) {
                    this[cache] = to(this._rgba);
                }
                if (value === undefined) {
                    return this[cache].slice();
                }

                var ret,
                    type = jQuery.type(value),
                    arr = (type === "array" || type === "object") ? value : arguments,
                    local = this[cache].slice();

                each(props, function (key, prop) {
                    var val = arr[type === "object" ? key : prop.idx];
                    if (val == null) {
                        val = local[prop.idx];
                    }
                    local[prop.idx] = clamp(val, prop);
                });

                if (from) {
                    ret = color(from(local));
                    ret[cache] = local;
                    return ret;
                } else {
                    return color(local);
                }
            };

            // Makes red() green() blue() alpha() hue() saturation() lightness()
            each(props, function (key, prop) {

                // Alpha is included in more than one space
                if (color.fn[key]) {
                    return;
                }
                color.fn[key] = function (value) {
                    var vtype = jQuery.type(value),
                        fn = (key === "alpha" ? (this._hsla ? "hsla" : "rgba") : spaceName),
                        local = this[fn](),
                        cur = local[prop.idx],
                        match;

                    if (vtype === "undefined") {
                        return cur;
                    }

                    if (vtype === "function") {
                        value = value.call(this, cur);
                        vtype = jQuery.type(value);
                    }
                    if (value == null && prop.empty) {
                        return this;
                    }
                    if (vtype === "string") {
                        match = rplusequals.exec(value);
                        if (match) {
                            value = cur + parseFloat(match[2]) * (match[1] === "+" ? 1 : -1);
                        }
                    }
                    local[prop.idx] = value;
                    return this[fn](local);
                };
            });
        });

        // Add cssHook and .fx.step function for each named hook.
        // accept a space separated string of properties
        color.hook = function (hook) {
            var hooks = hook.split(" ");
            each(hooks, function (i, hook) {
                jQuery.cssHooks[hook] = {
                    set: function (elem, value) {
                        var parsed, curElem,
                            backgroundColor = "";

                        if (value !== "transparent" && (jQuery.type(value) !== "string" ||
                            (parsed = stringParse(value)))) {
                            value = color(parsed || value);
                            if (!support.rgba && value._rgba[3] !== 1) {
                                curElem = hook === "backgroundColor" ? elem.parentNode : elem;
                                while (
                                    (backgroundColor === "" || backgroundColor === "transparent") &&
                                    curElem && curElem.style
                                ) {
                                    try {
                                        backgroundColor = jQuery.css(curElem, "backgroundColor");
                                        curElem = curElem.parentNode;
                                    } catch (e) {
                                    }
                                }

                                value = value.blend(backgroundColor && backgroundColor !== "transparent" ?
                                    backgroundColor :
                                    "_default");
                            }

                            value = value.toRgbaString();
                        }
                        try {
                            elem.style[hook] = value;
                        } catch (e) {

                            // Wrapped to prevent IE from throwing errors on "invalid" values like
                            // 'auto' or 'inherit'
                        }
                    }
                };
                jQuery.fx.step[hook] = function (fx) {
                    if (!fx.colorInit) {
                        fx.start = color(fx.elem, hook);
                        fx.end = color(fx.end);
                        fx.colorInit = true;
                    }
                    jQuery.cssHooks[hook].set(fx.elem, fx.start.transition(fx.end, fx.pos));
                };
            });

        };

        color.hook(stepHooks);

        jQuery.cssHooks.borderColor = {
            expand: function (value) {
                var expanded = {};

                each(["Top", "Right", "Bottom", "Left"], function (i, part) {
                    expanded["border" + part + "Color"] = value;
                });
                return expanded;
            }
        };

        // Basic color names only.
        // Usage of any of the other color names requires adding yourself or including
        // jquery.color.svg-names.js.
        colors = jQuery.Color.names = {

            // 4.1. Basic color keywords
            aqua: "#00ffff",
            black: "#000000",
            blue: "#0000ff",
            fuchsia: "#ff00ff",
            gray: "#808080",
            green: "#008000",
            lime: "#00ff00",
            maroon: "#800000",
            navy: "#000080",
            olive: "#808000",
            purple: "#800080",
            red: "#ff0000",
            silver: "#c0c0c0",
            teal: "#008080",
            white: "#ffffff",
            yellow: "#ffff00",

            // 4.2.3. "transparent" color keyword
            transparent: [null, null, null, 0],

            _default: "#ffffff"
        };

    })(jQuery);

    /******************************************************************************/
    /****************************** CLASS ANIMATIONS ******************************/
    /******************************************************************************/
    (function () {

        var classAnimationActions = ["add", "remove", "toggle"],
            shorthandStyles = {
                border: 1,
                borderBottom: 1,
                borderColor: 1,
                borderLeft: 1,
                borderRight: 1,
                borderTop: 1,
                borderWidth: 1,
                margin: 1,
                padding: 1
            };

        $.each(
            ["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"],
            function (_, prop) {
                $.fx.step[prop] = function (fx) {
                    if (fx.end !== "none" && !fx.setAttr || fx.pos === 1 && !fx.setAttr) {
                        jQuery.style(fx.elem, prop, fx.end);
                        fx.setAttr = true;
                    }
                };
            }
        );

        function getElementStyles(elem) {
            var key, len,
                style = elem.ownerDocument.defaultView ?
                    elem.ownerDocument.defaultView.getComputedStyle(elem, null) :
                    elem.currentStyle,
                styles = {};

            if (style && style.length && style[0] && style[style[0]]) {
                len = style.length;
                while (len--) {
                    key = style[len];
                    if (typeof style[key] === "string") {
                        styles[$.camelCase(key)] = style[key];
                    }
                }

                // Support: Opera, IE <9
            } else {
                for (key in style) {
                    if (typeof style[key] === "string") {
                        styles[key] = style[key];
                    }
                }
            }

            return styles;
        }

        function styleDifference(oldStyle, newStyle) {
            var diff = {},
                name, value;

            for (name in newStyle) {
                value = newStyle[name];
                if (oldStyle[name] !== value) {
                    if (!shorthandStyles[name]) {
                        if ($.fx.step[name] || !isNaN(parseFloat(value))) {
                            diff[name] = value;
                        }
                    }
                }
            }

            return diff;
        }

        // Support: jQuery <1.8
        if (!$.fn.addBack) {
            $.fn.addBack = function (selector) {
                return this.add(selector == null ?
                    this.prevObject : this.prevObject.filter(selector)
                );
            };
        }

        $.effects.animateClass = function (value, duration, easing, callback) {
            var o = $.speed(duration, easing, callback);

            return this.queue(function () {
                var animated = $(this),
                    baseClass = animated.attr("class") || "",
                    applyClassChange,
                    allAnimations = o.children ? animated.find("*").addBack() : animated;

                // Map the animated objects to store the original styles.
                allAnimations = allAnimations.map(function () {
                    var el = $(this);
                    return {
                        el: el,
                        start: getElementStyles(this)
                    };
                });

                // Apply class change
                applyClassChange = function () {
                    $.each(classAnimationActions, function (i, action) {
                        if (value[action]) {
                            animated[action + "Class"](value[action]);
                        }
                    });
                };
                applyClassChange();

                // Map all animated objects again - calculate new styles and diff
                allAnimations = allAnimations.map(function () {
                    this.end = getElementStyles(this.el[0]);
                    this.diff = styleDifference(this.start, this.end);
                    return this;
                });

                // Apply original class
                animated.attr("class", baseClass);

                // Map all animated objects again - this time collecting a promise
                allAnimations = allAnimations.map(function () {
                    var styleInfo = this,
                        dfd = $.Deferred(),
                        opts = $.extend({}, o, {
                            queue: false,
                            complete: function () {
                                dfd.resolve(styleInfo);
                            }
                        });

                    this.el.animate(this.diff, opts);
                    return dfd.promise();
                });

                // Once all animations have completed:
                $.when.apply($, allAnimations.get()).done(function () {

                    // Set the final class
                    applyClassChange();

                    // For each animated element,
                    // clear all css properties that were animated
                    $.each(arguments, function () {
                        var el = this.el;
                        $.each(this.diff, function (key) {
                            el.css(key, "");
                        });
                    });

                    // This is guarnteed to be there if you use jQuery.speed()
                    // it also handles dequeuing the next anim...
                    o.complete.call(animated[0]);
                });
            });
        };

        $.fn.extend({
            addClass: (function (orig) {
                return function (classNames, speed, easing, callback) {
                    return speed ?
                        $.effects.animateClass.call(this,
                            { add: classNames }, speed, easing, callback) :
                        orig.apply(this, arguments);
                };
            })($.fn.addClass),

            removeClass: (function (orig) {
                return function (classNames, speed, easing, callback) {
                    return arguments.length > 1 ?
                        $.effects.animateClass.call(this,
                            { remove: classNames }, speed, easing, callback) :
                        orig.apply(this, arguments);
                };
            })($.fn.removeClass),

            toggleClass: (function (orig) {
                return function (classNames, force, speed, easing, callback) {
                    if (typeof force === "boolean" || force === undefined) {
                        if (!speed) {

                            // Without speed parameter
                            return orig.apply(this, arguments);
                        } else {
                            return $.effects.animateClass.call(this,
                                (force ? { add: classNames } : { remove: classNames }),
                                speed, easing, callback);
                        }
                    } else {

                        // Without force parameter
                        return $.effects.animateClass.call(this,
                            { toggle: classNames }, force, speed, easing);
                    }
                };
            })($.fn.toggleClass),

            switchClass: function (remove, add, speed, easing, callback) {
                return $.effects.animateClass.call(this, {
                    add: add,
                    remove: remove
                }, speed, easing, callback);
            }
        });

    })();

    /******************************************************************************/
    /*********************************** EFFECTS **********************************/
    /******************************************************************************/

    (function () {

        if ($.expr && $.expr.filters && $.expr.filters.animated) {
            $.expr.filters.animated = (function (orig) {
                return function (elem) {
                    return !!$(elem).data(dataSpaceAnimated) || orig(elem);
                };
            })($.expr.filters.animated);
        }

        if ($.uiBackCompat !== false) {
            $.extend($.effects, {

                // Saves a set of properties in a data storage
                save: function (element, set) {
                    var i = 0, length = set.length;
                    for (; i < length; i++) {
                        if (set[i] !== null) {
                            element.data(dataSpace + set[i], element[0].style[set[i]]);
                        }
                    }
                },

                // Restores a set of previously saved properties from a data storage
                restore: function (element, set) {
                    var val, i = 0, length = set.length;
                    for (; i < length; i++) {
                        if (set[i] !== null) {
                            val = element.data(dataSpace + set[i]);
                            element.css(set[i], val);
                        }
                    }
                },

                setMode: function (el, mode) {
                    if (mode === "toggle") {
                        mode = el.is(":hidden") ? "show" : "hide";
                    }
                    return mode;
                },

                // Wraps the element around a wrapper that copies position properties
                createWrapper: function (element) {

                    // If the element is already wrapped, return it
                    if (element.parent().is(".ui-effects-wrapper")) {
                        return element.parent();
                    }

                    // Wrap the element
                    var props = {
                        width: element.outerWidth(true),
                        height: element.outerHeight(true),
                        "float": element.css("float")
                    },
                        wrapper = $("<div></div>")
                            .addClass("ui-effects-wrapper")
                            .css({
                                fontSize: "100%",
                                background: "transparent",
                                border: "none",
                                margin: 0,
                                padding: 0
                            }),

                        // Store the size in case width/height are defined in % - Fixes #5245
                        size = {
                            width: element.width(),
                            height: element.height()
                        },
                        active = document.activeElement;

                    // Support: Firefox
                    // Firefox incorrectly exposes anonymous content
                    // https://bugzilla.mozilla.org/show_bug.cgi?id=561664
                    try {
                        active.id;
                    } catch (e) {
                        active = document.body;
                    }

                    element.wrap(wrapper);

                    // Fixes #7595 - Elements lose focus when wrapped.
                    if (element[0] === active || $.contains(element[0], active)) {
                        $(active).trigger("focus");
                    }

                    // Hotfix for jQuery 1.4 since some change in wrap() seems to actually
                    // lose the reference to the wrapped element
                    wrapper = element.parent();

                    // Transfer positioning properties to the wrapper
                    if (element.css("position") === "static") {
                        wrapper.css({ position: "relative" });
                        element.css({ position: "relative" });
                    } else {
                        $.extend(props, {
                            position: element.css("position"),
                            zIndex: element.css("z-index")
                        });
                        $.each(["top", "left", "bottom", "right"], function (i, pos) {
                            props[pos] = element.css(pos);
                            if (isNaN(parseInt(props[pos], 10))) {
                                props[pos] = "auto";
                            }
                        });
                        element.css({
                            position: "relative",
                            top: 0,
                            left: 0,
                            right: "auto",
                            bottom: "auto"
                        });
                    }
                    element.css(size);

                    return wrapper.css(props).show();
                },

                removeWrapper: function (element) {
                    var active = document.activeElement;

                    if (element.parent().is(".ui-effects-wrapper")) {
                        element.parent().replaceWith(element);

                        // Fixes #7595 - Elements lose focus when wrapped.
                        if (element[0] === active || $.contains(element[0], active)) {
                            $(active).trigger("focus");
                        }
                    }

                    return element;
                }
            });
        }

        $.extend($.effects, {
            version: "1.12.1",

            define: function (name, mode, effect) {
                if (!effect) {
                    effect = mode;
                    mode = "effect";
                }

                $.effects.effect[name] = effect;
                $.effects.effect[name].mode = mode;

                return effect;
            },

            scaledDimensions: function (element, percent, direction) {
                if (percent === 0) {
                    return {
                        height: 0,
                        width: 0,
                        outerHeight: 0,
                        outerWidth: 0
                    };
                }

                var x = direction !== "horizontal" ? ((percent || 100) / 100) : 1,
                    y = direction !== "vertical" ? ((percent || 100) / 100) : 1;

                return {
                    height: element.height() * y,
                    width: element.width() * x,
                    outerHeight: element.outerHeight() * y,
                    outerWidth: element.outerWidth() * x
                };

            },

            clipToBox: function (animation) {
                return {
                    width: animation.clip.right - animation.clip.left,
                    height: animation.clip.bottom - animation.clip.top,
                    left: animation.clip.left,
                    top: animation.clip.top
                };
            },

            // Injects recently queued functions to be first in line (after "inprogress")
            unshift: function (element, queueLength, count) {
                var queue = element.queue();

                if (queueLength > 1) {
                    queue.splice.apply(queue,
                        [1, 0].concat(queue.splice(queueLength, count)));
                }
                element.dequeue();
            },

            saveStyle: function (element) {
                element.data(dataSpaceStyle, element[0].style.cssText);
            },

            restoreStyle: function (element) {
                element[0].style.cssText = element.data(dataSpaceStyle) || "";
                element.removeData(dataSpaceStyle);
            },

            mode: function (element, mode) {
                var hidden = element.is(":hidden");

                if (mode === "toggle") {
                    mode = hidden ? "show" : "hide";
                }
                if (hidden ? mode === "hide" : mode === "show") {
                    mode = "none";
                }
                return mode;
            },

            // Translates a [top,left] array into a baseline value
            getBaseline: function (origin, original) {
                var y, x;

                switch (origin[0]) {
                    case "top":
                        y = 0;
                        break;
                    case "middle":
                        y = 0.5;
                        break;
                    case "bottom":
                        y = 1;
                        break;
                    default:
                        y = origin[0] / original.height;
                }

                switch (origin[1]) {
                    case "left":
                        x = 0;
                        break;
                    case "center":
                        x = 0.5;
                        break;
                    case "right":
                        x = 1;
                        break;
                    default:
                        x = origin[1] / original.width;
                }

                return {
                    x: x,
                    y: y
                };
            },

            // Creates a placeholder element so that the original element can be made absolute
            createPlaceholder: function (element) {
                var placeholder,
                    cssPosition = element.css("position"),
                    position = element.position();

                // Lock in margins first to account for form elements, which
                // will change margin if you explicitly set height
                // see: http://jsfiddle.net/JZSMt/3/ https://bugs.webkit.org/show_bug.cgi?id=107380
                // Support: Safari
                element.css({
                    marginTop: element.css("marginTop"),
                    marginBottom: element.css("marginBottom"),
                    marginLeft: element.css("marginLeft"),
                    marginRight: element.css("marginRight")
                })
                    .outerWidth(element.outerWidth())
                    .outerHeight(element.outerHeight());

                if (/^(static|relative)/.test(cssPosition)) {
                    cssPosition = "absolute";

                    placeholder = $("<" + element[0].nodeName + ">").insertAfter(element).css({

                        // Convert inline to inline block to account for inline elements
                        // that turn to inline block based on content (like img)
                        display: /^(inline|ruby)/.test(element.css("display")) ?
                            "inline-block" :
                            "block",
                        visibility: "hidden",

                        // Margins need to be set to account for margin collapse
                        marginTop: element.css("marginTop"),
                        marginBottom: element.css("marginBottom"),
                        marginLeft: element.css("marginLeft"),
                        marginRight: element.css("marginRight"),
                        "float": element.css("float")
                    })
                        .outerWidth(element.outerWidth())
                        .outerHeight(element.outerHeight())
                        .addClass("ui-effects-placeholder");

                    element.data(dataSpace + "placeholder", placeholder);
                }

                element.css({
                    position: cssPosition,
                    left: position.left,
                    top: position.top
                });

                return placeholder;
            },

            removePlaceholder: function (element) {
                var dataKey = dataSpace + "placeholder",
                    placeholder = element.data(dataKey);

                if (placeholder) {
                    placeholder.remove();
                    element.removeData(dataKey);
                }
            },

            // Removes a placeholder if it exists and restores
            // properties that were modified during placeholder creation
            cleanUp: function (element) {
                $.effects.restoreStyle(element);
                $.effects.removePlaceholder(element);
            },

            setTransition: function (element, list, factor, value) {
                value = value || {};
                $.each(list, function (i, x) {
                    var unit = element.cssUnit(x);
                    if (unit[0] > 0) {
                        value[x] = unit[0] * factor + unit[1];
                    }
                });
                return value;
            }
        });

        // Return an effect options object for the given parameters:
        function _normalizeArguments(effect, options, speed, callback) {

            // Allow passing all options as the first parameter
            if ($.isPlainObject(effect)) {
                options = effect;
                effect = effect.effect;
            }

            // Convert to an object
            effect = { effect: effect };

            // Catch (effect, null, ...)
            if (options == null) {
                options = {};
            }

            // Catch (effect, callback)
            if ($.isFunction(options)) {
                callback = options;
                speed = null;
                options = {};
            }

            // Catch (effect, speed, ?)
            if (typeof options === "number" || $.fx.speeds[options]) {
                callback = speed;
                speed = options;
                options = {};
            }

            // Catch (effect, options, callback)
            if ($.isFunction(speed)) {
                callback = speed;
                speed = null;
            }

            // Add options to effect
            if (options) {
                $.extend(effect, options);
            }

            speed = speed || options.duration;
            effect.duration = $.fx.off ? 0 :
                typeof speed === "number" ? speed :
                    speed in $.fx.speeds ? $.fx.speeds[speed] :
                        $.fx.speeds._default;

            effect.complete = callback || options.complete;

            return effect;
        }

        function standardAnimationOption(option) {

            // Valid standard speeds (nothing, number, named speed)
            if (!option || typeof option === "number" || $.fx.speeds[option]) {
                return true;
            }

            // Invalid strings - treat as "normal" speed
            if (typeof option === "string" && !$.effects.effect[option]) {
                return true;
            }

            // Complete callback
            if ($.isFunction(option)) {
                return true;
            }

            // Options hash (but not naming an effect)
            if (typeof option === "object" && !option.effect) {
                return true;
            }

            // Didn't match any standard API
            return false;
        }

        $.fn.extend({
            effect: function ( /* effect, options, speed, callback */) {
                var args = _normalizeArguments.apply(this, arguments),
                    effectMethod = $.effects.effect[args.effect],
                    defaultMode = effectMethod.mode,
                    queue = args.queue,
                    queueName = queue || "fx",
                    complete = args.complete,
                    mode = args.mode,
                    modes = [],
                    prefilter = function (next) {
                        var el = $(this),
                            normalizedMode = $.effects.mode(el, mode) || defaultMode;

                        // Sentinel for duck-punching the :animated psuedo-selector
                        el.data(dataSpaceAnimated, true);

                        // Save effect mode for later use,
                        // we can't just call $.effects.mode again later,
                        // as the .show() below destroys the initial state
                        modes.push(normalizedMode);

                        // See $.uiBackCompat inside of run() for removal of defaultMode in 1.13
                        if (defaultMode && (normalizedMode === "show" ||
                            (normalizedMode === defaultMode && normalizedMode === "hide"))) {
                            el.show();
                        }

                        if (!defaultMode || normalizedMode !== "none") {
                            $.effects.saveStyle(el);
                        }

                        if ($.isFunction(next)) {
                            next();
                        }
                    };

                if ($.fx.off || !effectMethod) {

                    // Delegate to the original method (e.g., .show()) if possible
                    if (mode) {
                        return this[mode](args.duration, complete);
                    } else {
                        return this.each(function () {
                            if (complete) {
                                complete.call(this);
                            }
                        });
                    }
                }

                function run(next) {
                    var elem = $(this);

                    function cleanup() {
                        elem.removeData(dataSpaceAnimated);

                        $.effects.cleanUp(elem);

                        if (args.mode === "hide") {
                            elem.hide();
                        }

                        done();
                    }

                    function done() {
                        if ($.isFunction(complete)) {
                            complete.call(elem[0]);
                        }

                        if ($.isFunction(next)) {
                            next();
                        }
                    }

                    // Override mode option on a per element basis,
                    // as toggle can be either show or hide depending on element state
                    args.mode = modes.shift();

                    if ($.uiBackCompat !== false && !defaultMode) {
                        if (elem.is(":hidden") ? mode === "hide" : mode === "show") {

                            // Call the core method to track "olddisplay" properly
                            elem[mode]();
                            done();
                        } else {
                            effectMethod.call(elem[0], args, done);
                        }
                    } else {
                        if (args.mode === "none") {

                            // Call the core method to track "olddisplay" properly
                            elem[mode]();
                            done();
                        } else {
                            effectMethod.call(elem[0], args, cleanup);
                        }
                    }
                }

                // Run prefilter on all elements first to ensure that
                // any showing or hiding happens before placeholder creation,
                // which ensures that any layout changes are correctly captured.
                return queue === false ?
                    this.each(prefilter).each(run) :
                    this.queue(queueName, prefilter).queue(queueName, run);
            },

            show: (function (orig) {
                return function (option) {
                    if (standardAnimationOption(option)) {
                        return orig.apply(this, arguments);
                    } else {
                        var args = _normalizeArguments.apply(this, arguments);
                        args.mode = "show";
                        return this.effect.call(this, args);
                    }
                };
            })($.fn.show),

            hide: (function (orig) {
                return function (option) {
                    if (standardAnimationOption(option)) {
                        return orig.apply(this, arguments);
                    } else {
                        var args = _normalizeArguments.apply(this, arguments);
                        args.mode = "hide";
                        return this.effect.call(this, args);
                    }
                };
            })($.fn.hide),

            toggle: (function (orig) {
                return function (option) {
                    if (standardAnimationOption(option) || typeof option === "boolean") {
                        return orig.apply(this, arguments);
                    } else {
                        var args = _normalizeArguments.apply(this, arguments);
                        args.mode = "toggle";
                        return this.effect.call(this, args);
                    }
                };
            })($.fn.toggle),

            cssUnit: function (key) {
                var style = this.css(key),
                    val = [];

                $.each(["em", "px", "%", "pt"], function (i, unit) {
                    if (style.indexOf(unit) > 0) {
                        val = [parseFloat(style), unit];
                    }
                });
                return val;
            },

            cssClip: function (clipObj) {
                if (clipObj) {
                    return this.css("clip", "rect(" + clipObj.top + "px " + clipObj.right + "px " +
                        clipObj.bottom + "px " + clipObj.left + "px)");
                }
                return parseClip(this.css("clip"), this);
            },

            transfer: function (options, done) {
                var element = $(this),
                    target = $(options.to),
                    targetFixed = target.css("position") === "fixed",
                    body = $("body"),
                    fixTop = targetFixed ? body.scrollTop() : 0,
                    fixLeft = targetFixed ? body.scrollLeft() : 0,
                    endPosition = target.offset(),
                    animation = {
                        top: endPosition.top - fixTop,
                        left: endPosition.left - fixLeft,
                        height: target.innerHeight(),
                        width: target.innerWidth()
                    },
                    startPosition = element.offset(),
                    transfer = $("<div class='ui-effects-transfer'></div>")
                        .appendTo("body")
                        .addClass(options.className)
                        .css({
                            top: startPosition.top - fixTop,
                            left: startPosition.left - fixLeft,
                            height: element.innerHeight(),
                            width: element.innerWidth(),
                            position: targetFixed ? "fixed" : "absolute"
                        })
                        .animate(animation, options.duration, options.easing, function () {
                            transfer.remove();
                            if ($.isFunction(done)) {
                                done();
                            }
                        });
            }
        });

        function parseClip(str, element) {
            var outerWidth = element.outerWidth(),
                outerHeight = element.outerHeight(),
                clipRegex = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/,
                values = clipRegex.exec(str) || ["", 0, outerWidth, outerHeight, 0];

            return {
                top: parseFloat(values[1]) || 0,
                right: values[2] === "auto" ? outerWidth : parseFloat(values[2]),
                bottom: values[3] === "auto" ? outerHeight : parseFloat(values[3]),
                left: parseFloat(values[4]) || 0
            };
        }

        $.fx.step.clip = function (fx) {
            if (!fx.clipInit) {
                fx.start = $(fx.elem).cssClip();
                if (typeof fx.end === "string") {
                    fx.end = parseClip(fx.end, fx.elem);
                }
                fx.clipInit = true;
            }

            $(fx.elem).cssClip({
                top: fx.pos * (fx.end.top - fx.start.top) + fx.start.top,
                right: fx.pos * (fx.end.right - fx.start.right) + fx.start.right,
                bottom: fx.pos * (fx.end.bottom - fx.start.bottom) + fx.start.bottom,
                left: fx.pos * (fx.end.left - fx.start.left) + fx.start.left
            });
        };

    })();

    /******************************************************************************/
    /*********************************** EASING ***********************************/
    /******************************************************************************/

    (function () {

        // Based on easing equations from Robert Penner (http://www.robertpenner.com/easing)

        var baseEasings = {};

        $.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (i, name) {
            baseEasings[name] = function (p) {
                return Math.pow(p, i + 2);
            };
        });

        $.extend(baseEasings, {
            Sine: function (p) {
                return 1 - Math.cos(p * Math.PI / 2);
            },
            Circ: function (p) {
                return 1 - Math.sqrt(1 - p * p);
            },
            Elastic: function (p) {
                return p === 0 || p === 1 ? p :
                    -Math.pow(2, 8 * (p - 1)) * Math.sin(((p - 1) * 80 - 7.5) * Math.PI / 15);
            },
            Back: function (p) {
                return p * p * (3 * p - 2);
            },
            Bounce: function (p) {
                var pow2,
                    bounce = 4;

                while (p < ((pow2 = Math.pow(2, --bounce)) - 1) / 11) { }
                return 1 / Math.pow(4, 3 - bounce) - 7.5625 * Math.pow((pow2 * 3 - 2) / 22 - p, 2);
            }
        });

        $.each(baseEasings, function (name, easeIn) {
            $.easing["easeIn" + name] = easeIn;
            $.easing["easeOut" + name] = function (p) {
                return 1 - easeIn(1 - p);
            };
            $.easing["easeInOut" + name] = function (p) {
                return p < 0.5 ?
                    easeIn(p * 2) / 2 :
                    1 - easeIn(p * -2 + 2) / 2;
            };
        });

    })();

    var effect = $.effects;


    /*!
     * jQuery UI Effects Blind 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */

    //>>label: Blind Effect
    //>>group: Effects
    //>>description: Blinds the element.
    //>>docs: http://api.jqueryui.com/blind-effect/
    //>>demos: http://jqueryui.com/effect/



    var effectsEffectBlind = $.effects.define("blind", "hide", function (options, done) {
        var map = {
            up: ["bottom", "top"],
            vertical: ["bottom", "top"],
            down: ["top", "bottom"],
            left: ["right", "left"],
            horizontal: ["right", "left"],
            right: ["left", "right"]
        },
            element = $(this),
            direction = options.direction || "up",
            start = element.cssClip(),
            animate = { clip: $.extend({}, start) },
            placeholder = $.effects.createPlaceholder(element);

        animate.clip[map[direction][0]] = animate.clip[map[direction][1]];

        if (options.mode === "show") {
            element.cssClip(animate.clip);
            if (placeholder) {
                placeholder.css($.effects.clipToBox(animate));
            }

            animate.clip = start;
        }

        if (placeholder) {
            placeholder.animate($.effects.clipToBox(animate), options.duration, options.easing);
        }

        element.animate(animate, {
            queue: false,
            duration: options.duration,
            easing: options.easing,
            complete: done
        });
    });


    /*!
     * jQuery UI Effects Bounce 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */

    //>>label: Bounce Effect
    //>>group: Effects
    //>>description: Bounces an element horizontally or vertically n times.
    //>>docs: http://api.jqueryui.com/bounce-effect/
    //>>demos: http://jqueryui.com/effect/



    var effectsEffectBounce = $.effects.define("bounce", function (options, done) {
        var upAnim, downAnim, refValue,
            element = $(this),

            // Defaults:
            mode = options.mode,
            hide = mode === "hide",
            show = mode === "show",
            direction = options.direction || "up",
            distance = options.distance,
            times = options.times || 5,

            // Number of internal animations
            anims = times * 2 + (show || hide ? 1 : 0),
            speed = options.duration / anims,
            easing = options.easing,

            // Utility:
            ref = (direction === "up" || direction === "down") ? "top" : "left",
            motion = (direction === "up" || direction === "left"),
            i = 0,

            queuelen = element.queue().length;

        $.effects.createPlaceholder(element);

        refValue = element.css(ref);

        // Default distance for the BIGGEST bounce is the outer Distance / 3
        if (!distance) {
            distance = element[ref === "top" ? "outerHeight" : "outerWidth"]() / 3;
        }

        if (show) {
            downAnim = { opacity: 1 };
            downAnim[ref] = refValue;

            // If we are showing, force opacity 0 and set the initial position
            // then do the "first" animation
            element
                .css("opacity", 0)
                .css(ref, motion ? -distance * 2 : distance * 2)
                .animate(downAnim, speed, easing);
        }

        // Start at the smallest distance if we are hiding
        if (hide) {
            distance = distance / Math.pow(2, times - 1);
        }

        downAnim = {};
        downAnim[ref] = refValue;

        // Bounces up/down/left/right then back to 0 -- times * 2 animations happen here
        for (; i < times; i++) {
            upAnim = {};
            upAnim[ref] = (motion ? "-=" : "+=") + distance;

            element
                .animate(upAnim, speed, easing)
                .animate(downAnim, speed, easing);

            distance = hide ? distance * 2 : distance / 2;
        }

        // Last Bounce when Hiding
        if (hide) {
            upAnim = { opacity: 0 };
            upAnim[ref] = (motion ? "-=" : "+=") + distance;

            element.animate(upAnim, speed, easing);
        }

        element.queue(done);

        $.effects.unshift(element, queuelen, anims + 1);
    });


    /*!
     * jQuery UI Effects Clip 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */

    //>>label: Clip Effect
    //>>group: Effects
    //>>description: Clips the element on and off like an old TV.
    //>>docs: http://api.jqueryui.com/clip-effect/
    //>>demos: http://jqueryui.com/effect/



    var effectsEffectClip = $.effects.define("clip", "hide", function (options, done) {
        var start,
            animate = {},
            element = $(this),
            direction = options.direction || "vertical",
            both = direction === "both",
            horizontal = both || direction === "horizontal",
            vertical = both || direction === "vertical";

        start = element.cssClip();
        animate.clip = {
            top: vertical ? (start.bottom - start.top) / 2 : start.top,
            right: horizontal ? (start.right - start.left) / 2 : start.right,
            bottom: vertical ? (start.bottom - start.top) / 2 : start.bottom,
            left: horizontal ? (start.right - start.left) / 2 : start.left
        };

        $.effects.createPlaceholder(element);

        if (options.mode === "show") {
            element.cssClip(animate.clip);
            animate.clip = start;
        }

        element.animate(animate, {
            queue: false,
            duration: options.duration,
            easing: options.easing,
            complete: done
        });

    });


    /*!
     * jQuery UI Effects Drop 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */

    //>>label: Drop Effect
    //>>group: Effects
    //>>description: Moves an element in one direction and hides it at the same time.
    //>>docs: http://api.jqueryui.com/drop-effect/
    //>>demos: http://jqueryui.com/effect/



    var effectsEffectDrop = $.effects.define("drop", "hide", function (options, done) {

        var distance,
            element = $(this),
            mode = options.mode,
            show = mode === "show",
            direction = options.direction || "left",
            ref = (direction === "up" || direction === "down") ? "top" : "left",
            motion = (direction === "up" || direction === "left") ? "-=" : "+=",
            oppositeMotion = (motion === "+=") ? "-=" : "+=",
            animation = {
                opacity: 0
            };

        $.effects.createPlaceholder(element);

        distance = options.distance ||
            element[ref === "top" ? "outerHeight" : "outerWidth"](true) / 2;

        animation[ref] = motion + distance;

        if (show) {
            element.css(animation);

            animation[ref] = oppositeMotion + distance;
            animation.opacity = 1;
        }

        // Animate
        element.animate(animation, {
            queue: false,
            duration: options.duration,
            easing: options.easing,
            complete: done
        });
    });


    /*!
     * jQuery UI Effects Explode 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */

    //>>label: Explode Effect
    //>>group: Effects
    // jscs:disable maximumLineLength
    //>>description: Explodes an element in all directions into n pieces. Implodes an element to its original wholeness.
    // jscs:enable maximumLineLength
    //>>docs: http://api.jqueryui.com/explode-effect/
    //>>demos: http://jqueryui.com/effect/



    var effectsEffectExplode = $.effects.define("explode", "hide", function (options, done) {

        var i, j, left, top, mx, my,
            rows = options.pieces ? Math.round(Math.sqrt(options.pieces)) : 3,
            cells = rows,
            element = $(this),
            mode = options.mode,
            show = mode === "show",

            // Show and then visibility:hidden the element before calculating offset
            offset = element.show().css("visibility", "hidden").offset(),

            // Width and height of a piece
            width = Math.ceil(element.outerWidth() / cells),
            height = Math.ceil(element.outerHeight() / rows),
            pieces = [];

        // Children animate complete:
        function childComplete() {
            pieces.push(this);
            if (pieces.length === rows * cells) {
                animComplete();
            }
        }

        // Clone the element for each row and cell.
        for (i = 0; i < rows; i++) { // ===>
            top = offset.top + i * height;
            my = i - (rows - 1) / 2;

            for (j = 0; j < cells; j++) { // |||
                left = offset.left + j * width;
                mx = j - (cells - 1) / 2;

                // Create a clone of the now hidden main element that will be absolute positioned
                // within a wrapper div off the -left and -top equal to size of our pieces
                element
                    .clone()
                    .appendTo("body")
                    .wrap("<div></div>")
                    .css({
                        position: "absolute",
                        visibility: "visible",
                        left: -j * width,
                        top: -i * height
                    })

                    // Select the wrapper - make it overflow: hidden and absolute positioned based on
                    // where the original was located +left and +top equal to the size of pieces
                    .parent()
                    .addClass("ui-effects-explode")
                    .css({
                        position: "absolute",
                        overflow: "hidden",
                        width: width,
                        height: height,
                        left: left + (show ? mx * width : 0),
                        top: top + (show ? my * height : 0),
                        opacity: show ? 0 : 1
                    })
                    .animate({
                        left: left + (show ? 0 : mx * width),
                        top: top + (show ? 0 : my * height),
                        opacity: show ? 1 : 0
                    }, options.duration || 500, options.easing, childComplete);
            }
        }

        function animComplete() {
            element.css({
                visibility: "visible"
            });
            $(pieces).remove();
            done();
        }
    });


    /*!
     * jQuery UI Effects Fade 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */

    //>>label: Fade Effect
    //>>group: Effects
    //>>description: Fades the element.
    //>>docs: http://api.jqueryui.com/fade-effect/
    //>>demos: http://jqueryui.com/effect/



    var effectsEffectFade = $.effects.define("fade", "toggle", function (options, done) {
        var show = options.mode === "show";

        $(this)
            .css("opacity", show ? 0 : 1)
            .animate({
                opacity: show ? 1 : 0
            }, {
                queue: false,
                duration: options.duration,
                easing: options.easing,
                complete: done
            });
    });


    /*!
     * jQuery UI Effects Fold 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */

    //>>label: Fold Effect
    //>>group: Effects
    //>>description: Folds an element first horizontally and then vertically.
    //>>docs: http://api.jqueryui.com/fold-effect/
    //>>demos: http://jqueryui.com/effect/



    var effectsEffectFold = $.effects.define("fold", "hide", function (options, done) {

        // Create element
        var element = $(this),
            mode = options.mode,
            show = mode === "show",
            hide = mode === "hide",
            size = options.size || 15,
            percent = /([0-9]+)%/.exec(size),
            horizFirst = !!options.horizFirst,
            ref = horizFirst ? ["right", "bottom"] : ["bottom", "right"],
            duration = options.duration / 2,

            placeholder = $.effects.createPlaceholder(element),

            start = element.cssClip(),
            animation1 = { clip: $.extend({}, start) },
            animation2 = { clip: $.extend({}, start) },

            distance = [start[ref[0]], start[ref[1]]],

            queuelen = element.queue().length;

        if (percent) {
            size = parseInt(percent[1], 10) / 100 * distance[hide ? 0 : 1];
        }
        animation1.clip[ref[0]] = size;
        animation2.clip[ref[0]] = size;
        animation2.clip[ref[1]] = 0;

        if (show) {
            element.cssClip(animation2.clip);
            if (placeholder) {
                placeholder.css($.effects.clipToBox(animation2));
            }

            animation2.clip = start;
        }

        // Animate
        element
            .queue(function (next) {
                if (placeholder) {
                    placeholder
                        .animate($.effects.clipToBox(animation1), duration, options.easing)
                        .animate($.effects.clipToBox(animation2), duration, options.easing);
                }

                next();
            })
            .animate(animation1, duration, options.easing)
            .animate(animation2, duration, options.easing)
            .queue(done);

        $.effects.unshift(element, queuelen, 4);
    });


    /*!
     * jQuery UI Effects Highlight 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */

    //>>label: Highlight Effect
    //>>group: Effects
    //>>description: Highlights the background of an element in a defined color for a custom duration.
    //>>docs: http://api.jqueryui.com/highlight-effect/
    //>>demos: http://jqueryui.com/effect/



    var effectsEffectHighlight = $.effects.define("highlight", "show", function (options, done) {
        var element = $(this),
            animation = {
                backgroundColor: element.css("backgroundColor")
            };

        if (options.mode === "hide") {
            animation.opacity = 0;
        }

        $.effects.saveStyle(element);

        element
            .css({
                backgroundImage: "none",
                backgroundColor: options.color || "#ffff99"
            })
            .animate(animation, {
                queue: false,
                duration: options.duration,
                easing: options.easing,
                complete: done
            });
    });


    /*!
     * jQuery UI Effects Size 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */

    //>>label: Size Effect
    //>>group: Effects
    //>>description: Resize an element to a specified width and height.
    //>>docs: http://api.jqueryui.com/size-effect/
    //>>demos: http://jqueryui.com/effect/



    var effectsEffectSize = $.effects.define("size", function (options, done) {

        // Create element
        var baseline, factor, temp,
            element = $(this),

            // Copy for children
            cProps = ["fontSize"],
            vProps = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
            hProps = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],

            // Set options
            mode = options.mode,
            restore = mode !== "effect",
            scale = options.scale || "both",
            origin = options.origin || ["middle", "center"],
            position = element.css("position"),
            pos = element.position(),
            original = $.effects.scaledDimensions(element),
            from = options.from || original,
            to = options.to || $.effects.scaledDimensions(element, 0);

        $.effects.createPlaceholder(element);

        if (mode === "show") {
            temp = from;
            from = to;
            to = temp;
        }

        // Set scaling factor
        factor = {
            from: {
                y: from.height / original.height,
                x: from.width / original.width
            },
            to: {
                y: to.height / original.height,
                x: to.width / original.width
            }
        };

        // Scale the css box
        if (scale === "box" || scale === "both") {

            // Vertical props scaling
            if (factor.from.y !== factor.to.y) {
                from = $.effects.setTransition(element, vProps, factor.from.y, from);
                to = $.effects.setTransition(element, vProps, factor.to.y, to);
            }

            // Horizontal props scaling
            if (factor.from.x !== factor.to.x) {
                from = $.effects.setTransition(element, hProps, factor.from.x, from);
                to = $.effects.setTransition(element, hProps, factor.to.x, to);
            }
        }

        // Scale the content
        if (scale === "content" || scale === "both") {

            // Vertical props scaling
            if (factor.from.y !== factor.to.y) {
                from = $.effects.setTransition(element, cProps, factor.from.y, from);
                to = $.effects.setTransition(element, cProps, factor.to.y, to);
            }
        }

        // Adjust the position properties based on the provided origin points
        if (origin) {
            baseline = $.effects.getBaseline(origin, original);
            from.top = (original.outerHeight - from.outerHeight) * baseline.y + pos.top;
            from.left = (original.outerWidth - from.outerWidth) * baseline.x + pos.left;
            to.top = (original.outerHeight - to.outerHeight) * baseline.y + pos.top;
            to.left = (original.outerWidth - to.outerWidth) * baseline.x + pos.left;
        }
        element.css(from);

        // Animate the children if desired
        if (scale === "content" || scale === "both") {

            vProps = vProps.concat(["marginTop", "marginBottom"]).concat(cProps);
            hProps = hProps.concat(["marginLeft", "marginRight"]);

            // Only animate children with width attributes specified
            // TODO: is this right? should we include anything with css width specified as well
            element.find("*[width]").each(function () {
                var child = $(this),
                    childOriginal = $.effects.scaledDimensions(child),
                    childFrom = {
                        height: childOriginal.height * factor.from.y,
                        width: childOriginal.width * factor.from.x,
                        outerHeight: childOriginal.outerHeight * factor.from.y,
                        outerWidth: childOriginal.outerWidth * factor.from.x
                    },
                    childTo = {
                        height: childOriginal.height * factor.to.y,
                        width: childOriginal.width * factor.to.x,
                        outerHeight: childOriginal.height * factor.to.y,
                        outerWidth: childOriginal.width * factor.to.x
                    };

                // Vertical props scaling
                if (factor.from.y !== factor.to.y) {
                    childFrom = $.effects.setTransition(child, vProps, factor.from.y, childFrom);
                    childTo = $.effects.setTransition(child, vProps, factor.to.y, childTo);
                }

                // Horizontal props scaling
                if (factor.from.x !== factor.to.x) {
                    childFrom = $.effects.setTransition(child, hProps, factor.from.x, childFrom);
                    childTo = $.effects.setTransition(child, hProps, factor.to.x, childTo);
                }

                if (restore) {
                    $.effects.saveStyle(child);
                }

                // Animate children
                child.css(childFrom);
                child.animate(childTo, options.duration, options.easing, function () {

                    // Restore children
                    if (restore) {
                        $.effects.restoreStyle(child);
                    }
                });
            });
        }

        // Animate
        element.animate(to, {
            queue: false,
            duration: options.duration,
            easing: options.easing,
            complete: function () {

                var offset = element.offset();

                if (to.opacity === 0) {
                    element.css("opacity", from.opacity);
                }

                if (!restore) {
                    element
                        .css("position", position === "static" ? "relative" : position)
                        .offset(offset);

                    // Need to save style here so that automatic style restoration
                    // doesn't restore to the original styles from before the animation.
                    $.effects.saveStyle(element);
                }

                done();
            }
        });

    });


    /*!
     * jQuery UI Effects Scale 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */

    //>>label: Scale Effect
    //>>group: Effects
    //>>description: Grows or shrinks an element and its content.
    //>>docs: http://api.jqueryui.com/scale-effect/
    //>>demos: http://jqueryui.com/effect/



    var effectsEffectScale = $.effects.define("scale", function (options, done) {

        // Create element
        var el = $(this),
            mode = options.mode,
            percent = parseInt(options.percent, 10) ||
                (parseInt(options.percent, 10) === 0 ? 0 : (mode !== "effect" ? 0 : 100)),

            newOptions = $.extend(true, {
                from: $.effects.scaledDimensions(el),
                to: $.effects.scaledDimensions(el, percent, options.direction || "both"),
                origin: options.origin || ["middle", "center"]
            }, options);

        // Fade option to support puff
        if (options.fade) {
            newOptions.from.opacity = 1;
            newOptions.to.opacity = 0;
        }

        $.effects.effect.size.call(this, newOptions, done);
    });


    /*!
     * jQuery UI Effects Puff 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */

    //>>label: Puff Effect
    //>>group: Effects
    //>>description: Creates a puff effect by scaling the element up and hiding it at the same time.
    //>>docs: http://api.jqueryui.com/puff-effect/
    //>>demos: http://jqueryui.com/effect/



    var effectsEffectPuff = $.effects.define("puff", "hide", function (options, done) {
        var newOptions = $.extend(true, {}, options, {
            fade: true,
            percent: parseInt(options.percent, 10) || 150
        });

        $.effects.effect.scale.call(this, newOptions, done);
    });


    /*!
     * jQuery UI Effects Pulsate 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */

    //>>label: Pulsate Effect
    //>>group: Effects
    //>>description: Pulsates an element n times by changing the opacity to zero and back.
    //>>docs: http://api.jqueryui.com/pulsate-effect/
    //>>demos: http://jqueryui.com/effect/



    var effectsEffectPulsate = $.effects.define("pulsate", "show", function (options, done) {
        var element = $(this),
            mode = options.mode,
            show = mode === "show",
            hide = mode === "hide",
            showhide = show || hide,

            // Showing or hiding leaves off the "last" animation
            anims = ((options.times || 5) * 2) + (showhide ? 1 : 0),
            duration = options.duration / anims,
            animateTo = 0,
            i = 1,
            queuelen = element.queue().length;

        if (show || !element.is(":visible")) {
            element.css("opacity", 0).show();
            animateTo = 1;
        }

        // Anims - 1 opacity "toggles"
        for (; i < anims; i++) {
            element.animate({ opacity: animateTo }, duration, options.easing);
            animateTo = 1 - animateTo;
        }

        element.animate({ opacity: animateTo }, duration, options.easing);

        element.queue(done);

        $.effects.unshift(element, queuelen, anims + 1);
    });


    /*!
     * jQuery UI Effects Shake 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */

    //>>label: Shake Effect
    //>>group: Effects
    //>>description: Shakes an element horizontally or vertically n times.
    //>>docs: http://api.jqueryui.com/shake-effect/
    //>>demos: http://jqueryui.com/effect/



    var effectsEffectShake = $.effects.define("shake", function (options, done) {

        var i = 1,
            element = $(this),
            direction = options.direction || "left",
            distance = options.distance || 20,
            times = options.times || 3,
            anims = times * 2 + 1,
            speed = Math.round(options.duration / anims),
            ref = (direction === "up" || direction === "down") ? "top" : "left",
            positiveMotion = (direction === "up" || direction === "left"),
            animation = {},
            animation1 = {},
            animation2 = {},

            queuelen = element.queue().length;

        $.effects.createPlaceholder(element);

        // Animation
        animation[ref] = (positiveMotion ? "-=" : "+=") + distance;
        animation1[ref] = (positiveMotion ? "+=" : "-=") + distance * 2;
        animation2[ref] = (positiveMotion ? "-=" : "+=") + distance * 2;

        // Animate
        element.animate(animation, speed, options.easing);

        // Shakes
        for (; i < times; i++) {
            element
                .animate(animation1, speed, options.easing)
                .animate(animation2, speed, options.easing);
        }

        element
            .animate(animation1, speed, options.easing)
            .animate(animation, speed / 2, options.easing)
            .queue(done);

        $.effects.unshift(element, queuelen, anims + 1);
    });


    /*!
     * jQuery UI Effects Slide 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */

    //>>label: Slide Effect
    //>>group: Effects
    //>>description: Slides an element in and out of the viewport.
    //>>docs: http://api.jqueryui.com/slide-effect/
    //>>demos: http://jqueryui.com/effect/



    var effectsEffectSlide = $.effects.define("slide", "show", function (options, done) {
        var startClip, startRef,
            element = $(this),
            map = {
                up: ["bottom", "top"],
                down: ["top", "bottom"],
                left: ["right", "left"],
                right: ["left", "right"]
            },
            mode = options.mode,
            direction = options.direction || "left",
            ref = (direction === "up" || direction === "down") ? "top" : "left",
            positiveMotion = (direction === "up" || direction === "left"),
            distance = options.distance ||
                element[ref === "top" ? "outerHeight" : "outerWidth"](true),
            animation = {};

        $.effects.createPlaceholder(element);

        startClip = element.cssClip();
        startRef = element.position()[ref];

        // Define hide animation
        animation[ref] = (positiveMotion ? -1 : 1) * distance + startRef;
        animation.clip = element.cssClip();
        animation.clip[map[direction][1]] = animation.clip[map[direction][0]];

        // Reverse the animation if we're showing
        if (mode === "show") {
            element.cssClip(animation.clip);
            element.css(ref, animation[ref]);
            animation.clip = startClip;
            animation[ref] = startRef;
        }

        // Actually animate
        element.animate(animation, {
            queue: false,
            duration: options.duration,
            easing: options.easing,
            complete: done
        });
    });


    /*!
     * jQuery UI Effects Transfer 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */

    //>>label: Transfer Effect
    //>>group: Effects
    //>>description: Displays a transfer effect from one element to another.
    //>>docs: http://api.jqueryui.com/transfer-effect/
    //>>demos: http://jqueryui.com/effect/



    var effect;
    if ($.uiBackCompat !== false) {
        effect = $.effects.define("transfer", function (options, done) {
            $(this).transfer(options, done);
        });
    }
    var effectsEffectTransfer = effect;


    /*!
     * jQuery UI Focusable 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */

    //>>label: :focusable Selector
    //>>group: Core
    //>>description: Selects elements which can be focused.
    //>>docs: http://api.jqueryui.com/focusable-selector/



    // Selectors
    $.ui.focusable = function (element, hasTabindex) {
        var map, mapName, img, focusableIfVisible, fieldset,
            nodeName = element.nodeName.toLowerCase();

        if ("area" === nodeName) {
            map = element.parentNode;
            mapName = map.name;
            if (!element.href || !mapName || map.nodeName.toLowerCase() !== "map") {
                return false;
            }
            img = $("img[usemap='#" + mapName + "']");
            return img.length > 0 && img.is(":visible");
        }

        if (/^(input|select|textarea|button|object)$/.test(nodeName)) {
            focusableIfVisible = !element.disabled;

            if (focusableIfVisible) {

                // Form controls within a disabled fieldset are disabled.
                // However, controls within the fieldset's legend do not get disabled.
                // Since controls generally aren't placed inside legends, we skip
                // this portion of the check.
                fieldset = $(element).closest("fieldset")[0];
                if (fieldset) {
                    focusableIfVisible = !fieldset.disabled;
                }
            }
        } else if ("a" === nodeName) {
            focusableIfVisible = element.href || hasTabindex;
        } else {
            focusableIfVisible = hasTabindex;
        }

        return focusableIfVisible && $(element).is(":visible") && visible($(element));
    };

    // Support: IE 8 only
    // IE 8 doesn't resolve inherit to visible/hidden for computed values
    function visible(element) {
        var visibility = element.css("visibility");
        while (visibility === "inherit") {
            element = element.parent();
            visibility = element.css("visibility");
        }
        return visibility !== "hidden";
    }

    $.extend($.expr[":"], {
        focusable: function (element) {
            return $.ui.focusable(element, $.attr(element, "tabindex") != null);
        }
    });

    var focusable = $.ui.focusable;




    // Support: IE8 Only
    // IE8 does not support the form attribute and when it is supplied. It overwrites the form prop
    // with a string, so we need to find the proper form.
    var form = $.fn.form = function () {
        return typeof this[0].form === "string" ? this.closest("form") : $(this[0].form);
    };


    /*!
     * jQuery UI Form Reset Mixin 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */

    //>>label: Form Reset Mixin
    //>>group: Core
    //>>description: Refresh input widgets when their form is reset
    //>>docs: http://api.jqueryui.com/form-reset-mixin/



    var formResetMixin = $.ui.formResetMixin = {
        _formResetHandler: function () {
            var form = $(this);

            // Wait for the form reset to actually happen before refreshing
            setTimeout(function () {
                var instances = form.data("ui-form-reset-instances");
                $.each(instances, function () {
                    this.refresh();
                });
            });
        },

        _bindFormResetHandler: function () {
            this.form = this.element.form();
            if (!this.form.length) {
                return;
            }

            var instances = this.form.data("ui-form-reset-instances") || [];
            if (!instances.length) {

                // We don't use _on() here because we use a single event handler per form
                this.form.on("reset.ui-form-reset", this._formResetHandler);
            }
            instances.push(this);
            this.form.data("ui-form-reset-instances", instances);
        },

        _unbindFormResetHandler: function () {
            if (!this.form.length) {
                return;
            }

            var instances = this.form.data("ui-form-reset-instances");
            instances.splice($.inArray(this, instances), 1);
            if (instances.length) {
                this.form.data("ui-form-reset-instances", instances);
            } else {
                this.form
                    .removeData("ui-form-reset-instances")
                    .off("reset.ui-form-reset");
            }
        }
    };


    /*!
     * jQuery UI Support for jQuery core 1.7.x 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     */

    //>>label: jQuery 1.7 Support
    //>>group: Core
    //>>description: Support version 1.7.x of jQuery core



    // Support: jQuery 1.7 only
    // Not a great way to check versions, but since we only support 1.7+ and only
    // need to detect <1.8, this is a simple check that should suffice. Checking
    // for "1.7." would be a bit safer, but the version string is 1.7, not 1.7.0
    // and we'll never reach 1.70.0 (if we do, we certainly won't be supporting
    // 1.7 anymore). See #11197 for why we're not using feature detection.
    if ($.fn.jquery.substring(0, 3) === "1.7") {

        // Setters for .innerWidth(), .innerHeight(), .outerWidth(), .outerHeight()
        // Unlike jQuery Core 1.8+, these only support numeric values to set the
        // dimensions in pixels
        $.each(["Width", "Height"], function (i, name) {
            var side = name === "Width" ? ["Left", "Right"] : ["Top", "Bottom"],
                type = name.toLowerCase(),
                orig = {
                    innerWidth: $.fn.innerWidth,
                    innerHeight: $.fn.innerHeight,
                    outerWidth: $.fn.outerWidth,
                    outerHeight: $.fn.outerHeight
                };

            function reduce(elem, size, border, margin) {
                $.each(side, function () {
                    size -= parseFloat($.css(elem, "padding" + this)) || 0;
                    if (border) {
                        size -= parseFloat($.css(elem, "border" + this + "Width")) || 0;
                    }
                    if (margin) {
                        size -= parseFloat($.css(elem, "margin" + this)) || 0;
                    }
                });
                return size;
            }

            $.fn["inner" + name] = function (size) {
                if (size === undefined) {
                    return orig["inner" + name].call(this);
                }

                return this.each(function () {
                    $(this).css(type, reduce(this, size) + "px");
                });
            };

            $.fn["outer" + name] = function (size, margin) {
                if (typeof size !== "number") {
                    return orig["outer" + name].call(this, size);
                }

                return this.each(function () {
                    $(this).css(type, reduce(this, size, true, margin) + "px");
                });
            };
        });

        $.fn.addBack = function (selector) {
            return this.add(selector == null ?
                this.prevObject : this.prevObject.filter(selector)
            );
        };
    }

    ;
    /*!
     * jQuery UI Keycode 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */

    //>>label: Keycode
    //>>group: Core
    //>>description: Provide keycodes as keynames
    //>>docs: http://api.jqueryui.com/jQuery.ui.keyCode/


    var keycode = $.ui.keyCode = {
        BACKSPACE: 8,
        COMMA: 188,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        LEFT: 37,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SPACE: 32,
        TAB: 9,
        UP: 38
    };




    // Internal use only
    var escapeSelector = $.ui.escapeSelector = (function () {
        var selectorEscape = /([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g;
        return function (selector) {
            return selector.replace(selectorEscape, "\\$1");
        };
    })();


    /*!
     * jQuery UI Labels 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */

    //>>label: labels
    //>>group: Core
    //>>description: Find all the labels associated with a given input
    //>>docs: http://api.jqueryui.com/labels/



    var labels = $.fn.labels = function () {
        var ancestor, selector, id, labels, ancestors;

        // Check control.labels first
        if (this[0].labels && this[0].labels.length) {
            return this.pushStack(this[0].labels);
        }

        // Support: IE <= 11, FF <= 37, Android <= 2.3 only
        // Above browsers do not support control.labels. Everything below is to support them
        // as well as document fragments. control.labels does not work on document fragments
        labels = this.eq(0).parents("label");

        // Look for the label based on the id
        id = this.attr("id");
        if (id) {

            // We don't search against the document in case the element
            // is disconnected from the DOM
            ancestor = this.eq(0).parents().last();

            // Get a full set of top level ancestors
            ancestors = ancestor.add(ancestor.length ? ancestor.siblings() : this.siblings());

            // Create a selector for the label based on the id
            selector = "label[for='" + $.ui.escapeSelector(id) + "']";

            labels = labels.add(ancestors.find(selector).addBack(selector));

        }

        // Return whatever we have found for labels
        return this.pushStack(labels);
    };


    /*!
     * jQuery UI Scroll Parent 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */

    //>>label: scrollParent
    //>>group: Core
    //>>description: Get the closest ancestor element that is scrollable.
    //>>docs: http://api.jqueryui.com/scrollParent/



    var scrollParent = $.fn.scrollParent = function (includeHidden) {
        var position = this.css("position"),
            excludeStaticParent = position === "absolute",
            overflowRegex = includeHidden ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
            scrollParent = this.parents().filter(function () {
                var parent = $(this);
                if (excludeStaticParent && parent.css("position") === "static") {
                    return false;
                }
                return overflowRegex.test(parent.css("overflow") + parent.css("overflow-y") +
                    parent.css("overflow-x"));
            }).eq(0);

        return position === "fixed" || !scrollParent.length ?
            $(this[0].ownerDocument || document) :
            scrollParent;
    };


    /*!
     * jQuery UI Tabbable 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */

    //>>label: :tabbable Selector
    //>>group: Core
    //>>description: Selects elements which can be tabbed to.
    //>>docs: http://api.jqueryui.com/tabbable-selector/



    var tabbable = $.extend($.expr[":"], {
        tabbable: function (element) {
            var tabIndex = $.attr(element, "tabindex"),
                hasTabindex = tabIndex != null;
            return (!hasTabindex || tabIndex >= 0) && $.ui.focusable(element, hasTabindex);
        }
    });


    /*!
     * jQuery UI Unique ID 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */

    //>>label: uniqueId
    //>>group: Core
    //>>description: Functions to generate and remove uniqueId's
    //>>docs: http://api.jqueryui.com/uniqueId/



    var uniqueId = $.fn.extend({
        uniqueId: (function () {
            var uuid = 0;

            return function () {
                return this.each(function () {
                    if (!this.id) {
                        this.id = "ui-id-" + (++uuid);
                    }
                });
            };
        })(),

        removeUniqueId: function () {
            return this.each(function () {
                if (/^ui-id-\d+$/.test(this.id)) {
                    $(this).removeAttr("id");
                }
            });
        }
    });


    /*!
     * jQuery UI Accordion 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */

    //>>label: Accordion
    //>>group: Widgets
    // jscs:disable maximumLineLength
    //>>description: Displays collapsible content panels for presenting information in a limited amount of space.
    // jscs:enable maximumLineLength
    //>>docs: http://api.jqueryui.com/accordion/
    //>>demos: http://jqueryui.com/accordion/
    //>>css.structure: ../../themes/base/core.css
    //>>css.structure: ../../themes/base/accordion.css
    //>>css.theme: ../../themes/base/theme.css



    var widgetsAccordion = $.widget("ui.accordion", {
        version: "1.12.1",
        options: {
            active: 0,
            animate: {},
            classes: {
                "ui-accordion-header": "ui-corner-top",
                "ui-accordion-header-collapsed": "ui-corner-all",
                "ui-accordion-content": "ui-corner-bottom"
            },
            collapsible: false,
            event: "click",
            header: "> li > :first-child, > :not(li):even",
            heightStyle: "auto",
            icons: {
                activeHeader: "ui-icon-triangle-1-s",
                header: "ui-icon-triangle-1-e"
            },

            // Callbacks
            activate: null,
            beforeActivate: null
        },

        hideProps: {
            borderTopWidth: "hide",
            borderBottomWidth: "hide",
            paddingTop: "hide",
            paddingBottom: "hide",
            height: "hide"
        },

        showProps: {
            borderTopWidth: "show",
            borderBottomWidth: "show",
            paddingTop: "show",
            paddingBottom: "show",
            height: "show"
        },

        _create: function () {
            var options = this.options;

            this.prevShow = this.prevHide = $();
            this._addClass("ui-accordion", "ui-widget ui-helper-reset");
            this.element.attr("role", "tablist");

            // Don't allow collapsible: false and active: false / null
            if (!options.collapsible && (options.active === false || options.active == null)) {
                options.active = 0;
            }

            this._processPanels();

            // handle negative values
            if (options.active < 0) {
                options.active += this.headers.length;
            }
            this._refresh();
        },

        _getCreateEventData: function () {
            return {
                header: this.active,
                panel: !this.active.length ? $() : this.active.next()
            };
        },

        _createIcons: function () {
            var icon, children,
                icons = this.options.icons;

            if (icons) {
                icon = $("<span>");
                this._addClass(icon, "ui-accordion-header-icon", "ui-icon " + icons.header);
                icon.prependTo(this.headers);
                children = this.active.children(".ui-accordion-header-icon");
                this._removeClass(children, icons.header)
                    ._addClass(children, null, icons.activeHeader)
                    ._addClass(this.headers, "ui-accordion-icons");
            }
        },

        _destroyIcons: function () {
            this._removeClass(this.headers, "ui-accordion-icons");
            this.headers.children(".ui-accordion-header-icon").remove();
        },

        _destroy: function () {
            var contents;

            // Clean up main element
            this.element.removeAttr("role");

            // Clean up headers
            this.headers
                .removeAttr("role aria-expanded aria-selected aria-controls tabIndex")
                .removeUniqueId();

            this._destroyIcons();

            // Clean up content panels
            contents = this.headers.next()
                .css("display", "")
                .removeAttr("role aria-hidden aria-labelledby")
                .removeUniqueId();

            if (this.options.heightStyle !== "content") {
                contents.css("height", "");
            }
        },

        _setOption: function (key, value) {
            if (key === "active") {

                // _activate() will handle invalid values and update this.options
                this._activate(value);
                return;
            }

            if (key === "event") {
                if (this.options.event) {
                    this._off(this.headers, this.options.event);
                }
                this._setupEvents(value);
            }

            this._super(key, value);

            // Setting collapsible: false while collapsed; open first panel
            if (key === "collapsible" && !value && this.options.active === false) {
                this._activate(0);
            }

            if (key === "icons") {
                this._destroyIcons();
                if (value) {
                    this._createIcons();
                }
            }
        },

        _setOptionDisabled: function (value) {
            this._super(value);

            this.element.attr("aria-disabled", value);

            // Support: IE8 Only
            // #5332 / #6059 - opacity doesn't cascade to positioned elements in IE
            // so we need to add the disabled class to the headers and panels
            this._toggleClass(null, "ui-state-disabled", !!value);
            this._toggleClass(this.headers.add(this.headers.next()), null, "ui-state-disabled",
                !!value);
        },

        _keydown: function (event) {
            if (event.altKey || event.ctrlKey) {
                return;
            }

            var keyCode = $.ui.keyCode,
                length = this.headers.length,
                currentIndex = this.headers.index(event.target),
                toFocus = false;

            switch (event.keyCode) {
                case keyCode.RIGHT:
                case keyCode.DOWN:
                    toFocus = this.headers[(currentIndex + 1) % length];
                    break;
                case keyCode.LEFT:
                case keyCode.UP:
                    toFocus = this.headers[(currentIndex - 1 + length) % length];
                    break;
                case keyCode.SPACE:
                case keyCode.ENTER:
                    this._eventHandler(event);
                    break;
                case keyCode.HOME:
                    toFocus = this.headers[0];
                    break;
                case keyCode.END:
                    toFocus = this.headers[length - 1];
                    break;
            }

            if (toFocus) {
                $(event.target).attr("tabIndex", -1);
                $(toFocus).attr("tabIndex", 0);
                $(toFocus).trigger("focus");
                event.preventDefault();
            }
        },

        _panelKeyDown: function (event) {
            if (event.keyCode === $.ui.keyCode.UP && event.ctrlKey) {
                $(event.currentTarget).prev().trigger("focus");
            }
        },

        refresh: function () {
            var options = this.options;
            this._processPanels();

            // Was collapsed or no panel
            if ((options.active === false && options.collapsible === true) ||
                !this.headers.length) {
                options.active = false;
                this.active = $();

                // active false only when collapsible is true
            } else if (options.active === false) {
                this._activate(0);

                // was active, but active panel is gone
            } else if (this.active.length && !$.contains(this.element[0], this.active[0])) {

                // all remaining panel are disabled
                if (this.headers.length === this.headers.find(".ui-state-disabled").length) {
                    options.active = false;
                    this.active = $();

                    // activate previous panel
                } else {
                    this._activate(Math.max(0, options.active - 1));
                }

                // was active, active panel still exists
            } else {

                // make sure active index is correct
                options.active = this.headers.index(this.active);
            }

            this._destroyIcons();

            this._refresh();
        },

        _processPanels: function () {
            var prevHeaders = this.headers,
                prevPanels = this.panels;

            this.headers = this.element.find(this.options.header);
            this._addClass(this.headers, "ui-accordion-header ui-accordion-header-collapsed",
                "ui-state-default");

            this.panels = this.headers.next().filter(":not(.ui-accordion-content-active)").hide();
            this._addClass(this.panels, "ui-accordion-content", "ui-helper-reset ui-widget-content");

            // Avoid memory leaks (#10056)
            if (prevPanels) {
                this._off(prevHeaders.not(this.headers));
                this._off(prevPanels.not(this.panels));
            }
        },

        _refresh: function () {
            var maxHeight,
                options = this.options,
                heightStyle = options.heightStyle,
                parent = this.element.parent();

            this.active = this._findActive(options.active);
            this._addClass(this.active, "ui-accordion-header-active", "ui-state-active")
                ._removeClass(this.active, "ui-accordion-header-collapsed");
            this._addClass(this.active.next(), "ui-accordion-content-active");
            this.active.next().show();

            this.headers
                .attr("role", "tab")
                .each(function () {
                    var header = $(this),
                        headerId = header.uniqueId().attr("id"),
                        panel = header.next(),
                        panelId = panel.uniqueId().attr("id");
                    header.attr("aria-controls", panelId);
                    panel.attr("aria-labelledby", headerId);
                })
                .next()
                .attr("role", "tabpanel");

            this.headers
                .not(this.active)
                .attr({
                    "aria-selected": "false",
                    "aria-expanded": "false",
                    tabIndex: -1
                })
                .next()
                .attr({
                    "aria-hidden": "true"
                })
                .hide();

            // Make sure at least one header is in the tab order
            if (!this.active.length) {
                this.headers.eq(0).attr("tabIndex", 0);
            } else {
                this.active.attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0
                })
                    .next()
                    .attr({
                        "aria-hidden": "false"
                    });
            }

            this._createIcons();

            this._setupEvents(options.event);

            if (heightStyle === "fill") {
                maxHeight = parent.height();
                this.element.siblings(":visible").each(function () {
                    var elem = $(this),
                        position = elem.css("position");

                    if (position === "absolute" || position === "fixed") {
                        return;
                    }
                    maxHeight -= elem.outerHeight(true);
                });

                this.headers.each(function () {
                    maxHeight -= $(this).outerHeight(true);
                });

                this.headers.next()
                    .each(function () {
                        $(this).height(Math.max(0, maxHeight -
                            $(this).innerHeight() + $(this).height()));
                    })
                    .css("overflow", "auto");
            } else if (heightStyle === "auto") {
                maxHeight = 0;
                this.headers.next()
                    .each(function () {
                        var isVisible = $(this).is(":visible");
                        if (!isVisible) {
                            $(this).show();
                        }
                        maxHeight = Math.max(maxHeight, $(this).css("height", "").height());
                        if (!isVisible) {
                            $(this).hide();
                        }
                    })
                    .height(maxHeight);
            }
        },

        _activate: function (index) {
            var active = this._findActive(index)[0];

            // Trying to activate the already active panel
            if (active === this.active[0]) {
                return;
            }

            // Trying to collapse, simulate a click on the currently active header
            active = active || this.active[0];

            this._eventHandler({
                target: active,
                currentTarget: active,
                preventDefault: $.noop
            });
        },

        _findActive: function (selector) {
            return typeof selector === "number" ? this.headers.eq(selector) : $();
        },

        _setupEvents: function (event) {
            var events = {
                keydown: "_keydown"
            };
            if (event) {
                $.each(event.split(" "), function (index, eventName) {
                    events[eventName] = "_eventHandler";
                });
            }

            this._off(this.headers.add(this.headers.next()));
            this._on(this.headers, events);
            this._on(this.headers.next(), { keydown: "_panelKeyDown" });
            this._hoverable(this.headers);
            this._focusable(this.headers);
        },

        _eventHandler: function (event) {
            var activeChildren, clickedChildren,
                options = this.options,
                active = this.active,
                clicked = $(event.currentTarget),
                clickedIsActive = clicked[0] === active[0],
                collapsing = clickedIsActive && options.collapsible,
                toShow = collapsing ? $() : clicked.next(),
                toHide = active.next(),
                eventData = {
                    oldHeader: active,
                    oldPanel: toHide,
                    newHeader: collapsing ? $() : clicked,
                    newPanel: toShow
                };

            event.preventDefault();

            if (

                // click on active header, but not collapsible
                (clickedIsActive && !options.collapsible) ||

                // allow canceling activation
                (this._trigger("beforeActivate", event, eventData) === false)) {
                return;
            }

            options.active = collapsing ? false : this.headers.index(clicked);

            // When the call to ._toggle() comes after the class changes
            // it causes a very odd bug in IE 8 (see #6720)
            this.active = clickedIsActive ? $() : clicked;
            this._toggle(eventData);

            // Switch classes
            // corner classes on the previously active header stay after the animation
            this._removeClass(active, "ui-accordion-header-active", "ui-state-active");
            if (options.icons) {
                activeChildren = active.children(".ui-accordion-header-icon");
                this._removeClass(activeChildren, null, options.icons.activeHeader)
                    ._addClass(activeChildren, null, options.icons.header);
            }

            if (!clickedIsActive) {
                this._removeClass(clicked, "ui-accordion-header-collapsed")
                    ._addClass(clicked, "ui-accordion-header-active", "ui-state-active");
                if (options.icons) {
                    clickedChildren = clicked.children(".ui-accordion-header-icon");
                    this._removeClass(clickedChildren, null, options.icons.header)
                        ._addClass(clickedChildren, null, options.icons.activeHeader);
                }

                this._addClass(clicked.next(), "ui-accordion-content-active");
            }
        },

        _toggle: function (data) {
            var toShow = data.newPanel,
                toHide = this.prevShow.length ? this.prevShow : data.oldPanel;

            // Handle activating a panel during the animation for another activation
            this.prevShow.add(this.prevHide).stop(true, true);
            this.prevShow = toShow;
            this.prevHide = toHide;

            if (this.options.animate) {
                this._animate(toShow, toHide, data);
            } else {
                toHide.hide();
                toShow.show();
                this._toggleComplete(data);
            }

            toHide.attr({
                "aria-hidden": "true"
            });
            toHide.prev().attr({
                "aria-selected": "false",
                "aria-expanded": "false"
            });

            // if we're switching panels, remove the old header from the tab order
            // if we're opening from collapsed state, remove the previous header from the tab order
            // if we're collapsing, then keep the collapsing header in the tab order
            if (toShow.length && toHide.length) {
                toHide.prev().attr({
                    "tabIndex": -1,
                    "aria-expanded": "false"
                });
            } else if (toShow.length) {
                this.headers.filter(function () {
                    return parseInt($(this).attr("tabIndex"), 10) === 0;
                })
                    .attr("tabIndex", -1);
            }

            toShow
                .attr("aria-hidden", "false")
                .prev()
                .attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0
                });
        },

        _animate: function (toShow, toHide, data) {
            var total, easing, duration,
                that = this,
                adjust = 0,
                boxSizing = toShow.css("box-sizing"),
                down = toShow.length &&
                    (!toHide.length || (toShow.index() < toHide.index())),
                animate = this.options.animate || {},
                options = down && animate.down || animate,
                complete = function () {
                    that._toggleComplete(data);
                };

            if (typeof options === "number") {
                duration = options;
            }
            if (typeof options === "string") {
                easing = options;
            }

            // fall back from options to animation in case of partial down settings
            easing = easing || options.easing || animate.easing;
            duration = duration || options.duration || animate.duration;

            if (!toHide.length) {
                return toShow.animate(this.showProps, duration, easing, complete);
            }
            if (!toShow.length) {
                return toHide.animate(this.hideProps, duration, easing, complete);
            }

            total = toShow.show().outerHeight();
            toHide.animate(this.hideProps, {
                duration: duration,
                easing: easing,
                step: function (now, fx) {
                    fx.now = Math.round(now);
                }
            });
            toShow
                .hide()
                .animate(this.showProps, {
                    duration: duration,
                    easing: easing,
                    complete: complete,
                    step: function (now, fx) {
                        fx.now = Math.round(now);
                        if (fx.prop !== "height") {
                            if (boxSizing === "content-box") {
                                adjust += fx.now;
                            }
                        } else if (that.options.heightStyle !== "content") {
                            fx.now = Math.round(total - toHide.outerHeight() - adjust);
                            adjust = 0;
                        }
                    }
                });
        },

        _toggleComplete: function (data) {
            var toHide = data.oldPanel,
                prev = toHide.prev();

            this._removeClass(toHide, "ui-accordion-content-active");
            this._removeClass(prev, "ui-accordion-header-active")
                ._addClass(prev, "ui-accordion-header-collapsed");

            // Work around for rendering bug in IE (#5421)
            if (toHide.length) {
                toHide.parent()[0].className = toHide.parent()[0].className;
            }
            this._trigger("activate", null, data);
        }
    });



    var safeActiveElement = $.ui.safeActiveElement = function (document) {
        var activeElement;

        // Support: IE 9 only
        // IE9 throws an "Unspecified error" accessing document.activeElement from an <iframe>
        try {
            activeElement = document.activeElement;
        } catch (error) {
            activeElement = document.body;
        }

        // Support: IE 9 - 11 only
        // IE may return null instead of an element
        // Interestingly, this only seems to occur when NOT in an iframe
        if (!activeElement) {
            activeElement = document.body;
        }

        // Support: IE 11 only
        // IE11 returns a seemingly empty object in some cases when accessing
        // document.activeElement from an <iframe>
        if (!activeElement.nodeName) {
            activeElement = document.body;
        }

        return activeElement;
    };


    /*!
     * jQuery UI Menu 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */

    //>>label: Menu
    //>>group: Widgets
    //>>description: Creates nestable menus.
    //>>docs: http://api.jqueryui.com/menu/
    //>>demos: http://jqueryui.com/menu/
    //>>css.structure: ../../themes/base/core.css
    //>>css.structure: ../../themes/base/menu.css
    //>>css.theme: ../../themes/base/theme.css



    var widgetsMenu = $.widget("ui.menu", {
        version: "1.12.1",
        defaultElement: "<ul>",
        delay: 300,
        options: {
            icons: {
                submenu: "ui-icon-caret-1-e"
            },
            items: "> *",
            menus: "ul",
            position: {
                my: "left top",
                at: "right top"
            },
            role: "menu",

            // Callbacks
            blur: null,
            focus: null,
            select: null
        },

        _create: function () {
            this.activeMenu = this.element;

            // Flag used to prevent firing of the click handler
            // as the event bubbles up through nested menus
            this.mouseHandled = false;
            this.element
                .uniqueId()
                .attr({
                    role: this.options.role,
                    tabIndex: 0
                });

            this._addClass("ui-menu", "ui-widget ui-widget-content");
            this._on({

                // Prevent focus from sticking to links inside menu after clicking
                // them (focus should always stay on UL during navigation).
                "mousedown .ui-menu-item": function (event) {
                    event.preventDefault();
                },
                "click .ui-menu-item": function (event) {
                    var target = $(event.target);
                    var active = $($.ui.safeActiveElement(this.document[0]));
                    if (!this.mouseHandled && target.not(".ui-state-disabled").length) {
                        this.select(event);

                        // Only set the mouseHandled flag if the event will bubble, see #9469.
                        if (!event.isPropagationStopped()) {
                            this.mouseHandled = true;
                        }

                        // Open submenu on click
                        if (target.has(".ui-menu").length) {
                            this.expand(event);
                        } else if (!this.element.is(":focus") &&
                            active.closest(".ui-menu").length) {

                            // Redirect focus to the menu
                            this.element.trigger("focus", [true]);

                            // If the active item is on the top level, let it stay active.
                            // Otherwise, blur the active item since it is no longer visible.
                            if (this.active && this.active.parents(".ui-menu").length === 1) {
                                clearTimeout(this.timer);
                            }
                        }
                    }
                },
                "mouseenter .ui-menu-item": function (event) {

                    // Ignore mouse events while typeahead is active, see #10458.
                    // Prevents focusing the wrong item when typeahead causes a scroll while the mouse
                    // is over an item in the menu
                    if (this.previousFilter) {
                        return;
                    }

                    var actualTarget = $(event.target).closest(".ui-menu-item"),
                        target = $(event.currentTarget);

                    // Ignore bubbled events on parent items, see #11641
                    if (actualTarget[0] !== target[0]) {
                        return;
                    }

                    // Remove ui-state-active class from siblings of the newly focused menu item
                    // to avoid a jump caused by adjacent elements both having a class with a border
                    this._removeClass(target.siblings().children(".ui-state-active"),
                        null, "ui-state-active");
                    this.focus(event, target);
                },
                mouseleave: "collapseAll",
                "mouseleave .ui-menu": "collapseAll",
                focus: function (event, keepActiveItem) {

                    // If there's already an active item, keep it active
                    // If not, activate the first item
                    var item = this.active || this.element.find(this.options.items).eq(0);

                    if (!keepActiveItem) {
                        this.focus(event, item);
                    }
                },
                blur: function (event) {
                    this._delay(function () {
                        var notContained = !$.contains(
                            this.element[0],
                            $.ui.safeActiveElement(this.document[0])
                        );
                        if (notContained) {
                            this.collapseAll(event);
                        }
                    });
                },
                keydown: "_keydown"
            });

            this.refresh();

            // Clicks outside of a menu collapse any open menus
            this._on(this.document, {
                click: function (event) {
                    if (this._closeOnDocumentClick(event)) {
                        this.collapseAll(event);
                    }

                    // Reset the mouseHandled flag
                    this.mouseHandled = false;
                }
            });
        },

        _destroy: function () {
            var items = this.element.find(".ui-menu-item")
                .removeAttr("role aria-disabled"),
                submenus = items.children(".ui-menu-item-wrapper")
                    .removeUniqueId()
                    .removeAttr("tabIndex role aria-haspopup");

            // Destroy (sub)menus
            this.element
                .removeAttr("aria-activedescendant")
                .find(".ui-menu").addBack()
                .removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled " +
                    "tabIndex")
                .removeUniqueId()
                .show();

            submenus.children().each(function () {
                var elem = $(this);
                if (elem.data("ui-menu-submenu-caret")) {
                    elem.remove();
                }
            });
        },

        _keydown: function (event) {
            var match, prev, character, skip,
                preventDefault = true;

            switch (event.keyCode) {
                case $.ui.keyCode.PAGE_UP:
                    this.previousPage(event);
                    break;
                case $.ui.keyCode.PAGE_DOWN:
                    this.nextPage(event);
                    break;
                case $.ui.keyCode.HOME:
                    this._move("first", "first", event);
                    break;
                case $.ui.keyCode.END:
                    this._move("last", "last", event);
                    break;
                case $.ui.keyCode.UP:
                    this.previous(event);
                    break;
                case $.ui.keyCode.DOWN:
                    this.next(event);
                    break;
                case $.ui.keyCode.LEFT:
                    this.collapse(event);
                    break;
                case $.ui.keyCode.RIGHT:
                    if (this.active && !this.active.is(".ui-state-disabled")) {
                        this.expand(event);
                    }
                    break;
                case $.ui.keyCode.ENTER:
                case $.ui.keyCode.SPACE:
                    this._activate(event);
                    break;
                case $.ui.keyCode.ESCAPE:
                    this.collapse(event);
                    break;
                default:
                    preventDefault = false;
                    prev = this.previousFilter || "";
                    skip = false;

                    // Support number pad values
                    character = event.keyCode >= 96 && event.keyCode <= 105 ?
                        (event.keyCode - 96).toString() : String.fromCharCode(event.keyCode);

                    clearTimeout(this.filterTimer);

                    if (character === prev) {
                        skip = true;
                    } else {
                        character = prev + character;
                    }

                    match = this._filterMenuItems(character);
                    match = skip && match.index(this.active.next()) !== -1 ?
                        this.active.nextAll(".ui-menu-item") :
                        match;

                    // If no matches on the current filter, reset to the last character pressed
                    // to move down the menu to the first item that starts with that character
                    if (!match.length) {
                        character = String.fromCharCode(event.keyCode);
                        match = this._filterMenuItems(character);
                    }

                    if (match.length) {
                        this.focus(event, match);
                        this.previousFilter = character;
                        this.filterTimer = this._delay(function () {
                            delete this.previousFilter;
                        }, 1000);
                    } else {
                        delete this.previousFilter;
                    }
            }

            if (preventDefault) {
                event.preventDefault();
            }
        },

        _activate: function (event) {
            if (this.active && !this.active.is(".ui-state-disabled")) {
                if (this.active.children("[aria-haspopup='true']").length) {
                    this.expand(event);
                } else {
                    this.select(event);
                }
            }
        },

        refresh: function () {
            var menus, items, newSubmenus, newItems, newWrappers,
                that = this,
                icon = this.options.icons.submenu,
                submenus = this.element.find(this.options.menus);

            this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length);

            // Initialize nested menus
            newSubmenus = submenus.filter(":not(.ui-menu)")
                .hide()
                .attr({
                    role: this.options.role,
                    "aria-hidden": "true",
                    "aria-expanded": "false"
                })
                .each(function () {
                    var menu = $(this),
                        item = menu.prev(),
                        submenuCaret = $("<span>").data("ui-menu-submenu-caret", true);

                    that._addClass(submenuCaret, "ui-menu-icon", "ui-icon " + icon);
                    item
                        .attr("aria-haspopup", "true")
                        .prepend(submenuCaret);
                    menu.attr("aria-labelledby", item.attr("id"));
                });

            this._addClass(newSubmenus, "ui-menu", "ui-widget ui-widget-content ui-front");

            menus = submenus.add(this.element);
            items = menus.find(this.options.items);

            // Initialize menu-items containing spaces and/or dashes only as dividers
            items.not(".ui-menu-item").each(function () {
                var item = $(this);
                if (that._isDivider(item)) {
                    that._addClass(item, "ui-menu-divider", "ui-widget-content");
                }
            });

            // Don't refresh list items that are already adapted
            newItems = items.not(".ui-menu-item, .ui-menu-divider");
            newWrappers = newItems.children()
                .not(".ui-menu")
                .uniqueId()
                .attr({
                    tabIndex: -1,
                    role: this._itemRole()
                });
            this._addClass(newItems, "ui-menu-item")
                ._addClass(newWrappers, "ui-menu-item-wrapper");

            // Add aria-disabled attribute to any disabled menu item
            items.filter(".ui-state-disabled").attr("aria-disabled", "true");

            // If the active item has been removed, blur the menu
            if (this.active && !$.contains(this.element[0], this.active[0])) {
                this.blur();
            }
        },

        _itemRole: function () {
            return {
                menu: "menuitem",
                listbox: "option"
            }[this.options.role];
        },

        _setOption: function (key, value) {
            if (key === "icons") {
                var icons = this.element.find(".ui-menu-icon");
                this._removeClass(icons, null, this.options.icons.submenu)
                    ._addClass(icons, null, value.submenu);
            }
            this._super(key, value);
        },

        _setOptionDisabled: function (value) {
            this._super(value);

            this.element.attr("aria-disabled", String(value));
            this._toggleClass(null, "ui-state-disabled", !!value);
        },

        focus: function (event, item) {
            var nested, focused, activeParent;
            this.blur(event, event && event.type === "focus");

            this._scrollIntoView(item);

            this.active = item.first();

            focused = this.active.children(".ui-menu-item-wrapper");
            this._addClass(focused, null, "ui-state-active");

            // Only update aria-activedescendant if there's a role
            // otherwise we assume focus is managed elsewhere
            if (this.options.role) {
                this.element.attr("aria-activedescendant", focused.attr("id"));
            }

            // Highlight active parent menu item, if any
            activeParent = this.active
                .parent()
                .closest(".ui-menu-item")
                .children(".ui-menu-item-wrapper");
            this._addClass(activeParent, null, "ui-state-active");

            if (event && event.type === "keydown") {
                this._close();
            } else {
                this.timer = this._delay(function () {
                    this._close();
                }, this.delay);
            }

            nested = item.children(".ui-menu");
            if (nested.length && event && (/^mouse/.test(event.type))) {
                this._startOpening(nested);
            }
            this.activeMenu = item.parent();

            this._trigger("focus", event, { item: item });
        },

        _scrollIntoView: function (item) {
            var borderTop, paddingTop, offset, scroll, elementHeight, itemHeight;
            if (this._hasScroll()) {
                borderTop = parseFloat($.css(this.activeMenu[0], "borderTopWidth")) || 0;
                paddingTop = parseFloat($.css(this.activeMenu[0], "paddingTop")) || 0;
                offset = item.offset().top - this.activeMenu.offset().top - borderTop - paddingTop;
                scroll = this.activeMenu.scrollTop();
                elementHeight = this.activeMenu.height();
                itemHeight = item.outerHeight();

                if (offset < 0) {
                    this.activeMenu.scrollTop(scroll + offset);
                } else if (offset + itemHeight > elementHeight) {
                    this.activeMenu.scrollTop(scroll + offset - elementHeight + itemHeight);
                }
            }
        },

        blur: function (event, fromFocus) {
            if (!fromFocus) {
                clearTimeout(this.timer);
            }

            if (!this.active) {
                return;
            }

            this._removeClass(this.active.children(".ui-menu-item-wrapper"),
                null, "ui-state-active");

            this._trigger("blur", event, { item: this.active });
            this.active = null;
        },

        _startOpening: function (submenu) {
            clearTimeout(this.timer);

            // Don't open if already open fixes a Firefox bug that caused a .5 pixel
            // shift in the submenu position when mousing over the caret icon
            if (submenu.attr("aria-hidden") !== "true") {
                return;
            }

            this.timer = this._delay(function () {
                this._close();
                this._open(submenu);
            }, this.delay);
        },

        _open: function (submenu) {
            var position = $.extend({
                of: this.active
            }, this.options.position);

            clearTimeout(this.timer);
            this.element.find(".ui-menu").not(submenu.parents(".ui-menu"))
                .hide()
                .attr("aria-hidden", "true");

            submenu
                .show()
                .removeAttr("aria-hidden")
                .attr("aria-expanded", "true")
                .position(position);
        },

        collapseAll: function (event, all) {
            clearTimeout(this.timer);
            this.timer = this._delay(function () {

                // If we were passed an event, look for the submenu that contains the event
                var currentMenu = all ? this.element :
                    $(event && event.target).closest(this.element.find(".ui-menu"));

                // If we found no valid submenu ancestor, use the main menu to close all
                // sub menus anyway
                if (!currentMenu.length) {
                    currentMenu = this.element;
                }

                this._close(currentMenu);

                this.blur(event);

                // Work around active item staying active after menu is blurred
                this._removeClass(currentMenu.find(".ui-state-active"), null, "ui-state-active");

                this.activeMenu = currentMenu;
            }, this.delay);
        },

        // With no arguments, closes the currently active menu - if nothing is active
        // it closes all menus.  If passed an argument, it will search for menus BELOW
        _close: function (startMenu) {
            if (!startMenu) {
                startMenu = this.active ? this.active.parent() : this.element;
            }

            startMenu.find(".ui-menu")
                .hide()
                .attr("aria-hidden", "true")
                .attr("aria-expanded", "false");
        },

        _closeOnDocumentClick: function (event) {
            return !$(event.target).closest(".ui-menu").length;
        },

        _isDivider: function (item) {

            // Match hyphen, em dash, en dash
            return !/[^\-\u2014\u2013\s]/.test(item.text());
        },

        collapse: function (event) {
            var newItem = this.active &&
                this.active.parent().closest(".ui-menu-item", this.element);
            if (newItem && newItem.length) {
                this._close();
                this.focus(event, newItem);
            }
        },

        expand: function (event) {
            var newItem = this.active &&
                this.active
                    .children(".ui-menu ")
                    .find(this.options.items)
                    .first();

            if (newItem && newItem.length) {
                this._open(newItem.parent());

                // Delay so Firefox will not hide activedescendant change in expanding submenu from AT
                this._delay(function () {
                    this.focus(event, newItem);
                });
            }
        },

        next: function (event) {
            this._move("next", "first", event);
        },

        previous: function (event) {
            this._move("prev", "last", event);
        },

        isFirstItem: function () {
            return this.active && !this.active.prevAll(".ui-menu-item").length;
        },

        isLastItem: function () {
            return this.active && !this.active.nextAll(".ui-menu-item").length;
        },

        _move: function (direction, filter, event) {
            var next;
            if (this.active) {
                if (direction === "first" || direction === "last") {
                    next = this.active
                    [direction === "first" ? "prevAll" : "nextAll"](".ui-menu-item")
                        .eq(-1);
                } else {
                    next = this.active
                    [direction + "All"](".ui-menu-item")
                        .eq(0);
                }
            }
            if (!next || !next.length || !this.active) {
                next = this.activeMenu.find(this.options.items)[filter]();
            }

            this.focus(event, next);
        },

        nextPage: function (event) {
            var item, base, height;

            if (!this.active) {
                this.next(event);
                return;
            }
            if (this.isLastItem()) {
                return;
            }
            if (this._hasScroll()) {
                base = this.active.offset().top;
                height = this.element.height();
                this.active.nextAll(".ui-menu-item").each(function () {
                    item = $(this);
                    return item.offset().top - base - height < 0;
                });

                this.focus(event, item);
            } else {
                this.focus(event, this.activeMenu.find(this.options.items)
                [!this.active ? "first" : "last"]());
            }
        },

        previousPage: function (event) {
            var item, base, height;
            if (!this.active) {
                this.next(event);
                return;
            }
            if (this.isFirstItem()) {
                return;
            }
            if (this._hasScroll()) {
                base = this.active.offset().top;
                height = this.element.height();
                this.active.prevAll(".ui-menu-item").each(function () {
                    item = $(this);
                    return item.offset().top - base + height > 0;
                });

                this.focus(event, item);
            } else {
                this.focus(event, this.activeMenu.find(this.options.items).first());
            }
        },

        _hasScroll: function () {
            return this.element.outerHeight() < this.element.prop("scrollHeight");
        },

        select: function (event) {

            // TODO: It should never be possible to not have an active item at this
            // point, but the tests don't trigger mouseenter before click.
            this.active = this.active || $(event.target).closest(".ui-menu-item");
            var ui = { item: this.active };
            if (!this.active.has(".ui-menu").length) {
                this.collapseAll(event, true);
            }
            this._trigger("select", event, ui);
        },

        _filterMenuItems: function (character) {
            var escapedCharacter = character.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
                regex = new RegExp("^" + escapedCharacter, "i");

            return this.activeMenu
                .find(this.options.items)

                // Only match on items, not dividers or other content (#10571)
                .filter(".ui-menu-item")
                .filter(function () {
                    return regex.test(
                        $.trim($(this).children(".ui-menu-item-wrapper").text()));
                });
        }
    });


    /*!
     * jQuery UI Autocomplete 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */

    //>>label: Autocomplete
    //>>group: Widgets
    //>>description: Lists suggested words as the user is typing.
    //>>docs: http://api.jqueryui.com/autocomplete/
    //>>demos: http://jqueryui.com/autocomplete/
    //>>css.structure: ../../themes/base/core.css
    //>>css.structure: ../../themes/base/autocomplete.css
    //>>css.theme: ../../themes/base/theme.css



    $.widget("ui.autocomplete", {
        version: "1.12.1",
        defaultElement: "<input>",
        options: {
            appendTo: null,
            autoFocus: false,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null,

            // Callbacks
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },

        requestIndex: 0,
        pending: 0,

        _create: function () {

            // Some browsers only repeat keydown events, not keypress events,
            // so we use the suppressKeyPress flag to determine if we've already
            // handled the keydown event. #7269
            // Unfortunately the code for & in keypress is the same as the up arrow,
            // so we use the suppressKeyPressRepeat flag to avoid handling keypress
            // events when we know the keydown event was used to modify the
            // search term. #7799
            var suppressKeyPress, suppressKeyPressRepeat, suppressInput,
                nodeName = this.element[0].nodeName.toLowerCase(),
                isTextarea = nodeName === "textarea",
                isInput = nodeName === "input";

            // Textareas are always multi-line
            // Inputs are always single-line, even if inside a contentEditable element
            // IE also treats inputs as contentEditable
            // All other element types are determined by whether or not they're contentEditable
            this.isMultiLine = isTextarea || !isInput && this._isContentEditable(this.element);

            this.valueMethod = this.element[isTextarea || isInput ? "val" : "text"];
            this.isNewMenu = true;

            this._addClass("ui-autocomplete-input");
            this.element.attr("autocomplete", "off");

            this._on(this.element, {
                keydown: function (event) {
                    if (this.element.prop("readOnly")) {
                        suppressKeyPress = true;
                        suppressInput = true;
                        suppressKeyPressRepeat = true;
                        return;
                    }

                    suppressKeyPress = false;
                    suppressInput = false;
                    suppressKeyPressRepeat = false;
                    var keyCode = $.ui.keyCode;
                    switch (event.keyCode) {
                        case keyCode.PAGE_UP:
                            suppressKeyPress = true;
                            this._move("previousPage", event);
                            break;
                        case keyCode.PAGE_DOWN:
                            suppressKeyPress = true;
                            this._move("nextPage", event);
                            break;
                        case keyCode.UP:
                            suppressKeyPress = true;
                            this._keyEvent("previous", event);
                            break;
                        case keyCode.DOWN:
                            suppressKeyPress = true;
                            this._keyEvent("next", event);
                            break;
                        case keyCode.ENTER:

                            // when menu is open and has focus
                            if (this.menu.active) {

                                // #6055 - Opera still allows the keypress to occur
                                // which causes forms to submit
                                suppressKeyPress = true;
                                event.preventDefault();
                                this.menu.select(event);
                            }
                            break;
                        case keyCode.TAB:
                            if (this.menu.active) {
                                this.menu.select(event);
                            }
                            break;
                        case keyCode.ESCAPE:
                            if (this.menu.element.is(":visible")) {
                                if (!this.isMultiLine) {
                                    this._value(this.term);
                                }
                                this.close(event);

                                // Different browsers have different default behavior for escape
                                // Single press can mean undo or clear
                                // Double press in IE means clear the whole form
                                event.preventDefault();
                            }
                            break;
                        default:
                            suppressKeyPressRepeat = true;

                            // search timeout should be triggered before the input value is changed
                            this._searchTimeout(event);
                            break;
                    }
                },
                keypress: function (event) {
                    if (suppressKeyPress) {
                        suppressKeyPress = false;
                        if (!this.isMultiLine || this.menu.element.is(":visible")) {
                            event.preventDefault();
                        }
                        return;
                    }
                    if (suppressKeyPressRepeat) {
                        return;
                    }

                    // Replicate some key handlers to allow them to repeat in Firefox and Opera
                    var keyCode = $.ui.keyCode;
                    switch (event.keyCode) {
                        case keyCode.PAGE_UP:
                            this._move("previousPage", event);
                            break;
                        case keyCode.PAGE_DOWN:
                            this._move("nextPage", event);
                            break;
                        case keyCode.UP:
                            this._keyEvent("previous", event);
                            break;
                        case keyCode.DOWN:
                            this._keyEvent("next", event);
                            break;
                    }
                },
                input: function (event) {
                    if (suppressInput) {
                        suppressInput = false;
                        event.preventDefault();
                        return;
                    }
                    this._searchTimeout(event);
                },
                focus: function () {
                    this.selectedItem = null;
                    this.previous = this._value();
                },
                blur: function (event) {
                    if (this.cancelBlur) {
                        delete this.cancelBlur;
                        return;
                    }

                    clearTimeout(this.searching);
                    this.close(event);
                    this._change(event);
                }
            });

            this._initSource();
            this.menu = $("<ul>")
                .appendTo(this._appendTo())
                .menu({

                    // disable ARIA support, the live region takes care of that
                    role: null
                })
                .hide()
                .menu("instance");

            this._addClass(this.menu.element, "ui-autocomplete", "ui-front");
            this._on(this.menu.element, {
                mousedown: function (event) {

                    // prevent moving focus out of the text field
                    event.preventDefault();

                    // IE doesn't prevent moving focus even with event.preventDefault()
                    // so we set a flag to know when we should ignore the blur event
                    this.cancelBlur = true;
                    this._delay(function () {
                        delete this.cancelBlur;

                        // Support: IE 8 only
                        // Right clicking a menu item or selecting text from the menu items will
                        // result in focus moving out of the input. However, we've already received
                        // and ignored the blur event because of the cancelBlur flag set above. So
                        // we restore focus to ensure that the menu closes properly based on the user's
                        // next actions.
                        if (this.element[0] !== $.ui.safeActiveElement(this.document[0])) {
                            this.element.trigger("focus");
                        }
                    });
                },
                menufocus: function (event, ui) {
                    var label, item;

                    // support: Firefox
                    // Prevent accidental activation of menu items in Firefox (#7024 #9118)
                    if (this.isNewMenu) {
                        this.isNewMenu = false;
                        if (event.originalEvent && /^mouse/.test(event.originalEvent.type)) {
                            this.menu.blur();

                            this.document.one("mousemove", function () {
                                $(event.target).trigger(event.originalEvent);
                            });

                            return;
                        }
                    }

                    item = ui.item.data("ui-autocomplete-item");
                    if (false !== this._trigger("focus", event, { item: item })) {

                        // use value to match what will end up in the input, if it was a key event
                        if (event.originalEvent && /^key/.test(event.originalEvent.type)) {
                            this._value(item.value);
                        }
                    }

                    // Announce the value in the liveRegion
                    label = ui.item.attr("aria-label") || item.value;
                    if (label && $.trim(label).length) {
                        this.liveRegion.children().hide();
                        $("<div>").text(label).appendTo(this.liveRegion);
                    }
                },
                menuselect: function (event, ui) {
                    var item = ui.item.data("ui-autocomplete-item"),
                        previous = this.previous;

                    // Only trigger when focus was lost (click on menu)
                    if (this.element[0] !== $.ui.safeActiveElement(this.document[0])) {
                        this.element.trigger("focus");
                        this.previous = previous;

                        // #6109 - IE triggers two focus events and the second
                        // is asynchronous, so we need to reset the previous
                        // term synchronously and asynchronously :-(
                        this._delay(function () {
                            this.previous = previous;
                            this.selectedItem = item;
                        });
                    }

                    if (false !== this._trigger("select", event, { item: item })) {
                        this._value(item.value);
                    }

                    // reset the term after the select event
                    // this allows custom select handling to work properly
                    this.term = this._value();

                    this.close(event);
                    this.selectedItem = item;
                }
            });

            this.liveRegion = $("<div>", {
                role: "status",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            })
                .appendTo(this.document[0].body);

            this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible");

            // Turning off autocomplete prevents the browser from remembering the
            // value when navigating through history, so we re-enable autocomplete
            // if the page is unloaded before the widget is destroyed. #7790
            this._on(this.window, {
                beforeunload: function () {
                    this.element.removeAttr("autocomplete");
                }
            });
        },

        _destroy: function () {
            clearTimeout(this.searching);
            this.element.removeAttr("autocomplete");
            this.menu.element.remove();
            this.liveRegion.remove();
        },

        _setOption: function (key, value) {
            this._super(key, value);
            if (key === "source") {
                this._initSource();
            }
            if (key === "appendTo") {
                this.menu.element.appendTo(this._appendTo());
            }
            if (key === "disabled" && value && this.xhr) {
                this.xhr.abort();
            }
        },

        _isEventTargetInWidget: function (event) {
            var menuElement = this.menu.element[0];

            return event.target === this.element[0] ||
                event.target === menuElement ||
                $.contains(menuElement, event.target);
        },

        _closeOnClickOutside: function (event) {
            if (!this._isEventTargetInWidget(event)) {
                this.close();
            }
        },

        _appendTo: function () {
            var element = this.options.appendTo;

            if (element) {
                element = element.jquery || element.nodeType ?
                    $(element) :
                    this.document.find(element).eq(0);
            }

            if (!element || !element[0]) {
                element = this.element.closest(".ui-front, dialog");
            }

            if (!element.length) {
                element = this.document[0].body;
            }

            return element;
        },

        _initSource: function () {
            var array, url,
                that = this;
            if ($.isArray(this.options.source)) {
                array = this.options.source;
                this.source = function (request, response) {
                    response($.ui.autocomplete.filter(array, request.term));
                };
            } else if (typeof this.options.source === "string") {
                url = this.options.source;
                this.source = function (request, response) {
                    if (that.xhr) {
                        that.xhr.abort();
                    }
                    that.xhr = $.ajax({
                        url: url,
                        data: request,
                        dataType: "json",
                        success: function (data) {
                            response(data);
                        },
                        error: function () {
                            response([]);
                        }
                    });
                };
            } else {
                this.source = this.options.source;
            }
        },

        _searchTimeout: function (event) {
            clearTimeout(this.searching);
            this.searching = this._delay(function () {

                // Search if the value has changed, or if the user retypes the same value (see #7434)
                var equalValues = this.term === this._value(),
                    menuVisible = this.menu.element.is(":visible"),
                    modifierKey = event.altKey || event.ctrlKey || event.metaKey || event.shiftKey;

                if (!equalValues || (equalValues && !menuVisible && !modifierKey)) {
                    this.selectedItem = null;
                    this.search(null, event);
                }
            }, this.options.delay);
        },

        search: function (value, event) {
            value = value != null ? value : this._value();

            // Always save the actual value, not the one passed as an argument
            this.term = this._value();

            if (value.length < this.options.minLength) {
                return this.close(event);
            }

            if (this._trigger("search", event) === false) {
                return;
            }

            return this._search(value);
        },

        _search: function (value) {
            this.pending++;
            this._addClass("ui-autocomplete-loading");
            this.cancelSearch = false;

            this.source({ term: value }, this._response());
        },

        _response: function () {
            var index = ++this.requestIndex;

            return $.proxy(function (content) {
                if (index === this.requestIndex) {
                    this.__response(content);
                }

                this.pending--;
                if (!this.pending) {
                    this._removeClass("ui-autocomplete-loading");
                }
            }, this);
        },

        __response: function (content) {
            if (content) {
                content = this._normalize(content);
            }
            this._trigger("response", null, { content: content });
            if (!this.options.disabled && content && content.length && !this.cancelSearch) {
                this._suggest(content);
                this._trigger("open");
            } else {

                // use ._close() instead of .close() so we don't cancel future searches
                this._close();
            }
        },

        close: function (event) {
            this.cancelSearch = true;
            this._close(event);
        },

        _close: function (event) {

            // Remove the handler that closes the menu on outside clicks
            this._off(this.document, "mousedown");

            if (this.menu.element.is(":visible")) {
                this.menu.element.hide();
                this.menu.blur();
                this.isNewMenu = true;
                this._trigger("close", event);
            }
        },

        _change: function (event) {
            if (this.previous !== this._value()) {
                this._trigger("change", event, { item: this.selectedItem });
            }
        },

        _normalize: function (items) {

            // assume all items have the right format when the first item is complete
            if (items.length && items[0].label && items[0].value) {
                return items;
            }
            return $.map(items, function (item) {
                if (typeof item === "string") {
                    return {
                        label: item,
                        value: item
                    };
                }
                return $.extend({}, item, {
                    label: item.label || item.value,
                    value: item.value || item.label
                });
            });
        },

        _suggest: function (items) {
            var ul = this.menu.element.empty();
            this._renderMenu(ul, items);
            this.isNewMenu = true;
            this.menu.refresh();

            // Size and position menu
            ul.show();
            this._resizeMenu();
            ul.position($.extend({
                of: this.element
            }, this.options.position));

            if (this.options.autoFocus) {
                this.menu.next();
            }

            // Listen for interactions outside of the widget (#6642)
            this._on(this.document, {
                mousedown: "_closeOnClickOutside"
            });
        },

        _resizeMenu: function () {
            var ul = this.menu.element;
            ul.outerWidth(Math.max(

                // Firefox wraps long text (possibly a rounding bug)
                // so we add 1px to avoid the wrapping (#7513)
                ul.width("").outerWidth() + 1,
                this.element.outerWidth()
            ));
        },

        _renderMenu: function (ul, items) {
            var that = this;
            $.each(items, function (index, item) {
                that._renderItemData(ul, item);
            });
        },

        _renderItemData: function (ul, item) {
            return this._renderItem(ul, item).data("ui-autocomplete-item", item);
        },

        _renderItem: function (ul, item) {
            return $("<li>")
                .append($("<div>").text(item.label))
                .appendTo(ul);
        },

        _move: function (direction, event) {
            if (!this.menu.element.is(":visible")) {
                this.search(null, event);
                return;
            }
            if (this.menu.isFirstItem() && /^previous/.test(direction) ||
                this.menu.isLastItem() && /^next/.test(direction)) {

                if (!this.isMultiLine) {
                    this._value(this.term);
                }

                this.menu.blur();
                return;
            }
            this.menu[direction](event);
        },

        widget: function () {
            return this.menu.element;
        },

        _value: function () {
            return this.valueMethod.apply(this.element, arguments);
        },

        _keyEvent: function (keyEvent, event) {
            if (!this.isMultiLine || this.menu.element.is(":visible")) {
                this._move(keyEvent, event);

                // Prevents moving cursor to beginning/end of the text field in some browsers
                event.preventDefault();
            }
        },

        // Support: Chrome <=50
        // We should be able to just use this.element.prop( "isContentEditable" )
        // but hidden elements always report false in Chrome.
        // https://code.google.com/p/chromium/issues/detail?id=313082
        _isContentEditable: function (element) {
            if (!element.length) {
                return false;
            }

            var editable = element.prop("contentEditable");

            if (editable === "inherit") {
                return this._isContentEditable(element.parent());
            }

            return editable === "true";
        }
    });

    $.extend($.ui.autocomplete, {
        escapeRegex: function (value) {
            return value.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
        },
        filter: function (array, term) {
            var matcher = new RegExp($.ui.autocomplete.escapeRegex(term), "i");
            return $.grep(array, function (value) {
                return matcher.test(value.label || value.value || value);
            });
        }
    });

    // Live region extension, adding a `messages` option
    // NOTE: This is an experimental API. We are still investigating
    // a full solution for string manipulation and internationalization.
    $.widget("ui.autocomplete", $.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function (amount) {
                    return amount + (amount > 1 ? " results are" : " result is") +
                        " available, use up and down arrow keys to navigate.";
                }
            }
        },

        __response: function (content) {
            var message;
            this._superApply(arguments);
            if (this.options.disabled || this.cancelSearch) {
                return;
            }
            if (content && content.length) {
                message = this.options.messages.results(content.length);
            } else {
                message = this.options.messages.noResults;
            }
            this.liveRegion.children().hide();
            $("<div>").text(message).appendTo(this.liveRegion);
        }
    });

    var widgetsAutocomplete = $.ui.autocomplete;


    /*!
     * jQuery UI Controlgroup 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */

    //>>label: Controlgroup
    //>>group: Widgets
    //>>description: Visually groups form control widgets
    //>>docs: http://api.jqueryui.com/controlgroup/
    //>>demos: http://jqueryui.com/controlgroup/
    //>>css.structure: ../../themes/base/core.css
    //>>css.structure: ../../themes/base/controlgroup.css
    //>>css.theme: ../../themes/base/theme.css


    var controlgroupCornerRegex = /ui-corner-([a-z]){2,6}/g;

    var widgetsControlgroup = $.widget("ui.controlgroup", {
        version: "1.12.1",
        defaultElement: "<div>",
        options: {
            direction: "horizontal",
            disabled: null,
            onlyVisible: true,
            items: {
                "button": "input[type=button], input[type=submit], input[type=reset], button, a",
                "controlgroupLabel": ".ui-controlgroup-label",
                "checkboxradio": "input[type='checkbox'], input[type='radio']",
                "selectmenu": "select",
                "spinner": ".ui-spinner-input"
            }
        },

        _create: function () {
            this._enhance();
        },

        // To support the enhanced option in jQuery Mobile, we isolate DOM manipulation
        _enhance: function () {
            this.element.attr("role", "toolbar");
            this.refresh();
        },

        _destroy: function () {
            this._callChildMethod("destroy");
            this.childWidgets.removeData("ui-controlgroup-data");
            this.element.removeAttr("role");
            if (this.options.items.controlgroupLabel) {
                this.element
                    .find(this.options.items.controlgroupLabel)
                    .find(".ui-controlgroup-label-contents")
                    .contents().unwrap();
            }
        },

        _initWidgets: function () {
            var that = this,
                childWidgets = [];

            // First we iterate over each of the items options
            $.each(this.options.items, function (widget, selector) {
                var labels;
                var options = {};

                // Make sure the widget has a selector set
                if (!selector) {
                    return;
                }

                if (widget === "controlgroupLabel") {
                    labels = that.element.find(selector);
                    labels.each(function () {
                        var element = $(this);

                        if (element.children(".ui-controlgroup-label-contents").length) {
                            return;
                        }
                        element.contents()
                            .wrapAll("<span class='ui-controlgroup-label-contents'></span>");
                    });
                    that._addClass(labels, null, "ui-widget ui-widget-content ui-state-default");
                    childWidgets = childWidgets.concat(labels.get());
                    return;
                }

                // Make sure the widget actually exists
                if (!$.fn[widget]) {
                    return;
                }

                // We assume everything is in the middle to start because we can't determine
                // first / last elements until all enhancments are done.
                if (that["_" + widget + "Options"]) {
                    options = that["_" + widget + "Options"]("middle");
                } else {
                    options = { classes: {} };
                }

                // Find instances of this widget inside controlgroup and init them
                that.element
                    .find(selector)
                    .each(function () {
                        var element = $(this);
                        var instance = element[widget]("instance");

                        // We need to clone the default options for this type of widget to avoid
                        // polluting the variable options which has a wider scope than a single widget.
                        var instanceOptions = $.widget.extend({}, options);

                        // If the button is the child of a spinner ignore it
                        // TODO: Find a more generic solution
                        if (widget === "button" && element.parent(".ui-spinner").length) {
                            return;
                        }

                        // Create the widget if it doesn't exist
                        if (!instance) {
                            instance = element[widget]()[widget]("instance");
                        }
                        if (instance) {
                            instanceOptions.classes =
                                that._resolveClassesValues(instanceOptions.classes, instance);
                        }
                        element[widget](instanceOptions);

                        // Store an instance of the controlgroup to be able to reference
                        // from the outermost element for changing options and refresh
                        var widgetElement = element[widget]("widget");
                        $.data(widgetElement[0], "ui-controlgroup-data",
                            instance ? instance : element[widget]("instance"));

                        childWidgets.push(widgetElement[0]);
                    });
            });

            this.childWidgets = $($.unique(childWidgets));
            this._addClass(this.childWidgets, "ui-controlgroup-item");
        },

        _callChildMethod: function (method) {
            this.childWidgets.each(function () {
                var element = $(this),
                    data = element.data("ui-controlgroup-data");
                if (data && data[method]) {
                    data[method]();
                }
            });
        },

        _updateCornerClass: function (element, position) {
            var remove = "ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all";
            var add = this._buildSimpleOptions(position, "label").classes.label;

            this._removeClass(element, null, remove);
            this._addClass(element, null, add);
        },

        _buildSimpleOptions: function (position, key) {
            var direction = this.options.direction === "vertical";
            var result = {
                classes: {}
            };
            result.classes[key] = {
                "middle": "",
                "first": "ui-corner-" + (direction ? "top" : "left"),
                "last": "ui-corner-" + (direction ? "bottom" : "right"),
                "only": "ui-corner-all"
            }[position];

            return result;
        },

        _spinnerOptions: function (position) {
            var options = this._buildSimpleOptions(position, "ui-spinner");

            options.classes["ui-spinner-up"] = "";
            options.classes["ui-spinner-down"] = "";

            return options;
        },

        _buttonOptions: function (position) {
            return this._buildSimpleOptions(position, "ui-button");
        },

        _checkboxradioOptions: function (position) {
            return this._buildSimpleOptions(position, "ui-checkboxradio-label");
        },

        _selectmenuOptions: function (position) {
            var direction = this.options.direction === "vertical";
            return {
                width: direction ? "auto" : false,
                classes: {
                    middle: {
                        "ui-selectmenu-button-open": "",
                        "ui-selectmenu-button-closed": ""
                    },
                    first: {
                        "ui-selectmenu-button-open": "ui-corner-" + (direction ? "top" : "tl"),
                        "ui-selectmenu-button-closed": "ui-corner-" + (direction ? "top" : "left")
                    },
                    last: {
                        "ui-selectmenu-button-open": direction ? "" : "ui-corner-tr",
                        "ui-selectmenu-button-closed": "ui-corner-" + (direction ? "bottom" : "right")
                    },
                    only: {
                        "ui-selectmenu-button-open": "ui-corner-top",
                        "ui-selectmenu-button-closed": "ui-corner-all"
                    }

                }[position]
            };
        },

        _resolveClassesValues: function (classes, instance) {
            var result = {};
            $.each(classes, function (key) {
                var current = instance.options.classes[key] || "";
                current = $.trim(current.replace(controlgroupCornerRegex, ""));
                result[key] = (current + " " + classes[key]).replace(/\s+/g, " ");
            });
            return result;
        },

        _setOption: function (key, value) {
            if (key === "direction") {
                this._removeClass("ui-controlgroup-" + this.options.direction);
            }

            this._super(key, value);
            if (key === "disabled") {
                this._callChildMethod(value ? "disable" : "enable");
                return;
            }

            this.refresh();
        },

        refresh: function () {
            var children,
                that = this;

            this._addClass("ui-controlgroup ui-controlgroup-" + this.options.direction);

            if (this.options.direction === "horizontal") {
                this._addClass(null, "ui-helper-clearfix");
            }
            this._initWidgets();

            children = this.childWidgets;

            // We filter here because we need to track all childWidgets not just the visible ones
            if (this.options.onlyVisible) {
                children = children.filter(":visible");
            }

            if (children.length) {

                // We do this last because we need to make sure all enhancment is done
                // before determining first and last
                $.each(["first", "last"], function (index, value) {
                    var instance = children[value]().data("ui-controlgroup-data");

                    if (instance && that["_" + instance.widgetName + "Options"]) {
                        var options = that["_" + instance.widgetName + "Options"](
                            children.length === 1 ? "only" : value
                        );
                        options.classes = that._resolveClassesValues(options.classes, instance);
                        instance.element[instance.widgetName](options);
                    } else {
                        that._updateCornerClass(children[value](), value);
                    }
                });

                // Finally call the refresh method on each of the child widgets.
                this._callChildMethod("refresh");
            }
        }
    });

    /*!
     * jQuery UI Checkboxradio 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */

    //>>label: Checkboxradio
    //>>group: Widgets
    //>>description: Enhances a form with multiple themeable checkboxes or radio buttons.
    //>>docs: http://api.jqueryui.com/checkboxradio/
    //>>demos: http://jqueryui.com/checkboxradio/
    //>>css.structure: ../../themes/base/core.css
    //>>css.structure: ../../themes/base/button.css
    //>>css.structure: ../../themes/base/checkboxradio.css
    //>>css.theme: ../../themes/base/theme.css



    $.widget("ui.checkboxradio", [$.ui.formResetMixin, {
        version: "1.12.1",
        options: {
            disabled: null,
            label: null,
            icon: true,
            classes: {
                "ui-checkboxradio-label": "ui-corner-all",
                "ui-checkboxradio-icon": "ui-corner-all"
            }
        },

        _getCreateOptions: function () {
            var disabled, labels;
            var that = this;
            var options = this._super() || {};

            // We read the type here, because it makes more sense to throw a element type error first,
            // rather then the error for lack of a label. Often if its the wrong type, it
            // won't have a label (e.g. calling on a div, btn, etc)
            this._readType();

            labels = this.element.labels();

            // If there are multiple labels, use the last one
            this.label = $(labels[labels.length - 1]);
            if (!this.label.length) {
                $.error("No label found for checkboxradio widget");
            }

            this.originalLabel = "";

            // We need to get the label text but this may also need to make sure it does not contain the
            // input itself.
            this.label.contents().not(this.element[0]).each(function () {

                // The label contents could be text, html, or a mix. We concat each element to get a
                // string representation of the label, without the input as part of it.
                that.originalLabel += this.nodeType === 3 ? $(this).text() : this.outerHTML;
            });

            // Set the label option if we found label text
            if (this.originalLabel) {
                options.label = this.originalLabel;
            }

            disabled = this.element[0].disabled;
            if (disabled != null) {
                options.disabled = disabled;
            }
            return options;
        },

        _create: function () {
            var checked = this.element[0].checked;

            this._bindFormResetHandler();

            if (this.options.disabled == null) {
                this.options.disabled = this.element[0].disabled;
            }

            this._setOption("disabled", this.options.disabled);
            this._addClass("ui-checkboxradio", "ui-helper-hidden-accessible");
            this._addClass(this.label, "ui-checkboxradio-label", "ui-button ui-widget");

            if (this.type === "radio") {
                this._addClass(this.label, "ui-checkboxradio-radio-label");
            }

            if (this.options.label && this.options.label !== this.originalLabel) {
                this._updateLabel();
            } else if (this.originalLabel) {
                this.options.label = this.originalLabel;
            }

            this._enhance();

            if (checked) {
                this._addClass(this.label, "ui-checkboxradio-checked", "ui-state-active");
                if (this.icon) {
                    this._addClass(this.icon, null, "ui-state-hover");
                }
            }

            this._on({
                change: "_toggleClasses",
                focus: function () {
                    this._addClass(this.label, null, "ui-state-focus ui-visual-focus");
                },
                blur: function () {
                    this._removeClass(this.label, null, "ui-state-focus ui-visual-focus");
                }
            });
        },

        _readType: function () {
            var nodeName = this.element[0].nodeName.toLowerCase();
            this.type = this.element[0].type;
            if (nodeName !== "input" || !/radio|checkbox/.test(this.type)) {
                $.error("Can't create checkboxradio on element.nodeName=" + nodeName +
                    " and element.type=" + this.type);
            }
        },

        // Support jQuery Mobile enhanced option
        _enhance: function () {
            this._updateIcon(this.element[0].checked);
        },

        widget: function () {
            return this.label;
        },

        _getRadioGroup: function () {
            var group;
            var name = this.element[0].name;
            var nameSelector = "input[name='" + $.ui.escapeSelector(name) + "']";

            if (!name) {
                return $([]);
            }

            if (this.form.length) {
                group = $(this.form[0].elements).filter(nameSelector);
            } else {

                // Not inside a form, check all inputs that also are not inside a form
                group = $(nameSelector).filter(function () {
                    return $(this).form().length === 0;
                });
            }

            return group.not(this.element);
        },

        _toggleClasses: function () {
            var checked = this.element[0].checked;
            this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", checked);

            if (this.options.icon && this.type === "checkbox") {
                this._toggleClass(this.icon, null, "ui-icon-check ui-state-checked", checked)
                    ._toggleClass(this.icon, null, "ui-icon-blank", !checked);
            }

            if (this.type === "radio") {
                this._getRadioGroup()
                    .each(function () {
                        var instance = $(this).checkboxradio("instance");

                        if (instance) {
                            instance._removeClass(instance.label,
                                "ui-checkboxradio-checked", "ui-state-active");
                        }
                    });
            }
        },

        _destroy: function () {
            this._unbindFormResetHandler();

            if (this.icon) {
                this.icon.remove();
                this.iconSpace.remove();
            }
        },

        _setOption: function (key, value) {

            // We don't allow the value to be set to nothing
            if (key === "label" && !value) {
                return;
            }

            this._super(key, value);

            if (key === "disabled") {
                this._toggleClass(this.label, null, "ui-state-disabled", value);
                this.element[0].disabled = value;

                // Don't refresh when setting disabled
                return;
            }
            this.refresh();
        },

        _updateIcon: function (checked) {
            var toAdd = "ui-icon ui-icon-background ";

            if (this.options.icon) {
                if (!this.icon) {
                    this.icon = $("<span>");
                    this.iconSpace = $("<span> </span>");
                    this._addClass(this.iconSpace, "ui-checkboxradio-icon-space");
                }

                if (this.type === "checkbox") {
                    toAdd += checked ? "ui-icon-check ui-state-checked" : "ui-icon-blank";
                    this._removeClass(this.icon, null, checked ? "ui-icon-blank" : "ui-icon-check");
                } else {
                    toAdd += "ui-icon-blank";
                }
                this._addClass(this.icon, "ui-checkboxradio-icon", toAdd);
                if (!checked) {
                    this._removeClass(this.icon, null, "ui-icon-check ui-state-checked");
                }
                this.icon.prependTo(this.label).after(this.iconSpace);
            } else if (this.icon !== undefined) {
                this.icon.remove();
                this.iconSpace.remove();
                delete this.icon;
            }
        },

        _updateLabel: function () {

            // Remove the contents of the label ( minus the icon, icon space, and input )
            var contents = this.label.contents().not(this.element[0]);
            if (this.icon) {
                contents = contents.not(this.icon[0]);
            }
            if (this.iconSpace) {
                contents = contents.not(this.iconSpace[0]);
            }
            contents.remove();

            this.label.append(this.options.label);
        },

        refresh: function () {
            var checked = this.element[0].checked,
                isDisabled = this.element[0].disabled;

            this._updateIcon(checked);
            this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", checked);
            if (this.options.label !== null) {
                this._updateLabel();
            }

            if (isDisabled !== this.options.disabled) {
                this._setOptions({ "disabled": isDisabled });
            }
        }

    }]);

    var widgetsCheckboxradio = $.ui.checkboxradio;


    /*!
     * jQuery UI Button 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */

    //>>label: Button
    //>>group: Widgets
    //>>description: Enhances a form with themeable buttons.
    //>>docs: http://api.jqueryui.com/button/
    //>>demos: http://jqueryui.com/button/
    //>>css.structure: ../../themes/base/core.css
    //>>css.structure: ../../themes/base/button.css
    //>>css.theme: ../../themes/base/theme.css



    $.widget("ui.button", {
        version: "1.12.1",
        defaultElement: "<button>",
        options: {
            classes: {
                "ui-button": "ui-corner-all"
            },
            disabled: null,
            icon: null,
            iconPosition: "beginning",
            label: null,
            showLabel: true
        },

        _getCreateOptions: function () {
            var disabled,

                // This is to support cases like in jQuery Mobile where the base widget does have
                // an implementation of _getCreateOptions
                options = this._super() || {};

            this.isInput = this.element.is("input");

            disabled = this.element[0].disabled;
            if (disabled != null) {
                options.disabled = disabled;
            }

            this.originalLabel = this.isInput ? this.element.val() : this.element.html();
            if (this.originalLabel) {
                options.label = this.originalLabel;
            }

            return options;
        },

        _create: function () {
            if (!this.option.showLabel & !this.options.icon) {
                this.options.showLabel = true;
            }

            // We have to check the option again here even though we did in _getCreateOptions,
            // because null may have been passed on init which would override what was set in
            // _getCreateOptions
            if (this.options.disabled == null) {
                this.options.disabled = this.element[0].disabled || false;
            }

            this.hasTitle = !!this.element.attr("title");

            // Check to see if the label needs to be set or if its already correct
            if (this.options.label && this.options.label !== this.originalLabel) {
                if (this.isInput) {
                    this.element.val(this.options.label);
                } else {
                    this.element.html(this.options.label);
                }
            }
            this._addClass("ui-button", "ui-widget");
            this._setOption("disabled", this.options.disabled);
            this._enhance();

            if (this.element.is("a")) {
                this._on({
                    "keyup": function (event) {
                        if (event.keyCode === $.ui.keyCode.SPACE) {
                            event.preventDefault();

                            // Support: PhantomJS <= 1.9, IE 8 Only
                            // If a native click is available use it so we actually cause navigation
                            // otherwise just trigger a click event
                            if (this.element[0].click) {
                                this.element[0].click();
                            } else {
                                this.element.trigger("click");
                            }
                        }
                    }
                });
            }
        },

        _enhance: function () {
            if (!this.element.is("button")) {
                this.element.attr("role", "button");
            }

            if (this.options.icon) {
                this._updateIcon("icon", this.options.icon);
                this._updateTooltip();
            }
        },

        _updateTooltip: function () {
            this.title = this.element.attr("title");

            if (!this.options.showLabel && !this.title) {
                this.element.attr("title", this.options.label);
            }
        },

        _updateIcon: function (option, value) {
            var icon = option !== "iconPosition",
                position = icon ? this.options.iconPosition : value,
                displayBlock = position === "top" || position === "bottom";

            // Create icon
            if (!this.icon) {
                this.icon = $("<span>");

                this._addClass(this.icon, "ui-button-icon", "ui-icon");

                if (!this.options.showLabel) {
                    this._addClass("ui-button-icon-only");
                }
            } else if (icon) {

                // If we are updating the icon remove the old icon class
                this._removeClass(this.icon, null, this.options.icon);
            }

            // If we are updating the icon add the new icon class
            if (icon) {
                this._addClass(this.icon, null, value);
            }

            this._attachIcon(position);

            // If the icon is on top or bottom we need to add the ui-widget-icon-block class and remove
            // the iconSpace if there is one.
            if (displayBlock) {
                this._addClass(this.icon, null, "ui-widget-icon-block");
                if (this.iconSpace) {
                    this.iconSpace.remove();
                }
            } else {

                // Position is beginning or end so remove the ui-widget-icon-block class and add the
                // space if it does not exist
                if (!this.iconSpace) {
                    this.iconSpace = $("<span> </span>");
                    this._addClass(this.iconSpace, "ui-button-icon-space");
                }
                this._removeClass(this.icon, null, "ui-wiget-icon-block");
                this._attachIconSpace(position);
            }
        },

        _destroy: function () {
            this.element.removeAttr("role");

            if (this.icon) {
                this.icon.remove();
            }
            if (this.iconSpace) {
                this.iconSpace.remove();
            }
            if (!this.hasTitle) {
                this.element.removeAttr("title");
            }
        },

        _attachIconSpace: function (iconPosition) {
            this.icon[/^(?:end|bottom)/.test(iconPosition) ? "before" : "after"](this.iconSpace);
        },

        _attachIcon: function (iconPosition) {
            this.element[/^(?:end|bottom)/.test(iconPosition) ? "append" : "prepend"](this.icon);
        },

        _setOptions: function (options) {
            var newShowLabel = options.showLabel === undefined ?
                this.options.showLabel :
                options.showLabel,
                newIcon = options.icon === undefined ? this.options.icon : options.icon;

            if (!newShowLabel && !newIcon) {
                options.showLabel = true;
            }
            this._super(options);
        },

        _setOption: function (key, value) {
            if (key === "icon") {
                if (value) {
                    this._updateIcon(key, value);
                } else if (this.icon) {
                    this.icon.remove();
                    if (this.iconSpace) {
                        this.iconSpace.remove();
                    }
                }
            }

            if (key === "iconPosition") {
                this._updateIcon(key, value);
            }

            // Make sure we can't end up with a button that has neither text nor icon
            if (key === "showLabel") {
                this._toggleClass("ui-button-icon-only", null, !value);
                this._updateTooltip();
            }

            if (key === "label") {
                if (this.isInput) {
                    this.element.val(value);
                } else {

                    // If there is an icon, append it, else nothing then append the value
                    // this avoids removal of the icon when setting label text
                    this.element.html(value);
                    if (this.icon) {
                        this._attachIcon(this.options.iconPosition);
                        this._attachIconSpace(this.options.iconPosition);
                    }
                }
            }

            this._super(key, value);

            if (key === "disabled") {
                this._toggleClass(null, "ui-state-disabled", value);
                this.element[0].disabled = value;
                if (value) {
                    this.element.blur();
                }
            }
        },

        refresh: function () {

            // Make sure to only check disabled if its an element that supports this otherwise
            // check for the disabled class to determine state
            var isDisabled = this.element.is("input, button") ?
                this.element[0].disabled : this.element.hasClass("ui-button-disabled");

            if (isDisabled !== this.options.disabled) {
                this._setOptions({ disabled: isDisabled });
            }

            this._updateTooltip();
        }
    });

    // DEPRECATED
    if ($.uiBackCompat !== false) {

        // Text and Icons options
        $.widget("ui.button", $.ui.button, {
            options: {
                text: true,
                icons: {
                    primary: null,
                    secondary: null
                }
            },

            _create: function () {
                if (this.options.showLabel && !this.options.text) {
                    this.options.showLabel = this.options.text;
                }
                if (!this.options.showLabel && this.options.text) {
                    this.options.text = this.options.showLabel;
                }
                if (!this.options.icon && (this.options.icons.primary ||
                    this.options.icons.secondary)) {
                    if (this.options.icons.primary) {
                        this.options.icon = this.options.icons.primary;
                    } else {
                        this.options.icon = this.options.icons.secondary;
                        this.options.iconPosition = "end";
                    }
                } else if (this.options.icon) {
                    this.options.icons.primary = this.options.icon;
                }
                this._super();
            },

            _setOption: function (key, value) {
                if (key === "text") {
                    this._super("showLabel", value);
                    return;
                }
                if (key === "showLabel") {
                    this.options.text = value;
                }
                if (key === "icon") {
                    this.options.icons.primary = value;
                }
                if (key === "icons") {
                    if (value.primary) {
                        this._super("icon", value.primary);
                        this._super("iconPosition", "beginning");
                    } else if (value.secondary) {
                        this._super("icon", value.secondary);
                        this._super("iconPosition", "end");
                    }
                }
                this._superApply(arguments);
            }
        });

        $.fn.button = (function (orig) {
            return function () {
                if (!this.length || (this.length && this[0].tagName !== "INPUT") ||
                    (this.length && this[0].tagName === "INPUT" && (
                        this.attr("type") !== "checkbox" && this.attr("type") !== "radio"
                    ))) {
                    return orig.apply(this, arguments);
                }
                if (!$.ui.checkboxradio) {
                    $.error("Checkboxradio widget missing");
                }
                if (arguments.length === 0) {
                    return this.checkboxradio({
                        "icon": false
                    });
                }
                return this.checkboxradio.apply(this, arguments);
            };
        })($.fn.button);

        $.fn.buttonset = function () {
            if (!$.ui.controlgroup) {
                $.error("Controlgroup widget missing");
            }
            if (arguments[0] === "option" && arguments[1] === "items" && arguments[2]) {
                return this.controlgroup.apply(this,
                    [arguments[0], "items.button", arguments[2]]);
            }
            if (arguments[0] === "option" && arguments[1] === "items") {
                return this.controlgroup.apply(this, [arguments[0], "items.button"]);
            }
            if (typeof arguments[0] === "object" && arguments[0].items) {
                arguments[0].items = {
                    button: arguments[0].items
                };
            }
            return this.controlgroup.apply(this, arguments);
        };
    }

    var widgetsButton = $.ui.button;


    // jscs:disable maximumLineLength
    /* jscs:disable requireCamelCaseOrUpperCaseIdentifiers */
    /*!
     * jQuery UI Datepicker 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */

    //>>label: Datepicker
    //>>group: Widgets
    //>>description: Displays a calendar from an input or inline for selecting dates.
    //>>docs: http://api.jqueryui.com/datepicker/
    //>>demos: http://jqueryui.com/datepicker/
    //>>css.structure: ../../themes/base/core.css
    //>>css.structure: ../../themes/base/datepicker.css
    //>>css.theme: ../../themes/base/theme.css



    $.extend($.ui, { datepicker: { version: "1.12.1" } });

    var datepicker_instActive;

    function datepicker_getZindex(elem) {
        var position, value;
        while (elem.length && elem[0] !== document) {

            // Ignore z-index if position is set to a value where z-index is ignored by the browser
            // This makes behavior of this function consistent across browsers
            // WebKit always returns auto if the element is positioned
            position = elem.css("position");
            if (position === "absolute" || position === "relative" || position === "fixed") {

                // IE returns 0 when zIndex is not specified
                // other browsers return a string
                // we ignore the case of nested elements with an explicit value of 0
                // <div style="z-index: -10;"><div style="z-index: 0;"></div></div>
                value = parseInt(elem.css("zIndex"), 10);
                if (!isNaN(value) && value !== 0) {
                    return value;
                }
            }
            elem = elem.parent();
        }

        return 0;
    }
    /* Date picker manager.
       Use the singleton instance of this class, $.datepicker, to interact with the date picker.
       Settings for (groups of) date pickers are maintained in an instance object,
       allowing multiple different settings on the same page. */

    function Datepicker() {
        this._curInst = null; // The current instance in use
        this._keyEvent = false; // If the last event was a key event
        this._disabledInputs = []; // List of date picker inputs that have been disabled
        this._datepickerShowing = false; // True if the popup picker is showing , false if not
        this._inDialog = false; // True if showing within a "dialog", false if not
        this._mainDivId = "ui-datepicker-div"; // The ID of the main datepicker division
        this._inlineClass = "ui-datepicker-inline"; // The name of the inline marker class
        this._appendClass = "ui-datepicker-append"; // The name of the append marker class
        this._triggerClass = "ui-datepicker-trigger"; // The name of the trigger marker class
        this._dialogClass = "ui-datepicker-dialog"; // The name of the dialog marker class
        this._disableClass = "ui-datepicker-disabled"; // The name of the disabled covering marker class
        this._unselectableClass = "ui-datepicker-unselectable"; // The name of the unselectable cell marker class
        this._currentClass = "ui-datepicker-current-day"; // The name of the current day marker class
        this._dayOverClass = "ui-datepicker-days-cell-over"; // The name of the day hover marker class
        this.regional = []; // Available regional settings, indexed by language code
        this.regional[""] = { // Default regional settings
            closeText: "Done", // Display text for close link
            prevText: "Prev", // Display text for previous month link
            nextText: "Next", // Display text for next month link
            currentText: "Today", // Display text for current month link
            monthNames: ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"], // Names of months for drop-down and formatting
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], // For formatting
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], // For formatting
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], // For formatting
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], // Column headings for days starting at Sunday
            weekHeader: "Wk", // Column header for week of the year
            dateFormat: "mm/dd/yy", // See format options on parseDate
            firstDay: 0, // The first day of the week, Sun = 0, Mon = 1, ...
            isRTL: false, // True if right-to-left language, false if left-to-right
            showMonthAfterYear: false, // True if the year select precedes month, false for month then year
            yearSuffix: "" // Additional text to append to the year in the month headers
        };
        this._defaults = { // Global defaults for all the date picker instances
            showOn: "focus", // "focus" for popup on focus,
            // "button" for trigger button, or "both" for either
            showAnim: "fadeIn", // Name of jQuery animation for popup
            showOptions: {}, // Options for enhanced animations
            defaultDate: null, // Used when field is blank: actual date,
            // +/-number for offset from today, null for today
            appendText: "", // Display text following the input box, e.g. showing the format
            buttonText: "...", // Text for trigger button
            buttonImage: "", // URL for trigger button image
            buttonImageOnly: false, // True if the image appears alone, false if it appears on a button
            hideIfNoPrevNext: false, // True to hide next/previous month links
            // if not applicable, false to just disable them
            navigationAsDateFormat: false, // True if date formatting applied to prev/today/next links
            gotoCurrent: false, // True if today link goes back to current selection instead
            changeMonth: false, // True if month can be selected directly, false if only prev/next
            changeYear: false, // True if year can be selected directly, false if only prev/next
            yearRange: "c-10:c+10", // Range of years to display in drop-down,
            // either relative to today's year (-nn:+nn), relative to currently displayed year
            // (c-nn:c+nn), absolute (nnnn:nnnn), or a combination of the above (nnnn:-n)
            showOtherMonths: false, // True to show dates in other months, false to leave blank
            selectOtherMonths: false, // True to allow selection of dates in other months, false for unselectable
            showWeek: false, // True to show week of the year, false to not show it
            calculateWeek: this.iso8601Week, // How to calculate the week of the year,
            // takes a Date and returns the number of the week for it
            shortYearCutoff: "+10", // Short year values < this are in the current century,
            // > this are in the previous century,
            // string value starting with "+" for current year + value
            minDate: null, // The earliest selectable date, or null for no limit
            maxDate: null, // The latest selectable date, or null for no limit
            duration: "fast", // Duration of display/closure
            beforeShowDay: null, // Function that takes a date and returns an array with
            // [0] = true if selectable, false if not, [1] = custom CSS class name(s) or "",
            // [2] = cell title (optional), e.g. $.datepicker.noWeekends
            beforeShow: null, // Function that takes an input field and
            // returns a set of custom settings for the date picker
            onSelect: null, // Define a callback function when a date is selected
            onChangeMonthYear: null, // Define a callback function when the month or year is changed
            onClose: null, // Define a callback function when the datepicker is closed
            numberOfMonths: 1, // Number of months to show at a time
            showCurrentAtPos: 0, // The position in multipe months at which to show the current month (starting at 0)
            stepMonths: 1, // Number of months to step back/forward
            stepBigMonths: 12, // Number of months to step back/forward for the big links
            altField: "", // Selector for an alternate field to store selected dates into
            altFormat: "", // The date format to use for the alternate field
            constrainInput: true, // The input is constrained by the current date format
            showButtonPanel: false, // True to show button panel, false to not show it
            autoSize: false, // True to size the input for the date format, false to leave as is
            disabled: false // The initial disabled state
        };
        $.extend(this._defaults, this.regional[""]);
        this.regional.en = $.extend(true, {}, this.regional[""]);
        this.regional["en-US"] = $.extend(true, {}, this.regional.en);
        this.dpDiv = datepicker_bindHover($("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"));
    }

    $.extend(Datepicker.prototype, {
        /* Class name added to elements to indicate already configured with a date picker. */
        markerClassName: "hasDatepicker",

        //Keep track of the maximum number of rows displayed (see #7043)
        maxRows: 4,

        // TODO rename to "widget" when switching to widget factory
        _widgetDatepicker: function () {
            return this.dpDiv;
        },

        /* Override the default settings for all instances of the date picker.
         * @param  settings  object - the new settings to use as defaults (anonymous object)
         * @return the manager object
         */
        setDefaults: function (settings) {
            datepicker_extendRemove(this._defaults, settings || {});
            return this;
        },

        /* Attach the date picker to a jQuery selection.
         * @param  target	element - the target input field or division or span
         * @param  settings  object - the new settings to use for this date picker instance (anonymous)
         */
        _attachDatepicker: function (target, settings) {
            var nodeName, inline, inst;
            nodeName = target.nodeName.toLowerCase();
            inline = (nodeName === "div" || nodeName === "span");
            if (!target.id) {
                this.uuid += 1;
                target.id = "dp" + this.uuid;
            }
            inst = this._newInst($(target), inline);
            inst.settings = $.extend({}, settings || {});
            if (nodeName === "input") {
                this._connectDatepicker(target, inst);
            } else if (inline) {
                this._inlineDatepicker(target, inst);
            }
        },

        /* Create a new instance object. */
        _newInst: function (target, inline) {
            var id = target[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"); // escape jQuery meta chars
            return {
                id: id, input: target, // associated target
                selectedDay: 0, selectedMonth: 0, selectedYear: 0, // current selection
                drawMonth: 0, drawYear: 0, // month being drawn
                inline: inline, // is datepicker inline or not
                dpDiv: (!inline ? this.dpDiv : // presentation div
                    datepicker_bindHover($("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")))
            };
        },

        /* Attach the date picker to an input field. */
        _connectDatepicker: function (target, inst) {
            var input = $(target);
            inst.append = $([]);
            inst.trigger = $([]);
            if (input.hasClass(this.markerClassName)) {
                return;
            }
            this._attachments(input, inst);
            input.addClass(this.markerClassName).on("keydown", this._doKeyDown).
                on("keypress", this._doKeyPress).on("keyup", this._doKeyUp);
            this._autoSize(inst);
            $.data(target, "datepicker", inst);

            //If disabled option is true, disable the datepicker once it has been attached to the input (see ticket #5665)
            if (inst.settings.disabled) {
                this._disableDatepicker(target);
            }
        },

        /* Make attachments based on settings. */
        _attachments: function (input, inst) {
            var showOn, buttonText, buttonImage,
                appendText = this._get(inst, "appendText"),
                isRTL = this._get(inst, "isRTL");

            if (inst.append) {
                inst.append.remove();
            }
            if (appendText) {
                inst.append = $("<span class='" + this._appendClass + "'>" + appendText + "</span>");
                input[isRTL ? "before" : "after"](inst.append);
            }

            input.off("focus", this._showDatepicker);

            if (inst.trigger) {
                inst.trigger.remove();
            }

            showOn = this._get(inst, "showOn");
            if (showOn === "focus" || showOn === "both") { // pop-up date picker when in the marked field
                input.on("focus", this._showDatepicker);
            }
            if (showOn === "button" || showOn === "both") { // pop-up date picker when button clicked
                buttonText = this._get(inst, "buttonText");
                buttonImage = this._get(inst, "buttonImage");
                inst.trigger = $(this._get(inst, "buttonImageOnly") ?
                    $("<img/>").addClass(this._triggerClass).
                        attr({ src: buttonImage, alt: buttonText, title: buttonText }) :
                    $("<button type='button'></button>").addClass(this._triggerClass).
                        html(!buttonImage ? buttonText : $("<img/>").attr(
                            { src: buttonImage, alt: buttonText, title: buttonText })));
                input[isRTL ? "before" : "after"](inst.trigger);
                inst.trigger.on("click", function () {
                    if ($.datepicker._datepickerShowing && $.datepicker._lastInput === input[0]) {
                        $.datepicker._hideDatepicker();
                    } else if ($.datepicker._datepickerShowing && $.datepicker._lastInput !== input[0]) {
                        $.datepicker._hideDatepicker();
                        $.datepicker._showDatepicker(input[0]);
                    } else {
                        $.datepicker._showDatepicker(input[0]);
                    }
                    return false;
                });
            }
        },

        /* Apply the maximum length for the date format. */
        _autoSize: function (inst) {
            if (this._get(inst, "autoSize") && !inst.inline) {
                var findMax, max, maxI, i,
                    date = new Date(2009, 12 - 1, 20), // Ensure double digits
                    dateFormat = this._get(inst, "dateFormat");

                if (dateFormat.match(/[DM]/)) {
                    findMax = function (names) {
                        max = 0;
                        maxI = 0;
                        for (i = 0; i < names.length; i++) {
                            if (names[i].length > max) {
                                max = names[i].length;
                                maxI = i;
                            }
                        }
                        return maxI;
                    };
                    date.setMonth(findMax(this._get(inst, (dateFormat.match(/MM/) ?
                        "monthNames" : "monthNamesShort"))));
                    date.setDate(findMax(this._get(inst, (dateFormat.match(/DD/) ?
                        "dayNames" : "dayNamesShort"))) + 20 - date.getDay());
                }
                inst.input.attr("size", this._formatDate(inst, date).length);
            }
        },

        /* Attach an inline date picker to a div. */
        _inlineDatepicker: function (target, inst) {
            var divSpan = $(target);
            if (divSpan.hasClass(this.markerClassName)) {
                return;
            }
            divSpan.addClass(this.markerClassName).append(inst.dpDiv);
            $.data(target, "datepicker", inst);
            this._setDate(inst, this._getDefaultDate(inst), true);
            this._updateDatepicker(inst);
            this._updateAlternate(inst);

            //If disabled option is true, disable the datepicker before showing it (see ticket #5665)
            if (inst.settings.disabled) {
                this._disableDatepicker(target);
            }

            // Set display:block in place of inst.dpDiv.show() which won't work on disconnected elements
            // http://bugs.jqueryui.com/ticket/7552 - A Datepicker created on a detached div has zero height
            inst.dpDiv.css("display", "block");
        },

        /* Pop-up the date picker in a "dialog" box.
         * @param  input element - ignored
         * @param  date	string or Date - the initial date to display
         * @param  onSelect  function - the function to call when a date is selected
         * @param  settings  object - update the dialog date picker instance's settings (anonymous object)
         * @param  pos int[2] - coordinates for the dialog's position within the screen or
         *					event - with x/y coordinates or
         *					leave empty for default (screen centre)
         * @return the manager object
         */
        _dialogDatepicker: function (input, date, onSelect, settings, pos) {
            var id, browserWidth, browserHeight, scrollX, scrollY,
                inst = this._dialogInst; // internal instance

            if (!inst) {
                this.uuid += 1;
                id = "dp" + this.uuid;
                this._dialogInput = $("<input type='text' id='" + id +
                    "' style='position: absolute; top: -100px; width: 0px;'/>");
                this._dialogInput.on("keydown", this._doKeyDown);
                $("body").append(this._dialogInput);
                inst = this._dialogInst = this._newInst(this._dialogInput, false);
                inst.settings = {};
                $.data(this._dialogInput[0], "datepicker", inst);
            }
            datepicker_extendRemove(inst.settings, settings || {});
            date = (date && date.constructor === Date ? this._formatDate(inst, date) : date);
            this._dialogInput.val(date);

            this._pos = (pos ? (pos.length ? pos : [pos.pageX, pos.pageY]) : null);
            if (!this._pos) {
                browserWidth = document.documentElement.clientWidth;
                browserHeight = document.documentElement.clientHeight;
                scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
                scrollY = document.documentElement.scrollTop || document.body.scrollTop;
                this._pos = // should use actual width/height below
                    [(browserWidth / 2) - 100 + scrollX, (browserHeight / 2) - 150 + scrollY];
            }

            // Move input on screen for focus, but hidden behind dialog
            this._dialogInput.css("left", (this._pos[0] + 20) + "px").css("top", this._pos[1] + "px");
            inst.settings.onSelect = onSelect;
            this._inDialog = true;
            this.dpDiv.addClass(this._dialogClass);
            this._showDatepicker(this._dialogInput[0]);
            if ($.blockUI) {
                $.blockUI(this.dpDiv);
            }
            $.data(this._dialogInput[0], "datepicker", inst);
            return this;
        },

        /* Detach a datepicker from its control.
         * @param  target	element - the target input field or division or span
         */
        _destroyDatepicker: function (target) {
            var nodeName,
                $target = $(target),
                inst = $.data(target, "datepicker");

            if (!$target.hasClass(this.markerClassName)) {
                return;
            }

            nodeName = target.nodeName.toLowerCase();
            $.removeData(target, "datepicker");
            if (nodeName === "input") {
                inst.append.remove();
                inst.trigger.remove();
                $target.removeClass(this.markerClassName).
                    off("focus", this._showDatepicker).
                    off("keydown", this._doKeyDown).
                    off("keypress", this._doKeyPress).
                    off("keyup", this._doKeyUp);
            } else if (nodeName === "div" || nodeName === "span") {
                $target.removeClass(this.markerClassName).empty();
            }

            if (datepicker_instActive === inst) {
                datepicker_instActive = null;
            }
        },

        /* Enable the date picker to a jQuery selection.
         * @param  target	element - the target input field or division or span
         */
        _enableDatepicker: function (target) {
            var nodeName, inline,
                $target = $(target),
                inst = $.data(target, "datepicker");

            if (!$target.hasClass(this.markerClassName)) {
                return;
            }

            nodeName = target.nodeName.toLowerCase();
            if (nodeName === "input") {
                target.disabled = false;
                inst.trigger.filter("button").
                    each(function () { this.disabled = false; }).end().
                    filter("img").css({ opacity: "1.0", cursor: "" });
            } else if (nodeName === "div" || nodeName === "span") {
                inline = $target.children("." + this._inlineClass);
                inline.children().removeClass("ui-state-disabled");
                inline.find("select.ui-datepicker-month, select.ui-datepicker-year").
                    prop("disabled", false);
            }
            this._disabledInputs = $.map(this._disabledInputs,
                function (value) { return (value === target ? null : value); }); // delete entry
        },

        /* Disable the date picker to a jQuery selection.
         * @param  target	element - the target input field or division or span
         */
        _disableDatepicker: function (target) {
            var nodeName, inline,
                $target = $(target),
                inst = $.data(target, "datepicker");

            if (!$target.hasClass(this.markerClassName)) {
                return;
            }

            nodeName = target.nodeName.toLowerCase();
            if (nodeName === "input") {
                target.disabled = true;
                inst.trigger.filter("button").
                    each(function () { this.disabled = true; }).end().
                    filter("img").css({ opacity: "0.5", cursor: "default" });
            } else if (nodeName === "div" || nodeName === "span") {
                inline = $target.children("." + this._inlineClass);
                inline.children().addClass("ui-state-disabled");
                inline.find("select.ui-datepicker-month, select.ui-datepicker-year").
                    prop("disabled", true);
            }
            this._disabledInputs = $.map(this._disabledInputs,
                function (value) { return (value === target ? null : value); }); // delete entry
            this._disabledInputs[this._disabledInputs.length] = target;
        },

        /* Is the first field in a jQuery collection disabled as a datepicker?
         * @param  target	element - the target input field or division or span
         * @return boolean - true if disabled, false if enabled
         */
        _isDisabledDatepicker: function (target) {
            if (!target) {
                return false;
            }
            for (var i = 0; i < this._disabledInputs.length; i++) {
                if (this._disabledInputs[i] === target) {
                    return true;
                }
            }
            return false;
        },

        /* Retrieve the instance data for the target control.
         * @param  target  element - the target input field or division or span
         * @return  object - the associated instance data
         * @throws  error if a jQuery problem getting data
         */
        _getInst: function (target) {
            try {
                return $.data(target, "datepicker");
            }
            catch (err) {
                throw "Missing instance data for this datepicker";
            }
        },

        /* Update or retrieve the settings for a date picker attached to an input field or division.
         * @param  target  element - the target input field or division or span
         * @param  name	object - the new settings to update or
         *				string - the name of the setting to change or retrieve,
         *				when retrieving also "all" for all instance settings or
         *				"defaults" for all global defaults
         * @param  value   any - the new value for the setting
         *				(omit if above is an object or to retrieve a value)
         */
        _optionDatepicker: function (target, name, value) {
            var settings, date, minDate, maxDate,
                inst = this._getInst(target);

            if (arguments.length === 2 && typeof name === "string") {
                return (name === "defaults" ? $.extend({}, $.datepicker._defaults) :
                    (inst ? (name === "all" ? $.extend({}, inst.settings) :
                        this._get(inst, name)) : null));
            }

            settings = name || {};
            if (typeof name === "string") {
                settings = {};
                settings[name] = value;
            }

            if (inst) {
                if (this._curInst === inst) {
                    this._hideDatepicker();
                }

                date = this._getDateDatepicker(target, true);
                minDate = this._getMinMaxDate(inst, "min");
                maxDate = this._getMinMaxDate(inst, "max");
                datepicker_extendRemove(inst.settings, settings);

                // reformat the old minDate/maxDate values if dateFormat changes and a new minDate/maxDate isn't provided
                if (minDate !== null && settings.dateFormat !== undefined && settings.minDate === undefined) {
                    inst.settings.minDate = this._formatDate(inst, minDate);
                }
                if (maxDate !== null && settings.dateFormat !== undefined && settings.maxDate === undefined) {
                    inst.settings.maxDate = this._formatDate(inst, maxDate);
                }
                if ("disabled" in settings) {
                    if (settings.disabled) {
                        this._disableDatepicker(target);
                    } else {
                        this._enableDatepicker(target);
                    }
                }
                this._attachments($(target), inst);
                this._autoSize(inst);
                this._setDate(inst, date);
                this._updateAlternate(inst);
                this._updateDatepicker(inst);
            }
        },

        // Change method deprecated
        _changeDatepicker: function (target, name, value) {
            this._optionDatepicker(target, name, value);
        },

        /* Redraw the date picker attached to an input field or division.
         * @param  target  element - the target input field or division or span
         */
        _refreshDatepicker: function (target) {
            var inst = this._getInst(target);
            if (inst) {
                this._updateDatepicker(inst);
            }
        },

        /* Set the dates for a jQuery selection.
         * @param  target element - the target input field or division or span
         * @param  date	Date - the new date
         */
        _setDateDatepicker: function (target, date) {
            var inst = this._getInst(target);
            if (inst) {
                this._setDate(inst, date);
                this._updateDatepicker(inst);
                this._updateAlternate(inst);
            }
        },

        /* Get the date(s) for the first entry in a jQuery selection.
         * @param  target element - the target input field or division or span
         * @param  noDefault boolean - true if no default date is to be used
         * @return Date - the current date
         */
        _getDateDatepicker: function (target, noDefault) {
            var inst = this._getInst(target);
            if (inst && !inst.inline) {
                this._setDateFromField(inst, noDefault);
            }
            return (inst ? this._getDate(inst) : null);
        },

        /* Handle keystrokes. */
        _doKeyDown: function (event) {
            var onSelect, dateStr, sel,
                inst = $.datepicker._getInst(event.target),
                handled = true,
                isRTL = inst.dpDiv.is(".ui-datepicker-rtl");

            inst._keyEvent = true;
            if ($.datepicker._datepickerShowing) {
                switch (event.keyCode) {
                    case 9: $.datepicker._hideDatepicker();
                        handled = false;
                        break; // hide on tab out
                    case 13: sel = $("td." + $.datepicker._dayOverClass + ":not(." +
                        $.datepicker._currentClass + ")", inst.dpDiv);
                        if (sel[0]) {
                            $.datepicker._selectDay(event.target, inst.selectedMonth, inst.selectedYear, sel[0]);
                        }

                        onSelect = $.datepicker._get(inst, "onSelect");
                        if (onSelect) {
                            dateStr = $.datepicker._formatDate(inst);

                            // Trigger custom callback
                            onSelect.apply((inst.input ? inst.input[0] : null), [dateStr, inst]);
                        } else {
                            $.datepicker._hideDatepicker();
                        }

                        return false; // don't submit the form
                    case 27: $.datepicker._hideDatepicker();
                        break; // hide on escape
                    case 33: $.datepicker._adjustDate(event.target, (event.ctrlKey ?
                        -$.datepicker._get(inst, "stepBigMonths") :
                        -$.datepicker._get(inst, "stepMonths")), "M");
                        break; // previous month/year on page up/+ ctrl
                    case 34: $.datepicker._adjustDate(event.target, (event.ctrlKey ?
                        +$.datepicker._get(inst, "stepBigMonths") :
                        +$.datepicker._get(inst, "stepMonths")), "M");
                        break; // next month/year on page down/+ ctrl
                    case 35: if (event.ctrlKey || event.metaKey) {
                        $.datepicker._clearDate(event.target);
                    }
                        handled = event.ctrlKey || event.metaKey;
                        break; // clear on ctrl or command +end
                    case 36: if (event.ctrlKey || event.metaKey) {
                        $.datepicker._gotoToday(event.target);
                    }
                        handled = event.ctrlKey || event.metaKey;
                        break; // current on ctrl or command +home
                    case 37: if (event.ctrlKey || event.metaKey) {
                        $.datepicker._adjustDate(event.target, (isRTL ? +1 : -1), "D");
                    }
                        handled = event.ctrlKey || event.metaKey;

                        // -1 day on ctrl or command +left
                        if (event.originalEvent.altKey) {
                            $.datepicker._adjustDate(event.target, (event.ctrlKey ?
                                -$.datepicker._get(inst, "stepBigMonths") :
                                -$.datepicker._get(inst, "stepMonths")), "M");
                        }

                        // next month/year on alt +left on Mac
                        break;
                    case 38: if (event.ctrlKey || event.metaKey) {
                        $.datepicker._adjustDate(event.target, -7, "D");
                    }
                        handled = event.ctrlKey || event.metaKey;
                        break; // -1 week on ctrl or command +up
                    case 39: if (event.ctrlKey || event.metaKey) {
                        $.datepicker._adjustDate(event.target, (isRTL ? -1 : +1), "D");
                    }
                        handled = event.ctrlKey || event.metaKey;

                        // +1 day on ctrl or command +right
                        if (event.originalEvent.altKey) {
                            $.datepicker._adjustDate(event.target, (event.ctrlKey ?
                                +$.datepicker._get(inst, "stepBigMonths") :
                                +$.datepicker._get(inst, "stepMonths")), "M");
                        }

                        // next month/year on alt +right
                        break;
                    case 40: if (event.ctrlKey || event.metaKey) {
                        $.datepicker._adjustDate(event.target, +7, "D");
                    }
                        handled = event.ctrlKey || event.metaKey;
                        break; // +1 week on ctrl or command +down
                    default: handled = false;
                }
            } else if (event.keyCode === 36 && event.ctrlKey) { // display the date picker on ctrl+home
                $.datepicker._showDatepicker(this);
            } else {
                handled = false;
            }

            if (handled) {
                event.preventDefault();
                event.stopPropagation();
            }
        },

        /* Filter entered characters - based on date format. */
        _doKeyPress: function (event) {
            var chars, chr,
                inst = $.datepicker._getInst(event.target);

            if ($.datepicker._get(inst, "constrainInput")) {
                chars = $.datepicker._possibleChars($.datepicker._get(inst, "dateFormat"));
                chr = String.fromCharCode(event.charCode == null ? event.keyCode : event.charCode);
                return event.ctrlKey || event.metaKey || (chr < " " || !chars || chars.indexOf(chr) > -1);
            }
        },

        /* Synchronise manual entry and field/alternate field. */
        _doKeyUp: function (event) {
            var date,
                inst = $.datepicker._getInst(event.target);

            if (inst.input.val() !== inst.lastVal) {
                try {
                    date = $.datepicker.parseDate($.datepicker._get(inst, "dateFormat"),
                        (inst.input ? inst.input.val() : null),
                        $.datepicker._getFormatConfig(inst));

                    if (date) { // only if valid
                        $.datepicker._setDateFromField(inst);
                        $.datepicker._updateAlternate(inst);
                        $.datepicker._updateDatepicker(inst);
                    }
                }
                catch (err) {
                }
            }
            return true;
        },

        /* Pop-up the date picker for a given input field.
         * If false returned from beforeShow event handler do not show.
         * @param  input  element - the input field attached to the date picker or
         *					event - if triggered by focus
         */
        _showDatepicker: function (input) {
            input = input.target || input;
            if (input.nodeName.toLowerCase() !== "input") { // find from button/image trigger
                input = $("input", input.parentNode)[0];
            }

            if ($.datepicker._isDisabledDatepicker(input) || $.datepicker._lastInput === input) { // already here
                return;
            }

            var inst, beforeShow, beforeShowSettings, isFixed,
                offset, showAnim, duration;

            inst = $.datepicker._getInst(input);
            if ($.datepicker._curInst && $.datepicker._curInst !== inst) {
                $.datepicker._curInst.dpDiv.stop(true, true);
                if (inst && $.datepicker._datepickerShowing) {
                    $.datepicker._hideDatepicker($.datepicker._curInst.input[0]);
                }
            }

            beforeShow = $.datepicker._get(inst, "beforeShow");
            beforeShowSettings = beforeShow ? beforeShow.apply(input, [input, inst]) : {};
            if (beforeShowSettings === false) {
                return;
            }
            datepicker_extendRemove(inst.settings, beforeShowSettings);

            inst.lastVal = null;
            $.datepicker._lastInput = input;
            $.datepicker._setDateFromField(inst);

            if ($.datepicker._inDialog) { // hide cursor
                input.value = "";
            }
            if (!$.datepicker._pos) { // position below input
                $.datepicker._pos = $.datepicker._findPos(input);
                $.datepicker._pos[1] += input.offsetHeight; // add the height
            }

            isFixed = false;
            $(input).parents().each(function () {
                isFixed |= $(this).css("position") === "fixed";
                return !isFixed;
            });

            offset = { left: $.datepicker._pos[0], top: $.datepicker._pos[1] };
            $.datepicker._pos = null;

            //to avoid flashes on Firefox
            inst.dpDiv.empty();

            // determine sizing offscreen
            inst.dpDiv.css({ position: "absolute", display: "block", top: "-1000px" });
            $.datepicker._updateDatepicker(inst);

            // fix width for dynamic number of date pickers
            // and adjust position before showing
            offset = $.datepicker._checkOffset(inst, offset, isFixed);
            inst.dpDiv.css({
                position: ($.datepicker._inDialog && $.blockUI ?
                    "static" : (isFixed ? "fixed" : "absolute")), display: "none",
                left: offset.left + "px", top: offset.top + "px"
            });

            if (!inst.inline) {
                showAnim = $.datepicker._get(inst, "showAnim");
                duration = $.datepicker._get(inst, "duration");
                inst.dpDiv.css("z-index", datepicker_getZindex($(input)) + 1);
                $.datepicker._datepickerShowing = true;

                if ($.effects && $.effects.effect[showAnim]) {
                    inst.dpDiv.show(showAnim, $.datepicker._get(inst, "showOptions"), duration);
                } else {
                    inst.dpDiv[showAnim || "show"](showAnim ? duration : null);
                }

                if ($.datepicker._shouldFocusInput(inst)) {
                    inst.input.trigger("focus");
                }

                $.datepicker._curInst = inst;
            }
        },

        /* Generate the date picker content. */
        _updateDatepicker: function (inst) {
            this.maxRows = 4; //Reset the max number of rows being displayed (see #7043)
            datepicker_instActive = inst; // for delegate hover events
            inst.dpDiv.empty().append(this._generateHTML(inst));
            this._attachHandlers(inst);

            var origyearshtml,
                numMonths = this._getNumberOfMonths(inst),
                cols = numMonths[1],
                width = 17,
                activeCell = inst.dpDiv.find("." + this._dayOverClass + " a");

            if (activeCell.length > 0) {
                datepicker_handleMouseover.apply(activeCell.get(0));
            }

            inst.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");
            if (cols > 1) {
                inst.dpDiv.addClass("ui-datepicker-multi-" + cols).css("width", (width * cols) + "em");
            }
            inst.dpDiv[(numMonths[0] !== 1 || numMonths[1] !== 1 ? "add" : "remove") +
                "Class"]("ui-datepicker-multi");
            inst.dpDiv[(this._get(inst, "isRTL") ? "add" : "remove") +
                "Class"]("ui-datepicker-rtl");

            if (inst === $.datepicker._curInst && $.datepicker._datepickerShowing && $.datepicker._shouldFocusInput(inst)) {
                inst.input.trigger("focus");
            }

            // Deffered render of the years select (to avoid flashes on Firefox)
            if (inst.yearshtml) {
                origyearshtml = inst.yearshtml;
                setTimeout(function () {

                    //assure that inst.yearshtml didn't change.
                    if (origyearshtml === inst.yearshtml && inst.yearshtml) {
                        inst.dpDiv.find("select.ui-datepicker-year:first").replaceWith(inst.yearshtml);
                    }
                    origyearshtml = inst.yearshtml = null;
                }, 0);
            }
        },

        // #6694 - don't focus the input if it's already focused
        // this breaks the change event in IE
        // Support: IE and jQuery <1.9
        _shouldFocusInput: function (inst) {
            return inst.input && inst.input.is(":visible") && !inst.input.is(":disabled") && !inst.input.is(":focus");
        },

        /* Check positioning to remain on screen. */
        _checkOffset: function (inst, offset, isFixed) {
            var dpWidth = inst.dpDiv.outerWidth(),
                dpHeight = inst.dpDiv.outerHeight(),
                inputWidth = inst.input ? inst.input.outerWidth() : 0,
                inputHeight = inst.input ? inst.input.outerHeight() : 0,
                viewWidth = document.documentElement.clientWidth + (isFixed ? 0 : $(document).scrollLeft()),
                viewHeight = document.documentElement.clientHeight + (isFixed ? 0 : $(document).scrollTop());

            offset.left -= (this._get(inst, "isRTL") ? (dpWidth - inputWidth) : 0);
            offset.left -= (isFixed && offset.left === inst.input.offset().left) ? $(document).scrollLeft() : 0;
            offset.top -= (isFixed && offset.top === (inst.input.offset().top + inputHeight)) ? $(document).scrollTop() : 0;

            // Now check if datepicker is showing outside window viewport - move to a better place if so.
            offset.left -= Math.min(offset.left, (offset.left + dpWidth > viewWidth && viewWidth > dpWidth) ?
                Math.abs(offset.left + dpWidth - viewWidth) : 0);
            offset.top -= Math.min(offset.top, (offset.top + dpHeight > viewHeight && viewHeight > dpHeight) ?
                Math.abs(dpHeight + inputHeight) : 0);

            return offset;
        },

        /* Find an object's position on the screen. */
        _findPos: function (obj) {
            var position,
                inst = this._getInst(obj),
                isRTL = this._get(inst, "isRTL");

            while (obj && (obj.type === "hidden" || obj.nodeType !== 1 || $.expr.filters.hidden(obj))) {
                obj = obj[isRTL ? "previousSibling" : "nextSibling"];
            }

            position = $(obj).offset();
            return [position.left, position.top];
        },

        /* Hide the date picker from view.
         * @param  input  element - the input field attached to the date picker
         */
        _hideDatepicker: function (input) {
            var showAnim, duration, postProcess, onClose,
                inst = this._curInst;

            if (!inst || (input && inst !== $.data(input, "datepicker"))) {
                return;
            }

            if (this._datepickerShowing) {
                showAnim = this._get(inst, "showAnim");
                duration = this._get(inst, "duration");
                postProcess = function () {
                    $.datepicker._tidyDialog(inst);
                };

                // DEPRECATED: after BC for 1.8.x $.effects[ showAnim ] is not needed
                if ($.effects && ($.effects.effect[showAnim] || $.effects[showAnim])) {
                    inst.dpDiv.hide(showAnim, $.datepicker._get(inst, "showOptions"), duration, postProcess);
                } else {
                    inst.dpDiv[(showAnim === "slideDown" ? "slideUp" :
                        (showAnim === "fadeIn" ? "fadeOut" : "hide"))]((showAnim ? duration : null), postProcess);
                }

                if (!showAnim) {
                    postProcess();
                }
                this._datepickerShowing = false;

                onClose = this._get(inst, "onClose");
                if (onClose) {
                    onClose.apply((inst.input ? inst.input[0] : null), [(inst.input ? inst.input.val() : ""), inst]);
                }

                this._lastInput = null;
                if (this._inDialog) {
                    this._dialogInput.css({ position: "absolute", left: "0", top: "-100px" });
                    if ($.blockUI) {
                        $.unblockUI();
                        $("body").append(this.dpDiv);
                    }
                }
                this._inDialog = false;
            }
        },

        /* Tidy up after a dialog display. */
        _tidyDialog: function (inst) {
            inst.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar");
        },

        /* Close date picker if clicked elsewhere. */
        _checkExternalClick: function (event) {
            if (!$.datepicker._curInst) {
                return;
            }

            var $target = $(event.target),
                inst = $.datepicker._getInst($target[0]);

            if ((($target[0].id !== $.datepicker._mainDivId &&
                $target.parents("#" + $.datepicker._mainDivId).length === 0 &&
                !$target.hasClass($.datepicker.markerClassName) &&
                !$target.closest("." + $.datepicker._triggerClass).length &&
                $.datepicker._datepickerShowing && !($.datepicker._inDialog && $.blockUI))) ||
                ($target.hasClass($.datepicker.markerClassName) && $.datepicker._curInst !== inst)) {
                $.datepicker._hideDatepicker();
            }
        },

        /* Adjust one of the date sub-fields. */
        _adjustDate: function (id, offset, period) {
            var target = $(id),
                inst = this._getInst(target[0]);

            if (this._isDisabledDatepicker(target[0])) {
                return;
            }
            this._adjustInstDate(inst, offset +
                (period === "M" ? this._get(inst, "showCurrentAtPos") : 0), // undo positioning
                period);
            this._updateDatepicker(inst);
        },

        /* Action for current link. */
        _gotoToday: function (id) {
            var date,
                target = $(id),
                inst = this._getInst(target[0]);

            if (this._get(inst, "gotoCurrent") && inst.currentDay) {
                inst.selectedDay = inst.currentDay;
                inst.drawMonth = inst.selectedMonth = inst.currentMonth;
                inst.drawYear = inst.selectedYear = inst.currentYear;
            } else {
                date = new Date();
                inst.selectedDay = date.getDate();
                inst.drawMonth = inst.selectedMonth = date.getMonth();
                inst.drawYear = inst.selectedYear = date.getFullYear();
            }
            this._notifyChange(inst);
            this._adjustDate(target);
        },

        /* Action for selecting a new month/year. */
        _selectMonthYear: function (id, select, period) {
            var target = $(id),
                inst = this._getInst(target[0]);

            inst["selected" + (period === "M" ? "Month" : "Year")] =
                inst["draw" + (period === "M" ? "Month" : "Year")] =
                parseInt(select.options[select.selectedIndex].value, 10);

            this._notifyChange(inst);
            this._adjustDate(target);
        },

        /* Action for selecting a day. */
        _selectDay: function (id, month, year, td) {
            var inst,
                target = $(id);

            if ($(td).hasClass(this._unselectableClass) || this._isDisabledDatepicker(target[0])) {
                return;
            }

            inst = this._getInst(target[0]);
            inst.selectedDay = inst.currentDay = $("a", td).html();
            inst.selectedMonth = inst.currentMonth = month;
            inst.selectedYear = inst.currentYear = year;
            this._selectDate(id, this._formatDate(inst,
                inst.currentDay, inst.currentMonth, inst.currentYear));
        },

        /* Erase the input field and hide the date picker. */
        _clearDate: function (id) {
            var target = $(id);
            this._selectDate(target, "");
        },

        /* Update the input field with the selected date. */
        _selectDate: function (id, dateStr) {
            var onSelect,
                target = $(id),
                inst = this._getInst(target[0]);

            dateStr = (dateStr != null ? dateStr : this._formatDate(inst));
            if (inst.input) {
                inst.input.val(dateStr);
            }
            this._updateAlternate(inst);

            onSelect = this._get(inst, "onSelect");
            if (onSelect) {
                onSelect.apply((inst.input ? inst.input[0] : null), [dateStr, inst]);  // trigger custom callback
            } else if (inst.input) {
                inst.input.trigger("change"); // fire the change event
            }

            if (inst.inline) {
                this._updateDatepicker(inst);
            } else {
                this._hideDatepicker();
                this._lastInput = inst.input[0];
                if (typeof (inst.input[0]) !== "object") {
                    inst.input.trigger("focus"); // restore focus
                }
                this._lastInput = null;
            }
        },

        /* Update any alternate field to synchronise with the main field. */
        _updateAlternate: function (inst) {
            var altFormat, date, dateStr,
                altField = this._get(inst, "altField");

            if (altField) { // update alternate field too
                altFormat = this._get(inst, "altFormat") || this._get(inst, "dateFormat");
                date = this._getDate(inst);
                dateStr = this.formatDate(altFormat, date, this._getFormatConfig(inst));
                $(altField).val(dateStr);
            }
        },

        /* Set as beforeShowDay function to prevent selection of weekends.
         * @param  date  Date - the date to customise
         * @return [boolean, string] - is this date selectable?, what is its CSS class?
         */
        noWeekends: function (date) {
            var day = date.getDay();
            return [(day > 0 && day < 6), ""];
        },

        /* Set as calculateWeek to determine the week of the year based on the ISO 8601 definition.
         * @param  date  Date - the date to get the week for
         * @return  number - the number of the week within the year that contains this date
         */
        iso8601Week: function (date) {
            var time,
                checkDate = new Date(date.getTime());

            // Find Thursday of this week starting on Monday
            checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));

            time = checkDate.getTime();
            checkDate.setMonth(0); // Compare with Jan 1
            checkDate.setDate(1);
            return Math.floor(Math.round((time - checkDate) / 86400000) / 7) + 1;
        },

        /* Parse a string value into a date object.
         * See formatDate below for the possible formats.
         *
         * @param  format string - the expected format of the date
         * @param  value string - the date in the above format
         * @param  settings Object - attributes include:
         *					shortYearCutoff  number - the cutoff year for determining the century (optional)
         *					dayNamesShort	string[7] - abbreviated names of the days from Sunday (optional)
         *					dayNames		string[7] - names of the days from Sunday (optional)
         *					monthNamesShort string[12] - abbreviated names of the months (optional)
         *					monthNames		string[12] - names of the months (optional)
         * @return  Date - the extracted date value or null if value is blank
         */
        parseDate: function (format, value, settings) {
            if (format == null || value == null) {
                throw "Invalid arguments";
            }

            value = (typeof value === "object" ? value.toString() : value + "");
            if (value === "") {
                return null;
            }

            var iFormat, dim, extra,
                iValue = 0,
                shortYearCutoffTemp = (settings ? settings.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                shortYearCutoff = (typeof shortYearCutoffTemp !== "string" ? shortYearCutoffTemp :
                    new Date().getFullYear() % 100 + parseInt(shortYearCutoffTemp, 10)),
                dayNamesShort = (settings ? settings.dayNamesShort : null) || this._defaults.dayNamesShort,
                dayNames = (settings ? settings.dayNames : null) || this._defaults.dayNames,
                monthNamesShort = (settings ? settings.monthNamesShort : null) || this._defaults.monthNamesShort,
                monthNames = (settings ? settings.monthNames : null) || this._defaults.monthNames,
                year = -1,
                month = -1,
                day = -1,
                doy = -1,
                literal = false,
                date,

                // Check whether a format character is doubled
                lookAhead = function (match) {
                    var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) === match);
                    if (matches) {
                        iFormat++;
                    }
                    return matches;
                },

                // Extract a number from the string value
                getNumber = function (match) {
                    var isDoubled = lookAhead(match),
                        size = (match === "@" ? 14 : (match === "!" ? 20 :
                            (match === "y" && isDoubled ? 4 : (match === "o" ? 3 : 2)))),
                        minSize = (match === "y" ? size : 1),
                        digits = new RegExp("^\\d{" + minSize + "," + size + "}"),
                        num = value.substring(iValue).match(digits);
                    if (!num) {
                        throw "Missing number at position " + iValue;
                    }
                    iValue += num[0].length;
                    return parseInt(num[0], 10);
                },

                // Extract a name from the string value and convert to an index
                getName = function (match, shortNames, longNames) {
                    var index = -1,
                        names = $.map(lookAhead(match) ? longNames : shortNames, function (v, k) {
                            return [[k, v]];
                        }).sort(function (a, b) {
                            return -(a[1].length - b[1].length);
                        });

                    $.each(names, function (i, pair) {
                        var name = pair[1];
                        if (value.substr(iValue, name.length).toLowerCase() === name.toLowerCase()) {
                            index = pair[0];
                            iValue += name.length;
                            return false;
                        }
                    });
                    if (index !== -1) {
                        return index + 1;
                    } else {
                        throw "Unknown name at position " + iValue;
                    }
                },

                // Confirm that a literal character matches the string value
                checkLiteral = function () {
                    if (value.charAt(iValue) !== format.charAt(iFormat)) {
                        throw "Unexpected literal at position " + iValue;
                    }
                    iValue++;
                };

            for (iFormat = 0; iFormat < format.length; iFormat++) {
                if (literal) {
                    if (format.charAt(iFormat) === "'" && !lookAhead("'")) {
                        literal = false;
                    } else {
                        checkLiteral();
                    }
                } else {
                    switch (format.charAt(iFormat)) {
                        case "d":
                            day = getNumber("d");
                            break;
                        case "D":
                            getName("D", dayNamesShort, dayNames);
                            break;
                        case "o":
                            doy = getNumber("o");
                            break;
                        case "m":
                            month = getNumber("m");
                            break;
                        case "M":
                            month = getName("M", monthNamesShort, monthNames);
                            break;
                        case "y":
                            year = getNumber("y");
                            break;
                        case "@":
                            date = new Date(getNumber("@"));
                            year = date.getFullYear();
                            month = date.getMonth() + 1;
                            day = date.getDate();
                            break;
                        case "!":
                            date = new Date((getNumber("!") - this._ticksTo1970) / 10000);
                            year = date.getFullYear();
                            month = date.getMonth() + 1;
                            day = date.getDate();
                            break;
                        case "'":
                            if (lookAhead("'")) {
                                checkLiteral();
                            } else {
                                literal = true;
                            }
                            break;
                        default:
                            checkLiteral();
                    }
                }
            }

            if (iValue < value.length) {
                extra = value.substr(iValue);
                if (!/^\s+/.test(extra)) {
                    throw "Extra/unparsed characters found in date: " + extra;
                }
            }

            if (year === -1) {
                year = new Date().getFullYear();
            } else if (year < 100) {
                year += new Date().getFullYear() - new Date().getFullYear() % 100 +
                    (year <= shortYearCutoff ? 0 : -100);
            }

            if (doy > -1) {
                month = 1;
                day = doy;
                do {
                    dim = this._getDaysInMonth(year, month - 1);
                    if (day <= dim) {
                        break;
                    }
                    month++;
                    day -= dim;
                } while (true);
            }

            date = this._daylightSavingAdjust(new Date(year, month - 1, day));
            if (date.getFullYear() !== year || date.getMonth() + 1 !== month || date.getDate() !== day) {
                throw "Invalid date"; // E.g. 31/02/00
            }
            return date;
        },

        /* Standard date formats. */
        ATOM: "yy-mm-dd", // RFC 3339 (ISO 8601)
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y", // RFC 822
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd", // ISO 8601

        _ticksTo1970: (((1970 - 1) * 365 + Math.floor(1970 / 4) - Math.floor(1970 / 100) +
            Math.floor(1970 / 400)) * 24 * 60 * 60 * 10000000),

        /* Format a date object into a string value.
         * The format can be combinations of the following:
         * d  - day of month (no leading zero)
         * dd - day of month (two digit)
         * o  - day of year (no leading zeros)
         * oo - day of year (three digit)
         * D  - day name short
         * DD - day name long
         * m  - month of year (no leading zero)
         * mm - month of year (two digit)
         * M  - month name short
         * MM - month name long
         * y  - year (two digit)
         * yy - year (four digit)
         * @ - Unix timestamp (ms since 01/01/1970)
         * ! - Windows ticks (100ns since 01/01/0001)
         * "..." - literal text
         * '' - single quote
         *
         * @param  format string - the desired format of the date
         * @param  date Date - the date value to format
         * @param  settings Object - attributes include:
         *					dayNamesShort	string[7] - abbreviated names of the days from Sunday (optional)
         *					dayNames		string[7] - names of the days from Sunday (optional)
         *					monthNamesShort string[12] - abbreviated names of the months (optional)
         *					monthNames		string[12] - names of the months (optional)
         * @return  string - the date in the above format
         */
        formatDate: function (format, date, settings) {
            if (!date) {
                return "";
            }

            var iFormat,
                dayNamesShort = (settings ? settings.dayNamesShort : null) || this._defaults.dayNamesShort,
                dayNames = (settings ? settings.dayNames : null) || this._defaults.dayNames,
                monthNamesShort = (settings ? settings.monthNamesShort : null) || this._defaults.monthNamesShort,
                monthNames = (settings ? settings.monthNames : null) || this._defaults.monthNames,

                // Check whether a format character is doubled
                lookAhead = function (match) {
                    var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) === match);
                    if (matches) {
                        iFormat++;
                    }
                    return matches;
                },

                // Format a number, with leading zero if necessary
                formatNumber = function (match, value, len) {
                    var num = "" + value;
                    if (lookAhead(match)) {
                        while (num.length < len) {
                            num = "0" + num;
                        }
                    }
                    return num;
                },

                // Format a name, short or long as requested
                formatName = function (match, value, shortNames, longNames) {
                    return (lookAhead(match) ? longNames[value] : shortNames[value]);
                },
                output = "",
                literal = false;

            if (date) {
                for (iFormat = 0; iFormat < format.length; iFormat++) {
                    if (literal) {
                        if (format.charAt(iFormat) === "'" && !lookAhead("'")) {
                            literal = false;
                        } else {
                            output += format.charAt(iFormat);
                        }
                    } else {
                        switch (format.charAt(iFormat)) {
                            case "d":
                                output += formatNumber("d", date.getDate(), 2);
                                break;
                            case "D":
                                output += formatName("D", date.getDay(), dayNamesShort, dayNames);
                                break;
                            case "o":
                                output += formatNumber("o",
                                    Math.round((new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86400000), 3);
                                break;
                            case "m":
                                output += formatNumber("m", date.getMonth() + 1, 2);
                                break;
                            case "M":
                                output += formatName("M", date.getMonth(), monthNamesShort, monthNames);
                                break;
                            case "y":
                                output += (lookAhead("y") ? date.getFullYear() :
                                    (date.getFullYear() % 100 < 10 ? "0" : "") + date.getFullYear() % 100);
                                break;
                            case "@":
                                output += date.getTime();
                                break;
                            case "!":
                                output += date.getTime() * 10000 + this._ticksTo1970;
                                break;
                            case "'":
                                if (lookAhead("'")) {
                                    output += "'";
                                } else {
                                    literal = true;
                                }
                                break;
                            default:
                                output += format.charAt(iFormat);
                        }
                    }
                }
            }
            return output;
        },

        /* Extract all possible characters from the date format. */
        _possibleChars: function (format) {
            var iFormat,
                chars = "",
                literal = false,

                // Check whether a format character is doubled
                lookAhead = function (match) {
                    var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) === match);
                    if (matches) {
                        iFormat++;
                    }
                    return matches;
                };

            for (iFormat = 0; iFormat < format.length; iFormat++) {
                if (literal) {
                    if (format.charAt(iFormat) === "'" && !lookAhead("'")) {
                        literal = false;
                    } else {
                        chars += format.charAt(iFormat);
                    }
                } else {
                    switch (format.charAt(iFormat)) {
                        case "d": case "m": case "y": case "@":
                            chars += "0123456789";
                            break;
                        case "D": case "M":
                            return null; // Accept anything
                        case "'":
                            if (lookAhead("'")) {
                                chars += "'";
                            } else {
                                literal = true;
                            }
                            break;
                        default:
                            chars += format.charAt(iFormat);
                    }
                }
            }
            return chars;
        },

        /* Get a setting value, defaulting if necessary. */
        _get: function (inst, name) {
            return inst.settings[name] !== undefined ?
                inst.settings[name] : this._defaults[name];
        },

        /* Parse existing date and initialise date picker. */
        _setDateFromField: function (inst, noDefault) {
            if (inst.input.val() === inst.lastVal) {
                return;
            }

            var dateFormat = this._get(inst, "dateFormat"),
                dates = inst.lastVal = inst.input ? inst.input.val() : null,
                defaultDate = this._getDefaultDate(inst),
                date = defaultDate,
                settings = this._getFormatConfig(inst);

            try {
                date = this.parseDate(dateFormat, dates, settings) || defaultDate;
            } catch (event) {
                dates = (noDefault ? "" : dates);
            }
            inst.selectedDay = date.getDate();
            inst.drawMonth = inst.selectedMonth = date.getMonth();
            inst.drawYear = inst.selectedYear = date.getFullYear();
            inst.currentDay = (dates ? date.getDate() : 0);
            inst.currentMonth = (dates ? date.getMonth() : 0);
            inst.currentYear = (dates ? date.getFullYear() : 0);
            this._adjustInstDate(inst);
        },

        /* Retrieve the default date shown on opening. */
        _getDefaultDate: function (inst) {
            return this._restrictMinMax(inst,
                this._determineDate(inst, this._get(inst, "defaultDate"), new Date()));
        },

        /* A date may be specified as an exact value or a relative one. */
        _determineDate: function (inst, date, defaultDate) {
            var offsetNumeric = function (offset) {
                var date = new Date();
                date.setDate(date.getDate() + offset);
                return date;
            },
                offsetString = function (offset) {
                    try {
                        return $.datepicker.parseDate($.datepicker._get(inst, "dateFormat"),
                            offset, $.datepicker._getFormatConfig(inst));
                    }
                    catch (e) {

                        // Ignore
                    }

                    var date = (offset.toLowerCase().match(/^c/) ?
                        $.datepicker._getDate(inst) : null) || new Date(),
                        year = date.getFullYear(),
                        month = date.getMonth(),
                        day = date.getDate(),
                        pattern = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,
                        matches = pattern.exec(offset);

                    while (matches) {
                        switch (matches[2] || "d") {
                            case "d": case "D":
                                day += parseInt(matches[1], 10); break;
                            case "w": case "W":
                                day += parseInt(matches[1], 10) * 7; break;
                            case "m": case "M":
                                month += parseInt(matches[1], 10);
                                day = Math.min(day, $.datepicker._getDaysInMonth(year, month));
                                break;
                            case "y": case "Y":
                                year += parseInt(matches[1], 10);
                                day = Math.min(day, $.datepicker._getDaysInMonth(year, month));
                                break;
                        }
                        matches = pattern.exec(offset);
                    }
                    return new Date(year, month, day);
                },
                newDate = (date == null || date === "" ? defaultDate : (typeof date === "string" ? offsetString(date) :
                    (typeof date === "number" ? (isNaN(date) ? defaultDate : offsetNumeric(date)) : new Date(date.getTime()))));

            newDate = (newDate && newDate.toString() === "Invalid Date" ? defaultDate : newDate);
            if (newDate) {
                newDate.setHours(0);
                newDate.setMinutes(0);
                newDate.setSeconds(0);
                newDate.setMilliseconds(0);
            }
            return this._daylightSavingAdjust(newDate);
        },

        /* Handle switch to/from daylight saving.
         * Hours may be non-zero on daylight saving cut-over:
         * > 12 when midnight changeover, but then cannot generate
         * midnight datetime, so jump to 1AM, otherwise reset.
         * @param  date  (Date) the date to check
         * @return  (Date) the corrected date
         */
        _daylightSavingAdjust: function (date) {
            if (!date) {
                return null;
            }
            date.setHours(date.getHours() > 12 ? date.getHours() + 2 : 0);
            return date;
        },

        /* Set the date(s) directly. */
        _setDate: function (inst, date, noChange) {
            var clear = !date,
                origMonth = inst.selectedMonth,
                origYear = inst.selectedYear,
                newDate = this._restrictMinMax(inst, this._determineDate(inst, date, new Date()));

            inst.selectedDay = inst.currentDay = newDate.getDate();
            inst.drawMonth = inst.selectedMonth = inst.currentMonth = newDate.getMonth();
            inst.drawYear = inst.selectedYear = inst.currentYear = newDate.getFullYear();
            if ((origMonth !== inst.selectedMonth || origYear !== inst.selectedYear) && !noChange) {
                this._notifyChange(inst);
            }
            this._adjustInstDate(inst);
            if (inst.input) {
                inst.input.val(clear ? "" : this._formatDate(inst));
            }
        },

        /* Retrieve the date(s) directly. */
        _getDate: function (inst) {
            var startDate = (!inst.currentYear || (inst.input && inst.input.val() === "") ? null :
                this._daylightSavingAdjust(new Date(
                    inst.currentYear, inst.currentMonth, inst.currentDay)));
            return startDate;
        },

        /* Attach the onxxx handlers.  These are declared statically so
         * they work with static code transformers like Caja.
         */
        _attachHandlers: function (inst) {
            var stepMonths = this._get(inst, "stepMonths"),
                id = "#" + inst.id.replace(/\\\\/g, "\\");
            inst.dpDiv.find("[data-handler]").map(function () {
                var handler = {
                    prev: function () {
                        $.datepicker._adjustDate(id, -stepMonths, "M");
                    },
                    next: function () {
                        $.datepicker._adjustDate(id, +stepMonths, "M");
                    },
                    hide: function () {
                        $.datepicker._hideDatepicker();
                    },
                    today: function () {
                        $.datepicker._gotoToday(id);
                    },
                    selectDay: function () {
                        $.datepicker._selectDay(id, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this);
                        return false;
                    },
                    selectMonth: function () {
                        $.datepicker._selectMonthYear(id, this, "M");
                        return false;
                    },
                    selectYear: function () {
                        $.datepicker._selectMonthYear(id, this, "Y");
                        return false;
                    }
                };
                $(this).on(this.getAttribute("data-event"), handler[this.getAttribute("data-handler")]);
            });
        },

        /* Generate the HTML for the current state of the date picker. */
        _generateHTML: function (inst) {
            var maxDraw, prevText, prev, nextText, next, currentText, gotoDate,
                controls, buttonPanel, firstDay, showWeek, dayNames, dayNamesMin,
                monthNames, monthNamesShort, beforeShowDay, showOtherMonths,
                selectOtherMonths, defaultDate, html, dow, row, group, col, selectedDate,
                cornerClass, calender, thead, day, daysInMonth, leadDays, curRows, numRows,
                printDate, dRow, tbody, daySettings, otherMonth, unselectable,
                tempDate = new Date(),
                today = this._daylightSavingAdjust(
                    new Date(tempDate.getFullYear(), tempDate.getMonth(), tempDate.getDate())), // clear time
                isRTL = this._get(inst, "isRTL"),
                showButtonPanel = this._get(inst, "showButtonPanel"),
                hideIfNoPrevNext = this._get(inst, "hideIfNoPrevNext"),
                navigationAsDateFormat = this._get(inst, "navigationAsDateFormat"),
                numMonths = this._getNumberOfMonths(inst),
                showCurrentAtPos = this._get(inst, "showCurrentAtPos"),
                stepMonths = this._get(inst, "stepMonths"),
                isMultiMonth = (numMonths[0] !== 1 || numMonths[1] !== 1),
                currentDate = this._daylightSavingAdjust((!inst.currentDay ? new Date(9999, 9, 9) :
                    new Date(inst.currentYear, inst.currentMonth, inst.currentDay))),
                minDate = this._getMinMaxDate(inst, "min"),
                maxDate = this._getMinMaxDate(inst, "max"),
                drawMonth = inst.drawMonth - showCurrentAtPos,
                drawYear = inst.drawYear;

            if (drawMonth < 0) {
                drawMonth += 12;
                drawYear--;
            }
            if (maxDate) {
                maxDraw = this._daylightSavingAdjust(new Date(maxDate.getFullYear(),
                    maxDate.getMonth() - (numMonths[0] * numMonths[1]) + 1, maxDate.getDate()));
                maxDraw = (minDate && maxDraw < minDate ? minDate : maxDraw);
                while (this._daylightSavingAdjust(new Date(drawYear, drawMonth, 1)) > maxDraw) {
                    drawMonth--;
                    if (drawMonth < 0) {
                        drawMonth = 11;
                        drawYear--;
                    }
                }
            }
            inst.drawMonth = drawMonth;
            inst.drawYear = drawYear;

            prevText = this._get(inst, "prevText");
            prevText = (!navigationAsDateFormat ? prevText : this.formatDate(prevText,
                this._daylightSavingAdjust(new Date(drawYear, drawMonth - stepMonths, 1)),
                this._getFormatConfig(inst)));

            prev = (this._canAdjustMonth(inst, -1, drawYear, drawMonth) ?
                "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click'" +
                " title='" + prevText + "'><span class='ui-icon ui-icon-circle-triangle-" + (isRTL ? "e" : "w") + "'>" + prevText + "</span></a>" :
                (hideIfNoPrevNext ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + prevText + "'><span class='ui-icon ui-icon-circle-triangle-" + (isRTL ? "e" : "w") + "'>" + prevText + "</span></a>"));

            nextText = this._get(inst, "nextText");
            nextText = (!navigationAsDateFormat ? nextText : this.formatDate(nextText,
                this._daylightSavingAdjust(new Date(drawYear, drawMonth + stepMonths, 1)),
                this._getFormatConfig(inst)));

            next = (this._canAdjustMonth(inst, +1, drawYear, drawMonth) ?
                "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click'" +
                " title='" + nextText + "'><span class='ui-icon ui-icon-circle-triangle-" + (isRTL ? "w" : "e") + "'>" + nextText + "</span></a>" :
                (hideIfNoPrevNext ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + nextText + "'><span class='ui-icon ui-icon-circle-triangle-" + (isRTL ? "w" : "e") + "'>" + nextText + "</span></a>"));

            currentText = this._get(inst, "currentText");
            gotoDate = (this._get(inst, "gotoCurrent") && inst.currentDay ? currentDate : today);
            currentText = (!navigationAsDateFormat ? currentText :
                this.formatDate(currentText, gotoDate, this._getFormatConfig(inst)));

            controls = (!inst.inline ? "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" +
                this._get(inst, "closeText") + "</button>" : "");

            buttonPanel = (showButtonPanel) ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (isRTL ? controls : "") +
                (this._isInRange(inst, gotoDate) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'" +
                    ">" + currentText + "</button>" : "") + (isRTL ? "" : controls) + "</div>" : "";

            firstDay = parseInt(this._get(inst, "firstDay"), 10);
            firstDay = (isNaN(firstDay) ? 0 : firstDay);

            showWeek = this._get(inst, "showWeek");
            dayNames = this._get(inst, "dayNames");
            dayNamesMin = this._get(inst, "dayNamesMin");
            monthNames = this._get(inst, "monthNames");
            monthNamesShort = this._get(inst, "monthNamesShort");
            beforeShowDay = this._get(inst, "beforeShowDay");
            showOtherMonths = this._get(inst, "showOtherMonths");
            selectOtherMonths = this._get(inst, "selectOtherMonths");
            defaultDate = this._getDefaultDate(inst);
            html = "";

            for (row = 0; row < numMonths[0]; row++) {
                group = "";
                this.maxRows = 4;
                for (col = 0; col < numMonths[1]; col++) {
                    selectedDate = this._daylightSavingAdjust(new Date(drawYear, drawMonth, inst.selectedDay));
                    cornerClass = " ui-corner-all";
                    calender = "";
                    if (isMultiMonth) {
                        calender += "<div class='ui-datepicker-group";
                        if (numMonths[1] > 1) {
                            switch (col) {
                                case 0: calender += " ui-datepicker-group-first";
                                    cornerClass = " ui-corner-" + (isRTL ? "right" : "left"); break;
                                case numMonths[1] - 1: calender += " ui-datepicker-group-last";
                                    cornerClass = " ui-corner-" + (isRTL ? "left" : "right"); break;
                                default: calender += " ui-datepicker-group-middle"; cornerClass = ""; break;
                            }
                        }
                        calender += "'>";
                    }
                    calender += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + cornerClass + "'>" +
                        (/all|left/.test(cornerClass) && row === 0 ? (isRTL ? next : prev) : "") +
                        (/all|right/.test(cornerClass) && row === 0 ? (isRTL ? prev : next) : "") +
                        this._generateMonthYearHeader(inst, drawMonth, drawYear, minDate, maxDate,
                            row > 0 || col > 0, monthNames, monthNamesShort) + // draw month headers
                        "</div><table class='ui-datepicker-calendar'><thead>" +
                        "<tr>";
                    thead = (showWeek ? "<th class='ui-datepicker-week-col'>" + this._get(inst, "weekHeader") + "</th>" : "");
                    for (dow = 0; dow < 7; dow++) { // days of the week
                        day = (dow + firstDay) % 7;
                        thead += "<th scope='col'" + ((dow + firstDay + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + ">" +
                            "<span title='" + dayNames[day] + "'>" + dayNamesMin[day] + "</span></th>";
                    }
                    calender += thead + "</tr></thead><tbody>";
                    daysInMonth = this._getDaysInMonth(drawYear, drawMonth);
                    if (drawYear === inst.selectedYear && drawMonth === inst.selectedMonth) {
                        inst.selectedDay = Math.min(inst.selectedDay, daysInMonth);
                    }
                    leadDays = (this._getFirstDayOfMonth(drawYear, drawMonth) - firstDay + 7) % 7;
                    curRows = Math.ceil((leadDays + daysInMonth) / 7); // calculate the number of rows to generate
                    numRows = (isMultiMonth ? this.maxRows > curRows ? this.maxRows : curRows : curRows); //If multiple months, use the higher number of rows (see #7043)
                    this.maxRows = numRows;
                    printDate = this._daylightSavingAdjust(new Date(drawYear, drawMonth, 1 - leadDays));
                    for (dRow = 0; dRow < numRows; dRow++) { // create date picker rows
                        calender += "<tr>";
                        tbody = (!showWeek ? "" : "<td class='ui-datepicker-week-col'>" +
                            this._get(inst, "calculateWeek")(printDate) + "</td>");
                        for (dow = 0; dow < 7; dow++) { // create date picker days
                            daySettings = (beforeShowDay ?
                                beforeShowDay.apply((inst.input ? inst.input[0] : null), [printDate]) : [true, ""]);
                            otherMonth = (printDate.getMonth() !== drawMonth);
                            unselectable = (otherMonth && !selectOtherMonths) || !daySettings[0] ||
                                (minDate && printDate < minDate) || (maxDate && printDate > maxDate);
                            tbody += "<td class='" +
                                ((dow + firstDay + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + // highlight weekends
                                (otherMonth ? " ui-datepicker-other-month" : "") + // highlight days from other months
                                ((printDate.getTime() === selectedDate.getTime() && drawMonth === inst.selectedMonth && inst._keyEvent) || // user pressed key
                                    (defaultDate.getTime() === printDate.getTime() && defaultDate.getTime() === selectedDate.getTime()) ?

                                    // or defaultDate is current printedDate and defaultDate is selectedDate
                                    " " + this._dayOverClass : "") + // highlight selected day
                                (unselectable ? " " + this._unselectableClass + " ui-state-disabled" : "") +  // highlight unselectable days
                                (otherMonth && !showOtherMonths ? "" : " " + daySettings[1] + // highlight custom dates
                                    (printDate.getTime() === currentDate.getTime() ? " " + this._currentClass : "") + // highlight selected day
                                    (printDate.getTime() === today.getTime() ? " ui-datepicker-today" : "")) + "'" + // highlight today (if different)
                                ((!otherMonth || showOtherMonths) && daySettings[2] ? " title='" + daySettings[2].replace(/'/g, "&#39;") + "'" : "") + // cell title
                                (unselectable ? "" : " data-handler='selectDay' data-event='click' data-month='" + printDate.getMonth() + "' data-year='" + printDate.getFullYear() + "'") + ">" + // actions
                                (otherMonth && !showOtherMonths ? "&#xa0;" : // display for other months
                                    (unselectable ? "<span class='ui-state-default'>" + printDate.getDate() + "</span>" : "<a class='ui-state-default" +
                                        (printDate.getTime() === today.getTime() ? " ui-state-highlight" : "") +
                                        (printDate.getTime() === currentDate.getTime() ? " ui-state-active" : "") + // highlight selected day
                                        (otherMonth ? " ui-priority-secondary" : "") + // distinguish dates from other months
                                        "' href='#'>" + printDate.getDate() + "</a>")) + "</td>"; // display selectable date
                            printDate.setDate(printDate.getDate() + 1);
                            printDate = this._daylightSavingAdjust(printDate);
                        }
                        calender += tbody + "</tr>";
                    }
                    drawMonth++;
                    if (drawMonth > 11) {
                        drawMonth = 0;
                        drawYear++;
                    }
                    calender += "</tbody></table>" + (isMultiMonth ? "</div>" +
                        ((numMonths[0] > 0 && col === numMonths[1] - 1) ? "<div class='ui-datepicker-row-break'></div>" : "") : "");
                    group += calender;
                }
                html += group;
            }
            html += buttonPanel;
            inst._keyEvent = false;
            return html;
        },

        /* Generate the month and year header. */
        _generateMonthYearHeader: function (inst, drawMonth, drawYear, minDate, maxDate,
            secondary, monthNames, monthNamesShort) {

            var inMinYear, inMaxYear, month, years, thisYear, determineYear, year, endYear,
                changeMonth = this._get(inst, "changeMonth"),
                changeYear = this._get(inst, "changeYear"),
                showMonthAfterYear = this._get(inst, "showMonthAfterYear"),
                html = "<div class='ui-datepicker-title'>",
                monthHtml = "";

            // Month selection
            if (secondary || !changeMonth) {
                monthHtml += "<span class='ui-datepicker-month'>" + monthNames[drawMonth] + "</span>";
            } else {
                inMinYear = (minDate && minDate.getFullYear() === drawYear);
                inMaxYear = (maxDate && maxDate.getFullYear() === drawYear);
                monthHtml += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>";
                for (month = 0; month < 12; month++) {
                    if ((!inMinYear || month >= minDate.getMonth()) && (!inMaxYear || month <= maxDate.getMonth())) {
                        monthHtml += "<option value='" + month + "'" +
                            (month === drawMonth ? " selected='selected'" : "") +
                            ">" + monthNamesShort[month] + "</option>";
                    }
                }
                monthHtml += "</select>";
            }

            if (!showMonthAfterYear) {
                html += monthHtml + (secondary || !(changeMonth && changeYear) ? "&#xa0;" : "");
            }

            // Year selection
            if (!inst.yearshtml) {
                inst.yearshtml = "";
                if (secondary || !changeYear) {
                    html += "<span class='ui-datepicker-year'>" + drawYear + "</span>";
                } else {

                    // determine range of years to display
                    years = this._get(inst, "yearRange").split(":");
                    thisYear = new Date().getFullYear();
                    determineYear = function (value) {
                        var year = (value.match(/c[+\-].*/) ? drawYear + parseInt(value.substring(1), 10) :
                            (value.match(/[+\-].*/) ? thisYear + parseInt(value, 10) :
                                parseInt(value, 10)));
                        return (isNaN(year) ? thisYear : year);
                    };
                    year = determineYear(years[0]);
                    endYear = Math.max(year, determineYear(years[1] || ""));
                    year = (minDate ? Math.max(year, minDate.getFullYear()) : year);
                    endYear = (maxDate ? Math.min(endYear, maxDate.getFullYear()) : endYear);
                    inst.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";
                    for (; year <= endYear; year++) {
                        inst.yearshtml += "<option value='" + year + "'" +
                            (year === drawYear ? " selected='selected'" : "") +
                            ">" + year + "</option>";
                    }
                    inst.yearshtml += "</select>";

                    html += inst.yearshtml;
                    inst.yearshtml = null;
                }
            }

            html += this._get(inst, "yearSuffix");
            if (showMonthAfterYear) {
                html += (secondary || !(changeMonth && changeYear) ? "&#xa0;" : "") + monthHtml;
            }
            html += "</div>"; // Close datepicker_header
            return html;
        },

        /* Adjust one of the date sub-fields. */
        _adjustInstDate: function (inst, offset, period) {
            var year = inst.selectedYear + (period === "Y" ? offset : 0),
                month = inst.selectedMonth + (period === "M" ? offset : 0),
                day = Math.min(inst.selectedDay, this._getDaysInMonth(year, month)) + (period === "D" ? offset : 0),
                date = this._restrictMinMax(inst, this._daylightSavingAdjust(new Date(year, month, day)));

            inst.selectedDay = date.getDate();
            inst.drawMonth = inst.selectedMonth = date.getMonth();
            inst.drawYear = inst.selectedYear = date.getFullYear();
            if (period === "M" || period === "Y") {
                this._notifyChange(inst);
            }
        },

        /* Ensure a date is within any min/max bounds. */
        _restrictMinMax: function (inst, date) {
            var minDate = this._getMinMaxDate(inst, "min"),
                maxDate = this._getMinMaxDate(inst, "max"),
                newDate = (minDate && date < minDate ? minDate : date);
            return (maxDate && newDate > maxDate ? maxDate : newDate);
        },

        /* Notify change of month/year. */
        _notifyChange: function (inst) {
            var onChange = this._get(inst, "onChangeMonthYear");
            if (onChange) {
                onChange.apply((inst.input ? inst.input[0] : null),
                    [inst.selectedYear, inst.selectedMonth + 1, inst]);
            }
        },

        /* Determine the number of months to show. */
        _getNumberOfMonths: function (inst) {
            var numMonths = this._get(inst, "numberOfMonths");
            return (numMonths == null ? [1, 1] : (typeof numMonths === "number" ? [1, numMonths] : numMonths));
        },

        /* Determine the current maximum date - ensure no time components are set. */
        _getMinMaxDate: function (inst, minMax) {
            return this._determineDate(inst, this._get(inst, minMax + "Date"), null);
        },

        /* Find the number of days in a given month. */
        _getDaysInMonth: function (year, month) {
            return 32 - this._daylightSavingAdjust(new Date(year, month, 32)).getDate();
        },

        /* Find the day of the week of the first of a month. */
        _getFirstDayOfMonth: function (year, month) {
            return new Date(year, month, 1).getDay();
        },

        /* Determines if we should allow a "next/prev" month display change. */
        _canAdjustMonth: function (inst, offset, curYear, curMonth) {
            var numMonths = this._getNumberOfMonths(inst),
                date = this._daylightSavingAdjust(new Date(curYear,
                    curMonth + (offset < 0 ? offset : numMonths[0] * numMonths[1]), 1));

            if (offset < 0) {
                date.setDate(this._getDaysInMonth(date.getFullYear(), date.getMonth()));
            }
            return this._isInRange(inst, date);
        },

        /* Is the given date in the accepted range? */
        _isInRange: function (inst, date) {
            var yearSplit, currentYear,
                minDate = this._getMinMaxDate(inst, "min"),
                maxDate = this._getMinMaxDate(inst, "max"),
                minYear = null,
                maxYear = null,
                years = this._get(inst, "yearRange");
            if (years) {
                yearSplit = years.split(":");
                currentYear = new Date().getFullYear();
                minYear = parseInt(yearSplit[0], 10);
                maxYear = parseInt(yearSplit[1], 10);
                if (yearSplit[0].match(/[+\-].*/)) {
                    minYear += currentYear;
                }
                if (yearSplit[1].match(/[+\-].*/)) {
                    maxYear += currentYear;
                }
            }

            return ((!minDate || date.getTime() >= minDate.getTime()) &&
                (!maxDate || date.getTime() <= maxDate.getTime()) &&
                (!minYear || date.getFullYear() >= minYear) &&
                (!maxYear || date.getFullYear() <= maxYear));
        },

        /* Provide the configuration settings for formatting/parsing. */
        _getFormatConfig: function (inst) {
            var shortYearCutoff = this._get(inst, "shortYearCutoff");
            shortYearCutoff = (typeof shortYearCutoff !== "string" ? shortYearCutoff :
                new Date().getFullYear() % 100 + parseInt(shortYearCutoff, 10));
            return {
                shortYearCutoff: shortYearCutoff,
                dayNamesShort: this._get(inst, "dayNamesShort"), dayNames: this._get(inst, "dayNames"),
                monthNamesShort: this._get(inst, "monthNamesShort"), monthNames: this._get(inst, "monthNames")
            };
        },

        /* Format the given date for display. */
        _formatDate: function (inst, day, month, year) {
            if (!day) {
                inst.currentDay = inst.selectedDay;
                inst.currentMonth = inst.selectedMonth;
                inst.currentYear = inst.selectedYear;
            }
            var date = (day ? (typeof day === "object" ? day :
                this._daylightSavingAdjust(new Date(year, month, day))) :
                this._daylightSavingAdjust(new Date(inst.currentYear, inst.currentMonth, inst.currentDay)));
            return this.formatDate(this._get(inst, "dateFormat"), date, this._getFormatConfig(inst));
        }
    });

    /*
     * Bind hover events for datepicker elements.
     * Done via delegate so the binding only occurs once in the lifetime of the parent div.
     * Global datepicker_instActive, set by _updateDatepicker allows the handlers to find their way back to the active picker.
     */
    function datepicker_bindHover(dpDiv) {
        var selector = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return dpDiv.on("mouseout", selector, function () {
            $(this).removeClass("ui-state-hover");
            if (this.className.indexOf("ui-datepicker-prev") !== -1) {
                $(this).removeClass("ui-datepicker-prev-hover");
            }
            if (this.className.indexOf("ui-datepicker-next") !== -1) {
                $(this).removeClass("ui-datepicker-next-hover");
            }
        })
            .on("mouseover", selector, datepicker_handleMouseover);
    }

    function datepicker_handleMouseover() {
        if (!$.datepicker._isDisabledDatepicker(datepicker_instActive.inline ? datepicker_instActive.dpDiv.parent()[0] : datepicker_instActive.input[0])) {
            $(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");
            $(this).addClass("ui-state-hover");
            if (this.className.indexOf("ui-datepicker-prev") !== -1) {
                $(this).addClass("ui-datepicker-prev-hover");
            }
            if (this.className.indexOf("ui-datepicker-next") !== -1) {
                $(this).addClass("ui-datepicker-next-hover");
            }
        }
    }

    /* jQuery extend now ignores nulls! */
    function datepicker_extendRemove(target, props) {
        $.extend(target, props);
        for (var name in props) {
            if (props[name] == null) {
                target[name] = props[name];
            }
        }
        return target;
    }

    /* Invoke the datepicker functionality.
       @param  options  string - a command, optionally followed by additional parameters or
                        Object - settings for attaching new datepicker functionality
       @return  jQuery object */
    $.fn.datepicker = function (options) {

        /* Verify an empty collection wasn't passed - Fixes #6976 */
        if (!this.length) {
            return this;
        }

        /* Initialise the date picker. */
        if (!$.datepicker.initialized) {
            $(document).on("mousedown", $.datepicker._checkExternalClick);
            $.datepicker.initialized = true;
        }

        /* Append datepicker main container to body if not exist. */
        if ($("#" + $.datepicker._mainDivId).length === 0) {
            $("body").append($.datepicker.dpDiv);
        }

        var otherArgs = Array.prototype.slice.call(arguments, 1);
        if (typeof options === "string" && (options === "isDisabled" || options === "getDate" || options === "widget")) {
            return $.datepicker["_" + options + "Datepicker"].
                apply($.datepicker, [this[0]].concat(otherArgs));
        }
        if (options === "option" && arguments.length === 2 && typeof arguments[1] === "string") {
            return $.datepicker["_" + options + "Datepicker"].
                apply($.datepicker, [this[0]].concat(otherArgs));
        }
        return this.each(function () {
            typeof options === "string" ?
                $.datepicker["_" + options + "Datepicker"].
                    apply($.datepicker, [this].concat(otherArgs)) :
                $.datepicker._attachDatepicker(this, options);
        });
    };

    $.datepicker = new Datepicker(); // singleton instance
    $.datepicker.initialized = false;
    $.datepicker.uuid = new Date().getTime();
    $.datepicker.version = "1.12.1";

    var widgetsDatepicker = $.datepicker;




    // This file is deprecated
    var ie = $.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());

    /*!
     * jQuery UI Mouse 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */

    //>>label: Mouse
    //>>group: Widgets
    //>>description: Abstracts mouse-based interactions to assist in creating certain widgets.
    //>>docs: http://api.jqueryui.com/mouse/



    var mouseHandled = false;
    $(document).on("mouseup", function () {
        mouseHandled = false;
    });

    var widgetsMouse = $.widget("ui.mouse", {
        version: "1.12.1",
        options: {
            cancel: "input, textarea, button, select, option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function () {
            var that = this;

            this.element
                .on("mousedown." + this.widgetName, function (event) {
                    return that._mouseDown(event);
                })
                .on("click." + this.widgetName, function (event) {
                    if (true === $.data(event.target, that.widgetName + ".preventClickEvent")) {
                        $.removeData(event.target, that.widgetName + ".preventClickEvent");
                        event.stopImmediatePropagation();
                        return false;
                    }
                });

            this.started = false;
        },

        // TODO: make sure destroying one instance of mouse doesn't mess with
        // other instances of mouse
        _mouseDestroy: function () {
            this.element.off("." + this.widgetName);
            if (this._mouseMoveDelegate) {
                this.document
                    .off("mousemove." + this.widgetName, this._mouseMoveDelegate)
                    .off("mouseup." + this.widgetName, this._mouseUpDelegate);
            }
        },

        _mouseDown: function (event) {

            // don't let more than one widget handle mouseStart
            if (mouseHandled) {
                return;
            }

            this._mouseMoved = false;

            // We may have missed mouseup (out of window)
            (this._mouseStarted && this._mouseUp(event));

            this._mouseDownEvent = event;

            var that = this,
                btnIsLeft = (event.which === 1),

                // event.target.nodeName works around a bug in IE 8 with
                // disabled inputs (#7620)
                elIsCancel = (typeof this.options.cancel === "string" && event.target.nodeName ?
                    $(event.target).closest(this.options.cancel).length : false);
            if (!btnIsLeft || elIsCancel || !this._mouseCapture(event)) {
                return true;
            }

            this.mouseDelayMet = !this.options.delay;
            if (!this.mouseDelayMet) {
                this._mouseDelayTimer = setTimeout(function () {
                    that.mouseDelayMet = true;
                }, this.options.delay);
            }

            if (this._mouseDistanceMet(event) && this._mouseDelayMet(event)) {
                this._mouseStarted = (this._mouseStart(event) !== false);
                if (!this._mouseStarted) {
                    event.preventDefault();
                    return true;
                }
            }

            // Click event may never have fired (Gecko & Opera)
            if (true === $.data(event.target, this.widgetName + ".preventClickEvent")) {
                $.removeData(event.target, this.widgetName + ".preventClickEvent");
            }

            // These delegates are required to keep context
            this._mouseMoveDelegate = function (event) {
                return that._mouseMove(event);
            };
            this._mouseUpDelegate = function (event) {
                return that._mouseUp(event);
            };

            this.document
                .on("mousemove." + this.widgetName, this._mouseMoveDelegate)
                .on("mouseup." + this.widgetName, this._mouseUpDelegate);

            event.preventDefault();

            mouseHandled = true;
            return true;
        },

        _mouseMove: function (event) {

            // Only check for mouseups outside the document if you've moved inside the document
            // at least once. This prevents the firing of mouseup in the case of IE<9, which will
            // fire a mousemove event if content is placed under the cursor. See #7778
            // Support: IE <9
            if (this._mouseMoved) {

                // IE mouseup check - mouseup happened when mouse was out of window
                if ($.ui.ie && (!document.documentMode || document.documentMode < 9) &&
                    !event.button) {
                    return this._mouseUp(event);

                    // Iframe mouseup check - mouseup occurred in another document
                } else if (!event.which) {

                    // Support: Safari <=8 - 9
                    // Safari sets which to 0 if you press any of the following keys
                    // during a drag (#14461)
                    if (event.originalEvent.altKey || event.originalEvent.ctrlKey ||
                        event.originalEvent.metaKey || event.originalEvent.shiftKey) {
                        this.ignoreMissingWhich = true;
                    } else if (!this.ignoreMissingWhich) {
                        return this._mouseUp(event);
                    }
                }
            }

            if (event.which || event.button) {
                this._mouseMoved = true;
            }

            if (this._mouseStarted) {
                this._mouseDrag(event);
                return event.preventDefault();
            }

            if (this._mouseDistanceMet(event) && this._mouseDelayMet(event)) {
                this._mouseStarted =
                    (this._mouseStart(this._mouseDownEvent, event) !== false);
                (this._mouseStarted ? this._mouseDrag(event) : this._mouseUp(event));
            }

            return !this._mouseStarted;
        },

        _mouseUp: function (event) {
            this.document
                .off("mousemove." + this.widgetName, this._mouseMoveDelegate)
                .off("mouseup." + this.widgetName, this._mouseUpDelegate);

            if (this._mouseStarted) {
                this._mouseStarted = false;

                if (event.target === this._mouseDownEvent.target) {
                    $.data(event.target, this.widgetName + ".preventClickEvent", true);
                }

                this._mouseStop(event);
            }

            if (this._mouseDelayTimer) {
                clearTimeout(this._mouseDelayTimer);
                delete this._mouseDelayTimer;
            }

            this.ignoreMissingWhich = false;
            mouseHandled = false;
            event.preventDefault();
        },

        _mouseDistanceMet: function (event) {
            return (Math.max(
                Math.abs(this._mouseDownEvent.pageX - event.pageX),
                Math.abs(this._mouseDownEvent.pageY - event.pageY)
            ) >= this.options.distance
            );
        },

        _mouseDelayMet: function ( /* event */) {
            return this.mouseDelayMet;
        },

        // These are placeholder methods, to be overriden by extending plugin
        _mouseStart: function ( /* event */) { },
        _mouseDrag: function ( /* event */) { },
        _mouseStop: function ( /* event */) { },
        _mouseCapture: function ( /* event */) { return true; }
    });




    // $.ui.plugin is deprecated. Use $.widget() extensions instead.
    var plugin = $.ui.plugin = {
        add: function (module, option, set) {
            var i,
                proto = $.ui[module].prototype;
            for (i in set) {
                proto.plugins[i] = proto.plugins[i] || [];
                proto.plugins[i].push([option, set[i]]);
            }
        },
        call: function (instance, name, args, allowDisconnected) {
            var i,
                set = instance.plugins[name];

            if (!set) {
                return;
            }

            if (!allowDisconnected && (!instance.element[0].parentNode ||
                instance.element[0].parentNode.nodeType === 11)) {
                return;
            }

            for (i = 0; i < set.length; i++) {
                if (instance.options[set[i][0]]) {
                    set[i][1].apply(instance.element, args);
                }
            }
        }
    };



    var safeBlur = $.ui.safeBlur = function (element) {

        // Support: IE9 - 10 only
        // If the <body> is blurred, IE will switch windows, see #9420
        if (element && element.nodeName.toLowerCase() !== "body") {
            $(element).trigger("blur");
        }
    };


    /*!
     * jQuery UI Draggable 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */

    //>>label: Draggable
    //>>group: Interactions
    //>>description: Enables dragging functionality for any element.
    //>>docs: http://api.jqueryui.com/draggable/
    //>>demos: http://jqueryui.com/draggable/
    //>>css.structure: ../../themes/base/draggable.css



    $.widget("ui.draggable", $.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "drag",
        options: {
            addClasses: true,
            appendTo: "parent",
            axis: false,
            connectToSortable: false,
            containment: false,
            cursor: "auto",
            cursorAt: false,
            grid: false,
            handle: false,
            helper: "original",
            iframeFix: false,
            opacity: false,
            refreshPositions: false,
            revert: false,
            revertDuration: 500,
            scope: "default",
            scroll: true,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: false,
            snapMode: "both",
            snapTolerance: 20,
            stack: false,
            zIndex: false,

            // Callbacks
            drag: null,
            start: null,
            stop: null
        },
        _create: function () {

            if (this.options.helper === "original") {
                this._setPositionRelative();
            }
            if (this.options.addClasses) {
                this._addClass("ui-draggable");
            }
            this._setHandleClassName();

            this._mouseInit();
        },

        _setOption: function (key, value) {
            this._super(key, value);
            if (key === "handle") {
                this._removeHandleClassName();
                this._setHandleClassName();
            }
        },

        _destroy: function () {
            if ((this.helper || this.element).is(".ui-draggable-dragging")) {
                this.destroyOnClear = true;
                return;
            }
            this._removeHandleClassName();
            this._mouseDestroy();
        },

        _mouseCapture: function (event) {
            var o = this.options;

            // Among others, prevent a drag on a resizable-handle
            if (this.helper || o.disabled ||
                $(event.target).closest(".ui-resizable-handle").length > 0) {
                return false;
            }

            //Quit if we're not on a valid handle
            this.handle = this._getHandle(event);
            if (!this.handle) {
                return false;
            }

            this._blurActiveElement(event);

            this._blockFrames(o.iframeFix === true ? "iframe" : o.iframeFix);

            return true;

        },

        _blockFrames: function (selector) {
            this.iframeBlocks = this.document.find(selector).map(function () {
                var iframe = $(this);

                return $("<div>")
                    .css("position", "absolute")
                    .appendTo(iframe.parent())
                    .outerWidth(iframe.outerWidth())
                    .outerHeight(iframe.outerHeight())
                    .offset(iframe.offset())[0];
            });
        },

        _unblockFrames: function () {
            if (this.iframeBlocks) {
                this.iframeBlocks.remove();
                delete this.iframeBlocks;
            }
        },

        _blurActiveElement: function (event) {
            var activeElement = $.ui.safeActiveElement(this.document[0]),
                target = $(event.target);

            // Don't blur if the event occurred on an element that is within
            // the currently focused element
            // See #10527, #12472
            if (target.closest(activeElement).length) {
                return;
            }

            // Blur any element that currently has focus, see #4261
            $.ui.safeBlur(activeElement);
        },

        _mouseStart: function (event) {

            var o = this.options;

            //Create and append the visible helper
            this.helper = this._createHelper(event);

            this._addClass(this.helper, "ui-draggable-dragging");

            //Cache the helper size
            this._cacheHelperProportions();

            //If ddmanager is used for droppables, set the global draggable
            if ($.ui.ddmanager) {
                $.ui.ddmanager.current = this;
            }

            /*
             * - Position generation -
             * This block generates everything position related - it's the core of draggables.
             */

            //Cache the margins of the original element
            this._cacheMargins();

            //Store the helper's css position
            this.cssPosition = this.helper.css("position");
            this.scrollParent = this.helper.scrollParent(true);
            this.offsetParent = this.helper.offsetParent();
            this.hasFixedAncestor = this.helper.parents().filter(function () {
                return $(this).css("position") === "fixed";
            }).length > 0;

            //The element's absolute position on the page minus margins
            this.positionAbs = this.element.offset();
            this._refreshOffsets(event);

            //Generate the original position
            this.originalPosition = this.position = this._generatePosition(event, false);
            this.originalPageX = event.pageX;
            this.originalPageY = event.pageY;

            //Adjust the mouse offset relative to the helper if "cursorAt" is supplied
            (o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt));

            //Set a containment if given in the options
            this._setContainment();

            //Trigger event + callbacks
            if (this._trigger("start", event) === false) {
                this._clear();
                return false;
            }

            //Recache the helper size
            this._cacheHelperProportions();

            //Prepare the droppable offsets
            if ($.ui.ddmanager && !o.dropBehaviour) {
                $.ui.ddmanager.prepareOffsets(this, event);
            }

            // Execute the drag once - this causes the helper not to be visible before getting its
            // correct position
            this._mouseDrag(event, true);

            // If the ddmanager is used for droppables, inform the manager that dragging has started
            // (see #5003)
            if ($.ui.ddmanager) {
                $.ui.ddmanager.dragStart(this, event);
            }

            return true;
        },

        _refreshOffsets: function (event) {
            this.offset = {
                top: this.positionAbs.top - this.margins.top,
                left: this.positionAbs.left - this.margins.left,
                scroll: false,
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            };

            this.offset.click = {
                left: event.pageX - this.offset.left,
                top: event.pageY - this.offset.top
            };
        },

        _mouseDrag: function (event, noPropagation) {

            // reset any necessary cached properties (see #5009)
            if (this.hasFixedAncestor) {
                this.offset.parent = this._getParentOffset();
            }

            //Compute the helpers position
            this.position = this._generatePosition(event, true);
            this.positionAbs = this._convertPositionTo("absolute");

            //Call plugins and callbacks and use the resulting position if something is returned
            if (!noPropagation) {
                var ui = this._uiHash();
                if (this._trigger("drag", event, ui) === false) {
                    this._mouseUp(new $.Event("mouseup", event));
                    return false;
                }
                this.position = ui.position;
            }

            this.helper[0].style.left = this.position.left + "px";
            this.helper[0].style.top = this.position.top + "px";

            if ($.ui.ddmanager) {
                $.ui.ddmanager.drag(this, event);
            }

            return false;
        },

        _mouseStop: function (event) {

            //If we are using droppables, inform the manager about the drop
            var that = this,
                dropped = false;
            if ($.ui.ddmanager && !this.options.dropBehaviour) {
                dropped = $.ui.ddmanager.drop(this, event);
            }

            //if a drop comes from outside (a sortable)
            if (this.dropped) {
                dropped = this.dropped;
                this.dropped = false;
            }

            if ((this.options.revert === "invalid" && !dropped) ||
                (this.options.revert === "valid" && dropped) ||
                this.options.revert === true || ($.isFunction(this.options.revert) &&
                    this.options.revert.call(this.element, dropped))
            ) {
                $(this.helper).animate(
                    this.originalPosition,
                    parseInt(this.options.revertDuration, 10),
                    function () {
                        if (that._trigger("stop", event) !== false) {
                            that._clear();
                        }
                    }
                );
            } else {
                if (this._trigger("stop", event) !== false) {
                    this._clear();
                }
            }

            return false;
        },

        _mouseUp: function (event) {
            this._unblockFrames();

            // If the ddmanager is used for droppables, inform the manager that dragging has stopped
            // (see #5003)
            if ($.ui.ddmanager) {
                $.ui.ddmanager.dragStop(this, event);
            }

            // Only need to focus if the event occurred on the draggable itself, see #10527
            if (this.handleElement.is(event.target)) {

                // The interaction is over; whether or not the click resulted in a drag,
                // focus the element
                this.element.trigger("focus");
            }

            return $.ui.mouse.prototype._mouseUp.call(this, event);
        },

        cancel: function () {

            if (this.helper.is(".ui-draggable-dragging")) {
                this._mouseUp(new $.Event("mouseup", { target: this.element[0] }));
            } else {
                this._clear();
            }

            return this;

        },

        _getHandle: function (event) {
            return this.options.handle ?
                !!$(event.target).closest(this.element.find(this.options.handle)).length :
                true;
        },

        _setHandleClassName: function () {
            this.handleElement = this.options.handle ?
                this.element.find(this.options.handle) : this.element;
            this._addClass(this.handleElement, "ui-draggable-handle");
        },

        _removeHandleClassName: function () {
            this._removeClass(this.handleElement, "ui-draggable-handle");
        },

        _createHelper: function (event) {

            var o = this.options,
                helperIsFunction = $.isFunction(o.helper),
                helper = helperIsFunction ?
                    $(o.helper.apply(this.element[0], [event])) :
                    (o.helper === "clone" ?
                        this.element.clone().removeAttr("id") :
                        this.element);

            if (!helper.parents("body").length) {
                helper.appendTo((o.appendTo === "parent" ?
                    this.element[0].parentNode :
                    o.appendTo));
            }

            // Http://bugs.jqueryui.com/ticket/9446
            // a helper function can return the original element
            // which wouldn't have been set to relative in _create
            if (helperIsFunction && helper[0] === this.element[0]) {
                this._setPositionRelative();
            }

            if (helper[0] !== this.element[0] &&
                !(/(fixed|absolute)/).test(helper.css("position"))) {
                helper.css("position", "absolute");
            }

            return helper;

        },

        _setPositionRelative: function () {
            if (!(/^(?:r|a|f)/).test(this.element.css("position"))) {
                this.element[0].style.position = "relative";
            }
        },

        _adjustOffsetFromHelper: function (obj) {
            if (typeof obj === "string") {
                obj = obj.split(" ");
            }
            if ($.isArray(obj)) {
                obj = { left: +obj[0], top: +obj[1] || 0 };
            }
            if ("left" in obj) {
                this.offset.click.left = obj.left + this.margins.left;
            }
            if ("right" in obj) {
                this.offset.click.left = this.helperProportions.width - obj.right + this.margins.left;
            }
            if ("top" in obj) {
                this.offset.click.top = obj.top + this.margins.top;
            }
            if ("bottom" in obj) {
                this.offset.click.top = this.helperProportions.height - obj.bottom + this.margins.top;
            }
        },

        _isRootNode: function (element) {
            return (/(html|body)/i).test(element.tagName) || element === this.document[0];
        },

        _getParentOffset: function () {

            //Get the offsetParent and cache its position
            var po = this.offsetParent.offset(),
                document = this.document[0];

            // This is a special case where we need to modify a offset calculated on start, since the
            // following happened:
            // 1. The position of the helper is absolute, so it's position is calculated based on the
            // next positioned parent
            // 2. The actual offset parent is a child of the scroll parent, and the scroll parent isn't
            // the document, which means that the scroll is included in the initial calculation of the
            // offset of the parent, and never recalculated upon drag
            if (this.cssPosition === "absolute" && this.scrollParent[0] !== document &&
                $.contains(this.scrollParent[0], this.offsetParent[0])) {
                po.left += this.scrollParent.scrollLeft();
                po.top += this.scrollParent.scrollTop();
            }

            if (this._isRootNode(this.offsetParent[0])) {
                po = { top: 0, left: 0 };
            }

            return {
                top: po.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: po.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            };

        },

        _getRelativeOffset: function () {
            if (this.cssPosition !== "relative") {
                return { top: 0, left: 0 };
            }

            var p = this.element.position(),
                scrollIsRootNode = this._isRootNode(this.scrollParent[0]);

            return {
                top: p.top - (parseInt(this.helper.css("top"), 10) || 0) +
                    (!scrollIsRootNode ? this.scrollParent.scrollTop() : 0),
                left: p.left - (parseInt(this.helper.css("left"), 10) || 0) +
                    (!scrollIsRootNode ? this.scrollParent.scrollLeft() : 0)
            };

        },

        _cacheMargins: function () {
            this.margins = {
                left: (parseInt(this.element.css("marginLeft"), 10) || 0),
                top: (parseInt(this.element.css("marginTop"), 10) || 0),
                right: (parseInt(this.element.css("marginRight"), 10) || 0),
                bottom: (parseInt(this.element.css("marginBottom"), 10) || 0)
            };
        },

        _cacheHelperProportions: function () {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            };
        },

        _setContainment: function () {

            var isUserScrollable, c, ce,
                o = this.options,
                document = this.document[0];

            this.relativeContainer = null;

            if (!o.containment) {
                this.containment = null;
                return;
            }

            if (o.containment === "window") {
                this.containment = [
                    $(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left,
                    $(window).scrollTop() - this.offset.relative.top - this.offset.parent.top,
                    $(window).scrollLeft() + $(window).width() -
                    this.helperProportions.width - this.margins.left,
                    $(window).scrollTop() +
                    ($(window).height() || document.body.parentNode.scrollHeight) -
                    this.helperProportions.height - this.margins.top
                ];
                return;
            }

            if (o.containment === "document") {
                this.containment = [
                    0,
                    0,
                    $(document).width() - this.helperProportions.width - this.margins.left,
                    ($(document).height() || document.body.parentNode.scrollHeight) -
                    this.helperProportions.height - this.margins.top
                ];
                return;
            }

            if (o.containment.constructor === Array) {
                this.containment = o.containment;
                return;
            }

            if (o.containment === "parent") {
                o.containment = this.helper[0].parentNode;
            }

            c = $(o.containment);
            ce = c[0];

            if (!ce) {
                return;
            }

            isUserScrollable = /(scroll|auto)/.test(c.css("overflow"));

            this.containment = [
                (parseInt(c.css("borderLeftWidth"), 10) || 0) +
                (parseInt(c.css("paddingLeft"), 10) || 0),
                (parseInt(c.css("borderTopWidth"), 10) || 0) +
                (parseInt(c.css("paddingTop"), 10) || 0),
                (isUserScrollable ? Math.max(ce.scrollWidth, ce.offsetWidth) : ce.offsetWidth) -
                (parseInt(c.css("borderRightWidth"), 10) || 0) -
                (parseInt(c.css("paddingRight"), 10) || 0) -
                this.helperProportions.width -
                this.margins.left -
                this.margins.right,
                (isUserScrollable ? Math.max(ce.scrollHeight, ce.offsetHeight) : ce.offsetHeight) -
                (parseInt(c.css("borderBottomWidth"), 10) || 0) -
                (parseInt(c.css("paddingBottom"), 10) || 0) -
                this.helperProportions.height -
                this.margins.top -
                this.margins.bottom
            ];
            this.relativeContainer = c;
        },

        _convertPositionTo: function (d, pos) {

            if (!pos) {
                pos = this.position;
            }

            var mod = d === "absolute" ? 1 : -1,
                scrollIsRootNode = this._isRootNode(this.scrollParent[0]);

            return {
                top: (

                    // The absolute mouse position
                    pos.top +

                    // Only for relative positioned nodes: Relative offset from element to offset parent
                    this.offset.relative.top * mod +

                    // The offsetParent's offset without borders (offset + border)
                    this.offset.parent.top * mod -
                    ((this.cssPosition === "fixed" ?
                        -this.offset.scroll.top :
                        (scrollIsRootNode ? 0 : this.offset.scroll.top)) * mod)
                ),
                left: (

                    // The absolute mouse position
                    pos.left +

                    // Only for relative positioned nodes: Relative offset from element to offset parent
                    this.offset.relative.left * mod +

                    // The offsetParent's offset without borders (offset + border)
                    this.offset.parent.left * mod -
                    ((this.cssPosition === "fixed" ?
                        -this.offset.scroll.left :
                        (scrollIsRootNode ? 0 : this.offset.scroll.left)) * mod)
                )
            };

        },

        _generatePosition: function (event, constrainPosition) {

            var containment, co, top, left,
                o = this.options,
                scrollIsRootNode = this._isRootNode(this.scrollParent[0]),
                pageX = event.pageX,
                pageY = event.pageY;

            // Cache the scroll
            if (!scrollIsRootNode || !this.offset.scroll) {
                this.offset.scroll = {
                    top: this.scrollParent.scrollTop(),
                    left: this.scrollParent.scrollLeft()
                };
            }

            /*
             * - Position constraining -
             * Constrain the position to a mix of grid, containment.
             */

            // If we are not dragging yet, we won't check for options
            if (constrainPosition) {
                if (this.containment) {
                    if (this.relativeContainer) {
                        co = this.relativeContainer.offset();
                        containment = [
                            this.containment[0] + co.left,
                            this.containment[1] + co.top,
                            this.containment[2] + co.left,
                            this.containment[3] + co.top
                        ];
                    } else {
                        containment = this.containment;
                    }

                    if (event.pageX - this.offset.click.left < containment[0]) {
                        pageX = containment[0] + this.offset.click.left;
                    }
                    if (event.pageY - this.offset.click.top < containment[1]) {
                        pageY = containment[1] + this.offset.click.top;
                    }
                    if (event.pageX - this.offset.click.left > containment[2]) {
                        pageX = containment[2] + this.offset.click.left;
                    }
                    if (event.pageY - this.offset.click.top > containment[3]) {
                        pageY = containment[3] + this.offset.click.top;
                    }
                }

                if (o.grid) {

                    //Check for grid elements set to 0 to prevent divide by 0 error causing invalid
                    // argument errors in IE (see ticket #6950)
                    top = o.grid[1] ? this.originalPageY + Math.round((pageY -
                        this.originalPageY) / o.grid[1]) * o.grid[1] : this.originalPageY;
                    pageY = containment ? ((top - this.offset.click.top >= containment[1] ||
                        top - this.offset.click.top > containment[3]) ?
                        top :
                        ((top - this.offset.click.top >= containment[1]) ?
                            top - o.grid[1] : top + o.grid[1])) : top;

                    left = o.grid[0] ? this.originalPageX +
                        Math.round((pageX - this.originalPageX) / o.grid[0]) * o.grid[0] :
                        this.originalPageX;
                    pageX = containment ? ((left - this.offset.click.left >= containment[0] ||
                        left - this.offset.click.left > containment[2]) ?
                        left :
                        ((left - this.offset.click.left >= containment[0]) ?
                            left - o.grid[0] : left + o.grid[0])) : left;
                }

                if (o.axis === "y") {
                    pageX = this.originalPageX;
                }

                if (o.axis === "x") {
                    pageY = this.originalPageY;
                }
            }

            return {
                top: (

                    // The absolute mouse position
                    pageY -

                    // Click offset (relative to the element)
                    this.offset.click.top -

                    // Only for relative positioned nodes: Relative offset from element to offset parent
                    this.offset.relative.top -

                    // The offsetParent's offset without borders (offset + border)
                    this.offset.parent.top +
                    (this.cssPosition === "fixed" ?
                        -this.offset.scroll.top :
                        (scrollIsRootNode ? 0 : this.offset.scroll.top))
                ),
                left: (

                    // The absolute mouse position
                    pageX -

                    // Click offset (relative to the element)
                    this.offset.click.left -

                    // Only for relative positioned nodes: Relative offset from element to offset parent
                    this.offset.relative.left -

                    // The offsetParent's offset without borders (offset + border)
                    this.offset.parent.left +
                    (this.cssPosition === "fixed" ?
                        -this.offset.scroll.left :
                        (scrollIsRootNode ? 0 : this.offset.scroll.left))
                )
            };

        },

        _clear: function () {
            this._removeClass(this.helper, "ui-draggable-dragging");
            if (this.helper[0] !== this.element[0] && !this.cancelHelperRemoval) {
                this.helper.remove();
            }
            this.helper = null;
            this.cancelHelperRemoval = false;
            if (this.destroyOnClear) {
                this.destroy();
            }
        },

        // From now on bulk stuff - mainly helpers

        _trigger: function (type, event, ui) {
            ui = ui || this._uiHash();
            $.ui.plugin.call(this, type, [event, ui, this], true);

            // Absolute position and offset (see #6884 ) have to be recalculated after plugins
            if (/^(drag|start|stop)/.test(type)) {
                this.positionAbs = this._convertPositionTo("absolute");
                ui.offset = this.positionAbs;
            }
            return $.Widget.prototype._trigger.call(this, type, event, ui);
        },

        plugins: {},

        _uiHash: function () {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            };
        }

    });

    $.ui.plugin.add("draggable", "connectToSortable", {
        start: function (event, ui, draggable) {
            var uiSortable = $.extend({}, ui, {
                item: draggable.element
            });

            draggable.sortables = [];
            $(draggable.options.connectToSortable).each(function () {
                var sortable = $(this).sortable("instance");

                if (sortable && !sortable.options.disabled) {
                    draggable.sortables.push(sortable);

                    // RefreshPositions is called at drag start to refresh the containerCache
                    // which is used in drag. This ensures it's initialized and synchronized
                    // with any changes that might have happened on the page since initialization.
                    sortable.refreshPositions();
                    sortable._trigger("activate", event, uiSortable);
                }
            });
        },
        stop: function (event, ui, draggable) {
            var uiSortable = $.extend({}, ui, {
                item: draggable.element
            });

            draggable.cancelHelperRemoval = false;

            $.each(draggable.sortables, function () {
                var sortable = this;

                if (sortable.isOver) {
                    sortable.isOver = 0;

                    // Allow this sortable to handle removing the helper
                    draggable.cancelHelperRemoval = true;
                    sortable.cancelHelperRemoval = false;

                    // Use _storedCSS To restore properties in the sortable,
                    // as this also handles revert (#9675) since the draggable
                    // may have modified them in unexpected ways (#8809)
                    sortable._storedCSS = {
                        position: sortable.placeholder.css("position"),
                        top: sortable.placeholder.css("top"),
                        left: sortable.placeholder.css("left")
                    };

                    sortable._mouseStop(event);

                    // Once drag has ended, the sortable should return to using
                    // its original helper, not the shared helper from draggable
                    sortable.options.helper = sortable.options._helper;
                } else {

                    // Prevent this Sortable from removing the helper.
                    // However, don't set the draggable to remove the helper
                    // either as another connected Sortable may yet handle the removal.
                    sortable.cancelHelperRemoval = true;

                    sortable._trigger("deactivate", event, uiSortable);
                }
            });
        },
        drag: function (event, ui, draggable) {
            $.each(draggable.sortables, function () {
                var innermostIntersecting = false,
                    sortable = this;

                // Copy over variables that sortable's _intersectsWith uses
                sortable.positionAbs = draggable.positionAbs;
                sortable.helperProportions = draggable.helperProportions;
                sortable.offset.click = draggable.offset.click;

                if (sortable._intersectsWith(sortable.containerCache)) {
                    innermostIntersecting = true;

                    $.each(draggable.sortables, function () {

                        // Copy over variables that sortable's _intersectsWith uses
                        this.positionAbs = draggable.positionAbs;
                        this.helperProportions = draggable.helperProportions;
                        this.offset.click = draggable.offset.click;

                        if (this !== sortable &&
                            this._intersectsWith(this.containerCache) &&
                            $.contains(sortable.element[0], this.element[0])) {
                            innermostIntersecting = false;
                        }

                        return innermostIntersecting;
                    });
                }

                if (innermostIntersecting) {

                    // If it intersects, we use a little isOver variable and set it once,
                    // so that the move-in stuff gets fired only once.
                    if (!sortable.isOver) {
                        sortable.isOver = 1;

                        // Store draggable's parent in case we need to reappend to it later.
                        draggable._parent = ui.helper.parent();

                        sortable.currentItem = ui.helper
                            .appendTo(sortable.element)
                            .data("ui-sortable-item", true);

                        // Store helper option to later restore it
                        sortable.options._helper = sortable.options.helper;

                        sortable.options.helper = function () {
                            return ui.helper[0];
                        };

                        // Fire the start events of the sortable with our passed browser event,
                        // and our own helper (so it doesn't create a new one)
                        event.target = sortable.currentItem[0];
                        sortable._mouseCapture(event, true);
                        sortable._mouseStart(event, true, true);

                        // Because the browser event is way off the new appended portlet,
                        // modify necessary variables to reflect the changes
                        sortable.offset.click.top = draggable.offset.click.top;
                        sortable.offset.click.left = draggable.offset.click.left;
                        sortable.offset.parent.left -= draggable.offset.parent.left -
                            sortable.offset.parent.left;
                        sortable.offset.parent.top -= draggable.offset.parent.top -
                            sortable.offset.parent.top;

                        draggable._trigger("toSortable", event);

                        // Inform draggable that the helper is in a valid drop zone,
                        // used solely in the revert option to handle "valid/invalid".
                        draggable.dropped = sortable.element;

                        // Need to refreshPositions of all sortables in the case that
                        // adding to one sortable changes the location of the other sortables (#9675)
                        $.each(draggable.sortables, function () {
                            this.refreshPositions();
                        });

                        // Hack so receive/update callbacks work (mostly)
                        draggable.currentItem = draggable.element;
                        sortable.fromOutside = draggable;
                    }

                    if (sortable.currentItem) {
                        sortable._mouseDrag(event);

                        // Copy the sortable's position because the draggable's can potentially reflect
                        // a relative position, while sortable is always absolute, which the dragged
                        // element has now become. (#8809)
                        ui.position = sortable.position;
                    }
                } else {

                    // If it doesn't intersect with the sortable, and it intersected before,
                    // we fake the drag stop of the sortable, but make sure it doesn't remove
                    // the helper by using cancelHelperRemoval.
                    if (sortable.isOver) {

                        sortable.isOver = 0;
                        sortable.cancelHelperRemoval = true;

                        // Calling sortable's mouseStop would trigger a revert,
                        // so revert must be temporarily false until after mouseStop is called.
                        sortable.options._revert = sortable.options.revert;
                        sortable.options.revert = false;

                        sortable._trigger("out", event, sortable._uiHash(sortable));
                        sortable._mouseStop(event, true);

                        // Restore sortable behaviors that were modfied
                        // when the draggable entered the sortable area (#9481)
                        sortable.options.revert = sortable.options._revert;
                        sortable.options.helper = sortable.options._helper;

                        if (sortable.placeholder) {
                            sortable.placeholder.remove();
                        }

                        // Restore and recalculate the draggable's offset considering the sortable
                        // may have modified them in unexpected ways. (#8809, #10669)
                        ui.helper.appendTo(draggable._parent);
                        draggable._refreshOffsets(event);
                        ui.position = draggable._generatePosition(event, true);

                        draggable._trigger("fromSortable", event);

                        // Inform draggable that the helper is no longer in a valid drop zone
                        draggable.dropped = false;

                        // Need to refreshPositions of all sortables just in case removing
                        // from one sortable changes the location of other sortables (#9675)
                        $.each(draggable.sortables, function () {
                            this.refreshPositions();
                        });
                    }
                }
            });
        }
    });

    $.ui.plugin.add("draggable", "cursor", {
        start: function (event, ui, instance) {
            var t = $("body"),
                o = instance.options;

            if (t.css("cursor")) {
                o._cursor = t.css("cursor");
            }
            t.css("cursor", o.cursor);
        },
        stop: function (event, ui, instance) {
            var o = instance.options;
            if (o._cursor) {
                $("body").css("cursor", o._cursor);
            }
        }
    });

    $.ui.plugin.add("draggable", "opacity", {
        start: function (event, ui, instance) {
            var t = $(ui.helper),
                o = instance.options;
            if (t.css("opacity")) {
                o._opacity = t.css("opacity");
            }
            t.css("opacity", o.opacity);
        },
        stop: function (event, ui, instance) {
            var o = instance.options;
            if (o._opacity) {
                $(ui.helper).css("opacity", o._opacity);
            }
        }
    });

    $.ui.plugin.add("draggable", "scroll", {
        start: function (event, ui, i) {
            if (!i.scrollParentNotHidden) {
                i.scrollParentNotHidden = i.helper.scrollParent(false);
            }

            if (i.scrollParentNotHidden[0] !== i.document[0] &&
                i.scrollParentNotHidden[0].tagName !== "HTML") {
                i.overflowOffset = i.scrollParentNotHidden.offset();
            }
        },
        drag: function (event, ui, i) {

            var o = i.options,
                scrolled = false,
                scrollParent = i.scrollParentNotHidden[0],
                document = i.document[0];

            if (scrollParent !== document && scrollParent.tagName !== "HTML") {
                if (!o.axis || o.axis !== "x") {
                    if ((i.overflowOffset.top + scrollParent.offsetHeight) - event.pageY <
                        o.scrollSensitivity) {
                        scrollParent.scrollTop = scrolled = scrollParent.scrollTop + o.scrollSpeed;
                    } else if (event.pageY - i.overflowOffset.top < o.scrollSensitivity) {
                        scrollParent.scrollTop = scrolled = scrollParent.scrollTop - o.scrollSpeed;
                    }
                }

                if (!o.axis || o.axis !== "y") {
                    if ((i.overflowOffset.left + scrollParent.offsetWidth) - event.pageX <
                        o.scrollSensitivity) {
                        scrollParent.scrollLeft = scrolled = scrollParent.scrollLeft + o.scrollSpeed;
                    } else if (event.pageX - i.overflowOffset.left < o.scrollSensitivity) {
                        scrollParent.scrollLeft = scrolled = scrollParent.scrollLeft - o.scrollSpeed;
                    }
                }

            } else {

                if (!o.axis || o.axis !== "x") {
                    if (event.pageY - $(document).scrollTop() < o.scrollSensitivity) {
                        scrolled = $(document).scrollTop($(document).scrollTop() - o.scrollSpeed);
                    } else if ($(window).height() - (event.pageY - $(document).scrollTop()) <
                        o.scrollSensitivity) {
                        scrolled = $(document).scrollTop($(document).scrollTop() + o.scrollSpeed);
                    }
                }

                if (!o.axis || o.axis !== "y") {
                    if (event.pageX - $(document).scrollLeft() < o.scrollSensitivity) {
                        scrolled = $(document).scrollLeft(
                            $(document).scrollLeft() - o.scrollSpeed
                        );
                    } else if ($(window).width() - (event.pageX - $(document).scrollLeft()) <
                        o.scrollSensitivity) {
                        scrolled = $(document).scrollLeft(
                            $(document).scrollLeft() + o.scrollSpeed
                        );
                    }
                }

            }

            if (scrolled !== false && $.ui.ddmanager && !o.dropBehaviour) {
                $.ui.ddmanager.prepareOffsets(i, event);
            }

        }
    });

    $.ui.plugin.add("draggable", "snap", {
        start: function (event, ui, i) {

            var o = i.options;

            i.snapElements = [];

            $(o.snap.constructor !== String ? (o.snap.items || ":data(ui-draggable)") : o.snap)
                .each(function () {
                    var $t = $(this),
                        $o = $t.offset();
                    if (this !== i.element[0]) {
                        i.snapElements.push({
                            item: this,
                            width: $t.outerWidth(), height: $t.outerHeight(),
                            top: $o.top, left: $o.left
                        });
                    }
                });

        },
        drag: function (event, ui, inst) {

            var ts, bs, ls, rs, l, r, t, b, i, first,
                o = inst.options,
                d = o.snapTolerance,
                x1 = ui.offset.left, x2 = x1 + inst.helperProportions.width,
                y1 = ui.offset.top, y2 = y1 + inst.helperProportions.height;

            for (i = inst.snapElements.length - 1; i >= 0; i--) {

                l = inst.snapElements[i].left - inst.margins.left;
                r = l + inst.snapElements[i].width;
                t = inst.snapElements[i].top - inst.margins.top;
                b = t + inst.snapElements[i].height;

                if (x2 < l - d || x1 > r + d || y2 < t - d || y1 > b + d ||
                    !$.contains(inst.snapElements[i].item.ownerDocument,
                        inst.snapElements[i].item)) {
                    if (inst.snapElements[i].snapping) {
                        (inst.options.snap.release &&
                            inst.options.snap.release.call(
                                inst.element,
                                event,
                                $.extend(inst._uiHash(), { snapItem: inst.snapElements[i].item })
                            ));
                    }
                    inst.snapElements[i].snapping = false;
                    continue;
                }

                if (o.snapMode !== "inner") {
                    ts = Math.abs(t - y2) <= d;
                    bs = Math.abs(b - y1) <= d;
                    ls = Math.abs(l - x2) <= d;
                    rs = Math.abs(r - x1) <= d;
                    if (ts) {
                        ui.position.top = inst._convertPositionTo("relative", {
                            top: t - inst.helperProportions.height,
                            left: 0
                        }).top;
                    }
                    if (bs) {
                        ui.position.top = inst._convertPositionTo("relative", {
                            top: b,
                            left: 0
                        }).top;
                    }
                    if (ls) {
                        ui.position.left = inst._convertPositionTo("relative", {
                            top: 0,
                            left: l - inst.helperProportions.width
                        }).left;
                    }
                    if (rs) {
                        ui.position.left = inst._convertPositionTo("relative", {
                            top: 0,
                            left: r
                        }).left;
                    }
                }

                first = (ts || bs || ls || rs);

                if (o.snapMode !== "outer") {
                    ts = Math.abs(t - y1) <= d;
                    bs = Math.abs(b - y2) <= d;
                    ls = Math.abs(l - x1) <= d;
                    rs = Math.abs(r - x2) <= d;
                    if (ts) {
                        ui.position.top = inst._convertPositionTo("relative", {
                            top: t,
                            left: 0
                        }).top;
                    }
                    if (bs) {
                        ui.position.top = inst._convertPositionTo("relative", {
                            top: b - inst.helperProportions.height,
                            left: 0
                        }).top;
                    }
                    if (ls) {
                        ui.position.left = inst._convertPositionTo("relative", {
                            top: 0,
                            left: l
                        }).left;
                    }
                    if (rs) {
                        ui.position.left = inst._convertPositionTo("relative", {
                            top: 0,
                            left: r - inst.helperProportions.width
                        }).left;
                    }
                }

                if (!inst.snapElements[i].snapping && (ts || bs || ls || rs || first)) {
                    (inst.options.snap.snap &&
                        inst.options.snap.snap.call(
                            inst.element,
                            event,
                            $.extend(inst._uiHash(), {
                                snapItem: inst.snapElements[i].item
                            })));
                }
                inst.snapElements[i].snapping = (ts || bs || ls || rs || first);

            }

        }
    });

    $.ui.plugin.add("draggable", "stack", {
        start: function (event, ui, instance) {
            var min,
                o = instance.options,
                group = $.makeArray($(o.stack)).sort(function (a, b) {
                    return (parseInt($(a).css("zIndex"), 10) || 0) -
                        (parseInt($(b).css("zIndex"), 10) || 0);
                });

            if (!group.length) { return; }

            min = parseInt($(group[0]).css("zIndex"), 10) || 0;
            $(group).each(function (i) {
                $(this).css("zIndex", min + i);
            });
            this.css("zIndex", (min + group.length));
        }
    });

    $.ui.plugin.add("draggable", "zIndex", {
        start: function (event, ui, instance) {
            var t = $(ui.helper),
                o = instance.options;

            if (t.css("zIndex")) {
                o._zIndex = t.css("zIndex");
            }
            t.css("zIndex", o.zIndex);
        },
        stop: function (event, ui, instance) {
            var o = instance.options;

            if (o._zIndex) {
                $(ui.helper).css("zIndex", o._zIndex);
            }
        }
    });

    var widgetsDraggable = $.ui.draggable;


    /*!
     * jQuery UI Resizable 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */

    //>>label: Resizable
    //>>group: Interactions
    //>>description: Enables resize functionality for any element.
    //>>docs: http://api.jqueryui.com/resizable/
    //>>demos: http://jqueryui.com/resizable/
    //>>css.structure: ../../themes/base/core.css
    //>>css.structure: ../../themes/base/resizable.css
    //>>css.theme: ../../themes/base/theme.css



    $.widget("ui.resizable", $.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "resize",
        options: {
            alsoResize: false,
            animate: false,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: false,
            autoHide: false,
            classes: {
                "ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se"
            },
            containment: false,
            ghost: false,
            grid: false,
            handles: "e,s,se",
            helper: false,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,

            // See #7960
            zIndex: 90,

            // Callbacks
            resize: null,
            start: null,
            stop: null
        },

        _num: function (value) {
            return parseFloat(value) || 0;
        },

        _isNumber: function (value) {
            return !isNaN(parseFloat(value));
        },

        _hasScroll: function (el, a) {

            if ($(el).css("overflow") === "hidden") {
                return false;
            }

            var scroll = (a && a === "left") ? "scrollLeft" : "scrollTop",
                has = false;

            if (el[scroll] > 0) {
                return true;
            }

            // TODO: determine which cases actually cause this to happen
            // if the element doesn't have the scroll set, see if it's possible to
            // set the scroll
            el[scroll] = 1;
            has = (el[scroll] > 0);
            el[scroll] = 0;
            return has;
        },

        _create: function () {

            var margins,
                o = this.options,
                that = this;
            this._addClass("ui-resizable");

            $.extend(this, {
                _aspectRatio: !!(o.aspectRatio),
                aspectRatio: o.aspectRatio,
                originalElement: this.element,
                _proportionallyResizeElements: [],
                _helper: o.helper || o.ghost || o.animate ? o.helper || "ui-resizable-helper" : null
            });

            // Wrap the element if it cannot hold child nodes
            if (this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)) {

                this.element.wrap(
                    $("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                        position: this.element.css("position"),
                        width: this.element.outerWidth(),
                        height: this.element.outerHeight(),
                        top: this.element.css("top"),
                        left: this.element.css("left")
                    })
                );

                this.element = this.element.parent().data(
                    "ui-resizable", this.element.resizable("instance")
                );

                this.elementIsWrapper = true;

                margins = {
                    marginTop: this.originalElement.css("marginTop"),
                    marginRight: this.originalElement.css("marginRight"),
                    marginBottom: this.originalElement.css("marginBottom"),
                    marginLeft: this.originalElement.css("marginLeft")
                };

                this.element.css(margins);
                this.originalElement.css("margin", 0);

                // support: Safari
                // Prevent Safari textarea resize
                this.originalResizeStyle = this.originalElement.css("resize");
                this.originalElement.css("resize", "none");

                this._proportionallyResizeElements.push(this.originalElement.css({
                    position: "static",
                    zoom: 1,
                    display: "block"
                }));

                // Support: IE9
                // avoid IE jump (hard set the margin)
                this.originalElement.css(margins);

                this._proportionallyResize();
            }

            this._setupHandles();

            if (o.autoHide) {
                $(this.element)
                    .on("mouseenter", function () {
                        if (o.disabled) {
                            return;
                        }
                        that._removeClass("ui-resizable-autohide");
                        that._handles.show();
                    })
                    .on("mouseleave", function () {
                        if (o.disabled) {
                            return;
                        }
                        if (!that.resizing) {
                            that._addClass("ui-resizable-autohide");
                            that._handles.hide();
                        }
                    });
            }

            this._mouseInit();
        },

        _destroy: function () {

            this._mouseDestroy();

            var wrapper,
                _destroy = function (exp) {
                    $(exp)
                        .removeData("resizable")
                        .removeData("ui-resizable")
                        .off(".resizable")
                        .find(".ui-resizable-handle")
                        .remove();
                };

            // TODO: Unwrap at same DOM position
            if (this.elementIsWrapper) {
                _destroy(this.element);
                wrapper = this.element;
                this.originalElement.css({
                    position: wrapper.css("position"),
                    width: wrapper.outerWidth(),
                    height: wrapper.outerHeight(),
                    top: wrapper.css("top"),
                    left: wrapper.css("left")
                }).insertAfter(wrapper);
                wrapper.remove();
            }

            this.originalElement.css("resize", this.originalResizeStyle);
            _destroy(this.originalElement);

            return this;
        },

        _setOption: function (key, value) {
            this._super(key, value);

            switch (key) {
                case "handles":
                    this._removeHandles();
                    this._setupHandles();
                    break;
                default:
                    break;
            }
        },

        _setupHandles: function () {
            var o = this.options, handle, i, n, hname, axis, that = this;
            this.handles = o.handles ||
                (!$(".ui-resizable-handle", this.element).length ?
                    "e,s,se" : {
                        n: ".ui-resizable-n",
                        e: ".ui-resizable-e",
                        s: ".ui-resizable-s",
                        w: ".ui-resizable-w",
                        se: ".ui-resizable-se",
                        sw: ".ui-resizable-sw",
                        ne: ".ui-resizable-ne",
                        nw: ".ui-resizable-nw"
                    });

            this._handles = $();
            if (this.handles.constructor === String) {

                if (this.handles === "all") {
                    this.handles = "n,e,s,w,se,sw,ne,nw";
                }

                n = this.handles.split(",");
                this.handles = {};

                for (i = 0; i < n.length; i++) {

                    handle = $.trim(n[i]);
                    hname = "ui-resizable-" + handle;
                    axis = $("<div>");
                    this._addClass(axis, "ui-resizable-handle " + hname);

                    axis.css({ zIndex: o.zIndex });

                    this.handles[handle] = ".ui-resizable-" + handle;
                    this.element.append(axis);
                }

            }

            this._renderAxis = function (target) {

                var i, axis, padPos, padWrapper;

                target = target || this.element;

                for (i in this.handles) {

                    if (this.handles[i].constructor === String) {
                        this.handles[i] = this.element.children(this.handles[i]).first().show();
                    } else if (this.handles[i].jquery || this.handles[i].nodeType) {
                        this.handles[i] = $(this.handles[i]);
                        this._on(this.handles[i], { "mousedown": that._mouseDown });
                    }

                    if (this.elementIsWrapper &&
                        this.originalElement[0]
                            .nodeName
                            .match(/^(textarea|input|select|button)$/i)) {
                        axis = $(this.handles[i], this.element);

                        padWrapper = /sw|ne|nw|se|n|s/.test(i) ?
                            axis.outerHeight() :
                            axis.outerWidth();

                        padPos = ["padding",
                            /ne|nw|n/.test(i) ? "Top" :
                                /se|sw|s/.test(i) ? "Bottom" :
                                    /^e$/.test(i) ? "Right" : "Left"].join("");

                        target.css(padPos, padWrapper);

                        this._proportionallyResize();
                    }

                    this._handles = this._handles.add(this.handles[i]);
                }
            };

            // TODO: make renderAxis a prototype function
            this._renderAxis(this.element);

            this._handles = this._handles.add(this.element.find(".ui-resizable-handle"));
            this._handles.disableSelection();

            this._handles.on("mouseover", function () {
                if (!that.resizing) {
                    if (this.className) {
                        axis = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);
                    }
                    that.axis = axis && axis[1] ? axis[1] : "se";
                }
            });

            if (o.autoHide) {
                this._handles.hide();
                this._addClass("ui-resizable-autohide");
            }
        },

        _removeHandles: function () {
            this._handles.remove();
        },

        _mouseCapture: function (event) {
            var i, handle,
                capture = false;

            for (i in this.handles) {
                handle = $(this.handles[i])[0];
                if (handle === event.target || $.contains(handle, event.target)) {
                    capture = true;
                }
            }

            return !this.options.disabled && capture;
        },

        _mouseStart: function (event) {

            var curleft, curtop, cursor,
                o = this.options,
                el = this.element;

            this.resizing = true;

            this._renderProxy();

            curleft = this._num(this.helper.css("left"));
            curtop = this._num(this.helper.css("top"));

            if (o.containment) {
                curleft += $(o.containment).scrollLeft() || 0;
                curtop += $(o.containment).scrollTop() || 0;
            }

            this.offset = this.helper.offset();
            this.position = { left: curleft, top: curtop };

            this.size = this._helper ? {
                width: this.helper.width(),
                height: this.helper.height()
            } : {
                width: el.width(),
                height: el.height()
            };

            this.originalSize = this._helper ? {
                width: el.outerWidth(),
                height: el.outerHeight()
            } : {
                width: el.width(),
                height: el.height()
            };

            this.sizeDiff = {
                width: el.outerWidth() - el.width(),
                height: el.outerHeight() - el.height()
            };

            this.originalPosition = { left: curleft, top: curtop };
            this.originalMousePosition = { left: event.pageX, top: event.pageY };

            this.aspectRatio = (typeof o.aspectRatio === "number") ?
                o.aspectRatio :
                ((this.originalSize.width / this.originalSize.height) || 1);

            cursor = $(".ui-resizable-" + this.axis).css("cursor");
            $("body").css("cursor", cursor === "auto" ? this.axis + "-resize" : cursor);

            this._addClass("ui-resizable-resizing");
            this._propagate("start", event);
            return true;
        },

        _mouseDrag: function (event) {

            var data, props,
                smp = this.originalMousePosition,
                a = this.axis,
                dx = (event.pageX - smp.left) || 0,
                dy = (event.pageY - smp.top) || 0,
                trigger = this._change[a];

            this._updatePrevProperties();

            if (!trigger) {
                return false;
            }

            data = trigger.apply(this, [event, dx, dy]);

            this._updateVirtualBoundaries(event.shiftKey);
            if (this._aspectRatio || event.shiftKey) {
                data = this._updateRatio(data, event);
            }

            data = this._respectSize(data, event);

            this._updateCache(data);

            this._propagate("resize", event);

            props = this._applyChanges();

            if (!this._helper && this._proportionallyResizeElements.length) {
                this._proportionallyResize();
            }

            if (!$.isEmptyObject(props)) {
                this._updatePrevProperties();
                this._trigger("resize", event, this.ui());
                this._applyChanges();
            }

            return false;
        },

        _mouseStop: function (event) {

            this.resizing = false;
            var pr, ista, soffseth, soffsetw, s, left, top,
                o = this.options, that = this;

            if (this._helper) {

                pr = this._proportionallyResizeElements;
                ista = pr.length && (/textarea/i).test(pr[0].nodeName);
                soffseth = ista && this._hasScroll(pr[0], "left") ? 0 : that.sizeDiff.height;
                soffsetw = ista ? 0 : that.sizeDiff.width;

                s = {
                    width: (that.helper.width() - soffsetw),
                    height: (that.helper.height() - soffseth)
                };
                left = (parseFloat(that.element.css("left")) +
                    (that.position.left - that.originalPosition.left)) || null;
                top = (parseFloat(that.element.css("top")) +
                    (that.position.top - that.originalPosition.top)) || null;

                if (!o.animate) {
                    this.element.css($.extend(s, { top: top, left: left }));
                }

                that.helper.height(that.size.height);
                that.helper.width(that.size.width);

                if (this._helper && !o.animate) {
                    this._proportionallyResize();
                }
            }

            $("body").css("cursor", "auto");

            this._removeClass("ui-resizable-resizing");

            this._propagate("stop", event);

            if (this._helper) {
                this.helper.remove();
            }

            return false;

        },

        _updatePrevProperties: function () {
            this.prevPosition = {
                top: this.position.top,
                left: this.position.left
            };
            this.prevSize = {
                width: this.size.width,
                height: this.size.height
            };
        },

        _applyChanges: function () {
            var props = {};

            if (this.position.top !== this.prevPosition.top) {
                props.top = this.position.top + "px";
            }
            if (this.position.left !== this.prevPosition.left) {
                props.left = this.position.left + "px";
            }
            if (this.size.width !== this.prevSize.width) {
                props.width = this.size.width + "px";
            }
            if (this.size.height !== this.prevSize.height) {
                props.height = this.size.height + "px";
            }

            this.helper.css(props);

            return props;
        },

        _updateVirtualBoundaries: function (forceAspectRatio) {
            var pMinWidth, pMaxWidth, pMinHeight, pMaxHeight, b,
                o = this.options;

            b = {
                minWidth: this._isNumber(o.minWidth) ? o.minWidth : 0,
                maxWidth: this._isNumber(o.maxWidth) ? o.maxWidth : Infinity,
                minHeight: this._isNumber(o.minHeight) ? o.minHeight : 0,
                maxHeight: this._isNumber(o.maxHeight) ? o.maxHeight : Infinity
            };

            if (this._aspectRatio || forceAspectRatio) {
                pMinWidth = b.minHeight * this.aspectRatio;
                pMinHeight = b.minWidth / this.aspectRatio;
                pMaxWidth = b.maxHeight * this.aspectRatio;
                pMaxHeight = b.maxWidth / this.aspectRatio;

                if (pMinWidth > b.minWidth) {
                    b.minWidth = pMinWidth;
                }
                if (pMinHeight > b.minHeight) {
                    b.minHeight = pMinHeight;
                }
                if (pMaxWidth < b.maxWidth) {
                    b.maxWidth = pMaxWidth;
                }
                if (pMaxHeight < b.maxHeight) {
                    b.maxHeight = pMaxHeight;
                }
            }
            this._vBoundaries = b;
        },

        _updateCache: function (data) {
            this.offset = this.helper.offset();
            if (this._isNumber(data.left)) {
                this.position.left = data.left;
            }
            if (this._isNumber(data.top)) {
                this.position.top = data.top;
            }
            if (this._isNumber(data.height)) {
                this.size.height = data.height;
            }
            if (this._isNumber(data.width)) {
                this.size.width = data.width;
            }
        },

        _updateRatio: function (data) {

            var cpos = this.position,
                csize = this.size,
                a = this.axis;

            if (this._isNumber(data.height)) {
                data.width = (data.height * this.aspectRatio);
            } else if (this._isNumber(data.width)) {
                data.height = (data.width / this.aspectRatio);
            }

            if (a === "sw") {
                data.left = cpos.left + (csize.width - data.width);
                data.top = null;
            }
            if (a === "nw") {
                data.top = cpos.top + (csize.height - data.height);
                data.left = cpos.left + (csize.width - data.width);
            }

            return data;
        },

        _respectSize: function (data) {

            var o = this._vBoundaries,
                a = this.axis,
                ismaxw = this._isNumber(data.width) && o.maxWidth && (o.maxWidth < data.width),
                ismaxh = this._isNumber(data.height) && o.maxHeight && (o.maxHeight < data.height),
                isminw = this._isNumber(data.width) && o.minWidth && (o.minWidth > data.width),
                isminh = this._isNumber(data.height) && o.minHeight && (o.minHeight > data.height),
                dw = this.originalPosition.left + this.originalSize.width,
                dh = this.originalPosition.top + this.originalSize.height,
                cw = /sw|nw|w/.test(a), ch = /nw|ne|n/.test(a);
            if (isminw) {
                data.width = o.minWidth;
            }
            if (isminh) {
                data.height = o.minHeight;
            }
            if (ismaxw) {
                data.width = o.maxWidth;
            }
            if (ismaxh) {
                data.height = o.maxHeight;
            }

            if (isminw && cw) {
                data.left = dw - o.minWidth;
            }
            if (ismaxw && cw) {
                data.left = dw - o.maxWidth;
            }
            if (isminh && ch) {
                data.top = dh - o.minHeight;
            }
            if (ismaxh && ch) {
                data.top = dh - o.maxHeight;
            }

            // Fixing jump error on top/left - bug #2330
            if (!data.width && !data.height && !data.left && data.top) {
                data.top = null;
            } else if (!data.width && !data.height && !data.top && data.left) {
                data.left = null;
            }

            return data;
        },

        _getPaddingPlusBorderDimensions: function (element) {
            var i = 0,
                widths = [],
                borders = [
                    element.css("borderTopWidth"),
                    element.css("borderRightWidth"),
                    element.css("borderBottomWidth"),
                    element.css("borderLeftWidth")
                ],
                paddings = [
                    element.css("paddingTop"),
                    element.css("paddingRight"),
                    element.css("paddingBottom"),
                    element.css("paddingLeft")
                ];

            for (; i < 4; i++) {
                widths[i] = (parseFloat(borders[i]) || 0);
                widths[i] += (parseFloat(paddings[i]) || 0);
            }

            return {
                height: widths[0] + widths[2],
                width: widths[1] + widths[3]
            };
        },

        _proportionallyResize: function () {

            if (!this._proportionallyResizeElements.length) {
                return;
            }

            var prel,
                i = 0,
                element = this.helper || this.element;

            for (; i < this._proportionallyResizeElements.length; i++) {

                prel = this._proportionallyResizeElements[i];

                // TODO: Seems like a bug to cache this.outerDimensions
                // considering that we are in a loop.
                if (!this.outerDimensions) {
                    this.outerDimensions = this._getPaddingPlusBorderDimensions(prel);
                }

                prel.css({
                    height: (element.height() - this.outerDimensions.height) || 0,
                    width: (element.width() - this.outerDimensions.width) || 0
                });

            }

        },

        _renderProxy: function () {

            var el = this.element, o = this.options;
            this.elementOffset = el.offset();

            if (this._helper) {

                this.helper = this.helper || $("<div style='overflow:hidden;'></div>");

                this._addClass(this.helper, this._helper);
                this.helper.css({
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight(),
                    position: "absolute",
                    left: this.elementOffset.left + "px",
                    top: this.elementOffset.top + "px",
                    zIndex: ++o.zIndex //TODO: Don't modify option
                });

                this.helper
                    .appendTo("body")
                    .disableSelection();

            } else {
                this.helper = this.element;
            }

        },

        _change: {
            e: function (event, dx) {
                return { width: this.originalSize.width + dx };
            },
            w: function (event, dx) {
                var cs = this.originalSize, sp = this.originalPosition;
                return { left: sp.left + dx, width: cs.width - dx };
            },
            n: function (event, dx, dy) {
                var cs = this.originalSize, sp = this.originalPosition;
                return { top: sp.top + dy, height: cs.height - dy };
            },
            s: function (event, dx, dy) {
                return { height: this.originalSize.height + dy };
            },
            se: function (event, dx, dy) {
                return $.extend(this._change.s.apply(this, arguments),
                    this._change.e.apply(this, [event, dx, dy]));
            },
            sw: function (event, dx, dy) {
                return $.extend(this._change.s.apply(this, arguments),
                    this._change.w.apply(this, [event, dx, dy]));
            },
            ne: function (event, dx, dy) {
                return $.extend(this._change.n.apply(this, arguments),
                    this._change.e.apply(this, [event, dx, dy]));
            },
            nw: function (event, dx, dy) {
                return $.extend(this._change.n.apply(this, arguments),
                    this._change.w.apply(this, [event, dx, dy]));
            }
        },

        _propagate: function (n, event) {
            $.ui.plugin.call(this, n, [event, this.ui()]);
            (n !== "resize" && this._trigger(n, event, this.ui()));
        },

        plugins: {},

        ui: function () {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            };
        }

    });

    /*
     * Resizable Extensions
     */

    $.ui.plugin.add("resizable", "animate", {

        stop: function (event) {
            var that = $(this).resizable("instance"),
                o = that.options,
                pr = that._proportionallyResizeElements,
                ista = pr.length && (/textarea/i).test(pr[0].nodeName),
                soffseth = ista && that._hasScroll(pr[0], "left") ? 0 : that.sizeDiff.height,
                soffsetw = ista ? 0 : that.sizeDiff.width,
                style = {
                    width: (that.size.width - soffsetw),
                    height: (that.size.height - soffseth)
                },
                left = (parseFloat(that.element.css("left")) +
                    (that.position.left - that.originalPosition.left)) || null,
                top = (parseFloat(that.element.css("top")) +
                    (that.position.top - that.originalPosition.top)) || null;

            that.element.animate(
                $.extend(style, top && left ? { top: top, left: left } : {}), {
                duration: o.animateDuration,
                easing: o.animateEasing,
                step: function () {

                    var data = {
                        width: parseFloat(that.element.css("width")),
                        height: parseFloat(that.element.css("height")),
                        top: parseFloat(that.element.css("top")),
                        left: parseFloat(that.element.css("left"))
                    };

                    if (pr && pr.length) {
                        $(pr[0]).css({ width: data.width, height: data.height });
                    }

                    // Propagating resize, and updating values for each animation step
                    that._updateCache(data);
                    that._propagate("resize", event);

                }
            }
            );
        }

    });

    $.ui.plugin.add("resizable", "containment", {

        start: function () {
            var element, p, co, ch, cw, width, height,
                that = $(this).resizable("instance"),
                o = that.options,
                el = that.element,
                oc = o.containment,
                ce = (oc instanceof $) ?
                    oc.get(0) :
                    (/parent/.test(oc)) ? el.parent().get(0) : oc;

            if (!ce) {
                return;
            }

            that.containerElement = $(ce);

            if (/document/.test(oc) || oc === document) {
                that.containerOffset = {
                    left: 0,
                    top: 0
                };
                that.containerPosition = {
                    left: 0,
                    top: 0
                };

                that.parentData = {
                    element: $(document),
                    left: 0,
                    top: 0,
                    width: $(document).width(),
                    height: $(document).height() || document.body.parentNode.scrollHeight
                };
            } else {
                element = $(ce);
                p = [];
                $(["Top", "Right", "Left", "Bottom"]).each(function (i, name) {
                    p[i] = that._num(element.css("padding" + name));
                });

                that.containerOffset = element.offset();
                that.containerPosition = element.position();
                that.containerSize = {
                    height: (element.innerHeight() - p[3]),
                    width: (element.innerWidth() - p[1])
                };

                co = that.containerOffset;
                ch = that.containerSize.height;
                cw = that.containerSize.width;
                width = (that._hasScroll(ce, "left") ? ce.scrollWidth : cw);
                height = (that._hasScroll(ce) ? ce.scrollHeight : ch);

                that.parentData = {
                    element: ce,
                    left: co.left,
                    top: co.top,
                    width: width,
                    height: height
                };
            }
        },

        resize: function (event) {
            var woset, hoset, isParent, isOffsetRelative,
                that = $(this).resizable("instance"),
                o = that.options,
                co = that.containerOffset,
                cp = that.position,
                pRatio = that._aspectRatio || event.shiftKey,
                cop = {
                    top: 0,
                    left: 0
                },
                ce = that.containerElement,
                continueResize = true;

            if (ce[0] !== document && (/static/).test(ce.css("position"))) {
                cop = co;
            }

            if (cp.left < (that._helper ? co.left : 0)) {
                that.size.width = that.size.width +
                    (that._helper ?
                        (that.position.left - co.left) :
                        (that.position.left - cop.left));

                if (pRatio) {
                    that.size.height = that.size.width / that.aspectRatio;
                    continueResize = false;
                }
                that.position.left = o.helper ? co.left : 0;
            }

            if (cp.top < (that._helper ? co.top : 0)) {
                that.size.height = that.size.height +
                    (that._helper ?
                        (that.position.top - co.top) :
                        that.position.top);

                if (pRatio) {
                    that.size.width = that.size.height * that.aspectRatio;
                    continueResize = false;
                }
                that.position.top = that._helper ? co.top : 0;
            }

            isParent = that.containerElement.get(0) === that.element.parent().get(0);
            isOffsetRelative = /relative|absolute/.test(that.containerElement.css("position"));

            if (isParent && isOffsetRelative) {
                that.offset.left = that.parentData.left + that.position.left;
                that.offset.top = that.parentData.top + that.position.top;
            } else {
                that.offset.left = that.element.offset().left;
                that.offset.top = that.element.offset().top;
            }

            woset = Math.abs(that.sizeDiff.width +
                (that._helper ?
                    that.offset.left - cop.left :
                    (that.offset.left - co.left)));

            hoset = Math.abs(that.sizeDiff.height +
                (that._helper ?
                    that.offset.top - cop.top :
                    (that.offset.top - co.top)));

            if (woset + that.size.width >= that.parentData.width) {
                that.size.width = that.parentData.width - woset;
                if (pRatio) {
                    that.size.height = that.size.width / that.aspectRatio;
                    continueResize = false;
                }
            }

            if (hoset + that.size.height >= that.parentData.height) {
                that.size.height = that.parentData.height - hoset;
                if (pRatio) {
                    that.size.width = that.size.height * that.aspectRatio;
                    continueResize = false;
                }
            }

            if (!continueResize) {
                that.position.left = that.prevPosition.left;
                that.position.top = that.prevPosition.top;
                that.size.width = that.prevSize.width;
                that.size.height = that.prevSize.height;
            }
        },

        stop: function () {
            var that = $(this).resizable("instance"),
                o = that.options,
                co = that.containerOffset,
                cop = that.containerPosition,
                ce = that.containerElement,
                helper = $(that.helper),
                ho = helper.offset(),
                w = helper.outerWidth() - that.sizeDiff.width,
                h = helper.outerHeight() - that.sizeDiff.height;

            if (that._helper && !o.animate && (/relative/).test(ce.css("position"))) {
                $(this).css({
                    left: ho.left - cop.left - co.left,
                    width: w,
                    height: h
                });
            }

            if (that._helper && !o.animate && (/static/).test(ce.css("position"))) {
                $(this).css({
                    left: ho.left - cop.left - co.left,
                    width: w,
                    height: h
                });
            }
        }
    });

    $.ui.plugin.add("resizable", "alsoResize", {

        start: function () {
            var that = $(this).resizable("instance"),
                o = that.options;

            $(o.alsoResize).each(function () {
                var el = $(this);
                el.data("ui-resizable-alsoresize", {
                    width: parseFloat(el.width()), height: parseFloat(el.height()),
                    left: parseFloat(el.css("left")), top: parseFloat(el.css("top"))
                });
            });
        },

        resize: function (event, ui) {
            var that = $(this).resizable("instance"),
                o = that.options,
                os = that.originalSize,
                op = that.originalPosition,
                delta = {
                    height: (that.size.height - os.height) || 0,
                    width: (that.size.width - os.width) || 0,
                    top: (that.position.top - op.top) || 0,
                    left: (that.position.left - op.left) || 0
                };

            $(o.alsoResize).each(function () {
                var el = $(this), start = $(this).data("ui-resizable-alsoresize"), style = {},
                    css = el.parents(ui.originalElement[0]).length ?
                        ["width", "height"] :
                        ["width", "height", "top", "left"];

                $.each(css, function (i, prop) {
                    var sum = (start[prop] || 0) + (delta[prop] || 0);
                    if (sum && sum >= 0) {
                        style[prop] = sum || null;
                    }
                });

                el.css(style);
            });
        },

        stop: function () {
            $(this).removeData("ui-resizable-alsoresize");
        }
    });

    $.ui.plugin.add("resizable", "ghost", {

        start: function () {

            var that = $(this).resizable("instance"), cs = that.size;

            that.ghost = that.originalElement.clone();
            that.ghost.css({
                opacity: 0.25,
                display: "block",
                position: "relative",
                height: cs.height,
                width: cs.width,
                margin: 0,
                left: 0,
                top: 0
            });

            that._addClass(that.ghost, "ui-resizable-ghost");

            // DEPRECATED
            // TODO: remove after 1.12
            if ($.uiBackCompat !== false && typeof that.options.ghost === "string") {

                // Ghost option
                that.ghost.addClass(this.options.ghost);
            }

            that.ghost.appendTo(that.helper);

        },

        resize: function () {
            var that = $(this).resizable("instance");
            if (that.ghost) {
                that.ghost.css({
                    position: "relative",
                    height: that.size.height,
                    width: that.size.width
                });
            }
        },

        stop: function () {
            var that = $(this).resizable("instance");
            if (that.ghost && that.helper) {
                that.helper.get(0).removeChild(that.ghost.get(0));
            }
        }

    });

    $.ui.plugin.add("resizable", "grid", {

        resize: function () {
            var outerDimensions,
                that = $(this).resizable("instance"),
                o = that.options,
                cs = that.size,
                os = that.originalSize,
                op = that.originalPosition,
                a = that.axis,
                grid = typeof o.grid === "number" ? [o.grid, o.grid] : o.grid,
                gridX = (grid[0] || 1),
                gridY = (grid[1] || 1),
                ox = Math.round((cs.width - os.width) / gridX) * gridX,
                oy = Math.round((cs.height - os.height) / gridY) * gridY,
                newWidth = os.width + ox,
                newHeight = os.height + oy,
                isMaxWidth = o.maxWidth && (o.maxWidth < newWidth),
                isMaxHeight = o.maxHeight && (o.maxHeight < newHeight),
                isMinWidth = o.minWidth && (o.minWidth > newWidth),
                isMinHeight = o.minHeight && (o.minHeight > newHeight);

            o.grid = grid;

            if (isMinWidth) {
                newWidth += gridX;
            }
            if (isMinHeight) {
                newHeight += gridY;
            }
            if (isMaxWidth) {
                newWidth -= gridX;
            }
            if (isMaxHeight) {
                newHeight -= gridY;
            }

            if (/^(se|s|e)$/.test(a)) {
                that.size.width = newWidth;
                that.size.height = newHeight;
            } else if (/^(ne)$/.test(a)) {
                that.size.width = newWidth;
                that.size.height = newHeight;
                that.position.top = op.top - oy;
            } else if (/^(sw)$/.test(a)) {
                that.size.width = newWidth;
                that.size.height = newHeight;
                that.position.left = op.left - ox;
            } else {
                if (newHeight - gridY <= 0 || newWidth - gridX <= 0) {
                    outerDimensions = that._getPaddingPlusBorderDimensions(this);
                }

                if (newHeight - gridY > 0) {
                    that.size.height = newHeight;
                    that.position.top = op.top - oy;
                } else {
                    newHeight = gridY - outerDimensions.height;
                    that.size.height = newHeight;
                    that.position.top = op.top + os.height - newHeight;
                }
                if (newWidth - gridX > 0) {
                    that.size.width = newWidth;
                    that.position.left = op.left - ox;
                } else {
                    newWidth = gridX - outerDimensions.width;
                    that.size.width = newWidth;
                    that.position.left = op.left + os.width - newWidth;
                }
            }
        }

    });

    var widgetsResizable = $.ui.resizable;


    /*!
     * jQuery UI Dialog 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */

    //>>label: Dialog
    //>>group: Widgets
    //>>description: Displays customizable dialog windows.
    //>>docs: http://api.jqueryui.com/dialog/
    //>>demos: http://jqueryui.com/dialog/
    //>>css.structure: ../../themes/base/core.css
    //>>css.structure: ../../themes/base/dialog.css
    //>>css.theme: ../../themes/base/theme.css



    $.widget("ui.dialog", {
        version: "1.12.1",
        options: {
            appendTo: "body",
            autoOpen: true,
            buttons: [],
            classes: {
                "ui-dialog": "ui-corner-all",
                "ui-dialog-titlebar": "ui-corner-all"
            },
            closeOnEscape: true,
            closeText: "Close",
            draggable: true,
            hide: null,
            height: "auto",
            maxHeight: null,
            maxWidth: null,
            minHeight: 150,
            minWidth: 150,
            modal: false,
            position: {
                my: "center",
                at: "center",
                of: window,
                collision: "fit",

                // Ensure the titlebar is always visible
                using: function (pos) {
                    var topOffset = $(this).css(pos).offset().top;
                    if (topOffset < 0) {
                        $(this).css("top", pos.top - topOffset);
                    }
                }
            },
            resizable: true,
            show: null,
            title: null,
            width: 300,

            // Callbacks
            beforeClose: null,
            close: null,
            drag: null,
            dragStart: null,
            dragStop: null,
            focus: null,
            open: null,
            resize: null,
            resizeStart: null,
            resizeStop: null
        },

        sizeRelatedOptions: {
            buttons: true,
            height: true,
            maxHeight: true,
            maxWidth: true,
            minHeight: true,
            minWidth: true,
            width: true
        },

        resizableRelatedOptions: {
            maxHeight: true,
            maxWidth: true,
            minHeight: true,
            minWidth: true
        },

        _create: function () {
            this.originalCss = {
                display: this.element[0].style.display,
                width: this.element[0].style.width,
                minHeight: this.element[0].style.minHeight,
                maxHeight: this.element[0].style.maxHeight,
                height: this.element[0].style.height
            };
            this.originalPosition = {
                parent: this.element.parent(),
                index: this.element.parent().children().index(this.element)
            };
            this.originalTitle = this.element.attr("title");
            if (this.options.title == null && this.originalTitle != null) {
                this.options.title = this.originalTitle;
            }

            // Dialogs can't be disabled
            if (this.options.disabled) {
                this.options.disabled = false;
            }

            this._createWrapper();

            this.element
                .show()
                .removeAttr("title")
                .appendTo(this.uiDialog);

            this._addClass("ui-dialog-content", "ui-widget-content");

            this._createTitlebar();
            this._createButtonPane();

            if (this.options.draggable && $.fn.draggable) {
                this._makeDraggable();
            }
            if (this.options.resizable && $.fn.resizable) {
                this._makeResizable();
            }

            this._isOpen = false;

            this._trackFocus();
        },

        _init: function () {
            if (this.options.autoOpen) {
                this.open();
            }
        },

        _appendTo: function () {
            var element = this.options.appendTo;
            if (element && (element.jquery || element.nodeType)) {
                return $(element);
            }
            return this.document.find(element || "body").eq(0);
        },

        _destroy: function () {
            var next,
                originalPosition = this.originalPosition;

            this._untrackInstance();
            this._destroyOverlay();

            this.element
                .removeUniqueId()
                .css(this.originalCss)

                // Without detaching first, the following becomes really slow
                .detach();

            this.uiDialog.remove();

            if (this.originalTitle) {
                this.element.attr("title", this.originalTitle);
            }

            next = originalPosition.parent.children().eq(originalPosition.index);

            // Don't try to place the dialog next to itself (#8613)
            if (next.length && next[0] !== this.element[0]) {
                next.before(this.element);
            } else {
                originalPosition.parent.append(this.element);
            }
        },

        widget: function () {
            return this.uiDialog;
        },

        disable: $.noop,
        enable: $.noop,

        close: function (event) {
            var that = this;

            if (!this._isOpen || this._trigger("beforeClose", event) === false) {
                return;
            }

            this._isOpen = false;
            this._focusedElement = null;
            this._destroyOverlay();
            this._untrackInstance();

            if (!this.opener.filter(":focusable").trigger("focus").length) {

                // Hiding a focused element doesn't trigger blur in WebKit
                // so in case we have nothing to focus on, explicitly blur the active element
                // https://bugs.webkit.org/show_bug.cgi?id=47182
                $.ui.safeBlur($.ui.safeActiveElement(this.document[0]));
            }

            this._hide(this.uiDialog, this.options.hide, function () {
                that._trigger("close", event);
            });
        },

        isOpen: function () {
            return this._isOpen;
        },

        moveToTop: function () {
            this._moveToTop();
        },

        _moveToTop: function (event, silent) {
            var moved = false,
                zIndices = this.uiDialog.siblings(".ui-front:visible").map(function () {
                    return +$(this).css("z-index");
                }).get(),
                zIndexMax = Math.max.apply(null, zIndices);

            if (zIndexMax >= +this.uiDialog.css("z-index")) {
                this.uiDialog.css("z-index", zIndexMax + 1);
                moved = true;
            }

            if (moved && !silent) {
                this._trigger("focus", event);
            }
            return moved;
        },

        open: function () {
            var that = this;
            if (this._isOpen) {
                if (this._moveToTop()) {
                    this._focusTabbable();
                }
                return;
            }

            this._isOpen = true;
            this.opener = $($.ui.safeActiveElement(this.document[0]));

            this._size();
            this._position();
            this._createOverlay();
            this._moveToTop(null, true);

            // Ensure the overlay is moved to the top with the dialog, but only when
            // opening. The overlay shouldn't move after the dialog is open so that
            // modeless dialogs opened after the modal dialog stack properly.
            if (this.overlay) {
                this.overlay.css("z-index", this.uiDialog.css("z-index") - 1);
            }

            this._show(this.uiDialog, this.options.show, function () {
                that._focusTabbable();
                that._trigger("focus");
            });

            // Track the dialog immediately upon openening in case a focus event
            // somehow occurs outside of the dialog before an element inside the
            // dialog is focused (#10152)
            this._makeFocusTarget();

            this._trigger("open");
        },

        _focusTabbable: function () {

            // Set focus to the first match:
            // 1. An element that was focused previously
            // 2. First element inside the dialog matching [autofocus]
            // 3. Tabbable element inside the content element
            // 4. Tabbable element inside the buttonpane
            // 5. The close button
            // 6. The dialog itself
            var hasFocus = this._focusedElement;
            if (!hasFocus) {
                hasFocus = this.element.find("[autofocus]");
            }
            if (!hasFocus.length) {
                hasFocus = this.element.find(":tabbable");
            }
            if (!hasFocus.length) {
                hasFocus = this.uiDialogButtonPane.find(":tabbable");
            }
            if (!hasFocus.length) {
                hasFocus = this.uiDialogTitlebarClose.filter(":tabbable");
            }
            if (!hasFocus.length) {
                hasFocus = this.uiDialog;
            }
            hasFocus.eq(0).trigger("focus");
        },

        _keepFocus: function (event) {
            function checkFocus() {
                var activeElement = $.ui.safeActiveElement(this.document[0]),
                    isActive = this.uiDialog[0] === activeElement ||
                        $.contains(this.uiDialog[0], activeElement);
                if (!isActive) {
                    this._focusTabbable();
                }
            }
            event.preventDefault();
            checkFocus.call(this);

            // support: IE
            // IE <= 8 doesn't prevent moving focus even with event.preventDefault()
            // so we check again later
            this._delay(checkFocus);
        },

        _createWrapper: function () {
            this.uiDialog = $("<div>")
                .hide()
                .attr({

                    // Setting tabIndex makes the div focusable
                    tabIndex: -1,
                    role: "dialog"
                })
                .appendTo(this._appendTo());

            this._addClass(this.uiDialog, "ui-dialog", "ui-widget ui-widget-content ui-front");
            this._on(this.uiDialog, {
                keydown: function (event) {
                    if (this.options.closeOnEscape && !event.isDefaultPrevented() && event.keyCode &&
                        event.keyCode === $.ui.keyCode.ESCAPE) {
                        event.preventDefault();
                        this.close(event);
                        return;
                    }

                    // Prevent tabbing out of dialogs
                    if (event.keyCode !== $.ui.keyCode.TAB || event.isDefaultPrevented()) {
                        return;
                    }
                    var tabbables = this.uiDialog.find(":tabbable"),
                        first = tabbables.filter(":first"),
                        last = tabbables.filter(":last");

                    if ((event.target === last[0] || event.target === this.uiDialog[0]) &&
                        !event.shiftKey) {
                        this._delay(function () {
                            first.trigger("focus");
                        });
                        event.preventDefault();
                    } else if ((event.target === first[0] ||
                        event.target === this.uiDialog[0]) && event.shiftKey) {
                        this._delay(function () {
                            last.trigger("focus");
                        });
                        event.preventDefault();
                    }
                },
                mousedown: function (event) {
                    if (this._moveToTop(event)) {
                        this._focusTabbable();
                    }
                }
            });

            // We assume that any existing aria-describedby attribute means
            // that the dialog content is marked up properly
            // otherwise we brute force the content as the description
            if (!this.element.find("[aria-describedby]").length) {
                this.uiDialog.attr({
                    "aria-describedby": this.element.uniqueId().attr("id")
                });
            }
        },

        _createTitlebar: function () {
            var uiDialogTitle;

            this.uiDialogTitlebar = $("<div>");
            this._addClass(this.uiDialogTitlebar,
                "ui-dialog-titlebar", "ui-widget-header ui-helper-clearfix");
            this._on(this.uiDialogTitlebar, {
                mousedown: function (event) {

                    // Don't prevent click on close button (#8838)
                    // Focusing a dialog that is partially scrolled out of view
                    // causes the browser to scroll it into view, preventing the click event
                    if (!$(event.target).closest(".ui-dialog-titlebar-close")) {

                        // Dialog isn't getting focus when dragging (#8063)
                        this.uiDialog.trigger("focus");
                    }
                }
            });

            // Support: IE
            // Use type="button" to prevent enter keypresses in textboxes from closing the
            // dialog in IE (#9312)
            this.uiDialogTitlebarClose = $("<button type='button'></button>")
                .button({
                    label: $("<a>").text(this.options.closeText).html(),
                    icon: "ui-icon-closethick",
                    showLabel: false
                })
                .appendTo(this.uiDialogTitlebar);

            this._addClass(this.uiDialogTitlebarClose, "ui-dialog-titlebar-close");
            this._on(this.uiDialogTitlebarClose, {
                click: function (event) {
                    event.preventDefault();
                    this.close(event);
                }
            });

            uiDialogTitle = $("<span>").uniqueId().prependTo(this.uiDialogTitlebar);
            this._addClass(uiDialogTitle, "ui-dialog-title");
            this._title(uiDialogTitle);

            this.uiDialogTitlebar.prependTo(this.uiDialog);

            this.uiDialog.attr({
                "aria-labelledby": uiDialogTitle.attr("id")
            });
        },

        _title: function (title) {
            if (this.options.title) {
                title.text(this.options.title);
            } else {
                title.html("&#160;");
            }
        },

        _createButtonPane: function () {
            this.uiDialogButtonPane = $("<div>");
            this._addClass(this.uiDialogButtonPane, "ui-dialog-buttonpane",
                "ui-widget-content ui-helper-clearfix");

            this.uiButtonSet = $("<div>")
                .appendTo(this.uiDialogButtonPane);
            this._addClass(this.uiButtonSet, "ui-dialog-buttonset");

            this._createButtons();
        },

        _createButtons: function () {
            var that = this,
                buttons = this.options.buttons;

            // If we already have a button pane, remove it
            this.uiDialogButtonPane.remove();
            this.uiButtonSet.empty();

            if ($.isEmptyObject(buttons) || ($.isArray(buttons) && !buttons.length)) {
                this._removeClass(this.uiDialog, "ui-dialog-buttons");
                return;
            }

            $.each(buttons, function (name, props) {
                var click, buttonOptions;
                props = $.isFunction(props) ?
                    { click: props, text: name } :
                    props;

                // Default to a non-submitting button
                props = $.extend({ type: "button" }, props);

                // Change the context for the click callback to be the main element
                click = props.click;
                buttonOptions = {
                    icon: props.icon,
                    iconPosition: props.iconPosition,
                    showLabel: props.showLabel,

                    // Deprecated options
                    icons: props.icons,
                    text: props.text
                };

                delete props.click;
                delete props.icon;
                delete props.iconPosition;
                delete props.showLabel;

                // Deprecated options
                delete props.icons;
                if (typeof props.text === "boolean") {
                    delete props.text;
                }

                $("<button></button>", props)
                    .button(buttonOptions)
                    .appendTo(that.uiButtonSet)
                    .on("click", function () {
                        click.apply(that.element[0], arguments);
                    });
            });
            this._addClass(this.uiDialog, "ui-dialog-buttons");
            this.uiDialogButtonPane.appendTo(this.uiDialog);
        },

        _makeDraggable: function () {
            var that = this,
                options = this.options;

            function filteredUi(ui) {
                return {
                    position: ui.position,
                    offset: ui.offset
                };
            }

            this.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function (event, ui) {
                    that._addClass($(this), "ui-dialog-dragging");
                    that._blockFrames();
                    that._trigger("dragStart", event, filteredUi(ui));
                },
                drag: function (event, ui) {
                    that._trigger("drag", event, filteredUi(ui));
                },
                stop: function (event, ui) {
                    var left = ui.offset.left - that.document.scrollLeft(),
                        top = ui.offset.top - that.document.scrollTop();

                    options.position = {
                        my: "left top",
                        at: "left" + (left >= 0 ? "+" : "") + left + " " +
                            "top" + (top >= 0 ? "+" : "") + top,
                        of: that.window
                    };
                    that._removeClass($(this), "ui-dialog-dragging");
                    that._unblockFrames();
                    that._trigger("dragStop", event, filteredUi(ui));
                }
            });
        },

        _makeResizable: function () {
            var that = this,
                options = this.options,
                handles = options.resizable,

                // .ui-resizable has position: relative defined in the stylesheet
                // but dialogs have to use absolute or fixed positioning
                position = this.uiDialog.css("position"),
                resizeHandles = typeof handles === "string" ?
                    handles :
                    "n,e,s,w,se,sw,ne,nw";

            function filteredUi(ui) {
                return {
                    originalPosition: ui.originalPosition,
                    originalSize: ui.originalSize,
                    position: ui.position,
                    size: ui.size
                };
            }

            this.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: this.element,
                maxWidth: options.maxWidth,
                maxHeight: options.maxHeight,
                minWidth: options.minWidth,
                minHeight: this._minHeight(),
                handles: resizeHandles,
                start: function (event, ui) {
                    that._addClass($(this), "ui-dialog-resizing");
                    that._blockFrames();
                    that._trigger("resizeStart", event, filteredUi(ui));
                },
                resize: function (event, ui) {
                    that._trigger("resize", event, filteredUi(ui));
                },
                stop: function (event, ui) {
                    var offset = that.uiDialog.offset(),
                        left = offset.left - that.document.scrollLeft(),
                        top = offset.top - that.document.scrollTop();

                    options.height = that.uiDialog.height();
                    options.width = that.uiDialog.width();
                    options.position = {
                        my: "left top",
                        at: "left" + (left >= 0 ? "+" : "") + left + " " +
                            "top" + (top >= 0 ? "+" : "") + top,
                        of: that.window
                    };
                    that._removeClass($(this), "ui-dialog-resizing");
                    that._unblockFrames();
                    that._trigger("resizeStop", event, filteredUi(ui));
                }
            })
                .css("position", position);
        },

        _trackFocus: function () {
            this._on(this.widget(), {
                focusin: function (event) {
                    this._makeFocusTarget();
                    this._focusedElement = $(event.target);
                }
            });
        },

        _makeFocusTarget: function () {
            this._untrackInstance();
            this._trackingInstances().unshift(this);
        },

        _untrackInstance: function () {
            var instances = this._trackingInstances(),
                exists = $.inArray(this, instances);
            if (exists !== -1) {
                instances.splice(exists, 1);
            }
        },

        _trackingInstances: function () {
            var instances = this.document.data("ui-dialog-instances");
            if (!instances) {
                instances = [];
                this.document.data("ui-dialog-instances", instances);
            }
            return instances;
        },

        _minHeight: function () {
            var options = this.options;

            return options.height === "auto" ?
                options.minHeight :
                Math.min(options.minHeight, options.height);
        },

        _position: function () {

            // Need to show the dialog to get the actual offset in the position plugin
            var isVisible = this.uiDialog.is(":visible");
            if (!isVisible) {
                this.uiDialog.show();
            }
            this.uiDialog.position(this.options.position);
            if (!isVisible) {
                this.uiDialog.hide();
            }
        },

        _setOptions: function (options) {
            var that = this,
                resize = false,
                resizableOptions = {};

            $.each(options, function (key, value) {
                that._setOption(key, value);

                if (key in that.sizeRelatedOptions) {
                    resize = true;
                }
                if (key in that.resizableRelatedOptions) {
                    resizableOptions[key] = value;
                }
            });

            if (resize) {
                this._size();
                this._position();
            }
            if (this.uiDialog.is(":data(ui-resizable)")) {
                this.uiDialog.resizable("option", resizableOptions);
            }
        },

        _setOption: function (key, value) {
            var isDraggable, isResizable,
                uiDialog = this.uiDialog;

            if (key === "disabled") {
                return;
            }

            this._super(key, value);

            if (key === "appendTo") {
                this.uiDialog.appendTo(this._appendTo());
            }

            if (key === "buttons") {
                this._createButtons();
            }

            if (key === "closeText") {
                this.uiDialogTitlebarClose.button({

                    // Ensure that we always pass a string
                    label: $("<a>").text("" + this.options.closeText).html()
                });
            }

            if (key === "draggable") {
                isDraggable = uiDialog.is(":data(ui-draggable)");
                if (isDraggable && !value) {
                    uiDialog.draggable("destroy");
                }

                if (!isDraggable && value) {
                    this._makeDraggable();
                }
            }

            if (key === "position") {
                this._position();
            }

            if (key === "resizable") {

                // currently resizable, becoming non-resizable
                isResizable = uiDialog.is(":data(ui-resizable)");
                if (isResizable && !value) {
                    uiDialog.resizable("destroy");
                }

                // Currently resizable, changing handles
                if (isResizable && typeof value === "string") {
                    uiDialog.resizable("option", "handles", value);
                }

                // Currently non-resizable, becoming resizable
                if (!isResizable && value !== false) {
                    this._makeResizable();
                }
            }

            if (key === "title") {
                this._title(this.uiDialogTitlebar.find(".ui-dialog-title"));
            }
        },

        _size: function () {

            // If the user has resized the dialog, the .ui-dialog and .ui-dialog-content
            // divs will both have width and height set, so we need to reset them
            var nonContentHeight, minContentHeight, maxContentHeight,
                options = this.options;

            // Reset content sizing
            this.element.show().css({
                width: "auto",
                minHeight: 0,
                maxHeight: "none",
                height: 0
            });

            if (options.minWidth > options.width) {
                options.width = options.minWidth;
            }

            // Reset wrapper sizing
            // determine the height of all the non-content elements
            nonContentHeight = this.uiDialog.css({
                height: "auto",
                width: options.width
            })
                .outerHeight();
            minContentHeight = Math.max(0, options.minHeight - nonContentHeight);
            maxContentHeight = typeof options.maxHeight === "number" ?
                Math.max(0, options.maxHeight - nonContentHeight) :
                "none";

            if (options.height === "auto") {
                this.element.css({
                    minHeight: minContentHeight,
                    maxHeight: maxContentHeight,
                    height: "auto"
                });
            } else {
                this.element.height(Math.max(0, options.height - nonContentHeight));
            }

            if (this.uiDialog.is(":data(ui-resizable)")) {
                this.uiDialog.resizable("option", "minHeight", this._minHeight());
            }
        },

        _blockFrames: function () {
            this.iframeBlocks = this.document.find("iframe").map(function () {
                var iframe = $(this);

                return $("<div>")
                    .css({
                        position: "absolute",
                        width: iframe.outerWidth(),
                        height: iframe.outerHeight()
                    })
                    .appendTo(iframe.parent())
                    .offset(iframe.offset())[0];
            });
        },

        _unblockFrames: function () {
            if (this.iframeBlocks) {
                this.iframeBlocks.remove();
                delete this.iframeBlocks;
            }
        },

        _allowInteraction: function (event) {
            if ($(event.target).closest(".ui-dialog").length) {
                return true;
            }

            // TODO: Remove hack when datepicker implements
            // the .ui-front logic (#8989)
            return !!$(event.target).closest(".ui-datepicker").length;
        },

        _createOverlay: function () {
            if (!this.options.modal) {
                return;
            }

            // We use a delay in case the overlay is created from an
            // event that we're going to be cancelling (#2804)
            var isOpening = true;
            this._delay(function () {
                isOpening = false;
            });

            if (!this.document.data("ui-dialog-overlays")) {

                // Prevent use of anchors and inputs
                // Using _on() for an event handler shared across many instances is
                // safe because the dialogs stack and must be closed in reverse order
                this._on(this.document, {
                    focusin: function (event) {
                        if (isOpening) {
                            return;
                        }

                        if (!this._allowInteraction(event)) {
                            event.preventDefault();
                            this._trackingInstances()[0]._focusTabbable();
                        }
                    }
                });
            }

            this.overlay = $("<div>")
                .appendTo(this._appendTo());

            this._addClass(this.overlay, null, "ui-widget-overlay ui-front");
            this._on(this.overlay, {
                mousedown: "_keepFocus"
            });
            this.document.data("ui-dialog-overlays",
                (this.document.data("ui-dialog-overlays") || 0) + 1);
        },

        _destroyOverlay: function () {
            if (!this.options.modal) {
                return;
            }

            if (this.overlay) {
                var overlays = this.document.data("ui-dialog-overlays") - 1;

                if (!overlays) {
                    this._off(this.document, "focusin");
                    this.document.removeData("ui-dialog-overlays");
                } else {
                    this.document.data("ui-dialog-overlays", overlays);
                }

                this.overlay.remove();
                this.overlay = null;
            }
        }
    });

    // DEPRECATED
    // TODO: switch return back to widget declaration at top of file when this is removed
    if ($.uiBackCompat !== false) {

        // Backcompat for dialogClass option
        $.widget("ui.dialog", $.ui.dialog, {
            options: {
                dialogClass: ""
            },
            _createWrapper: function () {
                this._super();
                this.uiDialog.addClass(this.options.dialogClass);
            },
            _setOption: function (key, value) {
                if (key === "dialogClass") {
                    this.uiDialog
                        .removeClass(this.options.dialogClass)
                        .addClass(value);
                }
                this._superApply(arguments);
            }
        });
    }

    var widgetsDialog = $.ui.dialog;


    /*!
     * jQuery UI Droppable 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */

    //>>label: Droppable
    //>>group: Interactions
    //>>description: Enables drop targets for draggable elements.
    //>>docs: http://api.jqueryui.com/droppable/
    //>>demos: http://jqueryui.com/droppable/



    $.widget("ui.droppable", {
        version: "1.12.1",
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            addClasses: true,
            greedy: false,
            scope: "default",
            tolerance: "intersect",

            // Callbacks
            activate: null,
            deactivate: null,
            drop: null,
            out: null,
            over: null
        },
        _create: function () {

            var proportions,
                o = this.options,
                accept = o.accept;

            this.isover = false;
            this.isout = true;

            this.accept = $.isFunction(accept) ? accept : function (d) {
                return d.is(accept);
            };

            this.proportions = function ( /* valueToWrite */) {
                if (arguments.length) {

                    // Store the droppable's proportions
                    proportions = arguments[0];
                } else {

                    // Retrieve or derive the droppable's proportions
                    return proportions ?
                        proportions :
                        proportions = {
                            width: this.element[0].offsetWidth,
                            height: this.element[0].offsetHeight
                        };
                }
            };

            this._addToManager(o.scope);

            o.addClasses && this._addClass("ui-droppable");

        },

        _addToManager: function (scope) {

            // Add the reference and positions to the manager
            $.ui.ddmanager.droppables[scope] = $.ui.ddmanager.droppables[scope] || [];
            $.ui.ddmanager.droppables[scope].push(this);
        },

        _splice: function (drop) {
            var i = 0;
            for (; i < drop.length; i++) {
                if (drop[i] === this) {
                    drop.splice(i, 1);
                }
            }
        },

        _destroy: function () {
            var drop = $.ui.ddmanager.droppables[this.options.scope];

            this._splice(drop);
        },

        _setOption: function (key, value) {

            if (key === "accept") {
                this.accept = $.isFunction(value) ? value : function (d) {
                    return d.is(value);
                };
            } else if (key === "scope") {
                var drop = $.ui.ddmanager.droppables[this.options.scope];

                this._splice(drop);
                this._addToManager(value);
            }

            this._super(key, value);
        },

        _activate: function (event) {
            var draggable = $.ui.ddmanager.current;

            this._addActiveClass();
            if (draggable) {
                this._trigger("activate", event, this.ui(draggable));
            }
        },

        _deactivate: function (event) {
            var draggable = $.ui.ddmanager.current;

            this._removeActiveClass();
            if (draggable) {
                this._trigger("deactivate", event, this.ui(draggable));
            }
        },

        _over: function (event) {

            var draggable = $.ui.ddmanager.current;

            // Bail if draggable and droppable are same element
            if (!draggable || (draggable.currentItem ||
                draggable.element)[0] === this.element[0]) {
                return;
            }

            if (this.accept.call(this.element[0], (draggable.currentItem ||
                draggable.element))) {
                this._addHoverClass();
                this._trigger("over", event, this.ui(draggable));
            }

        },

        _out: function (event) {

            var draggable = $.ui.ddmanager.current;

            // Bail if draggable and droppable are same element
            if (!draggable || (draggable.currentItem ||
                draggable.element)[0] === this.element[0]) {
                return;
            }

            if (this.accept.call(this.element[0], (draggable.currentItem ||
                draggable.element))) {
                this._removeHoverClass();
                this._trigger("out", event, this.ui(draggable));
            }

        },

        _drop: function (event, custom) {

            var draggable = custom || $.ui.ddmanager.current,
                childrenIntersection = false;

            // Bail if draggable and droppable are same element
            if (!draggable || (draggable.currentItem ||
                draggable.element)[0] === this.element[0]) {
                return false;
            }

            this.element
                .find(":data(ui-droppable)")
                .not(".ui-draggable-dragging")
                .each(function () {
                    var inst = $(this).droppable("instance");
                    if (
                        inst.options.greedy &&
                        !inst.options.disabled &&
                        inst.options.scope === draggable.options.scope &&
                        inst.accept.call(
                            inst.element[0], (draggable.currentItem || draggable.element)
                        ) &&
                        intersect(
                            draggable,
                            $.extend(inst, { offset: inst.element.offset() }),
                            inst.options.tolerance, event
                        )
                    ) {
                        childrenIntersection = true;
                        return false;
                    }
                });
            if (childrenIntersection) {
                return false;
            }

            if (this.accept.call(this.element[0],
                (draggable.currentItem || draggable.element))) {
                this._removeActiveClass();
                this._removeHoverClass();

                this._trigger("drop", event, this.ui(draggable));
                return this.element;
            }

            return false;

        },

        ui: function (c) {
            return {
                draggable: (c.currentItem || c.element),
                helper: c.helper,
                position: c.position,
                offset: c.positionAbs
            };
        },

        // Extension points just to make backcompat sane and avoid duplicating logic
        // TODO: Remove in 1.13 along with call to it below
        _addHoverClass: function () {
            this._addClass("ui-droppable-hover");
        },

        _removeHoverClass: function () {
            this._removeClass("ui-droppable-hover");
        },

        _addActiveClass: function () {
            this._addClass("ui-droppable-active");
        },

        _removeActiveClass: function () {
            this._removeClass("ui-droppable-active");
        }
    });

    var intersect = $.ui.intersect = (function () {
        function isOverAxis(x, reference, size) {
            return (x >= reference) && (x < (reference + size));
        }

        return function (draggable, droppable, toleranceMode, event) {

            if (!droppable.offset) {
                return false;
            }

            var x1 = (draggable.positionAbs ||
                draggable.position.absolute).left + draggable.margins.left,
                y1 = (draggable.positionAbs ||
                    draggable.position.absolute).top + draggable.margins.top,
                x2 = x1 + draggable.helperProportions.width,
                y2 = y1 + draggable.helperProportions.height,
                l = droppable.offset.left,
                t = droppable.offset.top,
                r = l + droppable.proportions().width,
                b = t + droppable.proportions().height;

            switch (toleranceMode) {
                case "fit":
                    return (l <= x1 && x2 <= r && t <= y1 && y2 <= b);
                case "intersect":
                    return (l < x1 + (draggable.helperProportions.width / 2) && // Right Half
                        x2 - (draggable.helperProportions.width / 2) < r && // Left Half
                        t < y1 + (draggable.helperProportions.height / 2) && // Bottom Half
                        y2 - (draggable.helperProportions.height / 2) < b); // Top Half
                case "pointer":
                    return isOverAxis(event.pageY, t, droppable.proportions().height) &&
                        isOverAxis(event.pageX, l, droppable.proportions().width);
                case "touch":
                    return (
                        (y1 >= t && y1 <= b) || // Top edge touching
                        (y2 >= t && y2 <= b) || // Bottom edge touching
                        (y1 < t && y2 > b) // Surrounded vertically
                    ) && (
                            (x1 >= l && x1 <= r) || // Left edge touching
                            (x2 >= l && x2 <= r) || // Right edge touching
                            (x1 < l && x2 > r) // Surrounded horizontally
                        );
                default:
                    return false;
            }
        };
    })();

    /*
        This manager tracks offsets of draggables and droppables
    */
    $.ui.ddmanager = {
        current: null,
        droppables: { "default": [] },
        prepareOffsets: function (t, event) {

            var i, j,
                m = $.ui.ddmanager.droppables[t.options.scope] || [],
                type = event ? event.type : null, // workaround for #2317
                list = (t.currentItem || t.element).find(":data(ui-droppable)").addBack();

            droppablesLoop: for (i = 0; i < m.length; i++) {

                // No disabled and non-accepted
                if (m[i].options.disabled || (t && !m[i].accept.call(m[i].element[0],
                    (t.currentItem || t.element)))) {
                    continue;
                }

                // Filter out elements in the current dragged item
                for (j = 0; j < list.length; j++) {
                    if (list[j] === m[i].element[0]) {
                        m[i].proportions().height = 0;
                        continue droppablesLoop;
                    }
                }

                m[i].visible = m[i].element.css("display") !== "none";
                if (!m[i].visible) {
                    continue;
                }

                // Activate the droppable if used directly from draggables
                if (type === "mousedown") {
                    m[i]._activate.call(m[i], event);
                }

                m[i].offset = m[i].element.offset();
                m[i].proportions({
                    width: m[i].element[0].offsetWidth,
                    height: m[i].element[0].offsetHeight
                });

            }

        },
        drop: function (draggable, event) {

            var dropped = false;

            // Create a copy of the droppables in case the list changes during the drop (#9116)
            $.each(($.ui.ddmanager.droppables[draggable.options.scope] || []).slice(), function () {

                if (!this.options) {
                    return;
                }
                if (!this.options.disabled && this.visible &&
                    intersect(draggable, this, this.options.tolerance, event)) {
                    dropped = this._drop.call(this, event) || dropped;
                }

                if (!this.options.disabled && this.visible && this.accept.call(this.element[0],
                    (draggable.currentItem || draggable.element))) {
                    this.isout = true;
                    this.isover = false;
                    this._deactivate.call(this, event);
                }

            });
            return dropped;

        },
        dragStart: function (draggable, event) {

            // Listen for scrolling so that if the dragging causes scrolling the position of the
            // droppables can be recalculated (see #5003)
            draggable.element.parentsUntil("body").on("scroll.droppable", function () {
                if (!draggable.options.refreshPositions) {
                    $.ui.ddmanager.prepareOffsets(draggable, event);
                }
            });
        },
        drag: function (draggable, event) {

            // If you have a highly dynamic page, you might try this option. It renders positions
            // every time you move the mouse.
            if (draggable.options.refreshPositions) {
                $.ui.ddmanager.prepareOffsets(draggable, event);
            }

            // Run through all droppables and check their positions based on specific tolerance options
            $.each($.ui.ddmanager.droppables[draggable.options.scope] || [], function () {

                if (this.options.disabled || this.greedyChild || !this.visible) {
                    return;
                }

                var parentInstance, scope, parent,
                    intersects = intersect(draggable, this, this.options.tolerance, event),
                    c = !intersects && this.isover ?
                        "isout" :
                        (intersects && !this.isover ? "isover" : null);
                if (!c) {
                    return;
                }

                if (this.options.greedy) {

                    // find droppable parents with same scope
                    scope = this.options.scope;
                    parent = this.element.parents(":data(ui-droppable)").filter(function () {
                        return $(this).droppable("instance").options.scope === scope;
                    });

                    if (parent.length) {
                        parentInstance = $(parent[0]).droppable("instance");
                        parentInstance.greedyChild = (c === "isover");
                    }
                }

                // We just moved into a greedy child
                if (parentInstance && c === "isover") {
                    parentInstance.isover = false;
                    parentInstance.isout = true;
                    parentInstance._out.call(parentInstance, event);
                }

                this[c] = true;
                this[c === "isout" ? "isover" : "isout"] = false;
                this[c === "isover" ? "_over" : "_out"].call(this, event);

                // We just moved out of a greedy child
                if (parentInstance && c === "isout") {
                    parentInstance.isout = false;
                    parentInstance.isover = true;
                    parentInstance._over.call(parentInstance, event);
                }
            });

        },
        dragStop: function (draggable, event) {
            draggable.element.parentsUntil("body").off("scroll.droppable");

            // Call prepareOffsets one final time since IE does not fire return scroll events when
            // overflow was caused by drag (see #5003)
            if (!draggable.options.refreshPositions) {
                $.ui.ddmanager.prepareOffsets(draggable, event);
            }
        }
    };

    // DEPRECATED
    // TODO: switch return back to widget declaration at top of file when this is removed
    if ($.uiBackCompat !== false) {

        // Backcompat for activeClass and hoverClass options
        $.widget("ui.droppable", $.ui.droppable, {
            options: {
                hoverClass: false,
                activeClass: false
            },
            _addActiveClass: function () {
                this._super();
                if (this.options.activeClass) {
                    this.element.addClass(this.options.activeClass);
                }
            },
            _removeActiveClass: function () {
                this._super();
                if (this.options.activeClass) {
                    this.element.removeClass(this.options.activeClass);
                }
            },
            _addHoverClass: function () {
                this._super();
                if (this.options.hoverClass) {
                    this.element.addClass(this.options.hoverClass);
                }
            },
            _removeHoverClass: function () {
                this._super();
                if (this.options.hoverClass) {
                    this.element.removeClass(this.options.hoverClass);
                }
            }
        });
    }

    var widgetsDroppable = $.ui.droppable;


    /*!
     * jQuery UI Progressbar 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */

    //>>label: Progressbar
    //>>group: Widgets
    // jscs:disable maximumLineLength
    //>>description: Displays a status indicator for loading state, standard percentage, and other progress indicators.
    // jscs:enable maximumLineLength
    //>>docs: http://api.jqueryui.com/progressbar/
    //>>demos: http://jqueryui.com/progressbar/
    //>>css.structure: ../../themes/base/core.css
    //>>css.structure: ../../themes/base/progressbar.css
    //>>css.theme: ../../themes/base/theme.css



    var widgetsProgressbar = $.widget("ui.progressbar", {
        version: "1.12.1",
        options: {
            classes: {
                "ui-progressbar": "ui-corner-all",
                "ui-progressbar-value": "ui-corner-left",
                "ui-progressbar-complete": "ui-corner-right"
            },
            max: 100,
            value: 0,

            change: null,
            complete: null
        },

        min: 0,

        _create: function () {

            // Constrain initial value
            this.oldValue = this.options.value = this._constrainedValue();

            this.element.attr({

                // Only set static values; aria-valuenow and aria-valuemax are
                // set inside _refreshValue()
                role: "progressbar",
                "aria-valuemin": this.min
            });
            this._addClass("ui-progressbar", "ui-widget ui-widget-content");

            this.valueDiv = $("<div>").appendTo(this.element);
            this._addClass(this.valueDiv, "ui-progressbar-value", "ui-widget-header");
            this._refreshValue();
        },

        _destroy: function () {
            this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow");

            this.valueDiv.remove();
        },

        value: function (newValue) {
            if (newValue === undefined) {
                return this.options.value;
            }

            this.options.value = this._constrainedValue(newValue);
            this._refreshValue();
        },

        _constrainedValue: function (newValue) {
            if (newValue === undefined) {
                newValue = this.options.value;
            }

            this.indeterminate = newValue === false;

            // Sanitize value
            if (typeof newValue !== "number") {
                newValue = 0;
            }

            return this.indeterminate ? false :
                Math.min(this.options.max, Math.max(this.min, newValue));
        },

        _setOptions: function (options) {

            // Ensure "value" option is set after other values (like max)
            var value = options.value;
            delete options.value;

            this._super(options);

            this.options.value = this._constrainedValue(value);
            this._refreshValue();
        },

        _setOption: function (key, value) {
            if (key === "max") {

                // Don't allow a max less than min
                value = Math.max(this.min, value);
            }
            this._super(key, value);
        },

        _setOptionDisabled: function (value) {
            this._super(value);

            this.element.attr("aria-disabled", value);
            this._toggleClass(null, "ui-state-disabled", !!value);
        },

        _percentage: function () {
            return this.indeterminate ?
                100 :
                100 * (this.options.value - this.min) / (this.options.max - this.min);
        },

        _refreshValue: function () {
            var value = this.options.value,
                percentage = this._percentage();

            this.valueDiv
                .toggle(this.indeterminate || value > this.min)
                .width(percentage.toFixed(0) + "%");

            this
                ._toggleClass(this.valueDiv, "ui-progressbar-complete", null,
                    value === this.options.max)
                ._toggleClass("ui-progressbar-indeterminate", null, this.indeterminate);

            if (this.indeterminate) {
                this.element.removeAttr("aria-valuenow");
                if (!this.overlayDiv) {
                    this.overlayDiv = $("<div>").appendTo(this.valueDiv);
                    this._addClass(this.overlayDiv, "ui-progressbar-overlay");
                }
            } else {
                this.element.attr({
                    "aria-valuemax": this.options.max,
                    "aria-valuenow": value
                });
                if (this.overlayDiv) {
                    this.overlayDiv.remove();
                    this.overlayDiv = null;
                }
            }

            if (this.oldValue !== value) {
                this.oldValue = value;
                this._trigger("change");
            }
            if (value === this.options.max) {
                this._trigger("complete");
            }
        }
    });


    /*!
     * jQuery UI Selectable 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */

    //>>label: Selectable
    //>>group: Interactions
    //>>description: Allows groups of elements to be selected with the mouse.
    //>>docs: http://api.jqueryui.com/selectable/
    //>>demos: http://jqueryui.com/selectable/
    //>>css.structure: ../../themes/base/selectable.css



    var widgetsSelectable = $.widget("ui.selectable", $.ui.mouse, {
        version: "1.12.1",
        options: {
            appendTo: "body",
            autoRefresh: true,
            distance: 0,
            filter: "*",
            tolerance: "touch",

            // Callbacks
            selected: null,
            selecting: null,
            start: null,
            stop: null,
            unselected: null,
            unselecting: null
        },
        _create: function () {
            var that = this;

            this._addClass("ui-selectable");

            this.dragged = false;

            // Cache selectee children based on filter
            this.refresh = function () {
                that.elementPos = $(that.element[0]).offset();
                that.selectees = $(that.options.filter, that.element[0]);
                that._addClass(that.selectees, "ui-selectee");
                that.selectees.each(function () {
                    var $this = $(this),
                        selecteeOffset = $this.offset(),
                        pos = {
                            left: selecteeOffset.left - that.elementPos.left,
                            top: selecteeOffset.top - that.elementPos.top
                        };
                    $.data(this, "selectable-item", {
                        element: this,
                        $element: $this,
                        left: pos.left,
                        top: pos.top,
                        right: pos.left + $this.outerWidth(),
                        bottom: pos.top + $this.outerHeight(),
                        startselected: false,
                        selected: $this.hasClass("ui-selected"),
                        selecting: $this.hasClass("ui-selecting"),
                        unselecting: $this.hasClass("ui-unselecting")
                    });
                });
            };
            this.refresh();

            this._mouseInit();

            this.helper = $("<div>");
            this._addClass(this.helper, "ui-selectable-helper");
        },

        _destroy: function () {
            this.selectees.removeData("selectable-item");
            this._mouseDestroy();
        },

        _mouseStart: function (event) {
            var that = this,
                options = this.options;

            this.opos = [event.pageX, event.pageY];
            this.elementPos = $(this.element[0]).offset();

            if (this.options.disabled) {
                return;
            }

            this.selectees = $(options.filter, this.element[0]);

            this._trigger("start", event);

            $(options.appendTo).append(this.helper);

            // position helper (lasso)
            this.helper.css({
                "left": event.pageX,
                "top": event.pageY,
                "width": 0,
                "height": 0
            });

            if (options.autoRefresh) {
                this.refresh();
            }

            this.selectees.filter(".ui-selected").each(function () {
                var selectee = $.data(this, "selectable-item");
                selectee.startselected = true;
                if (!event.metaKey && !event.ctrlKey) {
                    that._removeClass(selectee.$element, "ui-selected");
                    selectee.selected = false;
                    that._addClass(selectee.$element, "ui-unselecting");
                    selectee.unselecting = true;

                    // selectable UNSELECTING callback
                    that._trigger("unselecting", event, {
                        unselecting: selectee.element
                    });
                }
            });

            $(event.target).parents().addBack().each(function () {
                var doSelect,
                    selectee = $.data(this, "selectable-item");
                if (selectee) {
                    doSelect = (!event.metaKey && !event.ctrlKey) ||
                        !selectee.$element.hasClass("ui-selected");
                    that._removeClass(selectee.$element, doSelect ? "ui-unselecting" : "ui-selected")
                        ._addClass(selectee.$element, doSelect ? "ui-selecting" : "ui-unselecting");
                    selectee.unselecting = !doSelect;
                    selectee.selecting = doSelect;
                    selectee.selected = doSelect;

                    // selectable (UN)SELECTING callback
                    if (doSelect) {
                        that._trigger("selecting", event, {
                            selecting: selectee.element
                        });
                    } else {
                        that._trigger("unselecting", event, {
                            unselecting: selectee.element
                        });
                    }
                    return false;
                }
            });

        },

        _mouseDrag: function (event) {

            this.dragged = true;

            if (this.options.disabled) {
                return;
            }

            var tmp,
                that = this,
                options = this.options,
                x1 = this.opos[0],
                y1 = this.opos[1],
                x2 = event.pageX,
                y2 = event.pageY;

            if (x1 > x2) { tmp = x2; x2 = x1; x1 = tmp; }
            if (y1 > y2) { tmp = y2; y2 = y1; y1 = tmp; }
            this.helper.css({ left: x1, top: y1, width: x2 - x1, height: y2 - y1 });

            this.selectees.each(function () {
                var selectee = $.data(this, "selectable-item"),
                    hit = false,
                    offset = {};

                //prevent helper from being selected if appendTo: selectable
                if (!selectee || selectee.element === that.element[0]) {
                    return;
                }

                offset.left = selectee.left + that.elementPos.left;
                offset.right = selectee.right + that.elementPos.left;
                offset.top = selectee.top + that.elementPos.top;
                offset.bottom = selectee.bottom + that.elementPos.top;

                if (options.tolerance === "touch") {
                    hit = (!(offset.left > x2 || offset.right < x1 || offset.top > y2 ||
                        offset.bottom < y1));
                } else if (options.tolerance === "fit") {
                    hit = (offset.left > x1 && offset.right < x2 && offset.top > y1 &&
                        offset.bottom < y2);
                }

                if (hit) {

                    // SELECT
                    if (selectee.selected) {
                        that._removeClass(selectee.$element, "ui-selected");
                        selectee.selected = false;
                    }
                    if (selectee.unselecting) {
                        that._removeClass(selectee.$element, "ui-unselecting");
                        selectee.unselecting = false;
                    }
                    if (!selectee.selecting) {
                        that._addClass(selectee.$element, "ui-selecting");
                        selectee.selecting = true;

                        // selectable SELECTING callback
                        that._trigger("selecting", event, {
                            selecting: selectee.element
                        });
                    }
                } else {

                    // UNSELECT
                    if (selectee.selecting) {
                        if ((event.metaKey || event.ctrlKey) && selectee.startselected) {
                            that._removeClass(selectee.$element, "ui-selecting");
                            selectee.selecting = false;
                            that._addClass(selectee.$element, "ui-selected");
                            selectee.selected = true;
                        } else {
                            that._removeClass(selectee.$element, "ui-selecting");
                            selectee.selecting = false;
                            if (selectee.startselected) {
                                that._addClass(selectee.$element, "ui-unselecting");
                                selectee.unselecting = true;
                            }

                            // selectable UNSELECTING callback
                            that._trigger("unselecting", event, {
                                unselecting: selectee.element
                            });
                        }
                    }
                    if (selectee.selected) {
                        if (!event.metaKey && !event.ctrlKey && !selectee.startselected) {
                            that._removeClass(selectee.$element, "ui-selected");
                            selectee.selected = false;

                            that._addClass(selectee.$element, "ui-unselecting");
                            selectee.unselecting = true;

                            // selectable UNSELECTING callback
                            that._trigger("unselecting", event, {
                                unselecting: selectee.element
                            });
                        }
                    }
                }
            });

            return false;
        },

        _mouseStop: function (event) {
            var that = this;

            this.dragged = false;

            $(".ui-unselecting", this.element[0]).each(function () {
                var selectee = $.data(this, "selectable-item");
                that._removeClass(selectee.$element, "ui-unselecting");
                selectee.unselecting = false;
                selectee.startselected = false;
                that._trigger("unselected", event, {
                    unselected: selectee.element
                });
            });
            $(".ui-selecting", this.element[0]).each(function () {
                var selectee = $.data(this, "selectable-item");
                that._removeClass(selectee.$element, "ui-selecting")
                    ._addClass(selectee.$element, "ui-selected");
                selectee.selecting = false;
                selectee.selected = true;
                selectee.startselected = true;
                that._trigger("selected", event, {
                    selected: selectee.element
                });
            });
            this._trigger("stop", event);

            this.helper.remove();

            return false;
        }

    });


    /*!
     * jQuery UI Selectmenu 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */

    //>>label: Selectmenu
    //>>group: Widgets
    // jscs:disable maximumLineLength
    //>>description: Duplicates and extends the functionality of a native HTML select element, allowing it to be customizable in behavior and appearance far beyond the limitations of a native select.
    // jscs:enable maximumLineLength
    //>>docs: http://api.jqueryui.com/selectmenu/
    //>>demos: http://jqueryui.com/selectmenu/
    //>>css.structure: ../../themes/base/core.css
    //>>css.structure: ../../themes/base/selectmenu.css, ../../themes/base/button.css
    //>>css.theme: ../../themes/base/theme.css



    var widgetsSelectmenu = $.widget("ui.selectmenu", [$.ui.formResetMixin, {
        version: "1.12.1",
        defaultElement: "<select>",
        options: {
            appendTo: null,
            classes: {
                "ui-selectmenu-button-open": "ui-corner-top",
                "ui-selectmenu-button-closed": "ui-corner-all"
            },
            disabled: null,
            icons: {
                button: "ui-icon-triangle-1-s"
            },
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            width: false,

            // Callbacks
            change: null,
            close: null,
            focus: null,
            open: null,
            select: null
        },

        _create: function () {
            var selectmenuId = this.element.uniqueId().attr("id");
            this.ids = {
                element: selectmenuId,
                button: selectmenuId + "-button",
                menu: selectmenuId + "-menu"
            };

            this._drawButton();
            this._drawMenu();
            this._bindFormResetHandler();

            this._rendered = false;
            this.menuItems = $();
        },

        _drawButton: function () {
            var icon,
                that = this,
                item = this._parseOption(
                    this.element.find("option:selected"),
                    this.element[0].selectedIndex
                );

            // Associate existing label with the new button
            this.labels = this.element.labels().attr("for", this.ids.button);
            this._on(this.labels, {
                click: function (event) {
                    this.button.focus();
                    event.preventDefault();
                }
            });

            // Hide original select element
            this.element.hide();

            // Create button
            this.button = $("<span>", {
                tabindex: this.options.disabled ? -1 : 0,
                id: this.ids.button,
                role: "combobox",
                "aria-expanded": "false",
                "aria-autocomplete": "list",
                "aria-owns": this.ids.menu,
                "aria-haspopup": "true",
                title: this.element.attr("title")
            })
                .insertAfter(this.element);

            this._addClass(this.button, "ui-selectmenu-button ui-selectmenu-button-closed",
                "ui-button ui-widget");

            icon = $("<span>").appendTo(this.button);
            this._addClass(icon, "ui-selectmenu-icon", "ui-icon " + this.options.icons.button);
            this.buttonItem = this._renderButtonItem(item)
                .appendTo(this.button);

            if (this.options.width !== false) {
                this._resizeButton();
            }

            this._on(this.button, this._buttonEvents);
            this.button.one("focusin", function () {

                // Delay rendering the menu items until the button receives focus.
                // The menu may have already been rendered via a programmatic open.
                if (!that._rendered) {
                    that._refreshMenu();
                }
            });
        },

        _drawMenu: function () {
            var that = this;

            // Create menu
            this.menu = $("<ul>", {
                "aria-hidden": "true",
                "aria-labelledby": this.ids.button,
                id: this.ids.menu
            });

            // Wrap menu
            this.menuWrap = $("<div>").append(this.menu);
            this._addClass(this.menuWrap, "ui-selectmenu-menu", "ui-front");
            this.menuWrap.appendTo(this._appendTo());

            // Initialize menu widget
            this.menuInstance = this.menu
                .menu({
                    classes: {
                        "ui-menu": "ui-corner-bottom"
                    },
                    role: "listbox",
                    select: function (event, ui) {
                        event.preventDefault();

                        // Support: IE8
                        // If the item was selected via a click, the text selection
                        // will be destroyed in IE
                        that._setSelection();

                        that._select(ui.item.data("ui-selectmenu-item"), event);
                    },
                    focus: function (event, ui) {
                        var item = ui.item.data("ui-selectmenu-item");

                        // Prevent inital focus from firing and check if its a newly focused item
                        if (that.focusIndex != null && item.index !== that.focusIndex) {
                            that._trigger("focus", event, { item: item });
                            if (!that.isOpen) {
                                that._select(item, event);
                            }
                        }
                        that.focusIndex = item.index;

                        that.button.attr("aria-activedescendant",
                            that.menuItems.eq(item.index).attr("id"));
                    }
                })
                .menu("instance");

            // Don't close the menu on mouseleave
            this.menuInstance._off(this.menu, "mouseleave");

            // Cancel the menu's collapseAll on document click
            this.menuInstance._closeOnDocumentClick = function () {
                return false;
            };

            // Selects often contain empty items, but never contain dividers
            this.menuInstance._isDivider = function () {
                return false;
            };
        },

        refresh: function () {
            this._refreshMenu();
            this.buttonItem.replaceWith(
                this.buttonItem = this._renderButtonItem(

                    // Fall back to an empty object in case there are no options
                    this._getSelectedItem().data("ui-selectmenu-item") || {}
                )
            );
            if (this.options.width === null) {
                this._resizeButton();
            }
        },

        _refreshMenu: function () {
            var item,
                options = this.element.find("option");

            this.menu.empty();

            this._parseOptions(options);
            this._renderMenu(this.menu, this.items);

            this.menuInstance.refresh();
            this.menuItems = this.menu.find("li")
                .not(".ui-selectmenu-optgroup")
                .find(".ui-menu-item-wrapper");

            this._rendered = true;

            if (!options.length) {
                return;
            }

            item = this._getSelectedItem();

            // Update the menu to have the correct item focused
            this.menuInstance.focus(null, item);
            this._setAria(item.data("ui-selectmenu-item"));

            // Set disabled state
            this._setOption("disabled", this.element.prop("disabled"));
        },

        open: function (event) {
            if (this.options.disabled) {
                return;
            }

            // If this is the first time the menu is being opened, render the items
            if (!this._rendered) {
                this._refreshMenu();
            } else {

                // Menu clears focus on close, reset focus to selected item
                this._removeClass(this.menu.find(".ui-state-active"), null, "ui-state-active");
                this.menuInstance.focus(null, this._getSelectedItem());
            }

            // If there are no options, don't open the menu
            if (!this.menuItems.length) {
                return;
            }

            this.isOpen = true;
            this._toggleAttr();
            this._resizeMenu();
            this._position();

            this._on(this.document, this._documentClick);

            this._trigger("open", event);
        },

        _position: function () {
            this.menuWrap.position($.extend({ of: this.button }, this.options.position));
        },

        close: function (event) {
            if (!this.isOpen) {
                return;
            }

            this.isOpen = false;
            this._toggleAttr();

            this.range = null;
            this._off(this.document);

            this._trigger("close", event);
        },

        widget: function () {
            return this.button;
        },

        menuWidget: function () {
            return this.menu;
        },

        _renderButtonItem: function (item) {
            var buttonItem = $("<span>");

            this._setText(buttonItem, item.label);
            this._addClass(buttonItem, "ui-selectmenu-text");

            return buttonItem;
        },

        _renderMenu: function (ul, items) {
            var that = this,
                currentOptgroup = "";

            $.each(items, function (index, item) {
                var li;

                if (item.optgroup !== currentOptgroup) {
                    li = $("<li>", {
                        text: item.optgroup
                    });
                    that._addClass(li, "ui-selectmenu-optgroup", "ui-menu-divider" +
                        (item.element.parent("optgroup").prop("disabled") ?
                            " ui-state-disabled" :
                            ""));

                    li.appendTo(ul);

                    currentOptgroup = item.optgroup;
                }

                that._renderItemData(ul, item);
            });
        },

        _renderItemData: function (ul, item) {
            return this._renderItem(ul, item).data("ui-selectmenu-item", item);
        },

        _renderItem: function (ul, item) {
            var li = $("<li>"),
                wrapper = $("<div>", {
                    title: item.element.attr("title")
                });

            if (item.disabled) {
                this._addClass(li, null, "ui-state-disabled");
            }
            this._setText(wrapper, item.label);

            return li.append(wrapper).appendTo(ul);
        },

        _setText: function (element, value) {
            if (value) {
                element.text(value);
            } else {
                element.html("&#160;");
            }
        },

        _move: function (direction, event) {
            var item, next,
                filter = ".ui-menu-item";

            if (this.isOpen) {
                item = this.menuItems.eq(this.focusIndex).parent("li");
            } else {
                item = this.menuItems.eq(this.element[0].selectedIndex).parent("li");
                filter += ":not(.ui-state-disabled)";
            }

            if (direction === "first" || direction === "last") {
                next = item[direction === "first" ? "prevAll" : "nextAll"](filter).eq(-1);
            } else {
                next = item[direction + "All"](filter).eq(0);
            }

            if (next.length) {
                this.menuInstance.focus(event, next);
            }
        },

        _getSelectedItem: function () {
            return this.menuItems.eq(this.element[0].selectedIndex).parent("li");
        },

        _toggle: function (event) {
            this[this.isOpen ? "close" : "open"](event);
        },

        _setSelection: function () {
            var selection;

            if (!this.range) {
                return;
            }

            if (window.getSelection) {
                selection = window.getSelection();
                selection.removeAllRanges();
                selection.addRange(this.range);

                // Support: IE8
            } else {
                this.range.select();
            }

            // Support: IE
            // Setting the text selection kills the button focus in IE, but
            // restoring the focus doesn't kill the selection.
            this.button.focus();
        },

        _documentClick: {
            mousedown: function (event) {
                if (!this.isOpen) {
                    return;
                }

                if (!$(event.target).closest(".ui-selectmenu-menu, #" +
                    $.ui.escapeSelector(this.ids.button)).length) {
                    this.close(event);
                }
            }
        },

        _buttonEvents: {

            // Prevent text selection from being reset when interacting with the selectmenu (#10144)
            mousedown: function () {
                var selection;

                if (window.getSelection) {
                    selection = window.getSelection();
                    if (selection.rangeCount) {
                        this.range = selection.getRangeAt(0);
                    }

                    // Support: IE8
                } else {
                    this.range = document.selection.createRange();
                }
            },

            click: function (event) {
                this._setSelection();
                this._toggle(event);
            },

            keydown: function (event) {
                var preventDefault = true;
                switch (event.keyCode) {
                    case $.ui.keyCode.TAB:
                    case $.ui.keyCode.ESCAPE:
                        this.close(event);
                        preventDefault = false;
                        break;
                    case $.ui.keyCode.ENTER:
                        if (this.isOpen) {
                            this._selectFocusedItem(event);
                        }
                        break;
                    case $.ui.keyCode.UP:
                        if (event.altKey) {
                            this._toggle(event);
                        } else {
                            this._move("prev", event);
                        }
                        break;
                    case $.ui.keyCode.DOWN:
                        if (event.altKey) {
                            this._toggle(event);
                        } else {
                            this._move("next", event);
                        }
                        break;
                    case $.ui.keyCode.SPACE:
                        if (this.isOpen) {
                            this._selectFocusedItem(event);
                        } else {
                            this._toggle(event);
                        }
                        break;
                    case $.ui.keyCode.LEFT:
                        this._move("prev", event);
                        break;
                    case $.ui.keyCode.RIGHT:
                        this._move("next", event);
                        break;
                    case $.ui.keyCode.HOME:
                    case $.ui.keyCode.PAGE_UP:
                        this._move("first", event);
                        break;
                    case $.ui.keyCode.END:
                    case $.ui.keyCode.PAGE_DOWN:
                        this._move("last", event);
                        break;
                    default:
                        this.menu.trigger(event);
                        preventDefault = false;
                }

                if (preventDefault) {
                    event.preventDefault();
                }
            }
        },

        _selectFocusedItem: function (event) {
            var item = this.menuItems.eq(this.focusIndex).parent("li");
            if (!item.hasClass("ui-state-disabled")) {
                this._select(item.data("ui-selectmenu-item"), event);
            }
        },

        _select: function (item, event) {
            var oldIndex = this.element[0].selectedIndex;

            // Change native select element
            this.element[0].selectedIndex = item.index;
            this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(item));
            this._setAria(item);
            this._trigger("select", event, { item: item });

            if (item.index !== oldIndex) {
                this._trigger("change", event, { item: item });
            }

            this.close(event);
        },

        _setAria: function (item) {
            var id = this.menuItems.eq(item.index).attr("id");

            this.button.attr({
                "aria-labelledby": id,
                "aria-activedescendant": id
            });
            this.menu.attr("aria-activedescendant", id);
        },

        _setOption: function (key, value) {
            if (key === "icons") {
                var icon = this.button.find("span.ui-icon");
                this._removeClass(icon, null, this.options.icons.button)
                    ._addClass(icon, null, value.button);
            }

            this._super(key, value);

            if (key === "appendTo") {
                this.menuWrap.appendTo(this._appendTo());
            }

            if (key === "width") {
                this._resizeButton();
            }
        },

        _setOptionDisabled: function (value) {
            this._super(value);

            this.menuInstance.option("disabled", value);
            this.button.attr("aria-disabled", value);
            this._toggleClass(this.button, null, "ui-state-disabled", value);

            this.element.prop("disabled", value);
            if (value) {
                this.button.attr("tabindex", -1);
                this.close();
            } else {
                this.button.attr("tabindex", 0);
            }
        },

        _appendTo: function () {
            var element = this.options.appendTo;

            if (element) {
                element = element.jquery || element.nodeType ?
                    $(element) :
                    this.document.find(element).eq(0);
            }

            if (!element || !element[0]) {
                element = this.element.closest(".ui-front, dialog");
            }

            if (!element.length) {
                element = this.document[0].body;
            }

            return element;
        },

        _toggleAttr: function () {
            this.button.attr("aria-expanded", this.isOpen);

            // We can't use two _toggleClass() calls here, because we need to make sure
            // we always remove classes first and add them second, otherwise if both classes have the
            // same theme class, it will be removed after we add it.
            this._removeClass(this.button, "ui-selectmenu-button-" +
                (this.isOpen ? "closed" : "open"))
                ._addClass(this.button, "ui-selectmenu-button-" +
                    (this.isOpen ? "open" : "closed"))
                ._toggleClass(this.menuWrap, "ui-selectmenu-open", null, this.isOpen);

            this.menu.attr("aria-hidden", !this.isOpen);
        },

        _resizeButton: function () {
            var width = this.options.width;

            // For `width: false`, just remove inline style and stop
            if (width === false) {
                this.button.css("width", "");
                return;
            }

            // For `width: null`, match the width of the original element
            if (width === null) {
                width = this.element.show().outerWidth();
                this.element.hide();
            }

            this.button.outerWidth(width);
        },

        _resizeMenu: function () {
            this.menu.outerWidth(Math.max(
                this.button.outerWidth(),

                // Support: IE10
                // IE10 wraps long text (possibly a rounding bug)
                // so we add 1px to avoid the wrapping
                this.menu.width("").outerWidth() + 1
            ));
        },

        _getCreateOptions: function () {
            var options = this._super();

            options.disabled = this.element.prop("disabled");

            return options;
        },

        _parseOptions: function (options) {
            var that = this,
                data = [];
            options.each(function (index, item) {
                data.push(that._parseOption($(item), index));
            });
            this.items = data;
        },

        _parseOption: function (option, index) {
            var optgroup = option.parent("optgroup");

            return {
                element: option,
                index: index,
                value: option.val(),
                label: option.text(),
                optgroup: optgroup.attr("label") || "",
                disabled: optgroup.prop("disabled") || option.prop("disabled")
            };
        },

        _destroy: function () {
            this._unbindFormResetHandler();
            this.menuWrap.remove();
            this.button.remove();
            this.element.show();
            this.element.removeUniqueId();
            this.labels.attr("for", this.ids.element);
        }
    }]);


    /*!
     * jQuery UI Slider 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */

    //>>label: Slider
    //>>group: Widgets
    //>>description: Displays a flexible slider with ranges and accessibility via keyboard.
    //>>docs: http://api.jqueryui.com/slider/
    //>>demos: http://jqueryui.com/slider/
    //>>css.structure: ../../themes/base/core.css
    //>>css.structure: ../../themes/base/slider.css
    //>>css.theme: ../../themes/base/theme.css



    var widgetsSlider = $.widget("ui.slider", $.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "slide",

        options: {
            animate: false,
            classes: {
                "ui-slider": "ui-corner-all",
                "ui-slider-handle": "ui-corner-all",

                // Note: ui-widget-header isn't the most fittingly semantic framework class for this
                // element, but worked best visually with a variety of themes
                "ui-slider-range": "ui-corner-all ui-widget-header"
            },
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: false,
            step: 1,
            value: 0,
            values: null,

            // Callbacks
            change: null,
            slide: null,
            start: null,
            stop: null
        },

        // Number of pages in a slider
        // (how many times can you page up/down to go through the whole range)
        numPages: 5,

        _create: function () {
            this._keySliding = false;
            this._mouseSliding = false;
            this._animateOff = true;
            this._handleIndex = null;
            this._detectOrientation();
            this._mouseInit();
            this._calculateNewMax();

            this._addClass("ui-slider ui-slider-" + this.orientation,
                "ui-widget ui-widget-content");

            this._refresh();

            this._animateOff = false;
        },

        _refresh: function () {
            this._createRange();
            this._createHandles();
            this._setupEvents();
            this._refreshValue();
        },

        _createHandles: function () {
            var i, handleCount,
                options = this.options,
                existingHandles = this.element.find(".ui-slider-handle"),
                handle = "<span tabindex='0'></span>",
                handles = [];

            handleCount = (options.values && options.values.length) || 1;

            if (existingHandles.length > handleCount) {
                existingHandles.slice(handleCount).remove();
                existingHandles = existingHandles.slice(0, handleCount);
            }

            for (i = existingHandles.length; i < handleCount; i++) {
                handles.push(handle);
            }

            this.handles = existingHandles.add($(handles.join("")).appendTo(this.element));

            this._addClass(this.handles, "ui-slider-handle", "ui-state-default");

            this.handle = this.handles.eq(0);

            this.handles.each(function (i) {
                $(this)
                    .data("ui-slider-handle-index", i)
                    .attr("tabIndex", 0);
            });
        },

        _createRange: function () {
            var options = this.options;

            if (options.range) {
                if (options.range === true) {
                    if (!options.values) {
                        options.values = [this._valueMin(), this._valueMin()];
                    } else if (options.values.length && options.values.length !== 2) {
                        options.values = [options.values[0], options.values[0]];
                    } else if ($.isArray(options.values)) {
                        options.values = options.values.slice(0);
                    }
                }

                if (!this.range || !this.range.length) {
                    this.range = $("<div>")
                        .appendTo(this.element);

                    this._addClass(this.range, "ui-slider-range");
                } else {
                    this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max");

                    // Handle range switching from true to min/max
                    this.range.css({
                        "left": "",
                        "bottom": ""
                    });
                }
                if (options.range === "min" || options.range === "max") {
                    this._addClass(this.range, "ui-slider-range-" + options.range);
                }
            } else {
                if (this.range) {
                    this.range.remove();
                }
                this.range = null;
            }
        },

        _setupEvents: function () {
            this._off(this.handles);
            this._on(this.handles, this._handleEvents);
            this._hoverable(this.handles);
            this._focusable(this.handles);
        },

        _destroy: function () {
            this.handles.remove();
            if (this.range) {
                this.range.remove();
            }

            this._mouseDestroy();
        },

        _mouseCapture: function (event) {
            var position, normValue, distance, closestHandle, index, allowed, offset, mouseOverHandle,
                that = this,
                o = this.options;

            if (o.disabled) {
                return false;
            }

            this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            };
            this.elementOffset = this.element.offset();

            position = { x: event.pageX, y: event.pageY };
            normValue = this._normValueFromMouse(position);
            distance = this._valueMax() - this._valueMin() + 1;
            this.handles.each(function (i) {
                var thisDistance = Math.abs(normValue - that.values(i));
                if ((distance > thisDistance) ||
                    (distance === thisDistance &&
                        (i === that._lastChangedValue || that.values(i) === o.min))) {
                    distance = thisDistance;
                    closestHandle = $(this);
                    index = i;
                }
            });

            allowed = this._start(event, index);
            if (allowed === false) {
                return false;
            }
            this._mouseSliding = true;

            this._handleIndex = index;

            this._addClass(closestHandle, null, "ui-state-active");
            closestHandle.trigger("focus");

            offset = closestHandle.offset();
            mouseOverHandle = !$(event.target).parents().addBack().is(".ui-slider-handle");
            this._clickOffset = mouseOverHandle ? { left: 0, top: 0 } : {
                left: event.pageX - offset.left - (closestHandle.width() / 2),
                top: event.pageY - offset.top -
                    (closestHandle.height() / 2) -
                    (parseInt(closestHandle.css("borderTopWidth"), 10) || 0) -
                    (parseInt(closestHandle.css("borderBottomWidth"), 10) || 0) +
                    (parseInt(closestHandle.css("marginTop"), 10) || 0)
            };

            if (!this.handles.hasClass("ui-state-hover")) {
                this._slide(event, index, normValue);
            }
            this._animateOff = true;
            return true;
        },

        _mouseStart: function () {
            return true;
        },

        _mouseDrag: function (event) {
            var position = { x: event.pageX, y: event.pageY },
                normValue = this._normValueFromMouse(position);

            this._slide(event, this._handleIndex, normValue);

            return false;
        },

        _mouseStop: function (event) {
            this._removeClass(this.handles, null, "ui-state-active");
            this._mouseSliding = false;

            this._stop(event, this._handleIndex);
            this._change(event, this._handleIndex);

            this._handleIndex = null;
            this._clickOffset = null;
            this._animateOff = false;

            return false;
        },

        _detectOrientation: function () {
            this.orientation = (this.options.orientation === "vertical") ? "vertical" : "horizontal";
        },

        _normValueFromMouse: function (position) {
            var pixelTotal,
                pixelMouse,
                percentMouse,
                valueTotal,
                valueMouse;

            if (this.orientation === "horizontal") {
                pixelTotal = this.elementSize.width;
                pixelMouse = position.x - this.elementOffset.left -
                    (this._clickOffset ? this._clickOffset.left : 0);
            } else {
                pixelTotal = this.elementSize.height;
                pixelMouse = position.y - this.elementOffset.top -
                    (this._clickOffset ? this._clickOffset.top : 0);
            }

            percentMouse = (pixelMouse / pixelTotal);
            if (percentMouse > 1) {
                percentMouse = 1;
            }
            if (percentMouse < 0) {
                percentMouse = 0;
            }
            if (this.orientation === "vertical") {
                percentMouse = 1 - percentMouse;
            }

            valueTotal = this._valueMax() - this._valueMin();
            valueMouse = this._valueMin() + percentMouse * valueTotal;

            return this._trimAlignValue(valueMouse);
        },

        _uiHash: function (index, value, values) {
            var uiHash = {
                handle: this.handles[index],
                handleIndex: index,
                value: value !== undefined ? value : this.value()
            };

            if (this._hasMultipleValues()) {
                uiHash.value = value !== undefined ? value : this.values(index);
                uiHash.values = values || this.values();
            }

            return uiHash;
        },

        _hasMultipleValues: function () {
            return this.options.values && this.options.values.length;
        },

        _start: function (event, index) {
            return this._trigger("start", event, this._uiHash(index));
        },

        _slide: function (event, index, newVal) {
            var allowed, otherVal,
                currentValue = this.value(),
                newValues = this.values();

            if (this._hasMultipleValues()) {
                otherVal = this.values(index ? 0 : 1);
                currentValue = this.values(index);

                if (this.options.values.length === 2 && this.options.range === true) {
                    newVal = index === 0 ? Math.min(otherVal, newVal) : Math.max(otherVal, newVal);
                }

                newValues[index] = newVal;
            }

            if (newVal === currentValue) {
                return;
            }

            allowed = this._trigger("slide", event, this._uiHash(index, newVal, newValues));

            // A slide can be canceled by returning false from the slide callback
            if (allowed === false) {
                return;
            }

            if (this._hasMultipleValues()) {
                this.values(index, newVal);
            } else {
                this.value(newVal);
            }
        },

        _stop: function (event, index) {
            this._trigger("stop", event, this._uiHash(index));
        },

        _change: function (event, index) {
            if (!this._keySliding && !this._mouseSliding) {

                //store the last changed value index for reference when handles overlap
                this._lastChangedValue = index;
                this._trigger("change", event, this._uiHash(index));
            }
        },

        value: function (newValue) {
            if (arguments.length) {
                this.options.value = this._trimAlignValue(newValue);
                this._refreshValue();
                this._change(null, 0);
                return;
            }

            return this._value();
        },

        values: function (index, newValue) {
            var vals,
                newValues,
                i;

            if (arguments.length > 1) {
                this.options.values[index] = this._trimAlignValue(newValue);
                this._refreshValue();
                this._change(null, index);
                return;
            }

            if (arguments.length) {
                if ($.isArray(arguments[0])) {
                    vals = this.options.values;
                    newValues = arguments[0];
                    for (i = 0; i < vals.length; i += 1) {
                        vals[i] = this._trimAlignValue(newValues[i]);
                        this._change(null, i);
                    }
                    this._refreshValue();
                } else {
                    if (this._hasMultipleValues()) {
                        return this._values(index);
                    } else {
                        return this.value();
                    }
                }
            } else {
                return this._values();
            }
        },

        _setOption: function (key, value) {
            var i,
                valsLength = 0;

            if (key === "range" && this.options.range === true) {
                if (value === "min") {
                    this.options.value = this._values(0);
                    this.options.values = null;
                } else if (value === "max") {
                    this.options.value = this._values(this.options.values.length - 1);
                    this.options.values = null;
                }
            }

            if ($.isArray(this.options.values)) {
                valsLength = this.options.values.length;
            }

            this._super(key, value);

            switch (key) {
                case "orientation":
                    this._detectOrientation();
                    this._removeClass("ui-slider-horizontal ui-slider-vertical")
                        ._addClass("ui-slider-" + this.orientation);
                    this._refreshValue();
                    if (this.options.range) {
                        this._refreshRange(value);
                    }

                    // Reset positioning from previous orientation
                    this.handles.css(value === "horizontal" ? "bottom" : "left", "");
                    break;
                case "value":
                    this._animateOff = true;
                    this._refreshValue();
                    this._change(null, 0);
                    this._animateOff = false;
                    break;
                case "values":
                    this._animateOff = true;
                    this._refreshValue();

                    // Start from the last handle to prevent unreachable handles (#9046)
                    for (i = valsLength - 1; i >= 0; i--) {
                        this._change(null, i);
                    }
                    this._animateOff = false;
                    break;
                case "step":
                case "min":
                case "max":
                    this._animateOff = true;
                    this._calculateNewMax();
                    this._refreshValue();
                    this._animateOff = false;
                    break;
                case "range":
                    this._animateOff = true;
                    this._refresh();
                    this._animateOff = false;
                    break;
            }
        },

        _setOptionDisabled: function (value) {
            this._super(value);

            this._toggleClass(null, "ui-state-disabled", !!value);
        },

        //internal value getter
        // _value() returns value trimmed by min and max, aligned by step
        _value: function () {
            var val = this.options.value;
            val = this._trimAlignValue(val);

            return val;
        },

        //internal values getter
        // _values() returns array of values trimmed by min and max, aligned by step
        // _values( index ) returns single value trimmed by min and max, aligned by step
        _values: function (index) {
            var val,
                vals,
                i;

            if (arguments.length) {
                val = this.options.values[index];
                val = this._trimAlignValue(val);

                return val;
            } else if (this._hasMultipleValues()) {

                // .slice() creates a copy of the array
                // this copy gets trimmed by min and max and then returned
                vals = this.options.values.slice();
                for (i = 0; i < vals.length; i += 1) {
                    vals[i] = this._trimAlignValue(vals[i]);
                }

                return vals;
            } else {
                return [];
            }
        },

        // Returns the step-aligned value that val is closest to, between (inclusive) min and max
        _trimAlignValue: function (val) {
            if (val <= this._valueMin()) {
                return this._valueMin();
            }
            if (val >= this._valueMax()) {
                return this._valueMax();
            }
            var step = (this.options.step > 0) ? this.options.step : 1,
                valModStep = (val - this._valueMin()) % step,
                alignValue = val - valModStep;

            if (Math.abs(valModStep) * 2 >= step) {
                alignValue += (valModStep > 0) ? step : (-step);
            }

            // Since JavaScript has problems with large floats, round
            // the final value to 5 digits after the decimal point (see #4124)
            return parseFloat(alignValue.toFixed(5));
        },

        _calculateNewMax: function () {
            var max = this.options.max,
                min = this._valueMin(),
                step = this.options.step,
                aboveMin = Math.round((max - min) / step) * step;
            max = aboveMin + min;
            if (max > this.options.max) {

                //If max is not divisible by step, rounding off may increase its value
                max -= step;
            }
            this.max = parseFloat(max.toFixed(this._precision()));
        },

        _precision: function () {
            var precision = this._precisionOf(this.options.step);
            if (this.options.min !== null) {
                precision = Math.max(precision, this._precisionOf(this.options.min));
            }
            return precision;
        },

        _precisionOf: function (num) {
            var str = num.toString(),
                decimal = str.indexOf(".");
            return decimal === -1 ? 0 : str.length - decimal - 1;
        },

        _valueMin: function () {
            return this.options.min;
        },

        _valueMax: function () {
            return this.max;
        },

        _refreshRange: function (orientation) {
            if (orientation === "vertical") {
                this.range.css({ "width": "", "left": "" });
            }
            if (orientation === "horizontal") {
                this.range.css({ "height": "", "bottom": "" });
            }
        },

        _refreshValue: function () {
            var lastValPercent, valPercent, value, valueMin, valueMax,
                oRange = this.options.range,
                o = this.options,
                that = this,
                animate = (!this._animateOff) ? o.animate : false,
                _set = {};

            if (this._hasMultipleValues()) {
                this.handles.each(function (i) {
                    valPercent = (that.values(i) - that._valueMin()) / (that._valueMax() -
                        that._valueMin()) * 100;
                    _set[that.orientation === "horizontal" ? "left" : "bottom"] = valPercent + "%";
                    $(this).stop(1, 1)[animate ? "animate" : "css"](_set, o.animate);
                    if (that.options.range === true) {
                        if (that.orientation === "horizontal") {
                            if (i === 0) {
                                that.range.stop(1, 1)[animate ? "animate" : "css"]({
                                    left: valPercent + "%"
                                }, o.animate);
                            }
                            if (i === 1) {
                                that.range[animate ? "animate" : "css"]({
                                    width: (valPercent - lastValPercent) + "%"
                                }, {
                                    queue: false,
                                    duration: o.animate
                                });
                            }
                        } else {
                            if (i === 0) {
                                that.range.stop(1, 1)[animate ? "animate" : "css"]({
                                    bottom: (valPercent) + "%"
                                }, o.animate);
                            }
                            if (i === 1) {
                                that.range[animate ? "animate" : "css"]({
                                    height: (valPercent - lastValPercent) + "%"
                                }, {
                                    queue: false,
                                    duration: o.animate
                                });
                            }
                        }
                    }
                    lastValPercent = valPercent;
                });
            } else {
                value = this.value();
                valueMin = this._valueMin();
                valueMax = this._valueMax();
                valPercent = (valueMax !== valueMin) ?
                    (value - valueMin) / (valueMax - valueMin) * 100 :
                    0;
                _set[this.orientation === "horizontal" ? "left" : "bottom"] = valPercent + "%";
                this.handle.stop(1, 1)[animate ? "animate" : "css"](_set, o.animate);

                if (oRange === "min" && this.orientation === "horizontal") {
                    this.range.stop(1, 1)[animate ? "animate" : "css"]({
                        width: valPercent + "%"
                    }, o.animate);
                }
                if (oRange === "max" && this.orientation === "horizontal") {
                    this.range.stop(1, 1)[animate ? "animate" : "css"]({
                        width: (100 - valPercent) + "%"
                    }, o.animate);
                }
                if (oRange === "min" && this.orientation === "vertical") {
                    this.range.stop(1, 1)[animate ? "animate" : "css"]({
                        height: valPercent + "%"
                    }, o.animate);
                }
                if (oRange === "max" && this.orientation === "vertical") {
                    this.range.stop(1, 1)[animate ? "animate" : "css"]({
                        height: (100 - valPercent) + "%"
                    }, o.animate);
                }
            }
        },

        _handleEvents: {
            keydown: function (event) {
                var allowed, curVal, newVal, step,
                    index = $(event.target).data("ui-slider-handle-index");

                switch (event.keyCode) {
                    case $.ui.keyCode.HOME:
                    case $.ui.keyCode.END:
                    case $.ui.keyCode.PAGE_UP:
                    case $.ui.keyCode.PAGE_DOWN:
                    case $.ui.keyCode.UP:
                    case $.ui.keyCode.RIGHT:
                    case $.ui.keyCode.DOWN:
                    case $.ui.keyCode.LEFT:
                        event.preventDefault();
                        if (!this._keySliding) {
                            this._keySliding = true;
                            this._addClass($(event.target), null, "ui-state-active");
                            allowed = this._start(event, index);
                            if (allowed === false) {
                                return;
                            }
                        }
                        break;
                }

                step = this.options.step;
                if (this._hasMultipleValues()) {
                    curVal = newVal = this.values(index);
                } else {
                    curVal = newVal = this.value();
                }

                switch (event.keyCode) {
                    case $.ui.keyCode.HOME:
                        newVal = this._valueMin();
                        break;
                    case $.ui.keyCode.END:
                        newVal = this._valueMax();
                        break;
                    case $.ui.keyCode.PAGE_UP:
                        newVal = this._trimAlignValue(
                            curVal + ((this._valueMax() - this._valueMin()) / this.numPages)
                        );
                        break;
                    case $.ui.keyCode.PAGE_DOWN:
                        newVal = this._trimAlignValue(
                            curVal - ((this._valueMax() - this._valueMin()) / this.numPages));
                        break;
                    case $.ui.keyCode.UP:
                    case $.ui.keyCode.RIGHT:
                        if (curVal === this._valueMax()) {
                            return;
                        }
                        newVal = this._trimAlignValue(curVal + step);
                        break;
                    case $.ui.keyCode.DOWN:
                    case $.ui.keyCode.LEFT:
                        if (curVal === this._valueMin()) {
                            return;
                        }
                        newVal = this._trimAlignValue(curVal - step);
                        break;
                }

                this._slide(event, index, newVal);
            },
            keyup: function (event) {
                var index = $(event.target).data("ui-slider-handle-index");

                if (this._keySliding) {
                    this._keySliding = false;
                    this._stop(event, index);
                    this._change(event, index);
                    this._removeClass($(event.target), null, "ui-state-active");
                }
            }
        }
    });


    /*!
     * jQuery UI Sortable 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */

    //>>label: Sortable
    //>>group: Interactions
    //>>description: Enables items in a list to be sorted using the mouse.
    //>>docs: http://api.jqueryui.com/sortable/
    //>>demos: http://jqueryui.com/sortable/
    //>>css.structure: ../../themes/base/sortable.css



    var widgetsSortable = $.widget("ui.sortable", $.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "sort",
        ready: false,
        options: {
            appendTo: "parent",
            axis: false,
            connectWith: false,
            containment: false,
            cursor: "auto",
            cursorAt: false,
            dropOnEmpty: true,
            forcePlaceholderSize: false,
            forceHelperSize: false,
            grid: false,
            handle: false,
            helper: "original",
            items: "> *",
            opacity: false,
            placeholder: false,
            revert: false,
            scroll: true,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1000,

            // Callbacks
            activate: null,
            beforeStop: null,
            change: null,
            deactivate: null,
            out: null,
            over: null,
            receive: null,
            remove: null,
            sort: null,
            start: null,
            stop: null,
            update: null
        },

        _isOverAxis: function (x, reference, size) {
            return (x >= reference) && (x < (reference + size));
        },

        _isFloating: function (item) {
            return (/left|right/).test(item.css("float")) ||
                (/inline|table-cell/).test(item.css("display"));
        },

        _create: function () {
            this.containerCache = {};
            this._addClass("ui-sortable");

            //Get the items
            this.refresh();

            //Let's determine the parent's offset
            this.offset = this.element.offset();

            //Initialize mouse events for interaction
            this._mouseInit();

            this._setHandleClassName();

            //We're ready to go
            this.ready = true;

        },

        _setOption: function (key, value) {
            this._super(key, value);

            if (key === "handle") {
                this._setHandleClassName();
            }
        },

        _setHandleClassName: function () {
            var that = this;
            this._removeClass(this.element.find(".ui-sortable-handle"), "ui-sortable-handle");
            $.each(this.items, function () {
                that._addClass(
                    this.instance.options.handle ?
                        this.item.find(this.instance.options.handle) :
                        this.item,
                    "ui-sortable-handle"
                );
            });
        },

        _destroy: function () {
            this._mouseDestroy();

            for (var i = this.items.length - 1; i >= 0; i--) {
                this.items[i].item.removeData(this.widgetName + "-item");
            }

            return this;
        },

        _mouseCapture: function (event, overrideHandle) {
            var currentItem = null,
                validHandle = false,
                that = this;

            if (this.reverting) {
                return false;
            }

            if (this.options.disabled || this.options.type === "static") {
                return false;
            }

            //We have to refresh the items data once first
            this._refreshItems(event);

            //Find out if the clicked node (or one of its parents) is a actual item in this.items
            $(event.target).parents().each(function () {
                if ($.data(this, that.widgetName + "-item") === that) {
                    currentItem = $(this);
                    return false;
                }
            });
            if ($.data(event.target, that.widgetName + "-item") === that) {
                currentItem = $(event.target);
            }

            if (!currentItem) {
                return false;
            }
            if (this.options.handle && !overrideHandle) {
                $(this.options.handle, currentItem).find("*").addBack().each(function () {
                    if (this === event.target) {
                        validHandle = true;
                    }
                });
                if (!validHandle) {
                    return false;
                }
            }

            this.currentItem = currentItem;
            this._removeCurrentsFromItems();
            return true;

        },

        _mouseStart: function (event, overrideHandle, noActivation) {

            var i, body,
                o = this.options;

            this.currentContainer = this;

            //We only need to call refreshPositions, because the refreshItems call has been moved to
            // mouseCapture
            this.refreshPositions();

            //Create and append the visible helper
            this.helper = this._createHelper(event);

            //Cache the helper size
            this._cacheHelperProportions();

            /*
             * - Position generation -
             * This block generates everything position related - it's the core of draggables.
             */

            //Cache the margins of the original element
            this._cacheMargins();

            //Get the next scrolling parent
            this.scrollParent = this.helper.scrollParent();

            //The element's absolute position on the page minus margins
            this.offset = this.currentItem.offset();
            this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            };

            $.extend(this.offset, {
                click: { //Where the click happened, relative to the element
                    left: event.pageX - this.offset.left,
                    top: event.pageY - this.offset.top
                },
                parent: this._getParentOffset(),

                // This is a relative to absolute position minus the actual position calculation -
                // only used for relative positioned helper
                relative: this._getRelativeOffset()
            });

            // Only after we got the offset, we can change the helper's position to absolute
            // TODO: Still need to figure out a way to make relative sorting possible
            this.helper.css("position", "absolute");
            this.cssPosition = this.helper.css("position");

            //Generate the original position
            this.originalPosition = this._generatePosition(event);
            this.originalPageX = event.pageX;
            this.originalPageY = event.pageY;

            //Adjust the mouse offset relative to the helper if "cursorAt" is supplied
            (o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt));

            //Cache the former DOM position
            this.domPosition = {
                prev: this.currentItem.prev()[0],
                parent: this.currentItem.parent()[0]
            };

            // If the helper is not the original, hide the original so it's not playing any role during
            // the drag, won't cause anything bad this way
            if (this.helper[0] !== this.currentItem[0]) {
                this.currentItem.hide();
            }

            //Create the placeholder
            this._createPlaceholder();

            //Set a containment if given in the options
            if (o.containment) {
                this._setContainment();
            }

            if (o.cursor && o.cursor !== "auto") { // cursor option
                body = this.document.find("body");

                // Support: IE
                this.storedCursor = body.css("cursor");
                body.css("cursor", o.cursor);

                this.storedStylesheet =
                    $("<style>*{ cursor: " + o.cursor + " !important; }</style>").appendTo(body);
            }

            if (o.opacity) { // opacity option
                if (this.helper.css("opacity")) {
                    this._storedOpacity = this.helper.css("opacity");
                }
                this.helper.css("opacity", o.opacity);
            }

            if (o.zIndex) { // zIndex option
                if (this.helper.css("zIndex")) {
                    this._storedZIndex = this.helper.css("zIndex");
                }
                this.helper.css("zIndex", o.zIndex);
            }

            //Prepare scrolling
            if (this.scrollParent[0] !== this.document[0] &&
                this.scrollParent[0].tagName !== "HTML") {
                this.overflowOffset = this.scrollParent.offset();
            }

            //Call callbacks
            this._trigger("start", event, this._uiHash());

            //Recache the helper size
            if (!this._preserveHelperProportions) {
                this._cacheHelperProportions();
            }

            //Post "activate" events to possible containers
            if (!noActivation) {
                for (i = this.containers.length - 1; i >= 0; i--) {
                    this.containers[i]._trigger("activate", event, this._uiHash(this));
                }
            }

            //Prepare possible droppables
            if ($.ui.ddmanager) {
                $.ui.ddmanager.current = this;
            }

            if ($.ui.ddmanager && !o.dropBehaviour) {
                $.ui.ddmanager.prepareOffsets(this, event);
            }

            this.dragging = true;

            this._addClass(this.helper, "ui-sortable-helper");

            // Execute the drag once - this causes the helper not to be visiblebefore getting its
            // correct position
            this._mouseDrag(event);
            return true;

        },

        _mouseDrag: function (event) {
            var i, item, itemElement, intersection,
                o = this.options,
                scrolled = false;

            //Compute the helpers position
            this.position = this._generatePosition(event);
            this.positionAbs = this._convertPositionTo("absolute");

            if (!this.lastPositionAbs) {
                this.lastPositionAbs = this.positionAbs;
            }

            //Do scrolling
            if (this.options.scroll) {
                if (this.scrollParent[0] !== this.document[0] &&
                    this.scrollParent[0].tagName !== "HTML") {

                    if ((this.overflowOffset.top + this.scrollParent[0].offsetHeight) -
                        event.pageY < o.scrollSensitivity) {
                        this.scrollParent[0].scrollTop =
                            scrolled = this.scrollParent[0].scrollTop + o.scrollSpeed;
                    } else if (event.pageY - this.overflowOffset.top < o.scrollSensitivity) {
                        this.scrollParent[0].scrollTop =
                            scrolled = this.scrollParent[0].scrollTop - o.scrollSpeed;
                    }

                    if ((this.overflowOffset.left + this.scrollParent[0].offsetWidth) -
                        event.pageX < o.scrollSensitivity) {
                        this.scrollParent[0].scrollLeft = scrolled =
                            this.scrollParent[0].scrollLeft + o.scrollSpeed;
                    } else if (event.pageX - this.overflowOffset.left < o.scrollSensitivity) {
                        this.scrollParent[0].scrollLeft = scrolled =
                            this.scrollParent[0].scrollLeft - o.scrollSpeed;
                    }

                } else {

                    if (event.pageY - this.document.scrollTop() < o.scrollSensitivity) {
                        scrolled = this.document.scrollTop(this.document.scrollTop() - o.scrollSpeed);
                    } else if (this.window.height() - (event.pageY - this.document.scrollTop()) <
                        o.scrollSensitivity) {
                        scrolled = this.document.scrollTop(this.document.scrollTop() + o.scrollSpeed);
                    }

                    if (event.pageX - this.document.scrollLeft() < o.scrollSensitivity) {
                        scrolled = this.document.scrollLeft(
                            this.document.scrollLeft() - o.scrollSpeed
                        );
                    } else if (this.window.width() - (event.pageX - this.document.scrollLeft()) <
                        o.scrollSensitivity) {
                        scrolled = this.document.scrollLeft(
                            this.document.scrollLeft() + o.scrollSpeed
                        );
                    }

                }

                if (scrolled !== false && $.ui.ddmanager && !o.dropBehaviour) {
                    $.ui.ddmanager.prepareOffsets(this, event);
                }
            }

            //Regenerate the absolute position used for position checks
            this.positionAbs = this._convertPositionTo("absolute");

            //Set the helper position
            if (!this.options.axis || this.options.axis !== "y") {
                this.helper[0].style.left = this.position.left + "px";
            }
            if (!this.options.axis || this.options.axis !== "x") {
                this.helper[0].style.top = this.position.top + "px";
            }

            //Rearrange
            for (i = this.items.length - 1; i >= 0; i--) {

                //Cache variables and intersection, continue if no intersection
                item = this.items[i];
                itemElement = item.item[0];
                intersection = this._intersectsWithPointer(item);
                if (!intersection) {
                    continue;
                }

                // Only put the placeholder inside the current Container, skip all
                // items from other containers. This works because when moving
                // an item from one container to another the
                // currentContainer is switched before the placeholder is moved.
                //
                // Without this, moving items in "sub-sortables" can cause
                // the placeholder to jitter between the outer and inner container.
                if (item.instance !== this.currentContainer) {
                    continue;
                }

                // Cannot intersect with itself
                // no useless actions that have been done before
                // no action if the item moved is the parent of the item checked
                if (itemElement !== this.currentItem[0] &&
                    this.placeholder[intersection === 1 ? "next" : "prev"]()[0] !== itemElement &&
                    !$.contains(this.placeholder[0], itemElement) &&
                    (this.options.type === "semi-dynamic" ?
                        !$.contains(this.element[0], itemElement) :
                        true
                    )
                ) {

                    this.direction = intersection === 1 ? "down" : "up";

                    if (this.options.tolerance === "pointer" || this._intersectsWithSides(item)) {
                        this._rearrange(event, item);
                    } else {
                        break;
                    }

                    this._trigger("change", event, this._uiHash());
                    break;
                }
            }

            //Post events to containers
            this._contactContainers(event);

            //Interconnect with droppables
            if ($.ui.ddmanager) {
                $.ui.ddmanager.drag(this, event);
            }

            //Call callbacks
            this._trigger("sort", event, this._uiHash());

            this.lastPositionAbs = this.positionAbs;
            return false;

        },

        _mouseStop: function (event, noPropagation) {

            if (!event) {
                return;
            }

            //If we are using droppables, inform the manager about the drop
            if ($.ui.ddmanager && !this.options.dropBehaviour) {
                $.ui.ddmanager.drop(this, event);
            }

            if (this.options.revert) {
                var that = this,
                    cur = this.placeholder.offset(),
                    axis = this.options.axis,
                    animation = {};

                if (!axis || axis === "x") {
                    animation.left = cur.left - this.offset.parent.left - this.margins.left +
                        (this.offsetParent[0] === this.document[0].body ?
                            0 :
                            this.offsetParent[0].scrollLeft
                        );
                }
                if (!axis || axis === "y") {
                    animation.top = cur.top - this.offset.parent.top - this.margins.top +
                        (this.offsetParent[0] === this.document[0].body ?
                            0 :
                            this.offsetParent[0].scrollTop
                        );
                }
                this.reverting = true;
                $(this.helper).animate(
                    animation,
                    parseInt(this.options.revert, 10) || 500,
                    function () {
                        that._clear(event);
                    }
                );
            } else {
                this._clear(event, noPropagation);
            }

            return false;

        },

        cancel: function () {

            if (this.dragging) {

                this._mouseUp(new $.Event("mouseup", { target: null }));

                if (this.options.helper === "original") {
                    this.currentItem.css(this._storedCSS);
                    this._removeClass(this.currentItem, "ui-sortable-helper");
                } else {
                    this.currentItem.show();
                }

                //Post deactivating events to containers
                for (var i = this.containers.length - 1; i >= 0; i--) {
                    this.containers[i]._trigger("deactivate", null, this._uiHash(this));
                    if (this.containers[i].containerCache.over) {
                        this.containers[i]._trigger("out", null, this._uiHash(this));
                        this.containers[i].containerCache.over = 0;
                    }
                }

            }

            if (this.placeholder) {

                //$(this.placeholder[0]).remove(); would have been the jQuery way - unfortunately,
                // it unbinds ALL events from the original node!
                if (this.placeholder[0].parentNode) {
                    this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
                }
                if (this.options.helper !== "original" && this.helper &&
                    this.helper[0].parentNode) {
                    this.helper.remove();
                }

                $.extend(this, {
                    helper: null,
                    dragging: false,
                    reverting: false,
                    _noFinalSort: null
                });

                if (this.domPosition.prev) {
                    $(this.domPosition.prev).after(this.currentItem);
                } else {
                    $(this.domPosition.parent).prepend(this.currentItem);
                }
            }

            return this;

        },

        serialize: function (o) {

            var items = this._getItemsAsjQuery(o && o.connected),
                str = [];
            o = o || {};

            $(items).each(function () {
                var res = ($(o.item || this).attr(o.attribute || "id") || "")
                    .match(o.expression || (/(.+)[\-=_](.+)/));
                if (res) {
                    str.push(
                        (o.key || res[1] + "[]") +
                        "=" + (o.key && o.expression ? res[1] : res[2]));
                }
            });

            if (!str.length && o.key) {
                str.push(o.key + "=");
            }

            return str.join("&");

        },

        toArray: function (o) {

            var items = this._getItemsAsjQuery(o && o.connected),
                ret = [];

            o = o || {};

            items.each(function () {
                ret.push($(o.item || this).attr(o.attribute || "id") || "");
            });
            return ret;

        },

        /* Be careful with the following core functions */
        _intersectsWith: function (item) {

            var x1 = this.positionAbs.left,
                x2 = x1 + this.helperProportions.width,
                y1 = this.positionAbs.top,
                y2 = y1 + this.helperProportions.height,
                l = item.left,
                r = l + item.width,
                t = item.top,
                b = t + item.height,
                dyClick = this.offset.click.top,
                dxClick = this.offset.click.left,
                isOverElementHeight = (this.options.axis === "x") || ((y1 + dyClick) > t &&
                    (y1 + dyClick) < b),
                isOverElementWidth = (this.options.axis === "y") || ((x1 + dxClick) > l &&
                    (x1 + dxClick) < r),
                isOverElement = isOverElementHeight && isOverElementWidth;

            if (this.options.tolerance === "pointer" ||
                this.options.forcePointerForContainers ||
                (this.options.tolerance !== "pointer" &&
                    this.helperProportions[this.floating ? "width" : "height"] >
                    item[this.floating ? "width" : "height"])
            ) {
                return isOverElement;
            } else {

                return (l < x1 + (this.helperProportions.width / 2) && // Right Half
                    x2 - (this.helperProportions.width / 2) < r && // Left Half
                    t < y1 + (this.helperProportions.height / 2) && // Bottom Half
                    y2 - (this.helperProportions.height / 2) < b); // Top Half

            }
        },

        _intersectsWithPointer: function (item) {
            var verticalDirection, horizontalDirection,
                isOverElementHeight = (this.options.axis === "x") ||
                    this._isOverAxis(
                        this.positionAbs.top + this.offset.click.top, item.top, item.height),
                isOverElementWidth = (this.options.axis === "y") ||
                    this._isOverAxis(
                        this.positionAbs.left + this.offset.click.left, item.left, item.width),
                isOverElement = isOverElementHeight && isOverElementWidth;

            if (!isOverElement) {
                return false;
            }

            verticalDirection = this._getDragVerticalDirection();
            horizontalDirection = this._getDragHorizontalDirection();

            return this.floating ?
                ((horizontalDirection === "right" || verticalDirection === "down") ? 2 : 1)
                : (verticalDirection && (verticalDirection === "down" ? 2 : 1));

        },

        _intersectsWithSides: function (item) {

            var isOverBottomHalf = this._isOverAxis(this.positionAbs.top +
                this.offset.click.top, item.top + (item.height / 2), item.height),
                isOverRightHalf = this._isOverAxis(this.positionAbs.left +
                    this.offset.click.left, item.left + (item.width / 2), item.width),
                verticalDirection = this._getDragVerticalDirection(),
                horizontalDirection = this._getDragHorizontalDirection();

            if (this.floating && horizontalDirection) {
                return ((horizontalDirection === "right" && isOverRightHalf) ||
                    (horizontalDirection === "left" && !isOverRightHalf));
            } else {
                return verticalDirection && ((verticalDirection === "down" && isOverBottomHalf) ||
                    (verticalDirection === "up" && !isOverBottomHalf));
            }

        },

        _getDragVerticalDirection: function () {
            var delta = this.positionAbs.top - this.lastPositionAbs.top;
            return delta !== 0 && (delta > 0 ? "down" : "up");
        },

        _getDragHorizontalDirection: function () {
            var delta = this.positionAbs.left - this.lastPositionAbs.left;
            return delta !== 0 && (delta > 0 ? "right" : "left");
        },

        refresh: function (event) {
            this._refreshItems(event);
            this._setHandleClassName();
            this.refreshPositions();
            return this;
        },

        _connectWith: function () {
            var options = this.options;
            return options.connectWith.constructor === String ?
                [options.connectWith] :
                options.connectWith;
        },

        _getItemsAsjQuery: function (connected) {

            var i, j, cur, inst,
                items = [],
                queries = [],
                connectWith = this._connectWith();

            if (connectWith && connected) {
                for (i = connectWith.length - 1; i >= 0; i--) {
                    cur = $(connectWith[i], this.document[0]);
                    for (j = cur.length - 1; j >= 0; j--) {
                        inst = $.data(cur[j], this.widgetFullName);
                        if (inst && inst !== this && !inst.options.disabled) {
                            queries.push([$.isFunction(inst.options.items) ?
                                inst.options.items.call(inst.element) :
                                $(inst.options.items, inst.element)
                                    .not(".ui-sortable-helper")
                                    .not(".ui-sortable-placeholder"), inst]);
                        }
                    }
                }
            }

            queries.push([$.isFunction(this.options.items) ?
                this.options.items
                    .call(this.element, null, { options: this.options, item: this.currentItem }) :
                $(this.options.items, this.element)
                    .not(".ui-sortable-helper")
                    .not(".ui-sortable-placeholder"), this]);

            function addItems() {
                items.push(this);
            }
            for (i = queries.length - 1; i >= 0; i--) {
                queries[i][0].each(addItems);
            }

            return $(items);

        },

        _removeCurrentsFromItems: function () {

            var list = this.currentItem.find(":data(" + this.widgetName + "-item)");

            this.items = $.grep(this.items, function (item) {
                for (var j = 0; j < list.length; j++) {
                    if (list[j] === item.item[0]) {
                        return false;
                    }
                }
                return true;
            });

        },

        _refreshItems: function (event) {

            this.items = [];
            this.containers = [this];

            var i, j, cur, inst, targetData, _queries, item, queriesLength,
                items = this.items,
                queries = [[$.isFunction(this.options.items) ?
                    this.options.items.call(this.element[0], event, { item: this.currentItem }) :
                    $(this.options.items, this.element), this]],
                connectWith = this._connectWith();

            //Shouldn't be run the first time through due to massive slow-down
            if (connectWith && this.ready) {
                for (i = connectWith.length - 1; i >= 0; i--) {
                    cur = $(connectWith[i], this.document[0]);
                    for (j = cur.length - 1; j >= 0; j--) {
                        inst = $.data(cur[j], this.widgetFullName);
                        if (inst && inst !== this && !inst.options.disabled) {
                            queries.push([$.isFunction(inst.options.items) ?
                                inst.options.items
                                    .call(inst.element[0], event, { item: this.currentItem }) :
                                $(inst.options.items, inst.element), inst]);
                            this.containers.push(inst);
                        }
                    }
                }
            }

            for (i = queries.length - 1; i >= 0; i--) {
                targetData = queries[i][1];
                _queries = queries[i][0];

                for (j = 0, queriesLength = _queries.length; j < queriesLength; j++) {
                    item = $(_queries[j]);

                    // Data for target checking (mouse manager)
                    item.data(this.widgetName + "-item", targetData);

                    items.push({
                        item: item,
                        instance: targetData,
                        width: 0, height: 0,
                        left: 0, top: 0
                    });
                }
            }

        },

        refreshPositions: function (fast) {

            // Determine whether items are being displayed horizontally
            this.floating = this.items.length ?
                this.options.axis === "x" || this._isFloating(this.items[0].item) :
                false;

            //This has to be redone because due to the item being moved out/into the offsetParent,
            // the offsetParent's position will change
            if (this.offsetParent && this.helper) {
                this.offset.parent = this._getParentOffset();
            }

            var i, item, t, p;

            for (i = this.items.length - 1; i >= 0; i--) {
                item = this.items[i];

                //We ignore calculating positions of all connected containers when we're not over them
                if (item.instance !== this.currentContainer && this.currentContainer &&
                    item.item[0] !== this.currentItem[0]) {
                    continue;
                }

                t = this.options.toleranceElement ?
                    $(this.options.toleranceElement, item.item) :
                    item.item;

                if (!fast) {
                    item.width = t.outerWidth();
                    item.height = t.outerHeight();
                }

                p = t.offset();
                item.left = p.left;
                item.top = p.top;
            }

            if (this.options.custom && this.options.custom.refreshContainers) {
                this.options.custom.refreshContainers.call(this);
            } else {
                for (i = this.containers.length - 1; i >= 0; i--) {
                    p = this.containers[i].element.offset();
                    this.containers[i].containerCache.left = p.left;
                    this.containers[i].containerCache.top = p.top;
                    this.containers[i].containerCache.width =
                        this.containers[i].element.outerWidth();
                    this.containers[i].containerCache.height =
                        this.containers[i].element.outerHeight();
                }
            }

            return this;
        },

        _createPlaceholder: function (that) {
            that = that || this;
            var className,
                o = that.options;

            if (!o.placeholder || o.placeholder.constructor === String) {
                className = o.placeholder;
                o.placeholder = {
                    element: function () {

                        var nodeName = that.currentItem[0].nodeName.toLowerCase(),
                            element = $("<" + nodeName + ">", that.document[0]);

                        that._addClass(element, "ui-sortable-placeholder",
                            className || that.currentItem[0].className)
                            ._removeClass(element, "ui-sortable-helper");

                        if (nodeName === "tbody") {
                            that._createTrPlaceholder(
                                that.currentItem.find("tr").eq(0),
                                $("<tr>", that.document[0]).appendTo(element)
                            );
                        } else if (nodeName === "tr") {
                            that._createTrPlaceholder(that.currentItem, element);
                        } else if (nodeName === "img") {
                            element.attr("src", that.currentItem.attr("src"));
                        }

                        if (!className) {
                            element.css("visibility", "hidden");
                        }

                        return element;
                    },
                    update: function (container, p) {

                        // 1. If a className is set as 'placeholder option, we don't force sizes -
                        // the class is responsible for that
                        // 2. The option 'forcePlaceholderSize can be enabled to force it even if a
                        // class name is specified
                        if (className && !o.forcePlaceholderSize) {
                            return;
                        }

                        //If the element doesn't have a actual height by itself (without styles coming
                        // from a stylesheet), it receives the inline height from the dragged item
                        if (!p.height()) {
                            p.height(
                                that.currentItem.innerHeight() -
                                parseInt(that.currentItem.css("paddingTop") || 0, 10) -
                                parseInt(that.currentItem.css("paddingBottom") || 0, 10));
                        }
                        if (!p.width()) {
                            p.width(
                                that.currentItem.innerWidth() -
                                parseInt(that.currentItem.css("paddingLeft") || 0, 10) -
                                parseInt(that.currentItem.css("paddingRight") || 0, 10));
                        }
                    }
                };
            }

            //Create the placeholder
            that.placeholder = $(o.placeholder.element.call(that.element, that.currentItem));

            //Append it after the actual current item
            that.currentItem.after(that.placeholder);

            //Update the size of the placeholder (TODO: Logic to fuzzy, see line 316/317)
            o.placeholder.update(that, that.placeholder);

        },

        _createTrPlaceholder: function (sourceTr, targetTr) {
            var that = this;

            sourceTr.children().each(function () {
                $("<td>&#160;</td>", that.document[0])
                    .attr("colspan", $(this).attr("colspan") || 1)
                    .appendTo(targetTr);
            });
        },

        _contactContainers: function (event) {
            var i, j, dist, itemWithLeastDistance, posProperty, sizeProperty, cur, nearBottom,
                floating, axis,
                innermostContainer = null,
                innermostIndex = null;

            // Get innermost container that intersects with item
            for (i = this.containers.length - 1; i >= 0; i--) {

                // Never consider a container that's located within the item itself
                if ($.contains(this.currentItem[0], this.containers[i].element[0])) {
                    continue;
                }

                if (this._intersectsWith(this.containers[i].containerCache)) {

                    // If we've already found a container and it's more "inner" than this, then continue
                    if (innermostContainer &&
                        $.contains(
                            this.containers[i].element[0],
                            innermostContainer.element[0])) {
                        continue;
                    }

                    innermostContainer = this.containers[i];
                    innermostIndex = i;

                } else {

                    // container doesn't intersect. trigger "out" event if necessary
                    if (this.containers[i].containerCache.over) {
                        this.containers[i]._trigger("out", event, this._uiHash(this));
                        this.containers[i].containerCache.over = 0;
                    }
                }

            }

            // If no intersecting containers found, return
            if (!innermostContainer) {
                return;
            }

            // Move the item into the container if it's not there already
            if (this.containers.length === 1) {
                if (!this.containers[innermostIndex].containerCache.over) {
                    this.containers[innermostIndex]._trigger("over", event, this._uiHash(this));
                    this.containers[innermostIndex].containerCache.over = 1;
                }
            } else {

                // When entering a new container, we will find the item with the least distance and
                // append our item near it
                dist = 10000;
                itemWithLeastDistance = null;
                floating = innermostContainer.floating || this._isFloating(this.currentItem);
                posProperty = floating ? "left" : "top";
                sizeProperty = floating ? "width" : "height";
                axis = floating ? "pageX" : "pageY";

                for (j = this.items.length - 1; j >= 0; j--) {
                    if (!$.contains(
                        this.containers[innermostIndex].element[0], this.items[j].item[0])
                    ) {
                        continue;
                    }
                    if (this.items[j].item[0] === this.currentItem[0]) {
                        continue;
                    }

                    cur = this.items[j].item.offset()[posProperty];
                    nearBottom = false;
                    if (event[axis] - cur > this.items[j][sizeProperty] / 2) {
                        nearBottom = true;
                    }

                    if (Math.abs(event[axis] - cur) < dist) {
                        dist = Math.abs(event[axis] - cur);
                        itemWithLeastDistance = this.items[j];
                        this.direction = nearBottom ? "up" : "down";
                    }
                }

                //Check if dropOnEmpty is enabled
                if (!itemWithLeastDistance && !this.options.dropOnEmpty) {
                    return;
                }

                if (this.currentContainer === this.containers[innermostIndex]) {
                    if (!this.currentContainer.containerCache.over) {
                        this.containers[innermostIndex]._trigger("over", event, this._uiHash());
                        this.currentContainer.containerCache.over = 1;
                    }
                    return;
                }

                itemWithLeastDistance ?
                    this._rearrange(event, itemWithLeastDistance, null, true) :
                    this._rearrange(event, null, this.containers[innermostIndex].element, true);
                this._trigger("change", event, this._uiHash());
                this.containers[innermostIndex]._trigger("change", event, this._uiHash(this));
                this.currentContainer = this.containers[innermostIndex];

                //Update the placeholder
                this.options.placeholder.update(this.currentContainer, this.placeholder);

                this.containers[innermostIndex]._trigger("over", event, this._uiHash(this));
                this.containers[innermostIndex].containerCache.over = 1;
            }

        },

        _createHelper: function (event) {

            var o = this.options,
                helper = $.isFunction(o.helper) ?
                    $(o.helper.apply(this.element[0], [event, this.currentItem])) :
                    (o.helper === "clone" ? this.currentItem.clone() : this.currentItem);

            //Add the helper to the DOM if that didn't happen already
            if (!helper.parents("body").length) {
                $(o.appendTo !== "parent" ?
                    o.appendTo :
                    this.currentItem[0].parentNode)[0].appendChild(helper[0]);
            }

            if (helper[0] === this.currentItem[0]) {
                this._storedCSS = {
                    width: this.currentItem[0].style.width,
                    height: this.currentItem[0].style.height,
                    position: this.currentItem.css("position"),
                    top: this.currentItem.css("top"),
                    left: this.currentItem.css("left")
                };
            }

            if (!helper[0].style.width || o.forceHelperSize) {
                helper.width(this.currentItem.width());
            }
            if (!helper[0].style.height || o.forceHelperSize) {
                helper.height(this.currentItem.height());
            }

            return helper;

        },

        _adjustOffsetFromHelper: function (obj) {
            if (typeof obj === "string") {
                obj = obj.split(" ");
            }
            if ($.isArray(obj)) {
                obj = { left: +obj[0], top: +obj[1] || 0 };
            }
            if ("left" in obj) {
                this.offset.click.left = obj.left + this.margins.left;
            }
            if ("right" in obj) {
                this.offset.click.left = this.helperProportions.width - obj.right + this.margins.left;
            }
            if ("top" in obj) {
                this.offset.click.top = obj.top + this.margins.top;
            }
            if ("bottom" in obj) {
                this.offset.click.top = this.helperProportions.height - obj.bottom + this.margins.top;
            }
        },

        _getParentOffset: function () {

            //Get the offsetParent and cache its position
            this.offsetParent = this.helper.offsetParent();
            var po = this.offsetParent.offset();

            // This is a special case where we need to modify a offset calculated on start, since the
            // following happened:
            // 1. The position of the helper is absolute, so it's position is calculated based on the
            // next positioned parent
            // 2. The actual offset parent is a child of the scroll parent, and the scroll parent isn't
            // the document, which means that the scroll is included in the initial calculation of the
            // offset of the parent, and never recalculated upon drag
            if (this.cssPosition === "absolute" && this.scrollParent[0] !== this.document[0] &&
                $.contains(this.scrollParent[0], this.offsetParent[0])) {
                po.left += this.scrollParent.scrollLeft();
                po.top += this.scrollParent.scrollTop();
            }

            // This needs to be actually done for all browsers, since pageX/pageY includes this
            // information with an ugly IE fix
            if (this.offsetParent[0] === this.document[0].body ||
                (this.offsetParent[0].tagName &&
                    this.offsetParent[0].tagName.toLowerCase() === "html" && $.ui.ie)) {
                po = { top: 0, left: 0 };
            }

            return {
                top: po.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: po.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            };

        },

        _getRelativeOffset: function () {

            if (this.cssPosition === "relative") {
                var p = this.currentItem.position();
                return {
                    top: p.top - (parseInt(this.helper.css("top"), 10) || 0) +
                        this.scrollParent.scrollTop(),
                    left: p.left - (parseInt(this.helper.css("left"), 10) || 0) +
                        this.scrollParent.scrollLeft()
                };
            } else {
                return { top: 0, left: 0 };
            }

        },

        _cacheMargins: function () {
            this.margins = {
                left: (parseInt(this.currentItem.css("marginLeft"), 10) || 0),
                top: (parseInt(this.currentItem.css("marginTop"), 10) || 0)
            };
        },

        _cacheHelperProportions: function () {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            };
        },

        _setContainment: function () {

            var ce, co, over,
                o = this.options;
            if (o.containment === "parent") {
                o.containment = this.helper[0].parentNode;
            }
            if (o.containment === "document" || o.containment === "window") {
                this.containment = [
                    0 - this.offset.relative.left - this.offset.parent.left,
                    0 - this.offset.relative.top - this.offset.parent.top,
                    o.containment === "document" ?
                        this.document.width() :
                        this.window.width() - this.helperProportions.width - this.margins.left,
                    (o.containment === "document" ?
                        (this.document.height() || document.body.parentNode.scrollHeight) :
                        this.window.height() || this.document[0].body.parentNode.scrollHeight
                    ) - this.helperProportions.height - this.margins.top
                ];
            }

            if (!(/^(document|window|parent)$/).test(o.containment)) {
                ce = $(o.containment)[0];
                co = $(o.containment).offset();
                over = ($(ce).css("overflow") !== "hidden");

                this.containment = [
                    co.left + (parseInt($(ce).css("borderLeftWidth"), 10) || 0) +
                    (parseInt($(ce).css("paddingLeft"), 10) || 0) - this.margins.left,
                    co.top + (parseInt($(ce).css("borderTopWidth"), 10) || 0) +
                    (parseInt($(ce).css("paddingTop"), 10) || 0) - this.margins.top,
                    co.left + (over ? Math.max(ce.scrollWidth, ce.offsetWidth) : ce.offsetWidth) -
                    (parseInt($(ce).css("borderLeftWidth"), 10) || 0) -
                    (parseInt($(ce).css("paddingRight"), 10) || 0) -
                    this.helperProportions.width - this.margins.left,
                    co.top + (over ? Math.max(ce.scrollHeight, ce.offsetHeight) : ce.offsetHeight) -
                    (parseInt($(ce).css("borderTopWidth"), 10) || 0) -
                    (parseInt($(ce).css("paddingBottom"), 10) || 0) -
                    this.helperProportions.height - this.margins.top
                ];
            }

        },

        _convertPositionTo: function (d, pos) {

            if (!pos) {
                pos = this.position;
            }
            var mod = d === "absolute" ? 1 : -1,
                scroll = this.cssPosition === "absolute" &&
                    !(this.scrollParent[0] !== this.document[0] &&
                        $.contains(this.scrollParent[0], this.offsetParent[0])) ?
                    this.offsetParent :
                    this.scrollParent,
                scrollIsRootNode = (/(html|body)/i).test(scroll[0].tagName);

            return {
                top: (

                    // The absolute mouse position
                    pos.top +

                    // Only for relative positioned nodes: Relative offset from element to offset parent
                    this.offset.relative.top * mod +

                    // The offsetParent's offset without borders (offset + border)
                    this.offset.parent.top * mod -
                    ((this.cssPosition === "fixed" ?
                        -this.scrollParent.scrollTop() :
                        (scrollIsRootNode ? 0 : scroll.scrollTop())) * mod)
                ),
                left: (

                    // The absolute mouse position
                    pos.left +

                    // Only for relative positioned nodes: Relative offset from element to offset parent
                    this.offset.relative.left * mod +

                    // The offsetParent's offset without borders (offset + border)
                    this.offset.parent.left * mod -
                    ((this.cssPosition === "fixed" ?
                        -this.scrollParent.scrollLeft() : scrollIsRootNode ? 0 :
                            scroll.scrollLeft()) * mod)
                )
            };

        },

        _generatePosition: function (event) {

            var top, left,
                o = this.options,
                pageX = event.pageX,
                pageY = event.pageY,
                scroll = this.cssPosition === "absolute" &&
                    !(this.scrollParent[0] !== this.document[0] &&
                        $.contains(this.scrollParent[0], this.offsetParent[0])) ?
                    this.offsetParent :
                    this.scrollParent,
                scrollIsRootNode = (/(html|body)/i).test(scroll[0].tagName);

            // This is another very weird special case that only happens for relative elements:
            // 1. If the css position is relative
            // 2. and the scroll parent is the document or similar to the offset parent
            // we have to refresh the relative offset during the scroll so there are no jumps
            if (this.cssPosition === "relative" && !(this.scrollParent[0] !== this.document[0] &&
                this.scrollParent[0] !== this.offsetParent[0])) {
                this.offset.relative = this._getRelativeOffset();
            }

            /*
             * - Position constraining -
             * Constrain the position to a mix of grid, containment.
             */

            if (this.originalPosition) { //If we are not dragging yet, we won't check for options

                if (this.containment) {
                    if (event.pageX - this.offset.click.left < this.containment[0]) {
                        pageX = this.containment[0] + this.offset.click.left;
                    }
                    if (event.pageY - this.offset.click.top < this.containment[1]) {
                        pageY = this.containment[1] + this.offset.click.top;
                    }
                    if (event.pageX - this.offset.click.left > this.containment[2]) {
                        pageX = this.containment[2] + this.offset.click.left;
                    }
                    if (event.pageY - this.offset.click.top > this.containment[3]) {
                        pageY = this.containment[3] + this.offset.click.top;
                    }
                }

                if (o.grid) {
                    top = this.originalPageY + Math.round((pageY - this.originalPageY) /
                        o.grid[1]) * o.grid[1];
                    pageY = this.containment ?
                        ((top - this.offset.click.top >= this.containment[1] &&
                            top - this.offset.click.top <= this.containment[3]) ?
                            top :
                            ((top - this.offset.click.top >= this.containment[1]) ?
                                top - o.grid[1] : top + o.grid[1])) :
                        top;

                    left = this.originalPageX + Math.round((pageX - this.originalPageX) /
                        o.grid[0]) * o.grid[0];
                    pageX = this.containment ?
                        ((left - this.offset.click.left >= this.containment[0] &&
                            left - this.offset.click.left <= this.containment[2]) ?
                            left :
                            ((left - this.offset.click.left >= this.containment[0]) ?
                                left - o.grid[0] : left + o.grid[0])) :
                        left;
                }

            }

            return {
                top: (

                    // The absolute mouse position
                    pageY -

                    // Click offset (relative to the element)
                    this.offset.click.top -

                    // Only for relative positioned nodes: Relative offset from element to offset parent
                    this.offset.relative.top -

                    // The offsetParent's offset without borders (offset + border)
                    this.offset.parent.top +
                    ((this.cssPosition === "fixed" ?
                        -this.scrollParent.scrollTop() :
                        (scrollIsRootNode ? 0 : scroll.scrollTop())))
                ),
                left: (

                    // The absolute mouse position
                    pageX -

                    // Click offset (relative to the element)
                    this.offset.click.left -

                    // Only for relative positioned nodes: Relative offset from element to offset parent
                    this.offset.relative.left -

                    // The offsetParent's offset without borders (offset + border)
                    this.offset.parent.left +
                    ((this.cssPosition === "fixed" ?
                        -this.scrollParent.scrollLeft() :
                        scrollIsRootNode ? 0 : scroll.scrollLeft()))
                )
            };

        },

        _rearrange: function (event, i, a, hardRefresh) {

            a ? a[0].appendChild(this.placeholder[0]) :
                i.item[0].parentNode.insertBefore(this.placeholder[0],
                    (this.direction === "down" ? i.item[0] : i.item[0].nextSibling));

            //Various things done here to improve the performance:
            // 1. we create a setTimeout, that calls refreshPositions
            // 2. on the instance, we have a counter variable, that get's higher after every append
            // 3. on the local scope, we copy the counter variable, and check in the timeout,
            // if it's still the same
            // 4. this lets only the last addition to the timeout stack through
            this.counter = this.counter ? ++this.counter : 1;
            var counter = this.counter;

            this._delay(function () {
                if (counter === this.counter) {

                    //Precompute after each DOM insertion, NOT on mousemove
                    this.refreshPositions(!hardRefresh);
                }
            });

        },

        _clear: function (event, noPropagation) {

            this.reverting = false;

            // We delay all events that have to be triggered to after the point where the placeholder
            // has been removed and everything else normalized again
            var i,
                delayedTriggers = [];

            // We first have to update the dom position of the actual currentItem
            // Note: don't do it if the current item is already removed (by a user), or it gets
            // reappended (see #4088)
            if (!this._noFinalSort && this.currentItem.parent().length) {
                this.placeholder.before(this.currentItem);
            }
            this._noFinalSort = null;

            if (this.helper[0] === this.currentItem[0]) {
                for (i in this._storedCSS) {
                    if (this._storedCSS[i] === "auto" || this._storedCSS[i] === "static") {
                        this._storedCSS[i] = "";
                    }
                }
                this.currentItem.css(this._storedCSS);
                this._removeClass(this.currentItem, "ui-sortable-helper");
            } else {
                this.currentItem.show();
            }

            if (this.fromOutside && !noPropagation) {
                delayedTriggers.push(function (event) {
                    this._trigger("receive", event, this._uiHash(this.fromOutside));
                });
            }
            if ((this.fromOutside ||
                this.domPosition.prev !==
                this.currentItem.prev().not(".ui-sortable-helper")[0] ||
                this.domPosition.parent !== this.currentItem.parent()[0]) && !noPropagation) {

                // Trigger update callback if the DOM position has changed
                delayedTriggers.push(function (event) {
                    this._trigger("update", event, this._uiHash());
                });
            }

            // Check if the items Container has Changed and trigger appropriate
            // events.
            if (this !== this.currentContainer) {
                if (!noPropagation) {
                    delayedTriggers.push(function (event) {
                        this._trigger("remove", event, this._uiHash());
                    });
                    delayedTriggers.push((function (c) {
                        return function (event) {
                            c._trigger("receive", event, this._uiHash(this));
                        };
                    }).call(this, this.currentContainer));
                    delayedTriggers.push((function (c) {
                        return function (event) {
                            c._trigger("update", event, this._uiHash(this));
                        };
                    }).call(this, this.currentContainer));
                }
            }

            //Post events to containers
            function delayEvent(type, instance, container) {
                return function (event) {
                    container._trigger(type, event, instance._uiHash(instance));
                };
            }
            for (i = this.containers.length - 1; i >= 0; i--) {
                if (!noPropagation) {
                    delayedTriggers.push(delayEvent("deactivate", this, this.containers[i]));
                }
                if (this.containers[i].containerCache.over) {
                    delayedTriggers.push(delayEvent("out", this, this.containers[i]));
                    this.containers[i].containerCache.over = 0;
                }
            }

            //Do what was originally in plugins
            if (this.storedCursor) {
                this.document.find("body").css("cursor", this.storedCursor);
                this.storedStylesheet.remove();
            }
            if (this._storedOpacity) {
                this.helper.css("opacity", this._storedOpacity);
            }
            if (this._storedZIndex) {
                this.helper.css("zIndex", this._storedZIndex === "auto" ? "" : this._storedZIndex);
            }

            this.dragging = false;

            if (!noPropagation) {
                this._trigger("beforeStop", event, this._uiHash());
            }

            //$(this.placeholder[0]).remove(); would have been the jQuery way - unfortunately,
            // it unbinds ALL events from the original node!
            this.placeholder[0].parentNode.removeChild(this.placeholder[0]);

            if (!this.cancelHelperRemoval) {
                if (this.helper[0] !== this.currentItem[0]) {
                    this.helper.remove();
                }
                this.helper = null;
            }

            if (!noPropagation) {
                for (i = 0; i < delayedTriggers.length; i++) {

                    // Trigger all delayed events
                    delayedTriggers[i].call(this, event);
                }
                this._trigger("stop", event, this._uiHash());
            }

            this.fromOutside = false;
            return !this.cancelHelperRemoval;

        },

        _trigger: function () {
            if ($.Widget.prototype._trigger.apply(this, arguments) === false) {
                this.cancel();
            }
        },

        _uiHash: function (_inst) {
            var inst = _inst || this;
            return {
                helper: inst.helper,
                placeholder: inst.placeholder || $([]),
                position: inst.position,
                originalPosition: inst.originalPosition,
                offset: inst.positionAbs,
                item: inst.currentItem,
                sender: _inst ? _inst.element : null
            };
        }

    });


    /*!
     * jQuery UI Spinner 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */

    //>>label: Spinner
    //>>group: Widgets
    //>>description: Displays buttons to easily input numbers via the keyboard or mouse.
    //>>docs: http://api.jqueryui.com/spinner/
    //>>demos: http://jqueryui.com/spinner/
    //>>css.structure: ../../themes/base/core.css
    //>>css.structure: ../../themes/base/spinner.css
    //>>css.theme: ../../themes/base/theme.css



    function spinnerModifer(fn) {
        return function () {
            var previous = this.element.val();
            fn.apply(this, arguments);
            this._refresh();
            if (previous !== this.element.val()) {
                this._trigger("change");
            }
        };
    }

    $.widget("ui.spinner", {
        version: "1.12.1",
        defaultElement: "<input>",
        widgetEventPrefix: "spin",
        options: {
            classes: {
                "ui-spinner": "ui-corner-all",
                "ui-spinner-down": "ui-corner-br",
                "ui-spinner-up": "ui-corner-tr"
            },
            culture: null,
            icons: {
                down: "ui-icon-triangle-1-s",
                up: "ui-icon-triangle-1-n"
            },
            incremental: true,
            max: null,
            min: null,
            numberFormat: null,
            page: 10,
            step: 1,

            change: null,
            spin: null,
            start: null,
            stop: null
        },

        _create: function () {

            // handle string values that need to be parsed
            this._setOption("max", this.options.max);
            this._setOption("min", this.options.min);
            this._setOption("step", this.options.step);

            // Only format if there is a value, prevents the field from being marked
            // as invalid in Firefox, see #9573.
            if (this.value() !== "") {

                // Format the value, but don't constrain.
                this._value(this.element.val(), true);
            }

            this._draw();
            this._on(this._events);
            this._refresh();

            // Turning off autocomplete prevents the browser from remembering the
            // value when navigating through history, so we re-enable autocomplete
            // if the page is unloaded before the widget is destroyed. #7790
            this._on(this.window, {
                beforeunload: function () {
                    this.element.removeAttr("autocomplete");
                }
            });
        },

        _getCreateOptions: function () {
            var options = this._super();
            var element = this.element;

            $.each(["min", "max", "step"], function (i, option) {
                var value = element.attr(option);
                if (value != null && value.length) {
                    options[option] = value;
                }
            });

            return options;
        },

        _events: {
            keydown: function (event) {
                if (this._start(event) && this._keydown(event)) {
                    event.preventDefault();
                }
            },
            keyup: "_stop",
            focus: function () {
                this.previous = this.element.val();
            },
            blur: function (event) {
                if (this.cancelBlur) {
                    delete this.cancelBlur;
                    return;
                }

                this._stop();
                this._refresh();
                if (this.previous !== this.element.val()) {
                    this._trigger("change", event);
                }
            },
            mousewheel: function (event, delta) {
                if (!delta) {
                    return;
                }
                if (!this.spinning && !this._start(event)) {
                    return false;
                }

                this._spin((delta > 0 ? 1 : -1) * this.options.step, event);
                clearTimeout(this.mousewheelTimer);
                this.mousewheelTimer = this._delay(function () {
                    if (this.spinning) {
                        this._stop(event);
                    }
                }, 100);
                event.preventDefault();
            },
            "mousedown .ui-spinner-button": function (event) {
                var previous;

                // We never want the buttons to have focus; whenever the user is
                // interacting with the spinner, the focus should be on the input.
                // If the input is focused then this.previous is properly set from
                // when the input first received focus. If the input is not focused
                // then we need to set this.previous based on the value before spinning.
                previous = this.element[0] === $.ui.safeActiveElement(this.document[0]) ?
                    this.previous : this.element.val();
                function checkFocus() {
                    var isActive = this.element[0] === $.ui.safeActiveElement(this.document[0]);
                    if (!isActive) {
                        this.element.trigger("focus");
                        this.previous = previous;

                        // support: IE
                        // IE sets focus asynchronously, so we need to check if focus
                        // moved off of the input because the user clicked on the button.
                        this._delay(function () {
                            this.previous = previous;
                        });
                    }
                }

                // Ensure focus is on (or stays on) the text field
                event.preventDefault();
                checkFocus.call(this);

                // Support: IE
                // IE doesn't prevent moving focus even with event.preventDefault()
                // so we set a flag to know when we should ignore the blur event
                // and check (again) if focus moved off of the input.
                this.cancelBlur = true;
                this._delay(function () {
                    delete this.cancelBlur;
                    checkFocus.call(this);
                });

                if (this._start(event) === false) {
                    return;
                }

                this._repeat(null, $(event.currentTarget)
                    .hasClass("ui-spinner-up") ? 1 : -1, event);
            },
            "mouseup .ui-spinner-button": "_stop",
            "mouseenter .ui-spinner-button": function (event) {

                // button will add ui-state-active if mouse was down while mouseleave and kept down
                if (!$(event.currentTarget).hasClass("ui-state-active")) {
                    return;
                }

                if (this._start(event) === false) {
                    return false;
                }
                this._repeat(null, $(event.currentTarget)
                    .hasClass("ui-spinner-up") ? 1 : -1, event);
            },

            // TODO: do we really want to consider this a stop?
            // shouldn't we just stop the repeater and wait until mouseup before
            // we trigger the stop event?
            "mouseleave .ui-spinner-button": "_stop"
        },

        // Support mobile enhanced option and make backcompat more sane
        _enhance: function () {
            this.uiSpinner = this.element
                .attr("autocomplete", "off")
                .wrap("<span>")
                .parent()

                // Add buttons
                .append(
                    "<a></a><a></a>"
                );
        },

        _draw: function () {
            this._enhance();

            this._addClass(this.uiSpinner, "ui-spinner", "ui-widget ui-widget-content");
            this._addClass("ui-spinner-input");

            this.element.attr("role", "spinbutton");

            // Button bindings
            this.buttons = this.uiSpinner.children("a")
                .attr("tabIndex", -1)
                .attr("aria-hidden", true)
                .button({
                    classes: {
                        "ui-button": ""
                    }
                });

            // TODO: Right now button does not support classes this is already updated in button PR
            this._removeClass(this.buttons, "ui-corner-all");

            this._addClass(this.buttons.first(), "ui-spinner-button ui-spinner-up");
            this._addClass(this.buttons.last(), "ui-spinner-button ui-spinner-down");
            this.buttons.first().button({
                "icon": this.options.icons.up,
                "showLabel": false
            });
            this.buttons.last().button({
                "icon": this.options.icons.down,
                "showLabel": false
            });

            // IE 6 doesn't understand height: 50% for the buttons
            // unless the wrapper has an explicit height
            if (this.buttons.height() > Math.ceil(this.uiSpinner.height() * 0.5) &&
                this.uiSpinner.height() > 0) {
                this.uiSpinner.height(this.uiSpinner.height());
            }
        },

        _keydown: function (event) {
            var options = this.options,
                keyCode = $.ui.keyCode;

            switch (event.keyCode) {
                case keyCode.UP:
                    this._repeat(null, 1, event);
                    return true;
                case keyCode.DOWN:
                    this._repeat(null, -1, event);
                    return true;
                case keyCode.PAGE_UP:
                    this._repeat(null, options.page, event);
                    return true;
                case keyCode.PAGE_DOWN:
                    this._repeat(null, -options.page, event);
                    return true;
            }

            return false;
        },

        _start: function (event) {
            if (!this.spinning && this._trigger("start", event) === false) {
                return false;
            }

            if (!this.counter) {
                this.counter = 1;
            }
            this.spinning = true;
            return true;
        },

        _repeat: function (i, steps, event) {
            i = i || 500;

            clearTimeout(this.timer);
            this.timer = this._delay(function () {
                this._repeat(40, steps, event);
            }, i);

            this._spin(steps * this.options.step, event);
        },

        _spin: function (step, event) {
            var value = this.value() || 0;

            if (!this.counter) {
                this.counter = 1;
            }

            value = this._adjustValue(value + step * this._increment(this.counter));

            if (!this.spinning || this._trigger("spin", event, { value: value }) !== false) {
                this._value(value);
                this.counter++;
            }
        },

        _increment: function (i) {
            var incremental = this.options.incremental;

            if (incremental) {
                return $.isFunction(incremental) ?
                    incremental(i) :
                    Math.floor(i * i * i / 50000 - i * i / 500 + 17 * i / 200 + 1);
            }

            return 1;
        },

        _precision: function () {
            var precision = this._precisionOf(this.options.step);
            if (this.options.min !== null) {
                precision = Math.max(precision, this._precisionOf(this.options.min));
            }
            return precision;
        },

        _precisionOf: function (num) {
            var str = num.toString(),
                decimal = str.indexOf(".");
            return decimal === -1 ? 0 : str.length - decimal - 1;
        },

        _adjustValue: function (value) {
            var base, aboveMin,
                options = this.options;

            // Make sure we're at a valid step
            // - find out where we are relative to the base (min or 0)
            base = options.min !== null ? options.min : 0;
            aboveMin = value - base;

            // - round to the nearest step
            aboveMin = Math.round(aboveMin / options.step) * options.step;

            // - rounding is based on 0, so adjust back to our base
            value = base + aboveMin;

            // Fix precision from bad JS floating point math
            value = parseFloat(value.toFixed(this._precision()));

            // Clamp the value
            if (options.max !== null && value > options.max) {
                return options.max;
            }
            if (options.min !== null && value < options.min) {
                return options.min;
            }

            return value;
        },

        _stop: function (event) {
            if (!this.spinning) {
                return;
            }

            clearTimeout(this.timer);
            clearTimeout(this.mousewheelTimer);
            this.counter = 0;
            this.spinning = false;
            this._trigger("stop", event);
        },

        _setOption: function (key, value) {
            var prevValue, first, last;

            if (key === "culture" || key === "numberFormat") {
                prevValue = this._parse(this.element.val());
                this.options[key] = value;
                this.element.val(this._format(prevValue));
                return;
            }

            if (key === "max" || key === "min" || key === "step") {
                if (typeof value === "string") {
                    value = this._parse(value);
                }
            }
            if (key === "icons") {
                first = this.buttons.first().find(".ui-icon");
                this._removeClass(first, null, this.options.icons.up);
                this._addClass(first, null, value.up);
                last = this.buttons.last().find(".ui-icon");
                this._removeClass(last, null, this.options.icons.down);
                this._addClass(last, null, value.down);
            }

            this._super(key, value);
        },

        _setOptionDisabled: function (value) {
            this._super(value);

            this._toggleClass(this.uiSpinner, null, "ui-state-disabled", !!value);
            this.element.prop("disabled", !!value);
            this.buttons.button(value ? "disable" : "enable");
        },

        _setOptions: spinnerModifer(function (options) {
            this._super(options);
        }),

        _parse: function (val) {
            if (typeof val === "string" && val !== "") {
                val = window.Globalize && this.options.numberFormat ?
                    Globalize.parseFloat(val, 10, this.options.culture) : +val;
            }
            return val === "" || isNaN(val) ? null : val;
        },

        _format: function (value) {
            if (value === "") {
                return "";
            }
            return window.Globalize && this.options.numberFormat ?
                Globalize.format(value, this.options.numberFormat, this.options.culture) :
                value;
        },

        _refresh: function () {
            this.element.attr({
                "aria-valuemin": this.options.min,
                "aria-valuemax": this.options.max,

                // TODO: what should we do with values that can't be parsed?
                "aria-valuenow": this._parse(this.element.val())
            });
        },

        isValid: function () {
            var value = this.value();

            // Null is invalid
            if (value === null) {
                return false;
            }

            // If value gets adjusted, it's invalid
            return value === this._adjustValue(value);
        },

        // Update the value without triggering change
        _value: function (value, allowAny) {
            var parsed;
            if (value !== "") {
                parsed = this._parse(value);
                if (parsed !== null) {
                    if (!allowAny) {
                        parsed = this._adjustValue(parsed);
                    }
                    value = this._format(parsed);
                }
            }
            this.element.val(value);
            this._refresh();
        },

        _destroy: function () {
            this.element
                .prop("disabled", false)
                .removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow");

            this.uiSpinner.replaceWith(this.element);
        },

        stepUp: spinnerModifer(function (steps) {
            this._stepUp(steps);
        }),
        _stepUp: function (steps) {
            if (this._start()) {
                this._spin((steps || 1) * this.options.step);
                this._stop();
            }
        },

        stepDown: spinnerModifer(function (steps) {
            this._stepDown(steps);
        }),
        _stepDown: function (steps) {
            if (this._start()) {
                this._spin((steps || 1) * -this.options.step);
                this._stop();
            }
        },

        pageUp: spinnerModifer(function (pages) {
            this._stepUp((pages || 1) * this.options.page);
        }),

        pageDown: spinnerModifer(function (pages) {
            this._stepDown((pages || 1) * this.options.page);
        }),

        value: function (newVal) {
            if (!arguments.length) {
                return this._parse(this.element.val());
            }
            spinnerModifer(this._value).call(this, newVal);
        },

        widget: function () {
            return this.uiSpinner;
        }
    });

    // DEPRECATED
    // TODO: switch return back to widget declaration at top of file when this is removed
    if ($.uiBackCompat !== false) {

        // Backcompat for spinner html extension points
        $.widget("ui.spinner", $.ui.spinner, {
            _enhance: function () {
                this.uiSpinner = this.element
                    .attr("autocomplete", "off")
                    .wrap(this._uiSpinnerHtml())
                    .parent()

                    // Add buttons
                    .append(this._buttonHtml());
            },
            _uiSpinnerHtml: function () {
                return "<span>";
            },

            _buttonHtml: function () {
                return "<a></a><a></a>";
            }
        });
    }

    var widgetsSpinner = $.ui.spinner;


    /*!
     * jQuery UI Tabs 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */

    //>>label: Tabs
    //>>group: Widgets
    //>>description: Transforms a set of container elements into a tab structure.
    //>>docs: http://api.jqueryui.com/tabs/
    //>>demos: http://jqueryui.com/tabs/
    //>>css.structure: ../../themes/base/core.css
    //>>css.structure: ../../themes/base/tabs.css
    //>>css.theme: ../../themes/base/theme.css



    $.widget("ui.tabs", {
        version: "1.12.1",
        delay: 300,
        options: {
            active: null,
            classes: {
                "ui-tabs": "ui-corner-all",
                "ui-tabs-nav": "ui-corner-all",
                "ui-tabs-panel": "ui-corner-bottom",
                "ui-tabs-tab": "ui-corner-top"
            },
            collapsible: false,
            event: "click",
            heightStyle: "content",
            hide: null,
            show: null,

            // Callbacks
            activate: null,
            beforeActivate: null,
            beforeLoad: null,
            load: null
        },

        _isLocal: (function () {
            var rhash = /#.*$/;

            return function (anchor) {
                var anchorUrl, locationUrl;

                anchorUrl = anchor.href.replace(rhash, "");
                locationUrl = location.href.replace(rhash, "");

                // Decoding may throw an error if the URL isn't UTF-8 (#9518)
                try {
                    anchorUrl = decodeURIComponent(anchorUrl);
                } catch (error) { }
                try {
                    locationUrl = decodeURIComponent(locationUrl);
                } catch (error) { }

                return anchor.hash.length > 1 && anchorUrl === locationUrl;
            };
        })(),

        _create: function () {
            var that = this,
                options = this.options;

            this.running = false;

            this._addClass("ui-tabs", "ui-widget ui-widget-content");
            this._toggleClass("ui-tabs-collapsible", null, options.collapsible);

            this._processTabs();
            options.active = this._initialActive();

            // Take disabling tabs via class attribute from HTML
            // into account and update option properly.
            if ($.isArray(options.disabled)) {
                options.disabled = $.unique(options.disabled.concat(
                    $.map(this.tabs.filter(".ui-state-disabled"), function (li) {
                        return that.tabs.index(li);
                    })
                )).sort();
            }

            // Check for length avoids error when initializing empty list
            if (this.options.active !== false && this.anchors.length) {
                this.active = this._findActive(options.active);
            } else {
                this.active = $();
            }

            this._refresh();

            if (this.active.length) {
                this.load(options.active);
            }
        },

        _initialActive: function () {
            var active = this.options.active,
                collapsible = this.options.collapsible,
                locationHash = location.hash.substring(1);

            if (active === null) {

                // check the fragment identifier in the URL
                if (locationHash) {
                    this.tabs.each(function (i, tab) {
                        if ($(tab).attr("aria-controls") === locationHash) {
                            active = i;
                            return false;
                        }
                    });
                }

                // Check for a tab marked active via a class
                if (active === null) {
                    active = this.tabs.index(this.tabs.filter(".ui-tabs-active"));
                }

                // No active tab, set to false
                if (active === null || active === -1) {
                    active = this.tabs.length ? 0 : false;
                }
            }

            // Handle numbers: negative, out of range
            if (active !== false) {
                active = this.tabs.index(this.tabs.eq(active));
                if (active === -1) {
                    active = collapsible ? false : 0;
                }
            }

            // Don't allow collapsible: false and active: false
            if (!collapsible && active === false && this.anchors.length) {
                active = 0;
            }

            return active;
        },

        _getCreateEventData: function () {
            return {
                tab: this.active,
                panel: !this.active.length ? $() : this._getPanelForTab(this.active)
            };
        },

        _tabKeydown: function (event) {
            var focusedTab = $($.ui.safeActiveElement(this.document[0])).closest("li"),
                selectedIndex = this.tabs.index(focusedTab),
                goingForward = true;

            if (this._handlePageNav(event)) {
                return;
            }

            switch (event.keyCode) {
                case $.ui.keyCode.RIGHT:
                case $.ui.keyCode.DOWN:
                    selectedIndex++;
                    break;
                case $.ui.keyCode.UP:
                case $.ui.keyCode.LEFT:
                    goingForward = false;
                    selectedIndex--;
                    break;
                case $.ui.keyCode.END:
                    selectedIndex = this.anchors.length - 1;
                    break;
                case $.ui.keyCode.HOME:
                    selectedIndex = 0;
                    break;
                case $.ui.keyCode.SPACE:

                    // Activate only, no collapsing
                    event.preventDefault();
                    clearTimeout(this.activating);
                    this._activate(selectedIndex);
                    return;
                case $.ui.keyCode.ENTER:

                    // Toggle (cancel delayed activation, allow collapsing)
                    event.preventDefault();
                    clearTimeout(this.activating);

                    // Determine if we should collapse or activate
                    this._activate(selectedIndex === this.options.active ? false : selectedIndex);
                    return;
                default:
                    return;
            }

            // Focus the appropriate tab, based on which key was pressed
            event.preventDefault();
            clearTimeout(this.activating);
            selectedIndex = this._focusNextTab(selectedIndex, goingForward);

            // Navigating with control/command key will prevent automatic activation
            if (!event.ctrlKey && !event.metaKey) {

                // Update aria-selected immediately so that AT think the tab is already selected.
                // Otherwise AT may confuse the user by stating that they need to activate the tab,
                // but the tab will already be activated by the time the announcement finishes.
                focusedTab.attr("aria-selected", "false");
                this.tabs.eq(selectedIndex).attr("aria-selected", "true");

                this.activating = this._delay(function () {
                    this.option("active", selectedIndex);
                }, this.delay);
            }
        },

        _panelKeydown: function (event) {
            if (this._handlePageNav(event)) {
                return;
            }

            // Ctrl+up moves focus to the current tab
            if (event.ctrlKey && event.keyCode === $.ui.keyCode.UP) {
                event.preventDefault();
                this.active.trigger("focus");
            }
        },

        // Alt+page up/down moves focus to the previous/next tab (and activates)
        _handlePageNav: function (event) {
            if (event.altKey && event.keyCode === $.ui.keyCode.PAGE_UP) {
                this._activate(this._focusNextTab(this.options.active - 1, false));
                return true;
            }
            if (event.altKey && event.keyCode === $.ui.keyCode.PAGE_DOWN) {
                this._activate(this._focusNextTab(this.options.active + 1, true));
                return true;
            }
        },

        _findNextTab: function (index, goingForward) {
            var lastTabIndex = this.tabs.length - 1;

            function constrain() {
                if (index > lastTabIndex) {
                    index = 0;
                }
                if (index < 0) {
                    index = lastTabIndex;
                }
                return index;
            }

            while ($.inArray(constrain(), this.options.disabled) !== -1) {
                index = goingForward ? index + 1 : index - 1;
            }

            return index;
        },

        _focusNextTab: function (index, goingForward) {
            index = this._findNextTab(index, goingForward);
            this.tabs.eq(index).trigger("focus");
            return index;
        },

        _setOption: function (key, value) {
            if (key === "active") {

                // _activate() will handle invalid values and update this.options
                this._activate(value);
                return;
            }

            this._super(key, value);

            if (key === "collapsible") {
                this._toggleClass("ui-tabs-collapsible", null, value);

                // Setting collapsible: false while collapsed; open first panel
                if (!value && this.options.active === false) {
                    this._activate(0);
                }
            }

            if (key === "event") {
                this._setupEvents(value);
            }

            if (key === "heightStyle") {
                this._setupHeightStyle(value);
            }
        },

        _sanitizeSelector: function (hash) {
            return hash ? hash.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : "";
        },

        refresh: function () {
            var options = this.options,
                lis = this.tablist.children(":has(a[href])");

            // Get disabled tabs from class attribute from HTML
            // this will get converted to a boolean if needed in _refresh()
            options.disabled = $.map(lis.filter(".ui-state-disabled"), function (tab) {
                return lis.index(tab);
            });

            this._processTabs();

            // Was collapsed or no tabs
            if (options.active === false || !this.anchors.length) {
                options.active = false;
                this.active = $();

                // was active, but active tab is gone
            } else if (this.active.length && !$.contains(this.tablist[0], this.active[0])) {

                // all remaining tabs are disabled
                if (this.tabs.length === options.disabled.length) {
                    options.active = false;
                    this.active = $();

                    // activate previous tab
                } else {
                    this._activate(this._findNextTab(Math.max(0, options.active - 1), false));
                }

                // was active, active tab still exists
            } else {

                // make sure active index is correct
                options.active = this.tabs.index(this.active);
            }

            this._refresh();
        },

        _refresh: function () {
            this._setOptionDisabled(this.options.disabled);
            this._setupEvents(this.options.event);
            this._setupHeightStyle(this.options.heightStyle);

            this.tabs.not(this.active).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            });
            this.panels.not(this._getPanelForTab(this.active))
                .hide()
                .attr({
                    "aria-hidden": "true"
                });

            // Make sure one tab is in the tab order
            if (!this.active.length) {
                this.tabs.eq(0).attr("tabIndex", 0);
            } else {
                this.active
                    .attr({
                        "aria-selected": "true",
                        "aria-expanded": "true",
                        tabIndex: 0
                    });
                this._addClass(this.active, "ui-tabs-active", "ui-state-active");
                this._getPanelForTab(this.active)
                    .show()
                    .attr({
                        "aria-hidden": "false"
                    });
            }
        },

        _processTabs: function () {
            var that = this,
                prevTabs = this.tabs,
                prevAnchors = this.anchors,
                prevPanels = this.panels;

            this.tablist = this._getList().attr("role", "tablist");
            this._addClass(this.tablist, "ui-tabs-nav",
                "ui-helper-reset ui-helper-clearfix ui-widget-header");

            // Prevent users from focusing disabled tabs via click
            this.tablist
                .on("mousedown" + this.eventNamespace, "> li", function (event) {
                    if ($(this).is(".ui-state-disabled")) {
                        event.preventDefault();
                    }
                })

                // Support: IE <9
                // Preventing the default action in mousedown doesn't prevent IE
                // from focusing the element, so if the anchor gets focused, blur.
                // We don't have to worry about focusing the previously focused
                // element since clicking on a non-focusable element should focus
                // the body anyway.
                .on("focus" + this.eventNamespace, ".ui-tabs-anchor", function () {
                    if ($(this).closest("li").is(".ui-state-disabled")) {
                        this.blur();
                    }
                });

            this.tabs = this.tablist.find("> li:has(a[href])")
                .attr({
                    role: "tab",
                    tabIndex: -1
                });
            this._addClass(this.tabs, "ui-tabs-tab", "ui-state-default");

            this.anchors = this.tabs.map(function () {
                return $("a", this)[0];
            })
                .attr({
                    role: "presentation",
                    tabIndex: -1
                });
            this._addClass(this.anchors, "ui-tabs-anchor");

            this.panels = $();

            this.anchors.each(function (i, anchor) {
                var selector, panel, panelId,
                    anchorId = $(anchor).uniqueId().attr("id"),
                    tab = $(anchor).closest("li"),
                    originalAriaControls = tab.attr("aria-controls");

                // Inline tab
                if (that._isLocal(anchor)) {
                    selector = anchor.hash;
                    panelId = selector.substring(1);
                    panel = that.element.find(that._sanitizeSelector(selector));

                    // remote tab
                } else {

                    // If the tab doesn't already have aria-controls,
                    // generate an id by using a throw-away element
                    panelId = tab.attr("aria-controls") || $({}).uniqueId()[0].id;
                    selector = "#" + panelId;
                    panel = that.element.find(selector);
                    if (!panel.length) {
                        panel = that._createPanel(panelId);
                        panel.insertAfter(that.panels[i - 1] || that.tablist);
                    }
                    panel.attr("aria-live", "polite");
                }

                if (panel.length) {
                    that.panels = that.panels.add(panel);
                }
                if (originalAriaControls) {
                    tab.data("ui-tabs-aria-controls", originalAriaControls);
                }
                tab.attr({
                    "aria-controls": panelId,
                    "aria-labelledby": anchorId
                });
                panel.attr("aria-labelledby", anchorId);
            });

            this.panels.attr("role", "tabpanel");
            this._addClass(this.panels, "ui-tabs-panel", "ui-widget-content");

            // Avoid memory leaks (#10056)
            if (prevTabs) {
                this._off(prevTabs.not(this.tabs));
                this._off(prevAnchors.not(this.anchors));
                this._off(prevPanels.not(this.panels));
            }
        },

        // Allow overriding how to find the list for rare usage scenarios (#7715)
        _getList: function () {
            return this.tablist || this.element.find("ol, ul").eq(0);
        },

        _createPanel: function (id) {
            return $("<div>")
                .attr("id", id)
                .data("ui-tabs-destroy", true);
        },

        _setOptionDisabled: function (disabled) {
            var currentItem, li, i;

            if ($.isArray(disabled)) {
                if (!disabled.length) {
                    disabled = false;
                } else if (disabled.length === this.anchors.length) {
                    disabled = true;
                }
            }

            // Disable tabs
            for (i = 0; (li = this.tabs[i]); i++) {
                currentItem = $(li);
                if (disabled === true || $.inArray(i, disabled) !== -1) {
                    currentItem.attr("aria-disabled", "true");
                    this._addClass(currentItem, null, "ui-state-disabled");
                } else {
                    currentItem.removeAttr("aria-disabled");
                    this._removeClass(currentItem, null, "ui-state-disabled");
                }
            }

            this.options.disabled = disabled;

            this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null,
                disabled === true);
        },

        _setupEvents: function (event) {
            var events = {};
            if (event) {
                $.each(event.split(" "), function (index, eventName) {
                    events[eventName] = "_eventHandler";
                });
            }

            this._off(this.anchors.add(this.tabs).add(this.panels));

            // Always prevent the default action, even when disabled
            this._on(true, this.anchors, {
                click: function (event) {
                    event.preventDefault();
                }
            });
            this._on(this.anchors, events);
            this._on(this.tabs, { keydown: "_tabKeydown" });
            this._on(this.panels, { keydown: "_panelKeydown" });

            this._focusable(this.tabs);
            this._hoverable(this.tabs);
        },

        _setupHeightStyle: function (heightStyle) {
            var maxHeight,
                parent = this.element.parent();

            if (heightStyle === "fill") {
                maxHeight = parent.height();
                maxHeight -= this.element.outerHeight() - this.element.height();

                this.element.siblings(":visible").each(function () {
                    var elem = $(this),
                        position = elem.css("position");

                    if (position === "absolute" || position === "fixed") {
                        return;
                    }
                    maxHeight -= elem.outerHeight(true);
                });

                this.element.children().not(this.panels).each(function () {
                    maxHeight -= $(this).outerHeight(true);
                });

                this.panels.each(function () {
                    $(this).height(Math.max(0, maxHeight -
                        $(this).innerHeight() + $(this).height()));
                })
                    .css("overflow", "auto");
            } else if (heightStyle === "auto") {
                maxHeight = 0;
                this.panels.each(function () {
                    maxHeight = Math.max(maxHeight, $(this).height("").height());
                }).height(maxHeight);
            }
        },

        _eventHandler: function (event) {
            var options = this.options,
                active = this.active,
                anchor = $(event.currentTarget),
                tab = anchor.closest("li"),
                clickedIsActive = tab[0] === active[0],
                collapsing = clickedIsActive && options.collapsible,
                toShow = collapsing ? $() : this._getPanelForTab(tab),
                toHide = !active.length ? $() : this._getPanelForTab(active),
                eventData = {
                    oldTab: active,
                    oldPanel: toHide,
                    newTab: collapsing ? $() : tab,
                    newPanel: toShow
                };

            event.preventDefault();

            if (tab.hasClass("ui-state-disabled") ||

                // tab is already loading
                tab.hasClass("ui-tabs-loading") ||

                // can't switch durning an animation
                this.running ||

                // click on active header, but not collapsible
                (clickedIsActive && !options.collapsible) ||

                // allow canceling activation
                (this._trigger("beforeActivate", event, eventData) === false)) {
                return;
            }

            options.active = collapsing ? false : this.tabs.index(tab);

            this.active = clickedIsActive ? $() : tab;
            if (this.xhr) {
                this.xhr.abort();
            }

            if (!toHide.length && !toShow.length) {
                $.error("jQuery UI Tabs: Mismatching fragment identifier.");
            }

            if (toShow.length) {
                this.load(this.tabs.index(tab), event);
            }
            this._toggle(event, eventData);
        },

        // Handles show/hide for selecting tabs
        _toggle: function (event, eventData) {
            var that = this,
                toShow = eventData.newPanel,
                toHide = eventData.oldPanel;

            this.running = true;

            function complete() {
                that.running = false;
                that._trigger("activate", event, eventData);
            }

            function show() {
                that._addClass(eventData.newTab.closest("li"), "ui-tabs-active", "ui-state-active");

                if (toShow.length && that.options.show) {
                    that._show(toShow, that.options.show, complete);
                } else {
                    toShow.show();
                    complete();
                }
            }

            // Start out by hiding, then showing, then completing
            if (toHide.length && this.options.hide) {
                this._hide(toHide, this.options.hide, function () {
                    that._removeClass(eventData.oldTab.closest("li"),
                        "ui-tabs-active", "ui-state-active");
                    show();
                });
            } else {
                this._removeClass(eventData.oldTab.closest("li"),
                    "ui-tabs-active", "ui-state-active");
                toHide.hide();
                show();
            }

            toHide.attr("aria-hidden", "true");
            eventData.oldTab.attr({
                "aria-selected": "false",
                "aria-expanded": "false"
            });

            // If we're switching tabs, remove the old tab from the tab order.
            // If we're opening from collapsed state, remove the previous tab from the tab order.
            // If we're collapsing, then keep the collapsing tab in the tab order.
            if (toShow.length && toHide.length) {
                eventData.oldTab.attr("tabIndex", -1);
            } else if (toShow.length) {
                this.tabs.filter(function () {
                    return $(this).attr("tabIndex") === 0;
                })
                    .attr("tabIndex", -1);
            }

            toShow.attr("aria-hidden", "false");
            eventData.newTab.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            });
        },

        _activate: function (index) {
            var anchor,
                active = this._findActive(index);

            // Trying to activate the already active panel
            if (active[0] === this.active[0]) {
                return;
            }

            // Trying to collapse, simulate a click on the current active header
            if (!active.length) {
                active = this.active;
            }

            anchor = active.find(".ui-tabs-anchor")[0];
            this._eventHandler({
                target: anchor,
                currentTarget: anchor,
                preventDefault: $.noop
            });
        },

        _findActive: function (index) {
            return index === false ? $() : this.tabs.eq(index);
        },

        _getIndex: function (index) {

            // meta-function to give users option to provide a href string instead of a numerical index.
            if (typeof index === "string") {
                index = this.anchors.index(this.anchors.filter("[href$='" +
                    $.ui.escapeSelector(index) + "']"));
            }

            return index;
        },

        _destroy: function () {
            if (this.xhr) {
                this.xhr.abort();
            }

            this.tablist
                .removeAttr("role")
                .off(this.eventNamespace);

            this.anchors
                .removeAttr("role tabIndex")
                .removeUniqueId();

            this.tabs.add(this.panels).each(function () {
                if ($.data(this, "ui-tabs-destroy")) {
                    $(this).remove();
                } else {
                    $(this).removeAttr("role tabIndex " +
                        "aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded");
                }
            });

            this.tabs.each(function () {
                var li = $(this),
                    prev = li.data("ui-tabs-aria-controls");
                if (prev) {
                    li
                        .attr("aria-controls", prev)
                        .removeData("ui-tabs-aria-controls");
                } else {
                    li.removeAttr("aria-controls");
                }
            });

            this.panels.show();

            if (this.options.heightStyle !== "content") {
                this.panels.css("height", "");
            }
        },

        enable: function (index) {
            var disabled = this.options.disabled;
            if (disabled === false) {
                return;
            }

            if (index === undefined) {
                disabled = false;
            } else {
                index = this._getIndex(index);
                if ($.isArray(disabled)) {
                    disabled = $.map(disabled, function (num) {
                        return num !== index ? num : null;
                    });
                } else {
                    disabled = $.map(this.tabs, function (li, num) {
                        return num !== index ? num : null;
                    });
                }
            }
            this._setOptionDisabled(disabled);
        },

        disable: function (index) {
            var disabled = this.options.disabled;
            if (disabled === true) {
                return;
            }

            if (index === undefined) {
                disabled = true;
            } else {
                index = this._getIndex(index);
                if ($.inArray(index, disabled) !== -1) {
                    return;
                }
                if ($.isArray(disabled)) {
                    disabled = $.merge([index], disabled).sort();
                } else {
                    disabled = [index];
                }
            }
            this._setOptionDisabled(disabled);
        },

        load: function (index, event) {
            index = this._getIndex(index);
            var that = this,
                tab = this.tabs.eq(index),
                anchor = tab.find(".ui-tabs-anchor"),
                panel = this._getPanelForTab(tab),
                eventData = {
                    tab: tab,
                    panel: panel
                },
                complete = function (jqXHR, status) {
                    if (status === "abort") {
                        that.panels.stop(false, true);
                    }

                    that._removeClass(tab, "ui-tabs-loading");
                    panel.removeAttr("aria-busy");

                    if (jqXHR === that.xhr) {
                        delete that.xhr;
                    }
                };

            // Not remote
            if (this._isLocal(anchor[0])) {
                return;
            }

            this.xhr = $.ajax(this._ajaxSettings(anchor, event, eventData));

            // Support: jQuery <1.8
            // jQuery <1.8 returns false if the request is canceled in beforeSend,
            // but as of 1.8, $.ajax() always returns a jqXHR object.
            if (this.xhr && this.xhr.statusText !== "canceled") {
                this._addClass(tab, "ui-tabs-loading");
                panel.attr("aria-busy", "true");

                this.xhr
                    .done(function (response, status, jqXHR) {

                        // support: jQuery <1.8
                        // http://bugs.jquery.com/ticket/11778
                        setTimeout(function () {
                            panel.html(response);
                            that._trigger("load", event, eventData);

                            complete(jqXHR, status);
                        }, 1);
                    })
                    .fail(function (jqXHR, status) {

                        // support: jQuery <1.8
                        // http://bugs.jquery.com/ticket/11778
                        setTimeout(function () {
                            complete(jqXHR, status);
                        }, 1);
                    });
            }
        },

        _ajaxSettings: function (anchor, event, eventData) {
            var that = this;
            return {

                // Support: IE <11 only
                // Strip any hash that exists to prevent errors with the Ajax request
                url: anchor.attr("href").replace(/#.*$/, ""),
                beforeSend: function (jqXHR, settings) {
                    return that._trigger("beforeLoad", event,
                        $.extend({ jqXHR: jqXHR, ajaxSettings: settings }, eventData));
                }
            };
        },

        _getPanelForTab: function (tab) {
            var id = $(tab).attr("aria-controls");
            return this.element.find(this._sanitizeSelector("#" + id));
        }
    });

    // DEPRECATED
    // TODO: Switch return back to widget declaration at top of file when this is removed
    if ($.uiBackCompat !== false) {

        // Backcompat for ui-tab class (now ui-tabs-tab)
        $.widget("ui.tabs", $.ui.tabs, {
            _processTabs: function () {
                this._superApply(arguments);
                this._addClass(this.tabs, "ui-tab");
            }
        });
    }

    var widgetsTabs = $.ui.tabs;


    /*!
     * jQuery UI Tooltip 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */

    //>>label: Tooltip
    //>>group: Widgets
    //>>description: Shows additional information for any element on hover or focus.
    //>>docs: http://api.jqueryui.com/tooltip/
    //>>demos: http://jqueryui.com/tooltip/
    //>>css.structure: ../../themes/base/core.css
    //>>css.structure: ../../themes/base/tooltip.css
    //>>css.theme: ../../themes/base/theme.css



    $.widget("ui.tooltip", {
        version: "1.12.1",
        options: {
            classes: {
                "ui-tooltip": "ui-corner-all ui-widget-shadow"
            },
            content: function () {

                // support: IE<9, Opera in jQuery <1.7
                // .text() can't accept undefined, so coerce to a string
                var title = $(this).attr("title") || "";

                // Escape title, since we're going from an attribute to raw HTML
                return $("<a>").text(title).html();
            },
            hide: true,

            // Disabled elements have inconsistent behavior across browsers (#8661)
            items: "[title]:not([disabled])",
            position: {
                my: "left top+15",
                at: "left bottom",
                collision: "flipfit flip"
            },
            show: true,
            track: false,

            // Callbacks
            close: null,
            open: null
        },

        _addDescribedBy: function (elem, id) {
            var describedby = (elem.attr("aria-describedby") || "").split(/\s+/);
            describedby.push(id);
            elem
                .data("ui-tooltip-id", id)
                .attr("aria-describedby", $.trim(describedby.join(" ")));
        },

        _removeDescribedBy: function (elem) {
            var id = elem.data("ui-tooltip-id"),
                describedby = (elem.attr("aria-describedby") || "").split(/\s+/),
                index = $.inArray(id, describedby);

            if (index !== -1) {
                describedby.splice(index, 1);
            }

            elem.removeData("ui-tooltip-id");
            describedby = $.trim(describedby.join(" "));
            if (describedby) {
                elem.attr("aria-describedby", describedby);
            } else {
                elem.removeAttr("aria-describedby");
            }
        },

        _create: function () {
            this._on({
                mouseover: "open",
                focusin: "open"
            });

            // IDs of generated tooltips, needed for destroy
            this.tooltips = {};

            // IDs of parent tooltips where we removed the title attribute
            this.parents = {};

            // Append the aria-live region so tooltips announce correctly
            this.liveRegion = $("<div>")
                .attr({
                    role: "log",
                    "aria-live": "assertive",
                    "aria-relevant": "additions"
                })
                .appendTo(this.document[0].body);
            this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible");

            this.disabledTitles = $([]);
        },

        _setOption: function (key, value) {
            var that = this;

            this._super(key, value);

            if (key === "content") {
                $.each(this.tooltips, function (id, tooltipData) {
                    that._updateContent(tooltipData.element);
                });
            }
        },

        _setOptionDisabled: function (value) {
            this[value ? "_disable" : "_enable"]();
        },

        _disable: function () {
            var that = this;

            // Close open tooltips
            $.each(this.tooltips, function (id, tooltipData) {
                var event = $.Event("blur");
                event.target = event.currentTarget = tooltipData.element[0];
                that.close(event, true);
            });

            // Remove title attributes to prevent native tooltips
            this.disabledTitles = this.disabledTitles.add(
                this.element.find(this.options.items).addBack()
                    .filter(function () {
                        var element = $(this);
                        if (element.is("[title]")) {
                            return element
                                .data("ui-tooltip-title", element.attr("title"))
                                .removeAttr("title");
                        }
                    })
            );
        },

        _enable: function () {

            // restore title attributes
            this.disabledTitles.each(function () {
                var element = $(this);
                if (element.data("ui-tooltip-title")) {
                    element.attr("title", element.data("ui-tooltip-title"));
                }
            });
            this.disabledTitles = $([]);
        },

        open: function (event) {
            var that = this,
                target = $(event ? event.target : this.element)

                    // we need closest here due to mouseover bubbling,
                    // but always pointing at the same event target
                    .closest(this.options.items);

            // No element to show a tooltip for or the tooltip is already open
            if (!target.length || target.data("ui-tooltip-id")) {
                return;
            }

            if (target.attr("title")) {
                target.data("ui-tooltip-title", target.attr("title"));
            }

            target.data("ui-tooltip-open", true);

            // Kill parent tooltips, custom or native, for hover
            if (event && event.type === "mouseover") {
                target.parents().each(function () {
                    var parent = $(this),
                        blurEvent;
                    if (parent.data("ui-tooltip-open")) {
                        blurEvent = $.Event("blur");
                        blurEvent.target = blurEvent.currentTarget = this;
                        that.close(blurEvent, true);
                    }
                    if (parent.attr("title")) {
                        parent.uniqueId();
                        that.parents[this.id] = {
                            element: this,
                            title: parent.attr("title")
                        };
                        parent.attr("title", "");
                    }
                });
            }

            this._registerCloseHandlers(event, target);
            this._updateContent(target, event);
        },

        _updateContent: function (target, event) {
            var content,
                contentOption = this.options.content,
                that = this,
                eventType = event ? event.type : null;

            if (typeof contentOption === "string" || contentOption.nodeType ||
                contentOption.jquery) {
                return this._open(event, target, contentOption);
            }

            content = contentOption.call(target[0], function (response) {

                // IE may instantly serve a cached response for ajax requests
                // delay this call to _open so the other call to _open runs first
                that._delay(function () {

                    // Ignore async response if tooltip was closed already
                    if (!target.data("ui-tooltip-open")) {
                        return;
                    }

                    // JQuery creates a special event for focusin when it doesn't
                    // exist natively. To improve performance, the native event
                    // object is reused and the type is changed. Therefore, we can't
                    // rely on the type being correct after the event finished
                    // bubbling, so we set it back to the previous value. (#8740)
                    if (event) {
                        event.type = eventType;
                    }
                    this._open(event, target, response);
                });
            });
            if (content) {
                this._open(event, target, content);
            }
        },

        _open: function (event, target, content) {
            var tooltipData, tooltip, delayedShow, a11yContent,
                positionOption = $.extend({}, this.options.position);

            if (!content) {
                return;
            }

            // Content can be updated multiple times. If the tooltip already
            // exists, then just update the content and bail.
            tooltipData = this._find(target);
            if (tooltipData) {
                tooltipData.tooltip.find(".ui-tooltip-content").html(content);
                return;
            }

            // If we have a title, clear it to prevent the native tooltip
            // we have to check first to avoid defining a title if none exists
            // (we don't want to cause an element to start matching [title])
            //
            // We use removeAttr only for key events, to allow IE to export the correct
            // accessible attributes. For mouse events, set to empty string to avoid
            // native tooltip showing up (happens only when removing inside mouseover).
            if (target.is("[title]")) {
                if (event && event.type === "mouseover") {
                    target.attr("title", "");
                } else {
                    target.removeAttr("title");
                }
            }

            tooltipData = this._tooltip(target);
            tooltip = tooltipData.tooltip;
            this._addDescribedBy(target, tooltip.attr("id"));
            tooltip.find(".ui-tooltip-content").html(content);

            // Support: Voiceover on OS X, JAWS on IE <= 9
            // JAWS announces deletions even when aria-relevant="additions"
            // Voiceover will sometimes re-read the entire log region's contents from the beginning
            this.liveRegion.children().hide();
            a11yContent = $("<div>").html(tooltip.find(".ui-tooltip-content").html());
            a11yContent.removeAttr("name").find("[name]").removeAttr("name");
            a11yContent.removeAttr("id").find("[id]").removeAttr("id");
            a11yContent.appendTo(this.liveRegion);

            function position(event) {
                positionOption.of = event;
                if (tooltip.is(":hidden")) {
                    return;
                }
                tooltip.position(positionOption);
            }
            if (this.options.track && event && /^mouse/.test(event.type)) {
                this._on(this.document, {
                    mousemove: position
                });

                // trigger once to override element-relative positioning
                position(event);
            } else {
                tooltip.position($.extend({
                    of: target
                }, this.options.position));
            }

            tooltip.hide();

            this._show(tooltip, this.options.show);

            // Handle tracking tooltips that are shown with a delay (#8644). As soon
            // as the tooltip is visible, position the tooltip using the most recent
            // event.
            // Adds the check to add the timers only when both delay and track options are set (#14682)
            if (this.options.track && this.options.show && this.options.show.delay) {
                delayedShow = this.delayedShow = setInterval(function () {
                    if (tooltip.is(":visible")) {
                        position(positionOption.of);
                        clearInterval(delayedShow);
                    }
                }, $.fx.interval);
            }

            this._trigger("open", event, { tooltip: tooltip });
        },

        _registerCloseHandlers: function (event, target) {
            var events = {
                keyup: function (event) {
                    if (event.keyCode === $.ui.keyCode.ESCAPE) {
                        var fakeEvent = $.Event(event);
                        fakeEvent.currentTarget = target[0];
                        this.close(fakeEvent, true);
                    }
                }
            };

            // Only bind remove handler for delegated targets. Non-delegated
            // tooltips will handle this in destroy.
            if (target[0] !== this.element[0]) {
                events.remove = function () {
                    this._removeTooltip(this._find(target).tooltip);
                };
            }

            if (!event || event.type === "mouseover") {
                events.mouseleave = "close";
            }
            if (!event || event.type === "focusin") {
                events.focusout = "close";
            }
            this._on(true, target, events);
        },

        close: function (event) {
            var tooltip,
                that = this,
                target = $(event ? event.currentTarget : this.element),
                tooltipData = this._find(target);

            // The tooltip may already be closed
            if (!tooltipData) {

                // We set ui-tooltip-open immediately upon open (in open()), but only set the
                // additional data once there's actually content to show (in _open()). So even if the
                // tooltip doesn't have full data, we always remove ui-tooltip-open in case we're in
                // the period between open() and _open().
                target.removeData("ui-tooltip-open");
                return;
            }

            tooltip = tooltipData.tooltip;

            // Disabling closes the tooltip, so we need to track when we're closing
            // to avoid an infinite loop in case the tooltip becomes disabled on close
            if (tooltipData.closing) {
                return;
            }

            // Clear the interval for delayed tracking tooltips
            clearInterval(this.delayedShow);

            // Only set title if we had one before (see comment in _open())
            // If the title attribute has changed since open(), don't restore
            if (target.data("ui-tooltip-title") && !target.attr("title")) {
                target.attr("title", target.data("ui-tooltip-title"));
            }

            this._removeDescribedBy(target);

            tooltipData.hiding = true;
            tooltip.stop(true);
            this._hide(tooltip, this.options.hide, function () {
                that._removeTooltip($(this));
            });

            target.removeData("ui-tooltip-open");
            this._off(target, "mouseleave focusout keyup");

            // Remove 'remove' binding only on delegated targets
            if (target[0] !== this.element[0]) {
                this._off(target, "remove");
            }
            this._off(this.document, "mousemove");

            if (event && event.type === "mouseleave") {
                $.each(this.parents, function (id, parent) {
                    $(parent.element).attr("title", parent.title);
                    delete that.parents[id];
                });
            }

            tooltipData.closing = true;
            this._trigger("close", event, { tooltip: tooltip });
            if (!tooltipData.hiding) {
                tooltipData.closing = false;
            }
        },

        _tooltip: function (element) {
            var tooltip = $("<div>").attr("role", "tooltip"),
                content = $("<div>").appendTo(tooltip),
                id = tooltip.uniqueId().attr("id");

            this._addClass(content, "ui-tooltip-content");
            this._addClass(tooltip, "ui-tooltip", "ui-widget ui-widget-content");

            tooltip.appendTo(this._appendTo(element));

            return this.tooltips[id] = {
                element: element,
                tooltip: tooltip
            };
        },

        _find: function (target) {
            var id = target.data("ui-tooltip-id");
            return id ? this.tooltips[id] : null;
        },

        _removeTooltip: function (tooltip) {
            tooltip.remove();
            delete this.tooltips[tooltip.attr("id")];
        },

        _appendTo: function (target) {
            var element = target.closest(".ui-front, dialog");

            if (!element.length) {
                element = this.document[0].body;
            }

            return element;
        },

        _destroy: function () {
            var that = this;

            // Close open tooltips
            $.each(this.tooltips, function (id, tooltipData) {

                // Delegate to close method to handle common cleanup
                var event = $.Event("blur"),
                    element = tooltipData.element;
                event.target = event.currentTarget = element[0];
                that.close(event, true);

                // Remove immediately; destroying an open tooltip doesn't use the
                // hide animation
                $("#" + id).remove();

                // Restore the title
                if (element.data("ui-tooltip-title")) {

                    // If the title attribute has changed since open(), don't restore
                    if (!element.attr("title")) {
                        element.attr("title", element.data("ui-tooltip-title"));
                    }
                    element.removeData("ui-tooltip-title");
                }
            });
            this.liveRegion.remove();
        }
    });

    // DEPRECATED
    // TODO: Switch return back to widget declaration at top of file when this is removed
    if ($.uiBackCompat !== false) {

        // Backcompat for tooltipClass option
        $.widget("ui.tooltip", $.ui.tooltip, {
            options: {
                tooltipClass: null
            },
            _tooltip: function () {
                var tooltipData = this._superApply(arguments);
                if (this.options.tooltipClass) {
                    tooltipData.tooltip.addClass(this.options.tooltipClass);
                }
                return tooltipData;
            }
        });
    }

    var widgetsTooltip = $.ui.tooltip;




}));