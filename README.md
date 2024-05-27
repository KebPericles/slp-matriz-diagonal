# Systematic Layout Planning (SLP) - Matriz diagonal

> [!IMPORTANT]
> [CHECALO ACÁ](https://kebpericles.github.io/slp-matriz-diagonal/)

Este proyecto es una implementación de la matriz diagonal para el diseño de plantas industriales (aunque puede ser usado para cualquier tipo de diseño para distribuir áreas de trabajo). La matriz diagonal es una herramienta que permite visualizar la relación entre las áreas de trabajo, de manera que se pueda optimizar la distribución de las mismas.

De momento la implementación es muy básica y no cuenta con todas las funcionalidades que se podrían implementar, tampoco se tiene la intención de mejorarla en un futuro cercano. Sin embargo, si alguien desea mejorarla, puede hacer un fork del proyecto y hacer las mejoras que considere necesarias.

## Tip de uso 

Esto no es una guía, solo es un tip para editar más rápido el JSON de las relaciones

1. Copia el JSON del textarea a tú editor de texto favorito
2. Editalo
3. Copialo de nuevo
4. Pégalo directamente en la página y se actualizará completamente, no necesitas seleccionar nada, ni siquiera necesitas estar en el textarea, simplemente lo pegas y se modificará el valor del textarea y actualizará los valores en la matriz.

## Instrucciones para correr el proyecto localmente

1. Clonar el repositorio
2. Instalar las dependencias

```bash
npm install
```

3. Correr el proyecto

```bash
npm run dev

# o iniciar el servidor y abrir el navegador automáticamente
npm run dev -- --open
```

## Mejoras futuras

- [ ] Instrucciones de uso
- [ ] Modificar los departamentos desde la interfaz
- [ ] Modificar los valores de las relaciones en la matriz desde la interfaz (se me ocurre con la rueda del mouse al poner el puntero sobre el valor a modificar)
