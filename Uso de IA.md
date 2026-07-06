# Análisis Técnico del Proyecto CYSAM
## Uso de IA, Tailwind CSS y Estructura de Base de Datos


---


##  Tabla de Contenidos
1. [Integración de IA - Chat Service](#integración-de-ia---chat-service)
2. [Tailwind CSS - Sistema de Estilos](#tailwind-css---sistema-de-estilos)
3. [Article Service - Transformación de Base de Datos](#article-service---transformación-de-base-de-datos)
4. [Conclusiones Técnicas](#conclusiones-técnicas)


---


##  Integración de IA - Chat Service


### Descripción General
El proyecto CYSAM implementa un **asistente inteligente basado en IA** que se integra mediante el servicio `chatService.ts`. Este servicio actúa como intermediario entre la interfaz de usuario y una API externa de inteligencia artificial alojada en el backend.


### Uso de IA
Se utiliza el modelo de gemini 2.5 para apoyo en la creacion de el chatbot al pedirle que solucione errores que sucedian al hacer intentos de consulta desde el front-end y esta agrega funciones como el trim


### Arquitectura del Chat IA


**Ubicación:** `src/services/chatService.ts`


El servicio de chat está diseñado como un módulo exportable que centraliza toda la comunicación con la IA. Se conecta a una API backend local en el puerto 3000, específicamente al endpoint `/api/ai`. El servicio expone un método `sendMessage` que acepta un mensaje de texto del usuario y retorna la respuesta de la IA de manera asíncrona.




### ¿Cómo Funciona?


1. **Envío de Mensajes**: El usuario escribe un mensaje en la interfaz del chat.
2. **Llamada a la API**: El servicio realiza una solicitud POST a `http://localhost:3000/api/ai`.
3. **Procesamiento en Backend**: La IA procesa el mensaje en el servidor.
4. **Respuesta**: El servidor retorna una respuesta inteligente en formato JSON.
5. **Visualización**: El mensaje de la IA se muestra en la conversación.


### Implementación en la Página Principal


**Ubicación:** `src/pages/principal.tsx`


El chat está integrado en la página principal como una sección interactiva que mantiene un historial de conversación entre el usuario y el bot. Los mensajes se almacenan en un estado que diferencia entre mensajes del usuario y respuestas del bot. Cada mensaje tiene un remitente (usuario o bot) y un texto asociado.


La página incluye un campo de entrada donde el usuario escribe su pregunta. Al presionar enviar, se valida que el mensaje no esté vacío y que no haya una solicitud en progreso (para evitar requests simultáneos). El flujo es:


1. El mensaje del usuario se agrega al historial inmediatamente
2. Se activa un estado de carga para deshabilitar el botón
3. Se envía el mensaje al servicio de chat
4. La respuesta de la IA se agrega al historial
5. Si hay error, se muestra un mensaje de error personalizado
6. Se desactiva el estado de carga


El bot inicia con un mensaje de bienvenida preguntando cómo puede ayudar al usuario.


### Capacidades de la IA


Según la descripción en la interfaz:


> _"Nuestra Inteligencia Artificial está lista para analizar posibles mensajes fraudulentos, correos sospechosos o guiarte en los pasos que debes seguir si comprometieron tus datos."_


**Funcionalidades principales:**
-  Análisis de mensajes fraudulentos
-  Detección de correos sospechosos
-  Asesoramiento en casos de compromiso de datos
-  Orientación paso a paso para usuarios


### Manejo de Errores


El servicio implementa un manejo robusto de errores:
- Validación de respuesta HTTP (`.ok`)
- Mensajes de error personalizados
- Fallback a mensajes genéricos
- Logging en consola para debugging


---


##  Tailwind CSS - Sistema de Estilos


### Configuración Inicial


Tailwind CSS está configurado como un plugin de Vite, lo que permite que se compile junto con React. La versión utilizada es la 4.3.0, que es la más reciente. Se importa globalmente en el archivo de estilos principal, lo que significa que las clases de Tailwind están disponibles en toda la aplicación.


### Uso de Tailwind en Componentes


#### 1. **AuthForm.tsx** - Formularios de Autenticación


El componente de autenticación utiliza Tailwind para crear una interfaz moderna y responsiva. El formulario se centra en la pantalla con un fondo gris claro y un contenedor principal en azul CYSAM.


La estructura incluye un título pequeño en la esquina superior izquierda, el logo de CYSAM, un subtítulo descriptivo, y los campos de entrada dinámicos (nombre, email, contraseña). Cada campo tiene una etiqueta y un input con estilos personalizados. Los campos se distribuyen verticalmente con espaciado uniforme.


La interfaz está optimizada para centrar visualmente los elementos y proporciona una experiencia de usuario limpia y profesional.


#### 2. **ArticleCard.tsx** - Tarjetas de Artículos


Este componente es altamente interactivo y presenta artículos en formato de tarjeta. Cada tarjeta tiene una imagen o video como fondo, con un área superior que ocupa la mayor parte del espacio visual. Al pasar el mouse sobre la tarjeta, se activan varios efectos visuales simultáneamente.


Si el artículo es de tipo audiovisual (video o YouTube), al hacer hover se muestra un preview en video sobre la imagen estática. El texto del título y resumen aparece en una capa oscurecida sobre la imagen. La tarjeta se eleva visualmente (efecto transform) y aparece una sombra más pronunciada. Todos estos cambios ocurren con transiciones suaves de 300-500 milisegundos.


En la parte inferior hay un botón azul CYSAM que dice "VER" para navegar al detalle del artículo. Los bordes de la tarjeta son redondeados (28px) para darle un aspecto moderno.


#### 3. **Principal.tsx** - Página Principal


La página principal está estructurada en múltiples secciones. Inicia con un banner de bienvenida de altura considerable que contiene una imagen de fondo y un headline provocador que pregunta si el usuario ha sido víctima de estafas. El texto aparece en blanco sobre la imagen.


Debajo está la sección principal que contiene el título "¡En CYSAM Podemos Ayudarte!" con un subrayado azul, un video embebido de YouTube como tutorial, y la sección del chatbot IA.


Todo el layout es totalmente responsivo: el padding cambia entre móviles (6px) y desktop (24px), los tamaños de fuente se ajustan, y la alineación del texto se adapta según el tamaño de pantalla.


#### 4. **YouTubeEmbed.tsx** - Componentes Multimedia


Este componente es un envoltorio reutilizable para embeber videos de YouTube de manera limpia. El iframe se adapta automáticamente al ancho disponible y mantiene la relación de aspecto 16:9. Tiene bordes redondeados y una sombra sutil para integrarse visualmente con el resto de la página.


### Clases Personalizadas Utilizadas


El proyecto define clases personalizadas de Tailwind:


- **`bg-cysam-blue`**: Color azul principal de CYSAM (#02387E)
- **`bg-cysam-blue-dark`**: Variante oscura del azul principal
- **`text-cysam-blue`**: Texto en color azul CYSAM
- **`text-cysam-blue-dark`**: Texto en azul oscuro


### Patrones Tailwind Recurrentes


1. **Flexbox Centering**: Se usa para centrar elementos horizontales y verticales de manera consistente
2. **Espaciado Uniforme**: Se aplica padding y margin usando el sistema de espaciado de Tailwind
3. **Transiciones Suaves**: Las animaciones duran 300-500ms para no ser abruptas
4. **Sombras Interactivas**: Las sombras aparecen/intensifican en estados hover
5. **Tipografía**: Se usan diferentes pesos de fuente según la jerarquía visual
6. **Bordes Redondeados**: Se usa un radio consistente de 28px para tarjetas y componentes principales


---


## 🗄️ Article Service - Transformación de Base de Datos


### Descripción del Problema Original


El backend utiliza **PostgreSQL con Neon**, que por convención de SQL almacena los nombres de columnas en **snake_case** (separadas por guiones bajos). Sin embargo, **React y TypeScript siguen la convención de camelCase** (primera letra minúscula y cada nueva palabra con mayúscula). Esto crea un desajuste entre cómo se nombran las propiedades en la base de datos y cómo se espera usarlas en la aplicación frontend.


### Solución con Ayuda de IA


**Comentario en el código:**


> _"Se le pide a la IA ayuda para no cambiar toda la estructura de la db ya existente por lo que recomienda lo siguiente: Esta sección actúa como una capa de transformación que normaliza los datos asíncronos que vienen de Neon. Transforma las propiedades en snake_case nativas de PostgreSQL a variables en camelCase compatibles con nuestros componentes de React, asegurando la compatibilidad de tipados mediante TypeScript y asignando valores de respaldo en caso de datos nulos."_


La IA recomendó crear una **capa de transformación** en lugar de modificar la estructura de la base de datos. Esto es más práctico porque: no requiere migración de datos en la BD existente, es mantenible y centralizado, permite flexibilidad en el backend, y asegura que React siempre reciba datos correctamente formateados.


### Tipos de Datos


**Ubicación:** `src/types/articleType.ts`


Se define una interfaz TypeScript llamada `ArticleType` que especifica la estructura que deben seguir los artículos en toda la aplicación. Esta interfaz usa camelCase y define campos obligatorios (id, title, summary, mediaUrl, mediaType, linkUrl, content) y campos opcionales (linkPreview, linkImagePreview, posterUrl). El tipo de mediaType es muy específico: solo puede ser 'video', 'image' o 'youtube', lo que asegura que no haya valores inválidos.


### Implementación de la Transformación


**Ubicación:** `src/services/articleService.ts`


#### Método: `getAllArticles()`


Este método obtiene todos los artículos de la base de datos. Realiza una petición HTTP GET al API backend y, una vez recibe la respuesta, realiza una transformación de datos crítica. Cada artículo que viene de la BD en snake_case se transforma a camelCase de forma individual usando un mapeo.


La transformación es inteligente: para cada propiedad, usa el operador OR (`||`) para priorizar la versión snake_case de la BD, pero si no existe, usa la versión camelCase como fallback. Para algunos campos como `buttonText`, proporciona un valor por defecto ('VER') si ambas versiones están ausentes.


Si ocurre algún error en la conexión, devuelve un array vacío en lugar de lanzar un error, lo que permite que la aplicación siga funcionando.


#### Método: `getArticleById()`


Este método obtiene un artículo específico por su ID. Realiza la misma transformación de datos que `getAllArticles()`, pero para un único artículo. Si el artículo existe, lo retorna transformado a camelCase. Si no existe o hay error en la conexión, retorna `undefined`, lo que permite al componente que lo consume mostrar un mensaje de error o página no encontrada.


#### Método: `createArticle()`


Este método permite crear nuevos artículos. A diferencia de los otros métodos, aquí SE ESPERA que el cliente envíe los datos en snake_case (como viene de la BD), porque el backend también los espera en ese formato. El método requiere autenticación: obtiene el token JWT del localStorage y lo envía en el header `Authorization` con formato `Bearer <token>`.


La petición es POST al endpoint `/create`. Si falla, lanza un error que puede ser capturado por el componente que lo llama (como el formulario de crear artículos).


### Ventajas de Esta Arquitectura


1. **No Modifica la BD**: Mantiene la estructura existente en PostgreSQL
2. **Compatibilidad React**: Transforma datos al estándar JavaScript
3. **Type Safety**: TypeScript asegura tipos correctos en toda la aplicación
4. **Valores por Defecto**: Maneja datos nulos o faltantes
5. **Flexibilidad**: Acepta ambos formatos (snake_case y camelCase)
6. **Escalabilidad**: La transformación es consistente en todos los métodos


### Patrón de Transformación


La transformación funciona en tres capas: los datos vienen de PostgreSQL en snake_case, se transforman en el servicio usando operadores OR para priorizar snake_case pero permitir fallback a camelCase, y finalmente llegan al componente React en camelCase puro.


Este patrón es crucial porque permite que la BD mantenga su estructura original (facilitando mantenimiento de la base de datos) mientras la aplicación usa la convención de nombres moderna de JavaScript. Es un ejemplo perfecto de arquitectura en capas donde cada capa tiene responsabilidades bien definidas.


---


## Conclusiones Técnicas


### 1. **Arquitectura de IA**
-  Implementación centralizada a través de `chatService`
-  Comunicación asíncrona con backend
-  Manejo robusto de errores
-  Interfaz conversacional interactiva
- **Beneficio**: Escalable y mantenible


### 2. **Sistema de Estilos (Tailwind)**
-  Configuración moderna con Vite
-  Uso extensivo de clases utility
-  Clases personalizadas para marca CYSAM
-  Responsive design integrado
-  Efectos interactivos suaves (transiciones, hover)
- **Beneficio**: Interfaz consistente y profesional


### 3. **Abstracción de Base de Datos**
-  Capa de transformación entre BD y frontend
-  Normalización de datos automática
-  Type safety con TypeScript
-  Valores por defecto inteligentes
-  Compatible con estructura existente
- **Beneficio**: Mantenimiento simplificado y menos bugs


### 4. **Uso de IA en el Desarrollo**
La IA fue utilizada específicamente en:
- **Consejo arquitectónico**: Propuesta de capa de transformación
- **Generación de código**: Métodos de transformación de datos
- **Optimización**: Patrones de fallback y valores por defecto


---


##  Resumen Técnico


| Componente | Tecnología | Propósito | Estado |
|-----------|-----------|---------|--------|
| Chat      | OpenAI/IA API | Asistente inteligente |  Funcional |
| Estilos   | Tailwind CSS v4.3 | Diseño UI/UX |  Implementado |
| BD        | PostgreSQL/Neon | Almacenamiento artículos |  Transformado |
| Auth      | JWT Tokens | Autenticación usuarios |  Integrado |
| Routing   | React Router | Navegación SPA |  Configurado |


---


**Documento generado:** 06/07/2026  
**Proyecto:** CYSAM - Ciberseguridad y Seguridad de Acceso a Mensajería  
**Stack:** React + TypeScript + Tailwind CSS + Vite



Uso de Inteligencia Artificial en el Frontend (Esteban)
Se utilizó Inteligencia Artificial como apoyo para desarrollar la lógica del sistema de registro e inicio de sesión de usuarios, incluyendo la comunicación con el backend, el manejo de las respuestas de autenticación y el almacenamiento del token de sesión.
Además, se utilizó IA para comprender e implementar el manejo de roles y permisos de usuario, ya que inicialmente no se tenía conocimiento sobre cómo controlar el acceso a determinadas funcionalidades. Con este apoyo se desarrolló la lógica necesaria para diferenciar entre usuarios normales y administradores, permitiendo que únicamente los usuarios con rol de administrador puedan realizar acciones como crear y eliminar artículos.
Las soluciones propuestas por la IA fueron revisadas, adaptadas e integradas a la estructura existente del proyecto CYSAM.
