const express = require('express')
const cors = require('cors');
const app = express()
app.use(cors());
const port = 3001

const corsOptions = {
  origin: 'https://magnusmoeheide.github.io/the-watoto-library-website'
};

app.use(cors(corsOptions));

const authorRoutes = require('./src/authors/author_routes');
const articleRoutes = require('./src/articles/article_routes');
const wwdRoutes = require('./src/whatWeDo/wwd_routes');
const wwdSectionsRoutes = require('./src/wwdSections/wwd_sections_routes');
const ognRoutes = require('./src/ourGreatestNeeds/ogn_routes');
const teamRoutes = require('./src/team/team_routes');
const articleSectionsRoutes = require('./src/articleSections/article_sections_routes');

app.use(express.json())

// app.use(function (req, res, next) {
//   res.setHeader('Access-Control-Allow-Origin', 'https://magnusmoeheide.github.io/the-watoto-library-website');
//   res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
//   next();
// });

app.get("/", (req, res) => {
  res.send("TWL DB")
});

app.use('/authors', authorRoutes);
app.use('/articles', articleRoutes);
app.use('/whatwedo', wwdRoutes);
app.use('/wwdsections', wwdSectionsRoutes);
app.use('/ourgreatestneeds', ognRoutes);
app.use('/team', teamRoutes);
app.use('/articlesections', articleSectionsRoutes);

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})