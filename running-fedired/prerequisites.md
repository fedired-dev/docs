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
- **Sistema Operativo**: Ubuntu Server (18.04 o superior).
- **Acceso a la Terminal**: Acceso root o sudo en el servidor.
- **Nombre de Dominio**: Un dominio válido que apunte a tu servidor.

> **Importante** Para garantizar un rendimiento **óptimo y una mayor seguridad**, recomendamos encarecidamente ejecutar tu instancia de **Fedired** en un servidor dedicado o en un entorno aislado. Puedes optar por utilizar una máquina virtual (VM) a través de plataformas como VirtualBox o **Proxmox**, o bien, implementarla directamente en tu computadora o servidor físico. Esta configuración te permitirá tener mayor control sobre los recursos y la seguridad de tu instancia.
Actualmente, solo hemos probado y recomendamos el uso de Ubuntu Server como sistema operativo para la ejecución de instancias de Fedired. No recomendamos, ni hemos validado aún, la construcción de imágenes Docker para este propósito. Esperamos, en el futuro, desarrollar y ofrecer soporte para otros sistemas operativos y entornos basados en Docker.

### Runtime dependencies

- **[Node.js](https://nodejs.org/en/)** (above 20.4.x)
- **[PostgreSQL](https://www.postgresql.org/)** (above 15)
- **[Redis](https://redis.io/)**
- **[FFmpeg](https://www.ffmpeg.org/)**
