# Ordo: Plataforma Backend de Red Social Descentralizada y Privada

**Ordo** es un servidor backend basado en **Pleroma**, diseñado para crear una red social descentralizada, que garantiza la **privacidad**, la **autonomía del usuario** y la **descentralización**. Utilizando el protocolo **ActivityPub**, Ordo permite a los usuarios conectarse y compartir contenido sin depender de servidores centralizados, promoviendo una experiencia de red social más libre y privada.

## Arquitectura y Compatibilidad

### Basado en Pleroma

Ordo se apoya en **Pleroma**, un servidor backend modular y ligero que permite crear plataformas federadas y descentralizadas. Pleroma es conocido por su rendimiento eficiente y su flexibilidad, lo que lo convierte en la base ideal para Ordo. Esto asegura que Ordo sea completamente **compatible con otros sistemas que utilicen el protocolo ActivityPub**, garantizando una interoperabilidad total con otras redes federadas como Mastodon, PeerTube, y más.

### Opciones de Frontend Compatibles con Pleroma

Aunque Ordo es un servidor backend, ofrece soporte completo para diferentes **frontends** que permiten a los usuarios personalizar su experiencia de uso según sus preferencias. Algunos de los frontends más populares que son totalmente compatibles con Ordo incluyen:

- **Soapbox**: Un frontend minimalista y elegante, diseñado para ofrecer una experiencia de usuario fluida y sencilla, ideal para quienes buscan simplicidad.
- **Pleroma Frontend (Pleroma-FE)**: El frontend oficial de Pleroma, que se integra perfectamente con su backend y ofrece una interfaz tradicional de red social con muchas opciones de personalización.
- **Mangan**: Un frontend simple y eficiente diseñado para aquellos que desean una experiencia de usuario más directa y limpia. Mangan es ligero y fácil de navegar.

### ActivityPub

Ordo está completamente integrado con el protocolo **ActivityPub**, lo que significa que los usuarios de Ordo pueden interactuar con personas de otras plataformas federadas sin perder control sobre su privacidad y sus datos. La adopción de ActivityPub garantiza una experiencia de usuario fluida al conectar Ordo con otras redes sociales descentralizadas como Mastodon, PeerTube, y muchas más.

## ¿Por qué elegir Ordo?

- **Privacidad Total**: A diferencia de las redes sociales centralizadas, Ordo pone a los usuarios en control total de sus datos. No se recopila ni comparte información personal sin el consentimiento explícito del usuario.
  
- **Descentralización Real**: Ordo opera sin depender de un servidor centralizado, lo que minimiza el riesgo de censura o fallos en la plataforma. Los usuarios pueden estar seguros de que sus interacciones no están siendo manipuladas por terceros.

- **Interoperabilidad**: Gracias a la integración con ActivityPub y la compatibilidad con diversos frontends, Ordo no solo es una plataforma independiente, sino que se convierte en una puerta de entrada a un ecosistema federado y descentralizado, donde los usuarios pueden conectarse y colaborar con personas en otras redes sin perder privacidad.

## Una Alternativa Ética y Privada

Ordo representa una alternativa ética y responsable a las redes sociales tradicionales, brindando a los usuarios control total sobre sus interacciones y datos. Con una base en Pleroma, que prioriza la eficiencia y el rendimiento, Ordo se posiciona como una de las plataformas más seguras y sostenibles para quienes buscan una experiencia de red social sin comprometer su privacidad.

Si deseas una red social descentralizada que respete tu privacidad y te permita interactuar con una comunidad global, **Ordo es la opción ideal**.

# Requisitos Previos

- **Servidor**: Se recomienda un servidor con al menos 1 CPU, 2GB de RAM y 20GB de espacio en disco.
- **Sistema Operativo**: Ubuntu Server 22.04 o posterior (recomendado).
- **Acceso a la Terminal**: Acceso root en el servidor.
- **Nombre de Dominio**: Un dominio válido que apunte a tu servidor.


## Dependencias Requeridas

Ordo utiliza una serie de dependencias para su correcto funcionamiento. A continuación se presenta un listado de las principales:

- **[Elixir](https://elixir-lang.org/)** (above 1.14.x)
- **[Phoenix Framework](https://www.phoenixframework.org/)** (above 1.7.x)
- **[PostgreSQL](https://www.postgresql.org/)** (above 15)
- **[Redis](https://redis.io/)**
- **[Erlang/OTP](https://www.erlang.org/)** (above 24.x)
- **[Porcelain](https://hex.pm/packages/porcelain)**
- **[ExJsonSchema](https://hex.pm/packages/ex_json_schema)**
- **[ExAws](https://hex.pm/packages/ex_aws)**
- **[Swoosh](https://hex.pm/packages/swoosh)**
- **[Cowboy](https://ninenines.eu/software/cowboy/)** (above 2.x)
- **[Libcluster](https://hex.pm/packages/libcluster)**
- **[Comeonin](https://hex.pm/packages/comeonin)** (above 5.0)
- **[Argon2](https://hex.pm/packages/argon2)**
- **[Plug](https://hex.pm/packages/plug)**
- **[nginx](https://nginx.org/)** / **[Caddy](https://caddyserver.com/)** / **[Apache](https://httpd.apache.org/)**
- **[ffmpeg](https://www.ffmpeg.org/)** (optional, for video processing)
- **[Pillow](https://pillow.readthedocs.io/en/stable/)** (optional, for image processing)
