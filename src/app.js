import 'dotenv/config';
import path from 'path';
import sequelize from "./config/database.js";
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import express from 'express';
const app = express();


// VARIÁVEIS DE AMBIENTE
const __dirname = import.meta.dirname || path.dirname(process.argv[1]);
const PORT = process.env.SERVER_PORT;

// CONFIGURAÇÕES
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public'))); // Arquivos estáticos

// MIDDLEWAReS
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

// ROTAS
import rotas from './routes/index.js';
rotas(app);

// INICIAR SERVIDOR
const start = async (port) => {
    try {
        await sequelize.sync();
        app.listen(port, () => {
            console.log("Servidor rodando na porta ", port);
            
        })
    } catch (err) {
        console.error("Erro ao iniciar o servidor", err)
    }
}
start(PORT);