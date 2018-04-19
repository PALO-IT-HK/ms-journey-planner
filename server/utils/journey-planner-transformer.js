function getJourneyPlannerData(tflJourneyPlannerData) {
  return {
    stateDateTime: tflJourneyPlannerData.journeys[0].startDateTime,
    arrivalDateTime: tflJourneyPlannerData.journeys[0].arrivalDateTime,
    duration: tflJourneyPlannerData.journeys[0].duration,
    lineString: tflJourneyPlannerData.journeys[0].legs[0].path.lineString,
  };
}

module.exports = {
  getJourneyPlannerData,
};
