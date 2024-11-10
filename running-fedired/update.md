---
title = "Actualizacion"
summary = "Guia de Actualizaciones para Fedired"
weight = 50
[menu]
[menu.docs]
identifier = "admin/update"
parent = "admin"
---

# Instrucciones de actualización

## Nvus

Para actualizar Nvus (el backend), entra al servidor y ejecuta los siguientes comandos:

```sh
sudo -Hu pleroma bash
cd /opt/pleroma

git pull origin main

asdf install

mix deps.get
MIX_ENV=prod mix ecto.migrate

exit
systemctl restart fedired
```
## Fedired

Para actualizar Fedired (frontend), acceda a su servidor y vuelva a ejecutar los comandos de instalación.

```sh
cd /opt/pleroma/instance/static/fedired

git pull
```