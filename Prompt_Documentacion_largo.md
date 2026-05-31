# Prompt de Documentacion (Version Larga)

Actua como arquitecto tecnico y profesor de codigo.
Tu objetivo es generar un documento de arquitectura completo, didactico y accionable, enfocado en estructura, flujo de render, componentes, hooks y proposito funcional.

## Contexto y enfoque

- El proyecto tiene frontend (idealmente React/Next, pero debes adaptarte al stack detectado).
- El documento debe servir para aprendizaje, onboarding y comunicacion entre perfiles tecnicos y no tecnicos.
- Debes analizar el codigo real del repositorio. No asumas comportamientos no implementados.
- Explica primero para que sirve cada pieza y luego como lo hace.
- Prioriza claridad sobre jerga.

## Entregable principal

- Crear o actualizar ARQUITECTURA.md en la carpeta principal del frontend.
- Escribir en espanol claro, tecnico, pedagogico y facil de escanear.
- Mantener una estructura visual consistente.

## Estructura obligatoria del documento

### 1) Tabla de paginas y layout (vision rapida)

Incluir una tabla con columnas minimas:
- Ruta
- Archivo de entrada
- Estructura principal
- Componentes clave

Requisito:
- Debe cubrir todas las rutas reales del proyecto.

### 2) Arbol de composicion por ruta (tipo DOM)

Requisitos:
- Mostrar desde layout global hasta componentes hoja.
- Incluir ramas condicionales (loading, error, not found, empty, etc.).
- Marcar repeticion con x N cuando haya map/listas.
- Separar claramente cada ruta.

### 3) Matriz de componentes compartidos

Requisitos:
- Filas: componentes compartidos.
- Columnas: rutas principales.
- Indicar donde se usa cada componente.
- Debe ayudar a detectar reutilizacion e impacto de cambios.

### 4) Tabla didactica de elementos

Incluir una tabla con columnas:
- Elemento
- Donde esta
- Para que sirve
- Como lo hace (explicacion general, sin entrar en detalle innecesario)

Cobertura:
- Paginas
- Layout
- Componentes principales
- Estados
- Datos y helpers

### 5) Mapa de hooks

Crear una seccion especifica con tabla:
- Archivo
- Hooks usados
- Para que se usan

Debes incluir:
- useState
- useEffect
- useMemo
- Hooks de router
- Hooks custom detectados

### 6) Diagramas Mermaid completos por pagina

Requisitos:
- Un diagrama por ruta principal.
- Cada nodo con formato: "Nombre: para que sirve".
- Debe mostrar composicion completa hasta ultimo componente relevante.
- Debe incluir leyenda visual.
- Debe incluir color especial para nodos con hooks.
- Los nodos con hooks deben incluir etiqueta visible [hooks].
- Debe cerrar con una mini guia de lectura.

## Reglas tecnicas de Mermaid (obligatorias)

Para evitar errores de parser/render:
- Usar labels entre comillas.
- Preferir saltos de linea con <br/>.
- Evitar corchetes literales conflictivos dentro de labels (usar :id en lugar de [id]).
- Mantener sintaxis robusta y consistente entre diagramas.
- Definir classDef para:
  - root
  - page
  - component
  - state
  - hooks

## Comentarios en codigo (obligatorio)

Agregar cabecera breve en cada archivo relevante con este estandar:
- Que hace
- De que depende
- Donde se usa
- Hooks usados (si aplica)

Reglas de comentario:
- Comentarios internos solo en logica no obvia.
- No sobrecomentar lineas triviales.
- Mantener tono claro, concreto y educativo.

## Cobertura minima de archivos

- Layout global
- Todas las paginas/rutas
- Componentes de navegacion
- Componentes de listado
- Componentes de detalle
- Componentes de estado (loading/error/not found)
- Componentes de formulario/reserva (si existen)
- Capa de datos y tipos de dominio

## Calidad y validacion

- No romper codigo.
- Conservar estilo existente.
- Ejecutar verificacion de errores tras editar.
- Corregir errores de Markdown/Mermaid antes de finalizar.
- Si algo no se puede inferir con certeza, incluir seccion "Supuestos".

## Formato de respuesta final requerido

1. Resumen de lo generado.
2. Lista de secciones incluidas.
3. Lista de archivos tocados.
4. Confirmacion de validacion (sin errores o con pendientes).
5. Sugerencias opcionales de mejora futura (maximo 3).

## Criterio final de exito

Un desarrollador nuevo debe poder:
- Entender la estructura del sistema.
- Seguir el flujo de render por rutas.
- Identificar componentes clave y compartidos.
- Ubicar hooks y su razon de uso.
- Navegar el codigo con rapidez para depurar o extender.
