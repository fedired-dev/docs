---
title = "Guia de instalacion"
summary = "Como configurar todo lo que necesitas para ejecutar tu propio servidor Ordo."
weight = 20
[menu]
[menu.docs]
identifier = "ordo/install"
parent = "ordo"
---

# Instalación de Ordo

Esta guía le enseñará cómo instalar Ordo en un VPS Linux (recomendamos Ubuntu)
usando [deno](https://deno.com/), [systemd](https://systemd.io/)
y [nginx](https://nginx.org/en/).

## 1. Configuración del sistema

### 1.a. Instalar actualizaciones

> [!WARNING]
>
> Si encuentras algún error durante el proceso de instalación, por favor abre un [Reportar Issues](https://github.com/fedired-dev/docs/issues). Asegúrate de proporcionar detalles sobre el problema, incluyendo el sistema operativo, los pasos seguidos y cualquier mensaje de error recibido. Esto nos ayudará a solucionar el problema más rápidamente.
.

Normalmente, un VPS nuevo ya tiene software desactualizado, por lo que debe ejecutar los siguientes comandos para actualizarlo:

::: code-group
```sh [Ubuntu]
sudo apt update
sudo apt upgrade
```
```sh [Fedora]
sudo dnf check-update
sudo dnf update
```
```sh [Arch]
sudo pacman -Syu
```
:::

Cuando se le solicite (`[Y/n]`), escriba `Y` y presione Enter.

### 1.b. Instalar dependencias del sistema

Ordo depende de algún software de sistema adicional para funcionar. Instálelos con el siguiente comando:

::: code-group
```sh [Ubuntu]
sudo apt install git curl unzip nginx postgresql-contrib certbot python3-certbot-nginx
```
```sh [Fedora]
sudo rpm install git curl unzip nginx postgresql-contrib certbot python3-certbot-nginx
```
```sh [Arch]
sudo pacman -S git curl unzip nginx postgresql-contrib certbot certbot-nginx
```
:::

### 1.c. Instalar Deno

Para instalar Deno en todo el sistema, ejecute:

```sh
curl -fsSL https://deno.land/x/install/install.sh | sudo DENO_INSTALL=/usr/local sh -s v2.0.0
```

### 1.d. Cree el usuario Ordo

Por razones de seguridad, es mejor ejecutar Ordo como un usuario independiente con acceso limitado.

Crearemos este usuario y lo llamaremos `ordo`:

```sh
sudo adduser ordo
```

## 2. Instale Ordo

Es hora de instalar Ordo. Pongamos todo en funcionamiento.

### 2.a. Descargar código fuente

```sh
git clone https://github.com/fedired-dev/ordo /opt/ordo
chown -R ordo:ordo /opt/ordo
```

Ingresa al directorio del código fuente y conviértete en el usuario ordo:

```sh
cd /opt/ordo
sudo su ordo
```

### 2.b. Configurar Ordo

Ejecuta el siguiente comando para crear un archivo `.env`:

```sh
deno task setup
```

Sigue las instrucciones en la terminal para configurar tu archivo `.env`. Toma nota de la contraseña de Postgres que ingreses aquí. La usaremos más adelante.

> [!TIP]
> Si eliges usar el cargador local para tener más control sobre los archivos cargados, tendrás que configurar una regla nginx adicional. Consulta "Configurar nginx" a continuación.

### 2.c. Agregar Fedired

Ordo puede servir para cualquier interfaz (o para ninguna), pero recomendamos usar Ordo para obtener la mejor experiencia.

Ejecute este comando para instalar Fedired:

```sh
deno task fedired
```

> [!TIP]
> Puede volver a ejecutar este comando en cualquier momento para actualizar Fedired a la última versión.

### 2.d. Aprovisionar la base de datos

Si todavía es el usuario `ordo`, salga del shell:

```sh
exit
```

Cree un nuevo usuario y base de datos de Postgres para Ordo:

```sh
sudo -u postgres createuser -P ordo
sudo -u postgres createdb ordo -O ordo
```

A continuación, configure la contraseña para el usuario de Postgres `ordo` recién creado.

```sh
sudo -u ordo psql # Iniciar el cliente CLI de Postgres
ALTER USER ordo PASSWORD '<your-database-password-here>'; # Escriba esto en el indicador de Postgres
\q # Salir del cliente de Postgres
```

Asegúrese de que la contraseña que ingrese coincida con la que ingresó en el script de configuración anteriormente.

### 2.e. Iniciar Ordo

Copie el archivo de unidad systemd en la ubicación correcta:

```sh
sudo cp /opt/ordo/installation/ordo.service /etc/systemd/system/ordo.service
```

Recargue la configuración del administrador systemd:

```sh
sudo systemctl daemon-reload
```

Habilite el servicio Ordo para que se inicie automáticamente al iniciar e inícielo inmediatamente:

```sh
sudo systemctl enable --now ordo

/usr/local/bin/deno task start

```

Ahora Ordo se está ejecutando. ¡Ya casi terminas!

## 3. Conéctate

El último paso es hacer que tu servidor sea accesible al mundo exterior. Lo lograremos instalando Nginx y habilitando la compatibilidad con HTTPS.

### 3.a. Configurar Nginx

Copia el archivo de configuración de Nginx en la ubicación correcta:

```sh
sudo cp /opt/ordo/installation/ordo.conf /etc/nginx/sites-enabled/ordo.conf
```

A continuación, edita el archivo de configuración para reemplazar `example.com` con tu nombre de dominio:

```sh
sudo nano /etc/nginx/sites-enabled/ordo.conf
```

#### 3.b.i. Configurar nginx para que sirva cargas locales

Si elegiste "Local" como el cargador anterior, debes configurar nginx para que sirva cargas locales desde el directorio que seleccionaste.

```nginx
server {
server_name media.your.domain;

location / {
root </path/to/serve/local/files/from>;
autoindex off; # Opcional: permite el listado de directorios. Recomendamos mantener esta opción desactivada.
try_files $uri $uri/ =404;
}

error_page 404 /404.html;
location = /404.html {
intern;
}
}
```

### 3.b. Obtener un certificado SSL

Ejecute el siguiente comando para obtener un certificado SSL de Let’s Encrypt:

```sh
sudo certbot --nginx
```

Siga las indicaciones para obtener el certificado.

### 3.c. Reiniciar Nginx

Reinicie Nginx para aplicar los cambios:

```sh
sudo systemctl restart nginx
```

🎉 ¡Felicitaciones, ya terminó! Verifique su sitio en un navegador y debería estar en línea.

## 4. Sincroniza tus datos existentes

Si ya eres un usuario de Nostr, debes copiar los datos de tu perfil existente a Ordo antes de usarlo, o podría sobrescribir tu perfil. También puedes obtener los datos y publicaciones de tus amigos en tu instancia de Ordo. ¡Cuantos más, mejor!

En el servidor que ejecuta ordo, ejecute el siguiente comando:

```sh
deno task nostr:pull <pubkey1> [pubkeys]... <relay1> [relays]...
```

Las claves públicas pueden ser entidades NIP-19 (es decir, npub1...) o cadenas codificadas en hexadecimal (algo así como `0574536d3ef4d65faf95b42393610b8475d22f4c294649d46c50d5d36f75267c`).

Si no desea importar publicaciones y solo obtener perfiles, puede ejecutar:

```sh
deno task nostr:pull --profiles-only <pubkey1> [pubkeys]... <relay1> [relays]...
```

## 5. Postinstalación

A continuación, se muestran algunos pasos adicionales que puede realizar después de finalizar la instalación.

### Promocionar un usuario a administrador

Para promover un usuario a administrador, ingrese al directorio de Ordo y ejecute el siguiente comando:

```sh
deno task admin:role <pubkey> admin
```

### Agregar relés

Para obtener datos en su servidor, debe agregar relés. Ordo almacenará todos los datos transmitidos desde estos relés.

En Fedired, navegue a "Panel de control" > "Relés" y agregue los relés desde los que desea ingerir eventos. Reinicie el servidor Ordo (`systemctl restart ordo`) para que los cambios surtan efecto.

### Actualizar Ordo

Para actualizar Ordo, extraiga los últimos cambios del repositorio y reinicie el servicio:

```sh
cd /opt/ordo
su ordo
git pull origin main
exit
sudo systemctl restart ordo
```

### Renovar el certificado SSL

Para renovar el certificado SSL, ejecute:

```sh
sudo certbot renew

```

### Solución de problemas

¿Algo no funciona correctamente? Por favor, [abre un problema](https://github.com/fedired-dev/ordo/-/issues/new) y te ayudaremos.