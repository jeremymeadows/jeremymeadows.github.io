function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var term = new Vue({
    el: '#term',
    data: {
        text: '',
        prompt: '~$ ',
        speed: 1,
        commands: [
            'whoami',
            'finger jeremy_meadows',
            'startx',
        ],
        responses: [
            "jeremy_meadows\n",
            "Name: Jeremy Meadows\t\tShell: /bin/bash\nEducation: Baylor University\tGraduation: Dec 2021\n",
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
            document.getElementById("page").hidden = false;
        }
    }
});

term.start();
