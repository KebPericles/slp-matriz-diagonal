import { Proximidad, type Department, type RelationMap } from '$lib/types';

// Generar relations de departamentos
export const generateRelations = (departments: Department[]): RelationMap => {
	const relations: RelationMap = {};

	departments.forEach((department, index) => {
		for (let i = index + 1; i < departments.length; i++) {
			if (!relations[department.id]) relations[department.id] = {};

			relations[department.id][departments[i].id] = {
				razon: 1,
				proximidad: Proximidad.U
			};
		}
	});
	return relations;
};
