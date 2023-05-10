export const eggs = new Array();
const chances = new Array(10, 30);
const prefixes = new Array("반짝이는 ", "찬란한 ", "빛나는 ", "");
const colors = new Array("붉은 ", "푸른 ", "검은 ", "흰 ", "얼룩무늬 ");
const regions = new Array("forest", "ocean");

function makeRarity(rand: number): number {
    let rarity: number = 0;
    chances.forEach((i) => {
        rarity += (i / 100) > rand ? 1 : 0;
    })
    return rarity;
}

function ArrayRandomItem(arr: Array<any>): any {
    return arr[Math.floor(Math.random() * arr.length)]
}

setInterval(() => {
    if (eggs.length < 30) {
        const rarity = makeRarity(Math.random());
        const prefix = rarity == 2 ? ArrayRandomItem(prefixes) : "";
        const name = ArrayRandomItem(colors) + "알";

        eggs.push({
            name: prefix + name,
            rarity: rarity,
            region: ArrayRandomItem(regions)
        });
    }
}, 1000);