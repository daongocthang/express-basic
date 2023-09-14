$('form.search').submit(function (ev) {
    ev.preventDefault();
    console.log($('form.search'));
});

$(function () {
    $('.date-picker')
        .datepicker({
            format: 'dd-mm-yyyy',
            autoclose: true,
            todayHighlight: true,
            disableTouchKeyboard: true,
            keyboardNavigation: false,
        })
        .datepicker('update', new Date());
    $('#startDate').datepicker('update', moment().subtract(3, 'months').toDate());
});
