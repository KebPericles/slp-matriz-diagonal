export enum Proximidad {
	A = 'A',
	E = 'E',
	I = 'I',
	O = 'O',
	U = 'U',
	X = 'X',
	XX = 'XX'
}

// Descripciones de las proximidades
export const ProximidadDescripcion = {
	[Proximidad.A]: 'Absolutamente necesario',
	[Proximidad.E]: 'Especilamente importante',
	[Proximidad.I]: 'Importante',
	[Proximidad.O]: 'Ordinario o normal',
	[Proximidad.U]: 'No importante',
	[Proximidad.X]: 'Indeseable',
	[Proximidad.XX]: 'Extremadamente indeseable'
};

export enum Razon {
	Control = 1,
	Higiene = 2,
	Proceso = 3,
	Conveniencia = 4,
	Seguridad = 5
}

export type Department = {
        id: number;
        name: string;
};

export type RelationType = {
	razon: Razon;
	proximidad: Proximidad;
};

export type RelationMap = {
	[key in string]: { [key in string]: RelationType };
};
