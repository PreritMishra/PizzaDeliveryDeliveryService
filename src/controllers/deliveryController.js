const { Delivery } = require('../models');

const DeliveryController = {
  updateDeliveryStatus: async (req, res) => {
    try {
      const { deliveryId } = req.params;
      const { status } = req.body;

      const delivery = await Delivery.findByPk(deliveryId);

      if (!delivery) {
        return res.status(404).json({ error: 'Delivery not found' });
      }

      delivery.status = status;
      await delivery.save();

      return res.json(delivery);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = DeliveryController;
