import InputTextPlugin from '../../plugins/inputtext-plugin.js'

class Demo extends Phaser.Scene {
    constructor() {
        super({
            key: 'examples'
        })
    }

    preload() { }

    create() {
        var printText = this.add.text(400, 200, '', {
            fontSize: '12px',
        }).setOrigin(0.5).setFixedSize(100, 100);
        var inputText = this.add.rexInputText(400, 400, 10, 10, {
            type: 'textarea',
            text: 'hello world',
            fontSize: '12px',
            onTextChanged: function () {
                printText.text = inputText.text;
            },
            // onClick: function() {
            //     printText.text = inputText.text;
            // },
            // onDoubleClick: function() {
            //     printText.text = inputText.text;
            // }
            onFocus: function() {
                console.log('OnFocus');
            },
            onBlur: function() {
                console.log('OnBlur');
            }
        }).resize(100, 100).setOrigin(0.5);

        printText.text = inputText.text;

        // this.input.keyboard.addKey('ENTER').on('down', function (event) {
        //     console.log('enter');
        // });
    }

    update() { }
}

var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    dom: {
        createContainer: true
    },
    scene: Demo,
    plugins: {
        global: [{
            key: 'rexInputText',
            plugin: InputTextPlugin,
            start: true
        }]
    }
};

var game = new Phaser.Game(config);