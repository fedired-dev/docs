### Requisitos para la Instalación de Fedired  

Fedired es una plataforma diseñada para ofrecer un entorno seguro, escalable y eficiente, ideal para redes sociales federadas. Su correcta instalación y configuración dependen de cumplir con ciertos requisitos técnicos y recomendaciones específicas.  

A continuación, se detallan las especificaciones necesarias para garantizar un despliegue óptimo, tanto en entornos de prueba como en producción.  

---

### **Requisitos del sistema**  

#### **Mínimos (para entornos de prueba o despliegues básicos):**  
- **Procesador (CPU)**: 2 núcleos.  
- **Memoria RAM**: 1 GB.  
- **Almacenamiento**: 15 GB SSD.  
- **Conexión a Internet**: Velocidad estable con latencia baja.  
- **Dominio y DNS**:  
  - Un dominio personalizado configurado correctamente.  
  - **Recomendación**: Usar **Cloudflare** como proveedor de DNS para simplificar la administración y aprovechar sus funciones avanzadas, como protección contra ataques DDoS y certificados SSL automáticos.  

#### **Recomendados (para entornos de producción):**  
- **Procesador (CPU)**: 4 núcleos.  
- **Memoria RAM**: 8 GB.  
- **Almacenamiento**: 50 GB SSD.  
- **Conexión a Internet**:  
  - Ancho de banda alto, con IP pública estática.  
  - Certificados SSL/TLS válidos para garantizar conexiones seguras.  
- **Dominio y DNS**:  
  - Uso de **Cloudflare** recomendado para una configuración robusta y segura, con opciones avanzadas de gestión de tráfico.  

> [!NOTE]
>
> Para servidores físicos, se sugiere el uso de **Proxmox** como hipervisor para implementar Fedired
> en un contenedor o máquina virtual, asegurando aislamiento, flexibilidad y facilidad de recuperación en caso de fallos.  

---

### **Dependencias de ejecución**  

Fedired requiere varias herramientas y servicios que deben estar configurados previamente en el sistema:  

1. **Node.js**  
   - Versión mínima: **v18.20.0**.  
   - Versión recomendada: **v20** o **v22**.  
   - Node.js es fundamental para el backend de Fedired, garantizando una ejecución eficiente de sus procesos en tiempo real.  

2. **PostgreSQL**  
   - Versión mínima: **v12**.  
   - Versión recomendada: **v16**.  
   - Extensión requerida: **PGroonga**, para optimizar las búsquedas de texto completo en la base de datos.  

3. **Redis o Valkey**  
   - Versión mínima: **v7**.  
   - Redis proporciona un almacenamiento en memoria rápido y confiable, utilizado para la gestión de caché y sesiones.  

4. **Proxy web**  
   - Opciones recomendadas:  
     - **Caddy**: Ideal por su configuración simplificada y soporte SSL automatizado.  
     - **Nginx**: Perfecto para entornos que requieren configuraciones personalizadas.  
   - Alternativa: **Apache**, aunque menos eficiente en ciertos escenarios modernos.  

5. **FFmpeg** (opcional)  
   - Requerido si Fedired incorpora funcionalidades multimedia, como transcodificación de videos.  

6. **Servidor de caché** (opcional)  
   - Mejora el rendimiento al almacenar datos en memoria. Opciones recomendadas:  
     - **DragonflyDB**.  
     - **KeyDB**.  
     - Otro servidor Redis o Valkey adicional.  

---

### **Dependencias de compilación**  

Fedired requiere herramientas específicas para construir y configurar sus componentes. Estas deben estar instaladas antes de proceder con la implementación:  

1. **Rust**  
   - Versión mínima: **v1.74**.  
   - Rust se utiliza para compilar partes críticas del sistema, asegurando un alto rendimiento.  

2. **Compilador de C/C++** y herramientas de construcción  
   - Incluye GNU Make y las herramientas específicas del sistema operativo:  
     - `build-essential` en sistemas basados en Debian/Ubuntu.  

3. **Python 3**  
   - Necesario para scripts de configuración y compilación.  

4. **Perl**  
   - Requerido por algunas dependencias adicionales de construcción.  

---

### **Recomendaciones adicionales para producción**  

1. **Seguridad y aislamiento**  
   - Si se implementa en un servidor físico, utiliza **Proxmox** para crear contenedores o máquinas virtuales. Esto ofrece ventajas como:  
     - **Aislamiento de servicios**: Evita conflictos con otras aplicaciones en el servidor.  
     - **Escalabilidad**: Ajusta recursos asignados según las necesidades de Fedired.  
     - **Facilidad de respaldo**: Snapshots rápidos y recuperación eficiente en caso de errores.  

2. **Actualización y mantenimiento del sistema**  
   - Asegúrate de mantener el sistema operativo y las dependencias actualizadas para garantizar seguridad y estabilidad.  

3. **Certificados SSL/TLS**  
   - Implementa certificados válidos para proteger las conexiones. **Cloudflare** puede ayudar a automatizar este proceso.  

4. **Configuración de red**  
   - Protege los puertos expuestos mediante firewalls (por ejemplo, `ufw`) y utiliza autenticación por claves para conexiones SSH.  

Con esta configuración y cumplimiento de requisitos, Fedired puede desplegarse de manera eficiente, garantizando estabilidad y rendimiento óptimos en cualquier entorno.
