import {writable} from "svelte/store";

export const clicks = writable(0);
export const attentionAlert = writable(false);
export const startPosX = writable(0);
export const startPosY = writable(0);
export const autoStage = writable(1);