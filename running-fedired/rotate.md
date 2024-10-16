---
title = "Guia de instalacion"
summary = "Como configurar todo lo que necesitas para ejecutar tu propio servidor Fedired."
weight = 20
[menu]
[menu.docs]
identifier = "admin/installation"
parent = "admin"
---

## Rotar registros

A medida que el servidor se ejecuta durante más tiempo, el tamaño de los archivos de registro aumenta y llena el espacio del disco. Para evitarlo, debe configurar una rotación de registros (eliminación automática de registros antiguos).

Puede editar el valor `SystemMaxUse` en la sección `[journal]` de `/etc/systemd/journald.conf` para hacerlo:

```conf
[journal]
... (omitted)
SystemMaxUse=500M
...
```

Asegúrese de eliminar el `#` inicial para descomentar la línea. Después de editar el archivo de configuración, debe reiniciar el servicio `systemd-journald`.

```sh
sudo systemctl restart systemd-journald
```

También se recomienda cambiar el [nivel de registro de PGroonga](https://pgroonga.github.io/reference/parameters/log-level.html). El nivel predeterminado es `notice`, pero es demasiado detallado para el uso diario.

Para controlar el nivel de registro, agregue esta línea a su `postgresql.conf`:

```conf
pgroonga.log_level = error
```

Puede comprobar la ubicación de `postgresql.conf` con este comando:

```sh
sudo --user=postgres psql --command='SHOW config_file'
```

El archivo de registro de PGroonga (`pgroonga.log`) se encuentra en este directorio:

```sh
sudo --user=postgres psql --command='SHOW data_directory'
```
