// function auto invocada
// IIFE = Immediately Invoked Function Expression

// função declarada e já executada

(
    function() {
        console.log('Será executado na hora !!!')
        console.log('Foge do escopo global')
    }
)()