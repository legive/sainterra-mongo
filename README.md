# sainterra-mongo

Este es un proyecto de API en Node.js que se conecta a una base de datos MongoDB. El proyecto está **dockerizado**, lo que permite ejecutarlo en cualquier entorno sin tener que configurar manualmente las dependencias.

## Descripción

La API permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre los usuarios. MongoDB es utilizado para almacenar los datos de los usuarios.

## Requisitos

Para ejecutar este proyecto necesitas tener instalado:

- **Docker** y **Docker Compose** (si usas contenedores)
- **Node.js** (para ejecutar la aplicación localmente sin Docker)
- **MongoDB** (si no usas Docker Compose)

## Instalación

### Usando Docker

Si prefieres usar Docker, sigue estos pasos:

1. **Clona el repositorio**:
    ```bash
    git clone https://github.com/tu_usuario/tu_repositorio.git
    cd tu_repositorio
    ```

2.**Levanta los contenedores con Docker Compose**:
    Si usas `docker-compose.yml` para levantar MongoDB y la API:
    ```bash
    docker-compose up --build
    ```

3. **Accede a la API**:
    La API estará disponible en **`http://localhost:3000`**.

### Sin Docker

Si prefieres ejecutar la aplicación localmente, sigue estos pasos:

1. **Clona el repositorio**:
    ```bash
    git clone https://github.com/tu_usuario/tu_repositorio.git
    cd tu_repositorio
    ```

2. **Instala las dependencias**:
    ```bash
    npm install
    ```

3. **Ejecuta la aplicación**:
    ```bash
    node app.js
    ```

4. **Accede a la API**:
    La API estará disponible en **`http://localhost:3000`**.

## Ramas

Se recomienda trabajar con ramas para mejorar el flujo de trabajo y colaborar de manera más eficiente. Aquí está el flujo básico de trabajo:

1. **Crear una nueva rama**:
    ```bash
    git checkout -b nombre-de-la-rama
    ```

2. **Realizar cambios** y hacer commit de ellos:
    ```bash
    git add .
    git commit -m "Descripción del cambio realizado"
    ```

3. **Subir la rama al repositorio**:
    ```bash
    git push origin nombre-de-la-rama
    ```

4. **Crear un Pull Request (PR)** en GitHub para fusionar los cambios en la rama `main`.

## Contribuciones

Si deseas contribuir a este proyecto, sigue los pasos de ramas indicados anteriormente y crea un Pull Request detallado con las modificaciones realizadas.
