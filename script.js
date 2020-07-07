//displays current date and time in header
$('#currentDay').text('It is currently ' + moment().format('LLLL'));

//takes info given by user and stores in local storage
$('.saveBtn').on('click', function(){
    var value = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');
    localStorage.setItem(time, value)
})
//compares time blocks to current hour and changes background color
function hourUpdater(){
    var currentHour = moment().hour();
    $('.time-block').each(function(){
        var blockHour = parseInt($(this).attr('id').split('-')[1]);
        if(blockHour < currentHour){
            $('.description').addClass('past');
        } else if (blockHour === currentHour){
            $('.description').addClass('present');
        }else{
            $('.description').addClass('future');
        }
    })
}
hourUpdater()
var interval = setInterval(hourUpdater, 15000);

$('.nine').val(localStorage.getItem('hour-9'))

$('.ten').val(localStorage.getItem('hour-10'))

$('.eleven').val(localStorage.getItem('hour-11'))

$('.twelve').val(localStorage.getItem('hour-12'))

$('.one').val(localStorage.getItem('hour-13'))

$('.two').val(localStorage.getItem('hour-14'))

$('.three').val(localStorage.getItem('hour-15'))

$('.four').val(localStorage.getItem('hour-16'))

$('.five').val(localStorage.getItem('hour-17'))

$('.six').val(localStorage.getItem('hour-18'))