//by chatgpt Jquery
// $(document).ready(function(){
//     $('.card-header').click(function(){
//         $(this).find('i').toggleClass('fa-caret-up fa-caret-down');
//         $(this).parent().siblings().find('i').removeClass('fa-caret-up').addClass('fa-caret-down');
//     }); 
// });


//Js.
document.addEventListener("DOMContentLoaded", function() {
    const cardHeaders = document.querySelectorAll('.card-header');

    cardHeaders.forEach(function(header) {
        header.addEventListener('click', function() {
            // Toggle classes for the clicked header
            const icon = this.querySelector('i');
            icon.classList.toggle('fa-caret-up');
            icon.classList.toggle('fa-caret-down');

            // Reset classes for sibling headers
            const siblings = this.parentNode.parentNode.children;
            Array.from(siblings).forEach(function(sibling) {
                const siblingIcon = sibling.querySelector('i');
                if (sibling != this.parentNode && siblingIcon.classList.contains("fa-caret-up")) {
                    siblingIcon.classList.remove('fa-caret-up');
                    siblingIcon.classList.add('fa-caret-down');
                }
            }, this);
        });
    });
});

