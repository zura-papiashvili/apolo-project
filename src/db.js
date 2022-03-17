
const { connect } = require('mongoose')

const connectDB = async () => {
    try {
        await connect(
          `mongodb+srv://${process.env.MONGO_USER || "zura"}:${
            process.env.MONGO_PASSWORD || "9227b9Ec"
          }@cluster0.ijdva.mongodb.net/${
            process.env.MONGO_DB || "apollo-dev"
          }?retryWrites=true&w=majority`
        );
        console.log('mongodb is connected!');
    } catch (error) {
        throw error
    }
}

module.exports = {connectDB}