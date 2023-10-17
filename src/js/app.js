class Character {
    constructor(name, type, health, level, attack, defence){
        this.name = name,
        this.type = type,
        this.health = health,
        this.level = level,
        this.attack = attack,
        this.defence = defence,
    }

}

export default function newCharacters () {
    const characters = [];
    const bowman = new Character('Вася','Bowman', 100, 1, 25, 25);
    const swordsman = new Character('Петя','Swordsman', 100, 1, 40, 10);
    const magician = new Character('Миша','Magician', 100, 1, 10, 40);
    const undead = new Character('Федя','Undead', 100, 1, 25, 25);
    const zombie = new Character('Коля','Zombie', 100, 1, 40, 10);
    const daemon = new Character('Коля','Daemon', 100, 1, 10, 40);
    
    return characters.push(bowman, swordsman, magician, undead, zombie, daemon)
}

newCharacters();