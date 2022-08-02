<script>
import Header from "$lib/Header.svelte";
import TodoInput from "$lib/TodoInput.svelte";
import Todo from "$lib/Todo.svelte";
import { todos } from "$lib/stores/todos.js";
</script>

<Header />
<TodoInput />

<div>
{#each $todos as todo (todo.id)}
	<Todo id={todo.id} content={todo.content} />
{/each}
</div>