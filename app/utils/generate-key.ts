function djb2(str: string) {
  let hash = 5381;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i); /* hash * 33 + c */
  }
  return hash;
}

export function generateKey({query, variables}: {query: string, variables: any}) {
  const queryKey = djb2(JSON.stringify(query));
  const variablesKey = djb2(JSON.stringify(variables));
  return queryKey ^ variablesKey;  // XOR operation to combine the two hash values
}