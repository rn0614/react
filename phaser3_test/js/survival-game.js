import MainScene from "./MainScene.js";

const config={
    width:512,
    height:612,
    backgroundColor:'#999999',
    type:Phaser.AUTO,
    parent:'survival-game',
    scene:[MainScene],
    sclae:{
        zoom:2,
    },
    physics:{
        default:'matter',
        matter:{
            debug:true,
            gravity:{y:1},
        }
    },
    plugins:{
        scene:[
            {
                plugin :PhaserMatterCollisionPlugin,
                key: 'matterCollision',
                mapping:'matterCollision'
            }
        ]
    }
}

new Phaser.Game(config);