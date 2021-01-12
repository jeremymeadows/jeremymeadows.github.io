Vue.component('navbar', {
    template: (`
        <nav class="navbar navbar-expand-md bg-dark sticky-top nerd"><div class="container-fluid">
            <a v-if="hover" v-on:mouseout="hover=false;" href="#" class="navbar-brand">[{{ title }}]</a>
            <a v-else v-on:mouseover="hover=true" href="#" class="navbar-brand">&nbsp{{ title }}&nbsp</a>
            &nbsp
            <label class="switch">
                <input v-model="lights" v-on:click="toggleLights" type="checkbox">
                <span class="slider"></span>
            </label>
            &nbsp

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon" style="color: #f1f1f1">|||</span>
            </button>

            <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li v-for="page in pages" class="nav-item">
                        <a v-if="page===highlighted" v-on:mouseout="leave" class="nav-link" href="#">[{{ page }}]</a>
                        <a v-else v-on:mouseover="enter(page)" class="nav-link" href="#">&nbsp{{ page }}&nbsp</a>
                    </li>
                </ul>
            </div>
        </div></nav>
    `),
    data: function() {
        return {
            title: "Jeremy Meadows",
            hover: false,
            pages: [
                'home',
                'about_me',
                'education',
            ],
            highlighted: '',
            lights: false,
        };
    },
    methods: {
        enter: function(s) {
            this.highlighted = s;
        },
        leave: function() {
            this.highlighted = '';
        },
        toggleLights: function() {
            var doc = document.querySelector(':root');
            if (!this.lights) {
                // light mode
                doc.style.setProperty('--text', '#1f1f1f');
                doc.style.setProperty('--bg', '#f1f1f1');
                doc.style.setProperty('--32', '#11aa11');
            } else {
                // dark mode
                doc.style.setProperty('--text', '#f1f1f1');
                doc.style.setProperty('--bg', '#1f1f1f');
                doc.style.setProperty('--32', '#00ff22');
            }
        }
    }
});

var nav = new Vue({
    el: '#page'
});
