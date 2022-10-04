import { writable } from 'svelte/store';

export type process = {
	id: number;
	isOpen: boolean;
	isFocus: boolean;
	title: string;
	component: any;
};

function createProcesses() {
	const { subscribe, set, update } = writable<process[]>([]);

	return {
		subscribe,
		set,
		update,
		addNewProcess: (process: Omit<process, 'id' | 'isOpen' | 'isFocus'>) => {
			const id = Math.floor(Math.random() * 100000);
			update((prevProcesses) => [
				...prevProcesses.map((process) => {
					return { ...process, isFocus: false };
				}),
				{ ...process, id: id, isOpen: true, isFocus: true }
			]);
		},
		onFocus: (id: number) =>
			update((prevProcesses) => prevProcesses.map(process => {
                if (process.id === id) return {...process, isFocus: true}
                return {...process, isFocus: false}
            })),
        onMinimize: (id: number) =>
			update((prevProcesses) => prevProcesses.map(process => {
                if (process.id === id) return {...process, isFocus: false, isOpen: !process.isOpen}
                return process
            })),
		removeProcessWithId: (id: number) =>
			update((prevProcesses) => [...prevProcesses.filter((process) => process.id !== id)])
	};
}

export const processes = createProcesses();
