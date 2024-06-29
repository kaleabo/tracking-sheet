import { NextRequest } from "next/server";
import { v4 as uuidv4 } from "uuid";

// In-memory store for tokens (for demonstration purposes)
const tokenStore: Record<string, Date> = {};

// Token lifetime in milliseconds (1 year)
const TOKEN_LIFETIME = 365 * 24 * 60 * 60 * 1000;
export async function GET(req: NextRequest) {
  // List of authorized IP addresses
  const authorizedIps = ["192.168.1.1", "203.0.113.5", "196.191.112.120"];

  // Get the user's IP address
  const userIp: any = req.headers.get("X-Forwarded-For") || req.ip;

  // Check if the IP address is authorized
  if (authorizedIps.includes(userIp)) {
    // Generate a unique token
    const token = uuidv4();
    const expirationDate = new Date(Date.now() + TOKEN_LIFETIME);

    // Store the token with its expiration date
    tokenStore[token] = expirationDate;
    return Response.json({ authorized: true, token: token, expires: expirationDate.toISOString() }, { status: 200 });
  } else {
    return Response.json({ authorized: false }, { status: 403 });
  }
}
