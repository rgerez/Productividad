function removeLoading() {
    $('.loading-container').css('display', 'none');
}

function addLoading() {
    $('.loading-container').css('display', 'block');
}

$(document).ready(function () {
    setTimeout(removeLoading, 500);
});

$('form').submit(function( event ) {
    addLoading();
});




const buttonDescargar = $('button[name="descargar"]');
if (buttonDescargar.length) {

    function setFormToken() {
        var downloadToken = new Date().getTime();
        document.getElementById("downloadToken").value = downloadToken;
        return downloadToken;
    }

    $(document).ready(function () {
        $($("<input/>").attr("type", "hidden").attr("id", "downloadToken").attr("name", "downloadToken")).insertBefore(buttonDescargar);
    });

    function getCookie(name) {
        var parts = document.cookie.split(name + "=");
        if (parts.length == 2) return parts.pop().split(";").shift();
    }

    $('button[name="descargar"]').click(function (event) {
        var downloadToken = setFormToken();
        var downloadTimer;
        addLoading();
        var attempts = 30;

        downloadTimer = window.setInterval(function () {
            var token = getCookie('downloadToken');
            console.log(token);
            if ((token == downloadToken) || (attempts == 0)) {
                window.clearInterval(downloadTimer)

                removeLoading();
                document.cookie = encodeURIComponent("downloadToken") + "=deleted; expires=" + new Date(0).toUTCString();
            }

            attempts--;
        }, 1000);

    });


}



/*
addLoading();
        function getCookie( name ) {
            var parts = document.cookie.split(name + \"=\");
            if (parts.length == 2) return parts.pop().split(\";\").shift();
          }

        function setFormToken() {
            var downloadToken = new Date().getTime();
            document.getElementById(\"downloadToken\" ).value = downloadToken;
            return downloadToken;
        }

        $('form').submit(function( event ) {
            var downloadToken = setFormToken();
            addLoading();
            var downloadTimer;
            var attempts = 30;
            downloadTimer = window.setInterval( function() {
                var token = getCookie('downloadToken');
                if( (token == downloadToken) || (attempts == 0) ) {
                    window.clearInterval( downloadTimer )
                    console.log(token);
                    removeLoading();
                    document.cookie = encodeURIComponent(\"downloadToken\") + \"=deleted; expires=\" + new Date( 0 ).toUTCString();
                }
        
                attempts--;
            }, 1000 );
        });
        $('form').bind('ajax:complete', function() {
            removeLoading();
        });
        $( document ).ready(function() {
            removeLoading();
        });

        */