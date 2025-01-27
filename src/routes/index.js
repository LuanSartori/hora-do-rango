import homeRouter from "./homeRouter.js";

// função que indexa todas as pastas de rotas
export default function(app) {
    app.use('/', homeRouter);
}