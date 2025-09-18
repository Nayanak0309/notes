import mongoose from 'mongoose';

 export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://nayanaramanth2003_db_user:BEHsMpQtQv5tQqbj@cluster0.q5a0ldj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log("MongoDB connected successfully");
    }
    catch (error) {
        console.error("Error in DB connection", error);
    }
};