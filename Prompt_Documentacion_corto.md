# Prompt de Documentacion (Version Corta)

Actua como arquitecto tecnico y profesor de codigo.

Genera o actualiza un archivo ARQUITECTURA.md en la carpeta principal del frontend, en espanol claro, tecnico y didactico, analizando solo codigo real del proyecto (sin suposiciones).

## Objetivo

Crear una guia de arquitectura que permita a un desarrollador nuevo entender el sistema en una sola lectura.

## Entregables obligatorios

1. Tabla de paginas y layout (vision rapida)
- Columnas: Ruta, Archivo de entrada, Estructura principal, Componentes clave.

2. Arbol de composicion por ruta (tipo DOM)
- Desde layout global hasta componentes hoja.
- Incluir ramas condicionales (loading, error, not found, empty).
- Marcar repetidos como x N.

3. Matriz de componentes compartidos
- Filas: componentes.
- Columnas: rutas.
- Marcar donde se usa cada componente.

4. Tabla didactica de elementos
- Columnas: Elemento, Donde esta, Para que sirve, Como lo hace.

5. Mapa de hooks
- Columnas: Archivo, Hooks usados, Para que se usan.
- Incluir useState, useEffect, useMemo, hooks de router y hooks custom.

6. Diagramas Mermaid por pagina
- Un diagrama separado por ruta principal.
- Cada nodo: "Nombre: para que sirve".
- Incluir leyenda de colores para root, page, component, state, hooks.
- Nodos con hooks: etiqueta visible [hooks] y color especial.

## Reglas Mermaid (anti errores)

- Labels entre comillas.
- Saltos con <br/>.
- Evitar [id] literal dentro de labels (usar :id).
- Sintaxis consistente en todos los diagramas.
- Usar classDef para: root, page, component, state, hooks.

## Comentarios en codigo

En cada archivo relevante agregar cabecera:
- Que hace
- De que depende
- Donde se usa
- Hooks usados (si aplica)

Agregar comentarios internos solo donde ayuden con logica no obvia.
No sobrecomentar lineas triviales.

## Cobertura minima

- Layout global
- Todas las rutas
- Navegacion
- Listados
- Detalle
- Estados (loading/error/not found)
- Formularios/reserva (si existen)
- Datos y tipos de dominio

## Calidad

- No romper codigo.
- Mantener estilo del proyecto.
- Verificar errores tras editar.
- Corregir errores de Markdown/Mermaid antes de terminar.
- Si hay incertidumbre, declararla en una seccion "Supuestos".

## Formato de respuesta final

1. Resumen de lo generado.
2. Secciones incluidas.
3. Archivos tocados.
4. Estado de validacion.
5. Hasta 3 sugerencias opcionales.
