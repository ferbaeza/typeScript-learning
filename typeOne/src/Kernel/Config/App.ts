import dotenv from 'dotenv'
dotenv.config()

const PORT :number = Number(process.env.PORT) || 3000
const DATABASE_USER :string = process.env.DATABASE_USER || 'fbaezahurtado'
const DATABASE_PASSWORD :string = process.env.DATABASE_PASSWORD || 'password'
const DATABASE_NAME :string = process.env.DATABASE_NAME || 'database'
const DATABASE_COLLECTION :string = process.env.DATABASE_COLLECTION || 'collection'



export {
    PORT,
    DATABASE_USER,
    DATABASE_PASSWORD,
    DATABASE_NAME,
    DATABASE_COLLECTION
}



