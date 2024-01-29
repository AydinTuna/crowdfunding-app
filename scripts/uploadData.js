"use server"
import fs from "fs"

const uploadData = async (formData) => {
    let jsonData = { campaigns: [] }
    try {
        const data = fs.readFileSync('db/db.json', 'utf-8');
        jsonData = data.trim() === '' ? { campaigns: [] } : JSON.parse(data);
    } catch (error) {
        console.error(`Error occurred while reading file: ${error}`);
    }

    const defaultValues = {
        totalBackers: 0
    };
    const newCampaign = {
        id: jsonData.campaigns.length + 1,
        userAddress: formData.userAddress || "",
        title: formData.title || 'Default Title',
        shortDescription: formData.shortDescription || 'Default Short Description',
        category: formData.category || 'Default Category',
        campaignDate: formData.campaignDate || '2024-12-31',
        campaignGoal: parseInt(formData.campaignGoal) || 0,
        campaignDescription: formData.campaignDescription || 'Default Campaign Description',
        totalPledged: 0,
        fileUrl: formData.fileUrl.name || '/uploads/default.jpg',
        totalBackers: defaultValues.totalBackers,
        startDate: formData.startDate,
        endDate: formData.endDate,
        txReceipt: formData.txReceipt
    };

    jsonData.campaigns.push(newCampaign)
    const formattedJson = JSON.stringify(jsonData, null, 3);

    fs.writeFile("db/db.json", formattedJson, (error) => {
        if (error) {
            console.error(error);
            throw error;
        }

        console.log("data.json written correctly");
        console.log("TX:", formData.txReceipt.transactionHash);
    });

}

export default uploadData