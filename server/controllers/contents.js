import Content from '../model/contents';

export const getAllContents = async () => {
    try {
        return await Content.find({});
    } catch (error) {
        throw error;
    }
};

export const saveContent = async ({ title, content, tags }) => {
    try {
        const contentNew = await new Content({ title, content, tags }).save();

        return contentNew;
    } catch (error) {
        throw error;
    }
};
