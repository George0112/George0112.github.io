const screenWidth = 1920;
const screenHeight = 1080;

var GameScene = new Phaser.Class({
    Extends: Phaser.Scene,

    initialize:

    function GameScene(){
        Phaser.Scene.call(this, {key: 'gameScene', active: true});
    },

    preload: function(){
        this.load.image('home', 'assets/home.jpg');
        this.load.image('fullscreen-button', 'assets/but-fullscreen.png');
        this.load.image('start-button', 'assets/but-start.png');
        this.load.image('home-Q1', 'assets/home-Q1.png');
        this.load.image('text-home-Q1', 'assets/text-home-Q1.png');

        this.load.image('Q1', 'assets/Q1.jpg');
        this.load.image('Q1-but-1', 'assets/but-Q1-1.png');
        this.load.image('Q1-but-2', 'assets/but-Q1-2.png');
        this.load.image('Q1-Q2', 'assets/Q1-Q2.png');
        this.load.image('text-Q1-Q2', 'assets/text-Q1-Q2.png');

        this.load.image('Q2', 'assets/Q2.jpg')
        this.load.image('Q2-but-1', 'assets/but-Q2-1.png');
        this.load.image('Q2-but-2', 'assets/but-Q2-2.png');
        this.load.image('Q2-Q3', 'assets/Q2-Q3.png');
        this.load.image('text-Q2-Q3', 'assets/text-Q2-Q3.png');

        this.load.image('Q3', 'assets/Q3.jpg')
        this.load.image('Q3-but-1', 'assets/but-Q3-1.png');
        this.load.image('Q3-but-2', 'assets/but-Q3-2.png');
        this.load.image('Q3-Q4', 'assets/Q3-Q4.png');
        this.load.image('text-Q3-Q4-1', 'assets/text-Q3-Q4-1.png');
        this.load.image('text-Q3-Q4-2', 'assets/text-Q3-Q4-2.png');

        this.load.image('Q4', 'assets/Q4.jpg')
        this.load.image('Q4-but-1', 'assets/but-Q4-1.png');
        this.load.image('Q4-but-2', 'assets/but-Q4-2.png');
        this.load.image('Q4-Q5', 'assets/Q4-Q5.png');
        this.load.image('text-Q4-Q5', 'assets/text-Q4-Q5.png');

        this.load.image('Q5', 'assets/Q5.jpg')
        this.load.image('Q5-but-1', 'assets/but-Q5-1.png');
        this.load.image('Q5-but-2', 'assets/but-Q5-2.png');
        this.load.image('Q5-Q6', 'assets/Q5-Q6.png');
        this.load.image('text-Q5-Q6', 'assets/text-Q5-Q6.png');

        this.load.image('Q6', 'assets/Q6.jpg')
        this.load.image('Q6-but-1', 'assets/but-Q6-1.png');
        this.load.image('Q6-but-2', 'assets/but-Q6-2.png');
        this.load.image('Q6-but-3', 'assets/but-Q6-3.png');
        this.load.image('Q6-Q7', 'assets/Q6-Q7.png');
        this.load.image('text-Q6-Q7', 'assets/text-Q6-Q7.png');

        this.load.image('Q7', 'assets/Q7.jpg');
        this.load.image('Q7-1', 'assets/Q7-1.png');
        this.load.image('Q7-2', 'assets/Q7-2.png');
        this.load.image('Q7-3', 'assets/Q7-3.png');
        this.load.image('Q7-4', 'assets/Q7-4.png');
        this.load.image('Q7-5', 'assets/Q7-5.png');
        this.load.image('Q7-6', 'assets/Q7-6.png');
        this.load.image('Q7-7', 'assets/Q7-7.png');
    },

    create: function(){

        this.points = [];

        // Home page
        this.home = this.add.image(screenWidth/2, screenHeight/2, 'home').setDisplaySize(screenWidth, screenHeight);
        fullScreenButton = this.add.image(1820, 100, 'fullscreen-button');
        startButton = this.add.image(960, 840, 'start-button');

        // Home trans
        this.home_Q1 = this.add.image(960, 540+1080, 'home-Q1');
        this.text_home_Q1 = this.add.image(960, 540, 'text-home-Q1').setAlpha(0);

        // Q1
        this.Q1 = this.add.image(960, 540+1080, 'Q1');
        this.Q1_but_1 = this.add.image(760, 640, 'Q1-but-1').setAlpha(0);
        this.Q1_but_2 = this.add.image(1160, 640, 'Q1-but-2').setAlpha(0);

        // Q1.5
        this.Q1_5 = this.add.image(960, 540, 'Q1.5.jpg').setVisible(false);

        // Q1 trans
        this.Q1_Q2 = this.add.image(960, 540+1080, 'Q1-Q2');
        this.text_Q1_Q2 = this.add.image(960, 540, 'text-Q1-Q2').setAlpha(0);

        // Q2
        this.Q2 = this.add.image(960, 540+1080, 'Q2');
        this.Q2_but_1 = this.add.image(660, 600, 'Q2-but-1').setAlpha(0);
        this.Q2_but_2 = this.add.image(1260, 600, 'Q2-but-2').setAlpha(0);

        // Q2 trans
        this.Q2_Q3 = this.add.image(960, 540+1080, 'Q2-Q3');
        this.text_Q2_Q3 = this.add.image(960, 540, 'text-Q2-Q3').setAlpha(0);

        // Q3
        this.Q3 = this.add.image(960, 540+1080, 'Q3');
        this.Q3_but_1 = this.add.image(760, 880, 'Q3-but-1').setAlpha(0);
        this.Q3_but_2 = this.add.image(1160, 880, 'Q3-but-2').setAlpha(0);

        // Q3 trans
        this.Q3_Q4 = this.add.image(960, 540+1080, 'Q3-Q4');
        this.text_Q3_Q4_1 = this.add.image(960, 540, 'text-Q3-Q4-1').setAlpha(0);
        this.text_Q3_Q4_2 = this.add.image(960, 540, 'text-Q3-Q4-2').setAlpha(0);

        // Q4
        this.Q4 = this.add.image(960, 540+1080, 'Q4');
        this.Q4_but_1 = this.add.image(560, 500, 'Q4-but-1').setAlpha(0);
        this.Q4_but_2 = this.add.image(1360, 500, 'Q4-but-2').setAlpha(0);

        // Q4 trans
        this.Q4_Q5 = this.add.image(960, 540+1080, 'Q4-Q5');
        this.text_Q4_Q5 = this.add.image(960, 540, 'text-Q4-Q5').setAlpha(0);

        // Q5 
        this.Q5 = this.add.image(960, 540+1080, 'Q5');
        this.Q5_but_1 = this.add.image(510, 540, 'Q5-but-1').setAlpha(0);
        this.Q5_but_2 = this.add.image(1410, 540, 'Q5-but-2').setAlpha(0);

        // Q5 trans
        this.Q5_Q6 = this.add.image(960, 540+1080, 'Q5-Q6');
        this.text_Q5_Q6 = this.add.image(960, 540, 'text-Q5-Q6').setAlpha(0);

        // Q6
        this.Q6 = this.add.image(960, 540+1080, 'Q6');
        this.Q6_but_1 = this.add.image(660, 800, 'Q6-but-1').setAlpha(0);
        this.Q6_but_2 = this.add.image(960, 800, 'Q6-but-2').setAlpha(0);
        this.Q6_but_3 = this.add.image(1260, 800, 'Q6-but-3').setAlpha(0);

        // Q6 trans
        this.Q6_Q7 = this.add.image(960, 540+1080, 'Q6-Q7');
        this.text_Q6_Q7 = this.add.image(960, 540, 'text-Q6-Q7').setAlpha(0);

        // Q7
        this.Q7 = this.add.image(960, 540+1080, 'Q7');
        this.Q7_1 = this.add.image(960, 300, 'Q7-1').setAlpha(0);
        this.Q7_2 = this.add.image(960, 300, 'Q7-2').setAlpha(0);
        this.Q7_3 = this.add.image(960, 300, 'Q7-3').setAlpha(0);
        this.Q7_4 = this.add.image(960, 300, 'Q7-4').setAlpha(0);
        this.Q7_5 = this.add.image(960, 300, 'Q7-5').setAlpha(0);
        this.Q7_6 = this.add.image(960, 300, 'Q7-6').setAlpha(0);
        this.Q7_7 = this.add.image(960, 300, 'Q7-7').setAlpha(0);

        // Timelines
        this.homeTransTimeline = this.createHomeTransTimeline();
        this.Q1Timeline = this.createQ1Timeline();
        this.Q1TransTimeline = this.createQ1TransTimeline();
        this.Q2Timeline = this.createQ2Timeline();
        this.Q2TransTimeline = this.createQ2TransTimeline();
        this.Q3Timeline = this.createQ3Timeline();
        this.Q3TransTimeline = this.createQ3TransTimeline();
        this.Q4Timeline = this.createQ4Timeline();
        this.Q4TransTimeline = this.createQ4TransTimeline();
        this.Q5Timeline = this.createQ5Timeline();
        this.Q5TransTimeline = this.createQ5TransTimeline();
        this.Q6Timeline = this.createQ6Timeline();
        this.Q6TransTimeline = this.createQ6TransTimeline();
        // this.Q7Timeline = this.createQ7Timeline();

        // Fullscreen button
        fullScreenButton.setInteractive();
        fullScreenButton.on('pointerup', () => {
            this.scale.startFullscreen();
            fullScreenButton.setVisible(false);
        })

        // Start game button
        startButton.setInteractive();
        startButton.on('pointerup', ()=>{
            startButton.setVisible(false);
            this.homeTransTimeline.play();
            this.homeTransTimeline.on('complete', ()=>{
                this.home_Q1.setInteractive();
            })
            // this.Q6TransTimeline.play();
            // this.Q6_Q7.setInteractive();
        })

        // Home transformation page to Q1 after click
        this.home_Q1.on('pointerup', ()=>{
            this.Q1Timeline.play();
            this.Q1Timeline.on('complete', ()=>{
                this.Q1_but_1.setInteractive();
            })
        })

        // Q1 option 1 clicked, to Q1 trans page
        this.Q1_but_1.on('pointerup', ()=>{
            this.points[0] = 0;
            this.Q1_but_1.setVisible(false);
            this.Q1_but_2.setVisible(false);
            this.Q1TransTimeline.play();
            this.Q1TransTimeline.on('complete', ()=>{
                this.Q1_Q2.setInteractive();
            })
        })

        // Q1 trans to Q2
        this.Q1_Q2.on('pointerup', ()=>{
            this.Q2Timeline.play();
            this.Q2Timeline.on('complete', ()=>{
                this.Q2_but_1.setInteractive();
                this.Q2_but_2.setInteractive();
            });
        })

        // Q2 arbitary button is clicked, go to Q2 trans page
        this.Q2_but_1.on('pointerup', ()=>{
            this.points[2] = 1;
            this.Q2_but_1.setVisible(false);
            this.Q2_but_2.setVisible(false);
            this.Q2TransTimeline.play();
        })
        this.Q2_but_2.on('pointerup', ()=>{
            this.points[2] = 0;
            this.Q2_but_1.setVisible(false);
            this.Q2_but_2.setVisible(false);
            this.Q2TransTimeline.play();
        })
        this.Q2TransTimeline.on('complete', ()=>{
            this.Q2_Q3.setInteractive();
        })

        // Q2 trans to Q3
        this.Q2_Q3.on('pointerup', ()=>{
            this.Q3Timeline.play();
            this.Q3Timeline.on('complete', ()=>{
                this.Q3_but_1.setInteractive();
                this.Q3_but_2.setInteractive();
            })
        })

        // Q3 arbitary button is clicked, go to Q3 trans page
        this.Q3_but_1.on('pointerup', ()=>{
            this.points[3] = 0;
            this.Q3_but_1.setVisible(false);
            this.Q3_but_2.setVisible(false);
            this.Q3TransTimeline.play();
        })
        this.Q3_but_2.on('pointerup', ()=>{
            this.points[3] = 1;
            this.Q3_but_1.setVisible(false);
            this.Q3_but_2.setVisible(false);
            this.Q3TransTimeline.play();
        })
        this.Q3TransTimeline.on('complete', ()=>{
            this.Q3_Q4.setInteractive();
        })

        // Q3 trans to Q4
        this.Q3_Q4.on('pointerup', ()=>{
            this.Q4Timeline.play();
            this.Q4Timeline.on('complete', ()=>{
                this.Q4_but_1.setInteractive();
                this.Q4_but_2.setInteractive();
            })
        })

        // Q4 arbitary button is clicked, go to Q4 trans page
        this.Q4_but_1.on('pointerup', ()=>{
            this.points[4] = 1;
            this.Q4_but_1.setVisible(false);
            this.Q4_but_2.setVisible(false);
            this.Q4TransTimeline.play();
        })
        this.Q4_but_2.on('pointerup', ()=>{
            this.points[4] = 0;
            this.Q4_but_1.setVisible(false);
            this.Q4_but_2.setVisible(false);
            this.Q4TransTimeline.play();
        })
        this.Q4TransTimeline.on('complete', ()=>{
            this.Q4_Q5.setInteractive();
        })

        // Q4 trans to Q5
        this.Q4_Q5.on('pointerup', ()=>{
            this.Q5Timeline.play();
            this.Q5Timeline.on('complete', ()=>{
                this.Q5_but_1.setInteractive();
                this.Q5_but_2.setInteractive();
            })
        })

        // Q5 arbitary button is clicked, go to Q5 trans page
        this.Q5_but_1.on('pointerup', ()=>{
            this.points[5] = 1;
            this.Q5_but_1.setVisible(false);
            this.Q5_but_2.setVisible(false);
            this.Q5TransTimeline.play();
        })
        this.Q5_but_2.on('pointerup', ()=>{
            this.points[5] = 0;
            this.Q5_but_1.setVisible(false);
            this.Q5_but_2.setVisible(false);
            this.Q5TransTimeline.play();
        })
        this.Q5TransTimeline.on('complete', ()=>{
            this.Q5_Q6.setInteractive();
        })

        // Q5 trans to Q6
        this.Q5_Q6.on('pointerup', ()=>{
            this.Q6Timeline.play();
            this.Q6Timeline.on('complete', ()=>{
                this.Q6_but_1.setInteractive();
                this.Q6_but_2.setInteractive();
                this.Q6_but_3.setInteractive();
            })
        })

        // Q6 arbitary button is clicked, go to Q6 trans page
        this.Q6_but_1.on('pointerup', ()=>{
            this.points[6] = 0;
            this.Q6_but_1.setVisible(false);
            this.Q6_but_2.setVisible(false);
            this.Q6_but_3.setVisible(false);
            this.Q6TransTimeline.play();
        })
        this.Q6_but_2.on('pointerup', ()=>{
            this.points[6] = 1;
            this.Q6_but_1.setVisible(false);
            this.Q6_but_2.setVisible(false);
            this.Q6_but_3.setVisible(false);
            this.Q6TransTimeline.play();
        })
        this.Q6_but_3.on('pointerup', ()=>{
            this.points[6] = -1;
            this.Q6_but_1.setVisible(false);
            this.Q6_but_2.setVisible(false);
            this.Q6_but_3.setVisible(false);
            this.Q6TransTimeline.play();
        })
        this.Q6TransTimeline.on('complete', ()=>{
            this.Q6_Q7.setInteractive();
        })

        this.Q6_Q7.on('pointerup', ()=>{
            // this.Q7Timeline.play();
            var p = 0;
            this.points.forEach(e => {
                p += e;
            });

            this.tweens.add({
                targets: [this.Q6_Q7, this.text_Q6_Q7],
                y: -540,
                ease: 'Power1',
                duration: 2000,
                completeDelay: 0,
            });

            this.tweens.add({
                targets: this.Q7,
                y: 540, 
                ease: 'Power1',
                duration: 2000,
                completeDelay: 0,
            })

            console.log(this.points)
            console.log(p);

            switch (true) {
                case (p == 5):
                    this.tweens.add({
                        targets: this.Q7_1,
                        alpha: 1, 
                        ease: 'Linear',
                        duration: 1000,
                        completeDelay: 0
                    })
                    break;
                case (p == 4):
                    this.tweens.add({
                        targets: this.Q7_2,
                        alpha: 1, 
                        ease: 'Linear',
                        duration: 1000,
                        completeDelay: 0
                    })
                    break;
                case (p == 3):
                    this.tweens.add({
                        targets: this.Q7_3,
                        alpha: 1, 
                        ease: 'Linear',
                        duration: 1000,
                        completeDelay: 0
                    })
                    break;
            
                case (p == 1 || p == 2):
                    this.tweens.add({
                        targets: this.Q7_4,
                        alpha: 1, 
                        ease: 'Linear',
                        duration: 1000,
                        completeDelay: 0
                    })
                    break;
                case (p == 0):
                    this.tweens.add({
                        targets: this.Q7_5,
                        alpha: 1, 
                        ease: 'Linear',
                        duration: 1000,
                        completeDelay: 0
                    })
                    break;
                case (p == -1 || p == -2):
                    this.tweens.add({
                        targets: this.Q7_6,
                        alpha: 1, 
                        ease: 'Linear',
                        duration: 1000,
                        completeDelay: 0
                    })
                    break;
                case (p == -3):
                    this.tweens.add({
                        targets: this.Q7_7,
                        alpha: 1, 
                        ease: 'Linear',
                        duration: 1000,
                        completeDelay: 0
                    })
                    break;
            
                default:
                    break;
            }
        })
    },

    update: function(){
    },

    createHomeTransTimeline: function(){
        var timeline = this.tweens.createTimeline();
        timeline.add({
            targets: this.home,
            y: -540,
            ease: 'Power1',
            duration: 2000,
            completeDelay: 0,
        });

        timeline.add({
            targets: this.home_Q1,
            y: 540,
            ease: 'Power1',
            duration: 2000,
            completeDelay: 0,
            offset: '-=2000'
        });

        timeline.add({
            targets: this.text_home_Q1,
            alpha: 1,
            ease: 'Linear',
            duration: 1000,
            offset: '-=0',
            completeDelay: 0
        })

        return timeline;
    },

    createQ1Timeline: function(){
        var timeline = this.tweens.createTimeline();

        timeline.add({
            targets: [this.home_Q1, this.text_home_Q1],
            y: -540,
            ease: 'Power1',
            duration: 2000,
            completeDelay: 0,
        });

        timeline.add({
            targets: this.Q1,
            y: 540, 
            ease: 'Power1',
            duration: 2000,
            completeDelay: 0,
            offset: '-=2000'
        });

        timeline.add({
            targets: [this.Q1_but_1, this.Q1_but_2],
            alpha: 1,
            ease: 'Linear',
            duration: 1000,
            completeDelay: 0,
        })

        return timeline;
    },

    createQ1TransTimeline: function(){
        var timeline = this.tweens.createTimeline();
        timeline.add({
            targets: this.Q1,
            y: -540,
            ease: 'Power1',
            duration: 2000,
            completeDelay: 0,
        });

        timeline.add({
            targets: this.Q1_Q2,
            y: 540,
            ease: 'Power1',
            duration: 2000,
            completeDelay: 0,
            offset: '-=2000'
        });

        timeline.add({
            targets: this.text_Q1_Q2,
            alpha: 1,
            ease: 'Linear',
            duration: 1000,
            offset: '-=0',
            completeDelay: 0
        })

        return timeline;
    },

    createQ2Timeline: function(){
        var timeline = this.tweens.createTimeline();

        timeline.add({
            targets: [this.Q1_Q2, this.text_Q1_Q2],
            y: -540,
            ease: 'Power1',
            duration: 2000,
            completeDelay: 0,
        });

        timeline.add({
            targets: this.Q2,
            y: 540, 
            ease: 'Power1',
            duration: 2000,
            completeDelay: 0,
            offset: '-=2000'
        });

        timeline.add({
            targets: [this.Q2_but_1, this.Q2_but_2],
            alpha: 1,
            ease: 'Linear',
            duration: 1000,
            completeDelay: 0,
        })

        return timeline;
    },

    createQ2TransTimeline: function(){        
        var timeline = this.tweens.createTimeline();
        timeline.add({
            targets: this.Q2,
            y: -540,
            ease: 'Power1',
            duration: 2000,
            completeDelay: 0,
        });

        timeline.add({
            targets: this.Q2_Q3,
            y: 540,
            ease: 'Power1',
            duration: 2000,
            completeDelay: 0,
            offset: '-=2000'
        });

        timeline.add({
            targets: this.text_Q2_Q3,
            alpha: 1,
            ease: 'Linear',
            duration: 1000,
            offset: '-=0',
            completeDelay: 0
        })

        return timeline;
    },

    createQ3Timeline: function(){
        var timeline = this.tweens.createTimeline();

        timeline.add({
            targets: [this.Q2_Q3, this.text_Q2_Q3],
            y: -540,
            ease: 'Power1',
            duration: 2000,
            completeDelay: 0,
        });

        timeline.add({
            targets: this.Q3,
            y: 540, 
            ease: 'Power1',
            duration: 2000,
            completeDelay: 0,
            offset: '-=2000'
        });

        timeline.add({
            targets: [this.Q3_but_1, this.Q3_but_2],
            alpha: 1,
            ease: 'Linear',
            duration: 1000,
            completeDelay: 0,
        })

        return timeline;
    },

    createQ3TransTimeline: function(){
        var timeline = this.tweens.createTimeline();
        timeline.add({
            targets: this.Q3,
            y: -540,
            ease: 'Power1',
            duration: 2000,
            completeDelay: 0,
        });

        timeline.add({
            targets: this.Q3_Q4,
            y: 540,
            ease: 'Power1',
            duration: 2000,
            completeDelay: 0,
            offset: '-=2000'
        });

        timeline.add({
            targets: this.text_Q3_Q4_1,
            alpha: 1,
            ease: 'Linear',
            duration: 1000,
            offset: '-=0',
            completeDelay: 0
        })

        timeline.add({
            targets: this.text_Q3_Q4_1,
            alpha: 0,
            delay: 3000,
            ease: 'Linear',
            duration: 1000,
            offset: '-=0',
            completeDelay: 0
        })

        timeline.add({
            targets: this.text_Q3_Q4_2,
            alpha: 1,
            ease: 'Linear',
            duration: 1000,
            offset: '-=0',
            completeDelay: 0
        })

        return timeline;
    },

    createQ4Timeline: function(){
        var timeline = this.tweens.createTimeline();

        timeline.add({
            targets: [this.Q3_Q4, this.text_Q3_Q4_2],
            y: -540,
            ease: 'Power1',
            duration: 2000,
            completeDelay: 0,
        });

        timeline.add({
            targets: this.Q4,
            y: 540, 
            ease: 'Power1',
            duration: 2000,
            completeDelay: 0,
            offset: '-=2000'
        });

        timeline.add({
            targets: [this.Q4_but_1, this.Q4_but_2],
            alpha: 1,
            ease: 'Linear',
            duration: 1000,
            completeDelay: 0,
        })

        return timeline;
    },

    createQ4TransTimeline: function(){
        var timeline = this.tweens.createTimeline();
        timeline.add({
            targets: this.Q4,
            y: -540,
            ease: 'Power1',
            duration: 2000,
            completeDelay: 0,
        });

        timeline.add({
            targets: this.Q4_Q5,
            y: 540,
            ease: 'Power1',
            duration: 2000,
            completeDelay: 0,
            offset: '-=2000'
        });

        timeline.add({
            targets: this.text_Q4_Q5,
            alpha: 1,
            ease: 'Linear',
            duration: 1000,
            offset: '-=0',
            completeDelay: 0
        })

        return timeline;
    },

    createQ5Timeline: function(){
        var timeline = this.tweens.createTimeline();

        timeline.add({
            targets: [this.Q4_Q5, this.text_Q4_Q5],
            y: -540,
            ease: 'Power1',
            duration: 2000,
            completeDelay: 0,
        });

        timeline.add({
            targets: this.Q5,
            y: 540, 
            ease: 'Power1',
            duration: 2000,
            completeDelay: 0,
            offset: '-=2000'
        });

        timeline.add({
            targets: [this.Q5_but_1, this.Q5_but_2],
            alpha: 1,
            ease: 'Linear',
            duration: 1000,
            completeDelay: 0,
        })

        return timeline;
    },

    createQ5TransTimeline: function(){
        var timeline = this.tweens.createTimeline();
        timeline.add({
            targets: this.Q5,
            y: -540,
            ease: 'Power1',
            duration: 2000,
            completeDelay: 0,
        });

        timeline.add({
            targets: this.Q5_Q6,
            y: 540,
            ease: 'Power1',
            duration: 2000,
            completeDelay: 0,
            offset: '-=2000'
        });

        timeline.add({
            targets: this.text_Q5_Q6,
            alpha: 1,
            ease: 'Linear',
            duration: 1000,
            offset: '-=0',
            completeDelay: 0
        })

        return timeline;
    },

    createQ6Timeline: function(){
        var timeline = this.tweens.createTimeline();

        timeline.add({
            targets: [this.Q5_Q6, this.text_Q5_Q6],
            y: -540,
            ease: 'Power1',
            duration: 2000,
            completeDelay: 0,
        });

        timeline.add({
            targets: this.Q6,
            y: 540, 
            ease: 'Power1',
            duration: 2000,
            completeDelay: 0,
            offset: '-=2000'
        });

        timeline.add({
            targets: [this.Q6_but_1, this.Q6_but_2, this.Q6_but_3],
            alpha: 1,
            ease: 'Linear',
            duration: 1000,
            completeDelay: 0,
        })

        return timeline;
    },

    createQ6TransTimeline: function(){
        var timeline = this.tweens.createTimeline();
        timeline.add({
            targets: this.Q6,
            y: -540,
            ease: 'Power1',
            duration: 2000,
            completeDelay: 0,
        });

        timeline.add({
            targets: this.Q6_Q7,
            y: 540,
            ease: 'Power1',
            duration: 2000,
            completeDelay: 0,
            offset: '-=2000'
        });

        timeline.add({
            targets: this.text_Q6_Q7,
            alpha: 1,
            ease: 'Linear',
            duration: 1000,
            offset: '-=0',
            completeDelay: 0
        })

        return timeline;
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