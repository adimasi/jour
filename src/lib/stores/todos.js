import { browser } from "$app/env";
import { writable } from "svelte/store";

let localTodos = browser ? localStorage.getItem("todos") : undefined;

export const todos = writable(localTodos ? JSON.parse(localTodos) : []);

todos.subscribe(newTodos => {
	if (browser) {
		localStorage.setItem("todos", JSON.stringify(newTodos));
	}
});

