module.exports = {
  journey_planner_api_url: 'https://api.tfl.gov.uk/Journey/JourneyResults',
  endpointBaseUrl: process.env.ENDPOINT_BASEINTERFACE || 'localhost:3000',
  app_id: process.env.BIKE_APP_ID || '',
  app_key: process.env.BIKE_APP_KEY || '',
  is_mock_data: false
};
