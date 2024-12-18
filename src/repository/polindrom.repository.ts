import Polindrom from "../model/Polindrom";

// CREATE - Menambahkan data baru
export const createPolindrom = async (sentence: string) => {
    try {
        // Mengecek apakah kalimat adalah palindrom
        const normalized = sentence.replace(/\s+/g, '').toLowerCase();
        const isPolindrom = normalized === normalized.split('').reverse().join('');

        // Membuat entri baru
        const newPolindrom = new Polindrom({
            sentence,
            isPolindrom: isPolindrom ? 'true' : 'false',
        });

        // Menyimpan ke database
        await newPolindrom.save();
        return newPolindrom;
    } catch (error) {
        console.error('Error in createPolindrom:', error);
        throw new Error(`Failed to create polindrom: ${error instanceof Error ? error.message : String(error)}`);
    }
};

// READ - Mendapatkan semua data
export const getAllPolindroms = async () => {
    try {
        const data = await Polindrom.find({});
        return data;
    } catch (error) {
        console.error('Error in getAllPolindroms:', error);
        throw new Error(`Failed to fetch polindroms: ${error instanceof Error ? error.message : String(error)}`);
    }
};

// READ - Mendapatkan satu data berdasarkan ID
export const getPolindromById = async (id: string) => {
    try {
        const data = await Polindrom.findById(id);
        if (!data) throw new Error('Polindrom not found');
        return data;
    } catch (error) {
        console.error('Error in getPolindromById:', error);
        throw new Error(`Failed to fetch polindrom by ID: ${error instanceof Error ? error.message : String(error)}`);
    }
};

// UPDATE - Mengupdate data berdasarkan ID
export const updatePolindrom = async (id: string, updatedSentence: any) => {
    try {
        // Mengecek apakah kalimat yang diperbarui adalah palindrom
        const normalized = updatedSentence.replace(/\s+/g, '').toLowerCase();
        const isPolindrom = normalized === normalized.split('').reverse().join('');

        const updatedPolindrom = await Polindrom.findByIdAndUpdate(
            id,
            { sentence: updatedSentence, isPolindrom: isPolindrom ? 'true' : 'false' },
            { new: true, runValidators: true } // Mengembalikan dokumen yang diperbarui
        );

        if (!updatedPolindrom) throw new Error('Polindrom not found');
        return updatedPolindrom;
    } catch (error) {
        console.error('Error in updatePolindrom:', error);
        throw new Error(`Failed to update polindrom: ${error instanceof Error ? error.message : String(error)}`);
    }
};

// DELETE - Menghapus data berdasarkan ID
export const deletePolindrom = async (id: string) => {
    try {
        const deletedPolindrom = await Polindrom.findByIdAndDelete(id);
        if (!deletedPolindrom) throw new Error('Polindrom not found');
        return deletedPolindrom;
    } catch (error) {
        console.error('Error in deletePolindrom:', error);
        throw new Error(`Failed to delete polindrom: ${error instanceof Error ? error.message : String(error)}`);
    }
};
