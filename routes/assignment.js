var express = require('express')
var router = express.Router()
var experiments = ["1. VI Characteristics of a Diode","2. BJT Common Emitter Input Characteristics**","3. BJT Common Emitter Output Characteristics**","4. BJT Common Base Input Characteristics**",
"5. BJT Common Base Output Characteristics**","6. Half Wave Rectification","7. Full Wave Rectification ","8. RC Low Pass Filter","9.RC High Pass Filter","10. RC Phase Shift Oscillator","11.CE Amplifier Frequency Response"]

router.get("/experiment",  function (req, res) {

    res.render("experimentmenu", { experiments: experiments });
});
router.get("/home",  function (req, res) {

    res.render("home");
});
router.get("/index/:number",  function (req, res) {
    var experimentnumber = req.params.number;
    res.render("experimentindex", { experimentnumber: experimentnumber });
});

// Experiments 
router.get("/theory1",  function (req, res) {
    res.render("experiments/experiment1/theory");
});

router.get("/procedure1", function (req, res) {
    res.render("experiments/experiment1/procedure");
});

router.get("/simulation1", function (req, res) {
    res.render("experiments/experiment1/simulation");
});
router.get("/circuitmaking1", function (req, res) {
    res.render("experiments/experiment1/circuitmaking");
});
router.get("/theory2", function (req, res) {
    res.render("experiments/experiment2/theory");
});

router.get("/procedure2", function (req, res) {
    res.render("experiments/experiment2/procedure");
});

router.get("/simulation2", function (req, res) {
    res.render("experiments/experiment2/simulation");
});
router.get("/theory3", function (req, res) {
    res.render("experiments/experiment3/theory");
});

router.get("/procedure3", function (req, res) {
    res.render("experiments/experiment3/procedure");
});

router.get("/simulation3", function (req, res) {
    res.render("experiments/experiment3/simulation");
});
router.get("/theory4",  function (req, res) {
    res.render("experiments/experiment4/theory");
});

router.get("/procedure4",function (req, res) {
    res.render("experiments/experiment4/procedure");
});

router.get("/simulation4",function (req, res) {
    res.render("experiments/experiment4/simulation");
    
});
router.get("/circuitmaking6", function (req, res) {
    res.render("experiments/experiment6/circuitmaking");
});
router.get("/theory5",  function (req, res) {
    res.render("experiments/experiment5/theory");
});

router.get("/procedure5",function (req, res) {
    res.render("experiments/experiment5/procedure");
});

router.get("/simulation5",function (req, res) {
    res.render("experiments/experiment5/simulation");
});
router.get("/circuitmaking7", function (req, res) {
    res.render("experiments/experiment7/circuitmaking");
});
router.get("/theory6", function (req, res) {
    res.render("experiments/experiment6/theory");
});

router.get("/procedure6",  function (req, res) {
    res.render("experiments/experiment6/procedure");
});

router.get("/simulation6", function (req, res) {
    res.render("experiments/experiment6/simulation");
});
router.get("/simulation7", function (req, res) {
    res.render("experiments/experiment7/simulation");
});
router.get("/theory7", function (req, res) {
    res.render("experiments/experiment7/theory");
});
router.get("/procedure7", function (req, res) {
    res.render("experiments/experiment7/procedure");
});
router.get("/simulation8", function (req, res) {
    res.render("experiments/experiment8/simulation");
});
router.get("/theory8", function (req, res) {
    res.render("experiments/experiment8/theory");
});
router.get("/procedure8", function (req, res) {
    res.render("experiments/experiment8/procedure");
});
router.get("/circuitmaking8", function (req, res) {
    res.render("experiments/experiment8/circuitmaking");
});
router.get("/simulation9", function (req, res) {
    res.render("experiments/experiment9/simulation");
});
router.get("/theory9", function (req, res) {
    res.render("experiments/experiment9/theory");
});
router.get("/procedure9", function (req, res) {
    res.render("experiments/experiment9/procedure");
});
router.get("/circuitmaking9", function (req, res) {
    res.render("experiments/experiment9/circuitmaking");
});
router.get("/simulation10", function (req, res) {
    res.render("experiments/experiment10/simulation");
});
router.get("/theory10", function (req, res) {
    res.render("experiments/experiment10/theory");
});
router.get("/procedure10", function (req, res) {
    res.render("experiments/experiment10/procedure");
});
router.get("/simulation11", function (req, res) {
    res.render("experiments/experiment11/simulation");
});
router.get("/theory11", function (req, res) {
    res.render("experiments/experiment11/theory");
});
router.get("/procedure11", function (req, res) {
    res.render("experiments/experiment11/procedure");
});
router.get("/circuitmaking11", function (req, res) {
    res.render("experiments/experiment11/circuitmaking");
});
module.exports = router;
