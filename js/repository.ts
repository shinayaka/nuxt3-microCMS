export function createRequest() {
  const config = useRuntimeConfig();
  return {
    headers: { 'X-MICROCMS-API-KEY': config.apiKey },
  };
}

export function getApiUrl(endpoint: string) {
  const config = useRuntimeConfig();
  return `https://${config.myDomain}.microcms.io/api/v1/${endpoint}`;
}

// export async function commonFetchList(endpoint: string, responseType: any) {
//   return await useFetch<typeof responseType>(
//     apiBaseURL + endpoint,
//     createRequest()
//   );
// }

// export async function fetchArticles(): Promise<Ref<Article[]>> {
//   const {data} = await useFetch<Article[]>(apiBaseURL + "articles", createRequest());
//   return data;
// }
