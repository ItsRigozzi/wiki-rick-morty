# Tarea: Wiki de Rick and Morty (Ionic + React)

Aplicación web desarrollada como actividad evaluada, basada en los contenidos del Taller 4, utilizando **Ionic** y **React** para consumir los datos desde una API pública.

## Explicación del Proceso

El desarrollo de la aplicación siguió estos pasos principales:
1. **Creación del proyecto:** Se configuró un proyecto base utilizando "ionic start wiki-rick-morty blank --type=react".
2. **Estructura de la interfaz:** Se adaptó una página (`RickAndMortyPage.tsx`) definiendo una interfaz de TypeScript llamada `Character` para tipar correctamente los datos de la API (id, nombre, estado, especie e imagen).
3. **Manejo de estados:** Se implementó el hook `useState` para gestionar el listado de personajes, el indicador de carga (`cargando`) y el control de errores (`error`).
4. **Consumo de la API:** Mediante la función `fetch`, se realiza una petición asíncrona al (`https://rickandmortyapi.com/api/character`), extrayendo el arreglo interno de la propiedad `results`.
5. **Renderizado dinámico:** Se utilizó el método `.map()` para recorrer los datos y renderizar de forma dinámica un componente `<IonCard>` por cada personaje encontrado en la base de datos.

## Capturas de Pantalla

1. **Pantalla inicial / Estado de carga:**
   <img width="968" height="345" alt="image" src="https://github.com/user-attachments/assets/86cd4463-da8b-41c9-b64f-a67518b8ea90" />


2. **Visualización de los personajes cargados:**
   <img width="666" height="855" alt="image" src="https://github.com/user-attachments/assets/32dd73e2-0793-4e85-982f-a2773ca7a61a" />
