---
title = "Guia de instalacion"
summary = "Como configurar todo lo que necesitas para ejecutar tu propio servidor Fedired."
weight = 20
[menu]
[menu.docs]
identifier = "admin/installation"
parent = "admin"
---

# Instalación de Fedired

Te recomendamos instalar Fedired en un VPS dedicado (servidor privado virtual) con Ubuntu 22.04 LTS. Asegúrate de que tu VPS esté funcionando correctamente antes de seguir esta guía.

También necesitas tener un nombre de dominio adquirido. Crea un registro A en tu registrador apuntando a la dirección IP de tu VPS.

## 1. Conexión al VPS

Una vez que tu VPS esté en funcionamiento, deberás abrir un **programa de terminal** en tu computadora. Esto te permitirá conectarte remotamente al servidor para ejecutar comandos e instalar Fedired.

Los usuarios de Linux y Mac ya tienen un terminal instalado (se llama **"Terminal"**), pero los usuarios de Windows tal vez necesiten instalar [Cygwin](https://www.cygwin.com/) primero.

Una vez abierto el terminal, conéctate a tu servidor usando el nombre de usuario y la dirección IP proporcionada por tu proveedor de VPS. Es posible que te pida una contraseña.

```sh
ssh root@123.456.789
```
## 2. Preparación del sistema
Antes de instalar Fedired, necesitamos preparar el sistema.

### 2.a. Instalar actualizaciones
Por lo general, un VPS recién creado ya tendrá software desactualizado, por lo que debes ejecutar los siguientes comandos para actualizarlo:

```sh
apt update
apt upgrade
```
Cuando se te pregunte ([Y/n]), escribe Y y presiona Enter.

### 2.b. Instalar dependencias del sistema
Fedired requiere algunas dependencias del sistema para funcionar. Instálalas con el siguiente comando:

```sh
apt install git curl build-essential postgresql postgresql-contrib cmake libmagic-dev imagemagick ffmpeg libimage-exiftool-perl nginx certbot unzip libssl-dev automake autoconf libncurses5-dev fasttext
```

### 2.c. Crear el usuario de Fedired
Por razones de seguridad, es mejor ejecutar Fedired como un usuario separado con acceso limitado.

Vamos a crear este usuario y lo llamaremos fedired:

```sh
useradd -r -s /bin/false -m -d /var/lib/pleroma -U pleroma
```

## 3. Instalación de Nvus
Es hora de instalar Nvus. Vamos a obtenerlo y ponerlo en funcionamiento.

3.a. Descargar el código fuente
Descarga el código fuente de Fedired con Git:

```sh
git clone https://github.com/fedired-dev/nvus /opt/pleroma
chown -R pleroma:pleroma /opt/pleroma
```
Entra en el directorio del código fuente y conviértete en el usuario fedired:

```sh
cd /opt/pleroma
sudo -Hu pleroma bash
```
(Asegúrate de estar como el usuario fedired en `/opt/pleroma` para el resto de esta sección.)

### 3.b. Instalar Elixir
Fedired usa el lenguaje de programación Elixir (basado en Erlang). Es importante usar una versión específica de Erlang (24), así que utilizaremos el gestor de versiones asdf para instalarlo.

Instala asdf
 ```sh
git clone https://github.com/asdf-vm/asdf.git ~/.asdf --branch v0.10.0
echo ". $HOME/.asdf/asdf.sh" >> ~/.bashrc
echo ". $HOME/.asdf/completions/asdf.bash" >> ~/.bashrc
exec bash
asdf plugin-add erlang
asdf plugin-add elixir
 ```
Finalmente, instala Erlang/Elixir:

```sh
asdf install
```
(Esto tomará unos 15 minutos. ☕)

### 3.c. Compilar Fedired
Instala las herramientas básicas de Elixir para la compilación:

```sh
mix local.hex --force
mix local.rebar --force
```

Obtén las dependencias de Elixir:

```sh
mix deps.get
```
Finalmente, compila Nvus:

```sh
MIX_ENV=prod mix compile
```
(Esto tomará unos 10 minutos. ☕)

### 3.d. Generar la configuración
Es hora de preconfigurar nuestra instancia. El siguiente comando configurará algunos aspectos básicos como tu nombre de dominio:

```sh
MIX_ENV=prod mix pleroma.instance gen
```
Si todo está correcto, renombra el archivo generado para que se cargue en tiempo de ejecución:

```sh
mv config/generated_config.exs config/prod.secret.exs
```
3.e. Provisionar la base de datos
La sección anterior también creó un archivo llamado `config/setup_db.psql`, que puedes usar para crear la base de datos.

Vuelve al usuario root para el resto de este documento:

```sh
exit
```
Ejecuta el archivo SQL como el usuario de Postgres:

```sh
sudo -Hu postgres psql -f config/setup_db.psql
```
Ahora ejecuta la migración de la base de datos como el usuario `fedired`:

```sh
sudo -Hu pleroma bash -i -c 'MIX_ENV=prod mix ecto.migrate'
```
### 3.f. Iniciar Fedired
Copia el servicio de systemd y arranca Fedired:

```sh
cp /opt/pleroma/installation/pleroma.service /etc/systemd/system/pleroma.service
systemctl enable --now pleroma.service
```

Si llegaste hasta aquí, ¡enhorabuena! Ya tienes el backend de Fedired funcionando, y solo falta hacerlo accesible al mundo exterior.

## 4. Configuración en línea
El último paso es hacer que tu servidor sea accesible desde el exterior. Para ello, vamos a instalar Nginx y habilitar el soporte de HTTPS.

### 4.a. HTTPS
Usaremos Certbot para obtener un certificado SSL.

Primero, apaga Nginx:

```sh
systemctl stop nginx
```
Ahora puedes obtener el certificado:

```sh
mkdir -p /var/lib/letsencrypt/
certbot certonly --email <tu@email> -d <tudominio> --standalone
```
Reemplaza `<tu@email>` y `<tudominio>` con tus valores reales.

### IMPORTANTE
Para VM o usarios de ver ajustes aqui [Cloudflare](/for-admins/cloudflare.md) 



### 4.b. Nginx
Copia la configuración de Nginx de ejemplo y actívala:

```sh
cp /opt/pleroma/installation/pleroma.nginx /etc/nginx/sites-available/pleroma.nginx
ln -s /etc/nginx/sites-available/pleroma.nginx /etc/nginx/sites-enabled/pleroma.nginx
```

Debes editar este archivo:

```sh
nano /etc/nginx/sites-enabled/pleroma.nginx
```

Cambia todas las ocurrencias de `example.tld` por el nombre de dominio de tu sitio. Usa Ctrl+X, Y y Enter para guardar.

Finalmente, habilita y arranca Nginx:

```sh
systemctl enable --now nginx.service
```

🎉 ¡Felicidades, ya terminaste! Revisa tu sitio en un navegador y debería estar en línea.

## 5. Instalar Fedired
Finalmente, ve a la ruta de instalacion:

```sh
curl -L -o fedired.zip https://github.com/fedired-dev/fedired/archive/refs/heads/main.zip

busybox unzip fedired.zip -o -d /opt/pleroma/instance/static

mv /opt/pleroma/instance/static/fedired-main/* /opt/pleroma/instance/static

```

## 6. Post-instalación
A continuación, algunos pasos adicionales que puedes seguir después de finalizar la instalación.

Crear tu primer usuario

Si tu instancia está en funcionamiento, puedes crear tu primer usuario con privilegios administrativos con la siguiente tarea:

```sh
cd /opt/pleroma
sudo -Hu pleroma bash -i -c 'MIX_ENV=prod mix pleroma.user new <usuario> <tu@email> --admin'
```

Refresca tu sitio web. ¡Eso es todo!

# 🎉 ¡Felicidades! 🎉

¡Disfruta de tu nuevo servidor de Fedired! 🎈


¡Bienvenido a la comunidad de Fedired! 🚀

## Instrucciones de actualización

Para actualizar Nvus (el backend), entra al servidor y ejecuta los siguientes comandos:

```sh
sudo -Hu pleroma bash
cd /opt/pleroma

git pull origin main

asdf install

mix deps.get
MIX_ENV=prod mix ecto.migrate

exit
systemctl restart pleroma
```
## Fedired

Para actualizar Fedired (frontend), acceda a su servidor y vuelva a ejecutar los comandos de instalación.

```sh
curl -L -o fedired.zip https://github.com/fedired-dev/fedired/archive/refs/heads/main.zip

busybox unzip fedired.zip -o -d /opt/pleroma/instance/static

mv /opt/pleroma/instance/static/fedired-main/* /opt/pleroma/instance/static

```
