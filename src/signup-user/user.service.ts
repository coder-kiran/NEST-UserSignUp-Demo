import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { UserDocument } from "./schemas/user-schema.schema";

@Injectable()
export class UserService{

    // Injecting Model (UserModel) that I have REGISTERED in 'user.module.ts'.
    // 
    constructor(@InjectModel('Usermodel') private readonly uModel: Model<UserDocument> ){}
    getUserDetails(): string {
        return 'hello world';
    }
}