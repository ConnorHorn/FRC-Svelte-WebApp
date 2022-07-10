import {writable} from "svelte/store";


export const matchStage = writable(1);
export const clicks = writable(0);
export const attentionAlert = writable(false);
export const startPosX = writable(-500);
export const startPosY = writable(-500);
export const autoStage = writable(1);
export const pageLoadNoClick = writable(true)
export const autoUpperScore = writable(0);
export const autoUpperFail = writable(0);
export const autoLowerScore = writable(0);
export const autoLowerFail = writable(0);
export const teleUpperScore = writable(0);
export const teleUpperFail = writable(0);
export const teleLowerScore = writable(0);
export const teleLowerFail = writable(0);