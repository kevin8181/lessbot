import type {
	SlashCommandBuilder,
	ChatInputCommandInteraction,
	SlashCommandOptionsOnlyBuilder,
} from "discord.js";

/**
 * Defines the structure of a command
 */
export type SlashCommand = {
	data: SlashCommandBuilder | SlashCommandOptionsOnlyBuilder;
	execute(interaction: ChatInputCommandInteraction): Promise<void> | void;
};

import ask from "./general/ask.js";

export default [ask] satisfies SlashCommand[];
