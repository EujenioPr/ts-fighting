import Fighter from './fight/fighter';
import ImprovedFighter from './fight/improvedFighter';
import { fight } from './fight/fight';

var fighter = new Fighter(100, 'Chandler Bing', 1);
var improvedFighter = new ImprovedFighter(120, 'Joey Tribbiani', 1.5);

fight(fighter, improvedFighter, 24, 28, 13, 8, 56, 76);