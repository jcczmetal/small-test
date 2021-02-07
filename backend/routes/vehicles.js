const router    = require('express').Router();
let Vehicle     = require('../models/Vehicle');

router.route('/')
    .get((req, res) => {
        Vehicle.find()
            .then(vehicles  => res.json(vehicles))
            .catch(err      => res.status(400).json(`Error: ${err}` ));
    });


router.route('/')
    .post((req, res) => {
        const description   = req.body.description;
        const make          = req.body.make;
        const model         = req.body.model;
        const km            = req.body.km ? Number(req.body.km) : 0;
        const image         = req.body.image;
        const status        = 'new';

        const newVehicle    = new Vehicle({
            description,
            make,
            model,
            km,
            image,
            status
        });

        newVehicle.save()
            .then(()        => res.json('Vehicle saved'))
            .catch(err      => res.status(400).json('Error ' + err));

    });

router.route('/')
    .put((req, res) => {

        const filter = { _id: req.body._id };
        const update = {
            id: Number(req.body.id),
            estimated: Date.parse(req.body.estimatedate),
            full_name: req.body.full_name,
            status: 'maintenance',
        };

        Vehicle.findOneAndUpdate(filter, update, {
                new: true
            })
            .then((data)    => res.json(data))
            .catch(err      => res.status(400).json('Error ' + err));
    });

module.exports = router;