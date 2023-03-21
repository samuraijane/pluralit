// index.ts
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
export {
  pluralit
};
