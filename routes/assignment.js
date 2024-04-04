var express = require('express')
var router = express.Router()
var experiments = ["1. VI Characteristics of a Diode","2. BJT Common Emitter Characteristics**","3. BJT Common Base Characteristics**",
"4. Half Wave Rectification","5. Full Wave Rectification "]

router.get("/experiment",  function (req, res) {

    res.render("experimentmenu", { experiments: experiments });
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
router.get("/theory2", function (req, res) {
    res.render("experiments/experiment2/theory");
});

router.get("/procedure2", function (req, res) {
    res.render("experiments/experiment2/procedure");
});

router.get("/simulation2", function (req, res) {
    res.render("experiments/experiment2/simulation");
});
router.get("/simulation2.1", function (req, res) {
    res.render("experiments/experiment2/part1");
});

router.get("/simulation2.2", function (req, res) {
    res.render("experiments/experiment2/part2");
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
router.get("/simulation3.1", function (req, res) {
    res.render("experiments/experiment3/part1");
});

router.get("/simulation3.2", function (req, res) {
    res.render("experiments/experiment3/part2");
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
router.get("/theory5",  function (req, res) {
    res.render("experiments/experiment5/theory");
});

router.get("/procedure5",function (req, res) {
    res.render("experiments/experiment5/procedure");
});

router.get("/simulation5",function (req, res) {
    res.render("experiments/experiment5/simulation");
});
module.exports = router;
