// Podemos instalar o jquery via npm ou colocar a URL CDN no html

// Forma simples de usar, resolvendo o erro de compilação do typescript

//declare const $: any    
$('body').append('Usando Jquery: forma simples')


// Instalar os arquivos de definição da biblioteca javascript para serem usadas no typescript
// https://microsoft.github.io/TypeSearch/
// instalar @types/jquery

// instalando @types/jquery, o $ já é reconhecido pelo typescript
$('body').append('Usando Jquery: forma completa')