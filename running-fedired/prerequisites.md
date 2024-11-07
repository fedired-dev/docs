---
title = "Preparando tu maquina"
summary = "Descarga, instala y configura algunos requisitos previos."
weight = 10
[menu]
[menu.docs]
identifier = "admin/prerequisites"
parent = "admin"
---
# Requisitos Previos

- **Servidor**: Se recomienda un servidor con al menos 1 CPU, 2GB de RAM y 20GB de espacio en disco.
- **Sistema Operativo**: Debian 12 (recomendado).
- **Acceso a la Terminal**: Acceso root o sudo en el servidor.
- **Nombre de Dominio**: Un dominio válido que apunte a tu servidor.

> [!Importante] recomendamos no construir en docker, si quieres ayudar desarrollando el entorno docker puedes visitar <a href="https://github.com/fedired-dev/fedired-docker/blob/main/docs/container.md" target="_blank"> Fedired-Docker</a>

### Dependencias Requeridas

- **[Node.js](https://nodejs.org/en/)** (above 20.4.x)
- **[PostgreSQL](https://www.postgresql.org/)** (above 15)
- **[Redis](https://redis.io/)**
- **[FFmpeg](https://www.ffmpeg.org/)**