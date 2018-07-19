import { IFighter } from './fighter';

export async function fight(fighter : IFighter, improvedFighter : IFighter, ...points: Array<number>): Promise<void> {
    let hits = points;

    for(let i = 0; i < hits.length; i++) {
        if(i % 2 === 0)
            fighter.hit(improvedFighter, hits[i]);
        else
            improvedFighter.hit(fighter, hits[i]);

            // console.log('Hit value:', hits[i]);
            // console.log(`${fighter.name} health:`, fighter.health, `${improvedFighter.name} health:`, improvedFighter.health);
        
        if (fighter.health <= 0) {

            console.log(`${fighter.name} is in knockout!`);
            await fighter.knockout();
            console.log(
                `${fighter.name} lose the battle!`,
                `${improvedFighter.name} won!`
            );

            break;
        } else if (improvedFighter.health <= 0) {

            console.log(`${improvedFighter.name} is in knockout!`);
            await improvedFighter.knockout();
            console.log(
                `${improvedFighter.name} lose the battle!`,
                `${fighter.name} won!`
            );
            break;

        }
    }
}