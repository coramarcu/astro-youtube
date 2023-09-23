export interface responseData {
  name: string;
  url: string;
}

export async function get({ params }: any) {
  return {
    body: JSON.stringify([
      {
        name: "Astro API",
        url: "https://astro.build",
      },
    ]),
  };
}
