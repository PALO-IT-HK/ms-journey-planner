const express = require('express');
const router = express.Router();
const Request = require('request');
const transformer = require('./../utils/journeyPlannerTransformer');
const config = require('../config');
const journeyPlannerMockResults = require('../../mock-data/bike-journey-planner.json');

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
