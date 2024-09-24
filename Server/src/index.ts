import app from "./app"
import env from "./config/env.config"
import logger from "./utils/logger"

// Beginning of the server
app.listen(env.app.port, ()=>{
    logger.info(`Server is running on port: ${env.app.port}`);
})