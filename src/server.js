const express = require("express");
const connectDB = require("./config/database");
const authRoutes = require('./routes/authRoutes');
const policyRoutes = require('./routes/policyRoutes');
const uploadRoutes = require('./routes/uploadRoutes');
const monitorCPU = require('./utils/cpuMonitor');
const messageRoutes = require('./routes/messageRoutes');


const app = express();
const PORT = 3000;


app.use(express.json());



app.use('/api/auth', authRoutes);
app.use('/api/policies', policyRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/messages', messageRoutes);




monitorCPU();



connectDB()
    .then(() => {
        console.log("Database connection is estiblished")
        app.listen(PORT, () => {
            console.log(`server is running at port : ${PORT}`);
        });
    })
    .catch(error => {
        console.error("Database connection is not estiblished")
    });