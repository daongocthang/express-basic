$('form.navbar-search').submit(function (ev) {
    ev.preventDefault();
    const data = $(this).serializeArray();
    console.log(data);
});

$(function () {
    $('.dt-picker').datepicker({
        format: 'dd-mm-yyyy',
        autoclose: true,
        todayHighlight: true,
        disableTouchKeyboard: true,
        keyboardNavigation: false,
    });

    $('.dt-3').datepicker('update', moment().subtract(3, 'months').toDate());
    $('.dt-0').datepicker('update', moment().toDate());
});
