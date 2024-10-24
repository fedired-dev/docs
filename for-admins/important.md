---
title = "Ajustes de Bases de datos"
summary = "Como configurar correctamente la base de datos de PostgreSQL."
weight = 20
[menu]
[menu.docs]
identifier = "admin/important"
parent = "admin"
---

## 🌟 **Usuarios Especiales en Fedired: relay.actor e instance.actor**

En Fedired, cada servidor crea automáticamente dos usuarios especiales: **relay.actor** e **instance.actor**. Estos usuarios desempeñan un papel crucial en el funcionamiento de la plataforma y su correcta operación es esencial para mantener la estabilidad y la integridad del servidor. A continuación, se detalla la naturaleza de estos usuarios, su importancia, y las directrices sobre cómo deben ser manejados.

## ¿Quiénes son relay.actor e instance.actor?

### **relay.actor**

El usuario **relay.actor** actúa como un intermediario fundamental dentro del ecosistema del **Fediverse**. Su responsabilidad principal es gestionar y facilitar las interacciones entre diferentes instancias de Fedired, lo que incluye la distribución de publicaciones, comentarios y demás actividades de los usuarios. Esta función de relé es vital para asegurar que la información fluya de manera eficiente y correcta entre los diversos servidores, permitiendo una experiencia social cohesiva y dinámica.

### **instance.actor**

Por otro lado, **instance.actor** representa a la propia instancia de Fedired. Este usuario es responsable de la gestión interna de todas las operaciones dentro de la instancia, incluyendo la autorización de solicitudes, la asignación de recursos y el monitoreo del rendimiento del servidor. Su presencia es esencial para garantizar que todas las funcionalidades de la plataforma se ejecuten de manera fluida y eficaz, ofreciendo así una experiencia óptima para los usuarios.

> ## <span style="color:red">**Importancia** de No Modificar Estos Usuarios</span>

La correcta gestión de `relay.actor` e `instance.actor` es fundamental. A continuación, se enumeran las razones por las cuales no deben ser modificados:

1. **Integridad del Sistema**: Cualquier cambio en la configuración, propiedades o permisos de estos usuarios puede comprometer la estabilidad de la plataforma. Estos usuarios están diseñados para interactuar con el sistema y realizar funciones críticas; alterarlos podría provocar fallos en la comunicación entre instancias y en la operación general del servidor.

2. **Riesgo de Ruptura del Sistema**: Si alguno de estos usuarios llega a sufrir modificaciones, incluso cambios menores, el sistema puede romperse. Esto puede resultar en la incapacidad de enviar o recibir mensajes entre diferentes instancias, así como en la pérdida de datos y la interrupción del servicio para los usuarios. Las repercusiones pueden ser significativas y afectar la experiencia del usuario de manera drástica.

3. **Gestión Automática**: Ambos usuarios son gestionados automáticamente por el sistema de Fedired. Intentar intervenir manualmente en su configuración no solo es innecesario, sino que también puede interferir con los procesos automatizados que garantizan el funcionamiento eficiente de la plataforma. 

4. **Consecuencias en la Experiencia del Usuario**: La modificación o eliminación de estos usuarios podría llevar a una experiencia de usuario deficiente, con problemas de conectividad, tiempos de inactividad y una percepción negativa de la plataforma. La confianza de los usuarios en el sistema puede verse afectada si experimentan interrupciones en su capacidad para interactuar con otros.

## Directrices para el Manejo de relay.actor e instance.actor

- **No Modificar**: No realices cambios en la configuración de estos usuarios. Mantener sus parámetros originales es esencial para asegurar su correcto funcionamiento.

- **No Borrar**: La eliminación de `relay.actor` o `instance.actor` no solo es inapropiada, sino que puede causar fallos en el sistema. Su presencia es imprescindible para la operación de la instancia.

- **No Suspender ni Silenciar**: Estos usuarios no deben ser silenciados, suspendidos o moderados de ninguna manera. Cualquier intento de intervención puede resultar en problemas operativos significativos y afectar el rendimiento del servidor.

## Conclusión

Los usuarios `relay.actor` e `instance.actor` son componentes esenciales de la arquitectura de Fedired. Su funcionamiento adecuado garantiza la comunicación eficiente entre instancias y el correcto desempeño del servidor. Por lo tanto, es crucial que se mantengan intactos, sin modificaciones, para asegurar la estabilidad y funcionalidad de la plataforma.

Recuerda que el éxito de tu instancia de Fedired depende en gran medida de la gestión adecuada de estos actores especiales. Cuidar de su integridad es cuidar de la experiencia de todos los usuarios de la red social.
