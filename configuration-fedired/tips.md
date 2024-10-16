---
title = "Consejos y Trucos"
summary = "Consejos y trucos de configuracion de Fedired."
weight = 20
[menu]
[menu.docs]
identifier = "admin/installation"
parent = "admin"
---

## Consejos y trucos

- Al editar el archivo de configuración, no complete los ajustes en la parte inferior. Están diseñados *solo* para hospedaje administrado, no para hospedaje propio. Es mucho mejor configurar esos ajustes en el panel de control de Fedired.
- El puerto 3000 (usado en la configuración predeterminada) podría ya estar en uso en su servidor para otra cosa. Para encontrar un puerto abierto para Fedired, ejecute `for p in {3000..4000}; do ss -tlnH | tr -s ' ' | cut -d" " -sf4 | grep -q "${p}$" || echo "${p}"; done | head -n 1`. Reemplace 3000 con el puerto mínimo y 4000 con el puerto máximo si lo necesita.
- Le recomendamos que use un S3 Bucket/CDN para Object Storage, especialmente si usa contenedores.
- Al utilizar el almacenamiento de objetos, se recomienda encarecidamente configurar un encabezado de respuesta `Access-Control-Allow-Origin` adecuado.
- Recomendamos no utilizar CloudFlare, pero si lo hace, asegúrese de desactivar la minimización de código.
- Para las notificaciones push, ejecute `npx web-push generate-vapid-keys`, luego coloque las claves pública y privada en Panel de control > General > ServiceWorker.
- Para las traducciones, cree una cuenta [DeepL](https://deepl.com) y genere una clave API, luego colóquela en Panel de control > General > DeepL Translation.
- Para agregar otra cuenta de administrador:
- Vaya a la página del usuario > 3 puntos > Acerca de > Moderación > active "Moderador"
- Vuelva a Descripción general > haga clic en el ícono del portapapeles junto al ID
- Ejecute `psql -d fedired` (o el nombre que sea el de la base de datos)
- Ejecute `UPDATE "user" SET "isAdmin" = true WHERE id='999999';` (reemplace `999999` con el ID copiado)
- Reinicie su servidor Fedired
