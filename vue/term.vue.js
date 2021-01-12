function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var term = new Vue({
    el: '#term',
    data: {
        text: '',
        prompt: '<b style="color: #0000ff">~</b><b style="color: #00ff00">$</b>&nbsp',
        speed: 1,
        commands: [
            'whoami',
            'finger jmeadows',
            'startx',
        ],
        responses: [
            'jmeadows\n',
            'Name: Jeremy Meadows\t\tHome: /Waco/Texas\nEducation: Baylor University\tGraduation: Dec 2021\nFavourite Dinosaur: Brachiosaurus\n',
            '',
        ],
    },
    methods: {
        start: async function() {
            this.text = this.prompt;
            for (var i = 0; i < this.commands.length; i++) {
                await sleep(1000 * (1/this.speed));
                for (var c = 0; c < this.commands[i].length; c++) {
                    this.text += this.commands[i][c];
                    await sleep(20 * (1/this.speed));
                }
                this.text += "\n";

                await sleep(100 * (1/this.speed));
                this.text += this.responses[i];

                await sleep(100 * (1/this.speed));
                this.text += this.prompt;
            }
            await sleep(500 * (1/this.speed));

            document.getElementById("term").hidden = true;
            await sleep(500 * (1/this.speed));
            document.getElementById("term").hidden = false;
            document.getElementById("page").hidden = false;
            window.location = '#root';
        },
        show: function() {
            this.text = this.prompt;
            for (var i = 0; i < this.commands.length; i++) {
                this.text += this.commands[i] + "\n" + this.responses[i] + this.prompt;
            }
            document.getElementById("page").hidden = false;
            window.location = '#root';
        },
        setCookie: function(auto) {
            document.cookie = 'term_animation=' + auto + ';';
        },
        getCookie: function() {
            return document.cookie.match(/term_animation=(.*?);/);
        }
    }
});

var cookie = term.getCookie();
if (cookie === null) {
    term.start();
    term.setCookie('false');
} else if (cookie[1] === 'true') {
    term.start();
} else {
    term.show();
}
