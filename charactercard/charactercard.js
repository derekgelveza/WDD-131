const character = {
    name: "Snortleblat",
    level: 1,
    health: 100,

    attack() {
        this.health -= 20;

        if (this.health <= 0) {
            this.health = 0;
            updateStats();
            alert("The character died");
            return;
        }

        updateStats();
    },

    levelUp() {
    if (this.level >= 10){
            alert("Max level reached 10");
            return;
        }
        
        this.level++;
        updateStats();
    }
};

function updateStats() {
    document.querySelector("#level").textContent = character.level;
    document.querySelector("#health").textContent = character.health;
}

// Button listeners
document.querySelector("#attackBtn").addEventListener("click", () => {
    character.attack();
});

document.querySelector("#levelBtn").addEventListener("click", () => {
    character.levelUp();
});
