export const getRepositories = async () => {
  try {
    const repos = await fetch(
      `${process.env.NEXT_SERVER_GITHUB_API_URL}/users/jullymac/repos?type=public&sort=updated&per_page=3`,
      {
        method: "GET",
        headers: {
          accept: "application/vnd.github.v3+json",
        },
      }
    );
    return await repos.json();
  } catch (e) {
    return [];
  }
};
