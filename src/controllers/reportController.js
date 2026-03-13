const githubService = require("../services/githubService");

exports.getAccessReport = async (req, res) => {

    try {

        const organization = process.env.ORG_NAME;

        console.log("Fetching repositories...");

        const repositories =
        await githubService.getOrganizationRepositories(organization);

        console.log("Total repos:", repositories.length);

        const userAccessMap = {};

        await Promise.all(

            repositories.map(async (repo) => {

                console.log("Fetching contributors for:", repo.name);

                const contributors =
                await githubService.getRepositoryContributors(
                    organization,
                    repo.name
                );

                contributors.forEach((user) => {

                    if (!userAccessMap[user.login]) {
                        userAccessMap[user.login] = [];
                    }

                    userAccessMap[user.login].push({
                        repository: repo.name
                    });

                });

            })

        );

        res.json({
            organization: organization,
            totalRepositories: repositories.length,
            accessReport: userAccessMap
        });

    } catch (error) {

        res.status(500).json({
            message: "Failed to generate access report",
            error: error.message
        });

    }

};