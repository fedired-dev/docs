---
title = "Consejos y Trucos"
summary = "Consejos y trucos de configuracion de Fedired."
weight = 20
[menu]
[menu.docs]
identifier = "admin/tips"
parent = "admin"
---

# Consejos y trucos


## Configuración de Fedired

1. **No complete ciertos ajustes en el archivo de configuración:**  
   Los ajustes en la parte inferior del archivo de configuración están diseñados únicamente para *hospedaje administrado*, no para servidores autogestionados. Es preferible realizar esos ajustes directamente desde el panel de control de Fedired.

2. **Selección de un puerto abierto:**  
   El puerto 3000, configurado de manera predeterminada, podría ya estar en uso por otra aplicación en su servidor. Para encontrar un puerto disponible entre el rango 3000 y 4000, ejecute el siguiente comando en su terminal:

   ```bash
   for p in {3000..4000}; do ss -tlnH | tr -s ' ' | cut -d" " -sf4 | grep -q "${p}$" || echo "${p}"; done | head -n 1
   ```

   Si es necesario, ajuste los valores `3000` y `4000` para definir otros rangos de puertos.

3. **Almacenamiento de objetos con S3 Bucket/CDN:**  
   Recomendamos encarecidamente utilizar un servicio de almacenamiento de objetos como un bucket S3 o una CDN, especialmente si está utilizando contenedores para su aplicación.

4. **Configuración del encabezado `Access-Control-Allow-Origin`:**  
   Si utiliza almacenamiento de objetos, asegúrese de configurar correctamente un encabezado de respuesta `Access-Control-Allow-Origin` para evitar problemas de acceso.

5. **Recomendación sobre Cloudflare:**  
 Se recomienda utilizar Cloudflare para el servicio de Fedired, ya que proporciona características útiles de seguridad y rendimiento. Importante: Si decide usar Cloudflare, asegúrese de desactivar cualquier tipo de minimización de código para evitar problemas de compatibilidad con su aplicación.

6. **Configuración de notificaciones push:**  
   Para activar las notificaciones push en Fedired, siga estos pasos:

   - Ejecute el siguiente comando para generar las claves VAPID:

     ```bash
     npx web-push generate-vapid-keys
     ```

   - Luego, coloque las claves pública y privada generadas en el panel de control:  
     Panel de control > General > ServiceWorker.

7. **Configuración de traducciones automáticas:**  
   Si desea activar traducciones automáticas en Fedired, cree una cuenta en [DeepL](https://deepl.com) y genere una clave API.  
   Coloque la clave en: Panel de control > General > DeepL Translation.

8. **Agregar otra cuenta de administrador:**

   Para convertir a un usuario en administrador, siga estos pasos:

   1. Vaya a la página del usuario.
   2. Haga clic en los 3 puntos > Acerca de > Moderación.
   3. Active la opción "Moderador".
   4. Luego, regrese a la sección "Descripción general" y copie el ID del usuario haciendo clic en el ícono del portapapeles.
   5. Con el ID copiado, ejecute el siguiente comando en la base de datos:

      ```bash
      psql -d fedired
      ```

      Una vez dentro, ejecute la siguiente consulta SQL, reemplazando `999999` por el ID copiado:

      ```sql
      UPDATE "user" SET "isAdmin" = true WHERE id='999999';
      ```

9. **Reinicio del servidor Fedired:**  
   Después de hacer cambios en la base de datos o configuraciones importantes, reinicie su servidor Fedired para que los ajustes tengan efecto.
