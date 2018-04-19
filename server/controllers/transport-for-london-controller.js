const Request = require('request');
const transformer = require('./../utils/journey-planner-transformer');
const config = require('../config');

/**
 * Get journey information from TFL
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
function getJourney(req, res, next) {
  Request(
    {
      method: 'GET',
      uri: `${config.journey_planner_api_url}/${req.query.startpt}/to/${req.query.endpt}`,
      qs: {
        mode: 'cycle',
        app_id: config.app_id,
        app_key: config.app_key,
      },
    },
    (error, response, body) => {
      if (!error && response.statusCode === 200) {
        const result = transformer.getJourneyPlannerData(JSON.parse(body));
        return res.status(200).send(result);
      }
      return next(error);
    },
  );
}

module.exports = {
  getJourney,
};
