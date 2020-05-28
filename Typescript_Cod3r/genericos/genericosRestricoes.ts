// *** podemos definir T com tipos definidos

// functions
function write<T extends number | string>(item: T){
    console.log(item)
}
write(1)
write('F')
// write(true)     // gera erro porque não é do tipo aceito


// classes
class WriteObj<T extends number | string>{
    write(item: T){
        console.log(item)
    }
}
new WriteObj<number>().write(1)
new WriteObj<string>().write('F')
// new WriteObj<boolean>().write(true)      // gera erro porque não é do tipo aceito


// functions dentro de classes
class WriteObj2 {
    write<T extends number | string>(item: T){
        console.log(item)
    }
}
new WriteObj2().write<number>(1)
new WriteObj2().write<string>('F')
// new WriteObj2().write<boolean>(true)     // gera erro porque não é do tipo aceito

