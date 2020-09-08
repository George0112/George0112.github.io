const screenWidth = 1920;
const screenHeight = 1080;

var GameScene = new Phaser.Class({
    Extends: Phaser.Scene,

    initialize:

    function GameScene(){
        Phaser.Scene.call(this, {key: 'gameScene', active: true});
    },

    preload: function(){
        this.load.image('home', 'assets/imac/home.jpg');
        this.load.image('Q1-1', 'assets/Q1-1.jpg');
        this.load.image('Q1-2', 'assets/Q1-2.jpg');
        this.load.image('Q1-text-1', 'assets/Q1-text-1.png');
        this.load.image('Q1-text-2', 'assets/Q1-text-2.png');
        this.load.image('Q1-text-3', 'assets/Q1-text-3.png');
    },

    create: function(){
        this.home = this.add.image(screenWidth/2, screenHeight/2, 'home').setDisplaySize(screenWidth, screenHeight);
        this.Q1_1 = this.add.image(screenWidth/2, (screenHeight/2)+screenHeight*1, 'Q1-1').setDisplaySize(screenWidth, screenHeight);
        this.Q1_2 = this.add.image(screenWidth/2, screenHeight/2, 'Q1-2').setAlpha(0).setDisplaySize(screenWidth, screenHeight);
        this.Q1_text_1 = this.add.image(screenWidth*0.58, screenHeight*0.345, 'Q1-text-1').setOrigin(1,0).setAlpha(0).setDisplaySize(219, 77.25);
        this.Q1_text_2 = this.add.image(screenWidth*0.402, screenHeight*0.412, 'Q1-text-2').setOrigin(0,0).setAlpha(0).setDisplaySize(303.6,74);
        this.Q1_text_3 = this.add.image(screenWidth*0.402, screenHeight*0.479, 'Q1-text-3').setOrigin(0,0).setAlpha(0).setDisplaySize(303.25, 76.25);

        fullScreenButton = this.add.text(50,50, 'Full Screen', { fill: '#fff', fontSize: 20});
        fullScreenButton.setInteractive();
        fullScreenButton.on('pointerup', () => {
            this.scale.startFullscreen();
            fullScreenButton.setVisible(false);
        })

        startButton = this.add.text(screenWidth/2, screenHeight*0.7, 'Start', {fill: '#fff', fontSize: 50});
        startButton.setInteractive();
        startButton.on('pointerup', ()=>{
            this.Q1();
            startButton.setVisible(false);
        })
    },

    update: function(){
    },

    Q1: function(){
        var home = this.home;
        var Q1_1 = this.Q1_1;

        this.tweens.add({
            targets: home,
            y: -1*(screenHeight/2),
            ease: 'Power1',
            delay: 0,
            duration: 2000,
            completeDelay: 800,
            onComplete: null,
            callbackScope: this
        });        
        this.tweens.add({
            targets: Q1_1,
            y: screenHeight/2,
            ease: 'Power1',
            delay: 0,
            duration: 2000,
            completeDelay: 800,
            onComplete: null,
            callbackScope: this
        });
        this.tweens.add({
            targets: this.Q1_2,
            ease: 'Linear',
            delay: 3000,
            duration: 1000,
            callbackScope: this,
            alpha: 1
        })
        this.tweens.add({
            targets: this.Q1_text_1,
            ease: 'Linear',
            delay: 5000,
            duration: 1000,
            callbackScope: this,
            alpha: 1
        })
        this.tweens.add({
            targets: this.Q1_text_2,
            ease: 'Linear',
            delay: 7000,
            duration: 1000,
            callbackScope: this,
            alpha: 1
        })
        this.tweens.add({
            targets: this.Q1_text_3,
            ease: 'Linear',
            delay: 9000,
            duration: 1000,
            callbackScope: this,
            alpha: 1
        })
    }
});

var config = {
  type: Phaser.AUTO,
  scale: {
      mode: Phaser.Scale.FIT,
      parent: 'phaser-example',
      autoCenter: Phaser.Scale.CENTER_BOTH,
      width: screenWidth,
      height: screenHeight
  },
  scene: GameScene
}

var game = new Phaser.Game(config)