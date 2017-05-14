// global variable containing dataset of building A in json format
// Hardcoded in the js file for the demo, will change for real input from database
var dt1 = [{"time":"2017-05-11T21:15:00.000Z","value":1.7},{"time":"2017-05-11T21:30:00.000Z","value":1.8},{"time":"2017-05-11T21:45:00.000Z","value":1.8},
{"time":"2017-05-11T22:00:00.000Z","value":1.8},{"time":"2017-05-11T22:15:00.000Z","value":1.9},{"time":"2017-05-11T22:30:00.000Z","value":1.7},{"time":"2017-05-11T22:45:00.000Z","value":1.8},
{"time":"2017-05-11T23:00:00.000Z","value":1.7},{"time":"2017-05-11T23:15:00.000Z","value":1.8},{"time":"2017-05-11T23:30:00.000Z","value":1.8},{"time":"2017-05-11T23:45:00.000Z","value":1.8},
{"time":"2017-05-12T00:00:00.000Z","value":1.7},{"time":"2017-05-12T00:15:00.000Z","value":1.7},{"time":"2017-05-12T00:30:00.000Z","value":1.7},{"time":"2017-05-12T00:45:00.000Z","value":1.7},
{"time":"2017-05-12T01:00:00.000Z","value":1.6},{"time":"2017-05-12T01:15:00.000Z","value":1.6},{"time":"2017-05-12T01:30:00.000Z","value":1.7},{"time":"2017-05-12T01:45:00.000Z","value":1.7},
{"time":"2017-05-12T02:00:00.000Z","value":1.7},{"time":"2017-05-12T02:15:00.000Z","value":1.8},{"time":"2017-05-12T02:30:00.000Z","value":1.8},{"time":"2017-05-12T02:45:00.000Z","value":1.9},
{"time":"2017-05-12T03:00:00.000Z","value":1.7},{"time":"2017-05-12T03:15:00.000Z","value":1.6},{"time":"2017-05-12T03:30:00.000Z","value":1.6},
{"time":"2017-05-12T03:45:00.000Z","value":2.4},{"time":"2017-05-12T04:00:00.000Z","value":2.3},{"time":"2017-05-12T04:15:00.000Z","value":1.8},
{"time":"2017-05-12T04:30:00.000Z","value":1.9},{"time":"2017-05-12T04:45:00.000Z","value":1.9},{"time":"2017-05-12T05:00:00.000Z","value":1.9},
{"time":"2017-05-12T05:15:00.000Z","value":2},{"time":"2017-05-12T05:30:00.000Z","value":2.1},{"time":"2017-05-12T05:45:00.000Z","value":2.4},
{"time":"2017-05-12T06:00:00.000Z","value":2.3},{"time":"2017-05-12T06:15:00.000Z","value":4},{"time":"2017-05-12T06:30:00.000Z","value":4.5},
{"time":"2017-05-12T06:45:00.000Z","value":7.9},{"time":"2017-05-12T07:00:00.000Z","value":9},{"time":"2017-05-12T07:15:00.000Z","value":9.6},
{"time":"2017-05-12T07:30:00.000Z","value":9.2},{"time":"2017-05-12T07:45:00.000Z","value":9.4},{"time":"2017-05-12T08:00:00.000Z","value":8.9},
{"time":"2017-05-12T08:15:00.000Z","value":8.6},{"time":"2017-05-12T08:30:00.000Z","value":9},{"time":"2017-05-12T08:45:00.000Z","value":8.8},
{"time":"2017-05-12T09:00:00.000Z","value":7.8},{"time":"2017-05-12T09:15:00.000Z","value":8.5},{"time":"2017-05-12T09:30:00.000Z","value":8.7},
{"time":"2017-05-12T09:45:00.000Z","value":8.5},{"time":"2017-05-12T10:00:00.000Z","value":8},{"time":"2017-05-12T10:15:00.000Z","value":7.8},
{"time":"2017-05-12T10:30:00.000Z","value":7.6},{"time":"2017-05-12T10:45:00.000Z","value":7.1},{"time":"2017-05-12T11:00:00.000Z","value":6.9},
{"time":"2017-05-12T11:15:00.000Z","value":7.7},{"time":"2017-05-12T11:30:00.000Z","value":8},{"time":"2017-05-12T11:45:00.000Z","value":7.5},
{"time":"2017-05-12T12:00:00.000Z","value":7.2},{"time":"2017-05-12T12:15:00.000Z","value":7},{"time":"2017-05-12T12:30:00.000Z","value":8},
{"time":"2017-05-12T12:45:00.000Z","value":7.5},{"time":"2017-05-12T13:00:00.000Z","value":7},{"time":"2017-05-12T13:15:00.000Z","value":8.3},
{"time":"2017-05-12T13:30:00.000Z","value":7.8},{"time":"2017-05-12T13:45:00.000Z","value":7},{"time":"2017-05-12T14:00:00.000Z","value":7.8},
{"time":"2017-05-12T14:15:00.000Z","value":7.8},{"time":"2017-05-12T14:45:00.000Z","value":7.5},{"time":"2017-05-12T15:00:00.000Z","value":6},
{"time":"2017-05-12T15:15:00.000Z","value":5.8},{"time":"2017-05-12T15:30:00.000Z","value":4.3},{"time":"2017-05-12T15:45:00.000Z","value":3.9},
{"time":"2017-05-12T16:00:00.000Z","value":2.5},{"time":"2017-05-12T16:15:00.000Z","value":2.2},{"time":"2017-05-12T16:30:00.000Z","value":2.4},
{"time":"2017-05-12T16:45:00.000Z","value":1.9},{"time":"2017-05-12T17:00:00.000Z","value":1.8},{"time":"2017-05-12T17:15:00.000Z","value":1.9},
{"time":"2017-05-12T17:30:00.000Z","value":1.8},{"time":"2017-05-12T17:45:00.000Z","value":1.8},{"time":"2017-05-12T18:00:00.000Z","value":1.6},
{"time":"2017-05-12T18:15:00.000Z","value":2},{"time":"2017-05-12T18:30:00.000Z","value":1.9},{"time":"2017-05-12T18:45:00.000Z","value":1.8},
{"time":"2017-05-12T19:00:00.000Z","value":1.9},{"time":"2017-05-12T19:15:00.000Z","value":1.8},{"time":"2017-05-12T19:30:00.000Z","value":1.7},
{"time":"2017-05-12T19:45:00.000Z","value":1.8},{"time":"2017-05-12T20:00:00.000Z","value":1.6},{"time":"2017-05-12T20:15:00.000Z","value":1.9},
{"time":"2017-05-12T20:30:00.000Z","value":1.5},{"time":"2017-05-12T20:45:00.000Z","value":1.6},{"time":"2017-05-11T21:00:00.000Z","value":1.6}];

//Same as above but for Building B
var dt2 =[
{"time":"2017-05-12T00:15:00.000Z","value":1.7},
{"time":"2017-05-12T00:30:00.000Z","value":1.8},
{"time":"2017-05-12T00:45:00.000Z","value":1.8},
{"time":"2017-05-12T01:00:00.000Z","value":1.9},
{"time":"2017-05-12T01:15:00.000Z","value":1.7},
{"time":"2017-05-12T01:30:00.000Z","value":1.8},
{"time":"2017-05-12T01:45:00.000Z","value":1.7},
{"time":"2017-05-12T02:00:00.000Z","value":1.8},
{"time":"2017-05-12T02:15:00.000Z","value":2.3},
{"time":"2017-05-12T02:30:00.000Z","value":4},
{"time":"2017-05-12T02:45:00.000Z","value":4.5},
{"time":"2017-05-12T03:00:00.000Z","value":7.9},
{"time":"2017-05-12T03:15:00.000Z","value":9},
{"time":"2017-05-12T03:30:00.000Z","value":9.6},
{"time":"2017-05-12T03:45:00.000Z","value":9.2},
{"time":"2017-05-12T04:00:00.000Z","value":9.4},
{"time":"2017-05-12T04:15:00.000Z","value":8.9},
{"time":"2017-05-12T04:30:00.000Z","value":8.6},
{"time":"2017-05-12T04:45:00.000Z","value":9},
{"time":"2017-05-12T05:00:00.000Z","value":8.8},
{"time":"2017-05-12T05:15:00.000Z","value":7.8},
{"time":"2017-05-12T05:30:00.000Z","value":8.5},
{"time":"2017-05-12T05:45:00.000Z","value":8.7},
{"time":"2017-05-12T06:00:00.000Z","value":8.5},
{"time":"2017-05-12T06:15:00.000Z","value":8},
{"time":"2017-05-12T06:30:00.000Z","value":7.8},
{"time":"2017-05-12T06:45:00.000Z","value":7.6},
{"time":"2017-05-12T07:00:00.000Z","value":7.1},
{"time":"2017-05-12T07:15:00.000Z","value":6.9},
{"time":"2017-05-12T07:30:00.000Z","value":7.7},
{"time":"2017-05-12T07:45:00.000Z","value":1.9},
{"time":"2017-05-12T08:00:00.000Z","value":2},
{"time":"2017-05-12T08:15:00.000Z","value":2.1},
{"time":"2017-05-12T08:30:00.000Z","value":2.4},
{"time":"2017-05-12T08:45:00.000Z","value":1.9},
{"time":"2017-05-12T09:00:00.000Z","value":1.8},
{"time":"2017-05-12T09:15:00.000Z","value":1.9},
{"time":"2017-05-12T09:30:00.000Z","value":1.8},
{"time":"2017-05-12T09:45:00.000Z","value":1.8},
{"time":"2017-05-12T10:00:00.000Z","value":1.6},
{"time":"2017-05-12T10:15:00.000Z","value":2},
{"time":"2017-05-12T10:30:00.000Z","value":1.9},
{"time":"2017-05-12T10:45:00.000Z","value":1.8},
{"time":"2017-05-12T11:00:00.000Z","value":1.9},
{"time":"2017-05-12T11:15:00.000Z","value":1.8},
{"time":"2017-05-12T11:30:00.000Z","value":1.7},
{"time":"2017-05-12T11:45:00.000Z","value":1.8},
{"time":"2017-05-12T12:00:00.000Z","value":1.6},
{"time":"2017-05-12T12:15:00.000Z","value":1.9},
{"time":"2017-05-12T12:30:00.000Z","value":1.5},
{"time":"2017-05-12T12:45:00.000Z","value":1.6},
{"time":"2017-05-12T13:00:00.000Z","value":1.6},
{"time":"2017-05-12T13:15:00.000Z","value":8},
{"time":"2017-05-12T13:30:00.000Z","value":7.5},
{"time":"2017-05-12T13:45:00.000Z","value":7.2},
{"time":"2017-05-12T14:00:00.000Z","value":7},
{"time":"2017-05-12T14:15:00.000Z","value":8},
{"time":"2017-05-12T14:45:00.000Z","value":7.5},
{"time":"2017-05-12T15:00:00.000Z","value":7},
{"time":"2017-05-12T15:15:00.000Z","value":8.3},
{"time":"2017-05-12T15:30:00.000Z","value":7.8},
{"time":"2017-05-12T15:45:00.000Z","value":7},
{"time":"2017-05-12T16:00:00.000Z","value":7.8},
{"time":"2017-05-12T16:15:00.000Z","value":7.8},
{"time":"2017-05-12T16:30:00.000Z","value":7.2},
{"time":"2017-05-12T16:45:00.000Z","value":7.5},
{"time":"2017-05-12T17:00:00.000Z","value":6},
{"time":"2017-05-12T17:15:00.000Z","value":5.8},
{"time":"2017-05-12T17:30:00.000Z","value":4.3},
{"time":"2017-05-12T17:45:00.000Z","value":3.9},
{"time":"2017-05-12T18:00:00.000Z","value":2.5},
{"time":"2017-05-12T18:15:00.000Z","value":2.2},
{"time":"2017-05-12T18:30:00.000Z","value":2.4},
{"time":"2017-05-12T18:45:00.000Z","value":1.9},
{"time":"2017-05-12T19:00:00.000Z","value":1.8},
{"time":"2017-05-12T19:15:00.000Z","value":1.9},
{"time":"2017-05-12T19:30:00.000Z","value":1.6},
{"time":"2017-05-12T19:45:00.000Z","value":2},
{"time":"2017-05-12T20:00:00.000Z","value":1.9},
{"time":"2017-05-12T20:15:00.000Z","value":1.8},
{"time":"2017-05-12T20:30:00.000Z","value":1.9},
{"time":"2017-05-12T20:45:00.000Z","value":1.8},
{"time":"2017-05-11T21:00:00.000Z","value":1.7},
{"time":"2017-05-11T21:15:00.000Z","value":1.8},
{"time":"2017-05-11T21:30:00.000Z","value":1.6},
{"time":"2017-05-11T21:45:00.000Z","value":1.9},
{"time":"2017-05-11T22:00:00.000Z","value":1.5},
{"time":"2017-05-11T22:15:00.000Z","value":1.6},
{"time":"2017-05-11T22:30:00.000Z","value":1.6},
{"time":"2017-05-11T22:45:00.000Z","value":1.8},
{"time":"2017-05-11T23:00:00.000Z","value":1.7},
{"time":"2017-05-11T23:15:00.000Z","value":1.8},
{"time":"2017-05-11T23:30:00.000Z","value":1.8},
{"time":"2017-05-11T23:45:00.000Z","value":1.8},
{"time":"2017-05-12T00:00:00.000Z","value":1.7}
];


/*---------------------------------------------------------------------------------------------------
    Above js functionality to be switched over to input from database
    Overall custom.js to be changed to recieve and use real data
----------------------------------------------------------------------------------------------------*/


// global variables

// var for time loop
var timeout;
var current=0;

// variable for getting the url of the server to switch off/on the switches
var url = "http://192.168.0.90:3000";
var url_off = url + "/demo_off";
var url_on = url+ "/demo_on";

// The interval for getting the data and displaying it.
// Measured for milliseconds
var timeInt = 250;


// function to combine our data into a large json file for displaying the data
// in a more user friendly environment
function combineCharts(current){
    var dt='[';
    var temp;
    for(var i=0; i < current; i++){
        if(dt1[i].value+dt2[i].value > 10){
            temp = 10 - dt2[i].value;
        }else{
            temp = dt1[i].value;
        }
        if(i<current-1){
            dt += '{"time":"' + dt1[i].time + '","A":' + temp + ',"B":' + dt2[i].value + '},';
        }else{
            dt += '{"time":"' + dt1[i].time + '","A":' + temp + ',"B":' + dt2[i].value + '}';
        }
    }
    if(dt1[current].time=="2017-05-12T10:15:00.000Z"){
		$("#bA").html("Building A: low")
        $.get(url_off);
    }else if(dt1[i].time=="2017-05-12T13:30:00.000Z"){
        $("#bA").html("Building A: high")
		$.get(url_on);
    }
    dt += "]";
    dt = JSON.parse(dt);
    createChart(dt);
}


// This function creates the charts from the json file that we give it
function createChart(dt) {
    if($("#mychart").length>0){
        $("#mychart").remove();
    }
    $(".sheet").prepend('<div id="mychart" class="graph sheet"></div>');
    new Morris.Line({
        // ID of the element in which to draw the chart.
        element: 'mychart',
        // Chart data records -- each entry in this array corresponds to a point on
        // the chart.
        data: dt,

        // The name of the data record attribute that contains x-values.
        xkey: 'time',
        // A list of names of data record attributes that contain y-values.
        ykeys: ['A','B'],
        // Labels for the ykeys -- will be displayed when you hover over the
        // chart.
        labels: ['Building A', 'Building B'],
        pointSize: 2,
        lineWidth: 3
    });
}



// Once the button "Get Data" is clicked simulation starts
$("#demo").click(function(){
	if($("#demo").html()=="Get Data"){
		$("#demo").removeClass("btn-warning");
		$("#demo").addClass("btn-info");
		$("#demo").html("Loading")
		$(".navbar").append('<a class="btn btn-raised btn-danger" onclick="pauseLoop();" id="stop">Stop</a>');
		timeout = setInterval(test,timeInt);
	}else if($("#demo").html()=="Resume"){
		$("#demo").addClass("btn-info");
		$("#demo").html("Loading");
		timeout = setInterval(test,timeInt);
	}
});


function pauseLoop(){
	clearInterval(timeout);
	$("#demo").html("Resume");
}


// Function to stop simulation - loop
function clearLoop(){
    clearInterval(timeout);
}

// function to create the charts for each loop and on the final value to stop the loop
function test() {
    current++;
    if(current == dt1.length){
        clearLoop();
    }else{
        combineCharts(current);
    }
}
