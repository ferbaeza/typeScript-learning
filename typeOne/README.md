# TypeOne

- **Crear Carpeta del Proyecto y situartse dentro de la carpeta**
- **Iniciar Proyecto**
- **Instalar Dependencias**

```bash
mkdir my-project && cd my-project
yarn init -y
# Install TypeScript and Init
yarn add -D typescript tsc ts-node @types/node
yarn tsc init
# O could be
npx tsc --init --rootDir src --outDir build
# add Dependencies
yarn add multer cors express dotenv
yarn add -D nodemon rimraf
```

