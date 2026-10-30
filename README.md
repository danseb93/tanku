# TankU

Aplicación web Full Stack para regalar emociones, deseos y uno que otro detalle.

## ✨ Qué hace


---

## 📦 Estructura del Repositorio

```text
.
├── backend/              # API, procesamiento e indexación (NestJS + Prisma)
├── frontend/             # Interfaz web (React + Vite + TypeScript)
├── docker-compose.yml    # Levantamiento unificado del entorno
└── README.md             # Este archivo
```

---

## 📚 Documentación

| Módulo | Descripción | Enlace |
| --- | --- | --- |
| **Frontend** | Instalación, variables de entorno, concurrencia de carga (`VITE_UPLOAD_CONCURRENCY`, 5 por defecto) y ejecución de la interfaz | [frontend/README.md](./frontend/README.md) |
| **Backend** | Instalación, base de datos, scripts y pruebas de la API | [backend/README.md](./backend/README.md) |

---

## 🚀 Inicio Rápido

### Opción A: Docker Compose (recomendada)

Requisitos: [Docker](https://www.docker.com/) con Docker Compose.

```bash
docker compose up -d
```

Una vez levantado el entorno:

| Servicio | URL |
| --- | --- |
| Frontend | <http://localhost:5173> |
| API (backend) | <http://localhost:3000> |
| Documentación Swagger | <http://localhost:3000/docs> |

### Opción B: Ejecución local

Útil para desarrollar con recarga automática.

1. **Base de datos:** levanta solo PostgreSQL con `docker compose up -d db`.
2. **Backend:** sigue las instrucciones de [backend/README.md](./backend/README.md).
3. **Frontend:** sigue las instrucciones de [frontend/README.md](./frontend/README.md).

Levanta primero el backend: el frontend depende de su API y del canal de eventos en tiempo real.

---

## 🔐 Variables de Entorno

Cada módulo tiene su propio archivo `.env.example` que sirve de plantilla. Los archivos `.env` no se versionan.

| Módulo | Archivo | Detalle |
| --- | --- | --- |
| Backend | `backend/.env` y `backend/.env.test` | [backend/README.md](./backend/README.md#3-variables-de-entorno) |
| Frontend | `frontend/.env` | [frontend/README.md](./frontend/README.md#3-variables-de-entorno) |

---

## 🛠️ Stack General

| Capa | Tecnología |
| --- | --- |
| Frontend | React 19, Vite, TypeScript |
| Backend | NestJS, TypeScript |
| Documentación de la API | Swagger (OpenAPI) |
| Contenedores | Docker y Docker Compose |
