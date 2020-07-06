var currentDay = $('#currentDay');
currentDay.text(moment().format('LLLL'));
 var currentTime = moment().format('hA');
 var nineSlot = moment().format('9A')
console.log(nineSlot)

var nineAM = $('#9AM').val();
var tenAM = $('#10AM').val();
var elevenAM = $('#11AM').val();
var twelvePM = $('#12PM').val();
var onePM = $('#1PM').val();
var twoPM = $('#2PM').val();
var threePM = $('#3PM').val();
var fourPM = $('#4PM').val();
var fivePM = $('#5PM').val();
var sixPM = $('#6PM').val();

var nineSlot =moment().format('9AM')
var tenSlot= moment().format('10AM')
var elevenSlot= moment().format('11AM')
var twelveSlot= moment().format('12PM')
var oneSlot= moment().format('1PM')
var twoSlot= moment().format('2PM')
var threeSlot= moment().format('3PM')
var fourSlot= moment().format('4M')
var fiveSlot= moment().format('5PM')
var sixSlot= moment().format('6PM')

$('#nineSlot').text(moment().format('9AM'));
$('#tenSlot').text(moment().format('10AM'));
$('#elevenSlot').text(moment().format('11AM'));
$('#twelveSlot').text(moment().format('12PM'));
$('#oneSlot').text(moment().format('1PM'));
$('#twoSlot').text(moment().format('2PM'));
$('#threeSlot').text(moment().format('3PM'));
$('#fourSlot').text(moment().format('4M'));
$('#fiveSlot').text(moment().format('5PM'));
$('#sixSlot').text(moment().format('6PM'));

$('#setNine').click(function(){
    $('#nine').html(nineAM);
    localStorage.setItem("NineAM", nineAM);
    // $('#9AM').empty('');
});
$('#setTen').click(function(){
    $('#ten').html(tenAM);
    localStorage.setItem("TenAM", tenAM);
    // $('#10AM').empty('');
})
$('#setEleven').click(function(){
    $('#eleven').html(elevenAM);
    localStorage.setItem("ElevenAM", elevenAM);
    // $('#11AM').empty('');
})
$('#setTwelve').click(function(){
    $('#twelve').html(twelvePM);
    localStorage.setItem("TwelvePM", PM);
    // $('#12PM').empty('');
})
$('#setOne').click(function(){
    $('#one').html(onePM);
    localStorage.setItem("OnePM", onePM);
    // $('#1PM').empty('');
})
$('#setTwo').click(function(){
    $('#two').html(twoPM);
    localStorage.setItem("TwoPM", twoPM);
    // $('#2PM').empty('');
})
$('#setThree').click(function(){
    $('#three').html(threePM);
    localStorage.setItem("ThreePM", threePM);
    // $('#3PM').empty('');
})
$('#setFour').click(function(){
    $('#four').html(fourPM);
    localStorage.setItem("FourPM", fourPM);
//     $('#4PM').empty('');
})
$('#setFive').click(function(){
    $('#five').html(fivePM);
    localStorage.setItem("FivePM", fivePM);
    // $('#5PM').empty('');
})
$('#setSix').click(function(){
    $('#six').html(sixPM);
    localStorage.setItem("SixPM", sixPM);
    // $('#6PM').empty('');
})

// if (timeSlot == moment().format('hA')){
//     $().attr('id', '.present');
// } else if (timeSlot < moment().format('hA')){
//     $().attr('id', '.future');
// } else if (timeSlot > moment().format('hA')){
//     $().attr('id', '.past');
// }