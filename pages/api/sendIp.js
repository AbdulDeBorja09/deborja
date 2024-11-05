import { NextResponse } from "next/server";

// Your Discord webhook URL
const DISCORD_WEBHOOK_URL =
  "https://discord.com/api/webhooks/1303151818834186301/ZsINLT_57jVsAISEBY7vhvRm-XgJ8P-wFAkBiQovhPgUQEhJWXbCh3hfN8NtNd91Lc4O";
const GEOLOCATION_API_URL = "http://ip-api.com/json/"; // You can use other APIs as well

export default async function handler(req, res) {
  // Get the user's IP address
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;

  // Get the current time
  const currentTime = new Date().toISOString();

  // Fetch location data from the geolocation API
  let locationData;
  try {
    const response = await fetch(`${GEOLOCATION_API_URL}${ip}`);
    locationData = await response.json();
  } catch (error) {
    console.error("Error fetching location data:", error);
    return res
      .status(500)
      .json({ success: false, error: "Failed to fetch location data" });
  }

  // Create the message payload
  const message = {
    content: `New visitor IP: ${ip}\nLocation: ${locationData.city}, ${locationData.region}, ${locationData.country}\nTime: ${currentTime}`,
  };

  // Send the message to Discord
  try {
    await fetch(DISCORD_WEBHOOK_URL, {
      method: "POST",
      body: JSON.stringify(message),
      headers: { "Content-Type": "application/json" },
    });

    // Respond with a success message
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error sending message to Discord:", error);
    res.status(500).json({ success: false });
  }
}
