---
title = "Rotar registros"
summary = "Aprende como rotar los registros de tus archivos."
weight = 20
[menu]
[menu.docs]
identifier = "admin/rotate"
parent = "admin"
---

# Rotar Registros

A medida que el servidor se ejecuta durante más tiempo, el tamaño de los archivos de registro aumenta y llena el espacio del disco. Para evitarlo, debe configurar una rotación de registros (eliminación automática de registros antiguos).

1. **Configurar la Rotación de Registros:**
   - Puede editar el valor `SystemMaxUse` en la sección `[journal]` de `/etc/systemd/journald.conf` para hacerlo:

     ```conf
     [journal]
     ... (omitted)
     SystemMaxUse=500M
     ...
     ```

   - Asegúrese de eliminar el `#` inicial para descomentar la línea. Después de editar el archivo de configuración, debe reiniciar el servicio `systemd-journald`:

     ```sh
     sudo systemctl restart systemd-journald
     ```

2. **Cambiar el Nivel de Registro de PGroonga:**
   - Se recomienda cambiar el [nivel de registro de PGroonga](https://pgroonga.github.io/reference/parameters/log-level.html). El nivel predeterminado es `notice`, pero es demasiado detallado para el uso diario.
   - Para controlar el nivel de registro, agregue esta línea a su `postgresql.conf`:

     ```conf
     pgroonga.log_level = error
     ```

3. **Ubicación de `postgresql.conf`:**
   - Puede comprobar la ubicación de `postgresql.conf` con este comando:

     ```sh
     sudo --user=postgres psql --command='SHOW config_file'
     ```

4. **Ubicación del Archivo de Registro de PGroonga:**
   - El archivo de registro de PGroonga (`pgroonga.log`) se encuentra en este directorio:

     ```sh
     sudo --user=postgres psql --command='SHOW data_directory'
     ```
