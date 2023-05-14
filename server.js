// Set up Express server to handle the HTTP requests from (the browser?)

const express = require('express') // Importing the express module
const cors = require('cors'); // Importing the cors module (to access resources from different origin)
const app = express() // Creating the express app
app.use(cors()); // Allowing the use of resources from other origins
const port = 3001 

// Importing the route handlers
const authorRoutes = require('./src/authors/author_routes');
const articleRoutes = require('./src/articles/article_routes');
const wwdRoutes = require('./src/whatwedo/wwd_routes');
const wwdSectionsRoutes = require('./src/wwdsections/wwd_sections_routes');
const ognRoutes = require('./src/ourgreatestneeds/ogn_routes');
const teamRoutes = require('./src/team/team_routes');
const articleSectionsRoutes = require('./src/articlesections/article_sections_routes');


// Extracting the data from the JSON requests (data interchange format)
app.use(express.json())


// Setting the http headers needed be used for cors
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); // The origin allowed to make requests to the server
  //res.setHeader('Access-Control-Allow-Origin', 'https://magnusmoeheide.github.io');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS'); // The http methods allowed
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers'); // The allowed headers
  next(); // indicates completed function
});
// request = if needed to get info from incoming request
// response = server's response to request from client. Used to send response back to client.


// Route handler, sends the string when a get request is made to the root path
app.get("/", (req, res) => { 
  res.send("TWL DB")
});

// Assigning different route handlers to different paths
app.use('/authors', authorRoutes);
app.use('/articles', articleRoutes);
app.use('/whatwedo', wwdRoutes);
app.use('/wwdsections', wwdSectionsRoutes);
app.use('/ourgreatestneeds', ognRoutes);
app.use('/team', teamRoutes);
app.use('/articlesections', articleSectionsRoutes);


// Starting the server
app.listen(port, () => { // Listens for incoming http requests on the port
  console.log(`App running on port ${port}.`)
})