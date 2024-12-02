
# Mantenimiento del servidor

## Actualizar la versión de Fedired

Consulta las [instrucciones de actualización](https://help.fedired.com/project/upgrade.md). Asegúrate de cambiar a usuario `fedired` y acceder al directorio de Fedired antes de ejecutar el comando `git`:

```sh
sudo su --login fedired
cd ~/fedired
```

## Rotar los logs

A medida que el servidor se ejecuta por más tiempo, el tamaño de los archivos de log aumenta, llenando el espacio en disco. Para evitar esto, deberías configurar una rotación de logs (eliminando logs antiguos automáticamente).

Puedes editar el valor `SystemMaxUse` en la sección `[journal]` de `/etc/systemd/journald.conf` para hacerlo:

```conf
[journal]
... (omitido)
SystemMaxUse=500M
...
```

Asegúrate de eliminar el `#` al inicio de la línea para descomentarlo. Después de editar el archivo de configuración, necesitarás reiniciar el servicio `systemd-journald`:

```sh
sudo systemctl restart systemd-journald
```

También se recomienda que cambies el [nivel de log de PGroonga](https://pgroonga.github.io/reference/parameters/log-level.html). El nivel predeterminado es `notice`, pero esto es demasiado verboso para el uso diario.

Para controlar el nivel de log, agrega esta línea a tu `postgresql.conf`:

```conf
pgroonga.log_level = error
```

Puedes verificar la ubicación del archivo `postgresql.conf` con este comando:

```sh
sudo --user=postgres psql --command='SHOW config_file'
```

El archivo de log de PGroonga (`pgroonga.log`) se encuentra en el siguiente directorio:

```sh
sudo --user=postgres psql --command='SHOW data_directory'
```

## Ajustar la configuración de la base de datos

La configuración predeterminada de PostgreSQL no es adecuada para ejecutar un servidor de Fedired. Por lo tanto, se recomienda encarecidamente que utilices [PGTune](https://pgtune.leopard.in.ua/) para ajustar la configuración.

Aquí tienes un conjunto de parámetros ejemplo que puedes proporcionar a PGTune:

|             Parámetro | Valor                                                   |
|----------------------:|---------------------------------------------------------|
|            Versión DB | 16 (tu versión mayor de PostgreSQL)                      |
|               Tipo OS | Linux                                                   |
|               Tipo DB | Almacén de datos                                        |
|          Memoria total | [memoria física total] menos 700 MB                     |
|        Número de CPUs | número de hilos de CPU (o un valor menor si tienes muchos) |
| Número de conexiones  | 200                                                     |
|          Almacenamiento de datos | SSD                                               |

Dado que un servidor de Fedired no es un servidor dedicado de base de datos, asegúrate de dejar algo de espacio en memoria para otros programas como Fedired, Redis y el proxy inverso.

Una vez que hayas ingresado los valores adecuados para tu entorno, haz clic en el botón "Generar" para obtener una configuración y reemplazar los valores en `postgresql.conf` con los valores sugeridos.

Luego, necesitarás reiniciar el servicio de PostgreSQL:

```sh
sudo systemctl stop fedired
sudo systemctl restart postgresql
sudo systemctl start fedired
```

## VACUUM en tu base de datos

Si la base de datos ha estado en ejecución durante mucho tiempo, los "residuos" acumulados pueden degradar su rendimiento o causar problemas. Para evitar esto, deberías ejecutar `VACUUM` en la base de datos regularmente.

```sh
sudo systemctl stop fedired
sudo --user=postgres psql --dbname=fedired_db --command='VACUUM FULL VERBOSE ANALYZE'
sudo systemctl start fedired
```

Ten en cuenta que esta operación puede tardar un tiempo.

## Personalizar

- Para agregar CSS personalizado para todos los usuarios, edita `./custom/assets/instance.css`.
- Para agregar archivos estáticos (como imágenes para la pantalla de inicio), colócalos en el directorio `./custom/assets/`. Estarán disponibles en `https://tuservidor.tld/static-assets/archivo.ext`.
- Para agregar locales personalizados, colócalos en el directorio `./custom/locales/`. Si nombras tu locale personalizado igual que un locale existente, lo sobrescribirá. Si le das un nombre único, se agregará a la lista. Asegúrate también de que la primera parte del nombre del archivo coincida con el locale en el que te basas (Ejemplo: `es-FOO.yml`).
- Para agregar imágenes personalizadas de error, colócalas en el directorio `./custom/assets/badges`, reemplazando los archivos existentes allí.
- Para agregar sonidos personalizados, coloca solo archivos mp3 en el directorio `./custom/assets/sounds`.
- Para actualizar los activos personalizados sin necesidad de reconstruir, solo ejecuta `pnpm run build:assets`.
- Para bloquear a ChatGPT, CommonCrawl o cualquier otro rastreador de indexación, descomenta las reglas respectivas en `./custom/robots.txt`.

## Consejos & Trucos

- Cuando edites el archivo de configuración, no completes los ajustes al final. Están diseñados *solo* para hosting gestionado, no para autoalojamiento. Esos ajustes son mucho mejores al ser configurados en el panel de control de Fedired.
- El puerto 3000 (usado en la configuración predeterminada) podría estar ya en uso en tu servidor para otra cosa. Para encontrar un puerto libre para Fedired, ejecuta `for p in {3000..4000}; do ss -tlnH | tr -s ' ' | cut -d" " -sf4 | grep -q "${p}$" || echo "${p}"; done | head -n 1`. Reemplaza 3000 con el puerto mínimo y 4000 con el máximo si lo necesitas.
- Te recomendamos usar un S3 Bucket/CDN para almacenamiento de objetos, especialmente si usas contenedores.
- Al usar almacenamiento de objetos, es altamente recomendable establecer un encabezado de respuesta `Access-Control-Allow-Origin` adecuado.
- No recomendamos usar CloudFlare, pero si lo haces, asegúrate de desactivar la minificación de código.
- Para notificaciones push, ejecuta `npx web-push generate-vapid-keys`, luego coloca las claves pública y privada en Panel de Control > General > ServiceWorker.
- Para traducciones, haz una cuenta en [DeepL](https://deepl.com) y genera una clave API, luego colócala en Panel de Control > General > DeepL Translation.
- Para agregar otra cuenta de administrador:
  - Ve a la página del usuario > 3 Puntos > Acerca de > Moderación > activa "Moderador"
  - Regresa a Overview > haz clic en el ícono de portapapeles junto al ID
  - Ejecuta `psql -d fedired_db` (o el nombre de tu base de datos)
  - Ejecuta `UPDATE "user" SET "isAdmin" = true WHERE id='999999';` (reemplaza `999999` con el ID copiado)
  - Reinicia tu servidor de Fedired

---

Espero que esta adaptación te sea útil. Si necesitas más ayuda, ¡avísame!
