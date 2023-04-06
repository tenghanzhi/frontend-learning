var topKFrequent = function (nums, k) {
    const map = new Map()
    nums.forEach(n => {
        map.set(n, map.has(n) ? map.get(n) + 1 : 1);
        console.log(22222, n)
    })

    const list = Array.from(map).sort((a, b) => b[1] - a[1])
    console.log(1111, list);

    return list.slice(0, k).map(a => a[0])
};