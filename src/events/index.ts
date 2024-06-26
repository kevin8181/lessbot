import type { ClientEvents } from "discord.js";
/**
 * Defines the structure of an event.
 */
export type Event<T extends keyof ClientEvents = keyof ClientEvents> = {
	/**
	 * The function to execute when the event is emitted.
	 *
	 * @param parameters - The parameters of the event
	 */
	execute(...parameters: ClientEvents[T]): Promise<void> | void;
	/**
	 * The name of the event to listen to
	 */
	name: T;
	/**
	 * Whether or not the event should only be listened to once
	 *
	 * @defaultValue false
	 */
	once?: boolean;
};

import client from "../lib/discord/client.js";

const events: Event[] = [];

for (const event of events) {
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}
