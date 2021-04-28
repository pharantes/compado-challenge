const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/ebay", (req, res, next) => {
  const url = `https://svcs.sandbox.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByKeywords&SECURITY-APPNAME=WandoInt-217b-42d8-a699-e79808dd505e&RESPONSE-DATA-FORMAT=JSON&keywords=${req.query.query}`;
  async function makeRequest() {
    const response = await axios(url);
    const data = await response.data.findItemsByKeywordsResponse[0]
      .searchResult[0].item;
    res.json({
      data: data,
    });
  }
  makeRequest();
});

module.exports = router;
