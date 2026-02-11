(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) return;
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) processPreload(link);
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") continue;
      for (const node of mutation.addedNodes) if (node.tagName === "LINK" && node.rel === "modulepreload") processPreload(node);
    }
  }).observe(document, {
    childList: true,
    subtree: true
  });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials") fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep) return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
var m$3 = "0.9.0";
var o$2 = /* @__PURE__ */ Symbol(`typegpu:${m$3}:$internal`), dn$2 = /* @__PURE__ */ Symbol(`typegpu:${m$3}:$gpuValueOf`), B$3 = /* @__PURE__ */ Symbol(`typegpu:${m$3}:$getNameForward`), Re$1 = /* @__PURE__ */ Symbol(`typegpu:${m$3}:$providing`), de$3 = /* @__PURE__ */ Symbol(`typegpu:${m$3}:$ownSnippet`), R$2 = /* @__PURE__ */ Symbol(`typegpu:${m$3}:$resolve`), Ne$1 = /* @__PURE__ */ Symbol(`typegpu:${m$3}:$repr`);
function u$2(e262) {
  return !!e262?.[o$2];
}
var Sn$2 = { [o$2]: true, type: "void", toString() {
  return "void";
} }, It$2 = ["bool", "f32", "f16", "i32", "u32", "u16", "vec2f", "vec2h", "vec2i", "vec2u", "vec2<bool>", "vec3f", "vec3h", "vec3i", "vec3u", "vec3<bool>", "vec4f", "vec4h", "vec4i", "vec4u", "vec4<bool>", "mat2x2f", "mat3x3f", "mat4x4f", "struct", "array", "ptr", "atomic", "decorated", "abstractInt", "abstractFloat", "void", "texture_1d", "texture_storage_1d", "texture_2d", "texture_storage_2d", "texture_multisampled_2d", "texture_depth_2d", "texture_depth_multisampled_2d", "texture_2d_array", "texture_storage_2d_array", "texture_depth_2d_array", "texture_cube", "texture_depth_cube", "texture_cube_array", "texture_depth_cube_array", "texture_3d", "texture_storage_3d", "texture_external", "sampler", "sampler_comparison"];
function ie$2(e262) {
  let t12 = e262;
  return u$2(t12) && typeof t12.kind == "string" && t12.kind.startsWith("vec");
}
function At$1(e262) {
  let t12 = e262;
  return u$2(t12) && typeof t12.type == "string" && t12.type.startsWith("vec2");
}
function $t$2(e262) {
  let t12 = e262;
  return u$2(t12) && typeof t12.type == "string" && t12.type.startsWith("vec3");
}
function Dt$2(e262) {
  let t12 = e262;
  return u$2(t12) && typeof t12.type == "string" && t12.type.startsWith("vec4");
}
function se$2(e262) {
  return At$1(e262) || $t$2(e262) || Dt$2(e262);
}
function me$4(e262) {
  let t12 = e262;
  return u$2(t12) && typeof t12.kind?.startsWith == "function" && t12.kind.startsWith("mat");
}
function kt$2(e262) {
  return u$2(e262) && e262?.type === "mat2x2f";
}
function Ft$3(e262) {
  return u$2(e262) && e262?.type === "mat3x3f";
}
function Pt$3(e262) {
  return u$2(e262) && e262?.type === "mat4x4f";
}
function _e$2(e262) {
  return kt$2(e262) || Ft$3(e262) || Pt$3(e262);
}
function _n$1(e262) {
  return ie$2(e262) && ["vec2f", "vec3f", "vec4f"].includes(e262.kind);
}
function fe$3(e262) {
  return u$2(e262) && It$2.includes(e262?.type);
}
function In$2(e262) {
  return u$2(e262) && e262?.type === "array";
}
function An$1(e262) {
  return u$2(e262) && e262?.type === "struct";
}
function Ee$2(e262) {
  return u$2(e262) && e262?.type === "ptr";
}
function $n$2(e262) {
  return u$2(e262) && e262?.type === "atomic";
}
function Ue$1(e262) {
  return u$2(e262) && e262?.type === "@align";
}
function Ce$3(e262) {
  return u$2(e262) && e262?.type === "@size";
}
function Be$2(e262) {
  return u$2(e262) && e262?.type === "@location";
}
function Dn$2(e262) {
  return u$2(e262) && e262?.type === "@interpolate";
}
function kn$1(e262) {
  return u$2(e262) && e262?.type === "@builtin";
}
function Fn$1(e262) {
  return u$2(e262) && e262?.type === "decorated";
}
function Pn$1(e262) {
  return u$2(e262) && e262.type === "void";
}
function Me$2(e262) {
  let t12 = e262?.type;
  return u$2(e262) && (t12 === "abstractInt" || t12 === "abstractFloat" || t12 === "f32" || t12 === "f16" || t12 === "i32" || t12 === "u32");
}
function Rn$1(e262) {
  let t12 = e262?.type;
  return u$2(e262) && (t12 === "f16" || t12 === "vec2h" || t12 === "vec3h" || t12 === "vec4h");
}
var Rt$2 = ["abstractInt", "abstractFloat", "f32", "f16", "i32", "u32", "bool"];
function Oe$1(e262) {
  return !u$2(e262) || Rt$2.includes(e262?.type);
}
function We$2(e262) {
  return e262.schema;
}
Object.assign(globalThis, { __TYPEGPU_AUTONAME__: (e262, t12) => (Et$2(e262) && u$2(e262) && !z$2(e262) && e262.$name(t12), e262) });
var oe$3 = globalThis;
function je$1(e262) {
  return !!e262?.[B$3];
}
function z$2(e262) {
  return je$1(e262) ? z$2(e262[B$3]) : Ge$2(e262)?.name;
}
function g$2(e262, t12) {
  je$1(e262) && g$2(e262[B$3], t12), Ut$3(e262, { name: t12 });
}
function Et$2(e262) {
  return !!e262?.$name;
}
function Le$1(e262) {
  return !!Ge$2(e262)?.ast;
}
function Ge$2(e262) {
  return oe$3.__TYPEGPU_META__.get(e262);
}
function Ut$3(e262, t12) {
  oe$3.__TYPEGPU_META__ ??= /* @__PURE__ */ new WeakMap();
  let n2 = oe$3.__TYPEGPU_META__;
  n2.set(e262, { ...n2.get(e262), ...t12 });
}
var Ke$1 = ["uint8", "uint8x2", "uint8x4", "sint8", "sint8x2", "sint8x4", "unorm8", "unorm8x2", "unorm8x4", "snorm8", "snorm8x2", "snorm8x4", "uint16", "uint16x2", "uint16x4", "sint16", "sint16x2", "sint16x4", "unorm16", "unorm16x2", "unorm16x4", "snorm16", "snorm16x2", "snorm16x4", "float16", "float16x2", "float16x4", "float32", "float32x2", "float32x3", "float32x4", "uint32", "uint32x2", "uint32x3", "uint32x4", "sint32", "sint32x2", "sint32x3", "sint32x4", "unorm10-10-10-2", "unorm8x4-bgra"], Mn$1 = { f32: "float32", vec2f: "float32x2", vec3f: "float32x3", vec4f: "float32x4", f16: "float16", vec2h: "float16x2", vec4h: "float16x4", u32: "uint32", vec2u: "uint32x2", vec3u: "uint32x3", vec4u: "uint32x4", i32: "sint32", vec2i: "sint32x2", vec3i: "sint32x3", vec4i: "sint32x4" };
function I$4(e262) {
  return e262.type === "decorated" || e262.type === "loose-decorated" ? e262.inner : e262;
}
function Kn$1(e262) {
  return e262.type === "ptr" ? e262.inner : e262;
}
var Ct$1 = ["unstruct", "disarray", "loose-decorated", ...Ke$1];
function Bt$1(e262) {
  return u$2(e262) && Ct$1.includes(e262?.type);
}
function Yn$1(e262) {
  return u$2(e262) && e262?.type === "disarray";
}
function Hn$1(e262) {
  return u$2(e262) && e262?.type === "unstruct";
}
function qn$1(e262) {
  return u$2(e262) && e262?.type === "loose-decorated";
}
function Jn$1(e262) {
  return e262.attribs?.find(Ue$1)?.params[0];
}
function Xn$1(e262) {
  return e262.attribs?.find(Ce$3)?.params[0];
}
function Zn$1(e262) {
  return e262.attribs?.find(Be$2)?.params[0];
}
function Qn$1(e262) {
  return fe$3(e262) || Bt$1(e262);
}
var ae$3 = { type: "unknown", toString() {
  return "unknown";
} }, Ye$1 = class Ye {
  constructor(t12, n2, r) {
    this.name = t12;
    this.lhs = n2;
    this.operator = r;
  }
}, He$2 = class He {
  constructor(t12) {
    this.matrix = t12;
  }
}, qe$2 = class qe {
  constructor(t12) {
    this.op = t12;
    g$2(this, "consoleLog");
  }
  [o$2] = true;
};
var Ie$3 = "Invariant failed";
function we$2(e262, t12) {
  if (e262) return;
  throw new Error(Ie$3);
}
var Je$3 = class e extends Error {
  constructor(n2, r) {
    let i2 = r.map((s2) => `- ${Le$1(s2) ? `fn*:${z$2(s2)}` : s2}`);
    i2.length > 20 && (i2 = [...i2.slice(0, 11), "...", ...i2.slice(-10)]);
    super(`Resolution of the following tree failed:
${i2.join(`
`)}: ${n2 && typeof n2 == "object" && "message" in n2 ? n2.message : n2}`);
    this.cause = n2;
    this.trace = r;
    Object.setPrototypeOf(this, e.prototype);
  }
  appendToTrace(n2) {
    let r = [n2, ...this.trace];
    return new e(this.cause, r);
  }
}, Xe$2 = class e2 extends Error {
  constructor(n2, r) {
    let i2 = r.map((s2) => `- ${s2}`);
    i2.length > 20 && (i2 = [...i2.slice(0, 11), "...", ...i2.slice(-10)]);
    super(`Execution of the following tree failed:
${i2.join(`
`)}: ${n2 && typeof n2 == "object" && "message" in n2 ? n2.message : n2}`);
    this.cause = n2;
    this.trace = r;
    Object.setPrototypeOf(this, e2.prototype);
  }
  appendToTrace(n2) {
    let r = [n2, ...this.trace];
    return new e2(this.cause, r);
  }
}, Ze$2 = class e3 extends Error {
  constructor(n2) {
    super(`Missing value for '${n2}'`);
    this.slot = n2;
    Object.setPrototypeOf(this, e3.prototype);
  }
}, Qe$2 = class e4 extends Error {
  constructor(t12) {
    super(`Buffer '${z$2(t12) ?? "<unnamed>"}' is not bindable as a uniform. Use .$usage('uniform') to allow it.`), Object.setPrototypeOf(this, e4.prototype);
  }
}, et$3 = class e5 extends Error {
  constructor(t12, n2) {
    super(`The function '${t12 ?? "<unnamed>"}' is missing links to the following external values: ${n2}.`), Object.setPrototypeOf(this, e5.prototype);
  }
}, tt$3 = class e6 extends Error {
  constructor(t12) {
    super(`Missing bind groups for layouts: '${[...t12].map((n2) => z$2(n2) ?? "<unnamed>").join(", ")}'. Please provide it using pipeline.with(bindGroup).(...)`), Object.setPrototypeOf(this, e6.prototype);
  }
}, nt$2 = class e7 extends Error {
  constructor(t12) {
    super(`Missing vertex buffers for layouts: '${[...t12].map((n2) => z$2(n2) ?? "<unnamed>").join(", ")}'. Please provide it using pipeline.with(layout, buffer).(...)`), Object.setPrototypeOf(this, e7.prototype);
  }
}, rt$3 = class e8 extends Error {
  constructor(t12) {
    super(t12), Object.setPrototypeOf(this, e8.prototype);
  }
}, it$2 = class e9 extends Error {
  constructor(t12) {
    super(t12), Object.setPrototypeOf(this, e9.prototype);
  }
}, A$2 = class e10 extends Error {
  constructor(t12) {
    super(t12), Object.setPrototypeOf(this, e10.prototype);
  }
};
function st$2(e262) {
  return e262?.resourceType === "slot";
}
function ot$2(e262) {
  return e262?.resourceType === "derived";
}
function at$2(e262) {
  return e262?.[Re$1] !== void 0;
}
function ar$4(e262) {
  return e262?.resourceType === "accessor";
}
function Mt$2(e262) {
  return e262 === "runtime" || e262 === "constant" || e262 === "argument";
}
function lr$3(e262) {
  return Mt$2(e262.origin);
}
var ut$2 = { uniform: { space: "uniform", access: "read" }, readonly: { space: "storage", access: "read" }, mutable: { space: "storage", access: "read-write" }, workgroup: { space: "workgroup", access: "read-write" }, private: { space: "private", access: "read-write" }, function: { space: "function", access: "read-write" }, "this-function": { space: "function", access: "read-write" } }, Te$4 = class Te {
  constructor(t12, n2, r) {
    this.value = t12;
    this.dataType = n2;
    this.origin = r;
  }
};
function ue$5(e262) {
  return e262 instanceof Te$4;
}
function hr$3(e262) {
  return Me$2(e262.dataType);
}
function y$2(e262, t12, n2) {
  return new Te$4(e262, I$4(t12), n2);
}
function fr$3(e262) {
  return S$2("function", e262, "read-write");
}
function wr$3(e262) {
  return S$2("private", e262, "read-write");
}
function Tr$4(e262) {
  return S$2("workgroup", e262, "read-write");
}
function gr$3(e262, t12 = "read") {
  return S$2("storage", e262, t12);
}
function Vr$2(e262) {
  return S$2("uniform", e262, "read");
}
function vr$3(e262) {
  return S$2("handle", e262, "read");
}
function S$2(e262, t12, n2, r = false) {
  return { [o$2]: true, type: "ptr", addressSpace: e262, inner: t12, access: n2, implicit: r, toString: () => `ptr<${e262}, ${t12}, ${n2}>` };
}
function yt$3(e262, t12) {
  let n2 = ut$2[e262];
  if (n2) return S$2(n2.space, t12, n2.access);
}
function br$3(e262) {
  return S$2(e262.addressSpace, e262.inner, e262.access, true);
}
function ct$3(e262) {
  return S$2(e262.addressSpace, e262.inner, e262.access, false);
}
var $$2 = class $ {
  type = "normal";
}, pt$2 = class pt {
  type = "codegen";
}, lt$2 = class lt {
  constructor(t12, n2) {
    this.buffers = t12;
    this.vars = n2;
  }
  type = "simulate";
};
function Ot$1(e262) {
  return !!e262?.[R$2];
}
function Ae$2(e262) {
  return e262?.[de$3];
}
function ye$4(e262) {
  return (typeof e262.value != "string" || e262.dataType.type === "unknown") && Ae$2(e262.value) === void 0;
}
function Dr$2(e262) {
  return typeof e262 == "number" || typeof e262 == "boolean" || typeof e262 == "string" || Ot$1(e262) || fe$3(e262) || st$2(e262) || ot$2(e262) || at$2(e262);
}
function kr$2(e262) {
  return !!e262 && typeof e262 == "object" && "getMappedRange" in e262 && "mapAsync" in e262;
}
var ge$3 = false;
function Nr$2(e262) {
  if (ge$3) return e262();
  try {
    return ge$3 = true, e262();
  } finally {
    ge$3 = false;
  }
}
function Er$1() {
  return ge$3;
}
var D$1;
function Ur$2(e262, t12) {
  if (we$2(D$1 === void 0 || D$1 === e262), D$1 === e262) return t12();
  D$1 = e262;
  try {
    return t12();
  } finally {
    D$1 = void 0;
  }
}
function O$3() {
  return D$1;
}
var Wt$2 = new $$2();
function Cr$1() {
  return D$1?.mode ?? Wt$2;
}
function Ve$1() {
  return D$1?.mode.type === "codegen";
}
function p$1(e262, ...t12) {
  let n2 = O$3();
  function r(s2) {
    return ue$5(s2) ? n2.resolve(s2.value, s2.dataType).value : s2;
  }
  let i2 = "";
  for (let s2 = 0; s2 < e262.length; ++s2) {
    i2 += e262[s2];
    let c2 = t12[s2];
    Array.isArray(c2) ? i2 += c2.filter((l2) => l2 !== void 0).map(r).join(", ") : c2 && (i2 += r(c2));
  }
  return i2;
}
var Zr$2 = (() => {
  let e262 = (r) => {
    if (r.origin === "argument") throw new A$2(p$1`d.ref(${r}) is illegal, cannot take a reference of an argument. Copy the value locally first, and take a reference of the copy.`);
    if (r.dataType.type === "ptr") return y$2(r.value, ct$3(r.dataType), r.origin);
    let i2 = yt$3(r.origin, r.dataType);
    return y$2(new W$1(r, i2), i2 ?? ae$3, "runtime");
  }, t12 = (r) => new ve$3(r), n2 = (r) => Ve$1() ? e262(r) : t12(r);
  return g$2(n2, "ref"), n2.toString = () => "ref", Object.defineProperty(n2, o$2, { value: { jsImpl: t12, gpuImpl: e262, strictSignature: void 0, argConversionHint: "keep" } }), n2;
})();
function ht$2(e262) {
  return e262 instanceof ve$3;
}
var ve$3 = class ve {
  [o$2];
  type;
  #e;
  constructor(t12) {
    this[o$2] = true, this.type = "ref", this.#e = t12;
  }
  get $() {
    return this.#e;
  }
  set $(t12) {
    if (t12 && typeof t12 == "object") for (let n2 of Object.keys(t12)) this.#e[n2] = t12[n2];
    else this.#e = t12;
  }
}, W$1 = class W {
  [o$2];
  snippet;
  #e;
  constructor(t12, n2) {
    this[o$2] = true, this.snippet = t12, this.#e = n2;
  }
  get [de$3]() {
    if (!this.#e) throw new Error(p$1`Cannot take a reference of ${this.snippet}`);
    return y$2(this, this.#e, this.snippet.origin);
  }
  [R$2](t12) {
    if (!this.#e) throw new Error(p$1`Cannot take a reference of ${this.snippet}`);
    return y$2(p$1`(&${this.snippet})`, this.#e, this.snippet.origin);
  }
};
function xt$2(e262) {
  if (!Ee$2(e262.dataType)) return e262;
  let t12 = e262.dataType.inner, n2 = Oe$1(t12) ? "runtime" : e262.origin;
  return e262.value instanceof W$1 ? y$2(p$1`${e262.value.snippet}`, t12, n2) : y$2(p$1`(*${e262})`, t12, n2);
}
function dt$3(e262, t12) {
  throw new Error(`Failed to handle ${e262} at ${t12}`);
}
var $e$2 = { rank: Number.POSITIVE_INFINITY, action: "none" };
function be$4(e262, t12) {
  let n2 = I$4(e262), r = I$4(t12);
  if (n2.type === r.type) return { rank: 0, action: "none" };
  if (n2.type === "abstractFloat") {
    if (r.type === "f32") return { rank: 1, action: "none" };
    if (r.type === "f16") return { rank: 2, action: "none" };
  }
  if (n2.type === "abstractInt") {
    if (r.type === "i32") return { rank: 3, action: "none" };
    if (r.type === "u32") return { rank: 4, action: "none" };
    if (r.type === "abstractFloat") return { rank: 5, action: "none" };
    if (r.type === "f32") return { rank: 6, action: "none" };
    if (r.type === "f16") return { rank: 7, action: "none" };
  }
  return se$2(n2) && se$2(r) ? be$4(n2.primitive, r.primitive) : _e$2(n2) && _e$2(r) ? { rank: 0, action: "none" } : $e$2;
}
function jt$2(e262, t12) {
  let n2 = I$4(e262), r = I$4(t12);
  if (n2.type === "ptr" && n2.implicit && be$4(n2.inner, r).rank < Number.POSITIVE_INFINITY) return { rank: 0, action: "deref" };
  if (r.type === "ptr" && be$4(n2, r.inner).rank < Number.POSITIVE_INFINITY) return { rank: 1, action: "ref" };
  let i2 = { f32: 0, f16: 1, i32: 2, u32: 3, bool: 4 };
  if (n2.type in i2 && r.type in i2) {
    let s2 = n2.type, c2 = r.type;
    if (s2 !== c2) {
      let l2 = i2[s2];
      return { rank: i2[c2] < l2 ? 10 : 20, action: "cast", targetType: r };
    }
  }
  if (n2.type === "abstractFloat") {
    if (r.type === "u32") return { rank: 2, action: "cast", targetType: r };
    if (r.type === "i32") return { rank: 1, action: "cast", targetType: r };
  }
  return $e$2;
}
function Lt$3(e262, t12, n2) {
  let r = be$4(e262, t12);
  return r.rank < Number.POSITIVE_INFINITY ? r : n2 ? jt$2(e262, t12) : $e$2;
}
function mt$2(e262, t12, n2) {
  let r;
  for (let s2 of t12) {
    let c2 = [], l2 = 0;
    for (let d2 of e262) {
      let h2 = Lt$3(d2, s2, n2);
      if (l2 += h2.rank, h2.rank === Number.POSITIVE_INFINITY) break;
      c2.push(h2);
    }
    l2 < (r?.sum ?? Number.POSITIVE_INFINITY) && (r = { type: s2, details: c2, sum: l2 });
  }
  if (!r) return;
  let i2 = r.details.map((s2, c2) => ({ sourceIndex: c2, action: s2.action, ...s2.action === "cast" && { targetType: s2.targetType } }));
  return { targetType: r.type, actions: i2, hasImplicitConversions: i2.some((s2) => s2.action === "cast") };
}
function ft$2(e262, t12) {
  if (e262.length === 0) return;
  let n2 = [...new Set((t12 || e262).map(I$4))], r = mt$2(e262, n2, false);
  if (r) return r;
  let i2 = mt$2(e262, n2, true);
  if (i2) return i2;
}
function Gt$3(e262, t12, n2) {
  if (t12.action === "none") return y$2(e262.value, n2, e262.origin);
  switch (t12.action) {
    case "ref":
      return y$2(new W$1(e262, n2), n2, e262.origin);
    case "deref":
      return xt$2(e262);
    case "cast":
      return n2(e262);
    default:
      dt$3(t12.action, "applyActionToSnippet");
  }
}
function yi$1(e262, t12) {
  if (e262.some((r) => r.type === "unknown")) return;
  let n2 = ft$2(e262, t12);
  if (n2) return e262.map(() => n2.targetType);
}
function wt$3(e262, t12, n2 = true) {
  let r = e262.map((s2) => s2.dataType);
  if (r.some((s2) => s2.type === "unknown")) return;
  let i2 = ft$2(r, t12);
  if (i2) return e262.map((s2, c2) => {
    let l2 = i2.actions[c2];
    return we$2(l2), Gt$3(s2, l2, i2.targetType);
  });
}
function Tt$3(e262, t12, n2 = true) {
  if (t12 === e262.dataType) return y$2(e262.value, t12, e262.origin);
  if (e262.dataType.type === "unknown") return y$2(p$1`${y$2(e262.value, t12, e262.origin)}`, t12, e262.origin);
  let r = wt$3([e262], [t12], n2);
  if (!r) throw new A$2(`Cannot convert value of type '${String(e262.dataType)}' to type '${t12.type}'`);
  return r[0];
}
function ci$1(e262, t12) {
  return Object.keys(e262.propTypes).map((r) => {
    let i2 = t12[r];
    if (!i2) throw new Error(`Missing property ${r}`);
    let s2 = e262.propTypes[r];
    return wt$3([i2], [s2])?.[0] ?? i2;
  });
}
var ze$3 = class ze extends Error {
  constructor(t12) {
    super(t12), this.name = this.constructor.name;
  }
};
function k$1(e262) {
  let t12 = (...r) => {
    let i2 = O$3(), { argTypes: s2, returnType: c2 } = typeof e262.signature == "function" ? e262.signature(...r.map((h2) => h2.dataType.type === "ptr" && h2.dataType.implicit ? h2.dataType.inner : h2.dataType)) : e262.signature, d2 = r.map((h2, P2) => {
      let C2 = s2[P2];
      if (!C2) throw new Error("Function called with invalid arguments");
      return Tt$3(h2, C2, !e262.ignoreImplicitCastWarning);
    });
    if (!e262.noComptime && d2.every((h2) => ye$4(h2)) && typeof e262.normalImpl == "function") {
      i2.pushMode(new $$2());
      try {
        return y$2(e262.normalImpl(...d2.map((h2) => h2.value)), c2, "constant");
      } catch (h2) {
        if (!(h2 instanceof ze$3)) throw h2;
      } finally {
        i2.popMode("normal");
      }
    }
    return y$2(e262.codegenImpl(...d2), c2, "runtime");
  }, n2 = ((...r) => {
    if (Ve$1()) return t12(...r);
    if (typeof e262.normalImpl == "string") throw new ze$3(e262.normalImpl);
    return e262.normalImpl(...r);
  });
  return g$2(n2, e262.name), n2.toString = () => e262.name, Object.defineProperty(n2, o$2, { value: { jsImpl: e262.normalImpl, gpuImpl: t12, get strictSignature() {
    return typeof e262.signature != "function" ? e262.signature : void 0;
  }, argConversionHint: "keep" } }), n2;
}
var gt$3 = { [o$2]: true, type: "abstractInt", toString() {
  return "abstractInt";
} }, De$2 = { [o$2]: true, type: "abstractFloat", toString() {
  return "abstractFloat";
} }, Kt$1 = k$1({ name: "bool", signature: (e262) => ({ argTypes: e262 ? [e262] : [], returnType: V$1 }), normalImpl(e262) {
  return e262 === void 0 ? false : typeof e262 == "boolean" ? e262 : !!e262;
}, codegenImpl: (e262) => e262.dataType.type === "bool" ? p$1`${e262}` : p$1`bool(${e262})` }), V$1 = Object.assign(Kt$1, { type: "bool" }), Yt$2 = k$1({ name: "u32", signature: (e262) => ({ argTypes: e262 ? [e262] : [], returnType: T$2 }), normalImpl(e262) {
  return e262 === void 0 ? 0 : typeof e262 == "boolean" ? e262 ? 1 : 0 : (e262 & 4294967295) >>> 0;
}, codegenImpl: (e262) => e262.dataType.type === "u32" ? p$1`${e262}` : p$1`u32(${e262})` }), T$2 = Object.assign(Yt$2, { type: "u32" }), Ht$2 = k$1({ name: "i32", signature: (e262) => ({ argTypes: e262 ? [e262] : [], returnType: f$1 }), normalImpl(e262) {
  return e262 === void 0 ? 0 : typeof e262 == "boolean" ? e262 ? 1 : 0 : e262 | 0;
}, codegenImpl: (e262) => e262.dataType.type === "i32" ? p$1`${e262}` : p$1`i32(${e262})` }), vi$1 = { [o$2]: true, type: "u16" }, f$1 = Object.assign(Ht$2, { type: "i32" }), qt$1 = k$1({ name: "f32", signature: (e262) => ({ argTypes: e262 ? [e262] : [], returnType: x$2 }), normalImpl(e262) {
  return e262 === void 0 ? 0 : typeof e262 == "boolean" ? e262 ? 1 : 0 : Math.fround(e262);
}, codegenImpl: (e262) => e262.dataType.type === "f32" ? p$1`${e262}` : p$1`f32(${e262})` }), x$2 = Object.assign(qt$1, { type: "f32" }), Vt$2 = new ArrayBuffer(4), Jt$4 = new Float32Array(Vt$2), Xt$2 = new Uint32Array(Vt$2);
function Zt$2(e262) {
  Jt$4[0] = e262;
  let t12 = Xt$2[0], n2 = t12 >>> 31 & 1, r = t12 >>> 23 & 255, i2 = t12 & 8388607;
  return r === 255 ? n2 << 15 | 31744 | (i2 ? 512 : 0) : (r = r - 127 + 15, r <= 0 ? r < -10 ? n2 << 15 : (i2 = (i2 | 8388608) >> 1 - r, i2 = i2 + 4096 >> 13, n2 << 15 | i2) : r >= 31 || (i2 = i2 + 4096, i2 & 8388608 && (i2 = 0, ++r, r >= 31)) ? n2 << 15 | 31744 : n2 << 15 | r << 10 | i2 >> 13);
}
function Qt$1(e262) {
  let t12 = e262 & 32768 ? -1 : 1, n2 = e262 >> 10 & 31, r = e262 & 1023;
  return n2 === 0 ? r ? t12 * r * 2 ** -24 : t12 * 0 : n2 === 31 ? r ? Number.NaN : t12 === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY : t12 * (1 + r / 1024) * 2 ** (n2 - 15);
}
function en$2(e262) {
  return Qt$1(Zt$2(e262));
}
var tn$2 = k$1({ name: "f16", signature: (e262) => ({ argTypes: e262 ? [e262] : [], returnType: _$1 }), normalImpl(e262) {
  return e262 === void 0 ? 0 : typeof e262 == "boolean" ? e262 ? 1 : 0 : en$2(e262);
}, codegenImpl: (e262) => e262.dataType.type === "f16" ? p$1`${e262}` : p$1`f16(${e262})` }), _$1 = Object.assign(tn$2, { type: "f16" });
var ce$3 = class ce extends Array {
  castElement() {
    return this[o$2].elementSchema[o$2].jsImpl;
  }
  [R$2]() {
    let t12 = this[o$2].elementSchema;
    return this.every((n2) => !n2) ? y$2(`${this.kind}()`, t12, "constant") : this.every((n2) => this[0] === n2) ? y$2(`${this.kind}(${this[0]})`, t12, "runtime") : y$2(`${this.kind}(${this.join(", ")})`, t12, "runtime");
  }
  toString() {
    return this[R$2]().value;
  }
  get xx() {
    return new this._Vec2(this[0], this[0]);
  }
  get xy() {
    return new this._Vec2(this[0], this[1]);
  }
  get xz() {
    return new this._Vec2(this[0], this[2]);
  }
  get xw() {
    return new this._Vec2(this[0], this[3]);
  }
  get yx() {
    return new this._Vec2(this[1], this[0]);
  }
  get yy() {
    return new this._Vec2(this[1], this[1]);
  }
  get yz() {
    return new this._Vec2(this[1], this[2]);
  }
  get yw() {
    return new this._Vec2(this[1], this[3]);
  }
  get zx() {
    return new this._Vec2(this[2], this[0]);
  }
  get zy() {
    return new this._Vec2(this[2], this[1]);
  }
  get zz() {
    return new this._Vec2(this[2], this[2]);
  }
  get zw() {
    return new this._Vec2(this[2], this[3]);
  }
  get wx() {
    return new this._Vec2(this[3], this[0]);
  }
  get wy() {
    return new this._Vec2(this[3], this[1]);
  }
  get wz() {
    return new this._Vec2(this[3], this[2]);
  }
  get ww() {
    return new this._Vec2(this[3], this[3]);
  }
  get xxx() {
    return new this._Vec3(this[0], this[0], this[0]);
  }
  get xxy() {
    return new this._Vec3(this[0], this[0], this[1]);
  }
  get xxz() {
    return new this._Vec3(this[0], this[0], this[2]);
  }
  get xxw() {
    return new this._Vec3(this[0], this[0], this[3]);
  }
  get xyx() {
    return new this._Vec3(this[0], this[1], this[0]);
  }
  get xyy() {
    return new this._Vec3(this[0], this[1], this[1]);
  }
  get xyz() {
    return new this._Vec3(this[0], this[1], this[2]);
  }
  get xyw() {
    return new this._Vec3(this[0], this[1], this[3]);
  }
  get xzx() {
    return new this._Vec3(this[0], this[2], this[0]);
  }
  get xzy() {
    return new this._Vec3(this[0], this[2], this[1]);
  }
  get xzz() {
    return new this._Vec3(this[0], this[2], this[2]);
  }
  get xzw() {
    return new this._Vec3(this[0], this[2], this[3]);
  }
  get xwx() {
    return new this._Vec3(this[0], this[3], this[0]);
  }
  get xwy() {
    return new this._Vec3(this[0], this[3], this[1]);
  }
  get xwz() {
    return new this._Vec3(this[0], this[3], this[2]);
  }
  get xww() {
    return new this._Vec3(this[0], this[3], this[3]);
  }
  get yxx() {
    return new this._Vec3(this[1], this[0], this[0]);
  }
  get yxy() {
    return new this._Vec3(this[1], this[0], this[1]);
  }
  get yxz() {
    return new this._Vec3(this[1], this[0], this[2]);
  }
  get yxw() {
    return new this._Vec3(this[1], this[0], this[3]);
  }
  get yyx() {
    return new this._Vec3(this[1], this[1], this[0]);
  }
  get yyy() {
    return new this._Vec3(this[1], this[1], this[1]);
  }
  get yyz() {
    return new this._Vec3(this[1], this[1], this[2]);
  }
  get yyw() {
    return new this._Vec3(this[1], this[1], this[3]);
  }
  get yzx() {
    return new this._Vec3(this[1], this[2], this[0]);
  }
  get yzy() {
    return new this._Vec3(this[1], this[2], this[1]);
  }
  get yzz() {
    return new this._Vec3(this[1], this[2], this[2]);
  }
  get yzw() {
    return new this._Vec3(this[1], this[2], this[3]);
  }
  get ywx() {
    return new this._Vec3(this[1], this[3], this[0]);
  }
  get ywy() {
    return new this._Vec3(this[1], this[3], this[1]);
  }
  get ywz() {
    return new this._Vec3(this[1], this[3], this[2]);
  }
  get yww() {
    return new this._Vec3(this[1], this[3], this[3]);
  }
  get zxx() {
    return new this._Vec3(this[2], this[0], this[0]);
  }
  get zxy() {
    return new this._Vec3(this[2], this[0], this[1]);
  }
  get zxz() {
    return new this._Vec3(this[2], this[0], this[2]);
  }
  get zxw() {
    return new this._Vec3(this[2], this[0], this[3]);
  }
  get zyx() {
    return new this._Vec3(this[2], this[1], this[0]);
  }
  get zyy() {
    return new this._Vec3(this[2], this[1], this[1]);
  }
  get zyz() {
    return new this._Vec3(this[2], this[1], this[2]);
  }
  get zyw() {
    return new this._Vec3(this[2], this[1], this[3]);
  }
  get zzx() {
    return new this._Vec3(this[2], this[2], this[0]);
  }
  get zzy() {
    return new this._Vec3(this[2], this[2], this[1]);
  }
  get zzz() {
    return new this._Vec3(this[2], this[2], this[2]);
  }
  get zzw() {
    return new this._Vec3(this[2], this[2], this[3]);
  }
  get zwx() {
    return new this._Vec3(this[2], this[3], this[0]);
  }
  get zwy() {
    return new this._Vec3(this[2], this[3], this[1]);
  }
  get zwz() {
    return new this._Vec3(this[2], this[3], this[2]);
  }
  get zww() {
    return new this._Vec3(this[2], this[3], this[3]);
  }
  get wxx() {
    return new this._Vec3(this[3], this[0], this[0]);
  }
  get wxy() {
    return new this._Vec3(this[3], this[0], this[1]);
  }
  get wxz() {
    return new this._Vec3(this[3], this[0], this[2]);
  }
  get wxw() {
    return new this._Vec3(this[3], this[0], this[3]);
  }
  get wyx() {
    return new this._Vec3(this[3], this[1], this[0]);
  }
  get wyy() {
    return new this._Vec3(this[3], this[1], this[1]);
  }
  get wyz() {
    return new this._Vec3(this[3], this[1], this[2]);
  }
  get wyw() {
    return new this._Vec3(this[3], this[1], this[3]);
  }
  get wzx() {
    return new this._Vec3(this[3], this[2], this[0]);
  }
  get wzy() {
    return new this._Vec3(this[3], this[2], this[1]);
  }
  get wzz() {
    return new this._Vec3(this[3], this[2], this[2]);
  }
  get wzw() {
    return new this._Vec3(this[3], this[2], this[3]);
  }
  get wwx() {
    return new this._Vec3(this[3], this[3], this[0]);
  }
  get wwy() {
    return new this._Vec3(this[3], this[3], this[1]);
  }
  get wwz() {
    return new this._Vec3(this[3], this[3], this[2]);
  }
  get www() {
    return new this._Vec3(this[3], this[3], this[3]);
  }
  get xxxx() {
    return new this._Vec4(this[0], this[0], this[0], this[0]);
  }
  get xxxy() {
    return new this._Vec4(this[0], this[0], this[0], this[1]);
  }
  get xxxz() {
    return new this._Vec4(this[0], this[0], this[0], this[2]);
  }
  get xxxw() {
    return new this._Vec4(this[0], this[0], this[0], this[3]);
  }
  get xxyx() {
    return new this._Vec4(this[0], this[0], this[1], this[0]);
  }
  get xxyy() {
    return new this._Vec4(this[0], this[0], this[1], this[1]);
  }
  get xxyz() {
    return new this._Vec4(this[0], this[0], this[1], this[2]);
  }
  get xxyw() {
    return new this._Vec4(this[0], this[0], this[1], this[3]);
  }
  get xxzx() {
    return new this._Vec4(this[0], this[0], this[2], this[0]);
  }
  get xxzy() {
    return new this._Vec4(this[0], this[0], this[2], this[1]);
  }
  get xxzz() {
    return new this._Vec4(this[0], this[0], this[2], this[2]);
  }
  get xxzw() {
    return new this._Vec4(this[0], this[0], this[2], this[3]);
  }
  get xxwx() {
    return new this._Vec4(this[0], this[0], this[3], this[0]);
  }
  get xxwy() {
    return new this._Vec4(this[0], this[0], this[3], this[1]);
  }
  get xxwz() {
    return new this._Vec4(this[0], this[0], this[3], this[2]);
  }
  get xxww() {
    return new this._Vec4(this[0], this[0], this[3], this[3]);
  }
  get xyxx() {
    return new this._Vec4(this[0], this[1], this[0], this[0]);
  }
  get xyxy() {
    return new this._Vec4(this[0], this[1], this[0], this[1]);
  }
  get xyxz() {
    return new this._Vec4(this[0], this[1], this[0], this[2]);
  }
  get xyxw() {
    return new this._Vec4(this[0], this[1], this[0], this[3]);
  }
  get xyyx() {
    return new this._Vec4(this[0], this[1], this[1], this[0]);
  }
  get xyyy() {
    return new this._Vec4(this[0], this[1], this[1], this[1]);
  }
  get xyyz() {
    return new this._Vec4(this[0], this[1], this[1], this[2]);
  }
  get xyyw() {
    return new this._Vec4(this[0], this[1], this[1], this[3]);
  }
  get xyzx() {
    return new this._Vec4(this[0], this[1], this[2], this[0]);
  }
  get xyzy() {
    return new this._Vec4(this[0], this[1], this[2], this[1]);
  }
  get xyzz() {
    return new this._Vec4(this[0], this[1], this[2], this[2]);
  }
  get xyzw() {
    return new this._Vec4(this[0], this[1], this[2], this[3]);
  }
  get xywx() {
    return new this._Vec4(this[0], this[1], this[3], this[0]);
  }
  get xywy() {
    return new this._Vec4(this[0], this[1], this[3], this[1]);
  }
  get xywz() {
    return new this._Vec4(this[0], this[1], this[3], this[2]);
  }
  get xyww() {
    return new this._Vec4(this[0], this[1], this[3], this[3]);
  }
  get xzxx() {
    return new this._Vec4(this[0], this[2], this[0], this[0]);
  }
  get xzxy() {
    return new this._Vec4(this[0], this[2], this[0], this[1]);
  }
  get xzxz() {
    return new this._Vec4(this[0], this[2], this[0], this[2]);
  }
  get xzxw() {
    return new this._Vec4(this[0], this[2], this[0], this[3]);
  }
  get xzyx() {
    return new this._Vec4(this[0], this[2], this[1], this[0]);
  }
  get xzyy() {
    return new this._Vec4(this[0], this[2], this[1], this[1]);
  }
  get xzyz() {
    return new this._Vec4(this[0], this[2], this[1], this[2]);
  }
  get xzyw() {
    return new this._Vec4(this[0], this[2], this[1], this[3]);
  }
  get xzzx() {
    return new this._Vec4(this[0], this[2], this[2], this[0]);
  }
  get xzzy() {
    return new this._Vec4(this[0], this[2], this[2], this[1]);
  }
  get xzzz() {
    return new this._Vec4(this[0], this[2], this[2], this[2]);
  }
  get xzzw() {
    return new this._Vec4(this[0], this[2], this[2], this[3]);
  }
  get xzwx() {
    return new this._Vec4(this[0], this[2], this[3], this[0]);
  }
  get xzwy() {
    return new this._Vec4(this[0], this[2], this[3], this[1]);
  }
  get xzwz() {
    return new this._Vec4(this[0], this[2], this[3], this[2]);
  }
  get xzww() {
    return new this._Vec4(this[0], this[2], this[3], this[3]);
  }
  get xwxx() {
    return new this._Vec4(this[0], this[3], this[0], this[0]);
  }
  get xwxy() {
    return new this._Vec4(this[0], this[3], this[0], this[1]);
  }
  get xwxz() {
    return new this._Vec4(this[0], this[3], this[0], this[2]);
  }
  get xwxw() {
    return new this._Vec4(this[0], this[3], this[0], this[3]);
  }
  get xwyx() {
    return new this._Vec4(this[0], this[3], this[1], this[0]);
  }
  get xwyy() {
    return new this._Vec4(this[0], this[3], this[1], this[1]);
  }
  get xwyz() {
    return new this._Vec4(this[0], this[3], this[1], this[2]);
  }
  get xwyw() {
    return new this._Vec4(this[0], this[3], this[1], this[3]);
  }
  get xwzx() {
    return new this._Vec4(this[0], this[3], this[2], this[0]);
  }
  get xwzy() {
    return new this._Vec4(this[0], this[3], this[2], this[1]);
  }
  get xwzz() {
    return new this._Vec4(this[0], this[3], this[2], this[2]);
  }
  get xwzw() {
    return new this._Vec4(this[0], this[3], this[2], this[3]);
  }
  get xwwx() {
    return new this._Vec4(this[0], this[3], this[3], this[0]);
  }
  get xwwy() {
    return new this._Vec4(this[0], this[3], this[3], this[1]);
  }
  get xwwz() {
    return new this._Vec4(this[0], this[3], this[3], this[2]);
  }
  get xwww() {
    return new this._Vec4(this[0], this[3], this[3], this[3]);
  }
  get yxxx() {
    return new this._Vec4(this[1], this[0], this[0], this[0]);
  }
  get yxxy() {
    return new this._Vec4(this[1], this[0], this[0], this[1]);
  }
  get yxxz() {
    return new this._Vec4(this[1], this[0], this[0], this[2]);
  }
  get yxxw() {
    return new this._Vec4(this[1], this[0], this[0], this[3]);
  }
  get yxyx() {
    return new this._Vec4(this[1], this[0], this[1], this[0]);
  }
  get yxyy() {
    return new this._Vec4(this[1], this[0], this[1], this[1]);
  }
  get yxyz() {
    return new this._Vec4(this[1], this[0], this[1], this[2]);
  }
  get yxyw() {
    return new this._Vec4(this[1], this[0], this[1], this[3]);
  }
  get yxzx() {
    return new this._Vec4(this[1], this[0], this[2], this[0]);
  }
  get yxzy() {
    return new this._Vec4(this[1], this[0], this[2], this[1]);
  }
  get yxzz() {
    return new this._Vec4(this[1], this[0], this[2], this[2]);
  }
  get yxzw() {
    return new this._Vec4(this[1], this[0], this[2], this[3]);
  }
  get yxwx() {
    return new this._Vec4(this[1], this[0], this[3], this[0]);
  }
  get yxwy() {
    return new this._Vec4(this[1], this[0], this[3], this[1]);
  }
  get yxwz() {
    return new this._Vec4(this[1], this[0], this[3], this[2]);
  }
  get yxww() {
    return new this._Vec4(this[1], this[0], this[3], this[3]);
  }
  get yyxx() {
    return new this._Vec4(this[1], this[1], this[0], this[0]);
  }
  get yyxy() {
    return new this._Vec4(this[1], this[1], this[0], this[1]);
  }
  get yyxz() {
    return new this._Vec4(this[1], this[1], this[0], this[2]);
  }
  get yyxw() {
    return new this._Vec4(this[1], this[1], this[0], this[3]);
  }
  get yyyx() {
    return new this._Vec4(this[1], this[1], this[1], this[0]);
  }
  get yyyy() {
    return new this._Vec4(this[1], this[1], this[1], this[1]);
  }
  get yyyz() {
    return new this._Vec4(this[1], this[1], this[1], this[2]);
  }
  get yyyw() {
    return new this._Vec4(this[1], this[1], this[1], this[3]);
  }
  get yyzx() {
    return new this._Vec4(this[1], this[1], this[2], this[0]);
  }
  get yyzy() {
    return new this._Vec4(this[1], this[1], this[2], this[1]);
  }
  get yyzz() {
    return new this._Vec4(this[1], this[1], this[2], this[2]);
  }
  get yyzw() {
    return new this._Vec4(this[1], this[1], this[2], this[3]);
  }
  get yywx() {
    return new this._Vec4(this[1], this[1], this[3], this[0]);
  }
  get yywy() {
    return new this._Vec4(this[1], this[1], this[3], this[1]);
  }
  get yywz() {
    return new this._Vec4(this[1], this[1], this[3], this[2]);
  }
  get yyww() {
    return new this._Vec4(this[1], this[1], this[3], this[3]);
  }
  get yzxx() {
    return new this._Vec4(this[1], this[2], this[0], this[0]);
  }
  get yzxy() {
    return new this._Vec4(this[1], this[2], this[0], this[1]);
  }
  get yzxz() {
    return new this._Vec4(this[1], this[2], this[0], this[2]);
  }
  get yzxw() {
    return new this._Vec4(this[1], this[2], this[0], this[3]);
  }
  get yzyx() {
    return new this._Vec4(this[1], this[2], this[1], this[0]);
  }
  get yzyy() {
    return new this._Vec4(this[1], this[2], this[1], this[1]);
  }
  get yzyz() {
    return new this._Vec4(this[1], this[2], this[1], this[2]);
  }
  get yzyw() {
    return new this._Vec4(this[1], this[2], this[1], this[3]);
  }
  get yzzx() {
    return new this._Vec4(this[1], this[2], this[2], this[0]);
  }
  get yzzy() {
    return new this._Vec4(this[1], this[2], this[2], this[1]);
  }
  get yzzz() {
    return new this._Vec4(this[1], this[2], this[2], this[2]);
  }
  get yzzw() {
    return new this._Vec4(this[1], this[2], this[2], this[3]);
  }
  get yzwx() {
    return new this._Vec4(this[1], this[2], this[3], this[0]);
  }
  get yzwy() {
    return new this._Vec4(this[1], this[2], this[3], this[1]);
  }
  get yzwz() {
    return new this._Vec4(this[1], this[2], this[3], this[2]);
  }
  get yzww() {
    return new this._Vec4(this[1], this[2], this[3], this[3]);
  }
  get ywxx() {
    return new this._Vec4(this[1], this[3], this[0], this[0]);
  }
  get ywxy() {
    return new this._Vec4(this[1], this[3], this[0], this[1]);
  }
  get ywxz() {
    return new this._Vec4(this[1], this[3], this[0], this[2]);
  }
  get ywxw() {
    return new this._Vec4(this[1], this[3], this[0], this[3]);
  }
  get ywyx() {
    return new this._Vec4(this[1], this[3], this[1], this[0]);
  }
  get ywyy() {
    return new this._Vec4(this[1], this[3], this[1], this[1]);
  }
  get ywyz() {
    return new this._Vec4(this[1], this[3], this[1], this[2]);
  }
  get ywyw() {
    return new this._Vec4(this[1], this[3], this[1], this[3]);
  }
  get ywzx() {
    return new this._Vec4(this[1], this[3], this[2], this[0]);
  }
  get ywzy() {
    return new this._Vec4(this[1], this[3], this[2], this[1]);
  }
  get ywzz() {
    return new this._Vec4(this[1], this[3], this[2], this[2]);
  }
  get ywzw() {
    return new this._Vec4(this[1], this[3], this[2], this[3]);
  }
  get ywwx() {
    return new this._Vec4(this[1], this[3], this[3], this[0]);
  }
  get ywwy() {
    return new this._Vec4(this[1], this[3], this[3], this[1]);
  }
  get ywwz() {
    return new this._Vec4(this[1], this[3], this[3], this[2]);
  }
  get ywww() {
    return new this._Vec4(this[1], this[3], this[3], this[3]);
  }
  get zxxx() {
    return new this._Vec4(this[2], this[0], this[0], this[0]);
  }
  get zxxy() {
    return new this._Vec4(this[2], this[0], this[0], this[1]);
  }
  get zxxz() {
    return new this._Vec4(this[2], this[0], this[0], this[2]);
  }
  get zxxw() {
    return new this._Vec4(this[2], this[0], this[0], this[3]);
  }
  get zxyx() {
    return new this._Vec4(this[2], this[0], this[1], this[0]);
  }
  get zxyy() {
    return new this._Vec4(this[2], this[0], this[1], this[1]);
  }
  get zxyz() {
    return new this._Vec4(this[2], this[0], this[1], this[2]);
  }
  get zxyw() {
    return new this._Vec4(this[2], this[0], this[1], this[3]);
  }
  get zxzx() {
    return new this._Vec4(this[2], this[0], this[2], this[0]);
  }
  get zxzy() {
    return new this._Vec4(this[2], this[0], this[2], this[1]);
  }
  get zxzz() {
    return new this._Vec4(this[2], this[0], this[2], this[2]);
  }
  get zxzw() {
    return new this._Vec4(this[2], this[0], this[2], this[3]);
  }
  get zxwx() {
    return new this._Vec4(this[2], this[0], this[3], this[0]);
  }
  get zxwy() {
    return new this._Vec4(this[2], this[0], this[3], this[1]);
  }
  get zxwz() {
    return new this._Vec4(this[2], this[0], this[3], this[2]);
  }
  get zxww() {
    return new this._Vec4(this[2], this[0], this[3], this[3]);
  }
  get zyxx() {
    return new this._Vec4(this[2], this[1], this[0], this[0]);
  }
  get zyxy() {
    return new this._Vec4(this[2], this[1], this[0], this[1]);
  }
  get zyxz() {
    return new this._Vec4(this[2], this[1], this[0], this[2]);
  }
  get zyxw() {
    return new this._Vec4(this[2], this[1], this[0], this[3]);
  }
  get zyyx() {
    return new this._Vec4(this[2], this[1], this[1], this[0]);
  }
  get zyyy() {
    return new this._Vec4(this[2], this[1], this[1], this[1]);
  }
  get zyyz() {
    return new this._Vec4(this[2], this[1], this[1], this[2]);
  }
  get zyyw() {
    return new this._Vec4(this[2], this[1], this[1], this[3]);
  }
  get zyzx() {
    return new this._Vec4(this[2], this[1], this[2], this[0]);
  }
  get zyzy() {
    return new this._Vec4(this[2], this[1], this[2], this[1]);
  }
  get zyzz() {
    return new this._Vec4(this[2], this[1], this[2], this[2]);
  }
  get zyzw() {
    return new this._Vec4(this[2], this[1], this[2], this[3]);
  }
  get zywx() {
    return new this._Vec4(this[2], this[1], this[3], this[0]);
  }
  get zywy() {
    return new this._Vec4(this[2], this[1], this[3], this[1]);
  }
  get zywz() {
    return new this._Vec4(this[2], this[1], this[3], this[2]);
  }
  get zyww() {
    return new this._Vec4(this[2], this[1], this[3], this[3]);
  }
  get zzxx() {
    return new this._Vec4(this[2], this[2], this[0], this[0]);
  }
  get zzxy() {
    return new this._Vec4(this[2], this[2], this[0], this[1]);
  }
  get zzxz() {
    return new this._Vec4(this[2], this[2], this[0], this[2]);
  }
  get zzxw() {
    return new this._Vec4(this[2], this[2], this[0], this[3]);
  }
  get zzyx() {
    return new this._Vec4(this[2], this[2], this[1], this[0]);
  }
  get zzyy() {
    return new this._Vec4(this[2], this[2], this[1], this[1]);
  }
  get zzyz() {
    return new this._Vec4(this[2], this[2], this[1], this[2]);
  }
  get zzyw() {
    return new this._Vec4(this[2], this[2], this[1], this[3]);
  }
  get zzzx() {
    return new this._Vec4(this[2], this[2], this[2], this[0]);
  }
  get zzzy() {
    return new this._Vec4(this[2], this[2], this[2], this[1]);
  }
  get zzzz() {
    return new this._Vec4(this[2], this[2], this[2], this[2]);
  }
  get zzzw() {
    return new this._Vec4(this[2], this[2], this[2], this[3]);
  }
  get zzwx() {
    return new this._Vec4(this[2], this[2], this[3], this[0]);
  }
  get zzwy() {
    return new this._Vec4(this[2], this[2], this[3], this[1]);
  }
  get zzwz() {
    return new this._Vec4(this[2], this[2], this[3], this[2]);
  }
  get zzww() {
    return new this._Vec4(this[2], this[2], this[3], this[3]);
  }
  get zwxx() {
    return new this._Vec4(this[2], this[3], this[0], this[0]);
  }
  get zwxy() {
    return new this._Vec4(this[2], this[3], this[0], this[1]);
  }
  get zwxz() {
    return new this._Vec4(this[2], this[3], this[0], this[2]);
  }
  get zwxw() {
    return new this._Vec4(this[2], this[3], this[0], this[3]);
  }
  get zwyx() {
    return new this._Vec4(this[2], this[3], this[1], this[0]);
  }
  get zwyy() {
    return new this._Vec4(this[2], this[3], this[1], this[1]);
  }
  get zwyz() {
    return new this._Vec4(this[2], this[3], this[1], this[2]);
  }
  get zwyw() {
    return new this._Vec4(this[2], this[3], this[1], this[3]);
  }
  get zwzx() {
    return new this._Vec4(this[2], this[3], this[2], this[0]);
  }
  get zwzy() {
    return new this._Vec4(this[2], this[3], this[2], this[1]);
  }
  get zwzz() {
    return new this._Vec4(this[2], this[3], this[2], this[2]);
  }
  get zwzw() {
    return new this._Vec4(this[2], this[3], this[2], this[3]);
  }
  get zwwx() {
    return new this._Vec4(this[2], this[3], this[3], this[0]);
  }
  get zwwy() {
    return new this._Vec4(this[2], this[3], this[3], this[1]);
  }
  get zwwz() {
    return new this._Vec4(this[2], this[3], this[3], this[2]);
  }
  get zwww() {
    return new this._Vec4(this[2], this[3], this[3], this[3]);
  }
  get wxxx() {
    return new this._Vec4(this[3], this[0], this[0], this[0]);
  }
  get wxxy() {
    return new this._Vec4(this[3], this[0], this[0], this[1]);
  }
  get wxxz() {
    return new this._Vec4(this[3], this[0], this[0], this[2]);
  }
  get wxxw() {
    return new this._Vec4(this[3], this[0], this[0], this[3]);
  }
  get wxyx() {
    return new this._Vec4(this[3], this[0], this[1], this[0]);
  }
  get wxyy() {
    return new this._Vec4(this[3], this[0], this[1], this[1]);
  }
  get wxyz() {
    return new this._Vec4(this[3], this[0], this[1], this[2]);
  }
  get wxyw() {
    return new this._Vec4(this[3], this[0], this[1], this[3]);
  }
  get wxzx() {
    return new this._Vec4(this[3], this[0], this[2], this[0]);
  }
  get wxzy() {
    return new this._Vec4(this[3], this[0], this[2], this[1]);
  }
  get wxzz() {
    return new this._Vec4(this[3], this[0], this[2], this[2]);
  }
  get wxzw() {
    return new this._Vec4(this[3], this[0], this[2], this[3]);
  }
  get wxwx() {
    return new this._Vec4(this[3], this[0], this[3], this[0]);
  }
  get wxwy() {
    return new this._Vec4(this[3], this[0], this[3], this[1]);
  }
  get wxwz() {
    return new this._Vec4(this[3], this[0], this[3], this[2]);
  }
  get wxww() {
    return new this._Vec4(this[3], this[0], this[3], this[3]);
  }
  get wyxx() {
    return new this._Vec4(this[3], this[1], this[0], this[0]);
  }
  get wyxy() {
    return new this._Vec4(this[3], this[1], this[0], this[1]);
  }
  get wyxz() {
    return new this._Vec4(this[3], this[1], this[0], this[2]);
  }
  get wyxw() {
    return new this._Vec4(this[3], this[1], this[0], this[3]);
  }
  get wyyx() {
    return new this._Vec4(this[3], this[1], this[1], this[0]);
  }
  get wyyy() {
    return new this._Vec4(this[3], this[1], this[1], this[1]);
  }
  get wyyz() {
    return new this._Vec4(this[3], this[1], this[1], this[2]);
  }
  get wyyw() {
    return new this._Vec4(this[3], this[1], this[1], this[3]);
  }
  get wyzx() {
    return new this._Vec4(this[3], this[1], this[2], this[0]);
  }
  get wyzy() {
    return new this._Vec4(this[3], this[1], this[2], this[1]);
  }
  get wyzz() {
    return new this._Vec4(this[3], this[1], this[2], this[2]);
  }
  get wyzw() {
    return new this._Vec4(this[3], this[1], this[2], this[3]);
  }
  get wywx() {
    return new this._Vec4(this[3], this[1], this[3], this[0]);
  }
  get wywy() {
    return new this._Vec4(this[3], this[1], this[3], this[1]);
  }
  get wywz() {
    return new this._Vec4(this[3], this[1], this[3], this[2]);
  }
  get wyww() {
    return new this._Vec4(this[3], this[1], this[3], this[3]);
  }
  get wzxx() {
    return new this._Vec4(this[3], this[2], this[0], this[0]);
  }
  get wzxy() {
    return new this._Vec4(this[3], this[2], this[0], this[1]);
  }
  get wzxz() {
    return new this._Vec4(this[3], this[2], this[0], this[2]);
  }
  get wzxw() {
    return new this._Vec4(this[3], this[2], this[0], this[3]);
  }
  get wzyx() {
    return new this._Vec4(this[3], this[2], this[1], this[0]);
  }
  get wzyy() {
    return new this._Vec4(this[3], this[2], this[1], this[1]);
  }
  get wzyz() {
    return new this._Vec4(this[3], this[2], this[1], this[2]);
  }
  get wzyw() {
    return new this._Vec4(this[3], this[2], this[1], this[3]);
  }
  get wzzx() {
    return new this._Vec4(this[3], this[2], this[2], this[0]);
  }
  get wzzy() {
    return new this._Vec4(this[3], this[2], this[2], this[1]);
  }
  get wzzz() {
    return new this._Vec4(this[3], this[2], this[2], this[2]);
  }
  get wzzw() {
    return new this._Vec4(this[3], this[2], this[2], this[3]);
  }
  get wzwx() {
    return new this._Vec4(this[3], this[2], this[3], this[0]);
  }
  get wzwy() {
    return new this._Vec4(this[3], this[2], this[3], this[1]);
  }
  get wzwz() {
    return new this._Vec4(this[3], this[2], this[3], this[2]);
  }
  get wzww() {
    return new this._Vec4(this[3], this[2], this[3], this[3]);
  }
  get wwxx() {
    return new this._Vec4(this[3], this[3], this[0], this[0]);
  }
  get wwxy() {
    return new this._Vec4(this[3], this[3], this[0], this[1]);
  }
  get wwxz() {
    return new this._Vec4(this[3], this[3], this[0], this[2]);
  }
  get wwxw() {
    return new this._Vec4(this[3], this[3], this[0], this[3]);
  }
  get wwyx() {
    return new this._Vec4(this[3], this[3], this[1], this[0]);
  }
  get wwyy() {
    return new this._Vec4(this[3], this[3], this[1], this[1]);
  }
  get wwyz() {
    return new this._Vec4(this[3], this[3], this[1], this[2]);
  }
  get wwyw() {
    return new this._Vec4(this[3], this[3], this[1], this[3]);
  }
  get wwzx() {
    return new this._Vec4(this[3], this[3], this[2], this[0]);
  }
  get wwzy() {
    return new this._Vec4(this[3], this[3], this[2], this[1]);
  }
  get wwzz() {
    return new this._Vec4(this[3], this[3], this[2], this[2]);
  }
  get wwzw() {
    return new this._Vec4(this[3], this[3], this[2], this[3]);
  }
  get wwwx() {
    return new this._Vec4(this[3], this[3], this[3], this[0]);
  }
  get wwwy() {
    return new this._Vec4(this[3], this[3], this[3], this[1]);
  }
  get wwwz() {
    return new this._Vec4(this[3], this[3], this[3], this[2]);
  }
  get wwww() {
    return new this._Vec4(this[3], this[3], this[3], this[3]);
  }
}, N$3 = class N extends ce$3 {
  e0;
  e1;
  constructor(t12, n2) {
    super(2), this.e0 = this.castElement()(t12), this.e1 = this.castElement()(n2 ?? t12);
  }
  get 0() {
    return this.e0;
  }
  get 1() {
    return this.e1;
  }
  set 0(t12) {
    this.e0 = this.castElement()(t12);
  }
  set 1(t12) {
    this.e1 = this.castElement()(t12);
  }
  get x() {
    return this[0];
  }
  get y() {
    return this[1];
  }
  set x(t12) {
    this[0] = this.castElement()(t12);
  }
  set y(t12) {
    this[1] = this.castElement()(t12);
  }
}, E$1 = class E extends ce$3 {
  e0;
  e1;
  e2;
  constructor(t12, n2, r) {
    super(3), this.e0 = this.castElement()(t12), this.e1 = this.castElement()(n2 ?? t12), this.e2 = this.castElement()(r ?? t12);
  }
  get 0() {
    return this.e0;
  }
  get 1() {
    return this.e1;
  }
  get 2() {
    return this.e2;
  }
  set 0(t12) {
    this.e0 = this.castElement()(t12);
  }
  set 1(t12) {
    this.e1 = this.castElement()(t12);
  }
  set 2(t12) {
    this.e2 = this.castElement()(t12);
  }
  get x() {
    return this[0];
  }
  get y() {
    return this[1];
  }
  get z() {
    return this[2];
  }
  set x(t12) {
    this[0] = this.castElement()(t12);
  }
  set y(t12) {
    this[1] = this.castElement()(t12);
  }
  set z(t12) {
    this[2] = this.castElement()(t12);
  }
}, U$2 = class U extends ce$3 {
  e0;
  e1;
  e2;
  e3;
  constructor(t12, n2, r, i2) {
    super(4), this.e0 = this.castElement()(t12), this.e1 = this.castElement()(n2 ?? t12), this.e2 = this.castElement()(r ?? t12), this.e3 = this.castElement()(i2 ?? t12);
  }
  get 0() {
    return this.e0;
  }
  get 1() {
    return this.e1;
  }
  get 2() {
    return this.e2;
  }
  get 3() {
    return this.e3;
  }
  set 0(t12) {
    this.e0 = this.castElement()(t12);
  }
  set 1(t12) {
    this.e1 = this.castElement()(t12);
  }
  set 2(t12) {
    this.e2 = this.castElement()(t12);
  }
  set 3(t12) {
    this.e3 = this.castElement()(t12);
  }
  get x() {
    return this[0];
  }
  get y() {
    return this[1];
  }
  get z() {
    return this[2];
  }
  get w() {
    return this[3];
  }
  set x(t12) {
    this[0] = t12;
  }
  set y(t12) {
    this[1] = t12;
  }
  set z(t12) {
    this[2] = t12;
  }
  set w(t12) {
    this[3] = t12;
  }
}, j$2 = class e11 extends N$3 {
  get [o$2]() {
    return { elementSchema: x$2 };
  }
  get kind() {
    return "vec2f";
  }
  get _Vec2() {
    return e11;
  }
  get _Vec3() {
    return H$2;
  }
  get _Vec4() {
    return Q$3;
  }
}, L$1 = class e12 extends N$3 {
  get [o$2]() {
    return { elementSchema: _$1 };
  }
  get kind() {
    return "vec2h";
  }
  get _Vec2() {
    return e12;
  }
  get _Vec3() {
    return q$2;
  }
  get _Vec4() {
    return ee$3;
  }
}, G$3 = class e13 extends N$3 {
  get [o$2]() {
    return { elementSchema: f$1 };
  }
  get kind() {
    return "vec2i";
  }
  get _Vec2() {
    return e13;
  }
  get _Vec3() {
    return J$4;
  }
  get _Vec4() {
    return te$3;
  }
}, K$2 = class e14 extends N$3 {
  get [o$2]() {
    return { elementSchema: T$2 };
  }
  get kind() {
    return "vec2u";
  }
  get _Vec2() {
    return e14;
  }
  get _Vec3() {
    return X$6;
  }
  get _Vec4() {
    return ne$3;
  }
}, Y$3 = class e15 extends N$3 {
  get [o$2]() {
    return { elementSchema: V$1 };
  }
  get kind() {
    return "vec2<bool>";
  }
  get _Vec2() {
    return e15;
  }
  get _Vec3() {
    return Z$4;
  }
  get _Vec4() {
    return re$3;
  }
}, H$2 = class e16 extends E$1 {
  get [o$2]() {
    return { elementSchema: x$2 };
  }
  get kind() {
    return "vec3f";
  }
  get _Vec2() {
    return j$2;
  }
  get _Vec3() {
    return e16;
  }
  get _Vec4() {
    return Q$3;
  }
}, q$2 = class e17 extends E$1 {
  get [o$2]() {
    return { elementSchema: _$1 };
  }
  get kind() {
    return "vec3h";
  }
  get _Vec2() {
    return L$1;
  }
  get _Vec3() {
    return e17;
  }
  get _Vec4() {
    return ee$3;
  }
}, J$4 = class e18 extends E$1 {
  get [o$2]() {
    return { elementSchema: f$1 };
  }
  get kind() {
    return "vec3i";
  }
  get _Vec2() {
    return G$3;
  }
  get _Vec3() {
    return e18;
  }
  get _Vec4() {
    return te$3;
  }
}, X$6 = class e19 extends E$1 {
  get [o$2]() {
    return { elementSchema: T$2 };
  }
  get kind() {
    return "vec3u";
  }
  get _Vec2() {
    return K$2;
  }
  get _Vec3() {
    return e19;
  }
  get _Vec4() {
    return ne$3;
  }
}, Z$4 = class e20 extends E$1 {
  get [o$2]() {
    return { elementSchema: V$1 };
  }
  get kind() {
    return "vec3<bool>";
  }
  get _Vec2() {
    return Y$3;
  }
  get _Vec3() {
    return e20;
  }
  get _Vec4() {
    return re$3;
  }
}, Q$3 = class e21 extends U$2 {
  get [o$2]() {
    return { elementSchema: x$2 };
  }
  get kind() {
    return "vec4f";
  }
  get _Vec2() {
    return j$2;
  }
  get _Vec3() {
    return H$2;
  }
  get _Vec4() {
    return e21;
  }
}, ee$3 = class e22 extends U$2 {
  get [o$2]() {
    return { elementSchema: _$1 };
  }
  get kind() {
    return "vec4h";
  }
  get _Vec2() {
    return L$1;
  }
  get _Vec3() {
    return q$2;
  }
  get _Vec4() {
    return e22;
  }
}, te$3 = class e23 extends U$2 {
  get [o$2]() {
    return { elementSchema: f$1 };
  }
  get kind() {
    return "vec4i";
  }
  get _Vec2() {
    return G$3;
  }
  get _Vec3() {
    return J$4;
  }
  get _Vec4() {
    return e23;
  }
}, ne$3 = class e24 extends U$2 {
  get [o$2]() {
    return { elementSchema: T$2 };
  }
  get kind() {
    return "vec4u";
  }
  get _Vec2() {
    return K$2;
  }
  get _Vec3() {
    return X$6;
  }
  get _Vec4() {
    return e24;
  }
}, re$3 = class e25 extends U$2 {
  get [o$2]() {
    return { elementSchema: V$1 };
  }
  get kind() {
    return "vec4<bool>";
  }
  get _Vec2() {
    return Y$3;
  }
  get _Vec3() {
    return Z$4;
  }
  get _Vec4() {
    return e25;
  }
};
var F$3 = w$1(j$2, x$2), nn$2 = w$1(L$1, _$1), pe$3 = w$1(G$3, f$1), le$3 = w$1(K$2, T$2), rn$1 = w$1(Y$3, V$1), ke$2 = w$1(H$2, x$2), sn$1 = w$1(q$2, _$1), Fe$2 = w$1(J$4, f$1), Pe$2 = w$1(X$6, T$2), on$1 = w$1(Z$4, V$1), v$1 = w$1(Q$3, x$2), an$1 = w$1(ee$3, _$1), he$1 = w$1(te$3, f$1), xe$4 = w$1(ne$3, T$2), un$1 = w$1(re$3, V$1), Ri$1 = { vec2f: F$3, vec2h: nn$2, vec2i: pe$3, vec2u: le$3, "vec2<bool>": rn$1, vec3f: ke$2, vec3h: sn$1, vec3i: Fe$2, vec3u: Pe$2, "vec3<bool>": on$1, vec4f: v$1, vec4h: an$1, vec4i: he$1, vec4u: xe$4, "vec4<bool>": un$1 };
function w$1(e262, t12) {
  let { kind: n2, length: r } = new e262(), s2 = k$1({ name: n2, signature: (...l2) => ({ argTypes: l2.map((d2) => se$2(d2) ? d2 : t12), returnType: c2 }), normalImpl: (...l2) => {
    let d2 = new Array(l2.length), h2 = 0;
    for (let P2 of l2) if (typeof P2 == "number" || typeof P2 == "boolean") d2[h2++] = P2;
    else for (let C2 = 0; C2 < P2.length; ++C2) d2[h2++] = P2[C2];
    if (d2.length <= 1 || d2.length === r) return new e262(...d2);
    throw new Error(`'${n2}' constructor called with invalid number of arguments.`);
  }, ignoreImplicitCastWarning: true, codegenImpl: (...l2) => l2.length === 1 && l2[0]?.dataType === c2 ? p$1`${l2[0]}` : p$1`${n2}(${l2})` }), c2 = Object.assign(s2, { type: n2, primitive: t12, [Ne$1]: void 0 });
  return e262.prototype.schema = c2, c2;
}
function yn$2(e262) {
  return e262 >= 2 ** 63 || e262 < -9223372036854776e3 ? y$2(e262, De$2, "constant") : Number.isInteger(e262) ? (Number.isSafeInteger(e262) || console.warn(`The integer ${e262} exceeds the safe integer range and may have lost precision.`), y$2(e262, gt$3, "constant")) : y$2(e262, De$2, "constant");
}
function cn$1(e262) {
  return e262.type === "abstractFloat" ? x$2 : e262.type === "abstractInt" ? f$1 : e262;
}
function Wi(e262) {
  return e262.map((t12) => y$2(t12.value, cn$1(t12.dataType), t12.origin));
}
function vt$2(e262) {
  if (ue$5(e262)) return e262;
  if (ht$2(e262)) throw new Error("Cannot use refs (d.ref(...)) from the outer scope.");
  let t12 = Ae$2(e262);
  return t12 || (ie$2(e262) || me$4(e262) ? y$2(e262, We$2(e262), "constant") : typeof e262 == "string" || typeof e262 == "function" || typeof e262 == "object" || typeof e262 == "symbol" || typeof e262 > "u" || e262 === null ? y$2(e262, ae$3, "constant") : typeof e262 == "number" ? yn$2(e262) : typeof e262 == "boolean" ? y$2(e262, V$1, "constant") : y$2(e262, ae$3, "constant"));
}
function Ji(e262) {
  let t12 = (...r) => {
    let i2 = r;
    if (!i2.every((s2) => ye$4(s2))) throw new A$2(`Called comptime function with runtime-known values: ${i2.filter((s2) => !ye$4(s2)).map((s2) => `'${s2.value}'`).join(", ")}`);
    return vt$2(e262(...i2.map((s2) => s2.value)));
  }, n2 = ((...r) => {
    let i2 = O$3();
    if (i2?.mode.type === "codegen") {
      i2.pushMode(new $$2());
      try {
        return t12(...r);
      } finally {
        i2.popMode("normal");
      }
    }
    return e262(...r);
  });
  return n2.toString = () => "comptime", n2[B$3] = e262, n2.$name = (r) => (g$2(e262, r), n2), Object.defineProperty(n2, o$2, { value: { jsImpl: e262, gpuImpl: t12, argConversionHint: "keep" } }), n2;
}
var a = class {
  constructor(t12) {
    this.type = t12;
  }
  [o$2] = true;
}, Se$3 = { uint8: T$2, uint8x2: le$3, uint8x4: xe$4, sint8: f$1, sint8x2: pe$3, sint8x4: he$1, unorm8: x$2, unorm8x2: F$3, unorm8x4: v$1, snorm8: x$2, snorm8x2: F$3, snorm8x4: v$1, uint16: T$2, uint16x2: le$3, uint16x4: xe$4, sint16: f$1, sint16x2: pe$3, sint16x4: he$1, unorm16: x$2, unorm16x2: F$3, unorm16x4: v$1, snorm16: x$2, snorm16x2: F$3, snorm16x4: v$1, float16: x$2, float16x2: F$3, float16x4: v$1, float32: x$2, float32x2: F$3, float32x3: ke$2, float32x4: v$1, uint32: T$2, uint32x2: le$3, uint32x3: Pe$2, uint32x4: xe$4, sint32: f$1, sint32x2: pe$3, sint32x3: Fe$2, sint32x4: he$1, "unorm10-10-10-2": v$1, "unorm8x4-bgra": v$1 }, pn$1 = new Set(Object.keys(Se$3)), ns = new a("uint8"), rs = new a("uint8x2"), is = new a("uint8x4"), ss = new a("sint8"), os = new a("sint8x2"), as = new a("sint8x4"), us = new a("unorm8"), ys = new a("unorm8x2"), cs = new a("unorm8x4"), ps = new a("snorm8"), ls = new a("snorm8x2"), hs = new a("snorm8x4"), xs = new a("uint16"), ds = new a("uint16x2"), ms = new a("uint16x4"), fs = new a("sint16"), ws = new a("sint16x2"), Ts = new a("sint16x4"), gs = new a("unorm16"), Vs = new a("unorm16x2"), vs = new a("unorm16x4"), bs = new a("snorm16"), zs = new a("snorm16x2"), Ss = new a("snorm16x4"), _s = new a("float16"), Is = new a("float16x2"), As = new a("float16x4"), $s = new a("float32"), Ds = new a("float32x2"), ks = new a("float32x3"), Fs = new a("float32x4"), Ps = new a("uint32"), Rs = new a("uint32x2"), Ns = new a("uint32x3"), Es = new a("uint32x4"), Us = new a("sint32"), Cs = new a("sint32x2"), Bs = new a("sint32x3"), Ms = new a("sint32x4"), Os = new a("unorm10-10-10-2"), Ws = new a("unorm8x4-bgra");
function js(e262) {
  return u$2(e262) && pn$1.has(e262?.type);
}
function bt$3(e262, t12) {
  let n2 = e262?.type, r = n2 in Se$3 ? Se$3[n2] : e262;
  return typeof r != "function" ? t12 : t12 === void 0 ? r() : r(t12);
}
function Js(e262) {
  return zt$2(e262, false);
}
function Xs(e262) {
  return zt$2(e262, true);
}
function zt$2(e262, t12) {
  let n2 = (r) => Object.fromEntries(Object.entries(e262).map(([i2, s2]) => [i2, bt$3(s2, r?.[i2])]));
  return Object.setPrototypeOf(n2, ln$1), n2.propTypes = e262, Object.defineProperty(n2, o$2, { value: { isAbstruct: t12 } }), n2;
}
var ln$1 = { type: "struct", $name(e262) {
  return g$2(this, e262), this;
}, toString() {
  return `struct:${z$2(this) ?? "<unnamed>"}`;
} };
function eo(e262) {
  let t12 = String(e262);
  if (t12 !== "[object Object]") return t12;
  try {
    return JSON.stringify(e262);
  } catch (n2) {
    return console.error("Error parsing JSON:", n2), "<invalid json>";
  }
}
function St$2(e262) {
  return ie$2(e262) || me$4(e262) ? e262.toString() : Array.isArray(e262) ? `[${e262.map(St$2).join(", ")}]` : e262 && typeof e262 == "object" ? `{ ${Object.entries(e262).map(([t12, n2]) => `${t12}: ${St$2(n2)}`).join(", ")} }` : String(e262);
}
var R$1 = { f32: 4, f16: 2, i32: 4, u32: 4, bool: 4, u16: 2, vec2f: 8, vec2h: 4, vec2i: 8, vec2u: 8, vec2b: 8, vec3f: 16, vec3h: 8, vec3i: 16, vec3u: 16, vec3b: 16, vec4f: 16, vec4h: 8, vec4i: 16, vec4u: 16, vec4b: 16, mat2x2f: 8, mat3x3f: 16, mat4x4f: 16, atomic: 4 };
function j$1(e27) {
  let t12 = e27?.type, r = R$1[t12];
  if (r !== void 0) return r;
  if (An$1(e27)) return Object.values(e27.propTypes).map(s$1).reduce((n2, a2) => n2 > a2 ? n2 : a2);
  if (In$2(e27)) return s$1(e27.elementType);
  if (Hn$1(e27)) {
    let n2 = Object.values(e27.propTypes)[0];
    return n2 ? Jn$1(n2) ?? 1 : 1;
  }
  if (Yn$1(e27)) return Jn$1(e27.elementType) ?? 1;
  if (Fn$1(e27) || qn$1(e27)) return Jn$1(e27) ?? s$1(e27.inner);
  if (pn$1.has(t12)) return 1;
  throw new Error(`Cannot determine alignment of data: ${eo(e27)}`);
}
function G$2(e27) {
  if (Hn$1(e27)) {
    let t12 = Object.values(e27.propTypes)[0];
    return t12 ? y$1(t12) : 1;
  }
  return Yn$1(e27) ? y$1(e27.elementType) : qn$1(e27) ? Jn$1(e27) ?? y$1(e27.inner) : Jn$1(e27) ?? 1;
}
var U$1 = /* @__PURE__ */ new WeakMap(), C$1 = /* @__PURE__ */ new WeakMap();
function s$1(e27) {
  let t12 = U$1.get(e27);
  return t12 === void 0 && (t12 = j$1(e27), U$1.set(e27, t12)), t12;
}
function y$1(e27) {
  let t12 = C$1.get(e27);
  return t12 === void 0 && (t12 = G$2(e27), C$1.set(e27, t12)), t12;
}
function ne$2(e27) {
  return s$1(e27);
}
var f = (e27, t12) => {
  let r = t12 - 1, n2 = ~r;
  return (e27 & r) === 0 ? e27 : (e27 & n2) + t12;
};
var K$1 = { bool: 4, f32: 4, f16: 2, i32: 4, u32: 4, u16: 2, vec2f: 8, vec2h: 4, vec2i: 8, vec2u: 8, "vec2<bool>": 8, vec3f: 12, vec3h: 6, vec3i: 12, vec3u: 12, "vec3<bool>": 12, vec4f: 16, vec4h: 8, vec4i: 16, vec4u: 16, "vec4<bool>": 16, mat2x2f: 16, mat3x3f: 48, mat4x4f: 64, uint8: 1, uint8x2: 2, uint8x4: 4, sint8: 1, sint8x2: 2, sint8x4: 4, unorm8: 1, unorm8x2: 2, unorm8x4: 4, snorm8: 1, snorm8x2: 2, snorm8x4: 4, uint16: 2, uint16x2: 4, uint16x4: 8, sint16: 2, sint16x2: 4, sint16x4: 8, unorm16: 2, unorm16x2: 4, unorm16x4: 8, snorm16: 2, snorm16x2: 4, snorm16x4: 8, float16: 2, float16x2: 4, float16x4: 8, float32: 4, float32x2: 8, float32x3: 12, float32x4: 16, uint32: 4, uint32x2: 8, uint32x3: 12, uint32x4: 16, sint32: 4, sint32x2: 8, sint32x3: 12, sint32x4: 16, "unorm10-10-10-2": 4, "unorm8x4-bgra": 4, atomic: 4 };
function H$1(e27) {
  let t12 = 0, r = e27.propTypes;
  for (let n2 of Object.values(r)) {
    if (Number.isNaN(t12)) throw new Error("Only the last property of a struct can be unbounded");
    if (t12 = f(t12, s$1(n2)), t12 += l(n2), Number.isNaN(t12) && n2.type !== "array") throw new Error("Cannot nest unbounded struct within another struct");
  }
  return f(t12, s$1(e27));
}
function q$1(e27) {
  let t12 = 0, r = e27.propTypes;
  for (let n2 of Object.values(r)) {
    let a2 = y$1(n2);
    t12 = f(t12, a2), t12 += l(n2);
  }
  return t12;
}
function J$3(e27) {
  let t12 = K$1[e27?.type];
  if (t12 !== void 0) return t12;
  if (An$1(e27)) return H$1(e27);
  if (Hn$1(e27)) return q$1(e27);
  if (In$2(e27)) {
    if (e27.elementCount === 0) return Number.NaN;
    let r = s$1(e27.elementType);
    return f(l(e27.elementType), r) * e27.elementCount;
  }
  if (Yn$1(e27)) {
    let r = y$1(e27.elementType);
    return f(l(e27.elementType), r) * e27.elementCount;
  }
  if (Fn$1(e27) || qn$1(e27)) return Xn$1(e27) ?? l(e27.inner);
  throw new Error(`Cannot determine size of data: ${e27}`);
}
var N$2 = /* @__PURE__ */ new WeakMap();
function l(e27) {
  let t12 = N$2.get(e27);
  return t12 === void 0 && (t12 = J$3(e27), N$2.set(e27, t12)), t12;
}
function ue$4(e27) {
  return l(e27);
}
function m$2(e27, t12) {
  return Fn$1(e27) ? new B$2(e27.inner, [t12, ...e27.attribs]) : qn$1(e27) ? new A$1(e27.inner, [t12, ...e27.attribs]) : Bt$1(e27) ? new A$1(e27, [t12]) : new B$2(e27, [t12]);
}
function xe$3(e27, t12) {
  return m$2(t12, { [o$2]: true, type: "@align", params: [e27] });
}
function be$3(e27, t12) {
  return m$2(t12, { [o$2]: true, type: "@size", params: [e27] });
}
function ge$2(e27, t12) {
  return m$2(t12, { [o$2]: true, type: "@location", params: [e27] });
}
function Te$3(e27, t12) {
  return m$2(t12, { [o$2]: true, type: "@interpolate", params: [e27] });
}
function De$1(e27) {
  if (!Q$2(e27)) throw new Error("The @invariant attribute must only be applied to the position built-in value.");
  let t12 = Fn$1(e27) || qn$1(e27) ? e27.attribs.find(kn$1) : void 0;
  if (!t12 || t12.params[0] !== "position") throw new Error("The @invariant attribute must only be applied to the position built-in value.");
  return m$2(e27, { [o$2]: true, type: "@invariant", params: [] });
}
function Q$2(e27) {
  return (Fn$1(e27) || qn$1(e27)) && e27.attribs.find(kn$1) !== void 0;
}
function Ie$2(e27) {
  return !Fn$1(e27) && !qn$1(e27) ? "" : e27.attribs.map((t12) => t12.params.length === 0 ? `${t12.type} ` : `${t12.type}(${t12.params.join(", ")}) `).join("");
}
var I$3 = class I {
  constructor(t12, r) {
    this.inner = t12;
    this.attribs = r;
    let n2 = r.find(Ue$1)?.params[0], a2 = r.find(Ce$3)?.params[0];
    if (n2 !== void 0) {
      if (n2 <= 0) throw new Error(`Custom data alignment must be a positive number, got: ${n2}.`);
      if (Math.log2(n2) % 1 !== 0) throw new Error(`Alignment has to be a power of 2, got: ${n2}.`);
      if (fe$3(this.inner) && n2 % s$1(this.inner) !== 0) throw new Error(`Custom alignment has to be a multiple of the standard data alignment. Got: ${n2}, expected multiple of: ${s$1(this.inner)}.`);
    }
    if (a2 !== void 0) {
      if (a2 < l(this.inner)) throw new Error(`Custom data size cannot be smaller then the standard data size. Got: ${a2}, expected at least: ${l(this.inner)}.`);
      if (a2 <= 0) throw new Error(`Custom data size must be a positive number. Got: ${a2}.`);
    }
  }
  [o$2] = true;
}, B$2 = class B extends I$3 {
  [o$2] = true;
  type = "decorated";
}, A$1 = class A extends I$3 {
  [o$2] = true;
  type = "loose-decorated";
};
var F$2 = Ji(((e27, t12) => t12 === void 0 ? Ji((r) => P$1(e27, r)) : P$1(e27, t12))).$name("arrayOf");
function P$1(e27, t12) {
  let r = (n2) => {
    if (n2 && n2.length !== t12) throw new Error(`Array schema of ${t12} elements of type ${e27.type} called with ${n2.length} argument(s).`);
    return Array.from({ length: t12 }, (a2, M2) => bt$3(e27, n2?.[M2]));
  };
  if (Object.setPrototypeOf(r, X$5), Number.isNaN(l(e27))) throw new Error("Cannot nest runtime sized arrays.");
  if (r.elementType = e27, !Number.isInteger(t12) || t12 < 0) throw new Error(`Cannot create array schema with invalid element count: ${t12}.`);
  return r.elementCount = t12, r;
}
var X$5 = { [o$2]: true, type: "array", toString() {
  return `arrayOf(${this.elementType}, ${this.elementCount})`;
} };
function i$2(e27, t12) {
  return m$2(e27, { [o$2]: true, type: "@builtin", params: [t12] });
}
var ze$2 = { vertexIndex: i$2(T$2, "vertex_index"), instanceIndex: i$2(T$2, "instance_index"), position: i$2(v$1, "position"), clipDistances: i$2(F$2(T$2, 8), "clip_distances"), frontFacing: i$2(V$1, "front_facing"), fragDepth: i$2(x$2, "frag_depth"), sampleIndex: i$2(T$2, "sample_index"), sampleMask: i$2(T$2, "sample_mask"), localInvocationId: i$2(Pe$2, "local_invocation_id"), localInvocationIndex: i$2(T$2, "local_invocation_index"), globalInvocationId: i$2(Pe$2, "global_invocation_id"), workgroupId: i$2(Pe$2, "workgroup_id"), numWorkgroups: i$2(Pe$2, "num_workgroups"), subgroupInvocationId: i$2(T$2, "subgroup_invocation_id"), subgroupSize: i$2(T$2, "subgroup_size") };
function O$2(n2, e27) {
  for (let [r, t12] of Object.entries(e27)) n2[r] = t12, t12 && (typeof t12 == "object" || typeof t12 == "function") && z$2(t12) === void 0 && g$2(t12, r);
}
function Te$2(n2, e27, r) {
  let t12 = [...n2.matchAll(/:\s*(?<arg>.*?)\s*[,)]/g)].map((s2) => s2 ? s2[1] : void 0);
  r(Object.fromEntries(e27.flatMap((s2, i2) => {
    let o2 = t12 ? t12[i2] : void 0;
    return An$1(s2) && o2 !== void 0 ? [[o2, s2]] : [];
  })));
}
function we$1(n2, e27, r) {
  let t12 = n2.match(/->\s(?<output>[\w\d_]+)\s{/), s2 = t12 ? t12[1]?.trim() : void 0;
  An$1(e27) && s2 && !/\s/g.test(s2) && r({ [s2]: e27 });
}
function oe$2(n2) {
  return new RegExp(`(?<![\\w\\$_.])${n2.replaceAll(".", "\\.").replaceAll("$", "\\$")}(?![\\w\\$_])`, "g");
}
function R(n2, e27, r) {
  return Object.entries(e27).reduce((t12, [s2, i2]) => {
    let o2 = oe$2(s2);
    if (r && s2 !== "Out" && s2 !== "In" && !o2.test(r) && console.warn(`The external '${s2}' wasn't used in the resolved template.`), Dr$2(i2) || Bt$1(i2) || Le$1(i2)) return t12.replaceAll(o2, n2.resolve(i2).value);
    if (i2 !== null && typeof i2 == "object") {
      let a2 = [...r.matchAll(new RegExp(`${s2.replaceAll(".", "\\.").replaceAll("$", "\\$")}\\.(?<prop>.*?)(?![\\w\\$_])`, "g"))].map((p2) => p2[1]);
      return [...new Set(a2)].reduce((p2, l2) => l2 && l2 in i2 ? R(n2, { [`${s2}.${l2}`]: i2[l2] }, p2) : p2, t12);
    }
    return console.warn(`During resolution, the external '${s2}' has been omitted. Only TGPU resources, 'use gpu' functions, primitives, and plain JS objects can be used as externals.`), t12;
  }, r);
}
function X$4(n2) {
  let { strippedCode: e27, argRange: r } = ae$2(n2), t12 = new T$1(e27);
  t12.consume("(");
  let s2 = [];
  for (; !t12.isAt(")"); ) {
    let o2 = [];
    for (; t12.isAt("@"); ) t12.parseUntil(z$1, Q$1), t12.consume(")"), o2.push(t12.lastParsed);
    t12.parseUntil(pe$2);
    let a2 = t12.lastParsed, u2;
    t12.isAt(":") && (t12.consume(":"), t12.parseUntil(le$2, de$2), u2 = t12.lastParsed), s2.push({ identifier: a2, attributes: o2, type: u2 }), t12.isAt(",") && t12.consume(",");
  }
  t12.consume(")");
  let i2;
  if (t12.isAt("->")) {
    t12.consume("->");
    let o2 = [];
    for (; t12.isAt("@"); ) t12.parseUntil(z$1, Q$1), t12.consume(")"), o2.push(t12.lastParsed);
    i2 = { type: t12.str.slice(t12.pos), attributes: o2 };
  }
  return { args: s2, ret: i2, range: { begin: r[0], end: r[1] } };
}
function ae$2(n2) {
  let e27 = new T$1(n2), r = "", t12;
  for (; !e27.isFinished(); ) {
    if (e27.isAt(ue$3)) {
      e27.advanceBy(1);
      continue;
    }
    if (e27.isAt("//")) {
      e27.consume("//"), e27.parseUntil(Y$2), e27.advanceBy(1);
      continue;
    }
    if (e27.isAt("/*")) {
      e27.parseUntil(ce$2, me$3), e27.consume("*/");
      continue;
    }
    if (e27.isAt("{")) return { strippedCode: r, argRange: [t12, e27.pos] };
    e27.isAt("(") && t12 === void 0 && (t12 = e27.pos), t12 !== void 0 && (r += e27.str[e27.pos]), e27.advanceBy(1);
  }
  throw new Error("Invalid wgsl code!");
}
var T$1 = class T {
  constructor(e27) {
    this.str = e27;
    this.#e = 0;
  }
  #t;
  #e;
  get pos() {
    return this.#e;
  }
  get lastParsed() {
    if (this.#t === void 0) throw new Error("Parse was not called yet!");
    return this.str.slice(this.#t, this.pos);
  }
  isFinished() {
    return this.#e >= this.str.length;
  }
  isAt(e27) {
    if (typeof e27 == "string") {
      for (let r = 0; r < e27.length; r++) if (this.str[this.#e + r] !== e27[r]) return false;
      return true;
    }
    for (let r of e27) if (this.isAt(r)) return true;
    return false;
  }
  parseUntil(e27, r) {
    this.#t = this.#e;
    let t12 = 0;
    for (; this.#e < this.str.length; ) {
      if (r && this.isAt(r[0]) && (t12 += 1), r && this.isAt(r[1]) && (t12 -= 1), t12 === 0 && this.isAt(e27)) return this.#e;
      this.#e += 1;
    }
    throw new Error("Reached the end of the string without finding a match!");
  }
  advanceBy(e27) {
    this.#e += e27;
  }
  consume(e27) {
    if (!this.isAt(e27)) throw new Error(`Expected '${e27}' at position ${this.#e}, but found '${this.str.slice(this.#e, this.#e + e27.length)}'`);
    this.advanceBy(e27.length);
  }
}, Y$2 = /* @__PURE__ */ new Set([`
`, "\v", "\f", "\r", "", "\u2028", "\u2029"]), ue$3 = /* @__PURE__ */ new Set([...Y$2, " ", "	", "‎", "‏"]), z$1 = /* @__PURE__ */ new Set([")"]), pe$2 = /* @__PURE__ */ new Set([":", ",", ")"]), le$2 = /* @__PURE__ */ new Set([",", ")"]), ce$2 = /* @__PURE__ */ new Set(["*/"]), Q$1 = ["(", ")"], de$2 = ["<", ">"], me$3 = ["/*", "*/"];
function ee$2(n2, e27 = "") {
  let r = [], t12 = { applyExternals(i2) {
    r.push(i2);
  }, resolve(i2, o2, a2) {
    let u2 = {};
    for (let c2 of r) O$2(u2, c2);
    let p2 = i2.getUniqueName(this);
    if (typeof n2 == "string") {
      if (!a2) throw new Error("Explicit return type is required for string implementation");
      let c2 = R(i2, u2, n2), y2 = "", $3 = "";
      if (e27 !== "") {
        let m2 = An$1(o2[0]) ? `(in: ${i2.resolve(o2[0]).value})` : "()", h2 = fe$3(a2) ? Ie$2(a2) : "", S2 = a2 !== Sn$2 ? An$1(a2) ? `-> ${i2.resolve(a2).value}` : `-> ${h2 !== "" ? h2 : "@location(0)"} ${i2.resolve(a2).value}` : "";
        y2 = `${m2} ${S2} `, $3 = c2;
      } else {
        let m2 = X$4(c2);
        if (m2.args.length !== o2.length) throw new Error(`WGSL implementation has ${m2.args.length} arguments, while the shell has ${o2.length} arguments.`);
        let h2 = m2.args.map((v2, se2) => `${v2.identifier}: ${Z$3(i2, `parameter ${v2.identifier}`, v2.type, o2[se2])}`).join(", "), S2 = a2 === Sn$2 ? "" : `-> ${Z$3(i2, "return type", m2.ret?.type, a2)}`;
        y2 = `(${h2}) ${S2}`, $3 = c2.slice(m2.range.end);
      }
      return i2.addDeclaration(`${e27}fn ${p2}${y2}${$3}`), y$2(p2, a2, "runtime");
    }
    let l2 = Ge$2(n2), F2 = typeof l2?.externals == "function" ? l2.externals() : l2?.externals;
    if (F2) {
      let c2 = Object.fromEntries(Object.entries(F2).filter(([y2]) => !(y2 in u2)));
      O$2(u2, c2);
    }
    let g2 = l2?.ast;
    if (!g2) throw new Error("Missing metadata for tgpu.fn function body (either missing 'use gpu' directive, or misconfigured `unplugin-typegpu`)");
    let L2 = g2.externalNames.filter((c2) => !(c2 in u2));
    if (L2.length > 0) throw new et$3(z$2(this), L2);
    let w2 = g2.params[1];
    w2 && w2.type === "i" && e27 !== "" && O$2(u2, { [w2.name]: I$4(a2) });
    let { head: ne2, body: re2, returnType: ie2 } = i2.fnToWgsl({ functionType: e27.includes("@compute") ? "compute" : e27.includes("@vertex") ? "vertex" : e27.includes("@fragment") ? "fragment" : "normal", argTypes: o2, params: g2.params, returnType: a2, body: g2.body, externalMap: u2 });
    return i2.addDeclaration(`${e27}fn ${p2}${i2.resolve(ne2).value}${i2.resolve(re2).value}`), y$2(p2, ie2, "runtime");
  } }, s2 = z$2(n2);
  return s2 !== void 0 && g$2(t12, s2), t12;
}
function Z$3(n2, e27, r, t12) {
  let s2 = n2.resolve(t12).value.replace(/\s/g, "");
  if (!r) return s2;
  let i2 = r.replace(/\s/g, "");
  if (i2 !== s2) throw new Error(`Type mismatch between TGPU shell and WGSL code string: ${e27}, JS type "${s2}", WGSL type "${i2}".`);
  return r;
}
function fe$2(n2, e27 = {}) {
  let r = 0, t12 = /* @__PURE__ */ new Set();
  return Object.fromEntries(Object.entries(n2 ?? {}).map(([s2, i2]) => {
    let o2 = Zn$1(i2);
    if (o2 !== void 0) {
      if (t12.has(o2)) throw new Error("Duplicate custom location attributes found");
      t12.add(o2);
    }
    return [s2, i2];
  }).map(([s2, i2]) => {
    if (Q$2(i2)) return [s2, i2];
    if (Zn$1(i2) !== void 0) return [s2, i2];
    if (e27[s2]) return [s2, ge$2(e27[s2], i2)];
    for (; t12.has(r); ) r++;
    return [s2, ge$2(r++, i2)];
  }));
}
function b$1(n2, e27 = {}) {
  return Qn$1(n2) ? Pn$1(n2) || Q$2(n2) || Zn$1(n2) !== void 0 ? n2 : ge$2(0, n2) : Js(fe$2(n2, e27));
}
function te$2(n2, ...e27) {
  return xe$2(n2) ? ge$1(n2, ...e27) : n2;
}
function xe$2(n2) {
  return Array.isArray(n2) && "raw" in n2 && Array.isArray(n2.raw) && n2.raw.every((e27) => typeof e27 == "string");
}
function ge$1(n2, ...e27) {
  return n2.slice(1).reduce((r, t12, s2) => `${r}${e27[s2]}${t12}`, n2[0]);
}
function qe$1(n2) {
  if (Object.keys(n2.out).length === 0) throw new Error("A vertexFn output cannot be empty since it must include the 'position' builtin.");
  let e27 = { in: n2.in, out: n2.out, argTypes: n2.in && Object.keys(n2.in).length !== 0 ? [b$1(n2.in)] : [], isEntry: true };
  return Object.assign((t12, ...s2) => ye$3(e27, te$2(t12, ...s2)), e27);
}
function ye$3(n2, e27) {
  let r = ee$2(e27, "@vertex "), t12 = n2.argTypes[0];
  return { shell: n2, $uses(i2) {
    return r.applyExternals(i2), this;
  }, [o$2]: true, [B$3]: r, $name(i2) {
    return g$2(r, i2), Et$2(t12) && t12.$name(`${i2}_Input`), this;
  }, [R$2](i2) {
    let o2 = b$1(n2.out, i2.varyingLocations).$name(`${z$2(this) ?? ""}_Output`);
    return typeof e27 == "string" && (t12 && r.applyExternals({ In: t12 }), r.applyExternals({ Out: o2 })), r.resolve(i2, n2.argTypes, o2);
  }, toString() {
    return `vertexFn:${z$2(r) ?? "<unnamed>"}`;
  } };
}
var xe$1 = class xe {
};
function Pe$1(e27) {
  let t12 = k$1({ name: e27.type, normalImpl: (...s2) => {
    let l2 = [];
    for (let B3 of s2) if (typeof B3 == "number") l2.push(B3);
    else for (let Ve2 = 0; Ve2 < B3.length; ++Ve2) l2.push(B3[Ve2]);
    if (l2.length !== 0 && l2.length !== e27.columns * e27.rows) throw new Error(`'${e27.type}' constructor called with invalid number of arguments.`);
    for (let B3 = l2.length; B3 < e27.columns * e27.rows; ++B3) l2.push(0);
    return new e27.MatImpl(...l2);
  }, ignoreImplicitCastWarning: true, signature: (...s2) => ({ argTypes: s2.map((l2) => se$2(l2) ? l2 : x$2), returnType: r }), codegenImpl: (...s2) => p$1`${e27.type}(${s2})` }), r = Object.assign(t12, { type: e27.type, identity: ut$1[e27.columns], translation: e27.columns === 4 ? ct$2 : void 0, scaling: e27.columns === 4 ? ot$1 : void 0, rotationX: e27.columns === 4 ? lt$1 : void 0, rotationY: e27.columns === 4 ? xt$1 : void 0, rotationZ: e27.columns === 4 ? mt$1 : void 0 });
  return e27.MatImpl.prototype.schema = r, r;
}
var We$1 = class We extends xe$1 {
  [o$2] = true;
  columns;
  length = 4;
  constructor(...t12) {
    super(), this.columns = [this.makeColumn(t12[0], t12[1]), this.makeColumn(t12[2], t12[3])];
  }
  get 0() {
    return this.columns[0].x;
  }
  get 1() {
    return this.columns[0].y;
  }
  get 2() {
    return this.columns[1].x;
  }
  get 3() {
    return this.columns[1].y;
  }
  set 0(t12) {
    this.columns[0].x = t12;
  }
  set 1(t12) {
    this.columns[0].y = t12;
  }
  set 2(t12) {
    this.columns[1].x = t12;
  }
  set 3(t12) {
    this.columns[1].y = t12;
  }
  *[Symbol.iterator]() {
    yield this[0], yield this[1], yield this[2], yield this[3];
  }
  [R$2]() {
    return y$2(`${this.kind}(${Array.from({ length: this.length }).map((t12, r) => this[r]).join(", ")})`, j, "runtime");
  }
  toString() {
    return this[R$2]().value;
  }
}, Fe$1 = class Fe extends We$1 {
  kind = "mat2x2f";
  makeColumn(t12, r) {
    return F$3(t12, r);
  }
}, $e$1 = class $e extends xe$1 {
  [o$2] = true;
  columns;
  length = 12;
  constructor(...t12) {
    super(), this.columns = [this.makeColumn(t12[0], t12[1], t12[2]), this.makeColumn(t12[3], t12[4], t12[5]), this.makeColumn(t12[6], t12[7], t12[8])];
  }
  get 0() {
    return this.columns[0].x;
  }
  get 1() {
    return this.columns[0].y;
  }
  get 2() {
    return this.columns[0].z;
  }
  get 3() {
    return 0;
  }
  get 4() {
    return this.columns[1].x;
  }
  get 5() {
    return this.columns[1].y;
  }
  get 6() {
    return this.columns[1].z;
  }
  get 7() {
    return 0;
  }
  get 8() {
    return this.columns[2].x;
  }
  get 9() {
    return this.columns[2].y;
  }
  get 10() {
    return this.columns[2].z;
  }
  get 11() {
    return 0;
  }
  set 0(t12) {
    this.columns[0].x = t12;
  }
  set 1(t12) {
    this.columns[0].y = t12;
  }
  set 2(t12) {
    this.columns[0].z = t12;
  }
  set 3(t12) {
  }
  set 4(t12) {
    this.columns[1].x = t12;
  }
  set 5(t12) {
    this.columns[1].y = t12;
  }
  set 6(t12) {
    this.columns[1].z = t12;
  }
  set 7(t12) {
  }
  set 8(t12) {
    this.columns[2].x = t12;
  }
  set 9(t12) {
    this.columns[2].y = t12;
  }
  set 10(t12) {
    this.columns[2].z = t12;
  }
  set 11(t12) {
  }
  *[Symbol.iterator]() {
    for (let t12 = 0; t12 < 12; t12++) yield this[t12];
  }
  [R$2]() {
    return y$2(`${this.kind}(${this[0]}, ${this[1]}, ${this[2]}, ${this[4]}, ${this[5]}, ${this[6]}, ${this[8]}, ${this[9]}, ${this[10]})`, q, "runtime");
  }
  toString() {
    return this[R$2]().value;
  }
}, Ce$2 = class Ce extends $e$1 {
  kind = "mat3x3f";
  makeColumn(t12, r, s2) {
    return ke$2(t12, r, s2);
  }
}, ke$1 = class ke extends xe$1 {
  [o$2] = true;
  columns;
  constructor(...t12) {
    super(), this.columns = [this.makeColumn(t12[0], t12[1], t12[2], t12[3]), this.makeColumn(t12[4], t12[5], t12[6], t12[7]), this.makeColumn(t12[8], t12[9], t12[10], t12[11]), this.makeColumn(t12[12], t12[13], t12[14], t12[15])];
  }
  length = 16;
  get 0() {
    return this.columns[0].x;
  }
  get 1() {
    return this.columns[0].y;
  }
  get 2() {
    return this.columns[0].z;
  }
  get 3() {
    return this.columns[0].w;
  }
  get 4() {
    return this.columns[1].x;
  }
  get 5() {
    return this.columns[1].y;
  }
  get 6() {
    return this.columns[1].z;
  }
  get 7() {
    return this.columns[1].w;
  }
  get 8() {
    return this.columns[2].x;
  }
  get 9() {
    return this.columns[2].y;
  }
  get 10() {
    return this.columns[2].z;
  }
  get 11() {
    return this.columns[2].w;
  }
  get 12() {
    return this.columns[3].x;
  }
  get 13() {
    return this.columns[3].y;
  }
  get 14() {
    return this.columns[3].z;
  }
  get 15() {
    return this.columns[3].w;
  }
  set 0(t12) {
    this.columns[0].x = t12;
  }
  set 1(t12) {
    this.columns[0].y = t12;
  }
  set 2(t12) {
    this.columns[0].z = t12;
  }
  set 3(t12) {
    this.columns[0].w = t12;
  }
  set 4(t12) {
    this.columns[1].x = t12;
  }
  set 5(t12) {
    this.columns[1].y = t12;
  }
  set 6(t12) {
    this.columns[1].z = t12;
  }
  set 7(t12) {
    this.columns[1].w = t12;
  }
  set 8(t12) {
    this.columns[2].x = t12;
  }
  set 9(t12) {
    this.columns[2].y = t12;
  }
  set 10(t12) {
    this.columns[2].z = t12;
  }
  set 11(t12) {
    this.columns[2].w = t12;
  }
  set 12(t12) {
    this.columns[3].x = t12;
  }
  set 13(t12) {
    this.columns[3].y = t12;
  }
  set 14(t12) {
    this.columns[3].z = t12;
  }
  set 15(t12) {
    this.columns[3].w = t12;
  }
  *[Symbol.iterator]() {
    for (let t12 = 0; t12 < 16; t12++) yield this[t12];
  }
  [R$2]() {
    return y$2(`${this.kind}(${Array.from({ length: this.length }).map((t12, r) => this[r]).join(", ")})`, g$1, "runtime");
  }
  toString() {
    return this[R$2]().value;
  }
}, Ie$1 = class Ie extends ke$1 {
  kind = "mat4x4f";
  makeColumn(t12, r, s2, l2) {
    return v$1(t12, r, s2, l2);
  }
}, st$1 = Ji(() => j(1, 0, 0, 1)).$name("identity2"), nt$1 = Ji(() => q(1, 0, 0, 0, 1, 0, 0, 0, 1)).$name("identity3"), at$1 = Ji(() => g$1(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)).$name("identity4"), ut$1 = { 2: st$1, 3: nt$1, 4: at$1 }, ct$2 = k$1({ name: "translation4", normalImpl: (e27) => g$1(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, e27.x, e27.y, e27.z, 1), get signature() {
  return { argTypes: [ke$2], returnType: g$1 };
}, codegenImpl: (e27) => p$1`mat4x4f(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, ${e27}.x, ${e27}.y, ${e27}.z, 1)` }), ot$1 = k$1({ name: "scaling4", normalImpl: (e27) => g$1(e27.x, 0, 0, 0, 0, e27.y, 0, 0, 0, 0, e27.z, 0, 0, 0, 0, 1), get signature() {
  return { argTypes: [ke$2], returnType: g$1 };
}, codegenImpl: (e27) => p$1`mat4x4f(${e27}.x, 0, 0, 0, 0, ${e27}.y, 0, 0, 0, 0, ${e27}.z, 0, 0, 0, 0, 1)` }), lt$1 = k$1({ name: "rotationX4", normalImpl: (e27) => g$1(1, 0, 0, 0, 0, Math.cos(e27), Math.sin(e27), 0, 0, -Math.sin(e27), Math.cos(e27), 0, 0, 0, 0, 1), get signature() {
  return { argTypes: [x$2], returnType: g$1 };
}, codegenImpl: (e27) => p$1`mat4x4f(1, 0, 0, 0, 0, cos(${e27}), sin(${e27}), 0, 0, -sin(${e27}), cos(${e27}), 0, 0, 0, 0, 1)` }), xt$1 = k$1({ name: "rotationY4", normalImpl: (e27) => g$1(Math.cos(e27), 0, -Math.sin(e27), 0, 0, 1, 0, 0, Math.sin(e27), 0, Math.cos(e27), 0, 0, 0, 0, 1), get signature() {
  return { argTypes: [x$2], returnType: g$1 };
}, codegenImpl: (e27) => p$1`mat4x4f(cos(${e27}), 0, -sin(${e27}), 0, 0, 1, 0, 0, sin(${e27}), 0, cos(${e27}), 0, 0, 0, 0, 1)` }), mt$1 = k$1({ name: "rotationZ4", normalImpl: (e27) => g$1(Math.cos(e27), Math.sin(e27), 0, 0, -Math.sin(e27), Math.cos(e27), 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), get signature() {
  return { argTypes: [x$2], returnType: g$1 };
}, codegenImpl: (e27) => p$1`mat4x4f(cos(${e27}), sin(${e27}), 0, 0, -sin(${e27}), cos(${e27}), 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)` }), j = Pe$1({ type: "mat2x2f", rows: 2, columns: 2, MatImpl: Fe$1 }), q = Pe$1({ type: "mat3x3f", rows: 3, columns: 3, MatImpl: Ce$2 }), g$1 = Pe$1({ type: "mat4x4f", rows: 4, columns: 4, MatImpl: Ie$1 });
function Lt$2(e27) {
  return e27.kind === "mat3x3f" ? [e27[0], e27[1], e27[2], e27[4], e27[5], e27[6], e27[8], e27[9], e27[10]] : Array.from({ length: e27.length }).map((t12, r) => e27[r]);
}
var U2 = (e27, t12, r) => {
  if (e27 === t12) return 0;
  let s2 = n$1((r - e27) / (t12 - e27), 0, 1);
  return s2 * s2 * (3 - 2 * s2);
}, n$1 = (e27, t12, r) => Math.min(Math.max(t12, e27), r), K = (e27, t12) => t12 === 0 ? e27 : Math.trunc(e27 / t12);
function A2(e27) {
  let t12 = new DataView(new ArrayBuffer(4));
  return t12.setUint32(0, e27, true), t12.getFloat32(0, true);
}
function W2(e27) {
  let t12 = new DataView(new ArrayBuffer(4));
  return t12.setUint32(0, e27, true), t12.getInt32(0, true);
}
var w = rn$1[o$2].jsImpl, z = F$3[o$2].jsImpl, I$2 = nn$2[o$2].jsImpl, ue$2 = pe$3[o$2].jsImpl, Te$1 = le$3[o$2].jsImpl, b = on$1[o$2].jsImpl, h = ke$2[o$2].jsImpl, F$1 = sn$1[o$2].jsImpl, ce$1 = Fe$2[o$2].jsImpl, de$1 = Pe$2[o$2].jsImpl, M = un$1[o$2].jsImpl, S$1 = v$1[o$2].jsImpl, P = an$1[o$2].jsImpl, oe$1 = he$1[o$2].jsImpl, pe$1 = xe$4[o$2].jsImpl, Z$2 = (e27) => Math.sqrt(e27.x ** 2 + e27.y ** 2), X$3 = (e27) => Math.sqrt(e27.x ** 2 + e27.y ** 2 + e27.z ** 2), Y$1 = (e27) => Math.sqrt(e27.x ** 2 + e27.y ** 2 + e27.z ** 2 + e27.w ** 2), be$2 = (e27, t12) => e27.x * t12.x + e27.y * t12.y, Me$1 = (e27, t12) => e27.x * t12.x + e27.y * t12.y + e27.z * t12.z, ze$1 = (e27, t12) => e27.x * t12.x + e27.y * t12.y + e27.z * t12.z + e27.w * t12.w, o$1 = (e27) => (t12) => z(e27(t12.x), e27(t12.y)), x$1 = (e27) => (t12) => I$2(e27(t12.x), e27(t12.y)), H = (e27) => (t12) => ue$2(e27(t12.x), e27(t12.y)), me$2 = (e27) => (t12) => Te$1(e27(t12.x), e27(t12.y)), c$1 = (e27) => (t12) => h(e27(t12.x), e27(t12.y), e27(t12.z)), m$1 = (e27) => (t12) => F$1(e27(t12.x), e27(t12.y), e27(t12.z)), J$2 = (e27) => (t12) => ce$1(e27(t12.x), e27(t12.y), e27(t12.z)), ye$2 = (e27) => (t12) => de$1(e27(t12.x), e27(t12.y), e27(t12.z)), u$1 = (e27) => (t12) => S$1(e27(t12.x), e27(t12.y), e27(t12.z), e27(t12.w)), y = (e27) => (t12) => P(e27(t12.x), e27(t12.y), e27(t12.z), e27(t12.w)), Q = (e27) => (t12) => oe$1(e27(t12.x), e27(t12.y), e27(t12.z), e27(t12.w)), ie$1 = (e27) => (t12) => pe$1(e27(t12.x), e27(t12.y), e27(t12.z), e27(t12.w)), He$1 = (e27) => (t12) => {
  let r = t12.columns;
  return j(o$1(e27)(r[0]), o$1(e27)(r[1]));
}, Je$2 = (e27) => (t12) => {
  let r = t12.columns;
  return q(c$1(e27)(r[0]), c$1(e27)(r[1]), c$1(e27)(r[2]));
}, Qe$1 = (e27) => (t12) => {
  let r = t12.columns;
  return g$1(u$1(e27)(r[0]), u$1(e27)(r[1]), u$1(e27)(r[2]), u$1(e27)(r[3]));
}, k = (e27) => (t12, r) => z(e27(t12.x, r.x), e27(t12.y, r.y)), N$1 = (e27) => (t12, r) => I$2(e27(t12.x, r.x), e27(t12.y, r.y)), ee$1 = (e27) => (t12, r) => ue$2(e27(t12.x, r.x), e27(t12.y, r.y)), te$1 = (e27) => (t12, r) => Te$1(e27(t12.x, r.x), e27(t12.y, r.y)), $$1 = (e27) => (t12, r) => h(e27(t12.x, r.x), e27(t12.y, r.y), e27(t12.z, r.z)), O$1 = (e27) => (t12, r) => F$1(e27(t12.x, r.x), e27(t12.y, r.y), e27(t12.z, r.z)), re$2 = (e27) => (t12, r) => ce$1(e27(t12.x, r.x), e27(t12.y, r.y), e27(t12.z, r.z)), se$1 = (e27) => (t12, r) => de$1(e27(t12.x, r.x), e27(t12.y, r.y), e27(t12.z, r.z)), V = (e27) => (t12, r) => S$1(e27(t12.x, r.x), e27(t12.y, r.y), e27(t12.z, r.z), e27(t12.w, r.w)), L = (e27) => (t12, r) => P(e27(t12.x, r.x), e27(t12.y, r.y), e27(t12.z, r.z), e27(t12.w, r.w)), ne$1 = (e27) => (t12, r) => oe$1(e27(t12.x, r.x), e27(t12.y, r.y), e27(t12.z, r.z), e27(t12.w, r.w)), ae$1 = (e27) => (t12, r) => pe$1(e27(t12.x, r.x), e27(t12.y, r.y), e27(t12.z, r.z), e27(t12.w, r.w)), yt$2 = (e27) => (t12, r) => {
  let s2 = t12.columns, l2 = r.columns;
  return j(k(e27)(s2[0], l2[0]), k(e27)(s2[1], l2[1]));
}, it$1 = (e27) => (t12, r) => {
  let s2 = t12.columns, l2 = r.columns;
  return q($$1(e27)(s2[0], l2[0]), $$1(e27)(s2[1], l2[1]), $$1(e27)(s2[2], l2[2]));
}, Tt$2 = (e27) => (t12, r) => {
  let s2 = t12.columns, l2 = r.columns;
  return g$1(V(e27)(s2[0], l2[0]), V(e27)(s2[1], l2[1]), V(e27)(s2[2], l2[2]), V(e27)(s2[3], l2[3]));
}, dt$2 = (e27) => (t12, r, s2) => z(e27(t12.x, r.x, s2.x), e27(t12.y, r.y, s2.y)), pt$1 = (e27) => (t12, r, s2) => I$2(e27(t12.x, r.x, s2.x), e27(t12.y, r.y, s2.y)), gt$2 = (e27) => (t12, r, s2) => h(e27(t12.x, r.x, s2.x), e27(t12.y, r.y, s2.y), e27(t12.z, r.z, s2.z)), vt$1 = (e27) => (t12, r, s2) => F$1(e27(t12.x, r.x, s2.x), e27(t12.y, r.y, s2.y), e27(t12.z, r.z, s2.z)), ft$1 = (e27) => (t12, r, s2) => S$1(e27(t12.x, r.x, s2.x), e27(t12.y, r.y, s2.y), e27(t12.z, r.z, s2.z), e27(t12.w, r.w, s2.w)), ht$1 = (e27) => (t12, r, s2) => P(e27(t12.x, r.x, s2.x), e27(t12.y, r.y, s2.y), e27(t12.z, r.z, s2.z), e27(t12.w, r.w, s2.w)), d$1 = { eq: { vec2f: (e27, t12) => w(e27.x === t12.x, e27.y === t12.y), vec2h: (e27, t12) => w(e27.x === t12.x, e27.y === t12.y), vec2i: (e27, t12) => w(e27.x === t12.x, e27.y === t12.y), vec2u: (e27, t12) => w(e27.x === t12.x, e27.y === t12.y), "vec2<bool>": (e27, t12) => w(e27.x === t12.x, e27.y === t12.y), vec3f: (e27, t12) => b(e27.x === t12.x, e27.y === t12.y, e27.z === t12.z), vec3h: (e27, t12) => b(e27.x === t12.x, e27.y === t12.y, e27.z === t12.z), vec3i: (e27, t12) => b(e27.x === t12.x, e27.y === t12.y, e27.z === t12.z), vec3u: (e27, t12) => b(e27.x === t12.x, e27.y === t12.y, e27.z === t12.z), "vec3<bool>": (e27, t12) => b(e27.x === t12.x, e27.y === t12.y, e27.z === t12.z), vec4f: (e27, t12) => M(e27.x === t12.x, e27.y === t12.y, e27.z === t12.z, e27.w === t12.w), vec4h: (e27, t12) => M(e27.x === t12.x, e27.y === t12.y, e27.z === t12.z, e27.w === t12.w), vec4i: (e27, t12) => M(e27.x === t12.x, e27.y === t12.y, e27.z === t12.z, e27.w === t12.w), vec4u: (e27, t12) => M(e27.x === t12.x, e27.y === t12.y, e27.z === t12.z, e27.w === t12.w), "vec4<bool>": (e27, t12) => M(e27.x === t12.x, e27.y === t12.y, e27.z === t12.z, e27.w === t12.w) }, lt: { vec2f: (e27, t12) => w(e27.x < t12.x, e27.y < t12.y), vec2h: (e27, t12) => w(e27.x < t12.x, e27.y < t12.y), vec2i: (e27, t12) => w(e27.x < t12.x, e27.y < t12.y), vec2u: (e27, t12) => w(e27.x < t12.x, e27.y < t12.y), vec3f: (e27, t12) => b(e27.x < t12.x, e27.y < t12.y, e27.z < t12.z), vec3h: (e27, t12) => b(e27.x < t12.x, e27.y < t12.y, e27.z < t12.z), vec3i: (e27, t12) => b(e27.x < t12.x, e27.y < t12.y, e27.z < t12.z), vec3u: (e27, t12) => b(e27.x < t12.x, e27.y < t12.y, e27.z < t12.z), vec4f: (e27, t12) => M(e27.x < t12.x, e27.y < t12.y, e27.z < t12.z, e27.w < t12.w), vec4h: (e27, t12) => M(e27.x < t12.x, e27.y < t12.y, e27.z < t12.z, e27.w < t12.w), vec4i: (e27, t12) => M(e27.x < t12.x, e27.y < t12.y, e27.z < t12.z, e27.w < t12.w), vec4u: (e27, t12) => M(e27.x < t12.x, e27.y < t12.y, e27.z < t12.z, e27.w < t12.w) }, or: { "vec2<bool>": (e27, t12) => w(e27.x || t12.x, e27.y || t12.y), "vec3<bool>": (e27, t12) => b(e27.x || t12.x, e27.y || t12.y, e27.z || t12.z), "vec4<bool>": (e27, t12) => M(e27.x || t12.x, e27.y || t12.y, e27.z || t12.z, e27.w || t12.w) }, all: { "vec2<bool>": (e27) => e27.x && e27.y, "vec3<bool>": (e27) => e27.x && e27.y && e27.z, "vec4<bool>": (e27) => e27.x && e27.y && e27.z && e27.w }, abs: { vec2f: o$1(Math.abs), vec2h: x$1(Math.abs), vec2i: H(Math.abs), vec2u: me$2(Math.abs), vec3f: c$1(Math.abs), vec3h: m$1(Math.abs), vec3i: J$2(Math.abs), vec3u: ye$2(Math.abs), vec4f: u$1(Math.abs), vec4h: y(Math.abs), vec4i: Q(Math.abs), vec4u: ie$1(Math.abs) }, atan2: { vec2f: k(Math.atan2), vec2h: N$1(Math.atan2), vec3f: $$1(Math.atan2), vec3h: O$1(Math.atan2), vec4f: V(Math.atan2), vec4h: L(Math.atan2) }, acos: { vec2f: o$1(Math.acos), vec2h: x$1(Math.acos), vec2i: H(Math.acos), vec2u: me$2(Math.acos), vec3f: c$1(Math.acos), vec3h: m$1(Math.acos), vec3i: J$2(Math.acos), vec3u: ye$2(Math.acos), vec4f: u$1(Math.acos), vec4h: y(Math.acos), vec4i: Q(Math.acos), vec4u: ie$1(Math.acos) }, acosh: { vec2f: o$1(Math.acosh), vec2h: x$1(Math.acosh), vec3f: c$1(Math.acosh), vec3h: m$1(Math.acosh), vec4f: u$1(Math.acosh), vec4h: y(Math.acosh) }, asin: { vec2f: o$1(Math.asin), vec2h: x$1(Math.asin), vec3f: c$1(Math.asin), vec3h: m$1(Math.asin), vec4f: u$1(Math.asin), vec4h: y(Math.asin) }, asinh: { vec2f: o$1(Math.asinh), vec2h: x$1(Math.asinh), vec3f: c$1(Math.asinh), vec3h: m$1(Math.asinh), vec4f: u$1(Math.asinh), vec4h: y(Math.asinh) }, atan: { vec2f: o$1(Math.atan), vec2h: x$1(Math.atan), vec3f: c$1(Math.atan), vec3h: m$1(Math.atan), vec4f: u$1(Math.atan), vec4h: y(Math.atan) }, atanh: { vec2f: o$1(Math.atanh), vec2h: x$1(Math.atanh), vec3f: c$1(Math.atanh), vec3h: m$1(Math.atanh), vec4f: u$1(Math.atanh), vec4h: y(Math.atanh) }, ceil: { vec2f: o$1(Math.ceil), vec2h: x$1(Math.ceil), vec3f: c$1(Math.ceil), vec3h: m$1(Math.ceil), vec4f: u$1(Math.ceil), vec4h: y(Math.ceil) }, clamp: { vec2f: (e27, t12, r) => z(n$1(e27.x, t12.x, r.x), n$1(e27.y, t12.y, r.y)), vec2h: (e27, t12, r) => I$2(n$1(e27.x, t12.x, r.x), n$1(e27.y, t12.y, r.y)), vec2i: (e27, t12, r) => ue$2(n$1(e27.x, t12.x, r.x), n$1(e27.y, t12.y, r.y)), vec2u: (e27, t12, r) => Te$1(n$1(e27.x, t12.x, r.x), n$1(e27.y, t12.y, r.y)), vec3f: (e27, t12, r) => h(n$1(e27.x, t12.x, r.x), n$1(e27.y, t12.y, r.y), n$1(e27.z, t12.z, r.z)), vec3h: (e27, t12, r) => F$1(n$1(e27.x, t12.x, r.x), n$1(e27.y, t12.y, r.y), n$1(e27.z, t12.z, r.z)), vec3i: (e27, t12, r) => ce$1(n$1(e27.x, t12.x, r.x), n$1(e27.y, t12.y, r.y), n$1(e27.z, t12.z, r.z)), vec3u: (e27, t12, r) => de$1(n$1(e27.x, t12.x, r.x), n$1(e27.y, t12.y, r.y), n$1(e27.z, t12.z, r.z)), vec4f: (e27, t12, r) => S$1(n$1(e27.x, t12.x, r.x), n$1(e27.y, t12.y, r.y), n$1(e27.z, t12.z, r.z), n$1(e27.w, t12.w, r.w)), vec4h: (e27, t12, r) => P(n$1(e27.x, t12.x, r.x), n$1(e27.y, t12.y, r.y), n$1(e27.z, t12.z, r.z), n$1(e27.w, t12.w, r.w)), vec4i: (e27, t12, r) => oe$1(n$1(e27.x, t12.x, r.x), n$1(e27.y, t12.y, r.y), n$1(e27.z, t12.z, r.z), n$1(e27.w, t12.w, r.w)), vec4u: (e27, t12, r) => pe$1(n$1(e27.x, t12.x, r.x), n$1(e27.y, t12.y, r.y), n$1(e27.z, t12.z, r.z), n$1(e27.w, t12.w, r.w)) }, length: { vec2f: Z$2, vec2h: Z$2, vec3f: X$3, vec3h: X$3, vec4f: Y$1, vec4h: Y$1 }, add: { vec2f: k((e27, t12) => e27 + t12), vec2h: N$1((e27, t12) => e27 + t12), vec2i: ee$1((e27, t12) => e27 + t12), vec2u: te$1((e27, t12) => e27 + t12), vec3f: $$1((e27, t12) => e27 + t12), vec3h: O$1((e27, t12) => e27 + t12), vec3i: re$2((e27, t12) => e27 + t12), vec3u: se$1((e27, t12) => e27 + t12), vec4f: V((e27, t12) => e27 + t12), vec4h: L((e27, t12) => e27 + t12), vec4i: ne$1((e27, t12) => e27 + t12), vec4u: ae$1((e27, t12) => e27 + t12), mat2x2f: yt$2((e27, t12) => e27 + t12), mat3x3f: it$1((e27, t12) => e27 + t12), mat4x4f: Tt$2((e27, t12) => e27 + t12) }, smoothstep: { vec2f: dt$2(U2), vec2h: pt$1(U2), vec3f: gt$2(U2), vec3h: vt$1(U2), vec4f: ft$1(U2), vec4h: ht$1(U2) }, addMixed: { vec2f: (e27, t12) => o$1((r) => r + t12)(e27), vec2h: (e27, t12) => x$1((r) => r + t12)(e27), vec2i: (e27, t12) => H((r) => r + t12)(e27), vec2u: (e27, t12) => me$2((r) => r + t12)(e27), vec3f: (e27, t12) => c$1((r) => r + t12)(e27), vec3h: (e27, t12) => m$1((r) => r + t12)(e27), vec3i: (e27, t12) => J$2((r) => r + t12)(e27), vec3u: (e27, t12) => ye$2((r) => r + t12)(e27), vec4f: (e27, t12) => u$1((r) => r + t12)(e27), vec4h: (e27, t12) => y((r) => r + t12)(e27), vec4i: (e27, t12) => Q((r) => r + t12)(e27), vec4u: (e27, t12) => ie$1((r) => r + t12)(e27), mat2x2f: (e27, t12) => He$1((r) => r + t12)(e27), mat3x3f: (e27, t12) => Je$2((r) => r + t12)(e27), mat4x4f: (e27, t12) => Qe$1((r) => r + t12)(e27) }, mulSxV: { vec2f: (e27, t12) => o$1((r) => e27 * r)(t12), vec2h: (e27, t12) => x$1((r) => e27 * r)(t12), vec2i: (e27, t12) => H((r) => e27 * r)(t12), vec2u: (e27, t12) => me$2((r) => e27 * r)(t12), vec3f: (e27, t12) => c$1((r) => e27 * r)(t12), vec3h: (e27, t12) => m$1((r) => e27 * r)(t12), vec3i: (e27, t12) => J$2((r) => e27 * r)(t12), vec3u: (e27, t12) => ye$2((r) => e27 * r)(t12), vec4f: (e27, t12) => u$1((r) => e27 * r)(t12), vec4h: (e27, t12) => y((r) => e27 * r)(t12), vec4i: (e27, t12) => Q((r) => e27 * r)(t12), vec4u: (e27, t12) => ie$1((r) => e27 * r)(t12), mat2x2f: (e27, t12) => He$1((r) => e27 * r)(t12), mat3x3f: (e27, t12) => Je$2((r) => e27 * r)(t12), mat4x4f: (e27, t12) => Qe$1((r) => e27 * r)(t12) }, mulVxV: { vec2f: k((e27, t12) => e27 * t12), vec2h: N$1((e27, t12) => e27 * t12), vec2i: ee$1((e27, t12) => e27 * t12), vec2u: te$1((e27, t12) => e27 * t12), vec3f: $$1((e27, t12) => e27 * t12), vec3h: O$1((e27, t12) => e27 * t12), vec3i: re$2((e27, t12) => e27 * t12), vec3u: se$1((e27, t12) => e27 * t12), vec4f: V((e27, t12) => e27 * t12), vec4h: L((e27, t12) => e27 * t12), vec4i: ne$1((e27, t12) => e27 * t12), vec4u: ae$1((e27, t12) => e27 * t12), mat2x2f: (e27, t12) => {
  let r = e27.columns, s2 = t12.columns;
  return j(r[0].x * s2[0].x + r[1].x * s2[0].y, r[0].y * s2[0].x + r[1].y * s2[0].y, r[0].x * s2[1].x + r[1].x * s2[1].y, r[0].y * s2[1].x + r[1].y * s2[1].y);
}, mat3x3f: (e27, t12) => {
  let r = e27.columns, s2 = t12.columns;
  return q(r[0].x * s2[0].x + r[1].x * s2[0].y + r[2].x * s2[0].z, r[0].y * s2[0].x + r[1].y * s2[0].y + r[2].y * s2[0].z, r[0].z * s2[0].x + r[1].z * s2[0].y + r[2].z * s2[0].z, r[0].x * s2[1].x + r[1].x * s2[1].y + r[2].x * s2[1].z, r[0].y * s2[1].x + r[1].y * s2[1].y + r[2].y * s2[1].z, r[0].z * s2[1].x + r[1].z * s2[1].y + r[2].z * s2[1].z, r[0].x * s2[2].x + r[1].x * s2[2].y + r[2].x * s2[2].z, r[0].y * s2[2].x + r[1].y * s2[2].y + r[2].y * s2[2].z, r[0].z * s2[2].x + r[1].z * s2[2].y + r[2].z * s2[2].z);
}, mat4x4f: (e27, t12) => {
  let r = e27.columns, s2 = t12.columns;
  return g$1(r[0].x * s2[0].x + r[1].x * s2[0].y + r[2].x * s2[0].z + r[3].x * s2[0].w, r[0].y * s2[0].x + r[1].y * s2[0].y + r[2].y * s2[0].z + r[3].y * s2[0].w, r[0].z * s2[0].x + r[1].z * s2[0].y + r[2].z * s2[0].z + r[3].z * s2[0].w, r[0].w * s2[0].x + r[1].w * s2[0].y + r[2].w * s2[0].z + r[3].w * s2[0].w, r[0].x * s2[1].x + r[1].x * s2[1].y + r[2].x * s2[1].z + r[3].x * s2[1].w, r[0].y * s2[1].x + r[1].y * s2[1].y + r[2].y * s2[1].z + r[3].y * s2[1].w, r[0].z * s2[1].x + r[1].z * s2[1].y + r[2].z * s2[1].z + r[3].z * s2[1].w, r[0].w * s2[1].x + r[1].w * s2[1].y + r[2].w * s2[1].z + r[3].w * s2[1].w, r[0].x * s2[2].x + r[1].x * s2[2].y + r[2].x * s2[2].z + r[3].x * s2[2].w, r[0].y * s2[2].x + r[1].y * s2[2].y + r[2].y * s2[2].z + r[3].y * s2[2].w, r[0].z * s2[2].x + r[1].z * s2[2].y + r[2].z * s2[2].z + r[3].z * s2[2].w, r[0].w * s2[2].x + r[1].w * s2[2].y + r[2].w * s2[2].z + r[3].w * s2[2].w, r[0].x * s2[3].x + r[1].x * s2[3].y + r[2].x * s2[3].z + r[3].x * s2[3].w, r[0].y * s2[3].x + r[1].y * s2[3].y + r[2].y * s2[3].z + r[3].y * s2[3].w, r[0].z * s2[3].x + r[1].z * s2[3].y + r[2].z * s2[3].z + r[3].z * s2[3].w, r[0].w * s2[3].x + r[1].w * s2[3].y + r[2].w * s2[3].z + r[3].w * s2[3].w);
} }, mulMxV: { mat2x2f: (e27, t12) => {
  let r = e27.columns;
  return z(r[0].x * t12.x + r[1].x * t12.y, r[0].y * t12.x + r[1].y * t12.y);
}, mat3x3f: (e27, t12) => {
  let r = e27.columns;
  return h(r[0].x * t12.x + r[1].x * t12.y + r[2].x * t12.z, r[0].y * t12.x + r[1].y * t12.y + r[2].y * t12.z, r[0].z * t12.x + r[1].z * t12.y + r[2].z * t12.z);
}, mat4x4f: (e27, t12) => {
  let r = e27.columns;
  return S$1(r[0].x * t12.x + r[1].x * t12.y + r[2].x * t12.z + r[3].x * t12.w, r[0].y * t12.x + r[1].y * t12.y + r[2].y * t12.z + r[3].y * t12.w, r[0].z * t12.x + r[1].z * t12.y + r[2].z * t12.z + r[3].z * t12.w, r[0].w * t12.x + r[1].w * t12.y + r[2].w * t12.z + r[3].w * t12.w);
} }, mulVxM: { mat2x2f: (e27, t12) => {
  let r = t12.columns;
  return z(e27.x * r[0].x + e27.y * r[0].y, e27.x * r[1].x + e27.y * r[1].y);
}, mat3x3f: (e27, t12) => {
  let r = t12.columns;
  return h(e27.x * r[0].x + e27.y * r[0].y + e27.z * r[0].z, e27.x * r[1].x + e27.y * r[1].y + e27.z * r[1].z, e27.x * r[2].x + e27.y * r[2].y + e27.z * r[2].z);
}, mat4x4f: (e27, t12) => {
  let r = t12.columns;
  return S$1(e27.x * r[0].x + e27.y * r[0].y + e27.z * r[0].z + e27.w * r[0].w, e27.x * r[1].x + e27.y * r[1].y + e27.z * r[1].z + e27.w * r[1].w, e27.x * r[2].x + e27.y * r[2].y + e27.z * r[2].z + e27.w * r[2].w, e27.x * r[3].x + e27.y * r[3].y + e27.z * r[3].z + e27.w * r[3].w);
} }, div: { vec2f: k((e27, t12) => e27 / t12), vec2h: N$1((e27, t12) => e27 / t12), vec2i: ee$1(K), vec2u: te$1(K), vec3f: $$1((e27, t12) => e27 / t12), vec3h: O$1((e27, t12) => e27 / t12), vec3i: re$2(K), vec3u: se$1(K), vec4f: V((e27, t12) => e27 / t12), vec4h: L((e27, t12) => e27 / t12), vec4i: ne$1(K), vec4u: ae$1(K) }, dot: { vec2f: be$2, vec2h: be$2, vec2i: be$2, vec2u: be$2, vec3f: Me$1, vec3h: Me$1, vec3i: Me$1, vec3u: Me$1, vec4f: ze$1, vec4h: ze$1, vec4i: ze$1, vec4u: ze$1 }, normalize: { vec2f: (e27) => {
  let t12 = Z$2(e27);
  return z(e27.x / t12, e27.y / t12);
}, vec2h: (e27) => {
  let t12 = Z$2(e27);
  return I$2(e27.x / t12, e27.y / t12);
}, vec2i: (e27) => {
  let t12 = Z$2(e27);
  return ue$2(e27.x / t12, e27.y / t12);
}, vec2u: (e27) => {
  let t12 = Z$2(e27);
  return Te$1(e27.x / t12, e27.y / t12);
}, vec3f: (e27) => {
  let t12 = X$3(e27);
  return h(e27.x / t12, e27.y / t12, e27.z / t12);
}, vec3h: (e27) => {
  let t12 = X$3(e27);
  return F$1(e27.x / t12, e27.y / t12, e27.z / t12);
}, vec3i: (e27) => {
  let t12 = X$3(e27);
  return ce$1(e27.x / t12, e27.y / t12, e27.z / t12);
}, vec3u: (e27) => {
  let t12 = X$3(e27);
  return de$1(e27.x / t12, e27.y / t12, e27.z / t12);
}, vec4f: (e27) => {
  let t12 = Y$1(e27);
  return S$1(e27.x / t12, e27.y / t12, e27.z / t12, e27.w / t12);
}, vec4h: (e27) => {
  let t12 = Y$1(e27);
  return P(e27.x / t12, e27.y / t12, e27.z / t12, e27.w / t12);
}, vec4i: (e27) => {
  let t12 = Y$1(e27);
  return oe$1(e27.x / t12, e27.y / t12, e27.z / t12, e27.w / t12);
}, vec4u: (e27) => {
  let t12 = Y$1(e27);
  return pe$1(e27.x / t12, e27.y / t12, e27.z / t12, e27.w / t12);
} }, cross: { vec3f: (e27, t12) => h(e27.y * t12.z - e27.z * t12.y, e27.z * t12.x - e27.x * t12.z, e27.x * t12.y - e27.y * t12.x), vec3h: (e27, t12) => F$1(e27.y * t12.z - e27.z * t12.y, e27.z * t12.x - e27.x * t12.z, e27.x * t12.y - e27.y * t12.x) }, mod: { vec2f: k((e27, t12) => e27 % t12), vec2h: N$1((e27, t12) => e27 % t12), vec2i: ee$1((e27, t12) => e27 % t12), vec2u: te$1((e27, t12) => e27 % t12), vec3f: $$1((e27, t12) => e27 % t12), vec3h: O$1((e27, t12) => e27 % t12), vec3i: re$2((e27, t12) => e27 % t12), vec3u: se$1((e27, t12) => e27 % t12), vec4f: V((e27, t12) => e27 % t12), vec4h: L((e27, t12) => e27 % t12), vec4i: ne$1((e27, t12) => e27 % t12), vec4u: ae$1((e27, t12) => e27 % t12) }, floor: { vec2f: o$1(Math.floor), vec2h: x$1(Math.floor), vec3f: c$1(Math.floor), vec3h: m$1(Math.floor), vec4f: u$1(Math.floor), vec4h: y(Math.floor) }, max: { vec2f: k(Math.max), vec2h: N$1(Math.max), vec2i: ee$1(Math.max), vec2u: te$1(Math.max), vec3f: $$1(Math.max), vec3h: O$1(Math.max), vec3i: re$2(Math.max), vec3u: se$1(Math.max), vec4f: V(Math.max), vec4h: L(Math.max), vec4i: ne$1(Math.max), vec4u: ae$1(Math.max) }, min: { vec2f: k(Math.min), vec2h: N$1(Math.min), vec2i: ee$1(Math.min), vec2u: te$1(Math.min), vec3f: $$1(Math.min), vec3h: O$1(Math.min), vec3i: re$2(Math.min), vec3u: se$1(Math.min), vec4f: V(Math.min), vec4h: L(Math.min), vec4i: ne$1(Math.min), vec4u: ae$1(Math.min) }, pow: { vec2f: (e27, t12) => z(e27.x ** t12.x, e27.y ** t12.y), vec2h: (e27, t12) => I$2(e27.x ** t12.x, e27.y ** t12.y), vec3f: (e27, t12) => h(e27.x ** t12.x, e27.y ** t12.y, e27.z ** t12.z), vec3h: (e27, t12) => F$1(e27.x ** t12.x, e27.y ** t12.y, e27.z ** t12.z), vec4f: (e27, t12) => S$1(e27.x ** t12.x, e27.y ** t12.y, e27.z ** t12.z, e27.w ** t12.w), vec4h: (e27, t12) => P(e27.x ** t12.x, e27.y ** t12.y, e27.z ** t12.z, e27.w ** t12.w) }, sign: { vec2f: o$1(Math.sign), vec2h: x$1(Math.sign), vec2i: H(Math.sign), vec3f: c$1(Math.sign), vec3h: m$1(Math.sign), vec3i: J$2(Math.sign), vec4f: u$1(Math.sign), vec4h: y(Math.sign), vec4i: Q(Math.sign) }, sqrt: { vec2f: o$1(Math.sqrt), vec2h: x$1(Math.sqrt), vec3f: c$1(Math.sqrt), vec3h: m$1(Math.sqrt), vec4f: u$1(Math.sqrt), vec4h: y(Math.sqrt) }, mix: { vec2f: (e27, t12, r) => typeof r == "number" ? z(e27.x * (1 - r) + t12.x * r, e27.y * (1 - r) + t12.y * r) : z(e27.x * (1 - r.x) + t12.x * r.x, e27.y * (1 - r.y) + t12.y * r.y), vec2h: (e27, t12, r) => typeof r == "number" ? I$2(e27.x * (1 - r) + t12.x * r, e27.y * (1 - r) + t12.y * r) : I$2(e27.x * (1 - r.x) + t12.x * r.x, e27.y * (1 - r.y) + t12.y * r.y), vec3f: (e27, t12, r) => typeof r == "number" ? h(e27.x * (1 - r) + t12.x * r, e27.y * (1 - r) + t12.y * r, e27.z * (1 - r) + t12.z * r) : h(e27.x * (1 - r.x) + t12.x * r.x, e27.y * (1 - r.y) + t12.y * r.y, e27.z * (1 - r.z) + t12.z * r.z), vec3h: (e27, t12, r) => typeof r == "number" ? F$1(e27.x * (1 - r) + t12.x * r, e27.y * (1 - r) + t12.y * r, e27.z * (1 - r) + t12.z * r) : F$1(e27.x * (1 - r.x) + t12.x * r.x, e27.y * (1 - r.y) + t12.y * r.y, e27.z * (1 - r.z) + t12.z * r.z), vec4f: (e27, t12, r) => typeof r == "number" ? S$1(e27.x * (1 - r) + t12.x * r, e27.y * (1 - r) + t12.y * r, e27.z * (1 - r) + t12.z * r, e27.w * (1 - r) + t12.w * r) : S$1(e27.x * (1 - r.x) + t12.x * r.x, e27.y * (1 - r.y) + t12.y * r.y, e27.z * (1 - r.z) + t12.z * r.z, e27.w * (1 - r.w) + t12.w * r.w), vec4h: (e27, t12, r) => typeof r == "number" ? P(e27.x * (1 - r) + t12.x * r, e27.y * (1 - r) + t12.y * r, e27.z * (1 - r) + t12.z * r, e27.w * (1 - r) + t12.w * r) : P(e27.x * (1 - r.x) + t12.x * r.x, e27.y * (1 - r.y) + t12.y * r.y, e27.z * (1 - r.z) + t12.z * r.z, e27.w * (1 - r.w) + t12.w * r.w) }, sin: { vec2f: o$1(Math.sin), vec2h: x$1(Math.sin), vec3f: c$1(Math.sin), vec3h: m$1(Math.sin), vec4f: u$1(Math.sin), vec4h: y(Math.sin) }, cos: { vec2f: o$1(Math.cos), vec2h: x$1(Math.cos), vec3f: c$1(Math.cos), vec3h: m$1(Math.cos), vec4f: u$1(Math.cos), vec4h: y(Math.cos) }, cosh: { vec2f: o$1(Math.cosh), vec2h: x$1(Math.cosh), vec3f: c$1(Math.cosh), vec3h: m$1(Math.cosh), vec4f: u$1(Math.cosh), vec4h: y(Math.cosh) }, exp: { vec2f: o$1(Math.exp), vec2h: x$1(Math.exp), vec3f: c$1(Math.exp), vec3h: m$1(Math.exp), vec4f: u$1(Math.exp), vec4h: y(Math.exp) }, exp2: { vec2f: o$1((e27) => 2 ** e27), vec2h: x$1((e27) => 2 ** e27), vec3f: c$1((e27) => 2 ** e27), vec3h: m$1((e27) => 2 ** e27), vec4f: u$1((e27) => 2 ** e27), vec4h: y((e27) => 2 ** e27) }, log: { vec2f: o$1(Math.log), vec2h: x$1(Math.log), vec3f: c$1(Math.log), vec3h: m$1(Math.log), vec4f: u$1(Math.log), vec4h: y(Math.log) }, log2: { vec2f: o$1(Math.log2), vec2h: x$1(Math.log2), vec3f: c$1(Math.log2), vec3h: m$1(Math.log2), vec4f: u$1(Math.log2), vec4h: y(Math.log2) }, fract: { vec2f: o$1((e27) => e27 - Math.floor(e27)), vec2h: x$1((e27) => e27 - Math.floor(e27)), vec3f: c$1((e27) => e27 - Math.floor(e27)), vec3h: m$1((e27) => e27 - Math.floor(e27)), vec4f: u$1((e27) => e27 - Math.floor(e27)), vec4h: y((e27) => e27 - Math.floor(e27)) }, isCloseToZero: { vec2f: (e27, t12) => Math.abs(e27.x) <= t12 && Math.abs(e27.y) <= t12, vec2h: (e27, t12) => Math.abs(e27.x) <= t12 && Math.abs(e27.y) <= t12, vec3f: (e27, t12) => Math.abs(e27.x) <= t12 && Math.abs(e27.y) <= t12 && Math.abs(e27.z) <= t12, vec3h: (e27, t12) => Math.abs(e27.x) <= t12 && Math.abs(e27.y) <= t12 && Math.abs(e27.z) <= t12, vec4f: (e27, t12) => Math.abs(e27.x) <= t12 && Math.abs(e27.y) <= t12 && Math.abs(e27.z) <= t12 && Math.abs(e27.w) <= t12, vec4h: (e27, t12) => Math.abs(e27.x) <= t12 && Math.abs(e27.y) <= t12 && Math.abs(e27.z) <= t12 && Math.abs(e27.w) <= t12 }, neg: { vec2f: o$1((e27) => -e27), vec2h: x$1((e27) => -e27), vec2i: H((e27) => -e27), vec2u: me$2((e27) => -e27), "vec2<bool>": (e27) => w(!e27.x, !e27.y), vec3f: c$1((e27) => -e27), vec3h: m$1((e27) => -e27), vec3i: J$2((e27) => -e27), vec3u: ye$2((e27) => -e27), "vec3<bool>": (e27) => b(!e27.x, !e27.y, !e27.z), vec4f: u$1((e27) => -e27), vec4h: y((e27) => -e27), vec4i: Q((e27) => -e27), vec4u: ie$1((e27) => -e27), "vec4<bool>": (e27) => M(!e27.x, !e27.y, !e27.z, !e27.w) }, select: { vec2f: (e27, t12, r) => z(r.x ? t12.x : e27.x, r.y ? t12.y : e27.y), vec2h: (e27, t12, r) => I$2(r.x ? t12.x : e27.x, r.y ? t12.y : e27.y), vec2i: (e27, t12, r) => ue$2(r.x ? t12.x : e27.x, r.y ? t12.y : e27.y), vec2u: (e27, t12, r) => Te$1(r.x ? t12.x : e27.x, r.y ? t12.y : e27.y), "vec2<bool>": (e27, t12, r) => w(r.x ? t12.x : e27.x, r.y ? t12.y : e27.y), vec3f: (e27, t12, r) => h(r.x ? t12.x : e27.x, r.y ? t12.y : e27.y, r.z ? t12.z : e27.z), vec3h: (e27, t12, r) => F$1(r.x ? t12.x : e27.x, r.y ? t12.y : e27.y, r.z ? t12.z : e27.z), vec3i: (e27, t12, r) => ce$1(r.x ? t12.x : e27.x, r.y ? t12.y : e27.y, r.z ? t12.z : e27.z), vec3u: (e27, t12, r) => de$1(r.x ? t12.x : e27.x, r.y ? t12.y : e27.y, r.z ? t12.z : e27.z), "vec3<bool>": (e27, t12, r) => b(r.x ? t12.x : e27.x, r.y ? t12.y : e27.y, r.z ? t12.z : e27.z), vec4f: (e27, t12, r) => S$1(r.x ? t12.x : e27.x, r.y ? t12.y : e27.y, r.z ? t12.z : e27.z, r.w ? t12.w : e27.w), vec4h: (e27, t12, r) => P(r.x ? t12.x : e27.x, r.y ? t12.y : e27.y, r.z ? t12.z : e27.z, r.w ? t12.w : e27.w), vec4i: (e27, t12, r) => oe$1(r.x ? t12.x : e27.x, r.y ? t12.y : e27.y, r.z ? t12.z : e27.z, r.w ? t12.w : e27.w), vec4u: (e27, t12, r) => pe$1(r.x ? t12.x : e27.x, r.y ? t12.y : e27.y, r.z ? t12.z : e27.z, r.w ? t12.w : e27.w), "vec4<bool>": (e27, t12, r) => M(r.x ? t12.x : e27.x, r.y ? t12.y : e27.y, r.z ? t12.z : e27.z, r.w ? t12.w : e27.w) }, tanh: { vec2f: o$1(Math.tanh), vec2h: x$1(Math.tanh), vec3f: c$1(Math.tanh), vec3h: m$1(Math.tanh), vec4f: u$1(Math.tanh), vec4h: y(Math.tanh) }, bitcastU32toF32: { vec2u: (e27) => z(A2(e27.x), A2(e27.y)), vec3u: (e27) => h(A2(e27.x), A2(e27.y), A2(e27.z)), vec4u: (e27) => S$1(A2(e27.x), A2(e27.y), A2(e27.z), A2(e27.w)) }, bitcastU32toI32: { vec2u: (e27) => ue$2(W2(e27.x), W2(e27.y)), vec3u: (e27) => ce$1(W2(e27.x), W2(e27.y), W2(e27.z)), vec4u: (e27) => oe$1(W2(e27.x), W2(e27.y), W2(e27.z), W2(e27.w)) } };
function et$2(e27, t12) {
  if (typeof e27 == "number" && typeof t12 == "number") return e27 + t12;
  if (typeof e27 == "number" && ie$2(t12)) return d$1.addMixed[t12.kind](t12, e27);
  if (ie$2(e27) && typeof t12 == "number") return d$1.addMixed[e27.kind](e27, t12);
  if (ie$2(e27) && ie$2(t12) || me$4(e27) && me$4(t12)) return d$1.add[e27.kind](e27, t12);
  throw new Error("Add/Sub called with invalid arguments.");
}
var ar$3 = k$1({ name: "add", signature: (...e27) => {
  let t12 = yi$1(e27) ?? e27;
  return { argTypes: t12, returnType: Me$2(t12[0]) ? t12[1] : t12[0] };
}, normalImpl: et$2, codegenImpl: (e27, t12) => p$1`(${e27} + ${t12})` });
function wt$2(e27, t12) {
  return et$2(e27, tt$2(-1, t12));
}
var ur$3 = k$1({ name: "sub", signature: (...e27) => {
  let t12 = yi$1(e27) ?? e27;
  return { argTypes: t12, returnType: Me$2(t12[0]) ? t12[1] : t12[0] };
}, normalImpl: wt$2, codegenImpl: (e27, t12) => p$1`(${e27} - ${t12})` });
function tt$2(e27, t12) {
  if (typeof e27 == "number" && typeof t12 == "number") return e27 * t12;
  if (typeof e27 == "number" && (ie$2(t12) || me$4(t12))) return d$1.mulSxV[t12.kind](e27, t12);
  if ((ie$2(e27) || me$4(e27)) && typeof t12 == "number") return d$1.mulSxV[e27.kind](t12, e27);
  if (ie$2(e27) && ie$2(t12)) return d$1.mulVxV[e27.kind](e27, t12);
  if (_n$1(e27) && me$4(t12)) return d$1.mulVxM[t12.kind](e27, t12);
  if (me$4(e27) && _n$1(t12)) return d$1.mulMxV[e27.kind](e27, t12);
  if (me$4(e27) && me$4(t12)) return d$1.mulVxV[e27.kind](e27, t12);
  throw new Error("Mul called with invalid arguments.");
}
var cr$3 = k$1({ name: "mul", signature: (...e27) => {
  let t12 = yi$1(e27) ?? e27, r = Me$2(t12[0]) ? t12[1] : Me$2(t12[1]) || t12[0].type.startsWith("vec") ? t12[0] : t12[1].type.startsWith("vec") ? t12[1] : t12[0];
  return { argTypes: t12, returnType: r };
}, normalImpl: tt$2, codegenImpl: (e27, t12) => p$1`(${e27} * ${t12})` });
function bt$2(e27, t12) {
  if (typeof e27 == "number" && typeof t12 == "number") return e27 / t12;
  if (typeof e27 == "number" && ie$2(t12)) {
    let r = Ri$1[t12.kind][o$2].jsImpl;
    return d$1.div[t12.kind](r(e27), t12);
  }
  if (ie$2(e27) && typeof t12 == "number") {
    let r = Ri$1[e27.kind][o$2].jsImpl;
    return d$1.div[e27.kind](e27, r(t12));
  }
  if (ie$2(e27) && ie$2(t12)) return d$1.div[e27.kind](e27, t12);
  throw new Error("Div called with invalid arguments.");
}
var or$3 = k$1({ name: "div", signature: (...e27) => {
  let t12 = yi$1(e27, [x$2, _$1, De$2]) ?? e27;
  return { argTypes: t12, returnType: Me$2(t12[0]) ? t12[1] : t12[0] };
}, normalImpl: bt$2, codegenImpl: (e27, t12) => p$1`(${e27} / ${t12})`, ignoreImplicitCastWarning: true }), lr$2 = k$1({ name: "mod", signature: (...e27) => {
  let t12 = yi$1(e27) ?? e27;
  return { argTypes: t12, returnType: Me$2(t12[0]) ? t12[1] : t12[0] };
}, normalImpl(e27, t12) {
  if (typeof e27 == "number" && typeof t12 == "number") return e27 % t12;
  if (typeof e27 == "number" && ie$2(t12)) {
    let r = Ri$1[t12.kind];
    return d$1.mod[t12.kind](r(e27), t12);
  }
  if (ie$2(e27) && typeof t12 == "number") {
    let r = Ri$1[e27.kind];
    return d$1.mod[e27.kind](e27, r(t12));
  }
  if (ie$2(e27) && ie$2(t12)) return d$1.mod[e27.kind](e27, t12);
  throw new Error("Mod called with invalid arguments, expected types: number or vector.");
}, codegenImpl: (e27, t12) => p$1`(${e27} % ${t12})` });
function Mt$1(e27) {
  return typeof e27 == "number" ? -e27 : d$1.neg[e27.kind](e27);
}
var xr$2 = k$1({ name: "neg", signature: (e27) => ({ argTypes: [e27], returnType: e27 }), normalImpl: Mt$1, codegenImpl: (e27) => p$1`-(${e27})` });
function Tr$3(e27) {
  if ("multisampled" in e27) {
    if (e27.multisampled) {
      if (e27.dimension === "2d") return _t$1(e27.sampleType);
      throw new Error(`Multisampled textures only support '2d' dimension, got '${e27.dimension}'`);
    }
    switch (e27.dimension) {
      case "1d":
        return zt$1(e27.sampleType);
      case "2d":
        return St$1(e27.sampleType);
      case "2d-array":
        return Vt$1(e27.sampleType);
      case "3d":
        return Ft$2(e27.sampleType);
      case "cube":
        return At(e27.sampleType);
      case "cube-array":
        return Wt$1(e27.sampleType);
      default:
        throw new Error(`Unsupported texture dimension: '${e27.dimension}'`);
    }
  }
  if (!("access" in e27)) throw new Error("Descriptor is neither a sampled nor a storage texture");
  switch (e27.dimension) {
    case "1d":
      return $t$1(e27.format, e27.access);
    case "2d":
      return Ct(e27.format, e27.access);
    case "2d-array":
      return kt$1(e27.format, e27.access);
    case "3d":
      return It$1(e27.format, e27.access);
    default:
      throw new Error(`Unsupported storage texture dimension: '${e27.dimension}'`);
  }
}
function _(e27, t12) {
  let s2 = e27.startsWith("texture_depth") ? ["depth", "float", "unfilterable-float"] : t12.sampleType.type === "i32" ? ["sint"] : t12.sampleType.type === "u32" ? ["uint"] : ["float", "unfilterable-float"];
  return { [o$2]: true, [Ne$1]: void 0, type: e27, bindingSampleType: s2, ...t12 };
}
function Se$2(e27, t12) {
  return { [o$2]: true, [Ne$1]: void 0, type: e27, ...t12 };
}
var rt$2 = /* @__PURE__ */ new Map(), _e$1 = { "write-only": "write", "read-only": "read", "read-write": "read_write" };
function p(e27, t12) {
  let r = rt$2.get(e27);
  return r || (r = t12(), rt$2.set(e27, r)), r;
}
function zt$1(e27) {
  let t12 = e27 || x$2, r = `texture_1d<${t12.type}>`;
  return p(r, () => _("texture_1d", { dimension: "1d", sampleType: t12, multisampled: false }));
}
function St$1(e27) {
  let t12 = e27 || x$2, r = `texture_2d<${t12.type}>`;
  return p(r, () => _("texture_2d", { dimension: "2d", sampleType: t12, multisampled: false }));
}
function _t$1(e27) {
  let t12 = e27 || x$2, r = `texture_multisampled_2d<${t12.type}>`;
  return p(r, () => _("texture_multisampled_2d", { dimension: "2d", sampleType: t12, multisampled: true }));
}
function Vt$1(e27) {
  let t12 = e27 || x$2, r = `texture_2d_array<${t12.type}>`;
  return p(r, () => _("texture_2d_array", { dimension: "2d-array", sampleType: t12, multisampled: false }));
}
function At(e27) {
  let t12 = e27 || x$2, r = `texture_cube<${t12.type}>`;
  return p(r, () => _("texture_cube", { dimension: "cube", sampleType: t12, multisampled: false }));
}
function Wt$1(e27) {
  let t12 = e27 || x$2, r = `texture_cube_array<${t12.type}>`;
  return p(r, () => _("texture_cube_array", { dimension: "cube-array", sampleType: t12, multisampled: false }));
}
function Ft$2(e27) {
  let t12 = e27 || x$2, r = `texture_3d<${t12.type}>`;
  return p(r, () => _("texture_3d", { dimension: "3d", sampleType: t12, multisampled: false }));
}
function $t$1(e27, t12) {
  let r = t12 || "write-only", s2 = `texture_storage_1d<${e27}, ${_e$1[r]}>`;
  return p(s2, () => Se$2("texture_storage_1d", { dimension: "1d", format: e27, access: r }));
}
function Ct(e27, t12) {
  let r = t12 || "write-only", s2 = `texture_storage_2d<${e27}, ${_e$1[r]}>`;
  return p(s2, () => Se$2("texture_storage_2d", { dimension: "2d", format: e27, access: r }));
}
function kt$1(e27, t12) {
  let r = t12 || "write-only", s2 = `texture_storage_2d_array<${e27}, ${_e$1[r]}>`;
  return p(s2, () => Se$2("texture_storage_2d_array", { dimension: "2d-array", format: e27, access: r }));
}
function It$1(e27, t12) {
  let r = t12 || "write-only", s2 = `texture_storage_3d<${e27}, ${_e$1[r]}>`;
  return p(s2, () => Se$2("texture_storage_3d", { dimension: "3d", format: e27, access: r }));
}
function dr$3() {
  return p("texture_depth_2d", () => _("texture_depth_2d", { dimension: "2d", sampleType: x$2, multisampled: false }));
}
function pr$2() {
  return p("texture_depth_multisampled_2d", () => _("texture_depth_multisampled_2d", { dimension: "2d", sampleType: x$2, multisampled: true }));
}
function gr$2() {
  return p("texture_depth_2d_array", () => _("texture_depth_2d_array", { dimension: "2d-array", sampleType: x$2, multisampled: false }));
}
function vr$2() {
  return p("texture_depth_cube", () => _("texture_depth_cube", { dimension: "cube", sampleType: x$2, multisampled: false }));
}
function fr$2() {
  return p("texture_depth_cube_array", () => _("texture_depth_cube_array", { dimension: "cube-array", sampleType: x$2, multisampled: false }));
}
function hr$2() {
  return p("texture_external", () => ({ [o$2]: true, [Ne$1]: void 0, type: "texture_external", dimension: "2d" }));
}
function wr$2(e27) {
  return !!e27[o$2] && typeof e27.multisampled == "boolean";
}
function br$2(e27) {
  return !!e27[o$2] && typeof e27.format == "string" && typeof e27.access == "string";
}
var Y = ["vec2f", "vec3f", "vec4f", "vec2h", "vec3h", "vec4h", "vec2i", "vec3i", "vec4i", "vec2u", "vec3u", "vec4u", "mat2x2f", "mat3x3f", "mat4x4f"], X$2 = { add: ar$3, sub: ur$3, mul: cr$3, div: or$3 }, Z$1 = { f: { 1: x$2, 2: F$3, 3: ke$2, 4: v$1 }, h: { 1: _$1, 2: nn$2, 3: sn$1, 4: an$1 }, i: { 1: f$1, 2: pe$3, 3: Fe$2, 4: he$1 }, u: { 1: T$2, 2: le$3, 3: Pe$2, 4: xe$4 }, b: { 1: V$1, 2: rn$1, 3: on$1, 4: un$1 } };
function N2(e27, r) {
  if (Y.includes(e27.dataType.type) && r in X$2) return y$2(new Ye$1(r, e27, X$2[r][o$2].gpuImpl), ae$3, e27.origin);
  if (In$2(e27.dataType) && r === "length") return e27.dataType.elementCount === 0 ? y$2(p$1`arrayLength(&${e27})`, T$2, "runtime") : y$2(e27.dataType.elementCount, gt$3, "constant");
  if (_e$2(e27.dataType) && r === "columns") return y$2(new He$2(e27), ae$3, e27.origin);
  if (An$1(e27.dataType) || Hn$1(e27.dataType)) {
    let n2 = e27.dataType.propTypes[r];
    return n2 ? (n2 = I$4(n2), y$2(p$1`${e27}.${r}`, n2, e27.origin === "argument" ? "argument" : !lr$3(e27) && !Oe$1(n2) ? e27.origin : e27.origin === "constant" || e27.origin === "constant-tgpu-const-ref" ? "constant" : "runtime")) : void 0;
  }
  if (Ee$2(e27.dataType)) {
    let n2 = xt$2(e27);
    return r === "$" ? n2 : N2(n2, r);
  }
  if (se$2(e27.dataType) && r === "kind") return y$2(e27.dataType.type, ae$3, "constant");
  let i2 = r.length;
  if (se$2(e27.dataType) && i2 >= 1 && i2 <= 4) {
    let n2 = e27.dataType.type.includes("bool") ? "b" : e27.dataType.type[4], u2 = Z$1[n2][i2];
    return u2 ? y$2(ye$4(e27) ? e27.value[r] : p$1`${e27}.${r}`, u2, e27.origin === "argument" && i2 === 1 ? "argument" : e27.origin === "constant" || e27.origin === "constant-tgpu-const-ref" ? "constant" : "runtime") : void 0;
  }
  if (ye$4(e27) || e27.dataType.type === "unknown") return vt$2(e27.value[r]);
}
function ue$1() {
  return { [o$2]: true, type: "sampler", [Ne$1]: void 0 };
}
function fe$1() {
  return { [o$2]: true, type: "sampler_comparison", [Ne$1]: void 0 };
}
function ye$1(e27) {
  return !!e27[o$2] && e27.type === "sampler";
}
function Se$1(e27) {
  return !!e27[o$2] && e27.type === "sampler_comparison";
}
function ve$2(e27) {
  return new c(e27);
}
var c = class {
  constructor(r) {
    this.inner = r;
  }
  [o$2] = true;
  type = "atomic";
};
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var main_api_exports = {};
__export(main_api_exports, {
  BufferReader: () => BufferReader,
  BufferWriter: () => BufferWriter,
  MaxValue: () => MaxValue,
  Measurer: () => Measurer,
  UnresolvedReferenceError: () => UnresolvedReferenceError,
  ValidationError: () => ValidationError,
  arrayOf: () => arrayOf,
  bool: () => bool,
  byte: () => byte,
  chars: () => chars,
  concat: () => concat,
  dynamicArrayOf: () => dynamicArrayOf,
  f16: () => f16,
  f32: () => f32,
  f32Array: () => f32Array,
  f64Array: () => f64Array,
  generic: () => generic,
  genericEnum: () => genericEnum,
  i16: () => i16,
  i16Array: () => i16Array,
  i32: () => i32,
  i32Array: () => i32Array,
  i8: () => i8,
  i8Array: () => i8Array,
  keyed: () => keyed,
  object: () => object,
  optional: () => optional,
  string: () => string,
  tupleOf: () => tupleOf,
  u16: () => u16,
  u16Array: () => u16Array,
  u32: () => u32,
  u32Array: () => u32Array,
  u8: () => u8,
  u8Array: () => u8Array,
  u8ClampedArray: () => u8ClampedArray
});
var UnresolvedReferenceError = class _UnresolvedReferenceError extends Error {
  constructor(msg) {
    super(msg);
    Object.setPrototypeOf(this, _UnresolvedReferenceError.prototype);
  }
};
var ValidationError = class _ValidationError extends Error {
  constructor(msg) {
    super(msg);
    Object.setPrototypeOf(this, _ValidationError.prototype);
  }
};
var UnboundedMeasurer = class {
  constructor() {
    __publicField(this, "size", Number.NaN);
    __publicField(this, "unbounded", this);
    __publicField(this, "isUnbounded", true);
  }
  add() {
    return this;
  }
  fork() {
    return this;
  }
};
var unboundedMeasurer = new UnboundedMeasurer();
var Measurer = class _Measurer {
  constructor() {
    __publicField(this, "size", 0);
    __publicField(this, "unbounded", unboundedMeasurer);
    __publicField(this, "isUnbounded", false);
  }
  add(bytes) {
    this.size += bytes;
    return this;
  }
  fork() {
    const forked = new _Measurer();
    forked.size = this.size;
    return forked;
  }
};
var MaxValue = /* @__PURE__ */ Symbol(
  "The biggest (in amount of bytes needed) value a schema can represent"
);
var Schema = class {
  constructor() {
    __publicField(this, "__unwrapped");
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resolveReferences(ctx) {
  }
  seekProperty(_reference, _prop) {
    return null;
  }
};
var Ref = class {
  constructor(key) {
    this.key = key;
  }
};
var SubTypeKey = {
  STRING: "string",
  ENUM: "enum"
};
var ArraySchema = class extends Schema {
  constructor(_unstableElementSchema, length) {
    super();
    this._unstableElementSchema = _unstableElementSchema;
    this.length = length;
    __publicField(this, "elementSchema");
    this.elementSchema = _unstableElementSchema;
  }
  resolveReferences(ctx) {
    this.elementSchema = ctx.resolve(this._unstableElementSchema);
  }
  write(output, values) {
    if (values.length !== this.length) {
      throw new ValidationError(
        `Expected array of length ${this.length}, got ${values.length}`
      );
    }
    for (const value of values) {
      this.elementSchema.write(output, value);
    }
  }
  read(input) {
    const array = [];
    for (let i2 = 0; i2 < this.length; ++i2) {
      array.push(this.elementSchema.read(input));
    }
    return array;
  }
  /**
   * Returns the maximum number of bytes this schema can take up.
   *
   * Returns `NaN` if the schema is unbounded. If you would like to know
   * how many bytes a particular value encoding will take up, use `.measure(value)`.
   *
   * Alias for `.measure(MaxValue).size`
   */
  get maxSize() {
    return this.elementSchema.measure(MaxValue).size * this.length;
  }
  measure(values, measurer = new Measurer()) {
    for (let i2 = 0; i2 < this.length; ++i2) {
      this.elementSchema.measure(
        values === MaxValue ? MaxValue : values[i2],
        measurer
      );
    }
    return measurer;
  }
};
// @__NO_SIDE_EFFECTS__
function arrayOf(elementSchema, length) {
  return new ArraySchema(elementSchema, length);
}
var BoolSchema = class extends Schema {
  constructor() {
    super(...arguments);
    __publicField(this, "maxSize", 1);
  }
  read(input) {
    return input.readBool();
  }
  write(output, value) {
    output.writeBool(value);
  }
  measure(_2, measurer = new Measurer()) {
    return measurer.add(1);
  }
};
var bool = new BoolSchema();
var _StringSchema = class _StringSchema2 extends Schema {
  static get _encoder() {
    if (!_StringSchema2._cachedEncoder) {
      _StringSchema2._cachedEncoder = new TextEncoder();
    }
    return _StringSchema2._cachedEncoder;
  }
  read(input) {
    return input.readString();
  }
  write(output, value) {
    output.writeString(value);
  }
  measure(value, measurer = new Measurer()) {
    if (value === MaxValue) {
      return measurer.unbounded;
    }
    const encoded = _StringSchema2._encoder.encode(value);
    return measurer.add(encoded.byteLength + 1);
  }
};
__publicField(_StringSchema, "_cachedEncoder");
var StringSchema = _StringSchema;
var string = new StringSchema();
var Int8Schema = class extends Schema {
  constructor() {
    super(...arguments);
    __publicField(this, "maxSize", 1);
  }
  read(input) {
    return input.readInt8();
  }
  write(output, value) {
    output.writeInt8(value);
  }
  measure(_2, measurer = new Measurer()) {
    return measurer.add(1);
  }
};
var i8 = new Int8Schema();
var Uint8Schema = class extends Schema {
  constructor() {
    super(...arguments);
    __publicField(this, "maxSize", 1);
  }
  read(input) {
    return input.readUint8();
  }
  write(output, value) {
    output.writeUint8(value);
  }
  measure(_2, measurer = new Measurer()) {
    return measurer.add(1);
  }
};
var u8 = new Uint8Schema();
var byte = u8;
var Int16Schema = class extends Schema {
  constructor() {
    super(...arguments);
    __publicField(this, "maxSize", 2);
  }
  read(input) {
    return input.readInt16();
  }
  write(output, value) {
    output.writeInt16(value);
  }
  measure(_2, measurer = new Measurer()) {
    return measurer.add(2);
  }
};
var i16 = new Int16Schema();
var Uint16Schema = class extends Schema {
  constructor() {
    super(...arguments);
    __publicField(this, "maxSize", 2);
  }
  read(input) {
    return input.readUint16();
  }
  write(output, value) {
    output.writeUint16(value);
  }
  measure(_2, measurer = new Measurer()) {
    return measurer.add(2);
  }
};
var u16 = new Uint16Schema();
var Int32Schema = class extends Schema {
  constructor() {
    super(...arguments);
    __publicField(this, "maxSize", 4);
  }
  read(input) {
    return input.readInt32();
  }
  write(output, value) {
    output.writeInt32(value);
  }
  measure(_2, measurer = new Measurer()) {
    return measurer.add(4);
  }
};
var i32 = new Int32Schema();
var Uint32Schema = class extends Schema {
  constructor() {
    super(...arguments);
    __publicField(this, "maxSize", 4);
  }
  read(input) {
    return input.readUint32();
  }
  write(output, value) {
    output.writeUint32(value);
  }
  measure(_2, measurer = new Measurer()) {
    return measurer.add(4);
  }
};
var u32 = new Uint32Schema();
var Float16Schema = class extends Schema {
  constructor() {
    super(...arguments);
    __publicField(this, "maxSize", 2);
  }
  read(input) {
    return input.readFloat16();
  }
  write(output, value) {
    output.writeFloat16(value);
  }
  measure(_2, measurer = new Measurer()) {
    return measurer.add(2);
  }
};
var f16 = new Float16Schema();
var Float32Schema = class extends Schema {
  constructor() {
    super(...arguments);
    __publicField(this, "maxSize", 4);
  }
  read(input) {
    return input.readFloat32();
  }
  write(output, value) {
    output.writeFloat32(value);
  }
  measure(_2, measurer = new Measurer()) {
    return measurer.add(4);
  }
};
var f32 = new Float32Schema();
var CharsSchema = class extends Schema {
  constructor(length) {
    super();
    this.length = length;
  }
  write(output, value) {
    if (value.length !== this.length) {
      throw new ValidationError(
        `Expected char-string of length ${this.length}, got ${value.length}`
      );
    }
    for (let i2 = 0; i2 < value.length; ++i2) {
      output.writeUint8(value.charCodeAt(i2));
    }
  }
  read(input) {
    let content = "";
    for (let i2 = 0; i2 < this.length; ++i2) {
      content += String.fromCharCode(input.readByte());
    }
    return content;
  }
  measure(_2, measurer = new Measurer()) {
    return measurer.add(this.length);
  }
};
// @__NO_SIDE_EFFECTS__
function chars(length) {
  return new CharsSchema(length);
}
// @__NO_SIDE_EFFECTS__
function exactEntries(record) {
  return Object.entries(record);
}
// @__NO_SIDE_EFFECTS__
function resolveMap(ctx, refs) {
  const props = {};
  for (const [key, ref] of /* @__PURE__ */ exactEntries(refs)) {
    props[key] = ctx.resolve(ref);
  }
  return props;
}
var ObjectSchema = class extends Schema {
  constructor(_properties) {
    super();
    this._properties = _properties;
    __publicField(this, "properties");
    this.properties = _properties;
  }
  resolveReferences(ctx) {
    this.properties = /* @__PURE__ */ resolveMap(ctx, this._properties);
  }
  write(output, value) {
    for (const [key, property] of /* @__PURE__ */ exactEntries(this.properties)) {
      property.write(output, value[key]);
    }
  }
  read(input) {
    const result = {};
    for (const [key, property] of /* @__PURE__ */ exactEntries(this.properties)) {
      result[key] = property.read(input);
    }
    return result;
  }
  /**
   * The maximum number of bytes this schema can take up.
   *
   * Is `NaN` if the schema is unbounded. If you would like to know
   * how many bytes a particular value encoding will take up, use `.measure(value)`.
   *
   * Alias for `.measure(MaxValue).size`
   */
  get maxSize() {
    const measurer = new Measurer();
    for (const property of Object.values(this.properties)) {
      property.measure(MaxValue, measurer);
    }
    return measurer.size;
  }
  measure(value, measurer = new Measurer()) {
    for (const [key, property] of /* @__PURE__ */ exactEntries(this.properties)) {
      property.measure(
        value === MaxValue ? MaxValue : value[key],
        measurer
      );
    }
    return measurer;
  }
  seekProperty(reference, prop) {
    let bufferOffset = 0;
    for (const [key, property] of /* @__PURE__ */ exactEntries(this.properties)) {
      if (key === prop) {
        return {
          bufferOffset,
          schema: property
        };
      }
      bufferOffset += property.measure(reference).size;
    }
    return null;
  }
};
// @__NO_SIDE_EFFECTS__
function object(properties) {
  return new ObjectSchema(properties);
}
var GenericObjectSchema = class extends Schema {
  constructor(keyedBy, properties, _subTypeMap) {
    super();
    this.keyedBy = keyedBy;
    this._subTypeMap = _subTypeMap;
    __publicField(this, "_baseObject");
    __publicField(this, "subTypeMap");
    this._baseObject = new ObjectSchema(properties);
    this.subTypeMap = _subTypeMap;
  }
  resolveReferences(ctx) {
    this._baseObject.resolveReferences(ctx);
    this.subTypeMap = /* @__PURE__ */ resolveMap(ctx, this._subTypeMap);
  }
  write(output, value) {
    const subTypeKey = value.type;
    const subTypeDescription = this.subTypeMap[subTypeKey] || null;
    if (subTypeDescription === null) {
      throw new Error(
        `Unknown sub-type '${subTypeKey.toString()}' in among '${JSON.stringify(
          Object.keys(this.subTypeMap)
        )}'`
      );
    }
    if (this.keyedBy === SubTypeKey.ENUM) {
      output.writeUint8(value.type);
    } else {
      output.writeString(value.type);
    }
    this._baseObject.write(output, value);
    for (const [key, extraProp] of /* @__PURE__ */ exactEntries(
      subTypeDescription.properties
    )) {
      extraProp.write(output, value[key]);
    }
  }
  read(input) {
    const subTypeKey = this.keyedBy === SubTypeKey.ENUM ? input.readByte() : input.readString();
    const subTypeDescription = this.subTypeMap[subTypeKey] || null;
    if (subTypeDescription === null) {
      throw new Error(
        `Unknown sub-type '${subTypeKey}' in among '${JSON.stringify(
          Object.keys(this.subTypeMap)
        )}'`
      );
    }
    const result = this._baseObject.read(input);
    result.type = subTypeKey;
    if (subTypeDescription !== null) {
      for (const [key, extraProp] of /* @__PURE__ */ exactEntries(
        subTypeDescription.properties
      )) {
        result[key] = extraProp.read(input);
      }
    }
    return result;
  }
  measure(value, measurer = new Measurer()) {
    this._baseObject.measure(
      value,
      measurer
    );
    if (this.keyedBy === SubTypeKey.ENUM) {
      measurer.add(1);
    } else if (value !== MaxValue) {
      measurer.add(value.type.length + 1);
    } else {
      return measurer.unbounded;
    }
    if (value === MaxValue) {
      const biggestSubType = Object.values(this.subTypeMap).map((subType) => {
        const forkedMeasurer = measurer.fork();
        for (const prop of Object.values(subType.properties)) {
          prop.measure(MaxValue, forkedMeasurer);
        }
        return [subType, forkedMeasurer.size];
      }).reduce((a2, b2) => a2[1] > b2[1] ? a2 : b2)[0];
      for (const prop of Object.values(biggestSubType.properties)) {
        prop.measure(MaxValue, measurer);
      }
    } else {
      const subTypeKey = value.type;
      const subTypeDescription = this.subTypeMap[subTypeKey] || null;
      if (subTypeDescription === null) {
        throw new Error(
          `Unknown sub-type '${subTypeKey.toString()}', expected one of '${JSON.stringify(
            Object.keys(this.subTypeMap)
          )}'`
        );
      }
      for (const [key, prop] of /* @__PURE__ */ exactEntries(subTypeDescription.properties)) {
        prop.measure(value[key], measurer);
      }
    }
    return measurer;
  }
};
// @__NO_SIDE_EFFECTS__
function generic(properties, subTypeMap) {
  return new GenericObjectSchema(SubTypeKey.STRING, properties, subTypeMap);
}
// @__NO_SIDE_EFFECTS__
function genericEnum(properties, subTypeMap) {
  return new GenericObjectSchema(SubTypeKey.ENUM, properties, subTypeMap);
}
// @__NO_SIDE_EFFECTS__
function concat(objs) {
  return new ObjectSchema(
    Object.fromEntries(
      objs.flatMap(({ properties }) => Object.entries(properties))
    )
  );
}
var DynamicArraySchema = class extends Schema {
  constructor(_unstableElementType) {
    super();
    this._unstableElementType = _unstableElementType;
    __publicField(this, "elementType");
    this.elementType = _unstableElementType;
  }
  resolveReferences(ctx) {
    this.elementType = ctx.resolve(this._unstableElementType);
  }
  write(output, values) {
    output.writeUint32(values.length);
    for (const value of values) {
      this.elementType.write(output, value);
    }
  }
  read(input) {
    const array = [];
    const len = input.readUint32();
    for (let i2 = 0; i2 < len; ++i2) {
      array.push(this.elementType.read(input));
    }
    return array;
  }
  /**
   * The maximum number of bytes this schema can take up.
   *
   * Is `NaN` if the schema is unbounded. If you would like to know
   * how many bytes a particular value encoding will take up, use `.measure(value)`.
   *
   * Alias for `.measure(MaxValue).size`
   */
  get maxSize() {
    return this.measure(MaxValue).size;
  }
  measure(values, measurer = new Measurer()) {
    if (values === MaxValue) {
      return measurer.unbounded;
    }
    measurer.add(4);
    for (const value of values) {
      this.elementType.measure(value, measurer);
    }
    return measurer;
  }
  seekProperty(reference, prop) {
    if (typeof prop === "symbol") {
      return null;
    }
    const indexProp = Number.parseInt(String(prop), 10);
    if (Number.isNaN(indexProp)) {
      return null;
    }
    if (reference === MaxValue) {
      return {
        bufferOffset: this.elementType.measure(MaxValue).size * indexProp,
        schema: this.elementType
      };
    }
    if (indexProp >= reference.length) {
      return null;
    }
    const measurer = new Measurer();
    for (let i2 = 0; i2 < indexProp; ++i2) {
      this.elementType.measure(reference[i2], measurer);
    }
    return {
      bufferOffset: measurer.size,
      schema: this.elementType
    };
  }
};
// @__NO_SIDE_EFFECTS__
function dynamicArrayOf(elementSchema) {
  return new DynamicArraySchema(elementSchema);
}
var RefSchema = class {
  constructor(key) {
    __publicField(this, "__unwrapped");
    __publicField(this, "ref");
    this.ref = new Ref(key);
  }
  resolveReferences() {
    throw new UnresolvedReferenceError(
      "Tried to resolve a reference directly. Do it through a RefResolver instead."
    );
  }
  read() {
    throw new UnresolvedReferenceError(
      "Tried to read a reference directly. Resolve it instead."
    );
  }
  write() {
    throw new UnresolvedReferenceError(
      "Tried to write a reference directly. Resolve it instead."
    );
  }
  measure() {
    throw new UnresolvedReferenceError(
      "Tried to measure size of a reference directly. Resolve it instead."
    );
  }
  seekProperty() {
    throw new UnresolvedReferenceError(
      "Tried to seek property of a reference directly. Resolve it instead."
    );
  }
};
var RefResolve = class {
  constructor() {
    __publicField(this, "registry", {});
  }
  hasKey(key) {
    return this.registry[key] !== void 0;
  }
  register(key, schema) {
    this.registry[key] = schema;
  }
  resolve(unstableSchema) {
    if (unstableSchema instanceof RefSchema) {
      const ref = unstableSchema.ref;
      const key = ref.key;
      if (this.registry[key] !== void 0) {
        return this.registry[key];
      }
      throw new UnresolvedReferenceError(
        `Couldn't resolve reference to ${key}. Unknown key.`
      );
    }
    unstableSchema.resolveReferences(this);
    return unstableSchema;
  }
};
var KeyedSchema = class {
  constructor(key, innerResolver) {
    this.key = key;
    __publicField(this, "__unwrapped");
    __publicField(this, "__keyDefinition");
    __publicField(this, "innerType");
    this.innerType = innerResolver(new RefSchema(key));
    this.resolveReferences(new RefResolve());
  }
  resolveReferences(ctx) {
    if (!ctx.hasKey(this.key)) {
      ctx.register(this.key, this.innerType);
      this.innerType.resolveReferences(ctx);
    }
  }
  read(input) {
    return this.innerType.read(input);
  }
  write(output, value) {
    this.innerType.write(output, value);
  }
  /**
   * The maximum number of bytes this schema can take up.
   *
   * Is `NaN` if the schema is unbounded. If you would like to know
   * how many bytes a particular value encoding will take up, use `.measure(value)`.
   *
   * Alias for `.measure(MaxValue).size`
   */
  get maxSize() {
    return this.measure(MaxValue).size;
  }
  measure(value, measurer = new Measurer()) {
    return this.innerType.measure(value, measurer);
  }
  seekProperty(reference, prop) {
    return this.innerType.seekProperty(reference, prop);
  }
};
// @__NO_SIDE_EFFECTS__
function keyed(key, inner) {
  return new KeyedSchema(key, inner);
}
var OptionalSchema = class extends Schema {
  constructor(_innerUnstableSchema) {
    super();
    this._innerUnstableSchema = _innerUnstableSchema;
    __publicField(this, "innerSchema");
    this.innerSchema = _innerUnstableSchema;
  }
  resolveReferences(ctx) {
    this.innerSchema = ctx.resolve(this._innerUnstableSchema);
  }
  write(output, value) {
    if (value !== void 0 && value !== null) {
      output.writeBool(true);
      this.innerSchema.write(output, value);
    } else {
      output.writeBool(false);
    }
  }
  read(input) {
    const valueExists = input.readBool();
    if (valueExists) {
      return this.innerSchema.read(input);
    }
    return void 0;
  }
  /**
   * The maximum number of bytes this schema can take up.
   *
   * Is `NaN` if the schema is unbounded. If you would like to know
   * how many bytes a particular value encoding will take up, use `.measure(value)`.
   *
   * Alias for `.measure(MaxValue).size`
   */
  get maxSize() {
    return this.measure(MaxValue).size;
  }
  measure(value, measurer = new Measurer()) {
    if (value !== void 0) {
      this.innerSchema.measure(value, measurer);
    }
    return measurer.add(1);
  }
};
// @__NO_SIDE_EFFECTS__
function optional(innerType) {
  return new OptionalSchema(innerType);
}
// @__NO_SIDE_EFFECTS__
function resolveArray(ctx, refs) {
  return refs.map((ref) => ctx.resolve(ref));
}
var TupleSchema = class extends Schema {
  constructor(_unstableSchemas) {
    super();
    this._unstableSchemas = _unstableSchemas;
    __publicField(this, "schemas");
    this.schemas = _unstableSchemas;
  }
  resolveReferences(ctx) {
    this.schemas = /* @__PURE__ */ resolveArray(ctx, this._unstableSchemas);
  }
  write(output, values) {
    if (values.length !== this.schemas.length) {
      throw new ValidationError(
        `Expected tuple of length ${this.schemas.length}, got ${values.length}`
      );
    }
    for (let i2 = 0; i2 < this.schemas.length; ++i2) {
      this.schemas[i2].write(output, values[i2]);
    }
  }
  read(input) {
    const array = [];
    for (let i2 = 0; i2 < this.schemas.length; ++i2) {
      array.push(
        this.schemas[i2].read(input)
      );
    }
    return array;
  }
  /**
   * The maximum number of bytes this schema can take up.
   *
   * Is `NaN` if the schema is unbounded. If you would like to know
   * how many bytes a particular value encoding will take up, use `.measure(value)`.
   *
   * Alias for `.measure(MaxValue).size`
   */
  get maxSize() {
    return this.measure(MaxValue).size;
  }
  measure(values, measurer = new Measurer()) {
    for (let i2 = 0; i2 < this.schemas.length; ++i2) {
      this.schemas[i2].measure(
        values === MaxValue ? MaxValue : values[i2],
        measurer
      );
    }
    return measurer;
  }
};
// @__NO_SIDE_EFFECTS__
function tupleOf(schemas) {
  return new TupleSchema(schemas);
}
var TypedArraySchema = class extends Schema {
  constructor(length, _arrayConstructor) {
    super();
    this.length = length;
    this._arrayConstructor = _arrayConstructor;
    __publicField(this, "byteLength");
    this.byteLength = length * _arrayConstructor.BYTES_PER_ELEMENT;
  }
  write(output, value) {
    output.writeSlice(value);
  }
  read(input) {
    const buffer = new ArrayBuffer(this.byteLength);
    const view = new this._arrayConstructor(buffer, 0, this.length);
    input.readSlice(view, 0, this.byteLength);
    return view;
  }
  measure(_value, measurer = new Measurer()) {
    return measurer.add(this.byteLength);
  }
};
var u8Array = /* @__NO_SIDE_EFFECTS__ */ (length) => new TypedArraySchema(length, Uint8Array);
var u8ClampedArray = /* @__NO_SIDE_EFFECTS__ */ (length) => new TypedArraySchema(length, Uint8ClampedArray);
var u16Array = /* @__NO_SIDE_EFFECTS__ */ (length) => new TypedArraySchema(length, Uint16Array);
var u32Array = /* @__NO_SIDE_EFFECTS__ */ (length) => new TypedArraySchema(length, Uint32Array);
var i8Array = /* @__NO_SIDE_EFFECTS__ */ (length) => new TypedArraySchema(length, Int8Array);
var i16Array = /* @__NO_SIDE_EFFECTS__ */ (length) => new TypedArraySchema(length, Int16Array);
var i32Array = /* @__NO_SIDE_EFFECTS__ */ (length) => new TypedArraySchema(length, Int32Array);
var f32Array = /* @__NO_SIDE_EFFECTS__ */ (length) => new TypedArraySchema(length, Float32Array);
var f64Array = /* @__NO_SIDE_EFFECTS__ */ (length) => new TypedArraySchema(length, Float64Array);
// @__NO_SIDE_EFFECTS__
function isSystemBigEndian() {
  const array = new Uint8Array(4);
  const view = new Uint32Array(array.buffer);
  view[0] = 1;
  return array[0] === 0;
}
// @__NO_SIDE_EFFECTS__
function getSystemEndianness() {
  return /* @__PURE__ */ isSystemBigEndian() ? "big" : "little";
}
// @__NO_SIDE_EFFECTS__
function unwrapBuffer(buffer) {
  let byteOffset = 0;
  let innerBuffer = buffer;
  if (!!innerBuffer && "buffer" in innerBuffer && "byteOffset" in innerBuffer) {
    byteOffset += innerBuffer.byteOffset;
    innerBuffer = innerBuffer.buffer;
  }
  return { buffer: innerBuffer, byteOffset, byteLength: buffer.byteLength };
}
var BufferIOBase = class {
  constructor(buffer, options) {
    __publicField(this, "dataView");
    __publicField(this, "littleEndian");
    __publicField(this, "byteOffset", 0);
    __publicField(this, "endianness");
    const { byteOffset = 0, endianness = "system" } = options != null ? options : {};
    this.byteOffset = byteOffset;
    const systemEndianness = /* @__PURE__ */ getSystemEndianness();
    this.endianness = endianness === "system" ? systemEndianness : endianness;
    this.littleEndian = this.endianness === "little";
    const unwrapped = /* @__PURE__ */ unwrapBuffer(buffer);
    this.byteOffset += unwrapped.byteOffset;
    this.dataView = new DataView(unwrapped.buffer);
  }
  get currentByteOffset() {
    return this.byteOffset;
  }
  seekTo(offset) {
    this.byteOffset = offset;
  }
  skipBytes(bytes) {
    this.byteOffset += bytes;
  }
};
function numberToFloat16(value) {
  if (value === 0) return 0;
  if (Number.isNaN(value)) return 32256;
  if (!Number.isFinite(value)) return value > 0 ? 31744 : 64512;
  const sign = value < 0 ? 1 : 0;
  const absValue = Math.abs(value);
  const exponent = Math.floor(Math.log2(absValue));
  const mantissa = absValue / 2 ** exponent - 1;
  const biasedExponent = exponent + 15;
  const mantissaBits = Math.floor(mantissa * 1024);
  return sign << 15 | biasedExponent << 10 | mantissaBits;
}
function float16ToNumber(uint16Encoding) {
  const sign = (uint16Encoding & 32768) >> 15;
  const exponent = (uint16Encoding & 31744) >> 10;
  const mantissa = uint16Encoding & 1023;
  if (exponent === 0) {
    return sign === 0 ? mantissa / 1024 : -mantissa / 1024;
  }
  if (exponent === 31) {
    return mantissa === 0 ? sign === 0 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY : Number.NaN;
  }
  return (sign === 0 ? 1 : -1) * (1 + mantissa / 1024) * 2 ** (exponent - 15);
}
var BufferReader = class extends BufferIOBase {
  constructor() {
    super(...arguments);
    __publicField(this, "_cachedTextDecoder");
  }
  get _textDecoder() {
    if (!this._cachedTextDecoder) {
      this._cachedTextDecoder = new TextDecoder(void 0, { fatal: true });
    }
    return this._cachedTextDecoder;
  }
  readBool() {
    return this.dataView.getUint8(this.byteOffset++) !== 0;
  }
  readByte() {
    return this.dataView.getUint8(this.byteOffset++);
  }
  readInt8() {
    return this.dataView.getInt8(this.byteOffset++);
  }
  readUint8() {
    return this.dataView.getUint8(this.byteOffset++);
  }
  readInt16() {
    const value = this.dataView.getInt16(this.byteOffset, this.littleEndian);
    this.byteOffset += 2;
    return value;
  }
  readUint16() {
    const value = this.dataView.getUint16(this.byteOffset, this.littleEndian);
    this.byteOffset += 2;
    return value;
  }
  readInt32() {
    const value = this.dataView.getInt32(this.byteOffset, this.littleEndian);
    this.byteOffset += 4;
    return value;
  }
  readUint32() {
    const value = this.dataView.getUint32(this.byteOffset, this.littleEndian);
    this.byteOffset += 4;
    return value;
  }
  readFloat16() {
    const value = this.dataView.getUint16(this.byteOffset, this.littleEndian);
    this.byteOffset += 2;
    return float16ToNumber(value);
  }
  readFloat32() {
    const value = this.dataView.getFloat32(this.byteOffset, this.littleEndian);
    this.byteOffset += 4;
    return value;
  }
  readString() {
    let strLength = 0;
    while (this.byteOffset + strLength < this.dataView.byteLength) {
      if (this.dataView.getUint8(this.byteOffset + strLength++) === 0) {
        break;
      }
    }
    const result = this._textDecoder.decode(
      new Uint8Array(this.dataView.buffer, this.byteOffset, strLength - 1)
    );
    this.byteOffset += strLength;
    return result;
  }
  readSlice(bufferView, offset, byteLength) {
    const unwrapped = /* @__PURE__ */ unwrapBuffer(bufferView);
    const destU8 = new Uint8Array(
      unwrapped.buffer,
      unwrapped.byteOffset + offset
    );
    for (let i2 = 0; i2 < byteLength; ++i2) {
      destU8[i2] = this.dataView.getUint8(this.byteOffset++);
    }
  }
};
var BufferWriter = class extends BufferIOBase {
  constructor() {
    super(...arguments);
    __publicField(this, "_cachedTextEncoder");
  }
  get _textEncoder() {
    if (!this._cachedTextEncoder) {
      this._cachedTextEncoder = new TextEncoder();
    }
    return this._cachedTextEncoder;
  }
  writeBool(value) {
    this.dataView.setUint8(this.byteOffset++, value ? 1 : 0);
  }
  writeByte(value) {
    this.dataView.setUint8(this.byteOffset++, value);
  }
  writeInt8(value) {
    this.dataView.setInt8(this.byteOffset++, value);
  }
  writeUint8(value) {
    this.dataView.setUint8(this.byteOffset++, value);
  }
  writeInt16(value) {
    this.dataView.setInt16(this.byteOffset, value, this.littleEndian);
    this.byteOffset += 2;
  }
  writeUint16(value) {
    this.dataView.setUint16(this.byteOffset, value, this.littleEndian);
    this.byteOffset += 2;
  }
  writeInt32(value) {
    this.dataView.setInt32(this.byteOffset, value, this.littleEndian);
    this.byteOffset += 4;
  }
  writeUint32(value) {
    this.dataView.setUint32(this.byteOffset, value, this.littleEndian);
    this.byteOffset += 4;
  }
  writeFloat16(value) {
    this.dataView.setUint16(
      this.byteOffset,
      numberToFloat16(value),
      this.littleEndian
    );
    this.byteOffset += 2;
  }
  writeFloat32(value) {
    this.dataView.setFloat32(this.byteOffset, value, this.littleEndian);
    this.byteOffset += 4;
  }
  writeString(value) {
    const result = this._textEncoder.encodeInto(
      value,
      new Uint8Array(this.dataView.buffer, this.byteOffset)
    );
    this.byteOffset += result.written;
    this.dataView.setUint8(this.byteOffset++, 0);
  }
  writeSlice(bufferView) {
    const unwrapped = /* @__PURE__ */ unwrapBuffer(bufferView);
    const srcU8 = new Uint8Array(
      unwrapped.buffer,
      unwrapped.byteOffset,
      unwrapped.byteLength
    );
    for (const srcByte of srcU8) {
      this.dataView.setUint8(this.byteOffset++, srcByte);
    }
  }
};
var s = (e27) => ({ argTypes: [e27], returnType: e27 }), E2 = (...e27) => {
  let n2 = yi$1(e27) ?? e27;
  return { argTypes: n2, returnType: n2[0] };
};
function J$1(e27) {
  return (n2, ...o2) => {
    let u2 = n2;
    for (let w2 of o2) u2 = e27(u2, w2);
    return u2;
  };
}
function X$1(e27) {
  return (n2, ...o2) => {
    let u2 = p$1`${n2}`;
    for (let w2 of o2) u2 = p$1`${e27}(${u2}, ${w2})`;
    return u2;
  };
}
function te(e27) {
  return typeof e27 == "number" ? Math.abs(e27) : d$1.abs[e27.kind](e27);
}
var fn$1 = k$1({ name: "abs", signature: s, normalImpl: te, codegenImpl: (e27) => p$1`abs(${e27})` });
function re$1(e27) {
  return typeof e27 == "number" ? Math.acos(e27) : d$1.acos[e27.kind](e27);
}
var dn$1 = k$1({ name: "acos", signature: s, normalImpl: re$1, codegenImpl: (e27) => p$1`acos(${e27})` });
function oe(e27) {
  return typeof e27 == "number" ? Math.acosh(e27) : d$1.acosh[e27.kind](e27);
}
var yn$1 = k$1({ name: "acosh", signature: s, normalImpl: oe, codegenImpl: (e27) => p$1`acosh(${e27})` });
function ae(e27) {
  return typeof e27 == "number" ? Math.asin(e27) : d$1.asin[e27.kind](e27);
}
var bn$1 = k$1({ name: "asin", signature: s, normalImpl: ae, codegenImpl: (e27) => p$1`asin(${e27})` });
function se(e27) {
  return typeof e27 == "number" ? Math.asinh(e27) : d$1.asinh[e27.kind](e27);
}
var gn$1 = k$1({ name: "asinh", signature: s, normalImpl: se, codegenImpl: (e27) => p$1`asinh(${e27})` });
function ue(e27) {
  return typeof e27 == "number" ? Math.atan(e27) : d$1.atan[e27.kind](e27);
}
var In$1 = k$1({ name: "atan", signature: s, normalImpl: ue, codegenImpl: (e27) => p$1`atan(${e27})` });
function ce2(e27) {
  return typeof e27 == "number" ? Math.atanh(e27) : d$1.atanh[e27.kind](e27);
}
var xn$1 = k$1({ name: "atanh", signature: s, normalImpl: ce2, codegenImpl: (e27) => p$1`atanh(${e27})` });
function ie(e27, n2) {
  return typeof e27 == "number" && typeof n2 == "number" ? Math.atan2(e27, n2) : d$1.atan2[e27.kind](e27, n2);
}
var hn$1 = k$1({ name: "atan2", signature: (...e27) => {
  let n2 = yi$1(e27, [x$2, _$1, De$2]) ?? e27;
  return { argTypes: n2, returnType: n2[0] };
}, normalImpl: ie, codegenImpl: (e27, n2) => p$1`atan2(${e27}, ${n2})` });
function pe(e27) {
  return typeof e27 == "number" ? Math.ceil(e27) : d$1.ceil[e27.kind](e27);
}
var An = k$1({ name: "ceil", signature: s, normalImpl: pe, codegenImpl: (e27) => p$1`ceil(${e27})` });
function me$1(e27, n2, o2) {
  return typeof e27 == "number" ? Math.min(Math.max(n2, e27), o2) : d$1.clamp[e27.kind](e27, n2, o2);
}
var vn$1 = k$1({ name: "clamp", signature: E2, normalImpl: me$1, codegenImpl: (e27, n2, o2) => p$1`clamp(${e27}, ${n2}, ${o2})` });
function le$1(e27) {
  return typeof e27 == "number" ? Math.cos(e27) : d$1.cos[e27.kind](e27);
}
var Vn = k$1({ name: "cos", signature: s, normalImpl: le$1, codegenImpl: (e27) => p$1`cos(${e27})` });
function Te2(e27) {
  return typeof e27 == "number" ? Math.cosh(e27) : d$1.cosh[e27.kind](e27);
}
var Fn = k$1({ name: "cosh", signature: s, normalImpl: Te2, codegenImpl: (e27) => p$1`cosh(${e27})` });
var wn$1 = k$1({ name: "countLeadingZeros", signature: s, normalImpl: "CPU implementation for countLeadingZeros not implemented yet. Please submit an issue at https://github.com/software-mansion/TypeGPU/issues", codegenImpl: (e27) => p$1`countLeadingZeros(${e27})` });
var $n$1 = k$1({ name: "countOneBits", signature: s, normalImpl: "CPU implementation for countOneBits not implemented yet. Please submit an issue at https://github.com/software-mansion/TypeGPU/issues", codegenImpl: (e27) => p$1`countOneBits(${e27})` });
var Pn = k$1({ name: "countTrailingZeros", signature: s, normalImpl: "CPU implementation for countTrailingZeros not implemented yet. Please submit an issue at https://github.com/software-mansion/TypeGPU/issues", codegenImpl: (e27) => p$1`countTrailingZeros(${e27})` }), Un$1 = k$1({ name: "cross", signature: (...e27) => ({ argTypes: e27, returnType: e27[0] }), normalImpl: (e27, n2) => d$1.cross[e27.kind](e27, n2), codegenImpl: (e27, n2) => p$1`cross(${e27}, ${n2})` });
function fe(e27) {
  if (typeof e27 == "number") return e27 * 180 / Math.PI;
  throw new ze$3("CPU implementation for degrees on vectors not implemented yet. Please submit an issue at https://github.com/software-mansion/TypeGPU/issues");
}
var Bn = k$1({ name: "degrees", signature: s, normalImpl: fe, codegenImpl: (e27) => p$1`degrees(${e27})` }), Sn$1 = k$1({ name: "determinant", signature: s, normalImpl: "CPU implementation for determinant not implemented yet. Please submit an issue at https://github.com/software-mansion/TypeGPU/issues", codegenImpl: (e27) => p$1`determinant(${e27})` });
function de(e27, n2) {
  return typeof e27 == "number" && typeof n2 == "number" ? Math.abs(e27 - n2) : Fe2(ur$3(e27, n2));
}
var Cn = k$1({ name: "distance", signature: (...e27) => ({ argTypes: e27, returnType: Rn$1(e27[0]) ? _$1 : x$2 }), normalImpl: de, codegenImpl: (e27, n2) => p$1`distance(${e27}, ${n2})` }), ye = k$1({ name: "dot", signature: (...e27) => ({ argTypes: e27, returnType: e27[0].primitive }), normalImpl: (e27, n2) => d$1.dot[e27.kind](e27, n2), codegenImpl: (e27, n2) => p$1`dot(${e27}, ${n2})` }), kn = k$1({ name: "dot4U8Packed", signature: { argTypes: [T$2, T$2], returnType: T$2 }, normalImpl: "CPU implementation for dot4U8Packed not implemented yet. Please submit an issue at https://github.com/software-mansion/TypeGPU/issues", codegenImpl: (e27, n2) => p$1`dot4U8Packed(${e27}, ${n2})` }), Mn = k$1({ name: "dot4I8Packed", signature: { argTypes: [T$2, T$2], returnType: f$1 }, normalImpl: "CPU implementation for dot4I8Packed not implemented yet. Please submit an issue at https://github.com/software-mansion/TypeGPU/issues", codegenImpl: (e27, n2) => p$1`dot4I8Packed(${e27}, ${n2})` });
function be$1(e27) {
  return typeof e27 == "number" ? Math.exp(e27) : d$1.exp[e27.kind](e27);
}
var En = k$1({ name: "exp", signature: s, normalImpl: be$1, codegenImpl: (e27) => p$1`exp(${e27})` });
function ge(e27) {
  return typeof e27 == "number" ? 2 ** e27 : d$1.exp2[e27.kind](e27);
}
var Gn = k$1({ name: "exp2", signature: s, normalImpl: ge, codegenImpl: (e27) => p$1`exp2(${e27})` });
var Ln = k$1({ name: "extractBits", signature: (e27, n2, o2) => ({ argTypes: [e27, T$2, T$2], returnType: e27 }), normalImpl: "CPU implementation for extractBits not implemented yet. Please submit an issue at https://github.com/software-mansion/TypeGPU/issues", codegenImpl: (e27, n2, o2) => p$1`extractBits(${e27}, ${n2}, ${o2})` }), Nn = k$1({ name: "faceForward", signature: (...e27) => ({ argTypes: e27, returnType: e27[0] }), normalImpl: "CPU implementation for faceForward not implemented yet. Please submit an issue at https://github.com/software-mansion/TypeGPU/issues", codegenImpl: (e27, n2, o2) => p$1`faceForward(${e27}, ${n2}, ${o2})` });
var Rn = k$1({ name: "firstLeadingBit", signature: s, normalImpl: "CPU implementation for firstLeadingBit not implemented yet. Please submit an issue at https://github.com/software-mansion/TypeGPU/issues", codegenImpl: (e27) => p$1`firstLeadingBit(${e27})` });
var Dn$1 = k$1({ name: "firstTrailingBit", signature: s, normalImpl: "CPU implementation for firstTrailingBit not implemented yet. Please submit an issue at https://github.com/software-mansion/TypeGPU/issues", codegenImpl: (e27) => p$1`firstTrailingBit(${e27})` });
function Ie2(e27) {
  return typeof e27 == "number" ? Math.floor(e27) : d$1.floor[e27.kind](e27);
}
var On = k$1({ name: "floor", signature: s, normalImpl: Ie2, codegenImpl: (e27) => p$1`floor(${e27})` });
function xe2(e27, n2, o2) {
  if (typeof e27 == "number") return e27 * n2 + o2;
  throw new ze$3("CPU implementation for fma on vectors not implemented yet. Please submit an issue at https://github.com/software-mansion/TypeGPU/issues");
}
var qn = k$1({ name: "fma", signature: (...e27) => ({ argTypes: e27, returnType: e27[0] }), normalImpl: xe2, codegenImpl: (e27, n2, o2) => p$1`fma(${e27}, ${n2}, ${o2})` });
function he(e27) {
  return typeof e27 == "number" ? e27 - Math.floor(e27) : d$1.fract[e27.kind](e27);
}
var _n = k$1({ name: "fract", signature: s, normalImpl: he, codegenImpl: (e27) => p$1`fract(${e27})` }), Ae$1 = { f32: Xs({ fract: x$2, exp: f$1 }), f16: Xs({ fract: _$1, exp: f$1 }), abstractFloat: Xs({ fract: De$2, exp: gt$3 }), vec2f: Xs({ fract: F$3, exp: pe$3 }), vec3f: Xs({ fract: ke$2, exp: Fe$2 }), vec4f: Xs({ fract: v$1, exp: he$1 }), vec2h: Xs({ fract: nn$2, exp: pe$3 }), vec3h: Xs({ fract: sn$1, exp: Fe$2 }), vec4h: Xs({ fract: an$1, exp: he$1 }) }, zn = k$1({ name: "frexp", normalImpl: "CPU implementation for frexp not implemented yet. Please submit an issue at https://github.com/software-mansion/TypeGPU/issues", signature: (e27) => {
  let n2 = Ae$1[e27.type];
  if (!n2) throw new Error(`Unsupported data type for frexp: ${e27.type}. Supported types are f32, f16, abstractFloat, vec2f, vec3f, vec4f, vec2h, vec3h, vec4h.`);
  return { argTypes: [e27], returnType: n2 };
}, codegenImpl: (e27) => p$1`frexp(${e27})` });
var Zn = k$1({ name: "insertBits", signature: (e27, n2, o2, u2) => ({ argTypes: [e27, n2, T$2, T$2], returnType: e27 }), normalImpl: "CPU implementation for insertBits not implemented yet. Please submit an issue at https://github.com/software-mansion/TypeGPU/issues", codegenImpl: (e27, n2, o2, u2) => p$1`insertBits(${e27}, ${n2}, ${o2}, ${u2})` });
function ve$1(e27) {
  if (typeof e27 == "number") return 1 / Math.sqrt(e27);
  throw new ze$3("CPU implementation for inverseSqrt on vectors not implemented yet. Please submit an issue at https://github.com/software-mansion/TypeGPU/issues");
}
var Wn = k$1({ name: "inverseSqrt", signature: s, normalImpl: ve$1, codegenImpl: (e27) => p$1`inverseSqrt(${e27})` });
var Hn = k$1({ name: "ldexp", signature: (e27, n2) => {
  switch (e27.type) {
    case "abstractFloat":
      return { argTypes: [e27, gt$3], returnType: e27 };
    case "f32":
    case "f16":
      return { argTypes: [e27, f$1], returnType: e27 };
    case "vec2f":
    case "vec2h":
      return { argTypes: [e27, pe$3], returnType: e27 };
    case "vec3f":
    case "vec3h":
      return { argTypes: [e27, Fe$2], returnType: e27 };
    case "vec4f":
    case "vec4h":
      return { argTypes: [e27, he$1], returnType: e27 };
    default:
      throw new Error(`Unsupported data type for ldexp: ${e27.type}. Supported types are abstractFloat, f32, f16, vec2f, vec2h, vec3f, vec3h, vec4f, vec4h.`);
  }
}, normalImpl: "CPU implementation for ldexp not implemented yet. Please submit an issue at https://github.com/software-mansion/TypeGPU/issues", codegenImpl: (e27, n2) => p$1`ldexp(${e27}, ${n2})` });
function Ve(e27) {
  return typeof e27 == "number" ? Math.abs(e27) : d$1.length[e27.kind](e27);
}
var Fe2 = k$1({ name: "length", signature: (e27) => ({ argTypes: [e27], returnType: Rn$1(e27) ? _$1 : x$2 }), normalImpl: Ve, codegenImpl: (e27) => p$1`length(${e27})` });
function we(e27) {
  return typeof e27 == "number" ? Math.log(e27) : d$1.log[e27.kind](e27);
}
var Qn = k$1({ name: "log", signature: s, normalImpl: we, codegenImpl: (e27) => p$1`log(${e27})` });
function $e2(e27) {
  return typeof e27 == "number" ? Math.log2(e27) : d$1.log2[e27.kind](e27);
}
var Kn = k$1({ name: "log2", signature: s, normalImpl: $e2, codegenImpl: (e27) => p$1`log2(${e27})` });
function Pe(e27, n2) {
  return typeof e27 == "number" ? Math.max(e27, n2) : d$1.max[e27.kind](e27, n2);
}
var jn = k$1({ name: "max", signature: E2, normalImpl: J$1(Pe), codegenImpl: X$1("max") });
function Ue(e27, n2) {
  return typeof e27 == "number" ? Math.min(e27, n2) : d$1.min[e27.kind](e27, n2);
}
var Yn = k$1({ name: "min", signature: E2, normalImpl: J$1(Ue), codegenImpl: X$1("min") });
function Be$1(e27, n2, o2) {
  if (typeof e27 == "number") {
    if (typeof o2 != "number" || typeof n2 != "number") throw new Error("When e1 and e2 are numbers, the blend factor must be a number.");
    return e27 * (1 - o2) + n2 * o2;
  }
  if (typeof e27 == "number" || typeof n2 == "number") throw new Error("e1 and e2 need to both be vectors of the same kind.");
  return d$1.mix[e27.kind](e27, n2, o2);
}
var Jn = k$1({ name: "mix", signature: E2, normalImpl: Be$1, codegenImpl: (e27, n2, o2) => p$1`mix(${e27}, ${n2}, ${o2})` }), Se = { f32: Xs({ fract: x$2, whole: x$2 }), f16: Xs({ fract: _$1, whole: _$1 }), abstractFloat: Xs({ fract: De$2, whole: De$2 }), vec2f: Xs({ fract: F$3, whole: F$3 }), vec3f: Xs({ fract: ke$2, whole: ke$2 }), vec4f: Xs({ fract: v$1, whole: v$1 }), vec2h: Xs({ fract: nn$2, whole: nn$2 }), vec3h: Xs({ fract: sn$1, whole: sn$1 }), vec4h: Xs({ fract: an$1, whole: an$1 }) };
var Xn = k$1({ name: "modf", signature: (e27) => {
  let n2 = Se[e27.type];
  if (!n2) throw new Error(`Unsupported data type for modf: ${e27.type}. Supported types are f32, f16, abstractFloat, vec2f, vec3f, vec4f, vec2h, vec3h, vec4h.`);
  return { argTypes: [e27], returnType: n2 };
}, normalImpl: "CPU implementation for modf not implemented yet. Please submit an issue at https://github.com/software-mansion/TypeGPU/issues", codegenImpl: (e27) => p$1`modf(${e27})` }), et$1 = k$1({ name: "normalize", signature: s, normalImpl: (e27) => d$1.normalize[e27.kind](e27), codegenImpl: (e27) => p$1`normalize(${e27})` });
function Ce$1(e27, n2) {
  if (typeof e27 == "number" && typeof n2 == "number") return e27 ** n2;
  if (ie$2(e27) && ie$2(n2)) return d$1.pow[e27.kind](e27, n2);
  throw new Error("Invalid arguments to pow()");
}
var nt = k$1({ name: "pow", signature: (...e27) => {
  let n2 = yi$1(e27, [x$2, _$1, De$2]) ?? e27;
  return { argTypes: n2, returnType: Me$2(n2[0]) ? n2[1] : n2[0] };
}, normalImpl: Ce$1, codegenImpl: (e27, n2) => p$1`pow(${e27}, ${n2})` });
var tt$1 = k$1({ name: "quantizeToF16", signature: s, normalImpl: "CPU implementation for quantizeToF16 not implemented yet. Please submit an issue at https://github.com/software-mansion/TypeGPU/issues", codegenImpl: (e27) => p$1`quantizeToF16(${e27})` });
function ke2(e27) {
  if (typeof e27 == "number") return e27 * Math.PI / 180;
  throw new ze$3("CPU implementation for radians on vectors not implemented yet. Please submit an issue at https://github.com/software-mansion/TypeGPU/issues");
}
var rt$1 = k$1({ name: "radians", signature: (...e27) => {
  let n2 = yi$1(e27, [x$2, _$1, De$2]) ?? e27;
  return { argTypes: n2, returnType: n2[0] };
}, normalImpl: ke2, codegenImpl: (e27) => p$1`radians(${e27})` }), ot = k$1({ name: "reflect", signature: (...e27) => ({ argTypes: e27, returnType: e27[0] }), normalImpl: (e27, n2) => ur$3(e27, cr$3(2 * ye(n2, e27), n2)), codegenImpl: (e27, n2) => p$1`reflect(${e27}, ${n2})` }), at = k$1({ name: "refract", normalImpl: "CPU implementation for refract not implemented yet. Please submit an issue at https://github.com/software-mansion/TypeGPU/issues", codegenImpl: (e27, n2, o2) => p$1`refract(${e27}, ${n2}, ${o2})`, signature: (e27, n2, o2) => ({ argTypes: [e27, n2, Rn$1(e27) ? _$1 : x$2], returnType: e27 }) });
var st = k$1({ name: "reverseBits", signature: s, normalImpl: "CPU implementation for reverseBits not implemented yet. Please submit an issue at https://github.com/software-mansion/TypeGPU/issues", codegenImpl: (e27) => p$1`reverseBits(${e27})` });
function Me(e27) {
  if (typeof e27 == "number") return Math.round(e27);
  throw new ze$3("CPU implementation for round on vectors not implemented yet. Please submit an issue at https://github.com/software-mansion/TypeGPU/issues");
}
var ut = k$1({ name: "round", signature: s, normalImpl: Me, codegenImpl: (e27) => p$1`round(${e27})` });
function Ee$1(e27) {
  if (typeof e27 == "number") return Math.max(0, Math.min(1, e27));
  throw new ze$3("CPU implementation for saturate on vectors not implemented yet. Please submit an issue at https://github.com/software-mansion/TypeGPU/issues");
}
var ct$1 = k$1({ name: "saturate", signature: s, normalImpl: Ee$1, codegenImpl: (e27) => p$1`saturate(${e27})` });
function Ge$1(e27) {
  return typeof e27 == "number" ? Math.sign(e27) : d$1.sign[e27.kind](e27);
}
var it = k$1({ name: "sign", signature: s, normalImpl: Ge$1, codegenImpl: (e27) => p$1`sign(${e27})` });
function Le(e27) {
  return typeof e27 == "number" ? Math.sin(e27) : d$1.sin[e27.kind](e27);
}
var pt2 = k$1({ name: "sin", signature: s, normalImpl: Le, codegenImpl: (e27) => p$1`sin(${e27})` });
function Ne(e27) {
  if (typeof e27 == "number") return Math.sinh(e27);
  throw new ze$3("CPU implementation for sinh on vectors not implemented yet. Please submit an issue at https://github.com/software-mansion/TypeGPU/issues");
}
var mt = k$1({ name: "sinh", signature: s, normalImpl: Ne, codegenImpl: (e27) => p$1`sinh(${e27})` });
function Re(e27, n2, o2) {
  return typeof o2 == "number" ? U2(e27, n2, o2) : d$1.smoothstep[o2.kind](e27, n2, o2);
}
var lt2 = k$1({ name: "smoothstep", signature: (...e27) => ({ argTypes: e27, returnType: e27[2] }), normalImpl: Re, codegenImpl: (e27, n2, o2) => p$1`smoothstep(${e27}, ${n2}, ${o2})` });
function De(e27) {
  return typeof e27 == "number" ? Math.sqrt(e27) : d$1.sqrt[e27.kind](e27);
}
var Tt$1 = k$1({ name: "sqrt", signature: s, normalImpl: De, codegenImpl: (e27) => p$1`sqrt(${e27})` });
function Oe(e27, n2) {
  if (typeof e27 == "number") return e27 <= n2 ? 1 : 0;
  throw new ze$3("CPU implementation for step on vectors not implemented yet. Please submit an issue at https://github.com/software-mansion/TypeGPU/issues");
}
var ft = k$1({ name: "step", signature: (...e27) => {
  let n2 = yi$1(e27, [x$2, _$1, De$2]) ?? e27;
  return { argTypes: n2, returnType: n2[0] };
}, normalImpl: Oe, codegenImpl: (e27, n2) => p$1`step(${e27}, ${n2})` });
function qe2(e27) {
  if (typeof e27 == "number") return Math.tan(e27);
  throw new ze$3("CPU implementation for tan on vectors not implemented yet. Please submit an issue at https://github.com/software-mansion/TypeGPU/issues");
}
var dt$1 = k$1({ name: "tan", signature: s, normalImpl: qe2, codegenImpl: (e27) => p$1`tan(${e27})` });
function _e(e27) {
  return typeof e27 == "number" ? Math.tanh(e27) : d$1.tanh[e27.kind](e27);
}
var yt$1 = k$1({ name: "tanh", signature: s, normalImpl: _e, codegenImpl: (e27) => p$1`tanh(${e27})` }), bt$1 = k$1({ name: "transpose", signature: s, normalImpl: "CPU implementation for transpose not implemented yet. Please submit an issue at https://github.com/software-mansion/TypeGPU/issues", codegenImpl: (e27) => p$1`transpose(${e27})` });
var gt$1 = k$1({ name: "trunc", signature: s, normalImpl: "CPU implementation for trunc not implemented yet. Please submit an issue at https://github.com/software-mansion/TypeGPU/issues", codegenImpl: (e27) => p$1`trunc(${e27})` });
var Pt$2 = k$1({ name: "bitcastU32toF32", normalImpl: ((e27) => typeof e27 == "number" ? A2(e27) : d$1.bitcastU32toF32[e27.kind](e27)), codegenImpl: (e27) => p$1`bitcast<f32>(${e27})`, signature: (...e27) => {
  let n2 = yi$1(e27, [T$2]) ?? e27;
  return { argTypes: n2, returnType: se$2(n2[0]) ? n2[0].type === "vec2u" ? F$3 : n2[0].type === "vec3u" ? ke$2 : v$1 : x$2 };
} }), Ut$2 = k$1({ name: "bitcastU32toI32", normalImpl: ((e27) => typeof e27 == "number" ? W2(e27) : d$1.bitcastU32toI32[e27.kind](e27)), codegenImpl: (e27) => p$1`bitcast<i32>(${e27})`, signature: (...e27) => {
  let n2 = yi$1(e27, [T$2]) ?? e27;
  return { argTypes: n2, returnType: se$2(n2[0]) ? n2[0].type === "vec2u" ? pe$3 : n2[0].type === "vec3u" ? Fe$2 : he$1 : f$1 };
} });
var Et$1 = k$1({ name: "unpack2x16float", normalImpl: (e27) => {
  let n2 = new ArrayBuffer(4);
  new BufferWriter(n2).writeUint32(e27);
  let u2 = new BufferReader(n2);
  return F$3(u2.readFloat16(), u2.readFloat16());
}, signature: { argTypes: [T$2], returnType: F$3 }, codegenImpl: (e27) => p$1`unpack2x16float(${e27})` }), Gt$2 = k$1({ name: "pack2x16float", normalImpl: (e27) => {
  let n2 = new ArrayBuffer(4), o2 = new BufferWriter(n2);
  o2.writeFloat16(e27.x), o2.writeFloat16(e27.y);
  let u2 = new BufferReader(n2);
  return T$2(u2.readUint32());
}, signature: { argTypes: [F$3], returnType: T$2 }, codegenImpl: (e27) => p$1`pack2x16float(${e27})` }), Lt$1 = k$1({ name: "unpack4x8unorm", normalImpl: (e27) => {
  let n2 = new ArrayBuffer(4);
  new BufferWriter(n2).writeUint32(e27);
  let u2 = new BufferReader(n2);
  return v$1(u2.readUint8() / 255, u2.readUint8() / 255, u2.readUint8() / 255, u2.readUint8() / 255);
}, signature: { argTypes: [T$2], returnType: v$1 }, codegenImpl: (e27) => p$1`unpack4x8unorm(${e27})` }), Nt$1 = k$1({ name: "pack4x8unorm", normalImpl: (e27) => {
  let n2 = new ArrayBuffer(4), o2 = new BufferWriter(n2);
  o2.writeUint8(e27.x * 255), o2.writeUint8(e27.y * 255), o2.writeUint8(e27.z * 255), o2.writeUint8(e27.w * 255);
  let u2 = new BufferReader(n2);
  return T$2(u2.readUint32());
}, signature: { argTypes: [v$1], returnType: T$2 }, codegenImpl: (e27) => p$1`pack4x8unorm(${e27})` });
function F(e27) {
  return e27.type.includes("2") ? rn$1 : e27.type.includes("3") ? on$1 : un$1;
}
var jt$1 = k$1({ name: "allEq", signature: (...e27) => ({ argTypes: e27, returnType: V$1 }), normalImpl: (e27, n2) => O(B$1(e27, n2)), codegenImpl: (e27, n2) => p$1`all(${e27} == ${n2})` }), B$1 = (e27, n2) => d$1.eq[e27.kind](e27, n2), Yt$1 = k$1({ name: "eq", signature: (...e27) => ({ argTypes: e27, returnType: F(e27[0]) }), normalImpl: B$1, codegenImpl: (e27, n2) => p$1`(${e27} == ${n2})` }), Jt$3 = k$1({ name: "ne", signature: (...e27) => ({ argTypes: e27, returnType: F(e27[0]) }), normalImpl: (e27, n2) => g(B$1(e27, n2)), codegenImpl: (e27, n2) => p$1`(${e27} != ${n2})` }), G$1 = (e27, n2) => d$1.lt[e27.kind](e27, n2), Xt$1 = k$1({ name: "lt", signature: (...e27) => ({ argTypes: e27, returnType: F(e27[0]) }), normalImpl: G$1, codegenImpl: (e27, n2) => p$1`(${e27} < ${n2})` }), er$2 = k$1({ name: "le", signature: (...e27) => ({ argTypes: e27, returnType: F(e27[0]) }), normalImpl: (e27, n2) => D(G$1(e27, n2), B$1(e27, n2)), codegenImpl: (e27, n2) => p$1`(${e27} <= ${n2})` }), nr$2 = k$1({ name: "gt", signature: (...e27) => ({ argTypes: e27, returnType: F(e27[0]) }), normalImpl: (e27, n2) => ee(g(G$1(e27, n2)), g(B$1(e27, n2))), codegenImpl: (e27, n2) => p$1`(${e27} > ${n2})` }), tr$2 = k$1({ name: "ge", signature: (...e27) => ({ argTypes: e27, returnType: F(e27[0]) }), normalImpl: (e27, n2) => g(G$1(e27, n2)), codegenImpl: (e27, n2) => p$1`(${e27} >= ${n2})` }), g = (e27) => d$1.neg[e27.kind](e27), rr$2 = k$1({ name: "not", signature: (...e27) => ({ argTypes: e27, returnType: e27[0] }), normalImpl: g, codegenImpl: (e27) => p$1`!(${e27})` }), D = (e27, n2) => d$1.or[e27.kind](e27, n2), or$2 = k$1({ name: "or", signature: (...e27) => ({ argTypes: e27, returnType: e27[0] }), normalImpl: D, codegenImpl: (e27, n2) => p$1`(${e27} | ${n2})` }), ee = (e27, n2) => g(D(g(e27), g(n2))), ar$2 = k$1({ name: "and", signature: (...e27) => ({ argTypes: e27, returnType: e27[0] }), normalImpl: ee, codegenImpl: (e27, n2) => p$1`(${e27} & ${n2})` }), O = (e27) => d$1.all[e27.kind](e27), sr$2 = k$1({ name: "all", signature: (...e27) => ({ argTypes: e27, returnType: V$1 }), normalImpl: O, codegenImpl: (e27) => p$1`all(${e27})` }), ur$2 = k$1({ name: "any", signature: (...e27) => ({ argTypes: e27, returnType: V$1 }), normalImpl: (e27) => !O(g(e27)), codegenImpl: (e27) => p$1`any(${e27})` }), cr$2 = k$1({ name: "isCloseTo", signature: (...e27) => ({ argTypes: e27, returnType: V$1 }), normalImpl: (e27, n2, o2 = 0.01) => typeof e27 == "number" && typeof n2 == "number" ? Math.abs(e27 - n2) < o2 : ie$2(e27) && ie$2(n2) ? d$1.isCloseToZero[e27.kind](ur$3[o$2].jsImpl(e27, n2), o2) : false, codegenImpl: (e27, n2, o2 = y$2(0.01, x$2, "constant")) => hr$3(e27) && hr$3(n2) ? p$1`(abs(f32(${e27}) - f32(${n2})) <= ${o2})` : !hr$3(e27) && !hr$3(n2) ? p$1`all(abs(${e27} - ${n2}) <= (${e27} - ${e27}) + ${o2})` : "false" });
function ze2(e27, n2, o2) {
  return typeof o2 == "boolean" ? o2 ? n2 : e27 : d$1.select[e27.kind](e27, n2, o2);
}
var ir$2 = k$1({ name: "select", signature: (e27, n2, o2) => {
  let [u2, w2] = yi$1([e27, n2]) ?? [e27, n2];
  return { argTypes: [u2, w2, o2], returnType: u2 };
}, normalImpl: ze2, codegenImpl: (e27, n2, o2) => p$1`select(${e27}, ${n2}, ${o2})` });
var Ze$1 = { channelType: x$2, vectorType: v$1, sampleTypes: ["depth", "unfilterable-float"], texelSize: "non-copyable" }, We2 = { channelType: x$2, vectorType: v$1, sampleTypes: ["depth", "unfilterable-float"], texelSize: 2 }, He2 = { channelType: x$2, vectorType: v$1, sampleTypes: ["depth", "unfilterable-float"], texelSize: 4 }, Qe = { channelType: T$2, vectorType: xe$4, sampleTypes: ["uint"], texelSize: 1 }, ne = /* @__PURE__ */ new Map();
function Ke(e27) {
  let n2 = ne.get(e27);
  return n2 === void 0 && (n2 = je(e27), ne.set(e27, n2)), n2;
}
function je(e27) {
  let n2 = Xe$1(e27), o2 = Ye2(e27), u2 = e27.includes("stencil");
  return { channelType: n2, vectorType: n2 === T$2 ? xe$4 : n2 === f$1 ? he$1 : v$1, texelSize: en$1(e27), sampleTypes: nn$1(e27), canRenderAttachment: Je$1(e27), ...o2 && { depthAspect: o2 }, ...u2 && { stencilAspect: Qe } };
}
function Ye2(e27) {
  if (e27 === "depth16unorm") return We2;
  if (e27 === "depth32float" || e27 === "depth32float-stencil8") return He2;
  if (e27 === "depth24plus" || e27 === "depth24plus-stencil8") return Ze$1;
}
function Je$1(e27) {
  return !(e27.startsWith("bc") || e27.startsWith("etc2") || e27.startsWith("eac") || e27.startsWith("astc") || e27 === "rgb9e5ufloat");
}
function Xe$1(e27) {
  return e27 === "stencil8" ? T$2 : e27.includes("uint") ? T$2 : e27.includes("sint") ? f$1 : x$2;
}
function en$1(e27) {
  let [, n2, o2] = e27.match(/^(rgba|bgra|rg|r)(8|16|32)/) ?? [];
  return n2 && o2 ? n2.length * Number(o2) / 8 : e27 === "stencil8" ? 1 : e27 === "depth16unorm" ? 2 : e27 === "depth32float" ? 4 : e27 === "depth32float-stencil8" ? 5 : e27 === "depth24plus" || e27 === "depth24plus-stencil8" ? "non-copyable" : /^(bc[14]-|etc2-rgb8|eac-r11)/.test(e27) ? 8 : /^(bc|astc-|etc2-rgba|eac-rg)/.test(e27) ? 16 : 4;
}
function nn$1(e27) {
  return e27 === "stencil8" ? ["uint"] : e27.includes("uint") ? ["uint"] : e27.includes("sint") ? ["sint"] : e27.includes("depth") ? ["depth", "unfilterable-float"] : /^(r|rg|rgba)16(u|s)norm$/.test(e27) ? ["unfilterable-float"] : ["float", "unfilterable-float"];
}
var tn$1 = /* @__PURE__ */ new Set(["r32float", "rg32float", "rgba32float"]);
function Tr$2(e27, n2) {
  return tn$1.has(n2) && !e27.features.has("float32-filterable") ? ["unfilterable-float"] : Ke(n2).sampleTypes;
}
var dr$2 = ["f16", "clip_distances", "dual_source_blending", "subgroups", "primitive_index"], yr$2 = { f16: "shader-f16", clip_distances: "clip-distances", dual_source_blending: "dual-source-blending", subgroups: "subgroups", primitive_index: "primitive-index" };
var e26 = { block: 0, binaryExpr: 1, assignmentExpr: 2, logicalExpr: 3, unaryExpr: 4, numericLiteral: 5, call: 6, memberAccess: 7, indexAccess: 8, return: 10, if: 11, let: 12, const: 13, for: 14, while: 15, continue: 16, break: 17, arrayExpr: 100, preUpdate: 101, postUpdate: 102, stringLiteral: 103, objectExpr: 104 }, t = { identifier: "i", destructuredObject: "d" };
const di = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FuncParameterType: t,
  NodeTypeCatalog: e26
}, Symbol.toStringTag, { value: "Module" }));
function Po(t12) {
  return t12?.[dn$2];
}
var C = { get(t12, e27) {
  if (e27 in t12) return Reflect.get(t12, e27);
  if (e27 === "toString" || e27 === Symbol.toStringTag || e27 === Symbol.toPrimitive) return () => t12.toString();
  if (typeof e27 == "symbol") return;
  let r = Ae$2(t12), n2 = N2(r, String(e27));
  if (n2) return new Proxy({ [o$2]: true, [R$2]: (o2) => o2.resolve(n2.value, n2.dataType), [de$3]: n2, toString: () => `${String(t12)}.${e27}` }, C);
} };
function Be(t12) {
  let e27 = t12;
  for (; ; ) {
    let r = Po(e27);
    if (!r) break;
    e27 = r;
  }
  return e27;
}
function ct(t12, e27) {
  return new Vr$1(t12, e27);
}
function Fo(t12) {
  let e27 = Reflect.ownKeys(t12);
  for (let r of e27) {
    let n2 = t12[r];
    (n2 && typeof n2 == "object" || typeof n2 == "function") && Fo(n2);
  }
  return Object.freeze(t12);
}
var Vr$1 = class Vr {
  constructor(e27, r) {
    this.dataType = e27;
    this.#e = r && typeof r == "object" ? Fo(r) : r;
  }
  [o$2] = {};
  #e;
  $name(e27) {
    return g$2(this, e27), this;
  }
  [R$2](e27) {
    let r = e27.getUniqueName(this), n2 = e27.resolve(this.dataType).value, o2 = e27.resolve(this.#e, this.dataType).value;
    return e27.addDeclaration(`const ${r}: ${n2} = ${o2};`), y$2(r, this.dataType, Oe$1(this.dataType) ? "constant" : "constant-tgpu-const-ref");
  }
  toString() {
    return `const:${z$2(this) ?? "<unnamed>"}`;
  }
  get [dn$2]() {
    let e27 = this.dataType;
    return new Proxy({ [o$2]: true, get [de$3]() {
      return y$2(this, e27, Oe$1(e27) ? "constant" : "constant-tgpu-const-ref");
    }, [R$2]: (r) => r.resolve(this), toString: () => `const:${z$2(this) ?? "<unnamed>"}.$` }, C);
  }
  get $() {
    return Ve$1() ? this[dn$2] : this.#e;
  }
  get value() {
    return this.$;
  }
};
function Ro(t12) {
  return new kr$1(t12);
}
var kr$1 = class kr {
  constructor(e27) {
    this.declaration = e27;
  }
  [o$2] = true;
  externalsToApply = [];
  $uses(e27) {
    return this.externalsToApply.push(e27), this;
  }
  [R$2](e27) {
    let r = {};
    for (let o2 of this.externalsToApply) O$2(r, o2);
    let n2 = R(e27, r, this.declaration);
    return e27.addDeclaration(n2), y$2("", Sn$2, "constant");
  }
  toString() {
    return `declare: ${this.declaration}`;
  }
};
function Jt$2(t12) {
  let e27 = { argTypes: t12.in && Object.keys(t12.in).length !== 0 ? [b$1(t12.in)] : [], returnType: Sn$2, workgroupSize: [t12.workgroupSize[0] ?? 1, t12.workgroupSize[1] ?? 1, t12.workgroupSize[2] ?? 1], isEntry: true };
  return Object.assign((n2, ...o2) => Ea(e27, t12.workgroupSize, te$2(n2, ...o2)), e27);
}
function Ea(t12, e27, r) {
  let n2 = ee$2(r, `@compute @workgroup_size(${e27.join(", ")}) `), o2 = t12.argTypes[0];
  return { shell: t12, $uses(i2) {
    return n2.applyExternals(i2), this;
  }, [o$2]: true, [B$3]: n2, $name(i2) {
    return g$2(n2, i2), Et$2(o2) && o2.$name(`${i2}_Input`), this;
  }, [R$2](i2) {
    return n2.resolve(i2, t12.argTypes, t12.returnType);
  }, toString() {
    return `computeFn:${z$2(n2) ?? "<unnamed>"}`;
  } };
}
function I$1(t12, e27) {
  let r = { [o$2]: true, argTypes: t12, returnType: e27 ?? Sn$2, isEntry: false };
  return Object.assign((o2, ...a2) => Ca(r, te$2(o2, ...a2)), r);
}
function dt(t12) {
  return u$2(t12) && t12?.resourceType === "function";
}
function Ga([t12, e27]) {
  return `${z$2(t12) ?? "<unnamed>"}=${e27}`;
}
function Ca(t12, e27) {
  let r = ee$2(e27, ""), n2 = { shell: t12, resourceType: "function", $uses(i2) {
    return r.applyExternals(i2), this;
  }, [B$3]: r, $name(i2) {
    return g$2(r, i2), this;
  }, with(i2, s2) {
    return Bo(a2, [[ar$4(i2) ? i2.slot : i2, s2]]);
  }, [R$2](i2) {
    return typeof e27 == "string" && (Te$2(e27, t12.argTypes, r.applyExternals), we$1(e27, t12.returnType, r.applyExternals)), r.resolve(i2, t12.argTypes, t12.returnType);
  } }, o2 = k$1({ name: "tgpuFnCall", noComptime: true, signature: { argTypes: t12.argTypes, returnType: t12.returnType }, normalImpl: (...i2) => Nr$2(() => {
    try {
      if (typeof e27 == "string") throw new Error("Cannot execute on the CPU functions constructed with raw WGSL");
      let s2 = i2.map((l2, m2) => bt$3(t12.argTypes[m2], l2)), u2 = e27(...s2);
      return bt$3(t12.returnType, u2);
    } catch (s2) {
      throw s2 instanceof Xe$2 ? s2.appendToTrace(a2) : new Xe$2(s2, [a2]);
    }
  }), codegenImpl: (...i2) => {
    let s2 = O$3();
    return s2.withResetIndentLevel(() => p$1`${s2.resolve(a2).value}(${i2})`);
  } }), a2 = Object.assign(o2, n2);
  return a2[o$2].implementation = e27, Object.defineProperty(a2, "toString", { value() {
    return `fn:${z$2(r) ?? "<unnamed>"}`;
  } }), a2;
}
function Bo(t12, e27) {
  let r = { resourceType: "function", shell: t12.shell, [Re$1]: { inner: t12, pairs: e27 }, $uses(a2) {
    return t12.$uses(a2), this;
  }, [B$3]: t12, $name(a2) {
    return t12.$name(a2), this;
  }, with(a2, i2) {
    return Bo(o2, [...e27, [ar$4(a2) ? a2.slot : a2, i2]]);
  } }, n2 = k$1({ name: "tgpuFnCall", noComptime: true, signature: { argTypes: t12.shell.argTypes, returnType: t12.shell.returnType }, normalImpl: t12, codegenImpl: (...a2) => {
    let i2 = O$3();
    return i2.withResetIndentLevel(() => p$1`${i2.resolve(o2).value}(${a2})`);
  } }), o2 = Object.assign(n2, r);
  return o2[o$2].implementation = t12[o$2].implementation, Object.defineProperty(o2, "toString", { value() {
    return `fn:${z$2(t12) ?? "<unnamed>"}[${e27.map(Ga).join(", ")}]`;
  } }), o2;
}
function Ao(t12, e27, r = "runtime") {
  return new Wr$1(t12, e27, r);
}
var Wr$1 = class Wr {
  [o$2];
  dataType;
  origin;
  #e;
  #t;
  constructor(e27, r, n2) {
    this[o$2] = true, this.dataType = r, this.origin = n2, this.#e = e27, this.#t = [];
  }
  $uses(e27) {
    return this.#t.push(e27), this;
  }
  [R$2](e27) {
    let r = {};
    for (let o2 of this.#t) O$2(r, o2);
    let n2 = R(e27, r, this.#e);
    return y$2(n2, this.dataType, this.origin);
  }
  toString() {
    return `raw(${String(this.dataType)}): "${this.#e}"`;
  }
  get [dn$2]() {
    let e27 = this.dataType, r = this.origin;
    return new Proxy({ [o$2]: true, get [de$3]() {
      return y$2(this, e27, r);
    }, [R$2]: (n2) => n2.resolve(this), toString: () => `raw(${String(this.dataType)}): "${this.#e}".$` }, C);
  }
  get $() {
    if (!Ve$1()) throw new Error("Raw code snippets can only be used on the GPU.");
    return this[dn$2];
  }
  get value() {
    return this.$;
  }
};
function Eo(t12) {
  let e27 = { in: t12.in, out: t12.out, returnType: b$1(t12.out), isEntry: true };
  return Object.assign((n2, ...o2) => La(e27, te$2(n2, ...o2)), e27);
}
function La(t12, e27) {
  let r = ee$2(e27, "@fragment "), n2 = t12.returnType;
  return typeof e27 == "string" && we$1(e27, n2, (a2) => r.applyExternals(a2)), { shell: t12, outputType: n2, $uses(a2) {
    return r.applyExternals(a2), this;
  }, [o$2]: true, [B$3]: r, $name(a2) {
    return g$2(r, a2), Et$2(n2) && n2.$name(`${a2}_Output`), this;
  }, [R$2](a2) {
    let i2 = t12.in ? b$1(t12.in, a2.varyingLocations).$name(`${z$2(this) ?? ""}_Input`) : void 0;
    return i2 && r.applyExternals({ In: i2 }), r.applyExternals({ Out: n2 }), r.resolve(a2, i2 ? [i2] : [], t12.returnType);
  }, toString() {
    return `fragmentFn:${z$2(r) ?? "<unnamed>"}`;
  } };
}
var Go = /* @__PURE__ */ new Set(["alias", "break", "case", "const", "const_assert", "continue", "continuing", "default", "diagnostic", "discard", "else", "enable", "false", "fn", "for", "if", "let", "loop", "override", "requires", "return", "struct", "switch", "true", "var", "while", "NULL", "Self", "abstract", "active", "alignas", "alignof", "as", "asm", "asm_fragment", "async", "attribute", "auto", "await", "become", "cast", "catch", "class", "co_await", "co_return", "co_yield", "coherent", "column_major", "common", "compile", "compile_fragment", "concept", "const_cast", "consteval", "constexpr", "constinit", "crate", "debugger", "decltype", "delete", "demote", "demote_to_helper", "do", "dynamic_cast", "enum", "explicit", "export", "extends", "extern", "external", "fallthrough", "filter", "final", "finally", "friend", "from", "fxgroup", "get", "goto", "groupshared", "highp", "impl", "implements", "import", "inline", "instanceof", "interface", "layout", "lowp", "macro", "macro_rules", "match", "mediump", "meta", "mod", "module", "move", "mut", "mutable", "namespace", "new", "nil", "noexcept", "noinline", "nointerpolation", "non_coherent", "noncoherent", "noperspective", "null", "nullptr", "of", "operator", "package", "packoffset", "partition", "pass", "patch", "pixelfragment", "precise", "precision", "premerge", "priv", "protected", "pub", "public", "readonly", "ref", "regardless", "register", "reinterpret_cast", "require", "resource", "restrict", "self", "set", "shared", "sizeof", "smooth", "snorm", "static", "static_assert", "static_cast", "std", "subroutine", "super", "target", "template", "this", "thread_local", "throw", "trait", "try", "type", "typedef", "typeid", "typename", "typeof", "union", "unless", "unorm", "unsafe", "unsized", "use", "using", "varying", "virtual", "volatile", "wgsl", "where", "with", "writeonly", "yield", "sampler"]);
function Va(t12) {
  return t12 ? t12.replaceAll(/\s/g, "_").replaceAll(/[^\w\d]/g, "") : "item";
}
function Or$1(t12) {
  if (t12 === "_" || t12.startsWith("__") || /\s/.test(t12)) throw new Error(`Invalid identifier '${t12}'. Choose an identifier without whitespaces or leading underscores.`);
  let e27 = t12.split("_")[0];
  return !Go.has(e27);
}
var Zt$1 = class Zt {
  #e;
  #t;
  constructor() {
    this.#e = new Set(Go), this.#t = [];
  }
  get usedFunctionScopeNames() {
    return this.#t[this.#t.length - 1];
  }
  makeUnique(e27, r) {
    let n2 = Va(e27), o2 = this.getUniqueVariant(n2);
    return r ? this.#e.add(o2) : this.usedFunctionScopeNames?.add(o2), o2;
  }
  makeValid(e27) {
    return Or$1(e27) && !this.#e.has(e27) ? (this.usedFunctionScopeNames?.add(e27), e27) : this.makeUnique(e27, false);
  }
  isUsed(e27) {
    return this.#e.has(e27) || !!this.usedFunctionScopeNames?.has(e27);
  }
  pushFunctionScope() {
    this.#t.push(/* @__PURE__ */ new Set());
  }
  popFunctionScope() {
    this.#t.pop();
  }
}, er$1 = class er extends Zt$1 {
  #e = 0;
  getUniqueVariant(e27) {
    let r = `${e27}_${this.#e++}`;
    for (; this.isUsed(r); ) r = `${e27}_${this.#e++}`;
    return r;
  }
}, tr$1 = class tr extends Zt$1 {
  getUniqueVariant(e27) {
    let r = 0, n2 = e27;
    for (; this.isUsed(n2); ) r++, n2 = `${e27}_${r}`;
    return n2;
  }
};
function Co(t12, e27) {
  let r = ee$2(e27, "");
  return { [o$2]: true, [B$3]: r, resourceType: "shellless-impl", argTypes: t12, [R$2](n2) {
    return r.resolve(n2, t12, void 0);
  }, toString() {
    return `fn*:${z$2(r) ?? "<unnamed>"}(${t12.map((n2) => n2.toString()).join(", ")})`;
  } };
}
function _r$1(t12, e27) {
  return t12.type !== e27.type ? false : t12.type === "ptr" && e27.type === "ptr" ? t12.access === e27.access && t12.addressSpace === e27.addressSpace && t12.implicit === e27.implicit && _r$1(t12.inner, e27.inner) : t12.type === "array" && e27.type === "array" ? t12.elementCount === e27.elementCount && _r$1(t12.elementType, e27.elementType) : t12.type === "struct" && e27.type === "struct" ? t12 === e27 : true;
}
var rr$1 = class rr {
  cache = /* @__PURE__ */ new Map();
  get(e27, r) {
    let n2 = Ge$2(e27);
    if (!n2?.ast) return;
    if (!r && n2.ast.params.length > 0) throw new Error(`Cannot resolve '${z$2(e27)}' directly, because it expects arguments. Either call it from another function, or wrap it in a shell`);
    let o2 = (r ?? []).map((s2, u2) => {
      if (s2.value instanceof W$1) {
        if (s2.dataType.type === "unknown") throw new A$2("d.ref() created with primitive types must be stored in a variable before use");
        return s2.dataType;
      }
      if (s2.dataType.type === "unknown") throw new Error(`Passed illegal value ${s2.value} as the #${u2} argument to ${n2.name}(...)`);
      let l2 = cn$1(s2.dataType);
      if (s2.origin === "constant-tgpu-const-ref" || s2.origin === "runtime-tgpu-const-ref") {
        let m2 = O$3();
        throw new Error(`Cannot pass constant references as function arguments. Explicitly copy them by wrapping them in a schema: '${m2.resolve(l2).value}(...)'`);
      }
      return Ee$2(l2) && l2.implicit && (l2 = l2.inner), l2;
    }), a2 = this.cache.get(e27);
    if (a2) {
      let s2 = a2.find((u2) => u2.argTypes.length === o2.length && u2.argTypes.every((l2, m2) => _r$1(l2, o2[m2])));
      if (s2) return s2;
    } else a2 = [], this.cache.set(e27, a2);
    let i2 = Co(o2, e27);
    return a2.push(i2), i2;
  }
};
var Mr$1 = class Mr {
  [o$2];
  constructor(e27) {
    this[o$2] = { nameRegistry: e27, shelllessRepo: new rr$1(), memoizedResolves: /* @__PURE__ */ new WeakMap(), memoizedDerived: /* @__PURE__ */ new WeakMap(), listeners: { name: /* @__PURE__ */ new Set() } };
  }
  on(e27, r) {
    if (e27 === "name") {
      let n2 = this[o$2].listeners.name;
      return n2.add(r), () => n2.delete(r);
    }
    throw new Error(`Unsupported event: ${e27}`);
  }
};
function Lo(t12, e27) {
  let r = t12.nameRegistry.makeUnique(z$2(e27), true);
  for (let n2 of t12.listeners.name) n2({ target: e27, name: r });
  return r;
}
function X(t12) {
  let { names: e27 = "strict" } = t12 ?? {};
  return new Mr$1(e27 === "strict" ? new tr$1() : new er$1());
}
function gt(t12) {
  return typeof t12?.format == "string";
}
function Vo(t12, e27) {
  let r = [];
  if (Qn$1(t12)) {
    if (!gt(e27)) throw new Error("Shader expected a single attribute, not a record of attributes to be passed in.");
    return r.push(e27._layout), { usedVertexLayouts: r, bufferDefinitions: [{ arrayStride: e27._layout.stride, stepMode: e27._layout.stepMode, attributes: [{ format: e27.format, offset: e27.offset, shaderLocation: Zn$1(t12) ?? 0 }] }] };
  }
  let n2 = [], o2 = /* @__PURE__ */ new WeakMap(), a2 = 0;
  for (let [i2, s2] of Object.entries(t12)) {
    if (Q$2(s2)) continue;
    let u2 = e27[i2];
    if (!u2) throw new Error(`An attribute by the name of '${i2}' was not provided to the shader.`);
    let l2 = u2._layout, m2 = o2.get(l2);
    m2 || (r.push(l2), m2 = [], n2.push({ arrayStride: l2.stride, stepMode: l2.stepMode, attributes: m2 }), o2.set(l2, m2)), a2 = Zn$1(s2) ?? a2, m2.push({ format: u2.format, offset: u2.offset, shaderLocation: a2++ });
  }
  return { usedVertexLayouts: r, bufferDefinitions: n2 };
}
var ka = ["bool", "f32", "f16", "i32", "u32", "vec2f", "vec3f", "vec4f", "vec2h", "vec3h", "vec4h", "vec2i", "vec3i", "vec4i", "vec2u", "vec3u", "vec4u", "vec2<bool>", "vec3<bool>", "vec4<bool>", "mat2x2f", "mat3x3f", "mat4x4f", "texture_external"];
function Wa(t12) {
  return ka.includes(t12.type);
}
function Nr$1(t12, [e27, r]) {
  if (!Or$1(e27)) throw new Error(`Property key '${e27}' is a reserved WGSL word. Choose a different name.`);
  return `  ${Ie$2(r)}${e27}: ${t12.resolve(r).value},
`;
}
function Oa(t12, e27) {
  if (e27[o$2].isAbstruct) throw new Error("Cannot resolve abstract struct types to WGSL.");
  let r = t12.getUniqueName(e27);
  return t12.addDeclaration(`struct ${r} {
${Object.entries(e27.propTypes).map((n2) => Nr$1(t12, n2)).join("")}}`), r;
}
function _a(t12, e27) {
  let r = t12.getUniqueName(e27);
  return t12.addDeclaration(`struct ${r} {
${Object.entries(e27.propTypes).map((n2) => gt(n2[1]) ? Nr$1(t12, [n2[0], Se$3[n2[1].format]]) : Nr$1(t12, n2)).join("")}
}`), r;
}
function Ma(t12, e27) {
  let r = t12.resolve(e27.elementType).value;
  return e27.elementCount === 0 ? `array<${r}>` : `array<${r}, ${e27.elementCount}>`;
}
function Na(t12, e27) {
  let r = t12.resolve(gt(e27.elementType) ? Se$3[e27.elementType.format] : e27.elementType).value;
  return e27.elementCount === 0 ? `array<${r}>` : `array<${r}, ${e27.elementCount}>`;
}
function zr$1(t12, e27) {
  if (Bt$1(e27)) return e27.type === "unstruct" ? _a(t12, e27) : e27.type === "disarray" ? Na(t12, e27) : e27.type === "loose-decorated" ? t12.resolve(gt(e27.inner) ? Se$3[e27.inner.format] : e27.inner).value : t12.resolve(Se$3[e27.type]).value;
  if (Wa(e27)) return e27.type;
  if (e27.type === "struct") return Oa(t12, e27);
  if (e27.type === "array") return Ma(t12, e27);
  if (e27.type === "atomic") return `atomic<${zr$1(t12, e27.inner)}>`;
  if (e27.type === "decorated") return t12.resolve(e27.inner).value;
  if (e27.type === "ptr") return e27.addressSpace === "storage" ? `ptr<storage, ${t12.resolve(e27.inner).value}, ${e27.access === "read-write" ? "read_write" : e27.access}>` : `ptr<${e27.addressSpace}, ${t12.resolve(e27.inner).value}>`;
  if (e27.type === "abstractInt" || e27.type === "abstractFloat" || e27.type === "void" || e27.type === "u16") throw new Error(`${e27.type} has no representation in WGSL`);
  if (br$2(e27)) return `${e27.type}<${e27.format}, ${_e$1[e27.access]}>`;
  if (wr$2(e27)) return e27.type.startsWith("texture_depth") ? e27.type : `${e27.type}<${e27.sampleType.type}>`;
  if (Se$1(e27) || ye$1(e27)) return e27.type;
  dt$3(e27, "resolveData");
}
var Xe = class t2 {
  constructor(e27) {
    this.bindings = e27;
  }
  with(e27, r) {
    return new t2([...this.bindings, [ar$4(e27) ? e27.slot : e27, r]]);
  }
  pipe(e27) {
    let r = e27(this);
    return new t2([...this.bindings, ...r.bindings]);
  }
};
function* ko(t12) {
  let e27 = 0;
  for (; ; ) t12.has(e27) || (yield e27), e27++;
}
function za(t12, e27) {
  let r = "size" in t12 ? t12.size : t12.currentByteOffset, n2 = e27 - 1, o2 = r & n2;
  "skipBytes" in t12 ? t12.skipBytes(e27 - o2 & n2) : t12.add(e27 - o2 & n2);
}
var G = za;
var Wo = /* @__PURE__ */ new WeakMap();
function nr$1(t12) {
  let e27 = Wo.get(t12);
  if (e27) return e27;
  let r = new Measurer(), n2 = {}, o2;
  for (let a2 in t12.propTypes) {
    let i2 = t12.propTypes[a2];
    if (i2 === void 0) throw new Error(`Property ${a2} is undefined in struct`);
    let s2 = r.size;
    G(r, Hn$1(t12) ? y$1(i2) : s$1(i2)), o2 && (o2.padding = r.size - s2);
    let u2 = l(i2);
    n2[a2] = { offset: r.size, size: u2 }, o2 = n2[a2], r.add(u2);
  }
  return o2 && (o2.padding = f(l(t12), s$1(t12)) - r.size), Wo.set(t12, n2), n2;
}
var Qa = (() => {
  try {
    return new Function("return true"), true;
  } catch {
    return false;
  }
})(), qr$1 = /* @__PURE__ */ new WeakMap(), or$1 = { u32: "u32", vec2u: "u32", vec3u: "u32", vec4u: "u32", u16: "u16", i32: "i32", vec2i: "i32", vec3i: "i32", vec4i: "i32", f32: "f32", vec2f: "f32", vec3f: "f32", vec4f: "f32", f16: "f16", vec2h: "f16", vec3h: "f16", vec4h: "f16", mat2x2f: "f32", mat3x3f: "f32", mat4x4f: "f32" }, Ha = { uint8: "u8", uint8x2: "u8", uint8x4: "u8", sint8: "i8", sint8x2: "i8", sint8x4: "i8", unorm8: "u8", unorm8x2: "u8", unorm8x4: "u8", snorm8: "i8", snorm8x2: "i8", snorm8x4: "i8", uint16: "u16", uint16x2: "u16", uint16x4: "u16", sint16: "i16", sint16x2: "i16", sint16x4: "i16", unorm16: "u16", unorm16x2: "u16", unorm16x4: "u16", snorm16: "i16", snorm16x2: "i16", snorm16x4: "i16", float16: "f16", float16x2: "f16", float16x4: "f16", float32: "f32", float32x2: "f32", float32x3: "f32", float32x4: "f32", uint32: "u32", uint32x2: "u32", uint32x3: "u32", uint32x4: "u32", sint32: "i32", sint32x2: "i32", sint32x3: "i32", sint32x4: "i32" }, ar$1 = { u32: "setUint32", i32: "setInt32", f32: "setFloat32", u16: "setUint16", i16: "setInt16", f16: "setFloat16", u8: "setUint8", i8: "setInt8" }, Ka = { unorm8: (t12) => `Math.round(${t12} * 255)`, unorm8x2: (t12) => `Math.round(${t12} * 255)`, unorm8x4: (t12) => `Math.round(${t12} * 255)`, snorm8: (t12) => `Math.round(${t12} * 127)`, snorm8x2: (t12) => `Math.round(${t12} * 127)`, snorm8x4: (t12) => `Math.round(${t12} * 127)`, unorm16: (t12) => `Math.round(${t12} * 65535)`, unorm16x2: (t12) => `Math.round(${t12} * 65535)`, unorm16x4: (t12) => `Math.round(${t12} * 65535)`, snorm16: (t12) => `Math.round(${t12} * 32767)`, snorm16x2: (t12) => `Math.round(${t12} * 32767)`, snorm16x4: (t12) => `Math.round(${t12} * 32767)` }, Oo = { "unorm10-10-10-2": { writeFunction: "setUint32", generator: (t12, e27) => `output.setUint32(${t12}, ((${e27}.x*1023&0x3FF)<<22)|((${e27}.y*1023&0x3FF)<<12)|((${e27}.z*1023&0x3FF)<<2)|(${e27}.w*3&3), littleEndian);
` }, "unorm8x4-bgra": { writeFunction: "setUint8", generator: (t12, e27) => {
  let r = ["z", "y", "x", "w"], n2 = "";
  for (let o2 = 0; o2 < 4; o2++) n2 += `output.setUint8((${t12} + ${o2}), Math.round(${e27}.${r[o2]} * 255), littleEndian);
`;
  return n2;
} } };
function ir$1(t12, e27, r, n2 = 0) {
  let o2 = ["i", "j", "k"][n2] || `i${n2}`;
  if ($n$2(t12) || Fn$1(t12)) return ir$1(t12.inner, e27, r, n2);
  if (An$1(t12) || Hn$1(t12)) {
    let i2 = nr$1(t12), s2 = "";
    for (let [u2, l2] of Object.entries(i2)) {
      let m2 = t12.propTypes[u2];
      m2 && (s2 += ir$1(m2, `(${e27} + ${l2.offset})`, `${r}.${u2}`, n2));
    }
    return s2;
  }
  if (In$2(t12) || Yn$1(t12)) {
    let i2 = f(l(t12.elementType), s$1(t12)), s2 = "";
    return s2 += `for (let ${o2} = 0; ${o2} < ${t12.elementCount}; ${o2}++) {
`, s2 += ir$1(t12.elementType, `(${e27} + ${o2} * ${i2})`, `${r}[${o2}]`, n2 + 1), s2 += `}
`, s2;
  }
  if (se$2(t12)) {
    let i2 = or$1[t12.type], s2 = "", u2 = ar$1[i2], l2 = ["x", "y", "z", "w"], m2 = At$1(t12) ? 2 : $t$2(t12) ? 3 : 4;
    for (let f2 = 0; f2 < m2; f2++) s2 += `output.${u2}((${e27} + ${f2 * 4}), ${r}.${l2[f2]}, littleEndian);
`;
    return s2;
  }
  if (_e$2(t12)) {
    let i2 = or$1[t12.type], s2 = ar$1[i2], u2 = kt$2(t12) ? 2 : Ft$3(t12) ? 3 : 4, l2 = u2 * u2, m2 = f(u2 * 4, 8), f$12 = "";
    for (let c2 = 0; c2 < l2; c2++) {
      let y2 = Math.floor(c2 / u2), w2 = c2 % u2, b2 = y2 * m2 + w2 * 4;
      f$12 += `output.${s2}((${e27} + ${b2}), ${r}.columns[${y2}].${["x", "y", "z", "w"][w2]}, littleEndian);
`;
    }
    return f$12;
  }
  if (js(t12)) {
    let i2 = t12.type;
    if (i2 in Oo) return Oo[i2].generator(e27, r);
    let s2 = Ha[i2], u2 = ar$1[s2], l2 = Se$3[i2], m2 = Dt$2(l2) ? 4 : $t$2(l2) ? 3 : At$1(l2) ? 2 : 1, f2 = s2 === "u8" || s2 === "i8" ? 1 : s2 === "u16" || s2 === "i16" || s2 === "f16" ? 2 : 4, c2 = ["x", "y", "z", "w"], y2 = Ka[i2], w2 = "";
    for (let b2 = 0; b2 < m2; b2++) {
      let B3 = m2 === 1 ? r : `${r}.${c2[b2]}`, F2 = y2 ? y2(B3) : B3;
      w2 += `output.${u2}((${e27} + ${b2 * f2}), ${F2}, littleEndian);
`;
    }
    return w2;
  }
  if (!Object.hasOwn(or$1, t12.type)) throw new Error(`Primitive ${t12.type} is unsupported by compiled writer`);
  let a2 = or$1[t12.type];
  return `output.${ar$1[a2]}(${e27}, ${r}, littleEndian);
`;
}
function jr$1(t12) {
  if (!Qa) {
    console.warn("This environment does not allow eval - using default writer as fallback");
    return;
  }
  if (qr$1.has(t12)) return qr$1.get(t12);
  try {
    let e27 = ir$1(t12, "offset", "value", 0), r = new Function("output", "offset", "value", "littleEndian=true", e27);
    return qr$1.set(t12, r), r;
  } catch (e27) {
    console.warn(`Failed to compile writer for schema: ${t12}
Reason: ${e27 instanceof Error ? e27.message : String(e27)}
Falling back to default writer`);
  }
}
var Je = { bool() {
  throw new Error("Booleans are not host-shareable");
}, f32(t12, e27, r) {
  t12.writeFloat32(r);
}, f16(t12, e27, r) {
  t12.writeFloat16(r);
}, i32(t12, e27, r) {
  t12.writeInt32(r);
}, u32(t12, e27, r) {
  t12.writeUint32(r);
}, u16(t12, e27, r) {
  t12.writeUint16(r);
}, vec2f(t12, e27, r) {
  t12.writeFloat32(r.x), t12.writeFloat32(r.y);
}, vec2h(t12, e27, r) {
  t12.writeFloat16(r.x), t12.writeFloat16(r.y);
}, vec2i(t12, e27, r) {
  t12.writeInt32(r.x), t12.writeInt32(r.y);
}, vec2u(t12, e27, r) {
  t12.writeUint32(r.x), t12.writeUint32(r.y);
}, "vec2<bool>"() {
  throw new Error("Booleans are not host-shareable");
}, vec3f(t12, e27, r) {
  t12.writeFloat32(r.x), t12.writeFloat32(r.y), t12.writeFloat32(r.z);
}, vec3h(t12, e27, r) {
  t12.writeFloat16(r.x), t12.writeFloat16(r.y), t12.writeFloat16(r.z);
}, vec3i(t12, e27, r) {
  t12.writeInt32(r.x), t12.writeInt32(r.y), t12.writeInt32(r.z);
}, vec3u(t12, e27, r) {
  t12.writeUint32(r.x), t12.writeUint32(r.y), t12.writeUint32(r.z);
}, "vec3<bool>"() {
  throw new Error("Booleans are not host-shareable");
}, vec4f(t12, e27, r) {
  t12.writeFloat32(r.x), t12.writeFloat32(r.y), t12.writeFloat32(r.z), t12.writeFloat32(r.w);
}, vec4h(t12, e27, r) {
  t12.writeFloat16(r.x), t12.writeFloat16(r.y), t12.writeFloat16(r.z), t12.writeFloat16(r.w);
}, vec4i(t12, e27, r) {
  t12.writeInt32(r.x), t12.writeInt32(r.y), t12.writeInt32(r.z), t12.writeInt32(r.w);
}, vec4u(t12, e27, r) {
  t12.writeUint32(r.x), t12.writeUint32(r.y), t12.writeUint32(r.z), t12.writeUint32(r.w);
}, "vec4<bool>"() {
  throw new Error("Booleans are not host-shareable");
}, mat2x2f(t12, e27, r) {
  for (let n2 = 0; n2 < r.length; ++n2) t12.writeFloat32(r[n2]);
}, mat3x3f(t12, e27, r) {
  for (let n2 = 0; n2 < r.length; ++n2) t12.writeFloat32(r[n2]);
}, mat4x4f(t12, e27, r) {
  for (let n2 = 0; n2 < r.length; ++n2) t12.writeFloat32(r[n2]);
}, struct(t12, e27, r) {
  let n2 = s$1(e27);
  G(t12, n2);
  for (let [o2, a2] of Object.entries(e27.propTypes)) G(t12, s$1(a2)), Ze(t12, a2, r[o2]);
  G(t12, n2);
}, array(t12, e27, r) {
  if (e27.elementCount === 0) throw new Error("Cannot write using a runtime-sized schema.");
  let n2 = s$1(e27);
  G(t12, n2);
  let o2 = t12.currentByteOffset;
  for (let a2 = 0; a2 < Math.min(e27.elementCount, r.length); a2++) G(t12, n2), Ze(t12, e27.elementType, r[a2]);
  t12.seekTo(o2 + l(e27));
}, ptr() {
  throw new Error("Pointers are not host-shareable");
}, atomic(t12, e27, r) {
  Je[e27.inner.type]?.(t12, e27, r);
}, decorated(t12, e27, r) {
  let n2 = y$1(e27);
  G(t12, n2);
  let o2 = t12.currentByteOffset;
  Je[e27.inner?.type]?.(t12, e27.inner, r), t12.seekTo(o2 + l(e27));
}, uint8(t12, e27, r) {
  t12.writeUint8(r);
}, uint8x2(t12, e27, r) {
  t12.writeUint8(r.x), t12.writeUint8(r.y);
}, uint8x4(t12, e27, r) {
  t12.writeUint8(r.x), t12.writeUint8(r.y), t12.writeUint8(r.z), t12.writeUint8(r.w);
}, sint8(t12, e27, r) {
  t12.writeInt8(r);
}, sint8x2(t12, e27, r) {
  t12.writeInt8(r.x), t12.writeInt8(r.y);
}, sint8x4(t12, e27, r) {
  t12.writeInt8(r.x), t12.writeInt8(r.y), t12.writeInt8(r.z), t12.writeInt8(r.w);
}, unorm8(t12, e27, r) {
  t12.writeUint8(Math.round(r * 255));
}, unorm8x2(t12, e27, r) {
  t12.writeUint8(Math.round(r.x * 255)), t12.writeUint8(Math.round(r.y * 255));
}, unorm8x4(t12, e27, r) {
  t12.writeUint8(Math.round(r.x * 255)), t12.writeUint8(Math.round(r.y * 255)), t12.writeUint8(Math.round(r.z * 255)), t12.writeUint8(Math.round(r.w * 255));
}, snorm8(t12, e27, r) {
  t12.writeInt8(Math.round(r * 127));
}, snorm8x2(t12, e27, r) {
  t12.writeInt8(Math.round(r.x * 127)), t12.writeInt8(Math.round(r.y * 127));
}, snorm8x4(t12, e27, r) {
  t12.writeInt8(Math.round(r.x * 127)), t12.writeInt8(Math.round(r.y * 127)), t12.writeInt8(Math.round(r.z * 127)), t12.writeInt8(Math.round(r.w * 127));
}, uint16(t12, e27, r) {
  t12.writeUint16(r);
}, uint16x2(t12, e27, r) {
  t12.writeUint16(r.x), t12.writeUint16(r.y);
}, uint16x4(t12, e27, r) {
  t12.writeUint16(r.x), t12.writeUint16(r.y), t12.writeUint16(r.z), t12.writeUint16(r.w);
}, sint16(t12, e27, r) {
  t12.writeInt16(r);
}, sint16x2(t12, e27, r) {
  t12.writeInt16(r.x), t12.writeInt16(r.y);
}, sint16x4(t12, e27, r) {
  t12.writeInt16(r.x), t12.writeInt16(r.y), t12.writeInt16(r.z), t12.writeInt16(r.w);
}, unorm16(t12, e27, r) {
  t12.writeUint16(r * 65535);
}, unorm16x2(t12, e27, r) {
  t12.writeUint16(r.x * 65535), t12.writeUint16(r.y * 65535);
}, unorm16x4(t12, e27, r) {
  t12.writeUint16(r.x * 65535), t12.writeUint16(r.y * 65535), t12.writeUint16(r.z * 65535), t12.writeUint16(r.w * 65535);
}, snorm16(t12, e27, r) {
  t12.writeInt16(Math.round(r * 32767));
}, snorm16x2(t12, e27, r) {
  t12.writeInt16(Math.round(r.x * 32767)), t12.writeInt16(Math.round(r.y * 32767));
}, snorm16x4(t12, e27, r) {
  t12.writeInt16(Math.round(r.x * 32767)), t12.writeInt16(Math.round(r.y * 32767)), t12.writeInt16(Math.round(r.z * 32767)), t12.writeInt16(Math.round(r.w * 32767));
}, float16(t12, e27, r) {
  t12.writeFloat16(r);
}, float16x2(t12, e27, r) {
  t12.writeFloat16(r.x), t12.writeFloat16(r.y);
}, float16x4(t12, e27, r) {
  t12.writeFloat16(r.x), t12.writeFloat16(r.y), t12.writeFloat16(r.z), t12.writeFloat16(r.w);
}, float32(t12, e27, r) {
  t12.writeFloat32(r);
}, float32x2(t12, e27, r) {
  t12.writeFloat32(r.x), t12.writeFloat32(r.y);
}, float32x3(t12, e27, r) {
  t12.writeFloat32(r.x), t12.writeFloat32(r.y), t12.writeFloat32(r.z);
}, float32x4(t12, e27, r) {
  t12.writeFloat32(r.x), t12.writeFloat32(r.y), t12.writeFloat32(r.z), t12.writeFloat32(r.w);
}, uint32(t12, e27, r) {
  t12.writeUint32(r);
}, uint32x2(t12, e27, r) {
  t12.writeUint32(r.x), t12.writeUint32(r.y);
}, uint32x3(t12, e27, r) {
  t12.writeUint32(r.x), t12.writeUint32(r.y), t12.writeUint32(r.z);
}, uint32x4(t12, e27, r) {
  t12.writeUint32(r.x), t12.writeUint32(r.y), t12.writeUint32(r.z), t12.writeUint32(r.w);
}, sint32(t12, e27, r) {
  t12.writeInt32(r);
}, sint32x2(t12, e27, r) {
  t12.writeInt32(r.x), t12.writeInt32(r.y);
}, sint32x3(t12, e27, r) {
  t12.writeInt32(r.x), t12.writeInt32(r.y), t12.writeInt32(r.z);
}, sint32x4(t12, e27, r) {
  t12.writeInt32(r.x), t12.writeInt32(r.y), t12.writeInt32(r.z), t12.writeInt32(r.w);
}, "unorm10-10-10-2"(t12, e27, r) {
  let n2 = 0;
  n2 |= (r.x * 1023 & 1023) << 22, n2 |= (r.y * 1023 & 1023) << 12, n2 |= (r.z * 1023 & 1023) << 2, n2 |= r.w * 3 & 3, t12.writeUint32(n2);
}, "unorm8x4-bgra"(t12, e27, r) {
  t12.writeUint8(r.z * 255), t12.writeUint8(r.y * 255), t12.writeUint8(r.x * 255), t12.writeUint8(r.w * 255);
}, disarray(t12, e27, r) {
  let n2 = s$1(e27);
  G(t12, n2);
  let o2 = t12.currentByteOffset;
  for (let a2 = 0; a2 < Math.min(e27.elementCount, r.length); a2++) G(t12, n2), Je[e27.elementType?.type]?.(t12, e27.elementType, r[a2]);
  t12.seekTo(o2 + l(e27));
}, unstruct(t12, e27, r) {
  let n2 = e27.propTypes;
  for (let [o2, a2] of Object.entries(n2)) Je[a2.type]?.(t12, a2, r[o2]);
}, "loose-decorated"(t12, e27, r) {
  let n2 = y$1(e27);
  G(t12, n2);
  let o2 = t12.currentByteOffset, a2 = Je[e27.inner?.type];
  return a2?.(t12, e27.inner, r), t12.seekTo(o2 + l(e27)), r;
} };
function Ze(t12, e27, r) {
  let n2 = Je[e27.type];
  if (!n2) throw new Error(`Cannot write data of type '${e27.type}'.`);
  n2(t12, e27, r);
}
var Ya = { bool() {
  throw new Error("Booleans are not host-shareable");
}, f32(t12) {
  return t12.readFloat32();
}, f16(t12) {
  return t12.readFloat16();
}, i32(t12) {
  return t12.readInt32();
}, u32(t12) {
  return t12.readUint32();
}, u16(t12) {
  return t12.readUint16();
}, vec2f(t12) {
  return F$3(t12.readFloat32(), t12.readFloat32());
}, vec3f(t12) {
  return ke$2(t12.readFloat32(), t12.readFloat32(), t12.readFloat32());
}, vec4f(t12) {
  return v$1(t12.readFloat32(), t12.readFloat32(), t12.readFloat32(), t12.readFloat32());
}, vec2h(t12) {
  return nn$2(t12.readFloat16(), t12.readFloat16());
}, vec3h(t12) {
  return sn$1(t12.readFloat16(), t12.readFloat16(), t12.readFloat16());
}, vec4h(t12) {
  return an$1(t12.readFloat16(), t12.readFloat16(), t12.readFloat16(), t12.readFloat16());
}, vec2i(t12) {
  return pe$3(t12.readInt32(), t12.readInt32());
}, vec3i(t12) {
  return Fe$2(t12.readInt32(), t12.readInt32(), t12.readInt32());
}, vec4i(t12) {
  return he$1(t12.readInt32(), t12.readInt32(), t12.readInt32(), t12.readInt32());
}, vec2u(t12) {
  return le$3(t12.readUint32(), t12.readUint32());
}, vec3u(t12) {
  return Pe$2(t12.readUint32(), t12.readUint32(), t12.readUint32());
}, vec4u(t12) {
  return xe$4(t12.readUint32(), t12.readUint32(), t12.readUint32(), t12.readUint32());
}, "vec2<bool>"() {
  throw new Error("Booleans are not host-shareable");
}, "vec3<bool>"() {
  throw new Error("Booleans are not host-shareable");
}, "vec4<bool>"() {
  throw new Error("Booleans are not host-shareable");
}, mat2x2f(t12) {
  return j(t12.readFloat32(), t12.readFloat32(), t12.readFloat32(), t12.readFloat32());
}, mat3x3f(t12) {
  let e27 = () => {
    let r = t12.readFloat32();
    return t12.readFloat32(), r;
  };
  return q(t12.readFloat32(), t12.readFloat32(), e27(), t12.readFloat32(), t12.readFloat32(), e27(), t12.readFloat32(), t12.readFloat32(), e27());
}, mat4x4f(t12) {
  return g$1(t12.readFloat32(), t12.readFloat32(), t12.readFloat32(), t12.readFloat32(), t12.readFloat32(), t12.readFloat32(), t12.readFloat32(), t12.readFloat32(), t12.readFloat32(), t12.readFloat32(), t12.readFloat32(), t12.readFloat32(), t12.readFloat32(), t12.readFloat32(), t12.readFloat32(), t12.readFloat32());
}, struct(t12, e27) {
  let r = s$1(e27);
  G(t12, r);
  let n2 = {}, o2 = e27.propTypes;
  for (let [a2, i2] of Object.entries(o2)) G(t12, s$1(i2)), n2[a2] = J(t12, i2);
  return G(t12, r), n2;
}, array(t12, e27) {
  if (e27.elementCount === 0) throw new Error("Cannot read using a runtime-sized schema.");
  let r = s$1(e27), n2 = [];
  for (let o2 = 0; o2 < e27.elementCount; o2++) {
    G(t12, r);
    let a2 = e27.elementType, i2 = J(t12, a2);
    n2.push(i2);
  }
  return G(t12, r), n2;
}, ptr() {
  throw new Error("Pointers are not host-shareable");
}, atomic(t12, e27) {
  return J(t12, e27.inner);
}, decorated(t12, e27) {
  let r = y$1(e27);
  G(t12, r);
  let n2 = t12.currentByteOffset, o2 = J(t12, e27.inner);
  return t12.seekTo(n2 + l(e27)), o2;
}, uint8: (t12) => t12.readUint8(), uint8x2: (t12) => le$3(t12.readUint8(), t12.readUint8()), uint8x4: (t12) => xe$4(t12.readUint8(), t12.readUint8(), t12.readUint8(), t12.readUint8()), sint8: (t12) => t12.readInt8(), sint8x2: (t12) => pe$3(t12.readInt8(), t12.readInt8()), sint8x4: (t12) => he$1(t12.readInt8(), t12.readInt8(), t12.readInt8(), t12.readInt8()), unorm8: (t12) => t12.readUint8() / 255, unorm8x2: (t12) => F$3(t12.readUint8() / 255, t12.readUint8() / 255), unorm8x4: (t12) => v$1(t12.readUint8() / 255, t12.readUint8() / 255, t12.readUint8() / 255, t12.readUint8() / 255), snorm8: (t12) => t12.readInt8() / 127, snorm8x2: (t12) => F$3(t12.readInt8() / 127, t12.readInt8() / 127), snorm8x4: (t12) => v$1(t12.readInt8() / 127, t12.readInt8() / 127, t12.readInt8() / 127, t12.readInt8() / 127), uint16: (t12) => t12.readUint16(), uint16x2: (t12) => le$3(t12.readUint16(), t12.readUint16()), uint16x4: (t12) => xe$4(t12.readUint16(), t12.readUint16(), t12.readUint16(), t12.readUint16()), sint16: (t12) => t12.readInt16(), sint16x2: (t12) => pe$3(t12.readInt16(), t12.readInt16()), sint16x4: (t12) => he$1(t12.readInt16(), t12.readInt16(), t12.readInt16(), t12.readInt16()), unorm16: (t12) => t12.readUint16() / 65535, unorm16x2: (t12) => F$3(t12.readUint16() / 65535, t12.readUint16() / 65535), unorm16x4: (t12) => v$1(t12.readUint16() / 65535, t12.readUint16() / 65535, t12.readUint16() / 65535, t12.readUint16() / 65535), snorm16: (t12) => t12.readInt16() / 32767, snorm16x2: (t12) => F$3(t12.readInt16() / 32767, t12.readInt16() / 32767), snorm16x4: (t12) => v$1(t12.readInt16() / 32767, t12.readInt16() / 32767, t12.readInt16() / 32767, t12.readInt16() / 32767), float16(t12) {
  return t12.readFloat16();
}, float16x2: (t12) => F$3(t12.readFloat16(), t12.readFloat16()), float16x4: (t12) => v$1(t12.readFloat16(), t12.readFloat16(), t12.readFloat16(), t12.readFloat16()), float32: (t12) => t12.readFloat32(), float32x2: (t12) => F$3(t12.readFloat32(), t12.readFloat32()), float32x3: (t12) => ke$2(t12.readFloat32(), t12.readFloat32(), t12.readFloat32()), float32x4: (t12) => v$1(t12.readFloat32(), t12.readFloat32(), t12.readFloat32(), t12.readFloat32()), uint32: (t12) => t12.readUint32(), uint32x2: (t12) => le$3(t12.readUint32(), t12.readUint32()), uint32x3: (t12) => Pe$2(t12.readUint32(), t12.readUint32(), t12.readUint32()), uint32x4: (t12) => xe$4(t12.readUint32(), t12.readUint32(), t12.readUint32(), t12.readUint32()), sint32: (t12) => t12.readInt32(), sint32x2: (t12) => pe$3(t12.readInt32(), t12.readInt32()), sint32x3: (t12) => Fe$2(t12.readInt32(), t12.readInt32(), t12.readInt32()), sint32x4: (t12) => he$1(t12.readInt32(), t12.readInt32(), t12.readInt32(), t12.readInt32()), "unorm10-10-10-2"(t12) {
  let e27 = t12.readUint32(), r = (e27 >> 22) / 1023, n2 = (e27 >> 12 & 1023) / 1023, o2 = (e27 >> 2 & 1023) / 1023, a2 = (e27 & 3) / 3;
  return v$1(r, n2, o2, a2);
}, "unorm8x4-bgra"(t12) {
  let e27 = t12.readByte() / 255, r = t12.readByte() / 255, n2 = t12.readByte() / 255, o2 = t12.readByte() / 255;
  return v$1(n2, r, e27, o2);
}, unstruct(t12, e27) {
  let r = {}, n2 = e27.propTypes;
  for (let [o2, a2] of Object.entries(n2)) r[o2] = J(t12, a2);
  return r;
}, disarray(t12, e27) {
  let r = s$1(e27), n2 = [];
  for (let o2 = 0; o2 < e27.elementCount; o2++) G(t12, r), n2.push(J(t12, e27.elementType));
  return G(t12, r), n2;
}, "loose-decorated"(t12, e27) {
  G(t12, y$1(e27));
  let r = t12.currentByteOffset, n2 = J(t12, e27.inner);
  return t12.seekTo(r + l(e27)), n2;
} };
function J(t12, e27) {
  let r = Ya[e27.type];
  if (!r) throw new Error(`Cannot read data of type '${e27.type}'.`);
  return r(t12, e27);
}
function _o(t12, e27) {
  let r = l(t12);
  if (r === 0 || e27 === void 0 || e27 === null) return [];
  let n2 = new ArrayBuffer(r), o2 = new BufferWriter(n2), a2 = [];
  function i2(l$1, m2, f$12, c2) {
    if (m2 != null) {
      if (An$1(l$1) || Hn$1(l$1)) {
        let y2 = nr$1(l$1);
        for (let [w2, b2] of Object.entries(y2)) {
          let B3 = l$1.propTypes[w2];
          if (!B3) continue;
          let F2 = m2[w2];
          F2 !== void 0 && i2(B3, F2, f$12 + b2.offset, b2.padding ?? c2);
        }
        return;
      }
      if (In$2(l$1) || Yn$1(l$1)) {
        let y2 = l$1, w2 = f(l(y2.elementType), s$1(y2.elementType));
        if (!Array.isArray(m2)) throw new Error("Partial value for array must be an array");
        let b2 = m2 ?? [];
        b2.sort((B3, F2) => B3.idx - F2.idx);
        for (let { idx: B3, value: F2 } of b2) i2(y2.elementType, F2, f$12 + B3 * w2, w2 - l(y2.elementType));
      } else {
        let y2 = l(l$1);
        o2.seekTo(f$12), Ze(o2, l$1, m2), a2.push({ start: f$12, end: f$12 + y2, padding: c2 });
      }
    }
  }
  if (i2(t12, e27, 0), a2.length === 0) return [];
  let s2 = [], u2 = a2[0];
  for (let l2 = 1; l2 < a2.length; l2++) {
    let m2 = a2[l2];
    if (!m2 || !u2) throw new Error("Internal error: missing segment");
    m2.start === u2.end + (u2.padding ?? 0) ? (u2.end = m2.end, u2.padding = m2.padding) : (s2.push({ data: new Uint8Array(n2, u2.start, u2.end - u2.start) }), u2 = m2);
  }
  if (!u2) throw new Error("Internal error: missing segment");
  return s2.push({ data: new Uint8Array(n2, u2.start, u2.end - u2.start) }), s2;
}
function Ae(t12) {
  return !!t12?.usableAsStorage;
}
var yt = class t3 extends Error {
  constructor(e27) {
    super(`Resource '${z$2(e27) ?? "<unnamed>"}' cannot be bound as 'storage'. Use .$usage('storage') to allow it.`), Object.setPrototypeOf(this, t3.prototype);
  }
};
function sr$1(t12) {
  return !!t12.usableAsUniform;
}
var qo = { uniform: "uniform", mutable: "storage, read_write", readonly: "storage, read" }, Tt = class {
  constructor(e27, r) {
    this.usage = e27;
    this.buffer = r;
    this[o$2] = { dataType: r.dataType }, this[B$3] = r;
  }
  resourceType = "buffer-usage";
  [o$2];
  [B$3];
  $name(e27) {
    return this.buffer.$name(e27), this;
  }
  [R$2](e27) {
    let r = this.buffer.dataType, n2 = e27.getUniqueName(this), { group: o2, binding: a2 } = e27.allocateFixedEntry(this.usage === "uniform" ? { uniform: r } : { storage: r, access: this.usage }, this.buffer), i2 = qo[this.usage];
    return e27.addDeclaration(`@group(${o2}) @binding(${a2}) var<${i2}> ${n2}: ${e27.resolve(r).value};`), y$2(n2, r, Oe$1(r) ? "runtime" : this.usage);
  }
  toString() {
    return `${this.usage}:${z$2(this) ?? "<unnamed>"}`;
  }
  get [dn$2]() {
    let e27 = this.buffer.dataType, r = this.usage;
    return new Proxy({ [o$2]: true, get [de$3]() {
      return y$2(this, e27, Oe$1(e27) ? "runtime" : r);
    }, [R$2]: (n2) => n2.resolve(this), toString: () => `${this.usage}:${z$2(this) ?? "<unnamed>"}.$` }, C);
  }
  get $() {
    let e27 = Cr$1(), r = Er$1();
    if (e27.type === "normal") throw new it$2(r ? `Cannot access ${String(this.buffer)}. TypeGPU functions that depends on GPU resources need to be part of a compute dispatch, draw call or simulation` : ".$ and .value are inaccessible during normal JS execution. Try `.read()`");
    return e27.type === "codegen" ? this[dn$2] : e27.type === "simulate" ? (e27.buffers.has(this.buffer) || e27.buffers.set(this.buffer, bt$3(this.buffer.dataType, this.buffer.initial)), e27.buffers.get(this.buffer)) : dt$3(e27, "bufferUsage.ts#TgpuFixedBufferImpl/$");
  }
  get value() {
    return this.$;
  }
  set $(e27) {
    let r = Cr$1(), n2 = Er$1();
    if (r.type === "normal") throw new it$2(n2 ? `Cannot access ${String(this.buffer)}. TypeGPU functions that depends on GPU resources need to be part of a compute dispatch, draw call or simulation` : ".$ and .value are inaccessible during normal JS execution. Try `.write()`");
    if (r.type === "codegen") throw new Error("Unreachable bufferUsage.ts#TgpuFixedBufferImpl/$");
    if (r.type === "simulate") {
      r.buffers.set(this.buffer, e27);
      return;
    }
    dt$3(r, "bufferUsage.ts#TgpuFixedBufferImpl/$");
  }
  set value(e27) {
    this.$ = e27;
  }
}, ht = class {
  constructor(e27, r, n2) {
    this.usage = e27;
    this.dataType = r;
    this[o$2] = { dataType: r }, this.#e = n2, g$2(this, n2.key);
  }
  [o$2];
  resourceType = "buffer-usage";
  #e;
  [R$2](e27) {
    let r = this.dataType, n2 = e27.getUniqueName(this), o2 = e27.allocateLayoutEntry(this.#e.layout), a2 = qo[this.usage];
    return e27.addDeclaration(`@group(${o2}) @binding(${this.#e.idx}) var<${a2}> ${n2}: ${e27.resolve(r).value};`), y$2(n2, r, Oe$1(r) ? "runtime" : this.usage);
  }
  toString() {
    return `${this.usage}:${z$2(this) ?? "<unnamed>"}`;
  }
  get [dn$2]() {
    let e27 = this.dataType, r = this.usage;
    return new Proxy({ [o$2]: true, get [de$3]() {
      return y$2(this, e27, Oe$1(e27) ? "runtime" : r);
    }, [R$2]: (n2) => n2.resolve(this), toString: () => `${this.usage}:${z$2(this) ?? "<unnamed>"}.$` }, C);
  }
  get $() {
    if (Ve$1()) return this[dn$2];
    throw new Error("Direct access to buffer values is possible only as part of a compute dispatch or draw call. Try .read() or .write() instead");
  }
  get value() {
    return this.$;
  }
}, Mo = /* @__PURE__ */ new WeakMap();
function jo(t12) {
  if (!Ae(t12)) throw new Error(`Cannot pass ${t12} to asMutable, as it is not allowed to be used as storage. To allow it, call .$usage('storage') when creating the buffer.`);
  let e27 = Mo.get(t12);
  return e27 || (e27 = new Tt("mutable", t12), Mo.set(t12, e27)), e27;
}
var No = /* @__PURE__ */ new WeakMap();
function Qo(t12) {
  if (!Ae(t12)) throw new Error(`Cannot pass ${t12} to asReadonly, as it is not allowed to be used as storage. To allow it, call .$usage('storage') when creating the buffer.`);
  let e27 = No.get(t12);
  return e27 || (e27 = new Tt("readonly", t12), No.set(t12, e27)), e27;
}
var zo = /* @__PURE__ */ new WeakMap();
function Ho(t12) {
  if (!sr$1(t12)) throw new Error(`Cannot pass ${t12} to asUniform, as it is not allowed to be used as a uniform. To allow it, call .$usage('uniform') when creating the buffer.`);
  let e27 = zo.get(t12);
  return e27 || (e27 = new Tt("uniform", t12), zo.set(t12, e27)), e27;
}
var ei = { uniform: Ho, mutable: jo, readonly: Qo };
function xt(t12, e27, r) {
  return fe$3(e27) ? new ur$1(t12, e27, r) : new ur$1(t12, e27, r, ["storage", "uniform"]);
}
function be(t12) {
  return t12.resourceType === "buffer";
}
var ri = /* @__PURE__ */ getSystemEndianness(), ur$1 = class ur {
  constructor(e27, r, n2, o2) {
    this.dataType = r;
    this.initialOrBuffer = n2;
    this._disallowedUsages = o2;
    this.#e = e27.device, kr$2(n2) ? (this._ownBuffer = false, this._buffer = n2) : (this._ownBuffer = true, this.initial = n2);
  }
  [o$2] = true;
  resourceType = "buffer";
  flags = GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC;
  #e;
  _buffer = null;
  _ownBuffer;
  _destroyed = false;
  _hostBuffer;
  initial;
  usableAsUniform = false;
  usableAsStorage = false;
  usableAsVertex = false;
  usableAsIndex = false;
  get buffer() {
    if (this._destroyed) throw new Error("This buffer has been destroyed");
    return this._buffer || (this._buffer = (globalThis.__TYPEGPU_AUTONAME__ ?? ((a2) => a2))(this.#e.createBuffer({ size: l(this.dataType), usage: this.flags, mappedAtCreation: !!this.initial, label: z$2(this) ?? "<unnamed>" }), "_buffer"), this.initial && (this._writeToTarget(this._buffer.getMappedRange(), this.initial), this._buffer.unmap())), this._buffer;
  }
  get destroyed() {
    return this._destroyed;
  }
  $name(e27) {
    return g$2(this, e27), this._buffer && (this._buffer.label = e27), this;
  }
  $usage(...e27) {
    for (let r of e27) {
      if (this._disallowedUsages?.includes(r)) throw new Error(`Buffer of type ${this.dataType.type} cannot be used as ${r}`);
      this.flags |= r === "uniform" ? GPUBufferUsage.UNIFORM : 0, this.flags |= r === "storage" ? GPUBufferUsage.STORAGE : 0, this.flags |= r === "vertex" ? GPUBufferUsage.VERTEX : 0, this.flags |= r === "index" ? GPUBufferUsage.INDEX : 0, this.usableAsUniform = this.usableAsUniform || r === "uniform", this.usableAsStorage = this.usableAsStorage || r === "storage", this.usableAsVertex = this.usableAsVertex || r === "vertex", this.usableAsIndex = this.usableAsIndex || r === "index";
    }
    return this;
  }
  $addFlags(e27) {
    if (!this._ownBuffer) throw new Error("Cannot add flags to a buffer that is not managed by TypeGPU.");
    return e27 & GPUBufferUsage.MAP_READ ? (this.flags = GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ, this) : e27 & GPUBufferUsage.MAP_WRITE ? (this.flags = GPUBufferUsage.COPY_SRC | GPUBufferUsage.MAP_WRITE, this) : (this.flags |= e27, this);
  }
  compileWriter() {
    jr$1(this.dataType);
  }
  _writeToTarget(e27, r) {
    let n2 = jr$1(this.dataType);
    if (n2) try {
      n2(new DataView(e27), 0, r, ri === "little");
      return;
    } catch (o2) {
      console.error(`Error when using compiled writer for buffer ${z$2(this) ?? "<unnamed>"} - this is likely a bug, please submit an issue at https://github.com/software-mansion/TypeGPU/issues
Using fallback writer instead.`, o2);
    }
    Ze(new BufferWriter(e27), this.dataType, r);
  }
  write(e27) {
    let r = this.buffer;
    if (r.mapState === "mapped") {
      let o2 = r.getMappedRange();
      this._writeToTarget(o2, e27);
      return;
    }
    let n2 = l(this.dataType);
    this._hostBuffer || (this._hostBuffer = new ArrayBuffer(n2)), this._writeToTarget(this._hostBuffer, e27), this.#e.queue.writeBuffer(r, 0, this._hostBuffer, 0, n2);
  }
  writePartial(e27) {
    let r = this.buffer, n2 = _o(this.dataType, e27);
    if (r.mapState === "mapped") {
      let o2 = r.getMappedRange(), a2 = new Uint8Array(o2);
      for (let i2 of n2) a2.set(i2.data, i2.data.byteOffset);
    } else for (let o2 of n2) this.#e.queue.writeBuffer(r, o2.data.byteOffset, o2.data, 0, o2.data.byteLength);
  }
  clear() {
    let e27 = this.buffer;
    if (e27.mapState === "mapped") {
      new Uint8Array(e27.getMappedRange()).fill(0);
      return;
    }
    let r = this.#e.createCommandEncoder();
    r.clearBuffer(e27), this.#e.queue.submit([r.finish()]);
  }
  copyFrom(e27) {
    if (this.buffer.mapState === "mapped") throw new Error("Cannot copy to a mapped buffer.");
    let r = l(this.dataType), n2 = this.#e.createCommandEncoder();
    n2.copyBufferToBuffer(e27.buffer, 0, this.buffer, 0, r), this.#e.queue.submit([n2.finish()]);
  }
  async read() {
    let e27 = this.buffer;
    if (e27.mapState === "mapped") {
      let a2 = e27.getMappedRange();
      return J(new BufferReader(a2), this.dataType);
    }
    if (e27.usage & GPUBufferUsage.MAP_READ) {
      await e27.mapAsync(GPUMapMode.READ);
      let a2 = e27.getMappedRange(), i2 = J(new BufferReader(a2), this.dataType);
      return e27.unmap(), i2;
    }
    let r = (globalThis.__TYPEGPU_AUTONAME__ ?? ((a2) => a2))(this.#e.createBuffer({ size: l(this.dataType), usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ }), "r"), n2 = this.#e.createCommandEncoder();
    n2.copyBufferToBuffer(e27, 0, r, 0, l(this.dataType)), this.#e.queue.submit([n2.finish()]), await r.mapAsync(GPUMapMode.READ, 0, l(this.dataType));
    let o2 = J(new BufferReader(r.getMappedRange()), this.dataType);
    return r.unmap(), r.destroy(), o2;
  }
  as(e27) {
    return ei[e27]?.(this);
  }
  destroy() {
    this._destroyed || (this._destroyed = true, this._ownBuffer && this._buffer?.destroy());
  }
  toString() {
    return `buffer:${z$2(this) ?? "<unnamed>"}`;
  }
};
function Ko(t12, e27) {
  return new lr$1(ue$1(), t12, e27);
}
function Yo(t12, e27) {
  return new lr$1(fe$1(), t12, e27);
}
function wt$1(t12) {
  let e27 = t12;
  return e27?.resourceType === "sampler" && !!e27[o$2];
}
function bt(t12) {
  let e27 = t12;
  return e27?.resourceType === "sampler-comparison" && !!e27[o$2];
}
var pr$1 = class pr {
  constructor(e27, r) {
    this.schema = e27;
    this.#e = r, this.resourceType = e27.type === "sampler_comparison" ? "sampler-comparison" : "sampler", g$2(this, r.key);
  }
  [o$2] = { unwrap: void 0 };
  resourceType;
  #e;
  [R$2](e27) {
    let r = e27.getUniqueName(this), n2 = e27.allocateLayoutEntry(this.#e.layout);
    return e27.addDeclaration(`@group(${n2}) @binding(${this.#e.idx}) var ${r}: ${e27.resolve(this.schema).value};`), y$2(r, this.schema, "handle");
  }
  get [dn$2]() {
    let e27 = this.schema;
    return new Proxy({ [o$2]: true, get [de$3]() {
      return y$2(this, e27, "handle");
    }, [R$2]: (r) => r.resolve(this), toString: () => `${this.toString()}.$` }, C);
  }
  get $() {
    if (Ve$1()) return this[dn$2];
    throw new Error("Direct access to sampler values is possible only as part of a compute dispatch or draw call.");
  }
  get value() {
    return this.$;
  }
  toString() {
    return `${this.resourceType}:${z$2(this) ?? "<unnamed>"}`;
  }
}, lr$1 = class lr {
  constructor(e27, r, n2) {
    this.schema = e27;
    this.#r = r, this.#n = n2, this.resourceType = e27.type === "sampler_comparison" ? "sampler-comparison" : "sampler", this[o$2] = { unwrap: () => (this.#t || (this.#t = this.#n.device.createSampler({ ...this.#r, label: z$2(this) ?? "<unnamed>" })), this.#t) }, this.#e = r.minFilter === "linear" || r.magFilter === "linear" || r.mipmapFilter === "linear";
  }
  [o$2];
  resourceType;
  #e;
  #t = null;
  #r;
  #n;
  [R$2](e27) {
    let r = e27.getUniqueName(this), { group: n2, binding: o2 } = e27.allocateFixedEntry(this.schema.type === "sampler_comparison" ? { sampler: "comparison" } : { sampler: this.#e ? "filtering" : "non-filtering" }, this);
    return e27.addDeclaration(`@group(${n2}) @binding(${o2}) var ${r}: ${e27.resolve(this.schema).value};`), y$2(r, this.schema, "handle");
  }
  get [dn$2]() {
    let e27 = this.schema;
    return new Proxy({ [o$2]: true, get [de$3]() {
      return y$2(this, e27, "handle");
    }, [R$2]: (r) => r.resolve(this), toString: () => `${this.toString()}.$` }, C);
  }
  get $() {
    if (Ve$1()) return this[dn$2];
    throw new Error("Direct access to sampler values is possible only as part of a compute dispatch or draw call.");
  }
  get value() {
    return this.$;
  }
  $name(e27) {
    return g$2(this, e27), this;
  }
  toString() {
    return `${this.resourceType}:${z$2(this) ?? "<unnamed>"}`;
  }
};
var mr$1 = class mr {
  constructor(e27, r) {
    this.schema = e27;
    this.#e = r, g$2(this, r.key);
  }
  resourceType = "external-texture";
  [o$2] = true;
  #e;
  [R$2](e27) {
    let r = e27.getUniqueName(this), n2 = e27.allocateLayoutEntry(this.#e.layout);
    return e27.addDeclaration(`@group(${n2}) @binding(${this.#e.idx}) var ${r}: ${e27.resolve(this.schema).value};`), y$2(r, hr$2(), "handle");
  }
  get [dn$2]() {
    let e27 = this.schema;
    return new Proxy({ [o$2]: true, get [de$3]() {
      return y$2(this, e27, "handle");
    }, [R$2]: (r) => r.resolve(this), toString: () => `textureExternal:${z$2(this) ?? "<unnamed>"}.$` }, C);
  }
  get $() {
    if (Ve$1()) return this[dn$2];
    throw new Error("Direct access to texture views values is possible only as part of a compute dispatch or draw call. Try .read() or .write() instead");
  }
  get value() {
    return this.$;
  }
  toString() {
    return `textureExternal:${z$2(this) ?? "<unnamed>"}`;
  }
};
function Kr(t12) {
  let { videoWidth: e27, videoHeight: r } = t12;
  if (e27 && r) return { width: e27, height: r };
  let { naturalWidth: n2, naturalHeight: o2 } = t12;
  if (n2 && o2) return { width: n2, height: o2 };
  let { codedWidth: a2, codedHeight: i2 } = t12;
  if (a2 && i2) return { width: a2, height: i2 };
  let { width: s2, height: u2 } = t12;
  if (s2 && u2) return { width: s2, height: u2 };
  throw new Error("Cannot determine dimensions of the provided image source.");
}
var ni = `
struct VertexOutput {
  @builtin(position) pos: vec4f,
  @location(0) uv: vec2f,
}

@vertex
fn vs_main(@builtin(vertex_index) i: u32) -> VertexOutput {
  const pos = array(vec2f(-1, -1), vec2f(3, -1), vec2f(-1, 3));
  const uv = array(vec2f(0, 1), vec2f(2, 1), vec2f(0, -1));
  return VertexOutput(vec4f(pos[i], 0, 1), uv[i]);
}`, oi = `
@group(0) @binding(0) var src: texture_2d<f32>;
@group(0) @binding(1) var samp: sampler;

@fragment
fn fs_main(@location(0) uv: vec2f) -> @location(0) vec4f {
  return textureSample(src, samp, uv);
}`, ai = `
@group(0) @binding(0) var src: texture_2d<f32>;
@group(0) @binding(1) var samp: sampler;

@fragment
fn fs_main(@location(0) uv: vec2f) -> @location(0) vec4f {
  let r = textureGather(0, src, samp, uv);
  let g = textureGather(1, src, samp, uv);
  let b = textureGather(2, src, samp, uv);
  let a = textureGather(3, src, samp, uv);
  return vec4f(dot(r, vec4f(0.25)), dot(g, vec4f(0.25)), dot(b, vec4f(0.25)), dot(a, vec4f(0.25)));
}`, Hr = /* @__PURE__ */ new WeakMap();
function ii(t12) {
  let e27 = Hr.get(t12);
  return e27 || (e27 = { vertexModule: t12.createShaderModule({ code: ni }), filterableResources: /* @__PURE__ */ new Map(), layoutResources: /* @__PURE__ */ new Map() }, Hr.set(t12, e27)), e27;
}
function si(t12, e27, r) {
  let n2 = ii(t12), o2 = n2.filterableResources.get(e27);
  o2 || (o2 = { fragmentModule: t12.createShaderModule({ code: e27 ? oi : ai }), sampler: (globalThis.__TYPEGPU_AUTONAME__ ?? ((a3) => a3))(t12.createSampler(e27 ? { magFilter: "linear", minFilter: "linear" } : {}), "sampler") }, n2.filterableResources.set(e27, o2));
  let a2 = `${e27}:${r}`, i2 = n2.layoutResources.get(a2);
  if (!i2) {
    let s2 = t12.createBindGroupLayout({ entries: [{ binding: 0, visibility: GPUShaderStage.FRAGMENT, texture: { sampleType: r } }, { binding: 1, visibility: GPUShaderStage.FRAGMENT, sampler: { type: e27 ? "filtering" : "non-filtering" } }] });
    i2 = { bindGroupLayout: s2, pipelineLayout: t12.createPipelineLayout({ bindGroupLayouts: [s2] }) }, n2.layoutResources.set(a2, i2);
  }
  return { vertexModule: n2.vertexModule, ...o2, ...i2 };
}
function Xo(t12) {
  let { device: e27, source: r, destination: n2, format: o2, filterable: a2, sampleType: i2 } = t12, s2 = si(e27, a2, i2), u2 = e27.createRenderPipeline({ layout: s2.pipelineLayout, vertex: { module: s2.vertexModule }, fragment: { module: s2.fragmentModule, targets: [{ format: o2 }] }, primitive: { topology: "triangle-list" } }), l2 = e27.createBindGroup({ layout: s2.bindGroupLayout, entries: [{ binding: 0, resource: r }, { binding: 1, resource: s2.sampler }] }), m2 = !t12.encoder, f2 = t12.encoder ?? e27.createCommandEncoder(), c2 = f2.beginRenderPass({ colorAttachments: [{ view: n2, loadOp: "clear", storeOp: "store" }] });
  c2.setPipeline(u2), c2.setBindGroup(0, l2), c2.draw(3), c2.end(), m2 && e27.queue.submit([f2.finish()]);
}
function Jo(t12) {
  Hr.delete(t12);
}
function Zo(t12, e27, r) {
  let n2 = Ke(e27), o2 = Tr$2(t12, e27), a2 = o2.includes("float"), i2 = o2.includes("unfilterable-float");
  if (!a2 && !i2) throw new Error(`Cannot ${r} for format '${e27}': only float formats are supported.`);
  if (!n2.canRenderAttachment) throw new Error(`Cannot ${r} for format '${e27}': format does not support render attachments.`);
  return { filterable: a2, sampleType: a2 ? "float" : "unfilterable-float" };
}
function ea(t12, e27, r = 0, n2) {
  if (e27.dimension !== "2d") throw new Error("Mipmap generation only supports 2D textures.");
  let { filterable: o2, sampleType: a2 } = Zo(t12, e27.format, "generate mipmaps"), i2 = n2 ?? e27.mipLevelCount - r;
  for (let s2 = 0; s2 < e27.depthOrArrayLayers; s2++) for (let u2 = r; u2 < r + i2 - 1; u2++) {
    let l2 = (m2) => ({ dimension: "2d", baseMipLevel: m2, mipLevelCount: 1, baseArrayLayer: s2, arrayLayerCount: 1 });
    Xo({ device: t12, source: e27.createView(l2(u2)), destination: e27.createView(l2(u2 + 1)), format: e27.format, filterable: o2, sampleType: a2 });
  }
}
function ta(t12, e27, r, n2 = 0) {
  if (e27.dimension !== "2d") throw new Error("Resampling only supports 2D textures.");
  let { filterable: o2 } = Zo(t12, e27.format, "resample"), { width: a2, height: i2 } = Kr(r), s2 = (globalThis.__TYPEGPU_AUTONAME__ ?? ((a3) => a3))(t12.createTexture({ size: [a2, i2], format: "rgba8unorm", usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT }), "s");
  t12.queue.copyExternalImageToTexture({ source: r }, { texture: s2 }, [a2, i2]);
  let u2 = (globalThis.__TYPEGPU_AUTONAME__ ?? ((a3) => a3))(t12.createTexture({ size: [e27.width, e27.height], format: e27.format, usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.COPY_SRC }), "u"), l2 = t12.createCommandEncoder();
  Xo({ device: t12, source: s2.createView(), destination: u2.createView(), format: e27.format, filterable: o2, sampleType: "float", encoder: l2 }), l2.copyTextureToTexture({ texture: u2 }, { texture: e27, origin: { x: 0, y: 0, z: n2 } }, { width: e27.width, height: e27.height, depthOrArrayLayers: 1 }), t12.queue.submit([l2.finish()]), s2.destroy(), u2.destroy();
}
function ui(t12) {
  return { dimension: t12.dimension ?? "2d", sampleType: Ke(t12.format).channelType, multisampled: (t12.sampleCount ?? 1) !== 1 };
}
function ra(t12, e27) {
  return new Yr$1(t12, e27);
}
function le(t12) {
  return t12?.resourceType === "texture" && !!t12[o$2];
}
function ve2(t12) {
  return t12?.resourceType === "texture-view" && !!t12[o$2];
}
var Yr$1 = class Yr {
  constructor(e27, r) {
    this.props = e27;
    let n2 = e27.format;
    this.#a = r, this.#e = Ke(n2);
    let o2 = this.#e.texelSize;
    this.#t = o2 === "non-copyable" ? "non-copyable" : e27.size[0] * (e27.size[1] ?? 1) * (e27.size[2] ?? 1) * o2, this[o$2] = { unwrap: () => {
      if (this.#r) throw new Error("This texture has been destroyed");
      return this.#o || (this.#o = r.device.createTexture({ label: z$2(this) ?? "<unnamed>", format: e27.format, size: e27.size, usage: this.#n, dimension: e27.dimension ?? "2d", viewFormats: e27.viewFormats ?? [], mipLevelCount: e27.mipLevelCount ?? 1, sampleCount: e27.sampleCount ?? 1 })), this.#o;
    } };
  }
  [o$2];
  resourceType = "texture";
  usableAsSampled = false;
  usableAsStorage = false;
  usableAsRender = false;
  #e;
  #t;
  #r = false;
  #n = GPUTextureUsage.COPY_DST | GPUTextureUsage.COPY_SRC;
  #o = null;
  #a;
  $name(e27) {
    return g$2(this, e27), this;
  }
  $usage(...e27) {
    let r = e27.includes("storage"), n2 = e27.includes("sampled"), o2 = e27.includes("render");
    return this.#n |= n2 ? GPUTextureUsage.TEXTURE_BINDING : 0, this.#n |= r ? GPUTextureUsage.STORAGE_BINDING : 0, this.#n |= o2 ? GPUTextureUsage.RENDER_ATTACHMENT : 0, this.usableAsStorage ||= r, this.usableAsSampled ||= n2, this.usableAsRender ||= o2, this;
  }
  createView(e27, r) {
    return e27 === "render" ? new Jr(this, r) : new Xr$1(e27 ?? Tr$3(ui(this.props)), this, r);
  }
  #i(e27 = 0) {
    let r = 2 ** e27, [n2, o2, a2] = [Math.max(1, Math.floor((this.props.size[0] ?? 1) / r)), Math.max(1, Math.floor((this.props.size[1] ?? 1) / r)), Math.max(1, Math.floor((this.props.size[2] ?? 1) / r))], i2 = this.#e.texelSize;
    if (i2 === "non-copyable") throw new Error(`Cannot clear texture with format '${this.props.format}': this format does not support copy operations.`);
    this.#a.device.queue.writeTexture({ texture: this[o$2].unwrap(), mipLevel: e27 }, new Uint8Array(n2 * o2 * a2 * i2), { bytesPerRow: i2 * n2, rowsPerImage: o2 }, [n2, o2, a2]);
  }
  clear(e27 = "all") {
    if (e27 === "all") {
      let r = this.props.mipLevelCount ?? 1;
      for (let n2 = 0; n2 < r; n2++) this.#i(n2);
    } else this.#i(e27);
  }
  generateMipmaps(e27 = 0, r) {
    if (this.usableAsRender === false) throw new Error("generateMipmaps called without specifying 'render' usage. Add it via the $usage('render') method.");
    let n2 = r ?? (this.props.mipLevelCount ?? 1) - e27;
    if (n2 <= 1) {
      console.warn(`generateMipmaps is a no-op: would generate ${n2} mip levels (base: ${e27}, total: ${this.props.mipLevelCount ?? 1})`);
      return;
    }
    if (e27 >= (this.props.mipLevelCount ?? 1)) throw new Error(`Base mip level ${e27} is out of range. Texture has ${this.props.mipLevelCount ?? 1} mip levels.`);
    ea(this.#a.device, this[o$2].unwrap(), e27, n2);
  }
  write(e27, r = 0) {
    if (e27 instanceof ArrayBuffer || ArrayBuffer.isView(e27)) {
      this.#u(e27, r);
      return;
    }
    let n2 = this.props.dimension ?? "2d";
    if (!Array.isArray(e27)) {
      this.#s(e27, n2 === "3d" ? 0 : void 0);
      return;
    }
    let a2 = this.props.size[2] ?? 1;
    e27.length > a2 && console.warn(`Too many image sources provided. Expected ${a2} layers, got ${e27.length}. Extra sources will be ignored.`);
    for (let i2 = 0; i2 < Math.min(e27.length, a2); i2++) {
      let s2 = e27[i2];
      s2 && this.#s(s2, i2);
    }
  }
  #u(e27, r) {
    let n2 = Math.max(1, this.props.size[0] >> r), o2 = Math.max(1, (this.props.size[1] ?? 1) >> r), a2 = Math.max(1, (this.props.size[2] ?? 1) >> r), i2 = this.#e.texelSize;
    if (i2 === "non-copyable") throw new Error(`Cannot write to texture with format '${this.props.format}': this format does not support copy operations.`);
    let s2 = n2 * o2 * a2 * i2, u2 = e27.byteLength ?? e27.byteLength;
    if (u2 !== s2) throw new Error(`Buffer size mismatch. Expected ${s2} bytes for mip level ${r}, got ${u2} bytes.`);
    this.#a.device.queue.writeTexture({ texture: this[o$2].unwrap(), mipLevel: r }, "buffer" in e27 ? e27.buffer : e27, { bytesPerRow: i2 * n2, rowsPerImage: o2 }, [n2, o2, a2]);
  }
  #s(e27, r) {
    let n2 = this.props.size[0], o2 = this.props.size[1] ?? 1, { width: a2, height: i2 } = Kr(e27);
    if (a2 !== n2 || i2 !== o2) {
      ta(this.#a.device, this[o$2].unwrap(), e27, r);
      return;
    }
    this.#a.device.queue.copyExternalImageToTexture({ source: e27 }, { texture: this[o$2].unwrap(), ...r !== void 0 && { origin: { x: 0, y: 0, z: r } } }, r !== void 0 ? [n2, o2, 1] : this.props.size);
  }
  copyFrom(e27) {
    if (e27.props.format !== this.props.format) throw new Error(`Texture format mismatch. Source texture has format ${e27.props.format}, target texture has format ${this.props.format}`);
    if (e27.props.size[0] !== this.props.size[0] || (e27.props.size[1] ?? 1) !== (this.props.size[1] ?? 1) || (e27.props.size[2] ?? 1) !== (this.props.size[2] ?? 1)) throw new Error(`Texture size mismatch. Source texture has size ${e27.props.size.join("x")}, target texture has size ${this.props.size.join("x")}`);
    let r = this.#a.device.createCommandEncoder();
    r.copyTextureToTexture({ texture: e27[o$2].unwrap() }, { texture: this[o$2].unwrap() }, e27.props.size), this.#a.device.queue.submit([r.finish()]);
  }
  get destroyed() {
    return this.#r;
  }
  destroy() {
    this.#r || (this.#r = true, this.#o?.destroy());
  }
}, Xr$1 = class Xr {
  constructor(e27, r, n2) {
    this.schema = e27;
    this.#e = r, this.#r = n2, this[o$2] = { unwrap: () => {
      if (!this.#t) {
        let o2 = this.schema, a2 = br$2(o2) ? o2.format : this.#e.props.format;
        this.#t = this.#e[o$2].unwrap().createView({ ...this.#r, label: z$2(this) ?? "<unnamed>", format: this.#r?.format ?? a2, dimension: o2.dimension });
      }
      return this.#t;
    } };
  }
  [o$2];
  resourceType = "texture-view";
  #e;
  #t;
  #r;
  $name(e27) {
    return g$2(this, e27), this.#t && (this.#t.label = e27), this;
  }
  get [dn$2]() {
    let e27 = this.schema;
    return new Proxy({ [o$2]: true, get [de$3]() {
      return y$2(this, e27, "handle");
    }, [R$2]: (r) => r.resolve(this), toString: () => `${this.toString()}.$` }, C);
  }
  get $() {
    if (Ve$1()) return this[dn$2];
    throw new Error("Direct access to texture view values is possible only as part of a compute dispatch or draw call. Try .read() or .write() instead");
  }
  get value() {
    return this.$;
  }
  toString() {
    return `textureView:${z$2(this) ?? "<unnamed>"}`;
  }
  [R$2](e27) {
    let r = e27.getUniqueName(this), { group: n2, binding: o2 } = e27.allocateFixedEntry(br$2(this.schema) ? { storageTexture: this.schema } : { texture: this.schema, sampleType: this.#r?.sampleType ?? this.schema.bindingSampleType[0] }, this);
    return e27.addDeclaration(`@group(${n2}) @binding(${o2}) var ${r}: ${e27.resolve(this.schema).value};`), y$2(r, this.schema, "handle");
  }
}, vt = class {
  constructor(e27, r) {
    this.schema = e27;
    this.#e = r, g$2(this, r.key);
  }
  [o$2] = { unwrap: void 0 };
  resourceType = "texture-view";
  #e;
  toString() {
    return `textureView:${z$2(this) ?? "<unnamed>"}`;
  }
  [R$2](e27) {
    let r = e27.getUniqueName(this), n2 = e27.allocateLayoutEntry(this.#e.layout);
    return e27.addDeclaration(`@group(${n2}) @binding(${this.#e.idx}) var ${r}: ${e27.resolve(this.schema).value};`), y$2(r, this.schema, "handle");
  }
  get [dn$2]() {
    let e27 = this.schema;
    return new Proxy({ [o$2]: true, get [de$3]() {
      return y$2(this, e27, "handle");
    }, [R$2]: (r) => r.resolve(this), toString: () => `${this.toString()}.$` }, C);
  }
  get $() {
    if (Ve$1()) return this[dn$2];
    throw new Error("Direct access to texture views values is possible only as part of a compute dispatch or draw call. Try .read() or .write() instead");
  }
  get value() {
    return this.$;
  }
}, Jr = class {
  constructor(e27, r = {}) {
    this.descriptor = r;
    this[o$2] = { unwrap: () => e27[o$2].unwrap().createView({ label: z$2(this) ?? "<unnamed>", ...this.descriptor }) };
  }
  [o$2];
  resourceType = "texture-view";
};
function Zr$1(t12) {
  return !!t12?.usableAsSampled;
}
var fr$1 = class t4 extends Error {
  constructor(e27) {
    super(`Resource '${z$2(e27) ?? "<unnamed>"}' cannot be bound as 'sampled'. Use .$usage('sampled') to allow it.`), Object.setPrototypeOf(this, t4.prototype);
  }
};
function li(t12) {
  let e27 = {};
  for (let [r, n2] of Object.entries(t12)) {
    if (n2 === null) {
      e27[r] = null;
      continue;
    }
    if ("texture" in n2 && typeof n2.texture == "string") {
      let o2 = n2.texture;
      e27[r] = { ...n2, texture: Tr$3({ dimension: n2.viewDimension ?? "2d", sampleType: o2 === "sint" ? f$1 : o2 === "uint" ? T$2 : x$2, multisampled: n2.multisampled ?? false }) };
    } else if ("storageTexture" in n2 && typeof n2.storageTexture == "string") {
      let o2 = { readonly: "read-only", writeonly: "write-only", mutable: "read-write" };
      e27[r] = { ...n2, storageTexture: Tr$3({ access: o2[n2.access ?? "writeonly"], format: n2.storageTexture, dimension: n2.viewDimension ?? "2d" }) };
    } else "externalTexture" in n2 && Object.keys(n2.externalTexture).length === 0 ? e27[r] = { ...n2, externalTexture: { type: "texture_external", dimension: "2d" } } : e27[r] = n2;
  }
  return e27;
}
function cr$1(t12) {
  let e27 = li(t12);
  return new tn(e27);
}
function dr$1(t12) {
  return !!t12 && t12.resourceType === "bind-group-layout";
}
function Ee(t12) {
  return !!t12 && t12.resourceType === "bind-group";
}
var en = class t5 extends Error {
  constructor(e27, r) {
    super(`Bind group '${e27 ?? "<unnamed>"}' is missing a required binding '${r}'`), Object.setPrototypeOf(this, t5.prototype);
  }
}, na = ["compute", "fragment"], St = ["compute", "vertex", "fragment"], tn = class {
  constructor(e27) {
    this.entries = e27;
    let r = 0;
    for (let [n2, o2] of Object.entries(e27)) {
      if (o2 === null) {
        r++;
        continue;
      }
      let a2 = { layout: this, key: n2, idx: r };
      if ("uniform" in o2 && (this.bound[n2] = new ht("uniform", o2.uniform, a2)), "storage" in o2) {
        let i2 = "type" in o2.storage ? o2.storage : o2.storage(0);
        this.bound[n2] = new ht(o2.access ?? "readonly", i2, a2);
      }
      "texture" in o2 && (this.bound[n2] = new vt(o2.texture, a2)), "storageTexture" in o2 && (this.bound[n2] = new vt(o2.storageTexture, a2)), "externalTexture" in o2 && (this.bound[n2] = new mr$1(o2.externalTexture, a2)), "sampler" in o2 && (this.bound[n2] = new pr$1(o2.sampler === "comparison" ? fe$1() : ue$1(), a2)), Object.defineProperty(this.value, n2, { get: () => this.bound[n2].value }), r++;
    }
  }
  [o$2] = true;
  _index;
  resourceType = "bind-group-layout";
  bound = {};
  value = {};
  $ = this.value;
  get [dn$2]() {
    return this.$;
  }
  toString() {
    return `bindGroupLayout:${z$2(this) ?? "<unnamed>"}`;
  }
  get index() {
    return this._index;
  }
  $name(e27) {
    return g$2(this, e27), this;
  }
  $idx(e27) {
    return this._index = e27, this;
  }
  unwrap(e27) {
    return e27.device.createBindGroupLayout({ label: z$2(this) ?? "<unnamed>", entries: Object.values(this.entries).map((n2, o2) => {
      if (n2 === null) return null;
      let a2 = n2.visibility, i2 = { binding: o2, visibility: 0 };
      if ("uniform" in n2) a2 = a2 ?? St, i2.buffer = { type: "uniform" };
      else if ("storage" in n2) a2 = a2 ?? (n2.access === "mutable" ? na : St), i2.buffer = { type: n2.access === "mutable" ? "storage" : "read-only-storage" };
      else if ("sampler" in n2) a2 = a2 ?? St, i2.sampler = { type: n2.sampler };
      else if ("texture" in n2) {
        a2 = a2 ?? St;
        let { multisampled: s2, dimension: u2, bindingSampleType: l2 } = n2.texture;
        i2.texture = { sampleType: n2.sampleType ?? l2[0], viewDimension: u2, multisampled: s2 };
      } else if ("storageTexture" in n2) {
        a2 = a2 ?? na;
        let { dimension: s2, access: u2, format: l2 } = n2.storageTexture;
        i2.storageTexture = { access: u2, format: l2, viewDimension: s2 };
      } else "externalTexture" in n2 && (a2 = a2 ?? St, i2.externalTexture = {});
      return a2?.includes("compute") && (i2.visibility |= GPUShaderStage.COMPUTE), a2?.includes("vertex") && (i2.visibility |= GPUShaderStage.VERTEX), a2?.includes("fragment") && (i2.visibility |= GPUShaderStage.FRAGMENT), i2;
    }).filter((n2) => n2 !== null) });
  }
}, et = class {
  constructor(e27, r) {
    this.layout = e27;
    this.entries = r;
    for (let n2 of Object.keys(e27.entries)) if (e27.entries[n2] !== null && !(n2 in r)) throw new en(z$2(e27), n2);
  }
  resourceType = "bind-group";
  unwrap(e27) {
    return e27.device.createBindGroup({ label: z$2(this.layout) ?? "<unnamed>", layout: e27.unwrap(this.layout), entries: Object.entries(this.layout.entries).map(([n2, o2], a2) => {
      if (o2 === null) return null;
      let i2 = this.entries[n2];
      if (i2 === void 0) throw new Error(`'${n2}' is a resource required to populate bind group layout '${z$2(this.layout) ?? "<unnamed>"}'.`);
      if ("uniform" in o2) {
        let s2;
        if (be(i2)) {
          if (!sr$1(i2)) throw new Qe$2(i2);
          s2 = { buffer: e27.unwrap(i2) };
        } else s2 = { buffer: i2 };
        return { binding: a2, resource: s2 };
      }
      if ("storage" in o2) {
        let s2;
        if (be(i2)) {
          if (!Ae(i2)) throw new yt(i2);
          s2 = { buffer: e27.unwrap(i2) };
        } else s2 = { buffer: i2 };
        return { binding: a2, resource: s2 };
      }
      if ("texture" in o2) {
        let s2;
        if (le(i2)) {
          if (!Zr$1(i2)) throw new fr$1(i2);
          s2 = e27.unwrap(i2.createView(o2.texture));
        } else ve2(i2) ? s2 = e27.unwrap(i2) : s2 = i2;
        return { binding: a2, resource: s2 };
      }
      if ("storageTexture" in o2) {
        let s2;
        if (le(i2)) {
          if (!Ae(i2)) throw new yt(i2);
          s2 = e27.unwrap(i2.createView(o2.storageTexture));
        } else ve2(i2) ? s2 = e27.unwrap(i2) : s2 = i2;
        return { binding: a2, resource: s2 };
      }
      if ("sampler" in o2) return bt(i2) || wt$1(i2) ? { binding: a2, resource: e27.unwrap(i2) } : { binding: a2, resource: i2 };
      if ("externalTexture" in o2) return { binding: a2, resource: i2 };
      throw new Error(`Malformed bind group entry: ${eo(i2)}`);
    }).filter((n2) => n2 !== null) });
  }
};
function Ge(t12) {
  return new rn(t12);
}
var rn = class {
  constructor(e27 = void 0) {
    this.defaultValue = e27;
  }
  [o$2] = true;
  resourceType = "slot";
  $name(e27) {
    return g$2(this, e27), this;
  }
  areEqual(e27, r) {
    return Object.is(e27, r);
  }
  toString() {
    return `slot:${z$2(this) ?? "<unnamed>"}`;
  }
  get [dn$2]() {
    let e27 = O$3();
    if (!e27) throw new Error("Cannot access tgpu.slot's value outside of resolution.");
    return Be(e27.unwrap(this));
  }
  get value() {
    return this[dn$2];
  }
  get $() {
    return this.value;
  }
};
function tt(t12, e27) {
  return new Ut$1("private", t12, e27);
}
function nn(t12) {
  return new Ut$1("workgroup", t12);
}
var Ut$1 = class Ut {
  [o$2] = {};
  #e;
  #t;
  #r;
  constructor(e27, r, n2) {
    this.#e = e27, this.#t = r, this.#r = n2;
  }
  [R$2](e27) {
    let r = e27.getUniqueName(this), n2 = `var<${this.#e}> ${r}: ${e27.resolve(this.#t).value}`;
    return this.#r ? e27.addDeclaration(`${n2} = ${e27.resolve(this.#r, this.#t).value};`) : e27.addDeclaration(`${n2};`), y$2(r, this.#t, Oe$1(this.#t) ? "runtime" : this.#e);
  }
  $name(e27) {
    return g$2(this, e27), this;
  }
  toString() {
    return `var:${z$2(this) ?? "<unnamed>"}`;
  }
  get [dn$2]() {
    let e27 = this.#t, r = Oe$1(e27) ? "runtime" : this.#e;
    return new Proxy({ [o$2]: true, get [de$3]() {
      return y$2(this, e27, r);
    }, [R$2]: (n2) => n2.resolve(this), toString: () => `var:${z$2(this) ?? "<unnamed>"}.$` }, C);
  }
  get $() {
    let e27 = Cr$1(), r = Er$1();
    if (e27.type === "normal") throw new rt$3(r ? `Cannot access variable '${z$2(this) ?? "<unnamed>"}'. TypeGPU functions that depends on GPU resources need to be part of a compute dispatch, draw call or simulation` : "TypeGPU variables are inaccessible during normal JS execution. If you wanted to simulate GPU behavior, try `tgpu.simulate()`");
    return e27.type === "codegen" ? this[dn$2] : e27.type === "simulate" ? (e27.vars[this.#e].has(this) || e27.vars[this.#e].set(this, this.#r), e27.vars[this.#e].get(this)) : dt$3(e27, "tgpuVariable.ts#TgpuVarImpl/$");
  }
  set $(e27) {
    let r = Cr$1(), n2 = Er$1();
    if (r.type === "normal") throw new rt$3(n2 ? `Cannot access ${String(this)}. TypeGPU functions that depends on GPU resources need to be part of a compute dispatch, draw call or simulation` : "TypeGPU variables are inaccessible during normal JS execution. If you wanted to simulate GPU behavior, try `tgpu.simulate()`");
    if (r.type === "codegen") throw new Error("Unreachable tgpuVariable.ts#TgpuVarImpl/$");
    if (r.type === "simulate") {
      r.vars[this.#e].set(this, e27);
      return;
    }
    dt$3(r, "tgpuVariable.ts#TgpuVarImpl/$");
  }
  get value() {
    return this.$;
  }
  set value(e27) {
    this.$ = e27;
  }
};
var oa = tt(T$2, 0).$name("dataBlockIndex"), aa = tt(T$2, 0).$name("dataByteIndex"), ia = Ge().$name("dataBuffer"), fi = I$1([], T$2)`() {
  let i = dataByteIndex;
  dataByteIndex = dataByteIndex + 1u;
  return i;
}`.$uses({ dataByteIndex: aa }).$name("nextByteIndex"), T2 = "dataBuffer[dataBlockIndex].serializedData[nextByteIndex()]", sa = { f32: I$1([x$2])`(n) => {
  ${T2} = bitcast<u32>(n);
}`, f16: I$1([_$1])`(n) => {
  ${T2} = pack2x16float(vec2f(f32(n), 0.0));
}`, i32: I$1([f$1])`(n) => {
  ${T2} = bitcast<u32>(n);
}`, u32: I$1([T$2])`(n) => {
  ${T2} = n;
}`, bool: I$1([V$1])`(b) => {
  ${T2} = u32(b);
}`, vec2f: I$1([F$3])`(v) => {
  ${T2} = bitcast<u32>(v.x);
  ${T2} = bitcast<u32>(v.y);
}`, vec3f: I$1([ke$2])`(v) => {
  ${T2} = bitcast<u32>(v.x);
  ${T2} = bitcast<u32>(v.y);
  ${T2} = bitcast<u32>(v.z);
}`, vec4f: I$1([v$1])`(v) => {
  ${T2} = bitcast<u32>(v.x);
  ${T2} = bitcast<u32>(v.y);
  ${T2} = bitcast<u32>(v.z);
  ${T2} = bitcast<u32>(v.w);
}`, vec2h: I$1([nn$2])`(v) => {
  ${T2} = pack2x16float(vec2f(f32(v.x), f32(v.y)));
}`, vec3h: I$1([sn$1])`(v) => {
  ${T2} = pack2x16float(vec2f(f32(v.x), f32(v.y)));
  ${T2} = pack2x16float(vec2f(f32(v.z), 0.0));
}`, vec4h: I$1([an$1])`(v) => {
  ${T2} = pack2x16float(vec2f(f32(v.x), f32(v.y)));
  ${T2} = pack2x16float(vec2f(f32(v.z), f32(v.w)));
}`, vec2i: I$1([pe$3])`(v) => {
  ${T2} = bitcast<u32>(v.x);
  ${T2} = bitcast<u32>(v.y);
}`, vec3i: I$1([Fe$2])`(v) => {
  ${T2} = bitcast<u32>(v.x);
  ${T2} = bitcast<u32>(v.y);
  ${T2} = bitcast<u32>(v.z);
}`, vec4i: I$1([he$1])`(v) => {
  ${T2} = bitcast<u32>(v.x);
  ${T2} = bitcast<u32>(v.y);
  ${T2} = bitcast<u32>(v.z);
  ${T2} = bitcast<u32>(v.w);
}`, vec2u: I$1([le$3])`(v) => {
  ${T2} = v.x;
  ${T2} = v.y;
}`, vec3u: I$1([Pe$2])`(v) => {
  ${T2} = v.x;
  ${T2} = v.y;
  ${T2} = v.z;
}`, vec4u: I$1([xe$4])`(v) => {
  ${T2} = v.x;
  ${T2} = v.y;
  ${T2} = v.z;
  ${T2} = v.w;
}`, "vec2<bool>": I$1([rn$1])`(v) => {
  ${T2} = u32(v.x);
  ${T2} = u32(v.y);
}`, "vec3<bool>": I$1([on$1])`(v) => {
  ${T2} = u32(v.x);
  ${T2} = u32(v.y);
  ${T2} = u32(v.z);
}`, "vec4<bool>": I$1([un$1])`(v) => {
  ${T2} = u32(v.x);
  ${T2} = u32(v.y);
  ${T2} = u32(v.z);
  ${T2} = u32(v.w);
}`, mat2x2f: I$1([j])`(m) => {
  ${T2} = bitcast<u32>(m[0][0]);
  ${T2} = bitcast<u32>(m[0][1]);
  ${T2} = bitcast<u32>(m[1][0]);
  ${T2} = bitcast<u32>(m[1][1]);
}`, mat3x3f: I$1([q])`(m) => {
  ${T2} = bitcast<u32>(m[0][0]);
  ${T2} = bitcast<u32>(m[0][1]);
  ${T2} = bitcast<u32>(m[0][2]);
  ${T2} = 0u;
  ${T2} = bitcast<u32>(m[1][0]);
  ${T2} = bitcast<u32>(m[1][1]);
  ${T2} = bitcast<u32>(m[1][2]);
  ${T2} = 0u;
  ${T2} = bitcast<u32>(m[2][0]);
  ${T2} = bitcast<u32>(m[2][1]);
  ${T2} = bitcast<u32>(m[2][2]);
  ${T2} = 0u;
}`, mat4x4f: I$1([g$1])`(m) => {
  ${T2} = bitcast<u32>(m[0][0]);
  ${T2} = bitcast<u32>(m[0][1]);
  ${T2} = bitcast<u32>(m[0][2]);
  ${T2} = bitcast<u32>(m[0][3]);
  ${T2} = bitcast<u32>(m[1][0]);
  ${T2} = bitcast<u32>(m[1][1]);
  ${T2} = bitcast<u32>(m[1][2]);
  ${T2} = bitcast<u32>(m[1][3]);
  ${T2} = bitcast<u32>(m[2][0]);
  ${T2} = bitcast<u32>(m[2][1]);
  ${T2} = bitcast<u32>(m[2][2]);
  ${T2} = bitcast<u32>(m[2][3]);
  ${T2} = bitcast<u32>(m[3][0]);
  ${T2} = bitcast<u32>(m[3][1]);
  ${T2} = bitcast<u32>(m[3][2]);
  ${T2} = bitcast<u32>(m[3][3]);
}` };
for (let [t12, e27] of Object.entries(sa)) e27.$name(`serialize${t12[0].toLocaleUpperCase()}${t12.slice(1)}`).$uses({ dataBlockIndex: oa, nextByteIndex: fi, dataBuffer: ia });
function ua(t12) {
  return `(${t12.map((e27, r) => `_arg_${r}`).join(", ")})`;
}
function pa(t12, e27) {
  let r = sa[t12.type];
  if (r) return r.with(ia, e27);
  if (An$1(t12)) {
    let n2 = Object.keys(t12.propTypes), o2 = Object.values(t12.propTypes), a2 = la(o2, e27);
    return I$1([t12])`(arg) {\n  propsSerializer(${n2.map((i2) => `arg.${i2}`).join(", ")});\n}`.$uses({ propsSerializer: a2 }).$name(`${z$2(t12) ?? "struct"}Serializer`);
  }
  if (In$2(t12)) {
    let n2 = t12.elementType, o2 = t12.elementCount, a2 = pa(n2, e27);
    return I$1([t12])`(arg) {\n${Array.from({ length: o2 }, (i2, s2) => `  elementSerializer(arg[${s2}]);`).join(`
`)}\n}`.$uses({ elementSerializer: a2 }).$name("arraySerializer");
  }
  throw new Error(`Cannot serialize data of type ${t12.type}`);
}
function la(t12, e27) {
  let r = {}, n2 = I$1(t12), o2 = ua(t12), a2 = t12.map((i2, s2) => (r[`serializer${s2}`] = pa(i2, e27), `  serializer${s2}(_arg_${s2});`)).join(`
`);
  return n2`${o2} {\n${a2}\n}`.$uses(r).$name("compoundSerializer");
}
function ma(t12, e27, r, n2, o2) {
  let a2 = e27.map(l).reduce((u2, l2) => u2 + l2, 0);
  if (a2 > o2.logSizeLimit) throw new Error(`Logged data needs to fit in ${o2.logSizeLimit} bytes (one of the logs requires ${a2} bytes). Consider increasing the limit by passing appropriate options to tgpu.init().`);
  let i2 = la(e27, r).$name(`log${t12}serializer`), s2 = ua(e27);
  return I$1(e27)`${s2} {
  dataBlockIndex = atomicAdd(&indexBuffer, 1);
  if (dataBlockIndex >= ${o2.logCountLimit}) {
    return;
  }
  dataBuffer[dataBlockIndex].id = ${t12};
  dataByteIndex = 0;

  compoundSerializer${s2};
}`.$uses({ indexBuffer: n2, dataBuffer: r, dataBlockIndex: oa, dataByteIndex: aa, compoundSerializer: i2 }).$name(`log${t12}`);
}
var fa = ["log", "debug", "info", "warn", "error", "clear"];
var ci = { logCountLimit: 64, logSizeLimit: 252, messagePrefix: " GPU " }, ca = y$2("/* console.log() */", Sn$2, "runtime"), gr$1 = class gr {
  get logResources() {
  }
  generateLog() {
    return console.warn("'console.log' is only supported when resolving pipelines."), ca;
  }
}, yr$1 = class yr {
  #e;
  #t;
  #r = 1;
  #n;
  #o;
  constructor(e27) {
    this.#e = { ...ci, ...e27[o$2].logOptions }, this.#t = /* @__PURE__ */ new Map();
    let r = Js({ id: T$2, serializedData: F$2(T$2, Math.ceil(this.#e.logSizeLimit / 4)) }).$name("SerializedLogData");
    this.#o = e27.createMutable(F$2(r, this.#e.logCountLimit)).$name("dataBuffer"), this.#n = e27.createMutable(ve$2(T$2)).$name("indexBuffer");
  }
  generateLog(e27, r, n2) {
    if (!fa.includes(r)) return console.warn(`Unsupported log method '${r}' was used in TGSL.`), ca;
    let o2 = Wi(n2), a2 = this.#r++, i2 = o2.filter((l2) => l2.dataType !== ae$3), s2 = ma(a2, i2.map((l2) => l2.dataType), this.#o, this.#n, this.#e), u2 = o2.map((l2) => l2.dataType === ae$3 ? l2.value : l2.dataType);
    return this.#t.set(a2, { op: r, argTypes: u2 }), y$2(p$1`${e27.resolve(s2).value}(${i2})`, Sn$2, "runtime");
  }
  get logResources() {
    return this.#r === 1 ? void 0 : { dataBuffer: this.#o, indexBuffer: this.#n, options: this.#e, logIdToMeta: this.#t };
  }
};
var da = { mat2x2f: F$3, mat3x3f: ke$2, mat4x4f: v$1 };
function on(t12, e27) {
  if (In$2(t12.dataType) || Yn$1(t12.dataType)) {
    let r = t12.dataType.elementType, n2 = Oe$1(r), o2 = lr$3(t12), a2 = e27.origin === "constant", i2;
    return t12.origin === "constant-tgpu-const-ref" ? a2 ? i2 = n2 ? "constant" : "constant-tgpu-const-ref" : i2 = n2 ? "runtime" : "runtime-tgpu-const-ref" : t12.origin === "runtime-tgpu-const-ref" ? i2 = n2 ? "runtime" : "runtime-tgpu-const-ref" : !o2 && !n2 ? i2 = t12.origin : a2 && t12.origin === "constant" ? i2 = "constant" : i2 = "runtime", y$2(ye$4(t12) && ye$4(e27) ? t12.value[e27.value] : p$1`${t12}[${e27}]`, r, i2);
  }
  if (se$2(t12.dataType)) return y$2(ye$4(t12) && ye$4(e27) ? t12.value[e27.value] : p$1`${t12}[${e27}]`, t12.dataType.primitive, t12.origin === "constant" || t12.origin === "constant-tgpu-const-ref" ? "constant" : "runtime");
  if (Ee$2(t12.dataType)) return on(xt$2(t12), e27);
  if (t12.value instanceof He$2) {
    let r = da[t12.value.matrix.dataType.type];
    return y$2(p$1`${t12.value.matrix}[${e27}]`, r, t12.origin);
  }
  if (t12.dataType.type in da) throw new Error("The only way of accessing matrix elements in TGSL is through the 'columns' property.");
  if (ye$4(t12) && ye$4(e27) || t12.dataType.type === "unknown") return vt$2(t12.value[e27.value]);
}
var { NodeTypeCatalog: $2 } = di, gi = ["==", "!=", "===", "!==", "<", "<=", ">", ">=", "<<", ">>", "+", "-", "*", "/", "%", "|", "^", "&", "&&", "||"], yi = ["&&", "||", "==", "!=", "===", "!==", "<", "<=", ">", ">="], ga = { "===": "==", "!==": "!=", get ">>>"() {
  throw new Error("The `>>>` operator is unsupported in TypeGPU functions.");
}, get in() {
  throw new Error("The `in` operator is unsupported in TypeGPU functions.");
}, get instanceof() {
  throw new Error("The `instanceof` operator is unsupported in TypeGPU functions.");
}, get "|>"() {
  throw new Error("The `|>` operator is unsupported in TypeGPU functions.");
}, get "??"() {
  throw new Error("The `??` operator is unsupported in TypeGPU functions.");
}, get ">>>="() {
  throw new Error("The `>>>=` operator is unsupported in TypeGPU functions.");
}, get "**="() {
  throw new Error("The `**=` operator is unsupported in TypeGPU functions.");
}, get "??="() {
  throw new Error("The `??=` operator is unsupported in TypeGPU functions.");
}, get "&&="() {
  throw new Error("The `&&=` operator is unsupported in TypeGPU functions.");
}, get "||="() {
  throw new Error("The `||=` operator is unsupported in TypeGPU functions.");
} };
function ya(t12, e27, r) {
  return r ? yi.includes(e27) ? V$1 : e27 === "=" ? r : t12 : e27 === "!" || e27 === "~" ? V$1 : t12;
}
var Ti = { "-": xr$2[o$2].gpuImpl }, hi = { "+": ar$3[o$2].gpuImpl, "-": ur$3[o$2].gpuImpl, "*": cr$3[o$2].gpuImpl, "/": or$3[o$2].gpuImpl, "**": nt[o$2].gpuImpl }, an = class {
  #e = void 0;
  initGenerator(e27) {
    this.#e = e27;
  }
  get ctx() {
    if (!this.#e) throw new Error("WGSL Generator has not yet been initialized. Please call initialize(ctx) before using the generator.");
    return this.#e;
  }
  block([e27, r]) {
    this.ctx.pushBlockScope();
    try {
      this.ctx.indent();
      let n2 = r.map((o2) => this.statement(o2)).join(`
`);
      return this.ctx.dedent(), `{
${n2}
${this.ctx.pre}}`;
    } finally {
      this.ctx.popBlockScope();
    }
  }
  refVariable(e27, r) {
    let n2 = this.ctx.makeNameValid(e27), o2 = fr$3(r), a2 = y$2(new W$1(y$2(n2, r, "function"), o2), o2, "function");
    return this.ctx.defineVariable(e27, a2), n2;
  }
  blockVariable(e27, r, n2, o2) {
    let a2 = Oe$1(n2), i2;
    o2 === "constant-tgpu-const-ref" || o2 === "runtime-tgpu-const-ref" ? i2 = o2 : o2 === "argument" ? a2 ? i2 = "runtime" : i2 = "argument" : a2 ? o2 === "constant" && e27 === "const" ? i2 = "constant" : i2 = "runtime" : i2 = Mt$2(o2) ? "this-function" : o2;
    let s2 = y$2(this.ctx.makeNameValid(r), n2, i2);
    return this.ctx.defineVariable(r, s2), s2;
  }
  identifier(e27) {
    if (!e27) throw new Error("Cannot resolve an empty identifier");
    let r = this.ctx.getById(e27);
    if (!r) throw new Error(`Identifier ${e27} not found`);
    return r;
  }
  typedExpression(e27, r) {
    let n2 = this.ctx.expectedType;
    this.ctx.expectedType = r;
    try {
      let o2 = this.expression(e27);
      return Tt$3(o2, r);
    } finally {
      this.ctx.expectedType = n2;
    }
  }
  expression(e27) {
    if (typeof e27 == "string") return this.identifier(e27);
    if (typeof e27 == "boolean") return y$2(e27, V$1, "constant");
    if (e27[0] === $2.logicalExpr || e27[0] === $2.binaryExpr || e27[0] === $2.assignmentExpr) {
      let [r, n2, o2, a2] = e27, i2 = this.expression(n2), s2 = this.expression(a2);
      if (s2.value instanceof W$1) throw new A$2(p$1`Cannot assign a ref to an existing variable '${i2}', define a new variable instead.`);
      if (o2 === "==") throw new Error("Please use the === operator instead of ==");
      if (o2 === "===" && ye$4(i2) && ye$4(s2)) return y$2(i2.value === s2.value, V$1, "constant");
      if (i2.dataType.type === "unknown") throw new A$2(`Left-hand side of '${o2}' is of unknown type`);
      if (s2.dataType.type === "unknown") throw new A$2(`Right-hand side of '${o2}' is of unknown type`);
      let u2 = hi[o2];
      if (u2) return u2(i2, s2);
      let l2 = r === $2.assignmentExpr ? [i2.dataType] : void 0, [m2, f2] = wt$3([i2, s2], l2) ?? [i2, s2], c2 = this.ctx.resolve(m2.value, m2.dataType).value, y2 = this.ctx.resolve(f2.value, f2.dataType).value, w2 = ya(m2.dataType, o2, f2.dataType);
      if (r === $2.assignmentExpr) {
        if (m2.origin === "constant" || m2.origin === "constant-tgpu-const-ref" || m2.origin === "runtime-tgpu-const-ref") throw new A$2(`'${c2} = ${y2}' is invalid, because ${c2} is a constant.`);
        if (i2.origin === "argument") throw new A$2(`'${c2} ${o2} ${y2}' is invalid, because non-pointer arguments cannot be mutated.`);
        if (s2.origin === "argument" && !Oe$1(s2.dataType)) throw new A$2(`'${c2} = ${y2}' is invalid, because argument references cannot be assigned.
-----
Try '${c2} = ${this.ctx.resolve(s2.dataType).value}(${y2})' to copy the value instead.
-----`);
        if (!lr$3(s2)) throw new A$2(`'${c2} = ${y2}' is invalid, because references cannot be assigned.
-----
Try '${c2} = ${this.ctx.resolve(s2.dataType).value}(${y2})' to copy the value instead.
-----`);
      }
      return y$2(gi.includes(o2) ? `(${c2} ${ga[o2] ?? o2} ${y2})` : `${c2} ${ga[o2] ?? o2} ${y2}`, w2, "runtime");
    }
    if (e27[0] === $2.postUpdate) {
      let [r, n2, o2] = e27, a2 = this.expression(o2), i2 = this.ctx.resolve(a2.value, a2.dataType).value;
      return y$2(`${i2}${n2}`, a2.dataType, "runtime");
    }
    if (e27[0] === $2.unaryExpr) {
      let [r, n2, o2] = e27, a2 = this.expression(o2), i2 = Ti[n2];
      if (i2) return i2(a2);
      let s2 = this.ctx.resolve(a2.value, a2.dataType).value, u2 = ya(a2.dataType, n2);
      return y$2(`${n2}${s2}`, u2, "runtime");
    }
    if (e27[0] === $2.memberAccess) {
      let [r, n2, o2] = e27, a2 = this.expression(n2);
      if (a2.value === console) return y$2(new qe$2(o2), ae$3, "runtime");
      let i2 = N2(a2, o2);
      if (!i2) throw new Error(p$1`Property '${o2}' not found on value '${a2}' of type ${this.ctx.resolve(a2.dataType)}`);
      return i2;
    }
    if (e27[0] === $2.indexAccess) {
      let [r, n2, o2] = e27, a2 = this.expression(n2), i2 = this.expression(o2), s2 = wt$3([i2], [T$2, f$1], false)?.[0] ?? i2, u2 = on(a2, s2);
      if (!u2) {
        let l2 = this.ctx.resolve(a2.value, a2.dataType).value, m2 = this.ctx.resolve(s2.value, s2.dataType).value;
        throw new Error(`Unable to index value ${l2} of unknown type with index ${m2}. If the value is an array, to address this, consider one of the following approaches: (1) declare the array using 'tgpu.const', (2) store the array in a buffer, or (3) define the array within the GPU function scope.`);
      }
      return u2;
    }
    if (e27[0] === $2.numericLiteral) {
      let r = typeof e27[1] == "string" ? yn$2(wi(e27[1])) : yn$2(e27[1]);
      if (!r) throw new Error(`Invalid numeric literal ${e27[1]}`);
      return r;
    }
    if (e27[0] === $2.call) {
      let [r, n2, o2] = e27, a2 = this.expression(n2);
      if (An$1(a2.value) || In$2(a2.value)) {
        if (o2.length > 1) throw new A$2("Array and struct schemas should always be called with at most 1 argument");
        if (!o2[0]) return y$2(`${this.ctx.resolve(a2.value).value}()`, a2.value, "runtime");
        let u2 = this.typedExpression(o2[0], a2.value);
        return y$2(this.ctx.resolve(u2.value, a2.value).value, a2.value, "runtime");
      }
      if (a2.value === ct) throw new Error("Constants cannot be defined within TypeGPU function scope. To address this, move the constant definition outside the function scope.");
      if (a2.value instanceof Ye$1) {
        if (!o2[0]) throw new A$2(`An infix operator '${a2.value.name}' was called without any arguments`);
        let u2 = this.expression(o2[0]);
        return a2.value.operator(a2.value.lhs, u2);
      }
      if (!u$2(a2.value)) {
        let u2 = o2.map((m2) => this.expression(m2)), l2 = this.ctx.shelllessRepo.get(a2.value, u2);
        if (l2) {
          let m2 = u2.map((f2, c2) => {
            let y2 = l2.argTypes[c2];
            return Tt$3(f2, y2, false);
          });
          return this.ctx.withResetIndentLevel(() => {
            let f2 = this.ctx.resolve(l2);
            return y$2(p$1`${f2.value}(${m2})`, f2.dataType, "runtime");
          });
        }
        throw new Error(`Function '${z$2(a2.value) ?? String(a2.value)}' is not marked with the 'use gpu' directive and cannot be used in a shader`);
      }
      let i2 = a2.value[o$2]?.argConversionHint ?? "keep", s2 = a2.value[o$2]?.strictSignature;
      try {
        let u2;
        if (s2) u2 = o2.map((m2, f2) => {
          let c2 = s2.argTypes[f2];
          if (!c2) throw new A$2(`Function '${z$2(a2.value)}' was called with too many arguments`);
          return this.typedExpression(m2, c2);
        });
        else if (Array.isArray(i2)) u2 = o2.map((m2, f2) => {
          let c2 = i2[f2];
          if (!c2) throw new A$2(`Function '${z$2(a2.value)}' was called with too many arguments`);
          return this.typedExpression(m2, c2);
        });
        else {
          let m2 = o2.map((f2) => this.expression(f2));
          i2 === "keep" ? u2 = m2 : i2 === "unify" ? u2 = wt$3(m2) ?? m2 : u2 = i2(...m2).map((f2, c2) => [f2, m2[c2]]).map(([f2, c2]) => Tt$3(c2, f2));
        }
        if (a2.value instanceof qe$2) return this.ctx.generateLog(a2.value.op, u2);
        let l2 = a2.value(...u2);
        if (!ue$5(l2)) throw new Error("Functions running in codegen mode must return snippets");
        return l2;
      } catch (u2) {
        throw u2 instanceof Je$3 ? u2 : new Je$3(u2, [{ toString: () => `fn:${z$2(a2.value)}` }]);
      }
    }
    if (e27[0] === $2.objectExpr) {
      let r = e27[1], n2 = this.ctx.expectedType;
      if (!n2 || !An$1(n2)) throw new A$2(`No target type could be inferred for object with keys [${Object.keys(r).join(", ")}], please wrap the object in the corresponding schema.`);
      let o2 = Object.fromEntries(Object.entries(n2.propTypes).map(([i2, s2]) => {
        let u2 = r[i2];
        if (u2 === void 0) throw new A$2(`Missing property ${i2} in object literal for struct ${n2}`);
        let l2 = this.typedExpression(u2, s2);
        return [i2, l2];
      })), a2 = ci$1(n2, o2);
      return y$2(p$1`${this.ctx.resolve(n2).value}(${a2})`, n2, "runtime");
    }
    if (e27[0] === $2.arrayExpr) {
      let [r, n2] = e27, o2 = this.ctx.expectedType, a2, i2;
      if (In$2(o2)) {
        if (a2 = o2.elementType, i2 = n2.map((u2) => this.typedExpression(u2, a2)), i2.length !== o2.elementCount) throw new A$2(`Cannot create value of type '${o2}' from an array of length: ${i2.length}`);
      } else {
        let u2 = n2.map((m2) => {
          let f2 = this.expression(m2);
          if (f2.origin === "argument" && !Oe$1(f2.dataType) || !lr$3(f2)) {
            let c2 = this.ctx.resolve(f2.value, f2.dataType).value, y2 = this.ctx.resolve(cn$1(f2.dataType)).value;
            throw new A$2(`'${c2}' reference cannot be used in an array constructor.
-----
Try '${y2}(${c2})' or 'arrayOf(${y2}, count)([...])' to copy the value instead.
-----`);
          }
          return f2;
        });
        if (u2.length === 0) throw new A$2("Cannot infer the type of an empty array literal.");
        let l2 = wt$3(u2);
        if (!l2) throw new A$2("The given values cannot be automatically converted to a common type. Consider wrapping the array in an appropriate schema");
        i2 = l2, a2 = cn$1(i2[0]?.dataType);
      }
      let s2 = `array<${this.ctx.resolve(a2).value}, ${i2.length}>`;
      return y$2(p$1`${s2}(${i2})`, F$2[o$2].jsImpl(a2, i2.length), "runtime");
    }
    if (e27[0] === $2.stringLiteral) return y$2(e27[1], ae$3, "constant");
    if (e27[0] === $2.preUpdate) throw new Error("Cannot use pre-updates in TGSL.");
    xi(e27);
  }
  functionDefinition(e27) {
    return this.block(e27);
  }
  statement(e27) {
    if (typeof e27 == "string") return `${this.ctx.pre}${this.ctx.resolve(this.identifier(e27).value).value};`;
    if (typeof e27 == "boolean") return `${this.ctx.pre}${e27 ? "true" : "false"};`;
    if (e27[0] === $2.return) {
      let r = e27[1];
      if (r !== void 0) {
        let n2 = this.ctx.topFunctionReturnType, o2 = n2 ? this.typedExpression(r, n2) : this.expression(r);
        if (o2.value instanceof W$1) throw new A$2(p$1`Cannot return references, returning '${o2.value.snippet}'`);
        if (o2.origin === "argument" && !Oe$1(o2.dataType) && this.ctx.topFunctionScope?.functionType === "normal") throw new A$2(p$1`Cannot return references to arguments, returning '${o2}'. Copy the argument before returning it.`);
        if (!n2 && !lr$3(o2) && o2.origin !== "this-function") {
          let a2 = this.ctx.resolve(o2.value, o2.dataType).value, i2 = this.ctx.resolve(Kn$1(o2.dataType)).value;
          throw new A$2(`'return ${a2};' is invalid, cannot return references.
-----
Try 'return ${i2}(${a2});' instead.
-----`);
        }
        return o2 = Tt$3(o2, Kn$1(o2.dataType), false), we$2(o2.dataType.type !== "unknown"), this.ctx.reportReturnType(o2.dataType), p$1`${this.ctx.pre}return ${o2};`;
      }
      return `${this.ctx.pre}return;`;
    }
    if (e27[0] === $2.if) {
      let [r, n2, o2, a2] = e27, i2 = this.typedExpression(n2, V$1), s2 = i2.value === false ? void 0 : this.block(Tr$1(o2)), u2 = i2.value === true || !a2 ? void 0 : this.block(Tr$1(a2));
      return i2.value === true ? `${this.ctx.pre}${s2}` : i2.value === false ? u2 ? `${this.ctx.pre}${u2}` : "" : u2 ? p$1`\
${this.ctx.pre}if (${i2}) ${s2}
${this.ctx.pre}else ${u2}` : p$1`${this.ctx.pre}if (${i2}) ${s2}`;
    }
    if (e27[0] === $2.let || e27[0] === $2.const) {
      let r = "var", [n2, o2, a2] = e27, i2 = a2 !== void 0 ? this.expression(a2) : void 0;
      if (!i2) throw new Error(`Cannot create variable '${o2}' without an initial value.`);
      let s2 = lr$3(i2), u2 = i2.dataType, l2 = Oe$1(u2);
      if (Bt$1(i2.dataType)) throw new Error(`Cannot create variable '${o2}' with loose data type.`);
      if (i2.value instanceof W$1) {
        if (i2.dataType.type !== "unknown") throw new A$2("Cannot store d.ref() in a variable if it references another value. Copy the value passed into d.ref() instead.");
        let f2 = i2.value.snippet, c2 = this.refVariable(o2, cn$1(f2.dataType));
        return p$1`${this.ctx.pre}var ${c2} = ${Tt$3(f2, f2.dataType, false)};`;
      }
      if (s2) {
        if (n2 === $2.const) i2.origin === "argument" ? r = "let" : l2 && (r = i2.origin === "constant" ? "const" : "let");
        else if (i2.origin === "argument" && !l2) {
          let f2 = this.ctx.resolve(i2.value).value, c2 = this.ctx.resolve(Kn$1(i2.dataType)).value;
          throw new A$2(`'let ${o2} = ${f2}' is invalid, because references to arguments cannot be assigned to 'let' variable declarations.
  -----
  - Try 'let ${o2} = ${c2}(${f2})' if you need to reassign '${o2}' later
  - Try 'const ${o2} = ${f2}' if you won't reassign '${o2}' later.
  -----`);
        }
      } else {
        if (n2 === $2.let) {
          let f2 = this.ctx.resolve(i2.value).value, c2 = this.ctx.resolve(Kn$1(i2.dataType)).value;
          throw new A$2(`'let ${o2} = ${f2}' is invalid, because references cannot be assigned to 'let' variable declarations.
-----
- Try 'let ${o2} = ${c2}(${f2})' if you need to reassign '${o2}' later
- Try 'const ${o2} = ${f2}' if you won't reassign '${o2}' later.
-----`);
        }
        if (i2.origin === "constant-tgpu-const-ref") r = "const";
        else if (i2.origin === "runtime-tgpu-const-ref") r = "let";
        else {
          if (r = "let", !Ee$2(u2)) {
            let f2 = yt$3(i2.origin, cn$1(u2));
            we$2(f2 !== void 0, `Creating pointer type from origin ${i2.origin}`), u2 = f2;
          }
          i2.value instanceof W$1 || (u2 = br$3(u2));
        }
      }
      let m2 = this.blockVariable(r, o2, cn$1(u2), i2.origin);
      return p$1`${this.ctx.pre}${r} ${m2.value} = ${Tt$3(i2, u2, false)};`;
    }
    if (e27[0] === $2.block) return this.block(e27);
    if (e27[0] === $2.for) {
      let [r, n2, o2, a2, i2] = e27, [s2, u2, l2] = this.ctx.withResetIndentLevel(() => [n2 ? this.statement(n2) : void 0, o2 ? this.typedExpression(o2, V$1) : void 0, a2 ? this.statement(a2) : void 0]), m2 = s2 ? s2.slice(0, -1) : "", f2 = l2 ? l2.slice(0, -1) : "", c2 = this.block(Tr$1(i2));
      return p$1`${this.ctx.pre}for (${m2}; ${u2}; ${f2}) ${c2}`;
    }
    if (e27[0] === $2.while) {
      let [r, n2, o2] = e27, a2 = this.typedExpression(n2, V$1), i2 = this.ctx.resolve(a2.value).value, s2 = this.block(Tr$1(o2));
      return `${this.ctx.pre}while (${i2}) ${s2}`;
    }
    return e27[0] === $2.continue ? `${this.ctx.pre}continue;` : e27[0] === $2.break ? `${this.ctx.pre}break;` : `${this.ctx.pre}${this.ctx.resolve(this.expression(e27).value).value};`;
  }
};
function xi(t12) {
  throw new Error(`'${eo(t12)}' was not handled by the WGSL generator.`);
}
function wi(t12) {
  return /^0x[0-9a-f]+$/i.test(t12) ? Number.parseInt(t12) : /^0b[01]+$/i.test(t12) ? Number.parseInt(t12.slice(2), 2) : Number.parseFloat(t12);
}
function Tr$1(t12) {
  return typeof t12 != "object" || t12[0] !== $2.block ? [$2.block, [t12]] : t12;
}
var bi = new an(), hr$1 = bi;
var ha = "#CATCHALL#", un = class {
  _stack = [];
  _itemDepth = 0;
  get itemDepth() {
    return this._itemDepth;
  }
  get topItem() {
    let e27 = this._stack[this._stack.length - 1];
    if (!e27 || e27.type !== "item") throw new Error("Internal error, expected item layer to be on top.");
    return e27;
  }
  get topFunctionScope() {
    return this._stack.findLast((e27) => e27.type === "functionScope");
  }
  pushItem() {
    this._itemDepth++, this._stack.push({ type: "item", usedSlots: /* @__PURE__ */ new Set() });
  }
  popItem() {
    this.pop("item");
  }
  pushSlotBindings(e27) {
    this._stack.push({ type: "slotBinding", bindingMap: new WeakMap(e27) });
  }
  popSlotBindings() {
    this.pop("slotBinding");
  }
  pushFunctionScope(e27, r, n2, o2, a2) {
    let i2 = { type: "functionScope", functionType: e27, args: r, argAliases: n2, returnType: o2, externalMap: a2, reportedReturnTypes: /* @__PURE__ */ new Set() };
    return this._stack.push(i2), i2;
  }
  popFunctionScope() {
    this.pop("functionScope");
  }
  pushBlockScope() {
    this._stack.push({ type: "blockScope", declarations: /* @__PURE__ */ new Map() });
  }
  popBlockScope() {
    this.pop("blockScope");
  }
  pop(e27) {
    let r = this._stack[this._stack.length - 1];
    if (!r || e27 && r.type !== e27) throw new Error(`Internal error, expected a ${e27} layer to be on top.`);
    this._stack.pop(), e27 === "item" && this._itemDepth--;
  }
  readSlot(e27) {
    for (let r = this._stack.length - 1; r >= 0; --r) {
      let n2 = this._stack[r];
      if (n2?.type === "item") n2.usedSlots.add(e27);
      else if (n2?.type === "slotBinding") {
        let o2 = n2.bindingMap.get(e27);
        if (o2 !== void 0) return o2;
      } else if (!(n2?.type === "functionScope" || n2?.type === "blockScope")) throw new Error("Unknown layer type.");
    }
    return e27.defaultValue;
  }
  getSnippetById(e27) {
    for (let r = this._stack.length - 1; r >= 0; --r) {
      let n2 = this._stack[r];
      if (n2?.type === "functionScope") {
        let o2 = n2.args.find((i2) => i2.value === e27);
        if (o2 !== void 0) return o2;
        if (n2.argAliases[e27]) return n2.argAliases[e27];
        let a2 = n2.externalMap[e27];
        return a2 != null ? vt$2(a2) : void 0;
      }
      if (n2?.type === "blockScope") {
        let o2 = n2.declarations.get(e27);
        if (o2 !== void 0) return o2;
      }
    }
  }
  defineBlockVariable(e27, r) {
    if (r.dataType.type === "unknown") throw Error(`Tried to define variable '${e27}' of unknown type`);
    for (let n2 = this._stack.length - 1; n2 >= 0; --n2) {
      let o2 = this._stack[n2];
      if (o2?.type === "blockScope") {
        o2.declarations.set(e27, r);
        return;
      }
    }
    throw new Error("No block scope found to define a variable in.");
  }
}, xr$1 = ["", "  ", "    ", "      ", "        ", "          ", "            ", "              ", "                "], sn = xr$1.length - 1, pn = class {
  identLevel = 0;
  get pre() {
    return xr$1[this.identLevel] ?? xr$1[sn].repeat(this.identLevel / sn) + xr$1[this.identLevel % sn];
  }
  indent() {
    let e27 = this.pre;
    return this.identLevel++, e27;
  }
  dedent() {
    return this.identLevel--, this.pre;
  }
  withResetLevel(e27) {
    let r = this.identLevel;
    this.identLevel = 0;
    try {
      return e27();
    } finally {
      this.identLevel = r;
    }
  }
}, It = class {
  #e;
  #t;
  _indentController = new pn();
  _itemStateStack = new un();
  #r = [];
  _declarations = [];
  _varyingLocations;
  #n = /* @__PURE__ */ new WeakSet();
  #o;
  get varyingLocations() {
    return this._varyingLocations;
  }
  [o$2] = { itemStateStack: this._itemStateStack };
  bindGroupLayoutsToPlaceholderMap = /* @__PURE__ */ new Map();
  _nextFreeLayoutPlaceholderIdx = 0;
  fixedBindings = [];
  enableExtensions;
  expectedType;
  constructor(e27) {
    this.enableExtensions = e27.enableExtensions, this.#t = e27.shaderGenerator ?? hr$1, this.#o = e27.root ? new yr$1(e27.root) : new gr$1(), this.#e = e27.namespace[o$2];
  }
  getUniqueName(e27) {
    return Lo(this.#e, e27);
  }
  makeNameValid(e27) {
    return this.#e.nameRegistry.makeValid(e27);
  }
  get pre() {
    return this._indentController.pre;
  }
  get topFunctionScope() {
    return this._itemStateStack.topFunctionScope;
  }
  get topFunctionReturnType() {
    let e27 = this._itemStateStack.topFunctionScope;
    return we$2(e27), e27.returnType;
  }
  get shelllessRepo() {
    return this.#e.shelllessRepo;
  }
  indent() {
    return this._indentController.indent();
  }
  dedent() {
    return this._indentController.dedent();
  }
  withResetIndentLevel(e27) {
    return this._indentController.withResetLevel(e27);
  }
  getById(e27) {
    let r = this._itemStateStack.getSnippetById(e27);
    return r === void 0 ? null : r;
  }
  defineVariable(e27, r) {
    this._itemStateStack.defineBlockVariable(e27, r);
  }
  reportReturnType(e27) {
    let r = this._itemStateStack.topFunctionScope;
    we$2(r), r.reportedReturnTypes.add(e27);
  }
  pushBlockScope() {
    this._itemStateStack.pushBlockScope();
  }
  popBlockScope() {
    this._itemStateStack.popBlockScope();
  }
  generateLog(e27, r) {
    return this.#o.generateLog(this, e27, r);
  }
  get logResources() {
    return this.#o.logResources;
  }
  fnToWgsl(e27) {
    let r = false;
    try {
      this.#e.nameRegistry.pushFunctionScope();
      let n2 = [], o2 = [];
      for (let [u2, l2] of e27.argTypes.entries()) {
        let m2 = e27.params[u2], f2 = Ee$2(l2) ? l2.addressSpace === "storage" ? l2.access === "read" ? "readonly" : "mutable" : l2.addressSpace : "argument";
        switch (m2?.type) {
          case t.identifier: {
            let c2 = m2.name, y2 = y$2(this.makeNameValid(c2), l2, f2);
            n2.push(y2), y2.value !== c2 && o2.push([c2, y2]);
            break;
          }
          case t.destructuredObject: {
            n2.push(y$2(`_arg_${u2}`, l2, f2)), o2.push(...m2.props.map(({ name: c2, alias: y2 }) => {
              let w2 = I$4(e27.argTypes[u2].propTypes[c2]);
              return [y2, y$2(`_arg_${u2}.${c2}`, w2, "argument")];
            }));
            break;
          }
          case void 0:
            n2.push(y$2(`_arg_${u2}`, l2, f2));
        }
      }
      let a2 = this._itemStateStack.pushFunctionScope(e27.functionType, n2, Object.fromEntries(o2), e27.returnType, e27.externalMap);
      r = true, this.#t.initGenerator(this);
      let i2 = this.#t.functionDefinition(e27.body), s2 = e27.returnType;
      if (!s2) {
        let u2 = [...a2.reportedReturnTypes];
        if (u2.length === 0) s2 = Sn$2;
        else {
          let l2 = ft$2(u2);
          l2 && !l2.hasImplicitConversions && (s2 = l2.targetType);
        }
        if (!s2) throw new Error(`Expected function to have a single return type, got [${u2.join(", ")}]. Cast explicitly to the desired type.`);
        s2 = cn$1(s2);
      }
      return { head: vi(this, n2, s2), body: i2, returnType: s2 };
    } finally {
      r && this._itemStateStack.popFunctionScope(), this.#e.nameRegistry.popFunctionScope();
    }
  }
  addDeclaration(e27) {
    this._declarations.push(e27);
  }
  allocateLayoutEntry(e27) {
    let r = this.bindGroupLayoutsToPlaceholderMap, n2 = r.get(e27);
    return n2 || (n2 = `#BIND_GROUP_LAYOUT_${this._nextFreeLayoutPlaceholderIdx++}#`, r.set(e27, n2)), n2;
  }
  allocateFixedEntry(e27, r) {
    let n2 = this.fixedBindings.length;
    return this.fixedBindings.push({ layoutEntry: e27, resource: r }), { group: ha, binding: n2 };
  }
  readSlot(e27) {
    let r = this._itemStateStack.readSlot(e27);
    if (r === void 0) throw new Ze$2(e27);
    return r;
  }
  withSlots(e27, r) {
    this._itemStateStack.pushSlotBindings(e27);
    try {
      return r();
    } finally {
      this._itemStateStack.popSlotBindings();
    }
  }
  withVaryingLocations(e27, r) {
    this._varyingLocations = e27;
    try {
      return r();
    } finally {
      this._varyingLocations = void 0;
    }
  }
  unwrap(e27) {
    if (at$2(e27)) return this.withSlots(e27[Re$1].pairs, () => this.unwrap(e27[Re$1].inner));
    let r = e27;
    for (; ; ) if (st$2(r)) r = this.readSlot(r);
    else if (ot$2(r)) r = this._getOrCompute(r);
    else break;
    return r;
  }
  _getOrCompute(e27) {
    let r = this.#e.memoizedDerived.get(e27) ?? [];
    this._itemStateStack.pushItem();
    try {
      for (let a2 of r) if ([...a2.slotToValueMap.entries()].every(([s2, u2]) => s2.areEqual(this._itemStateStack.readSlot(s2), u2))) return a2.result;
      this.pushMode(new $$2());
      let n2;
      try {
        n2 = e27["~compute"]();
      } finally {
        this.popMode("normal");
      }
      let o2 = /* @__PURE__ */ new Map();
      for (let a2 of this._itemStateStack.topItem.usedSlots) o2.set(a2, this._itemStateStack.readSlot(a2));
      return r.push({ slotToValueMap: o2, result: n2 }), this.#e.memoizedDerived.set(e27, r), n2;
    } catch (n2) {
      throw n2 instanceof Je$3 ? n2.appendToTrace(e27) : new Je$3(n2, [e27]);
    } finally {
      this._itemStateStack.popItem();
    }
  }
  _getOrInstantiate(e27) {
    let r = this.#e.memoizedResolves.get(e27) ?? [];
    this._itemStateStack.pushItem();
    try {
      for (let a2 of r) if ([...a2.slotToValueMap.entries()].every(([s2, u2]) => s2.areEqual(this._itemStateStack.readSlot(s2), u2))) return a2.result;
      let n2;
      if (Qn$1(e27)) n2 = y$2(zr$1(this, e27), Sn$2, "runtime");
      else if (ot$2(e27) || st$2(e27)) n2 = this.resolve(this.unwrap(e27));
      else if (Ot$1(e27)) n2 = e27[R$2](this);
      else if (Le$1(e27)) {
        let a2 = this.#e.shelllessRepo.get(e27, void 0);
        if (!a2) throw new Error(`Couldn't resolve ${e27.name}. Make sure it's a function that accepts no arguments, or call it from another TypeGPU function.`);
        return this.withResetIndentLevel(() => this.resolve(a2));
      } else throw new TypeError(`Unresolvable internal value: ${eo(e27)}`);
      let o2 = /* @__PURE__ */ new Map();
      for (let a2 of this._itemStateStack.topItem.usedSlots) o2.set(a2, this._itemStateStack.readSlot(a2));
      return r.push({ slotToValueMap: o2, result: n2 }), this.#e.memoizedResolves.set(e27, r), n2;
    } catch (n2) {
      throw n2 instanceof Je$3 ? n2.appendToTrace(e27) : new Je$3(n2, [e27]);
    } finally {
      this._itemStateStack.popItem();
    }
  }
  resolve(e27, r) {
    if (dt(e27) || Le$1(e27)) {
      if (this.#n.has(e27) && !this.#e.memoizedResolves.has(e27)) throw new Error(`Recursive function ${e27} detected. Recursion is not allowed on the GPU.`);
      this.#n.add(e27);
    }
    if (at$2(e27)) return this.withSlots(e27[Re$1].pairs, () => this.resolve(e27[Re$1].inner, r));
    if (u$2(e27) || Le$1(e27)) {
      if (this._itemStateStack.itemDepth === 0) try {
        this.pushMode(new pt$2());
        let n2 = Ur$2(this, () => this._getOrInstantiate(e27));
        return y$2(`${[...this._declarations].join(`

`)}${n2.value}`, Sn$2, "runtime");
      } finally {
        this.popMode("codegen");
      }
      return this._getOrInstantiate(e27);
    }
    if (typeof e27 == "number") {
      let n2 = r ?? yn$2(e27).dataType;
      if (we$2(n2.type !== "unknown"), n2.type === "abstractInt") return y$2(`${e27}`, n2, "constant");
      if (n2.type === "u32") return y$2(`${e27}u`, n2, "constant");
      if (n2.type === "i32") return y$2(`${e27}i`, n2, "constant");
      let o2 = e27.toExponential(), a2 = n2.type === "abstractFloat" && Number.isInteger(e27) ? `${e27}.` : `${e27}`, i2 = o2.length < a2.length ? o2 : a2;
      return n2.type === "f32" ? y$2(`${i2}f`, n2, "constant") : n2.type === "f16" ? y$2(`${i2}h`, n2, "constant") : y$2(i2, n2, "constant");
    }
    if (typeof e27 == "boolean") return y$2(e27 ? "true" : "false", V$1, "constant");
    if (typeof e27 == "string") return y$2(e27, Sn$2, "runtime");
    if (r && In$2(r)) {
      if (!Array.isArray(e27)) throw new A$2(`Cannot coerce ${e27} into value of type '${r}'`);
      if (r.elementCount !== e27.length) throw new A$2(`Cannot create value of type '${r}' from an array of length: ${e27.length}`);
      let n2 = this.resolve(r.elementType);
      return y$2(p$1`array<${n2}, ${r.elementCount}>(${e27.map((o2) => y$2(o2, r.elementType, "runtime"))})`, r, "runtime");
    }
    if (Array.isArray(e27)) return y$2(p$1`array(${e27.map((n2) => this.resolve(n2))})`, ae$3, "runtime");
    if (r && An$1(r)) return y$2(p$1`${this.resolve(r)}(${Object.entries(r.propTypes).map(([n2, o2]) => y$2(e27[n2], o2, "runtime"))})`, r, "runtime");
    throw new A$2(`Value ${e27} (as json: ${eo(e27)}) is not resolvable${r ? ` to type ${r.type}` : ""}`);
  }
  pushMode(e27) {
    this.#r.push(e27);
  }
  popMode(e27) {
    let r = this.#r.pop();
    e27 !== void 0 && we$2(r?.type === e27);
  }
  get mode() {
    return this.#r[this.#r.length - 1] ?? Wt$2;
  }
};
function me(t12, e27) {
  let r = new It(e27), o2 = (e27.config ? r.withSlots(e27.config(new Xe([])).bindings, () => r.resolve(t12)) : r.resolve(t12)).value, a2 = r.bindGroupLayoutsToPlaceholderMap, i2 = [], s2 = new Set([...a2.keys()].map((c2) => c2.index).filter((c2) => c2 !== void 0)), u2 = ko(s2), l2 = r.fixedBindings.map((c2, y2) => [String(y2), c2.layoutEntry]), m2 = () => {
    let c2 = u2.next().value, y2 = cr$1(Object.fromEntries(l2));
    return i2[c2] = y2, o2 = o2.replaceAll(ha, String(c2)), [c2, new et(y2, Object.fromEntries(r.fixedBindings.map((w2, b2) => [String(b2), w2.resource])))];
  }, f2 = l2.length > 0 ? m2() : void 0;
  for (let [c2, y2] of a2.entries()) {
    let w2 = c2.index ?? u2.next().value;
    i2[w2] = c2, o2 = o2.replaceAll(y2, String(w2));
  }
  return e27.enableExtensions && e27.enableExtensions.length > 0 && (o2 = `${e27.enableExtensions.map((y2) => `enable ${y2};`).join(`
`)}

${o2}`), { code: o2, usedBindGroupLayouts: i2, catchall: f2, logResources: r.logResources };
}
function vi(t12, e27, r) {
  let n2 = e27.map((o2) => `${o2.value}: ${t12.resolve(o2.dataType).value}`).join(", ");
  return r.type !== "void" ? `(${n2}) -> ${Ie$2(r)}${t12.resolve(r).value} ` : `(${n2}) `;
}
function ln(t12) {
  let e27 = t12;
  return e27?.resourceType === "compute-pipeline" && !!e27[o$2];
}
function mn(t12) {
  let e27 = t12;
  return e27?.resourceType === "render-pipeline" && !!e27[o$2];
}
function xa(t12) {
  return mn(t12) || ln(t12);
}
function wr$1(t12, e27) {
  return Array.isArray(t12) ? Ui(t12, e27) : Si(t12);
}
function wa(t12, e27) {
  return Array.isArray(t12) ? wr$1(t12, e27).code : wr$1(t12).code;
}
function Si(t12) {
  let { template: e27, externals: r, shaderGenerator: n2, names: o2 = "strict", config: a2, enableExtensions: i2 } = t12;
  e27 || console.warn("Calling resolve with an empty template is deprecated and will soon return an empty string. Consider using the 'tgpu.resolve(resolvableArray, options)' API instead.");
  let s2 = {};
  O$2(s2, r ?? {});
  let u2 = { [o$2]: true, [R$2](l2) {
    return y$2(R(l2, s2, e27 ?? ""), Sn$2, "runtime");
  }, toString: () => "<root>" };
  return me(u2, { namespace: typeof o2 == "string" ? X({ names: o2 }) : o2, enableExtensions: i2, shaderGenerator: n2, config: a2, root: ba(Object.values(r)) });
}
function Ui(t12, e27) {
  let { shaderGenerator: r, names: n2 = "strict", config: o2, enableExtensions: a2 } = e27 ?? {}, i2 = { [o$2]: true, [R$2](s2) {
    return t12.forEach((u2) => s2.resolve(u2)), y$2("", Sn$2, "runtime");
  }, toString: () => "<root>" };
  return me(i2, { namespace: typeof n2 == "string" ? X({ names: n2 }) : n2, enableExtensions: a2, shaderGenerator: r, config: o2, root: ba(t12) });
}
function ba(t12) {
  let e27 = t12.filter(xa);
  if (e27.length > 1) throw new Error(`Found ${e27.length} pipelines but can only resolve one at a time.`);
  return e27[0]?.[o$2].branch;
}
function va(t12) {
  let e27 = O$3() ?? new It({ namespace: X(), shaderGenerator: hr$1 }), r = [1, 1, 1], n2 = [1, 1, 1], o2 = [r[0] * n2[0], r[1] * n2[1], r[2] * n2[2]], a2 = /* @__PURE__ */ new Map(), i2 = Array.from({ length: r[0] }, () => Array.from({ length: r[1] }, () => Array.from({ length: r[2] }, () => /* @__PURE__ */ new Map()))), s2 = Array.from({ length: o2[0] }, () => Array.from({ length: o2[1] }, () => Array.from({ length: o2[2] }, () => /* @__PURE__ */ new Map()))), u2 = Array.from({ length: o2[0] }, (l2, m2) => Array.from({ length: o2[1] }, (f2, c2) => Array.from({ length: o2[2] }, (y2, w2) => {
    let b2 = Math.floor(m2 / n2[0]), B3 = Math.floor(c2 / n2[1]), F2 = Math.floor(w2 / n2[2]);
    return new lt$2(a2, { private: s2[m2][c2][w2], workgroup: i2[b2][B3][F2] });
  })));
  e27.pushMode(u2[0][0][0]);
  try {
    return { value: Ur$2(e27, t12), buffers: a2, privateVars: s2, workgroupVars: i2 };
  } finally {
    e27.popMode("simulate");
  }
}
function Sa(t12, e27, r, n2) {
  return new fn(t12, e27, r, n2);
}
function Dt$1(t12) {
  let e27 = t12;
  return e27?.resourceType === "query-set" && !!e27[o$2];
}
var fn = class {
  constructor(e27, r, n2, o2) {
    this.type = r;
    this.count = n2;
    this.rawQuerySet = o2;
    this.#e = e27.device, this._ownQuerySet = !o2, this._querySet = o2 || null;
  }
  resourceType = "query-set";
  #e;
  _querySet = null;
  _ownQuerySet;
  _destroyed = false;
  _available = true;
  _readBuffer = null;
  _resolveBuffer = null;
  get querySet() {
    if (this._destroyed) throw new Error("This QuerySet has been destroyed.");
    return this.rawQuerySet ? this.rawQuerySet : this._querySet ? this._querySet : (this._querySet = (globalThis.__TYPEGPU_AUTONAME__ ?? ((a2) => a2))(this.#e.createQuerySet({ type: this.type, count: this.count }), "_querySet"), this._querySet);
  }
  get destroyed() {
    return this._destroyed;
  }
  get available() {
    return this._available;
  }
  get [o$2]() {
    let e27 = this;
    return { get readBuffer() {
      return e27._readBuffer || (e27._readBuffer = (globalThis.__TYPEGPU_AUTONAME__ ?? ((a2) => a2))(e27.#e.createBuffer({ size: e27.count * BigUint64Array.BYTES_PER_ELEMENT, usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ }), "_readBuffer")), e27._readBuffer;
    }, get resolveBuffer() {
      return e27._resolveBuffer || (e27._resolveBuffer = (globalThis.__TYPEGPU_AUTONAME__ ?? ((a2) => a2))(e27.#e.createBuffer({ size: e27.count * BigUint64Array.BYTES_PER_ELEMENT, usage: GPUBufferUsage.QUERY_RESOLVE | GPUBufferUsage.COPY_SRC }), "_resolveBuffer")), e27._resolveBuffer;
    } };
  }
  $name(e27) {
    return g$2(this, e27), this._querySet && (this._querySet.label = e27), this;
  }
  resolve() {
    if (this._destroyed) throw new Error("This QuerySet has been destroyed.");
    if (!this._available) throw new Error("This QuerySet is busy resolving or reading.");
    let e27 = this.#e.createCommandEncoder();
    e27.resolveQuerySet(this.querySet, 0, this.count, this[o$2].resolveBuffer, 0), this.#e.queue.submit([e27.finish()]);
  }
  async read() {
    if (!this._resolveBuffer) throw new Error("QuerySet must be resolved before reading.");
    this._available = false;
    try {
      let e27 = this.#e.createCommandEncoder();
      e27.copyBufferToBuffer(this[o$2].resolveBuffer, 0, this[o$2].readBuffer, 0, this.count * BigUint64Array.BYTES_PER_ELEMENT), this.#e.queue.submit([e27.finish()]);
      let r = this[o$2].readBuffer;
      await r.mapAsync(GPUMapMode.READ);
      let n2 = new BigUint64Array(r.getMappedRange().slice());
      return r.unmap(), Array.from(n2);
    } finally {
      this._available = true;
    }
  }
  destroy() {
    this._destroyed || (this._destroyed = true, this._querySet && this._ownQuerySet && this._querySet.destroy(), this._readBuffer?.destroy(), this._resolveBuffer?.destroy(), this._readBuffer = this._resolveBuffer = null);
  }
};
var $t = class {
  constructor(e27) {
    this._make = e27;
  }
  _map = /* @__PURE__ */ new WeakMap();
  getOrMake(e27, ...r) {
    if (this._map.has(e27)) return this._map.get(e27);
    let n2 = this._make(e27, ...r);
    return this._map.set(e27, n2), n2;
  }
};
var Ce2 = class {
  constructor(e27, r) {
    this.resourceType = e27;
    this.buffer = r;
    this[B$3] = r, this.#e = this.buffer.as(this.resourceType);
  }
  [o$2] = true;
  [B$3];
  #e;
  $name(e27) {
    return g$2(this[B$3], e27), this;
  }
  write(e27) {
    this.buffer.write(e27);
  }
  writePartial(e27) {
    this.buffer.writePartial(e27);
  }
  read() {
    return this.buffer.read();
  }
  get [dn$2]() {
    return this.#e.$;
  }
  get $() {
    return this.#e.$;
  }
  get value() {
    return this.$;
  }
  [R$2](e27) {
    return e27.resolve(this.#e);
  }
};
var v = (t12) => Pt$2(t12 ?? 0), re = (t12) => Ut$2(t12 ?? 0), rt = (t12) => Et$1(t12 ?? 0), Di = { f32: (t12) => v(t12[0]), f16: (t12) => rt(t12[0]).x, i32: (t12) => re(t12[0]), u32: (t12) => t12[0] ?? 0, bool: (t12) => !!t12[0], vec2f: (t12) => F$3(v(t12[0]), v(t12[1])), vec3f: (t12) => ke$2(v(t12[0]), v(t12[1]), v(t12[2])), vec4f: (t12) => v$1(v(t12[0]), v(t12[1]), v(t12[2]), v(t12[3])), vec2h(t12) {
  let e27 = rt(t12[0]);
  return nn$2(e27.x, e27.y);
}, vec3h(t12) {
  let e27 = rt(t12[0]), r = rt(t12[1]);
  return sn$1(e27.x, e27.y, r.x);
}, vec4h(t12) {
  let e27 = rt(t12[0]), r = rt(t12[1]);
  return an$1(e27.x, e27.y, r.x, r.y);
}, vec2i: (t12) => pe$3(re(t12[0]), re(t12[1])), vec3i: (t12) => Fe$2(re(t12[0]), re(t12[1]), re(t12[2])), vec4i: (t12) => he$1(re(t12[0]), re(t12[1]), re(t12[2]), re(t12[3])), vec2u: (t12) => le$3(t12[0] ?? 0, t12[1] ?? 0), vec3u: (t12) => Pe$2(t12[0] ?? 0, t12[1] ?? 0, t12[2] ?? 0), vec4u: (t12) => xe$4(t12[0] ?? 0, t12[1] ?? 0, t12[2] ?? 0, t12[3] ?? 0), "vec2<bool>": (t12) => rn$1(!!t12[0], !!t12[1]), "vec3<bool>": (t12) => on$1(!!t12[0], !!t12[1], !!t12[2]), "vec4<bool>": (t12) => un$1(!!t12[0], !!t12[1], !!t12[2], !!t12[3]), mat2x2f: (t12) => j(v(t12[0]), v(t12[1]), v(t12[2]), v(t12[3])), mat3x3f: (t12) => q(v(t12[0]), v(t12[1]), v(t12[2]), v(t12[4]), v(t12[5]), v(t12[6]), v(t12[8]), v(t12[9]), v(t12[10])), mat4x4f: (t12) => g$1(v(t12[0]), v(t12[1]), v(t12[2]), v(t12[3]), v(t12[4]), v(t12[5]), v(t12[6]), v(t12[7]), v(t12[8]), v(t12[9]), v(t12[10]), v(t12[11]), v(t12[12]), v(t12[13]), v(t12[14]), v(t12[15])) };
function $i(t12, e27) {
  let r = Di[e27.type];
  if (r) return r(t12);
  if (An$1(e27)) {
    let n2 = Object.keys(e27.propTypes), o2 = Object.values(e27.propTypes), a2 = cn(t12, o2);
    return Object.fromEntries(n2.map((i2, s2) => [i2, a2[s2]]));
  }
  if (In$2(e27)) {
    let n2 = e27.elementType, o2 = e27.elementCount;
    return cn(t12, Array.from({ length: o2 }, () => n2));
  }
  throw new Error(`Cannot deserialize data of type ${e27.type}`);
}
function cn(t12, e27) {
  let r = 0;
  return e27.map((n2) => {
    if (!fe$3(n2)) return n2;
    let o2 = Math.ceil(l(n2) / 4), a2 = $i(t12.subarray(r, r + o2), n2);
    return r += o2, a2;
  });
}
function Pi(t12, e27) {
  return cn(t12, e27).map(St$2);
}
function Pt$1(t12) {
  let { indexBuffer: e27, dataBuffer: r, logIdToMeta: n2, options: o2 } = t12;
  r.read().then((a2) => {
    a2.filter((i2) => i2.id).forEach(({ id: i2, serializedData: s2 }) => {
      let { argTypes: u2, op: l2 } = n2.get(i2), m2 = Pi(new Uint32Array(s2), u2);
      m2.length === 0 && m2.push(""), console[l2](`%c${o2.messagePrefix}%c ${m2[0]}`, "background: #936ff5; color: white;", "color: inherit; background: none", ...m2.slice(1));
    });
  }), e27.read().then((a2) => {
    a2 > o2.logCountLimit && console.warn(`Log count limit per dispatch (${o2.logCountLimit}) exceeded by ${a2 - o2.logCountLimit} calls. Consider increasing the limit by passing appropriate options to tgpu.init().`);
  }), r.buffer.clear(), e27.buffer.clear();
}
function br$1(t12, e27, r) {
  if (!r.enabledFeatures.has("timestamp-query")) throw new Error('Performance callback requires the "timestamp-query" feature to be enabled on GPU device.');
  return t12.timestampWrites ? { ...t12, performanceCallback: e27 } : { ...t12, performanceCallback: e27, hasAutoQuerySet: true, timestampWrites: { querySet: (globalThis.__TYPEGPU_AUTONAME__ ?? ((a2) => a2))(r.createQuerySet("timestamp", 2), "querySet"), beginningOfPassWriteIndex: 0, endOfPassWriteIndex: 1 } };
}
function vr$1(t12, e27, r) {
  if (!r.enabledFeatures.has("timestamp-query")) throw new Error('Timestamp writes require the "timestamp-query" feature to be enabled on GPU device.');
  t12.hasAutoQuerySet && t12.timestampWrites && t12.timestampWrites.querySet.destroy();
  let n2 = { querySet: e27.querySet };
  return e27.beginningOfPassWriteIndex !== void 0 && (n2.beginningOfPassWriteIndex = e27.beginningOfPassWriteIndex), e27.endOfPassWriteIndex !== void 0 && (n2.endOfPassWriteIndex = e27.endOfPassWriteIndex), { ...t12, hasAutoQuerySet: false, timestampWrites: n2 };
}
function Sr$1(t12, e27) {
  if (!t12.timestampWrites) return {};
  let { querySet: r, beginningOfPassWriteIndex: n2, endOfPassWriteIndex: o2 } = t12.timestampWrites, a2 = { querySet: Dt$1(r) ? e27.unwrap(r) : r };
  return n2 !== void 0 && (a2.beginningOfPassWriteIndex = n2), o2 !== void 0 && (a2.endOfPassWriteIndex = o2), { timestampWrites: a2 };
}
function Ft$1({ root: t12, priors: e27 }) {
  let r = e27.timestampWrites?.querySet, n2 = e27.performanceCallback;
  if (!r) throw new Error("Cannot dispatch workgroups with performance callback without a query set.");
  if (!Dt$1(r)) throw new Error("Performance callback with raw GPUQuerySet is not supported. Use TgpuQuerySet instead.");
  let o2 = t12.device.createCommandEncoder();
  o2.resolveQuerySet(t12.unwrap(r), 0, r.count, r[o$2].resolveBuffer, 0), t12.device.queue.submit([o2.finish()]), t12.device.queue.onSubmittedWorkDone().then(async () => {
    if (!r.available) return;
    let a2 = await r.read(), i2 = a2[e27.timestampWrites?.beginningOfPassWriteIndex ?? 0], s2 = a2[e27.timestampWrites?.endOfPassWriteIndex ?? 1];
    if (i2 === void 0 || s2 === void 0) throw new Error("QuerySet did not return valid timestamps.");
    await n2(i2, s2);
  });
}
function Ua(t12, e27, r) {
  return new dn(new gn(t12, e27, r), {});
}
var dn = class t6 {
  constructor(e27, r) {
    this._core = e27;
    this._priors = r;
    this[o$2] = { get rawPipeline() {
      return e27.unwrap().pipeline;
    }, get priors() {
      return r;
    }, get branch() {
      return e27.branch;
    } }, this[B$3] = e27;
  }
  [o$2];
  resourceType = "compute-pipeline";
  [B$3];
  [R$2](e27) {
    return e27.resolve(this._core);
  }
  toString() {
    return `computePipeline:${z$2(this) ?? "<unnamed>"}`;
  }
  get rawPipeline() {
    return this._core.unwrap().pipeline;
  }
  with(e27, r) {
    return Ee(e27) ? new t6(this._core, { ...this._priors, bindGroupLayoutMap: new Map([...this._priors.bindGroupLayoutMap ?? [], [e27.layout, e27]]) }) : new t6(this._core, { ...this._priors, bindGroupLayoutMap: new Map([...this._priors.bindGroupLayoutMap ?? [], [e27, r]]) });
  }
  withPerformanceCallback(e27) {
    let r = br$1(this._priors, e27, this._core.branch);
    return new t6(this._core, r);
  }
  withTimestampWrites(e27) {
    let r = vr$1(this._priors, e27, this._core.branch);
    return new t6(this._core, r);
  }
  dispatchWorkgroups(e27, r, n2) {
    let o2 = this._core.unwrap(), { branch: a2 } = this._core, i2 = { label: z$2(this._core) ?? "<unnamed>", ...Sr$1(this._priors, a2) }, s2 = a2.device.createCommandEncoder(), u2 = s2.beginComputePass(i2);
    u2.setPipeline(o2.pipeline);
    let l2 = new Set(o2.usedBindGroupLayouts);
    if (o2.usedBindGroupLayouts.forEach((m2, f2) => {
      if (o2.catchall && f2 === o2.catchall[0]) u2.setBindGroup(f2, a2.unwrap(o2.catchall[1])), l2.delete(m2);
      else {
        let c2 = this._priors.bindGroupLayoutMap?.get(m2);
        c2 !== void 0 && (l2.delete(m2), u2.setBindGroup(f2, a2.unwrap(c2)));
      }
    }), l2.size > 0) throw new tt$3(l2);
    u2.dispatchWorkgroups(e27, r, n2), u2.end(), a2.device.queue.submit([s2.finish()]), o2.logResources && Pt$1(o2.logResources), this._priors.performanceCallback && Ft$1({ root: a2, priors: this._priors });
  }
  $name(e27) {
    return g$2(this._core, e27), this;
  }
}, gn = class {
  constructor(e27, r, n2) {
    this.branch = e27;
    this._slotBindings = r;
    this._entryFn = n2;
  }
  [o$2] = true;
  _memo;
  [R$2](e27) {
    return e27.withSlots(this._slotBindings, () => (e27.resolve(this._entryFn), y$2("", Sn$2, "runtime")));
  }
  toString() {
    return "computePipelineCore";
  }
  unwrap() {
    if (this._memo === void 0) {
      let e27 = this.branch.device, r = dr$2.filter((f2) => this.branch.enabledFeatures.has(yr$2[f2])), n2, a2 = X({ names: this.branch.nameRegistrySetting });
      n2 = me(this, { namespace: a2, enableExtensions: r, shaderGenerator: this.branch.shaderGenerator, root: this.branch });
      let { code: i2, usedBindGroupLayouts: s2, catchall: u2, logResources: l2 } = n2;
      u2 !== void 0 && s2[u2[0]]?.$name(`${z$2(this) ?? "<unnamed>"} - Automatic Bind Group & Layout`);
      let m2 = e27.createShaderModule({ label: `${z$2(this) ?? "<unnamed>"} - Shader`, code: i2 });
      this._memo = { pipeline: e27.createComputePipeline({ label: z$2(this) ?? "<unnamed>", layout: e27.createPipelineLayout({ label: `${z$2(this) ?? "<unnamed>"} - Pipeline Layout`, bindGroupLayouts: s2.map((f2) => this.branch.unwrap(f2)) }), compute: { module: m2 } }), usedBindGroupLayouts: s2, catchall: u2, logResources: l2 };
    }
    return this._memo;
  }
};
function hn(t12, e27 = "vertex") {
  return new Tn(t12, e27);
}
function Ir$1(t12) {
  return t12?.resourceType === "vertex-layout";
}
var yn = /* @__PURE__ */ Symbol("defaultAttribEntry");
function Ur$1(t12, e27, r, n2, o2) {
  if (Fn$1(e27) || qn$1(e27)) {
    let a2 = Zn$1(e27);
    return a2 !== void 0 && (n2[o2 ?? yn] = a2), Ur$1(t12, e27.inner, f(r, y$1(e27)), n2);
  }
  if (An$1(e27)) {
    let a2 = r, i2 = e27.propTypes;
    return Object.fromEntries(Object.entries(i2).map(([s2, u2]) => {
      a2 = f(a2, s$1(u2));
      let l$1 = [s2, Ur$1(t12, u2, a2, n2, s2)];
      return a2 += l(u2), l$1;
    }));
  }
  if (Hn$1(e27)) {
    let a2 = r, i2 = e27.propTypes;
    return Object.fromEntries(Object.entries(i2).map(([s2, u2]) => {
      a2 = f(a2, y$1(u2));
      let l$1 = [s2, Ur$1(t12, u2, a2, n2, s2)];
      return a2 += l(u2), l$1;
    }));
  }
  if ("type" in e27 && typeof e27.type == "string") {
    if (Ke$1.includes(e27.type)) return { _layout: t12, format: e27.type, offset: r };
    let a2 = Mn$1[e27.type];
    if (a2) return { _layout: t12, format: a2, offset: r };
  }
  throw new Error(`Unsupported data used in vertex layout: ${String(e27)}`);
}
var Tn = class {
  constructor(e27, r) {
    this.schemaForCount = e27;
    this.stepMode = r;
    let n2 = e27(0);
    this.stride = f(l(n2.elementType), s$1(n2)), this.attrib = Ur$1(this, n2.elementType, 0, this._customLocationMap);
  }
  [o$2] = true;
  resourceType = "vertex-layout";
  stride;
  attrib;
  _customLocationMap = {};
  get vertexLayout() {
    if (this._customLocationMap[yn] !== void 0) {
      if (typeof this.attrib.format != "string" || typeof this.attrib.offset != "number") throw new Error("Single attribute vertex layouts must have a format and offset.");
      return { arrayStride: this.stride, stepMode: this.stepMode, attributes: [{ format: this.attrib.format, offset: this.attrib.offset, shaderLocation: this._customLocationMap[yn] }] };
    }
    if (!Object.keys(this.attrib).every((r) => this._customLocationMap[r] !== void 0)) throw new Error("All attributes must have custom locations in order to unwrap a vertex layout.");
    return { arrayStride: this.stride, stepMode: this.stepMode, attributes: [...Object.entries(this.attrib).map(([r, n2]) => ({ format: n2.format, offset: n2.offset, shaderLocation: this._customLocationMap[r] }))] };
  }
  $name(e27) {
    return g$2(this, e27), this;
  }
};
function Fi(t12) {
  return typeof t12?.loadOp == "string";
}
function Ia(t12, e27) {
  if (Qn$1(t12)) {
    if (Q$2(t12)) return [];
    if (!Fi(e27)) throw new Error("Expected a single color attachment, not a record.");
    return [e27];
  }
  let r = [];
  for (let n2 of Object.keys(t12)) {
    let o2 = t12[n2];
    if (Q$2(o2)) continue;
    let a2 = e27[n2];
    if (!a2) throw new Error(`A color attachment by the name of '${n2}' was not provided to the shader.`);
    r.push(a2);
  }
  return r;
}
function Ri(t12) {
  return typeof t12?.format == "string";
}
function Da(t12, e27) {
  if (Qn$1(t12)) {
    if (Pn$1(t12)) return [];
    if (t12.type === "decorated") return [];
    if (!Ri(e27)) throw new Error("Expected a single color target configuration, not a record.");
    return [e27];
  }
  let r = [];
  for (let n2 of Object.keys(t12)) {
    let o2 = t12[n2];
    if (Q$2(o2)) continue;
    let a2 = e27[n2];
    if (!a2) throw new Error(`A color target by the name of '${n2}' was not provided to the shader.`);
    r.push(a2);
  }
  return r;
}
function bn(t12) {
  return new xn(new wn(t12), {});
}
var xn = class t7 {
  [o$2];
  resourceType = "render-pipeline";
  [B$3];
  hasIndexBuffer = false;
  constructor(e27, r) {
    this[o$2] = { core: e27, priors: r, branch: e27.options.branch }, this[B$3] = e27;
  }
  [R$2](e27) {
    return e27.resolve(this[o$2].core);
  }
  toString() {
    return `renderPipeline:${z$2(this) ?? "<unnamed>"}`;
  }
  $name(e27) {
    return g$2(this[o$2].core, e27), this;
  }
  with(e27, r) {
    let n2 = this[o$2];
    if (Ee(e27)) return new t7(n2.core, { ...n2.priors, bindGroupLayoutMap: new Map([...n2.priors.bindGroupLayoutMap ?? [], [e27.layout, e27]]) });
    if (dr$1(e27)) return new t7(n2.core, { ...n2.priors, bindGroupLayoutMap: new Map([...n2.priors.bindGroupLayoutMap ?? [], [e27, r]]) });
    if (Ir$1(e27)) return new t7(n2.core, { ...n2.priors, vertexLayoutMap: new Map([...n2.priors.vertexLayoutMap ?? [], [e27, r]]) });
    throw new Error("Unsupported value passed into .with()");
  }
  withPerformanceCallback(e27) {
    let r = this[o$2], n2 = br$1(r.priors, e27, r.core.options.branch);
    return new t7(r.core, n2);
  }
  withTimestampWrites(e27) {
    let r = this[o$2], n2 = vr$1(r.priors, e27, r.core.options.branch);
    return new t7(r.core, n2);
  }
  withColorAttachment(e27) {
    let r = this[o$2];
    return new t7(r.core, { ...r.priors, colorAttachment: e27 });
  }
  withDepthStencilAttachment(e27) {
    let r = this[o$2];
    return new t7(r.core, { ...r.priors, depthStencilAttachment: e27 });
  }
  withStencilReference(e27) {
    let r = this[o$2];
    return new t7(r.core, { ...r.priors, stencilReference: e27 });
  }
  withIndexBuffer(e27, r, n2, o2) {
    let a2 = this[o$2];
    if (kr$2(e27)) {
      if (typeof r != "string") throw new Error("If a GPUBuffer is passed, indexFormat must be provided.");
      return new t7(a2.core, { ...a2.priors, indexBuffer: { buffer: e27, indexFormat: r, offsetBytes: n2, sizeBytes: o2 } });
    }
    let i2 = { u32: "uint32", u16: "uint16" }, s2 = e27.dataType.elementType;
    return new t7(a2.core, { ...a2.priors, indexBuffer: { buffer: e27, indexFormat: i2[s2.type], offsetBytes: r !== void 0 ? r * l(s2) : void 0, sizeBytes: o2 !== void 0 ? o2 * l(s2) : void 0 } });
  }
  setupRenderPass(e27) {
    let r = this[o$2], n2 = r.core.unwrap(), { branch: o2, fragmentFn: a2 } = r.core.options, i2 = a2 ? Ia(a2.shell.out, r.priors.colorAttachment ?? {}).map((y2) => le(y2.view) ? { ...y2, view: o2.unwrap(y2.view).createView() } : ve2(y2.view) ? { ...y2, view: o2.unwrap(y2.view) } : y2) : [null], s2 = { label: z$2(r.core) ?? "<unnamed>", colorAttachments: i2, ...Sr$1(r.priors, o2) }, u2 = r.priors.depthStencilAttachment;
    if (u2 !== void 0) {
      let y2 = le(u2.view) ? o2.unwrap(u2.view).createView() : ve2(u2.view) ? o2.unwrap(u2.view) : u2.view;
      s2.depthStencilAttachment = { ...u2, view: y2 };
    }
    let l2 = e27.beginRenderPass(s2);
    l2.setPipeline(n2.pipeline), r.priors.stencilReference !== void 0 && l2.setStencilReference(r.priors.stencilReference);
    let m2 = new Set(n2.usedBindGroupLayouts);
    n2.usedBindGroupLayouts.forEach((y2, w2) => {
      if (n2.catchall && w2 === n2.catchall[0]) l2.setBindGroup(w2, o2.unwrap(n2.catchall[1])), m2.delete(y2);
      else {
        let b2 = r.priors.bindGroupLayoutMap?.get(y2);
        b2 !== void 0 && (m2.delete(y2), l2.setBindGroup(w2, o2.unwrap(b2)));
      }
    });
    let f2 = new Set(r.core.usedVertexLayouts);
    if (r.core.usedVertexLayouts.forEach((y2, w2) => {
      let b2 = r.priors.vertexLayoutMap?.get(y2);
      b2 && (f2.delete(y2), l2.setVertexBuffer(w2, o2.unwrap(b2)));
    }), m2.size > 0) throw new tt$3(m2);
    if (f2.size > 0) throw new nt$2(f2);
    return l2;
  }
  draw(e27, r, n2, o2) {
    let a2 = this[o$2], { branch: i2 } = a2.core.options, { logResources: s2 } = a2.core.unwrap(), u2 = i2.device.createCommandEncoder(), l2 = this.setupRenderPass(u2);
    l2.draw(e27, r, n2, o2), l2.end(), i2.device.queue.submit([u2.finish()]), s2 && Pt$1(s2), a2.priors.performanceCallback && Ft$1({ root: i2, priors: a2.priors });
  }
  drawIndexed(e27, r, n2, o2, a2) {
    let i2 = this[o$2];
    if (!i2.priors.indexBuffer) throw new Error("No index buffer set for this render pipeline.");
    let { logResources: s2 } = i2.core.unwrap(), { branch: u2 } = i2.core.options, { buffer: l2, indexFormat: m2, offsetBytes: f2, sizeBytes: c2 } = i2.priors.indexBuffer, y2 = u2.device.createCommandEncoder(), w2 = this.setupRenderPass(y2);
    kr$2(l2) ? w2.setIndexBuffer(l2, m2, f2, c2) : w2.setIndexBuffer(u2.unwrap(l2), m2, f2, c2), w2.drawIndexed(e27, r, n2, o2, a2), w2.end(), u2.device.queue.submit([y2.finish()]), s2 && Pt$1(s2), i2.priors.performanceCallback && Ft$1({ root: u2, priors: i2.priors });
  }
}, wn = class {
  constructor(e27) {
    this.options = e27;
    let r = Vo(e27.vertexFn.shell.in ?? {}, e27.vertexAttribs);
    this._vertexBufferLayouts = r.bufferDefinitions, this.usedVertexLayouts = r.usedVertexLayouts, this._targets = e27.fragmentFn && e27.targets ? Da(e27.fragmentFn.shell.out, e27.targets) : [null];
  }
  [o$2] = true;
  usedVertexLayouts;
  _memo;
  _vertexBufferLayouts;
  _targets;
  [R$2](e27) {
    let { vertexFn: r, fragmentFn: n2, slotBindings: o2 } = this.options, a2 = Bi(r.shell.out, n2?.shell.in, z$2(r) ?? "<unnamed>", z$2(n2) ?? "<unnamed>");
    return e27.withVaryingLocations(a2, () => e27.withSlots(o2, () => (e27.resolve(r), n2 && e27.resolve(n2), y$2("", Sn$2, "runtime"))));
  }
  toString() {
    return "renderPipelineCore";
  }
  unwrap() {
    if (this._memo === void 0) {
      let { branch: e27, primitiveState: r, depthStencilState: n2, multisampleState: o2 } = this.options, a2 = e27.device, i2 = dr$2.filter((F2) => e27.enabledFeatures.has(yr$2[F2])), s2, l2 = X({ names: e27.nameRegistrySetting });
      s2 = me(this, { namespace: l2, enableExtensions: i2, shaderGenerator: e27.shaderGenerator, root: e27 });
      let { code: m2, usedBindGroupLayouts: f2, catchall: c2, logResources: y2 } = s2;
      c2 !== void 0 && f2[c2[0]]?.$name(`${z$2(this) ?? "<unnamed>"} - Automatic Bind Group & Layout`);
      let w2 = a2.createShaderModule({ label: `${z$2(this) ?? "<unnamed>"} - Shader`, code: m2 }), b2 = { layout: a2.createPipelineLayout({ label: `${z$2(this) ?? "<unnamed>"} - Pipeline Layout`, bindGroupLayouts: f2.map((F2) => e27.unwrap(F2)) }), vertex: { module: w2, buffers: this._vertexBufferLayouts } }, B3 = z$2(this);
      B3 !== void 0 && (b2.label = B3), this.options.fragmentFn && (b2.fragment = { module: w2, targets: this._targets }), r && (fe$3(r.stripIndexFormat) ? b2.primitive = { ...r, stripIndexFormat: { u32: "uint32", u16: "uint16" }[r.stripIndexFormat.type] } : b2.primitive = r), n2 && (b2.depthStencil = n2), o2 && (b2.multisample = o2), this._memo = { pipeline: a2.createRenderPipeline(b2), usedBindGroupLayouts: f2, catchall: c2, logResources: y2 };
    }
    return this._memo;
  }
};
function Bi(t12, e27, r, n2) {
  let o2 = {}, a2 = /* @__PURE__ */ new Set();
  function i2(u2, l2) {
    o2[u2] = l2, a2.add(l2);
  }
  for (let [u2, l2] of Object.entries(t12)) {
    let m2 = Zn$1(l2);
    m2 !== void 0 && i2(u2, m2);
  }
  for (let [u2, l2] of Object.entries(e27 ?? {})) {
    let m2 = Zn$1(l2);
    m2 !== void 0 && (o2[u2] === void 0 ? i2(u2, m2) : o2[u2] !== m2 && console.warn(`Mismatched location between vertexFn (${r}) output (${o2[u2]}) and fragmentFn (${n2}) input (${m2}) for the key "${u2}", using the location set on vertex output.`));
  }
  let s2 = 0;
  for (let u2 of Object.keys(t12 ?? {})) if (!(Q$2(t12[u2]) || o2[u2] !== void 0)) {
    for (; a2.has(s2); ) s2++;
    i2(u2, s2);
  }
  return o2;
}
function Ai(t12) {
  if (t12.includes(0)) throw new Error("Size and workgroupSize cannot contain zeroes.");
  return Pe$2(t12[0] ?? 1, t12[1] ?? 1, t12[2] ?? 1);
}
var Ei = [Pe$2(1, 1, 1), Pe$2(256, 1, 1), Pe$2(16, 16, 1), Pe$2(8, 8, 4)], vn = class t8 {
  #e;
  #t;
  #r;
  #n;
  #o;
  constructor(e27, r, n2, o2) {
    this.#e = e27, this.#t = r, this.#r = n2, this.#n = o2, this.#o = Pe$2();
  }
  with(e27) {
    return new t8(this.#e, this.#t.with(e27), this.#r, this.#n);
  }
  dispatchThreads(...e27) {
    let r = Ai(e27), n2 = An(ke$2(r).div(ke$2(this.#n)));
    jt$1(r, this.#o) || (this.#o = r, this.#r.write(r)), this.#t.dispatchWorkgroups(n2.x, n2.y, n2.z);
  }
  get pipeline() {
    return this.#t;
  }
  get sizeUniform() {
    return this.#r;
  }
}, Sn = class t9 {
  constructor(e27, r) {
    this._getRoot = e27;
    this._slotBindings = r;
  }
  with(e27, r) {
    return new t9(this._getRoot, [...this._slotBindings, [ar$4(e27) ? e27.slot : e27, r]]);
  }
  withCompute(e27) {
    return new Un(this._getRoot(), this._slotBindings, e27);
  }
  createGuardedComputePipeline(e27) {
    let r = this._getRoot();
    if (e27.length >= 4) throw new Error("Guarded compute callback only supports up to three dimensions.");
    let n2 = Ei[e27.length], o2 = I$1([T$2, T$2, T$2])(e27), a2 = (globalThis.__TYPEGPU_AUTONAME__ ?? ((a3) => a3))(r.createUniform(Pe$2), "a"), i2 = Jt$2({ workgroupSize: n2, in: { id: ze$2.globalInvocationId } })`{
  if (any(in.id >= sizeUniform)) {
    return;
  }
  wrappedCallback(in.id.x, in.id.y, in.id.z);
}`.$uses({ sizeUniform: a2, wrappedCallback: o2 }), s2 = (globalThis.__TYPEGPU_AUTONAME__ ?? ((a3) => a3))(this.withCompute(i2).createPipeline(), "s");
    return new vn(r, s2, a2, n2);
  }
  withVertex(e27, r) {
    return new In({ branch: this._getRoot(), primitiveState: void 0, depthStencilState: void 0, slotBindings: this._slotBindings, vertexFn: e27, vertexAttribs: r ?? {}, multisampleState: void 0 });
  }
  pipe(e27) {
    let r = e27(new Xe([]));
    return new t9(this._getRoot, [...this._slotBindings, ...r.bindings]);
  }
}, Un = class {
  constructor(e27, r, n2) {
    this._root = e27;
    this._slotBindings = r;
    this._entryFn = n2;
  }
  createPipeline() {
    return Ua(this._root, this._slotBindings, this._entryFn);
  }
}, In = class t10 {
  constructor(e27) {
    this._options = e27;
  }
  withFragment(e27, r, n2) {
    return we$2(typeof e27 != "string"), we$2(r === void 0 || typeof r != "string"), new Dn({ ...this._options, fragmentFn: e27, targets: r ?? {} });
  }
  withPrimitive(e27) {
    return new t10({ ...this._options, primitiveState: e27 });
  }
  withDepthStencil(e27) {
    return new t10({ ...this._options, depthStencilState: e27 });
  }
  withMultisample(e27) {
    return new t10({ ...this._options, multisampleState: e27 });
  }
  createPipeline() {
    return bn({ ...this._options, fragmentFn: null, targets: null });
  }
}, Dn = class t11 {
  constructor(e27) {
    this._options = e27;
  }
  withPrimitive(e27) {
    return new t11({ ...this._options, primitiveState: e27 });
  }
  withDepthStencil(e27) {
    return new t11({ ...this._options, depthStencilState: e27 });
  }
  withMultisample(e27) {
    return new t11({ ...this._options, multisampleState: e27 });
  }
  createPipeline() {
    return bn(this._options);
  }
}, Dr$1 = class Dr extends Sn {
  constructor(r, n2, o2, a2, i2) {
    super(() => this, []);
    this.device = r;
    this.nameRegistrySetting = n2;
    this._ownDevice = o2;
    this.shaderGenerator = i2;
    this["~unstable"] = this, this[o$2] = { logOptions: a2 };
  }
  "~unstable";
  _unwrappedBindGroupLayouts = new $t((r) => r.unwrap(this));
  _unwrappedBindGroups = new $t((r) => r.unwrap(this));
  [o$2];
  get enabledFeatures() {
    return new Set(this.device.features);
  }
  createBuffer(r, n2) {
    return xt(this, r, n2);
  }
  createUniform(r, n2) {
    let o2 = xt(this, r, n2).$usage("uniform");
    return new Ce2("uniform", o2);
  }
  createMutable(r, n2) {
    let o2 = xt(this, r, n2).$usage("storage");
    return new Ce2("mutable", o2);
  }
  createReadonly(r, n2) {
    let o2 = xt(this, r, n2).$usage("storage");
    return new Ce2("readonly", o2);
  }
  createQuerySet(r, n2, o2) {
    return Sa(this, r, n2, o2);
  }
  createBindGroup(r, n2) {
    return new et(r, n2);
  }
  destroy() {
    Jo(this.device), this._ownDevice && this.device.destroy();
  }
  createTexture(r) {
    return ra(r, this);
  }
  createSampler(r) {
    return Ko(r, this);
  }
  createComparisonSampler(r) {
    return Yo(r, this);
  }
  unwrap(r) {
    if (ln(r)) return r[o$2].rawPipeline;
    if (mn(r)) return r[o$2].core.unwrap().pipeline;
    if (dr$1(r)) return this._unwrappedBindGroupLayouts.getOrMake(r);
    if (Ee(r)) return this._unwrappedBindGroups.getOrMake(r);
    if (be(r)) return r.buffer;
    if (le(r)) return r[o$2].unwrap();
    if (ve2(r)) {
      if (!r[o$2].unwrap) throw new Error("Cannot unwrap laid-out texture view as it has no underlying resource.");
      return r[o$2].unwrap();
    }
    if (Ir$1(r)) return r.vertexLayout;
    if (wt$1(r) || bt(r)) {
      if (r[o$2].unwrap) return r[o$2].unwrap();
      throw new Error("Cannot unwrap laid-out sampler.");
    }
    if (Dt$1(r)) return r.querySet;
    throw new Error(`Unknown resource type: ${r}`);
  }
  beginRenderPass(r, n2) {
    let o2 = this.device.createCommandEncoder(), a2 = o2.beginRenderPass(r), i2 = /* @__PURE__ */ new Map(), s2 = /* @__PURE__ */ new Map(), u2, l2 = () => {
      if (!u2) throw new Error("Cannot draw without a call to pass.setPipeline");
      let { core: m2, priors: f2 } = u2[o$2], c2 = m2.unwrap();
      a2.setPipeline(c2.pipeline);
      let y2 = new Set(c2.usedBindGroupLayouts);
      c2.usedBindGroupLayouts.forEach((b2, B3) => {
        if (c2.catchall && B3 === c2.catchall[0]) a2.setBindGroup(B3, this.unwrap(c2.catchall[1])), y2.delete(b2);
        else {
          let F2 = f2.bindGroupLayoutMap?.get(b2) ?? i2.get(b2);
          F2 !== void 0 && (y2.delete(b2), Ee(F2) ? a2.setBindGroup(B3, this.unwrap(F2)) : a2.setBindGroup(B3, F2));
        }
      });
      let w2 = /* @__PURE__ */ new Set();
      if (m2.usedVertexLayouts.forEach((b2, B3) => {
        let F2 = f2.vertexLayoutMap?.get(b2), K2 = F2 ? { buffer: F2, offset: void 0, size: void 0 } : s2.get(b2);
        !K2 || !K2.buffer ? w2.add(b2) : be(K2.buffer) ? a2.setVertexBuffer(B3, this.unwrap(K2.buffer), K2.offset, K2.size) : a2.setVertexBuffer(B3, K2.buffer, K2.offset, K2.size);
      }), y2.size > 0) throw new tt$3(y2);
      if (w2.size > 0) throw new nt$2(w2);
    };
    n2({ setViewport(...m2) {
      a2.setViewport(...m2);
    }, setScissorRect(...m2) {
      a2.setScissorRect(...m2);
    }, setBlendConstant(...m2) {
      a2.setBlendConstant(...m2);
    }, setStencilReference(...m2) {
      a2.setStencilReference(...m2);
    }, beginOcclusionQuery(...m2) {
      a2.beginOcclusionQuery(...m2);
    }, endOcclusionQuery(...m2) {
      a2.endOcclusionQuery(...m2);
    }, executeBundles(...m2) {
      a2.executeBundles(...m2);
    }, setPipeline(m2) {
      u2 = m2;
    }, setIndexBuffer: (m2, f2, c2, y2) => {
      be(m2) ? a2.setIndexBuffer(this.unwrap(m2), f2, c2, y2) : a2.setIndexBuffer(m2, f2, c2, y2);
    }, setVertexBuffer(m2, f2, c2, y2) {
      s2.set(m2, { buffer: f2, offset: c2, size: y2 });
    }, setBindGroup(m2, f2) {
      i2.set(m2, f2);
    }, draw(m2, f2, c2, y2) {
      l2(), a2.draw(m2, f2, c2, y2);
    }, drawIndexed(...m2) {
      l2(), a2.drawIndexed(...m2);
    }, drawIndirect(...m2) {
      l2(), a2.drawIndirect(...m2);
    }, drawIndexedIndirect(...m2) {
      l2(), a2.drawIndexedIndirect(...m2);
    } }), a2.end(), this.device.queue.submit([o2.finish()]);
  }
  flush() {
    console.warn("flush() has been deprecated, and has no effect.");
  }
};
async function $a(t12) {
  let { adapter: e27, device: r, unstable_names: n2 = "strict", unstable_logOptions: o2 } = t12 ?? {};
  if (!navigator.gpu) throw new Error("WebGPU is not supported by this browser.");
  let a2 = await navigator.gpu.requestAdapter(e27);
  if (!a2) throw new Error("Could not find a compatible GPU");
  let i2 = [];
  for (let u2 of r?.requiredFeatures ?? []) {
    if (!a2.features.has(u2)) throw new Error(`Requested feature "${u2}" is not supported by the adapter.`);
    i2.push(u2);
  }
  for (let u2 of r?.optionalFeatures ?? []) a2.features.has(u2) ? i2.push(u2) : console.warn(`Optional feature "${u2}" is not supported by the adapter.`);
  let s2 = await a2.requestDevice({ ...r, requiredFeatures: i2 });
  return new Dr$1(s2, n2, true, o2 ?? {}, t12?.shaderGenerator);
}
function Pa(t12) {
  let { device: e27, unstable_names: r = "strict", unstable_logOptions: n2 } = t12 ?? {};
  return new Dr$1(e27, r, false, n2 ?? {}, t12?.shaderGenerator);
}
function Fa(t12, e27) {
  return new $n(t12, e27);
}
var $n = class {
  constructor(e27, r = void 0) {
    this.schema = e27;
    this.defaultValue = r;
    this.slot = Ge(r), this[B$3] = this.slot;
  }
  [o$2] = true;
  [B$3];
  resourceType = "accessor";
  slot;
  get [dn$2]() {
    return new Proxy({ [o$2]: true, [de$3]: this.#e(), [R$2]: (e27) => e27.resolve(this), toString: () => `accessor:${z$2(this) ?? "<unnamed>"}.$` }, C);
  }
  #e() {
    let e27 = O$3(), r = Be(e27.unwrap(this.slot));
    if (dt(r)) return r[o$2].gpuImpl();
    let n2 = Ae$2(r);
    if (n2) return n2;
    e27.pushMode(new $$2());
    try {
      let o2 = bt$3(this.schema, r);
      return y$2(o2, this.schema, "constant");
    } finally {
      e27.popMode("normal");
    }
  }
  $name(e27) {
    return this.slot.$name(e27), this;
  }
  toString() {
    return `accessor:${z$2(this) ?? "<unnamed>"}`;
  }
  get value() {
    if (Ve$1()) return this[dn$2];
    throw new Error("`tgpu.accessor` relies on GPU resources and cannot be accessed outside of a compute dispatch or draw call");
  }
  get $() {
    return this.value;
  }
  [R$2](e27) {
    let r = this.#e();
    return y$2(e27.resolve(r.value, r.dataType).value, r.dataType, r.origin);
  }
};
function Ra(t12) {
  return Ci(t12);
}
function Gi([t12, e27]) {
  return `${z$2(t12) ?? "<unnamed>"}=${e27}`;
}
function Ci(t12) {
  if (O$3()) throw new Error("Cannot create tgpu.derived objects at the resolution stage.");
  return { [o$2]: true, resourceType: "derived", "~compute": t12, get [dn$2]() {
    let r = O$3();
    if (!r) throw new Error("Cannot access tgpu.derived's value outside of resolution.");
    return Be(r.unwrap(this));
  }, get value() {
    return this[dn$2];
  }, get $() {
    return this.value;
  }, with(r, n2) {
    return Ba(this, [[r, n2]]);
  }, toString() {
    return "derived";
  } };
}
function Ba(t12, e27) {
  return { [o$2]: true, resourceType: "derived", "~compute"() {
    throw new Error("'~compute' should never be read on bound derived items.");
  }, [Re$1]: { inner: t12, pairs: e27 }, get [dn$2]() {
    let n2 = O$3();
    if (!n2) throw new Error("Cannot access tgpu.derived's value outside of resolution.");
    return Be(n2.unwrap(this));
  }, get value() {
    return this[dn$2];
  }, get $() {
    return this.value;
  }, with(n2, o2) {
    return Ba(t12, [...e27, [n2, o2]]);
  }, toString() {
    return `derived[${e27.map(Gi).join(", ")}]`;
  } };
}
var Li = { fn: I$1, bindGroupLayout: cr$1, vertexLayout: hn, slot: Ge, init: $a, initFromDevice: Pa, resolve: wa, resolveWithContext: wr$1, privateVar: tt, workgroupVar: nn, const: ct, "~unstable": { fn: I$1, fragmentFn: Eo, vertexFn: qe$1, computeFn: Jt$2, comptime: Ji, vertexLayout: hn, namespace: X, derived: Ra, slot: Ge, accessor: Fa, privateVar: tt, workgroupVar: nn, const: ct, declare: Ro, rawCodeSnippet: Ao, simulate: va } }, $d = Li;
var Gt$1 = Ji(((e27, t12) => t12 === void 0 ? (r) => S(e27, r) : S(e27, t12))).$name("disarrayOf");
function S(e27, t12) {
  let r = (a2) => {
    if (a2 && a2.length !== t12) throw new Error(`Disarray schema of ${t12} elements of type ${e27.type} called with ${a2.length} argument(s).`);
    return Array.from({ length: t12 }, (s2, n2) => bt$3(e27, a2?.[n2]));
  };
  if (Object.setPrototypeOf(r, Ht$1), r.elementType = e27, !Number.isInteger(t12) || t12 < 0) throw new Error(`Cannot create disarray schema with invalid element count: ${t12}.`);
  return r.elementCount = t12, r;
}
var Ht$1 = { [o$2]: true, type: "disarray", toString() {
  return `disarrayOf(${this.elementType}, ${this.elementCount})`;
} };
function Rt$1(e27) {
  let t12 = (r) => Object.fromEntries(Object.entries(e27).map(([a2, s2]) => [a2, bt$3(s2, r?.[a2])]));
  return Object.setPrototypeOf(t12, Jt$1), t12.propTypes = e27, t12;
}
var Jt$1 = { [o$2]: true, type: "unstruct", $name(e27) {
  return g$2(this, e27), this;
}, toString() {
  return `unstruct:${z$2(this) ?? "<unnamed>"}`;
} };
function u(e27, t12) {
  if (e27 === t12) return true;
  if (e27.type !== t12.type) return false;
  if (An$1(e27) && An$1(t12) || Hn$1(e27) && Hn$1(t12)) {
    let r = e27.propTypes, a2 = t12.propTypes, s2 = Object.keys(r), n2 = Object.keys(a2);
    if (s2.length !== n2.length) return false;
    for (let o2 = 0; o2 < s2.length; o2++) {
      let h2 = s2[o2], W3 = n2[o2];
      if (h2 !== W3 || !h2 || !W3 || !u(r[h2], a2[W3])) return false;
    }
    return true;
  }
  if (In$2(e27) && In$2(t12) || Yn$1(e27) && Yn$1(t12)) return e27.elementCount === t12.elementCount && u(e27.elementType, t12.elementType);
  if (Ee$2(e27) && Ee$2(t12)) return e27.addressSpace === t12.addressSpace && e27.access === t12.access && u(e27.inner, t12.inner);
  if ($n$2(e27) && $n$2(t12)) return u(e27.inner, t12.inner);
  if (Fn$1(e27) && Fn$1(t12) || qn$1(e27) && qn$1(t12)) {
    if (!u(e27.inner, t12.inner) || e27.attribs.length !== t12.attribs.length) return false;
    let r = (n2) => {
      let o2 = n2;
      return `${o2.type}(${(o2.params ?? []).join(",")})`;
    }, a2 = e27.attribs.map(r), s2 = t12.attribs.map(r);
    for (let n2 = 0; n2 < a2.length; n2++) if (a2[n2] !== s2[n2]) return false;
  }
  return true;
}
function i$1(e27, t12) {
  let r = e27.prototype, a2 = X$2[t12][o$2].jsImpl;
  r[t12] = function(s2) {
    return a2(this, s2);
  };
}
i$1(ce$3, "add");
i$1(ce$3, "sub");
i$1(ce$3, "mul");
i$1(ce$3, "div");
i$1(xe$1, "add");
i$1(xe$1, "sub");
i$1(xe$1, "mul");
const d = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Void: Sn$2,
  align: xe$3,
  alignmentOf: ne$2,
  arrayOf: F$2,
  atomic: ve$2,
  bool: V$1,
  builtin: ze$2,
  comparisonSampler: fe$1,
  deepEqual: u,
  disarrayOf: Gt$1,
  f16: _$1,
  f32: x$2,
  float16: _s,
  float16x2: Is,
  float16x4: As,
  float32: $s,
  float32x2: Ds,
  float32x3: ks,
  float32x4: Fs,
  formatToWGSLType: Se$3,
  i32: f$1,
  interpolate: Te$3,
  invariant: De$1,
  isAlignAttrib: Ue$1,
  isAtomic: $n$2,
  isBuiltin: Q$2,
  isBuiltinAttrib: kn$1,
  isData: Qn$1,
  isDecorated: Fn$1,
  isDisarray: Yn$1,
  isInterpolateAttrib: Dn$2,
  isLocationAttrib: Be$2,
  isLooseData: Bt$1,
  isLooseDecorated: qn$1,
  isPackedData: js,
  isPtr: Ee$2,
  isSizeAttrib: Ce$3,
  isUnstruct: Hn$1,
  isWgslArray: In$2,
  isWgslData: fe$3,
  isWgslStruct: An$1,
  location: ge$2,
  mat2x2f: j,
  mat3x3f: q,
  mat4x4f: g$1,
  matToArray: Lt$2,
  packedFormats: pn$1,
  ptrFn: fr$3,
  ptrHandle: vr$3,
  ptrPrivate: wr$3,
  ptrStorage: gr$3,
  ptrUniform: Vr$2,
  ptrWorkgroup: Tr$4,
  ref: Zr$2,
  sampler: ue$1,
  sint16: fs,
  sint16x2: ws,
  sint16x4: Ts,
  sint32: Us,
  sint32x2: Cs,
  sint32x3: Bs,
  sint32x4: Ms,
  sint8: ss,
  sint8x2: os,
  sint8x4: as,
  size: be$3,
  sizeOf: ue$4,
  snorm16: bs,
  snorm16x2: zs,
  snorm16x4: Ss,
  snorm8: ps,
  snorm8x2: ls,
  snorm8x4: hs,
  struct: Js,
  texture1d: zt$1,
  texture2d: St$1,
  texture2dArray: Vt$1,
  texture3d: Ft$2,
  textureCube: At,
  textureCubeArray: Wt$1,
  textureDepth2d: dr$3,
  textureDepth2dArray: gr$2,
  textureDepthCube: vr$2,
  textureDepthCubeArray: fr$2,
  textureDepthMultisampled2d: pr$2,
  textureExternal: hr$2,
  textureMultisampled2d: _t$1,
  textureStorage1d: $t$1,
  textureStorage2d: Ct,
  textureStorage2dArray: kt$1,
  textureStorage3d: It$1,
  u16: vi$1,
  u32: T$2,
  uint16: xs,
  uint16x2: ds,
  uint16x4: ms,
  uint32: Ps,
  uint32x2: Rs,
  uint32x3: Ns,
  uint32x4: Es,
  uint8: ns,
  uint8x2: rs,
  uint8x4: is,
  unorm10_10_10_2: Os,
  unorm16: gs,
  unorm16x2: Vs,
  unorm16x4: vs,
  unorm8: us,
  unorm8x2: ys,
  unorm8x4: cs,
  unorm8x4_bgra: Ws,
  unstruct: Rt$1,
  vec2b: rn$1,
  vec2f: F$3,
  vec2h: nn$2,
  vec2i: pe$3,
  vec2u: le$3,
  vec3b: on$1,
  vec3f: ke$2,
  vec3h: sn$1,
  vec3i: Fe$2,
  vec3u: Pe$2,
  vec4b: un$1,
  vec4f: v$1,
  vec4h: an$1,
  vec4i: he$1,
  vec4u: xe$4
}, Symbol.toStringTag, { value: "Module" }));
var wt = k$1({ name: "discard", normalImpl: "`discard` relies on GPU resources and cannot be executed outside of a draw call", signature: { argTypes: [], returnType: Sn$2 }, codegenImpl: () => "discard;" });
var I2 = cr$3[o$2].jsImpl, Dt = ct$2[o$2].jsImpl, Et = ct$2[o$2].gpuImpl, Lt = ot$1[o$2].jsImpl, Ot = ot$1[o$2].gpuImpl, Bt = lt$1[o$2].jsImpl, Wt = lt$1[o$2].gpuImpl, Ft = xt$1[o$2].jsImpl, Vt = xt$1[o$2].gpuImpl, _t = mt$1[o$2].jsImpl, Mt = mt$1[o$2].gpuImpl, Nt = k$1({ name: "translate4", normalImpl: (e27, t12) => I2(Dt(t12), e27), signature: { argTypes: [g$1, ke$2], returnType: g$1 }, codegenImpl: (e27, t12) => p$1`(${Et(t12)} * ${e27})` }), Gt = k$1({ name: "scale4", normalImpl: (e27, t12) => I2(Lt(t12), e27), signature: { argTypes: [g$1, ke$2], returnType: g$1 }, codegenImpl: (e27, t12) => p$1`(${Ot(t12)} * ${e27})` }), B2 = { argTypes: [g$1, x$2], returnType: g$1 }, Pt = k$1({ name: "rotateX4", normalImpl: (e27, t12) => I2(Bt(t12), e27), signature: B2, codegenImpl: (e27, t12) => p$1`(${Wt(t12)} * ${e27})` }), Ut2 = k$1({ name: "rotateY4", normalImpl: (e27, t12) => I2(Ft(t12), e27), signature: B2, codegenImpl: (e27, t12) => p$1`(${Vt(t12)} * ${e27})` }), Xt = k$1({ name: "rotateZ4", normalImpl: (e27, t12) => I2(_t(t12), e27), signature: B2, codegenImpl: (e27, t12) => p$1`(${Mt(t12)} * ${e27})` });
var kt = k$1({ name: "workgroupBarrier", normalImpl: "workgroupBarrier is a no-op outside of CODEGEN mode.", signature: { argTypes: [], returnType: Sn$2 }, codegenImpl: () => "workgroupBarrier()" }), Rt = k$1({ name: "storageBarrier", normalImpl: "storageBarrier is a no-op outside of CODEGEN mode.", signature: { argTypes: [], returnType: Sn$2 }, codegenImpl: () => "storageBarrier()" }), Zt2 = k$1({ name: "textureBarrier", normalImpl: "textureBarrier is a no-op outside of CODEGEN mode.", signature: { argTypes: [], returnType: Sn$2 }, codegenImpl: () => "textureBarrier()" }), m = "Atomic operations are not supported outside of CODEGEN mode.", Yt = k$1({ name: "atomicLoad", normalImpl: m, signature: (e27) => {
  if (e27.type !== "atomic") throw new Error(`Invalid atomic type: ${eo(e27)}`);
  return { argTypes: [e27], returnType: e27.inner };
}, codegenImpl: (e27) => p$1`atomicLoad(&${e27})` }), jt = (e27, t12) => {
  if (e27.type !== "atomic") throw new Error(`Invalid atomic type: ${eo(e27)}`);
  return { argTypes: [e27, e27.inner.type === "u32" ? T$2 : f$1], returnType: Sn$2 };
}, x = (e27, t12) => {
  if (e27.type !== "atomic") throw new Error(`Invalid atomic type: ${eo(e27)}`);
  let s2 = e27.inner.type === "u32" ? T$2 : f$1;
  return { argTypes: [e27, s2], returnType: s2 };
}, qt = k$1({ name: "atomicStore", normalImpl: m, signature: jt, codegenImpl: (e27, t12) => p$1`atomicStore(&${e27}, ${t12})` }), zt = k$1({ name: "atomicAdd", normalImpl: m, signature: x, codegenImpl: (e27, t12) => p$1`atomicAdd(&${e27}, ${t12})` }), Ht = k$1({ name: "atomicSub", normalImpl: m, signature: x, codegenImpl: (e27, t12) => p$1`atomicSub(&${e27}, ${t12})` }), Jt = k$1({ name: "atomicMax", normalImpl: m, signature: x, codegenImpl: (e27, t12) => p$1`atomicMax(&${e27}, ${t12})` }), Kt = k$1({ name: "atomicMin", normalImpl: m, signature: x, codegenImpl: (e27, t12) => p$1`atomicMin(&${e27}, ${t12})` }), Qt = k$1({ name: "atomicAnd", normalImpl: m, signature: x, codegenImpl: (e27, t12) => p$1`atomicAnd(&${e27}, ${t12})` }), er2 = k$1({ name: "atomicOr", normalImpl: m, signature: x, codegenImpl: (e27, t12) => p$1`atomicOr(&${e27}, ${t12})` }), tr2 = k$1({ name: "atomicXor", normalImpl: m, signature: x, codegenImpl: (e27, t12) => p$1`atomicXor(&${e27}, ${t12})` });
var i = "Derivative builtins are not allowed on the CPU", rr2 = k$1({ name: "dpdx", normalImpl: i, signature: (e27) => ({ argTypes: [e27], returnType: e27 }), codegenImpl: (e27) => p$1`dpdx(${e27})` }), or = k$1({ name: "dpdxCoarse", normalImpl: i, signature: (e27) => ({ argTypes: [e27], returnType: e27 }), codegenImpl: (e27) => p$1`dpdxCoarse(${e27})` }), nr = k$1({ name: "dpdxFine", normalImpl: i, signature: (e27) => ({ argTypes: [e27], returnType: e27 }), codegenImpl: (e27) => p$1`dpdxFine(${e27})` }), ur2 = k$1({ name: "dpdy", normalImpl: i, signature: (e27) => ({ argTypes: [e27], returnType: e27 }), codegenImpl: (e27) => p$1`dpdy(${e27})` }), ar = k$1({ name: "dpdyCoarse", normalImpl: i, signature: (e27) => ({ argTypes: [e27], returnType: e27 }), codegenImpl: (e27) => p$1`dpdyCoarse(${e27})` }), sr = k$1({ name: "dpdyFine", normalImpl: i, signature: (e27) => ({ argTypes: [e27], returnType: e27 }), codegenImpl: (e27) => p$1`dpdyFine(${e27})` }), pr2 = k$1({ name: "fwidth", normalImpl: i, signature: (e27) => ({ argTypes: [e27], returnType: e27 }), codegenImpl: (e27) => p$1`fwidth(${e27})` }), mr2 = k$1({ name: "fwidthCoarse", normalImpl: i, signature: (e27) => ({ argTypes: [e27], returnType: e27 }), codegenImpl: (e27) => p$1`fwidthCoarse(${e27})` }), ir = k$1({ name: "fwidthFine", normalImpl: i, signature: (e27) => ({ argTypes: [e27], returnType: e27 }), codegenImpl: (e27) => p$1`fwidthFine(${e27})` });
var Z = (e27) => Ee$2(e27) && In$2(e27.inner) ? e27.inner.elementCount : 0, lr2 = k$1({ name: "arrayLength", signature: (e27) => {
  let t12 = Ee$2(e27) ? e27 : fr$3(e27);
  return { argTypes: [t12], returnType: Z(t12) > 0 ? gt$3 : T$2 };
}, normalImpl: (e27) => ht$2(e27) ? e27.$.length : e27.length, codegenImpl(e27) {
  let t12 = Z(e27.dataType);
  return t12 > 0 ? String(t12) : p$1`arrayLength(${e27})`;
} });
function dr(e27, t12, s2, f2, b2) {
  throw new Error("Texture sampling relies on GPU resources and cannot be executed outside of a draw call");
}
var cr = k$1({ name: "textureSample", normalImpl: dr, codegenImpl: (...e27) => p$1`textureSample(${e27})`, signature: (...e27) => {
  let t12 = e27[0].type.startsWith("texture_depth");
  return { argTypes: e27, returnType: t12 ? x$2 : v$1 };
} });
function xr(e27, t12, s2, f2, b2, v2) {
  throw new Error("Texture sampling with bias relies on GPU resources and cannot be executed outside of a draw call");
}
var fr = k$1({ name: "textureSampleBias", normalImpl: xr, codegenImpl: (...e27) => p$1`textureSampleBias(${e27})`, signature: (...e27) => ({ argTypes: e27, returnType: v$1 }) });
function gr2(e27, t12, s2, f2, b2, v2) {
  throw new Error("Texture sampling relies on GPU resources and cannot be executed outside of a draw call");
}
var Tr = k$1({ name: "textureSampleLevel", normalImpl: gr2, codegenImpl: (...e27) => p$1`textureSampleLevel(${e27})`, signature: (...e27) => {
  let t12 = e27[0].type.startsWith("texture_depth");
  return { argTypes: e27, returnType: t12 ? x$2 : v$1 };
} });
function yr2(e27, t12, s2) {
  throw new Error("`textureLoad` relies on GPU resources and cannot be executed outside of a draw call");
}
var br = k$1({ name: "textureLoad", normalImpl: yr2, codegenImpl: (...e27) => p$1`textureLoad(${e27})`, signature: (...e27) => {
  let t12 = e27[0];
  if (wr$2(t12)) {
    let b2 = t12.type.startsWith("texture_depth"), v2 = t12.sampleType;
    return { argTypes: e27, returnType: b2 ? x$2 : v2.type === "f32" ? v$1 : v2.type === "u32" ? xe$4 : he$1 };
  }
  let s2 = t12.format, f2 = Ke(s2).vectorType;
  return { argTypes: e27, returnType: f2 };
} });
function vr(e27, t12, s2, f2) {
  throw new Error("`textureStore` relies on GPU resources and cannot be executed outside of a draw call");
}
var Ir = k$1({ name: "textureStore", normalImpl: vr, codegenImpl: (...e27) => p$1`textureStore(${e27})`, signature: (...e27) => ({ argTypes: e27, returnType: Sn$2 }) });
function hr(e27, t12) {
  throw new Error("`textureDimensions` relies on GPU resources and cannot be executed outside of a draw call");
}
var Sr = k$1({ name: "textureDimensions", normalImpl: hr, codegenImpl: (...e27) => p$1`textureDimensions(${e27})`, signature: (...e27) => {
  let t12 = e27[0].dimension;
  return t12 === "1d" ? { argTypes: e27, returnType: T$2 } : t12 === "3d" ? { argTypes: e27, returnType: Pe$2 } : { argTypes: e27, returnType: le$3 };
} });
function Cr(e27, t12, s2, f2, b2, v2) {
  throw new Error("Texture comparison sampling relies on GPU resources and cannot be executed outside of a draw call");
}
var Ar = k$1({ name: "textureSampleCompare", normalImpl: Cr, codegenImpl: (...e27) => p$1`textureSampleCompare(${e27})`, signature: (...e27) => ({ argTypes: e27, returnType: x$2 }) });
function $r(e27, t12, s2) {
  throw new Error("Texture sampling with base clamp to edge is not supported outside of GPU mode.");
}
var wr = k$1({ name: "textureSampleBaseClampToEdge", normalImpl: $r, codegenImpl: (...e27) => p$1`textureSampleBaseClampToEdge(${e27})`, signature: (...e27) => ({ argTypes: e27, returnType: v$1 }) });
var n = "Subgroup operations can only be used in the GPU context.", Dr2 = k$1({ name: "subgroupAdd", signature: (e27) => ({ argTypes: [e27], returnType: e27 }), normalImpl: n, codegenImpl: (e27) => p$1`subgroupAdd(${e27})` }), Er = k$1({ name: "subgroupExclusiveAdd", signature: (e27) => ({ argTypes: [e27], returnType: e27 }), normalImpl: n, codegenImpl: (e27) => p$1`subgroupExclusiveAdd(${e27})` }), Lr = k$1({ name: "subgroupInclusiveAdd", signature: (e27) => ({ argTypes: [e27], returnType: e27 }), normalImpl: n, codegenImpl: (e27) => p$1`subgroupInclusiveAdd(${e27})` }), Or = k$1({ name: "subgroupAll", signature: { argTypes: [V$1], returnType: V$1 }, normalImpl: n, codegenImpl: (e27) => p$1`subgroupAll(${e27})` }), Br = k$1({ name: "subgroupAnd", signature: (e27) => ({ argTypes: [e27], returnType: e27 }), normalImpl: n, codegenImpl: (e27) => p$1`subgroupAnd(${e27})` }), Wr2 = k$1({ name: "subgroupAny", signature: { argTypes: [V$1], returnType: V$1 }, normalImpl: n, codegenImpl: (e27) => p$1`subgroupAny(${e27})` }), Fr = k$1({ name: "subgroupBallot", signature: { argTypes: [V$1], returnType: xe$4 }, normalImpl: n, codegenImpl: (e27) => p$1`subgroupBallot(${e27})` }), Vr2 = k$1({ name: "subgroupBroadcast", signature: (...e27) => {
  let t12 = yi$1([e27[1]], [f$1, T$2]);
  if (!t12) throw new Error(`subgroupBroadcast's second argument has to be compatible with i32 or u32. Got: ${e27[1].type}`);
  return { argTypes: [e27[0], t12[0]], returnType: e27[0] };
}, normalImpl: n, codegenImpl: (e27, t12) => p$1`subgroupBroadcast(${e27}, ${t12})` }), _r = k$1({ name: "subgroupBroadcastFirst", signature: (e27) => ({ argTypes: [e27], returnType: e27 }), normalImpl: n, codegenImpl: (e27) => p$1`subgroupBroadcastFirst(${e27})` }), Mr2 = k$1({ name: "subgroupElect", signature: { argTypes: [], returnType: V$1 }, normalImpl: n, codegenImpl: () => p$1`subgroupElect()` }), Nr = k$1({ name: "subgroupMax", signature: (e27) => ({ argTypes: [e27], returnType: e27 }), normalImpl: n, codegenImpl: (e27) => p$1`subgroupMax(${e27})` }), Gr = k$1({ name: "subgroupMin", signature: (e27) => ({ argTypes: [e27], returnType: e27 }), normalImpl: n, codegenImpl: (e27) => p$1`subgroupMin(${e27})` }), Pr = k$1({ name: "subgroupMul", signature: (e27) => ({ argTypes: [e27], returnType: e27 }), normalImpl: n, codegenImpl: (e27) => p$1`subgroupMul(${e27})` }), Ur = k$1({ name: "subgroupExclusiveMul", signature: (e27) => ({ argTypes: [e27], returnType: e27 }), normalImpl: n, codegenImpl: (e27) => p$1`subgroupExclusiveMul(${e27})` }), Xr2 = k$1({ name: "subgroupInclusiveMul", signature: (e27) => ({ argTypes: [e27], returnType: e27 }), normalImpl: n, codegenImpl: (e27) => p$1`subgroupInclusiveMul(${e27})` }), kr2 = k$1({ name: "subgroupOr", signature: (e27) => ({ argTypes: [e27], returnType: e27 }), normalImpl: n, codegenImpl: (e27) => p$1`subgroupOr(${e27})` }), Rr = k$1({ name: "subgroupShuffle", signature: (...e27) => {
  let t12 = yi$1([e27[1]], [f$1, T$2]);
  if (!t12) throw new Error(`subgroupShuffle's second argument has to be compatible with i32 or u32. Got: ${e27[1].type}`);
  return { argTypes: [e27[0], t12[0]], returnType: e27[0] };
}, normalImpl: n, codegenImpl: (e27, t12) => p$1`subgroupShuffle(${e27}, ${t12})` }), Zr = k$1({ name: "subgroupShuffleDown", signature: (...e27) => {
  let t12 = yi$1([e27[1]], [T$2]);
  if (!t12) throw new Error(`subgroupShuffleDown's second argument has to be compatible with u32. Got: ${e27[1].type}`);
  return { argTypes: [e27[0], t12[0]], returnType: e27[0] };
}, normalImpl: n, codegenImpl: (e27, t12) => p$1`subgroupShuffleDown(${e27}, ${t12})` }), Yr2 = k$1({ name: "subgroupShuffleUp", signature: (...e27) => {
  let t12 = yi$1([e27[1]], [T$2]);
  if (!t12) throw new Error(`subgroupShuffleUp's second argument has to be compatible with u32. Got: ${e27[1].type}`);
  return { argTypes: [e27[0], t12[0]], returnType: e27[0] };
}, normalImpl: n, codegenImpl: (e27, t12) => p$1`subgroupShuffleUp(${e27}, ${t12})` }), jr = k$1({ name: "subgroupShuffleXor", signature: (...e27) => {
  let t12 = yi$1([e27[1]], [T$2]);
  if (!t12) throw new Error(`subgroupShuffleXor's second argument has to be compatible with u32. Got: ${e27[1].type}`);
  return { argTypes: [e27[0], t12[0]], returnType: e27[0] };
}, normalImpl: n, codegenImpl: (e27, t12) => p$1`subgroupShuffleXor(${e27}, ${t12})` }), qr = k$1({ name: "subgroupXor", signature: (e27) => ({ argTypes: [e27], returnType: e27 }), normalImpl: n, codegenImpl: (e27) => p$1`subgroupXor(${e27})` });
var zr = Ji((e27) => {
  let t12 = O$3();
  if (!t12) throw new Error("Functions using `extensionEnabled` cannot be called directly. Either generate WGSL from them, or use tgpu['~unstable'].simulate(...)");
  if (typeof e27 != "string" || !dr$2.includes(e27)) throw new Error(`extensionEnabled has to be called with a string literal representing a valid WGSL extension name. Got: '${e27}'`);
  return (t12.enableExtensions ?? []).includes(e27);
});
const std = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  abs: fn$1,
  acos: dn$1,
  acosh: yn$1,
  add: ar$3,
  all: sr$2,
  allEq: jt$1,
  and: ar$2,
  any: ur$2,
  arrayLength: lr2,
  asin: bn$1,
  asinh: gn$1,
  atan: In$1,
  atan2: hn$1,
  atanh: xn$1,
  atomicAdd: zt,
  atomicAnd: Qt,
  atomicLoad: Yt,
  atomicMax: Jt,
  atomicMin: Kt,
  atomicOr: er2,
  atomicStore: qt,
  atomicSub: Ht,
  atomicXor: tr2,
  bitcastU32toF32: Pt$2,
  bitcastU32toI32: Ut$2,
  ceil: An,
  clamp: vn$1,
  cos: Vn,
  cosh: Fn,
  countLeadingZeros: wn$1,
  countOneBits: $n$1,
  countTrailingZeros: Pn,
  cross: Un$1,
  degrees: Bn,
  determinant: Sn$1,
  discard: wt,
  distance: Cn,
  div: or$3,
  dot: ye,
  dot4I8Packed: Mn,
  dot4U8Packed: kn,
  dpdx: rr2,
  dpdxCoarse: or,
  dpdxFine: nr,
  dpdy: ur2,
  dpdyCoarse: ar,
  dpdyFine: sr,
  eq: Yt$1,
  exp: En,
  exp2: Gn,
  extensionEnabled: zr,
  extractBits: Ln,
  faceForward: Nn,
  firstLeadingBit: Rn,
  firstTrailingBit: Dn$1,
  floor: On,
  fma: qn,
  fract: _n,
  frexp: zn,
  fwidth: pr2,
  fwidthCoarse: mr2,
  fwidthFine: ir,
  ge: tr$2,
  gt: nr$2,
  identity2: st$1,
  identity3: nt$1,
  identity4: at$1,
  insertBits: Zn,
  inverseSqrt: Wn,
  isCloseTo: cr$2,
  ldexp: Hn,
  le: er$2,
  length: Fe2,
  log: Qn,
  log2: Kn,
  lt: Xt$1,
  max: jn,
  min: Yn,
  mix: Jn,
  mod: lr$2,
  modf: Xn,
  mul: cr$3,
  ne: Jt$3,
  neg: xr$2,
  normalize: et$1,
  not: rr$2,
  or: or$2,
  pack2x16float: Gt$2,
  pack4x8unorm: Nt$1,
  pow: nt,
  quantizeToF16: tt$1,
  radians: rt$1,
  reflect: ot,
  refract: at,
  reverseBits: st,
  rotateX4: Pt,
  rotateY4: Ut2,
  rotateZ4: Xt,
  rotationX4: lt$1,
  rotationY4: xt$1,
  rotationZ4: mt$1,
  round: ut,
  saturate: ct$1,
  scale4: Gt,
  scaling4: ot$1,
  select: ir$2,
  sign: it,
  sin: pt2,
  sinh: mt,
  smoothstep: lt2,
  sqrt: Tt$1,
  step: ft,
  storageBarrier: Rt,
  sub: ur$3,
  subgroupAdd: Dr2,
  subgroupAll: Or,
  subgroupAnd: Br,
  subgroupAny: Wr2,
  subgroupBallot: Fr,
  subgroupBroadcast: Vr2,
  subgroupBroadcastFirst: _r,
  subgroupElect: Mr2,
  subgroupExclusiveAdd: Er,
  subgroupExclusiveMul: Ur,
  subgroupInclusiveAdd: Lr,
  subgroupInclusiveMul: Xr2,
  subgroupMax: Nr,
  subgroupMin: Gr,
  subgroupMul: Pr,
  subgroupOr: kr2,
  subgroupShuffle: Rr,
  subgroupShuffleDown: Zr,
  subgroupShuffleUp: Yr2,
  subgroupShuffleXor: jr,
  subgroupXor: qr,
  tan: dt$1,
  tanh: yt$1,
  textureBarrier: Zt2,
  textureDimensions: Sr,
  textureLoad: br,
  textureSample: cr,
  textureSampleBaseClampToEdge: wr,
  textureSampleBias: fr,
  textureSampleCompare: Ar,
  textureSampleLevel: Tr,
  textureStore: Ir,
  translate4: Nt,
  translation4: ct$2,
  transpose: bt$1,
  trunc: gt$1,
  unpack2x16float: Et$1,
  unpack4x8unorm: Lt$1,
  workgroupBarrier: kt
}, Symbol.toStringTag, { value: "Module" }));
const sdDisk = (globalThis.__TYPEGPU_AUTONAME__ ?? ((a2) => a2))($d.fn([F$3, x$2], x$2)((($3) => (globalThis.__TYPEGPU_META__ ??= /* @__PURE__ */ new WeakMap()).set($3.f = ((point, radius) => {
  return Fe2(point) - radius;
}), {
  v: 1,
  name: void 0,
  ast: { "params": [{ "type": "i", "name": "point" }, { "type": "i", "name": "radius" }], "body": [0, [[10, [1, [6, "length", ["point"]], "-", "radius"]]]], "externalNames": ["length"] },
  externals: () => ({ length: Fe2 })
}) && $3.f)({})), "sdDisk");
const sdBox2d = (globalThis.__TYPEGPU_AUTONAME__ ?? ((a2) => a2))($d.fn([F$3, F$3], x$2)((($3) => (globalThis.__TYPEGPU_META__ ??= /* @__PURE__ */ new WeakMap()).set($3.f = ((point, size) => {
  const d2 = ur$3(fn$1(point), size);
  return Fe2(jn(d2, F$3(0))) + Yn(jn(d2.x, d2.y), 0);
}), {
  v: 1,
  name: void 0,
  ast: { "params": [{ "type": "i", "name": "point" }, { "type": "i", "name": "size" }], "body": [0, [[13, "d", [6, "sub", [[6, "abs", ["point"]], "size"]]], [10, [1, [6, "length", [[6, "max", ["d", [6, "vec2f", [[5, "0"]]]]]]], "+", [6, "min", [[6, "max", [[7, "d", "x"], [7, "d", "y"]]], [5, "0"]]]]]]], "externalNames": ["sub", "abs", "length", "max", "vec2f", "min"] },
  externals: () => ({ sub: ur$3, abs: fn$1, length: Fe2, max: jn, vec2f: F$3, min: Yn })
}) && $3.f)({})), "sdBox2d");
const sdRoundedBox2d = (globalThis.__TYPEGPU_AUTONAME__ ?? ((a2) => a2))($d.fn([F$3, F$3, x$2], x$2)((($3) => (globalThis.__TYPEGPU_META__ ??= /* @__PURE__ */ new WeakMap()).set($3.f = ((point, size, cornerRadius) => {
  const d2 = ar$3(ur$3(fn$1(point), size), F$3(cornerRadius));
  return Fe2(jn(d2, F$3(0))) + Yn(jn(d2.x, d2.y), 0) - cornerRadius;
}), {
  v: 1,
  name: void 0,
  ast: { "params": [{ "type": "i", "name": "point" }, { "type": "i", "name": "size" }, { "type": "i", "name": "cornerRadius" }], "body": [0, [[13, "d", [6, "add", [[6, "sub", [[6, "abs", ["point"]], "size"]], [6, "vec2f", ["cornerRadius"]]]]], [10, [1, [1, [6, "length", [[6, "max", ["d", [6, "vec2f", [[5, "0"]]]]]]], "+", [6, "min", [[6, "max", [[7, "d", "x"], [7, "d", "y"]]], [5, "0"]]]], "-", "cornerRadius"]]]], "externalNames": ["add", "sub", "abs", "vec2f", "length", "max", "min"] },
  externals: () => ({ add: ar$3, sub: ur$3, abs: fn$1, vec2f: F$3, length: Fe2, max: jn, min: Yn })
}) && $3.f)({})), "sdRoundedBox2d");
const sdLine = (globalThis.__TYPEGPU_AUTONAME__ ?? ((a2) => a2))($d.fn([F$3, F$3, F$3], x$2)((($3) => (globalThis.__TYPEGPU_META__ ??= /* @__PURE__ */ new WeakMap()).set($3.f = ((point, A3, B3) => {
  const pa2 = ur$3(point, A3);
  const ba2 = ur$3(B3, A3);
  const h2 = jn(0, Yn(1, ye(pa2, ba2) / ye(ba2, ba2)));
  return Fe2(ur$3(pa2, ba2.mul(h2)));
}), {
  v: 1,
  name: void 0,
  ast: { "params": [{ "type": "i", "name": "point" }, { "type": "i", "name": "A" }, { "type": "i", "name": "B" }], "body": [0, [[13, "pa", [6, "sub", ["point", "A"]]], [13, "ba", [6, "sub", ["B", "A"]]], [13, "h", [6, "max", [[5, "0"], [6, "min", [[5, "1"], [1, [6, "dot", ["pa", "ba"]], "/", [6, "dot", ["ba", "ba"]]]]]]]], [10, [6, "length", [[6, "sub", ["pa", [6, [7, "ba", "mul"], ["h"]]]]]]]]], "externalNames": ["sub", "max", "min", "dot", "length"] },
  externals: () => ({ sub: ur$3, max: jn, min: Yn, dot: ye, length: Fe2 })
}) && $3.f)({})), "sdLine");
const dot2 = (($3) => (globalThis.__TYPEGPU_META__ ??= /* @__PURE__ */ new WeakMap()).set($3.f = (($4) => (globalThis.__TYPEGPU_META__ ??= /* @__PURE__ */ new WeakMap()).set($4.f = ((v2) => {
  "use gpu";
  return ye(v2, v2);
}), {
  v: 1,
  name: void 0,
  ast: { "params": [{ "type": "i", "name": "v" }], "body": [0, [[10, [6, "dot", ["v", "v"]]]]], "externalNames": ["dot"] },
  externals: () => ({ dot: ye })
}) && $4.f)({}), {
  v: 1,
  name: "dot2",
  ast: { "params": [{ "type": "i", "name": "v" }], "body": [0, [[10, [6, "dot", ["v", "v"]]]]], "externalNames": ["dot"] },
  externals: () => ({ dot: ye })
}) && $3.f)({});
const sdBezier = (globalThis.__TYPEGPU_AUTONAME__ ?? ((a2) => a2))($d.fn([F$3, F$3, F$3, F$3], x$2)(
  (($3) => (globalThis.__TYPEGPU_META__ ??= /* @__PURE__ */ new WeakMap()).set($3.f = ((point, A3, B3, C2) => {
    const a2 = B3.sub(A3);
    const b2 = A3.sub(B3.mul(2)).add(C2);
    const c2 = a2.mul(x$2(2));
    const d2 = A3.sub(point);
    const dotB = jn(ye(b2, b2), 1e-4);
    const kk = 1 / dotB;
    const kx = kk * ye(a2, b2);
    const ky = kk * (x$2(2) * ye(a2, a2) + ye(d2, b2)) / 3;
    const kz = kk * ye(d2, a2);
    let res = x$2(0);
    const p2 = ky - kx * kx;
    const p3 = p2 * p2 * p2;
    const q2 = kx * (2 * kx * kx - 3 * ky) + kz;
    let h2 = q2 * q2 + 4 * p3;
    if (h2 >= 0) {
      h2 = Tt$1(h2);
      const x2 = F$3(h2, -h2).sub(q2).mul(0.5);
      const uv = it(x2).mul(nt(fn$1(x2), F$3(1 / 3)));
      const t12 = vn$1(uv.x + uv.y - kx, 0, 1);
      res = dot2(d2.add(c2.add(b2.mul(t12)).mul(t12)));
    } else {
      const z2 = Tt$1(-p2);
      const v2 = dn$1(q2 / (p2 * z2 * 2)) / 3;
      const m2 = Vn(v2);
      const n2 = cr$3(pt2(v2), 1.732050808);
      const t12 = ct$1(
        ke$2(m2 + m2, -n2 - m2, n2 - m2).mul(z2).sub(kx)
      );
      res = Yn(
        dot2(d2.add(c2.add(b2.mul(t12.x)).mul(t12.x))),
        dot2(d2.add(c2.add(b2.mul(t12.y)).mul(t12.y)))
      );
    }
    return Tt$1(res);
  }), {
    v: 1,
    name: void 0,
    ast: { "params": [{ "type": "i", "name": "point" }, { "type": "i", "name": "A" }, { "type": "i", "name": "B" }, { "type": "i", "name": "C" }], "body": [0, [[13, "a", [6, [7, "B", "sub"], ["A"]]], [13, "b", [6, [7, [6, [7, "A", "sub"], [[6, [7, "B", "mul"], [[5, "2"]]]]], "add"], ["C"]]], [13, "c", [6, [7, "a", "mul"], [[6, "f32", [[5, "2"]]]]]], [13, "d", [6, [7, "A", "sub"], ["point"]]], [13, "dotB", [6, "max", [[6, "dot", ["b", "b"]], [5, "0.0001"]]]], [13, "kk", [1, [5, "1"], "/", "dotB"]], [13, "kx", [1, "kk", "*", [6, "dot", ["a", "b"]]]], [13, "ky", [1, [1, "kk", "*", [1, [1, [6, "f32", [[5, "2"]]], "*", [6, "dot", ["a", "a"]]], "+", [6, "dot", ["d", "b"]]]], "/", [5, "3"]]], [13, "kz", [1, "kk", "*", [6, "dot", ["d", "a"]]]], [12, "res", [6, "f32", [[5, "0"]]]], [13, "p", [1, "ky", "-", [1, "kx", "*", "kx"]]], [13, "p3", [1, [1, "p", "*", "p"], "*", "p"]], [13, "q", [1, [1, "kx", "*", [1, [1, [1, [5, "2"], "*", "kx"], "*", "kx"], "-", [1, [5, "3"], "*", "ky"]]], "+", "kz"]], [12, "h", [1, [1, "q", "*", "q"], "+", [1, [5, "4"], "*", "p3"]]], [11, [1, "h", ">=", [5, "0"]], [0, [[2, "h", "=", [6, "sqrt", ["h"]]], [13, "x", [6, [7, [6, [7, [6, "vec2f", ["h", [4, "-", "h"]]], "sub"], ["q"]], "mul"], [[5, "0.5"]]]], [13, "uv", [6, [7, [6, "sign", ["x"]], "mul"], [[6, "pow", [[6, "abs", ["x"]], [6, "vec2f", [[1, [5, "1"], "/", [5, "3"]]]]]]]]], [13, "t", [6, "clamp", [[1, [1, [7, "uv", "x"], "+", [7, "uv", "y"]], "-", "kx"], [5, "0"], [5, "1"]]]], [2, "res", "=", [6, "dot2", [[6, [7, "d", "add"], [[6, [7, [6, [7, "c", "add"], [[6, [7, "b", "mul"], ["t"]]]], "mul"], ["t"]]]]]]]]], [0, [[13, "z", [6, "sqrt", [[4, "-", "p"]]]], [13, "v", [1, [6, "acos", [[1, "q", "/", [1, [1, "p", "*", "z"], "*", [5, "2"]]]]], "/", [5, "3"]]], [13, "m", [6, "cos", ["v"]]], [13, "n", [6, "mul", [[6, "sin", ["v"]], [5, "1.732050808"]]]], [13, "t", [6, "saturate", [[6, [7, [6, [7, [6, "vec3f", [[1, "m", "+", "m"], [1, [4, "-", "n"], "-", "m"], [1, "n", "-", "m"]]], "mul"], ["z"]], "sub"], ["kx"]]]]], [2, "res", "=", [6, "min", [[6, "dot2", [[6, [7, "d", "add"], [[6, [7, [6, [7, "c", "add"], [[6, [7, "b", "mul"], [[7, "t", "x"]]]]], "mul"], [[7, "t", "x"]]]]]]], [6, "dot2", [[6, [7, "d", "add"], [[6, [7, [6, [7, "c", "add"], [[6, [7, "b", "mul"], [[7, "t", "y"]]]]], "mul"], [[7, "t", "y"]]]]]]]]]]]]], [10, [6, "sqrt", ["res"]]]]], "externalNames": ["f32", "max", "dot", "sqrt", "vec2f", "sign", "pow", "abs", "clamp", "dot2", "acos", "cos", "mul", "sin", "saturate", "vec3f", "min"] },
    externals: () => ({ f32: x$2, max: jn, dot: ye, sqrt: Tt$1, vec2f: F$3, sign: it, pow: nt, abs: fn$1, clamp: vn$1, dot2, acos: dn$1, cos: Vn, mul: cr$3, sin: pt2, saturate: ct$1, vec3f: ke$2, min: Yn })
  }) && $3.f)({})
), "sdBezier");
const cross = (($3) => (globalThis.__TYPEGPU_META__ ??= /* @__PURE__ */ new WeakMap()).set($3.f = (($4) => (globalThis.__TYPEGPU_META__ ??= /* @__PURE__ */ new WeakMap()).set($4.f = ((a2, b2) => {
  "use gpu";
  return a2.x * b2.y - a2.y * b2.x;
}), {
  v: 1,
  name: void 0,
  ast: { "params": [{ "type": "i", "name": "a" }, { "type": "i", "name": "b" }], "body": [0, [[10, [1, [1, [7, "a", "x"], "*", [7, "b", "y"]], "-", [1, [7, "a", "y"], "*", [7, "b", "x"]]]]]], "externalNames": [] },
  externals: () => ({})
}) && $4.f)({}), {
  v: 1,
  name: "cross",
  ast: { "params": [{ "type": "i", "name": "a" }, { "type": "i", "name": "b" }], "body": [0, [[10, [1, [1, [7, "a", "x"], "*", [7, "b", "y"]], "-", [1, [7, "a", "y"], "*", [7, "b", "x"]]]]]], "externalNames": [] },
  externals: () => ({})
}) && $3.f)({});
const sdBezierApprox = (globalThis.__TYPEGPU_AUTONAME__ ?? ((a2) => a2))($d.fn(
  [F$3, F$3, F$3, F$3],
  x$2
)((($3) => (globalThis.__TYPEGPU_META__ ??= /* @__PURE__ */ new WeakMap()).set($3.f = ((point, A3, B3, C2) => {
  const i2 = A3.sub(C2);
  const j2 = C2.sub(B3);
  const k2 = B3.sub(A3);
  const w2 = j2.sub(k2);
  const v0 = A3.sub(point);
  const v1 = B3.sub(point);
  const v2 = C2.sub(point);
  const x2 = cross(v0, v2);
  const y2 = cross(v1, v0);
  const z2 = cross(v2, v1);
  const s2 = j2.mul(y2).add(k2.mul(z2)).mul(2).sub(i2.mul(x2));
  const r = (y2 * z2 - x2 * x2 * 0.25) / dot2(s2);
  const t12 = ct$1((0.5 * x2 + y2 + r * ye(s2, w2)) / (x2 + y2 + z2));
  const d2 = v0.add(k2.add(k2).add(w2.mul(t12)).mul(t12));
  return Fe2(d2);
}), {
  v: 1,
  name: void 0,
  ast: { "params": [{ "type": "i", "name": "point" }, { "type": "i", "name": "A" }, { "type": "i", "name": "B" }, { "type": "i", "name": "C" }], "body": [0, [[13, "i", [6, [7, "A", "sub"], ["C"]]], [13, "j", [6, [7, "C", "sub"], ["B"]]], [13, "k", [6, [7, "B", "sub"], ["A"]]], [13, "w", [6, [7, "j", "sub"], ["k"]]], [13, "v0", [6, [7, "A", "sub"], ["point"]]], [13, "v1", [6, [7, "B", "sub"], ["point"]]], [13, "v2", [6, [7, "C", "sub"], ["point"]]], [13, "x", [6, "cross", ["v0", "v2"]]], [13, "y", [6, "cross", ["v1", "v0"]]], [13, "z", [6, "cross", ["v2", "v1"]]], [13, "s", [6, [7, [6, [7, [6, [7, [6, [7, "j", "mul"], ["y"]], "add"], [[6, [7, "k", "mul"], ["z"]]]], "mul"], [[5, "2"]]], "sub"], [[6, [7, "i", "mul"], ["x"]]]]], [13, "r", [1, [1, [1, "y", "*", "z"], "-", [1, [1, "x", "*", "x"], "*", [5, "0.25"]]], "/", [6, "dot2", ["s"]]]], [13, "t", [6, "saturate", [[1, [1, [1, [1, [5, "0.5"], "*", "x"], "+", "y"], "+", [1, "r", "*", [6, "dot", ["s", "w"]]]], "/", [1, [1, "x", "+", "y"], "+", "z"]]]]], [13, "d", [6, [7, "v0", "add"], [[6, [7, [6, [7, [6, [7, "k", "add"], ["k"]], "add"], [[6, [7, "w", "mul"], ["t"]]]], "mul"], ["t"]]]]], [10, [6, "length", ["d"]]]]], "externalNames": ["cross", "dot2", "saturate", "dot", "length"] },
  externals: () => ({ cross, dot2, saturate: ct$1, dot: ye, length: Fe2 })
}) && $3.f)({})), "sdBezierApprox");
const sdPie = (globalThis.__TYPEGPU_AUTONAME__ ?? ((a2) => a2))($d.fn([F$3, F$3, x$2], x$2)((($3) => (globalThis.__TYPEGPU_META__ ??= /* @__PURE__ */ new WeakMap()).set($3.f = ((point, sc, radius) => {
  const p_w = F$3(point);
  p_w.x = fn$1(point.x);
  const l2 = Fe2(p_w) - radius;
  const m2 = Fe2(p_w.sub(sc.mul(vn$1(ye(p_w, sc), 0, radius))));
  return jn(l2, m2 * it(sc.y * p_w.x - sc.x * p_w.y));
}), {
  v: 1,
  name: void 0,
  ast: { "params": [{ "type": "i", "name": "point" }, { "type": "i", "name": "sc" }, { "type": "i", "name": "radius" }], "body": [0, [[13, "p_w", [6, "vec2f", ["point"]]], [2, [7, "p_w", "x"], "=", [6, "abs", [[7, "point", "x"]]]], [13, "l", [1, [6, "length", ["p_w"]], "-", "radius"]], [13, "m", [6, "length", [[6, [7, "p_w", "sub"], [[6, [7, "sc", "mul"], [[6, "clamp", [[6, "dot", ["p_w", "sc"]], [5, "0"], "radius"]]]]]]]]], [10, [6, "max", ["l", [1, "m", "*", [6, "sign", [[1, [1, [7, "sc", "y"], "*", [7, "p_w", "x"]], "-", [1, [7, "sc", "x"], "*", [7, "p_w", "y"]]]]]]]]]]], "externalNames": ["vec2f", "abs", "length", "clamp", "dot", "max", "sign"] },
  externals: () => ({ vec2f: F$3, abs: fn$1, length: Fe2, clamp: vn$1, dot: ye, max: jn, sign: it })
}) && $3.f)({})), "sdPie");
const sdSphere = (globalThis.__TYPEGPU_AUTONAME__ ?? ((a2) => a2))($d.fn([ke$2, x$2], x$2)((($3) => (globalThis.__TYPEGPU_META__ ??= /* @__PURE__ */ new WeakMap()).set($3.f = ((point, radius) => {
  return Fe2(point) - radius;
}), {
  v: 1,
  name: void 0,
  ast: { "params": [{ "type": "i", "name": "point" }, { "type": "i", "name": "radius" }], "body": [0, [[10, [1, [6, "length", ["point"]], "-", "radius"]]]], "externalNames": ["length"] },
  externals: () => ({ length: Fe2 })
}) && $3.f)({})), "sdSphere");
const sdBox3d = (globalThis.__TYPEGPU_AUTONAME__ ?? ((a2) => a2))($d.fn([ke$2, ke$2], x$2)((($3) => (globalThis.__TYPEGPU_META__ ??= /* @__PURE__ */ new WeakMap()).set($3.f = ((point, size) => {
  const d2 = ur$3(fn$1(point), size);
  return Fe2(jn(d2, ke$2(0))) + Yn(jn(jn(d2.x, d2.y), d2.z), 0);
}), {
  v: 1,
  name: void 0,
  ast: { "params": [{ "type": "i", "name": "point" }, { "type": "i", "name": "size" }], "body": [0, [[13, "d", [6, "sub", [[6, "abs", ["point"]], "size"]]], [10, [1, [6, "length", [[6, "max", ["d", [6, "vec3f", [[5, "0"]]]]]]], "+", [6, "min", [[6, "max", [[6, "max", [[7, "d", "x"], [7, "d", "y"]]], [7, "d", "z"]]], [5, "0"]]]]]]], "externalNames": ["sub", "abs", "length", "max", "vec3f", "min"] },
  externals: () => ({ sub: ur$3, abs: fn$1, length: Fe2, max: jn, vec3f: ke$2, min: Yn })
}) && $3.f)({})), "sdBox3d");
const sdRoundedBox3d = (globalThis.__TYPEGPU_AUTONAME__ ?? ((a2) => a2))($d.fn([ke$2, ke$2, x$2], x$2)((($3) => (globalThis.__TYPEGPU_META__ ??= /* @__PURE__ */ new WeakMap()).set($3.f = ((point, size, cornerRadius) => {
  const d2 = ar$3(ur$3(fn$1(point), size), ke$2(cornerRadius));
  return Fe2(jn(d2, ke$2(0))) + Yn(jn(jn(d2.x, d2.y), d2.z), 0) - cornerRadius;
}), {
  v: 1,
  name: void 0,
  ast: { "params": [{ "type": "i", "name": "point" }, { "type": "i", "name": "size" }, { "type": "i", "name": "cornerRadius" }], "body": [0, [[13, "d", [6, "add", [[6, "sub", [[6, "abs", ["point"]], "size"]], [6, "vec3f", ["cornerRadius"]]]]], [10, [1, [1, [6, "length", [[6, "max", ["d", [6, "vec3f", [[5, "0"]]]]]]], "+", [6, "min", [[6, "max", [[6, "max", [[7, "d", "x"], [7, "d", "y"]]], [7, "d", "z"]]], [5, "0"]]]], "-", "cornerRadius"]]]], "externalNames": ["add", "sub", "abs", "vec3f", "length", "max", "min"] },
  externals: () => ({ add: ar$3, sub: ur$3, abs: fn$1, vec3f: ke$2, length: Fe2, max: jn, min: Yn })
}) && $3.f)({})), "sdRoundedBox3d");
const sdBoxFrame3d = (globalThis.__TYPEGPU_AUTONAME__ ?? ((a2) => a2))($d.fn([ke$2, ke$2, x$2], x$2)((($3) => (globalThis.__TYPEGPU_META__ ??= /* @__PURE__ */ new WeakMap()).set($3.f = ((point, size, thickness) => {
  const p1 = ur$3(fn$1(point), size);
  const q2 = ur$3(fn$1(ar$3(p1, thickness)), ke$2(thickness));
  const d1 = Fe2(jn(ke$2(p1.x, q2.y, q2.z), ke$2(0))) + Yn(jn(p1.x, jn(q2.y, q2.z)), 0);
  const d2 = Fe2(jn(ke$2(q2.x, p1.y, q2.z), ke$2(0))) + Yn(jn(q2.x, jn(p1.y, q2.z)), 0);
  const d3 = Fe2(jn(ke$2(q2.x, q2.y, p1.z), ke$2(0))) + Yn(jn(q2.x, jn(q2.y, p1.z)), 0);
  return Yn(Yn(d1, d2), d3);
}), {
  v: 1,
  name: void 0,
  ast: { "params": [{ "type": "i", "name": "point" }, { "type": "i", "name": "size" }, { "type": "i", "name": "thickness" }], "body": [0, [[13, "p1", [6, "sub", [[6, "abs", ["point"]], "size"]]], [13, "q", [6, "sub", [[6, "abs", [[6, "add", ["p1", "thickness"]]]], [6, "vec3f", ["thickness"]]]]], [13, "d1", [1, [6, "length", [[6, "max", [[6, "vec3f", [[7, "p1", "x"], [7, "q", "y"], [7, "q", "z"]]], [6, "vec3f", [[5, "0"]]]]]]], "+", [6, "min", [[6, "max", [[7, "p1", "x"], [6, "max", [[7, "q", "y"], [7, "q", "z"]]]]], [5, "0"]]]]], [13, "d2", [1, [6, "length", [[6, "max", [[6, "vec3f", [[7, "q", "x"], [7, "p1", "y"], [7, "q", "z"]]], [6, "vec3f", [[5, "0"]]]]]]], "+", [6, "min", [[6, "max", [[7, "q", "x"], [6, "max", [[7, "p1", "y"], [7, "q", "z"]]]]], [5, "0"]]]]], [13, "d3", [1, [6, "length", [[6, "max", [[6, "vec3f", [[7, "q", "x"], [7, "q", "y"], [7, "p1", "z"]]], [6, "vec3f", [[5, "0"]]]]]]], "+", [6, "min", [[6, "max", [[7, "q", "x"], [6, "max", [[7, "q", "y"], [7, "p1", "z"]]]]], [5, "0"]]]]], [10, [6, "min", [[6, "min", ["d1", "d2"]], "d3"]]]]], "externalNames": ["sub", "abs", "add", "vec3f", "length", "max", "min"] },
  externals: () => ({ sub: ur$3, abs: fn$1, add: ar$3, vec3f: ke$2, length: Fe2, max: jn, min: Yn })
}) && $3.f)({})), "sdBoxFrame3d");
const sdLine3d = (globalThis.__TYPEGPU_AUTONAME__ ?? ((a2) => a2))($d.fn([ke$2, ke$2, ke$2], x$2)((($3) => (globalThis.__TYPEGPU_META__ ??= /* @__PURE__ */ new WeakMap()).set($3.f = ((point, A3, B3) => {
  const pa2 = ur$3(point, A3);
  const ba2 = ur$3(B3, A3);
  const h2 = jn(0, Yn(1, ye(pa2, ba2) / ye(ba2, ba2)));
  return Fe2(ur$3(pa2, ba2.mul(h2)));
}), {
  v: 1,
  name: void 0,
  ast: { "params": [{ "type": "i", "name": "point" }, { "type": "i", "name": "A" }, { "type": "i", "name": "B" }], "body": [0, [[13, "pa", [6, "sub", ["point", "A"]]], [13, "ba", [6, "sub", ["B", "A"]]], [13, "h", [6, "max", [[5, "0"], [6, "min", [[5, "1"], [1, [6, "dot", ["pa", "ba"]], "/", [6, "dot", ["ba", "ba"]]]]]]]], [10, [6, "length", [[6, "sub", ["pa", [6, [7, "ba", "mul"], ["h"]]]]]]]]], "externalNames": ["sub", "max", "min", "dot", "length"] },
  externals: () => ({ sub: ur$3, max: jn, min: Yn, dot: ye, length: Fe2 })
}) && $3.f)({})), "sdLine3d");
const sdPlane = (globalThis.__TYPEGPU_AUTONAME__ ?? ((a2) => a2))($d.fn([ke$2, ke$2, x$2], x$2)(
  (($3) => (globalThis.__TYPEGPU_META__ ??= /* @__PURE__ */ new WeakMap()).set($3.f = ((point, normal, height2) => {
    return ye(point, normal) + height2;
  }), {
    v: 1,
    name: void 0,
    ast: { "params": [{ "type": "i", "name": "point" }, { "type": "i", "name": "normal" }, { "type": "i", "name": "height" }], "body": [0, [[10, [1, [6, "dot", ["point", "normal"]], "+", "height"]]]], "externalNames": ["dot"] },
    externals: () => ({ dot: ye })
  }) && $3.f)({})
), "sdPlane");
const sdCapsule = (globalThis.__TYPEGPU_AUTONAME__ ?? ((a2) => a2))($d.fn([ke$2, ke$2, ke$2, x$2], x$2)((($3) => (globalThis.__TYPEGPU_META__ ??= /* @__PURE__ */ new WeakMap()).set($3.f = ((point, A3, B3, radius) => {
  const pa2 = ur$3(point, A3);
  const ba2 = ur$3(B3, A3);
  const h2 = ct$1(ye(pa2, ba2) / ye(ba2, ba2));
  return Fe2(ur$3(pa2, ba2.mul(h2))) - radius;
}), {
  v: 1,
  name: void 0,
  ast: { "params": [{ "type": "i", "name": "point" }, { "type": "i", "name": "A" }, { "type": "i", "name": "B" }, { "type": "i", "name": "radius" }], "body": [0, [[13, "pa", [6, "sub", ["point", "A"]]], [13, "ba", [6, "sub", ["B", "A"]]], [13, "h", [6, "saturate", [[1, [6, "dot", ["pa", "ba"]], "/", [6, "dot", ["ba", "ba"]]]]]], [10, [1, [6, "length", [[6, "sub", ["pa", [6, [7, "ba", "mul"], ["h"]]]]]], "-", "radius"]]]], "externalNames": ["sub", "saturate", "dot", "length"] },
  externals: () => ({ sub: ur$3, saturate: ct$1, dot: ye, length: Fe2 })
}) && $3.f)({})), "sdCapsule");
const opUnion = (globalThis.__TYPEGPU_AUTONAME__ ?? ((a2) => a2))($d.fn([x$2, x$2], x$2)((($3) => (globalThis.__TYPEGPU_META__ ??= /* @__PURE__ */ new WeakMap()).set($3.f = ((d1, d2) => Yn(d1, d2)), {
  v: 1,
  name: void 0,
  ast: { "params": [{ "type": "i", "name": "d1" }, { "type": "i", "name": "d2" }], "body": [0, [[10, [6, [7, "std", "min"], ["d1", "d2"]]]]], "externalNames": ["std"] },
  externals: () => ({ std })
}) && $3.f)({})), "opUnion");
const opSmoothUnion = (globalThis.__TYPEGPU_AUTONAME__ ?? ((a2) => a2))($d.fn([x$2, x$2, x$2], x$2)((($3) => (globalThis.__TYPEGPU_META__ ??= /* @__PURE__ */ new WeakMap()).set($3.f = ((d1, d2, k2) => {
  const h2 = jn(k2 - fn$1(d1 - d2), 0) / k2;
  return Yn(d1, d2) - h2 * h2 * k2 * (1 / 4);
}), {
  v: 1,
  name: void 0,
  ast: { "params": [{ "type": "i", "name": "d1" }, { "type": "i", "name": "d2" }, { "type": "i", "name": "k" }], "body": [0, [[13, "h", [1, [6, [7, "std", "max"], [[1, "k", "-", [6, [7, "std", "abs"], [[1, "d1", "-", "d2"]]]], [5, "0"]]], "/", "k"]], [10, [1, [6, [7, "std", "min"], ["d1", "d2"]], "-", [1, [1, [1, "h", "*", "h"], "*", "k"], "*", [1, [5, "1"], "/", [5, "4"]]]]]]], "externalNames": ["std"] },
  externals: () => ({ std })
}) && $3.f)({})), "opSmoothUnion");
const opSmoothDifference = (globalThis.__TYPEGPU_AUTONAME__ ?? ((a2) => a2))($d.fn([x$2, x$2, x$2], x$2)((($3) => (globalThis.__TYPEGPU_META__ ??= /* @__PURE__ */ new WeakMap()).set($3.f = ((d1, d2, k2) => {
  const h2 = jn(k2 - fn$1(d1 + d2), 0) / k2;
  return jn(-d2, d1) + h2 * h2 * k2 * (1 / 4);
}), {
  v: 1,
  name: void 0,
  ast: { "params": [{ "type": "i", "name": "d1" }, { "type": "i", "name": "d2" }, { "type": "i", "name": "k" }], "body": [0, [[13, "h", [1, [6, [7, "std", "max"], [[1, "k", "-", [6, [7, "std", "abs"], [[1, "d1", "+", "d2"]]]], [5, "0"]]], "/", "k"]], [10, [1, [6, [7, "std", "max"], [[4, "-", "d2"], "d1"]], "+", [1, [1, [1, "h", "*", "h"], "*", "k"], "*", [1, [5, "1"], "/", [5, "4"]]]]]]], "externalNames": ["std"] },
  externals: () => ({ std })
}) && $3.f)({})), "opSmoothDifference");
const opExtrudeZ = (globalThis.__TYPEGPU_AUTONAME__ ?? ((a2) => a2))($d.fn([ke$2, x$2, x$2], x$2)(
  (($3) => (globalThis.__TYPEGPU_META__ ??= /* @__PURE__ */ new WeakMap()).set($3.f = ((point, dd, halfHeight) => {
    const w2 = F$3(dd, fn$1(point.z) - halfHeight);
    return Yn(jn(w2.x, w2.y), 0) + Fe2(jn(w2, F$3()));
  }), {
    v: 1,
    name: void 0,
    ast: { "params": [{ "type": "i", "name": "point" }, { "type": "i", "name": "dd" }, { "type": "i", "name": "halfHeight" }], "body": [0, [[13, "w", [6, [7, "d", "vec2f"], ["dd", [1, [6, [7, "std", "abs"], [[7, "point", "z"]]], "-", "halfHeight"]]]], [10, [1, [6, [7, "std", "min"], [[6, [7, "std", "max"], [[7, "w", "x"], [7, "w", "y"]]], [5, "0"]]], "+", [6, [7, "std", "length"], [[6, [7, "std", "max"], ["w", [6, [7, "d", "vec2f"], []]]]]]]]]], "externalNames": ["d", "std"] },
    externals: () => ({ d, std })
  }) && $3.f)({})
), "opExtrudeZ");
const opExtrudeX = (globalThis.__TYPEGPU_AUTONAME__ ?? ((a2) => a2))($d.fn([ke$2, x$2, x$2], x$2)(
  (($3) => (globalThis.__TYPEGPU_META__ ??= /* @__PURE__ */ new WeakMap()).set($3.f = ((point, dd, halfHeight) => {
    const w2 = F$3(dd, fn$1(point.x) - halfHeight);
    return Yn(jn(w2.x, w2.y), 0) + Fe2(jn(w2, F$3()));
  }), {
    v: 1,
    name: void 0,
    ast: { "params": [{ "type": "i", "name": "point" }, { "type": "i", "name": "dd" }, { "type": "i", "name": "halfHeight" }], "body": [0, [[13, "w", [6, [7, "d", "vec2f"], ["dd", [1, [6, [7, "std", "abs"], [[7, "point", "x"]]], "-", "halfHeight"]]]], [10, [1, [6, [7, "std", "min"], [[6, [7, "std", "max"], [[7, "w", "x"], [7, "w", "y"]]], [5, "0"]]], "+", [6, [7, "std", "length"], [[6, [7, "std", "max"], ["w", [6, [7, "d", "vec2f"], []]]]]]]]]], "externalNames": ["d", "std"] },
    externals: () => ({ d, std })
  }) && $3.f)({})
), "opExtrudeX");
const opExtrudeY = (globalThis.__TYPEGPU_AUTONAME__ ?? ((a2) => a2))($d.fn([ke$2, x$2, x$2], x$2)(
  (($3) => (globalThis.__TYPEGPU_META__ ??= /* @__PURE__ */ new WeakMap()).set($3.f = ((point, dd, halfHeight) => {
    const w2 = F$3(dd, fn$1(point.y) - halfHeight);
    return Yn(jn(w2.x, w2.y), 0) + Fe2(jn(w2, F$3()));
  }), {
    v: 1,
    name: void 0,
    ast: { "params": [{ "type": "i", "name": "point" }, { "type": "i", "name": "dd" }, { "type": "i", "name": "halfHeight" }], "body": [0, [[13, "w", [6, [7, "d", "vec2f"], ["dd", [1, [6, [7, "std", "abs"], [[7, "point", "y"]]], "-", "halfHeight"]]]], [10, [1, [6, [7, "std", "min"], [[6, [7, "std", "max"], [[7, "w", "x"], [7, "w", "y"]]], [5, "0"]]], "+", [6, [7, "std", "length"], [[6, [7, "std", "max"], ["w", [6, [7, "d", "vec2f"], []]]]]]]]]], "externalNames": ["d", "std"] },
    externals: () => ({ d, std })
  }) && $3.f)({})
), "opExtrudeY");
const sdf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  opExtrudeX,
  opExtrudeY,
  opExtrudeZ,
  opSmoothDifference,
  opSmoothUnion,
  opUnion,
  sdBezier,
  sdBezierApprox,
  sdBox2d,
  sdBox3d,
  sdBoxFrame3d,
  sdCapsule,
  sdDisk,
  sdLine,
  sdLine3d,
  sdPie,
  sdPlane,
  sdRoundedBox2d,
  sdRoundedBox3d,
  sdSphere
}, Symbol.toStringTag, { value: "Module" }));
var o = qe$1({ in: { vertexIndex: ze$2.vertexIndex }, out: { pos: ze$2.position, uv: F$3 } })`{
  const pos = array<vec2f, 3>(vec2f(-1, -1), vec2f(3, -1), vec2f(-1, 3));
  const uv = array<vec2f, 3>(vec2f(0, 1), vec2f(2, 1), vec2f(0, -1));

  return Out(vec4f(pos[in.vertexIndex], 0, 1), uv[in.vertexIndex]);
}`;
const randomGeneratorShell = (globalThis.__TYPEGPU_AUTONAME__ ?? ((a2) => a2))($d.fn([], x$2), "randomGeneratorShell");
const BPETER = (() => {
  const seed = (globalThis.__TYPEGPU_AUTONAME__ ?? ((a2) => a2))($d.privateVar(F$3), "seed");
  return {
    seed: (globalThis.__TYPEGPU_AUTONAME__ ?? ((a2) => a2))($d.fn([x$2])((($3) => (globalThis.__TYPEGPU_META__ ??= /* @__PURE__ */ new WeakMap()).set($3.f = ((value) => {
      seed.value = F$3(value, 0);
    }), {
      v: 1,
      name: void 0,
      ast: { "params": [{ "type": "i", "name": "value" }], "body": [0, [[2, [7, "seed", "value"], "=", [6, [7, "d", "vec2f"], ["value", [5, "0"]]]]]], "externalNames": ["seed", "d"] },
      externals: () => ({ seed, d })
    }) && $3.f)({})), "seed"),
    seed2: (globalThis.__TYPEGPU_AUTONAME__ ?? ((a2) => a2))($d.fn([F$3])((($3) => (globalThis.__TYPEGPU_META__ ??= /* @__PURE__ */ new WeakMap()).set($3.f = ((value) => {
      seed.value = F$3(value);
    }), {
      v: 1,
      name: void 0,
      ast: { "params": [{ "type": "i", "name": "value" }], "body": [0, [[2, [7, "seed", "value"], "=", [6, [7, "d", "vec2f"], ["value"]]]]], "externalNames": ["seed", "d"] },
      externals: () => ({ seed, d })
    }) && $3.f)({})), "seed2"),
    seed3: (globalThis.__TYPEGPU_AUTONAME__ ?? ((a2) => a2))($d.fn([ke$2])((($3) => (globalThis.__TYPEGPU_META__ ??= /* @__PURE__ */ new WeakMap()).set($3.f = ((value) => {
      seed.value = ar$3(value.xy, F$3(value.z));
    }), {
      v: 1,
      name: void 0,
      ast: { "params": [{ "type": "i", "name": "value" }], "body": [0, [[2, [7, "seed", "value"], "=", [6, "add", [[7, "value", "xy"], [6, [7, "d", "vec2f"], [[7, "value", "z"]]]]]]]], "externalNames": ["seed", "add", "d"] },
      externals: () => ({ seed, add: ar$3, d })
    }) && $3.f)({})), "seed3"),
    seed4: (globalThis.__TYPEGPU_AUTONAME__ ?? ((a2) => a2))($d.fn([v$1])((($3) => (globalThis.__TYPEGPU_META__ ??= /* @__PURE__ */ new WeakMap()).set($3.f = ((value) => {
      seed.value = ar$3(value.xy, value.zw);
    }), {
      v: 1,
      name: void 0,
      ast: { "params": [{ "type": "i", "name": "value" }], "body": [0, [[2, [7, "seed", "value"], "=", [6, "add", [[7, "value", "xy"], [7, "value", "zw"]]]]]], "externalNames": ["seed", "add"] },
      externals: () => ({ seed, add: ar$3 })
    }) && $3.f)({})), "seed4"),
    sample: randomGeneratorShell((($3) => (globalThis.__TYPEGPU_META__ ??= /* @__PURE__ */ new WeakMap()).set($3.f = (($4) => (globalThis.__TYPEGPU_META__ ??= /* @__PURE__ */ new WeakMap()).set($4.f = (() => {
      "use gpu";
      const a2 = ye(seed.value, F$3(23.14077926, 232.61690225));
      const b2 = ye(seed.value, F$3(54.47856553, 345.84153136));
      seed.value.x = _n(Vn(a2) * 136.8168);
      seed.value.y = _n(Vn(b2) * 534.7645);
      return seed.value.y;
    }), {
      v: 1,
      name: void 0,
      ast: { "params": [], "body": [0, [[13, "a", [6, "dot", [[7, "seed", "value"], [6, [7, "d", "vec2f"], [[5, "23.14077926"], [5, "232.61690225"]]]]]], [13, "b", [6, "dot", [[7, "seed", "value"], [6, [7, "d", "vec2f"], [[5, "54.47856553"], [5, "345.84153136"]]]]]], [2, [7, [7, "seed", "value"], "x"], "=", [6, "fract", [[1, [6, "cos", ["a"]], "*", [5, "136.8168"]]]]], [2, [7, [7, "seed", "value"], "y"], "=", [6, "fract", [[1, [6, "cos", ["b"]], "*", [5, "534.7645"]]]]], [10, [7, [7, "seed", "value"], "y"]]]], "externalNames": ["dot", "seed", "d", "fract", "cos"] },
      externals: () => ({ dot: ye, seed, d, fract: _n, cos: Vn })
    }) && $4.f)({}), {
      v: 1,
      name: void 0,
      ast: { "params": [], "body": [0, [[13, "a", [6, "dot", [[7, "seed", "value"], [6, [7, "d", "vec2f"], [[5, "23.14077926"], [5, "232.61690225"]]]]]], [13, "b", [6, "dot", [[7, "seed", "value"], [6, [7, "d", "vec2f"], [[5, "54.47856553"], [5, "345.84153136"]]]]]], [2, [7, [7, "seed", "value"], "x"], "=", [6, "fract", [[1, [6, "cos", ["a"]], "*", [5, "136.8168"]]]]], [2, [7, [7, "seed", "value"], "y"], "=", [6, "fract", [[1, [6, "cos", ["b"]], "*", [5, "534.7645"]]]]], [10, [7, [7, "seed", "value"], "y"]]]], "externalNames": ["dot", "seed", "d", "fract", "cos"] },
      externals: () => ({ dot: ye, seed, d, fract: _n, cos: Vn })
    }) && $3.f)({}))
  };
})();
const DefaultGenerator = BPETER;
const randomGeneratorSlot = (globalThis.__TYPEGPU_AUTONAME__ ?? ((a2) => a2))($d.slot(
  DefaultGenerator
), "randomGeneratorSlot");
const TWO_PI = Math.PI * 2;
const EPS = 1e-7;
const randSeed = (globalThis.__TYPEGPU_AUTONAME__ ?? ((a2) => a2))($d.fn([x$2])((($3) => (globalThis.__TYPEGPU_META__ ??= /* @__PURE__ */ new WeakMap()).set($3.f = ((seed) => {
  randomGeneratorSlot.value.seed(seed);
}), {
  v: 1,
  name: void 0,
  ast: { "params": [{ "type": "i", "name": "seed" }], "body": [0, [[6, [7, [7, "randomGeneratorSlot", "value"], "seed"], ["seed"]]]], "externalNames": ["randomGeneratorSlot"] },
  externals: () => ({ randomGeneratorSlot })
}) && $3.f)({})), "randSeed");
const randSeed2 = (globalThis.__TYPEGPU_AUTONAME__ ?? ((a2) => a2))($d.fn([F$3])((($3) => (globalThis.__TYPEGPU_META__ ??= /* @__PURE__ */ new WeakMap()).set($3.f = ((seed) => {
  randomGeneratorSlot.value.seed2(seed);
}), {
  v: 1,
  name: void 0,
  ast: { "params": [{ "type": "i", "name": "seed" }], "body": [0, [[6, [7, [7, "randomGeneratorSlot", "value"], "seed2"], ["seed"]]]], "externalNames": ["randomGeneratorSlot"] },
  externals: () => ({ randomGeneratorSlot })
}) && $3.f)({})), "randSeed2");
const randSeed3 = (globalThis.__TYPEGPU_AUTONAME__ ?? ((a2) => a2))($d.fn([ke$2])((($3) => (globalThis.__TYPEGPU_META__ ??= /* @__PURE__ */ new WeakMap()).set($3.f = ((seed) => {
  randomGeneratorSlot.value.seed3(seed);
}), {
  v: 1,
  name: void 0,
  ast: { "params": [{ "type": "i", "name": "seed" }], "body": [0, [[6, [7, [7, "randomGeneratorSlot", "value"], "seed3"], ["seed"]]]], "externalNames": ["randomGeneratorSlot"] },
  externals: () => ({ randomGeneratorSlot })
}) && $3.f)({})), "randSeed3");
const randSeed4 = (globalThis.__TYPEGPU_AUTONAME__ ?? ((a2) => a2))($d.fn([v$1])((($3) => (globalThis.__TYPEGPU_META__ ??= /* @__PURE__ */ new WeakMap()).set($3.f = ((seed) => {
  randomGeneratorSlot.value.seed4(seed);
}), {
  v: 1,
  name: void 0,
  ast: { "params": [{ "type": "i", "name": "seed" }], "body": [0, [[6, [7, [7, "randomGeneratorSlot", "value"], "seed4"], ["seed"]]]], "externalNames": ["randomGeneratorSlot"] },
  externals: () => ({ randomGeneratorSlot })
}) && $3.f)({})), "randSeed4");
const randFloat01 = (globalThis.__TYPEGPU_AUTONAME__ ?? ((a2) => a2))($d.fn([], x$2)((($3) => (globalThis.__TYPEGPU_META__ ??= /* @__PURE__ */ new WeakMap()).set($3.f = (() => randomGeneratorSlot.value.sample()), {
  v: 1,
  name: void 0,
  ast: { "params": [], "body": [0, [[10, [6, [7, [7, "randomGeneratorSlot", "value"], "sample"], []]]]], "externalNames": ["randomGeneratorSlot"] },
  externals: () => ({ randomGeneratorSlot })
}) && $3.f)({})), "randFloat01");
const randInUnitCube = (globalThis.__TYPEGPU_AUTONAME__ ?? ((a2) => a2))($d.fn([], ke$2)(
  (($3) => (globalThis.__TYPEGPU_META__ ??= /* @__PURE__ */ new WeakMap()).set($3.f = (() => ke$2(
    randomGeneratorSlot.value.sample(),
    randomGeneratorSlot.value.sample(),
    randomGeneratorSlot.value.sample()
  )), {
    v: 1,
    name: void 0,
    ast: { "params": [], "body": [0, [[10, [6, [7, "d", "vec3f"], [[6, [7, [7, "randomGeneratorSlot", "value"], "sample"], []], [6, [7, [7, "randomGeneratorSlot", "value"], "sample"], []], [6, [7, [7, "randomGeneratorSlot", "value"], "sample"], []]]]]]], "externalNames": ["d", "randomGeneratorSlot"] },
    externals: () => ({ d, randomGeneratorSlot })
  }) && $3.f)({})
), "randInUnitCube");
const randOnUnitCube = (globalThis.__TYPEGPU_AUTONAME__ ?? ((a2) => a2))($d.fn([], ke$2)((($3) => (globalThis.__TYPEGPU_META__ ??= /* @__PURE__ */ new WeakMap()).set($3.f = (() => {
  const face = T$2(randomGeneratorSlot.value.sample() * 6);
  const axis = face % 3;
  const result = ke$2();
  result[axis] = x$2(ir$2(0, 1, face > 2));
  result[(axis + 1) % 3] = randomGeneratorSlot.value.sample();
  result[(axis + 2) % 3] = randomGeneratorSlot.value.sample();
  return result;
}), {
  v: 1,
  name: void 0,
  ast: { "params": [], "body": [0, [[13, "face", [6, [7, "d", "u32"], [[1, [6, [7, [7, "randomGeneratorSlot", "value"], "sample"], []], "*", [5, "6"]]]]], [13, "axis", [1, "face", "%", [5, "3"]]], [13, "result", [6, [7, "d", "vec3f"], []]], [2, [8, "result", "axis"], "=", [6, [7, "d", "f32"], [[6, "select", [[5, "0"], [5, "1"], [1, "face", ">", [5, "2"]]]]]]], [2, [8, "result", [1, [1, "axis", "+", [5, "1"]], "%", [5, "3"]]], "=", [6, [7, [7, "randomGeneratorSlot", "value"], "sample"], []]], [2, [8, "result", [1, [1, "axis", "+", [5, "2"]], "%", [5, "3"]]], "=", [6, [7, [7, "randomGeneratorSlot", "value"], "sample"], []]], [10, "result"]]], "externalNames": ["d", "randomGeneratorSlot", "select"] },
  externals: () => ({ d, randomGeneratorSlot, select: ir$2 })
}) && $3.f)({})), "randOnUnitCube");
const randInUnitCircle = (globalThis.__TYPEGPU_AUTONAME__ ?? ((a2) => a2))($d.fn([], F$3)((($3) => (globalThis.__TYPEGPU_META__ ??= /* @__PURE__ */ new WeakMap()).set($3.f = (() => {
  const radius = Tt$1(randomGeneratorSlot.value.sample());
  const angle = randomGeneratorSlot.value.sample() * TWO_PI;
  return F$3(Vn(angle) * radius, pt2(angle) * radius);
}), {
  v: 1,
  name: void 0,
  ast: { "params": [], "body": [0, [[13, "radius", [6, "sqrt", [[6, [7, [7, "randomGeneratorSlot", "value"], "sample"], []]]]], [13, "angle", [1, [6, [7, [7, "randomGeneratorSlot", "value"], "sample"], []], "*", "TWO_PI"]], [10, [6, [7, "d", "vec2f"], [[1, [6, "cos", ["angle"]], "*", "radius"], [1, [6, "sin", ["angle"]], "*", "radius"]]]]]], "externalNames": ["sqrt", "randomGeneratorSlot", "TWO_PI", "d", "cos", "sin"] },
  externals: () => ({ sqrt: Tt$1, randomGeneratorSlot, TWO_PI, d, cos: Vn, sin: pt2 })
}) && $3.f)({})), "randInUnitCircle");
const randOnUnitCircle = (globalThis.__TYPEGPU_AUTONAME__ ?? ((a2) => a2))($d.fn([], F$3)((($3) => (globalThis.__TYPEGPU_META__ ??= /* @__PURE__ */ new WeakMap()).set($3.f = (() => {
  const angle = randomGeneratorSlot.value.sample() * TWO_PI;
  return F$3(Vn(angle), pt2(angle));
}), {
  v: 1,
  name: void 0,
  ast: { "params": [], "body": [0, [[13, "angle", [1, [6, [7, [7, "randomGeneratorSlot", "value"], "sample"], []], "*", "TWO_PI"]], [10, [6, [7, "d", "vec2f"], [[6, "cos", ["angle"]], [6, "sin", ["angle"]]]]]]], "externalNames": ["randomGeneratorSlot", "TWO_PI", "d", "cos", "sin"] },
  externals: () => ({ randomGeneratorSlot, TWO_PI, d, cos: Vn, sin: pt2 })
}) && $3.f)({})), "randOnUnitCircle");
(globalThis.__TYPEGPU_AUTONAME__ ?? ((a2) => a2))($d.fn([ke$2], ke$2)((($3) => (globalThis.__TYPEGPU_META__ ??= /* @__PURE__ */ new WeakMap()).set($3.f = ((v2) => {
  let vNonZero = v2;
  if (Fe2(v2) === 0) {
    vNonZero = v2.add(EPS);
  }
  return et$1(vNonZero);
}), {
  v: 1,
  name: void 0,
  ast: { "params": [{ "type": "i", "name": "v" }], "body": [0, [[12, "vNonZero", "v"], [11, [1, [6, "length", ["v"]], "===", [5, "0"]], [0, [[2, "vNonZero", "=", [6, [7, "v", "add"], ["EPS"]]]]]], [10, [6, "normalize", ["vNonZero"]]]]], "externalNames": ["length", "EPS", "normalize"] },
  externals: () => ({ length: Fe2, EPS, normalize: et$1 })
}) && $3.f)({})), "safeNormalize");
const randInUnitSphere = (globalThis.__TYPEGPU_AUTONAME__ ?? ((a2) => a2))($d.fn([], ke$2)((($3) => (globalThis.__TYPEGPU_META__ ??= /* @__PURE__ */ new WeakMap()).set($3.f = (() => {
  const u2 = randomGeneratorSlot.value.sample();
  const v2 = ke$2(randNormal(0, 1), randNormal(0, 1), randNormal(0, 1));
  const vNorm = et$1(v2);
  return vNorm.mul(nt(u2, 0.33));
}), {
  v: 1,
  name: void 0,
  ast: { "params": [], "body": [0, [[13, "u", [6, [7, [7, "randomGeneratorSlot", "value"], "sample"], []]], [13, "v", [6, [7, "d", "vec3f"], [[6, "randNormal", [[5, "0"], [5, "1"]]], [6, "randNormal", [[5, "0"], [5, "1"]]], [6, "randNormal", [[5, "0"], [5, "1"]]]]]], [13, "vNorm", [6, "normalize", ["v"]]], [10, [6, [7, "vNorm", "mul"], [[6, "pow", ["u", [5, "0.33"]]]]]]]], "externalNames": ["randomGeneratorSlot", "d", "randNormal", "normalize", "pow"] },
  externals: () => ({ randomGeneratorSlot, d, randNormal, normalize: et$1, pow: nt })
}) && $3.f)({})), "randInUnitSphere");
const randOnUnitSphere = (globalThis.__TYPEGPU_AUTONAME__ ?? ((a2) => a2))($d.fn([], ke$2)((($3) => (globalThis.__TYPEGPU_META__ ??= /* @__PURE__ */ new WeakMap()).set($3.f = (() => {
  const z2 = 2 * randomGeneratorSlot.value.sample() - 1;
  const oneMinusZSq = Tt$1(1 - z2 * z2);
  const theta = TWO_PI * randomGeneratorSlot.value.sample();
  const x2 = Vn(theta) * oneMinusZSq;
  const y2 = pt2(theta) * oneMinusZSq;
  return ke$2(x2, y2, z2);
}), {
  v: 1,
  name: void 0,
  ast: { "params": [], "body": [0, [[13, "z", [1, [1, [5, "2"], "*", [6, [7, [7, "randomGeneratorSlot", "value"], "sample"], []]], "-", [5, "1"]]], [13, "oneMinusZSq", [6, "sqrt", [[1, [5, "1"], "-", [1, "z", "*", "z"]]]]], [13, "theta", [1, "TWO_PI", "*", [6, [7, [7, "randomGeneratorSlot", "value"], "sample"], []]]], [13, "x", [1, [6, "cos", ["theta"]], "*", "oneMinusZSq"]], [13, "y", [1, [6, "sin", ["theta"]], "*", "oneMinusZSq"]], [10, [6, [7, "d", "vec3f"], ["x", "y", "z"]]]]], "externalNames": ["randomGeneratorSlot", "sqrt", "TWO_PI", "cos", "sin", "d"] },
  externals: () => ({ randomGeneratorSlot, sqrt: Tt$1, TWO_PI, cos: Vn, sin: pt2, d })
}) && $3.f)({})), "randOnUnitSphere");
const randInUnitHemisphere = (globalThis.__TYPEGPU_AUTONAME__ ?? ((a2) => a2))($d.fn([ke$2], ke$2)((($3) => (globalThis.__TYPEGPU_META__ ??= /* @__PURE__ */ new WeakMap()).set($3.f = ((normal) => {
  const value = randInUnitSphere();
  const alignment = ye(normal, value);
  return cr$3(it(alignment), value);
}), {
  v: 1,
  name: void 0,
  ast: { "params": [{ "type": "i", "name": "normal" }], "body": [0, [[13, "value", [6, "randInUnitSphere", []]], [13, "alignment", [6, "dot", ["normal", "value"]]], [10, [6, "mul", [[6, "sign", ["alignment"]], "value"]]]]], "externalNames": ["randInUnitSphere", "dot", "mul", "sign"] },
  externals: () => ({ randInUnitSphere, dot: ye, mul: cr$3, sign: it })
}) && $3.f)({})), "randInUnitHemisphere");
const randOnUnitHemisphere = (globalThis.__TYPEGPU_AUTONAME__ ?? ((a2) => a2))($d.fn([ke$2], ke$2)((($3) => (globalThis.__TYPEGPU_META__ ??= /* @__PURE__ */ new WeakMap()).set($3.f = ((normal) => {
  const value = randOnUnitSphere();
  const alignment = ye(normal, value);
  return cr$3(it(alignment), value);
}), {
  v: 1,
  name: void 0,
  ast: { "params": [{ "type": "i", "name": "normal" }], "body": [0, [[13, "value", [6, "randOnUnitSphere", []]], [13, "alignment", [6, "dot", ["normal", "value"]]], [10, [6, "mul", [[6, "sign", ["alignment"]], "value"]]]]], "externalNames": ["randOnUnitSphere", "dot", "mul", "sign"] },
  externals: () => ({ randOnUnitSphere, dot: ye, mul: cr$3, sign: it })
}) && $3.f)({})), "randOnUnitHemisphere");
const randUniformExclusive = (globalThis.__TYPEGPU_AUTONAME__ ?? ((a2) => a2))($d.fn([], x$2)((($3) => (globalThis.__TYPEGPU_META__ ??= /* @__PURE__ */ new WeakMap()).set($3.f = (() => {
  return randomGeneratorSlot.value.sample() * (1 - 2 * EPS) + EPS;
}), {
  v: 1,
  name: void 0,
  ast: { "params": [], "body": [0, [[10, [1, [1, [6, [7, [7, "randomGeneratorSlot", "value"], "sample"], []], "*", [1, [5, "1"], "-", [1, [5, "2"], "*", "EPS"]]], "+", "EPS"]]]], "externalNames": ["randomGeneratorSlot", "EPS"] },
  externals: () => ({ randomGeneratorSlot, EPS })
}) && $3.f)({})), "randUniformExclusive");
const randNormal = (globalThis.__TYPEGPU_AUTONAME__ ?? ((a2) => a2))($d.fn([x$2, x$2], x$2)((($3) => (globalThis.__TYPEGPU_META__ ??= /* @__PURE__ */ new WeakMap()).set($3.f = ((mu, sigma) => {
  const theta = TWO_PI * randUniformExclusive();
  const R2 = Tt$1(-2 * Qn(randUniformExclusive()));
  return R2 * pt2(theta) * sigma + mu;
}), {
  v: 1,
  name: void 0,
  ast: { "params": [{ "type": "i", "name": "mu" }, { "type": "i", "name": "sigma" }], "body": [0, [[13, "theta", [1, "TWO_PI", "*", [6, "randUniformExclusive", []]]], [13, "R", [6, "sqrt", [[1, [4, "-", [5, "2"]], "*", [6, "log", [[6, "randUniformExclusive", []]]]]]]], [10, [1, [1, [1, "R", "*", [6, "sin", ["theta"]]], "*", "sigma"], "+", "mu"]]]], "externalNames": ["TWO_PI", "randUniformExclusive", "sqrt", "log", "sin"] },
  externals: () => ({ TWO_PI, randUniformExclusive, sqrt: Tt$1, log: Qn, sin: pt2 })
}) && $3.f)({})), "randNormal");
const randExponential = (globalThis.__TYPEGPU_AUTONAME__ ?? ((a2) => a2))($d.fn([x$2], x$2)((($3) => (globalThis.__TYPEGPU_META__ ??= /* @__PURE__ */ new WeakMap()).set($3.f = ((rate) => {
  const u2 = randUniformExclusive();
  return -1 / rate * Qn(u2);
}), {
  v: 1,
  name: void 0,
  ast: { "params": [{ "type": "i", "name": "rate" }], "body": [0, [[13, "u", [6, "randUniformExclusive", []]], [10, [1, [1, [4, "-", [5, "1"]], "/", "rate"], "*", [6, "log", ["u"]]]]]], "externalNames": ["randUniformExclusive", "log"] },
  externals: () => ({ randUniformExclusive, log: Qn })
}) && $3.f)({})), "randExponential");
const randCauchy = (globalThis.__TYPEGPU_AUTONAME__ ?? ((a2) => a2))($d.fn([x$2, x$2], x$2)((($3) => (globalThis.__TYPEGPU_META__ ??= /* @__PURE__ */ new WeakMap()).set($3.f = ((x0, gamma) => {
  const u2 = randUniformExclusive();
  return x0 + gamma * dt$1(Math.PI * (u2 - 0.5));
}), {
  v: 1,
  name: void 0,
  ast: { "params": [{ "type": "i", "name": "x0" }, { "type": "i", "name": "gamma" }], "body": [0, [[13, "u", [6, "randUniformExclusive", []]], [10, [1, "x0", "+", [1, "gamma", "*", [6, "tan", [[1, [7, "Math", "PI"], "*", [1, "u", "-", [5, "0.5"]]]]]]]]]], "externalNames": ["randUniformExclusive", "tan", "Math"] },
  externals: () => ({ randUniformExclusive, tan: dt$1, Math })
}) && $3.f)({})), "randCauchy");
const randBernoulli = (globalThis.__TYPEGPU_AUTONAME__ ?? ((a2) => a2))($d.fn([x$2], x$2)((($3) => (globalThis.__TYPEGPU_META__ ??= /* @__PURE__ */ new WeakMap()).set($3.f = ((p2) => {
  const u2 = randomGeneratorSlot.value.sample();
  return ft(u2, p2);
}), {
  v: 1,
  name: void 0,
  ast: { "params": [{ "type": "i", "name": "p" }], "body": [0, [[13, "u", [6, [7, [7, "randomGeneratorSlot", "value"], "sample"], []]], [10, [6, "step", ["u", "p"]]]]], "externalNames": ["randomGeneratorSlot", "step"] },
  externals: () => ({ randomGeneratorSlot, step: ft })
}) && $3.f)({})), "randBernoulli");
const quinticInterpolationImpl = (($3) => (globalThis.__TYPEGPU_META__ ??= /* @__PURE__ */ new WeakMap()).set($3.f = (($4) => (globalThis.__TYPEGPU_META__ ??= /* @__PURE__ */ new WeakMap()).set($4.f = ((t12) => {
  "use gpu";
  return cr$3(cr$3(t12, cr$3(t12, t12)), ar$3(cr$3(t12, ur$3(cr$3(t12, 6), 15)), 10));
}), {
  v: 1,
  name: void 0,
  ast: { "params": [{ "type": "i", "name": "t" }], "body": [0, [[10, [6, "mul", [[6, "mul", ["t", [6, "mul", ["t", "t"]]]], [6, "add", [[6, "mul", ["t", [6, "sub", [[6, "mul", ["t", [5, "6"]]], [5, "15"]]]]], [5, "10"]]]]]]]], "externalNames": ["mul", "add", "sub"] },
  externals: () => ({ mul: cr$3, add: ar$3, sub: ur$3 })
}) && $4.f)({}), {
  v: 1,
  name: "quinticInterpolationImpl",
  ast: { "params": [{ "type": "i", "name": "t" }], "body": [0, [[10, [6, "mul", [[6, "mul", ["t", [6, "mul", ["t", "t"]]]], [6, "add", [[6, "mul", ["t", [6, "sub", [[6, "mul", ["t", [5, "6"]]], [5, "15"]]]]], [5, "10"]]]]]]]], "externalNames": ["mul", "add", "sub"] },
  externals: () => ({ mul: cr$3, add: ar$3, sub: ur$3 })
}) && $3.f)({});
const quinticInterpolation2 = (globalThis.__TYPEGPU_AUTONAME__ ?? ((a2) => a2))($d.fn([F$3], F$3)(quinticInterpolationImpl), "quinticInterpolation2");
const quinticInterpolation3 = (globalThis.__TYPEGPU_AUTONAME__ ?? ((a2) => a2))($d.fn([ke$2], ke$2)(quinticInterpolationImpl), "quinticInterpolation3");
const quinticDerivativeImpl = (($3) => (globalThis.__TYPEGPU_META__ ??= /* @__PURE__ */ new WeakMap()).set($3.f = (($4) => (globalThis.__TYPEGPU_META__ ??= /* @__PURE__ */ new WeakMap()).set($4.f = ((t12) => {
  "use gpu";
  return cr$3(cr$3(cr$3(30, t12), t12), ar$3(cr$3(t12, ur$3(t12, 2)), 1));
}), {
  v: 1,
  name: void 0,
  ast: { "params": [{ "type": "i", "name": "t" }], "body": [0, [[10, [6, "mul", [[6, "mul", [[6, "mul", [[5, "30"], "t"]], "t"]], [6, "add", [[6, "mul", ["t", [6, "sub", ["t", [5, "2"]]]]], [5, "1"]]]]]]]], "externalNames": ["mul", "add", "sub"] },
  externals: () => ({ mul: cr$3, add: ar$3, sub: ur$3 })
}) && $4.f)({}), {
  v: 1,
  name: "quinticDerivativeImpl",
  ast: { "params": [{ "type": "i", "name": "t" }], "body": [0, [[10, [6, "mul", [[6, "mul", [[6, "mul", [[5, "30"], "t"]], "t"]], [6, "add", [[6, "mul", ["t", [6, "sub", ["t", [5, "2"]]]]], [5, "1"]]]]]]]], "externalNames": ["mul", "add", "sub"] },
  externals: () => ({ mul: cr$3, add: ar$3, sub: ur$3 })
}) && $3.f)({});
const quinticDerivative2 = (globalThis.__TYPEGPU_AUTONAME__ ?? ((a2) => a2))($d.fn([F$3], F$3)(quinticDerivativeImpl), "quinticDerivative2");
(globalThis.__TYPEGPU_AUTONAME__ ?? ((a2) => a2))($d.fn([ke$2], ke$2)(quinticDerivativeImpl), "quinticDerivative3");
const computeJunctionGradient$1 = (globalThis.__TYPEGPU_AUTONAME__ ?? ((a2) => a2))($d.fn([pe$3], F$3)((($3) => (globalThis.__TYPEGPU_META__ ??= /* @__PURE__ */ new WeakMap()).set($3.f = ((pos) => {
  randSeed2(cr$3(1e-3, F$3(pos)));
  return randOnUnitCircle();
}), {
  v: 1,
  name: void 0,
  ast: { "params": [{ "type": "i", "name": "pos" }], "body": [0, [[6, "randSeed2", [[6, "mul", [[5, "0.001"], [6, [7, "d", "vec2f"], ["pos"]]]]]], [10, [6, "randOnUnitCircle", []]]]], "externalNames": ["randSeed2", "mul", "d", "randOnUnitCircle"] },
  externals: () => ({ randSeed2, mul: cr$3, d, randOnUnitCircle })
}) && $3.f)({})), "computeJunctionGradient");
const getJunctionGradientSlot$1 = (globalThis.__TYPEGPU_AUTONAME__ ?? ((a2) => a2))($d.slot(computeJunctionGradient$1), "getJunctionGradientSlot");
(globalThis.__TYPEGPU_AUTONAME__ ?? ((a2) => a2))($d.fn([F$3], x$2)((($3) => (globalThis.__TYPEGPU_META__ ??= /* @__PURE__ */ new WeakMap()).set($3.f = ((pos) => {
  const i2 = pe$3(On(pos));
  const f2 = _n(pos);
  const u2 = quinticInterpolation2(f2);
  const ga2 = getJunctionGradientSlot$1.$(i2);
  const gb = getJunctionGradientSlot$1.$(ar$3(i2, pe$3(1, 0)));
  const gc = getJunctionGradientSlot$1.$(ar$3(i2, pe$3(0, 1)));
  const gd = getJunctionGradientSlot$1.$(ar$3(i2, pe$3(1, 1)));
  const va2 = ye(ga2, ur$3(f2, F$3(0, 0)));
  const vb = ye(gb, ur$3(f2, F$3(1, 0)));
  const vc = ye(gc, ur$3(f2, F$3(0, 1)));
  const vd = ye(gd, ur$3(f2, F$3(1, 1)));
  const noise = va2 + u2.x * (vb - va2) + u2.y * (vc - va2) + u2.x * u2.y * (va2 - vb - vc + vd);
  return noise;
}), {
  v: 1,
  name: void 0,
  ast: { "params": [{ "type": "i", "name": "pos" }], "body": [0, [[13, "i", [6, [7, "d", "vec2i"], [[6, "floor", ["pos"]]]]], [13, "f", [6, "fract", ["pos"]]], [13, "u", [6, "quinticInterpolation2", ["f"]]], [13, "ga", [6, [7, "getJunctionGradientSlot", "$"], ["i"]]], [13, "gb", [6, [7, "getJunctionGradientSlot", "$"], [[6, "add", ["i", [6, [7, "d", "vec2i"], [[5, "1"], [5, "0"]]]]]]]], [13, "gc", [6, [7, "getJunctionGradientSlot", "$"], [[6, "add", ["i", [6, [7, "d", "vec2i"], [[5, "0"], [5, "1"]]]]]]]], [13, "gd", [6, [7, "getJunctionGradientSlot", "$"], [[6, "add", ["i", [6, [7, "d", "vec2i"], [[5, "1"], [5, "1"]]]]]]]], [13, "va", [6, "dot", ["ga", [6, "sub", ["f", [6, [7, "d", "vec2f"], [[5, "0"], [5, "0"]]]]]]]], [13, "vb", [6, "dot", ["gb", [6, "sub", ["f", [6, [7, "d", "vec2f"], [[5, "1"], [5, "0"]]]]]]]], [13, "vc", [6, "dot", ["gc", [6, "sub", ["f", [6, [7, "d", "vec2f"], [[5, "0"], [5, "1"]]]]]]]], [13, "vd", [6, "dot", ["gd", [6, "sub", ["f", [6, [7, "d", "vec2f"], [[5, "1"], [5, "1"]]]]]]]], [13, "noise", [1, [1, [1, "va", "+", [1, [7, "u", "x"], "*", [1, "vb", "-", "va"]]], "+", [1, [7, "u", "y"], "*", [1, "vc", "-", "va"]]], "+", [1, [1, [7, "u", "x"], "*", [7, "u", "y"]], "*", [1, [1, [1, "va", "-", "vb"], "-", "vc"], "+", "vd"]]]], [10, "noise"]]], "externalNames": ["d", "floor", "fract", "quinticInterpolation2", "getJunctionGradientSlot", "add", "dot", "sub"] },
  externals: () => ({ d, floor: On, fract: _n, quinticInterpolation2, getJunctionGradientSlot: getJunctionGradientSlot$1, add: ar$3, dot: ye, sub: ur$3 })
}) && $3.f)({})), "sample");
(globalThis.__TYPEGPU_AUTONAME__ ?? ((a2) => a2))($d.fn([F$3], ke$2)((($3) => (globalThis.__TYPEGPU_META__ ??= /* @__PURE__ */ new WeakMap()).set($3.f = ((pos) => {
  const i2 = pe$3(On(pos));
  const f2 = _n(pos);
  const u2 = quinticInterpolation2(f2);
  const du = quinticDerivative2(f2);
  const ga2 = getJunctionGradientSlot$1.$(i2);
  const gb = getJunctionGradientSlot$1.$(ar$3(i2, pe$3(1, 0)));
  const gc = getJunctionGradientSlot$1.$(ar$3(i2, pe$3(0, 1)));
  const gd = getJunctionGradientSlot$1.$(ar$3(i2, pe$3(1, 1)));
  const va2 = ye(ga2, ur$3(f2, F$3(0, 0)));
  const vb = ye(gb, ur$3(f2, F$3(1, 0)));
  const vc = ye(gc, ur$3(f2, F$3(0, 1)));
  const vd = ye(gd, ur$3(f2, F$3(1, 1)));
  const noise = va2 + u2.x * (vb - va2) + u2.y * (vc - va2) + u2.x * u2.y * (va2 - vb - vc + vd);
  const grad = ar$3(
    ga2,
    ar$3(
      ar$3(
        ar$3(cr$3(u2.x, ur$3(gb, ga2)), cr$3(u2.y, ur$3(gc, ga2))),
        cr$3(u2.x, cr$3(u2.y, ar$3(ur$3(ur$3(ga2, gb), gc), gd)))
      ),
      cr$3(du, ur$3(ar$3(cr$3(u2.yx, va2 - vb - vc + vd), F$3(vb, vc)), va2))
    )
  );
  return ke$2(noise, grad);
}), {
  v: 1,
  name: void 0,
  ast: { "params": [{ "type": "i", "name": "pos" }], "body": [0, [[13, "i", [6, [7, "d", "vec2i"], [[6, "floor", ["pos"]]]]], [13, "f", [6, "fract", ["pos"]]], [13, "u", [6, "quinticInterpolation2", ["f"]]], [13, "du", [6, "quinticDerivative2", ["f"]]], [13, "ga", [6, [7, "getJunctionGradientSlot", "$"], ["i"]]], [13, "gb", [6, [7, "getJunctionGradientSlot", "$"], [[6, "add", ["i", [6, [7, "d", "vec2i"], [[5, "1"], [5, "0"]]]]]]]], [13, "gc", [6, [7, "getJunctionGradientSlot", "$"], [[6, "add", ["i", [6, [7, "d", "vec2i"], [[5, "0"], [5, "1"]]]]]]]], [13, "gd", [6, [7, "getJunctionGradientSlot", "$"], [[6, "add", ["i", [6, [7, "d", "vec2i"], [[5, "1"], [5, "1"]]]]]]]], [13, "va", [6, "dot", ["ga", [6, "sub", ["f", [6, [7, "d", "vec2f"], [[5, "0"], [5, "0"]]]]]]]], [13, "vb", [6, "dot", ["gb", [6, "sub", ["f", [6, [7, "d", "vec2f"], [[5, "1"], [5, "0"]]]]]]]], [13, "vc", [6, "dot", ["gc", [6, "sub", ["f", [6, [7, "d", "vec2f"], [[5, "0"], [5, "1"]]]]]]]], [13, "vd", [6, "dot", ["gd", [6, "sub", ["f", [6, [7, "d", "vec2f"], [[5, "1"], [5, "1"]]]]]]]], [13, "noise", [1, [1, [1, "va", "+", [1, [7, "u", "x"], "*", [1, "vb", "-", "va"]]], "+", [1, [7, "u", "y"], "*", [1, "vc", "-", "va"]]], "+", [1, [1, [7, "u", "x"], "*", [7, "u", "y"]], "*", [1, [1, [1, "va", "-", "vb"], "-", "vc"], "+", "vd"]]]], [13, "grad", [6, "add", ["ga", [6, "add", [[6, "add", [[6, "add", [[6, "mul", [[7, "u", "x"], [6, "sub", ["gb", "ga"]]]], [6, "mul", [[7, "u", "y"], [6, "sub", ["gc", "ga"]]]]]], [6, "mul", [[7, "u", "x"], [6, "mul", [[7, "u", "y"], [6, "add", [[6, "sub", [[6, "sub", ["ga", "gb"]], "gc"]], "gd"]]]]]]]], [6, "mul", ["du", [6, "sub", [[6, "add", [[6, "mul", [[7, "u", "yx"], [1, [1, [1, "va", "-", "vb"], "-", "vc"], "+", "vd"]]], [6, [7, "d", "vec2f"], ["vb", "vc"]]]], "va"]]]]]]]]], [10, [6, [7, "d", "vec3f"], ["noise", "grad"]]]]], "externalNames": ["d", "floor", "fract", "quinticInterpolation2", "quinticDerivative2", "getJunctionGradientSlot", "add", "dot", "sub", "mul"] },
  externals: () => ({ d, floor: On, fract: _n, quinticInterpolation2, quinticDerivative2, getJunctionGradientSlot: getJunctionGradientSlot$1, add: ar$3, dot: ye, sub: ur$3, mul: cr$3 })
}) && $3.f)({})), "sampleWithGradient");
F$2(F$3);
F$2(F$3);
const computeJunctionGradient = (globalThis.__TYPEGPU_AUTONAME__ ?? ((a2) => a2))($d.fn([Fe$2], ke$2)((($3) => (globalThis.__TYPEGPU_META__ ??= /* @__PURE__ */ new WeakMap()).set($3.f = ((pos) => {
  randSeed3(cr$3(1e-3, ke$2(pos)));
  return randOnUnitSphere();
}), {
  v: 1,
  name: void 0,
  ast: { "params": [{ "type": "i", "name": "pos" }], "body": [0, [[6, "randSeed3", [[6, "mul", [[5, "0.001"], [6, [7, "d", "vec3f"], ["pos"]]]]]], [10, [6, "randOnUnitSphere", []]]]], "externalNames": ["randSeed3", "mul", "d", "randOnUnitSphere"] },
  externals: () => ({ randSeed3, mul: cr$3, d, randOnUnitSphere })
}) && $3.f)({})), "computeJunctionGradient");
const getJunctionGradientSlot = (globalThis.__TYPEGPU_AUTONAME__ ?? ((a2) => a2))($d.slot(computeJunctionGradient), "getJunctionGradientSlot");
const dotProdGrid = (globalThis.__TYPEGPU_AUTONAME__ ?? ((a2) => a2))($d.fn([ke$2, ke$2], x$2)((($3) => (globalThis.__TYPEGPU_META__ ??= /* @__PURE__ */ new WeakMap()).set($3.f = ((pos, junction) => {
  const relative = ur$3(pos, junction);
  const gridVector = getJunctionGradientSlot.value(Fe$2(junction));
  return ye(relative, gridVector);
}), {
  v: 1,
  name: void 0,
  ast: { "params": [{ "type": "i", "name": "pos" }, { "type": "i", "name": "junction" }], "body": [0, [[13, "relative", [6, "sub", ["pos", "junction"]]], [13, "gridVector", [6, [7, "getJunctionGradientSlot", "value"], [[6, [7, "d", "vec3i"], ["junction"]]]]], [10, [6, "dot", ["relative", "gridVector"]]]]], "externalNames": ["sub", "getJunctionGradientSlot", "d", "dot"] },
  externals: () => ({ sub: ur$3, getJunctionGradientSlot, d, dot: ye })
}) && $3.f)({})), "dotProdGrid");
(globalThis.__TYPEGPU_AUTONAME__ ?? ((a2) => a2))($d.fn([ke$2], x$2)((($3) => (globalThis.__TYPEGPU_META__ ??= /* @__PURE__ */ new WeakMap()).set($3.f = ((pos) => {
  const minJunction = On(pos);
  const xyz = dotProdGrid(pos, minJunction);
  const xyZ = dotProdGrid(pos, ar$3(minJunction, ke$2(0, 0, 1)));
  const xYz = dotProdGrid(pos, ar$3(minJunction, ke$2(0, 1, 0)));
  const xYZ = dotProdGrid(pos, ar$3(minJunction, ke$2(0, 1, 1)));
  const Xyz = dotProdGrid(pos, ar$3(minJunction, ke$2(1, 0, 0)));
  const XyZ = dotProdGrid(pos, ar$3(minJunction, ke$2(1, 0, 1)));
  const XYz = dotProdGrid(pos, ar$3(minJunction, ke$2(1, 1, 0)));
  const XYZ = dotProdGrid(pos, ar$3(minJunction, ke$2(1, 1, 1)));
  const partial = ur$3(pos, minJunction);
  const smoothPartial = quinticInterpolation3(partial);
  const xy = Jn(xyz, xyZ, smoothPartial.z);
  const xY = Jn(xYz, xYZ, smoothPartial.z);
  const Xy = Jn(Xyz, XyZ, smoothPartial.z);
  const XY = Jn(XYz, XYZ, smoothPartial.z);
  const x2 = Jn(xy, xY, smoothPartial.y);
  const X2 = Jn(Xy, XY, smoothPartial.y);
  return Jn(x2, X2, smoothPartial.x);
}), {
  v: 1,
  name: void 0,
  ast: { "params": [{ "type": "i", "name": "pos" }], "body": [0, [[13, "minJunction", [6, "floor", ["pos"]]], [13, "xyz", [6, "dotProdGrid", ["pos", "minJunction"]]], [13, "xyZ", [6, "dotProdGrid", ["pos", [6, "add", ["minJunction", [6, [7, "d", "vec3f"], [[5, "0"], [5, "0"], [5, "1"]]]]]]]], [13, "xYz", [6, "dotProdGrid", ["pos", [6, "add", ["minJunction", [6, [7, "d", "vec3f"], [[5, "0"], [5, "1"], [5, "0"]]]]]]]], [13, "xYZ", [6, "dotProdGrid", ["pos", [6, "add", ["minJunction", [6, [7, "d", "vec3f"], [[5, "0"], [5, "1"], [5, "1"]]]]]]]], [13, "Xyz", [6, "dotProdGrid", ["pos", [6, "add", ["minJunction", [6, [7, "d", "vec3f"], [[5, "1"], [5, "0"], [5, "0"]]]]]]]], [13, "XyZ", [6, "dotProdGrid", ["pos", [6, "add", ["minJunction", [6, [7, "d", "vec3f"], [[5, "1"], [5, "0"], [5, "1"]]]]]]]], [13, "XYz", [6, "dotProdGrid", ["pos", [6, "add", ["minJunction", [6, [7, "d", "vec3f"], [[5, "1"], [5, "1"], [5, "0"]]]]]]]], [13, "XYZ", [6, "dotProdGrid", ["pos", [6, "add", ["minJunction", [6, [7, "d", "vec3f"], [[5, "1"], [5, "1"], [5, "1"]]]]]]]], [13, "partial", [6, "sub", ["pos", "minJunction"]]], [13, "smoothPartial", [6, "quinticInterpolation3", ["partial"]]], [13, "xy", [6, "mix", ["xyz", "xyZ", [7, "smoothPartial", "z"]]]], [13, "xY", [6, "mix", ["xYz", "xYZ", [7, "smoothPartial", "z"]]]], [13, "Xy", [6, "mix", ["Xyz", "XyZ", [7, "smoothPartial", "z"]]]], [13, "XY", [6, "mix", ["XYz", "XYZ", [7, "smoothPartial", "z"]]]], [13, "x", [6, "mix", ["xy", "xY", [7, "smoothPartial", "y"]]]], [13, "X", [6, "mix", ["Xy", "XY", [7, "smoothPartial", "y"]]]], [10, [6, "mix", ["x", "X", [7, "smoothPartial", "x"]]]]]], "externalNames": ["floor", "dotProdGrid", "add", "d", "sub", "quinticInterpolation3", "mix"] },
  externals: () => ({ floor: On, dotProdGrid, add: ar$3, d, sub: ur$3, quinticInterpolation3, mix: Jn })
}) && $3.f)({})), "sample");
F$2(ke$2);
F$2(ke$2);
const randf = {
  seed: randSeed,
  seed2: randSeed2,
  seed3: randSeed3,
  seed4: randSeed4,
  sample: randFloat01,
  sampleExclusive: randUniformExclusive,
  normal: randNormal,
  exponential: randExponential,
  cauchy: randCauchy,
  bernoulli: randBernoulli,
  inUnitCircle: randInUnitCircle,
  onUnitCircle: randOnUnitCircle,
  inUnitCube: randInUnitCube,
  onUnitCube: randOnUnitCube,
  inHemisphere: randInUnitHemisphere,
  onHemisphere: randOnUnitHemisphere,
  inUnitSphere: randInUnitSphere,
  onUnitSphere: randOnUnitSphere
};
const MAX_STEPS = 256;
const MAX_DIST = 10;
const SURF_DIST = 5e-4;
const LIGHT_GROUND_ALBEDO = ke$2(1);
const DARK_GROUND_ALBEDO = ke$2(0.2);
const AMBIENT_COLOR = ke$2(0.6);
const AMBIENT_INTENSITY = 0.6;
const SPECULAR_POWER = 10;
const SPECULAR_INTENSITY = 0.6;
const JELLY_IOR = 1.42;
const JELLY_SCATTER_STRENGTH = 3;
const AO_STEPS = 16;
const AO_RADIUS = 0.15;
const AO_INTENSITY = 0.8;
const AO_BIAS = SURF_DIST * 5;
const JELLY_HALFSIZE = ke$2(0.35, 0.3, 0.3);
const SWITCH_RAIL_LENGTH = 0.4;
const SWITCH_ACCELERATION = 100;
const squashXProperties = {
  mass: 1,
  stiffness: 1e3,
  damping: 10
};
const squashZProperties = {
  mass: 1,
  stiffness: 900,
  damping: 12
};
const wiggleXProperties = {
  mass: 1,
  stiffness: 1e3,
  damping: 20
};
const DirectionalLight = (globalThis.__TYPEGPU_AUTONAME__ ?? ((a2) => a2))(Js({
  direction: ke$2,
  color: ke$2
}), "DirectionalLight");
const ObjectType = {
  SLIDER: 1,
  BACKGROUND: 2
};
const HitInfo = (globalThis.__TYPEGPU_AUTONAME__ ?? ((a2) => a2))(Js({
  distance: x$2,
  objectType: f$1
}), "HitInfo");
const BoxIntersection = (globalThis.__TYPEGPU_AUTONAME__ ?? ((a2) => a2))(Js({
  hit: V$1,
  tMin: x$2,
  tMax: x$2
}), "BoxIntersection");
const Ray = (globalThis.__TYPEGPU_AUTONAME__ ?? ((a2) => a2))(Js({
  origin: ke$2,
  direction: ke$2
}), "Ray");
const BoundingBox = (globalThis.__TYPEGPU_AUTONAME__ ?? ((a2) => a2))(Js({
  min: ke$2,
  max: ke$2
}), "BoundingBox");
const SwitchState = (globalThis.__TYPEGPU_AUTONAME__ ?? ((a2) => a2))(Js({
  progress: x$2,
  squashX: x$2,
  squashZ: x$2,
  wiggleX: x$2
}), "SwitchState");
const rayMarchLayout = (globalThis.__TYPEGPU_AUTONAME__ ?? ((a2) => a2))($d.bindGroupLayout({
  backgroundTexture: { texture: St$1(x$2) }
}), "rayMarchLayout");
const taaResolveLayout = (globalThis.__TYPEGPU_AUTONAME__ ?? ((a2) => a2))($d.bindGroupLayout({
  currentTexture: {
    texture: St$1()
  },
  historyTexture: {
    texture: St$1()
  },
  outputTexture: {
    storageTexture: Ct("rgba8unorm", "write-only")
  }
}), "taaResolveLayout");
const sampleLayout = (globalThis.__TYPEGPU_AUTONAME__ ?? ((a2) => a2))($d.bindGroupLayout({
  currentTexture: {
    texture: St$1()
  }
}), "sampleLayout");
class Spring {
  constructor(properties) {
    this.target = 0;
    this.value = this.target;
    this.properties = { ...properties };
    this.velocity = 0;
  }
  update(dt2) {
    const F_spring = -this.properties.stiffness * (this.value - this.target);
    const F_damp = -this.properties.damping * this.velocity;
    const a2 = (F_spring + F_damp) / this.properties.mass;
    this.velocity = this.velocity + a2 * dt2;
    this.value = this.value + this.velocity * dt2;
  }
}
class SwitchBehavior {
  constructor(root2) {
    this.toggled = false;
    this.pressed = false;
    this.#root = root2;
    this.#progress = 0;
    this.#velocity = 0;
    this.#squashXSpring = new Spring(squashXProperties);
    this.#squashZSpring = new Spring(squashZProperties);
    this.#wiggleXSpring = new Spring(wiggleXProperties);
    this.stateUniform = (globalThis.__TYPEGPU_AUTONAME__ ?? ((a2) => a2))(this.#root.createUniform(SwitchState), "stateUniform");
    this.#audioContext = new AudioContext();
    this.#backgroundGainNode = this.#audioContext.createGain();
    this.#backgroundGainNode.connect(this.#audioContext.destination);
    this.#backgroundGainNode.gain.value = 0;
  }
  #root;
  // Audio system
  #audioContext;
  #backgroundGainNode;
  #backgroundSource;
  #switchOnBuffer;
  #switchOffBuffer;
  #squelchBuffers;
  // Derived physical state
  #progress;
  #velocity;
  #squashXSpring;
  #squashZSpring;
  #wiggleXSpring;
  async init() {
    const [backgroundResponse, switchOnResponse, switchOffResponse] = await Promise.all([
      fetch("assets/jelly-switch/drag-noise.ogg"),
      fetch("assets/jelly-switch/switch-on.ogg"),
      fetch("assets/jelly-switch/switch-off.ogg")
    ]);
    this.#squelchBuffers = await Promise.all(
      Array.from(
        { length: 6 },
        (_2, idx) => fetch(`assets/jelly-switch/squelch${idx + 1}.wav`).then((res) => res.arrayBuffer()).then((buffer) => this.#audioContext.decodeAudioData(buffer))
      )
    );
    const [backgroundArrayBuffer, switchOnArrayBuffer, switchOffArrayBuffer] = await Promise.all([
      backgroundResponse.arrayBuffer(),
      switchOnResponse.arrayBuffer(),
      switchOffResponse.arrayBuffer()
    ]);
    const [backgroundBuffer, switchOnBuffer, switchOffBuffer] = await Promise.all([
      this.#audioContext.decodeAudioData(backgroundArrayBuffer),
      this.#audioContext.decodeAudioData(switchOnArrayBuffer),
      this.#audioContext.decodeAudioData(switchOffArrayBuffer)
    ]);
    this.#switchOnBuffer = switchOnBuffer;
    this.#switchOffBuffer = switchOffBuffer;
    const source = this.#audioContext.createBufferSource();
    source.buffer = backgroundBuffer;
    source.loop = true;
    source.connect(this.#backgroundGainNode);
    source.start();
    this.#backgroundSource = source;
  }
  update(dt2) {
    if (dt2 <= 0) return;
    let acc = 0;
    if (this.toggled && this.#progress < 1) {
      acc = SWITCH_ACCELERATION;
    }
    if (!this.toggled && this.#progress > 0) {
      acc = -SWITCH_ACCELERATION;
    }
    if (this.pressed) {
      this.#squashXSpring.velocity = -2;
      this.#squashZSpring.velocity = 1;
      this.#wiggleXSpring.velocity = 1 * Math.sign(this.#progress - 0.5);
    }
    this.#velocity = this.#velocity + acc * dt2;
    if (this.#progress > 0 && this.#progress < 1) {
      this.#wiggleXSpring.velocity = this.#velocity;
    }
    this.#progress = this.#progress + this.#velocity * dt2;
    if (this.#progress > 1) {
      this.#progress = 1;
      this.#velocity = 0;
      this.#squashXSpring.velocity = -5;
      this.#squashZSpring.velocity = 5;
      this.#wiggleXSpring.velocity = -10;
      this.playSwitchOn();
    }
    if (this.#progress < 0) {
      this.#progress = 0;
      this.#velocity = 0;
      this.#squashXSpring.velocity = -5;
      this.#squashZSpring.velocity = 5;
      this.#wiggleXSpring.velocity = 10;
      this.playSwitchOff();
    }
    this.#progress = ct$1(this.#progress);
    this.#squashXSpring.update(dt2);
    this.#squashZSpring.update(dt2);
    this.#wiggleXSpring.update(dt2);
    this.#backgroundGainNode.gain.value = ct$1(
      fn$1(this.#velocity * 0.1)
    ) * 5;
    this.#backgroundSource?.playbackRate.setTargetAtTime(
      fn$1(this.#velocity) * 0.02 + 0.8,
      0,
      0.02
    );
    this.#updateGPUBuffer();
  }
  #updateGPUBuffer() {
    this.stateUniform.write({
      progress: this.#progress,
      squashX: this.#squashXSpring.value,
      squashZ: this.#squashZSpring.value,
      wiggleX: this.#wiggleXSpring.value
    });
  }
  playSwitchOn() {
    if (!this.#switchOnBuffer) return;
    const source = this.#audioContext.createBufferSource();
    source.buffer = this.#switchOnBuffer;
    source.connect(this.#audioContext.destination);
    source.start();
    this.playSquelch();
  }
  playSwitchOff() {
    if (!this.#switchOffBuffer) return;
    const source = this.#audioContext.createBufferSource();
    source.buffer = this.#switchOffBuffer;
    source.connect(this.#audioContext.destination);
    source.start();
    this.playSquelch();
  }
  playSquelch() {
    const buffer = this.#squelchBuffers ? this.#squelchBuffers[Math.floor(Math.random() * this.#squelchBuffers.length)] : void 0;
    if (!buffer) return;
    const source = this.#audioContext.createBufferSource();
    source.buffer = buffer;
    source.playbackRate.value = 1 + Math.random() * 0.5;
    const gainNode = this.#audioContext.createGain();
    gainNode.gain.value = 0.1;
    source.connect(gainNode);
    gainNode.connect(this.#audioContext.destination);
    source.start();
  }
}
function wrapConstructor(OriginalConstructor, modifier) {
  return class extends OriginalConstructor {
    constructor(...args) {
      super(...args);
      modifier(this);
    }
  };
}
const ZeroArray = wrapConstructor(Array, (a2) => a2.fill(0));
let EPSILON = 1e-6;
function getAPIImpl$5(Ctor) {
  function create(x2 = 0, y2 = 0) {
    const newDst = new Ctor(2);
    if (x2 !== void 0) {
      newDst[0] = x2;
      if (y2 !== void 0) {
        newDst[1] = y2;
      }
    }
    return newDst;
  }
  const fromValues = create;
  function set(x2, y2, dst) {
    const newDst = dst ?? new Ctor(2);
    newDst[0] = x2;
    newDst[1] = y2;
    return newDst;
  }
  function ceil(v2, dst) {
    const newDst = dst ?? new Ctor(2);
    newDst[0] = Math.ceil(v2[0]);
    newDst[1] = Math.ceil(v2[1]);
    return newDst;
  }
  function floor(v2, dst) {
    const newDst = dst ?? new Ctor(2);
    newDst[0] = Math.floor(v2[0]);
    newDst[1] = Math.floor(v2[1]);
    return newDst;
  }
  function round(v2, dst) {
    const newDst = dst ?? new Ctor(2);
    newDst[0] = Math.round(v2[0]);
    newDst[1] = Math.round(v2[1]);
    return newDst;
  }
  function clamp(v2, min2 = 0, max2 = 1, dst) {
    const newDst = dst ?? new Ctor(2);
    newDst[0] = Math.min(max2, Math.max(min2, v2[0]));
    newDst[1] = Math.min(max2, Math.max(min2, v2[1]));
    return newDst;
  }
  function add(a2, b2, dst) {
    const newDst = dst ?? new Ctor(2);
    newDst[0] = a2[0] + b2[0];
    newDst[1] = a2[1] + b2[1];
    return newDst;
  }
  function addScaled(a2, b2, scale2, dst) {
    const newDst = dst ?? new Ctor(2);
    newDst[0] = a2[0] + b2[0] * scale2;
    newDst[1] = a2[1] + b2[1] * scale2;
    return newDst;
  }
  function angle(a2, b2) {
    const ax = a2[0];
    const ay = a2[1];
    const bx = b2[0];
    const by = b2[1];
    const mag1 = Math.sqrt(ax * ax + ay * ay);
    const mag2 = Math.sqrt(bx * bx + by * by);
    const mag = mag1 * mag2;
    const cosine = mag && dot(a2, b2) / mag;
    return Math.acos(cosine);
  }
  function subtract(a2, b2, dst) {
    const newDst = dst ?? new Ctor(2);
    newDst[0] = a2[0] - b2[0];
    newDst[1] = a2[1] - b2[1];
    return newDst;
  }
  const sub = subtract;
  function equalsApproximately(a2, b2) {
    return Math.abs(a2[0] - b2[0]) < EPSILON && Math.abs(a2[1] - b2[1]) < EPSILON;
  }
  function equals(a2, b2) {
    return a2[0] === b2[0] && a2[1] === b2[1];
  }
  function lerp(a2, b2, t12, dst) {
    const newDst = dst ?? new Ctor(2);
    newDst[0] = a2[0] + t12 * (b2[0] - a2[0]);
    newDst[1] = a2[1] + t12 * (b2[1] - a2[1]);
    return newDst;
  }
  function lerpV(a2, b2, t12, dst) {
    const newDst = dst ?? new Ctor(2);
    newDst[0] = a2[0] + t12[0] * (b2[0] - a2[0]);
    newDst[1] = a2[1] + t12[1] * (b2[1] - a2[1]);
    return newDst;
  }
  function max(a2, b2, dst) {
    const newDst = dst ?? new Ctor(2);
    newDst[0] = Math.max(a2[0], b2[0]);
    newDst[1] = Math.max(a2[1], b2[1]);
    return newDst;
  }
  function min(a2, b2, dst) {
    const newDst = dst ?? new Ctor(2);
    newDst[0] = Math.min(a2[0], b2[0]);
    newDst[1] = Math.min(a2[1], b2[1]);
    return newDst;
  }
  function mulScalar(v2, k2, dst) {
    const newDst = dst ?? new Ctor(2);
    newDst[0] = v2[0] * k2;
    newDst[1] = v2[1] * k2;
    return newDst;
  }
  const scale = mulScalar;
  function divScalar(v2, k2, dst) {
    const newDst = dst ?? new Ctor(2);
    newDst[0] = v2[0] / k2;
    newDst[1] = v2[1] / k2;
    return newDst;
  }
  function inverse(v2, dst) {
    const newDst = dst ?? new Ctor(2);
    newDst[0] = 1 / v2[0];
    newDst[1] = 1 / v2[1];
    return newDst;
  }
  const invert = inverse;
  function cross2(a2, b2, dst) {
    const newDst = dst ?? new Ctor(3);
    const z2 = a2[0] * b2[1] - a2[1] * b2[0];
    newDst[0] = 0;
    newDst[1] = 0;
    newDst[2] = z2;
    return newDst;
  }
  function dot(a2, b2) {
    return a2[0] * b2[0] + a2[1] * b2[1];
  }
  function length(v2) {
    const v0 = v2[0];
    const v1 = v2[1];
    return Math.sqrt(v0 * v0 + v1 * v1);
  }
  const len = length;
  function lengthSq(v2) {
    const v0 = v2[0];
    const v1 = v2[1];
    return v0 * v0 + v1 * v1;
  }
  const lenSq = lengthSq;
  function distance(a2, b2) {
    const dx = a2[0] - b2[0];
    const dy = a2[1] - b2[1];
    return Math.sqrt(dx * dx + dy * dy);
  }
  const dist = distance;
  function distanceSq(a2, b2) {
    const dx = a2[0] - b2[0];
    const dy = a2[1] - b2[1];
    return dx * dx + dy * dy;
  }
  const distSq = distanceSq;
  function normalize(v2, dst) {
    const newDst = dst ?? new Ctor(2);
    const v0 = v2[0];
    const v1 = v2[1];
    const len2 = Math.sqrt(v0 * v0 + v1 * v1);
    if (len2 > 1e-5) {
      newDst[0] = v0 / len2;
      newDst[1] = v1 / len2;
    } else {
      newDst[0] = 0;
      newDst[1] = 0;
    }
    return newDst;
  }
  function negate(v2, dst) {
    const newDst = dst ?? new Ctor(2);
    newDst[0] = -v2[0];
    newDst[1] = -v2[1];
    return newDst;
  }
  function copy(v2, dst) {
    const newDst = dst ?? new Ctor(2);
    newDst[0] = v2[0];
    newDst[1] = v2[1];
    return newDst;
  }
  const clone = copy;
  function multiply(a2, b2, dst) {
    const newDst = dst ?? new Ctor(2);
    newDst[0] = a2[0] * b2[0];
    newDst[1] = a2[1] * b2[1];
    return newDst;
  }
  const mul = multiply;
  function divide(a2, b2, dst) {
    const newDst = dst ?? new Ctor(2);
    newDst[0] = a2[0] / b2[0];
    newDst[1] = a2[1] / b2[1];
    return newDst;
  }
  const div = divide;
  function random(scale2 = 1, dst) {
    const newDst = dst ?? new Ctor(2);
    const angle2 = Math.random() * 2 * Math.PI;
    newDst[0] = Math.cos(angle2) * scale2;
    newDst[1] = Math.sin(angle2) * scale2;
    return newDst;
  }
  function zero(dst) {
    const newDst = dst ?? new Ctor(2);
    newDst[0] = 0;
    newDst[1] = 0;
    return newDst;
  }
  function transformMat4(v2, m2, dst) {
    const newDst = dst ?? new Ctor(2);
    const x2 = v2[0];
    const y2 = v2[1];
    newDst[0] = x2 * m2[0] + y2 * m2[4] + m2[12];
    newDst[1] = x2 * m2[1] + y2 * m2[5] + m2[13];
    return newDst;
  }
  function transformMat3(v2, m2, dst) {
    const newDst = dst ?? new Ctor(2);
    const x2 = v2[0];
    const y2 = v2[1];
    newDst[0] = m2[0] * x2 + m2[4] * y2 + m2[8];
    newDst[1] = m2[1] * x2 + m2[5] * y2 + m2[9];
    return newDst;
  }
  function rotate(a2, b2, rad, dst) {
    const newDst = dst ?? new Ctor(2);
    const p0 = a2[0] - b2[0];
    const p1 = a2[1] - b2[1];
    const sinC = Math.sin(rad);
    const cosC = Math.cos(rad);
    newDst[0] = p0 * cosC - p1 * sinC + b2[0];
    newDst[1] = p0 * sinC + p1 * cosC + b2[1];
    return newDst;
  }
  function setLength(a2, len2, dst) {
    const newDst = dst ?? new Ctor(2);
    normalize(a2, newDst);
    return mulScalar(newDst, len2, newDst);
  }
  function truncate(a2, maxLen, dst) {
    const newDst = dst ?? new Ctor(2);
    if (length(a2) > maxLen) {
      return setLength(a2, maxLen, newDst);
    }
    return copy(a2, newDst);
  }
  function midpoint(a2, b2, dst) {
    const newDst = dst ?? new Ctor(2);
    return lerp(a2, b2, 0.5, newDst);
  }
  return {
    create,
    fromValues,
    set,
    ceil,
    floor,
    round,
    clamp,
    add,
    addScaled,
    angle,
    subtract,
    sub,
    equalsApproximately,
    equals,
    lerp,
    lerpV,
    max,
    min,
    mulScalar,
    scale,
    divScalar,
    inverse,
    invert,
    cross: cross2,
    dot,
    length,
    len,
    lengthSq,
    lenSq,
    distance,
    dist,
    distanceSq,
    distSq,
    normalize,
    negate,
    copy,
    clone,
    multiply,
    mul,
    divide,
    div,
    random,
    zero,
    transformMat4,
    transformMat3,
    rotate,
    setLength,
    truncate,
    midpoint
  };
}
const cache$5 = /* @__PURE__ */ new Map();
function getAPI$5(Ctor) {
  let api = cache$5.get(Ctor);
  if (!api) {
    api = getAPIImpl$5(Ctor);
    cache$5.set(Ctor, api);
  }
  return api;
}
function getAPIImpl$4(Ctor) {
  function create(x2, y2, z2) {
    const newDst = new Ctor(3);
    if (x2 !== void 0) {
      newDst[0] = x2;
      if (y2 !== void 0) {
        newDst[1] = y2;
        if (z2 !== void 0) {
          newDst[2] = z2;
        }
      }
    }
    return newDst;
  }
  const fromValues = create;
  function set(x2, y2, z2, dst) {
    const newDst = dst ?? new Ctor(3);
    newDst[0] = x2;
    newDst[1] = y2;
    newDst[2] = z2;
    return newDst;
  }
  function ceil(v2, dst) {
    const newDst = dst ?? new Ctor(3);
    newDst[0] = Math.ceil(v2[0]);
    newDst[1] = Math.ceil(v2[1]);
    newDst[2] = Math.ceil(v2[2]);
    return newDst;
  }
  function floor(v2, dst) {
    const newDst = dst ?? new Ctor(3);
    newDst[0] = Math.floor(v2[0]);
    newDst[1] = Math.floor(v2[1]);
    newDst[2] = Math.floor(v2[2]);
    return newDst;
  }
  function round(v2, dst) {
    const newDst = dst ?? new Ctor(3);
    newDst[0] = Math.round(v2[0]);
    newDst[1] = Math.round(v2[1]);
    newDst[2] = Math.round(v2[2]);
    return newDst;
  }
  function clamp(v2, min2 = 0, max2 = 1, dst) {
    const newDst = dst ?? new Ctor(3);
    newDst[0] = Math.min(max2, Math.max(min2, v2[0]));
    newDst[1] = Math.min(max2, Math.max(min2, v2[1]));
    newDst[2] = Math.min(max2, Math.max(min2, v2[2]));
    return newDst;
  }
  function add(a2, b2, dst) {
    const newDst = dst ?? new Ctor(3);
    newDst[0] = a2[0] + b2[0];
    newDst[1] = a2[1] + b2[1];
    newDst[2] = a2[2] + b2[2];
    return newDst;
  }
  function addScaled(a2, b2, scale2, dst) {
    const newDst = dst ?? new Ctor(3);
    newDst[0] = a2[0] + b2[0] * scale2;
    newDst[1] = a2[1] + b2[1] * scale2;
    newDst[2] = a2[2] + b2[2] * scale2;
    return newDst;
  }
  function angle(a2, b2) {
    const ax = a2[0];
    const ay = a2[1];
    const az = a2[2];
    const bx = b2[0];
    const by = b2[1];
    const bz = b2[2];
    const mag1 = Math.sqrt(ax * ax + ay * ay + az * az);
    const mag2 = Math.sqrt(bx * bx + by * by + bz * bz);
    const mag = mag1 * mag2;
    const cosine = mag && dot(a2, b2) / mag;
    return Math.acos(cosine);
  }
  function subtract(a2, b2, dst) {
    const newDst = dst ?? new Ctor(3);
    newDst[0] = a2[0] - b2[0];
    newDst[1] = a2[1] - b2[1];
    newDst[2] = a2[2] - b2[2];
    return newDst;
  }
  const sub = subtract;
  function equalsApproximately(a2, b2) {
    return Math.abs(a2[0] - b2[0]) < EPSILON && Math.abs(a2[1] - b2[1]) < EPSILON && Math.abs(a2[2] - b2[2]) < EPSILON;
  }
  function equals(a2, b2) {
    return a2[0] === b2[0] && a2[1] === b2[1] && a2[2] === b2[2];
  }
  function lerp(a2, b2, t12, dst) {
    const newDst = dst ?? new Ctor(3);
    newDst[0] = a2[0] + t12 * (b2[0] - a2[0]);
    newDst[1] = a2[1] + t12 * (b2[1] - a2[1]);
    newDst[2] = a2[2] + t12 * (b2[2] - a2[2]);
    return newDst;
  }
  function lerpV(a2, b2, t12, dst) {
    const newDst = dst ?? new Ctor(3);
    newDst[0] = a2[0] + t12[0] * (b2[0] - a2[0]);
    newDst[1] = a2[1] + t12[1] * (b2[1] - a2[1]);
    newDst[2] = a2[2] + t12[2] * (b2[2] - a2[2]);
    return newDst;
  }
  function max(a2, b2, dst) {
    const newDst = dst ?? new Ctor(3);
    newDst[0] = Math.max(a2[0], b2[0]);
    newDst[1] = Math.max(a2[1], b2[1]);
    newDst[2] = Math.max(a2[2], b2[2]);
    return newDst;
  }
  function min(a2, b2, dst) {
    const newDst = dst ?? new Ctor(3);
    newDst[0] = Math.min(a2[0], b2[0]);
    newDst[1] = Math.min(a2[1], b2[1]);
    newDst[2] = Math.min(a2[2], b2[2]);
    return newDst;
  }
  function mulScalar(v2, k2, dst) {
    const newDst = dst ?? new Ctor(3);
    newDst[0] = v2[0] * k2;
    newDst[1] = v2[1] * k2;
    newDst[2] = v2[2] * k2;
    return newDst;
  }
  const scale = mulScalar;
  function divScalar(v2, k2, dst) {
    const newDst = dst ?? new Ctor(3);
    newDst[0] = v2[0] / k2;
    newDst[1] = v2[1] / k2;
    newDst[2] = v2[2] / k2;
    return newDst;
  }
  function inverse(v2, dst) {
    const newDst = dst ?? new Ctor(3);
    newDst[0] = 1 / v2[0];
    newDst[1] = 1 / v2[1];
    newDst[2] = 1 / v2[2];
    return newDst;
  }
  const invert = inverse;
  function cross2(a2, b2, dst) {
    const newDst = dst ?? new Ctor(3);
    const t1 = a2[2] * b2[0] - a2[0] * b2[2];
    const t22 = a2[0] * b2[1] - a2[1] * b2[0];
    newDst[0] = a2[1] * b2[2] - a2[2] * b2[1];
    newDst[1] = t1;
    newDst[2] = t22;
    return newDst;
  }
  function dot(a2, b2) {
    return a2[0] * b2[0] + a2[1] * b2[1] + a2[2] * b2[2];
  }
  function length(v2) {
    const v0 = v2[0];
    const v1 = v2[1];
    const v22 = v2[2];
    return Math.sqrt(v0 * v0 + v1 * v1 + v22 * v22);
  }
  const len = length;
  function lengthSq(v2) {
    const v0 = v2[0];
    const v1 = v2[1];
    const v22 = v2[2];
    return v0 * v0 + v1 * v1 + v22 * v22;
  }
  const lenSq = lengthSq;
  function distance(a2, b2) {
    const dx = a2[0] - b2[0];
    const dy = a2[1] - b2[1];
    const dz = a2[2] - b2[2];
    return Math.sqrt(dx * dx + dy * dy + dz * dz);
  }
  const dist = distance;
  function distanceSq(a2, b2) {
    const dx = a2[0] - b2[0];
    const dy = a2[1] - b2[1];
    const dz = a2[2] - b2[2];
    return dx * dx + dy * dy + dz * dz;
  }
  const distSq = distanceSq;
  function normalize(v2, dst) {
    const newDst = dst ?? new Ctor(3);
    const v0 = v2[0];
    const v1 = v2[1];
    const v22 = v2[2];
    const len2 = Math.sqrt(v0 * v0 + v1 * v1 + v22 * v22);
    if (len2 > 1e-5) {
      newDst[0] = v0 / len2;
      newDst[1] = v1 / len2;
      newDst[2] = v22 / len2;
    } else {
      newDst[0] = 0;
      newDst[1] = 0;
      newDst[2] = 0;
    }
    return newDst;
  }
  function negate(v2, dst) {
    const newDst = dst ?? new Ctor(3);
    newDst[0] = -v2[0];
    newDst[1] = -v2[1];
    newDst[2] = -v2[2];
    return newDst;
  }
  function copy(v2, dst) {
    const newDst = dst ?? new Ctor(3);
    newDst[0] = v2[0];
    newDst[1] = v2[1];
    newDst[2] = v2[2];
    return newDst;
  }
  const clone = copy;
  function multiply(a2, b2, dst) {
    const newDst = dst ?? new Ctor(3);
    newDst[0] = a2[0] * b2[0];
    newDst[1] = a2[1] * b2[1];
    newDst[2] = a2[2] * b2[2];
    return newDst;
  }
  const mul = multiply;
  function divide(a2, b2, dst) {
    const newDst = dst ?? new Ctor(3);
    newDst[0] = a2[0] / b2[0];
    newDst[1] = a2[1] / b2[1];
    newDst[2] = a2[2] / b2[2];
    return newDst;
  }
  const div = divide;
  function random(scale2 = 1, dst) {
    const newDst = dst ?? new Ctor(3);
    const angle2 = Math.random() * 2 * Math.PI;
    const z2 = Math.random() * 2 - 1;
    const zScale = Math.sqrt(1 - z2 * z2) * scale2;
    newDst[0] = Math.cos(angle2) * zScale;
    newDst[1] = Math.sin(angle2) * zScale;
    newDst[2] = z2 * scale2;
    return newDst;
  }
  function zero(dst) {
    const newDst = dst ?? new Ctor(3);
    newDst[0] = 0;
    newDst[1] = 0;
    newDst[2] = 0;
    return newDst;
  }
  function transformMat4(v2, m2, dst) {
    const newDst = dst ?? new Ctor(3);
    const x2 = v2[0];
    const y2 = v2[1];
    const z2 = v2[2];
    const w2 = m2[3] * x2 + m2[7] * y2 + m2[11] * z2 + m2[15] || 1;
    newDst[0] = (m2[0] * x2 + m2[4] * y2 + m2[8] * z2 + m2[12]) / w2;
    newDst[1] = (m2[1] * x2 + m2[5] * y2 + m2[9] * z2 + m2[13]) / w2;
    newDst[2] = (m2[2] * x2 + m2[6] * y2 + m2[10] * z2 + m2[14]) / w2;
    return newDst;
  }
  function transformMat4Upper3x3(v2, m2, dst) {
    const newDst = dst ?? new Ctor(3);
    const v0 = v2[0];
    const v1 = v2[1];
    const v22 = v2[2];
    newDst[0] = v0 * m2[0 * 4 + 0] + v1 * m2[1 * 4 + 0] + v22 * m2[2 * 4 + 0];
    newDst[1] = v0 * m2[0 * 4 + 1] + v1 * m2[1 * 4 + 1] + v22 * m2[2 * 4 + 1];
    newDst[2] = v0 * m2[0 * 4 + 2] + v1 * m2[1 * 4 + 2] + v22 * m2[2 * 4 + 2];
    return newDst;
  }
  function transformMat3(v2, m2, dst) {
    const newDst = dst ?? new Ctor(3);
    const x2 = v2[0];
    const y2 = v2[1];
    const z2 = v2[2];
    newDst[0] = x2 * m2[0] + y2 * m2[4] + z2 * m2[8];
    newDst[1] = x2 * m2[1] + y2 * m2[5] + z2 * m2[9];
    newDst[2] = x2 * m2[2] + y2 * m2[6] + z2 * m2[10];
    return newDst;
  }
  function transformQuat(v2, q2, dst) {
    const newDst = dst ?? new Ctor(3);
    const qx = q2[0];
    const qy = q2[1];
    const qz = q2[2];
    const w2 = q2[3] * 2;
    const x2 = v2[0];
    const y2 = v2[1];
    const z2 = v2[2];
    const uvX = qy * z2 - qz * y2;
    const uvY = qz * x2 - qx * z2;
    const uvZ = qx * y2 - qy * x2;
    newDst[0] = x2 + uvX * w2 + (qy * uvZ - qz * uvY) * 2;
    newDst[1] = y2 + uvY * w2 + (qz * uvX - qx * uvZ) * 2;
    newDst[2] = z2 + uvZ * w2 + (qx * uvY - qy * uvX) * 2;
    return newDst;
  }
  function getTranslation(m2, dst) {
    const newDst = dst ?? new Ctor(3);
    newDst[0] = m2[12];
    newDst[1] = m2[13];
    newDst[2] = m2[14];
    return newDst;
  }
  function getAxis(m2, axis, dst) {
    const newDst = dst ?? new Ctor(3);
    const off = axis * 4;
    newDst[0] = m2[off + 0];
    newDst[1] = m2[off + 1];
    newDst[2] = m2[off + 2];
    return newDst;
  }
  function getScaling(m2, dst) {
    const newDst = dst ?? new Ctor(3);
    const xx = m2[0];
    const xy = m2[1];
    const xz = m2[2];
    const yx = m2[4];
    const yy = m2[5];
    const yz = m2[6];
    const zx = m2[8];
    const zy = m2[9];
    const zz = m2[10];
    newDst[0] = Math.sqrt(xx * xx + xy * xy + xz * xz);
    newDst[1] = Math.sqrt(yx * yx + yy * yy + yz * yz);
    newDst[2] = Math.sqrt(zx * zx + zy * zy + zz * zz);
    return newDst;
  }
  function rotateX(a2, b2, rad, dst) {
    const newDst = dst ?? new Ctor(3);
    const p2 = [];
    const r = [];
    p2[0] = a2[0] - b2[0];
    p2[1] = a2[1] - b2[1];
    p2[2] = a2[2] - b2[2];
    r[0] = p2[0];
    r[1] = p2[1] * Math.cos(rad) - p2[2] * Math.sin(rad);
    r[2] = p2[1] * Math.sin(rad) + p2[2] * Math.cos(rad);
    newDst[0] = r[0] + b2[0];
    newDst[1] = r[1] + b2[1];
    newDst[2] = r[2] + b2[2];
    return newDst;
  }
  function rotateY(a2, b2, rad, dst) {
    const newDst = dst ?? new Ctor(3);
    const p2 = [];
    const r = [];
    p2[0] = a2[0] - b2[0];
    p2[1] = a2[1] - b2[1];
    p2[2] = a2[2] - b2[2];
    r[0] = p2[2] * Math.sin(rad) + p2[0] * Math.cos(rad);
    r[1] = p2[1];
    r[2] = p2[2] * Math.cos(rad) - p2[0] * Math.sin(rad);
    newDst[0] = r[0] + b2[0];
    newDst[1] = r[1] + b2[1];
    newDst[2] = r[2] + b2[2];
    return newDst;
  }
  function rotateZ(a2, b2, rad, dst) {
    const newDst = dst ?? new Ctor(3);
    const p2 = [];
    const r = [];
    p2[0] = a2[0] - b2[0];
    p2[1] = a2[1] - b2[1];
    p2[2] = a2[2] - b2[2];
    r[0] = p2[0] * Math.cos(rad) - p2[1] * Math.sin(rad);
    r[1] = p2[0] * Math.sin(rad) + p2[1] * Math.cos(rad);
    r[2] = p2[2];
    newDst[0] = r[0] + b2[0];
    newDst[1] = r[1] + b2[1];
    newDst[2] = r[2] + b2[2];
    return newDst;
  }
  function setLength(a2, len2, dst) {
    const newDst = dst ?? new Ctor(3);
    normalize(a2, newDst);
    return mulScalar(newDst, len2, newDst);
  }
  function truncate(a2, maxLen, dst) {
    const newDst = dst ?? new Ctor(3);
    if (length(a2) > maxLen) {
      return setLength(a2, maxLen, newDst);
    }
    return copy(a2, newDst);
  }
  function midpoint(a2, b2, dst) {
    const newDst = dst ?? new Ctor(3);
    return lerp(a2, b2, 0.5, newDst);
  }
  return {
    create,
    fromValues,
    set,
    ceil,
    floor,
    round,
    clamp,
    add,
    addScaled,
    angle,
    subtract,
    sub,
    equalsApproximately,
    equals,
    lerp,
    lerpV,
    max,
    min,
    mulScalar,
    scale,
    divScalar,
    inverse,
    invert,
    cross: cross2,
    dot,
    length,
    len,
    lengthSq,
    lenSq,
    distance,
    dist,
    distanceSq,
    distSq,
    normalize,
    negate,
    copy,
    clone,
    multiply,
    mul,
    divide,
    div,
    random,
    zero,
    transformMat4,
    transformMat4Upper3x3,
    transformMat3,
    transformQuat,
    getTranslation,
    getAxis,
    getScaling,
    rotateX,
    rotateY,
    rotateZ,
    setLength,
    truncate,
    midpoint
  };
}
const cache$4 = /* @__PURE__ */ new Map();
function getAPI$4(Ctor) {
  let api = cache$4.get(Ctor);
  if (!api) {
    api = getAPIImpl$4(Ctor);
    cache$4.set(Ctor, api);
  }
  return api;
}
function getAPIImpl$3(Ctor) {
  const vec2 = getAPI$5(Ctor);
  const vec3 = getAPI$4(Ctor);
  function create(v0, v1, v2, v3, v4, v5, v6, v7, v8) {
    const newDst = new Ctor(12);
    newDst[3] = 0;
    newDst[7] = 0;
    newDst[11] = 0;
    if (v0 !== void 0) {
      newDst[0] = v0;
      if (v1 !== void 0) {
        newDst[1] = v1;
        if (v2 !== void 0) {
          newDst[2] = v2;
          if (v3 !== void 0) {
            newDst[4] = v3;
            if (v4 !== void 0) {
              newDst[5] = v4;
              if (v5 !== void 0) {
                newDst[6] = v5;
                if (v6 !== void 0) {
                  newDst[8] = v6;
                  if (v7 !== void 0) {
                    newDst[9] = v7;
                    if (v8 !== void 0) {
                      newDst[10] = v8;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    return newDst;
  }
  function set(v0, v1, v2, v3, v4, v5, v6, v7, v8, dst) {
    const newDst = dst ?? new Ctor(12);
    newDst[0] = v0;
    newDst[1] = v1;
    newDst[2] = v2;
    newDst[3] = 0;
    newDst[4] = v3;
    newDst[5] = v4;
    newDst[6] = v5;
    newDst[7] = 0;
    newDst[8] = v6;
    newDst[9] = v7;
    newDst[10] = v8;
    newDst[11] = 0;
    return newDst;
  }
  function fromMat4(m4, dst) {
    const newDst = dst ?? new Ctor(12);
    newDst[0] = m4[0];
    newDst[1] = m4[1];
    newDst[2] = m4[2];
    newDst[3] = 0;
    newDst[4] = m4[4];
    newDst[5] = m4[5];
    newDst[6] = m4[6];
    newDst[7] = 0;
    newDst[8] = m4[8];
    newDst[9] = m4[9];
    newDst[10] = m4[10];
    newDst[11] = 0;
    return newDst;
  }
  function fromQuat(q2, dst) {
    const newDst = dst ?? new Ctor(12);
    const x2 = q2[0];
    const y2 = q2[1];
    const z2 = q2[2];
    const w2 = q2[3];
    const x22 = x2 + x2;
    const y22 = y2 + y2;
    const z22 = z2 + z2;
    const xx = x2 * x22;
    const yx = y2 * x22;
    const yy = y2 * y22;
    const zx = z2 * x22;
    const zy = z2 * y22;
    const zz = z2 * z22;
    const wx = w2 * x22;
    const wy = w2 * y22;
    const wz = w2 * z22;
    newDst[0] = 1 - yy - zz;
    newDst[1] = yx + wz;
    newDst[2] = zx - wy;
    newDst[3] = 0;
    newDst[4] = yx - wz;
    newDst[5] = 1 - xx - zz;
    newDst[6] = zy + wx;
    newDst[7] = 0;
    newDst[8] = zx + wy;
    newDst[9] = zy - wx;
    newDst[10] = 1 - xx - yy;
    newDst[11] = 0;
    return newDst;
  }
  function negate(m2, dst) {
    const newDst = dst ?? new Ctor(12);
    newDst[0] = -m2[0];
    newDst[1] = -m2[1];
    newDst[2] = -m2[2];
    newDst[4] = -m2[4];
    newDst[5] = -m2[5];
    newDst[6] = -m2[6];
    newDst[8] = -m2[8];
    newDst[9] = -m2[9];
    newDst[10] = -m2[10];
    return newDst;
  }
  function multiplyScalar(m2, s2, dst) {
    const newDst = dst ?? new Ctor(12);
    newDst[0] = m2[0] * s2;
    newDst[1] = m2[1] * s2;
    newDst[2] = m2[2] * s2;
    newDst[4] = m2[4] * s2;
    newDst[5] = m2[5] * s2;
    newDst[6] = m2[6] * s2;
    newDst[8] = m2[8] * s2;
    newDst[9] = m2[9] * s2;
    newDst[10] = m2[10] * s2;
    return newDst;
  }
  const mulScalar = multiplyScalar;
  function add(a2, b2, dst) {
    const newDst = dst ?? new Ctor(12);
    newDst[0] = a2[0] + b2[0];
    newDst[1] = a2[1] + b2[1];
    newDst[2] = a2[2] + b2[2];
    newDst[4] = a2[4] + b2[4];
    newDst[5] = a2[5] + b2[5];
    newDst[6] = a2[6] + b2[6];
    newDst[8] = a2[8] + b2[8];
    newDst[9] = a2[9] + b2[9];
    newDst[10] = a2[10] + b2[10];
    return newDst;
  }
  function copy(m2, dst) {
    const newDst = dst ?? new Ctor(12);
    newDst[0] = m2[0];
    newDst[1] = m2[1];
    newDst[2] = m2[2];
    newDst[4] = m2[4];
    newDst[5] = m2[5];
    newDst[6] = m2[6];
    newDst[8] = m2[8];
    newDst[9] = m2[9];
    newDst[10] = m2[10];
    return newDst;
  }
  const clone = copy;
  function equalsApproximately(a2, b2) {
    return Math.abs(a2[0] - b2[0]) < EPSILON && Math.abs(a2[1] - b2[1]) < EPSILON && Math.abs(a2[2] - b2[2]) < EPSILON && Math.abs(a2[4] - b2[4]) < EPSILON && Math.abs(a2[5] - b2[5]) < EPSILON && Math.abs(a2[6] - b2[6]) < EPSILON && Math.abs(a2[8] - b2[8]) < EPSILON && Math.abs(a2[9] - b2[9]) < EPSILON && Math.abs(a2[10] - b2[10]) < EPSILON;
  }
  function equals(a2, b2) {
    return a2[0] === b2[0] && a2[1] === b2[1] && a2[2] === b2[2] && a2[4] === b2[4] && a2[5] === b2[5] && a2[6] === b2[6] && a2[8] === b2[8] && a2[9] === b2[9] && a2[10] === b2[10];
  }
  function identity(dst) {
    const newDst = dst ?? new Ctor(12);
    newDst[0] = 1;
    newDst[1] = 0;
    newDst[2] = 0;
    newDst[4] = 0;
    newDst[5] = 1;
    newDst[6] = 0;
    newDst[8] = 0;
    newDst[9] = 0;
    newDst[10] = 1;
    return newDst;
  }
  function transpose(m2, dst) {
    const newDst = dst ?? new Ctor(12);
    if (newDst === m2) {
      let t12;
      t12 = m2[1];
      m2[1] = m2[4];
      m2[4] = t12;
      t12 = m2[2];
      m2[2] = m2[8];
      m2[8] = t12;
      t12 = m2[6];
      m2[6] = m2[9];
      m2[9] = t12;
      return newDst;
    }
    const m00 = m2[0 * 4 + 0];
    const m01 = m2[0 * 4 + 1];
    const m02 = m2[0 * 4 + 2];
    const m10 = m2[1 * 4 + 0];
    const m11 = m2[1 * 4 + 1];
    const m12 = m2[1 * 4 + 2];
    const m20 = m2[2 * 4 + 0];
    const m21 = m2[2 * 4 + 1];
    const m22 = m2[2 * 4 + 2];
    newDst[0] = m00;
    newDst[1] = m10;
    newDst[2] = m20;
    newDst[4] = m01;
    newDst[5] = m11;
    newDst[6] = m21;
    newDst[8] = m02;
    newDst[9] = m12;
    newDst[10] = m22;
    return newDst;
  }
  function inverse(m2, dst) {
    const newDst = dst ?? new Ctor(12);
    const m00 = m2[0 * 4 + 0];
    const m01 = m2[0 * 4 + 1];
    const m02 = m2[0 * 4 + 2];
    const m10 = m2[1 * 4 + 0];
    const m11 = m2[1 * 4 + 1];
    const m12 = m2[1 * 4 + 2];
    const m20 = m2[2 * 4 + 0];
    const m21 = m2[2 * 4 + 1];
    const m22 = m2[2 * 4 + 2];
    const b01 = m22 * m11 - m12 * m21;
    const b11 = -m22 * m10 + m12 * m20;
    const b21 = m21 * m10 - m11 * m20;
    const invDet = 1 / (m00 * b01 + m01 * b11 + m02 * b21);
    newDst[0] = b01 * invDet;
    newDst[1] = (-m22 * m01 + m02 * m21) * invDet;
    newDst[2] = (m12 * m01 - m02 * m11) * invDet;
    newDst[4] = b11 * invDet;
    newDst[5] = (m22 * m00 - m02 * m20) * invDet;
    newDst[6] = (-m12 * m00 + m02 * m10) * invDet;
    newDst[8] = b21 * invDet;
    newDst[9] = (-m21 * m00 + m01 * m20) * invDet;
    newDst[10] = (m11 * m00 - m01 * m10) * invDet;
    return newDst;
  }
  function determinant(m2) {
    const m00 = m2[0 * 4 + 0];
    const m01 = m2[0 * 4 + 1];
    const m02 = m2[0 * 4 + 2];
    const m10 = m2[1 * 4 + 0];
    const m11 = m2[1 * 4 + 1];
    const m12 = m2[1 * 4 + 2];
    const m20 = m2[2 * 4 + 0];
    const m21 = m2[2 * 4 + 1];
    const m22 = m2[2 * 4 + 2];
    return m00 * (m11 * m22 - m21 * m12) - m10 * (m01 * m22 - m21 * m02) + m20 * (m01 * m12 - m11 * m02);
  }
  const invert = inverse;
  function multiply(a2, b2, dst) {
    const newDst = dst ?? new Ctor(12);
    const a00 = a2[0];
    const a01 = a2[1];
    const a02 = a2[2];
    const a10 = a2[4 + 0];
    const a11 = a2[4 + 1];
    const a12 = a2[4 + 2];
    const a20 = a2[8 + 0];
    const a21 = a2[8 + 1];
    const a22 = a2[8 + 2];
    const b00 = b2[0];
    const b01 = b2[1];
    const b02 = b2[2];
    const b10 = b2[4 + 0];
    const b11 = b2[4 + 1];
    const b12 = b2[4 + 2];
    const b20 = b2[8 + 0];
    const b21 = b2[8 + 1];
    const b22 = b2[8 + 2];
    newDst[0] = a00 * b00 + a10 * b01 + a20 * b02;
    newDst[1] = a01 * b00 + a11 * b01 + a21 * b02;
    newDst[2] = a02 * b00 + a12 * b01 + a22 * b02;
    newDst[4] = a00 * b10 + a10 * b11 + a20 * b12;
    newDst[5] = a01 * b10 + a11 * b11 + a21 * b12;
    newDst[6] = a02 * b10 + a12 * b11 + a22 * b12;
    newDst[8] = a00 * b20 + a10 * b21 + a20 * b22;
    newDst[9] = a01 * b20 + a11 * b21 + a21 * b22;
    newDst[10] = a02 * b20 + a12 * b21 + a22 * b22;
    return newDst;
  }
  const mul = multiply;
  function setTranslation(a2, v2, dst) {
    const newDst = dst ?? identity();
    if (a2 !== newDst) {
      newDst[0] = a2[0];
      newDst[1] = a2[1];
      newDst[2] = a2[2];
      newDst[4] = a2[4];
      newDst[5] = a2[5];
      newDst[6] = a2[6];
    }
    newDst[8] = v2[0];
    newDst[9] = v2[1];
    newDst[10] = 1;
    return newDst;
  }
  function getTranslation(m2, dst) {
    const newDst = dst ?? vec2.create();
    newDst[0] = m2[8];
    newDst[1] = m2[9];
    return newDst;
  }
  function getAxis(m2, axis, dst) {
    const newDst = dst ?? vec2.create();
    const off = axis * 4;
    newDst[0] = m2[off + 0];
    newDst[1] = m2[off + 1];
    return newDst;
  }
  function setAxis(m2, v2, axis, dst) {
    const newDst = dst === m2 ? m2 : copy(m2, dst);
    const off = axis * 4;
    newDst[off + 0] = v2[0];
    newDst[off + 1] = v2[1];
    return newDst;
  }
  function getScaling(m2, dst) {
    const newDst = dst ?? vec2.create();
    const xx = m2[0];
    const xy = m2[1];
    const yx = m2[4];
    const yy = m2[5];
    newDst[0] = Math.sqrt(xx * xx + xy * xy);
    newDst[1] = Math.sqrt(yx * yx + yy * yy);
    return newDst;
  }
  function get3DScaling(m2, dst) {
    const newDst = dst ?? vec3.create();
    const xx = m2[0];
    const xy = m2[1];
    const xz = m2[2];
    const yx = m2[4];
    const yy = m2[5];
    const yz = m2[6];
    const zx = m2[8];
    const zy = m2[9];
    const zz = m2[10];
    newDst[0] = Math.sqrt(xx * xx + xy * xy + xz * xz);
    newDst[1] = Math.sqrt(yx * yx + yy * yy + yz * yz);
    newDst[2] = Math.sqrt(zx * zx + zy * zy + zz * zz);
    return newDst;
  }
  function translation(v2, dst) {
    const newDst = dst ?? new Ctor(12);
    newDst[0] = 1;
    newDst[1] = 0;
    newDst[2] = 0;
    newDst[4] = 0;
    newDst[5] = 1;
    newDst[6] = 0;
    newDst[8] = v2[0];
    newDst[9] = v2[1];
    newDst[10] = 1;
    return newDst;
  }
  function translate(m2, v2, dst) {
    const newDst = dst ?? new Ctor(12);
    const v0 = v2[0];
    const v1 = v2[1];
    const m00 = m2[0];
    const m01 = m2[1];
    const m02 = m2[2];
    const m10 = m2[1 * 4 + 0];
    const m11 = m2[1 * 4 + 1];
    const m12 = m2[1 * 4 + 2];
    const m20 = m2[2 * 4 + 0];
    const m21 = m2[2 * 4 + 1];
    const m22 = m2[2 * 4 + 2];
    if (m2 !== newDst) {
      newDst[0] = m00;
      newDst[1] = m01;
      newDst[2] = m02;
      newDst[4] = m10;
      newDst[5] = m11;
      newDst[6] = m12;
    }
    newDst[8] = m00 * v0 + m10 * v1 + m20;
    newDst[9] = m01 * v0 + m11 * v1 + m21;
    newDst[10] = m02 * v0 + m12 * v1 + m22;
    return newDst;
  }
  function rotation(angleInRadians, dst) {
    const newDst = dst ?? new Ctor(12);
    const c2 = Math.cos(angleInRadians);
    const s2 = Math.sin(angleInRadians);
    newDst[0] = c2;
    newDst[1] = s2;
    newDst[2] = 0;
    newDst[4] = -s2;
    newDst[5] = c2;
    newDst[6] = 0;
    newDst[8] = 0;
    newDst[9] = 0;
    newDst[10] = 1;
    return newDst;
  }
  function rotate(m2, angleInRadians, dst) {
    const newDst = dst ?? new Ctor(12);
    const m00 = m2[0 * 4 + 0];
    const m01 = m2[0 * 4 + 1];
    const m02 = m2[0 * 4 + 2];
    const m10 = m2[1 * 4 + 0];
    const m11 = m2[1 * 4 + 1];
    const m12 = m2[1 * 4 + 2];
    const c2 = Math.cos(angleInRadians);
    const s2 = Math.sin(angleInRadians);
    newDst[0] = c2 * m00 + s2 * m10;
    newDst[1] = c2 * m01 + s2 * m11;
    newDst[2] = c2 * m02 + s2 * m12;
    newDst[4] = c2 * m10 - s2 * m00;
    newDst[5] = c2 * m11 - s2 * m01;
    newDst[6] = c2 * m12 - s2 * m02;
    if (m2 !== newDst) {
      newDst[8] = m2[8];
      newDst[9] = m2[9];
      newDst[10] = m2[10];
    }
    return newDst;
  }
  function rotationX(angleInRadians, dst) {
    const newDst = dst ?? new Ctor(12);
    const c2 = Math.cos(angleInRadians);
    const s2 = Math.sin(angleInRadians);
    newDst[0] = 1;
    newDst[1] = 0;
    newDst[2] = 0;
    newDst[4] = 0;
    newDst[5] = c2;
    newDst[6] = s2;
    newDst[8] = 0;
    newDst[9] = -s2;
    newDst[10] = c2;
    return newDst;
  }
  function rotateX(m2, angleInRadians, dst) {
    const newDst = dst ?? new Ctor(12);
    const m10 = m2[4];
    const m11 = m2[5];
    const m12 = m2[6];
    const m20 = m2[8];
    const m21 = m2[9];
    const m22 = m2[10];
    const c2 = Math.cos(angleInRadians);
    const s2 = Math.sin(angleInRadians);
    newDst[4] = c2 * m10 + s2 * m20;
    newDst[5] = c2 * m11 + s2 * m21;
    newDst[6] = c2 * m12 + s2 * m22;
    newDst[8] = c2 * m20 - s2 * m10;
    newDst[9] = c2 * m21 - s2 * m11;
    newDst[10] = c2 * m22 - s2 * m12;
    if (m2 !== newDst) {
      newDst[0] = m2[0];
      newDst[1] = m2[1];
      newDst[2] = m2[2];
    }
    return newDst;
  }
  function rotationY(angleInRadians, dst) {
    const newDst = dst ?? new Ctor(12);
    const c2 = Math.cos(angleInRadians);
    const s2 = Math.sin(angleInRadians);
    newDst[0] = c2;
    newDst[1] = 0;
    newDst[2] = -s2;
    newDst[4] = 0;
    newDst[5] = 1;
    newDst[6] = 0;
    newDst[8] = s2;
    newDst[9] = 0;
    newDst[10] = c2;
    return newDst;
  }
  function rotateY(m2, angleInRadians, dst) {
    const newDst = dst ?? new Ctor(12);
    const m00 = m2[0 * 4 + 0];
    const m01 = m2[0 * 4 + 1];
    const m02 = m2[0 * 4 + 2];
    const m20 = m2[2 * 4 + 0];
    const m21 = m2[2 * 4 + 1];
    const m22 = m2[2 * 4 + 2];
    const c2 = Math.cos(angleInRadians);
    const s2 = Math.sin(angleInRadians);
    newDst[0] = c2 * m00 - s2 * m20;
    newDst[1] = c2 * m01 - s2 * m21;
    newDst[2] = c2 * m02 - s2 * m22;
    newDst[8] = c2 * m20 + s2 * m00;
    newDst[9] = c2 * m21 + s2 * m01;
    newDst[10] = c2 * m22 + s2 * m02;
    if (m2 !== newDst) {
      newDst[4] = m2[4];
      newDst[5] = m2[5];
      newDst[6] = m2[6];
    }
    return newDst;
  }
  const rotationZ = rotation;
  const rotateZ = rotate;
  function scaling(v2, dst) {
    const newDst = dst ?? new Ctor(12);
    newDst[0] = v2[0];
    newDst[1] = 0;
    newDst[2] = 0;
    newDst[4] = 0;
    newDst[5] = v2[1];
    newDst[6] = 0;
    newDst[8] = 0;
    newDst[9] = 0;
    newDst[10] = 1;
    return newDst;
  }
  function scale(m2, v2, dst) {
    const newDst = dst ?? new Ctor(12);
    const v0 = v2[0];
    const v1 = v2[1];
    newDst[0] = v0 * m2[0 * 4 + 0];
    newDst[1] = v0 * m2[0 * 4 + 1];
    newDst[2] = v0 * m2[0 * 4 + 2];
    newDst[4] = v1 * m2[1 * 4 + 0];
    newDst[5] = v1 * m2[1 * 4 + 1];
    newDst[6] = v1 * m2[1 * 4 + 2];
    if (m2 !== newDst) {
      newDst[8] = m2[8];
      newDst[9] = m2[9];
      newDst[10] = m2[10];
    }
    return newDst;
  }
  function scaling3D(v2, dst) {
    const newDst = dst ?? new Ctor(12);
    newDst[0] = v2[0];
    newDst[1] = 0;
    newDst[2] = 0;
    newDst[4] = 0;
    newDst[5] = v2[1];
    newDst[6] = 0;
    newDst[8] = 0;
    newDst[9] = 0;
    newDst[10] = v2[2];
    return newDst;
  }
  function scale3D(m2, v2, dst) {
    const newDst = dst ?? new Ctor(12);
    const v0 = v2[0];
    const v1 = v2[1];
    const v22 = v2[2];
    newDst[0] = v0 * m2[0 * 4 + 0];
    newDst[1] = v0 * m2[0 * 4 + 1];
    newDst[2] = v0 * m2[0 * 4 + 2];
    newDst[4] = v1 * m2[1 * 4 + 0];
    newDst[5] = v1 * m2[1 * 4 + 1];
    newDst[6] = v1 * m2[1 * 4 + 2];
    newDst[8] = v22 * m2[2 * 4 + 0];
    newDst[9] = v22 * m2[2 * 4 + 1];
    newDst[10] = v22 * m2[2 * 4 + 2];
    return newDst;
  }
  function uniformScaling(s2, dst) {
    const newDst = dst ?? new Ctor(12);
    newDst[0] = s2;
    newDst[1] = 0;
    newDst[2] = 0;
    newDst[4] = 0;
    newDst[5] = s2;
    newDst[6] = 0;
    newDst[8] = 0;
    newDst[9] = 0;
    newDst[10] = 1;
    return newDst;
  }
  function uniformScale(m2, s2, dst) {
    const newDst = dst ?? new Ctor(12);
    newDst[0] = s2 * m2[0 * 4 + 0];
    newDst[1] = s2 * m2[0 * 4 + 1];
    newDst[2] = s2 * m2[0 * 4 + 2];
    newDst[4] = s2 * m2[1 * 4 + 0];
    newDst[5] = s2 * m2[1 * 4 + 1];
    newDst[6] = s2 * m2[1 * 4 + 2];
    if (m2 !== newDst) {
      newDst[8] = m2[8];
      newDst[9] = m2[9];
      newDst[10] = m2[10];
    }
    return newDst;
  }
  function uniformScaling3D(s2, dst) {
    const newDst = dst ?? new Ctor(12);
    newDst[0] = s2;
    newDst[1] = 0;
    newDst[2] = 0;
    newDst[4] = 0;
    newDst[5] = s2;
    newDst[6] = 0;
    newDst[8] = 0;
    newDst[9] = 0;
    newDst[10] = s2;
    return newDst;
  }
  function uniformScale3D(m2, s2, dst) {
    const newDst = dst ?? new Ctor(12);
    newDst[0] = s2 * m2[0 * 4 + 0];
    newDst[1] = s2 * m2[0 * 4 + 1];
    newDst[2] = s2 * m2[0 * 4 + 2];
    newDst[4] = s2 * m2[1 * 4 + 0];
    newDst[5] = s2 * m2[1 * 4 + 1];
    newDst[6] = s2 * m2[1 * 4 + 2];
    newDst[8] = s2 * m2[2 * 4 + 0];
    newDst[9] = s2 * m2[2 * 4 + 1];
    newDst[10] = s2 * m2[2 * 4 + 2];
    return newDst;
  }
  return {
    add,
    clone,
    copy,
    create,
    determinant,
    equals,
    equalsApproximately,
    fromMat4,
    fromQuat,
    get3DScaling,
    getAxis,
    getScaling,
    getTranslation,
    identity,
    inverse,
    invert,
    mul,
    mulScalar,
    multiply,
    multiplyScalar,
    negate,
    rotate,
    rotateX,
    rotateY,
    rotateZ,
    rotation,
    rotationX,
    rotationY,
    rotationZ,
    scale,
    scale3D,
    scaling,
    scaling3D,
    set,
    setAxis,
    setTranslation,
    translate,
    translation,
    transpose,
    uniformScale,
    uniformScale3D,
    uniformScaling,
    uniformScaling3D
  };
}
const cache$3 = /* @__PURE__ */ new Map();
function getAPI$3(Ctor) {
  let api = cache$3.get(Ctor);
  if (!api) {
    api = getAPIImpl$3(Ctor);
    cache$3.set(Ctor, api);
  }
  return api;
}
function getAPIImpl$2(Ctor) {
  const vec3 = getAPI$4(Ctor);
  function create(v0, v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11, v12, v13, v14, v15) {
    const newDst = new Ctor(16);
    if (v0 !== void 0) {
      newDst[0] = v0;
      if (v1 !== void 0) {
        newDst[1] = v1;
        if (v2 !== void 0) {
          newDst[2] = v2;
          if (v3 !== void 0) {
            newDst[3] = v3;
            if (v4 !== void 0) {
              newDst[4] = v4;
              if (v5 !== void 0) {
                newDst[5] = v5;
                if (v6 !== void 0) {
                  newDst[6] = v6;
                  if (v7 !== void 0) {
                    newDst[7] = v7;
                    if (v8 !== void 0) {
                      newDst[8] = v8;
                      if (v9 !== void 0) {
                        newDst[9] = v9;
                        if (v10 !== void 0) {
                          newDst[10] = v10;
                          if (v11 !== void 0) {
                            newDst[11] = v11;
                            if (v12 !== void 0) {
                              newDst[12] = v12;
                              if (v13 !== void 0) {
                                newDst[13] = v13;
                                if (v14 !== void 0) {
                                  newDst[14] = v14;
                                  if (v15 !== void 0) {
                                    newDst[15] = v15;
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    return newDst;
  }
  function set(v0, v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11, v12, v13, v14, v15, dst) {
    const newDst = dst ?? new Ctor(16);
    newDst[0] = v0;
    newDst[1] = v1;
    newDst[2] = v2;
    newDst[3] = v3;
    newDst[4] = v4;
    newDst[5] = v5;
    newDst[6] = v6;
    newDst[7] = v7;
    newDst[8] = v8;
    newDst[9] = v9;
    newDst[10] = v10;
    newDst[11] = v11;
    newDst[12] = v12;
    newDst[13] = v13;
    newDst[14] = v14;
    newDst[15] = v15;
    return newDst;
  }
  function fromMat3(m3, dst) {
    const newDst = dst ?? new Ctor(16);
    newDst[0] = m3[0];
    newDst[1] = m3[1];
    newDst[2] = m3[2];
    newDst[3] = 0;
    newDst[4] = m3[4];
    newDst[5] = m3[5];
    newDst[6] = m3[6];
    newDst[7] = 0;
    newDst[8] = m3[8];
    newDst[9] = m3[9];
    newDst[10] = m3[10];
    newDst[11] = 0;
    newDst[12] = 0;
    newDst[13] = 0;
    newDst[14] = 0;
    newDst[15] = 1;
    return newDst;
  }
  function fromQuat(q2, dst) {
    const newDst = dst ?? new Ctor(16);
    const x2 = q2[0];
    const y2 = q2[1];
    const z2 = q2[2];
    const w2 = q2[3];
    const x22 = x2 + x2;
    const y22 = y2 + y2;
    const z22 = z2 + z2;
    const xx = x2 * x22;
    const yx = y2 * x22;
    const yy = y2 * y22;
    const zx = z2 * x22;
    const zy = z2 * y22;
    const zz = z2 * z22;
    const wx = w2 * x22;
    const wy = w2 * y22;
    const wz = w2 * z22;
    newDst[0] = 1 - yy - zz;
    newDst[1] = yx + wz;
    newDst[2] = zx - wy;
    newDst[3] = 0;
    newDst[4] = yx - wz;
    newDst[5] = 1 - xx - zz;
    newDst[6] = zy + wx;
    newDst[7] = 0;
    newDst[8] = zx + wy;
    newDst[9] = zy - wx;
    newDst[10] = 1 - xx - yy;
    newDst[11] = 0;
    newDst[12] = 0;
    newDst[13] = 0;
    newDst[14] = 0;
    newDst[15] = 1;
    return newDst;
  }
  function negate(m2, dst) {
    const newDst = dst ?? new Ctor(16);
    newDst[0] = -m2[0];
    newDst[1] = -m2[1];
    newDst[2] = -m2[2];
    newDst[3] = -m2[3];
    newDst[4] = -m2[4];
    newDst[5] = -m2[5];
    newDst[6] = -m2[6];
    newDst[7] = -m2[7];
    newDst[8] = -m2[8];
    newDst[9] = -m2[9];
    newDst[10] = -m2[10];
    newDst[11] = -m2[11];
    newDst[12] = -m2[12];
    newDst[13] = -m2[13];
    newDst[14] = -m2[14];
    newDst[15] = -m2[15];
    return newDst;
  }
  function add(a2, b2, dst) {
    const newDst = dst ?? new Ctor(16);
    newDst[0] = a2[0] + b2[0];
    newDst[1] = a2[1] + b2[1];
    newDst[2] = a2[2] + b2[2];
    newDst[3] = a2[3] + b2[3];
    newDst[4] = a2[4] + b2[4];
    newDst[5] = a2[5] + b2[5];
    newDst[6] = a2[6] + b2[6];
    newDst[7] = a2[7] + b2[7];
    newDst[8] = a2[8] + b2[8];
    newDst[9] = a2[9] + b2[9];
    newDst[10] = a2[10] + b2[10];
    newDst[11] = a2[11] + b2[11];
    newDst[12] = a2[12] + b2[12];
    newDst[13] = a2[13] + b2[13];
    newDst[14] = a2[14] + b2[14];
    newDst[15] = a2[15] + b2[15];
    return newDst;
  }
  function multiplyScalar(m2, s2, dst) {
    const newDst = dst ?? new Ctor(16);
    newDst[0] = m2[0] * s2;
    newDst[1] = m2[1] * s2;
    newDst[2] = m2[2] * s2;
    newDst[3] = m2[3] * s2;
    newDst[4] = m2[4] * s2;
    newDst[5] = m2[5] * s2;
    newDst[6] = m2[6] * s2;
    newDst[7] = m2[7] * s2;
    newDst[8] = m2[8] * s2;
    newDst[9] = m2[9] * s2;
    newDst[10] = m2[10] * s2;
    newDst[11] = m2[11] * s2;
    newDst[12] = m2[12] * s2;
    newDst[13] = m2[13] * s2;
    newDst[14] = m2[14] * s2;
    newDst[15] = m2[15] * s2;
    return newDst;
  }
  const mulScalar = multiplyScalar;
  function copy(m2, dst) {
    const newDst = dst ?? new Ctor(16);
    newDst[0] = m2[0];
    newDst[1] = m2[1];
    newDst[2] = m2[2];
    newDst[3] = m2[3];
    newDst[4] = m2[4];
    newDst[5] = m2[5];
    newDst[6] = m2[6];
    newDst[7] = m2[7];
    newDst[8] = m2[8];
    newDst[9] = m2[9];
    newDst[10] = m2[10];
    newDst[11] = m2[11];
    newDst[12] = m2[12];
    newDst[13] = m2[13];
    newDst[14] = m2[14];
    newDst[15] = m2[15];
    return newDst;
  }
  const clone = copy;
  function equalsApproximately(a2, b2) {
    return Math.abs(a2[0] - b2[0]) < EPSILON && Math.abs(a2[1] - b2[1]) < EPSILON && Math.abs(a2[2] - b2[2]) < EPSILON && Math.abs(a2[3] - b2[3]) < EPSILON && Math.abs(a2[4] - b2[4]) < EPSILON && Math.abs(a2[5] - b2[5]) < EPSILON && Math.abs(a2[6] - b2[6]) < EPSILON && Math.abs(a2[7] - b2[7]) < EPSILON && Math.abs(a2[8] - b2[8]) < EPSILON && Math.abs(a2[9] - b2[9]) < EPSILON && Math.abs(a2[10] - b2[10]) < EPSILON && Math.abs(a2[11] - b2[11]) < EPSILON && Math.abs(a2[12] - b2[12]) < EPSILON && Math.abs(a2[13] - b2[13]) < EPSILON && Math.abs(a2[14] - b2[14]) < EPSILON && Math.abs(a2[15] - b2[15]) < EPSILON;
  }
  function equals(a2, b2) {
    return a2[0] === b2[0] && a2[1] === b2[1] && a2[2] === b2[2] && a2[3] === b2[3] && a2[4] === b2[4] && a2[5] === b2[5] && a2[6] === b2[6] && a2[7] === b2[7] && a2[8] === b2[8] && a2[9] === b2[9] && a2[10] === b2[10] && a2[11] === b2[11] && a2[12] === b2[12] && a2[13] === b2[13] && a2[14] === b2[14] && a2[15] === b2[15];
  }
  function identity(dst) {
    const newDst = dst ?? new Ctor(16);
    newDst[0] = 1;
    newDst[1] = 0;
    newDst[2] = 0;
    newDst[3] = 0;
    newDst[4] = 0;
    newDst[5] = 1;
    newDst[6] = 0;
    newDst[7] = 0;
    newDst[8] = 0;
    newDst[9] = 0;
    newDst[10] = 1;
    newDst[11] = 0;
    newDst[12] = 0;
    newDst[13] = 0;
    newDst[14] = 0;
    newDst[15] = 1;
    return newDst;
  }
  function transpose(m2, dst) {
    const newDst = dst ?? new Ctor(16);
    if (newDst === m2) {
      let t12;
      t12 = m2[1];
      m2[1] = m2[4];
      m2[4] = t12;
      t12 = m2[2];
      m2[2] = m2[8];
      m2[8] = t12;
      t12 = m2[3];
      m2[3] = m2[12];
      m2[12] = t12;
      t12 = m2[6];
      m2[6] = m2[9];
      m2[9] = t12;
      t12 = m2[7];
      m2[7] = m2[13];
      m2[13] = t12;
      t12 = m2[11];
      m2[11] = m2[14];
      m2[14] = t12;
      return newDst;
    }
    const m00 = m2[0 * 4 + 0];
    const m01 = m2[0 * 4 + 1];
    const m02 = m2[0 * 4 + 2];
    const m03 = m2[0 * 4 + 3];
    const m10 = m2[1 * 4 + 0];
    const m11 = m2[1 * 4 + 1];
    const m12 = m2[1 * 4 + 2];
    const m13 = m2[1 * 4 + 3];
    const m20 = m2[2 * 4 + 0];
    const m21 = m2[2 * 4 + 1];
    const m22 = m2[2 * 4 + 2];
    const m23 = m2[2 * 4 + 3];
    const m30 = m2[3 * 4 + 0];
    const m31 = m2[3 * 4 + 1];
    const m32 = m2[3 * 4 + 2];
    const m33 = m2[3 * 4 + 3];
    newDst[0] = m00;
    newDst[1] = m10;
    newDst[2] = m20;
    newDst[3] = m30;
    newDst[4] = m01;
    newDst[5] = m11;
    newDst[6] = m21;
    newDst[7] = m31;
    newDst[8] = m02;
    newDst[9] = m12;
    newDst[10] = m22;
    newDst[11] = m32;
    newDst[12] = m03;
    newDst[13] = m13;
    newDst[14] = m23;
    newDst[15] = m33;
    return newDst;
  }
  function inverse(m2, dst) {
    const newDst = dst ?? new Ctor(16);
    const m00 = m2[0 * 4 + 0];
    const m01 = m2[0 * 4 + 1];
    const m02 = m2[0 * 4 + 2];
    const m03 = m2[0 * 4 + 3];
    const m10 = m2[1 * 4 + 0];
    const m11 = m2[1 * 4 + 1];
    const m12 = m2[1 * 4 + 2];
    const m13 = m2[1 * 4 + 3];
    const m20 = m2[2 * 4 + 0];
    const m21 = m2[2 * 4 + 1];
    const m22 = m2[2 * 4 + 2];
    const m23 = m2[2 * 4 + 3];
    const m30 = m2[3 * 4 + 0];
    const m31 = m2[3 * 4 + 1];
    const m32 = m2[3 * 4 + 2];
    const m33 = m2[3 * 4 + 3];
    const tmp0 = m22 * m33;
    const tmp1 = m32 * m23;
    const tmp2 = m12 * m33;
    const tmp3 = m32 * m13;
    const tmp4 = m12 * m23;
    const tmp5 = m22 * m13;
    const tmp6 = m02 * m33;
    const tmp7 = m32 * m03;
    const tmp8 = m02 * m23;
    const tmp9 = m22 * m03;
    const tmp10 = m02 * m13;
    const tmp11 = m12 * m03;
    const tmp12 = m20 * m31;
    const tmp13 = m30 * m21;
    const tmp14 = m10 * m31;
    const tmp15 = m30 * m11;
    const tmp16 = m10 * m21;
    const tmp17 = m20 * m11;
    const tmp18 = m00 * m31;
    const tmp19 = m30 * m01;
    const tmp20 = m00 * m21;
    const tmp21 = m20 * m01;
    const tmp22 = m00 * m11;
    const tmp23 = m10 * m01;
    const t0 = tmp0 * m11 + tmp3 * m21 + tmp4 * m31 - (tmp1 * m11 + tmp2 * m21 + tmp5 * m31);
    const t1 = tmp1 * m01 + tmp6 * m21 + tmp9 * m31 - (tmp0 * m01 + tmp7 * m21 + tmp8 * m31);
    const t22 = tmp2 * m01 + tmp7 * m11 + tmp10 * m31 - (tmp3 * m01 + tmp6 * m11 + tmp11 * m31);
    const t32 = tmp5 * m01 + tmp8 * m11 + tmp11 * m21 - (tmp4 * m01 + tmp9 * m11 + tmp10 * m21);
    const d2 = 1 / (m00 * t0 + m10 * t1 + m20 * t22 + m30 * t32);
    newDst[0] = d2 * t0;
    newDst[1] = d2 * t1;
    newDst[2] = d2 * t22;
    newDst[3] = d2 * t32;
    newDst[4] = d2 * (tmp1 * m10 + tmp2 * m20 + tmp5 * m30 - (tmp0 * m10 + tmp3 * m20 + tmp4 * m30));
    newDst[5] = d2 * (tmp0 * m00 + tmp7 * m20 + tmp8 * m30 - (tmp1 * m00 + tmp6 * m20 + tmp9 * m30));
    newDst[6] = d2 * (tmp3 * m00 + tmp6 * m10 + tmp11 * m30 - (tmp2 * m00 + tmp7 * m10 + tmp10 * m30));
    newDst[7] = d2 * (tmp4 * m00 + tmp9 * m10 + tmp10 * m20 - (tmp5 * m00 + tmp8 * m10 + tmp11 * m20));
    newDst[8] = d2 * (tmp12 * m13 + tmp15 * m23 + tmp16 * m33 - (tmp13 * m13 + tmp14 * m23 + tmp17 * m33));
    newDst[9] = d2 * (tmp13 * m03 + tmp18 * m23 + tmp21 * m33 - (tmp12 * m03 + tmp19 * m23 + tmp20 * m33));
    newDst[10] = d2 * (tmp14 * m03 + tmp19 * m13 + tmp22 * m33 - (tmp15 * m03 + tmp18 * m13 + tmp23 * m33));
    newDst[11] = d2 * (tmp17 * m03 + tmp20 * m13 + tmp23 * m23 - (tmp16 * m03 + tmp21 * m13 + tmp22 * m23));
    newDst[12] = d2 * (tmp14 * m22 + tmp17 * m32 + tmp13 * m12 - (tmp16 * m32 + tmp12 * m12 + tmp15 * m22));
    newDst[13] = d2 * (tmp20 * m32 + tmp12 * m02 + tmp19 * m22 - (tmp18 * m22 + tmp21 * m32 + tmp13 * m02));
    newDst[14] = d2 * (tmp18 * m12 + tmp23 * m32 + tmp15 * m02 - (tmp22 * m32 + tmp14 * m02 + tmp19 * m12));
    newDst[15] = d2 * (tmp22 * m22 + tmp16 * m02 + tmp21 * m12 - (tmp20 * m12 + tmp23 * m22 + tmp17 * m02));
    return newDst;
  }
  function determinant(m2) {
    const m00 = m2[0 * 4 + 0];
    const m01 = m2[0 * 4 + 1];
    const m02 = m2[0 * 4 + 2];
    const m03 = m2[0 * 4 + 3];
    const m10 = m2[1 * 4 + 0];
    const m11 = m2[1 * 4 + 1];
    const m12 = m2[1 * 4 + 2];
    const m13 = m2[1 * 4 + 3];
    const m20 = m2[2 * 4 + 0];
    const m21 = m2[2 * 4 + 1];
    const m22 = m2[2 * 4 + 2];
    const m23 = m2[2 * 4 + 3];
    const m30 = m2[3 * 4 + 0];
    const m31 = m2[3 * 4 + 1];
    const m32 = m2[3 * 4 + 2];
    const m33 = m2[3 * 4 + 3];
    const tmp0 = m22 * m33;
    const tmp1 = m32 * m23;
    const tmp2 = m12 * m33;
    const tmp3 = m32 * m13;
    const tmp4 = m12 * m23;
    const tmp5 = m22 * m13;
    const tmp6 = m02 * m33;
    const tmp7 = m32 * m03;
    const tmp8 = m02 * m23;
    const tmp9 = m22 * m03;
    const tmp10 = m02 * m13;
    const tmp11 = m12 * m03;
    const t0 = tmp0 * m11 + tmp3 * m21 + tmp4 * m31 - (tmp1 * m11 + tmp2 * m21 + tmp5 * m31);
    const t1 = tmp1 * m01 + tmp6 * m21 + tmp9 * m31 - (tmp0 * m01 + tmp7 * m21 + tmp8 * m31);
    const t22 = tmp2 * m01 + tmp7 * m11 + tmp10 * m31 - (tmp3 * m01 + tmp6 * m11 + tmp11 * m31);
    const t32 = tmp5 * m01 + tmp8 * m11 + tmp11 * m21 - (tmp4 * m01 + tmp9 * m11 + tmp10 * m21);
    return m00 * t0 + m10 * t1 + m20 * t22 + m30 * t32;
  }
  const invert = inverse;
  function multiply(a2, b2, dst) {
    const newDst = dst ?? new Ctor(16);
    const a00 = a2[0];
    const a01 = a2[1];
    const a02 = a2[2];
    const a03 = a2[3];
    const a10 = a2[4 + 0];
    const a11 = a2[4 + 1];
    const a12 = a2[4 + 2];
    const a13 = a2[4 + 3];
    const a20 = a2[8 + 0];
    const a21 = a2[8 + 1];
    const a22 = a2[8 + 2];
    const a23 = a2[8 + 3];
    const a30 = a2[12 + 0];
    const a31 = a2[12 + 1];
    const a32 = a2[12 + 2];
    const a33 = a2[12 + 3];
    const b00 = b2[0];
    const b01 = b2[1];
    const b02 = b2[2];
    const b03 = b2[3];
    const b10 = b2[4 + 0];
    const b11 = b2[4 + 1];
    const b12 = b2[4 + 2];
    const b13 = b2[4 + 3];
    const b20 = b2[8 + 0];
    const b21 = b2[8 + 1];
    const b22 = b2[8 + 2];
    const b23 = b2[8 + 3];
    const b30 = b2[12 + 0];
    const b31 = b2[12 + 1];
    const b32 = b2[12 + 2];
    const b33 = b2[12 + 3];
    newDst[0] = a00 * b00 + a10 * b01 + a20 * b02 + a30 * b03;
    newDst[1] = a01 * b00 + a11 * b01 + a21 * b02 + a31 * b03;
    newDst[2] = a02 * b00 + a12 * b01 + a22 * b02 + a32 * b03;
    newDst[3] = a03 * b00 + a13 * b01 + a23 * b02 + a33 * b03;
    newDst[4] = a00 * b10 + a10 * b11 + a20 * b12 + a30 * b13;
    newDst[5] = a01 * b10 + a11 * b11 + a21 * b12 + a31 * b13;
    newDst[6] = a02 * b10 + a12 * b11 + a22 * b12 + a32 * b13;
    newDst[7] = a03 * b10 + a13 * b11 + a23 * b12 + a33 * b13;
    newDst[8] = a00 * b20 + a10 * b21 + a20 * b22 + a30 * b23;
    newDst[9] = a01 * b20 + a11 * b21 + a21 * b22 + a31 * b23;
    newDst[10] = a02 * b20 + a12 * b21 + a22 * b22 + a32 * b23;
    newDst[11] = a03 * b20 + a13 * b21 + a23 * b22 + a33 * b23;
    newDst[12] = a00 * b30 + a10 * b31 + a20 * b32 + a30 * b33;
    newDst[13] = a01 * b30 + a11 * b31 + a21 * b32 + a31 * b33;
    newDst[14] = a02 * b30 + a12 * b31 + a22 * b32 + a32 * b33;
    newDst[15] = a03 * b30 + a13 * b31 + a23 * b32 + a33 * b33;
    return newDst;
  }
  const mul = multiply;
  function setTranslation(a2, v2, dst) {
    const newDst = dst ?? identity();
    if (a2 !== newDst) {
      newDst[0] = a2[0];
      newDst[1] = a2[1];
      newDst[2] = a2[2];
      newDst[3] = a2[3];
      newDst[4] = a2[4];
      newDst[5] = a2[5];
      newDst[6] = a2[6];
      newDst[7] = a2[7];
      newDst[8] = a2[8];
      newDst[9] = a2[9];
      newDst[10] = a2[10];
      newDst[11] = a2[11];
    }
    newDst[12] = v2[0];
    newDst[13] = v2[1];
    newDst[14] = v2[2];
    newDst[15] = 1;
    return newDst;
  }
  function getTranslation(m2, dst) {
    const newDst = dst ?? vec3.create();
    newDst[0] = m2[12];
    newDst[1] = m2[13];
    newDst[2] = m2[14];
    return newDst;
  }
  function getAxis(m2, axis, dst) {
    const newDst = dst ?? vec3.create();
    const off = axis * 4;
    newDst[0] = m2[off + 0];
    newDst[1] = m2[off + 1];
    newDst[2] = m2[off + 2];
    return newDst;
  }
  function setAxis(m2, v2, axis, dst) {
    const newDst = dst === m2 ? dst : copy(m2, dst);
    const off = axis * 4;
    newDst[off + 0] = v2[0];
    newDst[off + 1] = v2[1];
    newDst[off + 2] = v2[2];
    return newDst;
  }
  function getScaling(m2, dst) {
    const newDst = dst ?? vec3.create();
    const xx = m2[0];
    const xy = m2[1];
    const xz = m2[2];
    const yx = m2[4];
    const yy = m2[5];
    const yz = m2[6];
    const zx = m2[8];
    const zy = m2[9];
    const zz = m2[10];
    newDst[0] = Math.sqrt(xx * xx + xy * xy + xz * xz);
    newDst[1] = Math.sqrt(yx * yx + yy * yy + yz * yz);
    newDst[2] = Math.sqrt(zx * zx + zy * zy + zz * zz);
    return newDst;
  }
  function perspective(fieldOfViewYInRadians, aspect, zNear, zFar, dst) {
    const newDst = dst ?? new Ctor(16);
    const f2 = Math.tan(Math.PI * 0.5 - 0.5 * fieldOfViewYInRadians);
    newDst[0] = f2 / aspect;
    newDst[1] = 0;
    newDst[2] = 0;
    newDst[3] = 0;
    newDst[4] = 0;
    newDst[5] = f2;
    newDst[6] = 0;
    newDst[7] = 0;
    newDst[8] = 0;
    newDst[9] = 0;
    newDst[11] = -1;
    newDst[12] = 0;
    newDst[13] = 0;
    newDst[15] = 0;
    if (Number.isFinite(zFar)) {
      const rangeInv = 1 / (zNear - zFar);
      newDst[10] = zFar * rangeInv;
      newDst[14] = zFar * zNear * rangeInv;
    } else {
      newDst[10] = -1;
      newDst[14] = -zNear;
    }
    return newDst;
  }
  function perspectiveReverseZ(fieldOfViewYInRadians, aspect, zNear, zFar = Infinity, dst) {
    const newDst = dst ?? new Ctor(16);
    const f2 = 1 / Math.tan(fieldOfViewYInRadians * 0.5);
    newDst[0] = f2 / aspect;
    newDst[1] = 0;
    newDst[2] = 0;
    newDst[3] = 0;
    newDst[4] = 0;
    newDst[5] = f2;
    newDst[6] = 0;
    newDst[7] = 0;
    newDst[8] = 0;
    newDst[9] = 0;
    newDst[11] = -1;
    newDst[12] = 0;
    newDst[13] = 0;
    newDst[15] = 0;
    if (zFar === Infinity) {
      newDst[10] = 0;
      newDst[14] = zNear;
    } else {
      const rangeInv = 1 / (zFar - zNear);
      newDst[10] = zNear * rangeInv;
      newDst[14] = zFar * zNear * rangeInv;
    }
    return newDst;
  }
  function ortho(left, right, bottom, top, near, far, dst) {
    const newDst = dst ?? new Ctor(16);
    newDst[0] = 2 / (right - left);
    newDst[1] = 0;
    newDst[2] = 0;
    newDst[3] = 0;
    newDst[4] = 0;
    newDst[5] = 2 / (top - bottom);
    newDst[6] = 0;
    newDst[7] = 0;
    newDst[8] = 0;
    newDst[9] = 0;
    newDst[10] = 1 / (near - far);
    newDst[11] = 0;
    newDst[12] = (right + left) / (left - right);
    newDst[13] = (top + bottom) / (bottom - top);
    newDst[14] = near / (near - far);
    newDst[15] = 1;
    return newDst;
  }
  function frustum(left, right, bottom, top, near, far, dst) {
    const newDst = dst ?? new Ctor(16);
    const dx = right - left;
    const dy = top - bottom;
    const dz = near - far;
    newDst[0] = 2 * near / dx;
    newDst[1] = 0;
    newDst[2] = 0;
    newDst[3] = 0;
    newDst[4] = 0;
    newDst[5] = 2 * near / dy;
    newDst[6] = 0;
    newDst[7] = 0;
    newDst[8] = (left + right) / dx;
    newDst[9] = (top + bottom) / dy;
    newDst[10] = far / dz;
    newDst[11] = -1;
    newDst[12] = 0;
    newDst[13] = 0;
    newDst[14] = near * far / dz;
    newDst[15] = 0;
    return newDst;
  }
  function frustumReverseZ(left, right, bottom, top, near, far = Infinity, dst) {
    const newDst = dst ?? new Ctor(16);
    const dx = right - left;
    const dy = top - bottom;
    newDst[0] = 2 * near / dx;
    newDst[1] = 0;
    newDst[2] = 0;
    newDst[3] = 0;
    newDst[4] = 0;
    newDst[5] = 2 * near / dy;
    newDst[6] = 0;
    newDst[7] = 0;
    newDst[8] = (left + right) / dx;
    newDst[9] = (top + bottom) / dy;
    newDst[11] = -1;
    newDst[12] = 0;
    newDst[13] = 0;
    newDst[15] = 0;
    if (far === Infinity) {
      newDst[10] = 0;
      newDst[14] = near;
    } else {
      const rangeInv = 1 / (far - near);
      newDst[10] = near * rangeInv;
      newDst[14] = far * near * rangeInv;
    }
    return newDst;
  }
  const xAxis = vec3.create();
  const yAxis = vec3.create();
  const zAxis = vec3.create();
  function aim(position, target, up, dst) {
    const newDst = dst ?? new Ctor(16);
    vec3.normalize(vec3.subtract(target, position, zAxis), zAxis);
    vec3.normalize(vec3.cross(up, zAxis, xAxis), xAxis);
    vec3.normalize(vec3.cross(zAxis, xAxis, yAxis), yAxis);
    newDst[0] = xAxis[0];
    newDst[1] = xAxis[1];
    newDst[2] = xAxis[2];
    newDst[3] = 0;
    newDst[4] = yAxis[0];
    newDst[5] = yAxis[1];
    newDst[6] = yAxis[2];
    newDst[7] = 0;
    newDst[8] = zAxis[0];
    newDst[9] = zAxis[1];
    newDst[10] = zAxis[2];
    newDst[11] = 0;
    newDst[12] = position[0];
    newDst[13] = position[1];
    newDst[14] = position[2];
    newDst[15] = 1;
    return newDst;
  }
  function cameraAim(eye, target, up, dst) {
    const newDst = dst ?? new Ctor(16);
    vec3.normalize(vec3.subtract(eye, target, zAxis), zAxis);
    vec3.normalize(vec3.cross(up, zAxis, xAxis), xAxis);
    vec3.normalize(vec3.cross(zAxis, xAxis, yAxis), yAxis);
    newDst[0] = xAxis[0];
    newDst[1] = xAxis[1];
    newDst[2] = xAxis[2];
    newDst[3] = 0;
    newDst[4] = yAxis[0];
    newDst[5] = yAxis[1];
    newDst[6] = yAxis[2];
    newDst[7] = 0;
    newDst[8] = zAxis[0];
    newDst[9] = zAxis[1];
    newDst[10] = zAxis[2];
    newDst[11] = 0;
    newDst[12] = eye[0];
    newDst[13] = eye[1];
    newDst[14] = eye[2];
    newDst[15] = 1;
    return newDst;
  }
  function lookAt(eye, target, up, dst) {
    const newDst = dst ?? new Ctor(16);
    vec3.normalize(vec3.subtract(eye, target, zAxis), zAxis);
    vec3.normalize(vec3.cross(up, zAxis, xAxis), xAxis);
    vec3.normalize(vec3.cross(zAxis, xAxis, yAxis), yAxis);
    newDst[0] = xAxis[0];
    newDst[1] = yAxis[0];
    newDst[2] = zAxis[0];
    newDst[3] = 0;
    newDst[4] = xAxis[1];
    newDst[5] = yAxis[1];
    newDst[6] = zAxis[1];
    newDst[7] = 0;
    newDst[8] = xAxis[2];
    newDst[9] = yAxis[2];
    newDst[10] = zAxis[2];
    newDst[11] = 0;
    newDst[12] = -(xAxis[0] * eye[0] + xAxis[1] * eye[1] + xAxis[2] * eye[2]);
    newDst[13] = -(yAxis[0] * eye[0] + yAxis[1] * eye[1] + yAxis[2] * eye[2]);
    newDst[14] = -(zAxis[0] * eye[0] + zAxis[1] * eye[1] + zAxis[2] * eye[2]);
    newDst[15] = 1;
    return newDst;
  }
  function translation(v2, dst) {
    const newDst = dst ?? new Ctor(16);
    newDst[0] = 1;
    newDst[1] = 0;
    newDst[2] = 0;
    newDst[3] = 0;
    newDst[4] = 0;
    newDst[5] = 1;
    newDst[6] = 0;
    newDst[7] = 0;
    newDst[8] = 0;
    newDst[9] = 0;
    newDst[10] = 1;
    newDst[11] = 0;
    newDst[12] = v2[0];
    newDst[13] = v2[1];
    newDst[14] = v2[2];
    newDst[15] = 1;
    return newDst;
  }
  function translate(m2, v2, dst) {
    const newDst = dst ?? new Ctor(16);
    const v0 = v2[0];
    const v1 = v2[1];
    const v22 = v2[2];
    const m00 = m2[0];
    const m01 = m2[1];
    const m02 = m2[2];
    const m03 = m2[3];
    const m10 = m2[1 * 4 + 0];
    const m11 = m2[1 * 4 + 1];
    const m12 = m2[1 * 4 + 2];
    const m13 = m2[1 * 4 + 3];
    const m20 = m2[2 * 4 + 0];
    const m21 = m2[2 * 4 + 1];
    const m22 = m2[2 * 4 + 2];
    const m23 = m2[2 * 4 + 3];
    const m30 = m2[3 * 4 + 0];
    const m31 = m2[3 * 4 + 1];
    const m32 = m2[3 * 4 + 2];
    const m33 = m2[3 * 4 + 3];
    if (m2 !== newDst) {
      newDst[0] = m00;
      newDst[1] = m01;
      newDst[2] = m02;
      newDst[3] = m03;
      newDst[4] = m10;
      newDst[5] = m11;
      newDst[6] = m12;
      newDst[7] = m13;
      newDst[8] = m20;
      newDst[9] = m21;
      newDst[10] = m22;
      newDst[11] = m23;
    }
    newDst[12] = m00 * v0 + m10 * v1 + m20 * v22 + m30;
    newDst[13] = m01 * v0 + m11 * v1 + m21 * v22 + m31;
    newDst[14] = m02 * v0 + m12 * v1 + m22 * v22 + m32;
    newDst[15] = m03 * v0 + m13 * v1 + m23 * v22 + m33;
    return newDst;
  }
  function rotationX(angleInRadians, dst) {
    const newDst = dst ?? new Ctor(16);
    const c2 = Math.cos(angleInRadians);
    const s2 = Math.sin(angleInRadians);
    newDst[0] = 1;
    newDst[1] = 0;
    newDst[2] = 0;
    newDst[3] = 0;
    newDst[4] = 0;
    newDst[5] = c2;
    newDst[6] = s2;
    newDst[7] = 0;
    newDst[8] = 0;
    newDst[9] = -s2;
    newDst[10] = c2;
    newDst[11] = 0;
    newDst[12] = 0;
    newDst[13] = 0;
    newDst[14] = 0;
    newDst[15] = 1;
    return newDst;
  }
  function rotateX(m2, angleInRadians, dst) {
    const newDst = dst ?? new Ctor(16);
    const m10 = m2[4];
    const m11 = m2[5];
    const m12 = m2[6];
    const m13 = m2[7];
    const m20 = m2[8];
    const m21 = m2[9];
    const m22 = m2[10];
    const m23 = m2[11];
    const c2 = Math.cos(angleInRadians);
    const s2 = Math.sin(angleInRadians);
    newDst[4] = c2 * m10 + s2 * m20;
    newDst[5] = c2 * m11 + s2 * m21;
    newDst[6] = c2 * m12 + s2 * m22;
    newDst[7] = c2 * m13 + s2 * m23;
    newDst[8] = c2 * m20 - s2 * m10;
    newDst[9] = c2 * m21 - s2 * m11;
    newDst[10] = c2 * m22 - s2 * m12;
    newDst[11] = c2 * m23 - s2 * m13;
    if (m2 !== newDst) {
      newDst[0] = m2[0];
      newDst[1] = m2[1];
      newDst[2] = m2[2];
      newDst[3] = m2[3];
      newDst[12] = m2[12];
      newDst[13] = m2[13];
      newDst[14] = m2[14];
      newDst[15] = m2[15];
    }
    return newDst;
  }
  function rotationY(angleInRadians, dst) {
    const newDst = dst ?? new Ctor(16);
    const c2 = Math.cos(angleInRadians);
    const s2 = Math.sin(angleInRadians);
    newDst[0] = c2;
    newDst[1] = 0;
    newDst[2] = -s2;
    newDst[3] = 0;
    newDst[4] = 0;
    newDst[5] = 1;
    newDst[6] = 0;
    newDst[7] = 0;
    newDst[8] = s2;
    newDst[9] = 0;
    newDst[10] = c2;
    newDst[11] = 0;
    newDst[12] = 0;
    newDst[13] = 0;
    newDst[14] = 0;
    newDst[15] = 1;
    return newDst;
  }
  function rotateY(m2, angleInRadians, dst) {
    const newDst = dst ?? new Ctor(16);
    const m00 = m2[0 * 4 + 0];
    const m01 = m2[0 * 4 + 1];
    const m02 = m2[0 * 4 + 2];
    const m03 = m2[0 * 4 + 3];
    const m20 = m2[2 * 4 + 0];
    const m21 = m2[2 * 4 + 1];
    const m22 = m2[2 * 4 + 2];
    const m23 = m2[2 * 4 + 3];
    const c2 = Math.cos(angleInRadians);
    const s2 = Math.sin(angleInRadians);
    newDst[0] = c2 * m00 - s2 * m20;
    newDst[1] = c2 * m01 - s2 * m21;
    newDst[2] = c2 * m02 - s2 * m22;
    newDst[3] = c2 * m03 - s2 * m23;
    newDst[8] = c2 * m20 + s2 * m00;
    newDst[9] = c2 * m21 + s2 * m01;
    newDst[10] = c2 * m22 + s2 * m02;
    newDst[11] = c2 * m23 + s2 * m03;
    if (m2 !== newDst) {
      newDst[4] = m2[4];
      newDst[5] = m2[5];
      newDst[6] = m2[6];
      newDst[7] = m2[7];
      newDst[12] = m2[12];
      newDst[13] = m2[13];
      newDst[14] = m2[14];
      newDst[15] = m2[15];
    }
    return newDst;
  }
  function rotationZ(angleInRadians, dst) {
    const newDst = dst ?? new Ctor(16);
    const c2 = Math.cos(angleInRadians);
    const s2 = Math.sin(angleInRadians);
    newDst[0] = c2;
    newDst[1] = s2;
    newDst[2] = 0;
    newDst[3] = 0;
    newDst[4] = -s2;
    newDst[5] = c2;
    newDst[6] = 0;
    newDst[7] = 0;
    newDst[8] = 0;
    newDst[9] = 0;
    newDst[10] = 1;
    newDst[11] = 0;
    newDst[12] = 0;
    newDst[13] = 0;
    newDst[14] = 0;
    newDst[15] = 1;
    return newDst;
  }
  function rotateZ(m2, angleInRadians, dst) {
    const newDst = dst ?? new Ctor(16);
    const m00 = m2[0 * 4 + 0];
    const m01 = m2[0 * 4 + 1];
    const m02 = m2[0 * 4 + 2];
    const m03 = m2[0 * 4 + 3];
    const m10 = m2[1 * 4 + 0];
    const m11 = m2[1 * 4 + 1];
    const m12 = m2[1 * 4 + 2];
    const m13 = m2[1 * 4 + 3];
    const c2 = Math.cos(angleInRadians);
    const s2 = Math.sin(angleInRadians);
    newDst[0] = c2 * m00 + s2 * m10;
    newDst[1] = c2 * m01 + s2 * m11;
    newDst[2] = c2 * m02 + s2 * m12;
    newDst[3] = c2 * m03 + s2 * m13;
    newDst[4] = c2 * m10 - s2 * m00;
    newDst[5] = c2 * m11 - s2 * m01;
    newDst[6] = c2 * m12 - s2 * m02;
    newDst[7] = c2 * m13 - s2 * m03;
    if (m2 !== newDst) {
      newDst[8] = m2[8];
      newDst[9] = m2[9];
      newDst[10] = m2[10];
      newDst[11] = m2[11];
      newDst[12] = m2[12];
      newDst[13] = m2[13];
      newDst[14] = m2[14];
      newDst[15] = m2[15];
    }
    return newDst;
  }
  function axisRotation(axis, angleInRadians, dst) {
    const newDst = dst ?? new Ctor(16);
    let x2 = axis[0];
    let y2 = axis[1];
    let z2 = axis[2];
    const n2 = Math.sqrt(x2 * x2 + y2 * y2 + z2 * z2);
    x2 /= n2;
    y2 /= n2;
    z2 /= n2;
    const xx = x2 * x2;
    const yy = y2 * y2;
    const zz = z2 * z2;
    const c2 = Math.cos(angleInRadians);
    const s2 = Math.sin(angleInRadians);
    const oneMinusCosine = 1 - c2;
    newDst[0] = xx + (1 - xx) * c2;
    newDst[1] = x2 * y2 * oneMinusCosine + z2 * s2;
    newDst[2] = x2 * z2 * oneMinusCosine - y2 * s2;
    newDst[3] = 0;
    newDst[4] = x2 * y2 * oneMinusCosine - z2 * s2;
    newDst[5] = yy + (1 - yy) * c2;
    newDst[6] = y2 * z2 * oneMinusCosine + x2 * s2;
    newDst[7] = 0;
    newDst[8] = x2 * z2 * oneMinusCosine + y2 * s2;
    newDst[9] = y2 * z2 * oneMinusCosine - x2 * s2;
    newDst[10] = zz + (1 - zz) * c2;
    newDst[11] = 0;
    newDst[12] = 0;
    newDst[13] = 0;
    newDst[14] = 0;
    newDst[15] = 1;
    return newDst;
  }
  const rotation = axisRotation;
  function axisRotate(m2, axis, angleInRadians, dst) {
    const newDst = dst ?? new Ctor(16);
    let x2 = axis[0];
    let y2 = axis[1];
    let z2 = axis[2];
    const n2 = Math.sqrt(x2 * x2 + y2 * y2 + z2 * z2);
    x2 /= n2;
    y2 /= n2;
    z2 /= n2;
    const xx = x2 * x2;
    const yy = y2 * y2;
    const zz = z2 * z2;
    const c2 = Math.cos(angleInRadians);
    const s2 = Math.sin(angleInRadians);
    const oneMinusCosine = 1 - c2;
    const r00 = xx + (1 - xx) * c2;
    const r01 = x2 * y2 * oneMinusCosine + z2 * s2;
    const r02 = x2 * z2 * oneMinusCosine - y2 * s2;
    const r10 = x2 * y2 * oneMinusCosine - z2 * s2;
    const r11 = yy + (1 - yy) * c2;
    const r12 = y2 * z2 * oneMinusCosine + x2 * s2;
    const r20 = x2 * z2 * oneMinusCosine + y2 * s2;
    const r21 = y2 * z2 * oneMinusCosine - x2 * s2;
    const r22 = zz + (1 - zz) * c2;
    const m00 = m2[0];
    const m01 = m2[1];
    const m02 = m2[2];
    const m03 = m2[3];
    const m10 = m2[4];
    const m11 = m2[5];
    const m12 = m2[6];
    const m13 = m2[7];
    const m20 = m2[8];
    const m21 = m2[9];
    const m22 = m2[10];
    const m23 = m2[11];
    newDst[0] = r00 * m00 + r01 * m10 + r02 * m20;
    newDst[1] = r00 * m01 + r01 * m11 + r02 * m21;
    newDst[2] = r00 * m02 + r01 * m12 + r02 * m22;
    newDst[3] = r00 * m03 + r01 * m13 + r02 * m23;
    newDst[4] = r10 * m00 + r11 * m10 + r12 * m20;
    newDst[5] = r10 * m01 + r11 * m11 + r12 * m21;
    newDst[6] = r10 * m02 + r11 * m12 + r12 * m22;
    newDst[7] = r10 * m03 + r11 * m13 + r12 * m23;
    newDst[8] = r20 * m00 + r21 * m10 + r22 * m20;
    newDst[9] = r20 * m01 + r21 * m11 + r22 * m21;
    newDst[10] = r20 * m02 + r21 * m12 + r22 * m22;
    newDst[11] = r20 * m03 + r21 * m13 + r22 * m23;
    if (m2 !== newDst) {
      newDst[12] = m2[12];
      newDst[13] = m2[13];
      newDst[14] = m2[14];
      newDst[15] = m2[15];
    }
    return newDst;
  }
  const rotate = axisRotate;
  function scaling(v2, dst) {
    const newDst = dst ?? new Ctor(16);
    newDst[0] = v2[0];
    newDst[1] = 0;
    newDst[2] = 0;
    newDst[3] = 0;
    newDst[4] = 0;
    newDst[5] = v2[1];
    newDst[6] = 0;
    newDst[7] = 0;
    newDst[8] = 0;
    newDst[9] = 0;
    newDst[10] = v2[2];
    newDst[11] = 0;
    newDst[12] = 0;
    newDst[13] = 0;
    newDst[14] = 0;
    newDst[15] = 1;
    return newDst;
  }
  function scale(m2, v2, dst) {
    const newDst = dst ?? new Ctor(16);
    const v0 = v2[0];
    const v1 = v2[1];
    const v22 = v2[2];
    newDst[0] = v0 * m2[0 * 4 + 0];
    newDst[1] = v0 * m2[0 * 4 + 1];
    newDst[2] = v0 * m2[0 * 4 + 2];
    newDst[3] = v0 * m2[0 * 4 + 3];
    newDst[4] = v1 * m2[1 * 4 + 0];
    newDst[5] = v1 * m2[1 * 4 + 1];
    newDst[6] = v1 * m2[1 * 4 + 2];
    newDst[7] = v1 * m2[1 * 4 + 3];
    newDst[8] = v22 * m2[2 * 4 + 0];
    newDst[9] = v22 * m2[2 * 4 + 1];
    newDst[10] = v22 * m2[2 * 4 + 2];
    newDst[11] = v22 * m2[2 * 4 + 3];
    if (m2 !== newDst) {
      newDst[12] = m2[12];
      newDst[13] = m2[13];
      newDst[14] = m2[14];
      newDst[15] = m2[15];
    }
    return newDst;
  }
  function uniformScaling(s2, dst) {
    const newDst = dst ?? new Ctor(16);
    newDst[0] = s2;
    newDst[1] = 0;
    newDst[2] = 0;
    newDst[3] = 0;
    newDst[4] = 0;
    newDst[5] = s2;
    newDst[6] = 0;
    newDst[7] = 0;
    newDst[8] = 0;
    newDst[9] = 0;
    newDst[10] = s2;
    newDst[11] = 0;
    newDst[12] = 0;
    newDst[13] = 0;
    newDst[14] = 0;
    newDst[15] = 1;
    return newDst;
  }
  function uniformScale(m2, s2, dst) {
    const newDst = dst ?? new Ctor(16);
    newDst[0] = s2 * m2[0 * 4 + 0];
    newDst[1] = s2 * m2[0 * 4 + 1];
    newDst[2] = s2 * m2[0 * 4 + 2];
    newDst[3] = s2 * m2[0 * 4 + 3];
    newDst[4] = s2 * m2[1 * 4 + 0];
    newDst[5] = s2 * m2[1 * 4 + 1];
    newDst[6] = s2 * m2[1 * 4 + 2];
    newDst[7] = s2 * m2[1 * 4 + 3];
    newDst[8] = s2 * m2[2 * 4 + 0];
    newDst[9] = s2 * m2[2 * 4 + 1];
    newDst[10] = s2 * m2[2 * 4 + 2];
    newDst[11] = s2 * m2[2 * 4 + 3];
    if (m2 !== newDst) {
      newDst[12] = m2[12];
      newDst[13] = m2[13];
      newDst[14] = m2[14];
      newDst[15] = m2[15];
    }
    return newDst;
  }
  return {
    add,
    aim,
    axisRotate,
    axisRotation,
    cameraAim,
    clone,
    copy,
    create,
    determinant,
    equals,
    equalsApproximately,
    fromMat3,
    fromQuat,
    frustum,
    frustumReverseZ,
    getAxis,
    getScaling,
    getTranslation,
    identity,
    inverse,
    invert,
    lookAt,
    mul,
    mulScalar,
    multiply,
    multiplyScalar,
    negate,
    ortho,
    perspective,
    perspectiveReverseZ,
    rotate,
    rotateX,
    rotateY,
    rotateZ,
    rotation,
    rotationX,
    rotationY,
    rotationZ,
    scale,
    scaling,
    set,
    setAxis,
    setTranslation,
    translate,
    translation,
    transpose,
    uniformScale,
    uniformScaling
  };
}
const cache$2 = /* @__PURE__ */ new Map();
function getAPI$2(Ctor) {
  let api = cache$2.get(Ctor);
  if (!api) {
    api = getAPIImpl$2(Ctor);
    cache$2.set(Ctor, api);
  }
  return api;
}
function getAPIImpl$1(Ctor) {
  const vec3 = getAPI$4(Ctor);
  function create(x2, y2, z2, w2) {
    const newDst = new Ctor(4);
    if (x2 !== void 0) {
      newDst[0] = x2;
      if (y2 !== void 0) {
        newDst[1] = y2;
        if (z2 !== void 0) {
          newDst[2] = z2;
          if (w2 !== void 0) {
            newDst[3] = w2;
          }
        }
      }
    }
    return newDst;
  }
  const fromValues = create;
  function set(x2, y2, z2, w2, dst) {
    const newDst = dst ?? new Ctor(4);
    newDst[0] = x2;
    newDst[1] = y2;
    newDst[2] = z2;
    newDst[3] = w2;
    return newDst;
  }
  function fromAxisAngle(axis, angleInRadians, dst) {
    const newDst = dst ?? new Ctor(4);
    const halfAngle = angleInRadians * 0.5;
    const s2 = Math.sin(halfAngle);
    newDst[0] = s2 * axis[0];
    newDst[1] = s2 * axis[1];
    newDst[2] = s2 * axis[2];
    newDst[3] = Math.cos(halfAngle);
    return newDst;
  }
  function toAxisAngle(q2, dst) {
    const newDst = dst ?? vec3.create(3);
    const angle2 = Math.acos(q2[3]) * 2;
    const s2 = Math.sin(angle2 * 0.5);
    if (s2 > EPSILON) {
      newDst[0] = q2[0] / s2;
      newDst[1] = q2[1] / s2;
      newDst[2] = q2[2] / s2;
    } else {
      newDst[0] = 1;
      newDst[1] = 0;
      newDst[2] = 0;
    }
    return { angle: angle2, axis: newDst };
  }
  function angle(a2, b2) {
    const d2 = dot(a2, b2);
    return Math.acos(2 * d2 * d2 - 1);
  }
  function multiply(a2, b2, dst) {
    const newDst = dst ?? new Ctor(4);
    const ax = a2[0];
    const ay = a2[1];
    const az = a2[2];
    const aw = a2[3];
    const bx = b2[0];
    const by = b2[1];
    const bz = b2[2];
    const bw = b2[3];
    newDst[0] = ax * bw + aw * bx + ay * bz - az * by;
    newDst[1] = ay * bw + aw * by + az * bx - ax * bz;
    newDst[2] = az * bw + aw * bz + ax * by - ay * bx;
    newDst[3] = aw * bw - ax * bx - ay * by - az * bz;
    return newDst;
  }
  const mul = multiply;
  function rotateX(q2, angleInRadians, dst) {
    const newDst = dst ?? new Ctor(4);
    const halfAngle = angleInRadians * 0.5;
    const qx = q2[0];
    const qy = q2[1];
    const qz = q2[2];
    const qw = q2[3];
    const bx = Math.sin(halfAngle);
    const bw = Math.cos(halfAngle);
    newDst[0] = qx * bw + qw * bx;
    newDst[1] = qy * bw + qz * bx;
    newDst[2] = qz * bw - qy * bx;
    newDst[3] = qw * bw - qx * bx;
    return newDst;
  }
  function rotateY(q2, angleInRadians, dst) {
    const newDst = dst ?? new Ctor(4);
    const halfAngle = angleInRadians * 0.5;
    const qx = q2[0];
    const qy = q2[1];
    const qz = q2[2];
    const qw = q2[3];
    const by = Math.sin(halfAngle);
    const bw = Math.cos(halfAngle);
    newDst[0] = qx * bw - qz * by;
    newDst[1] = qy * bw + qw * by;
    newDst[2] = qz * bw + qx * by;
    newDst[3] = qw * bw - qy * by;
    return newDst;
  }
  function rotateZ(q2, angleInRadians, dst) {
    const newDst = dst ?? new Ctor(4);
    const halfAngle = angleInRadians * 0.5;
    const qx = q2[0];
    const qy = q2[1];
    const qz = q2[2];
    const qw = q2[3];
    const bz = Math.sin(halfAngle);
    const bw = Math.cos(halfAngle);
    newDst[0] = qx * bw + qy * bz;
    newDst[1] = qy * bw - qx * bz;
    newDst[2] = qz * bw + qw * bz;
    newDst[3] = qw * bw - qz * bz;
    return newDst;
  }
  function slerp(a2, b2, t12, dst) {
    const newDst = dst ?? new Ctor(4);
    const ax = a2[0];
    const ay = a2[1];
    const az = a2[2];
    const aw = a2[3];
    let bx = b2[0];
    let by = b2[1];
    let bz = b2[2];
    let bw = b2[3];
    let cosOmega = ax * bx + ay * by + az * bz + aw * bw;
    if (cosOmega < 0) {
      cosOmega = -cosOmega;
      bx = -bx;
      by = -by;
      bz = -bz;
      bw = -bw;
    }
    let scale0;
    let scale1;
    if (1 - cosOmega > EPSILON) {
      const omega = Math.acos(cosOmega);
      const sinOmega = Math.sin(omega);
      scale0 = Math.sin((1 - t12) * omega) / sinOmega;
      scale1 = Math.sin(t12 * omega) / sinOmega;
    } else {
      scale0 = 1 - t12;
      scale1 = t12;
    }
    newDst[0] = scale0 * ax + scale1 * bx;
    newDst[1] = scale0 * ay + scale1 * by;
    newDst[2] = scale0 * az + scale1 * bz;
    newDst[3] = scale0 * aw + scale1 * bw;
    return newDst;
  }
  function inverse(q2, dst) {
    const newDst = dst ?? new Ctor(4);
    const a0 = q2[0];
    const a1 = q2[1];
    const a2 = q2[2];
    const a3 = q2[3];
    const dot3 = a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3;
    const invDot = dot3 ? 1 / dot3 : 0;
    newDst[0] = -a0 * invDot;
    newDst[1] = -a1 * invDot;
    newDst[2] = -a2 * invDot;
    newDst[3] = a3 * invDot;
    return newDst;
  }
  function conjugate(q2, dst) {
    const newDst = dst ?? new Ctor(4);
    newDst[0] = -q2[0];
    newDst[1] = -q2[1];
    newDst[2] = -q2[2];
    newDst[3] = q2[3];
    return newDst;
  }
  function fromMat(m2, dst) {
    const newDst = dst ?? new Ctor(4);
    const trace = m2[0] + m2[5] + m2[10];
    if (trace > 0) {
      const root2 = Math.sqrt(trace + 1);
      newDst[3] = 0.5 * root2;
      const invRoot = 0.5 / root2;
      newDst[0] = (m2[6] - m2[9]) * invRoot;
      newDst[1] = (m2[8] - m2[2]) * invRoot;
      newDst[2] = (m2[1] - m2[4]) * invRoot;
    } else {
      let i2 = 0;
      if (m2[5] > m2[0]) {
        i2 = 1;
      }
      if (m2[10] > m2[i2 * 4 + i2]) {
        i2 = 2;
      }
      const j2 = (i2 + 1) % 3;
      const k2 = (i2 + 2) % 3;
      const root2 = Math.sqrt(m2[i2 * 4 + i2] - m2[j2 * 4 + j2] - m2[k2 * 4 + k2] + 1);
      newDst[i2] = 0.5 * root2;
      const invRoot = 0.5 / root2;
      newDst[3] = (m2[j2 * 4 + k2] - m2[k2 * 4 + j2]) * invRoot;
      newDst[j2] = (m2[j2 * 4 + i2] + m2[i2 * 4 + j2]) * invRoot;
      newDst[k2] = (m2[k2 * 4 + i2] + m2[i2 * 4 + k2]) * invRoot;
    }
    return newDst;
  }
  function fromEuler(xAngleInRadians, yAngleInRadians, zAngleInRadians, order, dst) {
    const newDst = dst ?? new Ctor(4);
    const xHalfAngle = xAngleInRadians * 0.5;
    const yHalfAngle = yAngleInRadians * 0.5;
    const zHalfAngle = zAngleInRadians * 0.5;
    const sx = Math.sin(xHalfAngle);
    const cx = Math.cos(xHalfAngle);
    const sy = Math.sin(yHalfAngle);
    const cy = Math.cos(yHalfAngle);
    const sz = Math.sin(zHalfAngle);
    const cz = Math.cos(zHalfAngle);
    switch (order) {
      case "xyz":
        newDst[0] = sx * cy * cz + cx * sy * sz;
        newDst[1] = cx * sy * cz - sx * cy * sz;
        newDst[2] = cx * cy * sz + sx * sy * cz;
        newDst[3] = cx * cy * cz - sx * sy * sz;
        break;
      case "xzy":
        newDst[0] = sx * cy * cz - cx * sy * sz;
        newDst[1] = cx * sy * cz - sx * cy * sz;
        newDst[2] = cx * cy * sz + sx * sy * cz;
        newDst[3] = cx * cy * cz + sx * sy * sz;
        break;
      case "yxz":
        newDst[0] = sx * cy * cz + cx * sy * sz;
        newDst[1] = cx * sy * cz - sx * cy * sz;
        newDst[2] = cx * cy * sz - sx * sy * cz;
        newDst[3] = cx * cy * cz + sx * sy * sz;
        break;
      case "yzx":
        newDst[0] = sx * cy * cz + cx * sy * sz;
        newDst[1] = cx * sy * cz + sx * cy * sz;
        newDst[2] = cx * cy * sz - sx * sy * cz;
        newDst[3] = cx * cy * cz - sx * sy * sz;
        break;
      case "zxy":
        newDst[0] = sx * cy * cz - cx * sy * sz;
        newDst[1] = cx * sy * cz + sx * cy * sz;
        newDst[2] = cx * cy * sz + sx * sy * cz;
        newDst[3] = cx * cy * cz - sx * sy * sz;
        break;
      case "zyx":
        newDst[0] = sx * cy * cz - cx * sy * sz;
        newDst[1] = cx * sy * cz + sx * cy * sz;
        newDst[2] = cx * cy * sz - sx * sy * cz;
        newDst[3] = cx * cy * cz + sx * sy * sz;
        break;
      default:
        throw new Error(`Unknown rotation order: ${order}`);
    }
    return newDst;
  }
  function copy(q2, dst) {
    const newDst = dst ?? new Ctor(4);
    newDst[0] = q2[0];
    newDst[1] = q2[1];
    newDst[2] = q2[2];
    newDst[3] = q2[3];
    return newDst;
  }
  const clone = copy;
  function add(a2, b2, dst) {
    const newDst = dst ?? new Ctor(4);
    newDst[0] = a2[0] + b2[0];
    newDst[1] = a2[1] + b2[1];
    newDst[2] = a2[2] + b2[2];
    newDst[3] = a2[3] + b2[3];
    return newDst;
  }
  function subtract(a2, b2, dst) {
    const newDst = dst ?? new Ctor(4);
    newDst[0] = a2[0] - b2[0];
    newDst[1] = a2[1] - b2[1];
    newDst[2] = a2[2] - b2[2];
    newDst[3] = a2[3] - b2[3];
    return newDst;
  }
  const sub = subtract;
  function mulScalar(v2, k2, dst) {
    const newDst = dst ?? new Ctor(4);
    newDst[0] = v2[0] * k2;
    newDst[1] = v2[1] * k2;
    newDst[2] = v2[2] * k2;
    newDst[3] = v2[3] * k2;
    return newDst;
  }
  const scale = mulScalar;
  function divScalar(v2, k2, dst) {
    const newDst = dst ?? new Ctor(4);
    newDst[0] = v2[0] / k2;
    newDst[1] = v2[1] / k2;
    newDst[2] = v2[2] / k2;
    newDst[3] = v2[3] / k2;
    return newDst;
  }
  function dot(a2, b2) {
    return a2[0] * b2[0] + a2[1] * b2[1] + a2[2] * b2[2] + a2[3] * b2[3];
  }
  function lerp(a2, b2, t12, dst) {
    const newDst = dst ?? new Ctor(4);
    newDst[0] = a2[0] + t12 * (b2[0] - a2[0]);
    newDst[1] = a2[1] + t12 * (b2[1] - a2[1]);
    newDst[2] = a2[2] + t12 * (b2[2] - a2[2]);
    newDst[3] = a2[3] + t12 * (b2[3] - a2[3]);
    return newDst;
  }
  function length(v2) {
    const v0 = v2[0];
    const v1 = v2[1];
    const v22 = v2[2];
    const v3 = v2[3];
    return Math.sqrt(v0 * v0 + v1 * v1 + v22 * v22 + v3 * v3);
  }
  const len = length;
  function lengthSq(v2) {
    const v0 = v2[0];
    const v1 = v2[1];
    const v22 = v2[2];
    const v3 = v2[3];
    return v0 * v0 + v1 * v1 + v22 * v22 + v3 * v3;
  }
  const lenSq = lengthSq;
  function normalize(v2, dst) {
    const newDst = dst ?? new Ctor(4);
    const v0 = v2[0];
    const v1 = v2[1];
    const v22 = v2[2];
    const v3 = v2[3];
    const len2 = Math.sqrt(v0 * v0 + v1 * v1 + v22 * v22 + v3 * v3);
    if (len2 > 1e-5) {
      newDst[0] = v0 / len2;
      newDst[1] = v1 / len2;
      newDst[2] = v22 / len2;
      newDst[3] = v3 / len2;
    } else {
      newDst[0] = 0;
      newDst[1] = 0;
      newDst[2] = 0;
      newDst[3] = 1;
    }
    return newDst;
  }
  function equalsApproximately(a2, b2) {
    return Math.abs(a2[0] - b2[0]) < EPSILON && Math.abs(a2[1] - b2[1]) < EPSILON && Math.abs(a2[2] - b2[2]) < EPSILON && Math.abs(a2[3] - b2[3]) < EPSILON;
  }
  function equals(a2, b2) {
    return a2[0] === b2[0] && a2[1] === b2[1] && a2[2] === b2[2] && a2[3] === b2[3];
  }
  function identity(dst) {
    const newDst = dst ?? new Ctor(4);
    newDst[0] = 0;
    newDst[1] = 0;
    newDst[2] = 0;
    newDst[3] = 1;
    return newDst;
  }
  const tempVec3 = vec3.create();
  const xUnitVec3 = vec3.create();
  const yUnitVec3 = vec3.create();
  function rotationTo(aUnit, bUnit, dst) {
    const newDst = dst ?? new Ctor(4);
    const dot3 = vec3.dot(aUnit, bUnit);
    if (dot3 < -0.999999) {
      vec3.cross(xUnitVec3, aUnit, tempVec3);
      if (vec3.len(tempVec3) < 1e-6) {
        vec3.cross(yUnitVec3, aUnit, tempVec3);
      }
      vec3.normalize(tempVec3, tempVec3);
      fromAxisAngle(tempVec3, Math.PI, newDst);
      return newDst;
    } else if (dot3 > 0.999999) {
      newDst[0] = 0;
      newDst[1] = 0;
      newDst[2] = 0;
      newDst[3] = 1;
      return newDst;
    } else {
      vec3.cross(aUnit, bUnit, tempVec3);
      newDst[0] = tempVec3[0];
      newDst[1] = tempVec3[1];
      newDst[2] = tempVec3[2];
      newDst[3] = 1 + dot3;
      return normalize(newDst, newDst);
    }
  }
  const tempQuat1 = new Ctor(4);
  const tempQuat2 = new Ctor(4);
  function sqlerp(a2, b2, c2, d2, t12, dst) {
    const newDst = dst ?? new Ctor(4);
    slerp(a2, d2, t12, tempQuat1);
    slerp(b2, c2, t12, tempQuat2);
    slerp(tempQuat1, tempQuat2, 2 * t12 * (1 - t12), newDst);
    return newDst;
  }
  return {
    create,
    fromValues,
    set,
    fromAxisAngle,
    toAxisAngle,
    angle,
    multiply,
    mul,
    rotateX,
    rotateY,
    rotateZ,
    slerp,
    inverse,
    conjugate,
    fromMat,
    fromEuler,
    copy,
    clone,
    add,
    subtract,
    sub,
    mulScalar,
    scale,
    divScalar,
    dot,
    lerp,
    length,
    len,
    lengthSq,
    lenSq,
    normalize,
    equalsApproximately,
    equals,
    identity,
    rotationTo,
    sqlerp
  };
}
const cache$1 = /* @__PURE__ */ new Map();
function getAPI$1(Ctor) {
  let api = cache$1.get(Ctor);
  if (!api) {
    api = getAPIImpl$1(Ctor);
    cache$1.set(Ctor, api);
  }
  return api;
}
function getAPIImpl(Ctor) {
  function create(x2, y2, z2, w2) {
    const newDst = new Ctor(4);
    if (x2 !== void 0) {
      newDst[0] = x2;
      if (y2 !== void 0) {
        newDst[1] = y2;
        if (z2 !== void 0) {
          newDst[2] = z2;
          if (w2 !== void 0) {
            newDst[3] = w2;
          }
        }
      }
    }
    return newDst;
  }
  const fromValues = create;
  function set(x2, y2, z2, w2, dst) {
    const newDst = dst ?? new Ctor(4);
    newDst[0] = x2;
    newDst[1] = y2;
    newDst[2] = z2;
    newDst[3] = w2;
    return newDst;
  }
  function ceil(v2, dst) {
    const newDst = dst ?? new Ctor(4);
    newDst[0] = Math.ceil(v2[0]);
    newDst[1] = Math.ceil(v2[1]);
    newDst[2] = Math.ceil(v2[2]);
    newDst[3] = Math.ceil(v2[3]);
    return newDst;
  }
  function floor(v2, dst) {
    const newDst = dst ?? new Ctor(4);
    newDst[0] = Math.floor(v2[0]);
    newDst[1] = Math.floor(v2[1]);
    newDst[2] = Math.floor(v2[2]);
    newDst[3] = Math.floor(v2[3]);
    return newDst;
  }
  function round(v2, dst) {
    const newDst = dst ?? new Ctor(4);
    newDst[0] = Math.round(v2[0]);
    newDst[1] = Math.round(v2[1]);
    newDst[2] = Math.round(v2[2]);
    newDst[3] = Math.round(v2[3]);
    return newDst;
  }
  function clamp(v2, min2 = 0, max2 = 1, dst) {
    const newDst = dst ?? new Ctor(4);
    newDst[0] = Math.min(max2, Math.max(min2, v2[0]));
    newDst[1] = Math.min(max2, Math.max(min2, v2[1]));
    newDst[2] = Math.min(max2, Math.max(min2, v2[2]));
    newDst[3] = Math.min(max2, Math.max(min2, v2[3]));
    return newDst;
  }
  function add(a2, b2, dst) {
    const newDst = dst ?? new Ctor(4);
    newDst[0] = a2[0] + b2[0];
    newDst[1] = a2[1] + b2[1];
    newDst[2] = a2[2] + b2[2];
    newDst[3] = a2[3] + b2[3];
    return newDst;
  }
  function addScaled(a2, b2, scale2, dst) {
    const newDst = dst ?? new Ctor(4);
    newDst[0] = a2[0] + b2[0] * scale2;
    newDst[1] = a2[1] + b2[1] * scale2;
    newDst[2] = a2[2] + b2[2] * scale2;
    newDst[3] = a2[3] + b2[3] * scale2;
    return newDst;
  }
  function subtract(a2, b2, dst) {
    const newDst = dst ?? new Ctor(4);
    newDst[0] = a2[0] - b2[0];
    newDst[1] = a2[1] - b2[1];
    newDst[2] = a2[2] - b2[2];
    newDst[3] = a2[3] - b2[3];
    return newDst;
  }
  const sub = subtract;
  function equalsApproximately(a2, b2) {
    return Math.abs(a2[0] - b2[0]) < EPSILON && Math.abs(a2[1] - b2[1]) < EPSILON && Math.abs(a2[2] - b2[2]) < EPSILON && Math.abs(a2[3] - b2[3]) < EPSILON;
  }
  function equals(a2, b2) {
    return a2[0] === b2[0] && a2[1] === b2[1] && a2[2] === b2[2] && a2[3] === b2[3];
  }
  function lerp(a2, b2, t12, dst) {
    const newDst = dst ?? new Ctor(4);
    newDst[0] = a2[0] + t12 * (b2[0] - a2[0]);
    newDst[1] = a2[1] + t12 * (b2[1] - a2[1]);
    newDst[2] = a2[2] + t12 * (b2[2] - a2[2]);
    newDst[3] = a2[3] + t12 * (b2[3] - a2[3]);
    return newDst;
  }
  function lerpV(a2, b2, t12, dst) {
    const newDst = dst ?? new Ctor(4);
    newDst[0] = a2[0] + t12[0] * (b2[0] - a2[0]);
    newDst[1] = a2[1] + t12[1] * (b2[1] - a2[1]);
    newDst[2] = a2[2] + t12[2] * (b2[2] - a2[2]);
    newDst[3] = a2[3] + t12[3] * (b2[3] - a2[3]);
    return newDst;
  }
  function max(a2, b2, dst) {
    const newDst = dst ?? new Ctor(4);
    newDst[0] = Math.max(a2[0], b2[0]);
    newDst[1] = Math.max(a2[1], b2[1]);
    newDst[2] = Math.max(a2[2], b2[2]);
    newDst[3] = Math.max(a2[3], b2[3]);
    return newDst;
  }
  function min(a2, b2, dst) {
    const newDst = dst ?? new Ctor(4);
    newDst[0] = Math.min(a2[0], b2[0]);
    newDst[1] = Math.min(a2[1], b2[1]);
    newDst[2] = Math.min(a2[2], b2[2]);
    newDst[3] = Math.min(a2[3], b2[3]);
    return newDst;
  }
  function mulScalar(v2, k2, dst) {
    const newDst = dst ?? new Ctor(4);
    newDst[0] = v2[0] * k2;
    newDst[1] = v2[1] * k2;
    newDst[2] = v2[2] * k2;
    newDst[3] = v2[3] * k2;
    return newDst;
  }
  const scale = mulScalar;
  function divScalar(v2, k2, dst) {
    const newDst = dst ?? new Ctor(4);
    newDst[0] = v2[0] / k2;
    newDst[1] = v2[1] / k2;
    newDst[2] = v2[2] / k2;
    newDst[3] = v2[3] / k2;
    return newDst;
  }
  function inverse(v2, dst) {
    const newDst = dst ?? new Ctor(4);
    newDst[0] = 1 / v2[0];
    newDst[1] = 1 / v2[1];
    newDst[2] = 1 / v2[2];
    newDst[3] = 1 / v2[3];
    return newDst;
  }
  const invert = inverse;
  function dot(a2, b2) {
    return a2[0] * b2[0] + a2[1] * b2[1] + a2[2] * b2[2] + a2[3] * b2[3];
  }
  function length(v2) {
    const v0 = v2[0];
    const v1 = v2[1];
    const v22 = v2[2];
    const v3 = v2[3];
    return Math.sqrt(v0 * v0 + v1 * v1 + v22 * v22 + v3 * v3);
  }
  const len = length;
  function lengthSq(v2) {
    const v0 = v2[0];
    const v1 = v2[1];
    const v22 = v2[2];
    const v3 = v2[3];
    return v0 * v0 + v1 * v1 + v22 * v22 + v3 * v3;
  }
  const lenSq = lengthSq;
  function distance(a2, b2) {
    const dx = a2[0] - b2[0];
    const dy = a2[1] - b2[1];
    const dz = a2[2] - b2[2];
    const dw = a2[3] - b2[3];
    return Math.sqrt(dx * dx + dy * dy + dz * dz + dw * dw);
  }
  const dist = distance;
  function distanceSq(a2, b2) {
    const dx = a2[0] - b2[0];
    const dy = a2[1] - b2[1];
    const dz = a2[2] - b2[2];
    const dw = a2[3] - b2[3];
    return dx * dx + dy * dy + dz * dz + dw * dw;
  }
  const distSq = distanceSq;
  function normalize(v2, dst) {
    const newDst = dst ?? new Ctor(4);
    const v0 = v2[0];
    const v1 = v2[1];
    const v22 = v2[2];
    const v3 = v2[3];
    const len2 = Math.sqrt(v0 * v0 + v1 * v1 + v22 * v22 + v3 * v3);
    if (len2 > 1e-5) {
      newDst[0] = v0 / len2;
      newDst[1] = v1 / len2;
      newDst[2] = v22 / len2;
      newDst[3] = v3 / len2;
    } else {
      newDst[0] = 0;
      newDst[1] = 0;
      newDst[2] = 0;
      newDst[3] = 0;
    }
    return newDst;
  }
  function negate(v2, dst) {
    const newDst = dst ?? new Ctor(4);
    newDst[0] = -v2[0];
    newDst[1] = -v2[1];
    newDst[2] = -v2[2];
    newDst[3] = -v2[3];
    return newDst;
  }
  function copy(v2, dst) {
    const newDst = dst ?? new Ctor(4);
    newDst[0] = v2[0];
    newDst[1] = v2[1];
    newDst[2] = v2[2];
    newDst[3] = v2[3];
    return newDst;
  }
  const clone = copy;
  function multiply(a2, b2, dst) {
    const newDst = dst ?? new Ctor(4);
    newDst[0] = a2[0] * b2[0];
    newDst[1] = a2[1] * b2[1];
    newDst[2] = a2[2] * b2[2];
    newDst[3] = a2[3] * b2[3];
    return newDst;
  }
  const mul = multiply;
  function divide(a2, b2, dst) {
    const newDst = dst ?? new Ctor(4);
    newDst[0] = a2[0] / b2[0];
    newDst[1] = a2[1] / b2[1];
    newDst[2] = a2[2] / b2[2];
    newDst[3] = a2[3] / b2[3];
    return newDst;
  }
  const div = divide;
  function zero(dst) {
    const newDst = dst ?? new Ctor(4);
    newDst[0] = 0;
    newDst[1] = 0;
    newDst[2] = 0;
    newDst[3] = 0;
    return newDst;
  }
  function transformMat4(v2, m2, dst) {
    const newDst = dst ?? new Ctor(4);
    const x2 = v2[0];
    const y2 = v2[1];
    const z2 = v2[2];
    const w2 = v2[3];
    newDst[0] = m2[0] * x2 + m2[4] * y2 + m2[8] * z2 + m2[12] * w2;
    newDst[1] = m2[1] * x2 + m2[5] * y2 + m2[9] * z2 + m2[13] * w2;
    newDst[2] = m2[2] * x2 + m2[6] * y2 + m2[10] * z2 + m2[14] * w2;
    newDst[3] = m2[3] * x2 + m2[7] * y2 + m2[11] * z2 + m2[15] * w2;
    return newDst;
  }
  function setLength(a2, len2, dst) {
    const newDst = dst ?? new Ctor(4);
    normalize(a2, newDst);
    return mulScalar(newDst, len2, newDst);
  }
  function truncate(a2, maxLen, dst) {
    const newDst = dst ?? new Ctor(4);
    if (length(a2) > maxLen) {
      return setLength(a2, maxLen, newDst);
    }
    return copy(a2, newDst);
  }
  function midpoint(a2, b2, dst) {
    const newDst = dst ?? new Ctor(4);
    return lerp(a2, b2, 0.5, newDst);
  }
  return {
    create,
    fromValues,
    set,
    ceil,
    floor,
    round,
    clamp,
    add,
    addScaled,
    subtract,
    sub,
    equalsApproximately,
    equals,
    lerp,
    lerpV,
    max,
    min,
    mulScalar,
    scale,
    divScalar,
    inverse,
    invert,
    dot,
    length,
    len,
    lengthSq,
    lenSq,
    distance,
    dist,
    distanceSq,
    distSq,
    normalize,
    negate,
    copy,
    clone,
    multiply,
    mul,
    divide,
    div,
    zero,
    transformMat4,
    setLength,
    truncate,
    midpoint
  };
}
const cache = /* @__PURE__ */ new Map();
function getAPI(Ctor) {
  let api = cache.get(Ctor);
  if (!api) {
    api = getAPIImpl(Ctor);
    cache.set(Ctor, api);
  }
  return api;
}
function wgpuMatrixAPI(Mat3Ctor, Mat4Ctor, QuatCtor, Vec2Ctor, Vec3Ctor, Vec4Ctor) {
  return {
    /** @namespace mat3 */
    mat3: getAPI$3(Mat3Ctor),
    /** @namespace mat4 */
    mat4: getAPI$2(Mat4Ctor),
    /** @namespace quat */
    quat: getAPI$1(QuatCtor),
    /** @namespace vec2 */
    vec2: getAPI$5(Vec2Ctor),
    /** @namespace vec3 */
    vec3: getAPI$4(Vec3Ctor),
    /** @namespace vec4 */
    vec4: getAPI(Vec4Ctor)
  };
}
const {
  /**
   * 4x4 Matrix functions that default to returning `Float32Array`
   * @namespace
   */
  mat4
} = wgpuMatrixAPI(Float32Array, Float32Array, Float32Array, Float32Array, Float32Array, Float32Array);
wgpuMatrixAPI(Float64Array, Float64Array, Float64Array, Float64Array, Float64Array, Float64Array);
wgpuMatrixAPI(ZeroArray, Array, Array, Array, Array, Array);
const Camera = (globalThis.__TYPEGPU_AUTONAME__ ?? ((a2) => a2))(Js({
  view: g$1,
  proj: g$1,
  viewInv: g$1,
  projInv: g$1
}), "Camera");
function halton(index, base) {
  let result = 0;
  let f2 = 1 / base;
  let i2 = index;
  while (i2 > 0) {
    result += f2 * (i2 % base);
    i2 = Math.floor(i2 / base);
    f2 = f2 / base;
  }
  return result;
}
function* haltonSequence(base) {
  let index = 1;
  while (true) {
    yield halton(index, base);
    index++;
  }
}
class CameraController {
  #uniform;
  #view;
  #proj;
  #viewInv;
  #projInv;
  #baseProj;
  #baseProjInv;
  #haltonX;
  #haltonY;
  #width;
  #height;
  constructor(root2, position, target, up, fov, width2, height2, near = 0.1, far = 10) {
    this.#width = width2;
    this.#height = height2;
    this.#view = mat4.lookAt(position, target, up, g$1());
    this.#baseProj = mat4.perspective(
      fov,
      width2 / height2,
      near,
      far,
      g$1()
    );
    this.#proj = this.#baseProj;
    this.#viewInv = mat4.invert(this.#view, g$1());
    this.#baseProjInv = mat4.invert(this.#baseProj, g$1());
    this.#projInv = this.#baseProjInv;
    this.#uniform = root2.createUniform(Camera, {
      view: this.#view,
      proj: this.#proj,
      viewInv: this.#viewInv,
      projInv: this.#projInv
    });
    this.#haltonX = haltonSequence(2);
    this.#haltonY = haltonSequence(3);
  }
  jitter() {
    const [jx, jy] = [
      this.#haltonX.next().value,
      this.#haltonY.next().value
    ];
    const jitterX = (jx - 0.5) * 2 / this.#width;
    const jitterY = (jy - 0.5) * 2 / this.#height;
    const jitterMatrix = mat4.identity(g$1());
    jitterMatrix[12] = jitterX;
    jitterMatrix[13] = jitterY;
    const jitteredProj = mat4.mul(jitterMatrix, this.#baseProj, g$1());
    const jitteredProjInv = mat4.invert(jitteredProj, g$1());
    this.#uniform.writePartial({
      proj: jitteredProj,
      projInv: jitteredProjInv
    });
  }
  updateView(position, target, up) {
    this.#view = mat4.lookAt(position, target, up, g$1());
    this.#viewInv = mat4.invert(this.#view, g$1());
    this.#uniform.writePartial({
      view: this.#view,
      viewInv: this.#viewInv
    });
  }
  updateProjection(fov, width2, height2, near = 0.1, far = 100) {
    this.#width = width2;
    this.#height = height2;
    this.#baseProj = mat4.perspective(
      fov,
      width2 / height2,
      near,
      far,
      g$1()
    );
    this.#baseProjInv = mat4.invert(this.#baseProj, g$1());
    this.#uniform.writePartial({
      proj: this.#baseProj,
      projInv: this.#baseProjInv
    });
  }
  get cameraUniform() {
    return this.#uniform;
  }
}
const fresnelSchlick = (($3) => (globalThis.__TYPEGPU_META__ ??= /* @__PURE__ */ new WeakMap()).set($3.f = ((cosTheta, ior1, ior2) => {
  "use gpu";
  const r0 = nt((ior1 - ior2) / (ior1 + ior2), 2);
  return r0 + (1 - r0) * nt(1 - cosTheta, 5);
}), {
  v: 1,
  name: "fresnelSchlick",
  ast: { "params": [{ "type": "i", "name": "cosTheta" }, { "type": "i", "name": "ior1" }, { "type": "i", "name": "ior2" }], "body": [0, [[13, "r0", [6, [7, "std", "pow"], [[1, [1, "ior1", "-", "ior2"], "/", [1, "ior1", "+", "ior2"]], [5, "2"]]]], [10, [1, "r0", "+", [1, [1, [5, "1"], "-", "r0"], "*", [6, [7, "std", "pow"], [[1, [5, "1"], "-", "cosTheta"], [5, "5"]]]]]]]], "externalNames": ["std"] },
  externals: () => ({ std })
}) && $3.f)({});
const beerLambert = (($3) => (globalThis.__TYPEGPU_META__ ??= /* @__PURE__ */ new WeakMap()).set($3.f = ((sigma, dist) => {
  "use gpu";
  return En(cr$3(sigma, -dist));
}), {
  v: 1,
  name: "beerLambert",
  ast: { "params": [{ "type": "i", "name": "sigma" }, { "type": "i", "name": "dist" }], "body": [0, [[10, [6, [7, "std", "exp"], [[6, [7, "std", "mul"], ["sigma", [4, "-", "dist"]]]]]]]], "externalNames": ["std"] },
  externals: () => ({ std })
}) && $3.f)({});
const intersectBox = (($3) => (globalThis.__TYPEGPU_META__ ??= /* @__PURE__ */ new WeakMap()).set($3.f = ((rayOrigin, rayDirection, box) => {
  "use gpu";
  const invDir = ke$2(1).div(rayDirection);
  const t1 = ur$3(box.min, rayOrigin).mul(invDir);
  const t22 = ur$3(box.max, rayOrigin).mul(invDir);
  const tMinVec = Yn(t1, t22);
  const tMaxVec = jn(t1, t22);
  const tMin = jn(tMinVec.x, tMinVec.y, tMinVec.z);
  const tMax = Yn(tMaxVec.x, tMaxVec.y, tMaxVec.z);
  const result = BoxIntersection();
  result.hit = tMax >= tMin && tMax >= 0;
  result.tMin = tMin;
  result.tMax = tMax;
  return result;
}), {
  v: 1,
  name: "intersectBox",
  ast: { "params": [{ "type": "i", "name": "rayOrigin" }, { "type": "i", "name": "rayDirection" }, { "type": "i", "name": "box" }], "body": [0, [[13, "invDir", [6, [7, [6, [7, "d", "vec3f"], [[5, "1"]]], "div"], ["rayDirection"]]], [13, "t1", [6, [7, [6, [7, "std", "sub"], [[7, "box", "min"], "rayOrigin"]], "mul"], ["invDir"]]], [13, "t2", [6, [7, [6, [7, "std", "sub"], [[7, "box", "max"], "rayOrigin"]], "mul"], ["invDir"]]], [13, "tMinVec", [6, [7, "std", "min"], ["t1", "t2"]]], [13, "tMaxVec", [6, [7, "std", "max"], ["t1", "t2"]]], [13, "tMin", [6, [7, "std", "max"], [[7, "tMinVec", "x"], [7, "tMinVec", "y"], [7, "tMinVec", "z"]]]], [13, "tMax", [6, [7, "std", "min"], [[7, "tMaxVec", "x"], [7, "tMaxVec", "y"], [7, "tMaxVec", "z"]]]], [13, "result", [6, "BoxIntersection", []]], [2, [7, "result", "hit"], "=", [3, [1, "tMax", ">=", "tMin"], "&&", [1, "tMax", ">=", [5, "0"]]]], [2, [7, "result", "tMin"], "=", "tMin"], [2, [7, "result", "tMax"], "=", "tMax"], [10, "result"]]], "externalNames": ["d", "std", "BoxIntersection"] },
  externals: () => ({ d, std, BoxIntersection })
}) && $3.f)({});
function createTextures(root2, width2, height2) {
  return [0, 1].map(() => {
    const texture = (globalThis.__TYPEGPU_AUTONAME__ ?? ((a2) => a2))(root2["~unstable"].createTexture({
      size: [width2, height2],
      format: "rgba8unorm"
    }).$usage("storage", "sampled", "render"), "texture");
    return {
      write: texture.createView(Ct("rgba8unorm")),
      sampled: texture.createView()
    };
  });
}
function createBackgroundTexture(root2, width2, height2) {
  const texture = (globalThis.__TYPEGPU_AUTONAME__ ?? ((a2) => a2))(root2["~unstable"].createTexture({
    size: [width2, height2],
    format: "rgba16float"
  }).$usage("sampled", "render"), "texture");
  return {
    sampled: texture.createView()
  };
}
const taaResolveFn = (globalThis.__TYPEGPU_AUTONAME__ ?? ((a2) => a2))($d["~unstable"].computeFn({
  workgroupSize: [16, 16],
  in: {
    gid: ze$2.globalInvocationId
  }
})((($3) => (globalThis.__TYPEGPU_META__ ??= /* @__PURE__ */ new WeakMap()).set($3.f = (({ gid }) => {
  const currentColor = br(
    taaResolveLayout.$.currentTexture,
    le$3(gid.xy),
    0
  );
  const historyColor = br(
    taaResolveLayout.$.historyTexture,
    le$3(gid.xy),
    0
  );
  let minColor = ke$2(9999);
  let maxColor = ke$2(-9999);
  const dimensions = Sr(taaResolveLayout.$.currentTexture);
  for (let x2 = -1; x2 <= 1; x2++) {
    for (let y2 = -1; y2 <= 1; y2++) {
      const sampleCoord = pe$3(gid.xy).add(pe$3(x2, y2));
      const clampedCoord = vn$1(
        sampleCoord,
        pe$3(0, 0),
        pe$3(dimensions.xy).sub(pe$3(1))
      );
      const neighborColor = br(
        taaResolveLayout.$.currentTexture,
        clampedCoord,
        0
      );
      minColor = Yn(minColor, neighborColor.xyz);
      maxColor = jn(maxColor, neighborColor.xyz);
    }
  }
  const historyColorClamped = vn$1(historyColor.xyz, minColor, maxColor);
  const blendFactor = x$2(0.9);
  const resolvedColor = v$1(
    Jn(currentColor.xyz, historyColorClamped, blendFactor),
    1
  );
  Ir(
    taaResolveLayout.$.outputTexture,
    le$3(gid.x, gid.y),
    resolvedColor
  );
}), {
  v: 1,
  name: void 0,
  ast: { "params": [{ "type": "d", "props": [{ "name": "gid", "alias": "gid" }] }], "body": [0, [[13, "currentColor", [6, [7, "std", "textureLoad"], [[7, [7, "taaResolveLayout", "$"], "currentTexture"], [6, [7, "d", "vec2u"], [[7, "gid", "xy"]]], [5, "0"]]]], [13, "historyColor", [6, [7, "std", "textureLoad"], [[7, [7, "taaResolveLayout", "$"], "historyTexture"], [6, [7, "d", "vec2u"], [[7, "gid", "xy"]]], [5, "0"]]]], [12, "minColor", [6, [7, "d", "vec3f"], [[5, "9999"]]]], [12, "maxColor", [6, [7, "d", "vec3f"], [[4, "-", [5, "9999"]]]]], [13, "dimensions", [6, [7, "std", "textureDimensions"], [[7, [7, "taaResolveLayout", "$"], "currentTexture"]]]], [14, [12, "x", [4, "-", [5, "1"]]], [1, "x", "<=", [5, "1"]], [102, "++", "x"], [0, [[14, [12, "y", [4, "-", [5, "1"]]], [1, "y", "<=", [5, "1"]], [102, "++", "y"], [0, [[13, "sampleCoord", [6, [7, [6, [7, "d", "vec2i"], [[7, "gid", "xy"]]], "add"], [[6, [7, "d", "vec2i"], ["x", "y"]]]]], [13, "clampedCoord", [6, [7, "std", "clamp"], ["sampleCoord", [6, [7, "d", "vec2i"], [[5, "0"], [5, "0"]]], [6, [7, [6, [7, "d", "vec2i"], [[7, "dimensions", "xy"]]], "sub"], [[6, [7, "d", "vec2i"], [[5, "1"]]]]]]]], [13, "neighborColor", [6, [7, "std", "textureLoad"], [[7, [7, "taaResolveLayout", "$"], "currentTexture"], "clampedCoord", [5, "0"]]]], [2, "minColor", "=", [6, [7, "std", "min"], ["minColor", [7, "neighborColor", "xyz"]]]], [2, "maxColor", "=", [6, [7, "std", "max"], ["maxColor", [7, "neighborColor", "xyz"]]]]]]]]]], [13, "historyColorClamped", [6, [7, "std", "clamp"], [[7, "historyColor", "xyz"], "minColor", "maxColor"]]], [13, "blendFactor", [6, [7, "d", "f32"], [[5, "0.9"]]]], [13, "resolvedColor", [6, [7, "d", "vec4f"], [[6, [7, "std", "mix"], [[7, "currentColor", "xyz"], "historyColorClamped", "blendFactor"]], [5, "1"]]]], [6, [7, "std", "textureStore"], [[7, [7, "taaResolveLayout", "$"], "outputTexture"], [6, [7, "d", "vec2u"], [[7, "gid", "x"], [7, "gid", "y"]]], "resolvedColor"]]]], "externalNames": ["std", "taaResolveLayout", "d"] },
  externals: () => ({ std, taaResolveLayout, d })
}) && $3.f)({})), "taaResolveFn");
function createTaaTextures(root2, width2, height2) {
  return [0, 1].map(() => {
    const texture = (globalThis.__TYPEGPU_AUTONAME__ ?? ((a2) => a2))(root2["~unstable"].createTexture({
      size: [width2, height2],
      format: "rgba8unorm"
    }).$usage("storage", "sampled"), "texture");
    return {
      write: texture.createView(Ct("rgba8unorm")),
      sampled: texture.createView()
    };
  });
}
class TAAResolver {
  #pipeline;
  #textures;
  #root;
  #width;
  #height;
  constructor(root2, width2, height2) {
    this.#root = root2;
    this.#width = width2;
    this.#height = height2;
    this.#pipeline = root2["~unstable"].withCompute(taaResolveFn).createPipeline();
    this.#textures = createTaaTextures(root2, width2, height2);
  }
  resolve(currentTexture, frameCount, currentFrame) {
    const previousFrame = 1 - currentFrame;
    this.#pipeline.with(
      this.#root.createBindGroup(taaResolveLayout, {
        currentTexture,
        historyTexture: frameCount === 1 ? currentTexture : this.#textures[previousFrame].sampled,
        outputTexture: this.#textures[currentFrame].write
      })
    ).dispatchWorkgroups(
      Math.ceil(this.#width / 16),
      Math.ceil(this.#height / 16)
    );
    return this.#textures[currentFrame].sampled;
  }
  resize(width2, height2) {
    this.#width = width2;
    this.#height = height2;
    this.#textures = createTaaTextures(this.#root, width2, height2);
  }
  getResolvedTexture(frame) {
    return this.#textures[frame].sampled;
  }
}
const presentationFormat = navigator.gpu.getPreferredCanvasFormat();
const canvas = document.getElementById("jelly-canvas") || document.querySelector("canvas");
if (!canvas) {
  throw new Error("Canvas element not found");
}
const context = canvas.getContext("webgpu");
const root = await $d.init({
  device: {
    optionalFeatures: ["timestamp-query"]
  }
});
root.enabledFeatures.has("timestamp-query");
context.configure({
  device: root.device,
  format: presentationFormat,
  alphaMode: "premultiplied"
});
const switchBehavior = new SwitchBehavior(root);
await switchBehavior.init();
let qualityScale = 2;
const dpr = window.devicePixelRatio || 1;
canvas.width = canvas.clientWidth * dpr;
canvas.height = canvas.clientHeight * dpr;
let [width, height] = [
  canvas.width * qualityScale,
  canvas.height * qualityScale
];
createTextures(root, width, height);
let backgroundTexture = createBackgroundTexture(root, width, height);
const filteringSampler = (globalThis.__TYPEGPU_AUTONAME__ ?? ((a2) => a2))(root["~unstable"].createSampler({
  magFilter: "linear",
  minFilter: "linear"
}), "filteringSampler");
const camera = new CameraController(
  root,
  ke$2(0.02, 1.8, 1.4),
  // Moved closer from (0.024, 2.7, 1.9)
  ke$2(0, 0, -0.1),
  // Look slightly lower/closer
  ke$2(0, 1, 0),
  Math.PI / 4,
  width,
  height
);
const cameraUniform = camera.cameraUniform;
const lightUniform = (globalThis.__TYPEGPU_AUTONAME__ ?? ((a2) => a2))(root.createUniform(DirectionalLight, {
  direction: et$1(ke$2(0.19, -0.24, 0.75)),
  color: ke$2(1, 1, 1)
}), "lightUniform");
const jellyColorUniform = (globalThis.__TYPEGPU_AUTONAME__ ?? ((a2) => a2))(root.createUniform(
  v$1,
  v$1(0.08, 0.5, 1, 1)
), "jellyColorUniform");
const darkModeUniform = (globalThis.__TYPEGPU_AUTONAME__ ?? ((a2) => a2))(root.createUniform(T$2), "darkModeUniform");
const randomUniform = (globalThis.__TYPEGPU_AUTONAME__ ?? ((a2) => a2))(root.createUniform(F$3), "randomUniform");
const getRay = (($3) => (globalThis.__TYPEGPU_META__ ??= /* @__PURE__ */ new WeakMap()).set($3.f = ((ndc) => {
  "use gpu";
  const clipPos = v$1(ndc.x, ndc.y, -1, 1);
  const invView = cameraUniform.$.viewInv;
  const invProj = cameraUniform.$.projInv;
  const viewPos = invProj.mul(clipPos);
  const viewPosNormalized = v$1(viewPos.xyz.div(viewPos.w), 1);
  const worldPos = invView.mul(viewPosNormalized);
  const rayOrigin = invView.columns[3].xyz;
  const rayDir = et$1(worldPos.xyz.sub(rayOrigin));
  return Ray({
    origin: rayOrigin,
    direction: rayDir
  });
}), {
  v: 1,
  name: "getRay",
  ast: { "params": [{ "type": "i", "name": "ndc" }], "body": [0, [[13, "clipPos", [6, [7, "d", "vec4f"], [[7, "ndc", "x"], [7, "ndc", "y"], [4, "-", [5, "1"]], [5, "1"]]]], [13, "invView", [7, [7, "cameraUniform", "$"], "viewInv"]], [13, "invProj", [7, [7, "cameraUniform", "$"], "projInv"]], [13, "viewPos", [6, [7, "invProj", "mul"], ["clipPos"]]], [13, "viewPosNormalized", [6, [7, "d", "vec4f"], [[6, [7, [7, "viewPos", "xyz"], "div"], [[7, "viewPos", "w"]]], [5, "1"]]]], [13, "worldPos", [6, [7, "invView", "mul"], ["viewPosNormalized"]]], [13, "rayOrigin", [7, [8, [7, "invView", "columns"], [5, "3"]], "xyz"]], [13, "rayDir", [6, [7, "std", "normalize"], [[6, [7, [7, "worldPos", "xyz"], "sub"], ["rayOrigin"]]]]], [10, [6, "Ray", [[104, { "origin": "rayOrigin", "direction": "rayDir" }]]]]]], "externalNames": ["d", "cameraUniform", "std", "Ray"] },
  externals: () => ({ d, cameraUniform, std, Ray })
}) && $3.f)({});
const getJellyBounds = (($3) => (globalThis.__TYPEGPU_META__ ??= /* @__PURE__ */ new WeakMap()).set($3.f = (() => {
  "use gpu";
  return BoundingBox({
    min: ke$2(-1, -1, -1),
    max: ke$2(1, 1, 1)
  });
}), {
  v: 1,
  name: "getJellyBounds",
  ast: { "params": [], "body": [0, [[10, [6, "BoundingBox", [[104, { "min": [6, [7, "d", "vec3f"], [[4, "-", [5, "1"]], [4, "-", [5, "1"]], [4, "-", [5, "1"]]]], "max": [6, [7, "d", "vec3f"], [[5, "1"], [5, "1"], [5, "1"]]] }]]]]]], "externalNames": ["BoundingBox", "d"] },
  externals: () => ({ BoundingBox, d })
}) && $3.f)({});
const GroundParams = {
  groundThickness: 0.03,
  groundRadius: 0.05,
  groundRoundness: 0.02
};
const rectangleCutoutDist = (($3) => (globalThis.__TYPEGPU_META__ ??= /* @__PURE__ */ new WeakMap()).set($3.f = ((position) => {
  "use gpu";
  const groundRoundness = GroundParams.groundRoundness;
  const groundRadius = GroundParams.groundRadius;
  return sdRoundedBox2d(
    position,
    F$3(
      SWITCH_RAIL_LENGTH * 0.5 + 0.2 + groundRoundness,
      groundRadius + groundRoundness
    ),
    groundRadius + groundRoundness
  );
}), {
  v: 1,
  name: "rectangleCutoutDist",
  ast: { "params": [{ "type": "i", "name": "position" }], "body": [0, [[13, "groundRoundness", [7, "GroundParams", "groundRoundness"]], [13, "groundRadius", [7, "GroundParams", "groundRadius"]], [10, [6, [7, "sdf", "sdRoundedBox2d"], ["position", [6, [7, "d", "vec2f"], [[1, [1, [1, "SWITCH_RAIL_LENGTH", "*", [5, "0.5"]], "+", [5, "0.2"]], "+", "groundRoundness"], [1, "groundRadius", "+", "groundRoundness"]]], [1, "groundRadius", "+", "groundRoundness"]]]]]], "externalNames": ["GroundParams", "sdf", "d", "SWITCH_RAIL_LENGTH"] },
  externals: () => ({ GroundParams, sdf, d, SWITCH_RAIL_LENGTH })
}) && $3.f)({});
const getMainSceneDist = (($3) => (globalThis.__TYPEGPU_META__ ??= /* @__PURE__ */ new WeakMap()).set($3.f = ((position) => {
  "use gpu";
  const groundThickness = GroundParams.groundThickness;
  const groundRoundness = GroundParams.groundRoundness;
  return opUnion(
    sdPlane(position, ke$2(0, 1, 0), 0.06),
    opExtrudeY(
      position,
      -rectangleCutoutDist(position.xz),
      groundThickness - groundRoundness
    ) - groundRoundness
  );
}), {
  v: 1,
  name: "getMainSceneDist",
  ast: { "params": [{ "type": "i", "name": "position" }], "body": [0, [[13, "groundThickness", [7, "GroundParams", "groundThickness"]], [13, "groundRoundness", [7, "GroundParams", "groundRoundness"]], [10, [6, [7, "sdf", "opUnion"], [[6, [7, "sdf", "sdPlane"], ["position", [6, [7, "d", "vec3f"], [[5, "0"], [5, "1"], [5, "0"]]], [5, "0.06"]]], [1, [6, [7, "sdf", "opExtrudeY"], ["position", [4, "-", [6, "rectangleCutoutDist", [[7, "position", "xz"]]]], [1, "groundThickness", "-", "groundRoundness"]]], "-", "groundRoundness"]]]]]], "externalNames": ["GroundParams", "sdf", "d", "rectangleCutoutDist"] },
  externals: () => ({ GroundParams, sdf, d, rectangleCutoutDist })
}) && $3.f)({});
const opCheapBend = (($3) => (globalThis.__TYPEGPU_META__ ??= /* @__PURE__ */ new WeakMap()).set($3.f = ((p2, k2) => {
  "use gpu";
  const c2 = Vn(k2 * p2.x);
  const s2 = pt2(k2 * p2.x);
  const m2 = j(c2, -s2, s2, c2);
  return ke$2(m2.mul(p2.xy), p2.z);
}), {
  v: 1,
  name: "opCheapBend",
  ast: { "params": [{ "type": "i", "name": "p" }, { "type": "i", "name": "k" }], "body": [0, [[13, "c", [6, [7, "std", "cos"], [[1, "k", "*", [7, "p", "x"]]]]], [13, "s", [6, [7, "std", "sin"], [[1, "k", "*", [7, "p", "x"]]]]], [13, "m", [6, [7, "d", "mat2x2f"], ["c", [4, "-", "s"], "s", "c"]]], [10, [6, [7, "d", "vec3f"], [[6, [7, "m", "mul"], [[7, "p", "xy"]]], [7, "p", "z"]]]]]], "externalNames": ["std", "d"] },
  externals: () => ({ std, d })
}) && $3.f)({});
const opRotateAxisAngle = (($3) => (globalThis.__TYPEGPU_META__ ??= /* @__PURE__ */ new WeakMap()).set($3.f = ((p2, axis, angle) => {
  "use gpu";
  return ar$3(
    Jn(axis.mul(ye(p2, axis)), p2, Vn(angle)),
    Un$1(p2, axis).mul(pt2(angle))
  );
}), {
  v: 1,
  name: "opRotateAxisAngle",
  ast: { "params": [{ "type": "i", "name": "p" }, { "type": "i", "name": "axis" }, { "type": "i", "name": "angle" }], "body": [0, [[10, [6, [7, "std", "add"], [[6, [7, "std", "mix"], [[6, [7, "axis", "mul"], [[6, [7, "std", "dot"], ["p", "axis"]]]], "p", [6, [7, "std", "cos"], ["angle"]]]], [6, [7, [6, [7, "std", "cross"], ["p", "axis"]], "mul"], [[6, [7, "std", "sin"], ["angle"]]]]]]]]], "externalNames": ["std"] },
  externals: () => ({ std })
}) && $3.f)({});
const getJellyDist = (($3) => (globalThis.__TYPEGPU_META__ ??= /* @__PURE__ */ new WeakMap()).set($3.f = ((position) => {
  "use gpu";
  const state = switchBehavior.stateUniform.$;
  const jellyOrigin = ke$2(
    (state.progress - 0.5) * SWITCH_RAIL_LENGTH - state.squashX * (state.progress - 0.5) * 0.2,
    JELLY_HALFSIZE.y * 0.5,
    0
  );
  const jellyInvScale = ke$2(1 - state.squashX, 1, 1 - state.squashZ);
  const localPos = opRotateAxisAngle(
    position.sub(jellyOrigin).mul(jellyInvScale),
    ke$2(0, 0, 1),
    state.wiggleX
  );
  return sdRoundedBox3d(
    opCheapBend(localPos, 0.8),
    JELLY_HALFSIZE.sub(0.1),
    0.1
  );
}), {
  v: 1,
  name: "getJellyDist",
  ast: { "params": [{ "type": "i", "name": "position" }], "body": [0, [[13, "state", [7, [7, "switchBehavior", "stateUniform"], "$"]], [13, "jellyOrigin", [6, [7, "d", "vec3f"], [[1, [1, [1, [7, "state", "progress"], "-", [5, "0.5"]], "*", "SWITCH_RAIL_LENGTH"], "-", [1, [1, [7, "state", "squashX"], "*", [1, [7, "state", "progress"], "-", [5, "0.5"]]], "*", [5, "0.2"]]], [1, [7, "JELLY_HALFSIZE", "y"], "*", [5, "0.5"]], [5, "0"]]]], [13, "jellyInvScale", [6, [7, "d", "vec3f"], [[1, [5, "1"], "-", [7, "state", "squashX"]], [5, "1"], [1, [5, "1"], "-", [7, "state", "squashZ"]]]]], [13, "localPos", [6, "opRotateAxisAngle", [[6, [7, [6, [7, "position", "sub"], ["jellyOrigin"]], "mul"], ["jellyInvScale"]], [6, [7, "d", "vec3f"], [[5, "0"], [5, "0"], [5, "1"]]], [7, "state", "wiggleX"]]]], [10, [6, [7, "sdf", "sdRoundedBox3d"], [[6, "opCheapBend", ["localPos", [5, "0.8"]]], [6, [7, "JELLY_HALFSIZE", "sub"], [[5, "0.1"]]], [5, "0.1"]]]]]], "externalNames": ["switchBehavior", "d", "SWITCH_RAIL_LENGTH", "JELLY_HALFSIZE", "opRotateAxisAngle", "sdf", "opCheapBend"] },
  externals: () => ({ switchBehavior, d, SWITCH_RAIL_LENGTH, JELLY_HALFSIZE, opRotateAxisAngle, sdf, opCheapBend })
}) && $3.f)({});
const getSceneDist = (($3) => (globalThis.__TYPEGPU_META__ ??= /* @__PURE__ */ new WeakMap()).set($3.f = ((position) => {
  "use gpu";
  const mainScene = getMainSceneDist(position);
  const jelly = getJellyDist(position);
  const hitInfo = HitInfo();
  if (jelly < mainScene) {
    hitInfo.distance = jelly;
    hitInfo.objectType = ObjectType.SLIDER;
  } else {
    hitInfo.distance = mainScene;
    hitInfo.objectType = ObjectType.BACKGROUND;
  }
  return hitInfo;
}), {
  v: 1,
  name: "getSceneDist",
  ast: { "params": [{ "type": "i", "name": "position" }], "body": [0, [[13, "mainScene", [6, "getMainSceneDist", ["position"]]], [13, "jelly", [6, "getJellyDist", ["position"]]], [13, "hitInfo", [6, "HitInfo", []]], [11, [1, "jelly", "<", "mainScene"], [0, [[2, [7, "hitInfo", "distance"], "=", "jelly"], [2, [7, "hitInfo", "objectType"], "=", [7, "ObjectType", "SLIDER"]]]], [0, [[2, [7, "hitInfo", "distance"], "=", "mainScene"], [2, [7, "hitInfo", "objectType"], "=", [7, "ObjectType", "BACKGROUND"]]]]], [10, "hitInfo"]]], "externalNames": ["getMainSceneDist", "getJellyDist", "HitInfo", "ObjectType"] },
  externals: () => ({ getMainSceneDist, getJellyDist, HitInfo, ObjectType })
}) && $3.f)({});
const getSceneDistForAO = (($3) => (globalThis.__TYPEGPU_META__ ??= /* @__PURE__ */ new WeakMap()).set($3.f = ((position) => {
  "use gpu";
  const mainScene = getMainSceneDist(position);
  const jelly = getJellyDist(position);
  return Yn(mainScene, jelly);
}), {
  v: 1,
  name: "getSceneDistForAO",
  ast: { "params": [{ "type": "i", "name": "position" }], "body": [0, [[13, "mainScene", [6, "getMainSceneDist", ["position"]]], [13, "jelly", [6, "getJellyDist", ["position"]]], [10, [6, [7, "std", "min"], ["mainScene", "jelly"]]]]], "externalNames": ["getMainSceneDist", "getJellyDist", "std"] },
  externals: () => ({ getMainSceneDist, getJellyDist, std })
}) && $3.f)({});
const getApproxNormal = (($3) => (globalThis.__TYPEGPU_META__ ??= /* @__PURE__ */ new WeakMap()).set($3.f = ((p2, e27) => {
  "use gpu";
  const dist = getSceneDist(p2).distance;
  const n2 = ke$2(
    getSceneDist(ar$3(p2, ke$2(e27, 0, 0))).distance - dist,
    getSceneDist(ar$3(p2, ke$2(0, e27, 0))).distance - dist,
    getSceneDist(ar$3(p2, ke$2(0, 0, e27))).distance - dist
  );
  return et$1(n2);
}), {
  v: 1,
  name: "getApproxNormal",
  ast: { "params": [{ "type": "i", "name": "p" }, { "type": "i", "name": "e" }], "body": [0, [[13, "dist", [7, [6, "getSceneDist", ["p"]], "distance"]], [13, "n", [6, [7, "d", "vec3f"], [[1, [7, [6, "getSceneDist", [[6, [7, "std", "add"], ["p", [6, [7, "d", "vec3f"], ["e", [5, "0"], [5, "0"]]]]]]], "distance"], "-", "dist"], [1, [7, [6, "getSceneDist", [[6, [7, "std", "add"], ["p", [6, [7, "d", "vec3f"], [[5, "0"], "e", [5, "0"]]]]]]], "distance"], "-", "dist"], [1, [7, [6, "getSceneDist", [[6, [7, "std", "add"], ["p", [6, [7, "d", "vec3f"], [[5, "0"], [5, "0"], "e"]]]]]], "distance"], "-", "dist"]]]], [10, [6, [7, "std", "normalize"], ["n"]]]]], "externalNames": ["getSceneDist", "d", "std"] },
  externals: () => ({ getSceneDist, d, std })
}) && $3.f)({});
const getNormal = (($3) => (globalThis.__TYPEGPU_META__ ??= /* @__PURE__ */ new WeakMap()).set($3.f = ((position) => {
  "use gpu";
  if (fn$1(position.z) > 0.5 || fn$1(position.x) > 1.02) {
    return ke$2(0, 1, 0);
  }
  return getApproxNormal(position, 1e-4);
}), {
  v: 1,
  name: "getNormal",
  ast: { "params": [{ "type": "i", "name": "position" }], "body": [0, [[11, [3, [1, [6, [7, "std", "abs"], [[7, "position", "z"]]], ">", [5, "0.5"]], "||", [1, [6, [7, "std", "abs"], [[7, "position", "x"]]], ">", [5, "1.02"]]], [0, [[10, [6, [7, "d", "vec3f"], [[5, "0"], [5, "1"], [5, "0"]]]]]]], [10, [6, "getApproxNormal", ["position", [5, "0.0001"]]]]]], "externalNames": ["std", "d", "getApproxNormal"] },
  externals: () => ({ std, d, getApproxNormal })
}) && $3.f)({});
const sqLength = (($3) => (globalThis.__TYPEGPU_META__ ??= /* @__PURE__ */ new WeakMap()).set($3.f = ((a2) => {
  "use gpu";
  return ye(a2, a2);
}), {
  v: 1,
  name: "sqLength",
  ast: { "params": [{ "type": "i", "name": "a" }], "body": [0, [[10, [6, [7, "std", "dot"], ["a", "a"]]]]], "externalNames": ["std"] },
  externals: () => ({ std })
}) && $3.f)({});
const getFakeShadow = (($3) => (globalThis.__TYPEGPU_META__ ??= /* @__PURE__ */ new WeakMap()).set($3.f = ((position, lightDir) => {
  "use gpu";
  if (position.y < -GroundParams.groundThickness) {
    const fadeSharpness = 30;
    const inset = 0.02;
    const cutout = rectangleCutoutDist(position.xz) + inset;
    const edgeDarkening = ct$1(1 - cutout * fadeSharpness);
    const lightGradient = ct$1(-position.z * 4 * lightDir.z + 1);
    return ke$2(1).mul(edgeDarkening).mul(lightGradient * 0.5);
  }
  return ke$2(1);
}), {
  v: 1,
  name: "getFakeShadow",
  ast: { "params": [{ "type": "i", "name": "position" }, { "type": "i", "name": "lightDir" }], "body": [0, [[11, [1, [7, "position", "y"], "<", [4, "-", [7, "GroundParams", "groundThickness"]]], [0, [[13, "fadeSharpness", [5, "30"]], [13, "inset", [5, "0.02"]], [13, "cutout", [1, [6, "rectangleCutoutDist", [[7, "position", "xz"]]], "+", "inset"]], [13, "edgeDarkening", [6, [7, "std", "saturate"], [[1, [5, "1"], "-", [1, "cutout", "*", "fadeSharpness"]]]]], [13, "lightGradient", [6, [7, "std", "saturate"], [[1, [1, [1, [4, "-", [7, "position", "z"]], "*", [5, "4"]], "*", [7, "lightDir", "z"]], "+", [5, "1"]]]]], [10, [6, [7, [6, [7, [6, [7, "d", "vec3f"], [[5, "1"]]], "mul"], ["edgeDarkening"]], "mul"], [[1, "lightGradient", "*", [5, "0.5"]]]]]]]], [10, [6, [7, "d", "vec3f"], [[5, "1"]]]]]], "externalNames": ["GroundParams", "rectangleCutoutDist", "std", "d"] },
  externals: () => ({ GroundParams, rectangleCutoutDist, std, d })
}) && $3.f)({});
const calculateAO = (($3) => (globalThis.__TYPEGPU_META__ ??= /* @__PURE__ */ new WeakMap()).set($3.f = ((position, normal) => {
  "use gpu";
  let totalOcclusion = x$2(0);
  let sampleWeight = x$2(1);
  const stepDistance = AO_RADIUS / AO_STEPS;
  for (let i2 = 1; i2 <= AO_STEPS; i2++) {
    const sampleHeight = stepDistance * x$2(i2);
    const samplePosition = position.add(normal.mul(sampleHeight));
    const distanceToSurface = getSceneDistForAO(samplePosition) - AO_BIAS;
    const occlusionContribution = jn(
      0,
      sampleHeight - distanceToSurface
    );
    totalOcclusion += occlusionContribution * sampleWeight;
    sampleWeight *= 0.5;
    if (totalOcclusion > AO_RADIUS / AO_INTENSITY) {
      break;
    }
  }
  const rawAO = 1 - AO_INTENSITY * totalOcclusion / AO_RADIUS;
  return ct$1(rawAO);
}), {
  v: 1,
  name: "calculateAO",
  ast: { "params": [{ "type": "i", "name": "position" }, { "type": "i", "name": "normal" }], "body": [0, [[12, "totalOcclusion", [6, [7, "d", "f32"], [[5, "0"]]]], [12, "sampleWeight", [6, [7, "d", "f32"], [[5, "1"]]]], [13, "stepDistance", [1, "AO_RADIUS", "/", "AO_STEPS"]], [14, [12, "i", [5, "1"]], [1, "i", "<=", "AO_STEPS"], [102, "++", "i"], [0, [[13, "sampleHeight", [1, "stepDistance", "*", [6, [7, "d", "f32"], ["i"]]]], [13, "samplePosition", [6, [7, "position", "add"], [[6, [7, "normal", "mul"], ["sampleHeight"]]]]], [13, "distanceToSurface", [1, [6, "getSceneDistForAO", ["samplePosition"]], "-", "AO_BIAS"]], [13, "occlusionContribution", [6, [7, "std", "max"], [[5, "0"], [1, "sampleHeight", "-", "distanceToSurface"]]]], [2, "totalOcclusion", "+=", [1, "occlusionContribution", "*", "sampleWeight"]], [2, "sampleWeight", "*=", [5, "0.5"]], [11, [1, "totalOcclusion", ">", [1, "AO_RADIUS", "/", "AO_INTENSITY"]], [0, [[17]]]]]]], [13, "rawAO", [1, [5, "1"], "-", [1, [1, "AO_INTENSITY", "*", "totalOcclusion"], "/", "AO_RADIUS"]]], [10, [6, [7, "std", "saturate"], ["rawAO"]]]]], "externalNames": ["d", "AO_RADIUS", "AO_STEPS", "getSceneDistForAO", "AO_BIAS", "std", "AO_INTENSITY"] },
  externals: () => ({ d, AO_RADIUS, AO_STEPS, getSceneDistForAO, AO_BIAS, std, AO_INTENSITY })
}) && $3.f)({});
const calculateLighting = (($3) => (globalThis.__TYPEGPU_META__ ??= /* @__PURE__ */ new WeakMap()).set($3.f = ((hitPosition, normal, rayOrigin) => {
  "use gpu";
  const lightDir = xr$2(lightUniform.$.direction);
  const fakeShadow = getFakeShadow(hitPosition, lightDir);
  const diffuse = jn(ye(normal, lightDir), 0);
  const viewDir = et$1(rayOrigin.sub(hitPosition));
  const reflectDir = ot(xr$2(lightDir), normal);
  const specularFactor = jn(ye(viewDir, reflectDir), 0) ** SPECULAR_POWER;
  const specular = lightUniform.$.color.mul(
    specularFactor * SPECULAR_INTENSITY
  );
  const baseColor = ke$2(0.9);
  const directionalLight = baseColor.mul(lightUniform.$.color).mul(diffuse).mul(fakeShadow);
  const ambientLight = baseColor.mul(AMBIENT_COLOR).mul(AMBIENT_INTENSITY);
  const finalSpecular = specular.mul(fakeShadow);
  return ct$1(directionalLight.add(ambientLight).add(finalSpecular));
}), {
  v: 1,
  name: "calculateLighting",
  ast: { "params": [{ "type": "i", "name": "hitPosition" }, { "type": "i", "name": "normal" }, { "type": "i", "name": "rayOrigin" }], "body": [0, [[13, "lightDir", [6, [7, "std", "neg"], [[7, [7, "lightUniform", "$"], "direction"]]]], [13, "fakeShadow", [6, "getFakeShadow", ["hitPosition", "lightDir"]]], [13, "diffuse", [6, [7, "std", "max"], [[6, [7, "std", "dot"], ["normal", "lightDir"]], [5, "0"]]]], [13, "viewDir", [6, [7, "std", "normalize"], [[6, [7, "rayOrigin", "sub"], ["hitPosition"]]]]], [13, "reflectDir", [6, [7, "std", "reflect"], [[6, [7, "std", "neg"], ["lightDir"]], "normal"]]], [13, "specularFactor", [1, [6, [7, "std", "max"], [[6, [7, "std", "dot"], ["viewDir", "reflectDir"]], [5, "0"]]], "**", "SPECULAR_POWER"]], [13, "specular", [6, [7, [7, [7, "lightUniform", "$"], "color"], "mul"], [[1, "specularFactor", "*", "SPECULAR_INTENSITY"]]]], [13, "baseColor", [6, [7, "d", "vec3f"], [[5, "0.9"]]]], [13, "directionalLight", [6, [7, [6, [7, [6, [7, "baseColor", "mul"], [[7, [7, "lightUniform", "$"], "color"]]], "mul"], ["diffuse"]], "mul"], ["fakeShadow"]]], [13, "ambientLight", [6, [7, [6, [7, "baseColor", "mul"], ["AMBIENT_COLOR"]], "mul"], ["AMBIENT_INTENSITY"]]], [13, "finalSpecular", [6, [7, "specular", "mul"], ["fakeShadow"]]], [10, [6, [7, "std", "saturate"], [[6, [7, [6, [7, "directionalLight", "add"], ["ambientLight"]], "add"], ["finalSpecular"]]]]]]], "externalNames": ["std", "lightUniform", "getFakeShadow", "SPECULAR_POWER", "SPECULAR_INTENSITY", "d", "AMBIENT_COLOR", "AMBIENT_INTENSITY"] },
  externals: () => ({ std, lightUniform, getFakeShadow, SPECULAR_POWER, SPECULAR_INTENSITY, d, AMBIENT_COLOR, AMBIENT_INTENSITY })
}) && $3.f)({});
const applyAO = (($3) => (globalThis.__TYPEGPU_META__ ??= /* @__PURE__ */ new WeakMap()).set($3.f = ((litColor, hitPosition, normal) => {
  "use gpu";
  const ao = calculateAO(hitPosition, normal);
  const finalColor = litColor.mul(ao);
  return v$1(finalColor, 1);
}), {
  v: 1,
  name: "applyAO",
  ast: { "params": [{ "type": "i", "name": "litColor" }, { "type": "i", "name": "hitPosition" }, { "type": "i", "name": "normal" }], "body": [0, [[13, "ao", [6, "calculateAO", ["hitPosition", "normal"]]], [13, "finalColor", [6, [7, "litColor", "mul"], ["ao"]]], [10, [6, [7, "d", "vec4f"], ["finalColor", [5, "1"]]]]]], "externalNames": ["calculateAO", "d"] },
  externals: () => ({ calculateAO, d })
}) && $3.f)({});
const rayMarchNoJelly = (($3) => (globalThis.__TYPEGPU_META__ ??= /* @__PURE__ */ new WeakMap()).set($3.f = ((rayOrigin, rayDirection) => {
  "use gpu";
  let distanceFromOrigin = x$2();
  let hit = x$2();
  for (let i2 = 0; i2 < 6; i2++) {
    const p2 = rayOrigin.add(rayDirection.mul(distanceFromOrigin));
    hit = getMainSceneDist(p2);
    distanceFromOrigin += hit;
    if (distanceFromOrigin > MAX_DIST || hit < SURF_DIST * 10) {
      break;
    }
  }
  if (distanceFromOrigin < MAX_DIST) {
    return renderBackground(
      rayOrigin,
      rayDirection,
      distanceFromOrigin
    ).xyz;
  }
  return ke$2();
}), {
  v: 1,
  name: "rayMarchNoJelly",
  ast: { "params": [{ "type": "i", "name": "rayOrigin" }, { "type": "i", "name": "rayDirection" }], "body": [0, [[12, "distanceFromOrigin", [6, [7, "d", "f32"], []]], [12, "hit", [6, [7, "d", "f32"], []]], [14, [12, "i", [5, "0"]], [1, "i", "<", [5, "6"]], [102, "++", "i"], [0, [[13, "p", [6, [7, "rayOrigin", "add"], [[6, [7, "rayDirection", "mul"], ["distanceFromOrigin"]]]]], [2, "hit", "=", [6, "getMainSceneDist", ["p"]]], [2, "distanceFromOrigin", "+=", "hit"], [11, [3, [1, "distanceFromOrigin", ">", "MAX_DIST"], "||", [1, "hit", "<", [1, "SURF_DIST", "*", [5, "10"]]]], [0, [[17]]]]]]], [11, [1, "distanceFromOrigin", "<", "MAX_DIST"], [0, [[10, [7, [6, "renderBackground", ["rayOrigin", "rayDirection", "distanceFromOrigin"]], "xyz"]]]]], [10, [6, [7, "d", "vec3f"], []]]]], "externalNames": ["d", "getMainSceneDist", "MAX_DIST", "SURF_DIST", "renderBackground"] },
  externals: () => ({ d, getMainSceneDist, MAX_DIST, SURF_DIST, renderBackground })
}) && $3.f)({});
const renderBackground = (($3) => (globalThis.__TYPEGPU_META__ ??= /* @__PURE__ */ new WeakMap()).set($3.f = ((rayOrigin, rayDirection, backgroundHitDist) => {
  "use gpu";
  const state = switchBehavior.stateUniform.$;
  const hitPosition = rayOrigin.add(rayDirection.mul(backgroundHitDist));
  let offsetX = x$2();
  let offsetZ = x$2(0.05);
  const lightDir = lightUniform.$.direction;
  const causticScale = 0.2;
  offsetX -= lightDir.x * causticScale;
  offsetZ += lightDir.z * causticScale;
  const newNormal = getNormal(hitPosition);
  const switchX = (state.progress - 0.5) * SWITCH_RAIL_LENGTH;
  const jellyColor = jellyColorUniform.$;
  const sqDist = sqLength(hitPosition.sub(ke$2(switchX, 0, 0)));
  const bounceLight = jellyColor.xyz.mul(1 / (sqDist * 15 + 1) * 0.4);
  const sideBounceLight = jellyColor.xyz.mul(1 / (sqDist * 40 + 1) * 0.3).mul(fn$1(newNormal.z));
  const emission = lt2(0.7, 1, state.progress) * 2 + 0.7;
  const litColor = calculateLighting(hitPosition, newNormal, rayOrigin);
  const backgroundColor = applyAO(
    ir$2(LIGHT_GROUND_ALBEDO, DARK_GROUND_ALBEDO, darkModeUniform.$ === 1).mul(litColor),
    hitPosition,
    newNormal
  ).add(v$1(bounceLight.mul(emission), 0)).add(v$1(sideBounceLight.mul(emission), 0));
  const distToRail = rectangleCutoutDist(hitPosition.xz);
  const alpha = 1 - lt2(0, 5e-3, distToRail);
  return v$1(backgroundColor.xyz, alpha);
}), {
  v: 1,
  name: "renderBackground",
  ast: { "params": [{ "type": "i", "name": "rayOrigin" }, { "type": "i", "name": "rayDirection" }, { "type": "i", "name": "backgroundHitDist" }], "body": [0, [[13, "state", [7, [7, "switchBehavior", "stateUniform"], "$"]], [13, "hitPosition", [6, [7, "rayOrigin", "add"], [[6, [7, "rayDirection", "mul"], ["backgroundHitDist"]]]]], [12, "offsetX", [6, [7, "d", "f32"], []]], [12, "offsetZ", [6, [7, "d", "f32"], [[5, "0.05"]]]], [13, "lightDir", [7, [7, "lightUniform", "$"], "direction"]], [13, "causticScale", [5, "0.2"]], [2, "offsetX", "-=", [1, [7, "lightDir", "x"], "*", "causticScale"]], [2, "offsetZ", "+=", [1, [7, "lightDir", "z"], "*", "causticScale"]], [13, "newNormal", [6, "getNormal", ["hitPosition"]]], [13, "switchX", [1, [1, [7, "state", "progress"], "-", [5, "0.5"]], "*", "SWITCH_RAIL_LENGTH"]], [13, "jellyColor", [7, "jellyColorUniform", "$"]], [13, "sqDist", [6, "sqLength", [[6, [7, "hitPosition", "sub"], [[6, [7, "d", "vec3f"], ["switchX", [5, "0"], [5, "0"]]]]]]]], [13, "bounceLight", [6, [7, [7, "jellyColor", "xyz"], "mul"], [[1, [1, [5, "1"], "/", [1, [1, "sqDist", "*", [5, "15"]], "+", [5, "1"]]], "*", [5, "0.4"]]]]], [13, "sideBounceLight", [6, [7, [6, [7, [7, "jellyColor", "xyz"], "mul"], [[1, [1, [5, "1"], "/", [1, [1, "sqDist", "*", [5, "40"]], "+", [5, "1"]]], "*", [5, "0.3"]]]], "mul"], [[6, [7, "std", "abs"], [[7, "newNormal", "z"]]]]]], [13, "emission", [1, [1, [6, [7, "std", "smoothstep"], [[5, "0.7"], [5, "1"], [7, "state", "progress"]]], "*", [5, "2"]], "+", [5, "0.7"]]], [13, "litColor", [6, "calculateLighting", ["hitPosition", "newNormal", "rayOrigin"]]], [13, "backgroundColor", [6, [7, [6, [7, [6, "applyAO", [[6, [7, [6, [7, "std", "select"], ["LIGHT_GROUND_ALBEDO", "DARK_GROUND_ALBEDO", [1, [7, "darkModeUniform", "$"], "===", [5, "1"]]]], "mul"], ["litColor"]], "hitPosition", "newNormal"]], "add"], [[6, [7, "d", "vec4f"], [[6, [7, "bounceLight", "mul"], ["emission"]], [5, "0"]]]]], "add"], [[6, [7, "d", "vec4f"], [[6, [7, "sideBounceLight", "mul"], ["emission"]], [5, "0"]]]]]], [13, "distToRail", [6, "rectangleCutoutDist", [[7, "hitPosition", "xz"]]]], [13, "alpha", [1, [5, "1"], "-", [6, [7, "std", "smoothstep"], [[5, "0"], [5, "0.005"], "distToRail"]]]], [10, [6, [7, "d", "vec4f"], [[7, "backgroundColor", "xyz"], "alpha"]]]]], "externalNames": ["switchBehavior", "d", "lightUniform", "getNormal", "SWITCH_RAIL_LENGTH", "jellyColorUniform", "sqLength", "std", "calculateLighting", "applyAO", "LIGHT_GROUND_ALBEDO", "DARK_GROUND_ALBEDO", "darkModeUniform", "rectangleCutoutDist"] },
  externals: () => ({ switchBehavior, d, lightUniform, getNormal, SWITCH_RAIL_LENGTH, jellyColorUniform, sqLength, std, calculateLighting, applyAO, LIGHT_GROUND_ALBEDO, DARK_GROUND_ALBEDO, darkModeUniform, rectangleCutoutDist })
}) && $3.f)({});
const rayMarch = (($3) => (globalThis.__TYPEGPU_META__ ??= /* @__PURE__ */ new WeakMap()).set($3.f = ((rayOrigin, rayDirection, _uv) => {
  "use gpu";
  let totalSteps = T$2();
  let backgroundDist = x$2();
  for (let i2 = 0; i2 < MAX_STEPS; i2++) {
    const p2 = rayOrigin.add(rayDirection.mul(backgroundDist));
    const hit = getMainSceneDist(p2);
    backgroundDist += hit;
    if (hit < SURF_DIST) {
      break;
    }
  }
  const background = renderBackground(rayOrigin, rayDirection, backgroundDist);
  const bbox = getJellyBounds();
  const intersection = intersectBox(rayOrigin, rayDirection, bbox);
  if (!intersection.hit) {
    return background;
  }
  let distanceFromOrigin = jn(x$2(0), intersection.tMin);
  for (let i2 = 0; i2 < MAX_STEPS; i2++) {
    if (totalSteps >= MAX_STEPS) {
      break;
    }
    const currentPosition = rayOrigin.add(rayDirection.mul(distanceFromOrigin));
    const hitInfo = getSceneDist(currentPosition);
    distanceFromOrigin += hitInfo.distance;
    totalSteps++;
    if (hitInfo.distance < SURF_DIST) {
      const hitPosition = rayOrigin.add(rayDirection.mul(distanceFromOrigin));
      if (!(hitInfo.objectType === ObjectType.SLIDER)) {
        break;
      }
      const N3 = getNormal(hitPosition);
      const I3 = rayDirection;
      const cosi = Yn(
        1,
        jn(0, ye(xr$2(I3), N3))
      );
      const F2 = fresnelSchlick(cosi, x$2(1), x$2(JELLY_IOR));
      const reflection = ct$1(ke$2(hitPosition.y + 0.2));
      const eta = 1 / JELLY_IOR;
      const k2 = 1 - eta * eta * (1 - cosi * cosi);
      let refractedColor = ke$2();
      if (k2 > 0) {
        const refrDir = et$1(
          ar$3(
            I3.mul(eta),
            N3.mul(eta * cosi - Tt$1(k2))
          )
        );
        const p2 = hitPosition.add(refrDir.mul(SURF_DIST * 2));
        const exitPos = p2.add(refrDir.mul(SURF_DIST * 2));
        const env = rayMarchNoJelly(exitPos, refrDir);
        const jellyColor = jellyColorUniform.$;
        const scatterTint = jellyColor.xyz.mul(1.5);
        const density = x$2(20);
        const absorb = ke$2(1).sub(jellyColor.xyz).mul(density);
        const state = switchBehavior.stateUniform.$;
        const progress = ct$1(
          Jn(
            1,
            0.6,
            hitPosition.y * (1 / (JELLY_HALFSIZE.y * 2)) + 0.25
          )
        ) * state.progress;
        const T3 = beerLambert(absorb.mul(progress ** 2), 0.08);
        const lightDir = xr$2(lightUniform.$.direction);
        const forward = jn(0, ye(lightDir, refrDir));
        const scatter = scatterTint.mul(
          JELLY_SCATTER_STRENGTH * forward * progress ** 3
        );
        refractedColor = env.mul(T3).add(scatter);
      }
      const jelly = ar$3(
        reflection.mul(F2),
        refractedColor.mul(1 - F2)
      );
      return v$1(jelly, 1);
    }
    if (distanceFromOrigin > backgroundDist) {
      break;
    }
  }
  return background;
}), {
  v: 1,
  name: "rayMarch",
  ast: { "params": [{ "type": "i", "name": "rayOrigin" }, { "type": "i", "name": "rayDirection" }, { "type": "i", "name": "_uv" }], "body": [0, [[12, "totalSteps", [6, [7, "d", "u32"], []]], [12, "backgroundDist", [6, [7, "d", "f32"], []]], [14, [12, "i", [5, "0"]], [1, "i", "<", "MAX_STEPS"], [102, "++", "i"], [0, [[13, "p", [6, [7, "rayOrigin", "add"], [[6, [7, "rayDirection", "mul"], ["backgroundDist"]]]]], [13, "hit", [6, "getMainSceneDist", ["p"]]], [2, "backgroundDist", "+=", "hit"], [11, [1, "hit", "<", "SURF_DIST"], [0, [[17]]]]]]], [13, "background", [6, "renderBackground", ["rayOrigin", "rayDirection", "backgroundDist"]]], [13, "bbox", [6, "getJellyBounds", []]], [13, "intersection", [6, "intersectBox", ["rayOrigin", "rayDirection", "bbox"]]], [11, [4, "!", [7, "intersection", "hit"]], [0, [[10, "background"]]]], [12, "distanceFromOrigin", [6, [7, "std", "max"], [[6, [7, "d", "f32"], [[5, "0"]]], [7, "intersection", "tMin"]]]], [14, [12, "i", [5, "0"]], [1, "i", "<", "MAX_STEPS"], [102, "++", "i"], [0, [[11, [1, "totalSteps", ">=", "MAX_STEPS"], [0, [[17]]]], [13, "currentPosition", [6, [7, "rayOrigin", "add"], [[6, [7, "rayDirection", "mul"], ["distanceFromOrigin"]]]]], [13, "hitInfo", [6, "getSceneDist", ["currentPosition"]]], [2, "distanceFromOrigin", "+=", [7, "hitInfo", "distance"]], [102, "++", "totalSteps"], [11, [1, [7, "hitInfo", "distance"], "<", "SURF_DIST"], [0, [[13, "hitPosition", [6, [7, "rayOrigin", "add"], [[6, [7, "rayDirection", "mul"], ["distanceFromOrigin"]]]]], [11, [4, "!", [1, [7, "hitInfo", "objectType"], "===", [7, "ObjectType", "SLIDER"]]], [0, [[17]]]], [13, "N", [6, "getNormal", ["hitPosition"]]], [13, "I", "rayDirection"], [13, "cosi", [6, [7, "std", "min"], [[5, "1"], [6, [7, "std", "max"], [[5, "0"], [6, [7, "std", "dot"], [[6, [7, "std", "neg"], ["I"]], "N"]]]]]]], [13, "F", [6, "fresnelSchlick", ["cosi", [6, [7, "d", "f32"], [[5, "1"]]], [6, [7, "d", "f32"], ["JELLY_IOR"]]]]], [13, "reflection", [6, [7, "std", "saturate"], [[6, [7, "d", "vec3f"], [[1, [7, "hitPosition", "y"], "+", [5, "0.2"]]]]]]], [13, "eta", [1, [5, "1"], "/", "JELLY_IOR"]], [13, "k", [1, [5, "1"], "-", [1, [1, "eta", "*", "eta"], "*", [1, [5, "1"], "-", [1, "cosi", "*", "cosi"]]]]], [12, "refractedColor", [6, [7, "d", "vec3f"], []]], [11, [1, "k", ">", [5, "0"]], [0, [[13, "refrDir", [6, [7, "std", "normalize"], [[6, [7, "std", "add"], [[6, [7, "I", "mul"], ["eta"]], [6, [7, "N", "mul"], [[1, [1, "eta", "*", "cosi"], "-", [6, [7, "std", "sqrt"], ["k"]]]]]]]]]], [13, "p", [6, [7, "hitPosition", "add"], [[6, [7, "refrDir", "mul"], [[1, "SURF_DIST", "*", [5, "2"]]]]]]], [13, "exitPos", [6, [7, "p", "add"], [[6, [7, "refrDir", "mul"], [[1, "SURF_DIST", "*", [5, "2"]]]]]]], [13, "env", [6, "rayMarchNoJelly", ["exitPos", "refrDir"]]], [13, "jellyColor", [7, "jellyColorUniform", "$"]], [13, "scatterTint", [6, [7, [7, "jellyColor", "xyz"], "mul"], [[5, "1.5"]]]], [13, "density", [6, [7, "d", "f32"], [[5, "20"]]]], [13, "absorb", [6, [7, [6, [7, [6, [7, "d", "vec3f"], [[5, "1"]]], "sub"], [[7, "jellyColor", "xyz"]]], "mul"], ["density"]]], [13, "state", [7, [7, "switchBehavior", "stateUniform"], "$"]], [13, "progress", [1, [6, [7, "std", "saturate"], [[6, [7, "std", "mix"], [[5, "1"], [5, "0.6"], [1, [1, [7, "hitPosition", "y"], "*", [1, [5, "1"], "/", [1, [7, "JELLY_HALFSIZE", "y"], "*", [5, "2"]]]], "+", [5, "0.25"]]]]]], "*", [7, "state", "progress"]]], [13, "T", [6, "beerLambert", [[6, [7, "absorb", "mul"], [[1, "progress", "**", [5, "2"]]]], [5, "0.08"]]]], [13, "lightDir", [6, [7, "std", "neg"], [[7, [7, "lightUniform", "$"], "direction"]]]], [13, "forward", [6, [7, "std", "max"], [[5, "0"], [6, [7, "std", "dot"], ["lightDir", "refrDir"]]]]], [13, "scatter", [6, [7, "scatterTint", "mul"], [[1, [1, "JELLY_SCATTER_STRENGTH", "*", "forward"], "*", [1, "progress", "**", [5, "3"]]]]]], [2, "refractedColor", "=", [6, [7, [6, [7, "env", "mul"], ["T"]], "add"], ["scatter"]]]]]], [13, "jelly", [6, [7, "std", "add"], [[6, [7, "reflection", "mul"], ["F"]], [6, [7, "refractedColor", "mul"], [[1, [5, "1"], "-", "F"]]]]]], [10, [6, [7, "d", "vec4f"], ["jelly", [5, "1"]]]]]]], [11, [1, "distanceFromOrigin", ">", "backgroundDist"], [0, [[17]]]]]]], [10, "background"]]], "externalNames": ["d", "MAX_STEPS", "getMainSceneDist", "SURF_DIST", "renderBackground", "getJellyBounds", "intersectBox", "std", "getSceneDist", "ObjectType", "getNormal", "fresnelSchlick", "JELLY_IOR", "rayMarchNoJelly", "jellyColorUniform", "switchBehavior", "JELLY_HALFSIZE", "beerLambert", "lightUniform", "JELLY_SCATTER_STRENGTH"] },
  externals: () => ({ d, MAX_STEPS, getMainSceneDist, SURF_DIST, renderBackground, getJellyBounds, intersectBox, std, getSceneDist, ObjectType, getNormal, fresnelSchlick, JELLY_IOR, rayMarchNoJelly, jellyColorUniform, switchBehavior, JELLY_HALFSIZE, beerLambert, lightUniform, JELLY_SCATTER_STRENGTH })
}) && $3.f)({});
const raymarchFn = (globalThis.__TYPEGPU_AUTONAME__ ?? ((a2) => a2))($d["~unstable"].fragmentFn({
  in: {
    uv: F$3
  },
  out: v$1
})((($3) => (globalThis.__TYPEGPU_META__ ??= /* @__PURE__ */ new WeakMap()).set($3.f = (({ uv }) => {
  randf.seed2(randomUniform.$.mul(uv));
  const ndc = F$3(uv.x * 2 - 1, -(uv.y * 2 - 1));
  const ray = getRay(ndc);
  const color = rayMarch(
    ray.origin,
    ray.direction,
    uv
  );
  const exposure = ir$2(1.5, 2, darkModeUniform.$ === 1);
  const rgb = yt$1(color.xyz.mul(exposure)).mul(color.w);
  return v$1(rgb, color.w);
}), {
  v: 1,
  name: void 0,
  ast: { "params": [{ "type": "d", "props": [{ "name": "uv", "alias": "uv" }] }], "body": [0, [[6, [7, "randf", "seed2"], [[6, [7, [7, "randomUniform", "$"], "mul"], ["uv"]]]], [13, "ndc", [6, [7, "d", "vec2f"], [[1, [1, [7, "uv", "x"], "*", [5, "2"]], "-", [5, "1"]], [4, "-", [1, [1, [7, "uv", "y"], "*", [5, "2"]], "-", [5, "1"]]]]]], [13, "ray", [6, "getRay", ["ndc"]]], [13, "color", [6, "rayMarch", [[7, "ray", "origin"], [7, "ray", "direction"], "uv"]]], [13, "exposure", [6, [7, "std", "select"], [[5, "1.5"], [5, "2"], [1, [7, "darkModeUniform", "$"], "===", [5, "1"]]]]], [13, "rgb", [6, [7, [6, [7, "std", "tanh"], [[6, [7, [7, "color", "xyz"], "mul"], ["exposure"]]]], "mul"], [[7, "color", "w"]]]], [10, [6, [7, "d", "vec4f"], ["rgb", [7, "color", "w"]]]]]], "externalNames": ["randf", "randomUniform", "d", "getRay", "rayMarch", "std", "darkModeUniform"] },
  externals: () => ({ randf, randomUniform, d, getRay, rayMarch, std, darkModeUniform })
}) && $3.f)({})), "raymarchFn");
const fragmentMain = (globalThis.__TYPEGPU_AUTONAME__ ?? ((a2) => a2))($d["~unstable"].fragmentFn({
  in: { uv: F$3 },
  out: v$1
})((($3) => (globalThis.__TYPEGPU_META__ ??= /* @__PURE__ */ new WeakMap()).set($3.f = ((input) => {
  return cr(
    sampleLayout.$.currentTexture,
    filteringSampler.$,
    input.uv
  );
}), {
  v: 1,
  name: void 0,
  ast: { "params": [{ "type": "i", "name": "input" }], "body": [0, [[10, [6, [7, "std", "textureSample"], [[7, [7, "sampleLayout", "$"], "currentTexture"], [7, "filteringSampler", "$"], [7, "input", "uv"]]]]]], "externalNames": ["std", "sampleLayout", "filteringSampler"] },
  externals: () => ({ std, sampleLayout, filteringSampler })
}) && $3.f)({})), "fragmentMain");
const rayMarchPipeline = (globalThis.__TYPEGPU_AUTONAME__ ?? ((a2) => a2))(root["~unstable"].withVertex(o, {}).withFragment(raymarchFn, { format: presentationFormat }).createPipeline(), "rayMarchPipeline");
(globalThis.__TYPEGPU_AUTONAME__ ?? ((a2) => a2))(root["~unstable"].withVertex(o, {}).withFragment(fragmentMain, { format: presentationFormat }).createPipeline(), "renderPipeline");
let lastTimeStamp = performance.now();
const taaResolver = new TAAResolver(root, width, height);
function createBindGroups() {
  return {
    rayMarch: root.createBindGroup(rayMarchLayout, {
      backgroundTexture: backgroundTexture.sampled
    }),
    render: [0, 1].map(
      (frame) => root.createBindGroup(sampleLayout, {
        currentTexture: taaResolver.getResolvedTexture(frame)
      })
    )
  };
}
createBindGroups();
function render(timestamp) {
  const deltaTime = Math.min((timestamp - lastTimeStamp) * 1e-3, 0.1);
  lastTimeStamp = timestamp;
  randomUniform.write(
    F$3((Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2)
  );
  switchBehavior.update(deltaTime);
  rayMarchPipeline.withColorAttachment({
    view: context.getCurrentTexture().createView(),
    loadOp: "clear",
    clearValue: [0, 0, 0, 0],
    storeOp: "store"
  }).draw(3);
  requestAnimationFrame(render);
}
function handleResize() {
  const dpr2 = window.devicePixelRatio || 1;
  canvas.width = canvas.clientWidth * dpr2;
  canvas.height = canvas.clientHeight * dpr2;
  [width, height] = [
    canvas.width * qualityScale,
    canvas.height * qualityScale
  ];
  camera.updateProjection(Math.PI / 4, width, height);
  createTextures(root, width, height);
  backgroundTexture = createBackgroundTexture(root, width, height);
  taaResolver.resize(width, height);
  createBindGroups();
}
const resizeObserver = new ResizeObserver(() => {
  handleResize();
});
resizeObserver.observe(canvas);
requestAnimationFrame(render);
canvas.addEventListener("touchstart", (event) => {
  switchBehavior.pressed = true;
  event.preventDefault();
});
canvas.addEventListener("touchend", () => {
  switchBehavior.pressed = false;
  switchBehavior.toggled = !switchBehavior.toggled;
});
canvas.addEventListener("mousedown", (event) => {
  switchBehavior.pressed = true;
  event.preventDefault();
});
canvas.addEventListener("mouseup", (event) => {
  switchBehavior.pressed = false;
  switchBehavior.toggled = !switchBehavior.toggled;
  event.stopPropagation();
});
window.addEventListener("mouseup", () => {
  switchBehavior.pressed = false;
});
