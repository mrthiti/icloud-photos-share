import { WebasseturlResponse } from "./types";

export const getWebasseturls = async (
  partition: string,
  token: string,
  photoGuids: string[],
): Promise<WebasseturlResponse | null> => {
  const webasseturls = `https://p${partition}-sharedstreams.icloud.com/${token}/sharedstreams/webasseturls`;
  const response = await fetch(webasseturls, {
    method: "POST",
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "no-cache",
    },
    body: JSON.stringify({ photoGuids }),
  }).catch(() => null);
  if (!response?.ok) return null;

  return response.json();
};
