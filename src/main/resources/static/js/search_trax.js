function limpiar_buscador() {
    $('#buscador-input').val('').keyup();
    $('body').focus();
    var numItems = $('.swipe-row').length
    $('#buscador-resultados').text(numItems + ' C\u00F3digos');
}

$('#buscador-input').focus(hideElements);
$('#buscador-input').focusout(showElements);
$('#buscador-input').keyup(findSolution);

function hideElements() {
    $('.tab-menu').hide('slow');
    $('.tab-menu-push').hide('slow');
    $('.swipe-indication-box').slideUp('slow');
    $('.ui-footer').hide('slow');
}

function showElements() {
    $('.tab-menu').show('slow');
    $('.tab-menu-push').show('slow');
    $('.swipe-indication-box').slideDown('slow');
    $('.ui-footer').show('slow');
}

function findSolution(e) {
    if (e.shiftKey === true || e.ctrlKey === true) {
        return;
    }

    var search = ($('#buscador-input').val()).trim();
    var found = false;
    var fCount = 0;
    if (search == undefined)
        search = '';
    $('.swipe-row').hide();
    $('.ui-collapsible').hide();

    if (search != '' && e.key != 'Shift' && search.length > 2)
            {
                search = search.toUpperCase();
                var itemsFound = $(".swipe-description:contains('" + search + "')", '.swipe-box');
                itemsFound.each(function () {
                    closestToggle = $(this).closest('.swipe-row');
                    closestToggleSwipe = $(this).closest('.ui-collapsible');
                    $(closestToggle).show();
                    closestToggleSwipe.show();
                    found = true;
                    fCount++;
            
                });

            }


    if (!found) {
        $('.ui-icon-plus').trigger('click'); 
        $('.swipe-row').show();
        $('.ui-collapsible').show();
        var numItems = $('.swipe-row').length
        if (search.length > 0 && search.length <= 2) {
            $('#buscador-resultados').text('Escribir por lo menos 3 letras para realizar b\u00FAsqueda');
        }

        if (search.length > 2) {
            $('#buscador-resultados').text(`0 Resultados, mostrando ${numItems} C\u00F3digos`);
        }
    }
    else {
        $('#buscador-input').css('border-color', 'green');
        $('#buscador-resultados').text(fCount + ' C\u00F3digos');
    }


};