var rb, re;
var r1, r2, r3;
var c1, c2, c3;
var cc, rc;
var ce;
var freq
var myvar
var vcc = 12
//function voltChange() {
//    vs = document.getElementById("vdc").value;
//    document.getElementById("vdct").value = vs;
//}
function c1Change() {
    c1 = parseFloat(document.getElementById("c1in").value);
    document.getElementById("c1").value = c1;
}
function c2Change() {
    c2 = parseFloat(document.getElementById("c2in").value);
    document.getElementById("c2").value = c2;
}
function c3Change() {
    c3 = parseFloat(document.getElementById("c3in").value);
    document.getElementById("c3").value = c3;
}

function reChange() {
    re = document.getElementById("rein").value;
    document.getElementById("re").value = re;
}
function rbChange() {
    rb = parseFloat(document.getElementById("rbin").value);
    document.getElementById("rb").value = rb;
}
function rcChange() {
    rc = parseFloat(document.getElementById("rcin").value);
    document.getElementById("rc").value = rc;
}
function r1Change() {
    r1 = document.getElementById("r1in").value;
    document.getElementById("r1").value = r1;
}
function r2Change() {
    r2 = document.getElementById("r2in").value;
    document.getElementById("r2").value = r2;
}
function r3Change() {
    r3 = document.getElementById("r2in").value;
    document.getElementById("r3").value = r3;
}

function ceChange() {
    ce = parseFloat(document.getElementById("cein").value);
    document.getElementById("ce").value = ce;
}
function ccChange() {
    cc = parseFloat(document.getElementById("ccin").value);
    document.getElementById("cc").value = cc;
}

function calculateFreq(c1, c2, c3, r1, r2, r3) {
    var R = Math.max(r1, r2, r3);
    var C = Math.max(c1, c2, c3);
    var OpFreq = 1 / (2 * Math.PI * R * C * (Math.sqrt(6)) * (Math.pow(10, -12)));
    return OpFreq;

}

function checkOutput() {
    var Ans = document.getElementById("Check").value;
    var correctAns = calculateFreq(c1, c2, c3, r1, r2, r3).toFixed(3);
    //console.log(Ans);
    //console.log(correctAns);
    if (parseFloat(correctAns) === parseFloat(Ans)) {
        alert("Your Output is Correct!");
    }
    else {
        alert("InCorrect Output!!!");
    }
}
function checkvalid() {
    if (document.getElementById("c1").value == document.getElementById("c2").value && document.getElementById("c2").value == document.getElementById("c3").value && document.getElementById("r1").value == document.getElementById("r2").value && document.getElementById("r2").value == document.getElementById("r3").value) return true;
    return false;
}
function checkNull() {
    if (document.getElementById("c1").value == "") {
        alert("Enter the value of c1");
        document.getElementById("c1").style.borderColor = "red";
        return false;
    }

    else if (document.getElementById("c2").value == "") {
        alert("Enter the value of c2");
        document.getElementById("c2").style.borderColor = "red";
        return false;
    }
    else if (document.getElementById("c3").value == "") {
        alert("Enter the value of c3");
        document.getElementById("c3").style.borderColor = "red";
        return false;
    }
    else if (document.getElementById("r1").value == "") {
        alert("Enter the value of r1");
        document.getElementById("r1").style.borderColor = "red";
        return false;
    }
    else if (document.getElementById("r2").value == "") {
        alert("Enter the value of r2");
        document.getElementById("r2").style.borderColor = "red";
        return false;
    }
    else if (document.getElementById("r3").value == "") {
        alert("Enter the value of r3");
        document.getElementById("r3").style.borderColor = "red";
    }
    else if (document.getElementById("rb").value == "") {
        alert("Enter the value of rb");
        document.getElementById("rb").style.borderColor = "red";
        return false;
    }
    else if (document.getElementById("rc").value == "") {
        alert("Enter the value of rc");
        document.getElementById("rc").style.borderColor = "red";
        return false;
    }
    else if (document.getElementById("re").value == "") {
        alert("Enter the value of re");
        document.getElementById("re").style.borderColor = "red";
        return false;
    }
    else if (document.getElementById("cc").value == "") {
        alert("Enter the value of cc");
        document.getElementById("cc").style.borderColor = "red";
        return false;
    }
    else if (document.getElementById("ce").value == "") {
        alert("Enter the value of ce");
        document.getElementById("ce").style.borderColor = "red";
        return false;
    }
    else {
        return true;
    }


}

function plotGraph() {
    if (checkvalid() === true) {
        if (checkNull() === true) {


            var ctx = document.getElementById('myChart').getContext('2d');
            var myChart = new Chart(ctx, {
                // The type of chart we want to create
                type: 'line',

                // The data for our dataset
                data: {
                    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29'],
                    datasets: [{
                        label: 'voltage',
                        fill: false,
                        borderColor: 'rgb(30,50,180)',
                        data: [0, 0.35, 0, -0.35, 0, 0.6, 0, -0.6, 0, 0.8, 0, -0.8, 0, 0.4, 0.85, 0.4, 0, -0.4, -0.85, -0.4, 0, 0.5, 1, 0.5, 0, -0.5, -1, -0.5, 0]
                    }]
                },
                options: {
                    legend: {
                        display: true,
                        labels: {
                            fontColor: 'black',
                            fontStyle: 'bold',
                            fontSize: 18,
                        }
                    },
                    scales: {
                        xAxes: [{
                            ticks: {
                                fontSize: 14,
                                fontColor: 'black',
                            },
                            scaleLabel: {
                                display: true,
                                labelString: 'Time axis',
                                fontColor: 'black',
                                fontFamily: 'sans-serif',
                                fontStyle: 'bold',
                                fontSize: 18
                            }
                        }],
                        yAxes: [{
                            ticks: {
                                max: 1,
                                min: -1,
                                stepSize: 0.2,
                                beginAtZero: true,
                                fontSize: 14,
                                fontColor: 'black',
                            },
                            scaleLabel: {
                                display: true,
                                labelString: 'Output Voltage',
                                fontColor: 'black',
                                fontFamily: 'sans-serif',
                                fontStyle: 'bold',
                                fontSize: 18
                            }
                        }]
                    }
                }
            });

            //----------------CHART UPDATION--------------//
            function addData(chart, label, data) {
                chart.data.labels.push(label);
                chart.data.datasets.forEach((dataset) => {
                    dataset.data.push(data);
                });
                chart.update(0);
            }

            function removeData(chart) {
                chart.data.labels.shift();
                chart.data.datasets.forEach((dataset) => {
                    dataset.data.shift();
                });
                chart.update(0);
            }
            var xVal = myChart.data.labels.length;
            var yVal = 15;
            freq = calculateFreq(c1, c1, c3, r1, r2, r3);
            var fs = 1.5 * Math.round(freq);

            function updateChart() {
                removeData(myChart);
                yVal = parseFloat(Math.sin(2 * Math.PI * freq * xVal));
                addData(myChart, xVal.toFixed(3), yVal);
                xVal = xVal + 1 / fs;
                //console.log(yVal); 

            }
            myvar = setInterval(function () { updateChart() }, 1000);

        }
    }
    else alert("Values of r1,r2 and r3 must be equal and c1,c2and c3 must be equal");

}
//--------------------------text box and output clearing---------------------------//

function cleard() {
    $("input:text").val("");
    $("#myChart").remove()
    var canvas = document.createElement('canvas')
    var div = document.getElementById("tblwrap")
    canvas.id = "myChart"
    canvas.style.height = "350px"
    canvas.style.width = "100%"
    canvas.style.position = "relative"
    canvas.style.top = "50px"
    div.appendChild(canvas)
    clearInterval(myvar)


}
function printf() {

    document.getElementById("demo").innerHTML = "";
    // document.getElementById("demos").innerHTML = "";

    window.print();
}