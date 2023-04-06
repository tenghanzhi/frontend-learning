var twoSum = function (nums, target) {
    const num = new Map()
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i]
        if (num.has(diff)) return [i, num.get(diff)]
        num.set(nums[i], i)
    }
};