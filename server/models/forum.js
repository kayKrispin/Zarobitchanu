const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const ForumSchema = new Schema({

            title: {
                type: Schema.Types.String
            },
            subTitle: {
                type: Schema.Types.String,
            },
            isSpecial: {
                type: Schema.Types.Boolean,
            },
            topics: [

            ]

    }
);

const Forum = mongoose.model('forum', ForumSchema);



module.exports = Forum;
