if (function (t, e) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function (t) {
        if (!t.document)
            throw new Error("jQuery requires a window with a document");
        return e(t)
    }
        : e(t)
}("undefined" != typeof window ? window : this, function (t, e) {
    "use strict";
    function n(t, e, n) {
        n = n || lt;
        var i, o, r = n.createElement("script");
        if (r.text = t,
            e)
            for (i in kt)
                (o = e[i] || e.getAttribute && e.getAttribute(i)) && r.setAttribute(i, o);
        n.head.appendChild(r).parentNode.removeChild(r)
    }
    function i(t) {
        return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? pt[gt.call(t)] || "object" : typeof t
    }
    function o(t) {
        var e = !!t && "length" in t && t.length
            , n = i(t);
        return !xt(t) && !wt(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
    }
    function r(t, e) {
        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
    }
    function a(t, e, n) {
        return xt(e) ? Ct.grep(t, function (t, i) {
            return !!e.call(t, i, t) !== n
        }) : e.nodeType ? Ct.grep(t, function (t) {
            return t === e !== n
        }) : "string" != typeof e ? Ct.grep(t, function (t) {
            return ft.call(e, t) > -1 !== n
        }) : Ct.filter(e, t, n)
    }
    function s(t, e) {
        for (; (t = t[e]) && 1 !== t.nodeType;)
            ;
        return t
    }
    function l(t) {
        var e = {};
        return Ct.each(t.match(Lt) || [], function (t, n) {
            e[n] = !0
        }),
            e
    }
    function u(t) {
        return t
    }
    function c(t) {
        throw t
    }
    function d(t, e, n, i) {
        var o;
        try {
            t && xt(o = t.promise) ? o.call(t).done(e).fail(n) : t && xt(o = t.then) ? o.call(t, e, n) : e.apply(void 0, [t].slice(i))
        } catch (t) {
            n.apply(void 0, [t])
        }
    }
    function h() {
        lt.removeEventListener("DOMContentLoaded", h),
            t.removeEventListener("load", h),
            Ct.ready()
    }
    function f(t, e) {
        return e.toUpperCase()
    }
    function p(t) {
        return t.replace($t, "ms-").replace(jt, f)
    }
    function g() {
        this.expando = Ct.expando + g.uid++
    }
    function m(t) {
        return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : Bt.test(t) ? JSON.parse(t) : t)
    }
    function v(t, e, n) {
        var i;
        if (void 0 === n && 1 === t.nodeType)
            if (i = "data-" + e.replace(qt, "-$&").toLowerCase(),
                "string" == typeof (n = t.getAttribute(i))) {
                try {
                    n = m(n)
                } catch (t) { }
                zt.set(t, e, n)
            } else
                n = void 0;
        return n
    }
    function y(t, e, n, i) {
        var o, r, a = 20, s = i ? function () {
            return i.cur()
        }
            : function () {
                return Ct.css(t, e, "")
            }
            , l = s(), u = n && n[3] || (Ct.cssNumber[e] ? "" : "px"), c = t.nodeType && (Ct.cssNumber[e] || "px" !== u && +l) && Ut.exec(Ct.css(t, e));
        if (c && c[3] !== u) {
            for (l /= 2,
                u = u || c[3],
                c = +l || 1; a--;)
                Ct.style(t, e, c + u),
                    (1 - r) * (1 - (r = s() / l || .5)) <= 0 && (a = 0),
                    c /= r;
            c *= 2,
                Ct.style(t, e, c + u),
                n = n || []
        }
        return n && (c = +c || +l || 0,
            o = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
            i && (i.unit = u,
                i.start = c,
                i.end = o)),
            o
    }
    function b(t) {
        var e, n = t.ownerDocument, i = t.nodeName, o = Zt[i];
        return o || (e = n.body.appendChild(n.createElement(i)),
            o = Ct.css(e, "display"),
            e.parentNode.removeChild(e),
            "none" === o && (o = "block"),
            Zt[i] = o,
            o)
    }
    function x(t, e) {
        for (var n, i, o = [], r = 0, a = t.length; r < a; r++)
            i = t[r],
                i.style && (n = i.style.display,
                    e ? ("none" === n && (o[r] = Ht.get(i, "display") || null,
                        o[r] || (i.style.display = "")),
                        "" === i.style.display && Gt(i) && (o[r] = b(i))) : "none" !== n && (o[r] = "none",
                            Ht.set(i, "display", n)));
        for (r = 0; r < a; r++)
            null != o[r] && (t[r].style.display = o[r]);
        return t
    }
    function w(t, e) {
        var n;
        return n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [],
            void 0 === e || e && r(t, e) ? Ct.merge([t], n) : n
    }
    function k(t, e) {
        for (var n = 0, i = t.length; n < i; n++)
            Ht.set(t[n], "globalEval", !e || Ht.get(e[n], "globalEval"))
    }
    function C(t, e, n, o, r) {
        for (var a, s, l, u, c, d, h = e.createDocumentFragment(), f = [], p = 0, g = t.length; p < g; p++)
            if ((a = t[p]) || 0 === a)
                if ("object" === i(a))
                    Ct.merge(f, a.nodeType ? [a] : a);
                else if (oe.test(a)) {
                    for (s = s || h.appendChild(e.createElement("div")),
                        l = (ee.exec(a) || ["", ""])[1].toLowerCase(),
                        u = ie[l] || ie._default,
                        s.innerHTML = u[1] + Ct.htmlPrefilter(a) + u[2],
                        d = u[0]; d--;)
                        s = s.lastChild;
                    Ct.merge(f, s.childNodes),
                        s = h.firstChild,
                        s.textContent = ""
                } else
                    f.push(e.createTextNode(a));
        for (h.textContent = "",
            p = 0; a = f[p++];)
            if (o && Ct.inArray(a, o) > -1)
                r && r.push(a);
            else if (c = Kt(a),
                s = w(h.appendChild(a), "script"),
                c && k(s),
                n)
                for (d = 0; a = s[d++];)
                    ne.test(a.type || "") && n.push(a);
        return h
    }
    function T() {
        return !0
    }
    function S() {
        return !1
    }
    function M(t, e) {
        return t === A() == ("focus" === e)
    }
    function A() {
        try {
            return lt.activeElement
        } catch (t) { }
    }
    function _(t, e, n, i, o, r) {
        var a, s;
        if ("object" == typeof e) {
            "string" != typeof n && (i = i || n,
                n = void 0);
            for (s in e)
                _(t, s, n, i, e[s], r);
            return t
        }
        if (null == i && null == o ? (o = n,
            i = n = void 0) : null == o && ("string" == typeof n ? (o = i,
                i = void 0) : (o = i,
                    i = n,
                    n = void 0)),
            !1 === o)
            o = S;
        else if (!o)
            return t;
        return 1 === r && (a = o,
            o = function (t) {
                return Ct().off(t),
                    a.apply(this, arguments)
            }
            ,
            o.guid = a.guid || (a.guid = Ct.guid++)),
            t.each(function () {
                Ct.event.add(this, e, o, i, n)
            })
    }
    function D(t, e, n) {
        if (!n)
            return void (void 0 === Ht.get(t, e) && Ct.event.add(t, e, T));
        Ht.set(t, e, !1),
            Ct.event.add(t, e, {
                namespace: !1,
                handler: function (t) {
                    var i, o, r = Ht.get(this, e);
                    if (1 & t.isTrigger && this[e]) {
                        if (r.length)
                            (Ct.event.special[e] || {}).delegateType && t.stopPropagation();
                        else if (r = ct.call(arguments),
                            Ht.set(this, e, r),
                            i = n(this, e),
                            this[e](),
                            o = Ht.get(this, e),
                            r !== o || i ? Ht.set(this, e, !1) : o = {},
                            r !== o)
                            return t.stopImmediatePropagation(),
                                t.preventDefault(),
                                o.value
                    } else
                        r.length && (Ht.set(this, e, {
                            value: Ct.event.trigger(Ct.extend(r[0], Ct.Event.prototype), r.slice(1), this)
                        }),
                            t.stopImmediatePropagation())
                }
            })
    }
    function P(t, e) {
        return r(t, "table") && r(11 !== e.nodeType ? e : e.firstChild, "tr") ? Ct(t).children("tbody")[0] || t : t
    }
    function I(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type,
            t
    }
    function E(t) {
        return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"),
            t
    }
    function N(t, e) {
        var n, i, o, r, a, s, l, u;
        if (1 === e.nodeType) {
            if (Ht.hasData(t) && (r = Ht.access(t),
                a = Ht.set(e, r),
                u = r.events)) {
                delete a.handle,
                    a.events = {};
                for (o in u)
                    for (n = 0,
                        i = u[o].length; n < i; n++)
                        Ct.event.add(e, o, u[o][n])
            }
            zt.hasData(t) && (s = zt.access(t),
                l = Ct.extend({}, s),
                zt.set(e, l))
        }
    }
    function L(t, e) {
        var n = e.nodeName.toLowerCase();
        "input" === n && te.test(t.type) ? e.checked = t.checked : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue)
    }
    function O(t, e, i, o) {
        e = dt.apply([], e);
        var r, a, s, l, u, c, d = 0, h = t.length, f = h - 1, p = e[0], g = xt(p);
        if (g || h > 1 && "string" == typeof p && !bt.checkClone && ce.test(p))
            return t.each(function (n) {
                var r = t.eq(n);
                g && (e[0] = p.call(this, n, r.html())),
                    O(r, e, i, o)
            });
        if (h && (r = C(e, t[0].ownerDocument, !1, t, o),
            a = r.firstChild,
            1 === r.childNodes.length && (r = a),
            a || o)) {
            for (s = Ct.map(w(r, "script"), I),
                l = s.length; d < h; d++)
                u = r,
                    d !== f && (u = Ct.clone(u, !0, !0),
                        l && Ct.merge(s, w(u, "script"))),
                    i.call(t[d], u, d);
            if (l)
                for (c = s[s.length - 1].ownerDocument,
                    Ct.map(s, E),
                    d = 0; d < l; d++)
                    u = s[d],
                        ne.test(u.type || "") && !Ht.access(u, "globalEval") && Ct.contains(c, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? Ct._evalUrl && !u.noModule && Ct._evalUrl(u.src, {
                            nonce: u.nonce || u.getAttribute("nonce")
                        }) : n(u.textContent.replace(de, ""), u, c))
        }
        return t
    }
    function R(t, e, n) {
        for (var i, o = e ? Ct.filter(e, t) : t, r = 0; null != (i = o[r]); r++)
            n || 1 !== i.nodeType || Ct.cleanData(w(i)),
                i.parentNode && (n && Kt(i) && k(w(i, "script")),
                    i.parentNode.removeChild(i));
        return t
    }
    function F(t, e, n) {
        var i, o, r, a, s = t.style;
        return n = n || fe(t),
            n && (a = n.getPropertyValue(e) || n[e],
                "" !== a || Kt(t) || (a = Ct.style(t, e)),
                !bt.pixelBoxStyles() && he.test(a) && pe.test(e) && (i = s.width,
                    o = s.minWidth,
                    r = s.maxWidth,
                    s.minWidth = s.maxWidth = s.width = a,
                    a = n.width,
                    s.width = i,
                    s.minWidth = o,
                    s.maxWidth = r)),
            void 0 !== a ? a + "" : a
    }
    function $(t, e) {
        return {
            get: function () {
                return t() ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }
    function j(t) {
        for (var e = t[0].toUpperCase() + t.slice(1), n = ge.length; n--;)
            if ((t = ge[n] + e) in me)
                return t
    }
    function W(t) {
        var e = Ct.cssProps[t] || ve[t];
        return e || (t in me ? t : ve[t] = j(t) || t)
    }
    function H(t, e, n) {
        var i = Ut.exec(e);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e
    }
    function z(t, e, n, i, o, r) {
        var a = "width" === e ? 1 : 0
            , s = 0
            , l = 0;
        if (n === (i ? "border" : "content"))
            return 0;
        for (; a < 4; a += 2)
            "margin" === n && (l += Ct.css(t, n + Yt[a], !0, o)),
                i ? ("content" === n && (l -= Ct.css(t, "padding" + Yt[a], !0, o)),
                    "margin" !== n && (l -= Ct.css(t, "border" + Yt[a] + "Width", !0, o))) : (l += Ct.css(t, "padding" + Yt[a], !0, o),
                        "padding" !== n ? l += Ct.css(t, "border" + Yt[a] + "Width", !0, o) : s += Ct.css(t, "border" + Yt[a] + "Width", !0, o));
        return !i && r >= 0 && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - r - l - s - .5)) || 0),
            l
    }
    function B(t, e, n) {
        var i = fe(t)
            , o = !bt.boxSizingReliable() || n
            , r = o && "border-box" === Ct.css(t, "boxSizing", !1, i)
            , a = r
            , s = F(t, e, i)
            , l = "offset" + e[0].toUpperCase() + e.slice(1);
        if (he.test(s)) {
            if (!n)
                return s;
            s = "auto"
        }
        return (!bt.boxSizingReliable() && r || "auto" === s || !parseFloat(s) && "inline" === Ct.css(t, "display", !1, i)) && t.getClientRects().length && (r = "border-box" === Ct.css(t, "boxSizing", !1, i),
            (a = l in t) && (s = t[l])),
            (s = parseFloat(s) || 0) + z(t, e, n || (r ? "border" : "content"), a, i, s) + "px"
    }
    function q(t, e, n, i, o) {
        return new q.prototype.init(t, e, n, i, o)
    }
    function V() {
        Ce && (!1 === lt.hidden && t.requestAnimationFrame ? t.requestAnimationFrame(V) : t.setTimeout(V, Ct.fx.interval),
            Ct.fx.tick())
    }
    function U() {
        return t.setTimeout(function () {
            ke = void 0
        }),
            ke = Date.now()
    }
    function Y(t, e) {
        var n, i = 0, o = {
            height: t
        };
        for (e = e ? 1 : 0; i < 4; i += 2 - e)
            n = Yt[i],
                o["margin" + n] = o["padding" + n] = t;
        return e && (o.opacity = o.width = t),
            o
    }
    function X(t, e, n) {
        for (var i, o = (G.tweeners[e] || []).concat(G.tweeners["*"]), r = 0, a = o.length; r < a; r++)
            if (i = o[r].call(n, e, t))
                return i
    }
    function K(t, e, n) {
        var i, o, r, a, s, l, u, c, d = "width" in e || "height" in e, h = this, f = {}, p = t.style, g = t.nodeType && Gt(t), m = Ht.get(t, "fxshow");
        n.queue || (a = Ct._queueHooks(t, "fx"),
            null == a.unqueued && (a.unqueued = 0,
                s = a.empty.fire,
                a.empty.fire = function () {
                    a.unqueued || s()
                }
            ),
            a.unqueued++,
            h.always(function () {
                h.always(function () {
                    a.unqueued--,
                        Ct.queue(t, "fx").length || a.empty.fire()
                })
            }));
        for (i in e)
            if (o = e[i],
                Te.test(o)) {
                if (delete e[i],
                    r = r || "toggle" === o,
                    o === (g ? "hide" : "show")) {
                    if ("show" !== o || !m || void 0 === m[i])
                        continue;
                    g = !0
                }
                f[i] = m && m[i] || Ct.style(t, i)
            }
        if ((l = !Ct.isEmptyObject(e)) || !Ct.isEmptyObject(f)) {
            d && 1 === t.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY],
                u = m && m.display,
                null == u && (u = Ht.get(t, "display")),
                c = Ct.css(t, "display"),
                "none" === c && (u ? c = u : (x([t], !0),
                    u = t.style.display || u,
                    c = Ct.css(t, "display"),
                    x([t]))),
                ("inline" === c || "inline-block" === c && null != u) && "none" === Ct.css(t, "float") && (l || (h.done(function () {
                    p.display = u
                }),
                    null == u && (c = p.display,
                        u = "none" === c ? "" : c)),
                    p.display = "inline-block")),
                n.overflow && (p.overflow = "hidden",
                    h.always(function () {
                        p.overflow = n.overflow[0],
                            p.overflowX = n.overflow[1],
                            p.overflowY = n.overflow[2]
                    })),
                l = !1;
            for (i in f)
                l || (m ? "hidden" in m && (g = m.hidden) : m = Ht.access(t, "fxshow", {
                    display: u
                }),
                    r && (m.hidden = !g),
                    g && x([t], !0),
                    h.done(function () {
                        g || x([t]),
                            Ht.remove(t, "fxshow");
                        for (i in f)
                            Ct.style(t, i, f[i])
                    })),
                    l = X(g ? m[i] : 0, i, h),
                    i in m || (m[i] = l.start,
                        g && (l.end = l.start,
                            l.start = 0))
        }
    }
    function Q(t, e) {
        var n, i, o, r, a;
        for (n in t)
            if (i = p(n),
                o = e[i],
                r = t[n],
                Array.isArray(r) && (o = r[1],
                    r = t[n] = r[0]),
                n !== i && (t[i] = r,
                    delete t[n]),
                (a = Ct.cssHooks[i]) && "expand" in a) {
                r = a.expand(r),
                    delete t[i];
                for (n in r)
                    n in t || (t[n] = r[n],
                        e[n] = o)
            } else
                e[i] = o
    }
    function G(t, e, n) {
        var i, o, r = 0, a = G.prefilters.length, s = Ct.Deferred().always(function () {
            delete l.elem
        }), l = function () {
            if (o)
                return !1;
            for (var e = ke || U(), n = Math.max(0, u.startTime + u.duration - e), i = n / u.duration || 0, r = 1 - i, a = 0, l = u.tweens.length; a < l; a++)
                u.tweens[a].run(r);
            return s.notifyWith(t, [u, r, n]),
                r < 1 && l ? n : (l || s.notifyWith(t, [u, 1, 0]),
                    s.resolveWith(t, [u]),
                    !1)
        }, u = s.promise({
            elem: t,
            props: Ct.extend({}, e),
            opts: Ct.extend(!0, {
                specialEasing: {},
                easing: Ct.easing._default
            }, n),
            originalProperties: e,
            originalOptions: n,
            startTime: ke || U(),
            duration: n.duration,
            tweens: [],
            createTween: function (e, n) {
                var i = Ct.Tween(t, u.opts, e, n, u.opts.specialEasing[e] || u.opts.easing);
                return u.tweens.push(i),
                    i
            },
            stop: function (e) {
                var n = 0
                    , i = e ? u.tweens.length : 0;
                if (o)
                    return this;
                for (o = !0; n < i; n++)
                    u.tweens[n].run(1);
                return e ? (s.notifyWith(t, [u, 1, 0]),
                    s.resolveWith(t, [u, e])) : s.rejectWith(t, [u, e]),
                    this
            }
        }), c = u.props;
        for (Q(c, u.opts.specialEasing); r < a; r++)
            if (i = G.prefilters[r].call(u, t, c, u.opts))
                return xt(i.stop) && (Ct._queueHooks(u.elem, u.opts.queue).stop = i.stop.bind(i)),
                    i;
        return Ct.map(c, X, u),
            xt(u.opts.start) && u.opts.start.call(t, u),
            u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always),
            Ct.fx.timer(Ct.extend(l, {
                elem: t,
                anim: u,
                queue: u.opts.queue
            })),
            u
    }
    function J(t) {
        return (t.match(Lt) || []).join(" ")
    }
    function Z(t) {
        return t.getAttribute && t.getAttribute("class") || ""
    }
    function tt(t) {
        return Array.isArray(t) ? t : "string" == typeof t ? t.match(Lt) || [] : []
    }
    function et(t, e, n, o) {
        var r;
        if (Array.isArray(e))
            Ct.each(e, function (e, i) {
                n || Re.test(t) ? o(t, i) : et(t + "[" + ("object" == typeof i && null != i ? e : "") + "]", i, n, o)
            });
        else if (n || "object" !== i(e))
            o(t, e);
        else
            for (r in e)
                et(t + "[" + r + "]", e[r], n, o)
    }
    function nt(t) {
        return function (e, n) {
            "string" != typeof e && (n = e,
                e = "*");
            var i, o = 0, r = e.toLowerCase().match(Lt) || [];
            if (xt(n))
                for (; i = r[o++];)
                    "+" === i[0] ? (i = i.slice(1) || "*",
                        (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
        }
    }
    function it(t, e, n, i) {
        function o(s) {
            var l;
            return r[s] = !0,
                Ct.each(t[s] || [], function (t, s) {
                    var u = s(e, n, i);
                    return "string" != typeof u || a || r[u] ? a ? !(l = u) : void 0 : (e.dataTypes.unshift(u),
                        o(u),
                        !1)
                }),
                l
        }
        var r = {}
            , a = t === Xe;
        return o(e.dataTypes[0]) || !r["*"] && o("*")
    }
    function ot(t, e) {
        var n, i, o = Ct.ajaxSettings.flatOptions || {};
        for (n in e)
            void 0 !== e[n] && ((o[n] ? t : i || (i = {}))[n] = e[n]);
        return i && Ct.extend(!0, t, i),
            t
    }
    function rt(t, e, n) {
        for (var i, o, r, a, s = t.contents, l = t.dataTypes; "*" === l[0];)
            l.shift(),
                void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
        if (i)
            for (o in s)
                if (s[o] && s[o].test(i)) {
                    l.unshift(o);
                    break
                }
        if (l[0] in n)
            r = l[0];
        else {
            for (o in n) {
                if (!l[0] || t.converters[o + " " + l[0]]) {
                    r = o;
                    break
                }
                a || (a = o)
            }
            r = r || a
        }
        if (r)
            return r !== l[0] && l.unshift(r),
                n[r]
    }
    function at(t, e, n, i) {
        var o, r, a, s, l, u = {}, c = t.dataTypes.slice();
        if (c[1])
            for (a in t.converters)
                u[a.toLowerCase()] = t.converters[a];
        for (r = c.shift(); r;)
            if (t.responseFields[r] && (n[t.responseFields[r]] = e),
                !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)),
                l = r,
                r = c.shift())
                if ("*" === r)
                    r = l;
                else if ("*" !== l && l !== r) {
                    if (!(a = u[l + " " + r] || u["* " + r]))
                        for (o in u)
                            if (s = o.split(" "),
                                s[1] === r && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                                !0 === a ? a = u[o] : !0 !== u[o] && (r = s[0],
                                    c.unshift(s[1]));
                                break
                            }
                    if (!0 !== a)
                        if (a && t.throws)
                            e = a(e);
                        else
                            try {
                                e = a(e)
                            } catch (t) {
                                return {
                                    state: "parsererror",
                                    error: a ? t : "No conversion from " + l + " to " + r
                                }
                            }
                }
        return {
            state: "success",
            data: e
        }
    }
    var st = []
        , lt = t.document
        , ut = Object.getPrototypeOf
        , ct = st.slice
        , dt = st.concat
        , ht = st.push
        , ft = st.indexOf
        , pt = {}
        , gt = pt.toString
        , mt = pt.hasOwnProperty
        , vt = mt.toString
        , yt = vt.call(Object)
        , bt = {}
        , xt = function (t) {
            return "function" == typeof t && "number" != typeof t.nodeType
        }
        , wt = function (t) {
            return null != t && t === t.window
        }
        , kt = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        }
        , Ct = function (t, e) {
            return new Ct.fn.init(t, e)
        }
        , Tt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    Ct.fn = Ct.prototype = {
        jquery: "3.4.1",
        constructor: Ct,
        length: 0,
        toArray: function () {
            return ct.call(this)
        },
        get: function (t) {
            return null == t ? ct.call(this) : t < 0 ? this[t + this.length] : this[t]
        },
        pushStack: function (t) {
            var e = Ct.merge(this.constructor(), t);
            return e.prevObject = this,
                e
        },
        each: function (t) {
            return Ct.each(this, t)
        },
        map: function (t) {
            return this.pushStack(Ct.map(this, function (e, n) {
                return t.call(e, n, e)
            }))
        },
        slice: function () {
            return this.pushStack(ct.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (t) {
            var e = this.length
                , n = +t + (t < 0 ? e : 0);
            return this.pushStack(n >= 0 && n < e ? [this[n]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor()
        },
        push: ht,
        sort: st.sort,
        splice: st.splice
    },
        Ct.extend = Ct.fn.extend = function () {
            var t, e, n, i, o, r, a = arguments[0] || {}, s = 1, l = arguments.length, u = !1;
            for ("boolean" == typeof a && (u = a,
                a = arguments[s] || {},
                s++),
                "object" == typeof a || xt(a) || (a = {}),
                s === l && (a = this,
                    s--); s < l; s++)
                if (null != (t = arguments[s]))
                    for (e in t)
                        i = t[e],
                            "__proto__" !== e && a !== i && (u && i && (Ct.isPlainObject(i) || (o = Array.isArray(i))) ? (n = a[e],
                                r = o && !Array.isArray(n) ? [] : o || Ct.isPlainObject(n) ? n : {},
                                o = !1,
                                a[e] = Ct.extend(u, r, i)) : void 0 !== i && (a[e] = i));
            return a
        }
        ,
        Ct.extend({
            expando: "jQuery" + ("3.4.1" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (t) {
                throw new Error(t)
            },
            noop: function () { },
            isPlainObject: function (t) {
                var e, n;
                return !(!t || "[object Object]" !== gt.call(t)) && (!(e = ut(t)) || "function" == typeof (n = mt.call(e, "constructor") && e.constructor) && vt.call(n) === yt)
            },
            isEmptyObject: function (t) {
                var e;
                for (e in t)
                    return !1;
                return !0
            },
            globalEval: function (t, e) {
                n(t, {
                    nonce: e && e.nonce
                })
            },
            each: function (t, e) {
                var n, i = 0;
                if (o(t))
                    for (n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++)
                        ;
                else
                    for (i in t)
                        if (!1 === e.call(t[i], i, t[i]))
                            break;
                return t
            },
            trim: function (t) {
                return null == t ? "" : (t + "").replace(Tt, "")
            },
            makeArray: function (t, e) {
                var n = e || [];
                return null != t && (o(Object(t)) ? Ct.merge(n, "string" == typeof t ? [t] : t) : ht.call(n, t)),
                    n
            },
            inArray: function (t, e, n) {
                return null == e ? -1 : ft.call(e, t, n)
            },
            merge: function (t, e) {
                for (var n = +e.length, i = 0, o = t.length; i < n; i++)
                    t[o++] = e[i];
                return t.length = o,
                    t
            },
            grep: function (t, e, n) {
                for (var i = [], o = 0, r = t.length, a = !n; o < r; o++)
                    !e(t[o], o) !== a && i.push(t[o]);
                return i
            },
            map: function (t, e, n) {
                var i, r, a = 0, s = [];
                if (o(t))
                    for (i = t.length; a < i; a++)
                        null != (r = e(t[a], a, n)) && s.push(r);
                else
                    for (a in t)
                        null != (r = e(t[a], a, n)) && s.push(r);
                return dt.apply([], s)
            },
            guid: 1,
            support: bt
        }),
        "function" == typeof Symbol && (Ct.fn[Symbol.iterator] = st[Symbol.iterator]),
        Ct.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
            pt["[object " + e + "]"] = e.toLowerCase()
        });
    var St = function (t) {
        function e(t, e, n, i) {
            var o, r, a, s, l, c, h, f = e && e.ownerDocument, p = e ? e.nodeType : 9;
            if (n = n || [],
                "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p)
                return n;
            if (!i && ((e ? e.ownerDocument || e : j) !== I && P(e),
                e = e || I,
                N)) {
                if (11 !== p && (l = vt.exec(t)))
                    if (o = l[1]) {
                        if (9 === p) {
                            if (!(a = e.getElementById(o)))
                                return n;
                            if (a.id === o)
                                return n.push(a),
                                    n
                        } else if (f && (a = f.getElementById(o)) && F(e, a) && a.id === o)
                            return n.push(a),
                                n
                    } else {
                        if (l[2])
                            return G.apply(n, e.getElementsByTagName(t)),
                                n;
                        if ((o = l[3]) && x.getElementsByClassName && e.getElementsByClassName)
                            return G.apply(n, e.getElementsByClassName(o)),
                                n
                    }
                if (x.qsa && !V[t + " "] && (!L || !L.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
                    if (h = t,
                        f = e,
                        1 === p && ut.test(t)) {
                        for ((s = e.getAttribute("id")) ? s = s.replace(wt, kt) : e.setAttribute("id", s = $),
                            c = T(t),
                            r = c.length; r--;)
                            c[r] = "#" + s + " " + d(c[r]);
                        h = c.join(","),
                            f = yt.test(t) && u(e.parentNode) || e
                    }
                    try {
                        return G.apply(n, f.querySelectorAll(h)),
                            n
                    } catch (e) {
                        V(t, !0)
                    } finally {
                        s === $ && e.removeAttribute("id")
                    }
                }
            }
            return M(t.replace(at, "$1"), e, n, i)
        }
        function n() {
            function t(n, i) {
                return e.push(n + " ") > w.cacheLength && delete t[e.shift()],
                    t[n + " "] = i
            }
            var e = [];
            return t
        }
        function i(t) {
            return t[$] = !0,
                t
        }
        function o(t) {
            var e = I.createElement("fieldset");
            try {
                return !!t(e)
            } catch (t) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e),
                    e = null
            }
        }
        function r(t, e) {
            for (var n = t.split("|"), i = n.length; i--;)
                w.attrHandle[n[i]] = e
        }
        function a(t, e) {
            var n = e && t
                , i = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
            if (i)
                return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === e)
                        return -1;
            return t ? 1 : -1
        }
        function s(t) {
            return function (e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && Tt(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }
        function l(t) {
            return i(function (e) {
                return e = +e,
                    i(function (n, i) {
                        for (var o, r = t([], n.length, e), a = r.length; a--;)
                            n[o = r[a]] && (n[o] = !(i[o] = n[o]))
                    })
            })
        }
        function u(t) {
            return t && void 0 !== t.getElementsByTagName && t
        }
        function c() { }
        function d(t) {
            for (var e = 0, n = t.length, i = ""; e < n; e++)
                i += t[e].value;
            return i
        }
        function h(t, e, n) {
            var i = e.dir
                , o = e.next
                , r = o || i
                , a = n && "parentNode" === r
                , s = H++;
            return e.first ? function (e, n, o) {
                for (; e = e[i];)
                    if (1 === e.nodeType || a)
                        return t(e, n, o);
                return !1
            }
                : function (e, n, l) {
                    var u, c, d, h = [W, s];
                    if (l) {
                        for (; e = e[i];)
                            if ((1 === e.nodeType || a) && t(e, n, l))
                                return !0
                    } else
                        for (; e = e[i];)
                            if (1 === e.nodeType || a)
                                if (d = e[$] || (e[$] = {}),
                                    c = d[e.uniqueID] || (d[e.uniqueID] = {}),
                                    o && o === e.nodeName.toLowerCase())
                                    e = e[i] || e;
                                else {
                                    if ((u = c[r]) && u[0] === W && u[1] === s)
                                        return h[2] = u[2];
                                    if (c[r] = h,
                                        h[2] = t(e, n, l))
                                        return !0
                                }
                    return !1
                }
        }
        function f(t) {
            return t.length > 1 ? function (e, n, i) {
                for (var o = t.length; o--;)
                    if (!t[o](e, n, i))
                        return !1;
                return !0
            }
                : t[0]
        }
        function p(t, n, i) {
            for (var o = 0, r = n.length; o < r; o++)
                e(t, n[o], i);
            return i
        }
        function g(t, e, n, i, o) {
            for (var r, a = [], s = 0, l = t.length, u = null != e; s < l; s++)
                (r = t[s]) && (n && !n(r, i, o) || (a.push(r),
                    u && e.push(s)));
            return a
        }
        function m(t, e, n, o, r, a) {
            return o && !o[$] && (o = m(o)),
                r && !r[$] && (r = m(r, a)),
                i(function (i, a, s, l) {
                    var u, c, d, h = [], f = [], m = a.length, v = i || p(e || "*", s.nodeType ? [s] : s, []), y = !t || !i && e ? v : g(v, h, t, s, l), b = n ? r || (i ? t : m || o) ? [] : a : y;
                    if (n && n(y, b, s, l),
                        o)
                        for (u = g(b, f),
                            o(u, [], s, l),
                            c = u.length; c--;)
                            (d = u[c]) && (b[f[c]] = !(y[f[c]] = d));
                    if (i) {
                        if (r || t) {
                            if (r) {
                                for (u = [],
                                    c = b.length; c--;)
                                    (d = b[c]) && u.push(y[c] = d);
                                r(null, b = [], u, l)
                            }
                            for (c = b.length; c--;)
                                (d = b[c]) && (u = r ? Z(i, d) : h[c]) > -1 && (i[u] = !(a[u] = d))
                        }
                    } else
                        b = g(b === a ? b.splice(m, b.length) : b),
                            r ? r(null, a, b, l) : G.apply(a, b)
                })
        }
        function v(t) {
            for (var e, n, i, o = t.length, r = w.relative[t[0].type], a = r || w.relative[" "], s = r ? 1 : 0, l = h(function (t) {
                return t === e
            }, a, !0), u = h(function (t) {
                return Z(e, t) > -1
            }, a, !0), c = [function (t, n, i) {
                var o = !r && (i || n !== A) || ((e = n).nodeType ? l(t, n, i) : u(t, n, i));
                return e = null,
                    o
            }
            ]; s < o; s++)
                if (n = w.relative[t[s].type])
                    c = [h(f(c), n)];
                else {
                    if (n = w.filter[t[s].type].apply(null, t[s].matches),
                        n[$]) {
                        for (i = ++s; i < o && !w.relative[t[i].type]; i++)
                            ;
                        return m(s > 1 && f(c), s > 1 && d(t.slice(0, s - 1).concat({
                            value: " " === t[s - 2].type ? "*" : ""
                        })).replace(at, "$1"), n, s < i && v(t.slice(s, i)), i < o && v(t = t.slice(i)), i < o && d(t))
                    }
                    c.push(n)
                }
            return f(c)
        }
        function y(t, n) {
            var o = n.length > 0
                , r = t.length > 0
                , a = function (i, a, s, l, u) {
                    var c, d, h, f = 0, p = "0", m = i && [], v = [], y = A, b = i || r && w.find.TAG("*", u), x = W += null == y ? 1 : Math.random() || .1, k = b.length;
                    for (u && (A = a === I || a || u); p !== k && null != (c = b[p]); p++) {
                        if (r && c) {
                            for (d = 0,
                                a || c.ownerDocument === I || (P(c),
                                    s = !N); h = t[d++];)
                                if (h(c, a || I, s)) {
                                    l.push(c);
                                    break
                                }
                            u && (W = x)
                        }
                        o && ((c = !h && c) && f--,
                            i && m.push(c))
                    }
                    if (f += p,
                        o && p !== f) {
                        for (d = 0; h = n[d++];)
                            h(m, v, a, s);
                        if (i) {
                            if (f > 0)
                                for (; p--;)
                                    m[p] || v[p] || (v[p] = K.call(l));
                            v = g(v)
                        }
                        G.apply(l, v),
                            u && !i && v.length > 0 && f + n.length > 1 && e.uniqueSort(l)
                    }
                    return u && (W = x,
                        A = y),
                        m
                };
            return o ? i(a) : a
        }
        var b, x, w, k, C, T, S, M, A, _, D, P, I, E, N, L, O, R, F, $ = "sizzle" + 1 * new Date, j = t.document, W = 0, H = 0, z = n(), B = n(), q = n(), V = n(), U = function (t, e) {
            return t === e && (D = !0),
                0
        }, Y = {}.hasOwnProperty, X = [], K = X.pop, Q = X.push, G = X.push, J = X.slice, Z = function (t, e) {
            for (var n = 0, i = t.length; n < i; n++)
                if (t[n] === e)
                    return n;
            return -1
        }, tt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", et = "[\\x20\\t\\r\\n\\f]", nt = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", it = "\\[" + et + "*(" + nt + ")(?:" + et + "*([*^$|!~]?=)" + et + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + nt + "))|)" + et + "*\\]", ot = ":(" + nt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + it + ")*)|.*)\\)|)", rt = new RegExp(et + "+", "g"), at = new RegExp("^" + et + "+|((?:^|[^\\\\])(?:\\\\.)*)" + et + "+$", "g"), st = new RegExp("^" + et + "*," + et + "*"), lt = new RegExp("^" + et + "*([>+~]|" + et + ")" + et + "*"), ut = new RegExp(et + "|>"), ct = new RegExp(ot), dt = new RegExp("^" + nt + "$"), ht = {
            ID: new RegExp("^#(" + nt + ")"),
            CLASS: new RegExp("^\\.(" + nt + ")"),
            TAG: new RegExp("^(" + nt + "|[*])"),
            ATTR: new RegExp("^" + it),
            PSEUDO: new RegExp("^" + ot),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + et + "*(even|odd|(([+-]|)(\\d*)n|)" + et + "*(?:([+-]|)" + et + "*(\\d+)|))" + et + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + tt + ")$", "i"),
            needsContext: new RegExp("^" + et + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + et + "*((?:-\\d)?\\d*)" + et + "*\\)|)(?=[^-]|$)", "i")
        }, ft = /HTML$/i, pt = /^(?:input|select|textarea|button)$/i, gt = /^h\d$/i, mt = /^[^{]+\{\s*\[native \w/, vt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, yt = /[+~]/, bt = new RegExp("\\\\([\\da-f]{1,6}" + et + "?|(" + et + ")|.)", "ig"), xt = function (t, e, n) {
            var i = "0x" + e - 65536;
            return i !== i || n ? e : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
        }, wt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, kt = function (t, e) {
            return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
        }, Ct = function () {
            P()
        }, Tt = h(function (t) {
            return !0 === t.disabled && "fieldset" === t.nodeName.toLowerCase()
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            G.apply(X = J.call(j.childNodes), j.childNodes),
                X[j.childNodes.length].nodeType
        } catch (t) {
            G = {
                apply: X.length ? function (t, e) {
                    Q.apply(t, J.call(e))
                }
                    : function (t, e) {
                        for (var n = t.length, i = 0; t[n++] = e[i++];)
                            ;
                        t.length = n - 1
                    }
            }
        }
        x = e.support = {},
            C = e.isXML = function (t) {
                var e = t.namespaceURI
                    , n = (t.ownerDocument || t).documentElement;
                return !ft.test(e || n && n.nodeName || "HTML")
            }
            ,
            P = e.setDocument = function (t) {
                var e, n, i = t ? t.ownerDocument || t : j;
                return i !== I && 9 === i.nodeType && i.documentElement ? (I = i,
                    E = I.documentElement,
                    N = !C(I),
                    j !== I && (n = I.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Ct, !1) : n.attachEvent && n.attachEvent("onunload", Ct)),
                    x.attributes = o(function (t) {
                        return t.className = "i",
                            !t.getAttribute("className")
                    }),
                    x.getElementsByTagName = o(function (t) {
                        return t.appendChild(I.createComment("")),
                            !t.getElementsByTagName("*").length
                    }),
                    x.getElementsByClassName = mt.test(I.getElementsByClassName),
                    x.getById = o(function (t) {
                        return E.appendChild(t).id = $,
                            !I.getElementsByName || !I.getElementsByName($).length
                    }),
                    x.getById ? (w.filter.ID = function (t) {
                        var e = t.replace(bt, xt);
                        return function (t) {
                            return t.getAttribute("id") === e
                        }
                    }
                        ,
                        w.find.ID = function (t, e) {
                            if (void 0 !== e.getElementById && N) {
                                var n = e.getElementById(t);
                                return n ? [n] : []
                            }
                        }
                    ) : (w.filter.ID = function (t) {
                        var e = t.replace(bt, xt);
                        return function (t) {
                            var n = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                            return n && n.value === e
                        }
                    }
                        ,
                        w.find.ID = function (t, e) {
                            if (void 0 !== e.getElementById && N) {
                                var n, i, o, r = e.getElementById(t);
                                if (r) {
                                    if ((n = r.getAttributeNode("id")) && n.value === t)
                                        return [r];
                                    for (o = e.getElementsByName(t),
                                        i = 0; r = o[i++];)
                                        if ((n = r.getAttributeNode("id")) && n.value === t)
                                            return [r]
                                }
                                return []
                            }
                        }
                    ),
                    w.find.TAG = x.getElementsByTagName ? function (t, e) {
                        return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : x.qsa ? e.querySelectorAll(t) : void 0
                    }
                        : function (t, e) {
                            var n, i = [], o = 0, r = e.getElementsByTagName(t);
                            if ("*" === t) {
                                for (; n = r[o++];)
                                    1 === n.nodeType && i.push(n);
                                return i
                            }
                            return r
                        }
                    ,
                    w.find.CLASS = x.getElementsByClassName && function (t, e) {
                        if (void 0 !== e.getElementsByClassName && N)
                            return e.getElementsByClassName(t)
                    }
                    ,
                    O = [],
                    L = [],
                    (x.qsa = mt.test(I.querySelectorAll)) && (o(function (t) {
                        E.appendChild(t).innerHTML = "<a id='" + $ + "'></a><select id='" + $ + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                            t.querySelectorAll("[msallowcapture^='']").length && L.push("[*^$]=" + et + "*(?:''|\"\")"),
                            t.querySelectorAll("[selected]").length || L.push("\\[" + et + "*(?:value|" + tt + ")"),
                            t.querySelectorAll("[id~=" + $ + "-]").length || L.push("~="),
                            t.querySelectorAll(":checked").length || L.push(":checked"),
                            t.querySelectorAll("a#" + $ + "+*").length || L.push(".#.+[+~]")
                    }),
                        o(function (t) {
                            t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                            var e = I.createElement("input");
                            e.setAttribute("type", "hidden"),
                                t.appendChild(e).setAttribute("name", "D"),
                                t.querySelectorAll("[name=d]").length && L.push("name" + et + "*[*^$|!~]?="),
                                2 !== t.querySelectorAll(":enabled").length && L.push(":enabled", ":disabled"),
                                E.appendChild(t).disabled = !0,
                                2 !== t.querySelectorAll(":disabled").length && L.push(":enabled", ":disabled"),
                                t.querySelectorAll("*,:x"),
                                L.push(",.*:")
                        })),
                    (x.matchesSelector = mt.test(R = E.matches || E.webkitMatchesSelector || E.mozMatchesSelector || E.oMatchesSelector || E.msMatchesSelector)) && o(function (t) {
                        x.disconnectedMatch = R.call(t, "*"),
                            R.call(t, "[s!='']:x"),
                            O.push("!=", ot)
                    }),
                    L = L.length && new RegExp(L.join("|")),
                    O = O.length && new RegExp(O.join("|")),
                    e = mt.test(E.compareDocumentPosition),
                    F = e || mt.test(E.contains) ? function (t, e) {
                        var n = 9 === t.nodeType ? t.documentElement : t
                            , i = e && e.parentNode;
                        return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                    }
                        : function (t, e) {
                            if (e)
                                for (; e = e.parentNode;)
                                    if (e === t)
                                        return !0;
                            return !1
                        }
                    ,
                    U = e ? function (t, e) {
                        if (t === e)
                            return D = !0,
                                0;
                        var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                        return n || (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1,
                            1 & n || !x.sortDetached && e.compareDocumentPosition(t) === n ? t === I || t.ownerDocument === j && F(j, t) ? -1 : e === I || e.ownerDocument === j && F(j, e) ? 1 : _ ? Z(_, t) - Z(_, e) : 0 : 4 & n ? -1 : 1)
                    }
                        : function (t, e) {
                            if (t === e)
                                return D = !0,
                                    0;
                            var n, i = 0, o = t.parentNode, r = e.parentNode, s = [t], l = [e];
                            if (!o || !r)
                                return t === I ? -1 : e === I ? 1 : o ? -1 : r ? 1 : _ ? Z(_, t) - Z(_, e) : 0;
                            if (o === r)
                                return a(t, e);
                            for (n = t; n = n.parentNode;)
                                s.unshift(n);
                            for (n = e; n = n.parentNode;)
                                l.unshift(n);
                            for (; s[i] === l[i];)
                                i++;
                            return i ? a(s[i], l[i]) : s[i] === j ? -1 : l[i] === j ? 1 : 0
                        }
                    ,
                    I) : I
            }
            ,
            e.matches = function (t, n) {
                return e(t, null, null, n)
            }
            ,
            e.matchesSelector = function (t, n) {
                if ((t.ownerDocument || t) !== I && P(t),
                    x.matchesSelector && N && !V[n + " "] && (!O || !O.test(n)) && (!L || !L.test(n)))
                    try {
                        var i = R.call(t, n);
                        if (i || x.disconnectedMatch || t.document && 11 !== t.document.nodeType)
                            return i
                    } catch (t) {
                        V(n, !0)
                    }
                return e(n, I, null, [t]).length > 0
            }
            ,
            e.contains = function (t, e) {
                return (t.ownerDocument || t) !== I && P(t),
                    F(t, e)
            }
            ,
            e.attr = function (t, e) {
                (t.ownerDocument || t) !== I && P(t);
                var n = w.attrHandle[e.toLowerCase()]
                    , i = n && Y.call(w.attrHandle, e.toLowerCase()) ? n(t, e, !N) : void 0;
                return void 0 !== i ? i : x.attributes || !N ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
            }
            ,
            e.escape = function (t) {
                return (t + "").replace(wt, kt)
            }
            ,
            e.error = function (t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }
            ,
            e.uniqueSort = function (t) {
                var e, n = [], i = 0, o = 0;
                if (D = !x.detectDuplicates,
                    _ = !x.sortStable && t.slice(0),
                    t.sort(U),
                    D) {
                    for (; e = t[o++];)
                        e === t[o] && (i = n.push(o));
                    for (; i--;)
                        t.splice(n[i], 1)
                }
                return _ = null,
                    t
            }
            ,
            k = e.getText = function (t) {
                var e, n = "", i = 0, o = t.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof t.textContent)
                            return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling)
                            n += k(t)
                    } else if (3 === o || 4 === o)
                        return t.nodeValue
                } else
                    for (; e = t[i++];)
                        n += k(e);
                return n
            }
            ,
            w = e.selectors = {
                cacheLength: 50,
                createPseudo: i,
                match: ht,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function (t) {
                        return t[1] = t[1].replace(bt, xt),
                            t[3] = (t[3] || t[4] || t[5] || "").replace(bt, xt),
                            "~=" === t[2] && (t[3] = " " + t[3] + " "),
                            t.slice(0, 4)
                    },
                    CHILD: function (t) {
                        return t[1] = t[1].toLowerCase(),
                            "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]),
                                t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])),
                                t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]),
                            t
                    },
                    PSEUDO: function (t) {
                        var e, n = !t[6] && t[2];
                        return ht.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && ct.test(n) && (e = T(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e),
                            t[2] = n.slice(0, e)),
                            t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (t) {
                        var e = t.replace(bt, xt).toLowerCase();
                        return "*" === t ? function () {
                            return !0
                        }
                            : function (t) {
                                return t.nodeName && t.nodeName.toLowerCase() === e
                            }
                    },
                    CLASS: function (t) {
                        var e = z[t + " "];
                        return e || (e = new RegExp("(^|" + et + ")" + t + "(" + et + "|$)")) && z(t, function (t) {
                            return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                        })
                    },
                    ATTR: function (t, n, i) {
                        return function (o) {
                            var r = e.attr(o, t);
                            return null == r ? "!=" === n : !n || (r += "",
                                "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r.replace(rt, " ") + " ").indexOf(i) > -1 : "|=" === n && (r === i || r.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function (t, e, n, i, o) {
                        var r = "nth" !== t.slice(0, 3)
                            , a = "last" !== t.slice(-4)
                            , s = "of-type" === e;
                        return 1 === i && 0 === o ? function (t) {
                            return !!t.parentNode
                        }
                            : function (e, n, l) {
                                var u, c, d, h, f, p, g = r !== a ? "nextSibling" : "previousSibling", m = e.parentNode, v = s && e.nodeName.toLowerCase(), y = !l && !s, b = !1;
                                if (m) {
                                    if (r) {
                                        for (; g;) {
                                            for (h = e; h = h[g];)
                                                if (s ? h.nodeName.toLowerCase() === v : 1 === h.nodeType)
                                                    return !1;
                                            p = g = "only" === t && !p && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (p = [a ? m.firstChild : m.lastChild],
                                        a && y) {
                                        for (h = m,
                                            d = h[$] || (h[$] = {}),
                                            c = d[h.uniqueID] || (d[h.uniqueID] = {}),
                                            u = c[t] || [],
                                            f = u[0] === W && u[1],
                                            b = f && u[2],
                                            h = f && m.childNodes[f]; h = ++f && h && h[g] || (b = f = 0) || p.pop();)
                                            if (1 === h.nodeType && ++b && h === e) {
                                                c[t] = [W, f, b];
                                                break
                                            }
                                    } else if (y && (h = e,
                                        d = h[$] || (h[$] = {}),
                                        c = d[h.uniqueID] || (d[h.uniqueID] = {}),
                                        u = c[t] || [],
                                        f = u[0] === W && u[1],
                                        b = f),
                                        !1 === b)
                                        for (; (h = ++f && h && h[g] || (b = f = 0) || p.pop()) && ((s ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++b || (y && (d = h[$] || (h[$] = {}),
                                            c = d[h.uniqueID] || (d[h.uniqueID] = {}),
                                            c[t] = [W, b]),
                                            h !== e));)
                                            ;
                                    return (b -= o) === i || b % i == 0 && b / i >= 0
                                }
                            }
                    },
                    PSEUDO: function (t, n) {
                        var o, r = w.pseudos[t] || w.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                        return r[$] ? r(n) : r.length > 1 ? (o = [t, t, "", n],
                            w.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function (t, e) {
                                for (var i, o = r(t, n), a = o.length; a--;)
                                    i = Z(t, o[a]),
                                        t[i] = !(e[i] = o[a])
                            }) : function (t) {
                                return r(t, 0, o)
                            }
                        ) : r
                    }
                },
                pseudos: {
                    not: i(function (t) {
                        var e = []
                            , n = []
                            , o = S(t.replace(at, "$1"));
                        return o[$] ? i(function (t, e, n, i) {
                            for (var r, a = o(t, null, i, []), s = t.length; s--;)
                                (r = a[s]) && (t[s] = !(e[s] = r))
                        }) : function (t, i, r) {
                            return e[0] = t,
                                o(e, null, r, n),
                                e[0] = null,
                                !n.pop()
                        }
                    }),
                    has: i(function (t) {
                        return function (n) {
                            return e(t, n).length > 0
                        }
                    }),
                    contains: i(function (t) {
                        return t = t.replace(bt, xt),
                            function (e) {
                                return (e.textContent || k(e)).indexOf(t) > -1
                            }
                    }),
                    lang: i(function (t) {
                        return dt.test(t || "") || e.error("unsupported lang: " + t),
                            t = t.replace(bt, xt).toLowerCase(),
                            function (e) {
                                var n;
                                do {
                                    if (n = N ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                        return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function (e) {
                        var n = t.location && t.location.hash;
                        return n && n.slice(1) === e.id
                    },
                    root: function (t) {
                        return t === E
                    },
                    focus: function (t) {
                        return t === I.activeElement && (!I.hasFocus || I.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    },
                    enabled: s(!1),
                    disabled: s(!0),
                    checked: function (t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    },
                    selected: function (t) {
                        return t.parentNode && t.parentNode.selectedIndex,
                            !0 === t.selected
                    },
                    empty: function (t) {
                        for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeType < 6)
                                return !1;
                        return !0
                    },
                    parent: function (t) {
                        return !w.pseudos.empty(t)
                    },
                    header: function (t) {
                        return gt.test(t.nodeName)
                    },
                    input: function (t) {
                        return pt.test(t.nodeName)
                    },
                    button: function (t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    },
                    text: function (t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    },
                    first: l(function () {
                        return [0]
                    }),
                    last: l(function (t, e) {
                        return [e - 1]
                    }),
                    eq: l(function (t, e, n) {
                        return [n < 0 ? n + e : n]
                    }),
                    even: l(function (t, e) {
                        for (var n = 0; n < e; n += 2)
                            t.push(n);
                        return t
                    }),
                    odd: l(function (t, e) {
                        for (var n = 1; n < e; n += 2)
                            t.push(n);
                        return t
                    }),
                    lt: l(function (t, e, n) {
                        for (var i = n < 0 ? n + e : n > e ? e : n; --i >= 0;)
                            t.push(i);
                        return t
                    }),
                    gt: l(function (t, e, n) {
                        for (var i = n < 0 ? n + e : n; ++i < e;)
                            t.push(i);
                        return t
                    })
                }
            },
            w.pseudos.nth = w.pseudos.eq;
        for (b in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            w.pseudos[b] = function (t) {
                return function (e) {
                    return "input" === e.nodeName.toLowerCase() && e.type === t
                }
            }(b);
        for (b in {
            submit: !0,
            reset: !0
        })
            w.pseudos[b] = function (t) {
                return function (e) {
                    var n = e.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && e.type === t
                }
            }(b);
        return c.prototype = w.filters = w.pseudos,
            w.setFilters = new c,
            T = e.tokenize = function (t, n) {
                var i, o, r, a, s, l, u, c = B[t + " "];
                if (c)
                    return n ? 0 : c.slice(0);
                for (s = t,
                    l = [],
                    u = w.preFilter; s;) {
                    i && !(o = st.exec(s)) || (o && (s = s.slice(o[0].length) || s),
                        l.push(r = [])),
                        i = !1,
                        (o = lt.exec(s)) && (i = o.shift(),
                            r.push({
                                value: i,
                                type: o[0].replace(at, " ")
                            }),
                            s = s.slice(i.length));
                    for (a in w.filter)
                        !(o = ht[a].exec(s)) || u[a] && !(o = u[a](o)) || (i = o.shift(),
                            r.push({
                                value: i,
                                type: a,
                                matches: o
                            }),
                            s = s.slice(i.length));
                    if (!i)
                        break
                }
                return n ? s.length : s ? e.error(t) : B(t, l).slice(0)
            }
            ,
            S = e.compile = function (t, e) {
                var n, i = [], o = [], r = q[t + " "];
                if (!r) {
                    for (e || (e = T(t)),
                        n = e.length; n--;)
                        r = v(e[n]),
                            r[$] ? i.push(r) : o.push(r);
                    r = q(t, y(o, i)),
                        r.selector = t
                }
                return r
            }
            ,
            M = e.select = function (t, e, n, i) {
                var o, r, a, s, l, c = "function" == typeof t && t, h = !i && T(t = c.selector || t);
                if (n = n || [],
                    1 === h.length) {
                    if (r = h[0] = h[0].slice(0),
                        r.length > 2 && "ID" === (a = r[0]).type && 9 === e.nodeType && N && w.relative[r[1].type]) {
                        if (!(e = (w.find.ID(a.matches[0].replace(bt, xt), e) || [])[0]))
                            return n;
                        c && (e = e.parentNode),
                            t = t.slice(r.shift().value.length)
                    }
                    for (o = ht.needsContext.test(t) ? 0 : r.length; o-- && (a = r[o],
                        !w.relative[s = a.type]);)
                        if ((l = w.find[s]) && (i = l(a.matches[0].replace(bt, xt), yt.test(r[0].type) && u(e.parentNode) || e))) {
                            if (r.splice(o, 1),
                                !(t = i.length && d(r)))
                                return G.apply(n, i),
                                    n;
                            break
                        }
                }
                return (c || S(t, h))(i, e, !N, n, !e || yt.test(t) && u(e.parentNode) || e),
                    n
            }
            ,
            x.sortStable = $.split("").sort(U).join("") === $,
            x.detectDuplicates = !!D,
            P(),
            x.sortDetached = o(function (t) {
                return 1 & t.compareDocumentPosition(I.createElement("fieldset"))
            }),
            o(function (t) {
                return t.innerHTML = "<a href='#'></a>",
                    "#" === t.firstChild.getAttribute("href")
            }) || r("type|href|height|width", function (t, e, n) {
                if (!n)
                    return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
            }),
            x.attributes && o(function (t) {
                return t.innerHTML = "<input/>",
                    t.firstChild.setAttribute("value", ""),
                    "" === t.firstChild.getAttribute("value")
            }) || r("value", function (t, e, n) {
                if (!n && "input" === t.nodeName.toLowerCase())
                    return t.defaultValue
            }),
            o(function (t) {
                return null == t.getAttribute("disabled")
            }) || r(tt, function (t, e, n) {
                var i;
                if (!n)
                    return !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
            }),
            e
    }(t);
    Ct.find = St,
        Ct.expr = St.selectors,
        Ct.expr[":"] = Ct.expr.pseudos,
        Ct.uniqueSort = Ct.unique = St.uniqueSort,
        Ct.text = St.getText,
        Ct.isXMLDoc = St.isXML,
        Ct.contains = St.contains,
        Ct.escapeSelector = St.escape;
    var Mt = function (t, e, n) {
        for (var i = [], o = void 0 !== n; (t = t[e]) && 9 !== t.nodeType;)
            if (1 === t.nodeType) {
                if (o && Ct(t).is(n))
                    break;
                i.push(t)
            }
        return i
    }
        , At = function (t, e) {
            for (var n = []; t; t = t.nextSibling)
                1 === t.nodeType && t !== e && n.push(t);
            return n
        }
        , _t = Ct.expr.match.needsContext
        , Dt = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    Ct.filter = function (t, e, n) {
        var i = e[0];
        return n && (t = ":not(" + t + ")"),
            1 === e.length && 1 === i.nodeType ? Ct.find.matchesSelector(i, t) ? [i] : [] : Ct.find.matches(t, Ct.grep(e, function (t) {
                return 1 === t.nodeType
            }))
    }
        ,
        Ct.fn.extend({
            find: function (t) {
                var e, n, i = this.length, o = this;
                if ("string" != typeof t)
                    return this.pushStack(Ct(t).filter(function () {
                        for (e = 0; e < i; e++)
                            if (Ct.contains(o[e], this))
                                return !0
                    }));
                for (n = this.pushStack([]),
                    e = 0; e < i; e++)
                    Ct.find(t, o[e], n);
                return i > 1 ? Ct.uniqueSort(n) : n
            },
            filter: function (t) {
                return this.pushStack(a(this, t || [], !1))
            },
            not: function (t) {
                return this.pushStack(a(this, t || [], !0))
            },
            is: function (t) {
                return !!a(this, "string" == typeof t && _t.test(t) ? Ct(t) : t || [], !1).length
            }
        });
    var Pt, It = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (Ct.fn.init = function (t, e, n) {
        var i, o;
        if (!t)
            return this;
        if (n = n || Pt,
            "string" == typeof t) {
            if (!(i = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : It.exec(t)) || !i[1] && e)
                return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
            if (i[1]) {
                if (e = e instanceof Ct ? e[0] : e,
                    Ct.merge(this, Ct.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : lt, !0)),
                    Dt.test(i[1]) && Ct.isPlainObject(e))
                    for (i in e)
                        xt(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                return this
            }
            return o = lt.getElementById(i[2]),
                o && (this[0] = o,
                    this.length = 1),
                this
        }
        return t.nodeType ? (this[0] = t,
            this.length = 1,
            this) : xt(t) ? void 0 !== n.ready ? n.ready(t) : t(Ct) : Ct.makeArray(t, this)
    }
    ).prototype = Ct.fn,
        Pt = Ct(lt);
    var Et = /^(?:parents|prev(?:Until|All))/
        , Nt = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    Ct.fn.extend({
        has: function (t) {
            var e = Ct(t, this)
                , n = e.length;
            return this.filter(function () {
                for (var t = 0; t < n; t++)
                    if (Ct.contains(this, e[t]))
                        return !0
            })
        },
        closest: function (t, e) {
            var n, i = 0, o = this.length, r = [], a = "string" != typeof t && Ct(t);
            if (!_t.test(t))
                for (; i < o; i++)
                    for (n = this[i]; n && n !== e; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && Ct.find.matchesSelector(n, t))) {
                            r.push(n);
                            break
                        }
            return this.pushStack(r.length > 1 ? Ct.uniqueSort(r) : r)
        },
        index: function (t) {
            return t ? "string" == typeof t ? ft.call(Ct(t), this[0]) : ft.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (t, e) {
            return this.pushStack(Ct.uniqueSort(Ct.merge(this.get(), Ct(t, e))))
        },
        addBack: function (t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }),
        Ct.each({
            parent: function (t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },
            parents: function (t) {
                return Mt(t, "parentNode")
            },
            parentsUntil: function (t, e, n) {
                return Mt(t, "parentNode", n)
            },
            next: function (t) {
                return s(t, "nextSibling")
            },
            prev: function (t) {
                return s(t, "previousSibling")
            },
            nextAll: function (t) {
                return Mt(t, "nextSibling")
            },
            prevAll: function (t) {
                return Mt(t, "previousSibling")
            },
            nextUntil: function (t, e, n) {
                return Mt(t, "nextSibling", n)
            },
            prevUntil: function (t, e, n) {
                return Mt(t, "previousSibling", n)
            },
            siblings: function (t) {
                return At((t.parentNode || {}).firstChild, t)
            },
            children: function (t) {
                return At(t.firstChild)
            },
            contents: function (t) {
                return void 0 !== t.contentDocument ? t.contentDocument : (r(t, "template") && (t = t.content || t),
                    Ct.merge([], t.childNodes))
            }
        }, function (t, e) {
            Ct.fn[t] = function (n, i) {
                var o = Ct.map(this, e, n);
                return "Until" !== t.slice(-5) && (i = n),
                    i && "string" == typeof i && (o = Ct.filter(i, o)),
                    this.length > 1 && (Nt[t] || Ct.uniqueSort(o),
                        Et.test(t) && o.reverse()),
                    this.pushStack(o)
            }
        });
    var Lt = /[^\x20\t\r\n\f]+/g;
    Ct.Callbacks = function (t) {
        t = "string" == typeof t ? l(t) : Ct.extend({}, t);
        var e, n, o, r, a = [], s = [], u = -1, c = function () {
            for (r = r || t.once,
                o = e = !0; s.length; u = -1)
                for (n = s.shift(); ++u < a.length;)
                    !1 === a[u].apply(n[0], n[1]) && t.stopOnFalse && (u = a.length,
                        n = !1);
            t.memory || (n = !1),
                e = !1,
                r && (a = n ? [] : "")
        }, d = {
            add: function () {
                return a && (n && !e && (u = a.length - 1,
                    s.push(n)),
                    function e(n) {
                        Ct.each(n, function (n, o) {
                            xt(o) ? t.unique && d.has(o) || a.push(o) : o && o.length && "string" !== i(o) && e(o)
                        })
                    }(arguments),
                    n && !e && c()),
                    this
            },
            remove: function () {
                return Ct.each(arguments, function (t, e) {
                    for (var n; (n = Ct.inArray(e, a, n)) > -1;)
                        a.splice(n, 1),
                            n <= u && u--
                }),
                    this
            },
            has: function (t) {
                return t ? Ct.inArray(t, a) > -1 : a.length > 0
            },
            empty: function () {
                return a && (a = []),
                    this
            },
            disable: function () {
                return r = s = [],
                    a = n = "",
                    this
            },
            disabled: function () {
                return !a
            },
            lock: function () {
                return r = s = [],
                    n || e || (a = n = ""),
                    this
            },
            locked: function () {
                return !!r
            },
            fireWith: function (t, n) {
                return r || (n = n || [],
                    n = [t, n.slice ? n.slice() : n],
                    s.push(n),
                    e || c()),
                    this
            },
            fire: function () {
                return d.fireWith(this, arguments),
                    this
            },
            fired: function () {
                return !!o
            }
        };
        return d
    }
        ,
        Ct.extend({
            Deferred: function (e) {
                var n = [["notify", "progress", Ct.Callbacks("memory"), Ct.Callbacks("memory"), 2], ["resolve", "done", Ct.Callbacks("once memory"), Ct.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", Ct.Callbacks("once memory"), Ct.Callbacks("once memory"), 1, "rejected"]]
                    , i = "pending"
                    , o = {
                        state: function () {
                            return i
                        },
                        always: function () {
                            return r.done(arguments).fail(arguments),
                                this
                        },
                        catch: function (t) {
                            return o.then(null, t)
                        },
                        pipe: function () {
                            var t = arguments;
                            return Ct.Deferred(function (e) {
                                Ct.each(n, function (n, i) {
                                    var o = xt(t[i[4]]) && t[i[4]];
                                    r[i[1]](function () {
                                        var t = o && o.apply(this, arguments);
                                        t && xt(t.promise) ? t.promise().progress(e.notify).done(e.resolve).fail(e.reject) : e[i[0] + "With"](this, o ? [t] : arguments)
                                    })
                                }),
                                    t = null
                            }).promise()
                        },
                        then: function (e, i, o) {
                            function r(e, n, i, o) {
                                return function () {
                                    var s = this
                                        , l = arguments
                                        , d = function () {
                                            var t, d;
                                            if (!(e < a)) {
                                                if ((t = i.apply(s, l)) === n.promise())
                                                    throw new TypeError("Thenable self-resolution");
                                                d = t && ("object" == typeof t || "function" == typeof t) && t.then,
                                                    xt(d) ? o ? d.call(t, r(a, n, u, o), r(a, n, c, o)) : (a++,
                                                        d.call(t, r(a, n, u, o), r(a, n, c, o), r(a, n, u, n.notifyWith))) : (i !== u && (s = void 0,
                                                            l = [t]),
                                                            (o || n.resolveWith)(s, l))
                                            }
                                        }
                                        , h = o ? d : function () {
                                            try {
                                                d()
                                            } catch (t) {
                                                Ct.Deferred.exceptionHook && Ct.Deferred.exceptionHook(t, h.stackTrace),
                                                    e + 1 >= a && (i !== c && (s = void 0,
                                                        l = [t]),
                                                        n.rejectWith(s, l))
                                            }
                                        }
                                        ;
                                    e ? h() : (Ct.Deferred.getStackHook && (h.stackTrace = Ct.Deferred.getStackHook()),
                                        t.setTimeout(h))
                                }
                            }
                            var a = 0;
                            return Ct.Deferred(function (t) {
                                n[0][3].add(r(0, t, xt(o) ? o : u, t.notifyWith)),
                                    n[1][3].add(r(0, t, xt(e) ? e : u)),
                                    n[2][3].add(r(0, t, xt(i) ? i : c))
                            }).promise()
                        },
                        promise: function (t) {
                            return null != t ? Ct.extend(t, o) : o
                        }
                    }
                    , r = {};
                return Ct.each(n, function (t, e) {
                    var a = e[2]
                        , s = e[5];
                    o[e[1]] = a.add,
                        s && a.add(function () {
                            i = s
                        }, n[3 - t][2].disable, n[3 - t][3].disable, n[0][2].lock, n[0][3].lock),
                        a.add(e[3].fire),
                        r[e[0]] = function () {
                            return r[e[0] + "With"](this === r ? void 0 : this, arguments),
                                this
                        }
                        ,
                        r[e[0] + "With"] = a.fireWith
                }),
                    o.promise(r),
                    e && e.call(r, r),
                    r
            },
            when: function (t) {
                var e = arguments.length
                    , n = e
                    , i = Array(n)
                    , o = ct.call(arguments)
                    , r = Ct.Deferred()
                    , a = function (t) {
                        return function (n) {
                            i[t] = this,
                                o[t] = arguments.length > 1 ? ct.call(arguments) : n,
                                --e || r.resolveWith(i, o)
                        }
                    };
                if (e <= 1 && (d(t, r.done(a(n)).resolve, r.reject, !e),
                    "pending" === r.state() || xt(o[n] && o[n].then)))
                    return r.then();
                for (; n--;)
                    d(o[n], a(n), r.reject);
                return r.promise()
            }
        });
    var Ot = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    Ct.Deferred.exceptionHook = function (e, n) {
        t.console && t.console.warn && e && Ot.test(e.name) && t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, n)
    }
        ,
        Ct.readyException = function (e) {
            t.setTimeout(function () {
                throw e
            })
        }
        ;
    var Rt = Ct.Deferred();
    Ct.fn.ready = function (t) {
        return Rt.then(t).catch(function (t) {
            Ct.readyException(t)
        }),
            this
    }
        ,
        Ct.extend({
            isReady: !1,
            readyWait: 1,
            ready: function (t) {
                (!0 === t ? --Ct.readyWait : Ct.isReady) || (Ct.isReady = !0,
                    !0 !== t && --Ct.readyWait > 0 || Rt.resolveWith(lt, [Ct]))
            }
        }),
        Ct.ready.then = Rt.then,
        "complete" === lt.readyState || "loading" !== lt.readyState && !lt.documentElement.doScroll ? t.setTimeout(Ct.ready) : (lt.addEventListener("DOMContentLoaded", h),
            t.addEventListener("load", h));
    var Ft = function (t, e, n, o, r, a, s) {
        var l = 0
            , u = t.length
            , c = null == n;
        if ("object" === i(n)) {
            r = !0;
            for (l in n)
                Ft(t, e, l, n[l], !0, a, s)
        } else if (void 0 !== o && (r = !0,
            xt(o) || (s = !0),
            c && (s ? (e.call(t, o),
                e = null) : (c = e,
                    e = function (t, e, n) {
                        return c.call(Ct(t), n)
                    }
            )),
            e))
            for (; l < u; l++)
                e(t[l], n, s ? o : o.call(t[l], l, e(t[l], n)));
        return r ? t : c ? e.call(t) : u ? e(t[0], n) : a
    }
        , $t = /^-ms-/
        , jt = /-([a-z])/g
        , Wt = function (t) {
            return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
        };
    g.uid = 1,
        g.prototype = {
            cache: function (t) {
                var e = t[this.expando];
                return e || (e = {},
                    Wt(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                        value: e,
                        configurable: !0
                    }))),
                    e
            },
            set: function (t, e, n) {
                var i, o = this.cache(t);
                if ("string" == typeof e)
                    o[p(e)] = n;
                else
                    for (i in e)
                        o[p(i)] = e[i];
                return o
            },
            get: function (t, e) {
                return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][p(e)]
            },
            access: function (t, e, n) {
                return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n),
                    void 0 !== n ? n : e)
            },
            remove: function (t, e) {
                var n, i = t[this.expando];
                if (void 0 !== i) {
                    if (void 0 !== e) {
                        Array.isArray(e) ? e = e.map(p) : (e = p(e),
                            e = e in i ? [e] : e.match(Lt) || []),
                            n = e.length;
                        for (; n--;)
                            delete i[e[n]]
                    }
                    (void 0 === e || Ct.isEmptyObject(i)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
                }
            },
            hasData: function (t) {
                var e = t[this.expando];
                return void 0 !== e && !Ct.isEmptyObject(e)
            }
        };
    var Ht = new g
        , zt = new g
        , Bt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
        , qt = /[A-Z]/g;
    Ct.extend({
        hasData: function (t) {
            return zt.hasData(t) || Ht.hasData(t)
        },
        data: function (t, e, n) {
            return zt.access(t, e, n)
        },
        removeData: function (t, e) {
            zt.remove(t, e)
        },
        _data: function (t, e, n) {
            return Ht.access(t, e, n)
        },
        _removeData: function (t, e) {
            Ht.remove(t, e)
        }
    }),
        Ct.fn.extend({
            data: function (t, e) {
                var n, i, o, r = this[0], a = r && r.attributes;
                if (void 0 === t) {
                    if (this.length && (o = zt.get(r),
                        1 === r.nodeType && !Ht.get(r, "hasDataAttrs"))) {
                        for (n = a.length; n--;)
                            a[n] && (i = a[n].name,
                                0 === i.indexOf("data-") && (i = p(i.slice(5)),
                                    v(r, i, o[i])));
                        Ht.set(r, "hasDataAttrs", !0)
                    }
                    return o
                }
                return "object" == typeof t ? this.each(function () {
                    zt.set(this, t)
                }) : Ft(this, function (e) {
                    var n;
                    if (r && void 0 === e) {
                        if (void 0 !== (n = zt.get(r, t)))
                            return n;
                        if (void 0 !== (n = v(r, t)))
                            return n
                    } else
                        this.each(function () {
                            zt.set(this, t, e)
                        })
                }, null, e, arguments.length > 1, null, !0)
            },
            removeData: function (t) {
                return this.each(function () {
                    zt.remove(this, t)
                })
            }
        }),
        Ct.extend({
            queue: function (t, e, n) {
                var i;
                if (t)
                    return e = (e || "fx") + "queue",
                        i = Ht.get(t, e),
                        n && (!i || Array.isArray(n) ? i = Ht.access(t, e, Ct.makeArray(n)) : i.push(n)),
                        i || []
            },
            dequeue: function (t, e) {
                e = e || "fx";
                var n = Ct.queue(t, e)
                    , i = n.length
                    , o = n.shift()
                    , r = Ct._queueHooks(t, e)
                    , a = function () {
                        Ct.dequeue(t, e)
                    };
                "inprogress" === o && (o = n.shift(),
                    i--),
                    o && ("fx" === e && n.unshift("inprogress"),
                        delete r.stop,
                        o.call(t, a, r)),
                    !i && r && r.empty.fire()
            },
            _queueHooks: function (t, e) {
                var n = e + "queueHooks";
                return Ht.get(t, n) || Ht.access(t, n, {
                    empty: Ct.Callbacks("once memory").add(function () {
                        Ht.remove(t, [e + "queue", n])
                    })
                })
            }
        }),
        Ct.fn.extend({
            queue: function (t, e) {
                var n = 2;
                return "string" != typeof t && (e = t,
                    t = "fx",
                    n--),
                    arguments.length < n ? Ct.queue(this[0], t) : void 0 === e ? this : this.each(function () {
                        var n = Ct.queue(this, t, e);
                        Ct._queueHooks(this, t),
                            "fx" === t && "inprogress" !== n[0] && Ct.dequeue(this, t)
                    })
            },
            dequeue: function (t) {
                return this.each(function () {
                    Ct.dequeue(this, t)
                })
            },
            clearQueue: function (t) {
                return this.queue(t || "fx", [])
            },
            promise: function (t, e) {
                var n, i = 1, o = Ct.Deferred(), r = this, a = this.length, s = function () {
                    --i || o.resolveWith(r, [r])
                };
                for ("string" != typeof t && (e = t,
                    t = void 0),
                    t = t || "fx"; a--;)
                    (n = Ht.get(r[a], t + "queueHooks")) && n.empty && (i++,
                        n.empty.add(s));
                return s(),
                    o.promise(e)
            }
        });
    var Vt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
        , Ut = new RegExp("^(?:([+-])=|)(" + Vt + ")([a-z%]*)$", "i")
        , Yt = ["Top", "Right", "Bottom", "Left"]
        , Xt = lt.documentElement
        , Kt = function (t) {
            return Ct.contains(t.ownerDocument, t)
        }
        , Qt = {
            composed: !0
        };
    Xt.getRootNode && (Kt = function (t) {
        return Ct.contains(t.ownerDocument, t) || t.getRootNode(Qt) === t.ownerDocument
    }
    );
    var Gt = function (t, e) {
        return t = e || t,
            "none" === t.style.display || "" === t.style.display && Kt(t) && "none" === Ct.css(t, "display")
    }
        , Jt = function (t, e, n, i) {
            var o, r, a = {};
            for (r in e)
                a[r] = t.style[r],
                    t.style[r] = e[r];
            o = n.apply(t, i || []);
            for (r in e)
                t.style[r] = a[r];
            return o
        }
        , Zt = {};
    Ct.fn.extend({
        show: function () {
            return x(this, !0)
        },
        hide: function () {
            return x(this)
        },
        toggle: function (t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                Gt(this) ? Ct(this).show() : Ct(this).hide()
            })
        }
    });
    var te = /^(?:checkbox|radio)$/i
        , ee = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i
        , ne = /^$|^module$|\/(?:java|ecma)script/i
        , ie = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    ie.optgroup = ie.option,
        ie.tbody = ie.tfoot = ie.colgroup = ie.caption = ie.thead,
        ie.th = ie.td;
    var oe = /<|&#?\w+;/;
    !function () {
        var t = lt.createDocumentFragment()
            , e = t.appendChild(lt.createElement("div"))
            , n = lt.createElement("input");
        n.setAttribute("type", "radio"),
            n.setAttribute("checked", "checked"),
            n.setAttribute("name", "t"),
            e.appendChild(n),
            bt.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked,
            e.innerHTML = "<textarea>x</textarea>",
            bt.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var re = /^key/
        , ae = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
        , se = /^([^.]*)(?:\.(.+)|)/;
    Ct.event = {
        global: {},
        add: function (t, e, n, i, o) {
            var r, a, s, l, u, c, d, h, f, p, g, m = Ht.get(t);
            if (m)
                for (n.handler && (r = n,
                    n = r.handler,
                    o = r.selector),
                    o && Ct.find.matchesSelector(Xt, o),
                    n.guid || (n.guid = Ct.guid++),
                    (l = m.events) || (l = m.events = {}),
                    (a = m.handle) || (a = m.handle = function (e) {
                        return void 0 !== Ct && Ct.event.triggered !== e.type ? Ct.event.dispatch.apply(t, arguments) : void 0
                    }
                    ),
                    e = (e || "").match(Lt) || [""],
                    u = e.length; u--;)
                    s = se.exec(e[u]) || [],
                        f = g = s[1],
                        p = (s[2] || "").split(".").sort(),
                        f && (d = Ct.event.special[f] || {},
                            f = (o ? d.delegateType : d.bindType) || f,
                            d = Ct.event.special[f] || {},
                            c = Ct.extend({
                                type: f,
                                origType: g,
                                data: i,
                                handler: n,
                                guid: n.guid,
                                selector: o,
                                needsContext: o && Ct.expr.match.needsContext.test(o),
                                namespace: p.join(".")
                            }, r),
                            (h = l[f]) || (h = l[f] = [],
                                h.delegateCount = 0,
                                d.setup && !1 !== d.setup.call(t, i, p, a) || t.addEventListener && t.addEventListener(f, a)),
                            d.add && (d.add.call(t, c),
                                c.handler.guid || (c.handler.guid = n.guid)),
                            o ? h.splice(h.delegateCount++, 0, c) : h.push(c),
                            Ct.event.global[f] = !0)
        },
        remove: function (t, e, n, i, o) {
            var r, a, s, l, u, c, d, h, f, p, g, m = Ht.hasData(t) && Ht.get(t);
            if (m && (l = m.events)) {
                for (e = (e || "").match(Lt) || [""],
                    u = e.length; u--;)
                    if (s = se.exec(e[u]) || [],
                        f = g = s[1],
                        p = (s[2] || "").split(".").sort(),
                        f) {
                        for (d = Ct.event.special[f] || {},
                            f = (i ? d.delegateType : d.bindType) || f,
                            h = l[f] || [],
                            s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                            a = r = h.length; r--;)
                            c = h[r],
                                !o && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (h.splice(r, 1),
                                    c.selector && h.delegateCount--,
                                    d.remove && d.remove.call(t, c));
                        a && !h.length && (d.teardown && !1 !== d.teardown.call(t, p, m.handle) || Ct.removeEvent(t, f, m.handle),
                            delete l[f])
                    } else
                        for (f in l)
                            Ct.event.remove(t, f + e[u], n, i, !0);
                Ct.isEmptyObject(l) && Ht.remove(t, "handle events")
            }
        },
        dispatch: function (t) {
            var e, n, i, o, r, a, s = Ct.event.fix(t), l = new Array(arguments.length), u = (Ht.get(this, "events") || {})[s.type] || [], c = Ct.event.special[s.type] || {};
            for (l[0] = s,
                e = 1; e < arguments.length; e++)
                l[e] = arguments[e];
            if (s.delegateTarget = this,
                !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
                for (a = Ct.event.handlers.call(this, s, u),
                    e = 0; (o = a[e++]) && !s.isPropagationStopped();)
                    for (s.currentTarget = o.elem,
                        n = 0; (r = o.handlers[n++]) && !s.isImmediatePropagationStopped();)
                        s.rnamespace && !1 !== r.namespace && !s.rnamespace.test(r.namespace) || (s.handleObj = r,
                            s.data = r.data,
                            void 0 !== (i = ((Ct.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l)) && !1 === (s.result = i) && (s.preventDefault(),
                                s.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, s),
                    s.result
            }
        },
        handlers: function (t, e) {
            var n, i, o, r, a, s = [], l = e.delegateCount, u = t.target;
            if (l && u.nodeType && !("click" === t.type && t.button >= 1))
                for (; u !== this; u = u.parentNode || this)
                    if (1 === u.nodeType && ("click" !== t.type || !0 !== u.disabled)) {
                        for (r = [],
                            a = {},
                            n = 0; n < l; n++)
                            i = e[n],
                                o = i.selector + " ",
                                void 0 === a[o] && (a[o] = i.needsContext ? Ct(o, this).index(u) > -1 : Ct.find(o, this, null, [u]).length),
                                a[o] && r.push(i);
                        r.length && s.push({
                            elem: u,
                            handlers: r
                        })
                    }
            return u = this,
                l < e.length && s.push({
                    elem: u,
                    handlers: e.slice(l)
                }),
                s
        },
        addProp: function (t, e) {
            Object.defineProperty(Ct.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: xt(e) ? function () {
                    if (this.originalEvent)
                        return e(this.originalEvent)
                }
                    : function () {
                        if (this.originalEvent)
                            return this.originalEvent[t]
                    }
                ,
                set: function (e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function (t) {
            return t[Ct.expando] ? t : new Ct.Event(t)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function (t) {
                    var e = this || t;
                    return te.test(e.type) && e.click && r(e, "input") && D(e, "click", T),
                        !1
                },
                trigger: function (t) {
                    var e = this || t;
                    return te.test(e.type) && e.click && r(e, "input") && D(e, "click"),
                        !0
                },
                _default: function (t) {
                    var e = t.target;
                    return te.test(e.type) && e.click && r(e, "input") && Ht.get(e, "click") || r(e, "a")
                }
            },
            beforeunload: {
                postDispatch: function (t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        }
    },
        Ct.removeEvent = function (t, e, n) {
            t.removeEventListener && t.removeEventListener(e, n)
        }
        ,
        Ct.Event = function (t, e) {
            if (!(this instanceof Ct.Event))
                return new Ct.Event(t, e);
            t && t.type ? (this.originalEvent = t,
                this.type = t.type,
                this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? T : S,
                this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target,
                this.currentTarget = t.currentTarget,
                this.relatedTarget = t.relatedTarget) : this.type = t,
                e && Ct.extend(this, e),
                this.timeStamp = t && t.timeStamp || Date.now(),
                this[Ct.expando] = !0
        }
        ,
        Ct.Event.prototype = {
            constructor: Ct.Event,
            isDefaultPrevented: S,
            isPropagationStopped: S,
            isImmediatePropagationStopped: S,
            isSimulated: !1,
            preventDefault: function () {
                var t = this.originalEvent;
                this.isDefaultPrevented = T,
                    t && !this.isSimulated && t.preventDefault()
            },
            stopPropagation: function () {
                var t = this.originalEvent;
                this.isPropagationStopped = T,
                    t && !this.isSimulated && t.stopPropagation()
            },
            stopImmediatePropagation: function () {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = T,
                    t && !this.isSimulated && t.stopImmediatePropagation(),
                    this.stopPropagation()
            }
        },
        Ct.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function (t) {
                var e = t.button;
                return null == t.which && re.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && ae.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
            }
        }, Ct.event.addProp),
        Ct.each({
            focus: "focusin",
            blur: "focusout"
        }, function (t, e) {
            Ct.event.special[t] = {
                setup: function () {
                    return D(this, t, M),
                        !1
                },
                trigger: function () {
                    return D(this, t),
                        !0
                },
                delegateType: e
            }
        }),
        Ct.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function (t, e) {
            Ct.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function (t) {
                    var n, i = this, o = t.relatedTarget, r = t.handleObj;
                    return o && (o === i || Ct.contains(i, o)) || (t.type = r.origType,
                        n = r.handler.apply(this, arguments),
                        t.type = e),
                        n
                }
            }
        }),
        Ct.fn.extend({
            on: function (t, e, n, i) {
                return _(this, t, e, n, i)
            },
            one: function (t, e, n, i) {
                return _(this, t, e, n, i, 1)
            },
            off: function (t, e, n) {
                var i, o;
                if (t && t.preventDefault && t.handleObj)
                    return i = t.handleObj,
                        Ct(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler),
                        this;
                if ("object" == typeof t) {
                    for (o in t)
                        this.off(o, e, t[o]);
                    return this
                }
                return !1 !== e && "function" != typeof e || (n = e,
                    e = void 0),
                    !1 === n && (n = S),
                    this.each(function () {
                        Ct.event.remove(this, t, n, e)
                    })
            }
        });
    var le = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
        , ue = /<script|<style|<link/i
        , ce = /checked\s*(?:[^=]|=\s*.checked.)/i
        , de = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    Ct.extend({
        htmlPrefilter: function (t) {
            return t.replace(le, "<$1></$2>")
        },
        clone: function (t, e, n) {
            var i, o, r, a, s = t.cloneNode(!0), l = Kt(t);
            if (!(bt.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || Ct.isXMLDoc(t)))
                for (a = w(s),
                    r = w(t),
                    i = 0,
                    o = r.length; i < o; i++)
                    L(r[i], a[i]);
            if (e)
                if (n)
                    for (r = r || w(t),
                        a = a || w(s),
                        i = 0,
                        o = r.length; i < o; i++)
                        N(r[i], a[i]);
                else
                    N(t, s);
            return a = w(s, "script"),
                a.length > 0 && k(a, !l && w(t, "script")),
                s
        },
        cleanData: function (t) {
            for (var e, n, i, o = Ct.event.special, r = 0; void 0 !== (n = t[r]); r++)
                if (Wt(n)) {
                    if (e = n[Ht.expando]) {
                        if (e.events)
                            for (i in e.events)
                                o[i] ? Ct.event.remove(n, i) : Ct.removeEvent(n, i, e.handle);
                        n[Ht.expando] = void 0
                    }
                    n[zt.expando] && (n[zt.expando] = void 0)
                }
        }
    }),
        Ct.fn.extend({
            detach: function (t) {
                return R(this, t, !0)
            },
            remove: function (t) {
                return R(this, t)
            },
            text: function (t) {
                return Ft(this, function (t) {
                    return void 0 === t ? Ct.text(this) : this.empty().each(function () {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                    })
                }, null, t, arguments.length)
            },
            append: function () {
                return O(this, arguments, function (t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        P(this, t).appendChild(t)
                    }
                })
            },
            prepend: function () {
                return O(this, arguments, function (t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = P(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            },
            before: function () {
                return O(this, arguments, function (t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            },
            after: function () {
                return O(this, arguments, function (t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            },
            empty: function () {
                for (var t, e = 0; null != (t = this[e]); e++)
                    1 === t.nodeType && (Ct.cleanData(w(t, !1)),
                        t.textContent = "");
                return this
            },
            clone: function (t, e) {
                return t = null != t && t,
                    e = null == e ? t : e,
                    this.map(function () {
                        return Ct.clone(this, t, e)
                    })
            },
            html: function (t) {
                return Ft(this, function (t) {
                    var e = this[0] || {}
                        , n = 0
                        , i = this.length;
                    if (void 0 === t && 1 === e.nodeType)
                        return e.innerHTML;
                    if ("string" == typeof t && !ue.test(t) && !ie[(ee.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = Ct.htmlPrefilter(t);
                        try {
                            for (; n < i; n++)
                                e = this[n] || {},
                                    1 === e.nodeType && (Ct.cleanData(w(e, !1)),
                                        e.innerHTML = t);
                            e = 0
                        } catch (t) { }
                    }
                    e && this.empty().append(t)
                }, null, t, arguments.length)
            },
            replaceWith: function () {
                var t = [];
                return O(this, arguments, function (e) {
                    var n = this.parentNode;
                    Ct.inArray(this, t) < 0 && (Ct.cleanData(w(this)),
                        n && n.replaceChild(e, this))
                }, t)
            }
        }),
        Ct.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (t, e) {
            Ct.fn[t] = function (t) {
                for (var n, i = [], o = Ct(t), r = o.length - 1, a = 0; a <= r; a++)
                    n = a === r ? this : this.clone(!0),
                        Ct(o[a])[e](n),
                        ht.apply(i, n.get());
                return this.pushStack(i)
            }
        });
    var he = new RegExp("^(" + Vt + ")(?!px)[a-z%]+$", "i")
        , fe = function (e) {
            var n = e.ownerDocument.defaultView;
            return n && n.opener || (n = t),
                n.getComputedStyle(e)
        }
        , pe = new RegExp(Yt.join("|"), "i");
    !function () {
        function e() {
            if (u) {
                l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                    u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                    Xt.appendChild(l).appendChild(u);
                var e = t.getComputedStyle(u);
                i = "1%" !== e.top,
                    s = 12 === n(e.marginLeft),
                    u.style.right = "60%",
                    a = 36 === n(e.right),
                    o = 36 === n(e.width),
                    u.style.position = "absolute",
                    r = 12 === n(u.offsetWidth / 3),
                    Xt.removeChild(l),
                    u = null
            }
        }
        function n(t) {
            return Math.round(parseFloat(t))
        }
        var i, o, r, a, s, l = lt.createElement("div"), u = lt.createElement("div");
        u.style && (u.style.backgroundClip = "content-box",
            u.cloneNode(!0).style.backgroundClip = "",
            bt.clearCloneStyle = "content-box" === u.style.backgroundClip,
            Ct.extend(bt, {
                boxSizingReliable: function () {
                    return e(),
                        o
                },
                pixelBoxStyles: function () {
                    return e(),
                        a
                },
                pixelPosition: function () {
                    return e(),
                        i
                },
                reliableMarginLeft: function () {
                    return e(),
                        s
                },
                scrollboxSize: function () {
                    return e(),
                        r
                }
            }))
    }();
    var ge = ["Webkit", "Moz", "ms"]
        , me = lt.createElement("div").style
        , ve = {}
        , ye = /^(none|table(?!-c[ea]).+)/
        , be = /^--/
        , xe = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }
        , we = {
            letterSpacing: "0",
            fontWeight: "400"
        };
    Ct.extend({
        cssHooks: {
            opacity: {
                get: function (t, e) {
                    if (e) {
                        var n = F(t, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function (t, e, n, i) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var o, r, a, s = p(e), l = be.test(e), u = t.style;
                if (l || (e = W(s)),
                    a = Ct.cssHooks[e] || Ct.cssHooks[s],
                    void 0 === n)
                    return a && "get" in a && void 0 !== (o = a.get(t, !1, i)) ? o : u[e];
                r = typeof n,
                    "string" === r && (o = Ut.exec(n)) && o[1] && (n = y(t, e, o),
                        r = "number"),
                    null != n && n === n && ("number" !== r || l || (n += o && o[3] || (Ct.cssNumber[s] ? "" : "px")),
                        bt.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (u[e] = "inherit"),
                        a && "set" in a && void 0 === (n = a.set(t, n, i)) || (l ? u.setProperty(e, n) : u[e] = n))
            }
        },
        css: function (t, e, n, i) {
            var o, r, a, s = p(e);
            return be.test(e) || (e = W(s)),
                a = Ct.cssHooks[e] || Ct.cssHooks[s],
                a && "get" in a && (o = a.get(t, !0, n)),
                void 0 === o && (o = F(t, e, i)),
                "normal" === o && e in we && (o = we[e]),
                "" === n || n ? (r = parseFloat(o),
                    !0 === n || isFinite(r) ? r || 0 : o) : o
        }
    }),
        Ct.each(["height", "width"], function (t, e) {
            Ct.cssHooks[e] = {
                get: function (t, n, i) {
                    if (n)
                        return !ye.test(Ct.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? B(t, e, i) : Jt(t, xe, function () {
                            return B(t, e, i)
                        })
                },
                set: function (t, n, i) {
                    var o, r = fe(t), a = !bt.scrollboxSize() && "absolute" === r.position, s = a || i, l = s && "border-box" === Ct.css(t, "boxSizing", !1, r), u = i ? z(t, e, i, l, r) : 0;
                    return l && a && (u -= Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - parseFloat(r[e]) - z(t, e, "border", !1, r) - .5)),
                        u && (o = Ut.exec(n)) && "px" !== (o[3] || "px") && (t.style[e] = n,
                            n = Ct.css(t, e)),
                        H(t, n, u)
                }
            }
        }),
        Ct.cssHooks.marginLeft = $(bt.reliableMarginLeft, function (t, e) {
            if (e)
                return (parseFloat(F(t, "marginLeft")) || t.getBoundingClientRect().left - Jt(t, {
                    marginLeft: 0
                }, function () {
                    return t.getBoundingClientRect().left
                })) + "px"
        }),
        Ct.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function (t, e) {
            Ct.cssHooks[t + e] = {
                expand: function (n) {
                    for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++)
                        o[t + Yt[i] + e] = r[i] || r[i - 2] || r[0];
                    return o
                }
            },
                "margin" !== t && (Ct.cssHooks[t + e].set = H)
        }),
        Ct.fn.extend({
            css: function (t, e) {
                return Ft(this, function (t, e, n) {
                    var i, o, r = {}, a = 0;
                    if (Array.isArray(e)) {
                        for (i = fe(t),
                            o = e.length; a < o; a++)
                            r[e[a]] = Ct.css(t, e[a], !1, i);
                        return r
                    }
                    return void 0 !== n ? Ct.style(t, e, n) : Ct.css(t, e)
                }, t, e, arguments.length > 1)
            }
        }),
        Ct.Tween = q,
        q.prototype = {
            constructor: q,
            init: function (t, e, n, i, o, r) {
                this.elem = t,
                    this.prop = n,
                    this.easing = o || Ct.easing._default,
                    this.options = e,
                    this.start = this.now = this.cur(),
                    this.end = i,
                    this.unit = r || (Ct.cssNumber[n] ? "" : "px")
            },
            cur: function () {
                var t = q.propHooks[this.prop];
                return t && t.get ? t.get(this) : q.propHooks._default.get(this)
            },
            run: function (t) {
                var e, n = q.propHooks[this.prop];
                return this.options.duration ? this.pos = e = Ct.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t,
                    this.now = (this.end - this.start) * e + this.start,
                    this.options.step && this.options.step.call(this.elem, this.now, this),
                    n && n.set ? n.set(this) : q.propHooks._default.set(this),
                    this
            }
        },
        q.prototype.init.prototype = q.prototype,
        q.propHooks = {
            _default: {
                get: function (t) {
                    var e;
                    return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = Ct.css(t.elem, t.prop, ""),
                        e && "auto" !== e ? e : 0)
                },
                set: function (t) {
                    Ct.fx.step[t.prop] ? Ct.fx.step[t.prop](t) : 1 !== t.elem.nodeType || !Ct.cssHooks[t.prop] && null == t.elem.style[W(t.prop)] ? t.elem[t.prop] = t.now : Ct.style(t.elem, t.prop, t.now + t.unit)
                }
            }
        },
        q.propHooks.scrollTop = q.propHooks.scrollLeft = {
            set: function (t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        },
        Ct.easing = {
            linear: function (t) {
                return t
            },
            swing: function (t) {
                return .5 - Math.cos(t * Math.PI) / 2
            },
            _default: "swing"
        },
        Ct.fx = q.prototype.init,
        Ct.fx.step = {};
    var ke, Ce, Te = /^(?:toggle|show|hide)$/, Se = /queueHooks$/;
    Ct.Animation = Ct.extend(G, {
        tweeners: {
            "*": [function (t, e) {
                var n = this.createTween(t, e);
                return y(n.elem, t, Ut.exec(e), n),
                    n
            }
            ]
        },
        tweener: function (t, e) {
            xt(t) ? (e = t,
                t = ["*"]) : t = t.match(Lt);
            for (var n, i = 0, o = t.length; i < o; i++)
                n = t[i],
                    G.tweeners[n] = G.tweeners[n] || [],
                    G.tweeners[n].unshift(e)
        },
        prefilters: [K],
        prefilter: function (t, e) {
            e ? G.prefilters.unshift(t) : G.prefilters.push(t)
        }
    }),
        Ct.speed = function (t, e, n) {
            var i = t && "object" == typeof t ? Ct.extend({}, t) : {
                complete: n || !n && e || xt(t) && t,
                duration: t,
                easing: n && e || e && !xt(e) && e
            };
            return Ct.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in Ct.fx.speeds ? i.duration = Ct.fx.speeds[i.duration] : i.duration = Ct.fx.speeds._default),
                null != i.queue && !0 !== i.queue || (i.queue = "fx"),
                i.old = i.complete,
                i.complete = function () {
                    xt(i.old) && i.old.call(this),
                        i.queue && Ct.dequeue(this, i.queue)
                }
                ,
                i
        }
        ,
        Ct.fn.extend({
            fadeTo: function (t, e, n, i) {
                return this.filter(Gt).css("opacity", 0).show().end().animate({
                    opacity: e
                }, t, n, i)
            },
            animate: function (t, e, n, i) {
                var o = Ct.isEmptyObject(t)
                    , r = Ct.speed(e, n, i)
                    , a = function () {
                        var e = G(this, Ct.extend({}, t), r);
                        (o || Ht.get(this, "finish")) && e.stop(!0)
                    };
                return a.finish = a,
                    o || !1 === r.queue ? this.each(a) : this.queue(r.queue, a)
            },
            stop: function (t, e, n) {
                var i = function (t) {
                    var e = t.stop;
                    delete t.stop,
                        e(n)
                };
                return "string" != typeof t && (n = e,
                    e = t,
                    t = void 0),
                    e && !1 !== t && this.queue(t || "fx", []),
                    this.each(function () {
                        var e = !0
                            , o = null != t && t + "queueHooks"
                            , r = Ct.timers
                            , a = Ht.get(this);
                        if (o)
                            a[o] && a[o].stop && i(a[o]);
                        else
                            for (o in a)
                                a[o] && a[o].stop && Se.test(o) && i(a[o]);
                        for (o = r.length; o--;)
                            r[o].elem !== this || null != t && r[o].queue !== t || (r[o].anim.stop(n),
                                e = !1,
                                r.splice(o, 1));
                        !e && n || Ct.dequeue(this, t)
                    })
            },
            finish: function (t) {
                return !1 !== t && (t = t || "fx"),
                    this.each(function () {
                        var e, n = Ht.get(this), i = n[t + "queue"], o = n[t + "queueHooks"], r = Ct.timers, a = i ? i.length : 0;
                        for (n.finish = !0,
                            Ct.queue(this, t, []),
                            o && o.stop && o.stop.call(this, !0),
                            e = r.length; e--;)
                            r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0),
                                r.splice(e, 1));
                        for (e = 0; e < a; e++)
                            i[e] && i[e].finish && i[e].finish.call(this);
                        delete n.finish
                    })
            }
        }),
        Ct.each(["toggle", "show", "hide"], function (t, e) {
            var n = Ct.fn[e];
            Ct.fn[e] = function (t, i, o) {
                return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(Y(e, !0), t, i, o)
            }
        }),
        Ct.each({
            slideDown: Y("show"),
            slideUp: Y("hide"),
            slideToggle: Y("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function (t, e) {
            Ct.fn[t] = function (t, n, i) {
                return this.animate(e, t, n, i)
            }
        }),
        Ct.timers = [],
        Ct.fx.tick = function () {
            var t, e = 0, n = Ct.timers;
            for (ke = Date.now(); e < n.length; e++)
                (t = n[e])() || n[e] !== t || n.splice(e--, 1);
            n.length || Ct.fx.stop(),
                ke = void 0
        }
        ,
        Ct.fx.timer = function (t) {
            Ct.timers.push(t),
                Ct.fx.start()
        }
        ,
        Ct.fx.interval = 13,
        Ct.fx.start = function () {
            Ce || (Ce = !0,
                V())
        }
        ,
        Ct.fx.stop = function () {
            Ce = null
        }
        ,
        Ct.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        },
        Ct.fn.delay = function (e, n) {
            return e = Ct.fx ? Ct.fx.speeds[e] || e : e,
                n = n || "fx",
                this.queue(n, function (n, i) {
                    var o = t.setTimeout(n, e);
                    i.stop = function () {
                        t.clearTimeout(o)
                    }
                })
        }
        ,
        function () {
            var t = lt.createElement("input")
                , e = lt.createElement("select")
                , n = e.appendChild(lt.createElement("option"));
            t.type = "checkbox",
                bt.checkOn = "" !== t.value,
                bt.optSelected = n.selected,
                t = lt.createElement("input"),
                t.value = "t",
                t.type = "radio",
                bt.radioValue = "t" === t.value
        }();
    var Me, Ae = Ct.expr.attrHandle;
    Ct.fn.extend({
        attr: function (t, e) {
            return Ft(this, Ct.attr, t, e, arguments.length > 1)
        },
        removeAttr: function (t) {
            return this.each(function () {
                Ct.removeAttr(this, t)
            })
        }
    }),
        Ct.extend({
            attr: function (t, e, n) {
                var i, o, r = t.nodeType;
                if (3 !== r && 8 !== r && 2 !== r)
                    return void 0 === t.getAttribute ? Ct.prop(t, e, n) : (1 === r && Ct.isXMLDoc(t) || (o = Ct.attrHooks[e.toLowerCase()] || (Ct.expr.match.bool.test(e) ? Me : void 0)),
                        void 0 !== n ? null === n ? void Ct.removeAttr(t, e) : o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : (t.setAttribute(e, n + ""),
                            n) : o && "get" in o && null !== (i = o.get(t, e)) ? i : (i = Ct.find.attr(t, e),
                                null == i ? void 0 : i))
            },
            attrHooks: {
                type: {
                    set: function (t, e) {
                        if (!bt.radioValue && "radio" === e && r(t, "input")) {
                            var n = t.value;
                            return t.setAttribute("type", e),
                                n && (t.value = n),
                                e
                        }
                    }
                }
            },
            removeAttr: function (t, e) {
                var n, i = 0, o = e && e.match(Lt);
                if (o && 1 === t.nodeType)
                    for (; n = o[i++];)
                        t.removeAttribute(n)
            }
        }),
        Me = {
            set: function (t, e, n) {
                return !1 === e ? Ct.removeAttr(t, n) : t.setAttribute(n, n),
                    n
            }
        },
        Ct.each(Ct.expr.match.bool.source.match(/\w+/g), function (t, e) {
            var n = Ae[e] || Ct.find.attr;
            Ae[e] = function (t, e, i) {
                var o, r, a = e.toLowerCase();
                return i || (r = Ae[a],
                    Ae[a] = o,
                    o = null != n(t, e, i) ? a : null,
                    Ae[a] = r),
                    o
            }
        });
    var _e = /^(?:input|select|textarea|button)$/i
        , De = /^(?:a|area)$/i;
    Ct.fn.extend({
        prop: function (t, e) {
            return Ft(this, Ct.prop, t, e, arguments.length > 1)
        },
        removeProp: function (t) {
            return this.each(function () {
                delete this[Ct.propFix[t] || t]
            })
        }
    }),
        Ct.extend({
            prop: function (t, e, n) {
                var i, o, r = t.nodeType;
                if (3 !== r && 8 !== r && 2 !== r)
                    return 1 === r && Ct.isXMLDoc(t) || (e = Ct.propFix[e] || e,
                        o = Ct.propHooks[e]),
                        void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : t[e] = n : o && "get" in o && null !== (i = o.get(t, e)) ? i : t[e]
            },
            propHooks: {
                tabIndex: {
                    get: function (t) {
                        var e = Ct.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : _e.test(t.nodeName) || De.test(t.nodeName) && t.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }),
        bt.optSelected || (Ct.propHooks.selected = {
            get: function (t) {
                var e = t.parentNode;
                return e && e.parentNode && e.parentNode.selectedIndex,
                    null
            },
            set: function (t) {
                var e = t.parentNode;
                e && (e.selectedIndex,
                    e.parentNode && e.parentNode.selectedIndex)
            }
        }),
        Ct.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            Ct.propFix[this.toLowerCase()] = this
        }),
        Ct.fn.extend({
            addClass: function (t) {
                var e, n, i, o, r, a, s, l = 0;
                if (xt(t))
                    return this.each(function (e) {
                        Ct(this).addClass(t.call(this, e, Z(this)))
                    });
                if (e = tt(t),
                    e.length)
                    for (; n = this[l++];)
                        if (o = Z(n),
                            i = 1 === n.nodeType && " " + J(o) + " ") {
                            for (a = 0; r = e[a++];)
                                i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                            s = J(i),
                                o !== s && n.setAttribute("class", s)
                        }
                return this
            },
            removeClass: function (t) {
                var e, n, i, o, r, a, s, l = 0;
                if (xt(t))
                    return this.each(function (e) {
                        Ct(this).removeClass(t.call(this, e, Z(this)))
                    });
                if (!arguments.length)
                    return this.attr("class", "");
                if (e = tt(t),
                    e.length)
                    for (; n = this[l++];)
                        if (o = Z(n),
                            i = 1 === n.nodeType && " " + J(o) + " ") {
                            for (a = 0; r = e[a++];)
                                for (; i.indexOf(" " + r + " ") > -1;)
                                    i = i.replace(" " + r + " ", " ");
                            s = J(i),
                                o !== s && n.setAttribute("class", s)
                        }
                return this
            },
            toggleClass: function (t, e) {
                var n = typeof t
                    , i = "string" === n || Array.isArray(t);
                return "boolean" == typeof e && i ? e ? this.addClass(t) : this.removeClass(t) : xt(t) ? this.each(function (n) {
                    Ct(this).toggleClass(t.call(this, n, Z(this), e), e)
                }) : this.each(function () {
                    var e, o, r, a;
                    if (i)
                        for (o = 0,
                            r = Ct(this),
                            a = tt(t); e = a[o++];)
                            r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
                    else
                        void 0 !== t && "boolean" !== n || (e = Z(this),
                            e && Ht.set(this, "__className__", e),
                            this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : Ht.get(this, "__className__") || ""))
                })
            },
            hasClass: function (t) {
                var e, n, i = 0;
                for (e = " " + t + " "; n = this[i++];)
                    if (1 === n.nodeType && (" " + J(Z(n)) + " ").indexOf(e) > -1)
                        return !0;
                return !1
            }
        });
    var Pe = /\r/g;
    Ct.fn.extend({
        val: function (t) {
            var e, n, i, o = this[0];
            {
                if (arguments.length)
                    return i = xt(t),
                        this.each(function (n) {
                            var o;
                            1 === this.nodeType && (o = i ? t.call(this, n, Ct(this).val()) : t,
                                null == o ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = Ct.map(o, function (t) {
                                    return null == t ? "" : t + ""
                                })),
                                (e = Ct.valHooks[this.type] || Ct.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, o, "value") || (this.value = o))
                        });
                if (o)
                    return (e = Ct.valHooks[o.type] || Ct.valHooks[o.nodeName.toLowerCase()]) && "get" in e && void 0 !== (n = e.get(o, "value")) ? n : (n = o.value,
                        "string" == typeof n ? n.replace(Pe, "") : null == n ? "" : n)
            }
        }
    }),
        Ct.extend({
            valHooks: {
                option: {
                    get: function (t) {
                        var e = Ct.find.attr(t, "value");
                        return null != e ? e : J(Ct.text(t))
                    }
                },
                select: {
                    get: function (t) {
                        var e, n, i, o = t.options, a = t.selectedIndex, s = "select-one" === t.type, l = s ? null : [], u = s ? a + 1 : o.length;
                        for (i = a < 0 ? u : s ? a : 0; i < u; i++)
                            if (n = o[i],
                                (n.selected || i === a) && !n.disabled && (!n.parentNode.disabled || !r(n.parentNode, "optgroup"))) {
                                if (e = Ct(n).val(),
                                    s)
                                    return e;
                                l.push(e)
                            }
                        return l
                    },
                    set: function (t, e) {
                        for (var n, i, o = t.options, r = Ct.makeArray(e), a = o.length; a--;)
                            i = o[a],
                                (i.selected = Ct.inArray(Ct.valHooks.option.get(i), r) > -1) && (n = !0);
                        return n || (t.selectedIndex = -1),
                            r
                    }
                }
            }
        }),
        Ct.each(["radio", "checkbox"], function () {
            Ct.valHooks[this] = {
                set: function (t, e) {
                    if (Array.isArray(e))
                        return t.checked = Ct.inArray(Ct(t).val(), e) > -1
                }
            },
                bt.checkOn || (Ct.valHooks[this].get = function (t) {
                    return null === t.getAttribute("value") ? "on" : t.value
                }
                )
        }),
        bt.focusin = "onfocusin" in t;
    var Ie = /^(?:focusinfocus|focusoutblur)$/
        , Ee = function (t) {
            t.stopPropagation()
        };
    Ct.extend(Ct.event, {
        trigger: function (e, n, i, o) {
            var r, a, s, l, u, c, d, h, f = [i || lt], p = mt.call(e, "type") ? e.type : e, g = mt.call(e, "namespace") ? e.namespace.split(".") : [];
            if (a = h = s = i = i || lt,
                3 !== i.nodeType && 8 !== i.nodeType && !Ie.test(p + Ct.event.triggered) && (p.indexOf(".") > -1 && (g = p.split("."),
                    p = g.shift(),
                    g.sort()),
                    u = p.indexOf(":") < 0 && "on" + p,
                    e = e[Ct.expando] ? e : new Ct.Event(p, "object" == typeof e && e),
                    e.isTrigger = o ? 2 : 3,
                    e.namespace = g.join("."),
                    e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                    e.result = void 0,
                    e.target || (e.target = i),
                    n = null == n ? [e] : Ct.makeArray(n, [e]),
                    d = Ct.event.special[p] || {},
                    o || !d.trigger || !1 !== d.trigger.apply(i, n))) {
                if (!o && !d.noBubble && !wt(i)) {
                    for (l = d.delegateType || p,
                        Ie.test(l + p) || (a = a.parentNode); a; a = a.parentNode)
                        f.push(a),
                            s = a;
                    s === (i.ownerDocument || lt) && f.push(s.defaultView || s.parentWindow || t)
                }
                for (r = 0; (a = f[r++]) && !e.isPropagationStopped();)
                    h = a,
                        e.type = r > 1 ? l : d.bindType || p,
                        c = (Ht.get(a, "events") || {})[e.type] && Ht.get(a, "handle"),
                        c && c.apply(a, n),
                        (c = u && a[u]) && c.apply && Wt(a) && (e.result = c.apply(a, n),
                            !1 === e.result && e.preventDefault());
                return e.type = p,
                    o || e.isDefaultPrevented() || d._default && !1 !== d._default.apply(f.pop(), n) || !Wt(i) || u && xt(i[p]) && !wt(i) && (s = i[u],
                        s && (i[u] = null),
                        Ct.event.triggered = p,
                        e.isPropagationStopped() && h.addEventListener(p, Ee),
                        i[p](),
                        e.isPropagationStopped() && h.removeEventListener(p, Ee),
                        Ct.event.triggered = void 0,
                        s && (i[u] = s)),
                    e.result
            }
        },
        simulate: function (t, e, n) {
            var i = Ct.extend(new Ct.Event, n, {
                type: t,
                isSimulated: !0
            });
            Ct.event.trigger(i, null, e)
        }
    }),
        Ct.fn.extend({
            trigger: function (t, e) {
                return this.each(function () {
                    Ct.event.trigger(t, e, this)
                })
            },
            triggerHandler: function (t, e) {
                var n = this[0];
                if (n)
                    return Ct.event.trigger(t, e, n, !0)
            }
        }),
        bt.focusin || Ct.each({
            focus: "focusin",
            blur: "focusout"
        }, function (t, e) {
            var n = function (t) {
                Ct.event.simulate(e, t.target, Ct.event.fix(t))
            };
            Ct.event.special[e] = {
                setup: function () {
                    var i = this.ownerDocument || this
                        , o = Ht.access(i, e);
                    o || i.addEventListener(t, n, !0),
                        Ht.access(i, e, (o || 0) + 1)
                },
                teardown: function () {
                    var i = this.ownerDocument || this
                        , o = Ht.access(i, e) - 1;
                    o ? Ht.access(i, e, o) : (i.removeEventListener(t, n, !0),
                        Ht.remove(i, e))
                }
            }
        });
    var Ne = t.location
        , Le = Date.now()
        , Oe = /\?/;
    Ct.parseXML = function (e) {
        var n;
        if (!e || "string" != typeof e)
            return null;
        try {
            n = (new t.DOMParser).parseFromString(e, "text/xml")
        } catch (t) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || Ct.error("Invalid XML: " + e),
            n
    }
        ;
    var Re = /\[\]$/
        , Fe = /\r?\n/g
        , $e = /^(?:submit|button|image|reset|file)$/i
        , je = /^(?:input|select|textarea|keygen)/i;
    Ct.param = function (t, e) {
        var n, i = [], o = function (t, e) {
            var n = xt(e) ? e() : e;
            i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (null == t)
            return "";
        if (Array.isArray(t) || t.jquery && !Ct.isPlainObject(t))
            Ct.each(t, function () {
                o(this.name, this.value)
            });
        else
            for (n in t)
                et(n, t[n], e, o);
        return i.join("&")
    }
        ,
        Ct.fn.extend({
            serialize: function () {
                return Ct.param(this.serializeArray())
            },
            serializeArray: function () {
                return this.map(function () {
                    var t = Ct.prop(this, "elements");
                    return t ? Ct.makeArray(t) : this
                }).filter(function () {
                    var t = this.type;
                    return this.name && !Ct(this).is(":disabled") && je.test(this.nodeName) && !$e.test(t) && (this.checked || !te.test(t))
                }).map(function (t, e) {
                    var n = Ct(this).val();
                    return null == n ? null : Array.isArray(n) ? Ct.map(n, function (t) {
                        return {
                            name: e.name,
                            value: t.replace(Fe, "\r\n")
                        }
                    }) : {
                        name: e.name,
                        value: n.replace(Fe, "\r\n")
                    }
                }).get()
            }
        });
    var We = /%20/g
        , He = /#.*$/
        , ze = /([?&])_=[^&]*/
        , Be = /^(.*?):[ \t]*([^\r\n]*)$/gm
        , qe = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
        , Ve = /^(?:GET|HEAD)$/
        , Ue = /^\/\//
        , Ye = {}
        , Xe = {}
        , Ke = "*/".concat("*")
        , Qe = lt.createElement("a");
    Qe.href = Ne.href,
        Ct.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Ne.href,
                type: "GET",
                isLocal: qe.test(Ne.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Ke,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": Ct.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function (t, e) {
                return e ? ot(ot(t, Ct.ajaxSettings), e) : ot(Ct.ajaxSettings, t)
            },
            ajaxPrefilter: nt(Ye),
            ajaxTransport: nt(Xe),
            ajax: function (e, n) {
                function i(e, n, i, s) {
                    var u, h, f, x, w, k = n;
                    c || (c = !0,
                        l && t.clearTimeout(l),
                        o = void 0,
                        a = s || "",
                        C.readyState = e > 0 ? 4 : 0,
                        u = e >= 200 && e < 300 || 304 === e,
                        i && (x = rt(p, C, i)),
                        x = at(p, x, C, u),
                        u ? (p.ifModified && (w = C.getResponseHeader("Last-Modified"),
                            w && (Ct.lastModified[r] = w),
                            (w = C.getResponseHeader("etag")) && (Ct.etag[r] = w)),
                            204 === e || "HEAD" === p.type ? k = "nocontent" : 304 === e ? k = "notmodified" : (k = x.state,
                                h = x.data,
                                f = x.error,
                                u = !f)) : (f = k,
                                    !e && k || (k = "error",
                                        e < 0 && (e = 0))),
                        C.status = e,
                        C.statusText = (n || k) + "",
                        u ? v.resolveWith(g, [h, k, C]) : v.rejectWith(g, [C, k, f]),
                        C.statusCode(b),
                        b = void 0,
                        d && m.trigger(u ? "ajaxSuccess" : "ajaxError", [C, p, u ? h : f]),
                        y.fireWith(g, [C, k]),
                        d && (m.trigger("ajaxComplete", [C, p]),
                            --Ct.active || Ct.event.trigger("ajaxStop")))
                }
                "object" == typeof e && (n = e,
                    e = void 0),
                    n = n || {};
                var o, r, a, s, l, u, c, d, h, f, p = Ct.ajaxSetup({}, n), g = p.context || p, m = p.context && (g.nodeType || g.jquery) ? Ct(g) : Ct.event, v = Ct.Deferred(), y = Ct.Callbacks("once memory"), b = p.statusCode || {}, x = {}, w = {}, k = "canceled", C = {
                    readyState: 0,
                    getResponseHeader: function (t) {
                        var e;
                        if (c) {
                            if (!s)
                                for (s = {}; e = Be.exec(a);)
                                    s[e[1].toLowerCase() + " "] = (s[e[1].toLowerCase() + " "] || []).concat(e[2]);
                            e = s[t.toLowerCase() + " "]
                        }
                        return null == e ? null : e.join(", ")
                    },
                    getAllResponseHeaders: function () {
                        return c ? a : null
                    },
                    setRequestHeader: function (t, e) {
                        return null == c && (t = w[t.toLowerCase()] = w[t.toLowerCase()] || t,
                            x[t] = e),
                            this
                    },
                    overrideMimeType: function (t) {
                        return null == c && (p.mimeType = t),
                            this
                    },
                    statusCode: function (t) {
                        var e;
                        if (t)
                            if (c)
                                C.always(t[C.status]);
                            else
                                for (e in t)
                                    b[e] = [b[e], t[e]];
                        return this
                    },
                    abort: function (t) {
                        var e = t || k;
                        return o && o.abort(e),
                            i(0, e),
                            this
                    }
                };
                if (v.promise(C),
                    p.url = ((e || p.url || Ne.href) + "").replace(Ue, Ne.protocol + "//"),
                    p.type = n.method || n.type || p.method || p.type,
                    p.dataTypes = (p.dataType || "*").toLowerCase().match(Lt) || [""],
                    null == p.crossDomain) {
                    u = lt.createElement("a");
                    try {
                        u.href = p.url,
                            u.href = u.href,
                            p.crossDomain = Qe.protocol + "//" + Qe.host != u.protocol + "//" + u.host
                    } catch (t) {
                        p.crossDomain = !0
                    }
                }
                if (p.data && p.processData && "string" != typeof p.data && (p.data = Ct.param(p.data, p.traditional)),
                    it(Ye, p, n, C),
                    c)
                    return C;
                d = Ct.event && p.global,
                    d && 0 == Ct.active++ && Ct.event.trigger("ajaxStart"),
                    p.type = p.type.toUpperCase(),
                    p.hasContent = !Ve.test(p.type),
                    r = p.url.replace(He, ""),
                    p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(We, "+")) : (f = p.url.slice(r.length),
                        p.data && (p.processData || "string" == typeof p.data) && (r += (Oe.test(r) ? "&" : "?") + p.data,
                            delete p.data),
                        !1 === p.cache && (r = r.replace(ze, "$1"),
                            f = (Oe.test(r) ? "&" : "?") + "_=" + Le++ + f),
                        p.url = r + f),
                    p.ifModified && (Ct.lastModified[r] && C.setRequestHeader("If-Modified-Since", Ct.lastModified[r]),
                        Ct.etag[r] && C.setRequestHeader("If-None-Match", Ct.etag[r])),
                    (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && C.setRequestHeader("Content-Type", p.contentType),
                    C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Ke + "; q=0.01" : "") : p.accepts["*"]);
                for (h in p.headers)
                    C.setRequestHeader(h, p.headers[h]);
                if (p.beforeSend && (!1 === p.beforeSend.call(g, C, p) || c))
                    return C.abort();
                if (k = "abort",
                    y.add(p.complete),
                    C.done(p.success),
                    C.fail(p.error),
                    o = it(Xe, p, n, C)) {
                    if (C.readyState = 1,
                        d && m.trigger("ajaxSend", [C, p]),
                        c)
                        return C;
                    p.async && p.timeout > 0 && (l = t.setTimeout(function () {
                        C.abort("timeout")
                    }, p.timeout));
                    try {
                        c = !1,
                            o.send(x, i)
                    } catch (t) {
                        if (c)
                            throw t;
                        i(-1, t)
                    }
                } else
                    i(-1, "No Transport");
                return C
            },
            getJSON: function (t, e, n) {
                return Ct.get(t, e, n, "json")
            },
            getScript: function (t, e) {
                return Ct.get(t, void 0, e, "script")
            }
        }),
        Ct.each(["get", "post"], function (t, e) {
            Ct[e] = function (t, n, i, o) {
                return xt(n) && (o = o || i,
                    i = n,
                    n = void 0),
                    Ct.ajax(Ct.extend({
                        url: t,
                        type: e,
                        dataType: o,
                        data: n,
                        success: i
                    }, Ct.isPlainObject(t) && t))
            }
        }),
        Ct._evalUrl = function (t, e) {
            return Ct.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: {
                    "text script": function () { }
                },
                dataFilter: function (t) {
                    Ct.globalEval(t, e)
                }
            })
        }
        ,
        Ct.fn.extend({
            wrapAll: function (t) {
                var e;
                return this[0] && (xt(t) && (t = t.call(this[0])),
                    e = Ct(t, this[0].ownerDocument).eq(0).clone(!0),
                    this[0].parentNode && e.insertBefore(this[0]),
                    e.map(function () {
                        for (var t = this; t.firstElementChild;)
                            t = t.firstElementChild;
                        return t
                    }).append(this)),
                    this
            },
            wrapInner: function (t) {
                return xt(t) ? this.each(function (e) {
                    Ct(this).wrapInner(t.call(this, e))
                }) : this.each(function () {
                    var e = Ct(this)
                        , n = e.contents();
                    n.length ? n.wrapAll(t) : e.append(t)
                })
            },
            wrap: function (t) {
                var e = xt(t);
                return this.each(function (n) {
                    Ct(this).wrapAll(e ? t.call(this, n) : t)
                })
            },
            unwrap: function (t) {
                return this.parent(t).not("body").each(function () {
                    Ct(this).replaceWith(this.childNodes)
                }),
                    this
            }
        }),
        Ct.expr.pseudos.hidden = function (t) {
            return !Ct.expr.pseudos.visible(t)
        }
        ,
        Ct.expr.pseudos.visible = function (t) {
            return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
        }
        ,
        Ct.ajaxSettings.xhr = function () {
            try {
                return new t.XMLHttpRequest
            } catch (t) { }
        }
        ;
    var Ge = {
        0: 200,
        1223: 204
    }
        , Je = Ct.ajaxSettings.xhr();
    bt.cors = !!Je && "withCredentials" in Je,
        bt.ajax = Je = !!Je,
        Ct.ajaxTransport(function (e) {
            var n, i;
            if (bt.cors || Je && !e.crossDomain)
                return {
                    send: function (o, r) {
                        var a, s = e.xhr();
                        if (s.open(e.type, e.url, e.async, e.username, e.password),
                            e.xhrFields)
                            for (a in e.xhrFields)
                                s[a] = e.xhrFields[a];
                        e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType),
                            e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
                        for (a in o)
                            s.setRequestHeader(a, o[a]);
                        n = function (t) {
                            return function () {
                                n && (n = i = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null,
                                    "abort" === t ? s.abort() : "error" === t ? "number" != typeof s.status ? r(0, "error") : r(s.status, s.statusText) : r(Ge[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                        binary: s.response
                                    } : {
                                        text: s.responseText
                                    }, s.getAllResponseHeaders()))
                            }
                        }
                            ,
                            s.onload = n(),
                            i = s.onerror = s.ontimeout = n("error"),
                            void 0 !== s.onabort ? s.onabort = i : s.onreadystatechange = function () {
                                4 === s.readyState && t.setTimeout(function () {
                                    n && i()
                                })
                            }
                            ,
                            n = n("abort");
                        try {
                            s.send(e.hasContent && e.data || null)
                        } catch (t) {
                            if (n)
                                throw t
                        }
                    },
                    abort: function () {
                        n && n()
                    }
                }
        }),
        Ct.ajaxPrefilter(function (t) {
            t.crossDomain && (t.contents.script = !1)
        }),
        Ct.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function (t) {
                    return Ct.globalEval(t),
                        t
                }
            }
        }),
        Ct.ajaxPrefilter("script", function (t) {
            void 0 === t.cache && (t.cache = !1),
                t.crossDomain && (t.type = "GET")
        }),
        Ct.ajaxTransport("script", function (t) {
            if (t.crossDomain || t.scriptAttrs) {
                var e, n;
                return {
                    send: function (i, o) {
                        e = Ct("<script>").attr(t.scriptAttrs || {}).prop({
                            charset: t.scriptCharset,
                            src: t.url
                        }).on("load error", n = function (t) {
                            e.remove(),
                                n = null,
                                t && o("error" === t.type ? 404 : 200, t.type)
                        }
                        ),
                            lt.head.appendChild(e[0])
                    },
                    abort: function () {
                        n && n()
                    }
                }
            }
        });
    var Ze = []
        , tn = /(=)\?(?=&|$)|\?\?/;
    Ct.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var t = Ze.pop() || Ct.expando + "_" + Le++;
            return this[t] = !0,
                t
        }
    }),
        Ct.ajaxPrefilter("json jsonp", function (e, n, i) {
            var o, r, a, s = !1 !== e.jsonp && (tn.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && tn.test(e.data) && "data");
            if (s || "jsonp" === e.dataTypes[0])
                return o = e.jsonpCallback = xt(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
                    s ? e[s] = e[s].replace(tn, "$1" + o) : !1 !== e.jsonp && (e.url += (Oe.test(e.url) ? "&" : "?") + e.jsonp + "=" + o),
                    e.converters["script json"] = function () {
                        return a || Ct.error(o + " was not called"),
                            a[0]
                    }
                    ,
                    e.dataTypes[0] = "json",
                    r = t[o],
                    t[o] = function () {
                        a = arguments
                    }
                    ,
                    i.always(function () {
                        void 0 === r ? Ct(t).removeProp(o) : t[o] = r,
                            e[o] && (e.jsonpCallback = n.jsonpCallback,
                                Ze.push(o)),
                            a && xt(r) && r(a[0]),
                            a = r = void 0
                    }),
                    "script"
        }),
        bt.createHTMLDocument = function () {
            var t = lt.implementation.createHTMLDocument("").body;
            return t.innerHTML = "<form></form><form></form>",
                2 === t.childNodes.length
        }(),
        Ct.parseHTML = function (t, e, n) {
            if ("string" != typeof t)
                return [];
            "boolean" == typeof e && (n = e,
                e = !1);
            var i, o, r;
            return e || (bt.createHTMLDocument ? (e = lt.implementation.createHTMLDocument(""),
                i = e.createElement("base"),
                i.href = lt.location.href,
                e.head.appendChild(i)) : e = lt),
                o = Dt.exec(t),
                r = !n && [],
                o ? [e.createElement(o[1])] : (o = C([t], e, r),
                    r && r.length && Ct(r).remove(),
                    Ct.merge([], o.childNodes))
        }
        ,
        Ct.fn.load = function (t, e, n) {
            var i, o, r, a = this, s = t.indexOf(" ");
            return s > -1 && (i = J(t.slice(s)),
                t = t.slice(0, s)),
                xt(e) ? (n = e,
                    e = void 0) : e && "object" == typeof e && (o = "POST"),
                a.length > 0 && Ct.ajax({
                    url: t,
                    type: o || "GET",
                    dataType: "html",
                    data: e
                }).done(function (t) {
                    r = arguments,
                        a.html(i ? Ct("<div>").append(Ct.parseHTML(t)).find(i) : t)
                }).always(n && function (t, e) {
                    a.each(function () {
                        n.apply(this, r || [t.responseText, e, t])
                    })
                }
                ),
                this
        }
        ,
        Ct.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
            Ct.fn[e] = function (t) {
                return this.on(e, t)
            }
        }),
        Ct.expr.pseudos.animated = function (t) {
            return Ct.grep(Ct.timers, function (e) {
                return t === e.elem
            }).length
        }
        ,
        Ct.offset = {
            setOffset: function (t, e, n) {
                var i, o, r, a, s, l, u, c = Ct.css(t, "position"), d = Ct(t), h = {};
                "static" === c && (t.style.position = "relative"),
                    s = d.offset(),
                    r = Ct.css(t, "top"),
                    l = Ct.css(t, "left"),
                    u = ("absolute" === c || "fixed" === c) && (r + l).indexOf("auto") > -1,
                    u ? (i = d.position(),
                        a = i.top,
                        o = i.left) : (a = parseFloat(r) || 0,
                            o = parseFloat(l) || 0),
                    xt(e) && (e = e.call(t, n, Ct.extend({}, s))),
                    null != e.top && (h.top = e.top - s.top + a),
                    null != e.left && (h.left = e.left - s.left + o),
                    "using" in e ? e.using.call(t, h) : d.css(h)
            }
        },
        Ct.fn.extend({
            offset: function (t) {
                if (arguments.length)
                    return void 0 === t ? this : this.each(function (e) {
                        Ct.offset.setOffset(this, t, e)
                    });
                var e, n, i = this[0];
                if (i)
                    return i.getClientRects().length ? (e = i.getBoundingClientRect(),
                        n = i.ownerDocument.defaultView,
                    {
                        top: e.top + n.pageYOffset,
                        left: e.left + n.pageXOffset
                    }) : {
                        top: 0,
                        left: 0
                    }
            },
            position: function () {
                if (this[0]) {
                    var t, e, n, i = this[0], o = {
                        top: 0,
                        left: 0
                    };
                    if ("fixed" === Ct.css(i, "position"))
                        e = i.getBoundingClientRect();
                    else {
                        for (e = this.offset(),
                            n = i.ownerDocument,
                            t = i.offsetParent || n.documentElement; t && (t === n.body || t === n.documentElement) && "static" === Ct.css(t, "position");)
                            t = t.parentNode;
                        t && t !== i && 1 === t.nodeType && (o = Ct(t).offset(),
                            o.top += Ct.css(t, "borderTopWidth", !0),
                            o.left += Ct.css(t, "borderLeftWidth", !0))
                    }
                    return {
                        top: e.top - o.top - Ct.css(i, "marginTop", !0),
                        left: e.left - o.left - Ct.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    for (var t = this.offsetParent; t && "static" === Ct.css(t, "position");)
                        t = t.offsetParent;
                    return t || Xt
                })
            }
        }),
        Ct.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function (t, e) {
            var n = "pageYOffset" === e;
            Ct.fn[t] = function (i) {
                return Ft(this, function (t, i, o) {
                    var r;
                    if (wt(t) ? r = t : 9 === t.nodeType && (r = t.defaultView),
                        void 0 === o)
                        return r ? r[e] : t[i];
                    r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : t[i] = o
                }, t, i, arguments.length)
            }
        }),
        Ct.each(["top", "left"], function (t, e) {
            Ct.cssHooks[e] = $(bt.pixelPosition, function (t, n) {
                if (n)
                    return n = F(t, e),
                        he.test(n) ? Ct(t).position()[e] + "px" : n
            })
        }),
        Ct.each({
            Height: "height",
            Width: "width"
        }, function (t, e) {
            Ct.each({
                padding: "inner" + t,
                content: e,
                "": "outer" + t
            }, function (n, i) {
                Ct.fn[i] = function (o, r) {
                    var a = arguments.length && (n || "boolean" != typeof o)
                        , s = n || (!0 === o || !0 === r ? "margin" : "border");
                    return Ft(this, function (e, n, o) {
                        var r;
                        return wt(e) ? 0 === i.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement,
                            Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === o ? Ct.css(e, n, s) : Ct.style(e, n, o, s)
                    }, e, a ? o : void 0, a)
                }
            })
        }),
        Ct.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (t, e) {
            Ct.fn[e] = function (t, n) {
                return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
            }
        }),
        Ct.fn.extend({
            hover: function (t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            }
        }),
        Ct.fn.extend({
            bind: function (t, e, n) {
                return this.on(t, null, e, n)
            },
            unbind: function (t, e) {
                return this.off(t, null, e)
            },
            delegate: function (t, e, n, i) {
                return this.on(e, t, n, i)
            },
            undelegate: function (t, e, n) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
            }
        }),
        Ct.proxy = function (t, e) {
            var n, i, o;
            if ("string" == typeof e && (n = t[e],
                e = t,
                t = n),
                xt(t))
                return i = ct.call(arguments, 2),
                    o = function () {
                        return t.apply(e || this, i.concat(ct.call(arguments)))
                    }
                    ,
                    o.guid = t.guid = t.guid || Ct.guid++,
                    o
        }
        ,
        Ct.holdReady = function (t) {
            t ? Ct.readyWait++ : Ct.ready(!0)
        }
        ,
        Ct.isArray = Array.isArray,
        Ct.parseJSON = JSON.parse,
        Ct.nodeName = r,
        Ct.isFunction = xt,
        Ct.isWindow = wt,
        Ct.camelCase = p,
        Ct.type = i,
        Ct.now = Date.now,
        Ct.isNumeric = function (t) {
            var e = Ct.type(t);
            return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
        }
        ,
        "function" == typeof define && define.amd && define("jquery", [], function () {
            return Ct
        });
    var en = t.jQuery
        , nn = t.$;
    return Ct.noConflict = function (e) {
        return t.$ === Ct && (t.$ = nn),
            e && t.jQuery === Ct && (t.jQuery = en),
            Ct
    }
        ,
        e || (t.jQuery = t.$ = Ct),
        Ct
}),
    function (t, e) {
        "use strict";
        "undefined" != typeof module && module.exports ? module.exports = e(require("jquery")) : "function" == typeof define && define.amd ? define(["jquery"], function (t) {
            return e(t)
        }) : e(t.jQuery)
    }(this, function (t) {
        "use strict";
        var e = function (e, n) {
            this.$element = t(e),
                this.options = t.extend({}, t.fn.typeahead.defaults, n),
                this.matcher = this.options.matcher || this.matcher,
                this.sorter = this.options.sorter || this.sorter,
                this.select = this.options.select || this.select,
                this.autoSelect = "boolean" != typeof this.options.autoSelect || this.options.autoSelect,
                this.highlighter = this.options.highlighter || this.highlighter,
                this.render = this.options.render || this.render,
                this.updater = this.options.updater || this.updater,
                this.displayText = this.options.displayText || this.displayText,
                this.source = this.options.source,
                this.delay = this.options.delay,
                this.$menu = t(this.options.menu),
                this.$appendTo = this.options.appendTo ? t(this.options.appendTo) : null,
                this.shown = !1,
                this.listen(),
                this.showHintOnFocus = "boolean" == typeof this.options.showHintOnFocus && this.options.showHintOnFocus,
                this.afterSelect = this.options.afterSelect,
                this.addItem = !1
        };
        e.prototype = {
            constructor: e,
            select: function () {
                var t = this.$menu.find(".active").data("value");
                if (this.$element.data("active", t),
                    this.autoSelect || t) {
                    var e = this.updater(t);
                    this.$element.val(this.displayText(e) || e).change(),
                        this.afterSelect(e)
                }
                return this.hide()
            },
            updater: function (t) {
                return t
            },
            setSource: function (t) {
                this.source = t
            },
            show: function () {
                var e, n = t.extend({}, this.$element.position(), {
                    height: this.$element[0].offsetHeight
                });
                return e = "function" == typeof this.options.scrollHeight ? this.options.scrollHeight.call() : this.options.scrollHeight,
                    (this.$appendTo ? this.$menu.appendTo(this.$appendTo) : this.$menu.insertAfter(this.$element)).css({
                        top: n.top + n.height + e,
                        left: n.left
                    }).show(),
                    this.shown = !0,
                    this
            },
            hide: function () {
                return this.$menu.hide(),
                    this.shown = !1,
                    this
            },
            lookup: function (e) {
                if (this.query = void 0 !== e && null !== e ? e : this.$element.val() || "",
                    this.query.length < this.options.minLength)
                    return this.shown ? this.hide() : this;
                var n = t.proxy(function () {
                    t.isFunction(this.source) ? this.source(this.query, t.proxy(this.process, this)) : this.source && this.process(this.source)
                }, this);
                clearTimeout(this.lookupWorker),
                    this.lookupWorker = setTimeout(n, this.delay)
            },
            process: function (e) {
                var n = this;
                return e = t.grep(e, function (t) {
                    return n.matcher(t)
                }),
                    e = this.sorter(e),
                    e.length || this.options.addItem ? (e.length > 0 ? this.$element.data("active", e[0]) : this.$element.data("active", null),
                        this.options.addItem && e.push(this.options.addItem),
                        "all" == this.options.items ? this.render(e).show() : this.render(e.slice(0, this.options.items)).show()) : this.shown ? this.hide() : this
            },
            matcher: function (t) {
                return ~this.displayText(t).toLowerCase().indexOf(this.query.toLowerCase())
            },
            sorter: function (t) {
                for (var e, n = [], i = [], o = []; e = t.shift();) {
                    var r = this.displayText(e);
                    r.toLowerCase().indexOf(this.query.toLowerCase()) ? ~r.indexOf(this.query) ? i.push(e) : o.push(e) : n.push(e)
                }
                return n.concat(i, o)
            },
            highlighter: function (e) {
                var n, i, o, r, a, s = t("<div></div>"), l = this.query, u = e.toLowerCase().indexOf(l.toLowerCase());
                if (0 === (n = l.length))
                    return s.text(e).html();
                for (; u > -1;)
                    i = e.substr(0, u),
                        o = e.substr(u, n),
                        r = e.substr(u + n),
                        a = t("<strong></strong>").text(o),
                        s.append(document.createTextNode(i)).append(a),
                        e = r,
                        u = e.toLowerCase().indexOf(l.toLowerCase());
                return s.append(document.createTextNode(e)).html()
            },
            render: function (e) {
                var n = this
                    , i = this
                    , o = !1;
                return e = t(e).map(function (e, r) {
                    var a = i.displayText(r);
                    return e = t(n.options.item).data("value", r),
                        e.find("a").html(n.highlighter(a)),
                        a == i.$element.val() && (e.addClass("active"),
                            i.$element.data("active", r),
                            o = !0),
                        e[0]
                }),
                    this.autoSelect && !o && (e.first().addClass("active"),
                        this.$element.data("active", e.first().data("value"))),
                    this.$menu.html(e),
                    this
            },
            displayText: function (t) {
                return t.name || t
            },
            next: function () {
                var e = this.$menu.find(".active").removeClass("active")
                    , n = e.next();
                n.length || (n = t(this.$menu.find("li")[0])),
                    n.addClass("active")
            },
            prev: function () {
                var t = this.$menu.find(".active").removeClass("active")
                    , e = t.prev();
                e.length || (e = this.$menu.find("li").last()),
                    e.addClass("active")
            },
            listen: function () {
                this.$element.on("focus", t.proxy(this.focus, this)).on("blur", t.proxy(this.blur, this)).on("keypress", t.proxy(this.keypress, this)).on("keyup", t.proxy(this.keyup, this)),
                    this.eventSupported("keydown") && this.$element.on("keydown", t.proxy(this.keydown, this)),
                    this.$menu.on("click", t.proxy(this.click, this)).on("mouseenter", "li", t.proxy(this.mouseenter, this)).on("mouseleave", "li", t.proxy(this.mouseleave, this))
            },
            destroy: function () {
                this.$element.data("typeahead", null),
                    this.$element.data("active", null),
                    this.$element.off("focus").off("blur").off("keypress").off("keyup"),
                    this.eventSupported("keydown") && this.$element.off("keydown"),
                    this.$menu.remove()
            },
            eventSupported: function (t) {
                var e = t in this.$element;
                return e || (this.$element.setAttribute(t, "return;"),
                    e = "function" == typeof this.$element[t]),
                    e
            },
            move: function (t) {
                if (this.shown) {
                    switch (t.keyCode) {
                        case 9:
                        case 13:
                        case 27:
                            t.preventDefault();
                            break;
                        case 38:
                            if (t.shiftKey)
                                return;
                            t.preventDefault(),
                                this.prev();
                            break;
                        case 40:
                            if (t.shiftKey)
                                return;
                            t.preventDefault(),
                                this.next()
                    }
                    t.stopPropagation()
                }
            },
            keydown: function (e) {
                this.suppressKeyPressRepeat = ~t.inArray(e.keyCode, [40, 38, 9, 13, 27]),
                    this.shown || 40 != e.keyCode ? this.move(e) : this.lookup()
            },
            keypress: function (t) {
                this.suppressKeyPressRepeat || this.move(t)
            },
            keyup: function (t) {
                switch (t.keyCode) {
                    case 40:
                    case 38:
                    case 16:
                    case 17:
                    case 18:
                        break;
                    case 9:
                    case 13:
                        if (!this.shown)
                            return;
                        this.select();
                        break;
                    case 27:
                        if (!this.shown)
                            return;
                        this.hide();
                        break;
                    default:
                        this.lookup()
                }
                t.stopPropagation(),
                    t.preventDefault()
            },
            focus: function () {
                this.focused || (this.focused = !0,
                    this.options.showHintOnFocus && this.lookup(""))
            },
            blur: function () {
                this.focused = !1,
                    !this.mousedover && this.shown && this.hide()
            },
            click: function (t) {
                t.stopPropagation(),
                    t.preventDefault(),
                    this.select(),
                    this.$element.focus()
            },
            mouseenter: function (e) {
                this.mousedover = !0,
                    this.$menu.find(".active").removeClass("active"),
                    t(e.currentTarget).addClass("active")
            },
            mouseleave: function () {
                this.mousedover = !1,
                    !this.focused && this.shown && this.hide()
            }
        };
        var n = t.fn.typeahead;
        t.fn.typeahead = function (n) {
            var i = arguments;
            return "string" == typeof n && "getActive" == n ? this.data("active") : this.each(function () {
                var o = t(this)
                    , r = o.data("typeahead")
                    , a = "object" == typeof n && n;
                r || o.data("typeahead", r = new e(this, a)),
                    "string" == typeof n && (i.length > 1 ? r[n].apply(r, Array.prototype.slice.call(i, 1)) : r[n]())
            })
        }
            ,
            t.fn.typeahead.defaults = {
                source: [],
                items: 10,
                menu: '<ul class="typeahead dropdown-menu" role="listbox"></ul>',
                item: '<li><a href="#" role="option"></a></li>',
                minLength: 1,
                scrollHeight: 0,
                autoSelect: !0,
                afterSelect: t.noop,
                delay: 0,
                addItem: !1
            },
            t.fn.typeahead.Constructor = e,
            t.fn.typeahead.noConflict = function () {
                return t.fn.typeahead = n,
                    this
            }
            ,
            t(document).on("focus.typeahead.data-api", '[data-provide="typeahead"]', function () {
                var e = t(this);
                e.data("typeahead") || e.typeahead(e.data())
            })
    }),
    "undefined" == typeof jQuery)
    throw new Error("Bootstrap's JavaScript requires jQuery");
+function (t) {
    "use strict";
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] > 3)
        throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(jQuery),
    function (t) {
        "use strict";
        function e() {
            var t = document.createElement("bootstrap")
                , e = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                };
            for (var n in e)
                if (void 0 !== t.style[n])
                    return {
                        end: e[n]
                    };
            return !1
        }
        t.fn.emulateTransitionEnd = function (e) {
            var n = !1
                , i = this;
            t(this).one("bsTransitionEnd", function () {
                n = !0
            });
            var o = function () {
                n || t(i).trigger(t.support.transition.end)
            };
            return setTimeout(o, e),
                this
        }
            ,
            t(function () {
                t.support.transition = e(),
                    t.support.transition && (t.event.special.bsTransitionEnd = {
                        bindType: t.support.transition.end,
                        delegateType: t.support.transition.end,
                        handle: function (e) {
                            if (t(e.target).is(this))
                                return e.handleObj.handler.apply(this, arguments)
                        }
                    })
            })
    }(jQuery),
    function (t) {
        "use strict";
        function e(e) {
            return this.each(function () {
                var n = t(this)
                    , o = n.data("bs.alert");
                o || n.data("bs.alert", o = new i(this)),
                    "string" == typeof e && o[e].call(n)
            })
        }
        var n = '[data-dismiss="alert"]'
            , i = function (e) {
                t(e).on("click", n, this.close)
            };
        i.VERSION = "3.4.1",
            i.TRANSITION_DURATION = 150,
            i.prototype.close = function (e) {
                function n() {
                    a.detach().trigger("closed.bs.alert").remove()
                }
                var o = t(this)
                    , r = o.attr("data-target");
                r || (r = o.attr("href"),
                    r = r && r.replace(/.*(?=#[^\s]*$)/, "")),
                    r = "#" === r ? [] : r;
                var a = t(document).find(r);
                e && e.preventDefault(),
                    a.length || (a = o.closest(".alert")),
                    a.trigger(e = t.Event("close.bs.alert")),
                    e.isDefaultPrevented() || (a.removeClass("in"),
                        t.support.transition && a.hasClass("fade") ? a.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n())
            }
            ;
        var o = t.fn.alert;
        t.fn.alert = e,
            t.fn.alert.Constructor = i,
            t.fn.alert.noConflict = function () {
                return t.fn.alert = o,
                    this
            }
            ,
            t(document).on("click.bs.alert.data-api", n, i.prototype.close)
    }(jQuery),
    function (t) {
        "use strict";
        function e(e) {
            return this.each(function () {
                var i = t(this)
                    , o = i.data("bs.button")
                    , r = "object" == typeof e && e;
                o || i.data("bs.button", o = new n(this, r)),
                    "toggle" == e ? o.toggle() : e && o.setState(e)
            })
        }
        var n = function (e, i) {
            this.$element = t(e),
                this.options = t.extend({}, n.DEFAULTS, i),
                this.isLoading = !1
        };
        n.VERSION = "3.4.1",
            n.DEFAULTS = {
                loadingText: "loading..."
            },
            n.prototype.setState = function (e) {
                var n = "disabled"
                    , i = this.$element
                    , o = i.is("input") ? "val" : "html"
                    , r = i.data();
                e += "Text",
                    null == r.resetText && i.data("resetText", i[o]()),
                    setTimeout(t.proxy(function () {
                        i[o](null == r[e] ? this.options[e] : r[e]),
                            "loadingText" == e ? (this.isLoading = !0,
                                i.addClass(n).attr(n, n).prop(n, !0)) : this.isLoading && (this.isLoading = !1,
                                    i.removeClass(n).removeAttr(n).prop(n, !1))
                    }, this), 0)
            }
            ,
            n.prototype.toggle = function () {
                var t = !0
                    , e = this.$element.closest('[data-toggle="buttons"]');
                if (e.length) {
                    var n = this.$element.find("input");
                    "radio" == n.prop("type") ? (n.prop("checked") && (t = !1),
                        e.find(".active").removeClass("active"),
                        this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (t = !1),
                            this.$element.toggleClass("active")),
                        n.prop("checked", this.$element.hasClass("active")),
                        t && n.trigger("change")
                } else
                    this.$element.attr("aria-pressed", !this.$element.hasClass("active")),
                        this.$element.toggleClass("active")
            }
            ;
        var i = t.fn.button;
        t.fn.button = e,
            t.fn.button.Constructor = n,
            t.fn.button.noConflict = function () {
                return t.fn.button = i,
                    this
            }
            ,
            t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (n) {
                var i = t(n.target).closest(".btn");
                e.call(i, "toggle"),
                    t(n.target).is('input[type="radio"], input[type="checkbox"]') || (n.preventDefault(),
                        i.is("input,button") ? i.trigger("focus") : i.find("input:visible,button:visible").first().trigger("focus"))
            }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (e) {
                t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
            })
    }(jQuery),
    function (t) {
        "use strict";
        function e(e) {
            return this.each(function () {
                var i = t(this)
                    , o = i.data("bs.carousel")
                    , r = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e)
                    , a = "string" == typeof e ? e : r.slide;
                o || i.data("bs.carousel", o = new n(this, r)),
                    "number" == typeof e ? o.to(e) : a ? o[a]() : r.interval && o.pause().cycle()
            })
        }
        var n = function (e, n) {
            this.$element = t(e),
                this.$indicators = this.$element.find(".carousel-indicators"),
                this.options = n,
                this.paused = null,
                this.sliding = null,
                this.interval = null,
                this.$active = null,
                this.$items = null,
                this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)),
                "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
        };
        n.VERSION = "3.4.1",
            n.TRANSITION_DURATION = 600,
            n.DEFAULTS = {
                interval: 5e3,
                pause: "hover",
                wrap: !0,
                keyboard: !0
            },
            n.prototype.keydown = function (t) {
                if (!/input|textarea/i.test(t.target.tagName)) {
                    switch (t.which) {
                        case 37:
                            this.prev();
                            break;
                        case 39:
                            this.next();
                            break;
                        default:
                            return
                    }
                    t.preventDefault()
                }
            }
            ,
            n.prototype.cycle = function (e) {
                return e || (this.paused = !1),
                    this.interval && clearInterval(this.interval),
                    this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)),
                    this
            }
            ,
            n.prototype.getItemIndex = function (t) {
                return this.$items = t.parent().children(".item"),
                    this.$items.index(t || this.$active)
            }
            ,
            n.prototype.getItemForDirection = function (t, e) {
                var n = this.getItemIndex(e);
                if (("prev" == t && 0 === n || "next" == t && n == this.$items.length - 1) && !this.options.wrap)
                    return e;
                var i = "prev" == t ? -1 : 1
                    , o = (n + i) % this.$items.length;
                return this.$items.eq(o)
            }
            ,
            n.prototype.to = function (t) {
                var e = this
                    , n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
                if (!(t > this.$items.length - 1 || t < 0))
                    return this.sliding ? this.$element.one("slid.bs.carousel", function () {
                        e.to(t)
                    }) : n == t ? this.pause().cycle() : this.slide(t > n ? "next" : "prev", this.$items.eq(t))
            }
            ,
            n.prototype.pause = function (e) {
                return e || (this.paused = !0),
                    this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end),
                        this.cycle(!0)),
                    this.interval = clearInterval(this.interval),
                    this
            }
            ,
            n.prototype.next = function () {
                if (!this.sliding)
                    return this.slide("next")
            }
            ,
            n.prototype.prev = function () {
                if (!this.sliding)
                    return this.slide("prev")
            }
            ,
            n.prototype.slide = function (e, i) {
                var o = this.$element.find(".item.active")
                    , r = i || this.getItemForDirection(e, o)
                    , a = this.interval
                    , s = "next" == e ? "left" : "right"
                    , l = this;
                if (r.hasClass("active"))
                    return this.sliding = !1;
                var u = r[0]
                    , c = t.Event("slide.bs.carousel", {
                        relatedTarget: u,
                        direction: s
                    });
                if (this.$element.trigger(c),
                    !c.isDefaultPrevented()) {
                    if (this.sliding = !0,
                        a && this.pause(),
                        this.$indicators.length) {
                        this.$indicators.find(".active").removeClass("active");
                        var d = t(this.$indicators.children()[this.getItemIndex(r)]);
                        d && d.addClass("active")
                    }
                    var h = t.Event("slid.bs.carousel", {
                        relatedTarget: u,
                        direction: s
                    });
                    return t.support.transition && this.$element.hasClass("slide") ? (r.addClass(e),
                        "object" == typeof r && r.length && r[0].offsetWidth,
                        o.addClass(s),
                        r.addClass(s),
                        o.one("bsTransitionEnd", function () {
                            r.removeClass([e, s].join(" ")).addClass("active"),
                                o.removeClass(["active", s].join(" ")),
                                l.sliding = !1,
                                setTimeout(function () {
                                    l.$element.trigger(h)
                                }, 0)
                        }).emulateTransitionEnd(n.TRANSITION_DURATION)) : (o.removeClass("active"),
                            r.addClass("active"),
                            this.sliding = !1,
                            this.$element.trigger(h)),
                        a && this.cycle(),
                        this
                }
            }
            ;
        var i = t.fn.carousel;
        t.fn.carousel = e,
            t.fn.carousel.Constructor = n,
            t.fn.carousel.noConflict = function () {
                return t.fn.carousel = i,
                    this
            }
            ;
        var o = function (n) {
            var i = t(this)
                , o = i.attr("href");
            o && (o = o.replace(/.*(?=#[^\s]+$)/, ""));
            var r = i.attr("data-target") || o
                , a = t(document).find(r);
            if (a.hasClass("carousel")) {
                var s = t.extend({}, a.data(), i.data())
                    , l = i.attr("data-slide-to");
                l && (s.interval = !1),
                    e.call(a, s),
                    l && a.data("bs.carousel").to(l),
                    n.preventDefault()
            }
        };
        t(document).on("click.bs.carousel.data-api", "[data-slide]", o).on("click.bs.carousel.data-api", "[data-slide-to]", o),
            t(window).on("load", function () {
                t('[data-ride="carousel"]').each(function () {
                    var n = t(this);
                    e.call(n, n.data())
                })
            })
    }(jQuery),
    function (t) {
        "use strict";
        function e(e) {
            var n, i = e.attr("data-target") || (n = e.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
            return t(document).find(i)
        }
        function n(e) {
            return this.each(function () {
                var n = t(this)
                    , o = n.data("bs.collapse")
                    , r = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e);
                !o && r.toggle && /show|hide/.test(e) && (r.toggle = !1),
                    o || n.data("bs.collapse", o = new i(this, r)),
                    "string" == typeof e && o[e]()
            })
        }
        var i = function (e, n) {
            this.$element = t(e),
                this.options = t.extend({}, i.DEFAULTS, n),
                this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'),
                this.transitioning = null,
                this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
                this.options.toggle && this.toggle()
        };
        i.VERSION = "3.4.1",
            i.TRANSITION_DURATION = 350,
            i.DEFAULTS = {
                toggle: !0
            },
            i.prototype.dimension = function () {
                return this.$element.hasClass("width") ? "width" : "height"
            }
            ,
            i.prototype.show = function () {
                if (!this.transitioning && !this.$element.hasClass("in")) {
                    var e, o = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
                    if (!(o && o.length && (e = o.data("bs.collapse")) && e.transitioning)) {
                        var r = t.Event("show.bs.collapse");
                        if (this.$element.trigger(r),
                            !r.isDefaultPrevented()) {
                            o && o.length && (n.call(o, "hide"),
                                e || o.data("bs.collapse", null));
                            var a = this.dimension();
                            this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded", !0),
                                this.$trigger.removeClass("collapsed").attr("aria-expanded", !0),
                                this.transitioning = 1;
                            var s = function () {
                                this.$element.removeClass("collapsing").addClass("collapse in")[a](""),
                                    this.transitioning = 0,
                                    this.$element.trigger("shown.bs.collapse")
                            };
                            if (!t.support.transition)
                                return s.call(this);
                            var l = t.camelCase(["scroll", a].join("-"));
                            this.$element.one("bsTransitionEnd", t.proxy(s, this)).emulateTransitionEnd(i.TRANSITION_DURATION)[a](this.$element[0][l])
                        }
                    }
                }
            }
            ,
            i.prototype.hide = function () {
                if (!this.transitioning && this.$element.hasClass("in")) {
                    var e = t.Event("hide.bs.collapse");
                    if (this.$element.trigger(e),
                        !e.isDefaultPrevented()) {
                        var n = this.dimension();
                        this.$element[n](this.$element[n]())[0].offsetHeight,
                            this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1),
                            this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
                            this.transitioning = 1;
                        var o = function () {
                            this.transitioning = 0,
                                this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                        };
                        if (!t.support.transition)
                            return o.call(this);
                        this.$element[n](0).one("bsTransitionEnd", t.proxy(o, this)).emulateTransitionEnd(i.TRANSITION_DURATION)
                    }
                }
            }
            ,
            i.prototype.toggle = function () {
                this[this.$element.hasClass("in") ? "hide" : "show"]()
            }
            ,
            i.prototype.getParent = function () {
                return t(document).find(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function (n, i) {
                    var o = t(i);
                    this.addAriaAndCollapsedClass(e(o), o)
                }, this)).end()
            }
            ,
            i.prototype.addAriaAndCollapsedClass = function (t, e) {
                var n = t.hasClass("in");
                t.attr("aria-expanded", n),
                    e.toggleClass("collapsed", !n).attr("aria-expanded", n)
            }
            ;
        var o = t.fn.collapse;
        t.fn.collapse = n,
            t.fn.collapse.Constructor = i,
            t.fn.collapse.noConflict = function () {
                return t.fn.collapse = o,
                    this
            }
            ,
            t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (i) {
                var o = t(this);
                o.attr("data-target") || i.preventDefault();
                var r = e(o)
                    , a = r.data("bs.collapse")
                    , s = a ? "toggle" : o.data();
                n.call(r, s)
            })
    }(jQuery),
    function (t) {
        "use strict";
        function e(e) {
            var n = e.attr("data-target");
            n || (n = e.attr("href"),
                n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
            var i = "#" !== n ? t(document).find(n) : null;
            return i && i.length ? i : e.parent()
        }
        function n(n) {
            n && 3 === n.which || (t(o).remove(),
                t(r).each(function () {
                    var i = t(this)
                        , o = e(i)
                        , r = {
                            relatedTarget: this
                        };
                    o.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && t.contains(o[0], n.target) || (o.trigger(n = t.Event("hide.bs.dropdown", r)),
                        n.isDefaultPrevented() || (i.attr("aria-expanded", "false"),
                            o.removeClass("open").trigger(t.Event("hidden.bs.dropdown", r)))))
                }))
        }
        function i(e) {
            return this.each(function () {
                var n = t(this)
                    , i = n.data("bs.dropdown");
                i || n.data("bs.dropdown", i = new a(this)),
                    "string" == typeof e && i[e].call(n)
            })
        }
        var o = ".dropdown-backdrop"
            , r = '[data-toggle="dropdown"]'
            , a = function (e) {
                t(e).on("click.bs.dropdown", this.toggle)
            };
        a.VERSION = "3.4.1",
            a.prototype.toggle = function (i) {
                var o = t(this);
                if (!o.is(".disabled, :disabled")) {
                    var r = e(o)
                        , a = r.hasClass("open");
                    if (n(),
                        !a) {
                        "ontouchstart" in document.documentElement && !r.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", n);
                        var s = {
                            relatedTarget: this
                        };
                        if (r.trigger(i = t.Event("show.bs.dropdown", s)),
                            i.isDefaultPrevented())
                            return;
                        o.trigger("focus").attr("aria-expanded", "true"),
                            r.toggleClass("open").trigger(t.Event("shown.bs.dropdown", s))
                    }
                    return !1
                }
            }
            ,
            a.prototype.keydown = function (n) {
                if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName)) {
                    var i = t(this);
                    if (n.preventDefault(),
                        n.stopPropagation(),
                        !i.is(".disabled, :disabled")) {
                        var o = e(i)
                            , a = o.hasClass("open");
                        if (!a && 27 != n.which || a && 27 == n.which)
                            return 27 == n.which && o.find(r).trigger("focus"),
                                i.trigger("click");
                        var s = o.find(".dropdown-menu li:not(.disabled):visible a");
                        if (s.length) {
                            var l = s.index(n.target);
                            38 == n.which && l > 0 && l--,
                                40 == n.which && l < s.length - 1 && l++,
                                ~l || (l = 0),
                                s.eq(l).trigger("focus")
                        }
                    }
                }
            }
            ;
        var s = t.fn.dropdown;
        t.fn.dropdown = i,
            t.fn.dropdown.Constructor = a,
            t.fn.dropdown.noConflict = function () {
                return t.fn.dropdown = s,
                    this
            }
            ,
            t(document).on("click.bs.dropdown.data-api", n).on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
                t.stopPropagation()
            }).on("click.bs.dropdown.data-api", r, a.prototype.toggle).on("keydown.bs.dropdown.data-api", r, a.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", a.prototype.keydown)
    }(jQuery),
    function (t) {
        "use strict";
        function e(e, i) {
            return this.each(function () {
                var o = t(this)
                    , r = o.data("bs.modal")
                    , a = t.extend({}, n.DEFAULTS, o.data(), "object" == typeof e && e);
                r || o.data("bs.modal", r = new n(this, a)),
                    "string" == typeof e ? r[e](i) : a.show && r.show(i)
            })
        }
        var n = function (e, n) {
            this.options = n,
                this.$body = t(document.body),
                this.$element = t(e),
                this.$dialog = this.$element.find(".modal-dialog"),
                this.$backdrop = null,
                this.isShown = null,
                this.originalBodyPad = null,
                this.scrollbarWidth = 0,
                this.ignoreBackdropClick = !1,
                this.fixedContent = ".navbar-fixed-top, .navbar-fixed-bottom",
                this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function () {
                    this.$element.trigger("loaded.bs.modal")
                }, this))
        };
        n.VERSION = "3.4.1",
            n.TRANSITION_DURATION = 300,
            n.BACKDROP_TRANSITION_DURATION = 150,
            n.DEFAULTS = {
                backdrop: !0,
                keyboard: !0,
                show: !0
            },
            n.prototype.toggle = function (t) {
                return this.isShown ? this.hide() : this.show(t)
            }
            ,
            n.prototype.show = function (e) {
                var i = this
                    , o = t.Event("show.bs.modal", {
                        relatedTarget: e
                    });
                this.$element.trigger(o),
                    this.isShown || o.isDefaultPrevented() || (this.isShown = !0,
                        this.checkScrollbar(),
                        this.setScrollbar(),
                        this.$body.addClass("modal-open"),
                        this.escape(),
                        this.resize(),
                        this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)),
                        this.$dialog.on("mousedown.dismiss.bs.modal", function () {
                            i.$element.one("mouseup.dismiss.bs.modal", function (e) {
                                t(e.target).is(i.$element) && (i.ignoreBackdropClick = !0)
                            })
                        }),
                        this.backdrop(function () {
                            var o = t.support.transition && i.$element.hasClass("fade");
                            i.$element.parent().length || i.$element.appendTo(i.$body),
                                i.$element.show().scrollTop(0),
                                i.adjustDialog(),
                                o && i.$element[0].offsetWidth,
                                i.$element.addClass("in"),
                                i.enforceFocus();
                            var r = t.Event("shown.bs.modal", {
                                relatedTarget: e
                            });
                            o ? i.$dialog.one("bsTransitionEnd", function () {
                                i.$element.trigger("focus").trigger(r)
                            }).emulateTransitionEnd(n.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(r)
                        }))
            }
            ,
            n.prototype.hide = function (e) {
                e && e.preventDefault(),
                    e = t.Event("hide.bs.modal"),
                    this.$element.trigger(e),
                    this.isShown && !e.isDefaultPrevented() && (this.isShown = !1,
                        this.escape(),
                        this.resize(),
                        t(document).off("focusin.bs.modal"),
                        this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),
                        this.$dialog.off("mousedown.dismiss.bs.modal"),
                        t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
            }
            ,
            n.prototype.enforceFocus = function () {
                t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function (t) {
                    document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
                }, this))
            }
            ,
            n.prototype.escape = function () {
                this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function (t) {
                    27 == t.which && this.hide()
                }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
            }
            ,
            n.prototype.resize = function () {
                this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
            }
            ,
            n.prototype.hideModal = function () {
                var t = this;
                this.$element.hide(),
                    this.backdrop(function () {
                        t.$body.removeClass("modal-open"),
                            t.resetAdjustments(),
                            t.resetScrollbar(),
                            t.$element.trigger("hidden.bs.modal")
                    })
            }
            ,
            n.prototype.removeBackdrop = function () {
                this.$backdrop && this.$backdrop.remove(),
                    this.$backdrop = null
            }
            ,
            n.prototype.backdrop = function (e) {
                var i = this
                    , o = this.$element.hasClass("fade") ? "fade" : "";
                if (this.isShown && this.options.backdrop) {
                    var r = t.support.transition && o;
                    if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + o).appendTo(this.$body),
                        this.$element.on("click.dismiss.bs.modal", t.proxy(function (t) {
                            if (this.ignoreBackdropClick)
                                return void (this.ignoreBackdropClick = !1);
                            t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide())
                        }, this)),
                        r && this.$backdrop[0].offsetWidth,
                        this.$backdrop.addClass("in"),
                        !e)
                        return;
                    r ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : e()
                } else if (!this.isShown && this.$backdrop) {
                    this.$backdrop.removeClass("in");
                    var a = function () {
                        i.removeBackdrop(),
                            e && e()
                    };
                    t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", a).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : a()
                } else
                    e && e()
            }
            ,
            n.prototype.handleUpdate = function () {
                this.adjustDialog()
            }
            ,
            n.prototype.adjustDialog = function () {
                var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
                this.$element.css({
                    paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
                    paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
                })
            }
            ,
            n.prototype.resetAdjustments = function () {
                this.$element.css({
                    paddingLeft: "",
                    paddingRight: ""
                })
            }
            ,
            n.prototype.checkScrollbar = function () {
                var t = window.innerWidth;
                if (!t) {
                    var e = document.documentElement.getBoundingClientRect();
                    t = e.right - Math.abs(e.left)
                }
                this.bodyIsOverflowing = document.body.clientWidth < t,
                    this.scrollbarWidth = this.measureScrollbar()
            }
            ,
            n.prototype.setScrollbar = function () {
                var e = parseInt(this.$body.css("padding-right") || 0, 10);
                this.originalBodyPad = document.body.style.paddingRight || "";
                var n = this.scrollbarWidth;
                this.bodyIsOverflowing && (this.$body.css("padding-right", e + n),
                    t(this.fixedContent).each(function (e, i) {
                        var o = i.style.paddingRight
                            , r = t(i).css("padding-right");
                        t(i).data("padding-right", o).css("padding-right", parseFloat(r) + n + "px")
                    }))
            }
            ,
            n.prototype.resetScrollbar = function () {
                this.$body.css("padding-right", this.originalBodyPad),
                    t(this.fixedContent).each(function (e, n) {
                        var i = t(n).data("padding-right");
                        t(n).removeData("padding-right"),
                            n.style.paddingRight = i || ""
                    })
            }
            ,
            n.prototype.measureScrollbar = function () {
                var t = document.createElement("div");
                t.className = "modal-scrollbar-measure",
                    this.$body.append(t);
                var e = t.offsetWidth - t.clientWidth;
                return this.$body[0].removeChild(t),
                    e
            }
            ;
        var i = t.fn.modal;
        t.fn.modal = e,
            t.fn.modal.Constructor = n,
            t.fn.modal.noConflict = function () {
                return t.fn.modal = i,
                    this
            }
            ,
            t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (n) {
                var i = t(this)
                    , o = i.attr("href")
                    , r = i.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, "")
                    , a = t(document).find(r)
                    , s = a.data("bs.modal") ? "toggle" : t.extend({
                        remote: !/#/.test(o) && o
                    }, a.data(), i.data());
                i.is("a") && n.preventDefault(),
                    a.one("show.bs.modal", function (t) {
                        t.isDefaultPrevented() || a.one("hidden.bs.modal", function () {
                            i.is(":visible") && i.trigger("focus")
                        })
                    }),
                    e.call(a, s, this)
            })
    }(jQuery),
    function (t) {
        "use strict";
        function e(e, n) {
            var i = e.nodeName.toLowerCase();
            if (-1 !== t.inArray(i, n))
                return -1 === t.inArray(i, r) || Boolean(e.nodeValue.match(l) || e.nodeValue.match(u));
            for (var o = t(n).filter(function (t, e) {
                return e instanceof RegExp
            }), a = 0, s = o.length; a < s; a++)
                if (i.match(o[a]))
                    return !0;
            return !1
        }
        function n(n, i, o) {
            if (0 === n.length)
                return n;
            if (o && "function" == typeof o)
                return o(n);
            if (!document.implementation || !document.implementation.createHTMLDocument)
                return n;
            var r = document.implementation.createHTMLDocument("sanitization");
            r.body.innerHTML = n;
            for (var a = t.map(i, function (t, e) {
                return e
            }), s = t(r.body).find("*"), l = 0, u = s.length; l < u; l++) {
                var c = s[l]
                    , d = c.nodeName.toLowerCase();
                if (-1 !== t.inArray(d, a))
                    for (var h = t.map(c.attributes, function (t) {
                        return t
                    }), f = [].concat(i["*"] || [], i[d] || []), p = 0, g = h.length; p < g; p++)
                        e(h[p], f) || c.removeAttribute(h[p].nodeName);
                else
                    c.parentNode.removeChild(c)
            }
            return r.body.innerHTML
        }
        function i(e) {
            return this.each(function () {
                var n = t(this)
                    , i = n.data("bs.tooltip")
                    , o = "object" == typeof e && e;
                !i && /destroy|hide/.test(e) || (i || n.data("bs.tooltip", i = new c(this, o)),
                    "string" == typeof e && i[e]())
            })
        }
        var o = ["sanitize", "whiteList", "sanitizeFn"]
            , r = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]
            , a = /^aria-[\w-]*$/i
            , s = {
                "*": ["class", "dir", "id", "lang", "role", a],
                a: ["target", "href", "title", "rel"],
                area: [],
                b: [],
                br: [],
                col: [],
                code: [],
                div: [],
                em: [],
                hr: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                i: [],
                img: ["src", "alt", "title", "width", "height"],
                li: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                small: [],
                span: [],
                sub: [],
                sup: [],
                strong: [],
                u: [],
                ul: []
            }
            , l = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:\/?#]*(?:[\/?#]|$))/gi
            , u = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i
            , c = function (t, e) {
                this.type = null,
                    this.options = null,
                    this.enabled = null,
                    this.timeout = null,
                    this.hoverState = null,
                    this.$element = null,
                    this.inState = null,
                    this.init("tooltip", t, e)
            };
        c.VERSION = "3.4.1",
            c.TRANSITION_DURATION = 150,
            c.DEFAULTS = {
                animation: !0,
                placement: "top",
                selector: !1,
                template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                trigger: "hover focus",
                title: "",
                delay: 0,
                html: !1,
                container: !1,
                viewport: {
                    selector: "body",
                    padding: 0
                },
                sanitize: !0,
                sanitizeFn: null,
                whiteList: s
            },
            c.prototype.init = function (e, n, i) {
                if (this.enabled = !0,
                    this.type = e,
                    this.$element = t(n),
                    this.options = this.getOptions(i),
                    this.$viewport = this.options.viewport && t(document).find(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport),
                    this.inState = {
                        click: !1,
                        hover: !1,
                        focus: !1
                    },
                    this.$element[0] instanceof document.constructor && !this.options.selector)
                    throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
                for (var o = this.options.trigger.split(" "), r = o.length; r--;) {
                    var a = o[r];
                    if ("click" == a)
                        this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
                    else if ("manual" != a) {
                        var s = "hover" == a ? "mouseenter" : "focusin"
                            , l = "hover" == a ? "mouseleave" : "focusout";
                        this.$element.on(s + "." + this.type, this.options.selector, t.proxy(this.enter, this)),
                            this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
                    }
                }
                this.options.selector ? this._options = t.extend({}, this.options, {
                    trigger: "manual",
                    selector: ""
                }) : this.fixTitle()
            }
            ,
            c.prototype.getDefaults = function () {
                return c.DEFAULTS
            }
            ,
            c.prototype.getOptions = function (e) {
                var i = this.$element.data();
                for (var r in i)
                    i.hasOwnProperty(r) && -1 !== t.inArray(r, o) && delete i[r];
                return e = t.extend({}, this.getDefaults(), i, e),
                    e.delay && "number" == typeof e.delay && (e.delay = {
                        show: e.delay,
                        hide: e.delay
                    }),
                    e.sanitize && (e.template = n(e.template, e.whiteList, e.sanitizeFn)),
                    e
            }
            ,
            c.prototype.getDelegateOptions = function () {
                var e = {}
                    , n = this.getDefaults();
                return this._options && t.each(this._options, function (t, i) {
                    n[t] != i && (e[t] = i)
                }),
                    e
            }
            ,
            c.prototype.enter = function (e) {
                var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
                return n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()),
                    t(e.currentTarget).data("bs." + this.type, n)),
                    e instanceof t.Event && (n.inState["focusin" == e.type ? "focus" : "hover"] = !0),
                    n.tip().hasClass("in") || "in" == n.hoverState ? void (n.hoverState = "in") : (clearTimeout(n.timeout),
                        n.hoverState = "in",
                        n.options.delay && n.options.delay.show ? void (n.timeout = setTimeout(function () {
                            "in" == n.hoverState && n.show()
                        }, n.options.delay.show)) : n.show())
            }
            ,
            c.prototype.isInStateTrue = function () {
                for (var t in this.inState)
                    if (this.inState[t])
                        return !0;
                return !1
            }
            ,
            c.prototype.leave = function (e) {
                var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
                if (n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()),
                    t(e.currentTarget).data("bs." + this.type, n)),
                    e instanceof t.Event && (n.inState["focusout" == e.type ? "focus" : "hover"] = !1),
                    !n.isInStateTrue()) {
                    if (clearTimeout(n.timeout),
                        n.hoverState = "out",
                        !n.options.delay || !n.options.delay.hide)
                        return n.hide();
                    n.timeout = setTimeout(function () {
                        "out" == n.hoverState && n.hide()
                    }, n.options.delay.hide)
                }
            }
            ,
            c.prototype.show = function () {
                var e = t.Event("show.bs." + this.type);
                if (this.hasContent() && this.enabled) {
                    this.$element.trigger(e);
                    var n = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
                    if (e.isDefaultPrevented() || !n)
                        return;
                    var i = this
                        , o = this.tip()
                        , r = this.getUID(this.type);
                    this.setContent(),
                        o.attr("id", r),
                        this.$element.attr("aria-describedby", r),
                        this.options.animation && o.addClass("fade");
                    var a = "function" == typeof this.options.placement ? this.options.placement.call(this, o[0], this.$element[0]) : this.options.placement
                        , s = /\s?auto?\s?/i
                        , l = s.test(a);
                    l && (a = a.replace(s, "") || "top"),
                        o.detach().css({
                            top: 0,
                            left: 0,
                            display: "block"
                        }).addClass(a).data("bs." + this.type, this),
                        this.options.container ? o.appendTo(t(document).find(this.options.container)) : o.insertAfter(this.$element),
                        this.$element.trigger("inserted.bs." + this.type);
                    var u = this.getPosition()
                        , d = o[0].offsetWidth
                        , h = o[0].offsetHeight;
                    if (l) {
                        var f = a
                            , p = this.getPosition(this.$viewport);
                        a = "bottom" == a && u.bottom + h > p.bottom ? "top" : "top" == a && u.top - h < p.top ? "bottom" : "right" == a && u.right + d > p.width ? "left" : "left" == a && u.left - d < p.left ? "right" : a,
                            o.removeClass(f).addClass(a)
                    }
                    var g = this.getCalculatedOffset(a, u, d, h);
                    this.applyPlacement(g, a);
                    var m = function () {
                        var t = i.hoverState;
                        i.$element.trigger("shown.bs." + i.type),
                            i.hoverState = null,
                            "out" == t && i.leave(i)
                    };
                    t.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", m).emulateTransitionEnd(c.TRANSITION_DURATION) : m()
                }
            }
            ,
            c.prototype.applyPlacement = function (e, n) {
                var i = this.tip()
                    , o = i[0].offsetWidth
                    , r = i[0].offsetHeight
                    , a = parseInt(i.css("margin-top"), 10)
                    , s = parseInt(i.css("margin-left"), 10);
                isNaN(a) && (a = 0),
                    isNaN(s) && (s = 0),
                    e.top += a,
                    e.left += s,
                    t.offset.setOffset(i[0], t.extend({
                        using: function (t) {
                            i.css({
                                top: Math.round(t.top),
                                left: Math.round(t.left)
                            })
                        }
                    }, e), 0),
                    i.addClass("in");
                var l = i[0].offsetWidth
                    , u = i[0].offsetHeight;
                "top" == n && u != r && (e.top = e.top + r - u);
                var c = this.getViewportAdjustedDelta(n, e, l, u);
                c.left ? e.left += c.left : e.top += c.top;
                var d = /top|bottom/.test(n)
                    , h = d ? 2 * c.left - o + l : 2 * c.top - r + u
                    , f = d ? "offsetWidth" : "offsetHeight";
                i.offset(e),
                    this.replaceArrow(h, i[0][f], d)
            }
            ,
            c.prototype.replaceArrow = function (t, e, n) {
                this.arrow().css(n ? "left" : "top", 50 * (1 - t / e) + "%").css(n ? "top" : "left", "")
            }
            ,
            c.prototype.setContent = function () {
                var t = this.tip()
                    , e = this.getTitle();
                this.options.html ? (this.options.sanitize && (e = n(e, this.options.whiteList, this.options.sanitizeFn)),
                    t.find(".tooltip-inner").html(e)) : t.find(".tooltip-inner").text(e),
                    t.removeClass("fade in top bottom left right")
            }
            ,
            c.prototype.hide = function (e) {
                function n() {
                    "in" != i.hoverState && o.detach(),
                        i.$element && i.$element.removeAttr("aria-describedby").trigger("hidden.bs." + i.type),
                        e && e()
                }
                var i = this
                    , o = t(this.$tip)
                    , r = t.Event("hide.bs." + this.type);
                if (this.$element.trigger(r),
                    !r.isDefaultPrevented())
                    return o.removeClass("in"),
                        t.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", n).emulateTransitionEnd(c.TRANSITION_DURATION) : n(),
                        this.hoverState = null,
                        this
            }
            ,
            c.prototype.fixTitle = function () {
                var t = this.$element;
                (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
            }
            ,
            c.prototype.hasContent = function () {
                return this.getTitle()
            }
            ,
            c.prototype.getPosition = function (e) {
                e = e || this.$element;
                var n = e[0]
                    , i = "BODY" == n.tagName
                    , o = n.getBoundingClientRect();
                null == o.width && (o = t.extend({}, o, {
                    width: o.right - o.left,
                    height: o.bottom - o.top
                }));
                var r = window.SVGElement && n instanceof window.SVGElement
                    , a = i ? {
                        top: 0,
                        left: 0
                    } : r ? null : e.offset()
                    , s = {
                        scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
                    }
                    , l = i ? {
                        width: t(window).width(),
                        height: t(window).height()
                    } : null;
                return t.extend({}, o, s, l, a)
            }
            ,
            c.prototype.getCalculatedOffset = function (t, e, n, i) {
                return "bottom" == t ? {
                    top: e.top + e.height,
                    left: e.left + e.width / 2 - n / 2
                } : "top" == t ? {
                    top: e.top - i,
                    left: e.left + e.width / 2 - n / 2
                } : "left" == t ? {
                    top: e.top + e.height / 2 - i / 2,
                    left: e.left - n
                } : {
                    top: e.top + e.height / 2 - i / 2,
                    left: e.left + e.width
                }
            }
            ,
            c.prototype.getViewportAdjustedDelta = function (t, e, n, i) {
                var o = {
                    top: 0,
                    left: 0
                };
                if (!this.$viewport)
                    return o;
                var r = this.options.viewport && this.options.viewport.padding || 0
                    , a = this.getPosition(this.$viewport);
                if (/right|left/.test(t)) {
                    var s = e.top - r - a.scroll
                        , l = e.top + r - a.scroll + i;
                    s < a.top ? o.top = a.top - s : l > a.top + a.height && (o.top = a.top + a.height - l)
                } else {
                    var u = e.left - r
                        , c = e.left + r + n;
                    u < a.left ? o.left = a.left - u : c > a.right && (o.left = a.left + a.width - c)
                }
                return o
            }
            ,
            c.prototype.getTitle = function () {
                var t = this.$element
                    , e = this.options;
                return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
            }
            ,
            c.prototype.getUID = function (t) {
                do {
                    t += ~~(1e6 * Math.random())
                } while (document.getElementById(t));
                return t
            }
            ,
            c.prototype.tip = function () {
                if (!this.$tip && (this.$tip = t(this.options.template),
                    1 != this.$tip.length))
                    throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
                return this.$tip
            }
            ,
            c.prototype.arrow = function () {
                return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
            }
            ,
            c.prototype.enable = function () {
                this.enabled = !0
            }
            ,
            c.prototype.disable = function () {
                this.enabled = !1
            }
            ,
            c.prototype.toggleEnabled = function () {
                this.enabled = !this.enabled
            }
            ,
            c.prototype.toggle = function (e) {
                var n = this;
                e && ((n = t(e.currentTarget).data("bs." + this.type)) || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()),
                    t(e.currentTarget).data("bs." + this.type, n))),
                    e ? (n.inState.click = !n.inState.click,
                        n.isInStateTrue() ? n.enter(n) : n.leave(n)) : n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
            }
            ,
            c.prototype.destroy = function () {
                var t = this;
                clearTimeout(this.timeout),
                    this.hide(function () {
                        t.$element.off("." + t.type).removeData("bs." + t.type),
                            t.$tip && t.$tip.detach(),
                            t.$tip = null,
                            t.$arrow = null,
                            t.$viewport = null,
                            t.$element = null
                    })
            }
            ,
            c.prototype.sanitizeHtml = function (t) {
                return n(t, this.options.whiteList, this.options.sanitizeFn)
            }
            ;
        var d = t.fn.tooltip;
        t.fn.tooltip = i,
            t.fn.tooltip.Constructor = c,
            t.fn.tooltip.noConflict = function () {
                return t.fn.tooltip = d,
                    this
            }
    }(jQuery),
    function (t) {
        "use strict";
        function e(e) {
            return this.each(function () {
                var i = t(this)
                    , o = i.data("bs.popover")
                    , r = "object" == typeof e && e;
                !o && /destroy|hide/.test(e) || (o || i.data("bs.popover", o = new n(this, r)),
                    "string" == typeof e && o[e]())
            })
        }
        var n = function (t, e) {
            this.init("popover", t, e)
        };
        if (!t.fn.tooltip)
            throw new Error("Popover requires tooltip.js");
        n.VERSION = "3.4.1",
            n.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
                placement: "right",
                trigger: "click",
                content: "",
                template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
            }),
            n.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype),
            n.prototype.constructor = n,
            n.prototype.getDefaults = function () {
                return n.DEFAULTS
            }
            ,
            n.prototype.setContent = function () {
                var t = this.tip()
                    , e = this.getTitle()
                    , n = this.getContent();
                if (this.options.html) {
                    var i = typeof n;
                    this.options.sanitize && (e = this.sanitizeHtml(e),
                        "string" === i && (n = this.sanitizeHtml(n))),
                        t.find(".popover-title").html(e),
                        t.find(".popover-content").children().detach().end()["string" === i ? "html" : "append"](n)
                } else
                    t.find(".popover-title").text(e),
                        t.find(".popover-content").children().detach().end().text(n);
                t.removeClass("fade top bottom left right in"),
                    t.find(".popover-title").html() || t.find(".popover-title").hide()
            }
            ,
            n.prototype.hasContent = function () {
                return this.getTitle() || this.getContent()
            }
            ,
            n.prototype.getContent = function () {
                var t = this.$element
                    , e = this.options;
                return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
            }
            ,
            n.prototype.arrow = function () {
                return this.$arrow = this.$arrow || this.tip().find(".arrow")
            }
            ;
        var i = t.fn.popover;
        t.fn.popover = e,
            t.fn.popover.Constructor = n,
            t.fn.popover.noConflict = function () {
                return t.fn.popover = i,
                    this
            }
    }(jQuery),
    function (t) {
        "use strict";
        function e(n, i) {
            this.$body = t(document.body),
                this.$scrollElement = t(t(n).is(document.body) ? window : n),
                this.options = t.extend({}, e.DEFAULTS, i),
                this.selector = (this.options.target || "") + " .nav li > a",
                this.offsets = [],
                this.targets = [],
                this.activeTarget = null,
                this.scrollHeight = 0,
                this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)),
                this.refresh(),
                this.process()
        }
        function n(n) {
            return this.each(function () {
                var i = t(this)
                    , o = i.data("bs.scrollspy")
                    , r = "object" == typeof n && n;
                o || i.data("bs.scrollspy", o = new e(this, r)),
                    "string" == typeof n && o[n]()
            })
        }
        e.VERSION = "3.4.1",
            e.DEFAULTS = {
                offset: 10
            },
            e.prototype.getScrollHeight = function () {
                return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
            }
            ,
            e.prototype.refresh = function () {
                var e = this
                    , n = "offset"
                    , i = 0;
                this.offsets = [],
                    this.targets = [],
                    this.scrollHeight = this.getScrollHeight(),
                    t.isWindow(this.$scrollElement[0]) || (n = "position",
                        i = this.$scrollElement.scrollTop()),
                    this.$body.find(this.selector).map(function () {
                        var e = t(this)
                            , o = e.data("target") || e.attr("href")
                            , r = /^#./.test(o) && t(o);
                        return r && r.length && r.is(":visible") && [[r[n]().top + i, o]] || null
                    }).sort(function (t, e) {
                        return t[0] - e[0]
                    }).each(function () {
                        e.offsets.push(this[0]),
                            e.targets.push(this[1])
                    })
            }
            ,
            e.prototype.process = function () {
                var t, e = this.$scrollElement.scrollTop() + this.options.offset, n = this.getScrollHeight(), i = this.options.offset + n - this.$scrollElement.height(), o = this.offsets, r = this.targets, a = this.activeTarget;
                if (this.scrollHeight != n && this.refresh(),
                    e >= i)
                    return a != (t = r[r.length - 1]) && this.activate(t);
                if (a && e < o[0])
                    return this.activeTarget = null,
                        this.clear();
                for (t = o.length; t--;)
                    a != r[t] && e >= o[t] && (void 0 === o[t + 1] || e < o[t + 1]) && this.activate(r[t])
            }
            ,
            e.prototype.activate = function (e) {
                this.activeTarget = e,
                    this.clear();
                var n = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]'
                    , i = t(n).parents("li").addClass("active");
                i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")),
                    i.trigger("activate.bs.scrollspy")
            }
            ,
            e.prototype.clear = function () {
                t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
            }
            ;
        var i = t.fn.scrollspy;
        t.fn.scrollspy = n,
            t.fn.scrollspy.Constructor = e,
            t.fn.scrollspy.noConflict = function () {
                return t.fn.scrollspy = i,
                    this
            }
            ,
            t(window).on("load.bs.scrollspy.data-api", function () {
                t('[data-spy="scroll"]').each(function () {
                    var e = t(this);
                    n.call(e, e.data())
                })
            })
    }(jQuery),
    function (t) {
        "use strict";
        function e(e) {
            return this.each(function () {
                var i = t(this)
                    , o = i.data("bs.tab");
                o || i.data("bs.tab", o = new n(this)),
                    "string" == typeof e && o[e]()
            })
        }
        var n = function (e) {
            this.element = t(e)
        };
        n.VERSION = "3.4.1",
            n.TRANSITION_DURATION = 150,
            n.prototype.show = function () {
                var e = this.element
                    , n = e.closest("ul:not(.dropdown-menu)")
                    , i = e.data("target");
                if (i || (i = e.attr("href"),
                    i = i && i.replace(/.*(?=#[^\s]*$)/, "")),
                    !e.parent("li").hasClass("active")) {
                    var o = n.find(".active:last a")
                        , r = t.Event("hide.bs.tab", {
                            relatedTarget: e[0]
                        })
                        , a = t.Event("show.bs.tab", {
                            relatedTarget: o[0]
                        });
                    if (o.trigger(r),
                        e.trigger(a),
                        !a.isDefaultPrevented() && !r.isDefaultPrevented()) {
                        var s = t(document).find(i);
                        this.activate(e.closest("li"), n),
                            this.activate(s, s.parent(), function () {
                                o.trigger({
                                    type: "hidden.bs.tab",
                                    relatedTarget: e[0]
                                }),
                                    e.trigger({
                                        type: "shown.bs.tab",
                                        relatedTarget: o[0]
                                    })
                            })
                    }
                }
            }
            ,
            n.prototype.activate = function (e, i, o) {
                function r() {
                    a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1),
                        e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0),
                        s ? (e[0].offsetWidth,
                            e.addClass("in")) : e.removeClass("fade"),
                        e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0),
                        o && o()
                }
                var a = i.find("> .active")
                    , s = o && t.support.transition && (a.length && a.hasClass("fade") || !!i.find("> .fade").length);
                a.length && s ? a.one("bsTransitionEnd", r).emulateTransitionEnd(n.TRANSITION_DURATION) : r(),
                    a.removeClass("in")
            }
            ;
        var i = t.fn.tab;
        t.fn.tab = e,
            t.fn.tab.Constructor = n,
            t.fn.tab.noConflict = function () {
                return t.fn.tab = i,
                    this
            }
            ;
        var o = function (n) {
            n.preventDefault(),
                e.call(t(this), "show")
        };
        t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', o).on("click.bs.tab.data-api", '[data-toggle="pill"]', o)
    }(jQuery),
    function (t) {
        "use strict";
        function e(e) {
            return this.each(function () {
                var i = t(this)
                    , o = i.data("bs.affix")
                    , r = "object" == typeof e && e;
                o || i.data("bs.affix", o = new n(this, r)),
                    "string" == typeof e && o[e]()
            })
        }
        var n = function (e, i) {
            this.options = t.extend({}, n.DEFAULTS, i);
            var o = this.options.target === n.DEFAULTS.target ? t(this.options.target) : t(document).find(this.options.target);
            this.$target = o.on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)),
                this.$element = t(e),
                this.affixed = null,
                this.unpin = null,
                this.pinnedOffset = null,
                this.checkPosition()
        };
        n.VERSION = "3.4.1",
            n.RESET = "affix affix-top affix-bottom",
            n.DEFAULTS = {
                offset: 0,
                target: window
            },
            n.prototype.getState = function (t, e, n, i) {
                var o = this.$target.scrollTop()
                    , r = this.$element.offset()
                    , a = this.$target.height();
                if (null != n && "top" == this.affixed)
                    return o < n && "top";
                if ("bottom" == this.affixed)
                    return null != n ? !(o + this.unpin <= r.top) && "bottom" : !(o + a <= t - i) && "bottom";
                var s = null == this.affixed
                    , l = s ? o : r.top
                    , u = s ? a : e;
                return null != n && o <= n ? "top" : null != i && l + u >= t - i && "bottom"
            }
            ,
            n.prototype.getPinnedOffset = function () {
                if (this.pinnedOffset)
                    return this.pinnedOffset;
                this.$element.removeClass(n.RESET).addClass("affix");
                var t = this.$target.scrollTop()
                    , e = this.$element.offset();
                return this.pinnedOffset = e.top - t
            }
            ,
            n.prototype.checkPositionWithEventLoop = function () {
                setTimeout(t.proxy(this.checkPosition, this), 1)
            }
            ,
            n.prototype.checkPosition = function () {
                if (this.$element.is(":visible")) {
                    var e = this.$element.height()
                        , i = this.options.offset
                        , o = i.top
                        , r = i.bottom
                        , a = Math.max(t(document).height(), t(document.body).height());
                    "object" != typeof i && (r = o = i),
                        "function" == typeof o && (o = i.top(this.$element)),
                        "function" == typeof r && (r = i.bottom(this.$element));
                    var s = this.getState(a, e, o, r);
                    if (this.affixed != s) {
                        null != this.unpin && this.$element.css("top", "");
                        var l = "affix" + (s ? "-" + s : "")
                            , u = t.Event(l + ".bs.affix");
                        if (this.$element.trigger(u),
                            u.isDefaultPrevented())
                            return;
                        this.affixed = s,
                            this.unpin = "bottom" == s ? this.getPinnedOffset() : null,
                            this.$element.removeClass(n.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
                    }
                    "bottom" == s && this.$element.offset({
                        top: a - e - r
                    })
                }
            }
            ;
        var i = t.fn.affix;
        t.fn.affix = e,
            t.fn.affix.Constructor = n,
            t.fn.affix.noConflict = function () {
                return t.fn.affix = i,
                    this
            }
            ,
            t(window).on("load", function () {
                t('[data-spy="affix"]').each(function () {
                    var n = t(this)
                        , i = n.data();
                    i.offset = i.offset || {},
                        null != i.offsetBottom && (i.offset.bottom = i.offsetBottom),
                        null != i.offsetTop && (i.offset.top = i.offsetTop),
                        e.call(n, i)
                })
            })
    }(jQuery),
    function (t, e) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = e(function () {
            try {
                return require("moment")
            } catch (t) { }
        }()) : "function" == typeof define && define.amd ? define(["require"], function (t) {
            return e(function () {
                try {
                    return t("moment")
                } catch (t) { }
            }())
        }) : t.Chart = e(t.moment)
    }(this, function (t) {
        "use strict";
        function e(t) {
            var e, n, i, o = t[0] / 255, r = t[1] / 255, a = t[2] / 255, s = Math.min(o, r, a), l = Math.max(o, r, a), u = l - s;
            return l == s ? e = 0 : o == l ? e = (r - a) / u : r == l ? e = 2 + (a - o) / u : a == l && (e = 4 + (o - r) / u),
                e = Math.min(60 * e, 360),
                e < 0 && (e += 360),
                i = (s + l) / 2,
                n = l == s ? 0 : i <= .5 ? u / (l + s) : u / (2 - l - s),
                [e, 100 * n, 100 * i]
        }
        function n(t) {
            var e, n, i, o = t[0], r = t[1], a = t[2], s = Math.min(o, r, a), l = Math.max(o, r, a), u = l - s;
            return n = 0 == l ? 0 : u / l * 1e3 / 10,
                l == s ? e = 0 : o == l ? e = (r - a) / u : r == l ? e = 2 + (a - o) / u : a == l && (e = 4 + (o - r) / u),
                e = Math.min(60 * e, 360),
                e < 0 && (e += 360),
                i = l / 255 * 1e3 / 10,
                [e, n, i]
        }
        function i(t) {
            var n = t[0]
                , i = t[1]
                , o = t[2]
                , r = e(t)[0]
                , a = 1 / 255 * Math.min(n, Math.min(i, o))
                , o = 1 - 1 / 255 * Math.max(n, Math.max(i, o));
            return [r, 100 * a, 100 * o]
        }
        function o(t) {
            var e, n, i, o, r = t[0] / 255, a = t[1] / 255, s = t[2] / 255;
            return o = Math.min(1 - r, 1 - a, 1 - s),
                e = (1 - r - o) / (1 - o) || 0,
                n = (1 - a - o) / (1 - o) || 0,
                i = (1 - s - o) / (1 - o) || 0,
                [100 * e, 100 * n, 100 * i, 100 * o]
        }
        function a(t) {
            return on[JSON.stringify(t)]
        }
        function s(t) {
            var e = t[0] / 255
                , n = t[1] / 255
                , i = t[2] / 255;
            return e = e > .04045 ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92,
                n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92,
                i = i > .04045 ? Math.pow((i + .055) / 1.055, 2.4) : i / 12.92,
                [100 * (.4124 * e + .3576 * n + .1805 * i), 100 * (.2126 * e + .7152 * n + .0722 * i), 100 * (.0193 * e + .1192 * n + .9505 * i)]
        }
        function l(t) {
            var e, n, i, o = s(t), r = o[0], a = o[1], l = o[2];
            return r /= 95.047,
                a /= 100,
                l /= 108.883,
                r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116,
                a = a > .008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116,
                l = l > .008856 ? Math.pow(l, 1 / 3) : 7.787 * l + 16 / 116,
                e = 116 * a - 16,
                n = 500 * (r - a),
                i = 200 * (a - l),
                [e, n, i]
        }
        function u(t) {
            return R(l(t))
        }
        function c(t) {
            var e, n, i, o, r, a = t[0] / 360, s = t[1] / 100, l = t[2] / 100;
            if (0 == s)
                return r = 255 * l,
                    [r, r, r];
            n = l < .5 ? l * (1 + s) : l + s - l * s,
                e = 2 * l - n,
                o = [0, 0, 0];
            for (var u = 0; u < 3; u++)
                i = a + 1 / 3 * -(u - 1),
                    i < 0 && i++,
                    i > 1 && i--,
                    r = 6 * i < 1 ? e + 6 * (n - e) * i : 2 * i < 1 ? n : 3 * i < 2 ? e + (n - e) * (2 / 3 - i) * 6 : e,
                    o[u] = 255 * r;
            return o
        }
        function d(t) {
            var e, n, i = t[0], o = t[1] / 100, r = t[2] / 100;
            return 0 === r ? [0, 0, 0] : (r *= 2,
                o *= r <= 1 ? r : 2 - r,
                n = (r + o) / 2,
                e = 2 * o / (r + o),
                [i, 100 * e, 100 * n])
        }
        function h(t) {
            return i(c(t))
        }
        function f(t) {
            return o(c(t))
        }
        function p(t) {
            return a(c(t))
        }
        function m(t) {
            var e = t[0] / 60
                , n = t[1] / 100
                , i = t[2] / 100
                , o = Math.floor(e) % 6
                , r = e - Math.floor(e)
                , a = 255 * i * (1 - n)
                , s = 255 * i * (1 - n * r)
                , l = 255 * i * (1 - n * (1 - r))
                , i = 255 * i;
            switch (o) {
                case 0:
                    return [i, l, a];
                case 1:
                    return [s, i, a];
                case 2:
                    return [a, i, l];
                case 3:
                    return [a, s, i];
                case 4:
                    return [l, a, i];
                case 5:
                    return [i, a, s]
            }
        }
        function v(t) {
            var e, n, i = t[0], o = t[1] / 100, r = t[2] / 100;
            return n = (2 - o) * r,
                e = o * r,
                e /= n <= 1 ? n : 2 - n,
                e = e || 0,
                n /= 2,
                [i, 100 * e, 100 * n]
        }
        function y(t) {
            return i(m(t))
        }
        function x(t) {
            return o(m(t))
        }
        function w(t) {
            return a(m(t))
        }
        function k(t) {
            var e, n, i, o, a = t[0] / 360, s = t[1] / 100, l = t[2] / 100, u = s + l;
            switch (u > 1 && (s /= u,
                l /= u),
            e = Math.floor(6 * a),
            n = 1 - l,
            i = 6 * a - e,
            0 != (1 & e) && (i = 1 - i),
            o = s + i * (n - s),
            e) {
                default:
                case 6:
                case 0:
                    r = n,
                        g = o,
                        b = s;
                    break;
                case 1:
                    r = o,
                        g = n,
                        b = s;
                    break;
                case 2:
                    r = s,
                        g = n,
                        b = o;
                    break;
                case 3:
                    r = s,
                        g = o,
                        b = n;
                    break;
                case 4:
                    r = o,
                        g = s,
                        b = n;
                    break;
                case 5:
                    r = n,
                        g = s,
                        b = o
            }
            return [255 * r, 255 * g, 255 * b]
        }
        function C(t) {
            return e(k(t))
        }
        function T(t) {
            return n(k(t))
        }
        function S(t) {
            return o(k(t))
        }
        function M(t) {
            return a(k(t))
        }
        function A(t) {
            var e, n, i, o = t[0] / 100, r = t[1] / 100, a = t[2] / 100, s = t[3] / 100;
            return e = 1 - Math.min(1, o * (1 - s) + s),
                n = 1 - Math.min(1, r * (1 - s) + s),
                i = 1 - Math.min(1, a * (1 - s) + s),
                [255 * e, 255 * n, 255 * i]
        }
        function _(t) {
            return e(A(t))
        }
        function D(t) {
            return n(A(t))
        }
        function P(t) {
            return i(A(t))
        }
        function I(t) {
            return a(A(t))
        }
        function E(t) {
            var e, n, i, o = t[0] / 100, r = t[1] / 100, a = t[2] / 100;
            return e = 3.2406 * o + -1.5372 * r + -.4986 * a,
                n = -.9689 * o + 1.8758 * r + .0415 * a,
                i = .0557 * o + -.204 * r + 1.057 * a,
                e = e > .0031308 ? 1.055 * Math.pow(e, 1 / 2.4) - .055 : e *= 12.92,
                n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : n *= 12.92,
                i = i > .0031308 ? 1.055 * Math.pow(i, 1 / 2.4) - .055 : i *= 12.92,
                e = Math.min(Math.max(0, e), 1),
                n = Math.min(Math.max(0, n), 1),
                i = Math.min(Math.max(0, i), 1),
                [255 * e, 255 * n, 255 * i]
        }
        function N(t) {
            var e, n, i, o = t[0], r = t[1], a = t[2];
            return o /= 95.047,
                r /= 100,
                a /= 108.883,
                o = o > .008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116,
                r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116,
                a = a > .008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116,
                e = 116 * r - 16,
                n = 500 * (o - r),
                i = 200 * (r - a),
                [e, n, i]
        }
        function L(t) {
            return R(N(t))
        }
        function O(t) {
            var e, n, i, o, r = t[0], a = t[1], s = t[2];
            return r <= 8 ? (n = 100 * r / 903.3,
                o = n / 100 * 7.787 + 16 / 116) : (n = 100 * Math.pow((r + 16) / 116, 3),
                    o = Math.pow(n / 100, 1 / 3)),
                e = e / 95.047 <= .008856 ? e = 95.047 * (a / 500 + o - 16 / 116) / 7.787 : 95.047 * Math.pow(a / 500 + o, 3),
                i = i / 108.883 <= .008859 ? i = 108.883 * (o - s / 200 - 16 / 116) / 7.787 : 108.883 * Math.pow(o - s / 200, 3),
                [e, n, i]
        }
        function R(t) {
            var e, n, i, o = t[0], r = t[1], a = t[2];
            return e = Math.atan2(a, r),
                n = 360 * e / 2 / Math.PI,
                n < 0 && (n += 360),
                i = Math.sqrt(r * r + a * a),
                [o, i, n]
        }
        function F(t) {
            return E(O(t))
        }
        function $(t) {
            var e, n, i, o = t[0], r = t[1], a = t[2];
            return i = a / 360 * 2 * Math.PI,
                e = r * Math.cos(i),
                n = r * Math.sin(i),
                [o, e, n]
        }
        function j(t) {
            return O($(t))
        }
        function W(t) {
            return F($(t))
        }
        function H(t) {
            return nn[t]
        }
        function z(t) {
            return e(H(t))
        }
        function B(t) {
            return n(H(t))
        }
        function q(t) {
            return i(H(t))
        }
        function V(t) {
            return o(H(t))
        }
        function U(t) {
            return l(H(t))
        }
        function Y(t) {
            return s(H(t))
        }
        function X(t) {
            if (t) {
                var e = /^#([a-fA-F0-9]{3,4})$/i
                    , n = /^#([a-fA-F0-9]{6}([a-fA-F0-9]{2})?)$/i
                    , i = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i
                    , o = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i
                    , r = /(\w+)/
                    , a = [0, 0, 0]
                    , s = 1
                    , l = t.match(e)
                    , u = "";
                if (l) {
                    l = l[1],
                        u = l[3];
                    for (var c = 0; c < a.length; c++)
                        a[c] = parseInt(l[c] + l[c], 16);
                    u && (s = Math.round(parseInt(u + u, 16) / 255 * 100) / 100)
                } else if (l = t.match(n)) {
                    u = l[2],
                        l = l[1];
                    for (var c = 0; c < a.length; c++)
                        a[c] = parseInt(l.slice(2 * c, 2 * c + 2), 16);
                    u && (s = Math.round(parseInt(u, 16) / 255 * 100) / 100)
                } else if (l = t.match(i)) {
                    for (var c = 0; c < a.length; c++)
                        a[c] = parseInt(l[c + 1]);
                    s = parseFloat(l[4])
                } else if (l = t.match(o)) {
                    for (var c = 0; c < a.length; c++)
                        a[c] = Math.round(2.55 * parseFloat(l[c + 1]));
                    s = parseFloat(l[4])
                } else if (l = t.match(r)) {
                    if ("transparent" == l[1])
                        return [0, 0, 0, 0];
                    if (!(a = fn[l[1]]))
                        return
                }
                for (var c = 0; c < a.length; c++)
                    a[c] = ut(a[c], 0, 255);
                return s = s || 0 == s ? ut(s, 0, 1) : 1,
                    a[3] = s,
                    a
            }
        }
        function K(t) {
            if (t) {
                var e = /^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/
                    , n = t.match(e);
                if (n) {
                    var i = parseFloat(n[4]);
                    return [ut(parseInt(n[1]), 0, 360), ut(parseFloat(n[2]), 0, 100), ut(parseFloat(n[3]), 0, 100), ut(isNaN(i) ? 1 : i, 0, 1)]
                }
            }
        }
        function Q(t) {
            if (t) {
                var e = /^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/
                    , n = t.match(e);
                if (n) {
                    var i = parseFloat(n[4]);
                    return [ut(parseInt(n[1]), 0, 360), ut(parseFloat(n[2]), 0, 100), ut(parseFloat(n[3]), 0, 100), ut(isNaN(i) ? 1 : i, 0, 1)]
                }
            }
        }
        function G(t) {
            var e = X(t);
            return e && e.slice(0, 3)
        }
        function J(t) {
            var e = K(t);
            return e && e.slice(0, 3)
        }
        function Z(t) {
            var e = X(t);
            return e ? e[3] : (e = K(t)) ? e[3] : (e = Q(t)) ? e[3] : void 0
        }
        function tt(t, e) {
            var e = void 0 !== e && 3 === t.length ? e : t[3];
            return "#" + ct(t[0]) + ct(t[1]) + ct(t[2]) + (e >= 0 && e < 1 ? ct(Math.round(255 * e)) : "")
        }
        function et(t, e) {
            return e < 1 || t[3] && t[3] < 1 ? nt(t, e) : "rgb(" + t[0] + ", " + t[1] + ", " + t[2] + ")"
        }
        function nt(t, e) {
            return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1),
                "rgba(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + e + ")"
        }
        function it(t, e) {
            return e < 1 || t[3] && t[3] < 1 ? ot(t, e) : "rgb(" + Math.round(t[0] / 255 * 100) + "%, " + Math.round(t[1] / 255 * 100) + "%, " + Math.round(t[2] / 255 * 100) + "%)"
        }
        function ot(t, e) {
            return "rgba(" + Math.round(t[0] / 255 * 100) + "%, " + Math.round(t[1] / 255 * 100) + "%, " + Math.round(t[2] / 255 * 100) + "%, " + (e || t[3] || 1) + ")"
        }
        function rt(t, e) {
            return e < 1 || t[3] && t[3] < 1 ? at(t, e) : "hsl(" + t[0] + ", " + t[1] + "%, " + t[2] + "%)"
        }
        function at(t, e) {
            return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1),
                "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + e + ")"
        }
        function st(t, e) {
            return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1),
                "hwb(" + t[0] + ", " + t[1] + "%, " + t[2] + "%" + (void 0 !== e && 1 !== e ? ", " + e : "") + ")"
        }
        function lt(t) {
            return gn[t.slice(0, 3)]
        }
        function ut(t, e, n) {
            return Math.min(Math.max(e, t), n)
        }
        function ct(t) {
            var e = t.toString(16).toUpperCase();
            return e.length < 2 ? "0" + e : e
        }
        function dt(t) {
            return !t || xn.isNullOrUndef(t.size) || xn.isNullOrUndef(t.family) ? null : (t.style ? t.style + " " : "") + (t.weight ? t.weight + " " : "") + t.size + "px " + t.family
        }
        function ht(t, e, n, i) {
            var o, r, a, s, l, u, c, d, h, f = Object.keys(n);
            for (o = 0,
                r = f.length; o < r; ++o)
                if (a = f[o],
                    u = n[a],
                    e.hasOwnProperty(a) || (e[a] = u),
                    (s = e[a]) !== u && "_" !== a[0]) {
                    if (t.hasOwnProperty(a) || (t[a] = s),
                        l = t[a],
                        (c = typeof u) === typeof l)
                        if ("string" === c) {
                            if (d = yn(l),
                                d.valid && (h = yn(u),
                                    h.valid)) {
                                e[a] = h.mix(d, i).rgbString();
                                continue
                            }
                        } else if (On.isFinite(l) && On.isFinite(u)) {
                            e[a] = l + (u - l) * i;
                            continue
                        }
                    e[a] = u
                }
        }
        function ft(t, e) {
            if (t._chartjs)
                return void t._chartjs.listeners.push(e);
            Object.defineProperty(t, "_chartjs", {
                configurable: !0,
                enumerable: !1,
                value: {
                    listeners: [e]
                }
            }),
                Vn.forEach(function (e) {
                    var n = "onData" + e.charAt(0).toUpperCase() + e.slice(1)
                        , i = t[e];
                    Object.defineProperty(t, e, {
                        configurable: !0,
                        enumerable: !1,
                        value: function () {
                            var e = Array.prototype.slice.call(arguments)
                                , o = i.apply(this, e);
                            return On.each(t._chartjs.listeners, function (t) {
                                "function" == typeof t[n] && t[n].apply(t, e)
                            }),
                                o
                        }
                    })
                })
        }
        function pt(t, e) {
            var n = t._chartjs;
            if (n) {
                var i = n.listeners
                    , o = i.indexOf(e);
                -1 !== o && i.splice(o, 1),
                    i.length > 0 || (Vn.forEach(function (e) {
                        delete t[e]
                    }),
                        delete t._chartjs)
            }
        }
        function gt(t) {
            var e = this._view;
            return !!e && Math.abs(t - e.x) < e.radius + e.hitRadius
        }
        function mt(t) {
            var e = this._view;
            return !!e && Math.abs(t - e.y) < e.radius + e.hitRadius
        }
        function vt(t) {
            return t && void 0 !== t.width
        }
        function yt(t) {
            var e, n, i, o, r;
            return vt(t) ? (r = t.width / 2,
                e = t.x - r,
                n = t.x + r,
                i = Math.min(t.y, t.base),
                o = Math.max(t.y, t.base)) : (r = t.height / 2,
                    e = Math.min(t.x, t.base),
                    n = Math.max(t.x, t.base),
                    i = t.y - r,
                    o = t.y + r),
            {
                left: e,
                top: i,
                right: n,
                bottom: o
            }
        }
        function bt(t, e, n) {
            return t === e ? n : t === n ? e : t
        }
        function xt(t) {
            var e = t.borderSkipped
                , n = {};
            return e ? (t.horizontal ? t.base > t.x && (e = bt(e, "left", "right")) : t.base < t.y && (e = bt(e, "bottom", "top")),
                n[e] = !0,
                n) : n
        }
        function wt(t, e, n) {
            var i, o, r, a, s = t.borderWidth, l = xt(t);
            return On.isObject(s) ? (i = +s.top || 0,
                o = +s.right || 0,
                r = +s.bottom || 0,
                a = +s.left || 0) : i = o = r = a = +s || 0,
            {
                t: l.top || i < 0 ? 0 : i > n ? n : i,
                r: l.right || o < 0 ? 0 : o > e ? e : o,
                b: l.bottom || r < 0 ? 0 : r > n ? n : r,
                l: l.left || a < 0 ? 0 : a > e ? e : a
            }
        }
        function kt(t) {
            var e = yt(t)
                , n = e.right - e.left
                , i = e.bottom - e.top
                , o = wt(t, n / 2, i / 2);
            return {
                outer: {
                    x: e.left,
                    y: e.top,
                    w: n,
                    h: i
                },
                inner: {
                    x: e.left + o.l,
                    y: e.top + o.t,
                    w: n - o.l - o.r,
                    h: i - o.t - o.b
                }
            }
        }
        function Ct(t, e, n) {
            var i = null === e
                , o = null === n
                , r = !(!t || i && o) && yt(t);
            return r && (i || e >= r.left && e <= r.right) && (o || n >= r.top && n <= r.bottom)
        }
        function Tt(t, e) {
            var n, i, o, r, a = t.isHorizontal() ? t.width : t.height, s = t.getTicks();
            for (o = 1,
                r = e.length; o < r; ++o)
                a = Math.min(a, Math.abs(e[o] - e[o - 1]));
            for (o = 0,
                r = s.length; o < r; ++o)
                i = t.getPixelForTick(o),
                    a = o > 0 ? Math.min(a, i - n) : a,
                    n = i;
            return a
        }
        function St(t, e, n) {
            var i, o, r = n.barThickness, a = e.stackCount, s = e.pixels[t];
            return On.isNullOrUndef(r) ? (i = e.min * n.categoryPercentage,
                o = n.barPercentage) : (i = r * a,
                    o = 1),
            {
                chunk: i / a,
                ratio: o,
                start: s - i / 2
            }
        }
        function Mt(t, e, n) {
            var i, o, r = e.pixels, a = r[t], s = t > 0 ? r[t - 1] : null, l = t < r.length - 1 ? r[t + 1] : null, u = n.categoryPercentage;
            return null === s && (s = a - (null === l ? e.end - e.start : l - a)),
                null === l && (l = a + a - s),
                i = a - (a - Math.min(s, l)) / 2 * u,
                o = Math.abs(l - s) / 2 * u,
            {
                chunk: o / e.stackCount,
                ratio: n.barPercentage,
                start: i
            }
        }
        function At(t, e) {
            return vi(t.showLine, e.showLines)
        }
        function _t(t, e) {
            return t.native ? {
                x: t.x,
                y: t.y
            } : On.getRelativePosition(t, e)
        }
        function Dt(t, e) {
            var n, i, o, r, a, s = t.data.datasets;
            for (i = 0,
                r = s.length; i < r; ++i)
                if (t.isDatasetVisible(i))
                    for (n = t.getDatasetMeta(i),
                        o = 0,
                        a = n.data.length; o < a; ++o) {
                        var l = n.data[o];
                        l._view.skip || e(l)
                    }
        }
        function Pt(t, e) {
            var n = [];
            return Dt(t, function (t) {
                t.inRange(e.x, e.y) && n.push(t)
            }),
                n
        }
        function It(t, e, n, i) {
            var o = Number.POSITIVE_INFINITY
                , r = [];
            return Dt(t, function (t) {
                if (!n || t.inRange(e.x, e.y)) {
                    var a = t.getCenterPoint()
                        , s = i(e, a);
                    s < o ? (r = [t],
                        o = s) : s === o && r.push(t)
                }
            }),
                r
        }
        function Et(t) {
            var e = -1 !== t.indexOf("x")
                , n = -1 !== t.indexOf("y");
            return function (t, i) {
                var o = e ? Math.abs(t.x - i.x) : 0
                    , r = n ? Math.abs(t.y - i.y) : 0;
                return Math.sqrt(Math.pow(o, 2) + Math.pow(r, 2))
            }
        }
        function Nt(t, e, n) {
            var i = _t(e, t);
            n.axis = n.axis || "x";
            var o = Et(n.axis)
                , r = n.intersect ? Pt(t, i) : It(t, i, !1, o)
                , a = [];
            return r.length ? (t.data.datasets.forEach(function (e, n) {
                if (t.isDatasetVisible(n)) {
                    var i = t.getDatasetMeta(n)
                        , o = i.data[r[0]._index];
                    o && !o._view.skip && a.push(o)
                }
            }),
                a) : []
        }
        function Lt(t, e) {
            return On.where(t, function (t) {
                return t.position === e
            })
        }
        function Ot(t, e) {
            t.forEach(function (t, e) {
                return t._tmpIndex_ = e,
                    t
            }),
                t.sort(function (t, n) {
                    var i = e ? n : t
                        , o = e ? t : n;
                    return i.weight === o.weight ? i._tmpIndex_ - o._tmpIndex_ : i.weight - o.weight
                }),
                t.forEach(function (t) {
                    delete t._tmpIndex_
                })
        }
        function Rt(t) {
            var e = 0
                , n = 0
                , i = 0
                , o = 0;
            return On.each(t, function (t) {
                if (t.getPadding) {
                    var r = t.getPadding();
                    e = Math.max(e, r.top),
                        n = Math.max(n, r.left),
                        i = Math.max(i, r.bottom),
                        o = Math.max(o, r.right)
                }
            }),
            {
                top: e,
                left: n,
                bottom: i,
                right: o
            }
        }
        function Ft(t, e) {
            On.each(t, function (t) {
                e[t.position] += t.isHorizontal() ? t.height : t.width
            })
        }
        function $t(t, e) {
            var n = On.getStyle(t, e)
                , i = n && n.match(/^(\d+)(\.\d+)?px$/);
            return i ? Number(i[1]) : void 0
        }
        function jt(t, e) {
            var n = t.style
                , i = t.getAttribute("height")
                , o = t.getAttribute("width");
            if (t[Li] = {
                initial: {
                    height: i,
                    width: o,
                    style: {
                        display: n.display,
                        height: n.height,
                        width: n.width
                    }
                }
            },
                n.display = n.display || "block",
                null === o || "" === o) {
                var r = $t(t, "width");
                void 0 !== r && (t.width = r)
            }
            if (null === i || "" === i)
                if ("" === t.style.height)
                    t.height = t.width / (e.options.aspectRatio || 2);
                else {
                    var a = $t(t, "height");
                    void 0 !== r && (t.height = a)
                }
            return t
        }
        function Wt(t, e, n) {
            t.addEventListener(e, n, Hi)
        }
        function Ht(t, e, n) {
            t.removeEventListener(e, n, Hi)
        }
        function zt(t, e, n, i, o) {
            return {
                type: t,
                chart: e,
                native: o || null,
                x: void 0 !== n ? n : null,
                y: void 0 !== i ? i : null
            }
        }
        function Bt(t, e) {
            var n = ji[t.type] || t.type
                , i = On.getRelativePosition(t, e);
            return zt(n, e, i.x, i.y, t)
        }
        function qt(t, e) {
            var n = !1
                , i = [];
            return function () {
                i = Array.prototype.slice.call(arguments),
                    e = e || this,
                    n || (n = !0,
                        On.requestAnimFrame.call(window, function () {
                            n = !1,
                                t.apply(e, i)
                        }))
            }
        }
        function Vt(t) {
            var e = document.createElement("div");
            return e.className = t || "",
                e
        }
        function Ut(t) {
            var e = Vt(Oi)
                , n = Vt(Oi + "-expand")
                , i = Vt(Oi + "-shrink");
            n.appendChild(Vt()),
                i.appendChild(Vt()),
                e.appendChild(n),
                e.appendChild(i),
                e._reset = function () {
                    n.scrollLeft = 1e6,
                        n.scrollTop = 1e6,
                        i.scrollLeft = 1e6,
                        i.scrollTop = 1e6
                }
                ;
            var o = function () {
                e._reset(),
                    t()
            };
            return Wt(n, "scroll", o.bind(n, "expand")),
                Wt(i, "scroll", o.bind(i, "shrink")),
                e
        }
        function Yt(t, e) {
            var n = t[Li] || (t[Li] = {})
                , i = n.renderProxy = function (t) {
                    t.animationName === Fi && e()
                }
                ;
            On.each($i, function (e) {
                Wt(t, e, i)
            }),
                n.reflow = !!t.offsetParent,
                t.classList.add(Ri)
        }
        function Xt(t) {
            var e = t[Li] || {}
                , n = e.renderProxy;
            n && (On.each($i, function (e) {
                Ht(t, e, n)
            }),
                delete e.renderProxy),
                t.classList.remove(Ri)
        }
        function Kt(t, e, n) {
            var i = t[Li] || (t[Li] = {})
                , o = i.resizer = Ut(qt(function () {
                    if (i.resizer) {
                        var o = n.options.maintainAspectRatio && t.parentNode
                            , r = o ? o.clientWidth : 0;
                        e(zt("resize", n)),
                            o && o.clientWidth < r && n.canvas && e(zt("resize", n))
                    }
                }));
            Yt(t, function () {
                if (i.resizer) {
                    var e = t.parentNode;
                    e && e !== o.parentNode && e.insertBefore(o, e.firstChild),
                        o._reset()
                }
            })
        }
        function Qt(t) {
            var e = t[Li] || {}
                , n = e.resizer;
            delete e.resizer,
                Xt(t),
                n && n.parentNode && n.parentNode.removeChild(n)
        }
        function Gt(t, e) {
            var n = t._style || document.createElement("style");
            t._style || (t._style = n,
                e = "/* Chart.js */\n" + e,
                n.setAttribute("type", "text/css"),
                document.getElementsByTagName("head")[0].appendChild(n)),
                n.appendChild(document.createTextNode(e))
        }
        function Jt(t, e) {
            return e && (On.isArray(e) ? Array.prototype.push.apply(t, e) : t.push(e)),
                t
        }
        function Zt(t) {
            return ("string" == typeof t || t instanceof String) && t.indexOf("\n") > -1 ? t.split("\n") : t
        }
        function te(t) {
            var e = t._xScale
                , n = t._yScale || t._scale
                , i = t._index
                , o = t._datasetIndex
                , r = t._chart.getDatasetMeta(o).controller
                , a = r._getIndexScale()
                , s = r._getValueScale();
            return {
                xLabel: e ? e.getLabelForIndex(i, o) : "",
                yLabel: n ? n.getLabelForIndex(i, o) : "",
                label: a ? "" + a.getLabelForIndex(i, o) : "",
                value: s ? "" + s.getLabelForIndex(i, o) : "",
                index: i,
                datasetIndex: o,
                x: t._model.x,
                y: t._model.y
            }
        }
        function ee(t) {
            var e = En.global;
            return {
                xPadding: t.xPadding,
                yPadding: t.yPadding,
                xAlign: t.xAlign,
                yAlign: t.yAlign,
                bodyFontColor: t.bodyFontColor,
                _bodyFontFamily: Yi(t.bodyFontFamily, e.defaultFontFamily),
                _bodyFontStyle: Yi(t.bodyFontStyle, e.defaultFontStyle),
                _bodyAlign: t.bodyAlign,
                bodyFontSize: Yi(t.bodyFontSize, e.defaultFontSize),
                bodySpacing: t.bodySpacing,
                titleFontColor: t.titleFontColor,
                _titleFontFamily: Yi(t.titleFontFamily, e.defaultFontFamily),
                _titleFontStyle: Yi(t.titleFontStyle, e.defaultFontStyle),
                titleFontSize: Yi(t.titleFontSize, e.defaultFontSize),
                _titleAlign: t.titleAlign,
                titleSpacing: t.titleSpacing,
                titleMarginBottom: t.titleMarginBottom,
                footerFontColor: t.footerFontColor,
                _footerFontFamily: Yi(t.footerFontFamily, e.defaultFontFamily),
                _footerFontStyle: Yi(t.footerFontStyle, e.defaultFontStyle),
                footerFontSize: Yi(t.footerFontSize, e.defaultFontSize),
                _footerAlign: t.footerAlign,
                footerSpacing: t.footerSpacing,
                footerMarginTop: t.footerMarginTop,
                caretSize: t.caretSize,
                cornerRadius: t.cornerRadius,
                backgroundColor: t.backgroundColor,
                opacity: 0,
                legendColorBackground: t.multiKeyBackground,
                displayColors: t.displayColors,
                borderColor: t.borderColor,
                borderWidth: t.borderWidth
            }
        }
        function ne(t, e) {
            var n = t._chart.ctx
                , i = 2 * e.yPadding
                , o = 0
                , r = e.body
                , a = r.reduce(function (t, e) {
                    return t + e.before.length + e.lines.length + e.after.length
                }, 0);
            a += e.beforeBody.length + e.afterBody.length;
            var s = e.title.length
                , l = e.footer.length
                , u = e.titleFontSize
                , c = e.bodyFontSize
                , d = e.footerFontSize;
            i += s * u,
                i += s ? (s - 1) * e.titleSpacing : 0,
                i += s ? e.titleMarginBottom : 0,
                i += a * c,
                i += a ? (a - 1) * e.bodySpacing : 0,
                i += l ? e.footerMarginTop : 0,
                i += l * d,
                i += l ? (l - 1) * e.footerSpacing : 0;
            var h = 0
                , f = function (t) {
                    o = Math.max(o, n.measureText(t).width + h)
                };
            return n.font = On.fontString(u, e._titleFontStyle, e._titleFontFamily),
                On.each(e.title, f),
                n.font = On.fontString(c, e._bodyFontStyle, e._bodyFontFamily),
                On.each(e.beforeBody.concat(e.afterBody), f),
                h = e.displayColors ? c + 2 : 0,
                On.each(r, function (t) {
                    On.each(t.before, f),
                        On.each(t.lines, f),
                        On.each(t.after, f)
                }),
                h = 0,
                n.font = On.fontString(d, e._footerFontStyle, e._footerFontFamily),
                On.each(e.footer, f),
                o += 2 * e.xPadding,
            {
                width: o,
                height: i
            }
        }
        function ie(t, e) {
            var n = t._model
                , i = t._chart
                , o = t._chart.chartArea
                , r = "center"
                , a = "center";
            n.y < e.height ? a = "top" : n.y > i.height - e.height && (a = "bottom");
            var s, l, u, c, d, h = (o.left + o.right) / 2, f = (o.top + o.bottom) / 2;
            "center" === a ? (s = function (t) {
                return t <= h
            }
                ,
                l = function (t) {
                    return t > h
                }
            ) : (s = function (t) {
                return t <= e.width / 2
            }
                ,
                l = function (t) {
                    return t >= i.width - e.width / 2
                }
            ),
                u = function (t) {
                    return t + e.width + n.caretSize + n.caretPadding > i.width
                }
                ,
                c = function (t) {
                    return t - e.width - n.caretSize - n.caretPadding < 0
                }
                ,
                d = function (t) {
                    return t <= f ? "top" : "bottom"
                }
                ,
                s(n.x) ? (r = "left",
                    u(n.x) && (r = "center",
                        a = d(n.y))) : l(n.x) && (r = "right",
                            c(n.x) && (r = "center",
                                a = d(n.y)));
            var p = t._options;
            return {
                xAlign: p.xAlign ? p.xAlign : r,
                yAlign: p.yAlign ? p.yAlign : a
            }
        }
        function oe(t, e, n, i) {
            var o = t.x
                , r = t.y
                , a = t.caretSize
                , s = t.caretPadding
                , l = t.cornerRadius
                , u = n.xAlign
                , c = n.yAlign
                , d = a + s
                , h = l + s;
            return "right" === u ? o -= e.width : "center" === u && (o -= e.width / 2,
                o + e.width > i.width && (o = i.width - e.width),
                o < 0 && (o = 0)),
                "top" === c ? r += d : r -= "bottom" === c ? e.height + d : e.height / 2,
                "center" === c ? "left" === u ? o += d : "right" === u && (o -= d) : "left" === u ? o -= h : "right" === u && (o += h),
            {
                x: o,
                y: r
            }
        }
        function re(t, e) {
            return "center" === e ? t.x + t.width / 2 : "right" === e ? t.x + t.width - t.xPadding : t.x + t.xPadding
        }
        function ae(t) {
            return Jt([], Zt(t))
        }
        function se() {
            return On.merge({}, [].slice.call(arguments), {
                merger: function (t, e, n, i) {
                    if ("xAxes" === t || "yAxes" === t) {
                        var o, r, a, s = n[t].length;
                        for (e[t] || (e[t] = []),
                            o = 0; o < s; ++o)
                            a = n[t][o],
                                r = Ji(a.type, "xAxes" === t ? "category" : "linear"),
                                o >= e[t].length && e[t].push({}),
                                !e[t][o].type || a.type && a.type !== e[t][o].type ? On.merge(e[t][o], [Ui.getScaleDefaults(r), a]) : On.merge(e[t][o], a)
                    } else
                        On._merger(t, e, n, i)
                }
            })
        }
        function le() {
            return On.merge({}, [].slice.call(arguments), {
                merger: function (t, e, n, i) {
                    var o = e[t] || {}
                        , r = n[t];
                    "scales" === t ? e[t] = se(o, r) : "scale" === t ? e[t] = On.merge(o, [Ui.getScaleDefaults(r.type), r]) : On._merger(t, e, n, i)
                }
            })
        }
        function ue(t) {
            t = t || {};
            var e = t.data = t.data || {};
            return e.datasets = e.datasets || [],
                e.labels = e.labels || [],
                t.options = le(En.global, En[t.type], t.options || {}),
                t
        }
        function ce(t) {
            var e = t.options;
            On.each(t.scales, function (e) {
                Pi.removeBox(t, e)
            }),
                e = le(En.global, En[t.config.type], e),
                t.options = t.config.options = e,
                t.ensureScalesHaveIDs(),
                t.buildOrUpdateScales(),
                t.tooltip._options = e.tooltips,
                t.tooltip.initialize()
        }
        function de(t) {
            return "top" === t || "bottom" === t
        }
        function he() {
            throw new Error("This method is not implemented: either no adapter can be found or an incomplete integration was provided.")
        }
        function fe(t) {
            this.options = t || {}
        }
        function pe(t) {
            var e, n, i = [];
            for (e = 0,
                n = t.length; e < n; ++e)
                i.push(t[e].label);
            return i
        }
        function ge(t, e, n) {
            var i = t.getPixelForTick(e);
            return n && (1 === t.getTicks().length ? i -= t.isHorizontal() ? Math.max(i - t.left, t.right - i) : Math.max(i - t.top, t.bottom - i) : i -= 0 === e ? (t.getPixelForTick(1) - i) / 2 : (i - t.getPixelForTick(e - 1)) / 2),
                i
        }
        function me(t, e, n) {
            return On.isArray(e) ? On.longestText(t, n, e) : t.measureText(e).width
        }
        function ve(t, e) {
            var n, i, o, r, a = [], s = t.stepSize, l = s || 1, u = t.maxTicks - 1, c = t.min, d = t.max, h = t.precision, f = e.min, p = e.max, g = On.niceNum((p - f) / u / l) * l;
            if (g < 1e-14 && ho(c) && ho(d))
                return [f, p];
            r = Math.ceil(p / g) - Math.floor(f / g),
                r > u && (g = On.niceNum(r * g / u / l) * l),
                s || ho(h) ? n = Math.pow(10, On._decimalPlaces(g)) : (n = Math.pow(10, h),
                    g = Math.ceil(g * n) / n),
                i = Math.floor(f / g) * g,
                o = Math.ceil(p / g) * g,
                s && (!ho(c) && On.almostWhole(c / g, g / 1e3) && (i = c),
                    !ho(d) && On.almostWhole(d / g, g / 1e3) && (o = d)),
                r = (o - i) / g,
                r = On.almostEquals(r, Math.round(r), g / 1e3) ? Math.round(r) : Math.ceil(r),
                i = Math.round(i * n) / n,
                o = Math.round(o * n) / n,
                a.push(ho(c) ? i : c);
            for (var m = 1; m < r; ++m)
                a.push(Math.round((i + m * g) * n) / n);
            return a.push(ho(d) ? o : d),
                a
        }
        function ye(t, e) {
            var n, i, o = [], r = vo(t.min, Math.pow(10, Math.floor(On.log10(e.min)))), a = Math.floor(On.log10(e.max)), s = Math.ceil(e.max / Math.pow(10, a));
            0 === r ? (n = Math.floor(On.log10(e.minNotZero)),
                i = Math.floor(e.minNotZero / Math.pow(10, n)),
                o.push(r),
                r = i * Math.pow(10, n)) : (n = Math.floor(On.log10(r)),
                    i = Math.floor(r / Math.pow(10, n)));
            var l = n < 0 ? Math.pow(10, Math.abs(n)) : 1;
            do {
                o.push(r),
                    ++i,
                    10 === i && (i = 1,
                        ++n,
                        l = n >= 0 ? 1 : l),
                    r = Math.round(i * Math.pow(10, n) * l) / l
            } while (n < a || n === a && i < s);
            var u = vo(t.max, r);
            return o.push(u),
                o
        }
        function be(t, e) {
            return On.isFinite(t) && t >= 0 ? t : e
        }
        function xe(t) {
            var e = t.options;
            return e.angleLines.display || e.pointLabels.display ? t.chart.data.labels.length : 0
        }
        function we(t) {
            var e = t.ticks;
            return e.display && t.display ? wo(e.fontSize, En.global.defaultFontSize) + 2 * e.backdropPaddingY : 0
        }
        function ke(t, e, n) {
            return On.isArray(n) ? {
                w: On.longestText(t, t.font, n),
                h: n.length * e
            } : {
                w: t.measureText(n).width,
                h: e
            }
        }
        function Ce(t, e, n, i, o) {
            return t === i || t === o ? {
                start: e - n / 2,
                end: e + n / 2
            } : t < i || t > o ? {
                start: e - n,
                end: e
            } : {
                start: e,
                end: e + n
            }
        }
        function Te(t) {
            var e, n, i, o = On.options._parseFont(t.options.pointLabels), r = {
                l: 0,
                r: t.width,
                t: 0,
                b: t.height - t.paddingTop
            }, a = {};
            t.ctx.font = o.string,
                t._pointLabelSizes = [];
            var s = xe(t);
            for (e = 0; e < s; e++) {
                i = t.getPointPosition(e, t.drawingArea + 5),
                    n = ke(t.ctx, o.lineHeight, t.pointLabels[e] || ""),
                    t._pointLabelSizes[e] = n;
                var l = t.getIndexAngle(e)
                    , u = On.toDegrees(l) % 360
                    , c = Ce(u, i.x, n.w, 0, 180)
                    , d = Ce(u, i.y, n.h, 90, 270);
                c.start < r.l && (r.l = c.start,
                    a.l = l),
                    c.end > r.r && (r.r = c.end,
                        a.r = l),
                    d.start < r.t && (r.t = d.start,
                        a.t = l),
                    d.end > r.b && (r.b = d.end,
                        a.b = l)
            }
            t.setReductions(t.drawingArea, r, a)
        }
        function Se(t) {
            return 0 === t || 180 === t ? "center" : t < 180 ? "left" : "right"
        }
        function Me(t, e, n, i) {
            var o, r, a = n.y + i / 2;
            if (On.isArray(e))
                for (o = 0,
                    r = e.length; o < r; ++o)
                    t.fillText(e[o], n.x, a),
                        a += i;
            else
                t.fillText(e, n.x, a)
        }
        function Ae(t, e, n) {
            90 === t || 270 === t ? n.y -= e.h / 2 : (t > 270 || t < 90) && (n.y -= e.h)
        }
        function _e(t) {
            var e = t.ctx
                , n = t.options
                , i = n.angleLines
                , o = n.gridLines
                , r = n.pointLabels
                , a = wo(i.lineWidth, o.lineWidth)
                , s = wo(i.color, o.color)
                , l = we(n);
            e.save(),
                e.lineWidth = a,
                e.strokeStyle = s,
                e.setLineDash && (e.setLineDash(Co([i.borderDash, o.borderDash, []])),
                    e.lineDashOffset = Co([i.borderDashOffset, o.borderDashOffset, 0]));
            var u = t.getDistanceFromCenterForValue(n.ticks.reverse ? t.min : t.max)
                , c = On.options._parseFont(r);
            e.font = c.string,
                e.textBaseline = "middle";
            for (var d = xe(t) - 1; d >= 0; d--) {
                if (i.display && a && s) {
                    var h = t.getPointPosition(d, u);
                    e.beginPath(),
                        e.moveTo(t.xCenter, t.yCenter),
                        e.lineTo(h.x, h.y),
                        e.stroke()
                }
                if (r.display) {
                    var f = 0 === d ? l / 2 : 0
                        , p = t.getPointPosition(d, u + f + 5)
                        , g = ko(r.fontColor, d, En.global.defaultFontColor);
                    e.fillStyle = g;
                    var m = t.getIndexAngle(d)
                        , v = On.toDegrees(m);
                    e.textAlign = Se(v),
                        Ae(v, t._pointLabelSizes[d], p),
                        Me(e, t.pointLabels[d] || "", p, c.lineHeight)
                }
            }
            e.restore()
        }
        function De(t, e, n, i) {
            var o, r = t.ctx, a = e.circular, s = xe(t), l = ko(e.color, i - 1), u = ko(e.lineWidth, i - 1);
            if ((a || s) && l && u) {
                if (r.save(),
                    r.strokeStyle = l,
                    r.lineWidth = u,
                    r.setLineDash && (r.setLineDash(e.borderDash || []),
                        r.lineDashOffset = e.borderDashOffset || 0),
                    r.beginPath(),
                    a)
                    r.arc(t.xCenter, t.yCenter, n, 0, 2 * Math.PI);
                else {
                    o = t.getPointPosition(0, n),
                        r.moveTo(o.x, o.y);
                    for (var c = 1; c < s; c++)
                        o = t.getPointPosition(c, n),
                            r.lineTo(o.x, o.y)
                }
                r.closePath(),
                    r.stroke(),
                    r.restore()
            }
        }
        function Pe(t) {
            return On.isNumber(t) ? t : 0
        }
        function Ie(t, e) {
            return t - e
        }
        function Ee(t) {
            var e, n, i, o = {}, r = [];
            for (e = 0,
                n = t.length; e < n; ++e)
                i = t[e],
                    o[i] || (o[i] = !0,
                        r.push(i));
            return r
        }
        function Ne(t, e, n, i) {
            if ("linear" === i || !t.length)
                return [{
                    time: e,
                    pos: 0
                }, {
                    time: n,
                    pos: 1
                }];
            var o, r, a, s, l, u = [], c = [e];
            for (o = 0,
                r = t.length; o < r; ++o)
                (s = t[o]) > e && s < n && c.push(s);
            for (c.push(n),
                o = 0,
                r = c.length; o < r; ++o)
                l = c[o + 1],
                    a = c[o - 1],
                    s = c[o],
                    void 0 !== a && void 0 !== l && Math.round((l + a) / 2) === s || u.push({
                        time: s,
                        pos: o / (r - 1)
                    });
            return u
        }
        function Le(t, e, n) {
            for (var i, o, r, a = 0, s = t.length - 1; a >= 0 && a <= s;) {
                if (i = a + s >> 1,
                    o = t[i - 1] || null,
                    r = t[i],
                    !o)
                    return {
                        lo: null,
                        hi: r
                    };
                if (r[e] < n)
                    a = i + 1;
                else {
                    if (!(o[e] > n))
                        return {
                            lo: o,
                            hi: r
                        };
                    s = i - 1
                }
            }
            return {
                lo: r,
                hi: null
            }
        }
        function Oe(t, e, n, i) {
            var o = Le(t, e, n)
                , r = o.lo ? o.hi ? o.lo : t[t.length - 2] : t[0]
                , a = o.lo ? o.hi ? o.hi : t[t.length - 1] : t[1]
                , s = a[e] - r[e]
                , l = s ? (n - r[e]) / s : 0
                , u = (a[i] - r[i]) * l;
            return r[i] + u
        }
        function Re(t, e) {
            var n = t._adapter
                , i = t.options.time
                , o = i.parser
                , r = o || i.format
                , a = e;
            return "function" == typeof o && (a = o(a)),
                On.isFinite(a) || (a = "string" == typeof r ? n.parse(a, r) : n.parse(a)),
                null !== a ? +a : (o || "function" != typeof r || (a = r(e),
                    On.isFinite(a) || (a = n.parse(a))),
                    a)
        }
        function Fe(t, e) {
            if (On.isNullOrUndef(e))
                return null;
            var n = t.options.time
                , i = Re(t, t.getRightValue(e));
            return null === i ? i : (n.round && (i = +t._adapter.startOf(i, n.round)),
                i)
        }
        function $e(t, e, n, i) {
            var o, r, a, s = e - t, l = Po[n], u = l.size, c = l.steps;
            if (!c)
                return Math.ceil(s / (i * u));
            for (o = 0,
                r = c.length; o < r && (a = c[o],
                    !(Math.ceil(s / (u * a)) <= i)); ++o)
                ;
            return a
        }
        function je(t, e, n, i) {
            var o, r, a, s = Io.length;
            for (o = Io.indexOf(t); o < s - 1; ++o)
                if (r = Po[Io[o]],
                    a = r.steps ? r.steps[r.steps.length - 1] : Do,
                    r.common && Math.ceil((n - e) / (a * r.size)) <= i)
                    return Io[o];
            return Io[s - 1]
        }
        function We(t, e, n, i, o) {
            var r, a, s = Io.length;
            for (r = s - 1; r >= Io.indexOf(n); r--)
                if (a = Io[r],
                    Po[a].common && t._adapter.diff(o, i, a) >= e.length)
                    return a;
            return Io[n ? Io.indexOf(n) : 0]
        }
        function He(t) {
            for (var e = Io.indexOf(t) + 1, n = Io.length; e < n; ++e)
                if (Po[Io[e]].common)
                    return Io[e]
        }
        function ze(t, e, n, i) {
            var o, r = t._adapter, a = t.options, s = a.time, l = s.unit || je(s.minUnit, e, n, i), u = He(l), c = Ao(s.stepSize, s.unitStepSize), d = "week" === l && s.isoWeekday, h = a.ticks.major.enabled, f = Po[l], p = e, g = n, m = [];
            for (c || (c = $e(e, n, l, i)),
                d && (p = +r.startOf(p, "isoWeek", d),
                    g = +r.startOf(g, "isoWeek", d)),
                p = +r.startOf(p, d ? "day" : l),
                g = +r.startOf(g, d ? "day" : l),
                g < n && (g = +r.add(g, 1, l)),
                o = p,
                h && u && !d && !s.round && (o = +r.startOf(o, u),
                    o = +r.add(o, ~~((p - o) / (f.size * c)) * c, l)); o < g; o = +r.add(o, c, l))
                m.push(+o);
            return m.push(+o),
                m
        }
        function Be(t, e, n, i, o) {
            var r, a, s = 0, l = 0;
            return o.offset && e.length && (o.time.min || (r = Oe(t, "time", e[0], "pos"),
                s = 1 === e.length ? 1 - r : (Oe(t, "time", e[1], "pos") - r) / 2),
                o.time.max || (a = Oe(t, "time", e[e.length - 1], "pos"),
                    l = 1 === e.length ? a : (a - Oe(t, "time", e[e.length - 2], "pos")) / 2)),
            {
                start: s,
                end: l
            }
        }
        function qe(t, e, n) {
            var i, o, r, a, s = [];
            for (i = 0,
                o = e.length; i < o; ++i)
                r = e[i],
                    a = !!n && r === +t._adapter.startOf(r, n),
                    s.push({
                        value: r,
                        major: a
                    });
            return s
        }
        function Ve(t, e, n) {
            var i, o = t._model || {}, r = o.fill;
            if (void 0 === r && (r = !!o.backgroundColor),
                !1 === r || null === r)
                return !1;
            if (!0 === r)
                return "origin";
            if (i = parseFloat(r, 10),
                isFinite(i) && Math.floor(i) === i)
                return "-" !== r[0] && "+" !== r[0] || (i = e + i),
                    !(i === e || i < 0 || i >= n) && i;
            switch (r) {
                case "bottom":
                    return "start";
                case "top":
                    return "end";
                case "zero":
                    return "origin";
                case "origin":
                case "start":
                case "end":
                    return r;
                default:
                    return !1
            }
        }
        function Ue(t) {
            var e, n = t.el._model || {}, i = t.el._scale || {}, o = t.fill, r = null;
            if (isFinite(o))
                return null;
            if ("start" === o ? r = void 0 === n.scaleBottom ? i.bottom : n.scaleBottom : "end" === o ? r = void 0 === n.scaleTop ? i.top : n.scaleTop : void 0 !== n.scaleZero ? r = n.scaleZero : i.getBasePosition ? r = i.getBasePosition() : i.getBasePixel && (r = i.getBasePixel()),
                void 0 !== r && null !== r) {
                if (void 0 !== r.x && void 0 !== r.y)
                    return r;
                if (On.isFinite(r))
                    return e = i.isHorizontal(),
                    {
                        x: e ? r : null,
                        y: e ? null : r
                    }
            }
            return null
        }
        function Ye(t, e, n) {
            var i, o = t[e], r = o.fill, a = [e];
            if (!n)
                return r;
            for (; !1 !== r && -1 === a.indexOf(r);) {
                if (!isFinite(r))
                    return r;
                if (!(i = t[r]))
                    return !1;
                if (i.visible)
                    return r;
                a.push(r),
                    r = i.fill
            }
            return !1
        }
        function Xe(t) {
            var e = t.fill
                , n = "dataset";
            return !1 === e ? null : (isFinite(e) || (n = "boundary"),
                Fo[n](t))
        }
        function Ke(t) {
            return t && !t.skip
        }
        function Qe(t, e, n, i, o) {
            var r;
            if (i && o) {
                for (t.moveTo(e[0].x, e[0].y),
                    r = 1; r < i; ++r)
                    On.canvas.lineTo(t, e[r - 1], e[r]);
                for (t.lineTo(n[o - 1].x, n[o - 1].y),
                    r = o - 1; r > 0; --r)
                    On.canvas.lineTo(t, n[r], n[r - 1], !0)
            }
        }
        function Ge(t, e, n, i, o, r) {
            var a, s, l, u, c, d, h, f = e.length, p = i.spanGaps, g = [], m = [], v = 0, y = 0;
            for (t.beginPath(),
                a = 0,
                s = f + !!r; a < s; ++a)
                l = a % f,
                    u = e[l]._view,
                    c = n(u, l, i),
                    d = Ke(u),
                    h = Ke(c),
                    d && h ? (v = g.push(u),
                        y = m.push(c)) : v && y && (p ? (d && g.push(u),
                            h && m.push(c)) : (Qe(t, g, m, v, y),
                                v = y = 0,
                                g = [],
                                m = []));
            Qe(t, g, m, v, y),
                t.closePath(),
                t.fillStyle = o,
                t.fill()
        }
        function Je(t, e) {
            return t.usePointStyle && t.boxWidth > e ? e : t.boxWidth
        }
        function Ze(t, e) {
            var n = new Ho({
                ctx: t.ctx,
                options: e,
                chart: t
            });
            Pi.configure(t, n, e),
                Pi.addBox(t, n),
                t.legend = n
        }
        function tn(t, e) {
            var n = new qo({
                ctx: t.ctx,
                options: e,
                chart: t
            });
            Pi.configure(t, n, e),
                Pi.addBox(t, n),
                t.titleBlock = n
        }
        t = t && t.hasOwnProperty("default") ? t.default : t;
        var en = {
            rgb2hsl: e,
            rgb2hsv: n,
            rgb2hwb: i,
            rgb2cmyk: o,
            rgb2keyword: a,
            rgb2xyz: s,
            rgb2lab: l,
            rgb2lch: u,
            hsl2rgb: c,
            hsl2hsv: d,
            hsl2hwb: h,
            hsl2cmyk: f,
            hsl2keyword: p,
            hsv2rgb: m,
            hsv2hsl: v,
            hsv2hwb: y,
            hsv2cmyk: x,
            hsv2keyword: w,
            hwb2rgb: k,
            hwb2hsl: C,
            hwb2hsv: T,
            hwb2cmyk: S,
            hwb2keyword: M,
            cmyk2rgb: A,
            cmyk2hsl: _,
            cmyk2hsv: D,
            cmyk2hwb: P,
            cmyk2keyword: I,
            keyword2rgb: H,
            keyword2hsl: z,
            keyword2hsv: B,
            keyword2hwb: q,
            keyword2cmyk: V,
            keyword2lab: U,
            keyword2xyz: Y,
            xyz2rgb: E,
            xyz2lab: N,
            xyz2lch: L,
            lab2xyz: O,
            lab2rgb: F,
            lab2lch: R,
            lch2lab: $,
            lch2xyz: j,
            lch2rgb: W
        }
            , nn = {
                aliceblue: [240, 248, 255],
                antiquewhite: [250, 235, 215],
                aqua: [0, 255, 255],
                aquamarine: [127, 255, 212],
                azure: [240, 255, 255],
                beige: [245, 245, 220],
                bisque: [255, 228, 196],
                black: [0, 0, 0],
                blanchedalmond: [255, 235, 205],
                blue: [0, 0, 255],
                blueviolet: [138, 43, 226],
                brown: [165, 42, 42],
                burlywood: [222, 184, 135],
                cadetblue: [95, 158, 160],
                chartreuse: [127, 255, 0],
                chocolate: [210, 105, 30],
                coral: [255, 127, 80],
                cornflowerblue: [100, 149, 237],
                cornsilk: [255, 248, 220],
                crimson: [220, 20, 60],
                cyan: [0, 255, 255],
                darkblue: [0, 0, 139],
                darkcyan: [0, 139, 139],
                darkgoldenrod: [184, 134, 11],
                darkgray: [169, 169, 169],
                darkgreen: [0, 100, 0],
                darkgrey: [169, 169, 169],
                darkkhaki: [189, 183, 107],
                darkmagenta: [139, 0, 139],
                darkolivegreen: [85, 107, 47],
                darkorange: [255, 140, 0],
                darkorchid: [153, 50, 204],
                darkred: [139, 0, 0],
                darksalmon: [233, 150, 122],
                darkseagreen: [143, 188, 143],
                darkslateblue: [72, 61, 139],
                darkslategray: [47, 79, 79],
                darkslategrey: [47, 79, 79],
                darkturquoise: [0, 206, 209],
                darkviolet: [148, 0, 211],
                deeppink: [255, 20, 147],
                deepskyblue: [0, 191, 255],
                dimgray: [105, 105, 105],
                dimgrey: [105, 105, 105],
                dodgerblue: [30, 144, 255],
                firebrick: [178, 34, 34],
                floralwhite: [255, 250, 240],
                forestgreen: [34, 139, 34],
                fuchsia: [255, 0, 255],
                gainsboro: [220, 220, 220],
                ghostwhite: [248, 248, 255],
                gold: [255, 215, 0],
                goldenrod: [218, 165, 32],
                gray: [128, 128, 128],
                green: [0, 128, 0],
                greenyellow: [173, 255, 47],
                grey: [128, 128, 128],
                honeydew: [240, 255, 240],
                hotpink: [255, 105, 180],
                indianred: [205, 92, 92],
                indigo: [75, 0, 130],
                ivory: [255, 255, 240],
                khaki: [240, 230, 140],
                lavender: [230, 230, 250],
                lavenderblush: [255, 240, 245],
                lawngreen: [124, 252, 0],
                lemonchiffon: [255, 250, 205],
                lightblue: [173, 216, 230],
                lightcoral: [240, 128, 128],
                lightcyan: [224, 255, 255],
                lightgoldenrodyellow: [250, 250, 210],
                lightgray: [211, 211, 211],
                lightgreen: [144, 238, 144],
                lightgrey: [211, 211, 211],
                lightpink: [255, 182, 193],
                lightsalmon: [255, 160, 122],
                lightseagreen: [32, 178, 170],
                lightskyblue: [135, 206, 250],
                lightslategray: [119, 136, 153],
                lightslategrey: [119, 136, 153],
                lightsteelblue: [176, 196, 222],
                lightyellow: [255, 255, 224],
                lime: [0, 255, 0],
                limegreen: [50, 205, 50],
                linen: [250, 240, 230],
                magenta: [255, 0, 255],
                maroon: [128, 0, 0],
                mediumaquamarine: [102, 205, 170],
                mediumblue: [0, 0, 205],
                mediumorchid: [186, 85, 211],
                mediumpurple: [147, 112, 219],
                mediumseagreen: [60, 179, 113],
                mediumslateblue: [123, 104, 238],
                mediumspringgreen: [0, 250, 154],
                mediumturquoise: [72, 209, 204],
                mediumvioletred: [199, 21, 133],
                midnightblue: [25, 25, 112],
                mintcream: [245, 255, 250],
                mistyrose: [255, 228, 225],
                moccasin: [255, 228, 181],
                navajowhite: [255, 222, 173],
                navy: [0, 0, 128],
                oldlace: [253, 245, 230],
                olive: [128, 128, 0],
                olivedrab: [107, 142, 35],
                orange: [255, 165, 0],
                orangered: [255, 69, 0],
                orchid: [218, 112, 214],
                palegoldenrod: [238, 232, 170],
                palegreen: [152, 251, 152],
                paleturquoise: [175, 238, 238],
                palevioletred: [219, 112, 147],
                papayawhip: [255, 239, 213],
                peachpuff: [255, 218, 185],
                peru: [205, 133, 63],
                pink: [255, 192, 203],
                plum: [221, 160, 221],
                powderblue: [176, 224, 230],
                purple: [128, 0, 128],
                rebeccapurple: [102, 51, 153],
                red: [255, 0, 0],
                rosybrown: [188, 143, 143],
                royalblue: [65, 105, 225],
                saddlebrown: [139, 69, 19],
                salmon: [250, 128, 114],
                sandybrown: [244, 164, 96],
                seagreen: [46, 139, 87],
                seashell: [255, 245, 238],
                sienna: [160, 82, 45],
                silver: [192, 192, 192],
                skyblue: [135, 206, 235],
                slateblue: [106, 90, 205],
                slategray: [112, 128, 144],
                slategrey: [112, 128, 144],
                snow: [255, 250, 250],
                springgreen: [0, 255, 127],
                steelblue: [70, 130, 180],
                tan: [210, 180, 140],
                teal: [0, 128, 128],
                thistle: [216, 191, 216],
                tomato: [255, 99, 71],
                turquoise: [64, 224, 208],
                violet: [238, 130, 238],
                wheat: [245, 222, 179],
                white: [255, 255, 255],
                whitesmoke: [245, 245, 245],
                yellow: [255, 255, 0],
                yellowgreen: [154, 205, 50]
            }
            , on = {};
        for (var rn in nn)
            on[JSON.stringify(nn[rn])] = rn;
        var an = function () {
            return new dn
        };
        for (var sn in en) {
            an[sn + "Raw"] = function (t) {
                return function (e) {
                    return "number" == typeof e && (e = Array.prototype.slice.call(arguments)),
                        en[t](e)
                }
            }(sn);
            var ln = /(\w+)2(\w+)/.exec(sn)
                , un = ln[1]
                , cn = ln[2];
            an[un] = an[un] || {},
                an[un][cn] = an[sn] = function (t) {
                    return function (e) {
                        "number" == typeof e && (e = Array.prototype.slice.call(arguments));
                        var n = en[t](e);
                        if ("string" == typeof n || void 0 === n)
                            return n;
                        for (var i = 0; i < n.length; i++)
                            n[i] = Math.round(n[i]);
                        return n
                    }
                }(sn)
        }
        var dn = function () {
            this.convs = {}
        };
        dn.prototype.routeSpace = function (t, e) {
            var n = e[0];
            return void 0 === n ? this.getValues(t) : ("number" == typeof n && (n = Array.prototype.slice.call(e)),
                this.setValues(t, n))
        }
            ,
            dn.prototype.setValues = function (t, e) {
                return this.space = t,
                    this.convs = {},
                    this.convs[t] = e,
                    this
            }
            ,
            dn.prototype.getValues = function (t) {
                var e = this.convs[t];
                if (!e) {
                    var n = this.space
                        , i = this.convs[n];
                    e = an[n][t](i),
                        this.convs[t] = e
                }
                return e
            }
            ,
            ["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function (t) {
                dn.prototype[t] = function (e) {
                    return this.routeSpace(t, arguments)
                }
            });
        var hn = an
            , fn = {
                aliceblue: [240, 248, 255],
                antiquewhite: [250, 235, 215],
                aqua: [0, 255, 255],
                aquamarine: [127, 255, 212],
                azure: [240, 255, 255],
                beige: [245, 245, 220],
                bisque: [255, 228, 196],
                black: [0, 0, 0],
                blanchedalmond: [255, 235, 205],
                blue: [0, 0, 255],
                blueviolet: [138, 43, 226],
                brown: [165, 42, 42],
                burlywood: [222, 184, 135],
                cadetblue: [95, 158, 160],
                chartreuse: [127, 255, 0],
                chocolate: [210, 105, 30],
                coral: [255, 127, 80],
                cornflowerblue: [100, 149, 237],
                cornsilk: [255, 248, 220],
                crimson: [220, 20, 60],
                cyan: [0, 255, 255],
                darkblue: [0, 0, 139],
                darkcyan: [0, 139, 139],
                darkgoldenrod: [184, 134, 11],
                darkgray: [169, 169, 169],
                darkgreen: [0, 100, 0],
                darkgrey: [169, 169, 169],
                darkkhaki: [189, 183, 107],
                darkmagenta: [139, 0, 139],
                darkolivegreen: [85, 107, 47],
                darkorange: [255, 140, 0],
                darkorchid: [153, 50, 204],
                darkred: [139, 0, 0],
                darksalmon: [233, 150, 122],
                darkseagreen: [143, 188, 143],
                darkslateblue: [72, 61, 139],
                darkslategray: [47, 79, 79],
                darkslategrey: [47, 79, 79],
                darkturquoise: [0, 206, 209],
                darkviolet: [148, 0, 211],
                deeppink: [255, 20, 147],
                deepskyblue: [0, 191, 255],
                dimgray: [105, 105, 105],
                dimgrey: [105, 105, 105],
                dodgerblue: [30, 144, 255],
                firebrick: [178, 34, 34],
                floralwhite: [255, 250, 240],
                forestgreen: [34, 139, 34],
                fuchsia: [255, 0, 255],
                gainsboro: [220, 220, 220],
                ghostwhite: [248, 248, 255],
                gold: [255, 215, 0],
                goldenrod: [218, 165, 32],
                gray: [128, 128, 128],
                green: [0, 128, 0],
                greenyellow: [173, 255, 47],
                grey: [128, 128, 128],
                honeydew: [240, 255, 240],
                hotpink: [255, 105, 180],
                indianred: [205, 92, 92],
                indigo: [75, 0, 130],
                ivory: [255, 255, 240],
                khaki: [240, 230, 140],
                lavender: [230, 230, 250],
                lavenderblush: [255, 240, 245],
                lawngreen: [124, 252, 0],
                lemonchiffon: [255, 250, 205],
                lightblue: [173, 216, 230],
                lightcoral: [240, 128, 128],
                lightcyan: [224, 255, 255],
                lightgoldenrodyellow: [250, 250, 210],
                lightgray: [211, 211, 211],
                lightgreen: [144, 238, 144],
                lightgrey: [211, 211, 211],
                lightpink: [255, 182, 193],
                lightsalmon: [255, 160, 122],
                lightseagreen: [32, 178, 170],
                lightskyblue: [135, 206, 250],
                lightslategray: [119, 136, 153],
                lightslategrey: [119, 136, 153],
                lightsteelblue: [176, 196, 222],
                lightyellow: [255, 255, 224],
                lime: [0, 255, 0],
                limegreen: [50, 205, 50],
                linen: [250, 240, 230],
                magenta: [255, 0, 255],
                maroon: [128, 0, 0],
                mediumaquamarine: [102, 205, 170],
                mediumblue: [0, 0, 205],
                mediumorchid: [186, 85, 211],
                mediumpurple: [147, 112, 219],
                mediumseagreen: [60, 179, 113],
                mediumslateblue: [123, 104, 238],
                mediumspringgreen: [0, 250, 154],
                mediumturquoise: [72, 209, 204],
                mediumvioletred: [199, 21, 133],
                midnightblue: [25, 25, 112],
                mintcream: [245, 255, 250],
                mistyrose: [255, 228, 225],
                moccasin: [255, 228, 181],
                navajowhite: [255, 222, 173],
                navy: [0, 0, 128],
                oldlace: [253, 245, 230],
                olive: [128, 128, 0],
                olivedrab: [107, 142, 35],
                orange: [255, 165, 0],
                orangered: [255, 69, 0],
                orchid: [218, 112, 214],
                palegoldenrod: [238, 232, 170],
                palegreen: [152, 251, 152],
                paleturquoise: [175, 238, 238],
                palevioletred: [219, 112, 147],
                papayawhip: [255, 239, 213],
                peachpuff: [255, 218, 185],
                peru: [205, 133, 63],
                pink: [255, 192, 203],
                plum: [221, 160, 221],
                powderblue: [176, 224, 230],
                purple: [128, 0, 128],
                rebeccapurple: [102, 51, 153],
                red: [255, 0, 0],
                rosybrown: [188, 143, 143],
                royalblue: [65, 105, 225],
                saddlebrown: [139, 69, 19],
                salmon: [250, 128, 114],
                sandybrown: [244, 164, 96],
                seagreen: [46, 139, 87],
                seashell: [255, 245, 238],
                sienna: [160, 82, 45],
                silver: [192, 192, 192],
                skyblue: [135, 206, 235],
                slateblue: [106, 90, 205],
                slategray: [112, 128, 144],
                slategrey: [112, 128, 144],
                snow: [255, 250, 250],
                springgreen: [0, 255, 127],
                steelblue: [70, 130, 180],
                tan: [210, 180, 140],
                teal: [0, 128, 128],
                thistle: [216, 191, 216],
                tomato: [255, 99, 71],
                turquoise: [64, 224, 208],
                violet: [238, 130, 238],
                wheat: [245, 222, 179],
                white: [255, 255, 255],
                whitesmoke: [245, 245, 245],
                yellow: [255, 255, 0],
                yellowgreen: [154, 205, 50]
            }
            , pn = {
                getRgba: X,
                getHsla: K,
                getRgb: G,
                getHsl: J,
                getHwb: Q,
                getAlpha: Z,
                hexString: tt,
                rgbString: et,
                rgbaString: nt,
                percentString: it,
                percentaString: ot,
                hslString: rt,
                hslaString: at,
                hwbString: st,
                keyword: lt
            }
            , gn = {};
        for (var mn in fn)
            gn[fn[mn]] = mn;
        var vn = function (t) {
            if (t instanceof vn)
                return t;
            if (!(this instanceof vn))
                return new vn(t);
            this.valid = !1,
                this.values = {
                    rgb: [0, 0, 0],
                    hsl: [0, 0, 0],
                    hsv: [0, 0, 0],
                    hwb: [0, 0, 0],
                    cmyk: [0, 0, 0, 0],
                    alpha: 1
                };
            var e;
            "string" == typeof t ? (e = pn.getRgba(t),
                e ? this.setValues("rgb", e) : (e = pn.getHsla(t)) ? this.setValues("hsl", e) : (e = pn.getHwb(t)) && this.setValues("hwb", e)) : "object" == typeof t && (e = t,
                    void 0 !== e.r || void 0 !== e.red ? this.setValues("rgb", e) : void 0 !== e.l || void 0 !== e.lightness ? this.setValues("hsl", e) : void 0 !== e.v || void 0 !== e.value ? this.setValues("hsv", e) : void 0 !== e.w || void 0 !== e.whiteness ? this.setValues("hwb", e) : void 0 === e.c && void 0 === e.cyan || this.setValues("cmyk", e))
        };
        vn.prototype = {
            isValid: function () {
                return this.valid
            },
            rgb: function () {
                return this.setSpace("rgb", arguments)
            },
            hsl: function () {
                return this.setSpace("hsl", arguments)
            },
            hsv: function () {
                return this.setSpace("hsv", arguments)
            },
            hwb: function () {
                return this.setSpace("hwb", arguments)
            },
            cmyk: function () {
                return this.setSpace("cmyk", arguments)
            },
            rgbArray: function () {
                return this.values.rgb
            },
            hslArray: function () {
                return this.values.hsl
            },
            hsvArray: function () {
                return this.values.hsv
            },
            hwbArray: function () {
                var t = this.values;
                return 1 !== t.alpha ? t.hwb.concat([t.alpha]) : t.hwb
            },
            cmykArray: function () {
                return this.values.cmyk
            },
            rgbaArray: function () {
                var t = this.values;
                return t.rgb.concat([t.alpha])
            },
            hslaArray: function () {
                var t = this.values;
                return t.hsl.concat([t.alpha])
            },
            alpha: function (t) {
                return void 0 === t ? this.values.alpha : (this.setValues("alpha", t),
                    this)
            },
            red: function (t) {
                return this.setChannel("rgb", 0, t)
            },
            green: function (t) {
                return this.setChannel("rgb", 1, t)
            },
            blue: function (t) {
                return this.setChannel("rgb", 2, t)
            },
            hue: function (t) {
                return t && (t %= 360,
                    t = t < 0 ? 360 + t : t),
                    this.setChannel("hsl", 0, t)
            },
            saturation: function (t) {
                return this.setChannel("hsl", 1, t)
            },
            lightness: function (t) {
                return this.setChannel("hsl", 2, t)
            },
            saturationv: function (t) {
                return this.setChannel("hsv", 1, t)
            },
            whiteness: function (t) {
                return this.setChannel("hwb", 1, t)
            },
            blackness: function (t) {
                return this.setChannel("hwb", 2, t)
            },
            value: function (t) {
                return this.setChannel("hsv", 2, t)
            },
            cyan: function (t) {
                return this.setChannel("cmyk", 0, t)
            },
            magenta: function (t) {
                return this.setChannel("cmyk", 1, t)
            },
            yellow: function (t) {
                return this.setChannel("cmyk", 2, t)
            },
            black: function (t) {
                return this.setChannel("cmyk", 3, t)
            },
            hexString: function () {
                return pn.hexString(this.values.rgb)
            },
            rgbString: function () {
                return pn.rgbString(this.values.rgb, this.values.alpha)
            },
            rgbaString: function () {
                return pn.rgbaString(this.values.rgb, this.values.alpha)
            },
            percentString: function () {
                return pn.percentString(this.values.rgb, this.values.alpha)
            },
            hslString: function () {
                return pn.hslString(this.values.hsl, this.values.alpha)
            },
            hslaString: function () {
                return pn.hslaString(this.values.hsl, this.values.alpha)
            },
            hwbString: function () {
                return pn.hwbString(this.values.hwb, this.values.alpha)
            },
            keyword: function () {
                return pn.keyword(this.values.rgb, this.values.alpha)
            },
            rgbNumber: function () {
                var t = this.values.rgb;
                return t[0] << 16 | t[1] << 8 | t[2]
            },
            luminosity: function () {
                for (var t = this.values.rgb, e = [], n = 0; n < t.length; n++) {
                    var i = t[n] / 255;
                    e[n] = i <= .03928 ? i / 12.92 : Math.pow((i + .055) / 1.055, 2.4)
                }
                return .2126 * e[0] + .7152 * e[1] + .0722 * e[2]
            },
            contrast: function (t) {
                var e = this.luminosity()
                    , n = t.luminosity();
                return e > n ? (e + .05) / (n + .05) : (n + .05) / (e + .05)
            },
            level: function (t) {
                var e = this.contrast(t);
                return e >= 7.1 ? "AAA" : e >= 4.5 ? "AA" : ""
            },
            dark: function () {
                var t = this.values.rgb;
                return (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3 < 128
            },
            light: function () {
                return !this.dark()
            },
            negate: function () {
                for (var t = [], e = 0; e < 3; e++)
                    t[e] = 255 - this.values.rgb[e];
                return this.setValues("rgb", t),
                    this
            },
            lighten: function (t) {
                var e = this.values.hsl;
                return e[2] += e[2] * t,
                    this.setValues("hsl", e),
                    this
            },
            darken: function (t) {
                var e = this.values.hsl;
                return e[2] -= e[2] * t,
                    this.setValues("hsl", e),
                    this
            },
            saturate: function (t) {
                var e = this.values.hsl;
                return e[1] += e[1] * t,
                    this.setValues("hsl", e),
                    this
            },
            desaturate: function (t) {
                var e = this.values.hsl;
                return e[1] -= e[1] * t,
                    this.setValues("hsl", e),
                    this
            },
            whiten: function (t) {
                var e = this.values.hwb;
                return e[1] += e[1] * t,
                    this.setValues("hwb", e),
                    this
            },
            blacken: function (t) {
                var e = this.values.hwb;
                return e[2] += e[2] * t,
                    this.setValues("hwb", e),
                    this
            },
            greyscale: function () {
                var t = this.values.rgb
                    , e = .3 * t[0] + .59 * t[1] + .11 * t[2];
                return this.setValues("rgb", [e, e, e]),
                    this
            },
            clearer: function (t) {
                var e = this.values.alpha;
                return this.setValues("alpha", e - e * t),
                    this
            },
            opaquer: function (t) {
                var e = this.values.alpha;
                return this.setValues("alpha", e + e * t),
                    this
            },
            rotate: function (t) {
                var e = this.values.hsl
                    , n = (e[0] + t) % 360;
                return e[0] = n < 0 ? 360 + n : n,
                    this.setValues("hsl", e),
                    this
            },
            mix: function (t, e) {
                var n = this
                    , i = t
                    , o = void 0 === e ? .5 : e
                    , r = 2 * o - 1
                    , a = n.alpha() - i.alpha()
                    , s = ((r * a == -1 ? r : (r + a) / (1 + r * a)) + 1) / 2
                    , l = 1 - s;
                return this.rgb(s * n.red() + l * i.red(), s * n.green() + l * i.green(), s * n.blue() + l * i.blue()).alpha(n.alpha() * o + i.alpha() * (1 - o))
            },
            toJSON: function () {
                return this.rgb()
            },
            clone: function () {
                var t, e, n = new vn, i = this.values, o = n.values;
                for (var r in i)
                    i.hasOwnProperty(r) && (t = i[r],
                        e = {}.toString.call(t),
                        "[object Array]" === e ? o[r] = t.slice(0) : "[object Number]" === e && (o[r] = t));
                return n
            }
        },
            vn.prototype.spaces = {
                rgb: ["red", "green", "blue"],
                hsl: ["hue", "saturation", "lightness"],
                hsv: ["hue", "saturation", "value"],
                hwb: ["hue", "whiteness", "blackness"],
                cmyk: ["cyan", "magenta", "yellow", "black"]
            },
            vn.prototype.maxes = {
                rgb: [255, 255, 255],
                hsl: [360, 100, 100],
                hsv: [360, 100, 100],
                hwb: [360, 100, 100],
                cmyk: [100, 100, 100, 100]
            },
            vn.prototype.getValues = function (t) {
                for (var e = this.values, n = {}, i = 0; i < t.length; i++)
                    n[t.charAt(i)] = e[t][i];
                return 1 !== e.alpha && (n.a = e.alpha),
                    n
            }
            ,
            vn.prototype.setValues = function (t, e) {
                var n, i = this.values, o = this.spaces, r = this.maxes, a = 1;
                if (this.valid = !0,
                    "alpha" === t)
                    a = e;
                else if (e.length)
                    i[t] = e.slice(0, t.length),
                        a = e[t.length];
                else if (void 0 !== e[t.charAt(0)]) {
                    for (n = 0; n < t.length; n++)
                        i[t][n] = e[t.charAt(n)];
                    a = e.a
                } else if (void 0 !== e[o[t][0]]) {
                    var s = o[t];
                    for (n = 0; n < t.length; n++)
                        i[t][n] = e[s[n]];
                    a = e.alpha
                }
                if (i.alpha = Math.max(0, Math.min(1, void 0 === a ? i.alpha : a)),
                    "alpha" === t)
                    return !1;
                var l;
                for (n = 0; n < t.length; n++)
                    l = Math.max(0, Math.min(r[t][n], i[t][n])),
                        i[t][n] = Math.round(l);
                for (var u in o)
                    u !== t && (i[u] = hn[t][u](i[t]));
                return !0
            }
            ,
            vn.prototype.setSpace = function (t, e) {
                var n = e[0];
                return void 0 === n ? this.getValues(t) : ("number" == typeof n && (n = Array.prototype.slice.call(e)),
                    this.setValues(t, n),
                    this)
            }
            ,
            vn.prototype.setChannel = function (t, e, n) {
                var i = this.values[t];
                return void 0 === n ? i[e] : n === i[e] ? this : (i[e] = n,
                    this.setValues(t, i),
                    this)
            }
            ,
            "undefined" != typeof window && (window.Color = vn);
        var yn = vn
            , bn = {
                noop: function () { },
                uid: function () {
                    var t = 0;
                    return function () {
                        return t++
                    }
                }(),
                isNullOrUndef: function (t) {
                    return null === t || void 0 === t
                },
                isArray: function (t) {
                    if (Array.isArray && Array.isArray(t))
                        return !0;
                    var e = Object.prototype.toString.call(t);
                    return "[object" === e.substr(0, 7) && "Array]" === e.substr(-6)
                },
                isObject: function (t) {
                    return null !== t && "[object Object]" === Object.prototype.toString.call(t)
                },
                isFinite: function (t) {
                    return ("number" == typeof t || t instanceof Number) && isFinite(t)
                },
                valueOrDefault: function (t, e) {
                    return void 0 === t ? e : t
                },
                valueAtIndexOrDefault: function (t, e, n) {
                    return bn.valueOrDefault(bn.isArray(t) ? t[e] : t, n)
                },
                callback: function (t, e, n) {
                    if (t && "function" == typeof t.call)
                        return t.apply(n, e)
                },
                each: function (t, e, n, i) {
                    var o, r, a;
                    if (bn.isArray(t))
                        if (r = t.length,
                            i)
                            for (o = r - 1; o >= 0; o--)
                                e.call(n, t[o], o);
                        else
                            for (o = 0; o < r; o++)
                                e.call(n, t[o], o);
                    else if (bn.isObject(t))
                        for (a = Object.keys(t),
                            r = a.length,
                            o = 0; o < r; o++)
                            e.call(n, t[a[o]], a[o])
                },
                arrayEquals: function (t, e) {
                    var n, i, o, r;
                    if (!t || !e || t.length !== e.length)
                        return !1;
                    for (n = 0,
                        i = t.length; n < i; ++n)
                        if (o = t[n],
                            r = e[n],
                            o instanceof Array && r instanceof Array) {
                            if (!bn.arrayEquals(o, r))
                                return !1
                        } else if (o !== r)
                            return !1;
                    return !0
                },
                clone: function (t) {
                    if (bn.isArray(t))
                        return t.map(bn.clone);
                    if (bn.isObject(t)) {
                        for (var e = {}, n = Object.keys(t), i = n.length, o = 0; o < i; ++o)
                            e[n[o]] = bn.clone(t[n[o]]);
                        return e
                    }
                    return t
                },
                _merger: function (t, e, n, i) {
                    var o = e[t]
                        , r = n[t];
                    bn.isObject(o) && bn.isObject(r) ? bn.merge(o, r, i) : e[t] = bn.clone(r)
                },
                _mergerIf: function (t, e, n) {
                    var i = e[t]
                        , o = n[t];
                    bn.isObject(i) && bn.isObject(o) ? bn.mergeIf(i, o) : e.hasOwnProperty(t) || (e[t] = bn.clone(o))
                },
                merge: function (t, e, n) {
                    var i, o, r, a, s, l = bn.isArray(e) ? e : [e], u = l.length;
                    if (!bn.isObject(t))
                        return t;
                    for (n = n || {},
                        i = n.merger || bn._merger,
                        o = 0; o < u; ++o)
                        if (e = l[o],
                            bn.isObject(e))
                            for (r = Object.keys(e),
                                s = 0,
                                a = r.length; s < a; ++s)
                                i(r[s], t, e, n);
                    return t
                },
                mergeIf: function (t, e) {
                    return bn.merge(t, e, {
                        merger: bn._mergerIf
                    })
                },
                extend: function (t) {
                    for (var e = function (e, n) {
                        t[n] = e
                    }, n = 1, i = arguments.length; n < i; ++n)
                        bn.each(arguments[n], e);
                    return t
                },
                inherits: function (t) {
                    var e = this
                        , n = t && t.hasOwnProperty("constructor") ? t.constructor : function () {
                            return e.apply(this, arguments)
                        }
                        , i = function () {
                            this.constructor = n
                        };
                    return i.prototype = e.prototype,
                        n.prototype = new i,
                        n.extend = bn.inherits,
                        t && bn.extend(n.prototype, t),
                        n.__super__ = e.prototype,
                        n
                }
            }
            , xn = bn;
        bn.callCallback = bn.callback,
            bn.indexOf = function (t, e, n) {
                return Array.prototype.indexOf.call(t, e, n)
            }
            ,
            bn.getValueOrDefault = bn.valueOrDefault,
            bn.getValueAtIndexOrDefault = bn.valueAtIndexOrDefault;
        var wn = {
            linear: function (t) {
                return t
            },
            easeInQuad: function (t) {
                return t * t
            },
            easeOutQuad: function (t) {
                return -t * (t - 2)
            },
            easeInOutQuad: function (t) {
                return (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
            },
            easeInCubic: function (t) {
                return t * t * t
            },
            easeOutCubic: function (t) {
                return (t -= 1) * t * t + 1
            },
            easeInOutCubic: function (t) {
                return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
            },
            easeInQuart: function (t) {
                return t * t * t * t
            },
            easeOutQuart: function (t) {
                return -((t -= 1) * t * t * t - 1)
            },
            easeInOutQuart: function (t) {
                return (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
            },
            easeInQuint: function (t) {
                return t * t * t * t * t
            },
            easeOutQuint: function (t) {
                return (t -= 1) * t * t * t * t + 1
            },
            easeInOutQuint: function (t) {
                return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
            },
            easeInSine: function (t) {
                return 1 - Math.cos(t * (Math.PI / 2))
            },
            easeOutSine: function (t) {
                return Math.sin(t * (Math.PI / 2))
            },
            easeInOutSine: function (t) {
                return -.5 * (Math.cos(Math.PI * t) - 1)
            },
            easeInExpo: function (t) {
                return 0 === t ? 0 : Math.pow(2, 10 * (t - 1))
            },
            easeOutExpo: function (t) {
                return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
            },
            easeInOutExpo: function (t) {
                return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * --t))
            },
            easeInCirc: function (t) {
                return t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1)
            },
            easeOutCirc: function (t) {
                return Math.sqrt(1 - (t -= 1) * t)
            },
            easeInOutCirc: function (t) {
                return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
            },
            easeInElastic: function (t) {
                var e = 1.70158
                    , n = 0
                    , i = 1;
                return 0 === t ? 0 : 1 === t ? 1 : (n || (n = .3),
                    i < 1 ? (i = 1,
                        e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i),
                    -i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n))
            },
            easeOutElastic: function (t) {
                var e = 1.70158
                    , n = 0
                    , i = 1;
                return 0 === t ? 0 : 1 === t ? 1 : (n || (n = .3),
                    i < 1 ? (i = 1,
                        e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i),
                    i * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / n) + 1)
            },
            easeInOutElastic: function (t) {
                var e = 1.70158
                    , n = 0
                    , i = 1;
                return 0 === t ? 0 : 2 == (t /= .5) ? 1 : (n || (n = .45),
                    i < 1 ? (i = 1,
                        e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i),
                    t < 1 ? i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * -.5 : i * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * .5 + 1)
            },
            easeInBack: function (t) {
                var e = 1.70158;
                return t * t * ((e + 1) * t - e)
            },
            easeOutBack: function (t) {
                var e = 1.70158;
                return (t -= 1) * t * ((e + 1) * t + e) + 1
            },
            easeInOutBack: function (t) {
                var e = 1.70158;
                return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
            },
            easeInBounce: function (t) {
                return 1 - wn.easeOutBounce(1 - t)
            },
            easeOutBounce: function (t) {
                return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
            },
            easeInOutBounce: function (t) {
                return t < .5 ? .5 * wn.easeInBounce(2 * t) : .5 * wn.easeOutBounce(2 * t - 1) + .5
            }
        }
            , kn = {
                effects: wn
            };
        xn.easingEffects = wn;
        var Cn = Math.PI
            , Tn = Cn / 180
            , Sn = 2 * Cn
            , Mn = Cn / 2
            , An = Cn / 4
            , _n = 2 * Cn / 3
            , Dn = {
                clear: function (t) {
                    t.ctx.clearRect(0, 0, t.width, t.height)
                },
                roundedRect: function (t, e, n, i, o, r) {
                    if (r) {
                        var a = Math.min(r, o / 2, i / 2)
                            , s = e + a
                            , l = n + a
                            , u = e + i - a
                            , c = n + o - a;
                        t.moveTo(e, l),
                            s < u && l < c ? (t.arc(s, l, a, -Cn, -Mn),
                                t.arc(u, l, a, -Mn, 0),
                                t.arc(u, c, a, 0, Mn),
                                t.arc(s, c, a, Mn, Cn)) : s < u ? (t.moveTo(s, n),
                                    t.arc(u, l, a, -Mn, Mn),
                                    t.arc(s, l, a, Mn, Cn + Mn)) : l < c ? (t.arc(s, l, a, -Cn, 0),
                                        t.arc(s, c, a, 0, Cn)) : t.arc(s, l, a, -Cn, Cn),
                            t.closePath(),
                            t.moveTo(e, n)
                    } else
                        t.rect(e, n, i, o)
                },
                drawPoint: function (t, e, n, i, o, r) {
                    var a, s, l, u, c, d = (r || 0) * Tn;
                    if (e && "object" == typeof e && ("[object HTMLImageElement]" === (a = e.toString()) || "[object HTMLCanvasElement]" === a))
                        return void t.drawImage(e, i - e.width / 2, o - e.height / 2, e.width, e.height);
                    if (!(isNaN(n) || n <= 0)) {
                        switch (t.beginPath(),
                        e) {
                            default:
                                t.arc(i, o, n, 0, Sn),
                                    t.closePath();
                                break;
                            case "triangle":
                                t.moveTo(i + Math.sin(d) * n, o - Math.cos(d) * n),
                                    d += _n,
                                    t.lineTo(i + Math.sin(d) * n, o - Math.cos(d) * n),
                                    d += _n,
                                    t.lineTo(i + Math.sin(d) * n, o - Math.cos(d) * n),
                                    t.closePath();
                                break;
                            case "rectRounded":
                                c = .516 * n,
                                    u = n - c,
                                    s = Math.cos(d + An) * u,
                                    l = Math.sin(d + An) * u,
                                    t.arc(i - s, o - l, c, d - Cn, d - Mn),
                                    t.arc(i + l, o - s, c, d - Mn, d),
                                    t.arc(i + s, o + l, c, d, d + Mn),
                                    t.arc(i - l, o + s, c, d + Mn, d + Cn),
                                    t.closePath();
                                break;
                            case "rect":
                                if (!r) {
                                    u = Math.SQRT1_2 * n,
                                        t.rect(i - u, o - u, 2 * u, 2 * u);
                                    break
                                }
                                d += An;
                            case "rectRot":
                                s = Math.cos(d) * n,
                                    l = Math.sin(d) * n,
                                    t.moveTo(i - s, o - l),
                                    t.lineTo(i + l, o - s),
                                    t.lineTo(i + s, o + l),
                                    t.lineTo(i - l, o + s),
                                    t.closePath();
                                break;
                            case "crossRot":
                                d += An;
                            case "cross":
                                s = Math.cos(d) * n,
                                    l = Math.sin(d) * n,
                                    t.moveTo(i - s, o - l),
                                    t.lineTo(i + s, o + l),
                                    t.moveTo(i + l, o - s),
                                    t.lineTo(i - l, o + s);
                                break;
                            case "star":
                                s = Math.cos(d) * n,
                                    l = Math.sin(d) * n,
                                    t.moveTo(i - s, o - l),
                                    t.lineTo(i + s, o + l),
                                    t.moveTo(i + l, o - s),
                                    t.lineTo(i - l, o + s),
                                    d += An,
                                    s = Math.cos(d) * n,
                                    l = Math.sin(d) * n,
                                    t.moveTo(i - s, o - l),
                                    t.lineTo(i + s, o + l),
                                    t.moveTo(i + l, o - s),
                                    t.lineTo(i - l, o + s);
                                break;
                            case "line":
                                s = Math.cos(d) * n,
                                    l = Math.sin(d) * n,
                                    t.moveTo(i - s, o - l),
                                    t.lineTo(i + s, o + l);
                                break;
                            case "dash":
                                t.moveTo(i, o),
                                    t.lineTo(i + Math.cos(d) * n, o + Math.sin(d) * n)
                        }
                        t.fill(),
                            t.stroke()
                    }
                },
                _isPointInArea: function (t, e) {
                    return t.x > e.left - 1e-6 && t.x < e.right + 1e-6 && t.y > e.top - 1e-6 && t.y < e.bottom + 1e-6
                },
                clipArea: function (t, e) {
                    t.save(),
                        t.beginPath(),
                        t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top),
                        t.clip()
                },
                unclipArea: function (t) {
                    t.restore()
                },
                lineTo: function (t, e, n, i) {
                    var o = n.steppedLine;
                    if (o) {
                        if ("middle" === o) {
                            var r = (e.x + n.x) / 2;
                            t.lineTo(r, i ? n.y : e.y),
                                t.lineTo(r, i ? e.y : n.y)
                        } else
                            "after" === o && !i || "after" !== o && i ? t.lineTo(e.x, n.y) : t.lineTo(n.x, e.y);
                        return void t.lineTo(n.x, n.y)
                    }
                    if (!n.tension)
                        return void t.lineTo(n.x, n.y);
                    t.bezierCurveTo(i ? e.controlPointPreviousX : e.controlPointNextX, i ? e.controlPointPreviousY : e.controlPointNextY, i ? n.controlPointNextX : n.controlPointPreviousX, i ? n.controlPointNextY : n.controlPointPreviousY, n.x, n.y)
                }
            }
            , Pn = Dn;
        xn.clear = Dn.clear,
            xn.drawRoundedRectangle = function (t) {
                t.beginPath(),
                    Dn.roundedRect.apply(Dn, arguments)
            }
            ;
        var In = {
            _set: function (t, e) {
                return xn.merge(this[t] || (this[t] = {}), e)
            }
        };
        In._set("global", {
            defaultColor: "rgba(0,0,0,0.1)",
            defaultFontColor: "#666",
            defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            defaultFontSize: 12,
            defaultFontStyle: "normal",
            defaultLineHeight: 1.2,
            showLines: !0
        });
        var En = In
            , Nn = xn.valueOrDefault
            , Ln = {
                toLineHeight: function (t, e) {
                    var n = ("" + t).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
                    if (!n || "normal" === n[1])
                        return 1.2 * e;
                    switch (t = +n[2],
                    n[3]) {
                        case "px":
                            return t;
                        case "%":
                            t /= 100
                    }
                    return e * t
                },
                toPadding: function (t) {
                    var e, n, i, o;
                    return xn.isObject(t) ? (e = +t.top || 0,
                        n = +t.right || 0,
                        i = +t.bottom || 0,
                        o = +t.left || 0) : e = n = i = o = +t || 0,
                    {
                        top: e,
                        right: n,
                        bottom: i,
                        left: o,
                        height: e + i,
                        width: o + n
                    }
                },
                _parseFont: function (t) {
                    var e = En.global
                        , n = Nn(t.fontSize, e.defaultFontSize)
                        , i = {
                            family: Nn(t.fontFamily, e.defaultFontFamily),
                            lineHeight: xn.options.toLineHeight(Nn(t.lineHeight, e.defaultLineHeight), n),
                            size: n,
                            style: Nn(t.fontStyle, e.defaultFontStyle),
                            weight: null,
                            string: ""
                        };
                    return i.string = dt(i),
                        i
                },
                resolve: function (t, e, n) {
                    var i, o, r;
                    for (i = 0,
                        o = t.length; i < o; ++i)
                        if (void 0 !== (r = t[i]) && (void 0 !== e && "function" == typeof r && (r = r(e)),
                            void 0 !== n && xn.isArray(r) && (r = r[n]),
                            void 0 !== r))
                            return r
                }
            }
            , On = xn
            , Rn = kn
            , Fn = Pn
            , $n = Ln;
        On.easing = Rn,
            On.canvas = Fn,
            On.options = $n;
        var jn = function (t) {
            On.extend(this, t),
                this.initialize.apply(this, arguments)
        };
        On.extend(jn.prototype, {
            initialize: function () {
                this.hidden = !1
            },
            pivot: function () {
                var t = this;
                return t._view || (t._view = On.clone(t._model)),
                    t._start = {},
                    t
            },
            transition: function (t) {
                var e = this
                    , n = e._model
                    , i = e._start
                    , o = e._view;
                return n && 1 !== t ? (o || (o = e._view = {}),
                    i || (i = e._start = {}),
                    ht(i, o, n, t),
                    e) : (e._view = n,
                        e._start = null,
                        e)
            },
            tooltipPosition: function () {
                return {
                    x: this._model.x,
                    y: this._model.y
                }
            },
            hasValue: function () {
                return On.isNumber(this._model.x) && On.isNumber(this._model.y)
            }
        }),
            jn.extend = On.inherits;
        var Wn = jn
            , Hn = Wn.extend({
                chart: null,
                currentStep: 0,
                numSteps: 60,
                easing: "",
                render: null,
                onAnimationProgress: null,
                onAnimationComplete: null
            })
            , zn = Hn;
        Object.defineProperty(Hn.prototype, "animationObject", {
            get: function () {
                return this
            }
        }),
            Object.defineProperty(Hn.prototype, "chartInstance", {
                get: function () {
                    return this.chart
                },
                set: function (t) {
                    this.chart = t
                }
            }),
            En._set("global", {
                animation: {
                    duration: 1e3,
                    easing: "easeOutQuart",
                    onProgress: On.noop,
                    onComplete: On.noop
                }
            });
        var Bn = {
            animations: [],
            request: null,
            addAnimation: function (t, e, n, i) {
                var o, r, a = this.animations;
                for (e.chart = t,
                    e.startTime = Date.now(),
                    e.duration = n,
                    i || (t.animating = !0),
                    o = 0,
                    r = a.length; o < r; ++o)
                    if (a[o].chart === t)
                        return void (a[o] = e);
                a.push(e),
                    1 === a.length && this.requestAnimationFrame()
            },
            cancelAnimation: function (t) {
                var e = On.findIndex(this.animations, function (e) {
                    return e.chart === t
                });
                -1 !== e && (this.animations.splice(e, 1),
                    t.animating = !1)
            },
            requestAnimationFrame: function () {
                var t = this;
                null === t.request && (t.request = On.requestAnimFrame.call(window, function () {
                    t.request = null,
                        t.startDigest()
                }))
            },
            startDigest: function () {
                var t = this;
                t.advance(),
                    t.animations.length > 0 && t.requestAnimationFrame()
            },
            advance: function () {
                for (var t, e, n, i, o = this.animations, r = 0; r < o.length;)
                    t = o[r],
                        e = t.chart,
                        n = t.numSteps,
                        i = Math.floor((Date.now() - t.startTime) / t.duration * n) + 1,
                        t.currentStep = Math.min(i, n),
                        On.callback(t.render, [e, t], e),
                        On.callback(t.onAnimationProgress, [t], e),
                        t.currentStep >= n ? (On.callback(t.onAnimationComplete, [t], e),
                            e.animating = !1,
                            o.splice(r, 1)) : ++r
            }
        }
            , qn = On.options.resolve
            , Vn = ["push", "pop", "shift", "splice", "unshift"]
            , Un = function (t, e) {
                this.initialize(t, e)
            };
        On.extend(Un.prototype, {
            datasetElementType: null,
            dataElementType: null,
            initialize: function (t, e) {
                var n = this;
                n.chart = t,
                    n.index = e,
                    n.linkScales(),
                    n.addElements()
            },
            updateIndex: function (t) {
                this.index = t
            },
            linkScales: function () {
                var t = this
                    , e = t.getMeta()
                    , n = t.getDataset();
                null !== e.xAxisID && e.xAxisID in t.chart.scales || (e.xAxisID = n.xAxisID || t.chart.options.scales.xAxes[0].id),
                    null !== e.yAxisID && e.yAxisID in t.chart.scales || (e.yAxisID = n.yAxisID || t.chart.options.scales.yAxes[0].id)
            },
            getDataset: function () {
                return this.chart.data.datasets[this.index]
            },
            getMeta: function () {
                return this.chart.getDatasetMeta(this.index)
            },
            getScaleForId: function (t) {
                return this.chart.scales[t]
            },
            _getValueScaleId: function () {
                return this.getMeta().yAxisID
            },
            _getIndexScaleId: function () {
                return this.getMeta().xAxisID
            },
            _getValueScale: function () {
                return this.getScaleForId(this._getValueScaleId())
            },
            _getIndexScale: function () {
                return this.getScaleForId(this._getIndexScaleId())
            },
            reset: function () {
                this.update(!0)
            },
            destroy: function () {
                this._data && pt(this._data, this)
            },
            createMetaDataset: function () {
                var t = this
                    , e = t.datasetElementType;
                return e && new e({
                    _chart: t.chart,
                    _datasetIndex: t.index
                })
            },
            createMetaData: function (t) {
                var e = this
                    , n = e.dataElementType;
                return n && new n({
                    _chart: e.chart,
                    _datasetIndex: e.index,
                    _index: t
                })
            },
            addElements: function () {
                var t, e, n = this, i = n.getMeta(), o = n.getDataset().data || [], r = i.data;
                for (t = 0,
                    e = o.length; t < e; ++t)
                    r[t] = r[t] || n.createMetaData(t);
                i.dataset = i.dataset || n.createMetaDataset()
            },
            addElementAndReset: function (t) {
                var e = this.createMetaData(t);
                this.getMeta().data.splice(t, 0, e),
                    this.updateElement(e, t, !0)
            },
            buildOrUpdateElements: function () {
                var t = this
                    , e = t.getDataset()
                    , n = e.data || (e.data = []);
                t._data !== n && (t._data && pt(t._data, t),
                    n && Object.isExtensible(n) && ft(n, t),
                    t._data = n),
                    t.resyncElements()
            },
            update: On.noop,
            transition: function (t) {
                for (var e = this.getMeta(), n = e.data || [], i = n.length, o = 0; o < i; ++o)
                    n[o].transition(t);
                e.dataset && e.dataset.transition(t)
            },
            draw: function () {
                var t = this.getMeta()
                    , e = t.data || []
                    , n = e.length
                    , i = 0;
                for (t.dataset && t.dataset.draw(); i < n; ++i)
                    e[i].draw()
            },
            removeHoverStyle: function (t) {
                On.merge(t._model, t.$previousStyle || {}),
                    delete t.$previousStyle
            },
            setHoverStyle: function (t) {
                var e = this.chart.data.datasets[t._datasetIndex]
                    , n = t._index
                    , i = t.custom || {}
                    , o = t._model
                    , r = On.getHoverColor;
                t.$previousStyle = {
                    backgroundColor: o.backgroundColor,
                    borderColor: o.borderColor,
                    borderWidth: o.borderWidth
                },
                    o.backgroundColor = qn([i.hoverBackgroundColor, e.hoverBackgroundColor, r(o.backgroundColor)], void 0, n),
                    o.borderColor = qn([i.hoverBorderColor, e.hoverBorderColor, r(o.borderColor)], void 0, n),
                    o.borderWidth = qn([i.hoverBorderWidth, e.hoverBorderWidth, o.borderWidth], void 0, n)
            },
            resyncElements: function () {
                var t = this
                    , e = t.getMeta()
                    , n = t.getDataset().data
                    , i = e.data.length
                    , o = n.length;
                o < i ? e.data.splice(o, i - o) : o > i && t.insertElements(i, o - i)
            },
            insertElements: function (t, e) {
                for (var n = 0; n < e; ++n)
                    this.addElementAndReset(t + n)
            },
            onDataPush: function () {
                var t = arguments.length;
                this.insertElements(this.getDataset().data.length - t, t)
            },
            onDataPop: function () {
                this.getMeta().data.pop()
            },
            onDataShift: function () {
                this.getMeta().data.shift()
            },
            onDataSplice: function (t, e) {
                this.getMeta().data.splice(t, e),
                    this.insertElements(t, arguments.length - 2)
            },
            onDataUnshift: function () {
                this.insertElements(0, arguments.length)
            }
        }),
            Un.extend = On.inherits;
        var Yn = Un;
        En._set("global", {
            elements: {
                arc: {
                    backgroundColor: En.global.defaultColor,
                    borderColor: "#fff",
                    borderWidth: 2,
                    borderAlign: "center"
                }
            }
        });
        var Xn = Wn.extend({
            inLabelRange: function (t) {
                var e = this._view;
                return !!e && Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hoverRadius, 2)
            },
            inRange: function (t, e) {
                var n = this._view;
                if (n) {
                    for (var i = On.getAngleFromPoint(n, {
                        x: t,
                        y: e
                    }), o = i.angle, r = i.distance, a = n.startAngle, s = n.endAngle; s < a;)
                        s += 2 * Math.PI;
                    for (; o > s;)
                        o -= 2 * Math.PI;
                    for (; o < a;)
                        o += 2 * Math.PI;
                    var l = o >= a && o <= s
                        , u = r >= n.innerRadius && r <= n.outerRadius;
                    return l && u
                }
                return !1
            },
            getCenterPoint: function () {
                var t = this._view
                    , e = (t.startAngle + t.endAngle) / 2
                    , n = (t.innerRadius + t.outerRadius) / 2;
                return {
                    x: t.x + Math.cos(e) * n,
                    y: t.y + Math.sin(e) * n
                }
            },
            getArea: function () {
                var t = this._view;
                return Math.PI * ((t.endAngle - t.startAngle) / (2 * Math.PI)) * (Math.pow(t.outerRadius, 2) - Math.pow(t.innerRadius, 2))
            },
            tooltipPosition: function () {
                var t = this._view
                    , e = t.startAngle + (t.endAngle - t.startAngle) / 2
                    , n = (t.outerRadius - t.innerRadius) / 2 + t.innerRadius;
                return {
                    x: t.x + Math.cos(e) * n,
                    y: t.y + Math.sin(e) * n
                }
            },
            draw: function () {
                var t, e = this._chart.ctx, n = this._view, i = n.startAngle, o = n.endAngle, r = "inner" === n.borderAlign ? .33 : 0;
                e.save(),
                    e.beginPath(),
                    e.arc(n.x, n.y, Math.max(n.outerRadius - r, 0), i, o),
                    e.arc(n.x, n.y, n.innerRadius, o, i, !0),
                    e.closePath(),
                    e.fillStyle = n.backgroundColor,
                    e.fill(),
                    n.borderWidth && ("inner" === n.borderAlign ? (e.beginPath(),
                        t = r / n.outerRadius,
                        e.arc(n.x, n.y, n.outerRadius, i - t, o + t),
                        n.innerRadius > r ? (t = r / n.innerRadius,
                            e.arc(n.x, n.y, n.innerRadius - r, o + t, i - t, !0)) : e.arc(n.x, n.y, r, o + Math.PI / 2, i - Math.PI / 2),
                        e.closePath(),
                        e.clip(),
                        e.beginPath(),
                        e.arc(n.x, n.y, n.outerRadius, i, o),
                        e.arc(n.x, n.y, n.innerRadius, o, i, !0),
                        e.closePath(),
                        e.lineWidth = 2 * n.borderWidth,
                        e.lineJoin = "round") : (e.lineWidth = n.borderWidth,
                            e.lineJoin = "bevel"),
                        e.strokeStyle = n.borderColor,
                        e.stroke()),
                    e.restore()
            }
        })
            , Kn = On.valueOrDefault
            , Qn = En.global.defaultColor;
        En._set("global", {
            elements: {
                line: {
                    tension: .4,
                    backgroundColor: Qn,
                    borderWidth: 3,
                    borderColor: Qn,
                    borderCapStyle: "butt",
                    borderDash: [],
                    borderDashOffset: 0,
                    borderJoinStyle: "miter",
                    capBezierPoints: !0,
                    fill: !0
                }
            }
        });
        var Gn = Wn.extend({
            draw: function () {
                var t, e, n, i, o = this, r = o._view, a = o._chart.ctx, s = r.spanGaps, l = o._children.slice(), u = En.global, c = u.elements.line, d = -1;
                for (o._loop && l.length && l.push(l[0]),
                    a.save(),
                    a.lineCap = r.borderCapStyle || c.borderCapStyle,
                    a.setLineDash && a.setLineDash(r.borderDash || c.borderDash),
                    a.lineDashOffset = Kn(r.borderDashOffset, c.borderDashOffset),
                    a.lineJoin = r.borderJoinStyle || c.borderJoinStyle,
                    a.lineWidth = Kn(r.borderWidth, c.borderWidth),
                    a.strokeStyle = r.borderColor || u.defaultColor,
                    a.beginPath(),
                    d = -1,
                    t = 0; t < l.length; ++t)
                    e = l[t],
                        n = On.previousItem(l, t),
                        i = e._view,
                        0 === t ? i.skip || (a.moveTo(i.x, i.y),
                            d = t) : (n = -1 === d ? n : l[d],
                                i.skip || (d !== t - 1 && !s || -1 === d ? a.moveTo(i.x, i.y) : On.canvas.lineTo(a, n._view, e._view),
                                    d = t));
                a.stroke(),
                    a.restore()
            }
        })
            , Jn = On.valueOrDefault
            , Zn = En.global.defaultColor;
        En._set("global", {
            elements: {
                point: {
                    radius: 3,
                    pointStyle: "circle",
                    backgroundColor: Zn,
                    borderColor: Zn,
                    borderWidth: 1,
                    hitRadius: 1,
                    hoverRadius: 4,
                    hoverBorderWidth: 1
                }
            }
        });
        var ti = Wn.extend({
            inRange: function (t, e) {
                var n = this._view;
                return !!n && Math.pow(t - n.x, 2) + Math.pow(e - n.y, 2) < Math.pow(n.hitRadius + n.radius, 2)
            },
            inLabelRange: gt,
            inXRange: gt,
            inYRange: mt,
            getCenterPoint: function () {
                var t = this._view;
                return {
                    x: t.x,
                    y: t.y
                }
            },
            getArea: function () {
                return Math.PI * Math.pow(this._view.radius, 2)
            },
            tooltipPosition: function () {
                var t = this._view;
                return {
                    x: t.x,
                    y: t.y,
                    padding: t.radius + t.borderWidth
                }
            },
            draw: function (t) {
                var e = this._view
                    , n = this._chart.ctx
                    , i = e.pointStyle
                    , o = e.rotation
                    , r = e.radius
                    , a = e.x
                    , s = e.y
                    , l = En.global
                    , u = l.defaultColor;
                e.skip || (void 0 === t || On.canvas._isPointInArea(e, t)) && (n.strokeStyle = e.borderColor || u,
                    n.lineWidth = Jn(e.borderWidth, l.elements.point.borderWidth),
                    n.fillStyle = e.backgroundColor || u,
                    On.canvas.drawPoint(n, i, r, a, s, o))
            }
        })
            , ei = En.global.defaultColor;
        En._set("global", {
            elements: {
                rectangle: {
                    backgroundColor: ei,
                    borderColor: ei,
                    borderSkipped: "bottom",
                    borderWidth: 0
                }
            }
        });
        var ni = Wn.extend({
            draw: function () {
                var t = this._chart.ctx
                    , e = this._view
                    , n = kt(e)
                    , i = n.outer
                    , o = n.inner;
                t.fillStyle = e.backgroundColor,
                    t.fillRect(i.x, i.y, i.w, i.h),
                    i.w === o.w && i.h === o.h || (t.save(),
                        t.beginPath(),
                        t.rect(i.x, i.y, i.w, i.h),
                        t.clip(),
                        t.fillStyle = e.borderColor,
                        t.rect(o.x, o.y, o.w, o.h),
                        t.fill("evenodd"),
                        t.restore())
            },
            height: function () {
                var t = this._view;
                return t.base - t.y
            },
            inRange: function (t, e) {
                return Ct(this._view, t, e)
            },
            inLabelRange: function (t, e) {
                var n = this._view;
                return vt(n) ? Ct(n, t, null) : Ct(n, null, e)
            },
            inXRange: function (t) {
                return Ct(this._view, t, null)
            },
            inYRange: function (t) {
                return Ct(this._view, null, t)
            },
            getCenterPoint: function () {
                var t, e, n = this._view;
                return vt(n) ? (t = n.x,
                    e = (n.y + n.base) / 2) : (t = (n.x + n.base) / 2,
                        e = n.y),
                {
                    x: t,
                    y: e
                }
            },
            getArea: function () {
                var t = this._view;
                return vt(t) ? t.width * Math.abs(t.y - t.base) : t.height * Math.abs(t.x - t.base)
            },
            tooltipPosition: function () {
                var t = this._view;
                return {
                    x: t.x,
                    y: t.y
                }
            }
        })
            , ii = {}
            , oi = Xn
            , ri = Gn
            , ai = ti
            , si = ni;
        ii.Arc = oi,
            ii.Line = ri,
            ii.Point = ai,
            ii.Rectangle = si;
        var li = On.options.resolve;
        En._set("bar", {
            hover: {
                mode: "label"
            },
            scales: {
                xAxes: [{
                    type: "category",
                    categoryPercentage: .8,
                    barPercentage: .9,
                    offset: !0,
                    gridLines: {
                        offsetGridLines: !0
                    }
                }],
                yAxes: [{
                    type: "linear"
                }]
            }
        });
        var ui = Yn.extend({
            dataElementType: ii.Rectangle,
            initialize: function () {
                var t, e = this;
                Yn.prototype.initialize.apply(e, arguments),
                    t = e.getMeta(),
                    t.stack = e.getDataset().stack,
                    t.bar = !0
            },
            update: function (t) {
                var e, n, i = this, o = i.getMeta().data;
                for (i._ruler = i.getRuler(),
                    e = 0,
                    n = o.length; e < n; ++e)
                    i.updateElement(o[e], e, t)
            },
            updateElement: function (t, e, n) {
                var i = this
                    , o = i.getMeta()
                    , r = i.getDataset()
                    , a = i._resolveElementOptions(t, e);
                t._xScale = i.getScaleForId(o.xAxisID),
                    t._yScale = i.getScaleForId(o.yAxisID),
                    t._datasetIndex = i.index,
                    t._index = e,
                    t._model = {
                        backgroundColor: a.backgroundColor,
                        borderColor: a.borderColor,
                        borderSkipped: a.borderSkipped,
                        borderWidth: a.borderWidth,
                        datasetLabel: r.label,
                        label: i.chart.data.labels[e]
                    },
                    i._updateElementGeometry(t, e, n),
                    t.pivot()
            },
            _updateElementGeometry: function (t, e, n) {
                var i = this
                    , o = t._model
                    , r = i._getValueScale()
                    , a = r.getBasePixel()
                    , s = r.isHorizontal()
                    , l = i._ruler || i.getRuler()
                    , u = i.calculateBarValuePixels(i.index, e)
                    , c = i.calculateBarIndexPixels(i.index, e, l);
                o.horizontal = s,
                    o.base = n ? a : u.base,
                    o.x = s ? n ? a : u.head : c.center,
                    o.y = s ? c.center : n ? a : u.head,
                    o.height = s ? c.size : void 0,
                    o.width = s ? void 0 : c.size
            },
            _getStacks: function (t) {
                var e, n, i = this, o = i.chart, r = i._getIndexScale(), a = r.options.stacked, s = void 0 === t ? o.data.datasets.length : t + 1, l = [];
                for (e = 0; e < s; ++e)
                    n = o.getDatasetMeta(e),
                        n.bar && o.isDatasetVisible(e) && (!1 === a || !0 === a && -1 === l.indexOf(n.stack) || void 0 === a && (void 0 === n.stack || -1 === l.indexOf(n.stack))) && l.push(n.stack);
                return l
            },
            getStackCount: function () {
                return this._getStacks().length
            },
            getStackIndex: function (t, e) {
                var n = this._getStacks(t)
                    , i = void 0 !== e ? n.indexOf(e) : -1;
                return -1 === i ? n.length - 1 : i
            },
            getRuler: function () {
                var t, e, n, i = this, o = i._getIndexScale(), r = i.getStackCount(), a = i.index, s = o.isHorizontal(), l = s ? o.left : o.top, u = l + (s ? o.width : o.height), c = [];
                for (t = 0,
                    e = i.getMeta().data.length; t < e; ++t)
                    c.push(o.getPixelForValue(null, t, a));
                return n = On.isNullOrUndef(o.options.barThickness) ? Tt(o, c) : -1,
                {
                    min: n,
                    pixels: c,
                    start: l,
                    end: u,
                    stackCount: r,
                    scale: o
                }
            },
            calculateBarValuePixels: function (t, e) {
                var n, i, o, r, a, s, l = this, u = l.chart, c = l.getMeta(), d = l._getValueScale(), h = d.isHorizontal(), f = u.data.datasets, p = +d.getRightValue(f[t].data[e]), g = d.options.minBarLength, m = d.options.stacked, v = c.stack, y = 0;
                if (m || void 0 === m && void 0 !== v)
                    for (n = 0; n < t; ++n)
                        i = u.getDatasetMeta(n),
                            i.bar && i.stack === v && i.controller._getValueScaleId() === d.id && u.isDatasetVisible(n) && (o = +d.getRightValue(f[n].data[e]),
                                (p < 0 && o < 0 || p >= 0 && o > 0) && (y += o));
                return r = d.getPixelForValue(y),
                    a = d.getPixelForValue(y + p),
                    s = a - r,
                    void 0 !== g && Math.abs(s) < g && (s = g,
                        a = p >= 0 && !h || p < 0 && h ? r - g : r + g),
                {
                    size: s,
                    base: r,
                    head: a,
                    center: a + s / 2
                }
            },
            calculateBarIndexPixels: function (t, e, n) {
                var i = this
                    , o = n.scale.options
                    , r = "flex" === o.barThickness ? Mt(e, n, o) : St(e, n, o)
                    , a = i.getStackIndex(t, i.getMeta().stack)
                    , s = r.start + r.chunk * a + r.chunk / 2
                    , l = Math.min(On.valueOrDefault(o.maxBarThickness, 1 / 0), r.chunk * r.ratio);
                return {
                    base: s - l / 2,
                    head: s + l / 2,
                    center: s,
                    size: l
                }
            },
            draw: function () {
                var t = this
                    , e = t.chart
                    , n = t._getValueScale()
                    , i = t.getMeta().data
                    , o = t.getDataset()
                    , r = i.length
                    , a = 0;
                for (On.canvas.clipArea(e.ctx, e.chartArea); a < r; ++a)
                    isNaN(n.getRightValue(o.data[a])) || i[a].draw();
                On.canvas.unclipArea(e.ctx)
            },
            _resolveElementOptions: function (t, e) {
                var n, i, o, r = this, a = r.chart, s = a.data.datasets, l = s[r.index], u = t.custom || {}, c = a.options.elements.rectangle, d = {}, h = {
                    chart: a,
                    dataIndex: e,
                    dataset: l,
                    datasetIndex: r.index
                }, f = ["backgroundColor", "borderColor", "borderSkipped", "borderWidth"];
                for (n = 0,
                    i = f.length; n < i; ++n)
                    o = f[n],
                        d[o] = li([u[o], l[o], c[o]], h, e);
                return d
            }
        })
            , ci = On.valueOrDefault
            , di = On.options.resolve;
        En._set("bubble", {
            hover: {
                mode: "single"
            },
            scales: {
                xAxes: [{
                    type: "linear",
                    position: "bottom",
                    id: "x-axis-0"
                }],
                yAxes: [{
                    type: "linear",
                    position: "left",
                    id: "y-axis-0"
                }]
            },
            tooltips: {
                callbacks: {
                    title: function () {
                        return ""
                    },
                    label: function (t, e) {
                        var n = e.datasets[t.datasetIndex].label || ""
                            , i = e.datasets[t.datasetIndex].data[t.index];
                        return n + ": (" + t.xLabel + ", " + t.yLabel + ", " + i.r + ")"
                    }
                }
            }
        });
        var hi = Yn.extend({
            dataElementType: ii.Point,
            update: function (t) {
                var e = this
                    , n = e.getMeta()
                    , i = n.data;
                On.each(i, function (n, i) {
                    e.updateElement(n, i, t)
                })
            },
            updateElement: function (t, e, n) {
                var i = this
                    , o = i.getMeta()
                    , r = t.custom || {}
                    , a = i.getScaleForId(o.xAxisID)
                    , s = i.getScaleForId(o.yAxisID)
                    , l = i._resolveElementOptions(t, e)
                    , u = i.getDataset().data[e]
                    , c = i.index
                    , d = n ? a.getPixelForDecimal(.5) : a.getPixelForValue("object" == typeof u ? u : NaN, e, c)
                    , h = n ? s.getBasePixel() : s.getPixelForValue(u, e, c);
                t._xScale = a,
                    t._yScale = s,
                    t._options = l,
                    t._datasetIndex = c,
                    t._index = e,
                    t._model = {
                        backgroundColor: l.backgroundColor,
                        borderColor: l.borderColor,
                        borderWidth: l.borderWidth,
                        hitRadius: l.hitRadius,
                        pointStyle: l.pointStyle,
                        rotation: l.rotation,
                        radius: n ? 0 : l.radius,
                        skip: r.skip || isNaN(d) || isNaN(h),
                        x: d,
                        y: h
                    },
                    t.pivot()
            },
            setHoverStyle: function (t) {
                var e = t._model
                    , n = t._options
                    , i = On.getHoverColor;
                t.$previousStyle = {
                    backgroundColor: e.backgroundColor,
                    borderColor: e.borderColor,
                    borderWidth: e.borderWidth,
                    radius: e.radius
                },
                    e.backgroundColor = ci(n.hoverBackgroundColor, i(n.backgroundColor)),
                    e.borderColor = ci(n.hoverBorderColor, i(n.borderColor)),
                    e.borderWidth = ci(n.hoverBorderWidth, n.borderWidth),
                    e.radius = n.radius + n.hoverRadius
            },
            _resolveElementOptions: function (t, e) {
                var n, i, o, r = this, a = r.chart, s = a.data.datasets, l = s[r.index], u = t.custom || {}, c = a.options.elements.point, d = l.data[e], h = {}, f = {
                    chart: a,
                    dataIndex: e,
                    dataset: l,
                    datasetIndex: r.index
                }, p = ["backgroundColor", "borderColor", "borderWidth", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth", "hoverRadius", "hitRadius", "pointStyle", "rotation"];
                for (n = 0,
                    i = p.length; n < i; ++n)
                    o = p[n],
                        h[o] = di([u[o], l[o], c[o]], f, e);
                return h.radius = di([u.radius, d ? d.r : void 0, l.radius, c.radius], f, e),
                    h
            }
        })
            , fi = On.options.resolve
            , pi = On.valueOrDefault;
        En._set("doughnut", {
            animation: {
                animateRotate: !0,
                animateScale: !1
            },
            hover: {
                mode: "single"
            },
            legendCallback: function (t) {
                var e = [];
                e.push('<ul class="' + t.id + '-legend">');
                var n = t.data
                    , i = n.datasets
                    , o = n.labels;
                if (i.length)
                    for (var r = 0; r < i[0].data.length; ++r)
                        e.push('<li><span style="background-color:' + i[0].backgroundColor[r] + '"></span>'),
                            o[r] && e.push(o[r]),
                            e.push("</li>");
                return e.push("</ul>"),
                    e.join("")
            },
            legend: {
                labels: {
                    generateLabels: function (t) {
                        var e = t.data;
                        return e.labels.length && e.datasets.length ? e.labels.map(function (n, i) {
                            var o = t.getDatasetMeta(0)
                                , r = e.datasets[0]
                                , a = o.data[i]
                                , s = a && a.custom || {}
                                , l = t.options.elements.arc;
                            return {
                                text: n,
                                fillStyle: fi([s.backgroundColor, r.backgroundColor, l.backgroundColor], void 0, i),
                                strokeStyle: fi([s.borderColor, r.borderColor, l.borderColor], void 0, i),
                                lineWidth: fi([s.borderWidth, r.borderWidth, l.borderWidth], void 0, i),
                                hidden: isNaN(r.data[i]) || o.data[i].hidden,
                                index: i
                            }
                        }) : []
                    }
                },
                onClick: function (t, e) {
                    var n, i, o, r = e.index, a = this.chart;
                    for (n = 0,
                        i = (a.data.datasets || []).length; n < i; ++n)
                        o = a.getDatasetMeta(n),
                            o.data[r] && (o.data[r].hidden = !o.data[r].hidden);
                    a.update()
                }
            },
            cutoutPercentage: 50,
            rotation: -.5 * Math.PI,
            circumference: 2 * Math.PI,
            tooltips: {
                callbacks: {
                    title: function () {
                        return ""
                    },
                    label: function (t, e) {
                        var n = e.labels[t.index]
                            , i = ": " + e.datasets[t.datasetIndex].data[t.index];
                        return On.isArray(n) ? (n = n.slice(),
                            n[0] += i) : n += i,
                            n
                    }
                }
            }
        });
        var gi = Yn.extend({
            dataElementType: ii.Arc,
            linkScales: On.noop,
            getRingIndex: function (t) {
                for (var e = 0, n = 0; n < t; ++n)
                    this.chart.isDatasetVisible(n) && ++e;
                return e
            },
            update: function (t) {
                var e, n, i = this, o = i.chart, r = o.chartArea, a = o.options, s = r.right - r.left, l = r.bottom - r.top, u = Math.min(s, l), c = {
                    x: 0,
                    y: 0
                }, d = i.getMeta(), h = d.data, f = a.cutoutPercentage, p = a.circumference, g = i._getRingWeight(i.index);
                if (p < 2 * Math.PI) {
                    var m = a.rotation % (2 * Math.PI);
                    m += 2 * Math.PI * (m >= Math.PI ? -1 : m < -Math.PI ? 1 : 0);
                    var v = m + p
                        , y = {
                            x: Math.cos(m),
                            y: Math.sin(m)
                        }
                        , b = {
                            x: Math.cos(v),
                            y: Math.sin(v)
                        }
                        , x = m <= 0 && v >= 0 || m <= 2 * Math.PI && 2 * Math.PI <= v
                        , w = m <= .5 * Math.PI && .5 * Math.PI <= v || m <= 2.5 * Math.PI && 2.5 * Math.PI <= v
                        , k = m <= -Math.PI && -Math.PI <= v || m <= Math.PI && Math.PI <= v
                        , C = m <= .5 * -Math.PI && .5 * -Math.PI <= v || m <= 1.5 * Math.PI && 1.5 * Math.PI <= v
                        , T = f / 100
                        , S = {
                            x: k ? -1 : Math.min(y.x * (y.x < 0 ? 1 : T), b.x * (b.x < 0 ? 1 : T)),
                            y: C ? -1 : Math.min(y.y * (y.y < 0 ? 1 : T), b.y * (b.y < 0 ? 1 : T))
                        }
                        , M = {
                            x: x ? 1 : Math.max(y.x * (y.x > 0 ? 1 : T), b.x * (b.x > 0 ? 1 : T)),
                            y: w ? 1 : Math.max(y.y * (y.y > 0 ? 1 : T), b.y * (b.y > 0 ? 1 : T))
                        }
                        , A = {
                            width: .5 * (M.x - S.x),
                            height: .5 * (M.y - S.y)
                        };
                    u = Math.min(s / A.width, l / A.height),
                        c = {
                            x: -.5 * (M.x + S.x),
                            y: -.5 * (M.y + S.y)
                        }
                }
                for (e = 0,
                    n = h.length; e < n; ++e)
                    h[e]._options = i._resolveElementOptions(h[e], e);
                for (o.borderWidth = i.getMaxBorderWidth(),
                    o.outerRadius = Math.max((u - o.borderWidth) / 2, 0),
                    o.innerRadius = Math.max(f ? o.outerRadius / 100 * f : 0, 0),
                    o.radiusLength = (o.outerRadius - o.innerRadius) / (i._getVisibleDatasetWeightTotal() || 1),
                    o.offsetX = c.x * o.outerRadius,
                    o.offsetY = c.y * o.outerRadius,
                    d.total = i.calculateTotal(),
                    i.outerRadius = o.outerRadius - o.radiusLength * i._getRingWeightOffset(i.index),
                    i.innerRadius = Math.max(i.outerRadius - o.radiusLength * g, 0),
                    e = 0,
                    n = h.length; e < n; ++e)
                    i.updateElement(h[e], e, t)
            },
            updateElement: function (t, e, n) {
                var i = this
                    , o = i.chart
                    , r = o.chartArea
                    , a = o.options
                    , s = a.animation
                    , l = (r.left + r.right) / 2
                    , u = (r.top + r.bottom) / 2
                    , c = a.rotation
                    , d = a.rotation
                    , h = i.getDataset()
                    , f = n && s.animateRotate ? 0 : t.hidden ? 0 : i.calculateCircumference(h.data[e]) * (a.circumference / (2 * Math.PI))
                    , p = n && s.animateScale ? 0 : i.innerRadius
                    , g = n && s.animateScale ? 0 : i.outerRadius
                    , m = t._options || {};
                On.extend(t, {
                    _datasetIndex: i.index,
                    _index: e,
                    _model: {
                        backgroundColor: m.backgroundColor,
                        borderColor: m.borderColor,
                        borderWidth: m.borderWidth,
                        borderAlign: m.borderAlign,
                        x: l + o.offsetX,
                        y: u + o.offsetY,
                        startAngle: c,
                        endAngle: d,
                        circumference: f,
                        outerRadius: g,
                        innerRadius: p,
                        label: On.valueAtIndexOrDefault(h.label, e, o.data.labels[e])
                    }
                });
                var v = t._model;
                n && s.animateRotate || (v.startAngle = 0 === e ? a.rotation : i.getMeta().data[e - 1]._model.endAngle,
                    v.endAngle = v.startAngle + v.circumference),
                    t.pivot()
            },
            calculateTotal: function () {
                var t, e = this.getDataset(), n = this.getMeta(), i = 0;
                return On.each(n.data, function (n, o) {
                    t = e.data[o],
                        isNaN(t) || n.hidden || (i += Math.abs(t))
                }),
                    i
            },
            calculateCircumference: function (t) {
                var e = this.getMeta().total;
                return e > 0 && !isNaN(t) ? 2 * Math.PI * (Math.abs(t) / e) : 0
            },
            getMaxBorderWidth: function (t) {
                var e, n, i, o, r, a, s, l, u = this, c = 0, d = u.chart;
                if (!t)
                    for (e = 0,
                        n = d.data.datasets.length; e < n; ++e)
                        if (d.isDatasetVisible(e)) {
                            i = d.getDatasetMeta(e),
                                t = i.data,
                                e !== u.index && (r = i.controller);
                            break
                        }
                if (!t)
                    return 0;
                for (e = 0,
                    n = t.length; e < n; ++e)
                    o = t[e],
                        a = r ? r._resolveElementOptions(o, e) : o._options,
                        "inner" !== a.borderAlign && (s = a.borderWidth,
                            l = a.hoverBorderWidth,
                            c = s > c ? s : c,
                            c = l > c ? l : c);
                return c
            },
            setHoverStyle: function (t) {
                var e = t._model
                    , n = t._options
                    , i = On.getHoverColor;
                t.$previousStyle = {
                    backgroundColor: e.backgroundColor,
                    borderColor: e.borderColor,
                    borderWidth: e.borderWidth
                },
                    e.backgroundColor = pi(n.hoverBackgroundColor, i(n.backgroundColor)),
                    e.borderColor = pi(n.hoverBorderColor, i(n.borderColor)),
                    e.borderWidth = pi(n.hoverBorderWidth, n.borderWidth)
            },
            _resolveElementOptions: function (t, e) {
                var n, i, o, r = this, a = r.chart, s = r.getDataset(), l = t.custom || {}, u = a.options.elements.arc, c = {}, d = {
                    chart: a,
                    dataIndex: e,
                    dataset: s,
                    datasetIndex: r.index
                }, h = ["backgroundColor", "borderColor", "borderWidth", "borderAlign", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth"];
                for (n = 0,
                    i = h.length; n < i; ++n)
                    o = h[n],
                        c[o] = fi([l[o], s[o], u[o]], d, e);
                return c
            },
            _getRingWeightOffset: function (t) {
                for (var e = 0, n = 0; n < t; ++n)
                    this.chart.isDatasetVisible(n) && (e += this._getRingWeight(n));
                return e
            },
            _getRingWeight: function (t) {
                return Math.max(pi(this.chart.data.datasets[t].weight, 1), 0)
            },
            _getVisibleDatasetWeightTotal: function () {
                return this._getRingWeightOffset(this.chart.data.datasets.length)
            }
        });
        En._set("horizontalBar", {
            hover: {
                mode: "index",
                axis: "y"
            },
            scales: {
                xAxes: [{
                    type: "linear",
                    position: "bottom"
                }],
                yAxes: [{
                    type: "category",
                    position: "left",
                    categoryPercentage: .8,
                    barPercentage: .9,
                    offset: !0,
                    gridLines: {
                        offsetGridLines: !0
                    }
                }]
            },
            elements: {
                rectangle: {
                    borderSkipped: "left"
                }
            },
            tooltips: {
                mode: "index",
                axis: "y"
            }
        });
        var mi = ui.extend({
            _getValueScaleId: function () {
                return this.getMeta().xAxisID
            },
            _getIndexScaleId: function () {
                return this.getMeta().yAxisID
            }
        })
            , vi = On.valueOrDefault
            , yi = On.options.resolve
            , bi = On.canvas._isPointInArea;
        En._set("line", {
            showLines: !0,
            spanGaps: !1,
            hover: {
                mode: "label"
            },
            scales: {
                xAxes: [{
                    type: "category",
                    id: "x-axis-0"
                }],
                yAxes: [{
                    type: "linear",
                    id: "y-axis-0"
                }]
            }
        });
        var xi = Yn.extend({
            datasetElementType: ii.Line,
            dataElementType: ii.Point,
            update: function (t) {
                var e, n, i = this, o = i.getMeta(), r = o.dataset, a = o.data || [], s = i.getScaleForId(o.yAxisID), l = i.getDataset(), u = At(l, i.chart.options);
                for (u && (void 0 !== l.tension && void 0 === l.lineTension && (l.lineTension = l.tension),
                    r._scale = s,
                    r._datasetIndex = i.index,
                    r._children = a,
                    r._model = i._resolveLineOptions(r),
                    r.pivot()),
                    e = 0,
                    n = a.length; e < n; ++e)
                    i.updateElement(a[e], e, t);
                for (u && 0 !== r._model.tension && i.updateBezierControlPoints(),
                    e = 0,
                    n = a.length; e < n; ++e)
                    a[e].pivot()
            },
            updateElement: function (t, e, n) {
                var i, o, r = this, a = r.getMeta(), s = t.custom || {}, l = r.getDataset(), u = r.index, c = l.data[e], d = r.getScaleForId(a.yAxisID), h = r.getScaleForId(a.xAxisID), f = a.dataset._model, p = r._resolvePointOptions(t, e);
                i = h.getPixelForValue("object" == typeof c ? c : NaN, e, u),
                    o = n ? d.getBasePixel() : r.calculatePointY(c, e, u),
                    t._xScale = h,
                    t._yScale = d,
                    t._options = p,
                    t._datasetIndex = u,
                    t._index = e,
                    t._model = {
                        x: i,
                        y: o,
                        skip: s.skip || isNaN(i) || isNaN(o),
                        radius: p.radius,
                        pointStyle: p.pointStyle,
                        rotation: p.rotation,
                        backgroundColor: p.backgroundColor,
                        borderColor: p.borderColor,
                        borderWidth: p.borderWidth,
                        tension: vi(s.tension, f ? f.tension : 0),
                        steppedLine: !!f && f.steppedLine,
                        hitRadius: p.hitRadius
                    }
            },
            _resolvePointOptions: function (t, e) {
                var n, i, o, r = this, a = r.chart, s = a.data.datasets[r.index], l = t.custom || {}, u = a.options.elements.point, c = {}, d = {
                    chart: a,
                    dataIndex: e,
                    dataset: s,
                    datasetIndex: r.index
                }, h = {
                    backgroundColor: "pointBackgroundColor",
                    borderColor: "pointBorderColor",
                    borderWidth: "pointBorderWidth",
                    hitRadius: "pointHitRadius",
                    hoverBackgroundColor: "pointHoverBackgroundColor",
                    hoverBorderColor: "pointHoverBorderColor",
                    hoverBorderWidth: "pointHoverBorderWidth",
                    hoverRadius: "pointHoverRadius",
                    pointStyle: "pointStyle",
                    radius: "pointRadius",
                    rotation: "pointRotation"
                }, f = Object.keys(h);
                for (n = 0,
                    i = f.length; n < i; ++n)
                    o = f[n],
                        c[o] = yi([l[o], s[h[o]], s[o], u[o]], d, e);
                return c
            },
            _resolveLineOptions: function (t) {
                var e, n, i, o = this, r = o.chart, a = r.data.datasets[o.index], s = t.custom || {}, l = r.options, u = l.elements.line, c = {}, d = ["backgroundColor", "borderWidth", "borderColor", "borderCapStyle", "borderDash", "borderDashOffset", "borderJoinStyle", "fill", "cubicInterpolationMode"];
                for (e = 0,
                    n = d.length; e < n; ++e)
                    i = d[e],
                        c[i] = yi([s[i], a[i], u[i]]);
                return c.spanGaps = vi(a.spanGaps, l.spanGaps),
                    c.tension = vi(a.lineTension, u.tension),
                    c.steppedLine = yi([s.steppedLine, a.steppedLine, u.stepped]),
                    c
            },
            calculatePointY: function (t, e, n) {
                var i, o, r, a = this, s = a.chart, l = a.getMeta(), u = a.getScaleForId(l.yAxisID), c = 0, d = 0;
                if (u.options.stacked) {
                    for (i = 0; i < n; i++)
                        if (o = s.data.datasets[i],
                            r = s.getDatasetMeta(i),
                            "line" === r.type && r.yAxisID === u.id && s.isDatasetVisible(i)) {
                            var h = Number(u.getRightValue(o.data[e]));
                            h < 0 ? d += h || 0 : c += h || 0
                        }
                    var f = Number(u.getRightValue(t));
                    return f < 0 ? u.getPixelForValue(d + f) : u.getPixelForValue(c + f)
                }
                return u.getPixelForValue(t)
            },
            updateBezierControlPoints: function () {
                function t(t, e, n) {
                    return Math.max(Math.min(t, n), e)
                }
                var e, n, i, o, r = this, a = r.chart, s = r.getMeta(), l = s.dataset._model, u = a.chartArea, c = s.data || [];
                if (l.spanGaps && (c = c.filter(function (t) {
                    return !t._model.skip
                })),
                    "monotone" === l.cubicInterpolationMode)
                    On.splineCurveMonotone(c);
                else
                    for (e = 0,
                        n = c.length; e < n; ++e)
                        i = c[e]._model,
                            o = On.splineCurve(On.previousItem(c, e)._model, i, On.nextItem(c, e)._model, l.tension),
                            i.controlPointPreviousX = o.previous.x,
                            i.controlPointPreviousY = o.previous.y,
                            i.controlPointNextX = o.next.x,
                            i.controlPointNextY = o.next.y;
                if (a.options.elements.line.capBezierPoints)
                    for (e = 0,
                        n = c.length; e < n; ++e)
                        i = c[e]._model,
                            bi(i, u) && (e > 0 && bi(c[e - 1]._model, u) && (i.controlPointPreviousX = t(i.controlPointPreviousX, u.left, u.right),
                                i.controlPointPreviousY = t(i.controlPointPreviousY, u.top, u.bottom)),
                                e < c.length - 1 && bi(c[e + 1]._model, u) && (i.controlPointNextX = t(i.controlPointNextX, u.left, u.right),
                                    i.controlPointNextY = t(i.controlPointNextY, u.top, u.bottom)))
            },
            draw: function () {
                var t, e = this, n = e.chart, i = e.getMeta(), o = i.data || [], r = n.chartArea, a = o.length, s = 0;
                for (At(e.getDataset(), n.options) && (t = (i.dataset._model.borderWidth || 0) / 2,
                    On.canvas.clipArea(n.ctx, {
                        left: r.left,
                        right: r.right,
                        top: r.top - t,
                        bottom: r.bottom + t
                    }),
                    i.dataset.draw(),
                    On.canvas.unclipArea(n.ctx)); s < a; ++s)
                    o[s].draw(r)
            },
            setHoverStyle: function (t) {
                var e = t._model
                    , n = t._options
                    , i = On.getHoverColor;
                t.$previousStyle = {
                    backgroundColor: e.backgroundColor,
                    borderColor: e.borderColor,
                    borderWidth: e.borderWidth,
                    radius: e.radius
                },
                    e.backgroundColor = vi(n.hoverBackgroundColor, i(n.backgroundColor)),
                    e.borderColor = vi(n.hoverBorderColor, i(n.borderColor)),
                    e.borderWidth = vi(n.hoverBorderWidth, n.borderWidth),
                    e.radius = vi(n.hoverRadius, n.radius)
            }
        })
            , wi = On.options.resolve;
        En._set("polarArea", {
            scale: {
                type: "radialLinear",
                angleLines: {
                    display: !1
                },
                gridLines: {
                    circular: !0
                },
                pointLabels: {
                    display: !1
                },
                ticks: {
                    beginAtZero: !0
                }
            },
            animation: {
                animateRotate: !0,
                animateScale: !0
            },
            startAngle: -.5 * Math.PI,
            legendCallback: function (t) {
                var e = [];
                e.push('<ul class="' + t.id + '-legend">');
                var n = t.data
                    , i = n.datasets
                    , o = n.labels;
                if (i.length)
                    for (var r = 0; r < i[0].data.length; ++r)
                        e.push('<li><span style="background-color:' + i[0].backgroundColor[r] + '"></span>'),
                            o[r] && e.push(o[r]),
                            e.push("</li>");
                return e.push("</ul>"),
                    e.join("")
            },
            legend: {
                labels: {
                    generateLabels: function (t) {
                        var e = t.data;
                        return e.labels.length && e.datasets.length ? e.labels.map(function (n, i) {
                            var o = t.getDatasetMeta(0)
                                , r = e.datasets[0]
                                , a = o.data[i]
                                , s = a.custom || {}
                                , l = t.options.elements.arc;
                            return {
                                text: n,
                                fillStyle: wi([s.backgroundColor, r.backgroundColor, l.backgroundColor], void 0, i),
                                strokeStyle: wi([s.borderColor, r.borderColor, l.borderColor], void 0, i),
                                lineWidth: wi([s.borderWidth, r.borderWidth, l.borderWidth], void 0, i),
                                hidden: isNaN(r.data[i]) || o.data[i].hidden,
                                index: i
                            }
                        }) : []
                    }
                },
                onClick: function (t, e) {
                    var n, i, o, r = e.index, a = this.chart;
                    for (n = 0,
                        i = (a.data.datasets || []).length; n < i; ++n)
                        o = a.getDatasetMeta(n),
                            o.data[r].hidden = !o.data[r].hidden;
                    a.update()
                }
            },
            tooltips: {
                callbacks: {
                    title: function () {
                        return ""
                    },
                    label: function (t, e) {
                        return e.labels[t.index] + ": " + t.yLabel
                    }
                }
            }
        });
        var ki = Yn.extend({
            dataElementType: ii.Arc,
            linkScales: On.noop,
            update: function (t) {
                var e, n, i, o = this, r = o.getDataset(), a = o.getMeta(), s = o.chart.options.startAngle || 0, l = o._starts = [], u = o._angles = [], c = a.data;
                for (o._updateRadius(),
                    a.count = o.countVisibleElements(),
                    e = 0,
                    n = r.data.length; e < n; e++)
                    l[e] = s,
                        i = o._computeAngle(e),
                        u[e] = i,
                        s += i;
                for (e = 0,
                    n = c.length; e < n; ++e)
                    c[e]._options = o._resolveElementOptions(c[e], e),
                        o.updateElement(c[e], e, t)
            },
            _updateRadius: function () {
                var t = this
                    , e = t.chart
                    , n = e.chartArea
                    , i = e.options
                    , o = Math.min(n.right - n.left, n.bottom - n.top);
                e.outerRadius = Math.max(o / 2, 0),
                    e.innerRadius = Math.max(i.cutoutPercentage ? e.outerRadius / 100 * i.cutoutPercentage : 1, 0),
                    e.radiusLength = (e.outerRadius - e.innerRadius) / e.getVisibleDatasetCount(),
                    t.outerRadius = e.outerRadius - e.radiusLength * t.index,
                    t.innerRadius = t.outerRadius - e.radiusLength
            },
            updateElement: function (t, e, n) {
                var i = this
                    , o = i.chart
                    , r = i.getDataset()
                    , a = o.options
                    , s = a.animation
                    , l = o.scale
                    , u = o.data.labels
                    , c = l.xCenter
                    , d = l.yCenter
                    , h = a.startAngle
                    , f = t.hidden ? 0 : l.getDistanceFromCenterForValue(r.data[e])
                    , p = i._starts[e]
                    , g = p + (t.hidden ? 0 : i._angles[e])
                    , m = s.animateScale ? 0 : l.getDistanceFromCenterForValue(r.data[e])
                    , v = t._options || {};
                On.extend(t, {
                    _datasetIndex: i.index,
                    _index: e,
                    _scale: l,
                    _model: {
                        backgroundColor: v.backgroundColor,
                        borderColor: v.borderColor,
                        borderWidth: v.borderWidth,
                        borderAlign: v.borderAlign,
                        x: c,
                        y: d,
                        innerRadius: 0,
                        outerRadius: n ? m : f,
                        startAngle: n && s.animateRotate ? h : p,
                        endAngle: n && s.animateRotate ? h : g,
                        label: On.valueAtIndexOrDefault(u, e, u[e])
                    }
                }),
                    t.pivot()
            },
            countVisibleElements: function () {
                var t = this.getDataset()
                    , e = this.getMeta()
                    , n = 0;
                return On.each(e.data, function (e, i) {
                    isNaN(t.data[i]) || e.hidden || n++
                }),
                    n
            },
            setHoverStyle: function (t) {
                var e = t._model
                    , n = t._options
                    , i = On.getHoverColor
                    , o = On.valueOrDefault;
                t.$previousStyle = {
                    backgroundColor: e.backgroundColor,
                    borderColor: e.borderColor,
                    borderWidth: e.borderWidth
                },
                    e.backgroundColor = o(n.hoverBackgroundColor, i(n.backgroundColor)),
                    e.borderColor = o(n.hoverBorderColor, i(n.borderColor)),
                    e.borderWidth = o(n.hoverBorderWidth, n.borderWidth)
            },
            _resolveElementOptions: function (t, e) {
                var n, i, o, r = this, a = r.chart, s = r.getDataset(), l = t.custom || {}, u = a.options.elements.arc, c = {}, d = {
                    chart: a,
                    dataIndex: e,
                    dataset: s,
                    datasetIndex: r.index
                }, h = ["backgroundColor", "borderColor", "borderWidth", "borderAlign", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth"];
                for (n = 0,
                    i = h.length; n < i; ++n)
                    o = h[n],
                        c[o] = wi([l[o], s[o], u[o]], d, e);
                return c
            },
            _computeAngle: function (t) {
                var e = this
                    , n = this.getMeta().count
                    , i = e.getDataset()
                    , o = e.getMeta();
                if (isNaN(i.data[t]) || o.data[t].hidden)
                    return 0;
                var r = {
                    chart: e.chart,
                    dataIndex: t,
                    dataset: i,
                    datasetIndex: e.index
                };
                return wi([e.chart.options.elements.arc.angle, 2 * Math.PI / n], r, t)
            }
        });
        En._set("pie", On.clone(En.doughnut)),
            En._set("pie", {
                cutoutPercentage: 0
            });
        var Ci = gi
            , Ti = On.valueOrDefault
            , Si = On.options.resolve;
        En._set("radar", {
            scale: {
                type: "radialLinear"
            },
            elements: {
                line: {
                    tension: 0
                }
            }
        });
        var Mi = Yn.extend({
            datasetElementType: ii.Line,
            dataElementType: ii.Point,
            linkScales: On.noop,
            update: function (t) {
                var e, n, i = this, o = i.getMeta(), r = o.dataset, a = o.data || [], s = i.chart.scale, l = i.getDataset();
                for (void 0 !== l.tension && void 0 === l.lineTension && (l.lineTension = l.tension),
                    r._scale = s,
                    r._datasetIndex = i.index,
                    r._children = a,
                    r._loop = !0,
                    r._model = i._resolveLineOptions(r),
                    r.pivot(),
                    e = 0,
                    n = a.length; e < n; ++e)
                    i.updateElement(a[e], e, t);
                for (i.updateBezierControlPoints(),
                    e = 0,
                    n = a.length; e < n; ++e)
                    a[e].pivot()
            },
            updateElement: function (t, e, n) {
                var i = this
                    , o = t.custom || {}
                    , r = i.getDataset()
                    , a = i.chart.scale
                    , s = a.getPointPositionForValue(e, r.data[e])
                    , l = i._resolvePointOptions(t, e)
                    , u = i.getMeta().dataset._model
                    , c = n ? a.xCenter : s.x
                    , d = n ? a.yCenter : s.y;
                t._scale = a,
                    t._options = l,
                    t._datasetIndex = i.index,
                    t._index = e,
                    t._model = {
                        x: c,
                        y: d,
                        skip: o.skip || isNaN(c) || isNaN(d),
                        radius: l.radius,
                        pointStyle: l.pointStyle,
                        rotation: l.rotation,
                        backgroundColor: l.backgroundColor,
                        borderColor: l.borderColor,
                        borderWidth: l.borderWidth,
                        tension: Ti(o.tension, u ? u.tension : 0),
                        hitRadius: l.hitRadius
                    }
            },
            _resolvePointOptions: function (t, e) {
                var n, i, o, r = this, a = r.chart, s = a.data.datasets[r.index], l = t.custom || {}, u = a.options.elements.point, c = {}, d = {
                    chart: a,
                    dataIndex: e,
                    dataset: s,
                    datasetIndex: r.index
                }, h = {
                    backgroundColor: "pointBackgroundColor",
                    borderColor: "pointBorderColor",
                    borderWidth: "pointBorderWidth",
                    hitRadius: "pointHitRadius",
                    hoverBackgroundColor: "pointHoverBackgroundColor",
                    hoverBorderColor: "pointHoverBorderColor",
                    hoverBorderWidth: "pointHoverBorderWidth",
                    hoverRadius: "pointHoverRadius",
                    pointStyle: "pointStyle",
                    radius: "pointRadius",
                    rotation: "pointRotation"
                }, f = Object.keys(h);
                for (n = 0,
                    i = f.length; n < i; ++n)
                    o = f[n],
                        c[o] = Si([l[o], s[h[o]], s[o], u[o]], d, e);
                return c
            },
            _resolveLineOptions: function (t) {
                var e, n, i, o = this, r = o.chart, a = r.data.datasets[o.index], s = t.custom || {}, l = r.options.elements.line, u = {}, c = ["backgroundColor", "borderWidth", "borderColor", "borderCapStyle", "borderDash", "borderDashOffset", "borderJoinStyle", "fill"];
                for (e = 0,
                    n = c.length; e < n; ++e)
                    i = c[e],
                        u[i] = Si([s[i], a[i], l[i]]);
                return u.tension = Ti(a.lineTension, l.tension),
                    u
            },
            updateBezierControlPoints: function () {
                function t(t, e, n) {
                    return Math.max(Math.min(t, n), e)
                }
                var e, n, i, o, r = this, a = r.getMeta(), s = r.chart.chartArea, l = a.data || [];
                for (e = 0,
                    n = l.length; e < n; ++e)
                    i = l[e]._model,
                        o = On.splineCurve(On.previousItem(l, e, !0)._model, i, On.nextItem(l, e, !0)._model, i.tension),
                        i.controlPointPreviousX = t(o.previous.x, s.left, s.right),
                        i.controlPointPreviousY = t(o.previous.y, s.top, s.bottom),
                        i.controlPointNextX = t(o.next.x, s.left, s.right),
                        i.controlPointNextY = t(o.next.y, s.top, s.bottom)
            },
            setHoverStyle: function (t) {
                var e = t._model
                    , n = t._options
                    , i = On.getHoverColor;
                t.$previousStyle = {
                    backgroundColor: e.backgroundColor,
                    borderColor: e.borderColor,
                    borderWidth: e.borderWidth,
                    radius: e.radius
                },
                    e.backgroundColor = Ti(n.hoverBackgroundColor, i(n.backgroundColor)),
                    e.borderColor = Ti(n.hoverBorderColor, i(n.borderColor)),
                    e.borderWidth = Ti(n.hoverBorderWidth, n.borderWidth),
                    e.radius = Ti(n.hoverRadius, n.radius)
            }
        });
        En._set("scatter", {
            hover: {
                mode: "single"
            },
            scales: {
                xAxes: [{
                    id: "x-axis-1",
                    type: "linear",
                    position: "bottom"
                }],
                yAxes: [{
                    id: "y-axis-1",
                    type: "linear",
                    position: "left"
                }]
            },
            showLines: !1,
            tooltips: {
                callbacks: {
                    title: function () {
                        return ""
                    },
                    label: function (t) {
                        return "(" + t.xLabel + ", " + t.yLabel + ")"
                    }
                }
            }
        });
        var Ai = xi
            , _i = {
                bar: ui,
                bubble: hi,
                doughnut: gi,
                horizontalBar: mi,
                line: xi,
                polarArea: ki,
                pie: Ci,
                radar: Mi,
                scatter: Ai
            }
            , Di = {
                modes: {
                    single: function (t, e) {
                        var n = _t(e, t)
                            , i = [];
                        return Dt(t, function (t) {
                            if (t.inRange(n.x, n.y))
                                return i.push(t),
                                    i
                        }),
                            i.slice(0, 1)
                    },
                    label: Nt,
                    index: Nt,
                    dataset: function (t, e, n) {
                        var i = _t(e, t);
                        n.axis = n.axis || "xy";
                        var o = Et(n.axis)
                            , r = n.intersect ? Pt(t, i) : It(t, i, !1, o);
                        return r.length > 0 && (r = t.getDatasetMeta(r[0]._datasetIndex).data),
                            r
                    },
                    "x-axis": function (t, e) {
                        return Nt(t, e, {
                            intersect: !1
                        })
                    },
                    point: function (t, e) {
                        return Pt(t, _t(e, t))
                    },
                    nearest: function (t, e, n) {
                        var i = _t(e, t);
                        n.axis = n.axis || "xy";
                        var o = Et(n.axis);
                        return It(t, i, n.intersect, o)
                    },
                    x: function (t, e, n) {
                        var i = _t(e, t)
                            , o = []
                            , r = !1;
                        return Dt(t, function (t) {
                            t.inXRange(i.x) && o.push(t),
                                t.inRange(i.x, i.y) && (r = !0)
                        }),
                            n.intersect && !r && (o = []),
                            o
                    },
                    y: function (t, e, n) {
                        var i = _t(e, t)
                            , o = []
                            , r = !1;
                        return Dt(t, function (t) {
                            t.inYRange(i.y) && o.push(t),
                                t.inRange(i.x, i.y) && (r = !0)
                        }),
                            n.intersect && !r && (o = []),
                            o
                    }
                }
            };
        En._set("global", {
            layout: {
                padding: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                }
            }
        });
        var Pi = {
            defaults: {},
            addBox: function (t, e) {
                t.boxes || (t.boxes = []),
                    e.fullWidth = e.fullWidth || !1,
                    e.position = e.position || "top",
                    e.weight = e.weight || 0,
                    t.boxes.push(e)
            },
            removeBox: function (t, e) {
                var n = t.boxes ? t.boxes.indexOf(e) : -1;
                -1 !== n && t.boxes.splice(n, 1)
            },
            configure: function (t, e, n) {
                for (var i, o = ["fullWidth", "position", "weight"], r = o.length, a = 0; a < r; ++a)
                    i = o[a],
                        n.hasOwnProperty(i) && (e[i] = n[i])
            },
            update: function (t, e, n) {
                function i(t) {
                    var e, n = t.isHorizontal();
                    n ? (e = t.update(t.fullWidth ? k : M, C / 2),
                        A -= e.height) : (e = t.update(S, A),
                            M -= e.width),
                        D.push({
                            horizontal: n,
                            width: e.width,
                            box: t
                        })
                }
                function o(t) {
                    var e = On.findNextWhere(D, function (e) {
                        return e.box === t
                    });
                    if (e)
                        if (e.horizontal) {
                            var n = {
                                left: Math.max(_.left, y.left),
                                right: Math.max(_.right, y.right),
                                top: 0,
                                bottom: 0
                            };
                            t.update(t.fullWidth ? k : M, C / 2, n)
                        } else
                            t.update(e.width, A)
                }
                function r(t) {
                    var e = On.findNextWhere(D, function (e) {
                        return e.box === t
                    })
                        , n = {
                            left: 0,
                            right: 0,
                            top: _.top,
                            bottom: _.bottom
                        };
                    e && t.update(e.width, A, n)
                }
                function a(t) {
                    t.isHorizontal() ? (t.left = t.fullWidth ? u : _.left,
                        t.right = t.fullWidth ? e - c : _.left + M,
                        t.top = O,
                        t.bottom = O + t.height,
                        O = t.bottom) : (t.left = L,
                            t.right = L + t.width,
                            t.top = _.top,
                            t.bottom = _.top + A,
                            L = t.right)
                }
                if (t) {
                    var s = t.options.layout || {}
                        , l = On.options.toPadding(s.padding)
                        , u = l.left
                        , c = l.right
                        , d = l.top
                        , h = l.bottom
                        , f = Lt(t.boxes, "left")
                        , p = Lt(t.boxes, "right")
                        , g = Lt(t.boxes, "top")
                        , m = Lt(t.boxes, "bottom")
                        , v = Lt(t.boxes, "chartArea");
                    Ot(f, !0),
                        Ot(p, !1),
                        Ot(g, !0),
                        Ot(m, !1);
                    var y, b = f.concat(p), x = g.concat(m), w = b.concat(x), k = e - u - c, C = n - d - h, T = k / 2, S = (e - T) / b.length, M = k, A = C, _ = {
                        top: d,
                        left: u,
                        bottom: h,
                        right: c
                    }, D = [];
                    On.each(w, i),
                        y = Rt(w),
                        On.each(b, o),
                        Ft(b, _),
                        On.each(x, o),
                        Ft(x, _),
                        On.each(b, r),
                        _ = {
                            top: d,
                            left: u,
                            bottom: h,
                            right: c
                        },
                        Ft(w, _);
                    var P = Math.max(y.left - _.left, 0);
                    _.left += P,
                        _.right += Math.max(y.right - _.right, 0);
                    var I = Math.max(y.top - _.top, 0);
                    _.top += I,
                        _.bottom += Math.max(y.bottom - _.bottom, 0);
                    var E = n - _.top - _.bottom
                        , N = e - _.left - _.right;
                    N === M && E === A || (On.each(b, function (t) {
                        t.height = E
                    }),
                        On.each(x, function (t) {
                            t.fullWidth || (t.width = N)
                        }),
                        A = E,
                        M = N);
                    var L = u + P
                        , O = d + I;
                    On.each(f.concat(g), a),
                        L += M,
                        O += A,
                        On.each(p, a),
                        On.each(m, a),
                        t.chartArea = {
                            left: _.left,
                            top: _.top,
                            right: _.left + M,
                            bottom: _.top + A
                        },
                        On.each(v, function (e) {
                            e.left = t.chartArea.left,
                                e.top = t.chartArea.top,
                                e.right = t.chartArea.right,
                                e.bottom = t.chartArea.bottom,
                                e.update(M, A)
                        })
                }
            }
        }
            , Ii = {
                acquireContext: function (t) {
                    return t && t.canvas && (t = t.canvas),
                        t && t.getContext("2d") || null
                }
            }
            , Ei = Object.freeze({
                default: "/*\n * DOM element rendering detection\n * https://davidwalsh.name/detect-node-insertion\n */\n@keyframes chartjs-render-animation {\n\tfrom { opacity: 0.99; }\n\tto { opacity: 1; }\n}\n\n.chartjs-render-monitor {\n\tanimation: chartjs-render-animation 0.001s;\n}\n\n/*\n * DOM element resizing detection\n * https://github.com/marcj/css-element-queries\n */\n.chartjs-size-monitor,\n.chartjs-size-monitor-expand,\n.chartjs-size-monitor-shrink {\n\tposition: absolute;\n\tdirection: ltr;\n\tleft: 0;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\toverflow: hidden;\n\tpointer-events: none;\n\tvisibility: hidden;\n\tz-index: -1;\n}\n\n.chartjs-size-monitor-expand > div {\n\tposition: absolute;\n\twidth: 1000000px;\n\theight: 1000000px;\n\tleft: 0;\n\ttop: 0;\n}\n\n.chartjs-size-monitor-shrink > div {\n\tposition: absolute;\n\twidth: 200%;\n\theight: 200%;\n\tleft: 0;\n\ttop: 0;\n}\n"
            })
            , Ni = function (t) {
                return t && t.default || t
            }(Ei)
            , Li = "$chartjs"
            , Oi = "chartjs-size-monitor"
            , Ri = "chartjs-render-monitor"
            , Fi = "chartjs-render-animation"
            , $i = ["animationstart", "webkitAnimationStart"]
            , ji = {
                touchstart: "mousedown",
                touchmove: "mousemove",
                touchend: "mouseup",
                pointerenter: "mouseenter",
                pointerdown: "mousedown",
                pointermove: "mousemove",
                pointerup: "mouseup",
                pointerleave: "mouseout",
                pointerout: "mouseout"
            }
            , Wi = function () {
                var t = !1;
                try {
                    var e = Object.defineProperty({}, "passive", {
                        get: function () {
                            t = !0
                        }
                    });
                    window.addEventListener("e", null, e)
                } catch (t) { }
                return t
            }()
            , Hi = !!Wi && {
                passive: !0
            }
            , zi = {
                disableCSSInjection: !1,
                _enabled: "undefined" != typeof window && "undefined" != typeof document,
                _ensureLoaded: function () {
                    this._loaded || (this._loaded = !0,
                        this.disableCSSInjection || Gt(this, Ni))
                },
                acquireContext: function (t, e) {
                    "string" == typeof t ? t = document.getElementById(t) : t.length && (t = t[0]),
                        t && t.canvas && (t = t.canvas);
                    var n = t && t.getContext && t.getContext("2d");
                    return this._ensureLoaded(),
                        n && n.canvas === t ? (jt(t, e),
                            n) : null
                },
                releaseContext: function (t) {
                    var e = t.canvas;
                    if (e[Li]) {
                        var n = e[Li].initial;
                        ["height", "width"].forEach(function (t) {
                            var i = n[t];
                            On.isNullOrUndef(i) ? e.removeAttribute(t) : e.setAttribute(t, i)
                        }),
                            On.each(n.style || {}, function (t, n) {
                                e.style[n] = t
                            }),
                            e.width = e.width,
                            delete e[Li]
                    }
                },
                addEventListener: function (t, e, n) {
                    var i = t.canvas;
                    if ("resize" === e)
                        return void Kt(i, n, t);
                    var o = n[Li] || (n[Li] = {});
                    Wt(i, e, (o.proxies || (o.proxies = {}))[t.id + "_" + e] = function (e) {
                        n(Bt(e, t))
                    }
                    )
                },
                removeEventListener: function (t, e, n) {
                    var i = t.canvas;
                    if ("resize" === e)
                        return void Qt(i);
                    var o = n[Li] || {}
                        , r = o.proxies || {}
                        , a = r[t.id + "_" + e];
                    a && Ht(i, e, a)
                }
            };
        On.addEvent = Wt,
            On.removeEvent = Ht;
        var Bi = zi._enabled ? zi : Ii
            , qi = On.extend({
                initialize: function () { },
                acquireContext: function () { },
                releaseContext: function () { },
                addEventListener: function () { },
                removeEventListener: function () { }
            }, Bi);
        En._set("global", {
            plugins: {}
        });
        var Vi = {
            _plugins: [],
            _cacheId: 0,
            register: function (t) {
                var e = this._plugins;
                [].concat(t).forEach(function (t) {
                    -1 === e.indexOf(t) && e.push(t)
                }),
                    this._cacheId++
            },
            unregister: function (t) {
                var e = this._plugins;
                [].concat(t).forEach(function (t) {
                    var n = e.indexOf(t);
                    -1 !== n && e.splice(n, 1)
                }),
                    this._cacheId++
            },
            clear: function () {
                this._plugins = [],
                    this._cacheId++
            },
            count: function () {
                return this._plugins.length
            },
            getAll: function () {
                return this._plugins
            },
            notify: function (t, e, n) {
                var i, o, r, a, s, l = this.descriptors(t), u = l.length;
                for (i = 0; i < u; ++i)
                    if (o = l[i],
                        r = o.plugin,
                        "function" == typeof (s = r[e]) && (a = [t].concat(n || []),
                            a.push(o.options),
                            !1 === s.apply(r, a)))
                        return !1;
                return !0
            },
            descriptors: function (t) {
                var e = t.$plugins || (t.$plugins = {});
                if (e.id === this._cacheId)
                    return e.descriptors;
                var n = []
                    , i = []
                    , o = t && t.config || {}
                    , r = o.options && o.options.plugins || {};
                return this._plugins.concat(o.plugins || []).forEach(function (t) {
                    if (-1 === n.indexOf(t)) {
                        var e = t.id
                            , o = r[e];
                        !1 !== o && (!0 === o && (o = On.clone(En.global.plugins[e])),
                            n.push(t),
                            i.push({
                                plugin: t,
                                options: o || {}
                            }))
                    }
                }),
                    e.descriptors = i,
                    e.id = this._cacheId,
                    i
            },
            _invalidate: function (t) {
                delete t.$plugins
            }
        }
            , Ui = {
                constructors: {},
                defaults: {},
                registerScaleType: function (t, e, n) {
                    this.constructors[t] = e,
                        this.defaults[t] = On.clone(n)
                },
                getScaleConstructor: function (t) {
                    return this.constructors.hasOwnProperty(t) ? this.constructors[t] : void 0
                },
                getScaleDefaults: function (t) {
                    return this.defaults.hasOwnProperty(t) ? On.merge({}, [En.scale, this.defaults[t]]) : {}
                },
                updateScaleDefaults: function (t, e) {
                    var n = this;
                    n.defaults.hasOwnProperty(t) && (n.defaults[t] = On.extend(n.defaults[t], e))
                },
                addScalesToLayout: function (t) {
                    On.each(t.scales, function (e) {
                        e.fullWidth = e.options.fullWidth,
                            e.position = e.options.position,
                            e.weight = e.options.weight,
                            Pi.addBox(t, e)
                    })
                }
            }
            , Yi = On.valueOrDefault;
        En._set("global", {
            tooltips: {
                enabled: !0,
                custom: null,
                mode: "nearest",
                position: "average",
                intersect: !0,
                backgroundColor: "rgba(0,0,0,0.8)",
                titleFontStyle: "bold",
                titleSpacing: 2,
                titleMarginBottom: 6,
                titleFontColor: "#fff",
                titleAlign: "left",
                bodySpacing: 2,
                bodyFontColor: "#fff",
                bodyAlign: "left",
                footerFontStyle: "bold",
                footerSpacing: 2,
                footerMarginTop: 6,
                footerFontColor: "#fff",
                footerAlign: "left",
                yPadding: 6,
                xPadding: 6,
                caretPadding: 2,
                caretSize: 5,
                cornerRadius: 6,
                multiKeyBackground: "#fff",
                displayColors: !0,
                borderColor: "rgba(0,0,0,0)",
                borderWidth: 0,
                callbacks: {
                    beforeTitle: On.noop,
                    title: function (t, e) {
                        var n = ""
                            , i = e.labels
                            , o = i ? i.length : 0;
                        if (t.length > 0) {
                            var r = t[0];
                            r.label ? n = r.label : r.xLabel ? n = r.xLabel : o > 0 && r.index < o && (n = i[r.index])
                        }
                        return n
                    },
                    afterTitle: On.noop,
                    beforeBody: On.noop,
                    beforeLabel: On.noop,
                    label: function (t, e) {
                        var n = e.datasets[t.datasetIndex].label || "";
                        return n && (n += ": "),
                            On.isNullOrUndef(t.value) ? n += t.yLabel : n += t.value,
                            n
                    },
                    labelColor: function (t, e) {
                        var n = e.getDatasetMeta(t.datasetIndex)
                            , i = n.data[t.index]
                            , o = i._view;
                        return {
                            borderColor: o.borderColor,
                            backgroundColor: o.backgroundColor
                        }
                    },
                    labelTextColor: function () {
                        return this._options.bodyFontColor
                    },
                    afterLabel: On.noop,
                    afterBody: On.noop,
                    beforeFooter: On.noop,
                    footer: On.noop,
                    afterFooter: On.noop
                }
            }
        });
        var Xi = {
            average: function (t) {
                if (!t.length)
                    return !1;
                var e, n, i = 0, o = 0, r = 0;
                for (e = 0,
                    n = t.length; e < n; ++e) {
                    var a = t[e];
                    if (a && a.hasValue()) {
                        var s = a.tooltipPosition();
                        i += s.x,
                            o += s.y,
                            ++r
                    }
                }
                return {
                    x: i / r,
                    y: o / r
                }
            },
            nearest: function (t, e) {
                var n, i, o, r = e.x, a = e.y, s = Number.POSITIVE_INFINITY;
                for (n = 0,
                    i = t.length; n < i; ++n) {
                    var l = t[n];
                    if (l && l.hasValue()) {
                        var u = l.getCenterPoint()
                            , c = On.distanceBetweenPoints(e, u);
                        c < s && (s = c,
                            o = l)
                    }
                }
                if (o) {
                    var d = o.tooltipPosition();
                    r = d.x,
                        a = d.y
                }
                return {
                    x: r,
                    y: a
                }
            }
        }
            , Ki = Wn.extend({
                initialize: function () {
                    this._model = ee(this._options),
                        this._lastActive = []
                },
                getTitle: function () {
                    var t = this
                        , e = t._options
                        , n = e.callbacks
                        , i = n.beforeTitle.apply(t, arguments)
                        , o = n.title.apply(t, arguments)
                        , r = n.afterTitle.apply(t, arguments)
                        , a = [];
                    return a = Jt(a, Zt(i)),
                        a = Jt(a, Zt(o)),
                        a = Jt(a, Zt(r))
                },
                getBeforeBody: function () {
                    return ae(this._options.callbacks.beforeBody.apply(this, arguments))
                },
                getBody: function (t, e) {
                    var n = this
                        , i = n._options.callbacks
                        , o = [];
                    return On.each(t, function (t) {
                        var r = {
                            before: [],
                            lines: [],
                            after: []
                        };
                        Jt(r.before, Zt(i.beforeLabel.call(n, t, e))),
                            Jt(r.lines, i.label.call(n, t, e)),
                            Jt(r.after, Zt(i.afterLabel.call(n, t, e))),
                            o.push(r)
                    }),
                        o
                },
                getAfterBody: function () {
                    return ae(this._options.callbacks.afterBody.apply(this, arguments))
                },
                getFooter: function () {
                    var t = this
                        , e = t._options.callbacks
                        , n = e.beforeFooter.apply(t, arguments)
                        , i = e.footer.apply(t, arguments)
                        , o = e.afterFooter.apply(t, arguments)
                        , r = [];
                    return r = Jt(r, Zt(n)),
                        r = Jt(r, Zt(i)),
                        r = Jt(r, Zt(o))
                },
                update: function (t) {
                    var e, n, i = this, o = i._options, r = i._model, a = i._model = ee(o), s = i._active, l = i._data, u = {
                        xAlign: r.xAlign,
                        yAlign: r.yAlign
                    }, c = {
                        x: r.x,
                        y: r.y
                    }, d = {
                        width: r.width,
                        height: r.height
                    }, h = {
                        x: r.caretX,
                        y: r.caretY
                    };
                    if (s.length) {
                        a.opacity = 1;
                        var f = []
                            , p = [];
                        h = Xi[o.position].call(i, s, i._eventPosition);
                        var g = [];
                        for (e = 0,
                            n = s.length; e < n; ++e)
                            g.push(te(s[e]));
                        o.filter && (g = g.filter(function (t) {
                            return o.filter(t, l)
                        })),
                            o.itemSort && (g = g.sort(function (t, e) {
                                return o.itemSort(t, e, l)
                            })),
                            On.each(g, function (t) {
                                f.push(o.callbacks.labelColor.call(i, t, i._chart)),
                                    p.push(o.callbacks.labelTextColor.call(i, t, i._chart))
                            }),
                            a.title = i.getTitle(g, l),
                            a.beforeBody = i.getBeforeBody(g, l),
                            a.body = i.getBody(g, l),
                            a.afterBody = i.getAfterBody(g, l),
                            a.footer = i.getFooter(g, l),
                            a.x = h.x,
                            a.y = h.y,
                            a.caretPadding = o.caretPadding,
                            a.labelColors = f,
                            a.labelTextColors = p,
                            a.dataPoints = g,
                            d = ne(this, a),
                            u = ie(this, d),
                            c = oe(a, d, u, i._chart)
                    } else
                        a.opacity = 0;
                    return a.xAlign = u.xAlign,
                        a.yAlign = u.yAlign,
                        a.x = c.x,
                        a.y = c.y,
                        a.width = d.width,
                        a.height = d.height,
                        a.caretX = h.x,
                        a.caretY = h.y,
                        i._model = a,
                        t && o.custom && o.custom.call(i, a),
                        i
                },
                drawCaret: function (t, e) {
                    var n = this._chart.ctx
                        , i = this._view
                        , o = this.getCaretPosition(t, e, i);
                    n.lineTo(o.x1, o.y1),
                        n.lineTo(o.x2, o.y2),
                        n.lineTo(o.x3, o.y3)
                },
                getCaretPosition: function (t, e, n) {
                    var i, o, r, a, s, l, u = n.caretSize, c = n.cornerRadius, d = n.xAlign, h = n.yAlign, f = t.x, p = t.y, g = e.width, m = e.height;
                    if ("center" === h)
                        s = p + m / 2,
                            "left" === d ? (i = f,
                                o = i - u,
                                r = i,
                                a = s + u,
                                l = s - u) : (i = f + g,
                                    o = i + u,
                                    r = i,
                                    a = s - u,
                                    l = s + u);
                    else if ("left" === d ? (o = f + c + u,
                        i = o - u,
                        r = o + u) : "right" === d ? (o = f + g - c - u,
                            i = o - u,
                            r = o + u) : (o = n.caretX,
                                i = o - u,
                                r = o + u),
                        "top" === h)
                        a = p,
                            s = a - u,
                            l = a;
                    else {
                        a = p + m,
                            s = a + u,
                            l = a;
                        var v = r;
                        r = i,
                            i = v
                    }
                    return {
                        x1: i,
                        x2: o,
                        x3: r,
                        y1: a,
                        y2: s,
                        y3: l
                    }
                },
                drawTitle: function (t, e, n) {
                    var i = e.title;
                    if (i.length) {
                        t.x = re(e, e._titleAlign),
                            n.textAlign = e._titleAlign,
                            n.textBaseline = "top";
                        var o = e.titleFontSize
                            , r = e.titleSpacing;
                        n.fillStyle = e.titleFontColor,
                            n.font = On.fontString(o, e._titleFontStyle, e._titleFontFamily);
                        var a, s;
                        for (a = 0,
                            s = i.length; a < s; ++a)
                            n.fillText(i[a], t.x, t.y),
                                t.y += o + r,
                                a + 1 === i.length && (t.y += e.titleMarginBottom - r)
                    }
                },
                drawBody: function (t, e, n) {
                    var i, o = e.bodyFontSize, r = e.bodySpacing, a = e._bodyAlign, s = e.body, l = e.displayColors, u = e.labelColors, c = 0, d = l ? re(e, "left") : 0;
                    n.textAlign = a,
                        n.textBaseline = "top",
                        n.font = On.fontString(o, e._bodyFontStyle, e._bodyFontFamily),
                        t.x = re(e, a);
                    var h = function (e) {
                        n.fillText(e, t.x + c, t.y),
                            t.y += o + r
                    };
                    n.fillStyle = e.bodyFontColor,
                        On.each(e.beforeBody, h),
                        c = l && "right" !== a ? "center" === a ? o / 2 + 1 : o + 2 : 0,
                        On.each(s, function (r, a) {
                            i = e.labelTextColors[a],
                                n.fillStyle = i,
                                On.each(r.before, h),
                                On.each(r.lines, function (r) {
                                    l && (n.fillStyle = e.legendColorBackground,
                                        n.fillRect(d, t.y, o, o),
                                        n.lineWidth = 1,
                                        n.strokeStyle = u[a].borderColor,
                                        n.strokeRect(d, t.y, o, o),
                                        n.fillStyle = u[a].backgroundColor,
                                        n.fillRect(d + 1, t.y + 1, o - 2, o - 2),
                                        n.fillStyle = i),
                                        h(r)
                                }),
                                On.each(r.after, h)
                        }),
                        c = 0,
                        On.each(e.afterBody, h),
                        t.y -= r
                },
                drawFooter: function (t, e, n) {
                    var i = e.footer;
                    i.length && (t.x = re(e, e._footerAlign),
                        t.y += e.footerMarginTop,
                        n.textAlign = e._footerAlign,
                        n.textBaseline = "top",
                        n.fillStyle = e.footerFontColor,
                        n.font = On.fontString(e.footerFontSize, e._footerFontStyle, e._footerFontFamily),
                        On.each(i, function (i) {
                            n.fillText(i, t.x, t.y),
                                t.y += e.footerFontSize + e.footerSpacing
                        }))
                },
                drawBackground: function (t, e, n, i) {
                    n.fillStyle = e.backgroundColor,
                        n.strokeStyle = e.borderColor,
                        n.lineWidth = e.borderWidth;
                    var o = e.xAlign
                        , r = e.yAlign
                        , a = t.x
                        , s = t.y
                        , l = i.width
                        , u = i.height
                        , c = e.cornerRadius;
                    n.beginPath(),
                        n.moveTo(a + c, s),
                        "top" === r && this.drawCaret(t, i),
                        n.lineTo(a + l - c, s),
                        n.quadraticCurveTo(a + l, s, a + l, s + c),
                        "center" === r && "right" === o && this.drawCaret(t, i),
                        n.lineTo(a + l, s + u - c),
                        n.quadraticCurveTo(a + l, s + u, a + l - c, s + u),
                        "bottom" === r && this.drawCaret(t, i),
                        n.lineTo(a + c, s + u),
                        n.quadraticCurveTo(a, s + u, a, s + u - c),
                        "center" === r && "left" === o && this.drawCaret(t, i),
                        n.lineTo(a, s + c),
                        n.quadraticCurveTo(a, s, a + c, s),
                        n.closePath(),
                        n.fill(),
                        e.borderWidth > 0 && n.stroke()
                },
                draw: function () {
                    var t = this._chart.ctx
                        , e = this._view;
                    if (0 !== e.opacity) {
                        var n = {
                            width: e.width,
                            height: e.height
                        }
                            , i = {
                                x: e.x,
                                y: e.y
                            }
                            , o = Math.abs(e.opacity < .001) ? 0 : e.opacity
                            , r = e.title.length || e.beforeBody.length || e.body.length || e.afterBody.length || e.footer.length;
                        this._options.enabled && r && (t.save(),
                            t.globalAlpha = o,
                            this.drawBackground(i, e, t, n),
                            i.y += e.yPadding,
                            this.drawTitle(i, e, t),
                            this.drawBody(i, e, t),
                            this.drawFooter(i, e, t),
                            t.restore())
                    }
                },
                handleEvent: function (t) {
                    var e = this
                        , n = e._options
                        , i = !1;
                    return e._lastActive = e._lastActive || [],
                        "mouseout" === t.type ? e._active = [] : e._active = e._chart.getElementsAtEventForMode(t, n.mode, n),
                        i = !On.arrayEquals(e._active, e._lastActive),
                        i && (e._lastActive = e._active,
                            (n.enabled || n.custom) && (e._eventPosition = {
                                x: t.x,
                                y: t.y
                            },
                                e.update(!0),
                                e.pivot())),
                        i
                }
            })
            , Qi = Xi
            , Gi = Ki;
        Gi.positioners = Qi;
        var Ji = On.valueOrDefault;
        En._set("global", {
            elements: {},
            events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
            hover: {
                onHover: null,
                mode: "nearest",
                intersect: !0,
                animationDuration: 400
            },
            onClick: null,
            maintainAspectRatio: !0,
            responsive: !0,
            responsiveAnimationDuration: 0
        });
        var Zi = function (t, e) {
            return this.construct(t, e),
                this
        };
        On.extend(Zi.prototype, {
            construct: function (t, e) {
                var n = this;
                e = ue(e);
                var i = qi.acquireContext(t, e)
                    , o = i && i.canvas
                    , r = o && o.height
                    , a = o && o.width;
                n.id = On.uid(),
                    n.ctx = i,
                    n.canvas = o,
                    n.config = e,
                    n.width = a,
                    n.height = r,
                    n.aspectRatio = r ? a / r : null,
                    n.options = e.options,
                    n._bufferedRender = !1,
                    n.chart = n,
                    n.controller = n,
                    Zi.instances[n.id] = n,
                    Object.defineProperty(n, "data", {
                        get: function () {
                            return n.config.data
                        },
                        set: function (t) {
                            n.config.data = t
                        }
                    }),
                    i && o && (n.initialize(),
                        n.update())
            },
            initialize: function () {
                var t = this;
                return Vi.notify(t, "beforeInit"),
                    On.retinaScale(t, t.options.devicePixelRatio),
                    t.bindEvents(),
                    t.options.responsive && t.resize(!0),
                    t.ensureScalesHaveIDs(),
                    t.buildOrUpdateScales(),
                    t.initToolTip(),
                    Vi.notify(t, "afterInit"),
                    t
            },
            clear: function () {
                return On.canvas.clear(this),
                    this
            },
            stop: function () {
                return Bn.cancelAnimation(this),
                    this
            },
            resize: function (t) {
                var e = this
                    , n = e.options
                    , i = e.canvas
                    , o = n.maintainAspectRatio && e.aspectRatio || null
                    , r = Math.max(0, Math.floor(On.getMaximumWidth(i)))
                    , a = Math.max(0, Math.floor(o ? r / o : On.getMaximumHeight(i)));
                if ((e.width !== r || e.height !== a) && (i.width = e.width = r,
                    i.height = e.height = a,
                    i.style.width = r + "px",
                    i.style.height = a + "px",
                    On.retinaScale(e, n.devicePixelRatio),
                    !t)) {
                    var s = {
                        width: r,
                        height: a
                    };
                    Vi.notify(e, "resize", [s]),
                        n.onResize && n.onResize(e, s),
                        e.stop(),
                        e.update({
                            duration: n.responsiveAnimationDuration
                        })
                }
            },
            ensureScalesHaveIDs: function () {
                var t = this.options
                    , e = t.scales || {}
                    , n = t.scale;
                On.each(e.xAxes, function (t, e) {
                    t.id = t.id || "x-axis-" + e
                }),
                    On.each(e.yAxes, function (t, e) {
                        t.id = t.id || "y-axis-" + e
                    }),
                    n && (n.id = n.id || "scale")
            },
            buildOrUpdateScales: function () {
                var t = this
                    , e = t.options
                    , n = t.scales || {}
                    , i = []
                    , o = Object.keys(n).reduce(function (t, e) {
                        return t[e] = !1,
                            t
                    }, {});
                e.scales && (i = i.concat((e.scales.xAxes || []).map(function (t) {
                    return {
                        options: t,
                        dtype: "category",
                        dposition: "bottom"
                    }
                }), (e.scales.yAxes || []).map(function (t) {
                    return {
                        options: t,
                        dtype: "linear",
                        dposition: "left"
                    }
                }))),
                    e.scale && i.push({
                        options: e.scale,
                        dtype: "radialLinear",
                        isDefault: !0,
                        dposition: "chartArea"
                    }),
                    On.each(i, function (e) {
                        var i = e.options
                            , r = i.id
                            , a = Ji(i.type, e.dtype);
                        de(i.position) !== de(e.dposition) && (i.position = e.dposition),
                            o[r] = !0;
                        var s = null;
                        if (r in n && n[r].type === a)
                            s = n[r],
                                s.options = i,
                                s.ctx = t.ctx,
                                s.chart = t;
                        else {
                            var l = Ui.getScaleConstructor(a);
                            if (!l)
                                return;
                            s = new l({
                                id: r,
                                type: a,
                                options: i,
                                ctx: t.ctx,
                                chart: t
                            }),
                                n[s.id] = s
                        }
                        s.mergeTicksOptions(),
                            e.isDefault && (t.scale = s)
                    }),
                    On.each(o, function (t, e) {
                        t || delete n[e]
                    }),
                    t.scales = n,
                    Ui.addScalesToLayout(this)
            },
            buildOrUpdateControllers: function () {
                var t = this
                    , e = [];
                return On.each(t.data.datasets, function (n, i) {
                    var o = t.getDatasetMeta(i)
                        , r = n.type || t.config.type;
                    if (o.type && o.type !== r && (t.destroyDatasetMeta(i),
                        o = t.getDatasetMeta(i)),
                        o.type = r,
                        o.controller)
                        o.controller.updateIndex(i),
                            o.controller.linkScales();
                    else {
                        var a = _i[o.type];
                        if (void 0 === a)
                            throw new Error('"' + o.type + '" is not a chart type.');
                        o.controller = new a(t, i),
                            e.push(o.controller)
                    }
                }, t),
                    e
            },
            resetElements: function () {
                var t = this;
                On.each(t.data.datasets, function (e, n) {
                    t.getDatasetMeta(n).controller.reset()
                }, t)
            },
            reset: function () {
                this.resetElements(),
                    this.tooltip.initialize()
            },
            update: function (t) {
                var e = this;
                if (t && "object" == typeof t || (t = {
                    duration: t,
                    lazy: arguments[1]
                }),
                    ce(e),
                    Vi._invalidate(e),
                    !1 !== Vi.notify(e, "beforeUpdate")) {
                    e.tooltip._data = e.data;
                    var n = e.buildOrUpdateControllers();
                    On.each(e.data.datasets, function (t, n) {
                        e.getDatasetMeta(n).controller.buildOrUpdateElements()
                    }, e),
                        e.updateLayout(),
                        e.options.animation && e.options.animation.duration && On.each(n, function (t) {
                            t.reset()
                        }),
                        e.updateDatasets(),
                        e.tooltip.initialize(),
                        e.lastActive = [],
                        Vi.notify(e, "afterUpdate"),
                        e._bufferedRender ? e._bufferedRequest = {
                            duration: t.duration,
                            easing: t.easing,
                            lazy: t.lazy
                        } : e.render(t)
                }
            },
            updateLayout: function () {
                var t = this;
                !1 !== Vi.notify(t, "beforeLayout") && (Pi.update(this, this.width, this.height),
                    Vi.notify(t, "afterScaleUpdate"),
                    Vi.notify(t, "afterLayout"))
            },
            updateDatasets: function () {
                var t = this;
                if (!1 !== Vi.notify(t, "beforeDatasetsUpdate")) {
                    for (var e = 0, n = t.data.datasets.length; e < n; ++e)
                        t.updateDataset(e);
                    Vi.notify(t, "afterDatasetsUpdate")
                }
            },
            updateDataset: function (t) {
                var e = this
                    , n = e.getDatasetMeta(t)
                    , i = {
                        meta: n,
                        index: t
                    };
                !1 !== Vi.notify(e, "beforeDatasetUpdate", [i]) && (n.controller.update(),
                    Vi.notify(e, "afterDatasetUpdate", [i]))
            },
            render: function (t) {
                var e = this;
                t && "object" == typeof t || (t = {
                    duration: t,
                    lazy: arguments[1]
                });
                var n = e.options.animation
                    , i = Ji(t.duration, n && n.duration)
                    , o = t.lazy;
                if (!1 !== Vi.notify(e, "beforeRender")) {
                    var r = function (t) {
                        Vi.notify(e, "afterRender"),
                            On.callback(n && n.onComplete, [t], e)
                    };
                    if (n && i) {
                        var a = new zn({
                            numSteps: i / 16.66,
                            easing: t.easing || n.easing,
                            render: function (t, e) {
                                var n = On.easing.effects[e.easing]
                                    , i = e.currentStep
                                    , o = i / e.numSteps;
                                t.draw(n(o), o, i)
                            },
                            onAnimationProgress: n.onProgress,
                            onAnimationComplete: r
                        });
                        Bn.addAnimation(e, a, i, o)
                    } else
                        e.draw(),
                            r(new zn({
                                numSteps: 0,
                                chart: e
                            }));
                    return e
                }
            },
            draw: function (t) {
                var e = this;
                e.clear(),
                    On.isNullOrUndef(t) && (t = 1),
                    e.transition(t),
                    e.width <= 0 || e.height <= 0 || !1 !== Vi.notify(e, "beforeDraw", [t]) && (On.each(e.boxes, function (t) {
                        t.draw(e.chartArea)
                    }, e),
                        e.drawDatasets(t),
                        e._drawTooltip(t),
                        Vi.notify(e, "afterDraw", [t]))
            },
            transition: function (t) {
                for (var e = this, n = 0, i = (e.data.datasets || []).length; n < i; ++n)
                    e.isDatasetVisible(n) && e.getDatasetMeta(n).controller.transition(t);
                e.tooltip.transition(t)
            },
            drawDatasets: function (t) {
                var e = this;
                if (!1 !== Vi.notify(e, "beforeDatasetsDraw", [t])) {
                    for (var n = (e.data.datasets || []).length - 1; n >= 0; --n)
                        e.isDatasetVisible(n) && e.drawDataset(n, t);
                    Vi.notify(e, "afterDatasetsDraw", [t])
                }
            },
            drawDataset: function (t, e) {
                var n = this
                    , i = n.getDatasetMeta(t)
                    , o = {
                        meta: i,
                        index: t,
                        easingValue: e
                    };
                !1 !== Vi.notify(n, "beforeDatasetDraw", [o]) && (i.controller.draw(e),
                    Vi.notify(n, "afterDatasetDraw", [o]))
            },
            _drawTooltip: function (t) {
                var e = this
                    , n = e.tooltip
                    , i = {
                        tooltip: n,
                        easingValue: t
                    };
                !1 !== Vi.notify(e, "beforeTooltipDraw", [i]) && (n.draw(),
                    Vi.notify(e, "afterTooltipDraw", [i]))
            },
            getElementAtEvent: function (t) {
                return Di.modes.single(this, t)
            },
            getElementsAtEvent: function (t) {
                return Di.modes.label(this, t, {
                    intersect: !0
                })
            },
            getElementsAtXAxis: function (t) {
                return Di.modes["x-axis"](this, t, {
                    intersect: !0
                })
            },
            getElementsAtEventForMode: function (t, e, n) {
                var i = Di.modes[e];
                return "function" == typeof i ? i(this, t, n) : []
            },
            getDatasetAtEvent: function (t) {
                return Di.modes.dataset(this, t, {
                    intersect: !0
                })
            },
            getDatasetMeta: function (t) {
                var e = this
                    , n = e.data.datasets[t];
                n._meta || (n._meta = {});
                var i = n._meta[e.id];
                return i || (i = n._meta[e.id] = {
                    type: null,
                    data: [],
                    dataset: null,
                    controller: null,
                    hidden: null,
                    xAxisID: null,
                    yAxisID: null
                }),
                    i
            },
            getVisibleDatasetCount: function () {
                for (var t = 0, e = 0, n = this.data.datasets.length; e < n; ++e)
                    this.isDatasetVisible(e) && t++;
                return t
            },
            isDatasetVisible: function (t) {
                var e = this.getDatasetMeta(t);
                return "boolean" == typeof e.hidden ? !e.hidden : !this.data.datasets[t].hidden
            },
            generateLegend: function () {
                return this.options.legendCallback(this)
            },
            destroyDatasetMeta: function (t) {
                var e = this.id
                    , n = this.data.datasets[t]
                    , i = n._meta && n._meta[e];
                i && (i.controller.destroy(),
                    delete n._meta[e])
            },
            destroy: function () {
                var t, e, n = this, i = n.canvas;
                for (n.stop(),
                    t = 0,
                    e = n.data.datasets.length; t < e; ++t)
                    n.destroyDatasetMeta(t);
                i && (n.unbindEvents(),
                    On.canvas.clear(n),
                    qi.releaseContext(n.ctx),
                    n.canvas = null,
                    n.ctx = null),
                    Vi.notify(n, "destroy"),
                    delete Zi.instances[n.id]
            },
            toBase64Image: function () {
                return this.canvas.toDataURL.apply(this.canvas, arguments)
            },
            initToolTip: function () {
                var t = this;
                t.tooltip = new Gi({
                    _chart: t,
                    _chartInstance: t,
                    _data: t.data,
                    _options: t.options.tooltips
                }, t)
            },
            bindEvents: function () {
                var t = this
                    , e = t._listeners = {}
                    , n = function () {
                        t.eventHandler.apply(t, arguments)
                    };
                On.each(t.options.events, function (i) {
                    qi.addEventListener(t, i, n),
                        e[i] = n
                }),
                    t.options.responsive && (n = function () {
                        t.resize()
                    }
                        ,
                        qi.addEventListener(t, "resize", n),
                        e.resize = n)
            },
            unbindEvents: function () {
                var t = this
                    , e = t._listeners;
                e && (delete t._listeners,
                    On.each(e, function (e, n) {
                        qi.removeEventListener(t, n, e)
                    }))
            },
            updateHoverStyle: function (t, e, n) {
                var i, o, r, a = n ? "setHoverStyle" : "removeHoverStyle";
                for (o = 0,
                    r = t.length; o < r; ++o)
                    (i = t[o]) && this.getDatasetMeta(i._datasetIndex).controller[a](i)
            },
            eventHandler: function (t) {
                var e = this
                    , n = e.tooltip;
                if (!1 !== Vi.notify(e, "beforeEvent", [t])) {
                    e._bufferedRender = !0,
                        e._bufferedRequest = null;
                    var i = e.handleEvent(t);
                    n && (i = n._start ? n.handleEvent(t) : i | n.handleEvent(t)),
                        Vi.notify(e, "afterEvent", [t]);
                    var o = e._bufferedRequest;
                    return o ? e.render(o) : i && !e.animating && (e.stop(),
                        e.render({
                            duration: e.options.hover.animationDuration,
                            lazy: !0
                        })),
                        e._bufferedRender = !1,
                        e._bufferedRequest = null,
                        e
                }
            },
            handleEvent: function (t) {
                var e = this
                    , n = e.options || {}
                    , i = n.hover
                    , o = !1;
                return e.lastActive = e.lastActive || [],
                    "mouseout" === t.type ? e.active = [] : e.active = e.getElementsAtEventForMode(t, i.mode, i),
                    On.callback(n.onHover || n.hover.onHover, [t.native, e.active], e),
                    "mouseup" !== t.type && "click" !== t.type || n.onClick && n.onClick.call(e, t.native, e.active),
                    e.lastActive.length && e.updateHoverStyle(e.lastActive, i.mode, !1),
                    e.active.length && i.mode && e.updateHoverStyle(e.active, i.mode, !0),
                    o = !On.arrayEquals(e.active, e.lastActive),
                    e.lastActive = e.active,
                    o
            }
        }),
            Zi.instances = {};
        var to = Zi;
        Zi.Controller = Zi,
            Zi.types = {},
            On.configMerge = le,
            On.scaleMerge = se;
        On.extend(fe.prototype, {
            formats: he,
            parse: he,
            format: he,
            add: he,
            diff: he,
            startOf: he,
            endOf: he,
            _create: function (t) {
                return t
            }
        }),
            fe.override = function (t) {
                On.extend(fe.prototype, t)
            }
            ;
        var eo = fe
            , no = {
                _date: eo
            }
            , io = {
                formatters: {
                    values: function (t) {
                        return On.isArray(t) ? t : "" + t
                    },
                    linear: function (t, e, n) {
                        var i = n.length > 3 ? n[2] - n[1] : n[1] - n[0];
                        Math.abs(i) > 1 && t !== Math.floor(t) && (i = t - Math.floor(t));
                        var o = On.log10(Math.abs(i))
                            , r = "";
                        if (0 !== t) {
                            if (Math.max(Math.abs(n[0]), Math.abs(n[n.length - 1])) < 1e-4) {
                                var a = On.log10(Math.abs(t));
                                r = t.toExponential(Math.floor(a) - Math.floor(o))
                            } else {
                                var s = -1 * Math.floor(o);
                                s = Math.max(Math.min(s, 20), 0),
                                    r = t.toFixed(s)
                            }
                        } else
                            r = "0";
                        return r
                    },
                    logarithmic: function (t, e, n) {
                        var i = t / Math.pow(10, Math.floor(On.log10(t)));
                        return 0 === t ? "0" : 1 === i || 2 === i || 5 === i || 0 === e || e === n.length - 1 ? t.toExponential() : ""
                    }
                }
            }
            , oo = On.valueOrDefault
            , ro = On.valueAtIndexOrDefault;
        En._set("scale", {
            display: !0,
            position: "left",
            offset: !1,
            gridLines: {
                display: !0,
                color: "rgba(0, 0, 0, 0.1)",
                lineWidth: 1,
                drawBorder: !0,
                drawOnChartArea: !0,
                drawTicks: !0,
                tickMarkLength: 10,
                zeroLineWidth: 1,
                zeroLineColor: "rgba(0,0,0,0.25)",
                zeroLineBorderDash: [],
                zeroLineBorderDashOffset: 0,
                offsetGridLines: !1,
                borderDash: [],
                borderDashOffset: 0
            },
            scaleLabel: {
                display: !1,
                labelString: "",
                padding: {
                    top: 4,
                    bottom: 4
                }
            },
            ticks: {
                beginAtZero: !1,
                minRotation: 0,
                maxRotation: 50,
                mirror: !1,
                padding: 0,
                reverse: !1,
                display: !0,
                autoSkip: !0,
                autoSkipPadding: 0,
                labelOffset: 0,
                callback: io.formatters.values,
                minor: {},
                major: {}
            }
        });
        var ao = Wn.extend({
            getPadding: function () {
                var t = this;
                return {
                    left: t.paddingLeft || 0,
                    top: t.paddingTop || 0,
                    right: t.paddingRight || 0,
                    bottom: t.paddingBottom || 0
                }
            },
            getTicks: function () {
                return this._ticks
            },
            mergeTicksOptions: function () {
                var t = this.options.ticks;
                !1 === t.minor && (t.minor = {
                    display: !1
                }),
                    !1 === t.major && (t.major = {
                        display: !1
                    });
                for (var e in t)
                    "major" !== e && "minor" !== e && (void 0 === t.minor[e] && (t.minor[e] = t[e]),
                        void 0 === t.major[e] && (t.major[e] = t[e]))
            },
            beforeUpdate: function () {
                On.callback(this.options.beforeUpdate, [this])
            },
            update: function (t, e, n) {
                var i, o, r, a, s, l, u = this;
                for (u.beforeUpdate(),
                    u.maxWidth = t,
                    u.maxHeight = e,
                    u.margins = On.extend({
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    }, n),
                    u._maxLabelLines = 0,
                    u.longestLabelWidth = 0,
                    u.longestTextCache = u.longestTextCache || {},
                    u.beforeSetDimensions(),
                    u.setDimensions(),
                    u.afterSetDimensions(),
                    u.beforeDataLimits(),
                    u.determineDataLimits(),
                    u.afterDataLimits(),
                    u.beforeBuildTicks(),
                    s = u.buildTicks() || [],
                    s = u.afterBuildTicks(s) || s,
                    u.beforeTickToLabelConversion(),
                    r = u.convertTicksToLabels(s) || u.ticks,
                    u.afterTickToLabelConversion(),
                    u.ticks = r,
                    i = 0,
                    o = r.length; i < o; ++i)
                    a = r[i],
                        l = s[i],
                        l ? l.label = a : s.push(l = {
                            label: a,
                            major: !1
                        });
                return u._ticks = s,
                    u.beforeCalculateTickRotation(),
                    u.calculateTickRotation(),
                    u.afterCalculateTickRotation(),
                    u.beforeFit(),
                    u.fit(),
                    u.afterFit(),
                    u.afterUpdate(),
                    u.minSize
            },
            afterUpdate: function () {
                On.callback(this.options.afterUpdate, [this])
            },
            beforeSetDimensions: function () {
                On.callback(this.options.beforeSetDimensions, [this])
            },
            setDimensions: function () {
                var t = this;
                t.isHorizontal() ? (t.width = t.maxWidth,
                    t.left = 0,
                    t.right = t.width) : (t.height = t.maxHeight,
                        t.top = 0,
                        t.bottom = t.height),
                    t.paddingLeft = 0,
                    t.paddingTop = 0,
                    t.paddingRight = 0,
                    t.paddingBottom = 0
            },
            afterSetDimensions: function () {
                On.callback(this.options.afterSetDimensions, [this])
            },
            beforeDataLimits: function () {
                On.callback(this.options.beforeDataLimits, [this])
            },
            determineDataLimits: On.noop,
            afterDataLimits: function () {
                On.callback(this.options.afterDataLimits, [this])
            },
            beforeBuildTicks: function () {
                On.callback(this.options.beforeBuildTicks, [this])
            },
            buildTicks: On.noop,
            afterBuildTicks: function (t) {
                var e = this;
                return On.isArray(t) && t.length ? On.callback(e.options.afterBuildTicks, [e, t]) : (e.ticks = On.callback(e.options.afterBuildTicks, [e, e.ticks]) || e.ticks,
                    t)
            },
            beforeTickToLabelConversion: function () {
                On.callback(this.options.beforeTickToLabelConversion, [this])
            },
            convertTicksToLabels: function () {
                var t = this
                    , e = t.options.ticks;
                t.ticks = t.ticks.map(e.userCallback || e.callback, this)
            },
            afterTickToLabelConversion: function () {
                On.callback(this.options.afterTickToLabelConversion, [this])
            },
            beforeCalculateTickRotation: function () {
                On.callback(this.options.beforeCalculateTickRotation, [this])
            },
            calculateTickRotation: function () {
                var t = this
                    , e = t.ctx
                    , n = t.options.ticks
                    , i = pe(t._ticks)
                    , o = On.options._parseFont(n);
                e.font = o.string;
                var r = n.minRotation || 0;
                if (i.length && t.options.display && t.isHorizontal())
                    for (var a, s = On.longestText(e, o.string, i, t.longestTextCache), l = s, u = t.getPixelForTick(1) - t.getPixelForTick(0) - 6; l > u && r < n.maxRotation;) {
                        var c = On.toRadians(r);
                        if (a = Math.cos(c),
                            Math.sin(c) * s > t.maxHeight) {
                            r--;
                            break
                        }
                        r++,
                            l = a * s
                    }
                t.labelRotation = r
            },
            afterCalculateTickRotation: function () {
                On.callback(this.options.afterCalculateTickRotation, [this])
            },
            beforeFit: function () {
                On.callback(this.options.beforeFit, [this])
            },
            fit: function () {
                var t = this
                    , e = t.minSize = {
                        width: 0,
                        height: 0
                    }
                    , n = pe(t._ticks)
                    , i = t.options
                    , o = i.ticks
                    , r = i.scaleLabel
                    , a = i.gridLines
                    , s = t._isVisible()
                    , l = i.position
                    , u = t.isHorizontal()
                    , c = On.options._parseFont
                    , d = c(o)
                    , h = i.gridLines.tickMarkLength;
                if (e.width = u ? t.isFullWidth() ? t.maxWidth - t.margins.left - t.margins.right : t.maxWidth : s && a.drawTicks ? h : 0,
                    e.height = u ? s && a.drawTicks ? h : 0 : t.maxHeight,
                    r.display && s) {
                    var f = c(r)
                        , p = On.options.toPadding(r.padding)
                        , g = f.lineHeight + p.height;
                    u ? e.height += g : e.width += g
                }
                if (o.display && s) {
                    var m = On.longestText(t.ctx, d.string, n, t.longestTextCache)
                        , v = On.numberOfLabelLines(n)
                        , y = .5 * d.size
                        , b = t.options.ticks.padding;
                    if (t._maxLabelLines = v,
                        t.longestLabelWidth = m,
                        u) {
                        var x = On.toRadians(t.labelRotation)
                            , w = Math.cos(x)
                            , k = Math.sin(x)
                            , C = k * m + d.lineHeight * v + y;
                        e.height = Math.min(t.maxHeight, e.height + C + b),
                            t.ctx.font = d.string;
                        var T, S, M = me(t.ctx, n[0], d.string), A = me(t.ctx, n[n.length - 1], d.string), _ = t.getPixelForTick(0) - t.left, D = t.right - t.getPixelForTick(n.length - 1);
                        0 !== t.labelRotation ? (T = "bottom" === l ? w * M : w * y,
                            S = "bottom" === l ? w * y : w * A) : (T = M / 2,
                                S = A / 2),
                            t.paddingLeft = Math.max(T - _, 0) + 3,
                            t.paddingRight = Math.max(S - D, 0) + 3
                    } else
                        o.mirror ? m = 0 : m += b + y,
                            e.width = Math.min(t.maxWidth, e.width + m),
                            t.paddingTop = d.size / 2,
                            t.paddingBottom = d.size / 2
                }
                t.handleMargins(),
                    t.width = e.width,
                    t.height = e.height
            },
            handleMargins: function () {
                var t = this;
                t.margins && (t.paddingLeft = Math.max(t.paddingLeft - t.margins.left, 0),
                    t.paddingTop = Math.max(t.paddingTop - t.margins.top, 0),
                    t.paddingRight = Math.max(t.paddingRight - t.margins.right, 0),
                    t.paddingBottom = Math.max(t.paddingBottom - t.margins.bottom, 0))
            },
            afterFit: function () {
                On.callback(this.options.afterFit, [this])
            },
            isHorizontal: function () {
                return "top" === this.options.position || "bottom" === this.options.position
            },
            isFullWidth: function () {
                return this.options.fullWidth
            },
            getRightValue: function (t) {
                if (On.isNullOrUndef(t))
                    return NaN;
                if (("number" == typeof t || t instanceof Number) && !isFinite(t))
                    return NaN;
                if (t)
                    if (this.isHorizontal()) {
                        if (void 0 !== t.x)
                            return this.getRightValue(t.x)
                    } else if (void 0 !== t.y)
                        return this.getRightValue(t.y);
                return t
            },
            getLabelForIndex: On.noop,
            getPixelForValue: On.noop,
            getValueForPixel: On.noop,
            getPixelForTick: function (t) {
                var e = this
                    , n = e.options.offset;
                if (e.isHorizontal()) {
                    var i = e.width - (e.paddingLeft + e.paddingRight)
                        , o = i / Math.max(e._ticks.length - (n ? 0 : 1), 1)
                        , r = o * t + e.paddingLeft;
                    n && (r += o / 2);
                    var a = e.left + r;
                    return a += e.isFullWidth() ? e.margins.left : 0
                }
                var s = e.height - (e.paddingTop + e.paddingBottom);
                return e.top + t * (s / (e._ticks.length - 1))
            },
            getPixelForDecimal: function (t) {
                var e = this;
                if (e.isHorizontal()) {
                    var n = e.width - (e.paddingLeft + e.paddingRight)
                        , i = n * t + e.paddingLeft
                        , o = e.left + i;
                    return o += e.isFullWidth() ? e.margins.left : 0
                }
                return e.top + t * e.height
            },
            getBasePixel: function () {
                return this.getPixelForValue(this.getBaseValue())
            },
            getBaseValue: function () {
                var t = this
                    , e = t.min
                    , n = t.max;
                return t.beginAtZero ? 0 : e < 0 && n < 0 ? n : e > 0 && n > 0 ? e : 0
            },
            _autoSkip: function (t) {
                var e, n, i = this, o = i.isHorizontal(), r = i.options.ticks.minor, a = t.length, s = !1, l = r.maxTicksLimit, u = i._tickSize() * (a - 1), c = o ? i.width - (i.paddingLeft + i.paddingRight) : i.height - (i.paddingTop + i.PaddingBottom), d = [];
                for (u > c && (s = 1 + Math.floor(u / c)),
                    a > l && (s = Math.max(s, 1 + Math.floor(a / l))),
                    e = 0; e < a; e++)
                    n = t[e],
                        s > 1 && e % s > 0 && delete n.label,
                        d.push(n);
                return d
            },
            _tickSize: function () {
                var t = this
                    , e = t.isHorizontal()
                    , n = t.options.ticks.minor
                    , i = On.toRadians(t.labelRotation)
                    , o = Math.abs(Math.cos(i))
                    , r = Math.abs(Math.sin(i))
                    , a = n.autoSkipPadding || 0
                    , s = t.longestLabelWidth + a || 0
                    , l = On.options._parseFont(n)
                    , u = t._maxLabelLines * l.lineHeight + a || 0;
                return e ? u * o > s * r ? s / o : u / r : u * r < s * o ? u / o : s / r
            },
            _isVisible: function () {
                var t, e, n, i = this, o = i.chart, r = i.options.display;
                if ("auto" !== r)
                    return !!r;
                for (t = 0,
                    e = o.data.datasets.length; t < e; ++t)
                    if (o.isDatasetVisible(t) && (n = o.getDatasetMeta(t),
                        n.xAxisID === i.id || n.yAxisID === i.id))
                        return !0;
                return !1
            },
            draw: function (t) {
                var e = this
                    , n = e.options;
                if (e._isVisible()) {
                    var i, o, r, a = e.chart, s = e.ctx, l = En.global, u = l.defaultFontColor, c = n.ticks.minor, d = n.ticks.major || c, h = n.gridLines, f = n.scaleLabel, p = n.position, g = 0 !== e.labelRotation, m = c.mirror, v = e.isHorizontal(), y = On.options._parseFont, b = c.display && c.autoSkip ? e._autoSkip(e.getTicks()) : e.getTicks(), x = oo(c.fontColor, u), w = y(c), k = w.lineHeight, C = oo(d.fontColor, u), T = y(d), S = c.padding, M = c.labelOffset, A = h.drawTicks ? h.tickMarkLength : 0, _ = oo(f.fontColor, u), D = y(f), P = On.options.toPadding(f.padding), I = On.toRadians(e.labelRotation), E = [], N = h.drawBorder ? ro(h.lineWidth, 0, 0) : 0, L = On._alignPixel;
                    "top" === p ? (i = L(a, e.bottom, N),
                        o = e.bottom - A,
                        r = i - N / 2) : "bottom" === p ? (i = L(a, e.top, N),
                            o = i + N / 2,
                            r = e.top + A) : "left" === p ? (i = L(a, e.right, N),
                                o = e.right - A,
                                r = i - N / 2) : (i = L(a, e.left, N),
                                    o = i + N / 2,
                                    r = e.left + A);
                    if (On.each(b, function (i, s) {
                        if (!On.isNullOrUndef(i.label)) {
                            var l, u, c, d, f = i.label;
                            s === e.zeroLineIndex && n.offset === h.offsetGridLines ? (l = h.zeroLineWidth,
                                u = h.zeroLineColor,
                                c = h.zeroLineBorderDash || [],
                                d = h.zeroLineBorderDashOffset || 0) : (l = ro(h.lineWidth, s),
                                    u = ro(h.color, s),
                                    c = h.borderDash || [],
                                    d = h.borderDashOffset || 0);
                            var y, b, x, w, C, T, _, D, P, O, R, F, $ = On.isArray(f) ? f.length : 1, j = ge(e, s, h.offsetGridLines);
                            if (v) {
                                var W = A + S;
                                j < e.left - 1e-7 && (u = "rgba(0,0,0,0)"),
                                    y = x = C = _ = L(a, j, l),
                                    b = o,
                                    w = r,
                                    P = e.getPixelForTick(s) + M,
                                    "top" === p ? (T = L(a, t.top, N) + N / 2,
                                        D = t.bottom,
                                        R = ((g ? 1 : .5) - $) * k,
                                        F = g ? "left" : "center",
                                        O = e.bottom - W) : (T = t.top,
                                            D = L(a, t.bottom, N) - N / 2,
                                            R = (g ? 0 : .5) * k,
                                            F = g ? "right" : "center",
                                            O = e.top + W)
                            } else {
                                var H = (m ? 0 : A) + S;
                                j < e.top - 1e-7 && (u = "rgba(0,0,0,0)"),
                                    y = o,
                                    x = r,
                                    b = w = T = D = L(a, j, l),
                                    O = e.getPixelForTick(s) + M,
                                    R = (1 - $) * k / 2,
                                    "left" === p ? (C = L(a, t.left, N) + N / 2,
                                        _ = t.right,
                                        F = m ? "left" : "right",
                                        P = e.right - H) : (C = t.left,
                                            _ = L(a, t.right, N) - N / 2,
                                            F = m ? "right" : "left",
                                            P = e.left + H)
                            }
                            E.push({
                                tx1: y,
                                ty1: b,
                                tx2: x,
                                ty2: w,
                                x1: C,
                                y1: T,
                                x2: _,
                                y2: D,
                                labelX: P,
                                labelY: O,
                                glWidth: l,
                                glColor: u,
                                glBorderDash: c,
                                glBorderDashOffset: d,
                                rotation: -1 * I,
                                label: f,
                                major: i.major,
                                textOffset: R,
                                textAlign: F
                            })
                        }
                    }),
                        On.each(E, function (t) {
                            var e = t.glWidth
                                , n = t.glColor;
                            if (h.display && e && n && (s.save(),
                                s.lineWidth = e,
                                s.strokeStyle = n,
                                s.setLineDash && (s.setLineDash(t.glBorderDash),
                                    s.lineDashOffset = t.glBorderDashOffset),
                                s.beginPath(),
                                h.drawTicks && (s.moveTo(t.tx1, t.ty1),
                                    s.lineTo(t.tx2, t.ty2)),
                                h.drawOnChartArea && (s.moveTo(t.x1, t.y1),
                                    s.lineTo(t.x2, t.y2)),
                                s.stroke(),
                                s.restore()),
                                c.display) {
                                s.save(),
                                    s.translate(t.labelX, t.labelY),
                                    s.rotate(t.rotation),
                                    s.font = t.major ? T.string : w.string,
                                    s.fillStyle = t.major ? C : x,
                                    s.textBaseline = "middle",
                                    s.textAlign = t.textAlign;
                                var i = t.label
                                    , o = t.textOffset;
                                if (On.isArray(i))
                                    for (var r = 0; r < i.length; ++r)
                                        s.fillText("" + i[r], 0, o),
                                            o += k;
                                else
                                    s.fillText(i, 0, o);
                                s.restore()
                            }
                        }),
                        f.display) {
                        var O, R, F = 0, $ = D.lineHeight / 2;
                        if (v)
                            O = e.left + (e.right - e.left) / 2,
                                R = "bottom" === p ? e.bottom - $ - P.bottom : e.top + $ + P.top;
                        else {
                            var j = "left" === p;
                            O = j ? e.left + $ + P.top : e.right - $ - P.top,
                                R = e.top + (e.bottom - e.top) / 2,
                                F = j ? -.5 * Math.PI : .5 * Math.PI
                        }
                        s.save(),
                            s.translate(O, R),
                            s.rotate(F),
                            s.textAlign = "center",
                            s.textBaseline = "middle",
                            s.fillStyle = _,
                            s.font = D.string,
                            s.fillText(f.labelString, 0, 0),
                            s.restore()
                    }
                    if (N) {
                        var W, H, z, B, q = N, V = ro(h.lineWidth, b.length - 1, 0);
                        v ? (W = L(a, e.left, q) - q / 2,
                            H = L(a, e.right, V) + V / 2,
                            z = B = i) : (z = L(a, e.top, q) - q / 2,
                                B = L(a, e.bottom, V) + V / 2,
                                W = H = i),
                            s.lineWidth = N,
                            s.strokeStyle = ro(h.color, 0),
                            s.beginPath(),
                            s.moveTo(W, z),
                            s.lineTo(H, B),
                            s.stroke()
                    }
                }
            }
        })
            , so = {
                position: "bottom"
            }
            , lo = ao.extend({
                getLabels: function () {
                    var t = this.chart.data;
                    return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels
                },
                determineDataLimits: function () {
                    var t = this
                        , e = t.getLabels();
                    t.minIndex = 0,
                        t.maxIndex = e.length - 1;
                    var n;
                    void 0 !== t.options.ticks.min && (n = e.indexOf(t.options.ticks.min),
                        t.minIndex = -1 !== n ? n : t.minIndex),
                        void 0 !== t.options.ticks.max && (n = e.indexOf(t.options.ticks.max),
                            t.maxIndex = -1 !== n ? n : t.maxIndex),
                        t.min = e[t.minIndex],
                        t.max = e[t.maxIndex]
                },
                buildTicks: function () {
                    var t = this
                        , e = t.getLabels();
                    t.ticks = 0 === t.minIndex && t.maxIndex === e.length - 1 ? e : e.slice(t.minIndex, t.maxIndex + 1)
                },
                getLabelForIndex: function (t, e) {
                    var n = this
                        , i = n.chart;
                    return i.getDatasetMeta(e).controller._getValueScaleId() === n.id ? n.getRightValue(i.data.datasets[e].data[t]) : n.ticks[t - n.minIndex]
                },
                getPixelForValue: function (t, e) {
                    var n, i = this, o = i.options.offset, r = Math.max(i.maxIndex + 1 - i.minIndex - (o ? 0 : 1), 1);
                    if (void 0 !== t && null !== t && (n = i.isHorizontal() ? t.x : t.y),
                        void 0 !== n || void 0 !== t && isNaN(e)) {
                        var a = i.getLabels();
                        t = n || t;
                        var s = a.indexOf(t);
                        e = -1 !== s ? s : e
                    }
                    if (i.isHorizontal()) {
                        var l = i.width / r
                            , u = l * (e - i.minIndex);
                        return o && (u += l / 2),
                            i.left + u
                    }
                    var c = i.height / r
                        , d = c * (e - i.minIndex);
                    return o && (d += c / 2),
                        i.top + d
                },
                getPixelForTick: function (t) {
                    return this.getPixelForValue(this.ticks[t], t + this.minIndex, null)
                },
                getValueForPixel: function (t) {
                    var e = this
                        , n = e.options.offset
                        , i = Math.max(e._ticks.length - (n ? 0 : 1), 1)
                        , o = e.isHorizontal()
                        , r = (o ? e.width : e.height) / i;
                    return t -= o ? e.left : e.top,
                        n && (t -= r / 2),
                        (t <= 0 ? 0 : Math.round(t / r)) + e.minIndex
                },
                getBasePixel: function () {
                    return this.bottom
                }
            })
            , uo = so;
        lo._defaults = uo;
        var co = On.noop
            , ho = On.isNullOrUndef
            , fo = ao.extend({
                getRightValue: function (t) {
                    return "string" == typeof t ? +t : ao.prototype.getRightValue.call(this, t)
                },
                handleTickRangeOptions: function () {
                    var t = this
                        , e = t.options
                        , n = e.ticks;
                    if (n.beginAtZero) {
                        var i = On.sign(t.min)
                            , o = On.sign(t.max);
                        i < 0 && o < 0 ? t.max = 0 : i > 0 && o > 0 && (t.min = 0)
                    }
                    var r = void 0 !== n.min || void 0 !== n.suggestedMin
                        , a = void 0 !== n.max || void 0 !== n.suggestedMax;
                    void 0 !== n.min ? t.min = n.min : void 0 !== n.suggestedMin && (null === t.min ? t.min = n.suggestedMin : t.min = Math.min(t.min, n.suggestedMin)),
                        void 0 !== n.max ? t.max = n.max : void 0 !== n.suggestedMax && (null === t.max ? t.max = n.suggestedMax : t.max = Math.max(t.max, n.suggestedMax)),
                        r !== a && t.min >= t.max && (r ? t.max = t.min + 1 : t.min = t.max - 1),
                        t.min === t.max && (t.max++,
                            n.beginAtZero || t.min--)
                },
                getTickLimit: function () {
                    var t, e = this, n = e.options.ticks, i = n.stepSize, o = n.maxTicksLimit;
                    return i ? t = Math.ceil(e.max / i) - Math.floor(e.min / i) + 1 : (t = e._computeTickLimit(),
                        o = o || 11),
                        o && (t = Math.min(o, t)),
                        t
                },
                _computeTickLimit: function () {
                    return Number.POSITIVE_INFINITY
                },
                handleDirectionalChanges: co,
                buildTicks: function () {
                    var t = this
                        , e = t.options
                        , n = e.ticks
                        , i = t.getTickLimit();
                    i = Math.max(2, i);
                    var o = {
                        maxTicks: i,
                        min: n.min,
                        max: n.max,
                        precision: n.precision,
                        stepSize: On.valueOrDefault(n.fixedStepSize, n.stepSize)
                    }
                        , r = t.ticks = ve(o, t);
                    t.handleDirectionalChanges(),
                        t.max = On.max(r),
                        t.min = On.min(r),
                        n.reverse ? (r.reverse(),
                            t.start = t.max,
                            t.end = t.min) : (t.start = t.min,
                                t.end = t.max)
                },
                convertTicksToLabels: function () {
                    var t = this;
                    t.ticksAsNumbers = t.ticks.slice(),
                        t.zeroLineIndex = t.ticks.indexOf(0),
                        ao.prototype.convertTicksToLabels.call(t)
                }
            })
            , po = {
                position: "left",
                ticks: {
                    callback: io.formatters.linear
                }
            }
            , go = fo.extend({
                determineDataLimits: function () {
                    function t(t) {
                        return a ? t.xAxisID === e.id : t.yAxisID === e.id
                    }
                    var e = this
                        , n = e.options
                        , i = e.chart
                        , o = i.data
                        , r = o.datasets
                        , a = e.isHorizontal();
                    e.min = null,
                        e.max = null;
                    var s = n.stacked;
                    if (void 0 === s && On.each(r, function (e, n) {
                        if (!s) {
                            var o = i.getDatasetMeta(n);
                            i.isDatasetVisible(n) && t(o) && void 0 !== o.stack && (s = !0)
                        }
                    }),
                        n.stacked || s) {
                        var l = {};
                        On.each(r, function (o, r) {
                            var a = i.getDatasetMeta(r)
                                , s = [a.type, void 0 === n.stacked && void 0 === a.stack ? r : "", a.stack].join(".");
                            void 0 === l[s] && (l[s] = {
                                positiveValues: [],
                                negativeValues: []
                            });
                            var u = l[s].positiveValues
                                , c = l[s].negativeValues;
                            i.isDatasetVisible(r) && t(a) && On.each(o.data, function (t, i) {
                                var o = +e.getRightValue(t);
                                isNaN(o) || a.data[i].hidden || (u[i] = u[i] || 0,
                                    c[i] = c[i] || 0,
                                    n.relativePoints ? u[i] = 100 : o < 0 ? c[i] += o : u[i] += o)
                            })
                        }),
                            On.each(l, function (t) {
                                var n = t.positiveValues.concat(t.negativeValues)
                                    , i = On.min(n)
                                    , o = On.max(n);
                                e.min = null === e.min ? i : Math.min(e.min, i),
                                    e.max = null === e.max ? o : Math.max(e.max, o)
                            })
                    } else
                        On.each(r, function (n, o) {
                            var r = i.getDatasetMeta(o);
                            i.isDatasetVisible(o) && t(r) && On.each(n.data, function (t, n) {
                                var i = +e.getRightValue(t);
                                isNaN(i) || r.data[n].hidden || (null === e.min ? e.min = i : i < e.min && (e.min = i),
                                    null === e.max ? e.max = i : i > e.max && (e.max = i))
                            })
                        });
                    e.min = isFinite(e.min) && !isNaN(e.min) ? e.min : 0,
                        e.max = isFinite(e.max) && !isNaN(e.max) ? e.max : 1,
                        this.handleTickRangeOptions()
                },
                _computeTickLimit: function () {
                    var t, e = this;
                    return e.isHorizontal() ? Math.ceil(e.width / 40) : (t = On.options._parseFont(e.options.ticks),
                        Math.ceil(e.height / t.lineHeight))
                },
                handleDirectionalChanges: function () {
                    this.isHorizontal() || this.ticks.reverse()
                },
                getLabelForIndex: function (t, e) {
                    return +this.getRightValue(this.chart.data.datasets[e].data[t])
                },
                getPixelForValue: function (t) {
                    var e = this
                        , n = e.start
                        , i = +e.getRightValue(t)
                        , o = e.end - n;
                    return e.isHorizontal() ? e.left + e.width / o * (i - n) : e.bottom - e.height / o * (i - n)
                },
                getValueForPixel: function (t) {
                    var e = this
                        , n = e.isHorizontal()
                        , i = n ? e.width : e.height
                        , o = (n ? t - e.left : e.bottom - t) / i;
                    return e.start + (e.end - e.start) * o
                },
                getPixelForTick: function (t) {
                    return this.getPixelForValue(this.ticksAsNumbers[t])
                }
            })
            , mo = po;
        go._defaults = mo;
        var vo = On.valueOrDefault
            , yo = {
                position: "left",
                ticks: {
                    callback: io.formatters.logarithmic
                }
            }
            , bo = ao.extend({
                determineDataLimits: function () {
                    function t(t) {
                        return a ? t.xAxisID === e.id : t.yAxisID === e.id
                    }
                    var e = this
                        , n = e.options
                        , i = e.chart
                        , o = i.data
                        , r = o.datasets
                        , a = e.isHorizontal();
                    e.min = null,
                        e.max = null,
                        e.minNotZero = null;
                    var s = n.stacked;
                    if (void 0 === s && On.each(r, function (e, n) {
                        if (!s) {
                            var o = i.getDatasetMeta(n);
                            i.isDatasetVisible(n) && t(o) && void 0 !== o.stack && (s = !0)
                        }
                    }),
                        n.stacked || s) {
                        var l = {};
                        On.each(r, function (o, r) {
                            var a = i.getDatasetMeta(r)
                                , s = [a.type, void 0 === n.stacked && void 0 === a.stack ? r : "", a.stack].join(".");
                            i.isDatasetVisible(r) && t(a) && (void 0 === l[s] && (l[s] = []),
                                On.each(o.data, function (t, n) {
                                    var i = l[s]
                                        , o = +e.getRightValue(t);
                                    isNaN(o) || a.data[n].hidden || o < 0 || (i[n] = i[n] || 0,
                                        i[n] += o)
                                }))
                        }),
                            On.each(l, function (t) {
                                if (t.length > 0) {
                                    var n = On.min(t)
                                        , i = On.max(t);
                                    e.min = null === e.min ? n : Math.min(e.min, n),
                                        e.max = null === e.max ? i : Math.max(e.max, i)
                                }
                            })
                    } else
                        On.each(r, function (n, o) {
                            var r = i.getDatasetMeta(o);
                            i.isDatasetVisible(o) && t(r) && On.each(n.data, function (t, n) {
                                var i = +e.getRightValue(t);
                                isNaN(i) || r.data[n].hidden || i < 0 || (null === e.min ? e.min = i : i < e.min && (e.min = i),
                                    null === e.max ? e.max = i : i > e.max && (e.max = i),
                                    0 !== i && (null === e.minNotZero || i < e.minNotZero) && (e.minNotZero = i))
                            })
                        });
                    this.handleTickRangeOptions()
                },
                handleTickRangeOptions: function () {
                    var t = this
                        , e = t.options.ticks;
                    t.min = be(e.min, t.min),
                        t.max = be(e.max, t.max),
                        t.min === t.max && (0 !== t.min && null !== t.min ? (t.min = Math.pow(10, Math.floor(On.log10(t.min)) - 1),
                            t.max = Math.pow(10, Math.floor(On.log10(t.max)) + 1)) : (t.min = 1,
                                t.max = 10)),
                        null === t.min && (t.min = Math.pow(10, Math.floor(On.log10(t.max)) - 1)),
                        null === t.max && (t.max = 0 !== t.min ? Math.pow(10, Math.floor(On.log10(t.min)) + 1) : 10),
                        null === t.minNotZero && (t.min > 0 ? t.minNotZero = t.min : t.max < 1 ? t.minNotZero = Math.pow(10, Math.floor(On.log10(t.max))) : t.minNotZero = 1)
                },
                buildTicks: function () {
                    var t = this
                        , e = t.options.ticks
                        , n = !t.isHorizontal()
                        , i = {
                            min: be(e.min),
                            max: be(e.max)
                        }
                        , o = t.ticks = ye(i, t);
                    t.max = On.max(o),
                        t.min = On.min(o),
                        e.reverse ? (n = !n,
                            t.start = t.max,
                            t.end = t.min) : (t.start = t.min,
                                t.end = t.max),
                        n && o.reverse()
                },
                convertTicksToLabels: function () {
                    this.tickValues = this.ticks.slice(),
                        ao.prototype.convertTicksToLabels.call(this)
                },
                getLabelForIndex: function (t, e) {
                    return +this.getRightValue(this.chart.data.datasets[e].data[t])
                },
                getPixelForTick: function (t) {
                    return this.getPixelForValue(this.tickValues[t])
                },
                _getFirstTickValue: function (t) {
                    var e = Math.floor(On.log10(t));
                    return Math.floor(t / Math.pow(10, e)) * Math.pow(10, e)
                },
                getPixelForValue: function (t) {
                    var e, n, i, o, r, a = this, s = a.options.ticks, l = s.reverse, u = On.log10, c = a._getFirstTickValue(a.minNotZero), d = 0;
                    return t = +a.getRightValue(t),
                        l ? (i = a.end,
                            o = a.start,
                            r = -1) : (i = a.start,
                                o = a.end,
                                r = 1),
                        a.isHorizontal() ? (e = a.width,
                            n = l ? a.right : a.left) : (e = a.height,
                                r *= -1,
                                n = l ? a.top : a.bottom),
                        t !== i && (0 === i && (d = vo(s.fontSize, En.global.defaultFontSize),
                            e -= d,
                            i = c),
                            0 !== t && (d += e / (u(o) - u(i)) * (u(t) - u(i))),
                            n += r * d),
                        n
                },
                getValueForPixel: function (t) {
                    var e, n, i, o, r = this, a = r.options.ticks, s = a.reverse, l = On.log10, u = r._getFirstTickValue(r.minNotZero);
                    if (s ? (n = r.end,
                        i = r.start) : (n = r.start,
                            i = r.end),
                        r.isHorizontal() ? (e = r.width,
                            o = s ? r.right - t : t - r.left) : (e = r.height,
                                o = s ? t - r.top : r.bottom - t),
                        o !== n) {
                        if (0 === n) {
                            var c = vo(a.fontSize, En.global.defaultFontSize);
                            o -= c,
                                e -= c,
                                n = u
                        }
                        o *= l(i) - l(n),
                            o /= e,
                            o = Math.pow(10, l(n) + o)
                    }
                    return o
                }
            })
            , xo = yo;
        bo._defaults = xo;
        var wo = On.valueOrDefault
            , ko = On.valueAtIndexOrDefault
            , Co = On.options.resolve
            , To = {
                display: !0,
                animate: !0,
                position: "chartArea",
                angleLines: {
                    display: !0,
                    color: "rgba(0, 0, 0, 0.1)",
                    lineWidth: 1,
                    borderDash: [],
                    borderDashOffset: 0
                },
                gridLines: {
                    circular: !1
                },
                ticks: {
                    showLabelBackdrop: !0,
                    backdropColor: "rgba(255,255,255,0.75)",
                    backdropPaddingY: 2,
                    backdropPaddingX: 2,
                    callback: io.formatters.linear
                },
                pointLabels: {
                    display: !0,
                    fontSize: 10,
                    callback: function (t) {
                        return t
                    }
                }
            }
            , So = fo.extend({
                setDimensions: function () {
                    var t = this;
                    t.width = t.maxWidth,
                        t.height = t.maxHeight,
                        t.paddingTop = we(t.options) / 2,
                        t.xCenter = Math.floor(t.width / 2),
                        t.yCenter = Math.floor((t.height - t.paddingTop) / 2),
                        t.drawingArea = Math.min(t.height - t.paddingTop, t.width) / 2
                },
                determineDataLimits: function () {
                    var t = this
                        , e = t.chart
                        , n = Number.POSITIVE_INFINITY
                        , i = Number.NEGATIVE_INFINITY;
                    On.each(e.data.datasets, function (o, r) {
                        if (e.isDatasetVisible(r)) {
                            var a = e.getDatasetMeta(r);
                            On.each(o.data, function (e, o) {
                                var r = +t.getRightValue(e);
                                isNaN(r) || a.data[o].hidden || (n = Math.min(r, n),
                                    i = Math.max(r, i))
                            })
                        }
                    }),
                        t.min = n === Number.POSITIVE_INFINITY ? 0 : n,
                        t.max = i === Number.NEGATIVE_INFINITY ? 0 : i,
                        t.handleTickRangeOptions()
                },
                _computeTickLimit: function () {
                    return Math.ceil(this.drawingArea / we(this.options))
                },
                convertTicksToLabels: function () {
                    var t = this;
                    fo.prototype.convertTicksToLabels.call(t),
                        t.pointLabels = t.chart.data.labels.map(t.options.pointLabels.callback, t)
                },
                getLabelForIndex: function (t, e) {
                    return +this.getRightValue(this.chart.data.datasets[e].data[t])
                },
                fit: function () {
                    var t = this
                        , e = t.options;
                    e.display && e.pointLabels.display ? Te(t) : t.setCenterPoint(0, 0, 0, 0)
                },
                setReductions: function (t, e, n) {
                    var i = this
                        , o = e.l / Math.sin(n.l)
                        , r = Math.max(e.r - i.width, 0) / Math.sin(n.r)
                        , a = -e.t / Math.cos(n.t)
                        , s = -Math.max(e.b - (i.height - i.paddingTop), 0) / Math.cos(n.b);
                    o = Pe(o),
                        r = Pe(r),
                        a = Pe(a),
                        s = Pe(s),
                        i.drawingArea = Math.min(Math.floor(t - (o + r) / 2), Math.floor(t - (a + s) / 2)),
                        i.setCenterPoint(o, r, a, s)
                },
                setCenterPoint: function (t, e, n, i) {
                    var o = this
                        , r = o.width - e - o.drawingArea
                        , a = t + o.drawingArea
                        , s = n + o.drawingArea
                        , l = o.height - o.paddingTop - i - o.drawingArea;
                    o.xCenter = Math.floor((a + r) / 2 + o.left),
                        o.yCenter = Math.floor((s + l) / 2 + o.top + o.paddingTop)
                },
                getIndexAngle: function (t) {
                    return t * (2 * Math.PI / xe(this)) + (this.chart.options && this.chart.options.startAngle ? this.chart.options.startAngle : 0) * Math.PI * 2 / 360
                },
                getDistanceFromCenterForValue: function (t) {
                    var e = this;
                    if (null === t)
                        return 0;
                    var n = e.drawingArea / (e.max - e.min);
                    return e.options.ticks.reverse ? (e.max - t) * n : (t - e.min) * n
                },
                getPointPosition: function (t, e) {
                    var n = this
                        , i = n.getIndexAngle(t) - Math.PI / 2;
                    return {
                        x: Math.cos(i) * e + n.xCenter,
                        y: Math.sin(i) * e + n.yCenter
                    }
                },
                getPointPositionForValue: function (t, e) {
                    return this.getPointPosition(t, this.getDistanceFromCenterForValue(e))
                },
                getBasePosition: function () {
                    var t = this
                        , e = t.min
                        , n = t.max;
                    return t.getPointPositionForValue(0, t.beginAtZero ? 0 : e < 0 && n < 0 ? n : e > 0 && n > 0 ? e : 0)
                },
                draw: function () {
                    var t = this
                        , e = t.options
                        , n = e.gridLines
                        , i = e.ticks;
                    if (e.display) {
                        var o = t.ctx
                            , r = this.getIndexAngle(0)
                            , a = On.options._parseFont(i);
                        (e.angleLines.display || e.pointLabels.display) && _e(t),
                            On.each(t.ticks, function (e, s) {
                                if (s > 0 || i.reverse) {
                                    var l = t.getDistanceFromCenterForValue(t.ticksAsNumbers[s]);
                                    if (n.display && 0 !== s && De(t, n, l, s),
                                        i.display) {
                                        var u = wo(i.fontColor, En.global.defaultFontColor);
                                        if (o.font = a.string,
                                            o.save(),
                                            o.translate(t.xCenter, t.yCenter),
                                            o.rotate(r),
                                            i.showLabelBackdrop) {
                                            var c = o.measureText(e).width;
                                            o.fillStyle = i.backdropColor,
                                                o.fillRect(-c / 2 - i.backdropPaddingX, -l - a.size / 2 - i.backdropPaddingY, c + 2 * i.backdropPaddingX, a.size + 2 * i.backdropPaddingY)
                                        }
                                        o.textAlign = "center",
                                            o.textBaseline = "middle",
                                            o.fillStyle = u,
                                            o.fillText(e, 0, -l),
                                            o.restore()
                                    }
                                }
                            })
                    }
                }
            })
            , Mo = To;
        So._defaults = Mo;
        var Ao = On.valueOrDefault
            , _o = Number.MIN_SAFE_INTEGER || -9007199254740991
            , Do = Number.MAX_SAFE_INTEGER || 9007199254740991
            , Po = {
                millisecond: {
                    common: !0,
                    size: 1,
                    steps: [1, 2, 5, 10, 20, 50, 100, 250, 500]
                },
                second: {
                    common: !0,
                    size: 1e3,
                    steps: [1, 2, 5, 10, 15, 30]
                },
                minute: {
                    common: !0,
                    size: 6e4,
                    steps: [1, 2, 5, 10, 15, 30]
                },
                hour: {
                    common: !0,
                    size: 36e5,
                    steps: [1, 2, 3, 6, 12]
                },
                day: {
                    common: !0,
                    size: 864e5,
                    steps: [1, 2, 5]
                },
                week: {
                    common: !1,
                    size: 6048e5,
                    steps: [1, 2, 3, 4]
                },
                month: {
                    common: !0,
                    size: 2628e6,
                    steps: [1, 2, 3]
                },
                quarter: {
                    common: !1,
                    size: 7884e6,
                    steps: [1, 2, 3, 4]
                },
                year: {
                    common: !0,
                    size: 3154e7
                }
            }
            , Io = Object.keys(Po)
            , Eo = {
                position: "bottom",
                distribution: "linear",
                bounds: "data",
                adapters: {},
                time: {
                    parser: !1,
                    format: !1,
                    unit: !1,
                    round: !1,
                    displayFormat: !1,
                    isoWeekday: !1,
                    minUnit: "millisecond",
                    displayFormats: {}
                },
                ticks: {
                    autoSkip: !1,
                    source: "auto",
                    major: {
                        enabled: !1
                    }
                }
            }
            , No = ao.extend({
                initialize: function () {
                    this.mergeTicksOptions(),
                        ao.prototype.initialize.call(this)
                },
                update: function () {
                    var t = this
                        , e = t.options
                        , n = e.time || (e.time = {})
                        , i = t._adapter = new no._date(e.adapters.date);
                    return On.mergeIf(n.displayFormats, i.formats()),
                        ao.prototype.update.apply(t, arguments)
                },
                getRightValue: function (t) {
                    return t && void 0 !== t.t && (t = t.t),
                        ao.prototype.getRightValue.call(this, t)
                },
                determineDataLimits: function () {
                    var t, e, n, i, o, r, a = this, s = a.chart, l = a._adapter, u = a.options.time, c = u.unit || "day", d = Do, h = _o, f = [], p = [], g = [], m = s.data.labels || [];
                    for (t = 0,
                        n = m.length; t < n; ++t)
                        g.push(Fe(a, m[t]));
                    for (t = 0,
                        n = (s.data.datasets || []).length; t < n; ++t)
                        if (s.isDatasetVisible(t))
                            if (o = s.data.datasets[t].data,
                                On.isObject(o[0]))
                                for (p[t] = [],
                                    e = 0,
                                    i = o.length; e < i; ++e)
                                    r = Fe(a, o[e]),
                                        f.push(r),
                                        p[t][e] = r;
                            else {
                                for (e = 0,
                                    i = g.length; e < i; ++e)
                                    f.push(g[e]);
                                p[t] = g.slice(0)
                            }
                        else
                            p[t] = [];
                    g.length && (g = Ee(g).sort(Ie),
                        d = Math.min(d, g[0]),
                        h = Math.max(h, g[g.length - 1])),
                        f.length && (f = Ee(f).sort(Ie),
                            d = Math.min(d, f[0]),
                            h = Math.max(h, f[f.length - 1])),
                        d = Fe(a, u.min) || d,
                        h = Fe(a, u.max) || h,
                        d = d === Do ? +l.startOf(Date.now(), c) : d,
                        h = h === _o ? +l.endOf(Date.now(), c) + 1 : h,
                        a.min = Math.min(d, h),
                        a.max = Math.max(d + 1, h),
                        a._horizontal = a.isHorizontal(),
                        a._table = [],
                        a._timestamps = {
                            data: f,
                            datasets: p,
                            labels: g
                        }
                },
                buildTicks: function () {
                    var t, e, n, i = this, o = i.min, r = i.max, a = i.options, s = a.time, l = [], u = [];
                    switch (a.ticks.source) {
                        case "data":
                            l = i._timestamps.data;
                            break;
                        case "labels":
                            l = i._timestamps.labels;
                            break;
                        case "auto":
                        default:
                            l = ze(i, o, r, i.getLabelCapacity(o))
                    }
                    for ("ticks" === a.bounds && l.length && (o = l[0],
                        r = l[l.length - 1]),
                        o = Fe(i, s.min) || o,
                        r = Fe(i, s.max) || r,
                        t = 0,
                        e = l.length; t < e; ++t)
                        (n = l[t]) >= o && n <= r && u.push(n);
                    return i.min = o,
                        i.max = r,
                        i._unit = s.unit || We(i, u, s.minUnit, i.min, i.max),
                        i._majorUnit = He(i._unit),
                        i._table = Ne(i._timestamps.data, o, r, a.distribution),
                        i._offsets = Be(i._table, u, o, r, a),
                        a.ticks.reverse && u.reverse(),
                        qe(i, u, i._majorUnit)
                },
                getLabelForIndex: function (t, e) {
                    var n = this
                        , i = n._adapter
                        , o = n.chart.data
                        , r = n.options.time
                        , a = o.labels && t < o.labels.length ? o.labels[t] : ""
                        , s = o.datasets[e].data[t];
                    return On.isObject(s) && (a = n.getRightValue(s)),
                        r.tooltipFormat ? i.format(Re(n, a), r.tooltipFormat) : "string" == typeof a ? a : i.format(Re(n, a), r.displayFormats.datetime)
                },
                tickFormatFunction: function (t, e, n, i) {
                    var o = this
                        , r = o._adapter
                        , a = o.options
                        , s = a.time.displayFormats
                        , l = s[o._unit]
                        , u = o._majorUnit
                        , c = s[u]
                        , d = +r.startOf(t, u)
                        , h = a.ticks.major
                        , f = h.enabled && u && c && t === d
                        , p = r.format(t, i || (f ? c : l))
                        , g = f ? h : a.ticks.minor
                        , m = Ao(g.callback, g.userCallback);
                    return m ? m(p, e, n) : p
                },
                convertTicksToLabels: function (t) {
                    var e, n, i = [];
                    for (e = 0,
                        n = t.length; e < n; ++e)
                        i.push(this.tickFormatFunction(t[e].value, e, t));
                    return i
                },
                getPixelForOffset: function (t) {
                    var e = this
                        , n = e.options.ticks.reverse
                        , i = e._horizontal ? e.width : e.height
                        , o = e._horizontal ? n ? e.right : e.left : n ? e.bottom : e.top
                        , r = Oe(e._table, "time", t, "pos")
                        , a = i * (e._offsets.start + r) / (e._offsets.start + 1 + e._offsets.end);
                    return n ? o - a : o + a
                },
                getPixelForValue: function (t, e, n) {
                    var i = this
                        , o = null;
                    if (void 0 !== e && void 0 !== n && (o = i._timestamps.datasets[n][e]),
                        null === o && (o = Fe(i, t)),
                        null !== o)
                        return i.getPixelForOffset(o)
                },
                getPixelForTick: function (t) {
                    var e = this.getTicks();
                    return t >= 0 && t < e.length ? this.getPixelForOffset(e[t].value) : null
                },
                getValueForPixel: function (t) {
                    var e = this
                        , n = e._horizontal ? e.width : e.height
                        , i = e._horizontal ? e.left : e.top
                        , o = (n ? (t - i) / n : 0) * (e._offsets.start + 1 + e._offsets.start) - e._offsets.end
                        , r = Oe(e._table, "pos", o, "time");
                    return e._adapter._create(r)
                },
                getLabelWidth: function (t) {
                    var e = this
                        , n = e.options.ticks
                        , i = e.ctx.measureText(t).width
                        , o = On.toRadians(n.maxRotation)
                        , r = Math.cos(o)
                        , a = Math.sin(o);
                    return i * r + Ao(n.fontSize, En.global.defaultFontSize) * a
                },
                getLabelCapacity: function (t) {
                    var e = this
                        , n = e.options.time.displayFormats.millisecond
                        , i = e.tickFormatFunction(t, 0, [], n)
                        , o = e.getLabelWidth(i)
                        , r = e.isHorizontal() ? e.width : e.height
                        , a = Math.floor(r / o);
                    return a > 0 ? a : 1
                }
            })
            , Lo = Eo;
        No._defaults = Lo;
        var Oo = {
            category: lo,
            linear: go,
            logarithmic: bo,
            radialLinear: So,
            time: No
        }
            , Ro = {
                datetime: "MMM D, YYYY, h:mm:ss a",
                millisecond: "h:mm:ss.SSS a",
                second: "h:mm:ss a",
                minute: "h:mm a",
                hour: "hA",
                day: "MMM D",
                week: "ll",
                month: "MMM YYYY",
                quarter: "[Q]Q - YYYY",
                year: "YYYY"
            };
        no._date.override("function" == typeof t ? {
            _id: "moment",
            formats: function () {
                return Ro
            },
            parse: function (e, n) {
                return "string" == typeof e && "string" == typeof n ? e = t(e, n) : e instanceof t || (e = t(e)),
                    e.isValid() ? e.valueOf() : null
            },
            format: function (e, n) {
                return t(e).format(n)
            },
            add: function (e, n, i) {
                return t(e).add(n, i).valueOf()
            },
            diff: function (e, n, i) {
                return t.duration(t(e).diff(t(n))).as(i)
            },
            startOf: function (e, n, i) {
                return e = t(e),
                    "isoWeek" === n ? e.isoWeekday(i).valueOf() : e.startOf(n).valueOf()
            },
            endOf: function (e, n) {
                return t(e).endOf(n).valueOf()
            },
            _create: function (e) {
                return t(e)
            }
        } : {}),
            En._set("global", {
                plugins: {
                    filler: {
                        propagate: !0
                    }
                }
            });
        var Fo = {
            dataset: function (t) {
                var e = t.fill
                    , n = t.chart
                    , i = n.getDatasetMeta(e)
                    , o = i && n.isDatasetVisible(e)
                    , r = o && i.dataset._children || []
                    , a = r.length || 0;
                return a ? function (t, e) {
                    return e < a && r[e]._view || null
                }
                    : null
            },
            boundary: function (t) {
                var e = t.boundary
                    , n = e ? e.x : null
                    , i = e ? e.y : null;
                return function (t) {
                    return {
                        x: null === n ? t.x : n,
                        y: null === i ? t.y : i
                    }
                }
            }
        }
            , $o = {
                id: "filler",
                afterDatasetsUpdate: function (t, e) {
                    var n, i, o, r, a = (t.data.datasets || []).length, s = e.propagate, l = [];
                    for (i = 0; i < a; ++i)
                        n = t.getDatasetMeta(i),
                            o = n.dataset,
                            r = null,
                            o && o._model && o instanceof ii.Line && (r = {
                                visible: t.isDatasetVisible(i),
                                fill: Ve(o, i, a),
                                chart: t,
                                el: o
                            }),
                            n.$filler = r,
                            l.push(r);
                    for (i = 0; i < a; ++i)
                        (r = l[i]) && (r.fill = Ye(l, i, s),
                            r.boundary = Ue(r),
                            r.mapper = Xe(r))
                },
                beforeDatasetDraw: function (t, e) {
                    var n = e.meta.$filler;
                    if (n) {
                        var i = t.ctx
                            , o = n.el
                            , r = o._view
                            , a = o._children || []
                            , s = n.mapper
                            , l = r.backgroundColor || En.global.defaultColor;
                        s && l && a.length && (On.canvas.clipArea(i, t.chartArea),
                            Ge(i, a, s, r, l, o._loop),
                            On.canvas.unclipArea(i))
                    }
                }
            }
            , jo = On.noop
            , Wo = On.valueOrDefault;
        En._set("global", {
            legend: {
                display: !0,
                position: "top",
                fullWidth: !0,
                reverse: !1,
                weight: 1e3,
                onClick: function (t, e) {
                    var n = e.datasetIndex
                        , i = this.chart
                        , o = i.getDatasetMeta(n);
                    o.hidden = null === o.hidden ? !i.data.datasets[n].hidden : null,
                        i.update()
                },
                onHover: null,
                onLeave: null,
                labels: {
                    boxWidth: 40,
                    padding: 10,
                    generateLabels: function (t) {
                        var e = t.data;
                        return On.isArray(e.datasets) ? e.datasets.map(function (e, n) {
                            return {
                                text: e.label,
                                fillStyle: On.isArray(e.backgroundColor) ? e.backgroundColor[0] : e.backgroundColor,
                                hidden: !t.isDatasetVisible(n),
                                lineCap: e.borderCapStyle,
                                lineDash: e.borderDash,
                                lineDashOffset: e.borderDashOffset,
                                lineJoin: e.borderJoinStyle,
                                lineWidth: e.borderWidth,
                                strokeStyle: e.borderColor,
                                pointStyle: e.pointStyle,
                                datasetIndex: n
                            }
                        }, this) : []
                    }
                }
            },
            legendCallback: function (t) {
                var e = [];
                e.push('<ul class="' + t.id + '-legend">');
                for (var n = 0; n < t.data.datasets.length; n++)
                    e.push('<li><span style="background-color:' + t.data.datasets[n].backgroundColor + '"></span>'),
                        t.data.datasets[n].label && e.push(t.data.datasets[n].label),
                        e.push("</li>");
                return e.push("</ul>"),
                    e.join("")
            }
        });
        var Ho = Wn.extend({
            initialize: function (t) {
                On.extend(this, t),
                    this.legendHitBoxes = [],
                    this._hoveredItem = null,
                    this.doughnutMode = !1
            },
            beforeUpdate: jo,
            update: function (t, e, n) {
                var i = this;
                return i.beforeUpdate(),
                    i.maxWidth = t,
                    i.maxHeight = e,
                    i.margins = n,
                    i.beforeSetDimensions(),
                    i.setDimensions(),
                    i.afterSetDimensions(),
                    i.beforeBuildLabels(),
                    i.buildLabels(),
                    i.afterBuildLabels(),
                    i.beforeFit(),
                    i.fit(),
                    i.afterFit(),
                    i.afterUpdate(),
                    i.minSize
            },
            afterUpdate: jo,
            beforeSetDimensions: jo,
            setDimensions: function () {
                var t = this;
                t.isHorizontal() ? (t.width = t.maxWidth,
                    t.left = 0,
                    t.right = t.width) : (t.height = t.maxHeight,
                        t.top = 0,
                        t.bottom = t.height),
                    t.paddingLeft = 0,
                    t.paddingTop = 0,
                    t.paddingRight = 0,
                    t.paddingBottom = 0,
                    t.minSize = {
                        width: 0,
                        height: 0
                    }
            },
            afterSetDimensions: jo,
            beforeBuildLabels: jo,
            buildLabels: function () {
                var t = this
                    , e = t.options.labels || {}
                    , n = On.callback(e.generateLabels, [t.chart], t) || [];
                e.filter && (n = n.filter(function (n) {
                    return e.filter(n, t.chart.data)
                })),
                    t.options.reverse && n.reverse(),
                    t.legendItems = n
            },
            afterBuildLabels: jo,
            beforeFit: jo,
            fit: function () {
                var t = this
                    , e = t.options
                    , n = e.labels
                    , i = e.display
                    , o = t.ctx
                    , r = On.options._parseFont(n)
                    , a = r.size
                    , s = t.legendHitBoxes = []
                    , l = t.minSize
                    , u = t.isHorizontal();
                if (u ? (l.width = t.maxWidth,
                    l.height = i ? 10 : 0) : (l.width = i ? 10 : 0,
                        l.height = t.maxHeight),
                    i)
                    if (o.font = r.string,
                        u) {
                        var c = t.lineWidths = [0]
                            , d = 0;
                        o.textAlign = "left",
                            o.textBaseline = "top",
                            On.each(t.legendItems, function (t, e) {
                                var i = Je(n, a)
                                    , r = i + a / 2 + o.measureText(t.text).width;
                                (0 === e || c[c.length - 1] + r + n.padding > l.width) && (d += a + n.padding,
                                    c[c.length - (e > 0 ? 0 : 1)] = n.padding),
                                    s[e] = {
                                        left: 0,
                                        top: 0,
                                        width: r,
                                        height: a
                                    },
                                    c[c.length - 1] += r + n.padding
                            }),
                            l.height += d
                    } else {
                        var h = n.padding
                            , f = t.columnWidths = []
                            , p = n.padding
                            , g = 0
                            , m = 0
                            , v = a + h;
                        On.each(t.legendItems, function (t, e) {
                            var i = Je(n, a)
                                , r = i + a / 2 + o.measureText(t.text).width;
                            e > 0 && m + v > l.height - h && (p += g + n.padding,
                                f.push(g),
                                g = 0,
                                m = 0),
                                g = Math.max(g, r),
                                m += v,
                                s[e] = {
                                    left: 0,
                                    top: 0,
                                    width: r,
                                    height: a
                                }
                        }),
                            p += g,
                            f.push(g),
                            l.width += p
                    }
                t.width = l.width,
                    t.height = l.height
            },
            afterFit: jo,
            isHorizontal: function () {
                return "top" === this.options.position || "bottom" === this.options.position
            },
            draw: function () {
                var t = this
                    , e = t.options
                    , n = e.labels
                    , i = En.global
                    , o = i.defaultColor
                    , r = i.elements.line
                    , a = t.width
                    , s = t.lineWidths;
                if (e.display) {
                    var l, u = t.ctx, c = Wo(n.fontColor, i.defaultFontColor), d = On.options._parseFont(n), h = d.size;
                    u.textAlign = "left",
                        u.textBaseline = "middle",
                        u.lineWidth = .5,
                        u.strokeStyle = c,
                        u.fillStyle = c,
                        u.font = d.string;
                    var f = Je(n, h)
                        , p = t.legendHitBoxes
                        , g = function (t, n, i) {
                            if (!(isNaN(f) || f <= 0)) {
                                u.save();
                                var a = Wo(i.lineWidth, r.borderWidth);
                                if (u.fillStyle = Wo(i.fillStyle, o),
                                    u.lineCap = Wo(i.lineCap, r.borderCapStyle),
                                    u.lineDashOffset = Wo(i.lineDashOffset, r.borderDashOffset),
                                    u.lineJoin = Wo(i.lineJoin, r.borderJoinStyle),
                                    u.lineWidth = a,
                                    u.strokeStyle = Wo(i.strokeStyle, o),
                                    u.setLineDash && u.setLineDash(Wo(i.lineDash, r.borderDash)),
                                    e.labels && e.labels.usePointStyle) {
                                    var s = f * Math.SQRT2 / 2
                                        , l = t + f / 2
                                        , c = n + h / 2;
                                    On.canvas.drawPoint(u, i.pointStyle, s, l, c)
                                } else
                                    0 !== a && u.strokeRect(t, n, f, h),
                                        u.fillRect(t, n, f, h);
                                u.restore()
                            }
                        }
                        , m = function (t, e, n, i) {
                            var o = h / 2
                                , r = f + o + t
                                , a = e + o;
                            u.fillText(n.text, r, a),
                                n.hidden && (u.beginPath(),
                                    u.lineWidth = 2,
                                    u.moveTo(r, a),
                                    u.lineTo(r + i, a),
                                    u.stroke())
                        }
                        , v = t.isHorizontal();
                    l = v ? {
                        x: t.left + (a - s[0]) / 2 + n.padding,
                        y: t.top + n.padding,
                        line: 0
                    } : {
                        x: t.left + n.padding,
                        y: t.top + n.padding,
                        line: 0
                    };
                    var y = h + n.padding;
                    On.each(t.legendItems, function (e, i) {
                        var o = u.measureText(e.text).width
                            , r = f + h / 2 + o
                            , c = l.x
                            , d = l.y;
                        v ? i > 0 && c + r + n.padding > t.left + t.minSize.width && (d = l.y += y,
                            l.line++,
                            c = l.x = t.left + (a - s[l.line]) / 2 + n.padding) : i > 0 && d + y > t.top + t.minSize.height && (c = l.x = c + t.columnWidths[l.line] + n.padding,
                                d = l.y = t.top + n.padding,
                                l.line++),
                            g(c, d, e),
                            p[i].left = c,
                            p[i].top = d,
                            m(c, d, e, o),
                            v ? l.x += r + n.padding : l.y += y
                    })
                }
            },
            _getLegendItemAt: function (t, e) {
                var n, i, o, r = this;
                if (t >= r.left && t <= r.right && e >= r.top && e <= r.bottom)
                    for (o = r.legendHitBoxes,
                        n = 0; n < o.length; ++n)
                        if (i = o[n],
                            t >= i.left && t <= i.left + i.width && e >= i.top && e <= i.top + i.height)
                            return r.legendItems[n];
                return null
            },
            handleEvent: function (t) {
                var e, n = this, i = n.options, o = "mouseup" === t.type ? "click" : t.type;
                if ("mousemove" === o) {
                    if (!i.onHover && !i.onLeave)
                        return
                } else {
                    if ("click" !== o)
                        return;
                    if (!i.onClick)
                        return
                }
                e = n._getLegendItemAt(t.x, t.y),
                    "click" === o ? e && i.onClick && i.onClick.call(n, t.native, e) : (i.onLeave && e !== n._hoveredItem && (n._hoveredItem && i.onLeave.call(n, t.native, n._hoveredItem),
                        n._hoveredItem = e),
                        i.onHover && e && i.onHover.call(n, t.native, e))
            }
        })
            , zo = {
                id: "legend",
                _element: Ho,
                beforeInit: function (t) {
                    var e = t.options.legend;
                    e && Ze(t, e)
                },
                beforeUpdate: function (t) {
                    var e = t.options.legend
                        , n = t.legend;
                    e ? (On.mergeIf(e, En.global.legend),
                        n ? (Pi.configure(t, n, e),
                            n.options = e) : Ze(t, e)) : n && (Pi.removeBox(t, n),
                                delete t.legend)
                },
                afterEvent: function (t, e) {
                    var n = t.legend;
                    n && n.handleEvent(e)
                }
            }
            , Bo = On.noop;
        En._set("global", {
            title: {
                display: !1,
                fontStyle: "bold",
                fullWidth: !0,
                padding: 10,
                position: "top",
                text: "",
                weight: 2e3
            }
        });
        var qo = Wn.extend({
            initialize: function (t) {
                var e = this;
                On.extend(e, t),
                    e.legendHitBoxes = []
            },
            beforeUpdate: Bo,
            update: function (t, e, n) {
                var i = this;
                return i.beforeUpdate(),
                    i.maxWidth = t,
                    i.maxHeight = e,
                    i.margins = n,
                    i.beforeSetDimensions(),
                    i.setDimensions(),
                    i.afterSetDimensions(),
                    i.beforeBuildLabels(),
                    i.buildLabels(),
                    i.afterBuildLabels(),
                    i.beforeFit(),
                    i.fit(),
                    i.afterFit(),
                    i.afterUpdate(),
                    i.minSize
            },
            afterUpdate: Bo,
            beforeSetDimensions: Bo,
            setDimensions: function () {
                var t = this;
                t.isHorizontal() ? (t.width = t.maxWidth,
                    t.left = 0,
                    t.right = t.width) : (t.height = t.maxHeight,
                        t.top = 0,
                        t.bottom = t.height),
                    t.paddingLeft = 0,
                    t.paddingTop = 0,
                    t.paddingRight = 0,
                    t.paddingBottom = 0,
                    t.minSize = {
                        width: 0,
                        height: 0
                    }
            },
            afterSetDimensions: Bo,
            beforeBuildLabels: Bo,
            buildLabels: Bo,
            afterBuildLabels: Bo,
            beforeFit: Bo,
            fit: function () {
                var t = this
                    , e = t.options
                    , n = e.display
                    , i = t.minSize
                    , o = On.isArray(e.text) ? e.text.length : 1
                    , r = On.options._parseFont(e)
                    , a = n ? o * r.lineHeight + 2 * e.padding : 0;
                t.isHorizontal() ? (i.width = t.maxWidth,
                    i.height = a) : (i.width = a,
                        i.height = t.maxHeight),
                    t.width = i.width,
                    t.height = i.height
            },
            afterFit: Bo,
            isHorizontal: function () {
                var t = this.options.position;
                return "top" === t || "bottom" === t
            },
            draw: function () {
                var t = this
                    , e = t.ctx
                    , n = t.options;
                if (n.display) {
                    var i, o, r, a = On.options._parseFont(n), s = a.lineHeight, l = s / 2 + n.padding, u = 0, c = t.top, d = t.left, h = t.bottom, f = t.right;
                    e.fillStyle = On.valueOrDefault(n.fontColor, En.global.defaultFontColor),
                        e.font = a.string,
                        t.isHorizontal() ? (o = d + (f - d) / 2,
                            r = c + l,
                            i = f - d) : (o = "left" === n.position ? d + l : f - l,
                                r = c + (h - c) / 2,
                                i = h - c,
                                u = Math.PI * ("left" === n.position ? -.5 : .5)),
                        e.save(),
                        e.translate(o, r),
                        e.rotate(u),
                        e.textAlign = "center",
                        e.textBaseline = "middle";
                    var p = n.text;
                    if (On.isArray(p))
                        for (var g = 0, m = 0; m < p.length; ++m)
                            e.fillText(p[m], 0, g, i),
                                g += s;
                    else
                        e.fillText(p, 0, 0, i);
                    e.restore()
                }
            }
        })
            , Vo = {
                id: "title",
                _element: qo,
                beforeInit: function (t) {
                    var e = t.options.title;
                    e && tn(t, e)
                },
                beforeUpdate: function (t) {
                    var e = t.options.title
                        , n = t.titleBlock;
                    e ? (On.mergeIf(e, En.global.title),
                        n ? (Pi.configure(t, n, e),
                            n.options = e) : tn(t, e)) : n && (Pi.removeBox(t, n),
                                delete t.titleBlock)
                }
            }
            , Uo = {}
            , Yo = $o
            , Xo = zo
            , Ko = Vo;
        Uo.filler = Yo,
            Uo.legend = Xo,
            Uo.title = Ko,
            to.helpers = On,
            function () {
                function t(t, e, n) {
                    var i;
                    return "string" == typeof t ? (i = parseInt(t, 10),
                        -1 !== t.indexOf("%") && (i = i / 100 * e.parentNode[n])) : i = t,
                        i
                }
                function e(t) {
                    return void 0 !== t && null !== t && "none" !== t
                }
                function n(n, i, o) {
                    var r = document.defaultView
                        , a = On._getParentNode(n)
                        , s = r.getComputedStyle(n)[i]
                        , l = r.getComputedStyle(a)[i]
                        , u = e(s)
                        , c = e(l)
                        , d = Number.POSITIVE_INFINITY;
                    return u || c ? Math.min(u ? t(s, n, o) : d, c ? t(l, a, o) : d) : "none"
                }
                On.where = function (t, e) {
                    if (On.isArray(t) && Array.prototype.filter)
                        return t.filter(e);
                    var n = [];
                    return On.each(t, function (t) {
                        e(t) && n.push(t)
                    }),
                        n
                }
                    ,
                    On.findIndex = Array.prototype.findIndex ? function (t, e, n) {
                        return t.findIndex(e, n)
                    }
                        : function (t, e, n) {
                            n = void 0 === n ? t : n;
                            for (var i = 0, o = t.length; i < o; ++i)
                                if (e.call(n, t[i], i, t))
                                    return i;
                            return -1
                        }
                    ,
                    On.findNextWhere = function (t, e, n) {
                        On.isNullOrUndef(n) && (n = -1);
                        for (var i = n + 1; i < t.length; i++) {
                            var o = t[i];
                            if (e(o))
                                return o
                        }
                    }
                    ,
                    On.findPreviousWhere = function (t, e, n) {
                        On.isNullOrUndef(n) && (n = t.length);
                        for (var i = n - 1; i >= 0; i--) {
                            var o = t[i];
                            if (e(o))
                                return o
                        }
                    }
                    ,
                    On.isNumber = function (t) {
                        return !isNaN(parseFloat(t)) && isFinite(t)
                    }
                    ,
                    On.almostEquals = function (t, e, n) {
                        return Math.abs(t - e) < n
                    }
                    ,
                    On.almostWhole = function (t, e) {
                        var n = Math.round(t);
                        return n - e < t && n + e > t
                    }
                    ,
                    On.max = function (t) {
                        return t.reduce(function (t, e) {
                            return isNaN(e) ? t : Math.max(t, e)
                        }, Number.NEGATIVE_INFINITY)
                    }
                    ,
                    On.min = function (t) {
                        return t.reduce(function (t, e) {
                            return isNaN(e) ? t : Math.min(t, e)
                        }, Number.POSITIVE_INFINITY)
                    }
                    ,
                    On.sign = Math.sign ? function (t) {
                        return Math.sign(t)
                    }
                        : function (t) {
                            return t = +t,
                                0 === t || isNaN(t) ? t : t > 0 ? 1 : -1
                        }
                    ,
                    On.log10 = Math.log10 ? function (t) {
                        return Math.log10(t)
                    }
                        : function (t) {
                            var e = Math.log(t) * Math.LOG10E
                                , n = Math.round(e);
                            return t === Math.pow(10, n) ? n : e
                        }
                    ,
                    On.toRadians = function (t) {
                        return t * (Math.PI / 180)
                    }
                    ,
                    On.toDegrees = function (t) {
                        return t * (180 / Math.PI)
                    }
                    ,
                    On._decimalPlaces = function (t) {
                        if (On.isFinite(t)) {
                            for (var e = 1, n = 0; Math.round(t * e) / e !== t;)
                                e *= 10,
                                    n++;
                            return n
                        }
                    }
                    ,
                    On.getAngleFromPoint = function (t, e) {
                        var n = e.x - t.x
                            , i = e.y - t.y
                            , o = Math.sqrt(n * n + i * i)
                            , r = Math.atan2(i, n);
                        return r < -.5 * Math.PI && (r += 2 * Math.PI),
                        {
                            angle: r,
                            distance: o
                        }
                    }
                    ,
                    On.distanceBetweenPoints = function (t, e) {
                        return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
                    }
                    ,
                    On.aliasPixel = function (t) {
                        return t % 2 == 0 ? 0 : .5
                    }
                    ,
                    On._alignPixel = function (t, e, n) {
                        var i = t.currentDevicePixelRatio
                            , o = n / 2;
                        return Math.round((e - o) * i) / i + o
                    }
                    ,
                    On.splineCurve = function (t, e, n, i) {
                        var o = t.skip ? e : t
                            , r = e
                            , a = n.skip ? e : n
                            , s = Math.sqrt(Math.pow(r.x - o.x, 2) + Math.pow(r.y - o.y, 2))
                            , l = Math.sqrt(Math.pow(a.x - r.x, 2) + Math.pow(a.y - r.y, 2))
                            , u = s / (s + l)
                            , c = l / (s + l);
                        u = isNaN(u) ? 0 : u,
                            c = isNaN(c) ? 0 : c;
                        var d = i * u
                            , h = i * c;
                        return {
                            previous: {
                                x: r.x - d * (a.x - o.x),
                                y: r.y - d * (a.y - o.y)
                            },
                            next: {
                                x: r.x + h * (a.x - o.x),
                                y: r.y + h * (a.y - o.y)
                            }
                        }
                    }
                    ,
                    On.EPSILON = Number.EPSILON || 1e-14,
                    On.splineCurveMonotone = function (t) {
                        var e, n, i, o, r = (t || []).map(function (t) {
                            return {
                                model: t._model,
                                deltaK: 0,
                                mK: 0
                            }
                        }), a = r.length;
                        for (e = 0; e < a; ++e)
                            if (i = r[e],
                                !i.model.skip) {
                                if (n = e > 0 ? r[e - 1] : null,
                                    (o = e < a - 1 ? r[e + 1] : null) && !o.model.skip) {
                                    var s = o.model.x - i.model.x;
                                    i.deltaK = 0 !== s ? (o.model.y - i.model.y) / s : 0
                                }
                                !n || n.model.skip ? i.mK = i.deltaK : !o || o.model.skip ? i.mK = n.deltaK : this.sign(n.deltaK) !== this.sign(i.deltaK) ? i.mK = 0 : i.mK = (n.deltaK + i.deltaK) / 2
                            }
                        var l, u, c, d;
                        for (e = 0; e < a - 1; ++e)
                            i = r[e],
                                o = r[e + 1],
                                i.model.skip || o.model.skip || (On.almostEquals(i.deltaK, 0, this.EPSILON) ? i.mK = o.mK = 0 : (l = i.mK / i.deltaK,
                                    u = o.mK / i.deltaK,
                                    (d = Math.pow(l, 2) + Math.pow(u, 2)) <= 9 || (c = 3 / Math.sqrt(d),
                                        i.mK = l * c * i.deltaK,
                                        o.mK = u * c * i.deltaK)));
                        var h;
                        for (e = 0; e < a; ++e)
                            i = r[e],
                                i.model.skip || (n = e > 0 ? r[e - 1] : null,
                                    o = e < a - 1 ? r[e + 1] : null,
                                    n && !n.model.skip && (h = (i.model.x - n.model.x) / 3,
                                        i.model.controlPointPreviousX = i.model.x - h,
                                        i.model.controlPointPreviousY = i.model.y - h * i.mK),
                                    o && !o.model.skip && (h = (o.model.x - i.model.x) / 3,
                                        i.model.controlPointNextX = i.model.x + h,
                                        i.model.controlPointNextY = i.model.y + h * i.mK))
                    }
                    ,
                    On.nextItem = function (t, e, n) {
                        return n ? e >= t.length - 1 ? t[0] : t[e + 1] : e >= t.length - 1 ? t[t.length - 1] : t[e + 1]
                    }
                    ,
                    On.previousItem = function (t, e, n) {
                        return n ? e <= 0 ? t[t.length - 1] : t[e - 1] : e <= 0 ? t[0] : t[e - 1]
                    }
                    ,
                    On.niceNum = function (t, e) {
                        var n = Math.floor(On.log10(t))
                            , i = t / Math.pow(10, n);
                        return (e ? i < 1.5 ? 1 : i < 3 ? 2 : i < 7 ? 5 : 10 : i <= 1 ? 1 : i <= 2 ? 2 : i <= 5 ? 5 : 10) * Math.pow(10, n)
                    }
                    ,
                    On.requestAnimFrame = function () {
                        return "undefined" == typeof window ? function (t) {
                            t()
                        }
                            : window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t) {
                                return window.setTimeout(t, 1e3 / 60)
                            }
                    }(),
                    On.getRelativePosition = function (t, e) {
                        var n, i, o = t.originalEvent || t, r = t.target || t.srcElement, a = r.getBoundingClientRect(), s = o.touches;
                        s && s.length > 0 ? (n = s[0].clientX,
                            i = s[0].clientY) : (n = o.clientX,
                                i = o.clientY);
                        var l = parseFloat(On.getStyle(r, "padding-left"))
                            , u = parseFloat(On.getStyle(r, "padding-top"))
                            , c = parseFloat(On.getStyle(r, "padding-right"))
                            , d = parseFloat(On.getStyle(r, "padding-bottom"))
                            , h = a.right - a.left - l - c
                            , f = a.bottom - a.top - u - d;
                        return n = Math.round((n - a.left - l) / h * r.width / e.currentDevicePixelRatio),
                            i = Math.round((i - a.top - u) / f * r.height / e.currentDevicePixelRatio),
                        {
                            x: n,
                            y: i
                        }
                    }
                    ,
                    On.getConstraintWidth = function (t) {
                        return n(t, "max-width", "clientWidth")
                    }
                    ,
                    On.getConstraintHeight = function (t) {
                        return n(t, "max-height", "clientHeight")
                    }
                    ,
                    On._calculatePadding = function (t, e, n) {
                        return e = On.getStyle(t, e),
                            e.indexOf("%") > -1 ? n * parseInt(e, 10) / 100 : parseInt(e, 10)
                    }
                    ,
                    On._getParentNode = function (t) {
                        var e = t.parentNode;
                        return e && "[object ShadowRoot]" === e.toString() && (e = e.host),
                            e
                    }
                    ,
                    On.getMaximumWidth = function (t) {
                        var e = On._getParentNode(t);
                        if (!e)
                            return t.clientWidth;
                        var n = e.clientWidth
                            , i = On._calculatePadding(e, "padding-left", n)
                            , o = On._calculatePadding(e, "padding-right", n)
                            , r = n - i - o
                            , a = On.getConstraintWidth(t);
                        return isNaN(a) ? r : Math.min(r, a)
                    }
                    ,
                    On.getMaximumHeight = function (t) {
                        var e = On._getParentNode(t);
                        if (!e)
                            return t.clientHeight;
                        var n = e.clientHeight
                            , i = On._calculatePadding(e, "padding-top", n)
                            , o = On._calculatePadding(e, "padding-bottom", n)
                            , r = n - i - o
                            , a = On.getConstraintHeight(t);
                        return isNaN(a) ? r : Math.min(r, a)
                    }
                    ,
                    On.getStyle = function (t, e) {
                        return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, null).getPropertyValue(e)
                    }
                    ,
                    On.retinaScale = function (t, e) {
                        var n = t.currentDevicePixelRatio = e || "undefined" != typeof window && window.devicePixelRatio || 1;
                        if (1 !== n) {
                            var i = t.canvas
                                , o = t.height
                                , r = t.width;
                            i.height = o * n,
                                i.width = r * n,
                                t.ctx.scale(n, n),
                                i.style.height || i.style.width || (i.style.height = o + "px",
                                    i.style.width = r + "px")
                        }
                    }
                    ,
                    On.fontString = function (t, e, n) {
                        return e + " " + t + "px " + n
                    }
                    ,
                    On.longestText = function (t, e, n, i) {
                        i = i || {};
                        var o = i.data = i.data || {}
                            , r = i.garbageCollect = i.garbageCollect || [];
                        i.font !== e && (o = i.data = {},
                            r = i.garbageCollect = [],
                            i.font = e),
                            t.font = e;
                        var a = 0;
                        On.each(n, function (e) {
                            void 0 !== e && null !== e && !0 !== On.isArray(e) ? a = On.measureText(t, o, r, a, e) : On.isArray(e) && On.each(e, function (e) {
                                void 0 === e || null === e || On.isArray(e) || (a = On.measureText(t, o, r, a, e))
                            })
                        });
                        var s = r.length / 2;
                        if (s > n.length) {
                            for (var l = 0; l < s; l++)
                                delete o[r[l]];
                            r.splice(0, s)
                        }
                        return a
                    }
                    ,
                    On.measureText = function (t, e, n, i, o) {
                        var r = e[o];
                        return r || (r = e[o] = t.measureText(o).width,
                            n.push(o)),
                            r > i && (i = r),
                            i
                    }
                    ,
                    On.numberOfLabelLines = function (t) {
                        var e = 1;
                        return On.each(t, function (t) {
                            On.isArray(t) && t.length > e && (e = t.length)
                        }),
                            e
                    }
                    ,
                    On.color = yn ? function (t) {
                        return t instanceof CanvasGradient && (t = En.global.defaultColor),
                            yn(t)
                    }
                        : function (t) {
                            return t
                        }
                    ,
                    On.getHoverColor = function (t) {
                        return t instanceof CanvasPattern || t instanceof CanvasGradient ? t : On.color(t).saturate(.5).darken(.1).rgbString()
                    }
            }(),
            to._adapters = no,
            to.Animation = zn,
            to.animationService = Bn,
            to.controllers = _i,
            to.DatasetController = Yn,
            to.defaults = En,
            to.Element = Wn,
            to.elements = ii,
            to.Interaction = Di,
            to.layouts = Pi,
            to.platform = qi,
            to.plugins = Vi,
            to.Scale = ao,
            to.scaleService = Ui,
            to.Ticks = io,
            to.Tooltip = Gi,
            to.helpers.each(Oo, function (t, e) {
                to.scaleService.registerScaleType(e, t, t._defaults)
            });
        for (var Qo in Uo)
            Uo.hasOwnProperty(Qo) && to.plugins.register(Uo[Qo]);
        to.platform.initialize();
        var Go = to;
        return "undefined" != typeof window && (window.Chart = to),
            to.Chart = to,
            to.Legend = Uo.legend._element,
            to.Title = Uo.title._element,
            to.pluginService = to.plugins,
            to.PluginBase = to.Element.extend({}),
            to.canvasHelpers = to.helpers.canvas,
            to.layoutService = to.layouts,
            to.LinearScaleBase = fo,
            to.helpers.each(["Bar", "Bubble", "Doughnut", "Line", "PolarArea", "Radar", "Scatter"], function (t) {
                to[t] = function (e, n) {
                    return new to(e, to.helpers.merge(n || {}, {
                        type: t.charAt(0).toLowerCase() + t.slice(1)
                    }))
                }
            }),
            Go
    }),
    function () {
        var t, e, n, i, o, r, a, s, l, u, c, d, h, f, p, g, m, v, y, b, x, w, k, C, T, S, M, A, _, D, P, I, E, N, L, O, R, F, $, j, W, H, z, B, q, V, U, Y, X, K = [].slice, Q = {}.hasOwnProperty, G = function (t, e) {
            function n() {
                this.constructor = t
            }
            for (var i in e)
                Q.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype,
                t.prototype = new n,
                t.__super__ = e.prototype,
                t
        }, J = [].indexOf || function (t) {
            for (var e = 0, n = this.length; e < n; e++)
                if (e in this && this[e] === t)
                    return e;
            return -1
        }
            ;
        for (x = {
            catchupTime: 100,
            initialRate: .03,
            minTime: 250,
            ghostTime: 100,
            maxProgressPerFrame: 20,
            easeFactor: 1.25,
            startOnPageLoad: !0,
            restartOnPushState: !0,
            restartOnRequestAfter: 500,
            target: "body",
            elements: {
                checkInterval: 100,
                selectors: ["body"]
            },
            eventLag: {
                minSamples: 10,
                sampleCount: 3,
                lagThreshold: 3
            },
            ajax: {
                trackMethods: ["GET"],
                trackWebSockets: !0,
                ignoreURLs: []
            }
        },
            _ = function () {
                var t;
                return null != (t = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance.now() : void 0) ? t : +new Date
            }
            ,
            P = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame,
            b = window.cancelAnimationFrame || window.mozCancelAnimationFrame,
            null == P && (P = function (t) {
                return setTimeout(t, 50)
            }
                ,
                b = function (t) {
                    return clearTimeout(t)
                }
            ),
            E = function (t) {
                var e, n;
                return e = _(),
                    (n = function () {
                        var i;
                        return i = _() - e,
                            i >= 33 ? (e = _(),
                                t(i, function () {
                                    return P(n)
                                })) : setTimeout(n, 33 - i)
                    }
                    )()
            }
            ,
            I = function () {
                var t, e, n;
                return n = arguments[0],
                    e = arguments[1],
                    t = 3 <= arguments.length ? K.call(arguments, 2) : [],
                    "function" == typeof n[e] ? n[e].apply(n, t) : n[e]
            }
            ,
            w = function () {
                var t, e, n, i, o, r, a;
                for (e = arguments[0],
                    i = 2 <= arguments.length ? K.call(arguments, 1) : [],
                    r = 0,
                    a = i.length; r < a; r++)
                    if (n = i[r])
                        for (t in n)
                            Q.call(n, t) && (o = n[t],
                                null != e[t] && "object" == typeof e[t] && null != o && "object" == typeof o ? w(e[t], o) : e[t] = o);
                return e
            }
            ,
            m = function (t) {
                var e, n, i, o, r;
                for (n = e = 0,
                    o = 0,
                    r = t.length; o < r; o++)
                    i = t[o],
                        n += Math.abs(i),
                        e++;
                return n / e
            }
            ,
            C = function (t, e) {
                var n, i;
                if (null == t && (t = "options"),
                    null == e && (e = !0),
                    i = document.querySelector("[data-pace-" + t + "]")) {
                    if (n = i.getAttribute("data-pace-" + t),
                        !e)
                        return n;
                    try {
                        return JSON.parse(n)
                    } catch (t) {
                        return t,
                            void ("undefined" != typeof console && console)
                    }
                }
            }
            ,
            a = function () {
                function t() { }
                return t.prototype.on = function (t, e, n, i) {
                    var o;
                    return null == i && (i = !1),
                        null == this.bindings && (this.bindings = {}),
                        null == (o = this.bindings)[t] && (o[t] = []),
                        this.bindings[t].push({
                            handler: e,
                            ctx: n,
                            once: i
                        })
                }
                    ,
                    t.prototype.once = function (t, e, n) {
                        return this.on(t, e, n, !0)
                    }
                    ,
                    t.prototype.off = function (t, e) {
                        var n, i, o;
                        if (null != (null != (i = this.bindings) ? i[t] : void 0)) {
                            if (null == e)
                                return delete this.bindings[t];
                            for (n = 0,
                                o = []; n < this.bindings[t].length;)
                                this.bindings[t][n].handler === e ? o.push(this.bindings[t].splice(n, 1)) : o.push(n++);
                            return o
                        }
                    }
                    ,
                    t.prototype.trigger = function () {
                        var t, e, n, i, o, r, a, s, l;
                        if (n = arguments[0],
                            t = 2 <= arguments.length ? K.call(arguments, 1) : [],
                            null != (a = this.bindings) ? a[n] : void 0) {
                            for (o = 0,
                                l = []; o < this.bindings[n].length;)
                                s = this.bindings[n][o],
                                    i = s.handler,
                                    e = s.ctx,
                                    r = s.once,
                                    i.apply(null != e ? e : this, t),
                                    r ? l.push(this.bindings[n].splice(o, 1)) : l.push(o++);
                            return l
                        }
                    }
                    ,
                    t
            }(),
            u = window.Pace || {},
            window.Pace = u,
            w(u, a.prototype),
            D = u.options = w({}, x, window.paceOptions, C()),
            U = ["ajax", "document", "eventLag", "elements"],
            z = 0,
            q = U.length; z < q; z++)
            R = U[z],
                !0 === D[R] && (D[R] = x[R]);
        l = function (t) {
            function e() {
                return Y = e.__super__.constructor.apply(this, arguments)
            }
            return G(e, t),
                e
        }(Error),
            e = function () {
                function t() {
                    this.progress = 0
                }
                return t.prototype.getElement = function () {
                    var t;
                    if (null == this.el) {
                        if (!(t = document.querySelector(D.target)))
                            throw new l;
                        this.el = document.createElement("div"),
                            this.el.className = "pace pace-active",
                            document.body.className = document.body.className.replace(/pace-done/g, ""),
                            document.body.className += " pace-running",
                            this.el.innerHTML = '<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>',
                            null != t.firstChild ? t.insertBefore(this.el, t.firstChild) : t.appendChild(this.el)
                    }
                    return this.el
                }
                    ,
                    t.prototype.finish = function () {
                        var t;
                        return t = this.getElement(),
                            t.className = t.className.replace("pace-active", ""),
                            t.className += " pace-inactive",
                            document.body.className = document.body.className.replace("pace-running", ""),
                            document.body.className += " pace-done"
                    }
                    ,
                    t.prototype.update = function (t) {
                        return this.progress = t,
                            this.render()
                    }
                    ,
                    t.prototype.destroy = function () {
                        try {
                            this.getElement().parentNode.removeChild(this.getElement())
                        } catch (t) {
                            l = t
                        }
                        return this.el = void 0
                    }
                    ,
                    t.prototype.render = function () {
                        var t, e, n, i, o, r, a;
                        if (null == document.querySelector(D.target))
                            return !1;
                        for (t = this.getElement(),
                            i = "translate3d(" + this.progress + "%, 0, 0)",
                            a = ["webkitTransform", "msTransform", "transform"],
                            o = 0,
                            r = a.length; o < r; o++)
                            e = a[o],
                                t.children[0].style[e] = i;
                        return (!this.lastRenderedProgress || this.lastRenderedProgress | 0 !== this.progress | 0) && (t.children[0].setAttribute("data-progress-text", (0 | this.progress) + "%"),
                            this.progress >= 100 ? n = "99" : (n = this.progress < 10 ? "0" : "",
                                n += 0 | this.progress),
                            t.children[0].setAttribute("data-progress", "" + n)),
                            this.lastRenderedProgress = this.progress
                    }
                    ,
                    t.prototype.done = function () {
                        return this.progress >= 100
                    }
                    ,
                    t
            }(),
            s = function () {
                function t() {
                    this.bindings = {}
                }
                return t.prototype.trigger = function (t, e) {
                    var n, i, o, r, a;
                    if (null != this.bindings[t]) {
                        for (r = this.bindings[t],
                            a = [],
                            i = 0,
                            o = r.length; i < o; i++)
                            n = r[i],
                                a.push(n.call(this, e));
                        return a
                    }
                }
                    ,
                    t.prototype.on = function (t, e) {
                        var n;
                        return null == (n = this.bindings)[t] && (n[t] = []),
                            this.bindings[t].push(e)
                    }
                    ,
                    t
            }(),
            H = window.XMLHttpRequest,
            W = window.XDomainRequest,
            j = window.WebSocket,
            k = function (t, e) {
                var n, i;
                i = [];
                for (n in e.prototype)
                    try {
                        null == t[n] && "function" != typeof e[n] ? "function" == typeof Object.defineProperty ? i.push(Object.defineProperty(t, n, {
                            get: function () {
                                return e.prototype[n]
                            },
                            configurable: !0,
                            enumerable: !0
                        })) : i.push(t[n] = e.prototype[n]) : i.push(void 0)
                    } catch (t) {
                        t
                    }
                return i
            }
            ,
            M = [],
            u.ignore = function () {
                var t, e, n;
                return e = arguments[0],
                    t = 2 <= arguments.length ? K.call(arguments, 1) : [],
                    M.unshift("ignore"),
                    n = e.apply(null, t),
                    M.shift(),
                    n
            }
            ,
            u.track = function () {
                var t, e, n;
                return e = arguments[0],
                    t = 2 <= arguments.length ? K.call(arguments, 1) : [],
                    M.unshift("track"),
                    n = e.apply(null, t),
                    M.shift(),
                    n
            }
            ,
            O = function (t) {
                var e;
                if (null == t && (t = "GET"),
                    "track" === M[0])
                    return "force";
                if (!M.length && D.ajax) {
                    if ("socket" === t && D.ajax.trackWebSockets)
                        return !0;
                    if (e = t.toUpperCase(),
                        J.call(D.ajax.trackMethods, e) >= 0)
                        return !0
                }
                return !1
            }
            ,
            c = function (t) {
                function e() {
                    var t, n = this;
                    e.__super__.constructor.apply(this, arguments),
                        t = function (t) {
                            var e;
                            return e = t.open,
                                t.open = function (i, o, r) {
                                    return O(i) && n.trigger("request", {
                                        type: i,
                                        url: o,
                                        request: t
                                    }),
                                        e.apply(t, arguments)
                                }
                        }
                        ,
                        window.XMLHttpRequest = function (e) {
                            var n;
                            return n = new H(e),
                                t(n),
                                n
                        }
                        ;
                    try {
                        k(window.XMLHttpRequest, H)
                    } catch (t) { }
                    if (null != W) {
                        window.XDomainRequest = function () {
                            var e;
                            return e = new W,
                                t(e),
                                e
                        }
                            ;
                        try {
                            k(window.XDomainRequest, W)
                        } catch (t) { }
                    }
                    if (null != j && D.ajax.trackWebSockets) {
                        window.WebSocket = function (t, e) {
                            var i;
                            return i = null != e ? new j(t, e) : new j(t),
                                O("socket") && n.trigger("request", {
                                    type: "socket",
                                    url: t,
                                    protocols: e,
                                    request: i
                                }),
                                i
                        }
                            ;
                        try {
                            k(window.WebSocket, j)
                        } catch (t) { }
                    }
                }
                return G(e, t),
                    e
            }(s),
            B = null,
            T = function () {
                return null == B && (B = new c),
                    B
            }
            ,
            L = function (t) {
                var e, n, i, o;
                for (o = D.ajax.ignoreURLs,
                    n = 0,
                    i = o.length; n < i; n++)
                    if ("string" == typeof (e = o[n])) {
                        if (-1 !== t.indexOf(e))
                            return !0
                    } else if (e.test(t))
                        return !0;
                return !1
            }
            ,
            T().on("request", function (e) {
                var n, i, o, r, a;
                if (r = e.type,
                    o = e.request,
                    a = e.url,
                    !L(a))
                    return u.running || !1 === D.restartOnRequestAfter && "force" !== O(r) ? void 0 : (i = arguments,
                        n = D.restartOnRequestAfter || 0,
                        "boolean" == typeof n && (n = 0),
                        setTimeout(function () {
                            var e, n, a, s, l;
                            if ("socket" === r ? o.readyState < 2 : 0 < (a = o.readyState) && a < 4) {
                                for (u.restart(),
                                    s = u.sources,
                                    l = [],
                                    e = 0,
                                    n = s.length; e < n; e++) {
                                    if ((R = s[e]) instanceof t) {
                                        R.watch.apply(R, i);
                                        break
                                    }
                                    l.push(void 0)
                                }
                                return l
                            }
                        }, n))
            }),
            t = function () {
                function t() {
                    var t = this;
                    this.elements = [],
                        T().on("request", function () {
                            return t.watch.apply(t, arguments)
                        })
                }
                return t.prototype.watch = function (t) {
                    var e, n, i, o;
                    if (i = t.type,
                        e = t.request,
                        o = t.url,
                        !L(o))
                        return n = "socket" === i ? new f(e) : new p(e),
                            this.elements.push(n)
                }
                    ,
                    t
            }(),
            p = function () {
                function t(t) {
                    var e, n, i, o, r, a = this;
                    if (this.progress = 0,
                        null != window.ProgressEvent)
                        for (null,
                            t.addEventListener("progress", function (t) {
                                return t.lengthComputable ? a.progress = 100 * t.loaded / t.total : a.progress = a.progress + (100 - a.progress) / 2
                            }, !1),
                            r = ["load", "abort", "timeout", "error"],
                            n = 0,
                            i = r.length; n < i; n++)
                            e = r[n],
                                t.addEventListener(e, function () {
                                    return a.progress = 100
                                }, !1);
                    else
                        o = t.onreadystatechange,
                            t.onreadystatechange = function () {
                                var e;
                                return 0 === (e = t.readyState) || 4 === e ? a.progress = 100 : 3 === t.readyState && (a.progress = 50),
                                    "function" == typeof o ? o.apply(null, arguments) : void 0
                            }
                }
                return t
            }(),
            f = function () {
                function t(t) {
                    var e, n, i, o, r = this;
                    for (this.progress = 0,
                        o = ["error", "open"],
                        n = 0,
                        i = o.length; n < i; n++)
                        e = o[n],
                            t.addEventListener(e, function () {
                                return r.progress = 100
                            }, !1)
                }
                return t
            }(),
            i = function () {
                function t(t) {
                    var e, n, i, r;
                    for (null == t && (t = {}),
                        this.elements = [],
                        null == t.selectors && (t.selectors = []),
                        r = t.selectors,
                        n = 0,
                        i = r.length; n < i; n++)
                        e = r[n],
                            this.elements.push(new o(e))
                }
                return t
            }(),
            o = function () {
                function t(t) {
                    this.selector = t,
                        this.progress = 0,
                        this.check()
                }
                return t.prototype.check = function () {
                    var t = this;
                    return document.querySelector(this.selector) ? this.done() : setTimeout(function () {
                        return t.check()
                    }, D.elements.checkInterval)
                }
                    ,
                    t.prototype.done = function () {
                        return this.progress = 100
                    }
                    ,
                    t
            }(),
            n = function () {
                function t() {
                    var t, e, n = this;
                    this.progress = null != (e = this.states[document.readyState]) ? e : 100,
                        t = document.onreadystatechange,
                        document.onreadystatechange = function () {
                            return null != n.states[document.readyState] && (n.progress = n.states[document.readyState]),
                                "function" == typeof t ? t.apply(null, arguments) : void 0
                        }
                }
                return t.prototype.states = {
                    loading: 0,
                    interactive: 50,
                    complete: 100
                },
                    t
            }(),
            r = function () {
                function t() {
                    var t, e, n, i, o, r = this;
                    this.progress = 0,
                        t = 0,
                        o = [],
                        i = 0,
                        n = _(),
                        e = setInterval(function () {
                            var a;
                            return a = _() - n - 50,
                                n = _(),
                                o.push(a),
                                o.length > D.eventLag.sampleCount && o.shift(),
                                t = m(o),
                                ++i >= D.eventLag.minSamples && t < D.eventLag.lagThreshold ? (r.progress = 100,
                                    clearInterval(e)) : r.progress = 3 / (t + 3) * 100
                        }, 50)
                }
                return t
            }(),
            h = function () {
                function t(t) {
                    this.source = t,
                        this.last = this.sinceLastUpdate = 0,
                        this.rate = D.initialRate,
                        this.catchup = 0,
                        this.progress = this.lastProgress = 0,
                        null != this.source && (this.progress = I(this.source, "progress"))
                }
                return t.prototype.tick = function (t, e) {
                    var n;
                    return null == e && (e = I(this.source, "progress")),
                        e >= 100 && (this.done = !0),
                        e === this.last ? this.sinceLastUpdate += t : (this.sinceLastUpdate && (this.rate = (e - this.last) / this.sinceLastUpdate),
                            this.catchup = (e - this.progress) / D.catchupTime,
                            this.sinceLastUpdate = 0,
                            this.last = e),
                        e > this.progress && (this.progress += this.catchup * t),
                        n = 1 - Math.pow(this.progress / 100, D.easeFactor),
                        this.progress += n * this.rate * t,
                        this.progress = Math.min(this.lastProgress + D.maxProgressPerFrame, this.progress),
                        this.progress = Math.max(0, this.progress),
                        this.progress = Math.min(100, this.progress),
                        this.lastProgress = this.progress,
                        this.progress
                }
                    ,
                    t
            }(),
            F = null,
            N = null,
            v = null,
            $ = null,
            g = null,
            y = null,
            u.running = !1,
            S = function () {
                if (D.restartOnPushState)
                    return u.restart()
            }
            ,
            null != window.history.pushState && (V = window.history.pushState,
                window.history.pushState = function () {
                    return S(),
                        V.apply(window.history, arguments)
                }
            ),
            null != window.history.replaceState && (X = window.history.replaceState,
                window.history.replaceState = function () {
                    return S(),
                        X.apply(window.history, arguments)
                }
            ),
            d = {
                ajax: t,
                elements: i,
                document: n,
                eventLag: r
            },
            (A = function () {
                var t, n, i, o, r, a, s, l;
                for (u.sources = F = [],
                    a = ["ajax", "elements", "document", "eventLag"],
                    n = 0,
                    o = a.length; n < o; n++)
                    t = a[n],
                        !1 !== D[t] && F.push(new d[t](D[t]));
                for (l = null != (s = D.extraSources) ? s : [],
                    i = 0,
                    r = l.length; i < r; i++)
                    R = l[i],
                        F.push(new R(D));
                return u.bar = v = new e,
                    N = [],
                    $ = new h
            }
            )(),
            u.stop = function () {
                return u.trigger("stop"),
                    u.running = !1,
                    v.destroy(),
                    y = !0,
                    null != g && ("function" == typeof b && b(g),
                        g = null),
                    A()
            }
            ,
            u.restart = function () {
                return u.trigger("restart"),
                    u.stop(),
                    u.start()
            }
            ,
            u.go = function () {
                var t;
                return u.running = !0,
                    v.render(),
                    t = _(),
                    y = !1,
                    g = E(function (e, n) {
                        var i, o, r, a, s, l, c, d, f, p, g, m, b, x, w;
                        for (100 - v.progress,
                            o = p = 0,
                            r = !0,
                            l = g = 0,
                            b = F.length; g < b; l = ++g)
                            for (R = F[l],
                                f = null != N[l] ? N[l] : N[l] = [],
                                s = null != (w = R.elements) ? w : [R],
                                c = m = 0,
                                x = s.length; m < x; c = ++m)
                                a = s[c],
                                    d = null != f[c] ? f[c] : f[c] = new h(a),
                                    r &= d.done,
                                    d.done || (o++,
                                        p += d.tick(e));
                        return i = p / o,
                            v.update($.tick(e, i)),
                            v.done() || r || y ? (v.update(100),
                                u.trigger("done"),
                                setTimeout(function () {
                                    return v.finish(),
                                        u.running = !1,
                                        u.trigger("hide")
                                }, Math.max(D.ghostTime, Math.max(D.minTime - (_() - t), 0)))) : n()
                    })
            }
            ,
            u.start = function (t) {
                w(D, t),
                    u.running = !0;
                try {
                    v.render()
                } catch (t) {
                    l = t
                }
                return document.querySelector(".pace") ? (u.trigger("start"),
                    u.go()) : setTimeout(u.start, 50)
            }
            ,
            "function" == typeof define && define.amd ? define(["pace"], function () {
                return u
            }) : "object" == typeof exports ? module.exports = u : D.startOnPageLoad && u.start()
    }
        .call(this),
    function () {
        var t, e, n, i, o, r = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }, a = [].indexOf || function (t) {
            for (var e = 0, n = this.length; e < n; e++)
                if (e in this && this[e] === t)
                    return e;
            return -1
        }
            ;
        e = function () {
            function t() { }
            return t.prototype.extend = function (t, e) {
                var n, i;
                for (n in e)
                    i = e[n],
                        null == t[n] && (t[n] = i);
                return t
            }
                ,
                t.prototype.isMobile = function (t) {
                    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)
                }
                ,
                t.prototype.createEvent = function (t, e, n, i) {
                    var o;
                    return null == e && (e = !1),
                        null == n && (n = !1),
                        null == i && (i = null),
                        null != document.createEvent ? (o = document.createEvent("CustomEvent"),
                            o.initCustomEvent(t, e, n, i)) : null != document.createEventObject ? (o = document.createEventObject(),
                                o.eventType = t) : o.eventName = t,
                        o
                }
                ,
                t.prototype.emitEvent = function (t, e) {
                    return null != t.dispatchEvent ? t.dispatchEvent(e) : e in (null != t) ? t[e]() : "on" + e in (null != t) ? t["on" + e]() : void 0
                }
                ,
                t.prototype.addEvent = function (t, e, n) {
                    return null != t.addEventListener ? t.addEventListener(e, n, !1) : null != t.attachEvent ? t.attachEvent("on" + e, n) : t[e] = n
                }
                ,
                t.prototype.removeEvent = function (t, e, n) {
                    return null != t.removeEventListener ? t.removeEventListener(e, n, !1) : null != t.detachEvent ? t.detachEvent("on" + e, n) : delete t[e]
                }
                ,
                t.prototype.innerHeight = function () {
                    return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
                }
                ,
                t
        }(),
            n = this.WeakMap || this.MozWeakMap || (n = function () {
                function t() {
                    this.keys = [],
                        this.values = []
                }
                return t.prototype.get = function (t) {
                    var e, n, i, o;
                    for (o = this.keys,
                        e = n = 0,
                        i = o.length; n < i; e = ++n)
                        if (o[e] === t)
                            return this.values[e]
                }
                    ,
                    t.prototype.set = function (t, e) {
                        var n, i, o, r;
                        for (r = this.keys,
                            n = i = 0,
                            o = r.length; i < o; n = ++i)
                            if (r[n] === t)
                                return void (this.values[n] = e);
                        return this.keys.push(t),
                            this.values.push(e)
                    }
                    ,
                    t
            }()),
            t = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (t = function () {
                function t() {
                    "undefined" != typeof console && console,
                        "undefined" != typeof console && console
                }
                return t.notSupported = !0,
                    t.prototype.observe = function () { }
                    ,
                    t
            }()),
            i = this.getComputedStyle || function (t, e) {
                return this.getPropertyValue = function (e) {
                    var n;
                    return "float" === e && (e = "styleFloat"),
                        o.test(e) && e.replace(o, function (t, e) {
                            return e.toUpperCase()
                        }),
                        (null != (n = t.currentStyle) ? n[e] : void 0) || null
                }
                    ,
                    this
            }
            ,
            o = /(\-([a-z]){1})/g,
            this.WOW = function () {
                function o(t) {
                    null == t && (t = {}),
                        this.scrollCallback = r(this.scrollCallback, this),
                        this.scrollHandler = r(this.scrollHandler, this),
                        this.resetAnimation = r(this.resetAnimation, this),
                        this.start = r(this.start, this),
                        this.scrolled = !0,
                        this.config = this.util().extend(t, this.defaults),
                        null != t.scrollContainer && (this.config.scrollContainer = document.querySelector(t.scrollContainer)),
                        this.animationNameCache = new n,
                        this.wowEvent = this.util().createEvent(this.config.boxClass)
                }
                return o.prototype.defaults = {
                    boxClass: "wow",
                    animateClass: "animated",
                    offset: 0,
                    mobile: !0,
                    live: !0,
                    callback: null,
                    scrollContainer: null
                },
                    o.prototype.init = function () {
                        var t;
                        return this.element = window.document.documentElement,
                            "interactive" === (t = document.readyState) || "complete" === t ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start),
                            this.finished = []
                    }
                    ,
                    o.prototype.start = function () {
                        var e, n, i, o;
                        if (this.stopped = !1,
                            this.boxes = function () {
                                var t, n, i, o;
                                for (i = this.element.querySelectorAll("." + this.config.boxClass),
                                    o = [],
                                    t = 0,
                                    n = i.length; t < n; t++)
                                    e = i[t],
                                        o.push(e);
                                return o
                            }
                                .call(this),
                            this.all = function () {
                                var t, n, i, o;
                                for (i = this.boxes,
                                    o = [],
                                    t = 0,
                                    n = i.length; t < n; t++)
                                    e = i[t],
                                        o.push(e);
                                return o
                            }
                                .call(this),
                            this.boxes.length)
                            if (this.disabled())
                                this.resetStyle();
                            else
                                for (o = this.boxes,
                                    n = 0,
                                    i = o.length; n < i; n++)
                                    e = o[n],
                                        this.applyStyle(e, !0);
                        if (this.disabled() || (this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler),
                            this.util().addEvent(window, "resize", this.scrollHandler),
                            this.interval = setInterval(this.scrollCallback, 50)),
                            this.config.live)
                            return new t(function (t) {
                                return function (e) {
                                    var n, i, o, r, a;
                                    for (a = [],
                                        n = 0,
                                        i = e.length; n < i; n++)
                                        r = e[n],
                                            a.push(function () {
                                                var t, e, n, i;
                                                for (n = r.addedNodes || [],
                                                    i = [],
                                                    t = 0,
                                                    e = n.length; t < e; t++)
                                                    o = n[t],
                                                        i.push(this.doSync(o));
                                                return i
                                            }
                                                .call(t));
                                    return a
                                }
                            }(this)).observe(document.body, {
                                childList: !0,
                                subtree: !0
                            })
                    }
                    ,
                    o.prototype.stop = function () {
                        if (this.stopped = !0,
                            this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler),
                            this.util().removeEvent(window, "resize", this.scrollHandler),
                            null != this.interval)
                            return clearInterval(this.interval)
                    }
                    ,
                    o.prototype.sync = function (e) {
                        if (t.notSupported)
                            return this.doSync(this.element)
                    }
                    ,
                    o.prototype.doSync = function (t) {
                        var e, n, i, o, r;
                        if (null == t && (t = this.element),
                            1 === t.nodeType) {
                            for (t = t.parentNode || t,
                                o = t.querySelectorAll("." + this.config.boxClass),
                                r = [],
                                n = 0,
                                i = o.length; n < i; n++)
                                e = o[n],
                                    a.call(this.all, e) < 0 ? (this.boxes.push(e),
                                        this.all.push(e),
                                        this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(e, !0),
                                        r.push(this.scrolled = !0)) : r.push(void 0);
                            return r
                        }
                    }
                    ,
                    o.prototype.show = function (t) {
                        return this.applyStyle(t),
                            t.className = t.className + " " + this.config.animateClass,
                            null != this.config.callback && this.config.callback(t),
                            this.util().emitEvent(t, this.wowEvent),
                            this.util().addEvent(t, "animationend", this.resetAnimation),
                            this.util().addEvent(t, "oanimationend", this.resetAnimation),
                            this.util().addEvent(t, "webkitAnimationEnd", this.resetAnimation),
                            this.util().addEvent(t, "MSAnimationEnd", this.resetAnimation),
                            t
                    }
                    ,
                    o.prototype.applyStyle = function (t, e) {
                        var n, i, o;
                        return i = t.getAttribute("data-wow-duration"),
                            n = t.getAttribute("data-wow-delay"),
                            o = t.getAttribute("data-wow-iteration"),
                            this.animate(function (r) {
                                return function () {
                                    return r.customStyle(t, e, i, n, o)
                                }
                            }(this))
                    }
                    ,
                    o.prototype.animate = function () {
                        return "requestAnimationFrame" in window ? function (t) {
                            return window.requestAnimationFrame(t)
                        }
                            : function (t) {
                                return t()
                            }
                    }(),
                    o.prototype.resetStyle = function () {
                        var t, e, n, i, o;
                        for (i = this.boxes,
                            o = [],
                            e = 0,
                            n = i.length; e < n; e++)
                            t = i[e],
                                o.push(t.style.visibility = "visible");
                        return o
                    }
                    ,
                    o.prototype.resetAnimation = function (t) {
                        var e;
                        if (t.type.toLowerCase().indexOf("animationend") >= 0)
                            return e = t.target || t.srcElement,
                                e.className = e.className.replace(this.config.animateClass, "").trim()
                    }
                    ,
                    o.prototype.customStyle = function (t, e, n, i, o) {
                        return e && this.cacheAnimationName(t),
                            t.style.visibility = e ? "hidden" : "visible",
                            n && this.vendorSet(t.style, {
                                animationDuration: n
                            }),
                            i && this.vendorSet(t.style, {
                                animationDelay: i
                            }),
                            o && this.vendorSet(t.style, {
                                animationIterationCount: o
                            }),
                            this.vendorSet(t.style, {
                                animationName: e ? "none" : this.cachedAnimationName(t)
                            }),
                            t
                    }
                    ,
                    o.prototype.vendors = ["moz", "webkit"],
                    o.prototype.vendorSet = function (t, e) {
                        var n, i, o, r;
                        i = [];
                        for (n in e)
                            o = e[n],
                                t["" + n] = o,
                                i.push(function () {
                                    var e, i, a, s;
                                    for (a = this.vendors,
                                        s = [],
                                        e = 0,
                                        i = a.length; e < i; e++)
                                        r = a[e],
                                            s.push(t["" + r + n.charAt(0).toUpperCase() + n.substr(1)] = o);
                                    return s
                                }
                                    .call(this));
                        return i
                    }
                    ,
                    o.prototype.vendorCSS = function (t, e) {
                        var n, o, r, a, s, l;
                        for (s = i(t),
                            a = s.getPropertyCSSValue(e),
                            r = this.vendors,
                            n = 0,
                            o = r.length; n < o; n++)
                            l = r[n],
                                a = a || s.getPropertyCSSValue("-" + l + "-" + e);
                        return a
                    }
                    ,
                    o.prototype.animationName = function (t) {
                        var e;
                        try {
                            e = this.vendorCSS(t, "animation-name").cssText
                        } catch (n) {
                            e = i(t).getPropertyValue("animation-name")
                        }
                        return "none" === e ? "" : e
                    }
                    ,
                    o.prototype.cacheAnimationName = function (t) {
                        return this.animationNameCache.set(t, this.animationName(t))
                    }
                    ,
                    o.prototype.cachedAnimationName = function (t) {
                        return this.animationNameCache.get(t)
                    }
                    ,
                    o.prototype.scrollHandler = function () {
                        return this.scrolled = !0
                    }
                    ,
                    o.prototype.scrollCallback = function () {
                        var t;
                        if (this.scrolled && (this.scrolled = !1,
                            this.boxes = function () {
                                var e, n, i, o;
                                for (i = this.boxes,
                                    o = [],
                                    e = 0,
                                    n = i.length; e < n; e++)
                                    (t = i[e]) && (this.isVisible(t) ? this.show(t) : o.push(t));
                                return o
                            }
                                .call(this),
                            !this.boxes.length && !this.config.live))
                            return this.stop()
                    }
                    ,
                    o.prototype.offsetTop = function (t) {
                        for (var e; void 0 === t.offsetTop;)
                            t = t.parentNode;
                        for (e = t.offsetTop; t = t.offsetParent;)
                            e += t.offsetTop;
                        return e
                    }
                    ,
                    o.prototype.isVisible = function (t) {
                        var e, n, i, o, r;
                        return n = t.getAttribute("data-wow-offset") || this.config.offset,
                            r = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset,
                            o = r + Math.min(this.element.clientHeight, this.util().innerHeight()) - n,
                            i = this.offsetTop(t),
                            e = i + t.clientHeight,
                            i <= o && e >= r
                    }
                    ,
                    o.prototype.util = function () {
                        return null != this._util ? this._util : this._util = new e
                    }
                    ,
                    o.prototype.disabled = function () {
                        return !this.config.mobile && this.util().isMobile(navigator.userAgent)
                    }
                    ,
                    o
            }()
    }
        .call(this),
    $(document).ready(function () {
        $("body").scrollspy({
            target: ".navbar-fixed-top",
            offset: 80
        }),
            $("a.page-scroll").bind("click", function (t) {
                var e = $(this);
                $("html, body").stop().animate({
                    scrollTop: $(e.attr("href")).offset().top - 50
                }, 500),
                    t.preventDefault(),
                    $("#navbar").collapse("hide")
            })
    });
var cbpAnimatedHeader = function () {
    function t() {
        $(".navbar-default").toggleClass("navbar-scroll", e() >= n)
    }
    function e() {
        return window.pageYOffset || document.documentElement.scrollTop
    }
    var n = 200;
    window.addEventListener("scroll", function () {
        setTimeout(t, 250)
    }, !1)
}();
(new WOW).init();
