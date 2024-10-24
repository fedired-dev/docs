---
title = "Ajustes de Bases de datos"
summary = "Como configurar correctamente la base de datos de PostgreSQL."
weight = 20
[menu]
[menu.docs]
identifier = "admin/database"
parent = "admin"
---


# Ajustar la Configuración de la Base de Datos

La configuración predeterminada de PostgreSQL no es adecuada para ejecutar un servidor Fedired. Por lo tanto, se recomienda encarecidamente que utilice [PGTune](https://pgtune.leopard.in.ua/) para modificar la configuración.

A continuación se muestra un conjunto de ejemplos de parámetros que puede proporcionar a PGTune:

| **Parámetro**            | **Valor**                                               |
|-------------------------:|--------------------------------------------------------|
| **Base de Datos**         | PostgreSQL versión 16                                  |
| **Tipo de SO**            | Linux (Ubuntu Server Recomendado)                      |
| **Tipo de BD**            | Almacén de datos (Data warehouse)                      |
| **Memoria Total**         | Memoria física mínima 700 MB                           |
| **Número de CPUs**        | Número de hilos de CPU (o un valor menor si se tienen muchos) |
| **Número de conexiones**  | 200                                                    |
| **Almacenamiento de datos**| Almacenamiento en SSD                                  |

Dado que un servidor Fedired no es un servidor de base de datos dedicado, asegúrese de dejar algo de espacio en la memoria para otro software como Fedired, Redis y el proxy inverso.

Una vez que haya ingresado los valores apropiados para su entorno, haga clic en el botón "Generar" para crear una configuración y reemplazar los valores en `postgresql.conf` con los valores sugeridos.

Después de eso, debes reiniciar el servicio PostgreSQL:

```sh
sudo systemctl stop fedired
sudo systemctl restart postgresql
sudo systemctl start fedired
```

## Vaciar su Base de Datos

Si la base de datos se ejecuta durante mucho tiempo, la "basura" acumulada puede degradar su rendimiento o causar problemas. Para evitarlo, debe "VACÍAR" su base de datos con regularidad.

```sh
sudo systemctl stop fedired
sudo --user=postgres psql --dbname=fedired_db --command='VACUUM FULL VERBOSE ANALYZE'
sudo systemctl start fedired
```

Tenga en cuenta que esta operación puede tardar algún tiempo.
