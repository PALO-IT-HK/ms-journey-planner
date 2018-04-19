const express = require('express');
const config = require('../config');

const router = express.Router();

const options = {
  swaggerDefinition: {
    info: {
      title: 'Journey Planner Swagger',
      version: '1.0.0',
      description: 'Journey Planner RESTful API',
      contact: {
        email: 'rmahajan@palo-it.com',
      },
    },
    tags: [
      {
        name: 'journey',
        description: 'Journey Planner API',
      },
    ],
    schemes: ['https', 'http'],
    host: config.endpointBaseUrl,
    basePath: '/',
  },
  apis: ['./server/routes/journey-planner.js'],
};

const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerSpec = swaggerJSDoc(options);

router.get('/json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

router.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = {
  router,
};
