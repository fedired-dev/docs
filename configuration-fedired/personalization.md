---
title = "Personalizacion"
summary = "Personaliza las imagenes que muestra tu servidor."
weight = 20
[menu]
[menu.docs]
identifier = "admin/personalization"
parent = "admin"
---

## Personalizar

- Para agregar CSS personalizado para todos los usuarios, edite `./custom/assets/instance.css`.
- Para agregar recursos estáticos (como imágenes para la pantalla de inicio), colóquelos en el directorio `./custom/assets/`. Luego estarán disponibles en `https://yourserver.tld/static-assets/filename.ext`.
- Para agregar configuraciones regionales personalizadas, colóquelas en el directorio `./custom/locales/`. Si nombra su configuración regional personalizada con el mismo nombre que una configuración regional existente, la sobrescribirá. Si le da un nombre único, se agregará a la lista. Asegúrese también de que la primera parte del nombre del archivo coincida con la configuración regional en la que la está basando. (Ejemplo: `en-FOO.yml`)
- Para agregar imágenes de error personalizadas, colóquelas en el directorio `./custom/assets/badges`, reemplazando los archivos que ya están allí.
- Para agregar sonidos personalizados, coloque solo archivos mp3 en el directorio `./custom/assets/sounds`.
- Para actualizar los recursos personalizados sin volver a generarlos, simplemente ejecute `pnpm run build:assets`.
- Para evitar que ChatGPT, CommonCrawl u otros rastreadores indexen su instancia, descomente las reglas respectivas en `./custom/robots.txt`.
