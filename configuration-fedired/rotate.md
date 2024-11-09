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

2. **Ubicación de `postgresql.conf`:**
   - Puede comprobar la ubicación de `postgresql.conf` con este comando:

     ```sh
     sudo --user=postgres psql --command='SHOW config_file'
     ```

3. **Ubicación del Archivo de Registro de PostgreSQL:**
   - El archivo de registro de PostgreSQL se encuentra en este directorio:

     ```sh
     sudo --user=postgres psql --command='SHOW data_directory'
     ```

## Conclusión

Configurar una correcta rotación de registros es esencial para mantener la salud del sistema y evitar problemas relacionados con el almacenamiento y el rendimiento. Al automatizar la eliminación de registros antiguos y asegurarse de que no se acumulan en el disco, puede asegurar que su servidor funcione sin problemas a largo plazo.
