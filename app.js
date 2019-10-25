class Player{
    constructor(){
        this.name = "Петух";
        this.level = 1;
        this.power = 0;
        this.summary = this.level + this.power;
        let playerUI = document.createElement('div');
        playerUI.className = `player${playerCount+1}`;
        this.className = playerUI.className;
        playerCount++;
        this.playerPosition = playerCount;
        playerUI.innerHTML = `<input type="text" value="${this.name}">
        <div class="player-stats">
            <h3 class="player-force">${this.summary}</h3>
            <div class="player-counter">
                <div class="level-counter">
                    <h4>Уровень</h4>
                    <i class="fas fa-angle-up fa-3x"></i>
                    <p class="counter">${this.level}</p>
                    <i class="fas fa-angle-down fa-3x"></i>
                </div>
                <div class="force-counter">
                    <h4>Сила</h4>
                    <i class="fas fa-angle-up fa-3x"></i>
                    <p class="counter">${this.power}</p>
                    <i class="fas fa-angle-down fa-3x"></i>
                </div>
            </div>
        </div>
        `;
        document.getElementById('main-section').children[0].appendChild(playerUI);
        // console.log(document.querySelectorAll(`.${this.className} .fa-angle-up`));
        Array.from(document.querySelectorAll(`.${this.className} .fa-angle-up`)).forEach((element) => {
            // console.log(element.parentElement.children[0].textContent);
            element.addEventListener('click', (e)=>{
                switch (element.parentElement.children[0].textContent){
                    case "Уровень":
                        this.level++;
                        this.updateSummary();
                        document.querySelector(`.${this.className} .player-stats .player-counter .level-counter .counter`).textContent = `${this.level}`;
                        document.querySelector(`.${this.className} .player-stats .player-force`).textContent = `${this.summary}`;
                        break;
                    case "Сила":
                        this.power++;
                        this.updateSummary();
                        document.querySelector(`.${this.className} .player-stats .player-counter .force-counter .counter`).textContent = `${this.power}`;
                        document.querySelector(`.${this.className} .player-stats .player-force`).textContent = `${this.summary}`;
                        break;
                        
                }
                    
            });
        });
        Array.from(document.getElementsByClassName('fa-angle-down')).forEach((element) => {
            // console.log(element.parentElement.children[0].textContent);
            element.addEventListener('click', (e)=>{
                switch (element.parentElement.children[0].textContent){
                    case "Уровень":
                        this.level--;
                        this.updateSummary();
                        document.querySelector(`.${this.className} .player-stats .player-counter .level-counter .counter`).textContent = `${this.level}`;
                        document.querySelector(`.${this.className} .player-stats .player-force`).textContent = `${this.summary}`;
                        break;
                    case "Сила":
                        this.power--;
                        this.updateSummary();
                        document.querySelector(`.${this.className} .player-stats .player-counter .force-counter .counter`).textContent = `${this.power}`;
                        document.querySelector(`.${this.className} .player-stats .player-force`).textContent = `${this.summary}`;
                        break;
                        
                }
                    
            });
        });
    }

    updateSummary(){
        this.summary = this.level+this.power;
    }
    update(){
        document.querySelector(`.${this.className} .player-stats .player-counter .force-counter .counter`).textContent = `${this.power}`;
        document.querySelector(`.${this.className} .player-stats .player-counter .level-counter .counter`).textContent = `${this.level}`;
        document.querySelector(`.${this.className} .player-stats .player-force`).textContent = `${this.summary}`;
    }
}

let playerCount = 0;
let players = [];

// let buttonUps = Array.from(document.getElementsByClassName('fa-angle-up'));
// // console.log(arrays);
// buttonUps.forEach((button)=>{
//     // console.log
//     button.addEventListener('click', (e)=>{
//         // console.log(button.parentElement.parentElement.className);
//     });
// });

document.getElementById('add-player').addEventListener('click',(e)=>{
    playerCount++;
    players.push(new Player);
    // console.log(players);
});

document.getElementsByClassName('fa-dice')[0].addEventListener('click',(e)=>{
    alert(Math.floor((Math.random() * 6) + 1));
    e.preventDefault();
});

document.getElementsByTagName('li')[1].addEventListener('click', (e)=>{
    e.preventDefault();
    if(players){
        players.forEach((player)=>{
            player.level = 1;
            player.power = 0;
            player.updateSummary();
            player.update();
        });
    }
});