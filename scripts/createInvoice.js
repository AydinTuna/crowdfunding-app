"use server"
import uploadData from '@/scripts/uploadData'

const createInvoice = async (formData, address) => {
    console.log(address);
    const rawFormData = {
        userAddress: address,
        title: formData.get('title'),
        shortDescription: formData.get('shortDescription'),
        category: formData.get('category'),
        campaignGoal: formData.get('campaignGoal'),
        campaignDescription: formData.get('campaignDescription'),
        fileUrl: formData.get('fileUrl'),
    }
    await uploadData(rawFormData)

    // mutate data
    // revalidate cache
}

export default createInvoice