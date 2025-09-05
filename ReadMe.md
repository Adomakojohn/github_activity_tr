# GitHub Event Tracker

A simple CLI tool for tracking and displaying GitHub user activity events in real-time.

## Features

- 🔍 **Real-time Activity Tracking**: Fetch and display recent GitHub user activities
- 📊 **Multiple Event Types**: Support for various GitHub events including:
  - Push events (commits)
  - Issue events (opened, closed, etc.)
  - Watch events (starring repositories)
  - Fork events
  - Create events (repositories, branches, tags)
- 🚀 **Interactive CLI**: User-friendly command-line interface with prompts
- 📈 **Rate Limit Monitoring**: Display GitHub API rate limit information
- 🎯 **Error Handling**: Robust error handling for network issues and invalid usernames

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd github_event_tracker
```

2. Install dependencies:

```bash
npm install
```

## Usage

1. Run the application:

```bash
node activity_tracker.js
```

2. Enter a GitHub username when prompted:

```
Enter the github username to track the activity: octocat
```

3. View the user's recent activity events displayed in a formatted list.

## Example Output

```
Status: 200
Data length: 30
Rate limit remaining: 4999
- Pushed 2 commit(s) to octocat/Hello-World
- Opened an issue in octocat/Hello-World
- Starred octocat/Hello-World
- Forked octocat/Hello-World
- Created repository in octocat/New-Repo
```

## Dependencies

- **axios**: HTTP client for making API requests
- **prompt-sync**: Interactive command-line prompts

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Author

Created by **sirr**

---
