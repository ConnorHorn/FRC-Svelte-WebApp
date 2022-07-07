import {writable} from "svelte/store";

export const clicks = writable(0);
export const attentionAlert = writable(false);