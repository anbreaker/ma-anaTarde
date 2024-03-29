/*
 XDate v0.8.2
 Docs & Licensing: http://arshaw.com/xdate/
*/
var XDate = function(g, q, E, t) {
  function h() {
    var a = this instanceof h ? this : new h,
      c = arguments,
      b = c.length;
    if ("boolean" == typeof c[b - 1]) {
      var d = c[--b];
      c = u(c, 0, b)
    }
    if (b)
      if (1 == b)
        if (b = c[0], b instanceof g) a[0] = new g(b.getTime());
        else if ("number" == typeof b) a[0] = new g(b);
    else if (b instanceof h) {
      var c = a,
        f = new g(b[0].getTime());
      n(b) && (f.toString = z);
      c[0] = f
    } else {
      if ("string" == typeof b) {
        a[0] = new g(0);
        a: {
          for (var c = b, b = d || !1, f = h.parsers, A = 0, e; A < f.length; A++)
            if (e = f[A](c, b, a)) {
              a = e;
              break a
            }
          a[0] = new g(c)
        }
      }
    } else a[0] = new g(p.apply(g,
      c)), d || (a[0] = v(a[0]));
    else a[0] = new g;
    "boolean" == typeof d && F(a, d);
    return a
  }

  function n(a) {
    return a[0].toString === z
  }

  function F(a, c, b) {
    c ? n(a) || (b && (c = a[0], c = new g(p(c.getFullYear(), c.getMonth(), c.getDate(), c.getHours(), c.getMinutes(), c.getSeconds(), c.getMilliseconds())), a[0] = c), a[0].toString = z) : n(a) && (a[0] = b ? v(a[0]) : new g(a[0].getTime()));
    return a
  }

  function G(a, c, b, d, f) {
    var e = l(k, a[0], f);
    a = l(H, a[0], f);
    f = !1;
    2 == d.length && "boolean" == typeof d[1] && (f = d[1], d = [b]);
    b = 1 == c ? (b % 12 + 12) % 12 : e(1);
    a(c, d);
    f && e(1) != b &&
      (a(1, [e(1) - 1]), a(2, [I(e(0), e(1))]))
  }

  function J(a, c, b, d) {
    b = Number(b);
    var f = q.floor(b);
    a["set" + r[c]](a["get" + r[c]]() + f, d || !1);
    f != b && 6 > c && J(a, c + 1, (b - f) * K[c], d)
  }

  function L(a, c, b) {
    a = a.clone().setUTCMode(!0, !0);
    c = h(c).setUTCMode(!0, !0);
    var d = 0;
    if (0 == b || 1 == b) {
      for (var f = 6; f >= b; f--) d /= K[f], d += k(c, !1, f) - k(a, !1, f);
      1 == b && (d += 12 * (c.getFullYear() - a.getFullYear()))
    } else 2 == b ? (b = a.toDate().setUTCHours(0, 0, 0, 0), d = c.toDate().setUTCHours(0, 0, 0, 0), d = q.round((d - b) / 864E5) + (c - d - (a - b)) / 864E5) : d = (c - a) / [36E5, 6E4, 1E3, 1][b -
      3
    ];
    return d
  }

  function w(a) {
    var c = a(0),
      b = a(1),
      d = a(2);
    a = new g(p(c, b, d));
    c = x(M(c, b, d));
    return q.floor(q.round((a - c) / 864E5) / 7) + 1
  }

  function M(a, c, b) {
    c = new g(p(a, c, b));
    return c < x(a) ? a - 1 : c >= x(a + 1) ? a + 1 : a
  }

  function x(a) {
    a = new g(p(a, 0, 4));
    a.setUTCDate(a.getUTCDate() - (a.getUTCDay() + 6) % 7);
    return a
  }

  function N(a, c, b, d) {
    var f = l(k, a, d),
      e = l(H, a, d);
    b === t && (b = M(f(0), f(1), f(2)));
    b = x(b);
    d || (b = v(b));
    a.setTime(b.getTime());
    e(2, [f(2) + 7 * (c - 1)])
  }

  function O(a, c, b, d, f) {
    var e = h.locales,
      g = e[h.defaultLocale] || {},
      P = l(k, a, f);
    b = ("string" ==
      typeof b ? e[b] : b) || {};
    return B(a, c, function(a) {
      if (d)
        for (var b = (7 == a ? 2 : a) - 1; 0 <= b; b--) d.push(P(b));
      return P(a)
    }, function(a) {
      return b[a] || g[a]
    }, f)
  }

  function B(a, c, b, d, e) {
    for (var f, h, g = ""; f = c.match(S);) {
      g += c.substr(0, f.index);
      if (f[1]) {
        h = g;
        for (var m = a, k = f[1], n = b, p = d, q = e, l = k.length, r = ""; 0 < l;) g = T(m, k.substr(0, l), n, p, q), g !== t ? (r += g, k = k.substr(l), l = k.length) : l--;
        g = h + (r + k)
      } else f[3] ? (h = B(a, f[4], b, d, e), parseInt(h.replace(/\D/g, ""), 10) && (g += h)) : g += f[7] || "'";
      c = c.substr(f.index + f[0].length)
    }
    return g + c
  }

  function T(a,
    c, b, d, f) {
    var e = h.formatters[c];
    if ("string" == typeof e) return B(a, e, b, d, f);
    if ("function" == typeof e) return e(a, f || !1, d);
    switch (c) {
      case "fff":
        return m(b(6), 3);
      case "s":
        return b(5);
      case "ss":
        return m(b(5));
      case "m":
        return b(4);
      case "mm":
        return m(b(4));
      case "h":
        return b(3) % 12 || 12;
      case "hh":
        return m(b(3) % 12 || 12);
      case "H":
        return b(3);
      case "HH":
        return m(b(3));
      case "d":
        return b(2);
      case "dd":
        return m(b(2));
      case "ddd":
        return d("dayNamesShort")[b(7)] || "";
      case "dddd":
        return d("dayNames")[b(7)] || "";
      case "M":
        return b(1) +
          1;
      case "MM":
        return m(b(1) + 1);
      case "MMM":
        return d("monthNamesShort")[b(1)] || "";
      case "MMMM":
        return d("monthNames")[b(1)] || "";
      case "yy":
        return (b(0) + "").substring(2);
      case "yyyy":
        return b(0);
      case "t":
        return y(b, d).substr(0, 1).toLowerCase();
      case "tt":
        return y(b, d).toLowerCase();
      case "T":
        return y(b, d).substr(0, 1);
      case "TT":
        return y(b, d);
      case "z":
      case "zz":
      case "zzz":
        return f ? c = "Z" : (d = a.getTimezoneOffset(), a = 0 > d ? "+" : "-", b = q.floor(q.abs(d) / 60), d = q.abs(d) % 60, f = b, "zz" == c ? f = m(b) : "zzz" == c && (f = m(b) + ":" + m(d)), c =
          a + f), c;
      case "w":
        return w(b);
      case "ww":
        return m(w(b));
      case "S":
        return c = b(2), 10 < c && 20 > c ? "th" : ["st", "nd", "rd"][c % 10 - 1] || "th"
    }
  }

  function y(a, c) {
    return 12 > a(3) ? c("amDesignator") : c("pmDesignator")
  }

  function C(a) {
    return !isNaN(a[0].getTime())
  }

  function k(a, c, b) {
    return a["get" + (c ? "UTC" : "") + r[b]]()
  }

  function H(a, c, b, d) {
    a["set" + (c ? "UTC" : "") + r[b]].apply(a, d)
  }

  function v(a) {
    return new g(a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate(), a.getUTCHours(), a.getUTCMinutes(), a.getUTCSeconds(), a.getUTCMilliseconds())
  }

  function I(a,
    c) {
    return 32 - (new g(p(a, c, 32))).getUTCDate()
  }

  function D(a) {
    return function() {
      return a.apply(t, [this].concat(u(arguments)))
    }
  }

  function l(a) {
    var c = u(arguments, 1);
    return function() {
      return a.apply(t, c.concat(u(arguments)))
    }
  }

  function u(a, c, b) {
    return E.prototype.slice.call(a, c || 0, b === t ? a.length : b)
  }

  function Q(a, c) {
    for (var b = 0; b < a.length; b++) c(a[b], b)
  }

  function m(a, c) {
    c = c || 2;
    for (a += ""; a.length < c;) a = "0" + a;
    return a
  }
  var r = "FullYear Month Date Hours Minutes Seconds Milliseconds Day Year".split(" "),
    R = ["Years",
      "Months", "Days"
    ],
    K = [12, 31, 24, 60, 60, 1E3, 1],
    S = /(([a-zA-Z])\2*)|(\((('.*?'|\(.*?\)|.)*?)\))|('(.*?)')/,
    p = g.UTC,
    z = g.prototype.toUTCString,
    e = h.prototype;
  e.length = 1;
  e.splice = E.prototype.splice;
  e.getUTCMode = D(n);
  e.setUTCMode = D(F);
  e.getTimezoneOffset = function() {
    return n(this) ? 0 : this[0].getTimezoneOffset()
  };
  Q(r, function(a, c) {
    e["get" + a] = function() {
      return k(this[0], n(this), c)
    };
    8 != c && (e["getUTC" + a] = function() {
      return k(this[0], !0, c)
    });
    7 != c && (e["set" + a] = function(a) {
        G(this, c, a, arguments, n(this));
        return this
      }, 8 !=
      c && (e["setUTC" + a] = function(a) {
        G(this, c, a, arguments, !0);
        return this
      }, e["add" + (R[c] || a)] = function(a, d) {
        J(this, c, a, d);
        return this
      }, e["diff" + (R[c] || a)] = function(a) {
        return L(this, a, c)
      }))
  });
  e.getWeek = function() {
    return w(l(k, this, !1))
  };
  e.getUTCWeek = function() {
    return w(l(k, this, !0))
  };
  e.setWeek = function(a, c) {
    N(this, a, c, !1);
    return this
  };
  e.setUTCWeek = function(a, c) {
    N(this, a, c, !0);
    return this
  };
  e.addWeeks = function(a) {
    return this.addDays(7 * Number(a))
  };
  e.diffWeeks = function(a) {
    return L(this, a, 2) / 7
  };
  h.parsers = [function(a,
    c, b) {
    if (a = a.match(/^(\d{4})(-(\d{2})(-(\d{2})([T ](\d{2}):(\d{2})(:(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/)) {
      var d = new g(p(a[1], a[3] ? a[3] - 1 : 0, a[5] || 1, a[7] || 0, a[8] || 0, a[10] || 0, a[12] ? 1E3 * Number("0." + a[12]) : 0));
      a[13] ? a[14] && d.setUTCMinutes(d.getUTCMinutes() + ("-" == a[15] ? 1 : -1) * (60 * Number(a[16]) + (a[18] ? Number(a[18]) : 0))) : c || (d = v(d));
      return b.setTime(d.getTime())
    }
  }];
  h.parse = function(a) {
    return +h("" + a)
  };
  e.toString = function(a, c, b) {
    return a !== t && C(this) ? O(this, a, c, b, n(this)) : this[0].toString()
  };
  e.toUTCString = e.toGMTString = function(a, c, b) {
    return a !== t && C(this) ? O(this, a, c, b, !0) : this[0].toUTCString()
  };
  e.toISOString = function() {
    return this.toUTCString("yyyy-MM-dd'T'HH:mm:ss(.fff)zzz")
  };
  h.defaultLocale = "";
  h.locales = {
    "": {
      monthNames: "January February March April May June July August September October November December".split(" "),
      monthNamesShort: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
      dayNames: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
      dayNamesShort: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
      amDesignator: "AM",
      pmDesignator: "PM"
    }
  };
  h.formatters = {
    i: "yyyy-MM-dd'T'HH:mm:ss(.fff)",
    u: "yyyy-MM-dd'T'HH:mm:ss(.fff)zzz"
  };
  Q("getTime valueOf toDateString toTimeString toLocaleString toLocaleDateString toLocaleTimeString toJSON".split(" "), function(a) {
    e[a] = function() {
      return this[0][a]()
    }
  });
  e.setTime = function(a) {
    this[0].setTime(a);
    return this
  };
  e.valid = D(C);
  e.clone = function() {
    return new h(this)
  };
  e.clearTime = function() {
    return this.setHours(0, 0, 0, 0)
  };
  e.toDate = function() {
    return new g(this[0].getTime())
  };
  h.now = function() {
    return (new g).getTime()
  };
  h.today = function() {
    return (new h).clearTime()
  };
  h.UTC = p;
  h.getDaysInMonth = I;
  "undefined" !== typeof module && module.exports && (module.exports = h);
  "function" === typeof define && define.amd && define([], function() {
    return h
  });
  return h
}(Date, Math, Array);
