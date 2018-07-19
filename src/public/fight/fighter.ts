export interface IFighter {
    health: number;
    name: string;
    power: number;
    setDamage(damage: number) : void;
    hit(enemy: IFighter, point:number): void;
    knockout() : Promise<void>;
}

export default class Fighter {
    health: number;
    name: string;
    power: number;

    constructor(health: number, name: string, power: number) {
        this.health = health;
        this.name = name;
        this.power = power;
    }

    setDamage(damage: number): void {
        if(damage)
            this.health = this.health - damage;
    }

    hit(enemy, point: number): void {
        if(enemy && point)
            enemy.setDamage(point * this.power);
    }

    knockout(): Promise<void> {
        return new Promise(res => {
            setTimeout(() => {
                console.log('Time is over');
                res();
            }, 500);
        });
    }
}