import { model, Schema} from 'mongoose';


export const User = model('User',new Schema({email: String}))