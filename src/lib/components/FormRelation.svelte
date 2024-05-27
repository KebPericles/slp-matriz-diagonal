<script lang="ts">
	export let departments = [
		{ name: 'Departamento 1', id: 1 },
		{ name: 'Departamento 2', id: 2 },
		{ name: 'Departamento 3', id: 3 },
		{ name: 'Departamento 4', id: 4 }
	];

	export let onSubmited = (relation: {
		department1: number;
		department2: number;
		relation: { razon: number; relacion: string };
	}) => {
		console.log(relation);
	};

	const handleAddRelation = () => {
		const department1 = document.querySelector('select[name="department1"]');
		const department2 = document.querySelector('select[name="department2"]');
		const relation = document.querySelector('input[name="relation"]');
		const razon = document.querySelector('input[name="razon"]');
	};
</script>

<!-- Relaciones de departamentos -->

<select name="department1" class="border-2 border-blue-200 p-2 text-blue-950">
	{#each departments as department}
		<option value={department.id}>{department.name}</option>
	{/each}
</select>

<select name="department2" class="border-2 border-blue-200 p-2 text-blue-950">
	{#each departments as department}
		<option value={department.id}>{department.name}</option>
	{/each}
</select>

<input type="text" class="border-2 border-blue-200 p-2" placeholder="Ingrese relación" />

<input type="text" class="border-2 border-blue-200 p-2" placeholder="Ingrese razón" />

<button class="bg-blue-900 p-2 text-white" on:click={handleAddRelation}>Agregar</button>
