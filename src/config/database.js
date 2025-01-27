import { Sequelize } from "sequelize";
import 'dotenv/config';
var sequelize;

const dev_status = process.env.BD_MODE || 'INT';
if (dev_status == 'OUT') {

    // CONFIG BD PARA PRODUÇÃO
    sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASS,
        {
            host: process.env.DB_HOST,
            dialect: process.env.DB_DIALECT,
            port: process.env.DB_PORT,
            define: {
                timestamps: false
            },
            logging: console.log
        }
    );

} else if (dev_status == 'IN') {

    // CONFIG BD PARA DESENVOLVIMENTO
    sequelize = new Sequelize({
        dialect: process.env.DB_DEV_DIALECT || "sqlite",
        storage: process.env.DB_DEV_STORAGE || "../database.sqlite",
        define: {
            timestamps: true
        },
        logging: console.log
    })

}
sequelize.authenticate().catch((error) => {
    console.error('Não é possível conectar-se ao banco de dados: ', error);
});


export default sequelize;