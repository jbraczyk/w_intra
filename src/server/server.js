'use strict';
import server from './app';
const port = process.env.PORT || 3000;

// launch server
server.listen(port, () => {
    console.log("hehe")
});