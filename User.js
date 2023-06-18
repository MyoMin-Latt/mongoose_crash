const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
    street: String,
    city: String,
})

const userSchema = new mongoose.Schema({
    name: String,
    age: {
        type: Number,
        min: 1,
        max: 100,
        validate: {
            validator: v => v % 2 === 0,
            message: props => `${props.value} is note an event number`,
        }
    },
    email: {
        type: String,
        minLength: 10,
        required: true,
        lowercase: true,
        // uppercase: true,

    },
    createdAt: {
        type: Date,
        immutabe: true,
        default: Date.now(),
    },
    updatedAt: {
        type: Date,
        default: Date.now(),
    },
    bestFriend: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User",
    },
    hobbies: [String],
    address: addressSchema
})

// schema methods
userSchema.methods.sayHi = function () {
    console.log(`Hi! My name is ${this.name}`);
}

userSchema.statics.findByName = function (name) {
    return this.find({ name: new RegExp(name, "i") });
}

userSchema.query.byName = function (name) {
    return this.where({ name: new RegExp(name, "i") });
}

userSchema.virtual('namedEmail').get(function () {
    return `${this.name} < ${this.email} >`;
})

// schema middleware
// userSchema.pre("save", function (next) {
//     this.updatedAt = Date.now();
//     next();
// })

userSchema.pre("save", function (next) {
    this.updatedAt = Date.now();
    throw new Error("Failed in save");
})

userSchema.post("save", function (doc, next) {
    doc.sayHi();
    next();
})

// schema
// const userSchema = new mongoose.Schema({
//     name: String,
//     age: Number,
//     email: String,
//     createdAt: Date,
//     updatedAt: Date,
//     bestFriend: mongoose.SchemaTypes.ObjectId,
//     hobbies: [String],
//     address: addressSchema
// })

// 10
// const userSchema = new mongoose.Schema({
//     name: String,
//     age: Number,
//     email: String,
//     createdAt: Date,
//     updatedAt: Date,
//     bestFriend: mongoose.SchemaTypes.ObjectId,
//     hobbies: [String],
//     address: {
//         street: String,
//         city: String,
//     }
// })


// 8 mongoose basic
// const userSchema = new mongoose.Schema({
//     name: String,
//     age: Number,
// })

module.exports = mongoose.model("User", userSchema);