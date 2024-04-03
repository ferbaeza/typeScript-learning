import { Router } from "express";
import { readdirSync } from 'fs'

const router = Router()
const PATH = `${__dirname}`

const limpiarRutas = (fichero: string) => {
    const rutaLimpia = fichero.split('.').shift()
    return rutaLimpia
};

console.log("Rutas provistas:")
readdirSync(PATH).filter((fichero)=>{
    const ruta = limpiarRutas(fichero)
    if (ruta !== 'index') {
        import (`./${ruta}`).then((moduloRouter)=>[
            router.use(`/${ruta}`, moduloRouter.router)
        ]).catch
        console.log(ruta)
    }
})


export { router }

