"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// index.ts
var pluralit_exports = {};
__export(pluralit_exports, {
  pluralit: () => pluralit
});
module.exports = __toCommonJS(pluralit_exports);
function pluralit(string, matchCase = true) {
  var _a;
  const words = string.split(" ");
  const lastWord = words[words.length - 1] || "a";
  words.pop();
  const isLowerCase = lastWord[0] === ((_a = lastWord[0]) == null ? void 0 : _a.toLowerCase());
  let pluralChar = "s";
  if (!matchCase && isLowerCase) {
    pluralChar = "S";
  }
  if (matchCase && !isLowerCase) {
    pluralChar = "S";
  }
  return `${words.join(" ")} ${lastWord}${pluralChar}`;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  pluralit
});
