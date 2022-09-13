class Scene2 extends Phaser.Scene {
    constructor(){
        super("playGame");
    }

    create(){
        //this.background = this.add.image(0,0,"background");
        this.background = this.add.tileSprite(0,0,config.width,config.height,"background");
        this.background.setOrigin(0,0);

        // 객체 생성
        this.ships=[]
        for(let i=0; i<4;i++){
            console.log(`Hi`);
            this.ship = this.add.sprite(config.width/2 -Math.random()*50, config.height/2, "ship");
            this.ships.push(this.ship)
        }
        //this.ship1 = this.add.sprite(config.width/2 -50, config.height/2, "ship");
        //this.ship2 = this.add.sprite(config.width/2, config.height/2, "ship2");
        //this.ship3 = this.add.sprite(config.width/2 +50, config.height/2, "ship3");
       
        this.powerUps = this.physics.add.group();

        var maxObjects =4;
        for (var i=0; i<= maxObjects; i++){
            var powerUp = this.physics.add.sprite(16,16,"power-up");
            this.powerUps.add(powerUp);
            powerUp.setRandomPosition(0,0,game.config.width, game.config.height);
            
            if(Math.random() > 0.5){
                powerUp.play("red");
            }else{
                powerUp.play("gray");
            }
            powerUp.setVelocity(100,100);
            powerUp.setCollideWorldBounds(true);
            powerUp.setBounce(1);
        }
        
        // 객체 애니메이션 삽입
        for(let i=0; i<this.ships.length;i++){
            this.ships[i].play(`ship${Math.floor(Math.random()*3)+1}_anim`);
        }
        //this.ship1.play("ship1_anim");
        //this.ship2.play("ship2_anim");
        //this.ship3.play("ship3_anim");
        

        //this.add.text(20,20,"Playing game",{font:"25px Arial", fill: "yellow"});

        this.player = this.physics.add.sprite(config.width/2 -8, config.height -64, "player");
        this.player.play("thrust");
        this.cursorKeys = this.input.keyboard.createCursorKeys();
        this.player.setCollideWorldBounds(true);

        this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        this.projectiles = this.add.group();

        this.physics.add.collider(this.projectiles, this.powerUps, function(projectiles,powerUp){
            projectiles.destroy();
        });

        this.physics.add.overlap(this.player, this.powerUps, this.pickPowerUp, null, this);


        this.enemies = this.physics.add.group();

        for(let i=0; i<this.ships.length;i++){
            this.enemies.add(this.ships[i]);
        }
        //this.enemies.add(this.ship1);
        //this.enemies.add(this.ship2);
        //this.enemies.add(this.ship3);
        this.physics.add.overlap(this.player, this.enemies, this.hurtPlayer, null, this);

        this.physics.add.overlap(this.projectiles, this.enemies, this.hitEnemy, null, this);

        var graphics = this.add.graphics();
        graphics.fillStyle(0x000000,1);
        graphics.beginPath();
        graphics.moveTo(0,0);
        graphics.lineTo(config.width, 0);
        graphics.lineTo(config.width, 20);
        graphics.lineTo(0,20);
        graphics.lineTo(0,0);
        graphics.closePath();
        graphics.fillPath();

        this.score =0;
        this.scoreLabel = this.add.bitmapText(10,5,"pixelFont","SCORE ", 16);

        this.beamSound = this.sound.add("audio_beam");


    }


    moveShip(ship, speed){
        ship.y +=speed;
        if(ship.y>config.height){
            this.resetShipPos(ship);
        }
    }

    resetShipPos(ship){
        ship.play(`ship${Math.floor(Math.random()*3)+1}_anim`);
        ship.y=0;
        var randomX = Phaser.Math.Between(0,config.width);
        ship.x = randomX;
    }

    destroyShip(pointer,gameObject){
        gameObject.setTexture("explosion");
        gameObject.play("explode");
    }

    // 실시간 활동
    update(){
        // 실시간으로 아래로 내려오는 적들
        for(let i=0; i<this.ships.length;i++){
            this.moveShip(this.ships[i],1);
            this.ships[i].setInteractive();
        }
        //this.moveShip(this.ship1, 1);
        //this.moveShip(this.ship2, 2);
        //this.moveShip(this.ship3, 3);

        //this.ship1.setInteractive();
        //this.ship2.setInteractive();
        //this.ship3.setInteractive();

        this.input.on('gameobjectdown', this.destroyShip, this);

        this.background.tilePositionY -=0.5;

        this.movePlayerManager();

        if(Phaser.Input.Keyboard.JustDown(this.spacebar)){
            if(this.player.active){
                this.shootBeam();
            }
        }
        for(var i=0; i< this.projectiles.getChildren().length; i++){
            var beam = this.projectiles.getChildren()[i];
            beam.update();
        }

    }

    // 플레이어 음직임
    movePlayerManager(){
        let playerVelocity = new Phaser.Math.Vector2();
        if(this.cursorKeys.left.isDown){
            this.player.setVelocityX(-gameSettings.playerSpeed);
        }else if(this.cursorKeys.right.isDown){
            this.player.setVelocityX(gameSettings.playerSpeed);
        }else{
            this.player.setVelocityX(0);
        }
        
        if(this.cursorKeys.up.isDown){
            this.player.setVelocityY(-gameSettings.playerSpeed);
        }else if(this.cursorKeys.down.isDown){
            this.player.setVelocityY(gameSettings.playerSpeed);
        }else{
            this.player.setVelocityY(0);
        }
    }

    shootBeam(){
        //var beam = this.physics.add.sprite(this.player.x , this.player.y, "beam");
        var beam = new Beam(this);
        this.beamSound.play();
    }

    pickPowerUp(player, powerUp){
        powerUp.disableBody(true, true);
    }

    hurtPlayer(player, enemy){
        this.resetShipPos(enemy);

        if(this.player.alpha<1){
            return;
        }

        var explosion = new Explosion(this, player.x, player.y);
        // player.x = config.width/2 -8;
        // player.y = config.height -64;
        player.disableBody(true,true);
        player.active=false;
        
        //this.resetPlayer();
        this.time.addEvent({
            delay: 1000,
            callback: this.resetPlayer,
            callbackScope: this,
            loop: false
        })


        this.score =0;
        var scoreFormated = this.zeroPad(this.score, 6);
        this.scoreLabel.text = "SCORE " + scoreFormated;

        
    }

    hitEnemy(projectiles,enemy){
        var explosion = new Explosion(this, enemy.x, enemy.y);
        projectiles.destroy();
        this.resetShipPos(enemy);
        this.score +=15;
        var scoreFormated = this.zeroPad(this.score, 6);
        this.scoreLabel.text = "SCORE " + scoreFormated;
    }

    zeroPad(number, size){
        var stringNumber = String(number);
        while(stringNumber.length <(size||2)){
            stringNumber ="0" +stringNumber;
        }
        return stringNumber;
    }

    resetPlayer(){
        var x = config.width/2 -8;
        var y = config.height +64;
        this.player.enableBody(true, x, y, true, true);
        
        this.player.alpha =0.5;


        var tween = this.tweens.add({
            targets:this.player,
            y:config.height -64,
            ease: 'Power1',
            duration: 1500,
            repeat:0,
            onComplete: function(){
                this.player.alpha =1;
            },
            callbackScope: this
        });
        
    }
}