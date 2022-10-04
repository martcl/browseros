import welcomeWindow from '$lib/components/welcomeWindow.svelte';
import { writable } from 'svelte/store';

export type process = {
	id: number;
	isOpen: boolean;
	isRendered: boolean;
	isFocus: boolean;
	title: string;
	component: any;
};

function createProcesses() {
	const { subscribe, update } = writable<process[]>([{id: 0, isFocus: true, isOpen: true, isRendered: true, title: "TIHLDE OS", component: welcomeWindow}]);

	return {
		subscribe,
		addNewProcess: (process: Omit<process, 'id' | 'isOpen' | 'isFocus' | 'isRendered'>) => {
			const id = Math.floor(Math.random() * 100000);
			update((prevProcesses) => [
				...prevProcesses.map((process) => {
					return { ...process, isFocus: false };
				}),
				{ ...process, id: id, isOpen: true, isFocus: true, isRendered: true }
			]);
		},
		onFocus: (id: number) =>
			update((prevProcesses) =>
				prevProcesses.map((process) => {
					if (process.id === id) return { ...process, isFocus: true };
					return { ...process, isFocus: false };
				})
			),
		onMinimize: (id: number) =>
			update((prevProcesses) =>
				prevProcesses.map((process) => {
					if (process.id === id) return { ...process, isFocus: false, isOpen: !process.isOpen };
					return process;
				})
			),
		removeProcessWithId: (id: number) =>
			update((prevProcesses) =>
				prevProcesses.map((process) => {
					if (process.id === id) return { ...process, isFocus: false, isRendered: false, isOpen: false };
					return process;
				})
			),
	};
}

export const processes = createProcesses();
