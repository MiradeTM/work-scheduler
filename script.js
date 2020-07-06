var currentDay = $('#currentDay');
currentDay.text(moment().format('LLLL'));


var nineAM = $('#9AM').val('');
var tenAM = $('#10AM').val('');
var elevenAM = $('#11AM').val('');
var twelvePM = $('#12PM').val('');
var onePM = $('#1PM').val('');
var twoPM = $('#2PM').val('');
var threePM = $('#3PM').val('');
var fourPM = $('#4PM').val('');
var fivePM = $('#5PM').val('');
var sixPM = $('#6PM').val('');


$('#setNine').click(function(){
    $('#nine').text(nineAM);
    localStorage.setItem("NineAM", nineAM);
    $('#9AM').reset('');
});
$('#setTen').click(function(){
    $('#ten').text(tenAM);
    localStorage.setItem("TenAM", tenAM);
    $('#10AM').reset('');
})
$('#setEleven').click(function(){
    $('#eleven').text(elevenAM);
    localStorage.setItem("ElevenAM", elevenAM);
    $('#11AM').reset('');
})
$('#setTwelve').click(function(){
    $('#twelve').text(twelvePM);
    localStorage.setItem("TwelvePM", PM);
    $('#12PM').reset('');
})
$('#setOne').click(function(){
    $('#one').text(onePM);
    localStorage.setItem("OnePM", onePM);
    $('#1PM').reset('');
})
$('#setTwo').click(function(){
    $('#two').text(twoPM);
    localStorage.setItem("TwoPM", twoPM);
    $('#2PM').reset('');
})
$('#setThree').click(function(){
    $('#three').text(threePM);
    localStorage.setItem("ThreePM", threePM);
    $('#3PM').reset('');
})
$('#setFour').click(function(){
    $('#four').text(fourPM);
    localStorage.setItem("FourPM", fourPM);
    $('#4PM').reset('');
})
$('#setFive').click(function(){
    $('#five').text(fivePM);
    localStorage.setItem("FivePM", fivePM);
    $('#5PM').reset('');
})
$('#setSix').click(function(){
    $('#six').text(sixPM);
    localStorage.setItem("SixPM", sixPM);
    $('#6PM').reset('');
})

