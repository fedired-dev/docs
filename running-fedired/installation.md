---
title = "Guia de instalacion"
summary = "Como configurar todo lo que necesitas para ejecutar tu propio servidor Fedired."
weight = 20
[menu]
[menu.docs]
identifier = "admin/installation"
parent = "admin"
---

> **No sabemos si funciona en otros sistemas**

# 1. Instalar dependencias en Linux (Ubuntu Server)

Asegúrese de que puede utilizar el comando `sudo` antes de continuar.

### Utilidades

```sh
sudo apt update
sudo apt install build-essential python3 curl wget git lsb-release
```

### Node.js y pnpm

Las instrucciones se pueden encontrar en [Este repositorio](https://github.com/nodesource/distributions).

```sh
sudo apt-get install -y curl

curl -fsSL https://deb.nodesource.com/setup_23.x -o nodesource_setup.sh

sudo -E bash nodesource_setup.sh

sudo apt-get install -y nodejs

# version
node --version
```

También es necesario habilitar `pnpm`.
```sh
sudo corepack enable
corepack prepare pnpm@latest --activate

# version
pnpm --version
```

### PostgreSQL y PGroonga

Las instrucciones de instalación de PostgreSQL se pueden encontrar en [esta pagina](https://www.postgresql.org/download/).

```sh
sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt/ $(lsb_release -c | awk "{print $2}")-pgdg main" > /etc/apt/sources.list.d/pgdg.list'

wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -

sudo apt update
sudo apt install postgresql-16

# check version
psql --version
```

Las instrucciones de instalación de PGroonga se pueden encontrar en [esta pagina](https://pgroonga.github.io/install/).

Agregar el repositorio de Groonga: Groonga proporciona un repositorio oficial para instalar la versión más reciente. Puedes agregarlo de la siguiente manera:

```sh

sudo apt install -y software-properties-common
sudo add-apt-repository ppa:groonga/ppa
sudo apt update
sudo apt install postgresql-16-pgroonga

psql -U postgres -c "SELECT * FROM pg_extension WHERE extname = 'pgroonga';"

sudo nano /etc/postgresql/16/main/postgresql.conf
```

Busca y descomenta la línea shared_preload_libraries (si está comentada) para incluir pgroonga:

'shared_preload_libraries = 'pgroonga'

Después de modificar la configuración, necesitas reiniciar el servicio de PostgreSQL para que los cambios tengan efecto.

```sh
sudo systemctl restart postgresql

```
Deberías ver un archivo llamado pgroonga.control entre otros archivos de extensión.

### Redis

Las instrucciones se pueden encontrar en [esta pagina](https://redis.io/docs/install/install-redis/).

Agregue el repositorio al índice APT, actualícelo e instale Redis:

```sh
sudo apt-get install lsb-release curl gpg
curl -fsSL https://packages.redis.io/gpg | sudo gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg
sudo chmod 644 /usr/share/keyrings/redis-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/redis.list
sudo apt-get update
sudo apt-get install redis

sudo systemctl enable redis-server
sudo systemctl start redis-server

sudo systemctl enable --now redis-server

# check version
redis-cli --version
```

### FFmpeg

```sh
sudo apt install ffmpeg
```

## 2. Configurar una base de datos

1. Crear un usuario de base de datos
    ```sh
    sudo -u postgres createuser --no-createdb --no-createrole --no-superuser --encrypted --pwprompt fedired
    ```
    Si olvidó la contraseña que ingresó, puede restablecerla ejecutando `sudo -u postgres psql -c "ALTER USER fedired PASSWORD 'password';"`.
2. Crear una base de datos
    ```sh
    sudo -u postgres createdb --encoding='UTF8' --owner=fedired fedired_db
    ```
3. Habilitar la extensión PGronnga
    ```sh
    sudo -u postgres psql --command='CREATE EXTENSION pgroonga;' --dbname=fedired_db
    ```

## 3. Configurar Fedired

1. Crear un usuario para Fedired y cambiar de usuario
   ```sh
   sudo useradd --create-home --user-group --shell /bin/bash fedired
   sudo passwd fedired
   sudo su --login fedired
   
   # check the current working directory
   # the result should be /home/fedired
   pwd
   ```
1. Instalar la cadena de herramientas de Rust

    Instructions can be found at [this page](https://www.rust-lang.org/tools/install).
    
    ```sh
    curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
    . "${HOME}/.cargo/env"
    
    # check version
    cargo --version
    ```
3. Clonar el repositorio Fedired
    ```sh
    git clone --branch=main https://github.com/fedired-dev/fedired.git
    ```
1. Copiar y editar el archivo de configuración
    ```sh
    cd fedired
    cp .config/example.yml .config/default.yml
    nano .config/default.yml
    ```

    ```yaml
    url: https://your-server-domain.example.com  # change here
    port: 3000
    
    db:
      host: localhost
      port: 5432
      db: fedired_db
      user: fedired
      pass: your-database-password  # and here
    ```

## 4. Construir Fedired

1. Construir
    ```sh
    pnpm install --no-frozen-lockfile
    pnpm install --frozen-lockfile
    NODE_ENV=production NODE_OPTIONS='--max-old-space-size=3072' pnpm run build
    ```
1. Ejecutar migraciones de bases de datos
    ```sh
    pnpm run migrate
    ```
1. Cerrar sesión del usuario `federed`
    ```sh
    exit
    ```

## 5. Preparación para publicar un servidor

### 1. Configurar un firewall

Para exponer su servidor de forma segura, puede configurar un firewall. En esta instrucción, utilizamos [ufw](https://launchpad.net/ufw).

```sh
sudo apt install ufw
# if you use SSH
# SSH_PORT=22
# sudo ufw limit "${SSH_PORT}/tcp"
sudo ufw default deny
sudo ufw allow 80
sudo ufw allow 443
sudo ufw --force enable

# check status
sudo ufw status
```

### 2. Configurar un proxy inverso

En esta instrucción, usamos [Caddy](https://caddyserver.com/) para que el servidor Fedired sea accesible desde Internet. Sin embargo, también puedes usar [Nginx](https://nginx.org/en/) si lo deseas ([archivo de configuración de Nginx de ejemplo](./fedired.nginx.conf)).

1. Instalar Caddy
    ```sh
    sudo apt install debian-keyring debian-archive-keyring apt-transport-https
    curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | sudo gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
    curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | sudo tee /etc/apt/sources.list.d/caddy-stable.list
    sudo apt update
    sudo apt install caddy

    # check version
    caddy version
    ```
1. Reemplazar el archivo de configuración
    ```sh
    sudo mv /etc/caddy/Caddyfile /etc/caddy/Caddyfile.bak
    sudo nano /etc/caddy/Caddyfile
    ```

    ```Caddyfile
    your-server-domain.example.com {
    	reverse_proxy http://127.0.0.1:3000
    
    	log {
    		output file /var/log/caddy/fedired.log
    	}
    }
    ```
1. Reiniciar Caddy
    ```sh
    sudo systemctl restart caddy
    ```

## 6. Publica tu servidor Fedired

1. Crear un archivo de servicio
    ```sh
    sudo nano /etc/systemd/system/fedired.service
    ```

    ```service
    [Unit]
    Description=Fedired daemon
    Requires=redis.service caddy.service postgresql.service
    After=redis.service caddy.service postgresql.service network-online.target

    [Service]
    Type=simple
    User=fedired
    Group=fedired
    UMask=0027
    ExecStart=/usr/bin/pnpm run start
    WorkingDirectory=/home/fedired/fedired
    Environment="NODE_ENV=production"
    Environment="npm_config_cache=/tmp"
    Environment="NODE_OPTIONS=--max-old-space-size=3072"
    # uncomment the following line if you use jemalloc (note that the path varies on different environments)
    # Environment="LD_PRELOAD=/usr/lib/x86_64-linux-gnu/libjemalloc.so.2"
    StandardOutput=journal
    StandardError=journal
    SyslogIdentifier=fedired
    TimeoutSec=60
    Restart=always

    CapabilityBoundingSet=
    DevicePolicy=closed
    NoNewPrivileges=true
    LockPersonality=true
    PrivateDevices=true
    PrivateIPC=true
    PrivateMounts=true
    PrivateUsers=true
    ProtectClock=true
    ProtectControlGroups=true
    ProtectHostname=true
    ProtectKernelTunables=true
    ProtectKernelModules=true
    ProtectKernelLogs=true
    ProtectProc=invisible
    RestrictNamespaces=true
    RestrictRealtime=true
    RestrictSUIDSGID=true
    SecureBits=noroot-locked
    SystemCallArchitectures=native
    SystemCallFilter=~@chown @clock @cpu-emulation @debug @ipc @keyring @memlock @module @mount @obsolete @privileged @raw-io @reboot @resources @setuid @swap
    SystemCallFilter=capset pipe pipe2 setpriority

    [Install]
    WantedBy=multi-user.target
    ```
2. Iniciar Fedired
    ```sh
    sudo systemctl enable --now fedired
    ```

# 🎉 ¡Felicidades! 🎉

¡Disfruta de tu nuevo servidor de Fedired! 🎈


¡Bienvenido a la comunidad de Fedired! 🚀

**Recuerda:** La privacidad y seguridad son nuestras prioridades.
