const express = require("express");
const { celebrate, Joi, Segments } = require("celebrate");

const router = express.Router();

router.get(
  "/",
  celebrate({
    [Segments.QUERY]: {
      url: Joi.string().required(),
      sid: Joi.string().required(),
    },
  }),
  async (req, res) => {
    const { url, sid } = req.query;
  }
);
module.exports = router;
