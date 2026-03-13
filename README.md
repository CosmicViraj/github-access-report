---

# GitHub Access Report API

A service that connects to GitHub and generates a structured report showing **which users have access to which repositories** in a GitHub organization.

This tool helps organizations gain visibility into repository access permissions, making it easier to manage security, audits, and compliance. Organizations often need this information for security checks, off-boarding users, or reviewing repository permissions. ([GitHub Docs][1])

---

# Features

* Authenticate with GitHub using a secure token
* Retrieve repositories from a GitHub organization
* Fetch users and collaborators with access to each repository
* Generate a structured access report
* Provide an API endpoint to retrieve the report
* Easy integration with other tools and dashboards

---

# Tech Stack

Backend

* Node.js
* Express.js

API

* GitHub REST API

Other Tools

* Axios (for API requests)
* dotenv (environment variable management)

---

# Project Structure

```
github-access-report/
│
├── src/
│   ├── controllers/
│   │   └── reportController.js
│   │
│   ├── services/
│   │   └── githubService.js
│   │
│   ├── routes/
│   │   └── reportRoutes.js
│   │
│   ├── utils/
│   │   └── formatter.js
│   │
│   └── app.js
│
├── config/
│   └── githubConfig.js
│
├── .env
├── package.json
├── server.js
└── README.md
```

---

# How It Works

1. The application authenticates with GitHub using a **Personal Access Token**.
2. It fetches all repositories from a specified GitHub organization.
3. For each repository, it retrieves the list of users or teams with access.
4. The collected data is structured into a report.
5. The API endpoint returns the access report in JSON format.

---

# API Endpoint

### Get Access Report

```
GET /api/report/:organization
```

Example:

```
GET /api/report/my-org
```

### Example Response

```json
{
  "organization": "my-org",
  "repositories": [
    {
      "repository": "project-alpha",
      "users": [
        {
          "username": "user1",
          "permission": "admin"
        },
        {
          "username": "user2",
          "permission": "write"
        }
      ]
    }
  ]
}
```

---

# Installation

Clone the repository

```
git clone https://github.com/CosmicViraj/github-access-report.git
```

Navigate into the project

```
cd github-access-report
```

Install dependencies

```
npm install
```

---

# Environment Variables

Create a `.env` file and add:

```
GITHUB_TOKEN=your_github_personal_access_token
ORG_NAME=your_organization_name
PORT=5000
```

---

# Running the Application

Start the server:

```
node src/app.js
```

Or using nodemon:

```
npm run dev
```

The API will run at:

```
http://localhost:5000
```

---

# Example Workflow

1. Client sends request to `/api/report/{organization}`
2. Backend authenticates with GitHub API
3. Retrieves repositories
4. Retrieves collaborators for each repository
5. Formats the data into a structured report
6. Returns the report as JSON

---

# Use Cases

* Security audits
* Repository access monitoring
* Compliance reporting
* DevOps management
* Organization repository governance

---

# Future Improvements

* Export reports to CSV or PDF
* Add role-based filtering
* Dashboard UI for visualization
* Schedule automated reports
* Support for GitHub Enterprise

---

# Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch
3. Commit your changes
4. Submit a pull request

---

# License

This project is licensed under the MIT License.

---
