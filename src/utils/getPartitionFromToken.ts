const base62ToInt = (input: string): number => {
  const Base62Charset =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  return Array.from(input).reduce(
    (result, char) => result * 62 + Base62Charset.indexOf(char),
    0,
  );
};

export const getPartitionFromToken = (token: string): string => {
  const partition =
    token[0] === "A"
      ? base62ToInt(token[1])
      : base62ToInt(token.substring(1, 3));

  return partition < 10 ? `0${partition}` : partition.toString();
};
