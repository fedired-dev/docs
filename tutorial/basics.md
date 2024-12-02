# ¿Qué es el Fediverso?

El **Fediverso** (o "Federated Universe") es un conjunto de redes sociales descentralizadas e interconectadas que permiten a los usuarios de diferentes plataformas interactuar entre sí sin estar limitados a un único servidor centralizado. Estas plataformas están basadas en protocolos abiertos que permiten la comunicación entre diferentes instancias (servidores).

Algunas de las plataformas más populares dentro del Fediverso incluyen:

- **Mastodon**: Alternativa descentralizada a Twitter.
- **Pleroma**: Similar a Mastodon, pero más ligera.
- **PeerTube**: Alternativa descentralizada a YouTube.
- **Pixelfed**: Alternativa descentralizada a Instagram.
- **Funkwhale**: Plataforma para compartir música.

> [!NOTE]
>
>  Al usar el Fediverso, no dependemos de una única plataforma centralizada. Esto significa que los datos y la interacción social son más privados y controlados por los usuarios.

**Fedired** es una plataforma dentro del Fediverso que utiliza el protocolo **ActivityPub** para permitir la interacción entre usuarios de diferentes redes descentralizadas. Fedired es un espacio donde los usuarios pueden conectar, compartir contenidos y participar en una red social federada, manteniendo la privacidad y el control de sus datos.

---

## Protocolos de Federación

El Fediverso utiliza varios **protocolos de federación** para permitir que las plataformas interactúen entre sí. Algunos de los más importantes son:

### 1. **ActivityPub**

**ActivityPub** es el protocolo estándar para la comunicación entre plataformas dentro del Fediverso. Desarrollado por el **World Wide Web Consortium** (W3C), es utilizado por la mayoría de las plataformas descentralizadas, como **Mastodon**, **Pleroma**, **PeerTube** y **Pixelfed**.

- **¿Qué hace ActivityPub?**  
  Permite que las plataformas compartan información de manera estandarizada, como publicaciones, seguimientos, comentarios, me gusta y más. Los usuarios de Mastodon pueden interactuar con los usuarios de PeerTube, por ejemplo, gracias a ActivityPub.

> [!TIP]
>
>  **ActivityPub** es el protocolo más utilizado por plataformas del Fediverso debido a su amplia adopción y estabilidad.


### 2. **OStatus**

**OStatus** es un protocolo más antiguo que también permite la federación entre servidores, pero ha sido reemplazado en gran medida por ActivityPub. Algunas plataformas como **StatusNet** lo utilizaron antes de la popularización de ActivityPub.

- **Limitaciones**: OStatus no es tan flexible ni tan eficiente como ActivityPub, lo que ha llevado a su obsolescencia.

> [!TIP]
>
>  Si bien algunos servidores aún usan OStatus, es recomendable migrar a ActivityPub si estás creando una nueva plataforma para aprovechar sus mejoras.

### 3. **WebFinger**

**WebFinger** es un protocolo que se utiliza para obtener información sobre los usuarios de diferentes instancias dentro del Fediverso. Permite resolver direcciones de usuario y asociarlas con actividades en la red.

> [!NOTE]
>
>  WebFinger no es un protocolo de federación en sí mismo, sino un complemento que facilita la interacción entre servidores.

### 4. **Matrix**

**Matrix** es un protocolo descentralizado para mensajería instantánea y comunicación en tiempo real, utilizado por aplicaciones como **Element**. Aunque no forma parte del Fediverso, algunas plataformas pueden integrarlo con ActivityPub.

> [!WARNING]
>
>  Aunque Matrix y ActivityPub no están directamente relacionados, es posible que en el futuro veamos más integraciones entre ellos para enriquecer la experiencia de comunicación.

---

## ¿Por qué Fedired usa ActivityPub?

**Fedired** utiliza ActivityPub por varias razones clave:

1. **Escalabilidad y Flexibilidad**: ActivityPub permite que la plataforma crezca sin perder interoperabilidad con otras redes descentralizadas.
2. **Privacidad y Autonomía**: La descentralización garantiza que los datos no estén controlados por una sola entidad, lo que ofrece un mayor control sobre la información.
3. **Comunidad Abierta**: Al usar un protocolo estándar y abierto, Fedired fomenta una comunidad basada en la transparencia, la colaboración y la libertad de expresión.

> [!TIP]
> 
> Al utilizar **ActivityPub**, **Fedired** forma parte de una red de plataformas que apoya la privacidad y la autonomía de los usuarios, permitiendo a los usuarios interactuar con plataformas como **Mastodon**, **PeerTube** y **Pixelfed**.

> [!WARNING]
>
>  La adopción de protocolos como ActivityPub implica que **Fedired** pueda tener interacciones con otras plataformas que, aunque descentralizadas, pueden tener diferentes políticas y normas de uso. Es importante que los usuarios se familiaricen con estas plataformas y sus reglas.

---

## Conclusión

El **Fediverso** es una red descentralizada que permite a los usuarios de diferentes plataformas interactuar sin depender de servidores centralizados. **ActivityPub** es el protocolo que permite la comunicación entre plataformas dentro del Fediverso, y es por eso que **Fedired** lo utiliza.

**Ventajas de usar ActivityPub**:

- **Interoperabilidad** con otras plataformas descentralizadas.
- **Descentralización** y **control de los datos** por parte de los usuarios.
- **Comunidad abierta** que apoya la privacidad, la transparencia y la autonomía.

Con **ActivityPub**, **Fedired** puede garantizar una experiencia social más libre, segura y abierta, formando parte de una red más amplia que promueve los mismos principios de privacidad y descentralización.


> [!TIP]
>
>  El Fediverso está en constante evolución. Si decides unirte o crear una instancia, es recomendable mantenerse informado sobre las actualizaciones de los protocolos y las mejores prácticas en la gestión de plataformas descentralizadas.
