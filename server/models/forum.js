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
                {
                    title: Schema.Types.String,
                    replies: [

                    ],
                    createdAt: {
                        type: Schema.Types.String
                    },
                }
            ],
            createdAt: {
                type: Schema.Types.String
            },
            totalReplies: Schema.Types.String
    }
);

const Forum = mongoose.model('forum', ForumSchema);



module.exports = Forum;