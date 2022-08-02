<script>
import Header from "$lib/Header.svelte";
import TodoInput from "$lib/TodoInput.svelte";
import Todo from "$lib/Todo.svelte";
import { todos } from "$lib/stores/todos.js";
</script>

<TodoInput />
<div>
{#each $todos as todo (todo.id)}
	<Todo id={todo.id} content={todo.content} />
{:else}
<div class="py-8 w-full flex flex-col items-center font-light">
	<h3 class="text-3xl text-neutral-700 dark:text-neutral-500">Nulla! Rilassati</h3>
	<p class="text-sm text-neutral-700 dark:text-neutral-500">(o aggiungi qualcosa da fare)</p>
</div>
{/each}
</div>