
console.log("Probando probando xd");

let datosPersonales={
    nombre : "Ivan Paniagua Maldonado",
    Edad: 20,
    soyMainRidley:true,
    pasatiempos:["Jugar Videojuegos","Ver vídeos","Jugar/Pasear a mi perro","Leer"],
    contacto:{
        email:"ipaniaguamaldonado@gmail.com",
        instagram:"panvan23"
    },
    obtenerEdad: function()
    {
        return this.Edad;
    },    

    LibrosArray:[
        {
            nombreLibro:"El Rey Carbón",
            primerNombreAutor:"Sinclair",
            primerApellidoAutor:"Upton",
            País:"México",
            Publisher:"Fondo de Cultura Económica",
            formatoAppa: function()
            {
                console.log(`Autor: ${this.primerNombreAutor}`);
                console.log(`Apellido: ${this.primerApellidoAutor}`);
                console.log(`Nombre_del_libro: ${this.nombreLibro}`);
                console.log(`País: ${this.País}`);
                console.log(`Publisher: ${this.Publisher}`);                
            }
        },
        {
            nombreLibro:"Ask Iwata",
            primernombreEditor:" Hobonichi",
            primerApellidoAutor:" ",
            País:"Estados Unidos",
            Publisher:"VIZ Media LLC",
            formatoAppa: function()
            {
                console.log(`Editor: ${this.primernombreEditor}`);
                console.log(`Apellido: ${this.primerApellidoAutor}`);
                console.log(`Nombre_del_libro: ${this.nombreLibro}`);
                console.log(`País: ${this.País}`);
                console.log(`Publisher: ${this.Publisher}`);                
            }
        },
        {
            nombreLibro:"El Juego de Ender",
            primerNombreAutor:"Orson",
            primerApellidoAutor:"Scott",
            País:"España",
            Publisher:"PRH Grupo Editorial",
            formatoAppa: function()
            {
                console.log(`Autor: ${this.primerNombreAutor}`);
                console.log(`Apellido: ${this.primerApellidoAutor}`);
                console.log(`Nombre_del_libro: ${this.nombreLibro}`);
                console.log(`País: ${this.País}`);
                console.log(`Publisher: ${this.Publisher}`);                
            }
        },
    ],

};

console.log("DatosPersonales: ");
console.log(`Nombre: ${datosPersonales.nombre}`);
console.log(`Edad: ${datosPersonales.nombre}`);
console.log(`Email: ${datosPersonales.nombre}`);
console.log(`Es main Ridley? ${datosPersonales.soyMainRidley}`);
console.log(`Teléfono: ${datosPersonales.nombre}`);
console.log(`Pasatiempos: ${datosPersonales.nombre}`);

console.log("\nLibros Favoritos:");
console.log("\n");



datosPersonales.LibrosArray.forEach(libro => {
    libro.formatoAppa();
    console.log("");
});

