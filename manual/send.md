
# Uso de HTTP Signature en Fedired

Fedired se compromete con la privacidad y la seguridad de las comunicaciones dentro de su red federada. Como parte de estas prácticas, implementamos la especificación **HTTP Signature**, basada en la librería `@peertube/http-signature` versión 1.7.0, para garantizar la autenticidad y la integridad de los mensajes intercambiados entre servidores.

Este documento describe en detalle qué es HTTP Signature, cómo lo utiliza Fedired y qué beneficios aporta a nuestra red.

---

## ¿Qué es HTTP Signature?

HTTP Signature es un estándar que permite a los clientes y servidores autenticar solicitudes HTTP mediante la firma digital de ciertas partes de la solicitud. Este enfoque asegura que los mensajes no han sido alterados durante la transmisión y que provienen de una fuente confiable.

El proceso de firma incluye los siguientes elementos:
- **Cabeceras HTTP seleccionadas**: Pueden incluir `Date`, `Host`, `Digest`, entre otras.
- **Clave privada del remitente**: Se utiliza para generar la firma.
- **Algoritmo de firma**: Define cómo se genera la firma (por ejemplo, RSA-SHA256).
- **Cabecera Authorization**: Contiene la firma y otros datos relacionados para que el receptor pueda verificarla.

---

## Implementación en Fedired

### Uso de la librería `@peertube/http-signature`

En Fedired, utilizamos la librería `@peertube/http-signature` versión 1.7.0 para gestionar las firmas HTTP. Esta implementación permite firmar y verificar solicitudes de manera eficiente en todos los nodos de nuestra red federada.

### Proceso de Firma en Fedired

1. **Creación del Mensaje**:
   - Se seleccionan cabeceras relevantes de la solicitud HTTP (por ejemplo, `Date`, `Host` y `Digest`).
   - Estas cabeceras se combinan en un formato canónico definido por el estándar HTTP Signature.

2. **Generación de la Firma**:
   - Usamos claves privadas almacenadas de manera segura en los servidores de Fedired para generar una firma digital basada en el contenido del mensaje.

3. **Envió de la Solicitud**:
   - La firma se incluye en la cabecera `Authorization` junto con la clave pública del remitente y detalles del algoritmo utilizado.

4. **Verificación en el Receptor**:
   - El servidor receptor utiliza la clave pública proporcionada para verificar la firma y asegurarse de que la solicitud no ha sido alterada.

---

## Beneficios para Fedired

El uso de HTTP Signature aporta los siguientes beneficios a nuestra red social:

- **Autenticidad del Mensaje**:
  Garantizamos que los mensajes recibidos provienen de fuentes confiables dentro de la red federada.

- **Integridad de los Datos**:
  Los mensajes no pueden ser alterados durante su transmisión sin invalidar la firma.

- **Cumplimiento de Estándares**:
  Al implementar HTTP Signature, Fedired cumple con prácticas reconocidas en la comunidad de redes federadas, facilitando la interoperabilidad con otras plataformas.

---

## Configuración Técnica

A continuación, se presenta un ejemplo de configuración técnica que Fedired utiliza al implementar HTTP Signature:

### Dependencias

```json
{
  "@peertube/http-signature": "1.7.0"
}
```

### Ejemplo de Código

```javascript
const httpSignature = require('@peertube/http-signature');

const headers = {
  'host': 'fedired.com',
  'date': new Date().toUTCString()
};

const options = {
  keyId: 'https://fedired.com/actor#main-key',
  privateKey: 'PRIVATE_KEY_HERE',
  headers: ['(request-target)', 'host', 'date']
};

httpSignature.sign(headers, options);

console.log('Cabeceras firmadas:', headers);
```

---

## Conclusión

La integración de HTTP Signature en Fedired refuerza nuestro compromiso con la seguridad y privacidad de los usuarios. Este enfoque garantiza que nuestras comunicaciones federadas sean confiables y seguras, alineándose con los más altos estándares tecnológicos.

Si tienes alguna pregunta sobre esta implementación, no dudes en contactarnos en [soporte@fedired.com](mailto:soporte@fedired.com).

---
