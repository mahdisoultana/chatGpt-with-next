export function getResponseType(userInput: string): string {
  const responseTagRegex = /<type:\s*(text|audio)>/i;
  const match = userInput.match(responseTagRegex);
  return match ? match[1].toLowerCase() : '';
}

export function removeResponseType(userInput: string): string {
  const res = userInput.replaceAll(/<type:\s*(text|audio)>/gi, '');
  return res;
}
