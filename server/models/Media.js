const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mediaSchema = new Schema ({
    title: String ,
    date_of_publication: Date,
    type: {
        type: String,
        enum: ["video", "text", "image", "audio", "music", "pdf"]},
    author: [{first_name: String,
            last_name: String,
            nationality: String}],
    resources: [String],
    preview: String,
    media_text: String,
    media_url: [String],
    description: String,
    duration: Number,
    wine_association: [String]
})

const mediaModel = mongoose.model("Media", mediaSchema);
module.exports = mediaModel ;