---
title = "Ajustes de Bases de datos"
summary = "Como configurar correctamente la base de datos de PostgreSQL."
weight = 20
[menu]
[menu.docs]
identifier = "admin/important"
parent = "admin"
---

# 📚 Protocolo ActivityPub y Nostr

Esta guía proporciona información sobre los protocolos **ActivityPub** y **Nostr**, con el fin de ayudar a los administradores y desarrolladores a comprender su funcionamiento y cómo pueden ser utilizados para crear y administrar redes sociales descentralizadas.

## 🌐 **¿Qué es ActivityPub?**

**ActivityPub** es un protocolo abierto de comunicación basado en estándares web que facilita la creación de redes sociales descentralizadas. Fue desarrollado por el **W3C Social Web Working Group** y es utilizado por varias plataformas para federar servicios y redes sociales.

### Características principales de ActivityPub:
1. **Descentralización**: Permite a los usuarios interactuar entre diferentes plataformas, creando una red social federada en la que no se depende de una sola entidad.
2. **Interoperabilidad**: A través de ActivityPub, diferentes aplicaciones pueden intercambiar mensajes y contenido en un formato estandarizado.
3. **Objetos y Actividades**: El protocolo define una serie de "objetos" (como publicaciones, imágenes, y usuarios) y "actividades" (como seguir, publicar o dar 'me gusta') que pueden ser utilizados para interactuar entre plataformas.

### Componentes de ActivityPub:
1. **Servidor de Actividad**: Es el servidor que hospeda los datos de una red social y maneja las solicitudes de interacción entre usuarios de diferentes servidores.
2. **Cliente de Actividad**: Un cliente que se conecta a un servidor para realizar actividades, como enviar publicaciones o seguir otros usuarios.
3. **Mensajes de Actividad**: Los mensajes (basados en JSON-LD) permiten la interacción entre servidores y clientes. Cada mensaje describe una actividad que un usuario realiza, como crear contenido o seguir a otro usuario.

#### Ejemplo de un mensaje ActivityPub:
```json
{
  "@context": "https://www.w3.org/ns/activitystreams",
  "type": "Create",
  "actor": "https://example.org/users/johndoe",
  "object": {
    "type": "Note",
    "content": "¡Hola, mundo!"
  }
}
```

## 🛠 **¿Qué es Nostr?**

**Nostr** es un protocolo simple y descentralizado para la creación de redes sociales. A diferencia de ActivityPub, Nostr no se basa en servidores y federación de instancias, sino en una arquitectura de "clientes y redes" donde cada usuario es responsable de manejar su propio conjunto de claves criptográficas.

### Características principales de Nostr:
1. **Descentralización extrema**: No hay servidores centralizados. Cada usuario puede operar su propio nodo de red a través de un cliente compatible con Nostr.
2. **Bajo requerimiento de infraestructura**: A diferencia de otros protocolos como ActivityPub, Nostr es ligero y más fácil de implementar.
3. **Uso de criptografía**: Cada mensaje es firmado digitalmente con las claves privadas del usuario, lo que garantiza la autenticidad y la integridad del contenido.

### Funcionamiento básico:
- **Claves públicas y privadas**: Los usuarios tienen una clave pública que otros pueden usar para enviarles mensajes, y una clave privada que utilizan para firmar sus actividades.
- **Redes descentralizadas**: Los clientes de Nostr pueden conectar con otros clientes para formar redes de intercambio de mensajes y publicaciones sin depender de un servidor central.

#### Ejemplo de mensaje en Nostr:
El protocolo de Nostr se basa en eventos que los clientes envían a través de la red. Un ejemplo de evento podría ser:
```json
{
  "content": "¡Hola, Nostr!",
  "pubkey": "1234567890abcdef",
  "sig": "abcdef123456",
  "event": "post"
}
```

## 📡 **Comparación entre ActivityPub y Nostr**

| Característica       | **ActivityPub**                             | **Nostr**                                  |
|----------------------|---------------------------------------------|--------------------------------------------|
| **Descentralización** | Federada, pero centralizada en instancias.  | Totalmente descentralizado.                |
| **Requisitos**        | Requiere servidores para federación.       | Solo necesita clientes y claves.           |
| **Enfoque**           | Redes sociales federadas.                   | Mensajes criptográficos entre clientes.    |
| **Protocolos**        | ActivityPub (Interoperable).               | Nostr (Basado en criptografía).            |
| **Escalabilidad**     | Requiere infraestructura compleja.         | Escalable sin servidores.                  |

---

## 🚀 **Conclusión**

Cada uno de estos protocolos tiene sus ventajas dependiendo del caso de uso:

- **ActivityPub** es ideal para redes sociales federadas, donde los usuarios pueden interactuar entre diferentes plataformas.
- **Nostr** es una opción más ligera y simple, ideal para quienes buscan una solución descentralizada sin la complejidad de servidores.

Puedes elegir el protocolo que mejor se adapte a tus necesidades dependiendo de lo que quieras lograr en tu red social.

---

## 📌 **Referencias**
- [Documentación oficial de ActivityPub](https://www.w3.org/TR/activitypub/)
- [Documentación de Nostr](https://github.com/fiatjaf/nostr)
