import options from "../components/Logo/options";

export const useHelpers = () => {
    const formattedArrayForPeopleLeadership = (array, itemsInRow) => {
        const  iterableCounts= +Math.floor(array.length / itemsInRow)
        let newArray = [];
        for(let i = 0; i < iterableCounts; i++) {
            newArray.push({people: array.splice(0, itemsInRow)});
        }
        return newArray;
    }

    return {peopleItemsInRow: (count = 4, array = []) => formattedArrayForPeopleLeadership(count, array)}
}

