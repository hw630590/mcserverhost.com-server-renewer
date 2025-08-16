const axios = require("axios"); // npm install axios

const url = "https://www.mcserverhost.com/api/servers/xxxxxxxx/subscription"; // Replace 'xxxx' with your server id.

// your cookie string (update if it changes)
const cookieHeader = "mcserverhost=xxxxx; __stripe_mid=xxxxx; __stripe_sid=xxxx;"; // replace this with ur full cookie from the 'Network' tab in devtools

async function getSubscription() {
  try {
    const res = await axios.get(url, {
      headers: {
        Cookie: cookieHeader
      }
    });

    console.log("Subscription data:", new Date().toISOString(), res.data);
  } catch (err) {
    if (err.response) {
      console.error("Request failed:", err.response.status, err.response.data);
    } else {
      console.error("Error:", err.message);
    }
  }
}

getSubscription();
setInterval(getSubscription, 15 * 60 * 1000);
