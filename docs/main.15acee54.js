parcelRequire = (function(e, r, t, n) {
  var i,
    o = "function" == typeof parcelRequire && parcelRequire,
    u = "function" == typeof require && require;
  function f(t, n) {
    if (!r[t]) {
      if (!e[t]) {
        var i = "function" == typeof parcelRequire && parcelRequire;
        if (!n && i) return i(t, !0);
        if (o) return o(t, !0);
        if (u && "string" == typeof t) return u(t);
        var c = new Error("Cannot find module '" + t + "'");
        throw ((c.code = "MODULE_NOT_FOUND"), c);
      }
      (p.resolve = function(r) {
        return e[t][1][r] || r;
      }),
        (p.cache = {});
      var l = (r[t] = new f.Module(t));
      e[t][0].call(l.exports, p, l, l.exports, this);
    }
    return r[t].exports;
    function p(e) {
      return f(p.resolve(e));
    }
  }
  (f.isParcelRequire = !0),
    (f.Module = function(e) {
      (this.id = e), (this.bundle = f), (this.exports = {});
    }),
    (f.modules = e),
    (f.cache = r),
    (f.parent = o),
    (f.register = function(r, t) {
      e[r] = [
        function(e, r) {
          r.exports = t;
        },
        {}
      ];
    });
  for (var c = 0; c < t.length; c++)
    try {
      f(t[c]);
    } catch (e) {
      i || (i = e);
    }
  if (t.length) {
    var l = f(t[t.length - 1]);
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = l)
      : "function" == typeof define && define.amd
      ? define(function() {
          return l;
        })
      : n && (this[n] = l);
  }
  if (((parcelRequire = f), i)) throw i;
  return f;
})(
  {
    qy9T: [
      function(require, module, exports) {
        var indexOf = function(e, t) {
            if (e.indexOf) return e.indexOf(t);
            for (var n = 0; n < e.length; n++) if (e[n] === t) return n;
            return -1;
          },
          Object_keys = function(e) {
            if (Object.keys) return Object.keys(e);
            var t = [];
            for (var n in e) t.push(n);
            return t;
          },
          forEach = function(e, t) {
            if (e.forEach) return e.forEach(t);
            for (var n = 0; n < e.length; n++) t(e[n], n, e);
          },
          defineProp = (function() {
            try {
              return (
                Object.defineProperty({}, "_", {}),
                function(e, t, n) {
                  Object.defineProperty(e, t, {
                    writable: !0,
                    enumerable: !1,
                    configurable: !0,
                    value: n
                  });
                }
              );
            } catch (e) {
              return function(e, t, n) {
                e[t] = n;
              };
            }
          })(),
          globals = [
            "Array",
            "Boolean",
            "Date",
            "Error",
            "EvalError",
            "Function",
            "Infinity",
            "JSON",
            "Math",
            "NaN",
            "Number",
            "Object",
            "RangeError",
            "ReferenceError",
            "RegExp",
            "String",
            "SyntaxError",
            "TypeError",
            "URIError",
            "decodeURI",
            "decodeURIComponent",
            "encodeURI",
            "encodeURIComponent",
            "escape",
            "eval",
            "isFinite",
            "isNaN",
            "parseFloat",
            "parseInt",
            "undefined",
            "unescape"
          ];
        function Context() {}
        Context.prototype = {};
        var Script = (exports.Script = function(e) {
          if (!(this instanceof Script)) return new Script(e);
          this.code = e;
        });
        (Script.prototype.runInContext = function(e) {
          if (!(e instanceof Context))
            throw new TypeError("needs a 'context' argument.");
          var t = document.createElement("iframe");
          t.style || (t.style = {}),
            (t.style.display = "none"),
            document.body.appendChild(t);
          var n = t.contentWindow,
            r = n.eval,
            o = n.execScript;
          !r && o && (o.call(n, "null"), (r = n.eval)),
            forEach(Object_keys(e), function(t) {
              n[t] = e[t];
            }),
            forEach(globals, function(t) {
              e[t] && (n[t] = e[t]);
            });
          var c = Object_keys(n),
            i = r.call(n, this.code);
          return (
            forEach(Object_keys(n), function(t) {
              (t in e || -1 === indexOf(c, t)) && (e[t] = n[t]);
            }),
            forEach(globals, function(t) {
              t in e || defineProp(e, t, n[t]);
            }),
            document.body.removeChild(t),
            i
          );
        }),
          (Script.prototype.runInThisContext = function() {
            return eval(this.code);
          }),
          (Script.prototype.runInNewContext = function(e) {
            var t = Script.createContext(e),
              n = this.runInContext(t);
            return (
              e &&
                forEach(Object_keys(t), function(n) {
                  e[n] = t[n];
                }),
              n
            );
          }),
          forEach(Object_keys(Script.prototype), function(e) {
            exports[e] = Script[e] = function(t) {
              var n = Script(t);
              return n[e].apply(n, [].slice.call(arguments, 1));
            };
          }),
          (exports.isContext = function(e) {
            return e instanceof Context;
          }),
          (exports.createScript = function(e) {
            return exports.Script(e);
          }),
          (exports.createContext = Script.createContext = function(e) {
            var t = new Context();
            return (
              "object" == typeof e &&
                forEach(Object_keys(e), function(n) {
                  t[n] = e[n];
                }),
              t
            );
          });
      },
      {}
    ],
    VLyP: [
      function(require, module, exports) {
        var define;
        var e,
          t = function(e) {
            function t(e) {
              for (var t in ((G = e || {}), W))
                Object.prototype.hasOwnProperty.call(G, t) || (G[t] = W[t]);
              H = G.sourceFile || null;
            }
            function r(e, t) {
              var r = Y(X, e);
              t += " (" + r.line + ":" + r.column + ")";
              var n = new SyntaxError(t);
              throw ((n.pos = e), (n.loc = r), (n.raisedAt = z), n);
            }
            function n(e) {
              function t(e) {
                if (1 == e.length)
                  return (r += "return str === " + JSON.stringify(e[0]) + ";");
                r += "switch(str){";
                for (var t = 0; t < e.length; ++t)
                  r += "case " + JSON.stringify(e[t]) + ":";
                r += "return true}return false;";
              }
              e = e.split(" ");
              var r = "",
                n = [],
                o = 0;
              e: for (; o < e.length; ++o) {
                for (var a = 0; a < n.length; ++a)
                  if (n[a][0].length == e[o].length) {
                    n[a].push(e[o]);
                    continue e;
                  }
                n.push([e[o]]);
              }
              if (3 < n.length) {
                for (
                  n.sort(function(e, t) {
                    return t.length - e.length;
                  }),
                    r += "switch(str.length){",
                    o = 0;
                  o < n.length;
                  ++o
                )
                  (e = n[o]), (r += "case " + e[0].length + ":"), t(e);
                r += "}";
              } else t(e);
              return new Function("str", r);
            }
            function o() {
              (this.line = ne), (this.column = z - oe);
            }
            function a(e, t) {
              ($ = z),
                G.locations && (Q = new o()),
                (ee = e),
                s(),
                (te = t),
                (re = e.beforeExpr);
            }
            function i() {
              for (
                var e = z,
                  t = G.onComment && G.locations && new o(),
                  r = X.charCodeAt((z += 2));
                z < J && 10 !== r && 13 !== r && 8232 !== r && 8233 !== r;

              )
                ++z, (r = X.charCodeAt(z));
              G.onComment &&
                G.onComment(
                  !1,
                  X.slice(e + 2, z),
                  e,
                  z,
                  t,
                  G.locations && new o()
                );
            }
            function s() {
              for (; z < J; ) {
                if (32 === (e = X.charCodeAt(z))) ++z;
                else if (13 === e)
                  ++z,
                    10 === (e = X.charCodeAt(z)) && ++z,
                    G.locations && (++ne, (oe = z));
                else if (10 === e || 8232 === e || 8233 === e)
                  ++z, G.locations && (++ne, (oe = z));
                else if (8 < e && 14 > e) ++z;
                else if (47 === e)
                  if (42 === (e = X.charCodeAt(z + 1))) {
                    var e = G.onComment && G.locations && new o(),
                      t = z,
                      n = X.indexOf("*/", (z += 2));
                    if (
                      (-1 === n && r(z - 2, "Unterminated comment"),
                      (z = n + 2),
                      G.locations)
                    ) {
                      Ct.lastIndex = t;
                      for (var a = void 0; (a = Ct.exec(X)) && a.index < z; )
                        ++ne, (oe = a.index + a[0].length);
                    }
                    G.onComment &&
                      G.onComment(
                        !0,
                        X.slice(t + 2, n),
                        t,
                        z,
                        e,
                        G.locations && new o()
                      );
                  } else {
                    if (47 !== e) break;
                    i();
                  }
                else if (160 === e) ++z;
                else {
                  if (!(5760 <= e && xt.test(String.fromCharCode(e)))) break;
                  ++z;
                }
              }
            }
            function p(e) {
              if ((e ? (z = Z + 1) : (Z = z), G.locations && (K = new o()), e))
                return u();
              if (z >= J) return a(be);
              var t = X.charCodeAt(z);
              if (Ot(t) || 92 === t) return d();
              if (
                !1 ===
                (e = (function(e) {
                  switch (e) {
                    case 46:
                      return (
                        48 <= (e = X.charCodeAt(z + 1)) && 57 >= e
                          ? (e = f(!0))
                          : (++z, (e = a(Ke))),
                        e
                      );
                    case 40:
                      return ++z, a(We);
                    case 41:
                      return ++z, a(Ye);
                    case 59:
                      return ++z, a(Ze);
                    case 44:
                      return ++z, a(ze);
                    case 91:
                      return ++z, a(Ge);
                    case 93:
                      return ++z, a(Xe);
                    case 123:
                      return ++z, a(Je);
                    case 125:
                      return ++z, a(He);
                    case 58:
                      return ++z, a($e);
                    case 63:
                      return ++z, a(Qe);
                    case 48:
                      if (120 === (e = X.charCodeAt(z + 1)) || 88 === e)
                        return (
                          (z += 2),
                          null == (e = c(16)) &&
                            r(Z + 2, "Expected hexadecimal number"),
                          Ot(X.charCodeAt(z)) &&
                            r(z, "Identifier directly after number"),
                          a(fe, e)
                        );
                    case 49:
                    case 50:
                    case 51:
                    case 52:
                    case 53:
                    case 54:
                    case 55:
                    case 56:
                    case 57:
                      return f(!1);
                    case 34:
                    case 39:
                      e: {
                        z++;
                        for (var t = ""; ; ) {
                          if (
                            (z >= J && r(Z, "Unterminated string constant"),
                            (n = X.charCodeAt(z)) === e)
                          ) {
                            ++z, (e = a(ye, t));
                            break e;
                          }
                          if (92 === n) {
                            var n = X.charCodeAt(++z),
                              o = /^[0-7]+/.exec(X.slice(z, z + 3));
                            for (o && (o = o[0]); o && 255 < parseInt(o, 8); )
                              o = o.slice(0, -1);
                            if (("0" === o && (o = null), ++z, o))
                              ue && r(z - 2, "Octal literal in strict mode"),
                                (t += String.fromCharCode(parseInt(o, 8))),
                                (z += o.length - 1);
                            else
                              switch (n) {
                                case 110:
                                  t += "\n";
                                  break;
                                case 114:
                                  t += "\r";
                                  break;
                                case 120:
                                  t += String.fromCharCode(h(2));
                                  break;
                                case 117:
                                  t += String.fromCharCode(h(4));
                                  break;
                                case 85:
                                  t += String.fromCharCode(h(8));
                                  break;
                                case 116:
                                  t += "\t";
                                  break;
                                case 98:
                                  t += "\b";
                                  break;
                                case 118:
                                  t += "\v";
                                  break;
                                case 102:
                                  t += "\f";
                                  break;
                                case 48:
                                  t += "\0";
                                  break;
                                case 13:
                                  10 === X.charCodeAt(z) && ++z;
                                case 10:
                                  G.locations && ((oe = z), ++ne);
                                  break;
                                default:
                                  t += String.fromCharCode(n);
                              }
                          } else
                            (13 !== n &&
                              10 !== n &&
                              8232 !== n &&
                              8233 !== n) ||
                              r(Z, "Unterminated string constant"),
                              (t += String.fromCharCode(n)),
                              ++z;
                        }
                      }
                      return e;
                    case 47:
                      return (
                        (e = X.charCodeAt(z + 1)),
                        re
                          ? (++z, (e = u()))
                          : (e = 61 === e ? l(rt, 2) : l(et, 1)),
                        e
                      );
                    case 37:
                    case 42:
                      return (e =
                        61 === (e = X.charCodeAt(z + 1)) ? l(rt, 2) : l(yt, 1));
                    case 124:
                    case 38:
                      return (e =
                        (t = X.charCodeAt(z + 1)) === e
                          ? l(124 === e ? at : it, 2)
                          : 61 === t
                          ? l(rt, 2)
                          : l(124 === e ? st : lt, 1));
                    case 94:
                      return (e =
                        61 === (e = X.charCodeAt(z + 1)) ? l(rt, 2) : l(pt, 1));
                    case 43:
                    case 45:
                      return (
                        (t = X.charCodeAt(z + 1)) === e
                          ? 45 == t &&
                            62 == X.charCodeAt(z + 2) &&
                            St.test(X.slice(ie, z))
                            ? ((z += 3), i(), s(), (e = p()))
                            : (e = l(nt, 2))
                          : (e = 61 === t ? l(rt, 2) : l(ht, 1)),
                        e
                      );
                    case 60:
                    case 62:
                      return (
                        (n = 1),
                        (t = X.charCodeAt(z + 1)) === e
                          ? ((n =
                              62 === e && 62 === X.charCodeAt(z + 2) ? 3 : 2),
                            (e =
                              61 === X.charCodeAt(z + n)
                                ? l(rt, n + 1)
                                : l(ft, n)))
                          : 33 == t &&
                            60 == e &&
                            45 == X.charCodeAt(z + 2) &&
                            45 == X.charCodeAt(z + 3)
                          ? ((z += 4), i(), s(), (e = p()))
                          : (61 === t &&
                              (n = 61 === X.charCodeAt(z + 2) ? 3 : 2),
                            (e = l(ct, n))),
                        e
                      );
                    case 61:
                    case 33:
                      return (e =
                        61 === (t = X.charCodeAt(z + 1))
                          ? l(ut, 61 === X.charCodeAt(z + 2) ? 3 : 2)
                          : l(61 === e ? tt : ot, 1));
                    case 126:
                      return l(ot, 1);
                  }
                  return !1;
                })(t))
              ) {
                if ("\\" === (t = String.fromCharCode(t)) || kt.test(t))
                  return d();
                r(z, "Unexpected character '" + t + "'");
              }
              return e;
            }
            function l(e, t) {
              var r = X.slice(z, z + t);
              (z += t), a(e, r);
            }
            function u() {
              for (var e, t, n = z; ; ) {
                z >= J && r(n, "Unterminated regular expression");
                var o = X.charAt(z);
                if ((St.test(o) && r(n, "Unterminated regular expression"), e))
                  e = !1;
                else {
                  if ("[" === o) t = !0;
                  else if ("]" === o && t) t = !1;
                  else if ("/" === o && !t) break;
                  e = "\\" === o;
                }
                ++z;
              }
              return (
                (e = X.slice(n, z)),
                ++z,
                (t = y()) &&
                  !/^[gmsiy]*$/.test(t) &&
                  r(n, "Invalid regexp flag"),
                a(he, new RegExp(e, t))
              );
            }
            function c(e, t) {
              for (
                var r = z, n = 0, o = 0, a = null == t ? 1 / 0 : t;
                o < a;
                ++o
              ) {
                var i;
                if (
                  (i =
                    97 <= (i = X.charCodeAt(z))
                      ? i - 97 + 10
                      : 65 <= i
                      ? i - 65 + 10
                      : 48 <= i && 57 >= i
                      ? i - 48
                      : 1 / 0) >= e
                )
                  break;
                ++z, (n = n * e + i);
              }
              return z === r || (null != t && z - r !== t) ? null : n;
            }
            function f(e) {
              var t,
                n = z,
                o = !1,
                i = 48 === X.charCodeAt(z);
              return (
                e || null !== c(10) || r(n, "Invalid number"),
                46 === X.charCodeAt(z) && (++z, c(10), (o = !0)),
                (69 !== (e = X.charCodeAt(z)) && 101 !== e) ||
                  ((43 !== (e = X.charCodeAt(++z)) && 45 !== e) || ++z,
                  null === c(10) && r(n, "Invalid number"),
                  (o = !0)),
                Ot(X.charCodeAt(z)) && r(z, "Identifier directly after number"),
                (e = X.slice(n, z)),
                o
                  ? (t = parseFloat(e))
                  : i && 1 !== e.length
                  ? /[89]/.test(e) || ue
                    ? r(n, "Invalid number")
                    : (t = parseInt(e, 8))
                  : (t = parseInt(e, 10)),
                a(fe, t)
              );
            }
            function h(e) {
              return (
                null === (e = c(16, e)) &&
                  r(Z, "Bad character escape sequence"),
                e
              );
            }
            function y() {
              bt = !1;
              for (var e, t = !0, n = z; ; ) {
                var o = X.charCodeAt(z);
                if (At(o)) bt && (e += X.charAt(z)), ++z;
                else {
                  if (92 !== o) break;
                  bt || (e = X.slice(n, z)),
                    (bt = !0),
                    117 != X.charCodeAt(++z) &&
                      r(z, "Expecting Unicode escape sequence \\uXXXX"),
                    ++z;
                  o = h(4);
                  var a = String.fromCharCode(o);
                  a || r(z - 1, "Invalid Unicode escape"),
                    (t ? Ot(o) : At(o)) || r(z - 4, "Invalid Unicode escape"),
                    (e += a);
                }
                t = !1;
              }
              return bt ? e : X.slice(n, z);
            }
            function d() {
              var e = y(),
                t = de;
              return (
                bt ||
                  (Et(e)
                    ? (t = Ve[e])
                    : ((G.forbidReserved &&
                        (3 === G.ecmaVersion ? gt : vt)(e)) ||
                        (ue && mt(e))) &&
                      r(Z, "The keyword '" + e + "' is reserved")),
                a(t, e)
              );
            }
            function b() {
              (ae = Z), (ie = $), (se = Q), p();
            }
            function g(e) {
              if (((ue = e), (z = ie), G.locations))
                for (; z < oe; ) (oe = X.lastIndexOf("\n", oe - 2) + 1), --ne;
              s(), p();
            }
            function v() {
              (this.type = null), (this.start = Z), (this.end = null);
            }
            function m() {
              (this.start = K),
                (this.end = null),
                null !== H && (this.source = H);
            }
            function w() {
              var e = new v();
              return (
                G.locations && (e.loc = new m()),
                G.directSourceFile && (e.sourceFile = G.directSourceFile),
                G.ranges && (e.range = [Z, 0]),
                e
              );
            }
            function E(e) {
              var t = new v();
              return (
                (t.start = e.start),
                G.locations && ((t.loc = new m()), (t.loc.start = e.loc.start)),
                G.ranges && (t.range = [e.range[0], 0]),
                t
              );
            }
            function x(e, t) {
              return (
                (e.type = t),
                (e.end = ie),
                G.locations && (e.loc.end = se),
                G.ranges && (e.range[1] = ie),
                e
              );
            }
            function k(e) {
              return (
                5 <= G.ecmaVersion &&
                "ExpressionStatement" === e.type &&
                "Literal" === e.expression.type &&
                "use strict" === e.expression.value
              );
            }
            function P(e) {
              if (ee === e) return b(), !0;
            }
            function S() {
              return (
                !G.strictSemicolons &&
                (ee === be || ee === He || St.test(X.slice(ie, Z)))
              );
            }
            function C() {
              P(Ze) || S() || A();
            }
            function O(e) {
              ee === e ? b() : A();
            }
            function A() {
              r(Z, "Unexpected token");
            }
            function j(e) {
              "Identifier" !== e.type &&
                "MemberExpression" !== e.type &&
                r(e.start, "Assigning to rvalue"),
                ue &&
                  "Identifier" === e.type &&
                  wt(e.name) &&
                  r(e.start, "Assigning to " + e.name + " in strict mode");
            }
            function T() {
              (ee === et || (ee === rt && "/=" == te)) && p(!0);
              var e = ee,
                t = w();
              switch (e) {
                case ge:
                case we:
                  b();
                  var n = e === ge;
                  P(Ze) || S()
                    ? (t.label = null)
                    : ee !== de
                    ? A()
                    : ((t.label = V()), C());
                  for (var o = 0; o < le.length; ++o) {
                    var a = le[o];
                    if (null == t.label || a.name === t.label.name) {
                      if (null != a.kind && (n || "loop" === a.kind)) break;
                      if (t.label && n) break;
                    }
                  }
                  return (
                    o === le.length && r(t.start, "Unsyntactic " + e.keyword),
                    x(t, n ? "BreakStatement" : "ContinueStatement")
                  );
                case Ee:
                  return b(), C(), x(t, "DebuggerStatement");
                case ke:
                  return (
                    b(),
                    le.push(jt),
                    (t.body = T()),
                    le.pop(),
                    O(Ue),
                    (t.test = I()),
                    C(),
                    x(t, "DoWhileStatement")
                  );
                case Ce:
                  return (
                    b(),
                    le.push(jt),
                    O(We),
                    ee === Ze
                      ? R(t, null)
                      : ee === Re
                      ? ((e = w()),
                        b(),
                        M(e, !0),
                        x(e, "VariableDeclaration"),
                        1 === e.declarations.length && P(Be)
                          ? U(t, e)
                          : R(t, e))
                      : ((e = L(!1, !0)), P(Be) ? (j(e), U(t, e)) : R(t, e))
                  );
                case Oe:
                  return b(), q(t, !0);
                case Ae:
                  return (
                    b(),
                    (t.test = I()),
                    (t.consequent = T()),
                    (t.alternate = P(Pe) ? T() : null),
                    x(t, "IfStatement")
                  );
                case je:
                  return (
                    pe || r(Z, "'return' outside of function"),
                    b(),
                    P(Ze) || S()
                      ? (t.argument = null)
                      : ((t.argument = L()), C()),
                    x(t, "ReturnStatement")
                  );
                case Te:
                  for (
                    b(), t.discriminant = I(), t.cases = [], O(Je), le.push(Tt);
                    ee != He;

                  )
                    ee === ve || ee === xe
                      ? ((e = ee === ve),
                        o && x(o, "SwitchCase"),
                        t.cases.push((o = w())),
                        (o.consequent = []),
                        b(),
                        e
                          ? (o.test = L())
                          : (n && r(ae, "Multiple default clauses"),
                            (n = !0),
                            (o.test = null)),
                        O($e))
                      : (o || A(), o.consequent.push(T()));
                  return (
                    o && x(o, "SwitchCase"),
                    b(),
                    le.pop(),
                    x(t, "SwitchStatement")
                  );
                case Ie:
                  return (
                    b(),
                    St.test(X.slice(ie, Z)) &&
                      r(ie, "Illegal newline after throw"),
                    (t.argument = L()),
                    C(),
                    x(t, "ThrowStatement")
                  );
                case Ne:
                  return (
                    b(),
                    (t.block = N()),
                    (t.handler = null),
                    ee === me &&
                      ((e = w()),
                      b(),
                      O(We),
                      (e.param = V()),
                      ue &&
                        wt(e.param.name) &&
                        r(
                          e.param.start,
                          "Binding " + e.param.name + " in strict mode"
                        ),
                      O(Ye),
                      (e.guard = null),
                      (e.body = N()),
                      (t.handler = x(e, "CatchClause"))),
                    (t.guardedHandlers = ce),
                    (t.finalizer = P(Se) ? N() : null),
                    t.handler ||
                      t.finalizer ||
                      r(t.start, "Missing catch or finally clause"),
                    x(t, "TryStatement")
                  );
                case Re:
                  return b(), M(t), C(), x(t, "VariableDeclaration");
                case Ue:
                  return (
                    b(),
                    (t.test = I()),
                    le.push(jt),
                    (t.body = T()),
                    le.pop(),
                    x(t, "WhileStatement")
                  );
                case Me:
                  return (
                    ue && r(Z, "'with' in strict mode"),
                    b(),
                    (t.object = I()),
                    (t.body = T()),
                    x(t, "WithStatement")
                  );
                case Je:
                  return N();
                case Ze:
                  return b(), x(t, "EmptyStatement");
                default:
                  if (
                    ((n = te),
                    (a = L()),
                    e === de && "Identifier" === a.type && P($e))
                  ) {
                    for (o = 0; o < le.length; ++o)
                      le[o].name === n &&
                        r(a.start, "Label '" + n + "' is already declared");
                    return (
                      (e = ee.isLoop ? "loop" : ee === Te ? "switch" : null),
                      le.push({ name: n, kind: e }),
                      (t.body = T()),
                      le.pop(),
                      (t.label = a),
                      x(t, "LabeledStatement")
                    );
                  }
                  return (t.expression = a), C(), x(t, "ExpressionStatement");
              }
            }
            function I() {
              O(We);
              var e = L();
              return O(Ye), e;
            }
            function N(e) {
              var t,
                r = w(),
                n = !0,
                o = !1;
              for (r.body = [], O(Je); !P(He); ) {
                var a = T();
                r.body.push(a),
                  n && e && k(a) && ((t = o), g((o = !0))),
                  (n = !1);
              }
              return o && !t && g(!1), x(r, "BlockStatement");
            }
            function R(e, t) {
              return (
                (e.init = t),
                O(Ze),
                (e.test = ee === Ze ? null : L()),
                O(Ze),
                (e.update = ee === Ye ? null : L()),
                O(Ye),
                (e.body = T()),
                le.pop(),
                x(e, "ForStatement")
              );
            }
            function U(e, t) {
              return (
                (e.left = t),
                (e.right = L()),
                O(Ye),
                (e.body = T()),
                le.pop(),
                x(e, "ForInStatement")
              );
            }
            function M(e, t) {
              for (e.declarations = [], e.kind = "var"; ; ) {
                var n = w();
                if (
                  ((n.id = V()),
                  ue &&
                    wt(n.id.name) &&
                    r(n.id.start, "Binding " + n.id.name + " in strict mode"),
                  (n.init = P(tt) ? L(!0, t) : null),
                  e.declarations.push(x(n, "VariableDeclarator")),
                  !P(ze))
                )
                  break;
              }
              return e;
            }
            function L(e, t) {
              var r = F(t);
              if (!e && ee === ze) {
                var n = E(r);
                for (n.expressions = [r]; P(ze); ) n.expressions.push(F(t));
                return x(n, "SequenceExpression");
              }
              return r;
            }
            function F(e) {
              var t, r;
              if (
                ((r = t = e),
                (r = (function e(t, r, n) {
                  var o = ee.binop;
                  if (null != o && (!n || ee !== Be) && o > r) {
                    var a = E(t);
                    return (
                      (a.left = t),
                      (a.operator = te),
                      (t = ee),
                      b(),
                      (a.right = e(D(), o, n)),
                      (o = x(
                        a,
                        t === at || t === it
                          ? "LogicalExpression"
                          : "BinaryExpression"
                      )),
                      e(o, r, n)
                    );
                  }
                  return t;
                })(D(), -1, r)),
                P(Qe))
              ) {
                var n = E(r);
                (n.test = r),
                  (n.consequent = L(!0)),
                  O($e),
                  (n.alternate = L(!0, t)),
                  (t = x(n, "ConditionalExpression"));
              } else t = r;
              return ee.isAssign
                ? (((r = E(t)).operator = te),
                  (r.left = t),
                  b(),
                  (r.right = F(e)),
                  j(t),
                  x(r, "AssignmentExpression"))
                : t;
            }
            function D() {
              if (ee.prefix) {
                var e = w(),
                  t = ee.isUpdate;
                return (
                  (e.operator = te),
                  (re = e.prefix = !0),
                  b(),
                  (e.argument = D()),
                  t
                    ? j(e.argument)
                    : ue &&
                      "delete" === e.operator &&
                      "Identifier" === e.argument.type &&
                      r(e.start, "Deleting local variable in strict mode"),
                  x(e, t ? "UpdateExpression" : "UnaryExpression")
                );
              }
              for (
                t = _(
                  (function e() {
                    switch (ee) {
                      case Fe:
                        var t = w();
                        return b(), x(t, "ThisExpression");
                      case de:
                        return V();
                      case fe:
                      case ye:
                      case he:
                        return (
                          ((t = w()).value = te),
                          (t.raw = X.slice(Z, $)),
                          b(),
                          x(t, "Literal")
                        );
                      case De:
                      case _e:
                      case qe:
                        return (
                          ((t = w()).value = ee.atomValue),
                          (t.raw = ee.keyword),
                          b(),
                          x(t, "Literal")
                        );
                      case We:
                        var t = K,
                          n = Z;
                        b();
                        var o = L();
                        return (
                          (o.start = n),
                          (o.end = $),
                          G.locations && ((o.loc.start = t), (o.loc.end = Q)),
                          G.ranges && (o.range = [n, $]),
                          O(Ye),
                          o
                        );
                      case Ge:
                        return (
                          (t = w()),
                          b(),
                          (t.elements = B(Xe, !0, !0)),
                          x(t, "ArrayExpression")
                        );
                      case Je:
                        for (
                          t = w(), n = !0, o = !1, t.properties = [], b();
                          !P(He);

                        ) {
                          if (n) n = !1;
                          else if ((O(ze), G.allowTrailingCommas && P(He)))
                            break;
                          var a,
                            i = { key: ee === fe || ee === ye ? e() : V(!0) },
                            s = !1;
                          if (
                            (P($e)
                              ? ((i.value = L(!0)), (a = i.kind = "init"))
                              : 5 <= G.ecmaVersion &&
                                "Identifier" === i.key.type &&
                                ("get" === i.key.name || "set" === i.key.name)
                              ? ((s = o = !0),
                                (a = i.kind = i.key.name),
                                (i.key = ee === fe || ee === ye ? e() : V(!0)),
                                ee !== We && A(),
                                (i.value = q(w(), !1)))
                              : A(),
                            "Identifier" === i.key.type && (ue || o))
                          )
                            for (var p = 0; p < t.properties.length; ++p) {
                              var l = t.properties[p];
                              if (l.key.name === i.key.name) {
                                var u =
                                  a == l.kind ||
                                  (s && "init" === l.kind) ||
                                  ("init" === a &&
                                    ("get" === l.kind || "set" === l.kind));
                                u &&
                                  !ue &&
                                  "init" === a &&
                                  "init" === l.kind &&
                                  (u = !1),
                                  u &&
                                    r(i.key.start, "Redefinition of property");
                              }
                            }
                          t.properties.push(i);
                        }
                        return (t = x(t, "ObjectExpression"));
                      case Oe:
                        return (t = w()), b(), q(t, !1);
                      case Le:
                        return (
                          (t = w()),
                          b(),
                          (t.callee = _(e(), !0)),
                          P(We)
                            ? (t.arguments = B(Ye, !1))
                            : (t.arguments = ce),
                          (t = x(t, "NewExpression"))
                        );
                      default:
                        A();
                    }
                  })()
                );
                ee.postfix && !S();

              )
                ((e = E(t)).operator = te),
                  (e.prefix = !1),
                  (e.argument = t),
                  j(t),
                  b(),
                  (t = x(e, "UpdateExpression"));
              return t;
            }
            function _(e, t) {
              if (P(Ke)) {
                var r = E(e);
                return (
                  (r.object = e),
                  (r.property = V(!0)),
                  (r.computed = !1),
                  _(x(r, "MemberExpression"), t)
                );
              }
              return P(Ge)
                ? (((r = E(e)).object = e),
                  (r.property = L()),
                  (r.computed = !0),
                  O(Xe),
                  _(x(r, "MemberExpression"), t))
                : !t && P(We)
                ? (((r = E(e)).callee = e),
                  (r.arguments = B(Ye, !1)),
                  _(x(r, "CallExpression"), t))
                : e;
            }
            function q(e, t) {
              ee === de ? (e.id = V()) : t ? A() : (e.id = null),
                (e.params = []);
              var n = !0;
              for (O(We); !P(Ye); ) n ? (n = !1) : O(ze), e.params.push(V());
              n = pe;
              var o = le;
              if (
                ((pe = !0),
                (le = []),
                (e.body = N(!0)),
                (pe = n),
                (le = o),
                ue || (e.body.body.length && k(e.body.body[0])))
              )
                for (n = e.id ? -1 : 0; n < e.params.length; ++n)
                  if (
                    ((o = 0 > n ? e.id : e.params[n]),
                    (mt(o.name) || wt(o.name)) &&
                      r(o.start, "Defining '" + o.name + "' in strict mode"),
                    0 <= n)
                  )
                    for (var a = 0; a < n; ++a)
                      o.name === e.params[a].name &&
                        r(o.start, "Argument name clash in strict mode");
              return x(e, t ? "FunctionDeclaration" : "FunctionExpression");
            }
            function B(e, t, r) {
              for (var n = [], o = !0; !P(e); ) {
                if (o) o = !1;
                else if ((O(ze), t && G.allowTrailingCommas && P(e))) break;
                r && ee === ze ? n.push(null) : n.push(L(!0));
              }
              return n;
            }
            function V(e) {
              var t = w();
              return (
                (t.name =
                  ee === de
                    ? te
                    : (e && !G.forbidReserved && ee.keyword) || A()),
                (re = !1),
                b(),
                x(t, "Identifier")
              );
            }
            var G, X, J, H;
            (e.version = "0.4.1"),
              (e.parse = function(e, r) {
                (X = String(e)),
                  (J = X.length),
                  t(r),
                  (ne = 1),
                  (z = oe = 0),
                  (re = !0),
                  s();
                var n,
                  a = G.program;
                (ae = ie = z),
                  G.locations && (se = new o()),
                  (pe = ue = null),
                  (le = []),
                  p(),
                  (n = a || w());
                var i = !0;
                for (a || (n.body = []); ee !== be; )
                  (a = T()), n.body.push(a), i && k(a) && g(!0), (i = !1);
                return x(n, "Program");
              });
            var W = (e.defaultOptions = {
                ecmaVersion: 5,
                strictSemicolons: !1,
                allowTrailingCommas: !0,
                forbidReserved: !1,
                locations: !1,
                onComment: null,
                ranges: !1,
                program: null,
                sourceFile: null,
                directSourceFile: null
              }),
              Y = (e.getLineInfo = function(e, t) {
                for (var r = 1, n = 0; ; ) {
                  Ct.lastIndex = n;
                  var o = Ct.exec(e);
                  if (!(o && o.index < t)) break;
                  ++r, (n = o.index + o[0].length);
                }
                return { line: r, column: t - n };
              });
            e.tokenize = function(e, r) {
              function n(e) {
                return (
                  p(e),
                  (o.start = Z),
                  (o.end = $),
                  (o.startLoc = K),
                  (o.endLoc = Q),
                  (o.type = ee),
                  (o.value = te),
                  o
                );
              }
              (X = String(e)),
                (J = X.length),
                t(r),
                (ne = 1),
                (z = oe = 0),
                (re = !0),
                s();
              var o = {};
              return (
                (n.jumpTo = function(e, t) {
                  if (((z = e), G.locations)) {
                    (ne = 1), (oe = Ct.lastIndex = 0);
                    for (var r; (r = Ct.exec(X)) && r.index < e; )
                      ++ne, (oe = r.index + r[0].length);
                  }
                  (re = t), s();
                }),
                n
              );
            };
            var z,
              Z,
              $,
              K,
              Q,
              ee,
              te,
              re,
              ne,
              oe,
              ae,
              ie,
              se,
              pe,
              le,
              ue,
              ce = [],
              fe = { type: "num" },
              he = { type: "regexp" },
              ye = { type: "string" },
              de = { type: "name" },
              be = { type: "eof" },
              ge = { keyword: "break" },
              ve = { keyword: "case", beforeExpr: !0 },
              me = { keyword: "catch" },
              we = { keyword: "continue" },
              Ee = { keyword: "debugger" },
              xe = { keyword: "default" },
              ke = { keyword: "do", isLoop: !0 },
              Pe = { keyword: "else", beforeExpr: !0 },
              Se = { keyword: "finally" },
              Ce = { keyword: "for", isLoop: !0 },
              Oe = { keyword: "function" },
              Ae = { keyword: "if" },
              je = { keyword: "return", beforeExpr: !0 },
              Te = { keyword: "switch" },
              Ie = { keyword: "throw", beforeExpr: !0 },
              Ne = { keyword: "try" },
              Re = { keyword: "var" },
              Ue = { keyword: "while", isLoop: !0 },
              Me = { keyword: "with" },
              Le = { keyword: "new", beforeExpr: !0 },
              Fe = { keyword: "this" },
              De = { keyword: "null", atomValue: null },
              _e = { keyword: "true", atomValue: !0 },
              qe = { keyword: "false", atomValue: !1 },
              Be = { keyword: "in", binop: 7, beforeExpr: !0 },
              Ve = {
                break: ge,
                case: ve,
                catch: me,
                continue: we,
                debugger: Ee,
                default: xe,
                do: ke,
                else: Pe,
                finally: Se,
                for: Ce,
                function: Oe,
                if: Ae,
                return: je,
                switch: Te,
                throw: Ie,
                try: Ne,
                var: Re,
                while: Ue,
                with: Me,
                null: De,
                true: _e,
                false: qe,
                new: Le,
                in: Be,
                instanceof: { keyword: "instanceof", binop: 7, beforeExpr: !0 },
                this: Fe,
                typeof: { keyword: "typeof", prefix: !0, beforeExpr: !0 },
                void: { keyword: "void", prefix: !0, beforeExpr: !0 },
                delete: { keyword: "delete", prefix: !0, beforeExpr: !0 }
              },
              Ge = { type: "[", beforeExpr: !0 },
              Xe = { type: "]" },
              Je = { type: "{", beforeExpr: !0 },
              He = { type: "}" },
              We = { type: "(", beforeExpr: !0 },
              Ye = { type: ")" },
              ze = { type: ",", beforeExpr: !0 },
              Ze = { type: ";", beforeExpr: !0 },
              $e = { type: ":", beforeExpr: !0 },
              Ke = { type: "." },
              Qe = { type: "?", beforeExpr: !0 },
              et = { binop: 10, beforeExpr: !0 },
              tt = { isAssign: !0, beforeExpr: !0 },
              rt = { isAssign: !0, beforeExpr: !0 },
              nt = { postfix: !0, prefix: !0, isUpdate: !0 },
              ot = { prefix: !0, beforeExpr: !0 },
              at = { binop: 1, beforeExpr: !0 },
              it = { binop: 2, beforeExpr: !0 },
              st = { binop: 3, beforeExpr: !0 },
              pt = { binop: 4, beforeExpr: !0 },
              lt = { binop: 5, beforeExpr: !0 },
              ut = { binop: 6, beforeExpr: !0 },
              ct = { binop: 7, beforeExpr: !0 },
              ft = { binop: 8, beforeExpr: !0 },
              ht = { binop: 9, prefix: !0, beforeExpr: !0 },
              yt = { binop: 10, beforeExpr: !0 };
            for (var dt in ((e.tokTypes = {
              bracketL: Ge,
              bracketR: Xe,
              braceL: Je,
              braceR: He,
              parenL: We,
              parenR: Ye,
              comma: ze,
              semi: Ze,
              colon: $e,
              dot: Ke,
              question: Qe,
              slash: et,
              eq: tt,
              name: de,
              eof: be,
              num: fe,
              regexp: he,
              string: ye
            }),
            Ve))
              e.tokTypes["_" + dt] = Ve[dt];
            var bt,
              gt = n(
                "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile"
              ),
              vt = n("class enum extends super const export import"),
              mt = n(
                "implements interface let package private protected public static yield"
              ),
              wt = n("eval arguments"),
              Et = n(
                "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this"
              ),
              xt = /[\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff]/,
              kt = RegExp(
                "[ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԧԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠࢢ-ࢬऄ-हऽॐक़-ॡॱ-ॷॹ-ॿঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘౙౠౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൠൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛰᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦫᧁ-ᧇᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々-〇〡-〩〱-〵〸-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚗꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞓꞠ-Ɦꟸ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꪀ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ]"
              ),
              Pt = RegExp(
                "[ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԧԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠࢢ-ࢬऄ-हऽॐक़-ॡॱ-ॷॹ-ॿঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘౙౠౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൠൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛰᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦫᧁ-ᧇᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々-〇〡-〩〱-〵〸-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚗꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞓꞠ-Ɦꟸ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꪀ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ̀-ͯ҃-֑҇-ׇֽֿׁׂׅׄؐ-ؚؠ-ىٲ-ۓۧ-ۨۻ-ۼܰ-݊ࠀ-ࠔࠛ-ࠣࠥ-ࠧࠩ-࠭ࡀ-ࡗࣤ-ࣾऀ-ःऺ-़ा-ॏ॑-ॗॢ-ॣ०-९ঁ-ঃ়া-ৄেৈৗয়-ৠਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢ-ૣ૦-૯ଁ-ଃ଼ା-ୄେୈୋ-୍ୖୗୟ-ୠ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఁ-ఃె-ైొ-్ౕౖౢ-ౣ౦-౯ಂಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢ-ೣ೦-೯ംഃെ-ൈൗൢ-ൣ൦-൯ංඃ්ා-ුූෘ-ෟෲෳิ-ฺเ-ๅ๐-๙ິ-ູ່-ໍ໐-໙༘༙༠-༩༹༵༷ཁ-ཇཱ-྄྆-྇ྍ-ྗྙ-ྼ࿆က-ဩ၀-၉ၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟ᜎ-ᜐᜠ-ᜰᝀ-ᝐᝲᝳក-ឲ៝០-៩᠋-᠍᠐-᠙ᤠ-ᤫᤰ-᤻ᥑ-ᥭᦰ-ᧀᧈ-ᧉ᧐-᧙ᨀ-ᨕᨠ-ᩓ᩠-᩿᩼-᪉᪐-᪙ᭆ-ᭋ᭐-᭙᭫-᭳᮰-᮹᯦-᯳ᰀ-ᰢ᱀-᱉ᱛ-ᱽ᳐-᳒ᴀ-ᶾḁ-ἕ‌‍‿⁀⁔⃐-⃥⃜⃡-⃰ⶁ-ⶖⷠ-ⷿ〡-〨゙゚Ꙁ-ꙭꙴ-꙽ꚟ꛰-꛱ꟸ-ꠀ꠆ꠋꠣ-ꠧꢀ-ꢁꢴ-꣄꣐-꣙ꣳ-ꣷ꤀-꤉ꤦ-꤭ꤰ-ꥅꦀ-ꦃ꦳-꧀ꨀ-ꨧꩀ-ꩁꩌ-ꩍ꩐-꩙ꩻꫠ-ꫩꫲ-ꫳꯀ-ꯡ꯬꯭꯰-꯹ﬠ-ﬨ︀-️︠-︦︳︴﹍-﹏０-９＿]"
              ),
              St = /[\n\r\u2028\u2029]/,
              Ct = /\r\n|[\n\r\u2028\u2029]/g,
              Ot = (e.isIdentifierStart = function(e) {
                return 65 > e
                  ? 36 === e
                  : 91 > e ||
                      (97 > e
                        ? 95 === e
                        : 123 > e ||
                          (170 <= e && kt.test(String.fromCharCode(e))));
              }),
              At = (e.isIdentifierChar = function(e) {
                return 48 > e
                  ? 36 === e
                  : 58 > e ||
                      (!(65 > e) &&
                        (91 > e ||
                          (97 > e
                            ? 95 === e
                            : 123 > e ||
                              (170 <= e && Pt.test(String.fromCharCode(e))))));
              }),
              jt = { kind: "loop" },
              Tt = {
                kind: "switch"
              };
          };
        function r(e, t) {
          "string" == typeof e && (e = acorn.parse(e, n)),
            (this.fa = e),
            (this.ib = t),
            (this.wa = !1),
            (this.U = []),
            (this.Pa = 0),
            (this.nb = Object.create(null));
          var r,
            o,
            a = /^step([A-Z]\w*)$/;
          for (o in this)
            "function" == typeof this[o] &&
              (r = o.match(a)) &&
              (this.nb[r[1]] = this[o].bind(this));
          (this.global = J(this, this.fa, null)),
            (this.fa = acorn.parse(this.U.join("\n"), n)),
            (this.U = void 0),
            Z(this, this.fa, void 0, void 0),
            ((a = new oe(this.fa, this.global)).done = !1),
            (this.j = [a]),
            this.lb(),
            (this.value = void 0),
            (this.fa = e),
            ((a = new oe(this.fa, this.global)).done = !1),
            (this.j.length = 0),
            (this.j[0] = a),
            (this.Ra = a.node.constructor),
            (this.stateStack = this.j);
        }
        "object" == typeof exports && "object" == typeof module
          ? t(exports)
          : "function" == typeof e && e.amd
          ? e(["exports"], t)
          : t(this.acorn || (this.acorn = {}));
        var n = { Ba: 5 },
          o = { configurable: !0, enumerable: !0, writable: !1 },
          a = { configurable: !0, enumerable: !1, writable: !0 },
          i = { configurable: !0, enumerable: !1, writable: !1 },
          s = { configurable: !1, enumerable: !0, writable: !0 },
          p = { STEP_ERROR: !0 },
          l = { SCOPE_REFERENCE: !0 },
          u = { VALUE_IN_DESCRIPTOR: !0 },
          c = { REGEXP_TIMEOUT: !0 },
          f = [],
          h = null,
          y = [
            "onmessage = function(e) {",
            "var result;",
            "var data = e.data;",
            "switch (data[0]) {",
            "case 'split':",
            "result = data[1].split(data[2], data[3]);",
            "break;",
            "case 'match':",
            "result = data[1].match(data[2]);",
            "break;",
            "case 'search':",
            "result = data[1].search(data[2]);",
            "break;",
            "case 'replace':",
            "result = data[1].replace(data[2], data[3]);",
            "break;",
            "case 'exec':",
            "var regexp = data[1];",
            "regexp.lastIndex = data[2];",
            "result = [regexp.exec(data[3]), data[1].lastIndex];",
            "break;",
            "default:",
            "throw 'Unknown RegExp operation: ' + data[0];",
            "}",
            "postMessage(result);",
            "};"
          ];
        function d(e, t) {
          e.setProperty(t, "NaN", NaN, o),
            e.setProperty(t, "Infinity", 1 / 0, o),
            e.setProperty(t, "undefined", void 0, o),
            e.setProperty(t, "window", t, o),
            e.setProperty(t, "this", t, o),
            e.setProperty(t, "self", t),
            (e.F = new U(null)),
            (e.W = new U(e.F)),
            b(e, t),
            g(e, t),
            (t.na = e.F),
            e.setProperty(t, "constructor", e.m, a),
            v(e, t),
            m(e, t),
            w(e, t),
            E(e, t),
            x(e, t),
            k(e, t),
            P(e, t),
            S(e, t),
            C(e, t);
          var r = e.b(function() {
            throw EvalError("Can't happen");
          }, !1);
          (r.eval = !0),
            e.setProperty(t, "eval", r),
            e.setProperty(t, "parseInt", e.b(parseInt, !1)),
            e.setProperty(t, "parseFloat", e.b(parseFloat, !1)),
            e.setProperty(t, "isNaN", e.b(isNaN, !1)),
            e.setProperty(t, "isFinite", e.b(isFinite, !1)),
            (r = [
              [escape, "escape"],
              [unescape, "unescape"],
              [decodeURI, "decodeURI"],
              [decodeURIComponent, "decodeURIComponent"],
              [encodeURI, "encodeURI"],
              [encodeURIComponent, "encodeURIComponent"]
            ]);
          for (var n = 0; n < r.length; n++)
            e.setProperty(
              t,
              r[n][1],
              e.b(
                (function(t) {
                  return function(r) {
                    try {
                      return t(r);
                    } catch (n) {
                      ee(e, e.pb, n.message);
                    }
                  };
                })(r[n][0]),
                !1
              ),
              a
            );
          (e.OBJECT = e.m),
            (e.OBJECT_PROTO = e.F),
            (e.FUNCTION = e.I),
            (e.FUNCTION_PROTO = e.W),
            (e.ARRAY = e.l),
            (e.ARRAY_PROTO = e.ya),
            (e.REGEXP = e.C),
            (e.REGEXP_PROTO = e.za),
            (e.DATE = e.R),
            (e.DATE_PROTO = e.Xa),
            (e.NULL = null),
            (e.NAN = NaN),
            (e.STRING_EMPTY = ""),
            (e.TRUE = !0),
            (e.FALSE = !1),
            (e.NUMBER_ZERO = 0),
            (e.NUMBER_ONE = 1),
            e.ib && e.ib(e, t);
        }
        function b(e, t) {
          function r(t) {
            if (!((t && t.o) || X(e).H))
              if (null == t) t = e.global;
              else {
                var r = e.i(_(e, t));
                (r.data = t), (t = r);
              }
            return t;
          }
          var o = /^[A-Za-z_$][\w$]*$/,
            s = function(t) {
              var r = arguments.length
                  ? String(arguments[arguments.length - 1])
                  : "",
                a = Array.prototype.slice
                  .call(arguments, 0, -1)
                  .join(",")
                  .trim();
              if (a) {
                a = a.split(/\s*,\s*/);
                for (var i = 0; i < a.length; i++) {
                  var s = a[i];
                  o.test(s) || ee(e, e.da, "Invalid function argument: " + s);
                }
                a = a.join(", ");
              }
              try {
                var p = acorn.parse("(function(" + a + ") {" + r + "})", n);
              } catch (l) {
                ee(e, e.da, "Invalid code: " + l.message);
              }
              return (
                1 !== p.body.length &&
                  ee(e, e.da, "Invalid code in function body."),
                F(e, p.body[0].expression, e.global)
              );
            };
          (e.I = e.b(s, !0)),
            e.setProperty(t, "Function", e.I),
            e.setProperty(e.I, "prototype", e.W, a),
            e.setProperty(e.W, "constructor", e.I, a),
            (e.W.Ea = function() {}),
            (e.W.Ea.id = e.Pa++),
            e.setProperty(e.W, "length", 0, i),
            (s = function(t, n) {
              var o = e.j[e.j.length - 1];
              if (((o.Z = this), (o.G = r(t)), (o.B = []), null != n))
                if (n.o) {
                  var a,
                    i = [];
                  for (a in n.a) i[a] = e.v(n, a);
                  (i.length = N(e.v(n, "length")) || 0), (o.B = i);
                } else
                  ee(e, e.g, "CreateListFromArrayLike called on non-object");
              o.Oa = !1;
            }),
            V(e, e.I, "apply", s),
            (s = function(t) {
              var n = e.j[e.j.length - 1];
              (n.Z = this), (n.G = r(t)), (n.B = []);
              for (var o = 1; o < arguments.length; o++) n.B.push(arguments[o]);
              n.Oa = !1;
            }),
            V(e, e.I, "call", s),
            e.U.push(
              "Object.defineProperty(Function.prototype, 'bind',",
              "{configurable: true, writable: true, value:",
              "function(oThis) {",
              "if (typeof this !== 'function') {",
              "throw TypeError('What is trying to be bound is not callable');",
              "}",
              "var aArgs   = Array.prototype.slice.call(arguments, 1),",
              "fToBind = this,",
              "fNOP    = function() {},",
              "fBound  = function() {",
              "return fToBind.apply(this instanceof fNOP",
              "? this",
              ": oThis,",
              "aArgs.concat(Array.prototype.slice.call(arguments)));",
              "};",
              "if (this.prototype) {",
              "fNOP.prototype = this.prototype;",
              "}",
              "fBound.prototype = new fNOP();",
              "return fBound;",
              "}",
              "});",
              ""
            ),
            (s = function() {
              return String(this);
            }),
            V(e, e.I, "toString", s),
            e.setProperty(e.I, "toString", e.b(s, !1), a),
            (s = function() {
              return this.valueOf();
            }),
            V(e, e.I, "valueOf", s),
            e.setProperty(e.I, "valueOf", e.b(s, !1), a);
        }
        function g(e, t) {
          function r(t) {
            null != t || ee(e, e.g, "Cannot convert '" + t + "' to object");
          }
          var n = function(t) {
            if (null == t) return $(e) ? this : e.i(e.F);
            if (!t.o) {
              var r = e.i(_(e, t));
              return (r.data = t), r;
            }
            return t;
          };
          (e.m = e.b(n, !0)),
            e.setProperty(e.m, "prototype", e.F, a),
            e.setProperty(e.F, "constructor", e.m, a),
            e.setProperty(t, "Object", e.m),
            (n = function(t) {
              return r(t), D(e, Object.getOwnPropertyNames(t.o ? t.a : t));
            }),
            e.setProperty(e.m, "getOwnPropertyNames", e.b(n, !1), a),
            (n = function(t) {
              return r(t), t.o && (t = t.a), D(e, Object.keys(t));
            }),
            e.setProperty(e.m, "keys", e.b(n, !1), a),
            (n = function(t) {
              return null === t
                ? e.i(null)
                : ((void 0 !== t && t.o) ||
                    ee(
                      e,
                      e.g,
                      "Object prototype may only be an Object or null"
                    ),
                  e.i(t));
            }),
            e.setProperty(e.m, "create", e.b(n, !1), a),
            e.U.push(
              "(function() {",
              "var create_ = Object.create;",
              "Object.create = function(proto, props) {",
              "var obj = create_(proto);",
              "props && Object.defineProperties(obj, props);",
              "return obj;",
              "};",
              "})();",
              ""
            ),
            (n = function(t, r, n) {
              return (
                (r = String(r)),
                (t && t.o) ||
                  ee(e, e.g, "Object.defineProperty called on non-object"),
                (n && n.o) ||
                  ee(e, e.g, "Property description must be an object"),
                !t.a[r] &&
                  t.preventExtensions &&
                  ee(
                    e,
                    e.g,
                    "Can't define property '" +
                      r +
                      "', object is not extensible"
                  ),
                e.setProperty(t, r, u, n.a),
                t
              );
            }),
            e.setProperty(e.m, "defineProperty", e.b(n, !1), a),
            e.U.push(
              "(function() {",
              "var defineProperty_ = Object.defineProperty;",
              "Object.defineProperty = function(obj, prop, d1) {",
              "var d2 = {};",
              "if ('configurable' in d1) d2.configurable = d1.configurable;",
              "if ('enumerable' in d1) d2.enumerable = d1.enumerable;",
              "if ('writable' in d1) d2.writable = d1.writable;",
              "if ('value' in d1) d2.value = d1.value;",
              "if ('get' in d1) d2.get = d1.get;",
              "if ('set' in d1) d2.set = d1.set;",
              "return defineProperty_(obj, prop, d2);",
              "};",
              "})();",
              "Object.defineProperty(Object, 'defineProperties',",
              "{configurable: true, writable: true, value:",
              "function(obj, props) {",
              "var keys = Object.keys(props);",
              "for (var i = 0; i < keys.length; i++) {",
              "Object.defineProperty(obj, keys[i], props[keys[i]]);",
              "}",
              "return obj;",
              "}",
              "});",
              ""
            ),
            (n = function(t, r) {
              if (
                ((t && t.o) ||
                  ee(
                    e,
                    e.g,
                    "Object.getOwnPropertyDescriptor called on non-object"
                  ),
                (r = String(r)) in t.a)
              ) {
                var n = Object.getOwnPropertyDescriptor(t.a, r),
                  o = t.N[r],
                  a = t.P[r];
                return (
                  (o || a) &&
                    ((n.get = o),
                    (n.set = a),
                    delete n.value,
                    delete n.writable),
                  (o = n.value),
                  (a = "value" in n),
                  delete n.value,
                  (n = e.ja(n)),
                  a && e.setProperty(n, "value", o),
                  n
                );
              }
            }),
            e.setProperty(e.m, "getOwnPropertyDescriptor", e.b(n, !1), a),
            (n = function(t) {
              return r(t), _(e, t);
            }),
            e.setProperty(e.m, "getPrototypeOf", e.b(n, !1), a),
            (n = function(e) {
              return !!e && !e.preventExtensions;
            }),
            e.setProperty(e.m, "isExtensible", e.b(n, !1), a),
            (n = function(e) {
              return e && e.o && (e.preventExtensions = !0), e;
            }),
            e.setProperty(e.m, "preventExtensions", e.b(n, !1), a),
            V(e, e.m, "toString", U.prototype.toString),
            V(e, e.m, "toLocaleString", U.prototype.toString),
            V(e, e.m, "valueOf", U.prototype.valueOf),
            (n = function(e) {
              return (
                r(this), this.o ? String(e) in this.a : this.hasOwnProperty(e)
              );
            }),
            V(e, e.m, "hasOwnProperty", n),
            (n = function(e) {
              return (
                r(this),
                this.o
                  ? Object.prototype.propertyIsEnumerable.call(this.a, e)
                  : this.propertyIsEnumerable(e)
              );
            }),
            V(e, e.m, "propertyIsEnumerable", n),
            (n = function(t) {
              for (;;) {
                if (!(t = _(e, t))) return !1;
                if (t === this) return !0;
              }
            }),
            V(e, e.m, "isPrototypeOf", n);
        }
        function v(e, t) {
          var r = function(t) {
            var r = $(e) ? this : M(e),
              n = arguments[0];
            if (1 === arguments.length && "number" == typeof n)
              isNaN(N(n)) && ee(e, e.Ya, "Invalid array length"),
                (r.a.length = n);
            else {
              for (n = 0; n < arguments.length; n++) r.a[n] = arguments[n];
              r.a.length = n;
            }
            return r;
          };
          (e.l = e.b(r, !0)),
            (e.ya = e.l.a.prototype),
            e.setProperty(t, "Array", e.l),
            (r = function(e) {
              return e && "Array" === e.J;
            }),
            e.setProperty(e.l, "isArray", e.b(r, !1), a),
            e.setProperty(e.ya, "length", 0, {
              configurable: !1,
              enumerable: !1,
              writable: !0
            }),
            (e.ya.J = "Array"),
            V(e, e.l, "pop", function() {
              return Array.prototype.pop.call(this.a);
            }),
            (r = function(e) {
              return Array.prototype.push.apply(this.a, arguments);
            }),
            V(e, e.l, "push", r),
            V(e, e.l, "shift", function() {
              return Array.prototype.shift.call(this.a);
            }),
            (r = function(e) {
              return Array.prototype.unshift.apply(this.a, arguments);
            }),
            V(e, e.l, "unshift", r),
            V(e, e.l, "reverse", function() {
              return Array.prototype.reverse.call(this.a), this;
            }),
            (r = function(t, r) {
              var n = Array.prototype.splice.apply(this.a, arguments);
              return D(e, n);
            }),
            V(e, e.l, "splice", r),
            (r = function(t, r) {
              return D(e, Array.prototype.slice.call(this.a, t, r));
            }),
            V(e, e.l, "slice", r),
            (r = function(e) {
              return Array.prototype.join.call(this.a, e);
            }),
            V(e, e.l, "join", r),
            (r = function(t) {
              for (
                var r = [], n = 0, o = e.v(this, "length"), a = 0;
                a < o;
                a++
              ) {
                if (B(e, this, a)) {
                  var i = e.v(this, a);
                  r[n] = i;
                }
                n++;
              }
              for (a = 0; a < arguments.length; a++)
                if (((o = arguments[a]), O(e, o, e.l))) {
                  i = e.v(o, "length");
                  for (var s = 0; s < i; s++)
                    B(e, o, s) && (r[n] = e.v(o, s)), n++;
                } else r[n] = o;
              return D(e, r);
            }),
            V(e, e.l, "concat", r),
            (r = function(e, t) {
              return Array.prototype.indexOf.apply(this.a, arguments);
            }),
            V(e, e.l, "indexOf", r),
            (r = function(e, t) {
              return Array.prototype.lastIndexOf.apply(this.a, arguments);
            }),
            V(e, e.l, "lastIndexOf", r),
            V(e, e.l, "sort", function() {
              return Array.prototype.sort.call(this.a), this;
            }),
            e.U.push(
              "Object.defineProperty(Array.prototype, 'every',",
              "{configurable: true, writable: true, value:",
              "function(callbackfn, thisArg) {",
              "if (!this || typeof callbackfn !== 'function') throw TypeError();",
              "var T, k;",
              "var O = Object(this);",
              "var len = O.length >>> 0;",
              "if (arguments.length > 1) T = thisArg;",
              "k = 0;",
              "while (k < len) {",
              "if (k in O && !callbackfn.call(T, O[k], k, O)) return false;",
              "k++;",
              "}",
              "return true;",
              "}",
              "});",
              "Object.defineProperty(Array.prototype, 'filter',",
              "{configurable: true, writable: true, value:",
              "function(fun/*, thisArg*/) {",
              "if (this === void 0 || this === null || typeof fun !== 'function') throw TypeError();",
              "var t = Object(this);",
              "var len = t.length >>> 0;",
              "var res = [];",
              "var thisArg = arguments.length >= 2 ? arguments[1] : void 0;",
              "for (var i = 0; i < len; i++) {",
              "if (i in t) {",
              "var val = t[i];",
              "if (fun.call(thisArg, val, i, t)) res.push(val);",
              "}",
              "}",
              "return res;",
              "}",
              "});",
              "Object.defineProperty(Array.prototype, 'forEach',",
              "{configurable: true, writable: true, value:",
              "function(callback, thisArg) {",
              "if (!this || typeof callback !== 'function') throw TypeError();",
              "var T, k;",
              "var O = Object(this);",
              "var len = O.length >>> 0;",
              "if (arguments.length > 1) T = thisArg;",
              "k = 0;",
              "while (k < len) {",
              "if (k in O) callback.call(T, O[k], k, O);",
              "k++;",
              "}",
              "}",
              "});",
              "Object.defineProperty(Array.prototype, 'map',",
              "{configurable: true, writable: true, value:",
              "function(callback, thisArg) {",
              "if (!this || typeof callback !== 'function') new TypeError;",
              "var T, A, k;",
              "var O = Object(this);",
              "var len = O.length >>> 0;",
              "if (arguments.length > 1) T = thisArg;",
              "A = new Array(len);",
              "k = 0;",
              "while (k < len) {",
              "if (k in O) A[k] = callback.call(T, O[k], k, O);",
              "k++;",
              "}",
              "return A;",
              "}",
              "});",
              "Object.defineProperty(Array.prototype, 'reduce',",
              "{configurable: true, writable: true, value:",
              "function(callback /*, initialValue*/) {",
              "if (!this || typeof callback !== 'function') throw TypeError();",
              "var t = Object(this), len = t.length >>> 0, k = 0, value;",
              "if (arguments.length === 2) {",
              "value = arguments[1];",
              "} else {",
              "while (k < len && !(k in t)) k++;",
              "if (k >= len) {",
              "throw TypeError('Reduce of empty array with no initial value');",
              "}",
              "value = t[k++];",
              "}",
              "for (; k < len; k++) {",
              "if (k in t) value = callback(value, t[k], k, t);",
              "}",
              "return value;",
              "}",
              "});",
              "Object.defineProperty(Array.prototype, 'reduceRight',",
              "{configurable: true, writable: true, value:",
              "function(callback /*, initialValue*/) {",
              "if (null === this || 'undefined' === typeof this || 'function' !== typeof callback) throw TypeError();",
              "var t = Object(this), len = t.length >>> 0, k = len - 1, value;",
              "if (arguments.length >= 2) {",
              "value = arguments[1];",
              "} else {",
              "while (k >= 0 && !(k in t)) k--;",
              "if (k < 0) {",
              "throw TypeError('Reduce of empty array with no initial value');",
              "}",
              "value = t[k--];",
              "}",
              "for (; k >= 0; k--) {",
              "if (k in t) value = callback(value, t[k], k, t);",
              "}",
              "return value;",
              "}",
              "});",
              "Object.defineProperty(Array.prototype, 'some',",
              "{configurable: true, writable: true, value:",
              "function(fun/*, thisArg*/) {",
              "if (!this || typeof fun !== 'function') throw TypeError();",
              "var t = Object(this);",
              "var len = t.length >>> 0;",
              "var thisArg = arguments.length >= 2 ? arguments[1] : void 0;",
              "for (var i = 0; i < len; i++) {",
              "if (i in t && fun.call(thisArg, t[i], i, t)) {",
              "return true;",
              "}",
              "}",
              "return false;",
              "}",
              "});",
              "(function() {",
              "var sort_ = Array.prototype.sort;",
              "Array.prototype.sort = function(opt_comp) {",
              "if (typeof opt_comp !== 'function') {",
              "return sort_.call(this);",
              "}",
              "for (var i = 0; i < this.length; i++) {",
              "var changes = 0;",
              "for (var j = 0; j < this.length - i - 1; j++) {",
              "if (opt_comp(this[j], this[j + 1]) > 0) {",
              "var swap = this[j];",
              "this[j] = this[j + 1];",
              "this[j + 1] = swap;",
              "changes++;",
              "}",
              "}",
              "if (!changes) break;",
              "}",
              "return this;",
              "};",
              "})();",
              "Object.defineProperty(Array.prototype, 'toLocaleString',",
              "{configurable: true, writable: true, value:",
              "function() {",
              "var out = [];",
              "for (var i = 0; i < this.length; i++) {",
              "out[i] = (this[i] === null || this[i] === undefined) ? '' : this[i].toLocaleString();",
              "}",
              "return out.join(',');",
              "}",
              "});",
              ""
            );
        }
        function m(e, t) {
          var r = function(t) {
            return (t = String(t)), $(e) ? ((this.data = t), this) : t;
          };
          (e.A = e.b(r, !0)),
            e.setProperty(t, "String", e.A),
            e.setProperty(e.A, "fromCharCode", e.b(String.fromCharCode, !1), a),
            (r = "charAt charCodeAt concat indexOf lastIndexOf slice substr substring toLocaleLowerCase toLocaleUpperCase toLowerCase toUpperCase trim".split(
              " "
            ));
          for (var n = 0; n < r.length; n++)
            V(e, e.A, r[n], String.prototype[r[n]]);
          (r = function(t, r, n) {
            return (
              (r = r ? e.L(r) : void 0),
              (n = n ? e.L(n) : void 0),
              String(this).localeCompare(t, r, n)
            );
          }),
            V(e, e.A, "localeCompare", r),
            (r = function(t, r, n) {
              var o = String(this);
              if (
                ((r = r ? Number(r) : void 0),
                O(e, t, e.C) && ((t = t.data), T(e, t, n), 2 === e.REGEXP_MODE))
              )
                if (h)
                  (t = j(
                    e,
                    "string.split(separator, limit)",
                    { string: o, separator: t, limit: r },
                    t,
                    n
                  )) !== c && n(D(e, t));
                else {
                  var a = e.X(),
                    i = I(e, t, a, n);
                  (a.onmessage = function(t) {
                    clearTimeout(i), n(D(e, t.data));
                  }),
                    a.postMessage(["split", o, t, r]);
                }
              else (t = o.split(t, r)), n(D(e, t));
            }),
            G(e, e.A, "split", r),
            (r = function(t, r) {
              var n = String(this);
              if (
                ((t = O(e, t, e.C) ? t.data : new RegExp(t)),
                T(e, t, r),
                2 === e.REGEXP_MODE)
              )
                if (h)
                  (n = j(
                    e,
                    "string.match(regexp)",
                    { string: n, regexp: t },
                    t,
                    r
                  )) !== c && r(n && D(e, n));
                else {
                  var o = e.X(),
                    a = I(e, t, o, r);
                  (o.onmessage = function(t) {
                    clearTimeout(a), r(t.data && D(e, t.data));
                  }),
                    o.postMessage(["match", n, t]);
                }
              else (n = n.match(t)), r(n && D(e, n));
            }),
            G(e, e.A, "match", r),
            (r = function(t, r) {
              var n = String(this);
              if (
                ((t = O(e, t, e.C) ? t.data : new RegExp(t)),
                T(e, t, r),
                2 === e.REGEXP_MODE)
              )
                if (h)
                  (n = j(
                    e,
                    "string.search(regexp)",
                    { string: n, regexp: t },
                    t,
                    r
                  )) !== c && r(n);
                else {
                  var o = e.X(),
                    a = I(e, t, o, r);
                  (o.onmessage = function(e) {
                    clearTimeout(a), r(e.data);
                  }),
                    o.postMessage(["search", n, t]);
                }
              else r(n.search(t));
            }),
            G(e, e.A, "search", r),
            (r = function(t, r, n) {
              var o = String(this);
              if (
                ((r = String(r)),
                O(e, t, e.C) && ((t = t.data), T(e, t, n), 2 === e.REGEXP_MODE))
              )
                if (h)
                  (t = j(
                    e,
                    "string.replace(substr, newSubstr)",
                    { string: o, substr: t, newSubstr: r },
                    t,
                    n
                  )) !== c && n(t);
                else {
                  var a = e.X(),
                    i = I(e, t, a, n);
                  (a.onmessage = function(e) {
                    clearTimeout(i), n(e.data);
                  }),
                    a.postMessage(["replace", o, t, r]);
                }
              else n(o.replace(t, r));
            }),
            G(e, e.A, "replace", r),
            e.U.push(
              "(function() {",
              "var replace_ = String.prototype.replace;",
              "String.prototype.replace = function(substr, newSubstr) {",
              "if (typeof newSubstr !== 'function') {",
              "return replace_.call(this, substr, newSubstr);",
              "}",
              "var str = this;",
              "if (substr instanceof RegExp) {",
              "var subs = [];",
              "var m = substr.exec(str);",
              "while (m) {",
              "m.push(m.index, str);",
              "var inject = newSubstr.apply(null, m);",
              "subs.push([m.index, m[0].length, inject]);",
              "m = substr.global ? substr.exec(str) : null;",
              "}",
              "for (var i = subs.length - 1; i >= 0; i--) {",
              "str = str.substring(0, subs[i][0]) + subs[i][2] + str.substring(subs[i][0] + subs[i][1]);",
              "}",
              "} else {",
              "var i = str.indexOf(substr);",
              "if (i !== -1) {",
              "var inject = newSubstr(str.substr(i, substr.length), i, str);",
              "str = str.substring(0, i) + inject + str.substring(i + substr.length);",
              "}",
              "}",
              "return str;",
              "};",
              "})();",
              ""
            );
        }
        function w(e, t) {
          (e.Wa = e.b(function(t) {
            return (t = !!t), $(e) ? ((this.data = t), this) : t;
          }, !0)),
            e.setProperty(t, "Boolean", e.Wa);
        }
        function E(e, t) {
          var r = function(t) {
            return (t = Number(t)), $(e) ? ((this.data = t), this) : t;
          };
          (e.S = e.b(r, !0)),
            e.setProperty(t, "Number", e.S),
            (r = [
              "MAX_VALUE",
              "MIN_VALUE",
              "NaN",
              "NEGATIVE_INFINITY",
              "POSITIVE_INFINITY"
            ]);
          for (var n = 0; n < r.length; n++)
            e.setProperty(e.S, r[n], Number[r[n]], i);
          (r = function(t) {
            try {
              return Number(this).toExponential(t);
            } catch (r) {
              ee(e, e.w, r.message);
            }
          }),
            V(e, e.S, "toExponential", r),
            (r = function(t) {
              try {
                return Number(this).toFixed(t);
              } catch (r) {
                ee(e, e.w, r.message);
              }
            }),
            V(e, e.S, "toFixed", r),
            (r = function(t) {
              try {
                return Number(this).toPrecision(t);
              } catch (r) {
                ee(e, e.w, r.message);
              }
            }),
            V(e, e.S, "toPrecision", r),
            (r = function(t) {
              try {
                return Number(this).toString(t);
              } catch (r) {
                ee(e, e.w, r.message);
              }
            }),
            V(e, e.S, "toString", r),
            (r = function(t, r) {
              return (
                (t = t ? e.L(t) : void 0),
                (r = r ? e.L(r) : void 0),
                Number(this).toLocaleString(t, r)
              );
            }),
            V(e, e.S, "toLocaleString", r);
        }
        function x(e, t) {
          var r = function(t, r) {
            if (!$(e)) return Date();
            var n = [null].concat(Array.from(arguments));
            return (
              (this.data = new (Function.prototype.bind.apply(Date, n))()), this
            );
          };
          (e.R = e.b(r, !0)),
            (e.Xa = e.R.a.prototype),
            e.setProperty(t, "Date", e.R),
            e.setProperty(e.R, "now", e.b(Date.now, !1), a),
            e.setProperty(e.R, "parse", e.b(Date.parse, !1), a),
            e.setProperty(e.R, "UTC", e.b(Date.UTC, !1), a);
          for (
            var n = "getDate getDay getFullYear getHours getMilliseconds getMinutes getMonth getSeconds getTime getTimezoneOffset getUTCDate getUTCDay getUTCFullYear getUTCHours getUTCMilliseconds getUTCMinutes getUTCMonth getUTCSeconds getYear setDate setFullYear setHours setMilliseconds setMinutes setMonth setSeconds setTime setUTCDate setUTCFullYear setUTCHours setUTCMilliseconds setUTCMinutes setUTCMonth setUTCSeconds setYear toDateString toISOString toJSON toGMTString toLocaleDateString toLocaleString toLocaleTimeString toTimeString toUTCString".split(
                " "
              ),
              o = 0;
            o < n.length;
            o++
          )
            (r = (function(t) {
              return function(r) {
                for (var n = [], o = 0; o < arguments.length; o++)
                  n[o] = e.L(arguments[o]);
                return this.data[t].apply(this.data, n);
              };
            })(n[o])),
              V(e, e.R, n[o], r);
        }
        function k(e, t) {
          var r = function(t, r) {
            var n = $(e) ? this : e.i(e.za);
            return (
              (t = t ? String(t) : ""),
              (r = r ? String(r) : ""),
              A(e, n, new RegExp(t, r)),
              n
            );
          };
          (e.C = e.b(r, !0)),
            (e.za = e.C.a.prototype),
            e.setProperty(t, "RegExp", e.C),
            e.setProperty(e.C.a.prototype, "global", void 0, i),
            e.setProperty(e.C.a.prototype, "ignoreCase", void 0, i),
            e.setProperty(e.C.a.prototype, "multiline", void 0, i),
            e.setProperty(e.C.a.prototype, "source", "(?:)", i),
            e.U.push(
              "Object.defineProperty(RegExp.prototype, 'test',",
              "{configurable: true, writable: true, value:",
              "function(str) {",
              "return String(str).search(this) !== -1",
              "}",
              "});"
            ),
            (r = function(t, r) {
              function n(t) {
                if (t) {
                  var r = D(e, t);
                  return (
                    e.setProperty(r, "index", t.index),
                    e.setProperty(r, "input", t.input),
                    r
                  );
                }
                return null;
              }
              var o = this,
                a = o.data;
              if (
                ((t = String(t)),
                (a.lastIndex = Number(e.v(this, "lastIndex"))),
                T(e, a, r),
                2 === e.REGEXP_MODE)
              )
                if (h) {
                  var i = j(
                    e,
                    "regexp.exec(string)",
                    { string: t, regexp: a },
                    a,
                    r
                  );
                  i !== c &&
                    (e.setProperty(o, "lastIndex", a.lastIndex), r(n(i)));
                } else {
                  i = e.X();
                  var s = I(e, a, i, r);
                  (i.onmessage = function(t) {
                    clearTimeout(s),
                      e.setProperty(o, "lastIndex", t.data[1]),
                      r(n(t.data[0]));
                  }),
                    i.postMessage(["exec", a, a.lastIndex, t]);
                }
              else
                (i = a.exec(t)),
                  e.setProperty(o, "lastIndex", a.lastIndex),
                  r(n(i));
            }),
            G(e, e.C, "exec", r);
        }
        function P(e, t) {
          function r(r) {
            var n = e.b(function(t) {
              var r = $(e) ? this : e.oa(n);
              return t && e.setProperty(r, "message", String(t), a), r;
            }, !0);
            return (
              e.setProperty(n, "prototype", e.oa(e.w), a),
              e.setProperty(n.a.prototype, "name", r, a),
              e.setProperty(t, r, n),
              n
            );
          }
          (e.w = e.b(function(t) {
            var r = $(e) ? this : e.oa(e.w);
            return t && e.setProperty(r, "message", String(t), a), r;
          }, !0)),
            e.setProperty(t, "Error", e.w),
            e.setProperty(e.w.a.prototype, "message", "", a),
            e.setProperty(e.w.a.prototype, "name", "Error", a),
            r("EvalError"),
            (e.Ya = r("RangeError")),
            (e.Za = r("ReferenceError")),
            (e.da = r("SyntaxError")),
            (e.g = r("TypeError")),
            (e.pb = r("URIError"));
        }
        function S(e, t) {
          var r = e.i(e.F);
          e.setProperty(t, "Math", r);
          for (
            var n = "E LN2 LN10 LOG2E LOG10E PI SQRT1_2 SQRT2".split(" "),
              o = 0;
            o < n.length;
            o++
          )
            e.setProperty(r, n[o], Math[n[o]], i);
          for (
            n = "abs acos asin atan atan2 ceil cos exp floor log max min pow random round sin sqrt tan".split(
              " "
            ),
              o = 0;
            o < n.length;
            o++
          )
            e.setProperty(r, n[o], e.b(Math[n[o]], !1), a);
        }
        function C(e, t) {
          function r(t) {
            try {
              var r = JSON.parse(String(t));
            } catch (n) {
              ee(e, e.da, n.message);
            }
            return e.ja(r);
          }
          var n = e.i(e.F);
          e.setProperty(t, "JSON", n),
            e.setProperty(n, "parse", e.b(r, !1)),
            (r = function(t) {
              t = e.L(t);
              try {
                var r = JSON.stringify(t);
              } catch (n) {
                ee(e, e.g, n.message);
              }
              return r;
            }),
            e.setProperty(n, "stringify", e.b(r, !1));
        }
        function O(e, t, r) {
          if (null == t || !r) return !1;
          if (t === (r = r.a.prototype)) return !0;
          for (t = _(e, t); t; ) {
            if (t === r) return !0;
            t = t.na;
          }
          return !1;
        }
        function A(e, t, r) {
          (t.data = r),
            e.setProperty(t, "lastIndex", r.lastIndex, a),
            e.setProperty(t, "source", r.source, i),
            e.setProperty(t, "global", r.global, i),
            e.setProperty(t, "ignoreCase", r.ignoreCase, i),
            e.setProperty(t, "multiline", r.multiline, i);
        }
        function j(e, t, r, n, o) {
          var a = { timeout: e.REGEXP_THREAD_TIMEOUT };
          try {
            return h.runInNewContext(t, r, a);
          } catch (i) {
            o(null), ee(e, e.w, "RegExp Timeout: " + n);
          }
          return c;
        }
        function T(e, t, r) {
          if (0 === e.REGEXP_MODE) var n = !1;
          else if (1 === e.REGEXP_MODE) n = !0;
          else if (h) n = !0;
          else if ("function" == typeof Worker && "function" == typeof URL)
            n = !0;
          else if ("function" == typeof require) {
            try {
              h = require("vm");
            } catch (o) {}
            n = !!h;
          } else n = !1;
          n || (r(null), ee(e, e.w, "Regular expressions not supported: " + t));
        }
        function I(e, t, r, n) {
          return setTimeout(function() {
            r.terminate(), n(null);
            try {
              ee(e, e.w, "RegExp Timeout: " + t);
            } catch (o) {}
          }, e.REGEXP_THREAD_TIMEOUT);
        }
        function N(e) {
          var t = e >>> 0;
          return t === Number(e) ? t : NaN;
        }
        function R(e) {
          var t = e >>> 0;
          return String(t) === String(e) && 4294967295 !== t ? t : NaN;
        }
        function U(e) {
          (this.N = Object.create(null)),
            (this.P = Object.create(null)),
            (this.a = Object.create(null)),
            (this.na = e);
        }
        function M(e) {
          var t = e.i(e.ya);
          return (
            e.setProperty(t, "length", 0, {
              configurable: !1,
              enumerable: !1,
              writable: !0
            }),
            (t.J = "Array"),
            t
          );
        }
        function L(e, t) {
          var r = e.i(e.W);
          return (
            e.setProperty(r, "prototype", e.i(e.F), a),
            e.setProperty(r, "length", t, i),
            (r.J = "Function"),
            r
          );
        }
        function F(e, t, r) {
          return ((e = L(e, t.params.length)).la = r), (e.node = t), e;
        }
        function D(e, t) {
          for (
            var r = M(e), n = Object.getOwnPropertyNames(t), o = 0;
            o < n.length;
            o++
          )
            e.setProperty(r, n[o], t[n[o]]);
          return r;
        }
        function _(e, t) {
          switch (typeof t) {
            case "number":
              return e.S.a.prototype;
            case "boolean":
              return e.Wa.a.prototype;
            case "string":
              return e.A.a.prototype;
          }
          return t ? t.na : null;
        }
        function B(e, t, r) {
          if (!t.o) throw TypeError("Primitive data type has no properties");
          if ("length" === (r = String(r)) && O(e, t, e.A)) return !0;
          if (O(e, t, e.A)) {
            var n = R(r);
            if (!isNaN(n) && n < String(t).length) return !0;
          }
          do {
            if (t.a && r in t.a) return !0;
          } while ((t = _(e, t)));
          return !1;
        }
        function V(e, t, r, n) {
          e.setProperty(t.a.prototype, r, e.b(n, !1), a);
        }
        function G(e, t, r, n) {
          e.setProperty(t.a.prototype, r, e.bb(n), a);
        }
        function X(e) {
          if (!(e = e.j[e.j.length - 1].scope)) throw Error("No scope found.");
          return e;
        }
        function J(e, t, r) {
          var n = e.i(null);
          return (
            (n.la = r) || d(e, n),
            z(e, t, n),
            (n.H = !1),
            r && r.H
              ? (n.H = !0)
              : (e = t.body && t.body[0]) &&
                e.sa &&
                "Literal" === e.sa.type &&
                "use strict" === e.sa.value &&
                (n.H = !0),
            n
          );
        }
        function H(e, t, r) {
          if (!t) throw Error("parentScope required");
          return ((e = r || e.i(null)).la = t), (e.H = t.H), e;
        }
        function W(e, t) {
          for (var r = X(e); r && r !== e.global; ) {
            if (t in r.a) return r.a[t];
            r = r.la;
          }
          if (r === e.global && B(e, r, t)) return e.v(r, t);
          ("UnaryExpression" === (r = e.j[e.j.length - 1].node).type &&
            "typeof" === r.operator) ||
            ee(e, e.Za, t + " is not defined");
        }
        function Y(e, t, r) {
          for (var n = X(e), o = n.H; n && n !== e.global; ) {
            if (t in n.a) return void (n.a[t] = r);
            n = n.la;
          }
          if (n === e.global && (!o || B(e, n, t)))
            return e.setProperty(n, t, r);
          ee(e, e.Za, t + " is not defined");
        }
        function z(e, t, r) {
          if ("VariableDeclaration" === t.type)
            for (var n = 0; n < t.declarations.length; n++)
              e.setProperty(r, t.declarations[n].id.name, void 0, s);
          else {
            if ("FunctionDeclaration" === t.type)
              return void e.setProperty(r, t.id.name, F(e, t, r), s);
            if (
              "FunctionExpression" === t.type ||
              "ExpressionStatement" === t.type
            )
              return;
          }
          var o,
            a = t.constructor;
          for (o in t) {
            var i = t[o];
            if (i && "object" == typeof i)
              if (Array.isArray(i))
                for (n = 0; n < i.length; n++)
                  i[n] && i[n].constructor === a && z(e, i[n], r);
              else i.constructor === a && z(e, i, r);
          }
        }
        function Z(e, t, r, n) {
          for (var o in (r ? (t.start = r) : delete t.start,
          n ? (t.end = n) : delete t.end,
          t))
            if (t.hasOwnProperty(o)) {
              var a = t[o];
              a && "object" == typeof a && Z(e, a, r, n);
            }
        }
        function $(e) {
          return e.j[e.j.length - 1].isConstructor;
        }
        function K(e, t) {
          return t[0] === l ? W(e, t[1]) : e.v(t[0], t[1]);
        }
        function Q(e, t, r) {
          return t[0] === l ? Y(e, t[1], r) : e.setProperty(t[0], t[1], r);
        }
        function ee(e, t, r) {
          throw (void 0 !== r &&
            ((t = e.oa(t)), e.setProperty(t, "message", r, a)),
          te(e, 4, t, void 0),
          p);
        }
        function te(e, t, r, n) {
          if (0 === t)
            throw TypeError("Should not unwind for NORMAL completions");
          var o = e.j;
          e: for (; 0 < o.length; o.pop()) {
            var a = o[o.length - 1];
            switch (a.node.type) {
              case "TryStatement":
                return void (a.T = { type: t, value: r, label: n });
              case "CallExpression":
              case "NewExpression":
                if (3 === t) return void (a.value = r);
                if (4 !== t)
                  throw Error(
                    "Unsynatctic break/continue not rejected by Acorn"
                  );
                break;
              case "Program":
                a.done = !0;
                break e;
            }
            if (1 === t) {
              if (n ? a.labels && -1 !== a.labels.indexOf(n) : a.O || a.Hb)
                return void o.pop();
            } else if (
              2 === t &&
              (n ? a.labels && -1 !== a.labels.indexOf(n) : a.O)
            )
              return;
          }
          throw (O(e, r, e.w)
            ? ((t = {
                EvalError: EvalError,
                RangeError: RangeError,
                ReferenceError: ReferenceError,
                SyntaxError: SyntaxError,
                TypeError: TypeError,
                URIError: URIError
              }),
              (n = String(e.v(r, "name"))),
              (e = e.v(r, "message").valueOf()),
              (e = (t[n] || Error)(e)))
            : (e = String(r)),
          e);
        }
        function re(e, t, r) {
          r = Array.isArray(r) ? r[0] : r;
          var n = new e.Ra({ options: {} });
          return (
            (n.type = "CallExpression"),
            ((e = new oe(n, e.j[e.j.length - 1].scope)).ha = !0),
            (e.G = r),
            (e.Z = t),
            (e.Na = !0),
            (e.B = []),
            e
          );
        }
        function ne(e, t, r, n) {
          r = Array.isArray(r) ? r[0] : e.global;
          var o = new e.Ra({ options: {} });
          return (
            (o.type = "CallExpression"),
            ((e = new oe(o, e.j[e.j.length - 1].scope)).ha = !0),
            (e.G = r),
            (e.Z = t),
            (e.Na = !0),
            (e.B = [n]),
            e
          );
        }
        function oe(e, t) {
          (this.node = e), (this.scope = t);
        }
        (r.prototype.REGEXP_MODE = 2),
          (r.prototype.REGEXP_THREAD_TIMEOUT = 1e3),
          (r.prototype.sb = function(e) {
            var t = this.j[0];
            if (!t || "Program" !== t.node.type)
              throw Error(
                "Expecting original AST to start with a Program node."
              );
            if (
              ("string" == typeof e && (e = acorn.parse(e, n)),
              !e || "Program" !== e.type)
            )
              throw Error("Expecting new AST to start with a Program node.");
            z(this, e, t.scope);
            for (var r, o = 0; (r = e.body[o]); o++) t.node.body.push(r);
            t.done = !1;
          }),
          (r.prototype.step = function() {
            var e = this.j,
              t = e[e.length - 1];
            if (!t) return !1;
            var r = t.node,
              n = r.type;
            if ("Program" === n && t.done) return !1;
            if (this.wa) return !0;
            try {
              var o = this.nb[n](e, t, r);
            } catch (a) {
              if (a !== p) throw a;
            }
            return o && e.push(o), !!r.end || this.step();
          }),
          (r.prototype.lb = function() {
            for (; !this.wa && this.step(); );
            return this.wa;
          }),
          (r.prototype.X = function() {
            var e = this.X.tb;
            return (
              e ||
                ((e = new Blob([y.join("\n")], {
                  type: "application/javascript"
                })),
                (this.X.tb = e)),
              new Worker(URL.createObjectURL(e))
            );
          }),
          (q = U.prototype),
          (q.na = null),
          (q.o = !0),
          (q.J = "Object"),
          (q.data = null),
          (q.toString = function() {
            if ("Array" === this.J) {
              var e = f;
              e.push(this);
              try {
                for (var t = [], r = 0; r < this.a.length; r++) {
                  var n = this.a[r];
                  t[r] = n && n.o && -1 !== e.indexOf(n) ? "..." : n;
                }
              } finally {
                e.pop();
              }
              return t.join(",");
            }
            if ("Error" === this.J) {
              if (-1 !== (e = f).indexOf(this)) return "[object Error]";
              n = this;
              do {
                if ("name" in n.a) {
                  t = n.a.name;
                  break;
                }
              } while ((n = n.na));
              n = this;
              do {
                if ("message" in n.a) {
                  r = n.a.message;
                  break;
                }
              } while ((n = n.na));
              e.push(this);
              try {
                (t = t && String(t)), (r = r && String(r));
              } finally {
                e.pop();
              }
              return r ? t + ": " + r : String(t);
            }
            return null !== this.data
              ? String(this.data)
              : "[object " + this.J + "]";
          }),
          (q.valueOf = function() {
            return void 0 === this.data ||
              null === this.data ||
              this.data instanceof RegExp
              ? this
              : this.data instanceof Date
              ? this.data.valueOf()
              : this.data;
          }),
          (q = r.prototype),
          (q.oa = function(e) {
            return this.i(e && e.a.prototype);
          }),
          (q.i = function(e) {
            if ("object" != typeof e) throw Error("Non object prototype");
            return O(this, (e = new U(e)), this.w) && (e.J = "Error"), e;
          }),
          (q.b = function(e, t) {
            var r = L(this, e.length);
            return (
              (r.Ea = e),
              (e.id = this.Pa++),
              t
                ? this.setProperty(r.a.prototype, "constructor", r, a)
                : !1 === t &&
                  ((r.Fb = !0), this.setProperty(r, "prototype", void 0, a)),
              r
            );
          }),
          (q.bb = function(e) {
            var t = L(this, e.length);
            return (t.Ja = e), (e.id = this.Pa++), t;
          }),
          (q.ja = function(e) {
            if (("object" != typeof e && "function" != typeof e) || null === e)
              return e;
            if (e instanceof RegExp) {
              var t = this.i(this.za);
              return A(this, t, e), t;
            }
            if (e instanceof Date) return ((t = this.i(this.Xa)).data = e), t;
            if (e instanceof Function) {
              var r = this;
              return this.b(function() {
                return r.ja(
                  e.apply(
                    r,
                    Array.prototype.slice.call(arguments).map(function(e) {
                      return r.L(e);
                    })
                  )
                );
              }, void 0);
            }
            if (Array.isArray(e)) {
              t = M(this);
              for (var n = 0; n < e.length; n++)
                n in e && this.setProperty(t, n, this.ja(e[n]));
            } else
              for (n in ((t = this.i(this.F)), e))
                this.setProperty(t, n, this.ja(e[n]));
            return t;
          }),
          (q.L = function(e, t) {
            if (("object" != typeof e && "function" != typeof e) || null === e)
              return e;
            if (O(this, e, this.C) || O(this, e, this.R)) return e.data;
            var r = t || { Ta: [], Da: [] },
              n = r.Ta.indexOf(e);
            if (-1 !== n) return r.Da[n];
            if ((r.Ta.push(e), O(this, e, this.l))) {
              var o = [];
              r.Da.push(o);
              var a = this.v(e, "length");
              for (n = 0; n < a; n++)
                B(this, e, n) && (o[n] = this.L(this.v(e, n), r));
            } else
              for (a in ((o = {}), r.Da.push(o), e.a))
                (n = e.a[a]), (o[a] = this.L(n, r));
            return r.Ta.pop(), r.Da.pop(), o;
          }),
          (q.v = function(e, t) {
            if (
              ((t = String(t)),
              null != e ||
                ee(this, this.g, "Cannot read property '" + t + "' of " + e),
              "length" === t)
            ) {
              if (O(this, e, this.A)) return String(e).length;
            } else if (64 > t.charCodeAt(0) && O(this, e, this.A)) {
              var r = R(t);
              if (!isNaN(r) && r < String(e).length) return String(e)[r];
            }
            do {
              if (e.a && t in e.a)
                return (r = e.N[t]) ? ((r.K = !0), r) : e.a[t];
            } while ((e = _(this, e)));
          }),
          (q.setProperty = function(e, t, r, n) {
            (t = String(t)),
              null != e ||
                ee(this, this.g, "Cannot set property '" + t + "' of " + e),
              n &&
                ("get" in n || "set" in n) &&
                ("value" in n || "writable" in n) &&
                ee(
                  this,
                  this.g,
                  "Invalid property descriptor. Cannot both specify accessors and a value or writable attribute"
                );
            var o = !this.j || X(this).H;
            if (e.o) {
              if (O(this, e, this.A)) {
                var a = R(t);
                if ("length" === t || (!isNaN(a) && a < String(e).length))
                  return void (
                    o &&
                    ee(
                      this,
                      this.g,
                      "Cannot assign to read only property '" +
                        t +
                        "' of String '" +
                        e.data +
                        "'"
                    )
                  );
              }
              if ("Array" === e.J)
                if (((a = e.a.length), "length" === t)) {
                  if (n) {
                    if (!("value" in n)) return;
                    r = n.value;
                  }
                  if (
                    ((r = N(r)),
                    isNaN(r) && ee(this, this.Ya, "Invalid array length"),
                    r < a)
                  )
                    for (i in e.a) {
                      var i = R(i);
                      !isNaN(i) && r <= i && delete e.a[i];
                    }
                } else isNaN((i = R(t))) || (e.a.length = Math.max(a, i + 1));
              if (!e.preventExtensions || t in e.a)
                if (n) {
                  "get" in n && (n.get ? (e.N[t] = n.get) : delete e.N[t]),
                    "set" in n && (n.set ? (e.P[t] = n.set) : delete e.P[t]),
                    (o = {}),
                    "configurable" in n && (o.configurable = n.configurable),
                    "enumerable" in n && (o.enumerable = n.enumerable),
                    "writable" in n &&
                      ((o.writable = n.writable), delete e.N[t], delete e.P[t]),
                    "value" in n
                      ? ((o.value = n.value), delete e.N[t], delete e.P[t])
                      : r !== u &&
                        ((o.value = r), delete e.N[t], delete e.P[t]);
                  try {
                    Object.defineProperty(e.a, t, o);
                  } catch (s) {
                    ee(this, this.g, "Cannot redefine property: " + t);
                  }
                } else {
                  if (r === u) throw ReferenceError("Value not specified.");
                  for (n = e; !(t in n.a); )
                    if (!(n = _(this, n))) {
                      n = e;
                      break;
                    }
                  if (n.P && n.P[t]) return n.P[t];
                  if (n.N && n.N[t])
                    o &&
                      ee(
                        this,
                        this.g,
                        "Cannot set property '" +
                          t +
                          "' of object '" +
                          e +
                          "' which only has a getter"
                      );
                  else
                    try {
                      e.a[t] = r;
                    } catch (s) {
                      o &&
                        ee(
                          this,
                          this.g,
                          "Cannot assign to read only property '" +
                            t +
                            "' of object '" +
                            e +
                            "'"
                        );
                    }
                }
              else
                o &&
                  ee(
                    this,
                    this.g,
                    "Can't add property '" + t + "', object is not extensible"
                  );
            } else
              o &&
                ee(
                  this,
                  this.g,
                  "Can't create property '" + t + "' on '" + e + "'"
                );
          }),
          (r.prototype.stepArrayExpression = function(e, t, r) {
            r = r.elements;
            var n = t.s || 0;
            for (
              t.Aa
                ? (this.setProperty(t.Aa, n, t.value), n++)
                : ((t.Aa = M(this)), (t.Aa.a.length = r.length));
              n < r.length;

            ) {
              if (r[n]) return (t.s = n), new oe(r[n], t.scope);
              n++;
            }
            e.pop(), (e[e.length - 1].value = t.Aa);
          }),
          (r.prototype.stepAssignmentExpression = function(e, t, r) {
            if (!t.Y)
              return (t.Y = !0), ((t = new oe(r.left, t.scope)).ga = !0), t;
            if (!t.ra)
              return (
                t.ta || (t.ta = t.value),
                t.pa && (t.$ = t.value),
                !t.pa &&
                "=" !== r.operator &&
                ((e = K(this, t.ta)), (t.$ = e) && "object" == typeof e && e.K)
                  ? ((e.K = !1), (t.pa = !0), re(this, e, t.ta))
                  : ((t.ra = !0), new oe(r.right, t.scope))
              );
            if (t.ia) e.pop(), (e[e.length - 1].value = t.Ua);
            else {
              var n = t.$,
                o = t.value;
              switch (r.operator) {
                case "=":
                  n = o;
                  break;
                case "+=":
                  n += o;
                  break;
                case "-=":
                  n -= o;
                  break;
                case "*=":
                  n *= o;
                  break;
                case "/=":
                  n /= o;
                  break;
                case "%=":
                  n %= o;
                  break;
                case "<<=":
                  n <<= o;
                  break;
                case ">>=":
                  n >>= o;
                  break;
                case ">>>=":
                  n >>>= o;
                  break;
                case "&=":
                  n &= o;
                  break;
                case "^=":
                  n ^= o;
                  break;
                case "|=":
                  n |= o;
                  break;
                default:
                  throw SyntaxError(
                    "Unknown assignment expression: " + r.operator
                  );
              }
              if ((r = Q(this, t.ta, n)))
                return (t.ia = !0), (t.Ua = n), ne(this, r, t.ta, n);
              e.pop(), (e[e.length - 1].value = n);
            }
          }),
          (r.prototype.stepBinaryExpression = function(e, t, r) {
            if (!t.Y) return (t.Y = !0), new oe(r.left, t.scope);
            if (!t.ra)
              return (t.ra = !0), (t.$ = t.value), new oe(r.right, t.scope);
            e.pop();
            var n = t.$;
            switch (((t = t.value), r.operator)) {
              case "==":
                r = n == t;
                break;
              case "!=":
                r = n != t;
                break;
              case "===":
                r = n === t;
                break;
              case "!==":
                r = n !== t;
                break;
              case ">":
                r = n > t;
                break;
              case ">=":
                r = n >= t;
                break;
              case "<":
                r = n < t;
                break;
              case "<=":
                r = n <= t;
                break;
              case "+":
                r = n + t;
                break;
              case "-":
                r = n - t;
                break;
              case "*":
                r = n * t;
                break;
              case "/":
                r = n / t;
                break;
              case "%":
                r = n % t;
                break;
              case "&":
                r = n & t;
                break;
              case "|":
                r = n | t;
                break;
              case "^":
                r = n ^ t;
                break;
              case "<<":
                r = n << t;
                break;
              case ">>":
                r = n >> t;
                break;
              case ">>>":
                r = n >>> t;
                break;
              case "in":
                (t && t.o) ||
                  ee(this, this.g, "'in' expects an object, not '" + t + "'"),
                  (r = B(this, t, n));
                break;
              case "instanceof":
                O(this, t, this.I) ||
                  ee(
                    this,
                    this.g,
                    "Right-hand side of instanceof is not an object"
                  ),
                  (r = !(!n || !n.o) && O(this, n, t));
                break;
              default:
                throw SyntaxError("Unknown binary operator: " + r.operator);
            }
            e[e.length - 1].value = r;
          }),
          (r.prototype.stepBlockStatement = function(e, t, r) {
            var n = t.s || 0;
            if ((r = r.body[n])) return (t.s = n + 1), new oe(r, t.scope);
            e.pop();
          }),
          (r.prototype.stepBreakStatement = function(e, t, r) {
            te(this, 1, void 0, r.label && r.label.name);
          }),
          (r.prototype.stepCallExpression = function(e, t, r) {
            if (!t.ha) {
              t.ha = 1;
              var a = new oe(r.callee, t.scope);
              return (a.ga = !0), a;
            }
            if (1 === t.ha) {
              if (((t.ha = 2), (a = t.value), Array.isArray(a))) {
                if (
                  ((t.Z = K(this, a)),
                  a[0] === l ? (t.wb = "eval" === a[1]) : (t.G = a[0]),
                  (a = t.Z) && "object" == typeof a && a.K)
                )
                  return (a.K = !1), (t.ha = 1), re(this, a, t.value);
              } else t.Z = a;
              (t.B = []), (t.s = 0);
            }
            if (((a = t.Z), !t.Na)) {
              if ((0 !== t.s && t.B.push(t.value), r.arguments[t.s]))
                return new oe(r.arguments[t.s++], t.scope);
              if ("NewExpression" === r.type) {
                if (
                  (a.Fb && ee(this, this.g, a + " is not a constructor"),
                  a === this.l)
                )
                  t.G = M(this);
                else {
                  var i = a.a.prototype;
                  ("object" == typeof i && null !== i) || (i = this.F),
                    (t.G = this.i(i));
                }
                t.isConstructor = !0;
              } else void 0 === t.G && (t.G = t.scope.H ? void 0 : this.global);
              t.Na = !0;
            }
            if (t.Oa)
              e.pop(),
                (e[e.length - 1].value =
                  t.isConstructor && "object" != typeof t.value
                    ? t.G
                    : t.value);
            else {
              if (
                ((t.Oa = !0),
                (a && a.o) || ee(this, this.g, a + " is not a function"),
                (e = a.node))
              ) {
                r = J(this, e.body, a.la);
                for (var s = 0; s < e.params.length; s++)
                  this.setProperty(
                    r,
                    e.params[s].name,
                    t.B.length > s ? t.B[s] : void 0
                  );
                for (i = M(this), s = 0; s < t.B.length; s++)
                  this.setProperty(i, s, t.B[s]);
                return (
                  this.setProperty(r, "arguments", i),
                  (s = e.id && e.id.name) && this.setProperty(r, s, a),
                  this.setProperty(r, "this", t.G, o),
                  (t.value = void 0),
                  new oe(e.body, r)
                );
              }
              if (a.eval) {
                if ("string" == typeof (a = t.B[0])) {
                  try {
                    s = acorn.parse(String(a), n);
                  } catch (u) {
                    ee(this, this.da, "Invalid code: " + u.message);
                  }
                  return (
                    ((a = new this.Ra({
                      options: {}
                    })).type = "EvalProgram_"),
                    (a.body = s.body),
                    Z(this, a, r.start, r.end),
                    (r = t.wb ? t.scope : this.global).H
                      ? (r = J(this, s, r))
                      : z(this, s, r),
                    (this.value = void 0),
                    new oe(a, r)
                  );
                }
                t.value = a;
              } else if (a.Ea) t.value = a.Ea.apply(t.G, t.B);
              else if (a.Ja) {
                var p = this;
                (s = a.Ja.length - 1),
                  (s = t.B.concat(Array(s)).slice(0, s)).push(function(e) {
                    (t.value = e), (p.wa = !1);
                  }),
                  (this.wa = !0),
                  a.Ja.apply(t.G, s);
              } else ee(this, this.g, a.J + " is not a function");
            }
          }),
          (r.prototype.stepCatchClause = function(e, t, r) {
            if (!t.M)
              return (
                (t.M = !0),
                (e = H(this, t.scope)),
                this.setProperty(e, r.param.name, t.Ob),
                new oe(r.body, e)
              );
            e.pop();
          }),
          (r.prototype.stepConditionalExpression = function(e, t, r) {
            var n = t.ba || 0;
            if (0 === n) return (t.ba = 1), new oe(r.test, t.scope);
            if (1 === n) {
              if (((t.ba = 2), (n = !!t.value) && r.consequent))
                return new oe(r.consequent, t.scope);
              if (!n && r.alternate) return new oe(r.alternate, t.scope);
              this.value = void 0;
            }
            e.pop(),
              "ConditionalExpression" === r.type &&
                (e[e.length - 1].value = t.value);
          }),
          (r.prototype.stepContinueStatement = function(e, t, r) {
            te(this, 2, void 0, r.label && r.label.name);
          }),
          (r.prototype.stepDebuggerStatement = function(e) {
            e.pop();
          }),
          (r.prototype.stepDoWhileStatement = function(e, t, r) {
            if (
              ("DoWhileStatement" === r.type &&
                void 0 === t.V &&
                ((t.value = !0), (t.V = !0)),
              !t.V)
            )
              return (t.V = !0), new oe(r.test, t.scope);
            if (t.value) {
              if (r.body)
                return (t.V = !1), (t.O = !0), new oe(r.body, t.scope);
            } else e.pop();
          }),
          (r.prototype.stepEmptyStatement = function(e) {
            e.pop();
          }),
          (r.prototype.stepEvalProgram_ = function(e, t, r) {
            var n = t.s || 0;
            if ((r = r.body[n])) return (t.s = n + 1), new oe(r, t.scope);
            e.pop(), (e[e.length - 1].value = this.value);
          }),
          (r.prototype.stepExpressionStatement = function(e, t, r) {
            if (!t.M) return (t.M = !0), new oe(r.expression, t.scope);
            e.pop(), (this.value = t.value);
          }),
          (r.prototype.stepForInStatement = function(e, t, r) {
            if (
              !t.Bb &&
              ((t.Bb = !0), r.left.declarations && r.left.declarations[0].init)
            )
              return (
                t.scope.H &&
                  ee(
                    this,
                    this.da,
                    "for-in loop variable declaration may not have an initializer."
                  ),
                new oe(r.left, t.scope)
              );
            if (!t.qa)
              return (
                (t.qa = !0), t.ca || (t.ca = t.value), new oe(r.right, t.scope)
              );
            if (
              (t.O ||
                ((t.O = !0), (t.h = t.value), (t.Va = Object.create(null))),
              void 0 === t.Ca)
            )
              e: for (;;) {
                if (t.h && t.h.o)
                  for (t.ma || (t.ma = Object.getOwnPropertyNames(t.h.a)); ; ) {
                    var n = t.ma.shift();
                    if (void 0 === n) break;
                    if (
                      Object.prototype.hasOwnProperty.call(t.h.a, n) &&
                      !t.Va[n] &&
                      ((t.Va[n] = !0),
                      Object.prototype.propertyIsEnumerable.call(t.h.a, n))
                    ) {
                      t.Ca = n;
                      break e;
                    }
                  }
                else if (null !== t.h && void 0 !== t.h)
                  for (
                    t.ma || (t.ma = Object.getOwnPropertyNames(t.h));
                    void 0 !== (n = t.ma.shift());

                  )
                    if (
                      ((t.Va[n] = !0),
                      Object.prototype.propertyIsEnumerable.call(t.h, n))
                    ) {
                      t.Ca = n;
                      break e;
                    }
                if (((t.h = _(this, t.h)), (t.ma = null), null === t.h))
                  return void e.pop();
              }
            if (!t.fb) {
              if (((t.fb = !0), "VariableDeclaration" !== (e = r.left).type))
                return (t.ca = null), ((t = new oe(e, t.scope)).ga = !0), t;
              t.ca = [l, e.declarations[0].id.name];
            }
            return (
              t.ca || (t.ca = t.value),
              !t.ia && ((t.ia = !0), (e = t.Ca), (n = Q(this, t.ca, e)))
                ? ne(this, n, t.ca, e)
                : ((t.Ca = void 0),
                  (t.fb = !1),
                  (t.ia = !1),
                  r.body ? new oe(r.body, t.scope) : void 0)
            );
          }),
          (r.prototype.stepForStatement = function(e, t, r) {
            var n = t.ba || 0;
            if (0 === n) {
              if (((t.ba = 1), r.init)) return new oe(r.init, t.scope);
            } else if (1 === n) {
              if (((t.ba = 2), r.test)) return new oe(r.test, t.scope);
            } else if (2 === n) {
              if (((t.ba = 3), !r.test || t.value))
                return (t.O = !0), new oe(r.body, t.scope);
              e.pop();
            } else if (3 === n && ((t.ba = 1), r.update))
              return new oe(r.update, t.scope);
          }),
          (r.prototype.stepFunctionDeclaration = function(e) {
            e.pop();
          }),
          (r.prototype.stepFunctionExpression = function(e, t, r) {
            e.pop(), (e[e.length - 1].value = F(this, r, t.scope));
          }),
          (r.prototype.stepIdentifier = function(e, t, r) {
            if ((e.pop(), t.ga)) e[e.length - 1].value = [l, r.name];
            else {
              var n = W(this, r.name);
              if (n && "object" == typeof n && n.K) {
                for (n.K = !1, e = t.scope; !B(this, e, r.name); ) e = e.la;
                return re(this, n, this.global);
              }
              e[e.length - 1].value = n;
            }
          }),
          (r.prototype.stepIfStatement = r.prototype.stepConditionalExpression),
          (r.prototype.stepLabeledStatement = function(e, t, r) {
            return (
              e.pop(),
              (e = t.labels || []).push(r.label.name),
              ((t = new oe(r.body, t.scope)).labels = e),
              t
            );
          }),
          (r.prototype.stepLiteral = function(e, t, r) {
            e.pop(),
              (t = r.value) instanceof RegExp &&
                (A(this, (r = this.i(this.za)), t), (t = r)),
              (e[e.length - 1].value = t);
          }),
          (r.prototype.stepLogicalExpression = function(e, t, r) {
            if ("&&" !== r.operator && "||" !== r.operator)
              throw SyntaxError("Unknown logical operator: " + r.operator);
            if (!t.Y) return (t.Y = !0), new oe(r.left, t.scope);
            if (t.ra) e.pop(), (e[e.length - 1].value = t.value);
            else {
              if (
                !(
                  ("&&" === r.operator && !t.value) ||
                  ("||" === r.operator && t.value)
                )
              )
                return (t.ra = !0), new oe(r.right, t.scope);
              e.pop(), (e[e.length - 1].value = t.value);
            }
          }),
          (r.prototype.stepMemberExpression = function(e, t, r) {
            if (!t.qa) return (t.qa = !0), new oe(r.object, t.scope);
            if (r.computed) {
              if (!t.Cb)
                return (
                  (t.h = t.value), (t.Cb = !0), new oe(r.property, t.scope)
                );
              r = t.value;
            } else (t.h = t.value), (r = r.property.name);
            if ((e.pop(), t.ga)) e[e.length - 1].value = [t.h, r];
            else {
              if ((r = this.v(t.h, r)) && "object" == typeof r && r.K)
                return (r.K = !1), re(this, r, t.h);
              e[e.length - 1].value = r;
            }
          }),
          (r.prototype.stepNewExpression = r.prototype.stepCallExpression),
          (r.prototype.stepObjectExpression = function(e, t, r) {
            var n = t.s || 0,
              o = r.properties[n];
            if (t.h) {
              var a = o.key;
              if ("Identifier" === a.type) var i = a.name;
              else {
                if ("Literal" !== a.type)
                  throw SyntaxError("Unknown object structure: " + a.type);
                i = a.value;
              }
              t.xa[i] || (t.xa[i] = {}),
                (t.xa[i][o.kind] = t.value),
                (t.s = ++n),
                (o = r.properties[n]);
            } else (t.h = this.i(this.F)), (t.xa = Object.create(null));
            if (o) return new oe(o.value, t.scope);
            for (a in t.xa)
              "get" in (r = t.xa[a]) || "set" in r
                ? this.setProperty(t.h, a, u, {
                    configurable: !0,
                    enumerable: !0,
                    get: r.get,
                    set: r.set
                  })
                : this.setProperty(t.h, a, r.init);
            e.pop(), (e[e.length - 1].value = t.h);
          }),
          (r.prototype.stepProgram = function(e, t, r) {
            if ((e = r.body.shift())) return (t.done = !1), new oe(e, t.scope);
            t.done = !0;
          }),
          (r.prototype.stepReturnStatement = function(e, t, r) {
            if (r.argument && !t.M)
              return (t.M = !0), new oe(r.argument, t.scope);
            te(this, 3, t.value, void 0);
          }),
          (r.prototype.stepSequenceExpression = function(e, t, r) {
            var n = t.s || 0;
            if ((r = r.expressions[n]))
              return (t.s = n + 1), new oe(r, t.scope);
            e.pop(), (e[e.length - 1].value = t.value);
          }),
          (r.prototype.stepSwitchStatement = function(e, t, r) {
            if (!t.V) return (t.V = 1), new oe(r.discriminant, t.scope);
            for (1 === t.V && ((t.V = 2), (t.Nb = t.value), (t.Ma = -1)); ; ) {
              var n = t.Qa || 0,
                o = r.cases[n];
              if (t.va || !o || o.test)
                if (o || t.va || -1 === t.Ma) {
                  if (!o) {
                    e.pop();
                    break;
                  }
                  if (!t.va && !t.ob && o.test)
                    return (t.ob = !0), new oe(o.test, t.scope);
                  if (t.va || t.value === t.Nb) {
                    t.va = !0;
                    var a = t.s || 0;
                    if (o.consequent[a])
                      return (
                        (t.Hb = !0),
                        (t.s = a + 1),
                        new oe(o.consequent[a], t.scope)
                      );
                  }
                  (t.ob = !1), (t.s = 0), (t.Qa = n + 1);
                } else (t.va = !0), (t.Qa = t.Ma);
              else (t.Ma = n), (t.Qa = n + 1);
            }
          }),
          (r.prototype.stepThisExpression = function(e) {
            e.pop(), (e[e.length - 1].value = W(this, "this"));
          }),
          (r.prototype.stepThrowStatement = function(e, t, r) {
            if (!t.M) return (t.M = !0), new oe(r.argument, t.scope);
            ee(this, t.value);
          }),
          (r.prototype.stepTryStatement = function(e, t, r) {
            return t.xb
              ? t.T && 4 === t.T.type && !t.Ab && r.handler
                ? ((t.Ab = !0),
                  ((e = new oe(r.handler, t.scope)).Ob = t.T.value),
                  (t.T = void 0),
                  e)
                : !t.zb && r.finalizer
                ? ((t.zb = !0), new oe(r.finalizer, t.scope))
                : (e.pop(),
                  void (t.T && te(this, t.T.type, t.T.value, t.T.label)))
              : ((t.xb = !0), new oe(r.block, t.scope));
          }),
          (r.prototype.stepUnaryExpression = function(e, t, r) {
            if (!t.M)
              return (
                (t.M = !0),
                ((e = new oe(r.argument, t.scope)).ga =
                  "delete" === r.operator),
                e
              );
            e.pop();
            var n = t.value;
            if ("-" === r.operator) n = -n;
            else if ("+" === r.operator) n = +n;
            else if ("!" === r.operator) n = !n;
            else if ("~" === r.operator) n = ~n;
            else if ("delete" === r.operator) {
              if (((r = !0), Array.isArray(n))) {
                var o = n[0];
                o === l && (o = t.scope), (n = String(n[1]));
                try {
                  delete o.a[n];
                } catch (a) {
                  t.scope.H
                    ? ee(
                        this,
                        this.g,
                        "Cannot delete property '" + n + "' of '" + o + "'"
                      )
                    : (r = !1);
                }
              }
              n = r;
            } else if ("typeof" === r.operator)
              n = n && "Function" === n.J ? "function" : typeof n;
            else {
              if ("void" !== r.operator)
                throw SyntaxError("Unknown unary operator: " + r.operator);
              n = void 0;
            }
            e[e.length - 1].value = n;
          }),
          (r.prototype.stepUpdateExpression = function(e, t, r) {
            if (!t.Y)
              return (t.Y = !0), ((e = new oe(r.argument, t.scope)).ga = !0), e;
            if ((t.ua || (t.ua = t.value), t.pa && (t.$ = t.value), !t.pa)) {
              var n = K(this, t.ua);
              if ((t.$ = n) && "object" == typeof n && n.K)
                return (n.K = !1), (t.pa = !0), re(this, n, t.ua);
            }
            if (t.ia) e.pop(), (e[e.length - 1].value = t.Ua);
            else {
              if (((n = Number(t.$)), "++" === r.operator)) var o = n + 1;
              else {
                if ("--" !== r.operator)
                  throw SyntaxError("Unknown update expression: " + r.operator);
                o = n - 1;
              }
              if (((r = r.prefix ? o : n), (n = Q(this, t.ua, o))))
                return (t.ia = !0), (t.Ua = r), ne(this, n, t.ua, o);
              e.pop(), (e[e.length - 1].value = r);
            }
          }),
          (r.prototype.stepVariableDeclaration = function(e, t, r) {
            r = r.declarations;
            var n = t.s || 0,
              o = r[n];
            for (
              t.jb &&
              o &&
              (Y(this, o.id.name, t.value), (t.jb = !1), (o = r[++n]));
              o;

            ) {
              if (o.init)
                return (t.s = n), (t.jb = !0), new oe(o.init, t.scope);
              o = r[++n];
            }
            e.pop();
          }),
          (r.prototype.stepWithStatement = function(e, t, r) {
            return t.qa
              ? t.yb
                ? void e.pop()
                : ((t.yb = !0),
                  (e = H(this, t.scope, t.value)),
                  new oe(r.body, e))
              : ((t.qa = !0), new oe(r.object, t.scope));
          }),
          (r.prototype.stepWhileStatement = r.prototype.stepDoWhileStatement),
          (this.Interpreter = r),
          (r.prototype.step = r.prototype.step),
          (r.prototype.run = r.prototype.lb),
          (r.prototype.appendCode = r.prototype.sb),
          (r.prototype.createObject = r.prototype.oa),
          (r.prototype.createObjectProto = r.prototype.i),
          (r.prototype.createAsyncFunction = r.prototype.bb),
          (r.prototype.createNativeFunction = r.prototype.b),
          (r.prototype.getProperty = r.prototype.v),
          (r.prototype.setProperty = r.prototype.setProperty),
          (r.prototype.nativeToPseudo = r.prototype.ja),
          (r.prototype.pseudoToNative = r.prototype.L),
          (r.prototype.createPrimitive = function(e) {
            return e;
          });
      },
      { vm: "qy9T" }
    ],
    BHXf: [
      function(require, module, exports) {
        "use strict";
        function e(e) {
          return [...Array(e).keys()];
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.range = e);
      },
      {}
    ],
    wOIe: [
      function(require, module, exports) {
        "use strict";
        var t =
          (this && this.__importDefault) ||
          function(t) {
            return t && t.__esModule ? t : { default: t };
          };
        Object.defineProperty(exports, "__esModule", { value: !0 });
        const r = t(require("./acorn_interpreter"));
        window.acorn = r.default;
        const e = require("./util");
        exports.dataLength = 10;
        const a = 20;
        function n() {
          (exports.data = e
            .range(exports.dataLength)
            .map(() => Math.floor(Math.random() * exports.dataLength * 2 + 1))),
            0 === s() &&
              0 === s(!0) &&
              (exports.data = e.range(exports.dataLength).map(t => t + 1));
        }
        function s(t = !1) {
          const r = t ? -1 : 1;
          let e = 0;
          for (let a = 0; a < exports.dataLength - 1; a++)
            exports.data[a] * r < exports.data[a + 1] * r && e++;
          return e;
        }
        function o(t, r = !1) {
          const e = {
            source: t,
            name: r ? "Player2" : "Player1",
            isDescending: r,
            isSwapCalled: !1,
            swappingFrom: -1,
            swappingTo: -1,
            isTerminated: !1,
            instruction: "",
            instructionHistory: [],
            hasError: !1,
            errorMessage: ""
          };
          if (t.startsWith("//")) {
            const r = t
              .substring(2, t.indexOf("\n"))
              .trim()
              .substr(0, 16);
            r.length > 0 && (e.name = r);
          }
          return i(e), e;
        }
        function i(t) {
          try {
            (t.isTerminated = t.hasError = !1),
              (t.interpreter = new r.default.Interpreter(t.source, (r, e) => {
                r.setProperty(
                  e,
                  "get",
                  r.createNativeFunction(
                    t.isDescending
                      ? function(r) {
                          return (
                            (r < 0 || r >= exports.dataLength) &&
                              ((t.hasError = !0),
                              (t.errorMessage = `Invalid params: get(${r})`)),
                            -exports.data[r]
                          );
                        }
                      : function(r) {
                          return (
                            (r < 0 || r >= exports.dataLength) &&
                              ((t.hasError = !0),
                              (t.errorMessage = `Invalid params: get(${r})`)),
                            exports.data[r]
                          );
                        }
                  )
                ),
                  r.setProperty(
                    e,
                    "swap",
                    r.createNativeFunction(function(r, e) {
                      if (r === e) return;
                      if (
                        r < 0 ||
                        r >= exports.dataLength ||
                        e < 0 ||
                        e >= exports.dataLength
                      )
                        return (
                          (t.hasError = !0),
                          void (t.errorMessage = `Invalid params: swap(${r}, ${e})`)
                        );
                      const a = exports.data[r];
                      (exports.data[r] = exports.data[e]),
                        (exports.data[e] = a),
                        (t.isSwapCalled = !0),
                        (t.swappingFrom = r),
                        (t.swappingTo = e);
                    })
                  ),
                  r.setProperty(e, "length", exports.dataLength);
              }));
          } catch (e) {
            (t.hasError = !0), (t.errorMessage = e.toString());
          }
        }
        function p(t) {
          if (
            ((t.instruction = ""),
            (t.isSwapCalled = !1),
            t.isTerminated || t.hasError || null == t.interpreter)
          )
            return !1;
          if (t.interpreter.stateStack.length > 0) {
            const r =
              t.interpreter.stateStack[t.interpreter.stateStack.length - 1]
                .node;
            (t.instruction = t.source.substring(r.start, r.end)),
              t.instructionHistory.push(t.instruction),
              (t.instructionHistory = t.instructionHistory.slice(-a));
          }
          try {
            if (!t.interpreter.step()) return (t.isTerminated = !0), !1;
          } catch (r) {
            (t.hasError = !0), (t.errorMessage = r.toString());
          }
          return !0;
        }
        (exports.initData = n),
          (exports.countDataAscending = s),
          (exports.getCode = o),
          (exports.reset = i),
          (exports.step = p);
      },
      { "./acorn_interpreter": "VLyP", "./util": "BHXf" }
    ],
    XCCp: [
      function(require, module, exports) {
        "use strict";
        var e =
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var o in e)
                Object.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            return (t.default = e), t;
          };
        Object.defineProperty(exports, "__esModule", { value: !0 });
        const t = e(require("./code"));
        (exports.size = { x: 280, y: 500 }),
          (exports.ascendingColor = "#e91e63"),
          (exports.descendingColor = "#3f51b5");
        const o = { x: 27, y: 27 };
        let r, s, l;
        function n(e) {
          return "number" == typeof e ? e * devicePixelRatio : e;
        }
        function i(e, t, ...o) {
          switch (t) {
            case "clearRect": {
              const [t, r, s, l] = o;
              return e.clearRect(n(t), n(r), n(s), n(l));
            }
            case "fillRect": {
              const [t, r, s, l] = o;
              return e.fillRect(n(t), n(r), n(s), n(l));
            }
            case "fillText": {
              const [t, r, s, l] = o;
              return e.fillText(t, n(r), n(s), n(l));
            }
          }
        }
        function c() {
          const e = document.querySelector("#canvas");
          (e.width = n(exports.size.x)),
            (e.height = n(exports.size.y)),
            (s = e.getContext("2d")),
            l && l.removeEventListener("change", c),
            (l = matchMedia(
              `(resolution:${devicePixelRatio}dppx)`
            )).addEventListener("change", c);
        }
        function x() {
          r = t.data.map((e, t) => ({
            value: e,
            y: 64 + t * o.y,
            oy: 0,
            color: "#a1a1a1",
            sx: 0,
            sy: 0
          }));
        }
        function a(e, t, s, l) {
          const n = r[e],
            i = r[t];
          (n.oy = (t - e) * o.y * s), (i.oy = (e - t) * o.y * s);
          const c = l ? exports.descendingColor : exports.ascendingColor;
          (n.color = c),
            (i.color = c),
            (n.sx = (5 * Math.random() - 2) * s),
            (n.sy = (5 * Math.random() - 2) * s),
            (i.sx = (5 * Math.random() - 2) * s),
            (i.sy = (5 * Math.random() - 2) * s);
        }
        function f() {
          i(s, "clearRect", 0, 0, exports.size.x, exports.size.y);
        }
        function y(e, t) {
          h(10), (s.fillStyle = "#616161");
          let o = 80;
          t.forEach(t => {
            i(s, "fillText", t.substr(0, 16), e, o), (o += 15);
          });
        }
        function p() {
          h(20);
          let e,
            t = [];
          r.forEach(r => {
            (s.fillStyle = r.color),
              i(
                s,
                "fillRect",
                exports.size.x / 2 - o.x / 2 + r.sx,
                r.y + r.sy,
                o.x,
                o.y
              ),
              r.color === exports.ascendingColor &&
                ((e = exports.ascendingColor),
                t.push({ x: exports.size.x / 2 - 1.5 * o.x, y: r.y + o.y / 2 }),
                i(
                  s,
                  "fillRect",
                  exports.size.x / 2 - 1.5 * o.x,
                  r.y + o.y / 2 - 1,
                  o.x,
                  3
                )),
              r.color === exports.descendingColor &&
                ((e = exports.descendingColor),
                t.push({ x: exports.size.x / 2 + 1.5 * o.x, y: r.y + o.y / 2 }),
                i(
                  s,
                  "fillRect",
                  exports.size.x / 2 + 0.5 * o.x,
                  r.y + o.y / 2 - 1,
                  o.x,
                  3
                )),
              (s.fillStyle = "#ffffff"),
              i(
                s,
                "fillRect",
                exports.size.x / 2 - o.x / 2 + 3 + r.sx,
                r.y + 3 + r.sy,
                o.x - 6,
                o.y - 6
              );
            const l = r.value.toString();
            (s.fillStyle = "#616161"),
              i(
                s,
                "fillText",
                l,
                exports.size.x / 2 - 10 * (l.length - 1),
                r.y + r.oy + 20
              );
          }),
            t.length > 0 &&
              ((s.fillStyle = e),
              i(s, "fillRect", t[0].x - 1, t[0].y - 1, 3, t[1].y - t[0].y + 3));
        }
        function d(e, t, o, r, l) {
          (s.fillStyle = r), h(l);
          let n = o;
          e.split("\n").forEach(e => {
            i(s, "fillText", e, t, n), (n += l);
          });
        }
        function u(e) {
          (s.fillStyle = exports.ascendingColor),
            i(s, "fillRect", 5, 30, 270 * e, 10),
            (s.fillStyle = exports.descendingColor),
            i(s, "fillRect", 270 * e, 30, 270 - 270 * e, 10);
        }
        function h(e) {
          s.font = `${n(e)}px Inconsolata`;
        }
        (exports.init = c),
          (exports.setData = x),
          (exports.swapData = a),
          (exports.clear = f),
          (exports.drawInstructions = y),
          (exports.drawNumberBoxes = p),
          (exports.drawText = d),
          (exports.drawGauge = u);
      },
      { "./code": "wOIe" }
    ],
    ZCfc: [
      function(require, module, exports) {
        "use strict";
        var e =
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var n in e)
                Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return (t.default = e), t;
          };
        Object.defineProperty(exports, "__esModule", { value: !0 });
        const t = e(require("./code")),
          n = e(require("./screen")),
          r =
            "// QUICK\nfunction sort(l, h) {\n  if (l < h) {\n    i = l; j = h;\n    p = med(get(i),\n      get(Math.floor(i + (j - i) / 2)),\n      get(j));\n    while(true) {\n      while (get(i) < p) i++;\n      while (p < get(j)) j--;\n      if (i >= j) break;\n      swap(i, j);\n      i++; j--;\n    }\n    sort(l, i - 1);\n    sort(j + 1, h);\n  }\n}\nfunction med(x, y, z) {\n  if (x < y) {\n    if (y < z) return y;\n    else if (z < x) return x;\n    else return z;\n  } else {\n    if (z < y) return y;\n    else if (x < z) return x;\n    else return z;\n  }\n}\nsort(0, length - 1);\n",
          i =
            "// INSERTION\nfor (i = 1; i < length; i++) {\n  j = i;\n  while (j > 0 && get(j - 1) > get(j)) {\n    swap(j, j - 1);\n    j--;\n  }\n}\n";
        let o, s, a, c, l;
        window.addEventListener("load", h);
        let d,
          u,
          f,
          g,
          m,
          p = !1,
          w = "START";
        function h() {
          (new mdc.textField.MDCTextField(
            document.querySelectorAll(".mdc-text-field")[0]
          ).value = r),
            (new mdc.textField.MDCTextField(
              document.querySelectorAll(".mdc-text-field")[1]
            ).value = i),
            (o = document.querySelector("#ascending-side-code")),
            (s = document.querySelector("#descending-side-code")),
            new mdc.ripple.MDCRipple(document.querySelector(".mdc-button")),
            (a = document.querySelector("#start")).addEventListener("click", T),
            o.addEventListener("input", y),
            s.addEventListener("input", y),
            n.init(),
            C();
        }
        function T() {
          switch (w) {
            case "START":
              S(), v("PAUSE");
              break;
            case "PAUSE":
              j();
              break;
            case "RESTART":
              x();
          }
        }
        function S() {
          t.initData(),
            (c = { ticks: 0, from: -1, to: -1 }),
            (l = { ticks: 0, from: -1, to: -1 }),
            (u = t.getCode(o.value)),
            (f = t.getCode(s.value, !0)),
            (p = !0),
            (g = 10),
            (d = 0.5),
            (m = 0);
        }
        function j() {
          (p = !1), v("RESTART");
        }
        function x() {
          (p = !0), v("PAUSE");
        }
        function y() {
          (p = !1), v("START"), n.clear();
        }
        function C() {
          if ((requestAnimationFrame(C), !p)) return;
          if (c.ticks > 0)
            return (
              n.swapData(c.from, c.to, c.ticks / g, !1), k(), void c.ticks--
            );
          if (l.ticks > 0)
            return (
              n.swapData(l.from, l.to, l.ticks / g, !0), k(), void l.ticks--
            );
          for (
            let n = 0;
            n < 256 &&
            (t.step(u), t.step(f), !u.isSwapCalled && !f.isSwapCalled);
            n++
          );
          u.isSwapCalled &&
            (c = { ticks: g, from: u.swappingFrom, to: u.swappingTo }),
            f.isSwapCalled &&
              (l = { ticks: g, from: f.swappingFrom, to: f.swappingTo }),
            u.hasError && f.hasError ? m++ : (m = 0),
            (u.isTerminated || u.hasError) && t.reset(u),
            (f.isTerminated || f.hasError) && t.reset(f);
          const e = t.countDataAscending(),
            r = t.countDataAscending(!0);
          (d = e / (e + r)),
            (0 === e || 0 === r || m > 10) && ((p = !1), v("START")),
            (g += e > 1 && r > 1 ? 0.05 * (1 - g) : 0.2 * (10 - g)),
            n.setData(),
            k();
        }
        function k() {
          n.clear(),
            n.drawText(u.name, 5, 25, n.ascendingColor, 16),
            n.drawText(
              f.name,
              270 - 8 * f.name.length,
              25,
              n.descendingColor,
              16
            ),
            n.drawGauge(d),
            n.drawInstructions(5, u.instructionHistory),
            n.drawInstructions(190, f.instructionHistory),
            u.errorMessage.length > 0 &&
              n.drawText(
                u.errorMessage.match(/(.{1,24})/g).join("\n"),
                5,
                400,
                n.ascendingColor,
                11
              ),
            f.errorMessage.length > 0 &&
              n.drawText(
                f.errorMessage.match(/(.{1,24})/g).join("\n"),
                n.size.x / 2,
                400,
                n.ascendingColor,
                11
              ),
            n.drawNumberBoxes();
        }
        function v(e) {
          (w = e), (a.textContent = e);
        }
      },
      { "./code": "wOIe", "./screen": "XCCp" }
    ]
  },
  {},
  ["ZCfc"],
  null
);
