if (top.location != location) {
  top.location.href = document.location.href ;
}
$(function(){
  window.prettyPrint && prettyPrint();
  $('#dp1').datepicker({
    format: 'yyyy-mm-dd'
  });
  $('#dp2').datepicker();
  $('#dp3').datepicker();
  $('#dp3').datepicker();
  $('#dpYears').datepicker();
  $('#dpMonths').datepicker();


  var startDate = new Date('2012-1-20');
  var endDate = new Date(2012,1,25);
  $('#dp4').datepicker()
    .on('changeDate', function(ev){
      if (ev.date.valueOf() > endDate.valueOf()){
        $('#alert').show().find('strong').text('The start date can not be greater then the end date');
      } else {
        $('#alert').hide();
        startDate = new Date(ev.date);
        $('#startDate').text($('#dp4').data('date'));
      }
      $('#dp4').datepicker('hide');
    });
  $('#dp5').datepicker()
    .on('changeDate', function(ev){
      if (ev.date.valueOf() < startDate.valueOf()){
        $('#alert').show().find('strong').text('The end date can not be less then the start date');
      } else {
        $('#alert').hide();
        endDate = new Date(ev.date);
        $('#endDate').text($('#dp5').data('date'));
      }
      $('#dp5').datepicker('hide');
    });
    // disabling dates
    var nowTemp = new Date();
    var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);
    var checkin = $('#dpd1').datepicker({
      onRender: function(date) {
        return date.valueOf() < now.valueOf() ? 'disabled' : '';
      }
    }).on('changeDate', function(ev) {
      if (ev.date.valueOf() > checkout.date.valueOf()) {
        var newDate = new Date(ev.date)
        newDate.setDate(newDate.getDate() + 1);
        checkout.setValue(newDate);
      }
      checkin.hide();
      $('#dpd2')[0].focus();
    }).data('datepicker');
    var checkout = $('#dpd2').datepicker({
      onRender: function(date) {
        return date.valueOf() <= checkin.date.valueOf() ? 'disabled' : '';
      }
    }).on('changeDate', function(ev) {
      checkout.hide();
    }).data('datepicker');
});


function checkAge() {
  $("#theContent").hide().show('medium');
    var theDate = document.getElementById("dp1").value;
    theDate = new Date(theDate);
    var text = chkAge(theDate);

//     var mayar_1 = new Date(theDate);
//     var nov_1 = new Date('2006-11-01');
//     var nov_2 = new Date('2003-11-01');
//     var nov_3 = new Date('2000-11-01');
//     var oct_1 = new Date('2008-10-31');
//     var oct_2 = new Date('2006-10-31');
//     var oct_3 = new Date('2003-10-31');
//     mayar_1 = mayar_1.getTime();

//     switch(true) {
//       case(mayar_1 >= nov_1 && mayar_1 <= oct_1):
//         text = "You are in Mayār Saghīr Group 1";
//         break;
//       case(mayar_1 >= nov_2 && mayar_1 <= oct_2):
//         text = "You are in Mayār Saghīr Group 2";
//         break;
//       case(mayar_1 >= nov_3 && mayar_1 <= oct_3):
//         text = "You are in Mayār Kabīr";
//         break;
//       case(mayar_1 >= oct_1):
//         text = "You are not a Tifal yet!";
//         break;
//       case(mayar_1 <= nov_3):
//         text = "You are a Khadim.";
//         break;  
//       default:
//         text = "You are not a Tifal!";
//     }
    document.getElementById("demo").innerHTML = text;
}
