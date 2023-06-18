const mongoose = require("mongoose");
const User = require("./User");

mongoose.connect("mongodb://127.0.0.1:27017/crashMongo");

run();
async function run() {
    try {
        // const user = await User.findOne({ name: "Myo" });
        // const user = await User.findByName("Myo");
        // const user = await User.find().byName("Myo");
        // user.sayHi();
        // const user = await User.where().byName("Myo");
        const user = await User.findOne({ name: "Min" });
        // console.log(user.namedEmail);
        // console.log(user);
        // await user.save();
        console.log(user);
    } catch (e) {
        console.log(e.message);
    }
}

// basic query
// run();
// async function run() {
//     try {
//         // const user = await User.findById("648e741ba992f32b1bf230b6");
//         // const user = await User.find({ name: "M" });
//         // const user = await User.findOne({ name: "Myo" });
//         // const user = await User.exists({ name: "Myo" });
//         // await User.deleteOne({ name: "Myo" });
//         // const user = await User.where("age").gt(25).lt(29).where("name").equals("Myo").limit(2).select("age");
//         const user = await User
//             .where("age").gt(27).lt(29)
//             .where("name").equals("Myo")
//             .populate("bestFriend").limit(1);
//         console.log(user);
//     } catch (e) {
//         console.log(e.message);
//     }
// }

// 19
// run();
// async function run() {
//     try {
//         const user = await User.create({
//             name: "Min",
//             age: 28,
//             email: 'min@gmail.com',
//             hobbies: ["Weight Lifting", "Bowling"],
//             address: {
//                 street: "Main street"
//             }
//         });
//         console.log(user);
//     } catch (e) {
//         console.log(e.message);
//     }
// }


// 11
// run();
// async function run() {
//     const user = await User.create({
//         name: "Myo",
//         age: 26,
//         hobbies: ["Weight Lifting", "Bowling"],
//         address: {
//             street: "Main street"
//         }
//     });
//     console.log(user);
// }


// 8 mongoose basic
// run();
// async function run() {
//     const user = await User.create({ name: "Myo", age: 26 });
//     user.name = "Min";
//     console.log(user);
// }


// async function run() {
//     const user = new User({ name: "Myo", age: 26 });
//     await user.save();
//     console.log(user);
// }


// 7
// const user = new User({ name: "Myo", age: 26 });
// user.save().then(() => console.log("User saved"));


// 3
// mongoose.connect("mongodb://127.0.0.1:27017/crashMongo").then(() => {
//     console.log("connected mongoDb with 127.0.0.1:27017");
// }).catch((e) => {
//     console.log(e);
// });


// 1
// console.log("Hello");