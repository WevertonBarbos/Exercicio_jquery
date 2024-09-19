$(document).ready(function () {

    $('form').on('submit', function(e) {
        e.preventDefault();
        const name = $('#name').val();
        const novoName = $('<li></li>');
        $(`<li>${name}</li>`).appendTo(novoName);
        $(novoName).appendTo('ul');
        $('#name').val('')
    })

})