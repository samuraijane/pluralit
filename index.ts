function pluralit(string: string, matchCase = true) {
  const words = string.split(' ');
  const lastWord = words[words.length - 1] || 'a';  // TODO this is here only to keep TS happy
  words.pop();
  const isLowerCase = lastWord[0] === lastWord[0]?.toLowerCase();
  let pluralChar = 's';
  if (!matchCase && isLowerCase) {
    pluralChar = 'S';
  }
  if (matchCase && !isLowerCase) {
    pluralChar = 'S';
  }
  return `${words.join(' ')} ${lastWord}${pluralChar}`;
}

export { pluralit };