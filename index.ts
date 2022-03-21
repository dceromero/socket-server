
import Server from './classes/Server';
import bodyParser from 'body-parser';
import router from './routers/routers';
import cors from 'cors';

//Server
const server = new Server();

//Configuración de parametros.
server.app.use(bodyParser.urlencoded({extended:true}));
server.app.use(bodyParser.json());

//CORS
server.app.use(cors({origin:true, credentials:true}))

//Configuración de rutas.
server.app.use('/',router);

server.start(()=>{
    console.log(`Server Corriendo en el puerto ${server.port}`);
    
});