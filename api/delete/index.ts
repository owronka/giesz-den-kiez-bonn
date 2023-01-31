import { VercelRequest, VercelResponse } from "@vercel/node";
import setHeaders from "../../_utils/set-headers";
import { setupResponseData } from "../../_utils/setup-response";

export default async function handler(
	_request: VercelRequest,
	response: VercelResponse
) {
	setHeaders(response, "DELETE");
	try {
		return response
			.status(200)
			.json(setupResponseData({ message: "its working" }));
	} catch (error) {
		return response
			.status(500)
			.json(setupResponseData({ error: "its not working" }));
	}
}
