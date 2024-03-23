import { WebstreamResponse } from "./types";

export const getWebstream = async (
  partition: string,
  token: string,
): Promise<WebstreamResponse | null> => {
  const webstream = `https://p${partition}-sharedstreams.icloud.com/${token}/sharedstreams/webstream`;
  const response = await fetch(webstream, {
    method: "POST",
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "no-cache",
    },
    body: JSON.stringify({ streamCtag: null }),
  }).catch(() => null);
  if (!response?.ok) return null;

  return response.json();
};
