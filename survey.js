const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const axios = require('axios');

router.use(bodyParser.json());

API_KEY = '4wrirOCTqvuPhMFWx7F9lvQvRYw6nuLZoT3AmyKh'

/************************ Begin Model Functions ************************/

/************************* End Model Functions *************************/



/********************* Begin Controller Functions **********************/

/* Get all survey data with filters applied
 *      Required attributes: year, report or variable
 *      Optional attributes: state, category, farmtype
*/
router.post('/survey', function (req, res) {
    if (!req.body.year || (!req.body.report && !req.body.variable)) {
        res.status(400).json({'Error': 'The request object is missing at least one of the required attributes'});
    } else {
        console.log('Year and report/variable are accounted for');
        const data = req.body;
        const config = {'Content-Type': 'application/json'};
        axios.post(`https://api.ers.usda.gov/data/arms/surveydata?api_key=${API_KEY}`, data, config)
            .then((response) => {
                res.status(200).json(response.data);
            });
    }
});

/********************** End Controller Functions ***********************/


module.exports = router;