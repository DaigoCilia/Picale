class Inicio extends Phaser.Scene {
    constructor(){
        super("Inicio");
    }

    create(){
         //Fondo
        this.cameras.main.setBackgroundColor("#1a1a1a"); //pinta el fondo

        //titulo
        this.add.text(
            this.scale.width / 2, //al centro del ancho
            this.scale.height / 2 - 120, //un poco mas arriba del centro
            "DESCUBRE LA IMAGEN",
            {
                fontSize: "40px",
                color: "#ffff00"
            }
        ).setOrigin(0.5);

        //Instrucciones
        this.add.text(
            this.scale.width / 2,
            this.scale.height / 2 - 40,
            "Elimina las imagenes para descubrir el mensaje",
            {
                fontSize: "22px",
                align: "center",  //centra el texto
                color: "#ffffff"
            }
        ).setOrigin(0.5);
            
        //boton jugar
        let boton = this.add.text( //crea el boton
            this.scale.width / 2, //lo centra a lo ancho
            this.scale.height / 2 + 80,
            "JUGAR",
            {
                fontSize: "32px",
                color: "#ffffff",
                backgroundColor: "#000",
                padding: {x: 20, y: 10}
            }
        ).setOrigin(0.5);

        boton.setInteractive(); //hace que el boton sea funcional

        boton.on("pointerdown", () => { //cuando se hace click cambia de escena
            this.scene.start("Juego");
        });

        //efecto hover
        boton.on("pointerover", () => {
            boton.setStyle({color: "#ffff00"}); //cuando el cursor pasa por encima cambia de color
        });

        boton.on("pinterout", () => {
            boton.setStyle({color: "#ffffff"}); //cuando el cursor sale del boton cambia a otro color 
        });

    }
}