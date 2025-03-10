
# Protocolo de Seguridad Avanzado de Fedired

## 1. Propósito

El objetivo de este documento es detallar los **protocolos de seguridad** implementados en **Fedired**, una red social federada, con el fin de garantizar la protección de los datos de los usuarios, la privacidad de sus interacciones y la integridad de la plataforma. Estos protocolos incluyen autenticación multifactor, protección contra bots, protección de servidores y verificación continua de la base de datos, entre otros.

---

## 2. Protocolos de Seguridad Implementados

### 2.1. **Autenticación y Control de Acceso**

- **Autenticación Multifactor (2FA)**:  
  Fedired implementa una autenticación multifactor (2FA) para proteger las cuentas de usuario. Esto incluye la verificación mediante correo electrónico, aplicaciones de autenticación o códigos enviados a dispositivos móviles.

- **Verificación por Correo Electrónico**:  
  Para crear una cuenta, el usuario debe verificar su dirección de correo electrónico mediante un enlace de confirmación enviado al correo proporcionado. Esto ayuda a evitar registros falsos y asegura la validez de la cuenta.

- **Activación de Cuenta por Correo Electrónico**:  
  Después de la verificación, las cuentas deben ser activadas por el usuario a través de un enlace único enviado a su correo. Esto asegura que la cuenta se haya creado por una persona real y no un bot.

### 2.2. **Protección Contra Bots y Ataques Automáticos**

- **Uso de hCaptcha**:  
  Para proteger los formularios y las acciones dentro de la plataforma contra bots, Fedired emplea hCaptcha, un sistema que desafía a los usuarios a resolver tareas que son fáciles para los humanos, pero difíciles para las máquinas.

- **Control de Carga de Peticiones**:  
  Se implementan límites en la cantidad de solicitudes que un usuario o dispositivo puede realizar en un intervalo de tiempo determinado, lo que previene ataques de denegación de servicio (DoS) o intentos de acceso no autorizado.

- **Bloqueo de Llamadas Maliciosas**:  
  Los sistemas están configurados para detectar y bloquear patrones de tráfico sospechosos y maliciosos. Las llamadas a APIs se filtran para garantizar que solo las solicitudes válidas lleguen a los servidores.

### 2.3. **Seguridad del Servidor y Datos**

- **Control de IP y Registros (Logging)**:  
  Fedired mantiene un registro detallado de las direcciones IP de los usuarios que acceden a la plataforma. Esto ayuda a detectar y mitigar accesos no autorizados y a mantener la integridad de los datos.

- **Proxy de Seguridad (Summaly Proxy)**:  
  Fedired utiliza un servidor proxy para gestionar el tráfico de red, reduciendo la exposición directa a los servidores backend y mitigando riesgos de ataques externos.

- **Seguridad del Servidor con Bloques de Llamadas**:  
  Los servidores están configurados para bloquear llamadas sospechosas y reducir el riesgo de intrusiones. Los accesos no autorizados son detectados en tiempo real y se toman medidas preventivas.

### 2.4. **Gestión y Protección de la Base de Datos**

- **Verificación Continua de la Base de Datos**:  
  Se realizan verificaciones y auditorías constantes de las bases de datos para detectar actividades inusuales y posibles vulnerabilidades. Esto incluye la protección contra ataques de inyección SQL y otros tipos de manipulación de base de datos.

- **Actualizaciones Constantes**:  
  El sistema de bases de datos y los servicios relacionados son actualizados regularmente para corregir vulnerabilidades conocidas, evitar la inyección SQL y otros ataques comunes.

### 2.5. **Seguridad de Cuentas Proxy y Relés**

- **Autorización de Relés**:  
  Se implementa un sistema de autorización de relés que verifica la identidad y el acceso autorizado a través de dispositivos externos. Esto asegura que los relés de comunicación no sean utilizados para actividades no autorizadas.

- **Cuentas Proxy**:  
  Las cuentas proxy se usan para gestionar el acceso de usuarios en circunstancias específicas. Estas cuentas están protegidas con los mismos estándares de seguridad que las cuentas regulares, pero permiten un control adicional sobre el acceso y la supervisión.

---

## 3. Conclusión

Fedired adopta un enfoque integral de seguridad para proteger tanto la información personal como la privacidad de los usuarios. Con la implementación de autenticación avanzada, sistemas de protección contra bots, control de acceso a datos sensibles, y medidas de seguridad en servidores, se asegura una plataforma robusta que minimiza el riesgo de amenazas externas e internas. Estos esfuerzos son continuos, con actualizaciones periódicas y mejoras constantes para abordar nuevos desafíos en ciberseguridad.

