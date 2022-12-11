function limpiar_buscador() {
    $('#buscador-input').val('').keyup();
    $('body').focus();
    var numItems = $('.infocard').length
    $('#buscador-resultados').text(numItems + ' Registro(s)');
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
    $('.infocard').hide();
    
    if (search != '' && e.key != 'Shift' && search.length > 2)
            {
                search = search.toUpperCase();
                var itemsFound = $(".infocard-search:contains('" + search + "')", '.infocard');
                itemsFound.each(function () {
                    closestToggle = $(this).closest('.infocard');
                    $(closestToggle).show();
                    found = true;
                    fCount++;
            
                });

            }


    if (!found) {     
        $('.infocard').show();
        var numItems = $('.infocard').length
        if (search.length > 0 && search.length <= 2) {
            $('#buscador-resultados').text('Escribir por lo menos 3 letras para realizar b\u00FAsqueda');
        }

        if (search.length > 2) {
            $('#buscador-resultados').text(`0 Resultados, mostrando ${numItems} Registro(s)`);
        }
    }
    else {
        $('#buscador-input').css('border-color', 'green');
        $('#buscador-resultados').text(fCount + ' Registro(s)');
    }


};