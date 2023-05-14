import { creatureInfo } from './dataTable'

type Creature = {
    infoIndex: number,
    expire: Date,
    isLocked: boolean
}

type OwnedCreature = Omit<Creature, "isLocked"> & { 
    owner: string,
    crack: number,
}

export const creature: Creature[] = new Array();
const chances = new Array(10, 30);

function makeRarity(rand: number): number {
    let rarity: number = 0;
    chances.forEach((i) => {
        rarity += (i / 100) > rand ? 1 : 0;
    })
    return rarity;
}

function ArrayRandomItem<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)]
}

setInterval(() => {
    if (creature.length < 30) {
        const rarity = makeRarity(Math.random());
        const expire = new Date();
        expire.setDate(expire.getDate() + 3);

        creature.push({
            infoIndex: 0,
            expire: expire,
            isLocked: false
        });
    }
}, 1000);