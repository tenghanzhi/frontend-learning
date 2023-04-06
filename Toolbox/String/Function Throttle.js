/**
 * Function throttle
 * @param  {Function} fn: function to execute
 * @param  {number} time: Timestamp
 * @param  {number} interval: interval time
 */
export const debouncer = (fn, time, interval = 200) => {
    if (time - (window.debounceTimestamp || 0) > interval) {
        fn && fn();
        window.debounceTimestamp = time;
    }
}