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
- **Sistema Operativo**: Ubuntu Server 22.04 o posterior (recomendado).
- **Acceso a la Terminal**: Acceso root en el servidor.
- **Nombre de Dominio**: Un dominio válido que apunte a tu servidor.


## Dependencias Requeridas

Ncus y Fedired utiliza una serie de dependencias para su correcto funcionamiento. A continuación se presenta un listado de las principales:

- **[Elixir](https://elixir-lang.org/)** (above 1.14.x)
- **[Phoenix Framework](https://www.phoenixframework.org/)** (above 1.7.x)
- **[PostgreSQL](https://www.postgresql.org/)** (above 15)
- **[Redis](https://redis.io/)**
- **[Erlang/OTP](https://www.erlang.org/)** (above 24.x)
- **[Porcelain](https://hex.pm/packages/porcelain)**
- **[ExJsonSchema](https://hex.pm/packages/ex_json_schema)**
- **[ExAws](https://hex.pm/packages/ex_aws)**
- **[Swoosh](https://hex.pm/packages/swoosh)**
- **[Cowboy](https://ninenines.eu/software/cowboy/)** (above 2.x)
- **[Libcluster](https://hex.pm/packages/libcluster)**
- **[Comeonin](https://hex.pm/packages/comeonin)** (above 5.0)
- **[Argon2](https://hex.pm/packages/argon2)**
- **[Plug](https://hex.pm/packages/plug)**
- **[nginx](https://nginx.org/)** / **[Caddy](https://caddyserver.com/)** / **[Apache](https://httpd.apache.org/)**
- **[ffmpeg](https://www.ffmpeg.org/)** (optional, for video processing)
- **[Pillow](https://pillow.readthedocs.io/en/stable/)** (optional, for image processing)
