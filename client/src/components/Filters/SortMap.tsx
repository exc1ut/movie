
export const SortMap = () => {

    const sorts =
        ["Top asc", "Top desc",
            "New asc", "New desc",
            "Name asc", "Name desc",
            "Kinopoisk rating", "Imdb rating"];
    const maps = ["top", "-top", "new", "-new", "title", "-title", "-kp", "-imdb"]
    let sortMap = {};
    for (let i = 0; i < sorts.length; i++) {
        sortMap[sorts[i]] = maps[i];
    }
    return sortMap;

}