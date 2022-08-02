<script>
import { todos } from "$lib/stores/todos.js";

let todoContent = "";

const addTodo = () => {
	const trimmedContent = todoContent.trim();

	if (!trimmedContent) return

	const newTodo = {
		"id": Date.now(),
		"content": trimmedContent
	};

	$todos.unshift(newTodo);
	$todos = $todos;
	
	todoContent = "";
}
</script>

<form class="text-xl flex gap-2" on:submit|preventDefault={addTodo}>
	<input type="text" bind:value={todoContent} placeholder="Devo fare..."
	class="grow px-8 py-4 rounded-md border-2 bg-transparent outline-none placeholder:font-light placeholder:text-lg placeholder:text-neutral-600 placeholder:dark:text-neutral-500 border-neutral-600 dark:border-neutral-600 focus:border-neutral-900 focus:dark:border-neutral-400">
	<button class="flex-initial px-8 py-4 bg-neutral-800 text-neutral-100 dark:bg-neutral-200 dark:text-neutral-900 rounded-md"
	type="submit">&plus;</button>
</form>