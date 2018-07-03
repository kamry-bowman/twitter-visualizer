  const express = require("express");
  const path = require("path");
  const cluster = require('cluster');
  const numCPUs = require('os').cpus().length;
  const cors = require('cors');

  const PORT = process.env.PORT || 8000;

  if (cluster.isMaster) {
    console.error(`Node cluster master ${process.pid} is running`);

    
    for (let i = 0; i < numCPUs; i++) {
      cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
      console.error(`Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`);
    });

  } else {
    
    
    const app = express();
    
    app.use(cors());
    
    app.listen(PORT, function () {
      console.error(`Cluter ${process.pid} is listening on port ${PORT}`);
    });
  }
