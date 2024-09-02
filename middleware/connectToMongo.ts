import mongoose from "mongoose"

const connectToMongo = (handler : Function) => async (req : Request, res: Response)=>{
    
    const connectionString = process.env.NEXT_PUBLIC_DB_URL;

    if(mongoose.connections[0].readyState){
        return handler(req, res);
    }

    if(!connectionString){
        return Response.json({error : "Connection string not defined"});
    }

    await mongoose.connect(connectionString);
    return handler(req, res);

}

export default connectToMongo;