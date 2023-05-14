export type CreatureInfo = {
    index: number,
    name: string,
    description: string,
    rarity: number,
    region: WorldRegion[],
    isAdult: boolean
};

export const creatureInfo: CreatureInfo[] = [
    { // 0
        index: 0,
        name: "풀잎 알",
        description: "이 알에서는 기분 좋은 풀내음이 납니다.",
        rarity: 0,
        region: ["forest"],
        isAdult: false
    },
    {
        index: 1,
        name: "물방울 알",
        description: "",
        rarity: 0,
        region: ["ocean"],
        isAdult: false
    },
    {
        index: 2,
        name: "용암 알",
        description: "",
        rarity: 0,
        region: ["volcano"],
        isAdult: false
    },
    {
        index: 3,
        name: "",
        description: "",
        rarity: 0,
        region: [],
        isAdult: false
    },
];