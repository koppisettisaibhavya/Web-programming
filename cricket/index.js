var Game = /** @class */ (function () {
    function Game(id) {
        this.id = id;
        this.curr = 1;
        var main = document.getElementById("main");
        var div1 = document.createElement("div");
        div1.setAttribute("class", "text-center");
        div1.innerHTML = "<h4>CRICKET " + this.id + " </h4>";
        main.appendChild(div1);
        var hr = document.createElement("hr");
        main.appendChild(hr);
        var div2 = document.createElement("div");
        var div22 = document.createElement("div");
        div22.setAttribute("class", "col-12 text-center");
        div22.innerHTML = '<h4>Timer</h4><h4 id="timer">60</h4>';
        div22.innerHTML += "<button type=\"button\" id=\"result\" class=\"btn btn-danger disabled\" data-bs-toggle=\"modal\" data-bs-target=\"#exampleModal\">\n       Generate Result\n      </button>";
        div2.appendChild(div22);
        main.appendChild(div2);
        var hr = document.createElement("hr");
        main.appendChild(hr);
        var div3 = document.createElement("div");
        div3.setAttribute("class", "row justify-content-between");
        div3.setAttribute("id", "team_container");
        main.appendChild(div3);
        var div4 = document.createElement("div");
        div4.setAttribute("class", "container-fluid");
        div4.innerHTML = "<div class=\"row justify-content-between\" id=\"table_container\">\n                          </div>";
        document.body.appendChild(div4);
        this.team1 = new Team(1, this);
        var res = document.getElementById("table_container");
        res.innerHTML += "<div style=\"display:none;\" id=\"res\" class=\"modal-body col-lg-2\">\n                <h5 id=\"winner\"></h5>\n                <h5 id=\"best_player\"></h5>\n            </div>";
        this.team2 = new Team(2, this);
    }
    Game.prototype.myfunc = function () {
        var _this = this;
        var timeleft = 60;
        var timer = document.getElementById("timer");
        var ti = setInterval(function () {
            if (timeleft <= -1) {
                clearInterval(ti);
            }
            else {
                timer.innerText = (timeleft).toString();
                timeleft -= 1;
            }
        }, 1000);
        this.reset = function () {
            timeleft = 60;
            _this.myfunc();
        };
        this.stop = function () {
            timer.remove();
        };
    };
    return Game;
}());
var Team = /** @class */ (function () {
    function Team(id, game) {
        this.id = id;
        this.player_chance = 1;
        this.ball_chance = 1;
        this.game = game;
        this.game.myfunc();
        var team_container = document.getElementById("team_container");
        var div31 = document.createElement("div");
        div31.setAttribute("class", "col-12 col-lg-2 text-center");
        div31.innerHTML = "<h5>Team " + this.id.toString() + " Score</h5><h5\n        id=\"team" + this.id + "_score\">0</h5><button type=\"button\" id=\"btn" + this.id + "\" class=\"btn btn-primary\">HIT - \n        " + this.id + "</button><hr>";
        team_container.appendChild(div31);
        var btn = document.getElementById("btn" + this.id);
        btn.onclick = this.team_play();
        var table_container = document.getElementById("table_container");
        table_container.innerHTML += "<div class=\"table-responsive  col-12 col-lg-5\">\n        \n                                    <table class=\"table  table-striped table-hover table-bordered\">\n                                        <thead>\n                                            <tr>\n                                                <th scope=\"col\">Team</th>\n                                                <th scope=\"col\">B1</th>\n                                                <th scope=\"col\">B2</th>\n                                                <th scope=\"col\">B3</th>\n                                                <th scope=\"col\">B4</th>\n                                                <th scope=\"col\">B5</th>\n                                                <th scope=\"col\">B6</th>                                         \n                                                <th scope=\"col\">Total</th>\n                                            </tr>\n                                        </thead>\n                                        <tbody  id=\"table_" + this.id + "\">\n                                        </tbody>\n                                    </table>\n                                </div>";
        for (var i = 1; i <= 10; i++) {
            new Player(this.id, i);
        }
    }
    Team.prototype.team_play = function () {
        var _this = this;
        return function () {
            var pl = document.getElementById("ball_" + _this.id + "_" + _this.player_chance + "_" + _this.ball_chance);
            var tot = document.getElementById("player_total_" + _this.id + "_" + _this.player_chance);
            var team_scr = document.getElementById("team" + _this.id + "_score");
            var team_1 = document.getElementById("team1_score").innerText;
            var team_2 = document.getElementById("team2_score").innerText;
            var x = Math.floor(Math.random() * 7);
            pl.innerText = x.toString();
            tot.innerText = (Number(tot.innerText) + x).toString();
            team_scr.innerText = (Number(team_scr.innerText) + x).toString();
            if (_this.game.curr == 1)
                document.getElementById("btn2").setAttribute("class", "disabled btn btn-primary");
            var timer = document.getElementById("timer");
            if (timer.innerText == "0") {
                document.getElementById("btn" + _this.id).setAttribute("class", "disabled btn btn-primary");
                if (_this.game.curr == 1)
                    document.getElementById("btn2").setAttribute("class", "enabled btn btn-primary");
                else
                    document.getElementById("result").setAttribute("class", "enabled btn btn-danger");
            }
            if (_this.game.curr == 2 && Number(team_1) < (Number(team_2) + x)) {
                document.getElementById("btn" + _this.id).setAttribute("class", "disabled btn btn-primary");
                _this.game.stop();
                _this.display();
            }
            else if (x == 0 || _this.ball_chance == 6) {
                if (_this.player_chance == 10) {
                    document.getElementById("btn" + _this.id).setAttribute("class", "disabled  btn btn-primary");
                    _this.game.reset();
                    if (_this.id == 2) {
                        _this.game.stop();
                        _this.display();
                    }
                    else {
                        _this.game.curr = 2;
                        document.getElementById("btn2").setAttribute("class", "enabled btn btn-primary");
                        _this.player_chance = 1;
                        _this.ball_chance = 1;
                    }
                }
                else {
                    _this.player_chance += 1;
                    _this.ball_chance = 1;
                }
            }
            else
                _this.ball_chance += 1;
        };
    };
    Team.prototype.display = function () {
        var team_1 = document.getElementById("team1_score").innerText;
        var team_2 = document.getElementById("team2_score").innerText;
        if (team_1 > team_2) {
            document.getElementById("winner").innerText = "Winner is Team1";
            var ma = 0;
            var best = "";
            for (var i = 1; i <= 10; i++) {
                var tot1 = document.getElementById("player_total_1_" + i).innerText;
                if (ma < Number(tot1)) {
                    ma = Number(tot1);
                    best = "Player" + i + " from team1";
                }
            }
            document.getElementById("best_player").innerText = "best player is " + best;
        }
        else if (team_2 > team_1) {
            document.getElementById("winner").innerText = "Winner is Team2";
            var ma = 0;
            var best = "";
            for (var i = 1; i <= 10; i++) {
                var tot1 = document.getElementById("player_total_2_" + i).innerText;
                if (ma < Number(tot1)) {
                    ma = Number(tot1);
                    best = "Player" + i + " from team2";
                }
            }
            document.getElementById("best_player").innerText = "best player is " + best;
        }
        else {
            document.getElementById("winner").innerText = "Draw Match";
        }
        var res = document.getElementById("result");
        res.setAttribute("class", "enabled btn btn-danger");
        res.onclick = function () {
            document.getElementById("res").style.display = "block";
        };
    };
    return Team;
}());
var Player = /** @class */ (function () {
    function Player(team_id, id) {
        this.id = id;
        var table_ele = document.getElementById("table_" + team_id);
        var tr = document.createElement("tr");
        tr.setAttribute("id", "player_" + team_id + "_" + this.id);
        table_ele.appendChild(tr);
        for (var i = 0; i <= 7; i++) {
            if (i == 0) {
                var table_row = document.getElementById("player_" + team_id + "_" + this.id);
                var td = document.createElement("td");
                td.innerHTML = "<b>Player" + this.id + "</b>";
                table_row.appendChild(td);
            }
            else if (i == 7) {
                var table_row = document.getElementById("player_" + team_id + "_" + this.id);
                var td = document.createElement("td");
                td.setAttribute("id", "player_total_" + team_id + "_" + id);
                table_row.appendChild(td);
            }
            else
                new Ball(team_id, this.id, i);
        }
    }
    return Player;
}());
var Ball = /** @class */ (function () {
    function Ball(team_id, player_id, id) {
        this.id = id;
        var table_row = document.getElementById("player_" + team_id + "_" + player_id);
        var td = document.createElement("td");
        td.setAttribute("id", "ball_" + team_id + "_" + player_id + "_" + this.id);
        table_row.appendChild(td);
    }
    return Ball;
}());
new Game(1);
