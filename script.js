(function() {

    /*jshint browser:true */
    'use strict';

    document.addEventListener('DOMContentLoaded', function() {
        var input = document.getElementById('input'),
        output = document.getElementById('output');

        input.addEventListener('keyup', regex, false);

        function regex() {
            var match = output.textContent.match(new RegExp(input.value, 'g'));

            // Reset the text
            output.innerHTML = output.textContent;

            // Replace!
            match.forEach(function(el) {
                output.innerHTML = output.innerHTML.replace(new RegExp(el, 'g'), '<span class="highlighted">' + el + '</span>');
            });
        }
    }, false);

}());
