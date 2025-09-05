const prompt = require("prompt-sync")({ sigint: true });
const axios = require("axios");




async function fetchActivity(username) {
  try {
    const url = `https://api.github.com/users/${username}/events`;

    const headers = {
      "User-Agent": "node.js",
    };
    const response = await axios.get(url, { headers });

    console.log(`Status: ${response.status}`);
    console.log(`Data length: ${response.data.length}`);
    console.log(
      "Rate limit remaining:",
      response.headers["x-ratelimit-remaining"]
    );
    console.log("Raw response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching activity:", error);
    return null;
  }
}

function displayActivity(activity) {
  if (activity.length === 0) {
    console.log("No recent activity found.");
    return;
  }

  activity.forEach((activity) => {
    let action;
    switch (activity.type) {
      case "PushEvent":
        const commitCount = activity.payload.commits.length;
        action = `Pushed ${commitCount} commit(s) to ${activity.repo.name}`;
        break;
      case "IssuesEvent":
        action = `${
          activity.payload.action.charAt(0).toUpperCase() +
          activity.payload.action.slice(1)
        } an issue in ${activity.repo.name}`;
        break;
      case "WatchEvent":
        action = `Starred ${activity.repo.name}`;
        break;
      case "ForkEvent":
        action = `Forked ${activity.repo.name}`;
        break;
      case "CreateEvent":
        action = `Created ${activity.payload.ref_type} in ${activity.repo.name}`;
        break;
      default:
        action = `${activity.type.replace("Event", "")} in ${
          activity.repo.name
        }`;
        break;
    }
    console.log(`- ${action}`);
  });
}

// displayActivity(fetchActivity("sindresorhus"));

async function main() {
  let userName = prompt("Enter the github username to track the activity: ");

  if (userName !== null) {
    const activity = await fetchActivity(userName);
    displayActivity(activity);
  } else {
    console.log("No username provided");
  }

  console.log("Thank you for using the github activity tracker");
}

main();
