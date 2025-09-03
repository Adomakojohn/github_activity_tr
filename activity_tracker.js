import axios from "axios";

async function fetchActivity(username) {
  try {
    const url = `https://api.github.com/users/${username}/events`;

    const headers ={
        "User-Agent": "node.js",
    }
    const response = await axios.get(url, {headers});

    console.log(`Status: ${response.status}`);
    console.log(`Data length: ${response.data.length}`);
    console.log('Raw response:', response.data);
    return response.data;
    
  } catch (error) {
    console.error("Error fetching activity:", error);
    return null;
  }
}

function displayActivity(activity) {
  console.log(activity);
}

// displayActivity(fetchActivity("Adomakojohn"));

async function main() {
  const activity = await fetchActivity("octocat");
  displayActivity(activity);
}

main();
