"use server"
const fs = require("fs-extra");

export const readJsonData = () => {
    let jsonData
    try {
        const data = fs.readFileSync('db/db.json', 'utf-8');
        jsonData = JSON.parse(data);
    } catch (error) {
        console.error(`Error occurred while reading file: ${error}`);
    }
    console.log("JSON DATA:", jsonData);
    return jsonData
}