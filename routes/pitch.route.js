const express = require('express');
const app = express();
// Express route
const pitchExpressRoute = express.Router();
// User schema
let PitchSchema = require('../model/pitch.model');
// Get users
pitchExpressRoute.route('/pitches').get((req, res) => {
    PitchSchema.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})
// Create user
pitchExpressRoute.route('/pitches').post((req, res, next) => {
    PitchSchema.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.status(201).json({
                'id': data._id
            })
        }
    })
});

// Get single user
pitchExpressRoute.route('/pitches/:id').get((req, res) => {
    StudentSchema.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

module.exports = pitchExpressRoute;