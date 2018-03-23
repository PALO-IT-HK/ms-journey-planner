const _ = require('lodash');

function getJourneyPlannerData(tflJourneyPlannerData, journey) {
  journey.startDateTime = tflJourneyPlannerData.journeys[0].startDateTime;
  journey.arrivalDateTime = tflJourneyPlannerData.journeys[0].arrivalDateTime;
  journey.duration = tflJourneyPlannerData.journeys[0].duration;
  journey.lineString =
    tflJourneyPlannerData.journeys[0].legs[0].path.lineString;
  return journey;
}

module.exports = {
  getJourneyPlannerData
};
