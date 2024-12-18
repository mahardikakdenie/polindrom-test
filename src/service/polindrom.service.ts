import Polindrom from '../model/Polindrom';

export const createPolindrom = async (sentence: string) => {
	try {
		const cleanedSentence = sentence.replace(/\s+/g, '').toLowerCase();
		const isPolindrom =
			cleanedSentence === cleanedSentence.split('').reverse().join('');
		const polindrom = await Polindrom.create({
			sentence,
			isPolindrom: isPolindrom ? true : false,
		});
        console.log("🚀 ~ createPolindrom ~ polindrom:", polindrom)
        
		return polindrom;
	} catch (error) {
		console.error('Error in deletePolindrom:', error);
		throw new Error(
			`Failed to delete polindrom: ${
				error instanceof Error ? error.message : String(error)
			}`
		);
	}
};

export const getAllPolindroms = async () => {
	try {
		const polindroms = await Polindrom.find();
		return polindroms;
	} catch (error) {
		console.error('Error in deletePolindrom:', error);
		throw new Error(
			`Failed to delete polindrom: ${
				error instanceof Error ? error.message : String(error)
			}`
		);
	}
};

export const getPolindromById = async (id: string) => {
	try {
		const polindrom = await Polindrom.findById(id);
		if (!polindrom) {
			throw new Error('Polindrom not found');
		}
		return polindrom;
	} catch (error) {
		console.error('Error in deletePolindrom:', error);
		throw new Error(
			`Failed to delete polindrom: ${
				error instanceof Error ? error.message : String(error)
			}`
		);
	}
};

export const updatePolindrom = async (id: string, sentence: string) => {
	try {
		const cleanedSentence = sentence.replace(/\s+/g, '').toLowerCase();
		const isPolindrom =
			cleanedSentence === cleanedSentence.split('').reverse().join('');
		const updatedPolindrom = await Polindrom.findByIdAndUpdate(
			id,
			{ sentence, isPolindrom: isPolindrom ? 'true' : 'false' },
			{ new: true }
		);
		if (!updatedPolindrom) {
			throw new Error('Polindrom not found');
		}
		return updatedPolindrom;
	} catch (error) {
		console.error('Error in deletePolindrom:', error);
		throw new Error(
			`Failed to delete polindrom: ${
				error instanceof Error ? error.message : String(error)
			}`
		);
	}
};

export const deletePolindrom = async (id: string) => {
	try {
		const deletedPolindrom = await Polindrom.findByIdAndDelete(id);
		if (!deletedPolindrom) {
			throw new Error('Polindrom not found');
		}
		return deletedPolindrom;
	} catch (error) {
		console.error('Error in deletePolindrom:', error);
		throw new Error(
			`Failed to delete polindrom: ${
				error instanceof Error ? error.message : String(error)
			}`
		);
	}
};
