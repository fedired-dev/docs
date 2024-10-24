---
title = "Personalizacion"
summary = "Personaliza las imagenes que muestra tu servidor."
weight = 20
[menu]
[menu.docs]
identifier = "admin/personalization"
parent = "admin"
---

# Personalizar

1. **CSS Personalizado:**
   - Para agregar CSS personalizado para todos los usuarios, edite `./custom/assets/instance.css`.

2. **Recursos Estáticos:**
   - Para agregar recursos estáticos (como imágenes para la pantalla de inicio), colóquelos en el directorio `./custom/assets/`. Luego estarán disponibles en `https://yourserver.tld/static-assets/filename.ext`.

3. **Configuraciones Regionales Personalizadas:**
   - Coloque las configuraciones regionales personalizadas en el directorio `./custom/locales/`. 
   - Si nombra su configuración regional personalizada con el mismo nombre que una configuración existente, esta la sobrescribirá. 
   - Si le da un nombre único, se añadirá a la lista. Asegúrese de que la primera parte del nombre del archivo coincida con la configuración regional de referencia. (Ejemplo: `en-FOO.yml`)

4. **Imágenes de Error Personalizadas:**
   - Para agregar imágenes de error personalizadas, colóquelas en el directorio `./custom/assets/badges`, reemplazando los archivos existentes.

5. **Sonidos Personalizados:**
   - Coloque solo archivos mp3 en el directorio `./custom/assets/sounds`.

6. **Actualizar Recursos Personalizados:**
   - Para actualizar los recursos personalizados sin volver a generarlos, ejecute `pnpm run build:assets`.

7. **Control de Indexación:**
   - Para evitar que ChatGPT, CommonCrawl u otros rastreadores indexen su instancia, descomente las reglas respectivas en `./custom/robots.txt`.
