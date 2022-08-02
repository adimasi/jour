<script>
import { todos } from "$lib/stores/todos.js";

export let id;
export let content;

const deleteTodo = () => {
	let iToRemove = -1;
	$todos.forEach((todo, i) => {
		if (todo.id === id) {
			iToRemove = i;
		}
	});

	if (iToRemove >= 0) {
		$todos.splice(iToRemove, 1);
		$todos = $todos;
	}
}
</script>

<div class="bg-slate-800 my-4 px-8 py-4 rounded-md flex item-baseline justify-between">
	<p class="text-xl">{content}</p>
	<button on:click={deleteTodo} class="px-6 py-1">&#9587;</button>
</div>