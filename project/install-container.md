# Instalación y Actualización de Fedired en Docker

## Prerequisitos

Antes de comenzar con la instalación, asegúrate de tener lo siguiente:

1. **Un servidor Ubuntu**: Esta guía está diseñada para Ubuntu 20.04 LTS o superior.
2. **Docker y Docker Compose**: Es necesario tener Docker y Docker Compose instalados en el servidor para gestionar los contenedores de Fedired.
3. **Acceso root o sudo** en el servidor para ejecutar comandos administrativos.

### Paso 1: Actualizar el Sistema

Es recomendable actualizar los paquetes del sistema antes de proceder con la instalación.

```bash
sudo apt update && sudo apt upgrade -y
sudo apt dist-upgrade -y
sudo apt autoremove -y
```

### Paso 2: Instalar Docker y Docker Compose

#### Instalar Docker

Si no tienes Docker instalado, sigue estos pasos para instalarlo:

```bash
# Instalar dependencias necesarias
sudo apt install apt-transport-https ca-certificates curl software-properties-common -y

# Añadir la clave GPG de Docker
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

# Añadir el repositorio de Docker
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Actualizar los repositorios e instalar Docker
sudo apt update
sudo apt install docker-ce docker-ce-cli containerd.io -y

# Verificar la instalación de Docker
sudo systemctl enable docker
sudo systemctl start docker
sudo docker --version
```

#### Instalar Docker Compose

Para instalar Docker Compose, ejecuta los siguientes comandos:

```bash
# Descargar Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

# Dar permisos de ejecución
sudo chmod +x /usr/local/bin/docker-compose

# Verificar la instalación
docker-compose --version
```

### Paso 3: Configuración del Proyecto

#### 3.1. Clonar el Repositorio de Fedired

Primero, descarga o clona el repositorio de Fedired:

```bash
GIT_LFS_SKIP_SMUDGE=1 git clone https://iceshrimp.dev/iceshrimp/iceshrimp.git --depth=1
cd fedired
```

#### 3.2. Copiar los Archivos de Configuración de Ejemplo

Copia los archivos de configuración de ejemplo para personalizarlos según tu entorno:

```bash
cp docker-compose.example.yml docker-compose.yml
nano docker-compose.yml

cp .config/example.yml .config/default.yml
nano .config/default.yml

cp .config/docker_example.env .config/docker.env
.config/docker.env
```

#### 3.3. Editar los Archivos de Configuración

A continuación, edita los archivos copiados según tu configuración y entorno.

- **`docker.env`**: Este archivo contiene las variables de entorno de Docker. Aquí deberás definir variables importantes como las credenciales de la base de datos y configuraciones de red.
  
- **`default.yml`**: Edita este archivo según los requisitos de tu servidor. Algunos parámetros clave incluyen:
  - **`url`**: Define la URL pública de tu servidor, donde se alojará la interfaz web de Fedired.
  - **`host`, `db`, `user`, `pass`**: Configura estos valores con la información de tu base de datos PostgreSQL.
  - **`redis`**: Configura la conexión a Redis, el contenedor de caché.

Asegúrate de que los valores en **`docker.env`** coincidan con los detalles de tus contenedores y tu configuración local.

### Paso 4: Descargar la Imagen del Contenedor

Fedired utiliza contenedores Docker para ejecutar sus componentes. Para obtener la imagen más reciente, ejecuta:

```bash

docker pull fedired/fedired

```

### Paso 5: Configurar y Levantar los Contenedores

Con los archivos de configuración listos, ahora podemos levantar los contenedores que ejecutarán Fedired.

```bash
docker compose pull

```

Una vez el contenedor de base de datos esté en funcionamiento, ejecutamos el siguiente comando para habilitar las extensiones necesarias en PostgreSQL:

```bash
docker-compose exec db sh -c 'psql --user="${POSTGRES_USER}" --dbname="${POSTGRES_DB}" --command="CREATE EXTENSION pgroonga;"'
# o si usas Podman
podman-compose exec db sh -c 'psql --user="${POSTGRES_USER}" --dbname="${POSTGRES_DB}" --command="CREATE EXTENSION pgroonga;"'
```

#### 5.2. Levantar los Contenedores de Aplicación

Ahora, podemos iniciar el contenedor de la aplicación (Fedired) y otros servicios necesarios:

```bash
docker-compose up --detach
```

### Paso 6: Acceder a la Interfaz Web

Una vez que el servidor esté en funcionamiento, puedes acceder a la interfaz web de Fedired a través de tu navegador, usando la URL configurada anteriormente:

```
http://<IP_DEL_SERVIDOR>:3000
```

Asegúrate de reemplazar `<IP_DEL_SERVIDOR>` con la IP real de tu servidor Ubuntu.

### Paso 7: Actualización de Fedired

Las actualizaciones de **Fedired** se manejan principalmente a través de Docker, por lo que el proceso de actualización es relativamente sencillo. Aquí te explicamos cómo mantener tu instalación al día.

#### 7.1. Verificar Nuevas Actualizaciones

Cuando una nueva versión de Fedired esté disponible, puedes verificarlo mediante la consulta del repositorio oficial de imágenes Docker o en el sitio oficial de Fedired. Si hay una nueva versión, generalmente se publica una nueva imagen Docker.

#### 7.2. Actualizar la Imagen de Docker

Para actualizar tu instalación de Fedired, primero asegúrate de que no haya contenedores de Fedired ejecutándose:

```bash
docker compose pull
docker compose down
docker compose up -d
```

Luego, descarga la última versión de la imagen de Fedired:

```bash
docker pull fedired/fedired
```

#### 7.3. Levantar los Nuevos Contenedores

Una vez descargada la nueva imagen, levanta los contenedores nuevamente:

```bash
docker-compose up --detach
# o si usas Podman
podman-compose up --detach
```

Este comando iniciará los nuevos contenedores con la versión actualizada de Fedired. Si se han realizado cambios importantes en la configuración o en la estructura de la base de datos, deberás seguir las instrucciones adicionales de la documentación de la nueva versión.

#### 7.4. Verificar la Actualización

Accede nuevamente a la interfaz web de Fedired:

```
http://<IP_DEL_SERVIDOR>:3000
```

Verifica que todo esté funcionando correctamente y que la nueva versión esté activa. También puedes revisar los logs para cualquier mensaje importante:

```bash
docker-compose logs -f
# o si usas Podman
podman-compose logs -f
```

### Paso 8: Mantenimiento y Monitoreo

Una vez que Fedired esté funcionando, es importante configurar un sistema de monitoreo y mantenimiento para asegurar que todo funcione sin problemas. Algunas recomendaciones incluyen:

- **Monitoreo de Contenedores**: Utiliza herramientas como **Portainer** o **Watchtower** para gestionar y monitorear los contenedores.
- **Copias de seguridad**: Configura un sistema de copias de seguridad automáticas para los contenedores y las bases de datos.
- **Logs**: Revisa los logs de los contenedores para identificar posibles problemas. Puedes usar `docker logs` o configurar un sistema de logging centralizado como **ELK** o **Prometheus**.
