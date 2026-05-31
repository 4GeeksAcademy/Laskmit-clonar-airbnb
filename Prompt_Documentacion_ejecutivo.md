# Prompt de Documentacion (Version Ejecutiva)

Actua como arquitecto tecnico y comunicador ejecutivo.

Crea o actualiza ARQUITECTURA.md con una version clara, breve y visual que permita a personas tecnicas y no tecnicas entender rapidamente como funciona el proyecto.

## Objetivo

Entregar una radiografia del sistema para:
- onboarding rapido
- toma de decisiones
- deteccion de impacto de cambios

## Entregable

Genera ARQUITECTURA.md en la carpeta principal del frontend, en espanol claro y con estructura escaneable.

## Secciones obligatorias (resumen ejecutivo)

1. Vista general del sistema
- 5 a 10 lineas: que hace el producto y como esta organizado.

2. Rutas principales y layout
- Tabla con: Ruta, Archivo de entrada, Objetivo de la pagina, Componentes clave.

3. Flujo de render por ruta (arbol simplificado)
- Un arbol por ruta, desde layout global hasta componentes finales.
- Incluir condiciones clave: loading/error/not found.

4. Componentes compartidos
- Matriz simple para ver reutilizacion e impacto de cambios.

5. Hooks y estado
- Tabla: Archivo, Hooks usados, Motivo de uso.
- Incluir al menos useState, useEffect, useMemo y hooks de router (si existen).

6. Diagramas Mermaid
- Un diagrama por pagina principal.
- Nodo con formato: "Nombre: para que sirve".
- Marcar nodos con hooks con etiqueta [hooks] y color diferenciado.
- Incluir leyenda de colores.

7. Riesgos y oportunidades
- Lista corta (maximo 5) con puntos de deuda tecnica, riesgos o mejoras de alto impacto.

## Reglas de calidad

- Basarse solo en codigo real.
- No suponer funcionalidades no implementadas.
- Mantener precision tecnica con lenguaje simple.
- Corregir errores de Mermaid/Markdown antes de finalizar.
- Validar que no se rompa el proyecto.

## Comentarios en codigo (si se solicita)

Agregar cabecera breve en archivos clave:
- Que hace
- De que depende
- Donde se usa
- Hooks usados (si aplica)

## Reglas Mermaid (anti errores)

- Labels entre comillas.
- Saltos con <br/>.
- Evitar [id] literal en labels; usar :id.
- Definir classDef para: root, page, component, state, hooks.

## Formato de respuesta final

1. Resumen ejecutivo (8 a 12 lineas).
2. Secciones generadas.
3. Archivos tocados.
4. Estado de validacion.
5. 3 recomendaciones priorizadas.
