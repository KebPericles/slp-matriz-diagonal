<script lang="ts">
	import Department from '$lib/components/Department.svelte';
	import { generateRelations } from '$lib/departmentUtils';
	import Relations from './Relations.svelte';

	const departments = [
		{ name: 'Dirección', id: 1 },
		{ name: 'Subdirección', id: 2 },
		{ name: 'Jefatura', id: 3 },
		{ name: 'Aulas', id: 4 },
		{ name: 'Biblioteca', id: 5 },
		{ name: 'Laboratorios', id: 6 },
		{ name: 'Cafetería', id: 7 },
		{ name: 'Estacionamientos', id: 8 },
		{ name: 'Baños', id: 9 },
		{ name: 'CAE', id: 10 },
		{ name: 'Áreas de estudio', id: 11 },
		{ name: 'Áreas recreativas', id: 12 },
		{ name: 'Cultural', id: 13 },
		{ name: 'Deportiva', id: 14 },
		{ name: 'Comercial', id: 15 },
		{ name: 'Médico', id: 16 },
		{ name: 'Almacén', id: 17 },
		{ name: 'Salas de cómputo', id: 18 }
	];
	let relations_json = JSON.stringify(generateRelations(departments));
	let relations = JSON.parse(relations_json);
</script>

<svelte:window
	on:paste={(e) => {
		relations_json = e?.clipboardData?.getData('text/plain') ?? relations_json;
		relations = JSON.parse(relations_json);
	}}
/>

<!-- Nuevos departamentos -->
<textarea
	name="relations-json"
	class="w-3/4 text-cyan-950"
	id="relations-json"
	bind:value={relations_json}
></textarea>

<button
	class="bg-blue-900 p-2 text-white active:bg-blue-500"
	on:click={() => {
		relations = JSON.parse(relations_json);
	}}
>
	Actualizar
</button>

<!-- V2 -->
<section class="mx-6 flex">
	<header>
		<ul>
			{#each departments as department}
				<Department inicial={department.id === 1} final={department.id === 18} {department}
				></Department>
			{/each}
		</ul>
	</header>
	<section class="relative flex h-auto items-center">
		<Relations {relations} />
	</section>
</section>

<style>
	ul {
		list-style-type: none;
	}
</style>
