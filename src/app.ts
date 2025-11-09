// import the express application and type definition
import express, { Express } from "express";
 
import itemRoutes from "./api/v1/routes/itemRoutes";
import loanRoutes from "./api/v1/routes/loanRoutes";
import adminRoutes from "./api/v1/routes/adminRoutes";
import errorHandler from "./api/v1/middleware/errorHandler";
import {
    accessLogger,
    errorLogger,
    consoleLogger,
} from "./api/v1/middleware/logger";
 
// initialize the express application
const app: Express = express();
 
// Interface for health check response
// An interface in TypeScript defines the structure or "shape" of an object.
interface HealthCheckResponse {
    status: string;
    uptime: number;
    timestamp: string;
    version: string;
}
// Middleware START
 
app.use(accessLogger);
app.use(errorLogger);
app.use(consoleLogger);

app.use(express.json());
 
// Middleware END
 
// respond to GET request at endpoint "/" with message
app.get("/", (req, res) => {
    res.send("Hello World");
});
 
/**
* Health check endpoint that returns server status information
* @returns JSON response with server health metrics
*/
app.get("/api/v1/health", (req, res) => {
    const healthData: HealthCheckResponse = {
        status: "OK",
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
        version: "1.0.0",
    };
 
    res.json(healthData);
});
 
// Route Imports START
// "/api/v1/items" will prefix all item routes
app.use("/api/v1/items", itemRoutes);
app.use("/api/v1/users", loanRoutes);
app.use("/api/v1/admin", adminRoutes);
 
// Route Imports END
 
// needs to be used last
app.use(errorHandler);
 
export default app;