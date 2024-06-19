import dotenv from "dotenv";
dotenv.config();

import { cleanEnv, str } from "envalid";

export default cleanEnv(process.env, {
	OPENAI: str(),

	TOKEN: str(),
	CLIENT_ID: str(),
	GUILD_ID: str(),
});
