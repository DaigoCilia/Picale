class Carga extends Phaser.Scene {
    constructor(){
        super("Carga");
    }

    preload (){

        //fondo de carga
        this.add.rectangle( //Crea un rectangulo del tamaño de la pantalla
            this.scale.width / 2, //centra en ancho
            this.scale.height / 2, //centra en alto
            this.scale.width,
            this.scale.height,
            0x222222
        );

        //texto
        let texto = this.add.text( //coloca el texto
            this.scale.width /2,
            this.scale.height / 2 - 50, //se sube un poco mas arriba del centro
            "Cargando 0%",
            {fontSize: "30px", color: "#ffffff"}
        ).setOrigin(0.5);

        //Barra fondo
        let barraFondo = this.add.rectangle( //es la base para la barra de carga
            this.scale.width / 2,
            this.scale.height / 2,
            400,
            30,
            0xffff00
        ).setOrigin(0, 0.5);

        // barra progreso
        let barra = this.add.rectangle( //es lo que mostrara que se esta cargando
            this.scale.width / 2 - 200,
            this.scale.height / 2,
            0,
            30,
            0xffff00
        ).setOrigin(0, 0.5);

        //archivos a cargar (imagenes)
        this.load.image("meme", "Block_1.png");
        this.load.image("cool", "Block_2.png");
        this.load.image("game", "Block_3.png");

        //progreso de carga
        this.load.on("progress", (valor) => {

            let porcentaje = parseInt(valor * 100);

            texto.setText("Cargando" + porcentaje + "%"); //actualiza el texto anterior 

            barra.width = 400 * valor; //la barra de carga crece
        });
        
    }

    create (){

        //Esperar un poco antes de cambiar de escena
        this.time.delayedCall(1500, () => { //cuando termina de cargar la barra espero un poco antes de cambiar la escenea

            this.scene.start("Inicio"); //escena objetivo
        });
    }
}
