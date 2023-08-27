import { writable } from "svelte/store";

function createCalculator() {
    const { subscribe, set, update } = writable(0);

    return {
        subscribe,
        increment: () => update(n => n + 1),
        decrement: () => update(n => n - 1),
        double: () => update(n => n * 2),
        half: () => update(n => n / 2),
        reset: () => set(0)
    };
}

export const calculatedNumber = createCalculator();

