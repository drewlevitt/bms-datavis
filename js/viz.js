
var dataBikeMarket = [{
                name: 'Cycle Track (outbound)',
                data: [0, 7, 0],
                color: '#9BE35D'         
            },  {
                name: 'Shared Lane (outbound)',
                data: [15, 0, 15],
                color: 'url(#shared-lane)'
            },  {
                name: 'Regular Travel Lane (outbound)',
                data: [0, 12, 0] ,
                color: 'lightgray'            
            },  {
                name: 'Regular Travel Lane (inbound)',
                data: [0, 11, 0] ,
                color: 'lightgray'                
            }, {
                name: 'Shared Lane (inbound)',
                data: [13, 0, 13],
                color: 'url(#shared-lane)'
            }, {
                name: 'Cycle Track (inbound)',
                data: [0, 7, 0],
                color: '#9BE35D'            
            } ];
            
var dataCarMarket = [{
                name: 'Shared Lane (outbound)',
                data: [15, 0, 15],
                color: 'url(#shared-lane)'
            }, {
                name: 'Regular Travel Lane (outbound)',
                data: [0, 12, 0] ,
                color: 'lightgray'             
            }, {
                name: 'Regular Travel Lane (inbound)',
                data: [0, 11, 0] ,
                color: 'lightgray'                
            }, {
                name: 'Shared Lane (inbound)',
                data: [13, 0, 13],
                color: 'url(#shared-lane)'
            } ];
            
var dataTransitMarket = [ {
                name: 'Regular Travel Lane (outbound)',
                data: [0, 12, 0] ,
                color: 'lightgray'             
            }, {
                name: 'Shared Lane (outbound)',
                data: [15, 0, 15],
                color: 'url(#shared-lane)'
            }, {
                name: 'Transit-Only Lane (outbound)',
                data: [12, 12, 12] ,
                color: 'red'             
            }, {
                name: 'Transit-Only Lane (inbound)',
                data: [12, 11, 12] ,
                color: 'red'                
            }, {
                name: 'Shared Lane (inbound)',
                data: [13, 0, 13],
                color: 'url(#shared-lane)'
            },{
                name: 'Regular Travel Lane (inbound)',
                data: [0, 11, 0] ,
                color: 'lightgray'                
            }];
            
var dataPedMarket = [{
                name: 'Sidewalk (outbound)',
                data: [15, 15, 15] ,
                color: 'gray'             
            }, {
                name: 'Streetlife Zone (outbound)',
                data: [9.5, 5.5, 9.5] ,
                color: 'lightgray'             
            }, {
                name: 'Curbside Boarding (inbound)',
                data: [20, 0, 20] ,
                color: 'lightblue'                
            }, {
                name: 'Streetlife Zone (inbound)',
                data: [0, 7, 0] ,
                color: 'lightgray'                
            }, {
                name: 'Sidewalk (inbound)',
                data: [15, 15, 15] ,
                color: 'gray'                
            }];            

var dataBikeMission = [ {
                name: 'Cycle Track (outbound)',
                data: [0, 0, 6.5],
                color: '#9BE35D'        
            }, {
                name: 'Regular Travel Lane (outbound)',
                data: [11, 11, 11.5] ,
                color: 'lightgray'    
            }, {
                name: 'Regular Travel Lane (inbound)',
                data: [11, 11, 11.5] ,
                color: 'lightgray'                
            }, {
                name: 'Cycle Track (inbound)',
                data: [0, 0, 6.5],
                color: '#9BE35D'            
            } ];
            
var dataCarMission = [ {
                name: 'Regular Travel Lane (outbound)',
                data: [22, 22, 12] ,
                color: 'lightgray'             
            }, {
                name: 'Regular Travel Lane (inbound)',
                data: [22, 22, 12] ,
                color: 'lightgray'                
            }];
            
var dataTransitMission = [  {
                name: 'Regular Travel Lane (outbound)',
                data: [11, 11, 11] ,
                color: 'lightgray'             
            },  {
                name: 'Transit-Only Lane (outbound)',
                data: [11, 11, 0] ,
                color: 'red'             
            }, {
                name: 'Transit-Only Lane (inbound)',
                data: [11, 11, 0] ,
                color: 'red'                
            }, {
                name: 'Regular Travel Lane (inbound)',
                data: [11, 11, 11] ,
                color: 'lightgray'                
            }];  
            
var dataPedMission = [ {
                name: 'Sidewalk (outbound)',
                data: [15, 15, 15] ,
                color: 'gray'             
            }, {
                name: 'Sidewalk (inbound)',
                data: [15, 15, 15] ,
                color: 'gray'                
            }];               

var options = {
						
            // define custom fill pattern for shared lanes
            defs: {
              patterns: [{
                'id': 'shared-lane',
                'path': {
                  d: 'M 0 0 L 10 10 M 9 -1 L 11 1 M -1 9 L 1 11',
                  // stroke: Highcharts.getOptions().colors[0],
                  stroke: "#9BE35D",
                  strokeWidth: 3,
                  fill: "lightgray"
                }
              }]
            },
            
	        exporting: {
				enabled: false
			},
            chart: {
                type: 'bar'
            },
            title: {
                text: ''
            },
            xAxis: [{
                categories: ['Option 1','Option 2','Option 3'],
                reversed: true,
                labels: {
                    step: 1
                }
            }],
            yAxis: {
                  
            		max: 60,
                
            		gridLineColor:'lightgray',
                gridLineWidth:0,
                
                title: {
                    text: null
                },
                labels: {
                    formatter: function () {
                        return Math.abs(this.value);
                    }
                }
            },

            plotOptions: {
            		bar: {
                		borderWidth: 5,
                    dataLabels: {
                        enabled: true,
                        align: 'center',
                        color: 'black',
                        x: 0,
                        formatter: function() {
                            if (this.y == 0) {
                                return null;
                            } else {
                                return Highcharts.numberFormat(Math.abs(this.y),0) + ' ft';
                            }
                        }
                    },
                    
                },
                series: {
                    stacking: 'normal'
                }
            },

            tooltip: {
                formatter: function () {
                    return '<b>' + this.series.name + '</b><br/>' +
                        Highcharts.numberFormat(Math.abs(this.point.y),0) + ' ft';
                }
            },

            series: []
            };



$j('.bike').click(function() {
  if ($j(this).hasClass('active')) {
    $j('.bike').toggleClass('active');
	$j('#image').attr('src', 'https://berkeley.qualtrics.com/ControlPanel/Graphic.php?IM=IM_bfQQdnuwjEZfjgx&V=1456616745');
    $j('#image2').attr('src', 'https://berkeley.qualtrics.com/ControlPanel/Graphic.php?IM=IM_1MwmYImBqQmFH0x&V=1455909698');
    $j('#image3').attr('src', 'https://berkeley.qualtrics.com/ControlPanel/Graphic.php?IM=IM_9GH6wHn8AKQXsSV&V=1455909765');
  } else {
    $j('.bike').toggleClass('active');
	$j('#image').attr('src', 'https://berkeley.qualtrics.com/ControlPanel/Graphic.php?IM=IM_034MZQL00GKpUDX&V=1456616783');
    $j('#image2').attr('src', 'https://berkeley.qualtrics.com/ControlPanel/Graphic.php?IM=IM_0D4KGpGmR9LIfHf&V=1457675691');
    $j('#image3').attr('src', 'https://berkeley.qualtrics.com/ControlPanel/Graphic.php?IM=IM_25WVlDHJYS73Kvj&V=1457675872');
    
    $j('.car').removeClass('active');
    $j('.transit').removeClass('active');
    $j('.ped').removeClass('active');
    
    $j(function () {
    // Options
    options.title.text = 'How much space for biking on <b>Market</b> Street?';
    options.series = dataBikeMarket;
    options.chart.renderTo = 'container1';
    $j(document).ready(function () {
        var chartMarket = new Highcharts.chart(options);
    });
    });
    
    $j(function () {
    // Options
    options.title.text = 'How much space for biking on <b>Mission</b> Street?';
    options.series = dataBikeMission;
    options.chart.renderTo = 'container2';
    $j(document).ready(function () {
        var chartMission = new Highcharts.chart(options);
    });
    });
  }
  
});

$j('.car').click(function() {
  if ($j(this).hasClass('active')) {
    $j('.car').toggleClass('active');
	$j('#image').attr('src', 'https://berkeley.qualtrics.com/ControlPanel/Graphic.php?IM=IM_bfQQdnuwjEZfjgx&V=1456616745');
    $j('#image2').attr('src', 'https://berkeley.qualtrics.com/ControlPanel/Graphic.php?IM=IM_1MwmYImBqQmFH0x&V=1455909698');
    $j('#image3').attr('src', 'https://berkeley.qualtrics.com/ControlPanel/Graphic.php?IM=IM_9GH6wHn8AKQXsSV&V=1455909765');
  } else {
    $j('.car').toggleClass('active');
	 $j('#image').attr('src', 'https://berkeley.qualtrics.com/ControlPanel/Graphic.php?IM=IM_034MZQL00GKpUDX&V=1456616783');
    $j('#image2').attr('src', 'https://berkeley.qualtrics.com/ControlPanel/Graphic.php?IM=IM_3qjX6g64qlg5Apf&V=1457675725');
    $j('#image3').attr('src', 'https://berkeley.qualtrics.com/ControlPanel/Graphic.php?IM=IM_5711oAl6LcKGpKd&V=1457675889');
    
    $j('.bike').removeClass('active');
    $j('.transit').removeClass('active');
    $j('.ped').removeClass('active');
    
        $j(function () {
    // Options
    options.title.text = 'How much space for driving on <b>Market</b> Street?';
    options.series = dataCarMarket;
    options.chart.renderTo = 'container1';
    $j(document).ready(function () {
        var chartMarket = new Highcharts.chart(options);
    });
    });
    
    $j(function () {
    // Options
    options.title.text = 'How much space for driving on <b>Mission</b> Street?';
    options.series = dataCarMission;
    options.chart.renderTo = 'container2';
    $j(document).ready(function () {
        var chartMission = new Highcharts.chart(options);
    });
    });
    
  }
});

$j('.transit').click(function() {
  if ($j(this).hasClass('active')) {
    $j('.transit').toggleClass('active');
	$j('#image').attr('src', 'https://berkeley.qualtrics.com/ControlPanel/Graphic.php?IM=IM_bfQQdnuwjEZfjgx&V=1456616745');
    $j('#image2').attr('src', 'https://berkeley.qualtrics.com/ControlPanel/Graphic.php?IM=IM_1MwmYImBqQmFH0x&V=1455909698');
    $j('#image3').attr('src', 'https://berkeley.qualtrics.com/ControlPanel/Graphic.php?IM=IM_9GH6wHn8AKQXsSV&V=1455909765');
  } else {
    $j('.transit').toggleClass('active');
	$j('#image').attr('src', 'https://berkeley.qualtrics.com/ControlPanel/Graphic.php?IM=IM_1TD0x2oJHky6ke1&V=14575061903');
    $j('#image2').attr('src', 'https://berkeley.qualtrics.com/ControlPanel/Graphic.php?IM=IM_1LIkW57ywtHT4wZ&V=1457675770');
    $j('#image3').attr('src', 'https://berkeley.qualtrics.com/ControlPanel/Graphic.php?IM=IM_9GH6wHn8AKQXsSV&V=1455909765');
    
    $j('.bike').removeClass('active');
    $j('.car').removeClass('active');
    $j('.ped').removeClass('active');
    
    $j(function () {
    // Options
    options.title.text = 'How much space for transit on <b>Market</b> Street?';
    options.series = dataTransitMarket;
    options.chart.renderTo = 'container1';
    $j(document).ready(function () {
        var chartMarket = new Highcharts.chart(options);
    });
    });    
    
    $j(function () {
    // Options
    options.title.text = 'How much space for transit on <b>Mission</b> Street?';
    options.series = dataTransitMission;
    options.chart.renderTo = 'container2';
    $j(document).ready(function () {
        var chartMission = new Highcharts.chart(options);
    });
    });
    
  }
});

$j('.ped').click(function() {
  if ($j(this).hasClass('active')) {
    $j('.ped').toggleClass('active');
	$j('#image').attr('src', 'https://berkeley.qualtrics.com/ControlPanel/Graphic.php?IM=IM_bfQQdnuwjEZfjgx&V=1456616745');
    $j('#image2').attr('src', 'https://berkeley.qualtrics.com/ControlPanel/Graphic.php?IM=IM_1MwmYImBqQmFH0x&V=1455909698');
    $j('#image3').attr('src', 'https://berkeley.qualtrics.com/ControlPanel/Graphic.php?IM=IM_9GH6wHn8AKQXsSV&V=1455909765');
  } else {
    $j('.ped').toggleClass('active');
	$j('#image').attr('src', 'https://berkeley.qualtrics.com/ControlPanel/Graphic.php?IM=IM_6Ga99sBL9O5RHPT&V=1457506230');
    $j('#image2').attr('src', 'https://berkeley.qualtrics.com/ControlPanel/Graphic.php?IM=IM_0wBpL3Cuyo7sV1P&V=1457675756');
    $j('#image3').attr('src', 'https://berkeley.qualtrics.com/ControlPanel/Graphic.php?IM=IM_4IY8JSzD3HDttLD&V=1457675901');
    
    $j('.bike').removeClass('active');
    $j('.car').removeClass('active');
    $j('.transit').removeClass('active');
    
    $j(function () {
    // Options
    options.title.text = 'How much space for pedestrians on <b>Market</b> Street?';
    options.series = dataPedMarket;
    options.chart.renderTo = 'container1';
    $j(document).ready(function () {
        var chartMarket = new Highcharts.chart(options);
    });
    });    
    
    $j(function () {
    // Options
    options.title.text = 'How much space for pedestrians on <b>Mission</b> Street?';
    options.series = dataPedMission;
    options.chart.renderTo = 'container2';
    $j(document).ready(function () {
        var chartMission = new Highcharts.chart(options);
    });
    });
    
  }
});


	/*Place Your Javascript Below This Line*/
var option1_data = {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"lane_type":"bike_lane"},"geometry":{"type":"LineString","coordinates":[[-122.42629831815731,37.76961704678572],[-122.42342833544645,37.771927008225774]]}},{"type":"Feature","properties":{"lane_type":"cycletrack"},"geometry":{"type":"LineString","coordinates":[[-122.42342833544642,37.771927008225774],[-122.41476526589443,37.77871303016407]]}},{"type":"Feature","properties":{"lane_type":"shared_lane"},"geometry":{"type":"LineString","coordinates":[[-122.41476526589443,37.7787130301641],[-122.394791136945,37.79449873746428],[-122.39319630597272,37.79325067754664],[-122.39245118002671,37.79387696397371]]}},{"type":"Feature","properties":{"lane_type":"bike_lane"},"geometry":{"type":"LineString","coordinates":[[-122.42261397839705,37.77256494314589],[-122.42204230611604,37.76653103613199]]}},{"type":"Feature","properties":{"lane_type":"bike_lane"},"geometry":{"type":"LineString","coordinates":[[-122.41557741752483,37.7731143698394],[-122.41872472221598,37.77561155582273]]}},{"type":"Feature","properties":{"lane_type":"shared_lane"},"geometry":{"type":"LineString","coordinates":[[-122.41437713490035,37.77403493771516],[-122.4175368808605,37.77654201528038]]}},{"type":"Feature","properties":{"lane_type":"bike_lane"},"geometry":{"type":"LineString","coordinates":[[-122.41159628208723,37.77622358878605],[-122.41476526589443,37.7787130301641]]}},{"type":"Feature","properties":{"lane_type":"bike_lane"},"geometry":{"type":"LineString","coordinates":[[-122.40940962859304,37.7779613128038],[-122.41252734591521,37.78048184321699]]}},{"type":"Feature","properties":{"lane_type":"shared_lane"},"geometry":{"type":"LineString","coordinates":[[-122.40492936572744,37.781511778663926],[-122.4080827619477,37.78399463962596]]}},{"type":"Feature","properties":{"lane_type":"cycletrack"},"geometry":{"type":"LineString","coordinates":[[-122.39826244936766,37.78679019835711],[-122.40141588504184,37.78926352195494]]}},{"type":"Feature","properties":{"lane_type":"bike_lane"},"geometry":{"type":"LineString","coordinates":[[-122.39514884493576,37.78921889614882],[-122.39833200914332,37.79170060490612]]}},{"type":"Feature","properties":{"lane_type":"bike_lane"},"geometry":{"type":"LineString","coordinates":[[-122.3942931979164,37.78992889480973],[-122.39736941201612,37.79246129643903]]}},{"type":"Feature","properties":{"lane_type":"bike_lane"},"geometry":{"type":"LineString","coordinates":[[-122.39342329011326,37.790627616990086],[-122.39654942145272,37.79310928708305]]}},{"type":"Feature","properties":{"lane_type":"bike_lane"},"geometry":{"type":"LineString","coordinates":[[-122.3925676430939,37.79130379345452],[-122.39571517069957,37.79376854088978]]}},{"type":"Feature","properties":{"lane_type":"bike_lane"},"geometry":{"type":"LineString","coordinates":[[-122.4175368808605,37.77654201528038],[-122.41791338142403,37.77679476908756],[-122.41899601258338,37.78218529594325]]}},{"type":"Feature","properties":{"lane_type":"bike_lane"},"geometry":{"type":"LineString","coordinates":[[-122.41476526589443,37.7787130301641],[-122.41495862627691,37.77885395166106],[-122.4248152045813,37.777619717059885]]}},{"type":"Feature","properties":{"lane_type":"shared_lane"},"geometry":{"type":"LineString","coordinates":[[-122.41751289108304,37.7833123820292],[-122.41634717565915,37.77747392298677]]}},{"type":"Feature","properties":{"lane_type":"shared_lane"},"geometry":{"type":"LineString","coordinates":[[-122.41166871927187,37.7811604755567],[-122.4219060047151,37.7798787076544]]}},{"type":"Feature","properties":{"lane_type":"shared_lane"},"geometry":{"type":"LineString","coordinates":[[-122.40176204981546,37.788989954609825],[-122.40202332304088,37.78912035981642],[-122.41170710818315,37.78785887278614]]}},{"type":"Feature","properties":{"lane_type":"shared_lane"},"geometry":{"type":"LineString","coordinates":[[-122.40009342910456,37.79030862405445],[-122.41022660115979,37.789008412165686]]}},{"type":"Feature","properties":{"lane_type":"shared_lane"},"geometry":{"type":"LineString","coordinates":[[-122.40050176045705,37.789985932117666],[-122.40165230498587,37.795719993925395]]}},{"type":"Feature","properties":{"lane_type":"shared_lane"},"geometry":{"type":"LineString","coordinates":[[-122.40068890982323,37.79677275047645],[-122.39951097863562,37.79076891463204]]}}]}

var option2_data = {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"lane_type":"bike_lane"},"geometry":{"type":"LineString","coordinates":[[-122.42629831815731,37.76961704678572],[-122.42342833544645,37.771927008225774]]}},{"type":"Feature","properties":{"lane_type":"cycletrack"},"geometry":{"type":"LineString","coordinates":[[-122.42342833544642,37.771927008225774],[-122.41476526589443,37.77871303016407]]}},{"type":"Feature","properties":{"lane_type":"shared_lane"},"geometry":{"type":"LineString","coordinates":[[-122.394791136945,37.79449873746428],[-122.39319630597272,37.79325067754664],[-122.39245118002671,37.79387696397371]]}},{"type":"Feature","properties":{"lane_type":"bike_lane"},"geometry":{"type":"LineString","coordinates":[[-122.42261397839705,37.77256494314589],[-122.42204230611604,37.76653103613199]]}},{"type":"Feature","properties":{"lane_type":"bike_lane"},"geometry":{"type":"LineString","coordinates":[[-122.41557741752483,37.7731143698394],[-122.41872472221598,37.77561155582273]]}},{"type":"Feature","properties":{"lane_type":"shared_lane"},"geometry":{"type":"LineString","coordinates":[[-122.41437713490035,37.77403493771516],[-122.4175368808605,37.77654201528038]]}},{"type":"Feature","properties":{"lane_type":"bike_lane"},"geometry":{"type":"LineString","coordinates":[[-122.41159628208723,37.77622358878605],[-122.41476526589443,37.7787130301641]]}},{"type":"Feature","properties":{"lane_type":"bike_lane"},"geometry":{"type":"LineString","coordinates":[[-122.40940962859304,37.7779613128038],[-122.41252734591521,37.78048184321699]]}},{"type":"Feature","properties":{"lane_type":"shared_lane"},"geometry":{"type":"LineString","coordinates":[[-122.40492936572744,37.781511778663926],[-122.4080827619477,37.78399463962596]]}},{"type":"Feature","properties":{"lane_type":"cycletrack"},"geometry":{"type":"LineString","coordinates":[[-122.39826244936766,37.78679019835711],[-122.40141588504184,37.78926352195494]]}},{"type":"Feature","properties":{"lane_type":"bike_lane"},"geometry":{"type":"LineString","coordinates":[[-122.39514884493576,37.78921889614882],[-122.39833200914332,37.79170060490612]]}},{"type":"Feature","properties":{"lane_type":"bike_lane"},"geometry":{"type":"LineString","coordinates":[[-122.3942931979164,37.78992889480973],[-122.39736941201612,37.79246129643903]]}},{"type":"Feature","properties":{"lane_type":"bike_lane"},"geometry":{"type":"LineString","coordinates":[[-122.39342329011326,37.790627616990086],[-122.39654942145272,37.79310928708305]]}},{"type":"Feature","properties":{"lane_type":"bike_lane"},"geometry":{"type":"LineString","coordinates":[[-122.3925676430939,37.79130379345452],[-122.39571517069957,37.79376854088978]]}},{"type":"Feature","properties":{"lane_type":"bike_lane"},"geometry":{"type":"LineString","coordinates":[[-122.4175368808605,37.77654201528038],[-122.41791338142403,37.77679476908756],[-122.41899601258338,37.78218529594325]]}},{"type":"Feature","properties":{"lane_type":"bike_lane"},"geometry":{"type":"LineString","coordinates":[[-122.41476526589443,37.7787130301641],[-122.41495862627691,37.77885395166106],[-122.4248152045813,37.777619717059885]]}},{"type":"Feature","properties":{"lane_type":"shared_lane"},"geometry":{"type":"LineString","coordinates":[[-122.41751289108304,37.7833123820292],[-122.41634717565915,37.77747392298677]]}},{"type":"Feature","properties":{"lane_type":"shared_lane"},"geometry":{"type":"LineString","coordinates":[[-122.41166871927187,37.7811604755567],[-122.4219060047151,37.7798787076544]]}},{"type":"Feature","properties":{"lane_type":"shared_lane"},"geometry":{"type":"LineString","coordinates":[[-122.40176204981546,37.788989954609825],[-122.40202332304088,37.78912035981642],[-122.41170710818315,37.78785887278614]]}},{"type":"Feature","properties":{"lane_type":"shared_lane"},"geometry":{"type":"LineString","coordinates":[[-122.40009342910456,37.79030862405445],[-122.41022660115979,37.789008412165686]]}},{"type":"Feature","properties":{"lane_type":"shared_lane"},"geometry":{"type":"LineString","coordinates":[[-122.40050176045705,37.789985932117666],[-122.40165230498587,37.795719993925395]]}},{"type":"Feature","properties":{"lane_type":"shared_lane"},"geometry":{"type":"LineString","coordinates":[[-122.40068890982323,37.79677275047645],[-122.39951097863562,37.79076891463204]]}},{"type":"Feature","properties":{"lane_type":"cycletrack"},"geometry":{"type":"LineString","coordinates":[[-122.394791136945,37.79449873746428],[-122.40470657409935,37.78667042599035]]}},{"type":"Feature","properties":{"lane_type":"shared_lane"},"geometry":{"type":"LineString","coordinates":[[-122.40470657409935,37.78667042599035],[-122.4080827619477,37.78399463962596]]}},{"type":"Feature","properties":{"lane_type":"cycletrack"},"geometry":{"type":"LineString","coordinates":[[-122.4080827619477,37.78399463962596],[-122.41476526589443,37.7787130301641]]}}]}

var option3_data = {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"lane_type":"bike_lane"},"geometry":{"type":"LineString","coordinates":[[-122.42629831815728,37.76961704678572],[-122.42405681228479,37.77142117258212]]}},{"type":"Feature","properties":{"lane_type":"cycletrack"},"geometry":{"type":"LineString","coordinates":[[-122.42405681228479,37.77142117258212],[-122.41476526589443,37.7787130301641]]}},{"type":"Feature","properties":{"lane_type":"shared_lane"},"geometry":{"type":"LineString","coordinates":[[-122.41476526589443,37.7787130301641],[-122.394791136945,37.79449873746428],[-122.39321916972537,37.79326857008277]]}},{"type":"Feature","properties":{"lane_type":"bike_lane"},"geometry":{"type":"LineString","coordinates":[[-122.42261397839705,37.77256494314589],[-122.42204230611604,37.76653103613199]]}},{"type":"Feature","properties":{"lane_type":"bike_lane"},"geometry":{"type":"LineString","coordinates":[[-122.41557741752483,37.7731143698394],[-122.41872472221598,37.77561155582273]]}},{"type":"Feature","properties":{"lane_type":"shared_lane"},"geometry":{"type":"LineString","coordinates":[[-122.41437713490035,37.77403493771516],[-122.4175368808605,37.77654201528038]]}},{"type":"Feature","properties":{"lane_type":"bike_lane"},"geometry":{"type":"LineString","coordinates":[[-122.41159628208723,37.77622358878605],[-122.41476526589443,37.7787130301641]]}},{"type":"Feature","properties":{"lane_type":"bike_lane"},"geometry":{"type":"LineString","coordinates":[[-122.40940962859304,37.7779613128038],[-122.41252734591521,37.78048184321699]]}},{"type":"Feature","properties":{"lane_type":"shared_lane"},"geometry":{"type":"LineString","coordinates":[[-122.40492936572744,37.781511778663926],[-122.4080827619477,37.78399463962596]]}},{"type":"Feature","properties":{"lane_type":"cycletrack"},"geometry":{"type":"LineString","coordinates":[[-122.39826244936766,37.78679019835711],[-122.40141588504184,37.78926352195494]]}},{"type":"Feature","properties":{"lane_type":"bike_lane"},"geometry":{"type":"LineString","coordinates":[[-122.39514884493576,37.78921889614882],[-122.39833200914332,37.79170060490612]]}},{"type":"Feature","properties":{"lane_type":"bike_lane"},"geometry":{"type":"LineString","coordinates":[[-122.3942931979164,37.78992889480973],[-122.39736941201612,37.79246129643903]]}},{"type":"Feature","properties":{"lane_type":"bike_lane"},"geometry":{"type":"LineString","coordinates":[[-122.39342329011326,37.790627616990086],[-122.39654942145272,37.79310928708305]]}},{"type":"Feature","properties":{"lane_type":"bike_lane"},"geometry":{"type":"LineString","coordinates":[[-122.3925676430939,37.79130379345452],[-122.39571517069957,37.79376854088978]]}},{"type":"Feature","properties":{"lane_type":"bike_lane"},"geometry":{"type":"LineString","coordinates":[[-122.4175368808605,37.77654201528038],[-122.41791338142403,37.77679476908756],[-122.41899601258338,37.78218529594325]]}},{"type":"Feature","properties":{"lane_type":"bike_lane"},"geometry":{"type":"LineString","coordinates":[[-122.41476526589443,37.7787130301641],[-122.41495862627691,37.77885395166106],[-122.4248152045813,37.777619717059885]]}},{"type":"Feature","properties":{"lane_type":"shared_lane"},"geometry":{"type":"LineString","coordinates":[[-122.41751289108304,37.7833123820292],[-122.41634717565915,37.77747392298677]]}},{"type":"Feature","properties":{"lane_type":"shared_lane"},"geometry":{"type":"LineString","coordinates":[[-122.41166871927187,37.7811604755567],[-122.4219060047151,37.7798787076544]]}},{"type":"Feature","properties":{"lane_type":"shared_lane"},"geometry":{"type":"LineString","coordinates":[[-122.40176204981546,37.788989954609825],[-122.40202332304088,37.78912035981642],[-122.41170710818315,37.78785887278614]]}},{"type":"Feature","properties":{"lane_type":"shared_lane"},"geometry":{"type":"LineString","coordinates":[[-122.40009342910456,37.79030862405445],[-122.41022660115979,37.789008412165686]]}},{"type":"Feature","properties":{"lane_type":"shared_lane"},"geometry":{"type":"LineString","coordinates":[[-122.40050176045705,37.789985932117666],[-122.40165230498587,37.795719993925395]]}},{"type":"Feature","properties":{"lane_type":"shared_lane"},"geometry":{"type":"LineString","coordinates":[[-122.40068890982323,37.79677275047645],[-122.39951097863562,37.79076891463204]]}},{"type":"Feature","properties":{"lane_type":"cycletrack"},"geometry":{"type":"LineString","coordinates":[[-122.39245118002671,37.79387696397371],[-122.42034916827296,37.77177323761526]]}},{"type":"Feature","properties":{"lane_type":"bike_lane"},"geometry":{"type":"LineString","coordinates":[[-122.42034916827296,37.77177323761526],[-122.42304560516968,37.77157147071756],[-122.42331266222835,37.772017622359066]]}},{"type":"Feature","properties":{"lane_type":"shared_lane"},"geometry":{"type":"LineString","coordinates":[[-122.42629831815728,37.76961704678572],[-122.42914308051525,37.76944922331818]]}},{"type":"Feature","properties":{"lane_type":"bike_lane"},"geometry":{"type":"LineString","coordinates":[[-122.41634717565915,37.77747392298677],[-122.41316972953538,37.77500809269266]]}},{"type":"Feature","properties":{"lane_type":"bike_lane"},"geometry":{"type":"LineString","coordinates":[[-122.40270469112842,37.78328506486589],[-122.40582363604065,37.78578008568658]]}},{"type":"Feature","properties":{"lane_type":"shared_lane"},"geometry":{"type":"LineString","coordinates":[[-122.40048000887793,37.78501323078832],[-122.4033892087439,37.78735746084235],[-122.40346586717078,37.78764344585039]]}}]}

var map = L.map('bikemap');

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
        '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="http://mapbox.com">Mapbox</a>',
    id: 'mapbox.streets'
}).addTo(map);
         
// specify how to load the individual features 
var overlayOptions = {
    onEachFeature: function (feature, layer) {
        switch (feature.properties.lane_type) {
            case 'bike_lane': layer.bindPopup('Bike lane &ndash; example image: <br><img src="https://berkeley.qualtrics.com/CP/Graphic.php?IM=IM_9QOl3EFmP53X9Z3" alt="Bike lane photo" height="225" width="300">'); return;
            case 'shared_lane': layer.bindPopup('Shared lane &ndash; example image: <br><img src="https://berkeley.qualtrics.com/CP/Graphic.php?IM=IM_0Ap4OEAFFGVzzEN" alt="Shared lane photo" height="200" width="300">'); return;
            case 'cycletrack': layer.bindPopup('Cycletrack &ndash; example image: <br><img src="https://berkeley.qualtrics.com/CP/Graphic.php?IM=IM_a5G1wpdUecbcYlf" alt="Shared lane photo" height="200" width="300">'); return;
        }
    },
    style: function(feature) {
        switch (feature.properties.lane_type) {
            case 'bike_lane': return {color: "#118900", weight: 4, opacity: 1};
            case 'shared_lane': return {color: "#118900", dashArray: "4, 6", weight: 4, opacity: 1};
            case 'cycletrack': return {color: "#342BD6", weight: 4, opacity: 1};
        }
    }
}

// create the layer and add to map
option1 = L.geoJson(option1_data, overlayOptions).addTo(map);
option2 = L.geoJson(option2_data, overlayOptions); 
option3 = L.geoJson(option3_data, overlayOptions); 

// fit the map window to the data points
//map.fitBounds(option3.getBounds());
map.setView([37.782,-122.407], 14);

    
var legend = L.control({position: 'bottomright'});

legend.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'info legend');
    
    div.innerHTML = '<i style="background:#342BD6"></i> Cycletracks<br>' +
                    '<i style="background:#118900"></i> Bike lanes<br>' +
                    '<i class="horizontal_dotted_line"></i> Shared lanes<br>';
                    
    return div;
};

legend.addTo(map);

$j( ".option1" ).click(function() {
  map.addLayer(option1);  
	map.removeLayer(option2);
	map.removeLayer(option3);
  $j('.option1').addClass('active');
  $j('.option2').removeClass('active');
  $j('.option3').removeClass('active');
});

$j( ".option2" ).click(function() {
  map.removeLayer(option1);  
	map.addLayer(option2);
	map.removeLayer(option3);
  $j('.option1').removeClass('active');
  $j('.option2').addClass('active');
  $j('.option3').removeClass('active');
});

$j( ".option3" ).click(function() {
  map.removeLayer(option1);  
	map.removeLayer(option2);
	map.addLayer(option3);
  $j('.option1').removeClass('active');
  $j('.option2').removeClass('active');
  $j('.option3').addClass('active');
});