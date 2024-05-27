<script lang="ts">
	import Relation from '$lib/components/Relation.svelte';
	import type { RelationMap, RelationType } from '$lib/types';

	export let relations: RelationMap;

	// Generate the array of relations to show
	let list_relations: {
		department1: number;
		department2: number;
		relation: RelationType;
	}[][] = [];
	let department_keys = Object.keys(relations).map((key) => parseInt(key));
	$: {
		list_relations = [];
		

		for (let i = 0; i < department_keys.length; i++) {
			let inner_list: {
				department1: number;
				department2: number;
				relation: RelationType;
			}[] = [];
			for (let j = 0; j < department_keys.length - i; j++) {
				const department1 = department_keys[j];
				const department2 = department_keys[j] + i + 1;

				inner_list.push({
					department1: department1,
					department2: department2,
					relation: relations[department1][department2]
				});
			}

			list_relations.push(inner_list);
		}
	}
</script>

{#each list_relations as relations (relations)}
	<ul class="list-none">
		{#each relations as relation}
			<Relation {...relation}></Relation>
		{/each}
	</ul>
{/each}
