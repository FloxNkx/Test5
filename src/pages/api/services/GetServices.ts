import { NextApiRequest, NextApiResponse } from "next";
import axios from '@/settings/axiosConfig'
import { logInfo, logError } from "@/services/Logger";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  logInfo("SSR: API call to /api/GetServices");

  try {
    const baseUrl = process.env.NEXT_PUBLIC_CARRECTLY_ADMIN_BACKEND_URL;

    const response = await axios.get(`${baseUrl}/api/v1/services/only`);

    res.status(200).json(response.data);
    logInfo("SSR: Successfully returned services from /api/getServices");
  } catch (error) {
    logError("SSR: Error in /api/getServices API route", error);
    res
      .status(500)
      .json({ error: "SSR: An error occurred while fetching services." });
  }
}
