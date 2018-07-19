import Fighter from './fighter';

export default class ImprovedFighter extends Fighter {
    doubleHit(enemy, point: number): void {
        if(enemy && point)
            super.hit(enemy, point * 2);
    }
}