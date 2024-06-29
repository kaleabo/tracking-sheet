import { NextRequest } from "next/server";
import { v4 as uuidv4 } from "uuid";

export async function GET(req: NextRequest) {
  // List of authorized IP addresses
  const authorizedIps = ["192.168.1.1", "203.0.113.5"];

  // Get the user's IP address
  const userIpx = req.headers.get("X-Forwarded-For") || req.ip;
  const userIp = "192.168.1.1";

  // Check if the IP address is authorized
  if (authorizedIps.includes(userIp)) {
    // Generate a unique token
    const token = uuidv4();
    return Response.json(
      { userIp: userIpx, authorized: true, token: token },
      { status: 200 }
    );
  } else {
    return Response.json({ authorized: false }, { status: 403 });
  }
}
