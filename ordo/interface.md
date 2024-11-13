
# Guía de Instalación del Frontend de **Soapbox**

Esta guía proporciona los pasos necesarios para instalar y actualizar el frontend de **Soapbox** en un servidor con **Pleroma Ordo**. Asegúrate de tener permisos de administrador en el servidor y que `curl`, `busybox`, y `unzip` estén instalados.

## Pasos de Instalación

### 1. Acceder al Servidor
Primero, conecta al servidor mediante SSH o cualquier otro método. Si usas SSH, ingresa el siguiente comando:

```sh
ssh usuario@tu_servidor_ip
```

### 2. Navegar a la Ruta de Instalación
Dirígete a la carpeta donde está instalado **Pleroma Ordo**. Generalmente, la ruta de instalación del frontend es `/opt/pleroma/instance/static`. Cambia a esta ruta con el siguiente comando:

```sh
cd /opt/pleroma/instance/static
```

### 3. Descargar Soapbox
Descarga el archivo comprimido de **Soapbox** desde el repositorio oficial usando `curl`:

```sh
curl -O https://dl.soapbox.pub/main/soapbox.zip
```

### 4. Descomprimir los Archivos
Descomprime el archivo descargado en la carpeta `/opt/pleroma/instance/static` utilizando `busybox` para simplificar el proceso:

```sh
busybox unzip soapbox.zip -o -d /opt/pleroma/instance/static
```

### 5. Mover los Archivos
Una vez descomprimido, mueve el contenido de la carpeta `soapbox-main` a la ubicación principal de **Pleroma Ordo**:

```sh
mv /opt/pleroma/instance/static/soapbox-main/* /opt/pleroma/instance/static
```

### 6. Limpiar Archivos Innecesarios
Elimina el archivo `.zip` y la carpeta `soapbox-main` que ya no son necesarios:

```sh
rm soapbox.zip
rm -rf /opt/pleroma/instance/static/soapbox-main
```

---

## Actualización de Soapbox

Para actualizar el frontend de **Soapbox**, repite los pasos anteriores. Accede a tu servidor, descarga el archivo comprimido más reciente de **Soapbox** y vuelve a realizar los pasos de descompresión y movimiento de archivos.

```sh
curl -O https://dl.soapbox.pub/main/soapbox.zip
busybox unzip soapbox.zip -o -d /opt/pleroma/instance/static
mv /opt/pleroma/instance/static/soapbox-main/* /opt/pleroma/instance/static
rm soapbox.zip
rm -rf /opt/pleroma/instance/static/soapbox-main
```

¡**Soapbox** estará actualizado y listo para usarse como frontend de tu instancia de **Pleroma Ordo**!
