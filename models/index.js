var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const characterSchema = new Schema ({
    name: {type: String},
    alive: {type: Boolean},
    active: {type: Boolean},
    staticImg: {type: String},
    animatedImg: {type: String},
    cagedImg: {type: String},
    scene: []
});

const Character = mongoose.model("Character", characterSchema);

module.exports = Character;

