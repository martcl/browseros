import { writable } from 'svelte/store';

function createMouse() {
	const { subscribe, set, update } = writable({x: 100, y: 100, mouseDown: false});

	return {
		subscribe,
        set,
		setMousePos: (x: number, y: number) => update(oldMouse => {
            return {
                ...oldMouse,
                x,
                y
            }
        }),
        setMouseClicked: () => update(oldMouse => {
            return {
                ...oldMouse,
                mouseDown: !oldMouse.mouseDown
            }
        }),
	};
}

export const mouse = createMouse();
