---
title = "Actualizacion"
summary = "Guia de Actualizaciones para Fedired"
weight = 50
[menu]
[menu.docs]
identifier = "admin/update"
parent = "admin"
---

# Instrucciones de actualización

## Para usuarios de systemd/pm2

1. Cambiar al usuario `fedired` y de ir al directorio Fedired antes de ejecutar el comando `git`:

```sh
sudo su --login fedired
cd ~/fedired
```

2. Extraiga el código fuente más reciente y Construir Fedired
```sh
git stash
git pull --ff origin main
corepack prepare pnpm@latest --activate
rm pnpm-lock.yaml
pnpm install --no-frozen-lockfile
pnpm install --frozen-lockfile
NODE_ENV='production' NODE_OPTIONS='--max_old_space_size=3072' pnpm run rebuild
pnpm run migrate
 ```

3. Salga del usuario Fedired
     ```sh
    exit
    ```
		
4. Reiniciar el servidor
    ```sh
    sudo systemctl restart fedired
    ```
