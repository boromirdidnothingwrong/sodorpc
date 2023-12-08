import { fetchAccessToken } from '$lib/server/fetchaccesstoken'

// Export a single constant after fetching the access token
export const aT = (async () => {
    const accessToken = await fetchAccessToken();
    return accessToken;
  })();