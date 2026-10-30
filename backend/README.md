# Backend — Tanku

API REST desarrollada con NestJS y TypeScript. Actualmente expone un endpoint de estado y un endpoint de productos que obtiene su información de [Fake Store API](https://fakestoreapi.com/products).

## Requisitos

- Node.js 22 (versión utilizada por el `Dockerfile`).
- npm.
- Acceso a Internet para consultar los productos en Fake Store API.

## Instalación y ejecución

Desde la carpeta `backend`:

```bash
npm install
cp .env.example .env
npm run start:dev
```

En PowerShell, copia la configuración con:

```powershell
Copy-Item .env.example .env
```

La aplicación inicia por defecto en `http://localhost:3000`. Las variables necesarias para arrancar son:

| Variable | Requerida | Valor de ejemplo | Descripción |
|---|---|---|---|
| `PORT` | No | `3000` | Puerto HTTP de la API. |
| `NODE_ENV` | No | `development` | Entorno de ejecución. |
| `SWAGGER_USER` | Sí | `admin` | Usuario para abrir la documentación Swagger. |
| `SWAGGER_PASSWORD` | Sí | `Test1234@` | Contraseña para abrir la documentación Swagger. |
| `CORS_ORIGIN` | No | `http://localhost:5173,http://127.0.0.1:5173` | Orígenes permitidos, separados por comas. Si se omite, se usan los dos valores de ejemplo. |

`SWAGGER_USER` y `SWAGGER_PASSWORD` deben estar configuradas; la aplicación no inicia si faltan. Cambia las credenciales de ejemplo antes de exponer el servicio en un entorno compartido.

## Endpoints

Todas las rutas de la API usan el prefijo `/api/v1`.

| Método | Ruta | Descripción |
|---|---|---|
| `GET` | `/api/v1` | Comprueba que la API está activa. |
| `GET` | `/api/v1/products` | Devuelve los productos obtenidos de Fake Store API. |

La respuesta exitosa de estado contiene `statusCode`, `success`, `message` y `data`:

```json
{
  "statusCode": 200,
  "success": true,
  "message": "Store Tanku Test is running!",
  "data": null
}
```

La respuesta de productos usa el mismo formato y contiene una lista en `data`. Cada producto incluye `id`, `title`, `price`, `description`, `category` e `image`. Si el servicio externo responde con error, el endpoint devuelve `502`; si no se puede establecer la conexión, devuelve `500`.

## Documentación interactiva

Con el servidor en ejecución, abre `http://localhost:3000/docs` e ingresa las credenciales definidas en `SWAGGER_USER` y `SWAGGER_PASSWORD`. El documento OpenAPI en JSON está disponible en `http://localhost:3000/docs-json`; también está protegido con autenticación básica.

## Comandos

| Comando | Descripción |
|---|---|
| `npm run start` | Inicia la aplicación. |
| `npm run start:dev` | Inicia en modo desarrollo con recarga automática. |
| `npm run start:debug` | Inicia en modo desarrollo con depuración. |
| `npm run build` | Compila la aplicación. |
| `npm run start:prod` | Ejecuta la versión compilada en `dist`. |
| `npm test` | Ejecuta las pruebas con Vitest. |
| `npm run test:watch` | Ejecuta las pruebas en modo observación. |
| `npm run test:cov` | Ejecuta las pruebas con cobertura. |
| `npm run lint` | Analiza el código fuente con Oxlint. |
| `npm run format` | Formatea los archivos TypeScript de `src`. |

## Estructura principal

```text
src/
├── common/                 # DTOs compartidos para las respuestas
├── config/                 # Configuración de CORS y Swagger
├── modules/
│   └── products/           # Endpoint, servicio y DTOs de productos
├── app.controller.ts       # Endpoint de estado
├── app.module.ts           # Módulo raíz
└── main.ts                 # Inicio, prefijo, versión y validación global
```