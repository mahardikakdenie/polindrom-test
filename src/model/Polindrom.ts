import mongoose from "mongoose";

const polindromSchema = new mongoose.Schema({
    sentence: {
        type: String,
        required: true,
    },
    isPolindrom: {
        type: Boolean,
        required: true,
    },
}, {timestamps: true}); // Untuk menambahkan timestamps (createdAt dan updatedAt)

const Polindrom = mongoose.model('Polindrom', polindromSchema);

export default Polindrom;
