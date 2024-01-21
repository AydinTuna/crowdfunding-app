"use server"
import fs from "fs"

const uploadData = async (formData) => {
    let jsonData
    try {
        const data = fs.readFileSync('db/db.json', 'utf-8');
        jsonData = data.trim() === '' ? {} : JSON.parse(data);
    } catch (error) {
        console.error(`Error occurred while reading file: ${error}`);
    }

    const defaultValues = {
        totalBackers: 0
    };
    const newCampaign = {

        id: 11, // Mock data
        title: formData.title || 'Default Title',
        shortDescription: formData.shortDescription || 'Default Short Description',
        category: formData.category || 'Default Category',
        campaignDate: formData.campaignDate || '2024-12-31',
        campaignGoal: parseInt(formData.campaignGoal) || 0,
        campaignDescription: formData.campaignDescription || 'Default Campaign Description',
        fileUrl: formData.fileUrl || '/uploads/default.jpg',
        totalBackers: defaultValues.totalBackers,
        startDate: "1705843270",
        endDate: "1705943270",
        txReceipt: formData.txReceipt
    };

    jsonData[formData.userAddress] = newCampaign
    const formattedJson = JSON.stringify(jsonData, null, 3);


    fs.writeFile("db/db.json", formattedJson, (error) => {
        if (error) {
            console.error(error);
            throw error;
        }

        console.log("data.json written correctly");
    });

}

export default uploadData