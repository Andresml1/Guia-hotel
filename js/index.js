$(function() {
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();
    $('.carousel').carousel({
        interval: 2000
    })

    $('#contacto').on('show.bs.modal', function(e){
        console.log('el modal')


        $('#contactoBtn').removeClass('btn-info');
        $('#contactoBtn').addClass('btn-primary');
        $('#contactoBtn').prop('disabled', true);
    });
    $('#contacto').on('show.bs.modal', function(e){
        console.log('el modal se  mostro')
    });
    $('#contacto').on('hidden.bs.modal', function(e){
        console.log('el model de contacto se oculta')
    });  $('#contacto').on('hidden.bs.modal', function(e){
        console.log('el modal se oculto')
        $('#contactoBtn').removeClass('btn-primary')
        $('#contactoBtn').addClass('btn-info');
        $('#contactoBtn').prop('disabled', false);
    });  
});