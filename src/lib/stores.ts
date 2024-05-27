import { writable } from 'svelte/store';

// stores.ts

// Define the initial state
const relationFocus = writable(false);
const activeDepartment = writable(-1);
const activeDepartment2 = writable(-1);



export function relationFocusOn() {
	relationFocus.set(true);
}

export function relationFocusOff() {
	relationFocus.set(false);
}

// Export the active department store
export { activeDepartment, activeDepartment2, relationFocus };
