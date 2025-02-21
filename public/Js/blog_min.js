function buildCodeBlocks() {
    return "<div class='codeBlocks clearfix'><pre class='html'><code>" + getHtml() + "</code></pre><pre class='javascript'><code>" + cleanJson($("head script").last().text()) + "</code></pre><pre class='css'><code>" + cleanCSS($("head style").text()) + "</code></pre></div>"
}
function getHtml() {
    var t, i, e, s;
    return t = $("<div />").append($("div#content").contents().not("h2, p").clone()),
        i = t.find("ul"),
        e = i.find("li"),
        e.slice(3, e.length).remove(),
        i.append("..."),
        s = t.html(),
        cleanHTML(s).replace(/</gi, "&lt;").replace(/>/gi, "&gt;")
}
!function (t, i) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = i(require("jquery")) : "function" == typeof define && define.amd ? define(["jquery"], i) : t.metisMenu = i(t.jQuery)
}(this, function (t) {
    "use strict";
    function i(t, i, e) {
        return i in t ? Object.defineProperty(t, i, {
            value: e,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[i] = e,
            t
    }
    function e(t) {
        for (var e = 1; e < arguments.length; e++) {
            var s = null != arguments[e] ? arguments[e] : {}
                , n = Object.keys(s);
            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(s).filter(function (t) {
                return Object.getOwnPropertyDescriptor(s, t).enumerable
            }))),
                n.forEach(function (e) {
                    i(t, e, s[e])
                })
        }
        return t
    }
    t = t && t.hasOwnProperty("default") ? t.default : t;
    var s = function (t) {
        function i() {
            return {
                bindType: s,
                delegateType: s,
                handle: function (i) {
                    if (t(i.target).is(this))
                        return i.handleObj.handler.apply(this, arguments)
                }
            }
        }
        function e(i) {
            var e = this
                , s = !1;
            return t(this).one(n.TRANSITION_END, function () {
                s = !0
            }),
                setTimeout(function () {
                    s || n.triggerTransitionEnd(e)
                }, i),
                this
        }
        var s = "transitionend"
            , n = {
                TRANSITION_END: "mmTransitionEnd",
                triggerTransitionEnd: function (i) {
                    t(i).trigger(s)
                },
                supportsTransitionEnd: function () {
                    return Boolean(s)
                }
            };
        return function () {
            t.fn.mmEmulateTransitionEnd = e,
                t.event.special[n.TRANSITION_END] = i()
        }(),
            n
    }(t);
    return function (t) {
        var i = "metisMenu"
            , n = t.fn[i]
            , a = {
                toggle: !0,
                preventDefault: !0,
                activeClass: "active",
                collapseClass: "collapse",
                collapseInClass: "in",
                collapsingClass: "collapsing",
                triggerElement: "a",
                parentTrigger: "li",
                subMenu: "ul"
            }
            , r = {
                SHOW: "show.metisMenu",
                SHOWN: "shown.metisMenu",
                HIDE: "hide.metisMenu",
                HIDDEN: "hidden.metisMenu",
                CLICK_DATA_API: "click.metisMenu.data-api"
            }
            , o = function () {
                function i(t, i) {
                    this.element = t,
                        this.config = e({}, a, i),
                        this.transitioning = null,
                        this.init()
                }
                var n = i.prototype;
                return n.init = function () {
                    var i = this
                        , e = this.config;
                    t(this.element).find(e.parentTrigger + "." + e.activeClass).has(e.subMenu).children(e.subMenu).addClass(e.collapseClass + " " + e.collapseInClass),
                        t(this.element).find(e.parentTrigger).not("." + e.activeClass).has(e.subMenu).children(e.subMenu).addClass(e.collapseClass),
                        t(this.element).find(e.parentTrigger).has(e.subMenu).children(e.triggerElement).on(r.CLICK_DATA_API, function (s) {
                            var n = t(this)
                                , a = n.parent(e.parentTrigger)
                                , r = a.siblings(e.parentTrigger).children(e.triggerElement)
                                , o = a.children(e.subMenu);
                            e.preventDefault && s.preventDefault(),
                                "true" !== n.attr("aria-disabled") && (a.hasClass(e.activeClass) ? (n.attr("aria-expanded", !1),
                                    i.hide(o)) : (i.show(o),
                                        n.attr("aria-expanded", !0),
                                        e.toggle && r.attr("aria-expanded", !1)),
                                    e.onTransitionStart && e.onTransitionStart(s))
                        })
                }
                    ,
                    n.show = function (i) {
                        var e = this;
                        if (!this.transitioning && !t(i).hasClass(this.config.collapsingClass)) {
                            var n = t(i)
                                , a = t.Event(r.SHOW);
                            if (n.trigger(a),
                                !a.isDefaultPrevented()) {
                                n.parent(this.config.parentTrigger).addClass(this.config.activeClass),
                                    this.config.toggle && this.hide(n.parent(this.config.parentTrigger).siblings().children(this.config.subMenu + "." + this.config.collapseInClass)),
                                    n.removeClass(this.config.collapseClass).addClass(this.config.collapsingClass).height(0),
                                    this.setTransitioning(!0);
                                var o = function () {
                                    e.config && e.element && (n.removeClass(e.config.collapsingClass).addClass(e.config.collapseClass + " " + e.config.collapseInClass).height(""),
                                        e.setTransitioning(!1),
                                        n.trigger(r.SHOWN))
                                };
                                n.height(i[0].scrollHeight).one(s.TRANSITION_END, o).mmEmulateTransitionEnd(350)
                            }
                        }
                    }
                    ,
                    n.hide = function (i) {
                        var e = this;
                        if (!this.transitioning && t(i).hasClass(this.config.collapseInClass)) {
                            var n = t(i)
                                , a = t.Event(r.HIDE);
                            if (n.trigger(a),
                                !a.isDefaultPrevented()) {
                                n.parent(this.config.parentTrigger).removeClass(this.config.activeClass),
                                    n.height(n.height())[0].offsetHeight,
                                    n.addClass(this.config.collapsingClass).removeClass(this.config.collapseClass).removeClass(this.config.collapseInClass),
                                    this.setTransitioning(!0);
                                var o = function () {
                                    e.config && e.element && (e.transitioning && e.config.onTransitionEnd && e.config.onTransitionEnd(),
                                        e.setTransitioning(!1),
                                        n.trigger(r.HIDDEN),
                                        n.removeClass(e.config.collapsingClass).addClass(e.config.collapseClass))
                                };
                                0 === n.height() || "none" === n.css("display") ? o() : n.height(0).one(s.TRANSITION_END, o).mmEmulateTransitionEnd(350)
                            }
                        }
                    }
                    ,
                    n.setTransitioning = function (t) {
                        this.transitioning = t
                    }
                    ,
                    n.dispose = function () {
                        t.removeData(this.element, "metisMenu"),
                            t(this.element).find(this.config.parentTrigger).has(this.config.subMenu).children(this.config.triggerElement).off("click"),
                            this.transitioning = null,
                            this.config = null,
                            this.element = null
                    }
                    ,
                    i.jQueryInterface = function (s) {
                        return this.each(function () {
                            var n = t(this)
                                , r = n.data("metisMenu")
                                , o = e({}, a, n.data(), "object" == typeof s && s ? s : {});
                            if (!r && /dispose/.test(s) && this.dispose(),
                                r || (r = new i(this, o),
                                    n.data("metisMenu", r)),
                                "string" == typeof s) {
                                if (void 0 === r[s])
                                    throw new Error('No method named "' + s + '"');
                                r[s]()
                            }
                        })
                    }
                    ,
                    i
            }();
        return t.fn[i] = o.jQueryInterface,
            t.fn[i].Constructor = o,
            t.fn[i].noConflict = function () {
                return t.fn[i] = n,
                    o.jQueryInterface
            }
            ,
            o
    }(t)
}),
    function (i) {
        i.fn.extend({
            slimScroll: function (e) {
                var s = {
                    width: "auto",
                    height: "250px",
                    size: "7px",
                    color: "#000",
                    position: "right",
                    distance: "1px",
                    start: "top",
                    opacity: .4,
                    alwaysVisible: !1,
                    disableFadeOut: !1,
                    railVisible: !1,
                    railColor: "#333",
                    railOpacity: .2,
                    railDraggable: !0,
                    railClass: "slimScrollRail",
                    barClass: "slimScrollBar",
                    wrapperClass: "slimScrollDiv",
                    allowPageScroll: !1,
                    wheelStep: 20,
                    touchScrollStep: 200,
                    borderRadius: "7px",
                    railBorderRadius: "7px"
                }
                    , n = i.extend(s, e);
                return this.each(function () {
                    function s(t) {
                        if (l) {
                            var t = t || window.event
                                , e = 0;
                            t.wheelDelta && (e = -t.wheelDelta / 120),
                                t.detail && (e = t.detail / 3);
                            var s = t.target || t.srcTarget || t.srcElement;
                            i(s).closest("." + n.wrapperClass).is(b.parent()) && a(e, !0),
                                t.preventDefault && !w && t.preventDefault(),
                                w || (t.returnValue = !1)
                        }
                    }
                    function a(t, i, e) {
                        w = !1;
                        var s = t
                            , a = b.outerHeight() - S.outerHeight();
                        if (i && (s = parseInt(S.css("top")) + t * parseInt(n.wheelStep) / 100 * S.outerHeight(),
                            s = Math.min(Math.max(s, 0), a),
                            s = t > 0 ? Math.ceil(s) : Math.floor(s),
                            S.css({
                                top: s + "px"
                            })),
                            f = parseInt(S.css("top")) / (b.outerHeight() - S.outerHeight()),
                            s = f * (b[0].scrollHeight - b.outerHeight()),
                            e) {
                            s = t;
                            var r = s / b[0].scrollHeight * b.outerHeight();
                            r = Math.min(Math.max(r, 0), a),
                                S.css({
                                    top: r + "px"
                                })
                        }
                        b.scrollTop(s),
                            b.trigger("slimscrolling", ~~s),
                            o(),
                            h()
                    }
                    function r() {
                        p = Math.max(b.outerHeight() / b[0].scrollHeight * b.outerHeight(), _),
                            S.css({
                                height: p + "px"
                            });
                        var t = p == b.outerHeight() ? "none" : "block";
                        S.css({
                            display: t
                        })
                    }
                    function o() {
                        if (r(),
                            clearTimeout(u),
                            f == ~~f) {
                            if (w = n.allowPageScroll,
                                m != f) {
                                var t = 0 == ~~f ? "top" : "bottom";
                                b.trigger("slimscroll", t)
                            }
                        } else
                            w = !1;
                        if (m = f,
                            p >= b.outerHeight())
                            return void (w = !0);
                        S.stop(!0, !0).fadeIn("fast"),
                            n.railVisible && k.stop(!0, !0).fadeIn("fast")
                    }
                    function h() {
                        n.alwaysVisible || (u = setTimeout(function () {
                            n.disableFadeOut && l || c || d || (S.fadeOut("slow"),
                                k.fadeOut("slow"))
                        }, 1e3))
                    }
                    var l, c, d, u, g, p, f, m, v = "<div></div>", _ = 30, w = !1, b = i(this);
                    if (b.parent().hasClass(n.wrapperClass)) {
                        var y = b.scrollTop();
                        if (S = b.siblings("." + n.barClass),
                            k = b.siblings("." + n.railClass),
                            r(),
                            i.isPlainObject(e)) {
                            if ("height" in e && "auto" == e.height) {
                                b.parent().css("height", "auto"),
                                    b.css("height", "auto");
                                var C = b.parent().parent().height();
                                b.parent().css("height", C),
                                    b.css("height", C)
                            } else if ("height" in e) {
                                var P = e.height;
                                b.parent().css("height", P),
                                    b.css("height", P)
                            }
                            if ("scrollTo" in e)
                                y = parseInt(n.scrollTo);
                            else if ("scrollBy" in e)
                                y += parseInt(n.scrollBy);
                            else if ("destroy" in e)
                                return S.remove(),
                                    k.remove(),
                                    void b.unwrap();
                            a(y, !1, !0)
                        }
                    } else if (!(i.isPlainObject(e) && "destroy" in e)) {
                        n.height = "auto" == n.height ? b.parent().height() : n.height;
                        var j = i(v).addClass(n.wrapperClass).css({
                            position: "relative",
                            overflow: "hidden",
                            width: n.width,
                            height: n.height
                        });
                        b.css({
                            overflow: "hidden",
                            width: n.width,
                            height: n.height
                        });
                        var k = i(v).addClass(n.railClass).css({
                            width: n.size,
                            height: "100%",
                            position: "absolute",
                            top: 0,
                            display: n.alwaysVisible && n.railVisible ? "block" : "none",
                            "border-radius": n.railBorderRadius,
                            background: n.railColor,
                            opacity: n.railOpacity,
                            zIndex: 90
                        })
                            , S = i(v).addClass(n.barClass).css({
                                background: n.color,
                                width: n.size,
                                position: "absolute",
                                top: 0,
                                opacity: n.opacity,
                                display: n.alwaysVisible ? "block" : "none",
                                "border-radius": n.borderRadius,
                                BorderRadius: n.borderRadius,
                                MozBorderRadius: n.borderRadius,
                                WebkitBorderRadius: n.borderRadius,
                                zIndex: 99
                            })
                            , x = "right" == n.position ? {
                                right: n.distance
                            } : {
                                left: n.distance
                            };
                        k.css(x),
                            S.css(x),
                            b.wrap(j),
                            b.parent().append(S),
                            b.parent().append(k),
                            n.railDraggable && S.bind("mousedown", function (e) {
                                var s = i(document);
                                return d = !0,
                                    t = parseFloat(S.css("top")),
                                    pageY = e.pageY,
                                    s.bind("mousemove.slimscroll", function (i) {
                                        currTop = t + i.pageY - pageY,
                                            S.css("top", currTop),
                                            a(0, S.position().top, !1)
                                    }),
                                    s.bind("mouseup.slimscroll", function (t) {
                                        d = !1,
                                            h(),
                                            s.unbind(".slimscroll")
                                    }),
                                    !1
                            }).bind("selectstart.slimscroll", function (t) {
                                return t.stopPropagation(),
                                    t.preventDefault(),
                                    !1
                            }),
                            k.hover(function () {
                                o()
                            }, function () {
                                h()
                            }),
                            S.hover(function () {
                                c = !0
                            }, function () {
                                c = !1
                            }),
                            b.hover(function () {
                                l = !0,
                                    o(),
                                    h()
                            }, function () {
                                l = !1,
                                    h()
                            }),
                            b.bind("touchstart", function (t, i) {
                                t.originalEvent.touches.length && (g = t.originalEvent.touches[0].pageY)
                            }),
                            b.bind("touchmove", function (t) {
                                if (w || t.originalEvent.preventDefault(),
                                    t.originalEvent.touches.length) {
                                    a((g - t.originalEvent.touches[0].pageY) / n.touchScrollStep, !0),
                                        g = t.originalEvent.touches[0].pageY
                                }
                            }),
                            r(),
                            "bottom" === n.start ? (S.css({
                                top: b.outerHeight() - S.outerHeight()
                            }),
                                a(0, !0)) : "top" !== n.start && (a(i(n.start).position().top, null, !0),
                                    n.alwaysVisible || S.hide()),
                            function (t) {
                                window.addEventListener ? (t.addEventListener("DOMMouseScroll", s, !1),
                                    t.addEventListener("mousewheel", s, !1)) : document.attachEvent("onmousewheel", s)
                            }(this)
                    }
                }),
                    this
            }
        }),
            i.fn.extend({
                slimscroll: i.fn.slimScroll
            })
    }(jQuery),
    function (t, i, e, s) {
        var n = t.fn.peity = function (i, e) {
            return h && this.each(function () {
                var s = t(this)
                    , r = s.data("_peity");
                r ? (i && (r.type = i),
                    t.extend(r.opts, e)) : (r = new a(s, i, t.extend({}, n.defaults[i], s.data("peity"), e)),
                        s.change(function () {
                            r.draw()
                        }).data("_peity", r)),
                    r.draw()
            }),
                this
        }
            , a = function (t, i, e) {
                this.$el = t,
                    this.type = i,
                    this.opts = e
            }
            , r = a.prototype
            , o = r.svgElement = function (e, s) {
                return t(i.createElementNS("http://www.w3.org/2000/svg", e)).attr(s)
            }
            , h = "createElementNS" in i && o("svg", {})[0].createSVGRect;
        r.draw = function () {
            var t = this.opts;
            n.graphers[this.type].call(this, t),
                t.after && t.after.call(this, t)
        }
            ,
            r.fill = function () {
                var i = this.opts.fill;
                return t.isFunction(i) ? i : function (t, e) {
                    return i[e % i.length]
                }
            }
            ,
            r.prepare = function (t, i) {
                return this.$svg || this.$el.hide().after(this.$svg = o("svg", {
                    class: "peity"
                })),
                    this.$svg.empty().data("_peity", this).attr({
                        height: i,
                        width: t
                    })
            }
            ,
            r.values = function () {
                return t.map(this.$el.text().split(this.opts.delimiter), function (t) {
                    return parseFloat(t)
                })
            }
            ,
            n.defaults = {},
            n.graphers = {},
            n.register = function (t, i, e) {
                this.defaults[t] = i,
                    this.graphers[t] = e
            }
            ,
            n.register("pie", {
                fill: ["#ff9900", "#fff4dd", "#ffc66e"],
                radius: 8
            }, function (i) {
                if (!i.delimiter) {
                    var s = this.$el.text().match(/[^0-9\.]/);
                    i.delimiter = s ? s[0] : ","
                }
                var n = t.map(this.values(), function (t) {
                    return t > 0 ? t : 0
                });
                if ("/" == i.delimiter) {
                    var a = n[0]
                        , r = n[1];
                    n = [a, e.max(0, r - a)]
                }
                for (var h = 0, l = n.length, c = 0; h < l; h++)
                    c += n[h];
                c || (l = 2,
                    c = 1,
                    n = [0, 1]);
                var d = 2 * i.radius
                    , u = this.prepare(i.width || d, i.height || d)
                    , g = u.width()
                    , p = u.height()
                    , f = g / 2
                    , m = p / 2
                    , v = e.min(f, m)
                    , _ = i.innerRadius;
                "donut" != this.type || _ || (_ = .5 * v);
                var w = e.PI
                    , b = this.fill()
                    , y = this.scale = function (t, i) {
                        var s = t / c * w * 2 - w / 2;
                        return [i * e.cos(s) + f, i * e.sin(s) + m]
                    }
                    , C = 0;
                for (h = 0; h < l; h++) {
                    var P, j = n[h], k = j / c;
                    if (0 != k) {
                        if (1 == k)
                            if (_) {
                                var S = f - .01
                                    , x = m - v
                                    , N = m - _;
                                P = o("path", {
                                    d: ["M", f, x, "A", v, v, 0, 1, 1, S, x, "L", S, N, "A", _, _, 0, 1, 0, f, N].join(" "),
                                    "data-value": j
                                })
                            } else
                                P = o("circle", {
                                    cx: f,
                                    cy: m,
                                    "data-value": j,
                                    r: v
                                });
                        else {
                            var T = C + j
                                , I = ["M"].concat(y(C, v), "A", v, v, 0, k > .5 ? 1 : 0, 1, y(T, v), "L");
                            _ ? I = I.concat(y(T, _), "A", _, _, 0, k > .5 ? 1 : 0, 0, y(C, _)) : I.push(f, m),
                                C += j,
                                P = o("path", {
                                    d: I.join(" "),
                                    "data-value": j
                                })
                        }
                        P.attr("fill", b.call(this, j, h, n)),
                            u.append(P)
                    }
                }
            }),
            n.register("donut", t.extend(!0, {}, n.defaults.pie), function (t) {
                n.graphers.pie.call(this, t)
            }),
            n.register("line", {
                delimiter: ",",
                fill: "#c6d9fd",
                height: 16,
                min: 0,
                stroke: "#4d89f9",
                strokeWidth: 1,
                width: 32
            }, function (t) {
                var i = this.values();
                1 == i.length && i.push(i[0]);
                for (var s = e.max.apply(e, void 0 == t.max ? i : i.concat(t.max)), n = e.min.apply(e, void 0 == t.min ? i : i.concat(t.min)), a = this.prepare(t.width, t.height), r = t.strokeWidth, h = a.width(), l = a.height() - r, c = s - n, d = this.x = function (t) {
                    return t * (h / (i.length - 1))
                }
                    , u = this.y = function (t) {
                        var i = l;
                        return c && (i -= (t - n) / c * l),
                            i + r / 2
                    }
                    , g = u(e.max(n, 0)), p = [0, g], f = 0; f < i.length; f++)
                    p.push(d(f), u(i[f]));
                p.push(h, g),
                    t.fill && a.append(o("polygon", {
                        fill: t.fill,
                        points: p.join(" ")
                    })),
                    r && a.append(o("polyline", {
                        fill: "none",
                        points: p.slice(2, p.length - 2).join(" "),
                        stroke: t.stroke,
                        "stroke-width": r,
                        "stroke-linecap": "square"
                    }))
            }),
            n.register("bar", {
                delimiter: ",",
                fill: ["#4D89F9"],
                height: 16,
                min: 0,
                padding: .1,
                width: 32
            }, function (t) {
                for (var i = this.values(), s = e.max.apply(e, void 0 == t.max ? i : i.concat(t.max)), n = e.min.apply(e, void 0 == t.min ? i : i.concat(t.min)), a = this.prepare(t.width, t.height), r = a.width(), h = a.height(), l = s - n, c = t.padding, d = this.fill(), u = this.x = function (t) {
                    return t * r / i.length
                }
                    , g = this.y = function (t) {
                        return h - (l ? (t - n) / l * h : 1)
                    }
                    , p = 0; p < i.length; p++) {
                    var f, m = u(p + c), v = u(p + 1 - c) - m, _ = i[p], w = g(_), b = w, y = w;
                    l ? _ < 0 ? b = g(e.min(s, 0)) : y = g(e.max(n, 0)) : f = 1,
                        f = y - b,
                        0 == f && (f = 1,
                            s > 0 && l && b--),
                        a.append(o("rect", {
                            "data-value": _,
                            fill: d.call(this, _, p, i),
                            x: m,
                            y: b,
                            width: v,
                            height: f
                        }))
                }
            })
    }(jQuery, document, Math),
    function (t, i, e, s) {
        function n(s, n) {
            this.options = t.extend({}, o, n),
                this._container = t("#" + this.options.containerID),
                this._container.length && (this.jQwindow = t(i),
                    this.jQdocument = t(e),
                    this._holder = t(s),
                    this._nav = {},
                    this._first = t(this.options.first),
                    this._previous = t(this.options.previous),
                    this._next = t(this.options.next),
                    this._last = t(this.options.last),
                    this._items = this._container.children(":visible"),
                    this._itemsShowing = t([]),
                    this._itemsHiding = t([]),
                    this._numPages = Math.ceil(this._items.length / this.options.perPage),
                    this._currentPageNum = this.options.startPage,
                    this._clicked = !1,
                    this._cssAnimSupport = this.getCSSAnimationSupport(),
                    this.init())
        }
        var a = "jPages"
            , r = null
            , o = {
                containerID: "",
                first: !1,
                previous: !1,
                next: !1,
                last: !1,
                links: "numeric",
                startPage: 1,
                perPage: 10,
                midRange: 5,
                startRange: 1,
                endRange: 1,
                keyBrowse: !1,
                scrollBrowse: !1,
                pause: 0,
                clickStop: !1,
                delay: 50,
                direction: "forward",
                animation: "",
                fallback: 400,
                minHeight: !0,
                callback: void 0
            };
        n.prototype = {
            constructor: n,
            getCSSAnimationSupport: function () {
                var t = !1
                    , i = "Webkit Moz O ms Khtml".split(" ")
                    , e = ""
                    , s = this._container.get(0);
                if (s.style.animationName && (t = !0),
                    !1 === t)
                    for (var n = 0; n < i.length; n++)
                        if (void 0 !== s.style[i[n] + "AnimationName"]) {
                            e = i[n],
                                e + "Animation",
                                "-" + e.toLowerCase() + "-",
                                t = !0;
                            break
                        }
                return t
            },
            init: function () {
                this.setStyles(),
                    this.setNav(),
                    this.paginate(this._currentPageNum),
                    this.setMinHeight()
            },
            setStyles: function () {
                t("<style>.jp-invisible { visibility: hidden !important; } .jp-hidden { display: none !important; }</style>").appendTo("head"),
                    this._cssAnimSupport && this.options.animation.length ? this._items.addClass("animated jp-hidden") : this._items.hide()
            },
            setNav: function () {
                var i = this.writeNav();
                this._holder.each(this.bind(function (e, s) {
                    var n = t(s);
                    n.html(i),
                        this.cacheNavElements(n, e),
                        this.bindNavHandlers(e),
                        this.disableNavSelection(s)
                }, this)),
                    this.options.keyBrowse && this.bindNavKeyBrowse(),
                    this.options.scrollBrowse && this.bindNavScrollBrowse()
            },
            writeNav: function () {
                var t, i = 1;
                for (t = "",
                    t = '<nav><ul class="pagination">',
                    t += this.writeBtn("first") + this.writeBtn("previous"); i <= this._numPages; i++) {
                    switch (1 === i && 0 === this.options.startRange && (t += "<span>...</span>"),
                    i > this.options.startRange && i <= this._numPages - this.options.endRange ? t += "<li><a href='#' class='jp-hidden'>" : t += "<li><a>",
                    this.options.links) {
                        case "numeric":
                            t += i;
                            break;
                        case "blank":
                            break;
                        case "title":
                            var e = this._items.eq(i - 1).attr("data-title");
                            t += void 0 !== e ? e : ""
                    }
                    t += "</a></li>",
                        i !== this.options.startRange && i !== this._numPages - this.options.endRange || (t += "<li><span>...</span></li>")
                }
                return t += this.writeBtn("next") + this.writeBtn("last") + "</div>",
                    t += "</ul></nav>"
            },
            writeBtn: function (i) {
                return !1 === this.options[i] || t(this["_" + i]).length ? "" : "<li class=''><a class='jp-" + i + "'>" + this.options[i] + "</a></li>"
            },
            cacheNavElements: function (i, e) {
                this._nav[e] = {},
                    this._nav[e].holder = i,
                    this._nav[e].first = this._first.length ? this._first : this._nav[e].holder.find("a.jp-first"),
                    this._nav[e].previous = this._previous.length ? this._previous : this._nav[e].holder.find("a.jp-previous"),
                    this._nav[e].next = this._next.length ? this._next : this._nav[e].holder.find("a.jp-next"),
                    this._nav[e].last = this._last.length ? this._last : this._nav[e].holder.find("a.jp-last"),
                    this._nav[e].fstBreak = this._nav[e].holder.find("span:first"),
                    this._nav[e].lstBreak = this._nav[e].holder.find("span:last"),
                    this._nav[e].pages = this._nav[e].holder.find("a").not(".jp-first, .jp-previous, .jp-next, .jp-last"),
                    this._nav[e].permPages = this._nav[e].pages.slice(0, this.options.startRange).add(this._nav[e].pages.slice(this._numPages - this.options.endRange, this._numPages)),
                    this._nav[e].pagesShowing = t([]),
                    this._nav[e].currentPage = t([])
            },
            bindNavHandlers: function (i) {
                var e = this._nav[i];
                e.holder.bind("click.jPages", this.bind(function (i) {
                    var s = this.getNewPage(e, t(i.target));
                    this.validNewPage(s) && (this._clicked = !0,
                        this.paginate(s)),
                        i.preventDefault()
                }, this)),
                    this._first.length && this._first.bind("click.jPages", this.bind(function () {
                        this.validNewPage(1) && (this._clicked = !0,
                            this.paginate(1))
                    }, this)),
                    this._previous.length && this._previous.bind("click.jPages", this.bind(function () {
                        var t = this._currentPageNum - 1;
                        this.validNewPage(t) && (this._clicked = !0,
                            this.paginate(t))
                    }, this)),
                    this._next.length && this._next.bind("click.jPages", this.bind(function () {
                        var t = this._currentPageNum + 1;
                        this.validNewPage(t) && (this._clicked = !0,
                            this.paginate(t))
                    }, this)),
                    this._last.length && this._last.bind("click.jPages", this.bind(function () {
                        this.validNewPage(this._numPages) && (this._clicked = !0,
                            this.paginate(this._numPages))
                    }, this))
            },
            disableNavSelection: function (t) {
                void 0 !== t.onselectstart ? t.onselectstart = function () {
                    return !1
                }
                    : void 0 !== t.style.MozUserSelect ? t.style.MozUserSelect = "none" : t.onmousedown = function () {
                        return !1
                    }
            },
            bindNavKeyBrowse: function () {
                this.jQdocument.bind("keydown.jPages", this.bind(function (t) {
                    var i = t.target.nodeName.toLowerCase();
                    if (this.elemScrolledIntoView() && "input" !== i && "textarea" != i) {
                        var e = this._currentPageNum;
                        37 == t.which && (e = this._currentPageNum - 1),
                            39 == t.which && (e = this._currentPageNum + 1),
                            this.validNewPage(e) && (this._clicked = !0,
                                this.paginate(e))
                    }
                }, this))
            },
            elemScrolledIntoView: function () {
                var t, i, e;
                return t = this.jQwindow.scrollTop(),
                    i = t + this.jQwindow.height(),
                    e = this._container.offset().top,
                    e + this._container.height() >= t && e <= i
            },
            bindNavScrollBrowse: function () {
                this._container.bind("mousewheel.jPages DOMMouseScroll.jPages", this.bind(function (t) {
                    var i = (t.originalEvent.wheelDelta || -t.originalEvent.detail) > 0 ? this._currentPageNum - 1 : this._currentPageNum + 1;
                    return this.validNewPage(i) && (this._clicked = !0,
                        this.paginate(i)),
                        t.preventDefault(),
                        !1
                }, this))
            },
            getNewPage: function (t, i) {
                return i.is(t.currentPage) ? this._currentPageNum : i.is(t.pages) ? t.pages.index(i) + 1 : i.is(t.first) ? 1 : i.is(t.last) ? this._numPages : i.is(t.previous) ? t.pages.index(t.currentPage) : i.is(t.next) ? t.pages.index(t.currentPage) + 2 : void 0
            },
            validNewPage: function (t) {
                return t !== this._currentPageNum && t > 0 && t <= this._numPages
            },
            paginate: function (i) {
                var e, s;
                e = this.updateItems(i),
                    s = this.updatePages(i),
                    this._currentPageNum = i,
                    t.isFunction(this.options.callback) && this.callback(i, e, s),
                    this.updatePause()
            },
            updateItems: function (t) {
                var i = this.getItemRange(t);
                return this._itemsHiding = this._itemsShowing,
                    this._itemsShowing = this._items.slice(i.start, i.end),
                    this._cssAnimSupport && this.options.animation.length ? this.cssAnimations(t) : this.jQAnimations(t),
                    i
            },
            getItemRange: function (t) {
                var i = {};
                return i.start = (t - 1) * this.options.perPage,
                    i.end = i.start + this.options.perPage,
                    i.end > this._items.length && (i.end = this._items.length),
                    i
            },
            cssAnimations: function (t) {
                clearInterval(this._delay),
                    this._itemsHiding.removeClass(this.options.animation + " jp-invisible").addClass("jp-hidden"),
                    this._itemsShowing.removeClass("jp-hidden").addClass("jp-invisible"),
                    this._itemsOriented = this.getDirectedItems(t),
                    this._index = 0,
                    this._delay = setInterval(this.bind(function () {
                        this._index === this._itemsOriented.length ? clearInterval(this._delay) : this._itemsOriented.eq(this._index).removeClass("jp-invisible").addClass(this.options.animation),
                            this._index = this._index + 1
                    }, this), this.options.delay)
            },
            jQAnimations: function (t) {
                clearInterval(this._delay),
                    this._itemsHiding.addClass("jp-hidden"),
                    this._itemsShowing.fadeTo(0, 0).removeClass("jp-hidden"),
                    this._itemsOriented = this.getDirectedItems(t),
                    this._index = 0,
                    this._delay = setInterval(this.bind(function () {
                        this._index === this._itemsOriented.length ? clearInterval(this._delay) : this._itemsOriented.eq(this._index).fadeTo(this.options.fallback, 1),
                            this._index = this._index + 1
                    }, this), this.options.delay)
            },
            getDirectedItems: function (i) {
                var e;
                switch (this.options.direction) {
                    case "backwards":
                        e = t(this._itemsShowing.get().reverse());
                        break;
                    case "random":
                        e = t(this._itemsShowing.get().sort(function () {
                            return Math.round(Math.random()) - .5
                        }));
                        break;
                    case "auto":
                        e = i >= this._currentPageNum ? this._itemsShowing : t(this._itemsShowing.get().reverse());
                        break;
                    default:
                        e = this._itemsShowing
                }
                return e
            },
            updatePages: function (t) {
                var i, e, s;
                i = this.getInterval(t);
                for (e in this._nav)
                    this._nav.hasOwnProperty(e) && (s = this._nav[e],
                        this.updateBtns(s, t),
                        this.updateCurrentPage(s, t),
                        this.updatePagesShowing(s, i),
                        this.updateBreaks(s, i));
                return i
            },
            getInterval: function (t) {
                var i, e, s, n;
                return i = Math.ceil(this.options.midRange / 2),
                    e = this._numPages - this.options.midRange,
                    s = t > i ? Math.max(Math.min(t - i, e), 0) : 0,
                    n = t > i ? Math.min(t + i - (this.options.midRange % 2 > 0 ? 1 : 0), this._numPages) : Math.min(this.options.midRange, this._numPages),
                {
                    start: s,
                    end: n
                }
            },
            updateBtns: function (t, i) {
                1 === i && (t.first.parent().addClass("active"),
                    t.previous.parent().addClass("active")),
                    i === this._numPages && (t.next.parent().addClass("active"),
                        t.last.parent().addClass("active")),
                    1 === this._currentPageNum && i > 1 && (t.first.parent().removeClass("active"),
                        t.previous.parent().removeClass("active")),
                    this._currentPageNum === this._numPages && i < this._numPages && (t.next.parent().removeClass("active"),
                        t.last.parent().removeClass("active"))
            },
            updateCurrentPage: function (t, i) {
                t.currentPage.removeClass("active"),
                    t.currentPage = t.pages.eq(i - 1).parent().addClass("active")
            },
            updatePagesShowing: function (t, i) {
                var e = t.pages.slice(i.start, i.end).not(t.permPages);
                t.pagesShowing.not(e).addClass("jp-hidden"),
                    e.not(t.pagesShowing).removeClass("jp-hidden"),
                    t.pagesShowing = e
            },
            updateBreaks: function (t, i) {
                i.start > this.options.startRange || 0 === this.options.startRange && i.start > 0 ? t.fstBreak.removeClass("jp-hidden") : t.fstBreak.addClass("jp-hidden"),
                    i.end < this._numPages - this.options.endRange ? t.lstBreak.removeClass("jp-hidden") : t.lstBreak.addClass("jp-hidden")
            },
            callback: function (t, i, e) {
                var s = {
                    current: t,
                    interval: e,
                    count: this._numPages
                }
                    , n = {
                        showing: this._itemsShowing,
                        oncoming: this._items.slice(i.start + this.options.perPage, i.end + this.options.perPage),
                        range: i,
                        count: this._items.length
                    };
                s.interval.start = s.interval.start + 1,
                    n.range.start = n.range.start + 1,
                    this.options.callback(s, n)
            },
            updatePause: function () {
                if (this.options.pause && this._numPages > 1) {
                    if (clearTimeout(this._pause),
                        this.options.clickStop && this._clicked)
                        return;
                    this._pause = setTimeout(this.bind(function () {
                        this.paginate(this._currentPageNum !== this._numPages ? this._currentPageNum + 1 : 1)
                    }, this), this.options.pause)
                }
            },
            setMinHeight: function () {
                this.options.minHeight && !this._container.is("table, tbody") && setTimeout(this.bind(function () {
                    this._container.css({
                        "min-height": this._container.css("height")
                    })
                }, this), 1e3)
            },
            bind: function (t, i) {
                return function () {
                    return t.apply(i, arguments)
                }
            },
            destroy: function () {
                this.jQdocument.unbind("keydown.jPages"),
                    this._container.unbind("mousewheel.jPages DOMMouseScroll.jPages"),
                    this.options.minHeight && this._container.css("min-height", ""),
                    this._cssAnimSupport && this.options.animation.length ? this._items.removeClass("animated jp-hidden jp-invisible " + this.options.animation) : this._items.removeClass("jp-hidden").fadeTo(0, 1),
                    this._holder.unbind("click.jPages").empty()
            }
        },
            t.fn[a] = function (i) {
                var e = t.type(i);
                return "object" === e ? (this.length && !t.data(this, a) && (r = new n(this, i),
                    this.each(function () {
                        t.data(this, a, r)
                    })),
                    this) : "string" === e && "destroy" === i ? (r.destroy(),
                        this.each(function () {
                            t.removeData(this, a)
                        }),
                        this) : "number" === e && i % 1 == 0 ? (r.validNewPage(i) && r.paginate(i),
                            this) : this
            }
    }(jQuery, window, document),
    $(function () {
        $("div#content").find("p").last().after(buildCodeBlocks),
            $("pre code").each(function (t, i) {
                hljs.highlightBlock(i, "    ")
            })
    }),
    $(function () {
        var t = 0
            , i = !0
            , e = function (e) {
                t = 0,
                    i = !e;
                var s = e ? "block" : "none";
                $("#search-content").val(""),
                    $(".search-tool").css("display", s)
            }
            , s = function (i) {
                var e = i - t;
                return t = i,
                    e < 500
            };
        $(document).keyup(function (t) {
            var n = (new Date).getTime();
            17 == t.keyCode && s(n) ? e(i) : 27 == t.keyCode && e(!1)
        }),
            $("#search-content").keyup(function (t) {
                var n = (new Date).getTime();
                17 == t.keyCode && s(n) && e(i)
            }),
            $("#close-btn").click(function () {
                e(!1)
            }),
            $("#search-btn").click(function () {
                e(!0)
            });
        var n = $("meta[name=baseurl]");
        $.getJSON(n.attr("content") + "/search.json").done(function (t) {
            0 == t.code && $("#search-content").typeahead({
                source: t.data,
                displayText: function (t) {
                    return t.title
                },
                afterSelect: function (t) {
                    window.location.href = t.url
                }
            })
        })
    }),
    $(function () {
        $("pre").css("display", "block")
    });
