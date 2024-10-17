---
title = "Ajustes de Bases de datos"
summary = "Como configurar correctamente la base de datos de PostgreSQL."
weight = 20
[menu]
[menu.docs]
identifier = "admin/database"
parent = "admin"
---

# Ajustar la configuración de la base de datos

La configuración predeterminada de PostgreSQL no es adecuada para ejecutar un servidor Fedired. Por lo tanto, se recomienda encarecidamente que utilice [PGTune](https://pgtune.leopard.in.ua/) para modificar la configuración.

A continuación se muestra un conjunto de ejemplos de parámetros que puede proporcionar a PGTune:

|             Parámetro | Valor                                                  |
|----------------------:|---------------------------------------------------------|
|            DB version | 16 (your PostgreSQL major version)                      |
|               OS Type | Linux                                                   |
|               DB Type | Data warehouse                                          |
|          Total Memory | [total physical memory] minus 700 MB                    |
|        Number of CPUs | number of CPU threads (or lower value if you have many) |
| Number of connections | 200                                                     |
|          Data storage | SSD storage                                             |

Dado que un servidor Fedired no es un servidor de base de datos dedicado, asegúrese de dejar algo de espacio en la memoria para otro software como Fedired, Redis y proxy inverso.

Una vez que haya ingresado los valores apropiados para su entorno, haga clic en el botón "Generar" para generar una configuración y reemplazar los valores en `postgresql.conf` con los valores sugeridos.

Después de eso, debes reiniciar el servicio PostgreSQL.

```sh
sudo systemctl stop fedired
sudo systemctl restart postgresql
sudo systemctl start fedired
```

## Vacíe su base de datos

Si la base de datos se ejecuta durante mucho tiempo, la "basura" acumulada puede degradar su rendimiento o causar problemas. Para evitarlo, debe "VACÍAR" su base de datos con regularidad.

```sh
sudo systemctl stop fedired
sudo --user=postgres psql --dbname=fedired_db --command='VACUUM FULL VERBOSE ANALYZE'
sudo systemctl start fedired
```

Tenga en cuenta que esta operación tarda algún tiempo.
