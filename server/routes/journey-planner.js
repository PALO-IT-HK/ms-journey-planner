const express = require('express');
const router = express.Router();
const Request = require('request');
const transformer = require('./../utils/journeyPlannerTransformer');
const config = require('../config');
const journeyPlannerMockResults = require('../../mock-data/bike-journey-planner.json');

/**
 * @swagger
 * /bike/journey:
 *   get:
 *     description: Get journey details
 *     tags:
 *       - journey
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: startpt
 *         description: Start point of the journey
 *         default: '51.5013997859,-0.1249012859'
 *         in: query
 *         required: true
 *         type: string
 *       - name: endpt
 *         description: End point of the journey
 *         default: '51.5015933559,-0.1235101353'
 *         in: query
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: results
 */
router.get('/', function(req, res, next) {
  let mockData;
  let tflURI;
  if (config.is_mock_data) {
    mockData = journeyPlannerMockResults;
  }
  tflURI = `${config.journey_planner_api_url}/${req.query.startpt}/to/${
    req.query.endpt
  }?mode=cycle&app_id=${config.app_id}&app_key=${config.app_key}`;

  if (config.is_mock_data) {
    return res.status(200).send(mockData);
  }
  Request(
    {
      method: 'GET',
      uri: tflURI
    },
    function(error, response, body) {
      if (!error && response.statusCode == 200) {
        let journey = {};
        let result = transformer.getJourneyPlannerData(
          JSON.parse(body),
          journey
        );
        return res.status(200).send(journey);
      }
    }
  );
});

module.exports = router;
