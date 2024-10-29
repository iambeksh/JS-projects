(function(){
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');

    buttons.forEach(function(button){
        button.addEventListener('click', function(e) {
            let value = e.target.dataset.num;
            screen.value += value;
        });
    });

    equal.addEventListener('click', function(e){
        try {
            let answer = eval(screen.value); // Evaluate the expression
            screen.value = answer; // Show the answer on the screen
        } catch (error) {
            screen.value = 'Error'; // Handle invalid expressions
            setTimeout(() => screen.value = '', 1000); // Clear the error after 1 second
        }
    });

    clear.addEventListener('click', function(){
        screen.value = '';
    });
})();
