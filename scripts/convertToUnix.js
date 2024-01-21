const date = new Date()
const toUnixTime = (year, month, day, hr, min, sec) => {
    const date = new Date(Date.UTC(year, month - 1, day, hr, min, sec));
    return Math.floor(date.getTime() / 1000);
}
console.log(date.getUTCFullYear(), date.getUTCMonth() + 1, date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());
// const unixTimestamp = toUnixTime(date.getFullYear(), date.getMonth() + 1, date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds());
const unixTimestamp = toUnixTime(date.getUTCFullYear(), date.getUTCMonth() + 1, date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());
console.log(unixTimestamp);

// my:     1705843270
// actual: 1705832470