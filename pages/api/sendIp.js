import { NextResponse } from "next/server";

// Your Discord webhook URL
const DISCORD_WEBHOOK_URL =
  "https://discord.com/api/webhooks/1303151818834186301/ZsINLT_57jVsAISEBY7vhvRm-XgJ8P-wFAkBiQovhPgUQEhJWXbCh3hfN8NtNd91Lc4O";

export default async function handler(req, res) {
  // Get the user's IP address
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;

  // Create the message payload
  const message = {
    content: `New visitor IP: ${ip}`,
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
