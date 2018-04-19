const express = require('express');

const router = express.Router();

const { getJourney } = require('../controllers/transport-for-london-controller');

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
router.get('/', getJourney);

module.exports = router;
