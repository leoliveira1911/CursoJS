/* um bloco de código é delimitado por { }
um bloco pode conter várias sentenças de código.
dentro de um bloco de código pode haver outros blocos de código,
mas cada bloco interno deve começar e terminar dentro do "bloco pai" */

{
    console.log("Passo #01");
    console.log("Passo #02");
    console.log("Passo #03");
}

{
   { 
    console.log("Passo #04");
    console.log("Passo #05");
    }
}