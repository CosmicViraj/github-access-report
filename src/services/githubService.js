const githubClient = require("../config/githubClient");

async function getOrganizationRepositories(org) {

    let repos = [];
    let page = 1;

    try {

        while (true) {

            const response = await githubClient.get(`/orgs/${org}/repos`, {
                params: {
                    per_page: 100,
                    page: page
                }
            });

            if (response.data.length === 0) break;

            repos = repos.concat(response.data);

            page++;
        }

        return repos;

    } catch (error) {

        throw new Error("Error fetching repositories");

    }
}


async function getRepositoryContributors(owner, repo) {

    try {

        const response = await githubClient.get(
            `/repos/${owner}/${repo}/contributors`,
            {
                params: { per_page: 100 }
            }
        );

        return response.data;

    } catch (error) {

        console.log(`Skipping repo: ${repo}`);

        return [];

    }

}

module.exports = {
    getOrganizationRepositories,
    getRepositoryContributors
};