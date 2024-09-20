$(document).ready(function () {

    $('form').on('submit', function(e) {
        e.preventDefault();
        const name = $('#name').val();
        const novoName = $('<li></li>');
        $(`<span>${name}</span>`).appendTo(novoName);
        $(novoName).appendTo('ul');
        $('#name').val('')

        $(novoName).on('click', function() {
            $(this).toggleClass('riscado')
        })
    })

})