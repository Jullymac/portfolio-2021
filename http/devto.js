export const getPosts = async () => {
  try {
    const posts = await fetch(
      `${process.env.NEXT_SERVER_DEVTO_API_URL}/articles/me/published?per_page=3&page=1`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          "api-key": process.env.NEXT_SERVER_DEVTO_API_KEY,
        },
      }
    );
    return await posts.json();
  } catch (e) {
    return [];
  }
};
