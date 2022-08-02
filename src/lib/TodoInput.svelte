<script>
import { todos } from "$lib/stores/todos.js";

let todoContent = "";

const addTodo = () => {
	const newTodo = {
		"id": Date.now(),
		"content": todoContent
	};

	$todos.unshift(newTodo);
	$todos = $todos;
	
	todoContent = "";
}
</script>

<form class="text-xl flex gap-2" on:submit|preventDefault={addTodo}>
	<input type="text" bind:value={todoContent} placeholder="Devo fare..."
	class=" grow px-8 py-4 rounded-md border-2 border-slate-600 bg-slate-900 outline-none focus:border-slate-400">
	<button class="flex-initial px-8 py-4 bg-slate-200 text-slate-900 rounded-md" type="submit">&plus;</button>
</form>