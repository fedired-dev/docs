# Gestión de Versiones del Código en Fedired

En Fedired, hemos implementado un sistema de control de versiones que nos permite gestionar de manera eficiente los cambios en la plataforma. Este sistema ayuda tanto a los desarrolladores como a los usuarios a entender las actualizaciones que se aplican en cada versión del software.

## Convención de Versionado

Seguimos una convención de versionado estructurada, utilizando el siguiente formato:

**`vX.Y.Z-nvus.W`**

- **X**: Versión Mayor – Cambios importantes que afectan significativamente la estructura o funcionamiento del sistema.
- **Y**: Nuevas Características – Actualizaciones que añaden funcionalidades, sin alterar la base del sistema.
- **Z**: Correcciones y Mejoras Menores – Cambios que corrigen errores o mejoran el rendimiento, sin añadir nuevas características.
- **nvus**: Indicador del nombre base del código fuente ("nvus").
- **W**: Parches (Hotfixes) – Correcciones urgentes o críticas que se aplican sin esperar una nueva versión completa.

## Tipos de Actualizaciones

### 1. Versiones Mayores (X)
Las versiones mayores representan actualizaciones significativas que pueden afectar la compatibilidad con versiones anteriores. Estos cambios pueden implicar reestructuraciones del sistema o nuevas arquitecturas que transforman el funcionamiento global de Fedired.

**Ejemplo**: `v2.0.0-nvus.0`
- Migración a una nueva infraestructura de backend.
- Reestructuración de la base de datos.

### 2. Nuevas Características (Y)
El número Y cambia cuando añadimos nuevas funcionalidades que mejoran las capacidades de la plataforma sin alterar su estructura central. Estas actualizaciones pueden incluir nuevas herramientas, mejoras en la experiencia de usuario o funciones adicionales.

**Ejemplo**: `v2.1.0-nvus.0`
- Implementación de un sistema de notificaciones para los usuarios.
- Nuevas opciones de personalización de perfiles.

### 3. Correcciones y Mejoras Menores (Z)
Las correcciones menores y mejoras de rendimiento se reflejan en este número. Son actualizaciones que solucionan bugs, mejoran la eficiencia o corrigen errores sin añadir nuevas características al sistema.

**Ejemplo**: `v2.1.1-nvus.0`
- Resolución de un bug en la interfaz de usuario.
- Mejora en los tiempos de respuesta del servidor.

### 4. Parches Críticos (W)
El número final (W) se utiliza para indicar parches o correcciones urgentes que deben aplicarse inmediatamente, como solucionar vulnerabilidades de seguridad o bugs críticos que afectan el funcionamiento general de la plataforma.

**Ejemplo**: `v2.1.1-nvus.1`
- Parche urgente para corregir una vulnerabilidad en el sistema de autenticación.

## Planificación de Actualizaciones

### Versiones Mayores (X)
Las versiones mayores se lanzan cuando realizamos cambios profundos en la estructura del sistema. Estas actualizaciones pueden ser poco frecuentes y se planifican en ciclos de varios meses. 

### Nuevas Características (Y)
Las actualizaciones que añaden nuevas características se lanzan de forma periódica, generalmente cada trimestre, dependiendo de las prioridades de desarrollo y las nuevas funcionalidades previstas.

### Correcciones Menores (Z)
Las correcciones de errores y optimizaciones se lanzan de manera continua según las necesidades del sistema, con una frecuencia mensual o según lo requieran las condiciones del entorno.

### Parches Críticos (W)
Los parches críticos se implementan de manera inmediata, sin un calendario fijo, ya que responden a situaciones urgentes que requieren atención inmediata.

## Ejemplos de Versiones

- **v2.0.0-nvus.0**: Introducción de una nueva arquitectura y cambios importantes en la infraestructura del sistema.
- **v2.1.0-nvus.0**: Añadida una API para integraciones externas.
- **v2.1.1-nvus.0**: Corrección de errores y mejoras en el rendimiento.
- **v2.1.1-nvus.1**: Parche de seguridad para una vulnerabilidad crítica.

## Conclusión

Con esta estructura de versionado, aseguramos que todas las actualizaciones y mejoras en Fedired se gestionen de manera organizada y predecible. Esto permite a los usuarios y desarrolladores conocer el tipo de cambios realizados y la naturaleza de las actualizaciones implementadas en cada versión.
