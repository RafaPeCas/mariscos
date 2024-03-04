# Instrucciones de Ejecución

## Requisitos Previos
Antes de ejecutar este programa, asegúrate de tener instalado Node.js en tu sistema. Si no lo tienes instalado, puedes descargarlo desde [aquí](https://nodejs.org/).

## Instalación de Dependencias
Para instalar las dependencias necesarias, ejecuta el siguiente comando en la terminal:

npm install

Asegúrate de tener instalado `nodemon` de forma global para facilitar el desarrollo. Si no lo tienes instalado, puedes instalarlo con el siguiente comando:

npm install -g nodemon

## Configuración del Archivo de Entorno
Duplica el archivo `.env.example` y renómbralo como `.env`. Este archivo contendrá las variables de entorno necesarias para configurar el programa. Puedes modificar estas variables según tus necesidades.

## Instalación de Dependencias Adicionales
Este programa utiliza los paquetes `express-flash` y `express-session`. Para instalarlos, ejecuta los siguientes comandos en la terminal:

npm install express-flash
npm install express-session

## Ejecución del Programa
Una vez que hayas instalado todas las dependencias, puedes ejecutar el programa en modo de desarrollo con el siguiente comando:

npm run dev

Este comando iniciará el servidor y estará atento a los cambios en los archivos para reiniciar automáticamente cuando sea necesario. Abre tu navegador y accede a la dirección `http://localhost:3000` para ver el programa en funcionamiento.

¡Disfruta del programa!
