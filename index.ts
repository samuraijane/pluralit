function pluralit(string: string, matchCase = true) {
  if (!string) {
    return "ERROR: It looks like you have not entered any words.";
  }
  const words = string.split(' ');
  const lastWord = words[words.length - 1];
  words.pop();
  const isLowerCase = lastWord![0] === lastWord![0]?.toLowerCase();
  let pluralChar = 's';
  if (!matchCase && isLowerCase) {
    pluralChar = 'S';
  }
  if (matchCase && !isLowerCase) {
    pluralChar = 'S';
  }
  if (words.length > 1) {
    return `${words.join(' ')} ${lastWord}${pluralChar}`;
  }
  return `${lastWord}${pluralChar}`;
}

export { pluralit };
