const express = require('express');
const DeliveryController = require('../controllers/deliveryController');

const router = express.Router();

// Delivery routes
router.put('/:deliveryId/status', DeliveryController.updateDeliveryStatus);

module.exports = router;
