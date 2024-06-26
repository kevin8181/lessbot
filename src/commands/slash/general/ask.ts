import env from "../../../lib/util/env.js";
import { SlashCommandBuilder } from "discord.js";
import OpenAI from "openai";
import { SlashCommand } from "../index.js";

export default {
	data: new SlashCommandBuilder()
		.setName("ask")
		.setDescription("Ask AI a question")
		.addStringOption((option) =>
			option
				.setName("prompt")
				.setDescription("The question you want to ask")
				.setRequired(true)
		),

	async execute(interaction) {
		await interaction.deferReply();

		const openai = new OpenAI({
			apiKey: env.OPENAI,
		});

		const prompt = interaction.options.getString("prompt");
		if (!prompt) return;

		const response = await openai.chat.completions.create({
			model: "gpt-3.5-turbo",
			messages: [
				{
					role: "user",
					content: prompt,
				},
			],
		});

		if (response.choices[0].message.content) {
			await interaction.editReply(
				response.choices[0].message.content.substring(0, 2000)
			);
		}
	},
} satisfies SlashCommand;
