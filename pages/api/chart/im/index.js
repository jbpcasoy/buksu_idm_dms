import getChartImHandler from "@/services/handlers/chart/im/getChartImHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return getChartImHandler(req, res);
    default:
      methodNaHandler(req, res);
  }
}
