import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FetchUserDto } from './dto/FetchUsersDto.dto';
import { UserDocument, UserSchemaClass } from './schemas/user-schema.schema';

@Injectable()
export class UserService {
  // Injecting Model (UserModel) that I have REGISTERED in 'user.module.ts'.
  //
  constructor(
    @InjectModel('Usermodel') private readonly uModel: Model<UserDocument>,
  ) {}

  getUserDetails(): string {
    return 'hello world';
  }

  async putUserDetails(gettingUserData): Promise<UserSchemaClass> {
    // If we do this
    // gettingUserData.save()
    // error gettingUserData.save() is not a function.
    // coz those functions are not for DTO's.It's for models.

    console.log(gettingUserData);
    /*
        output => :
        {
         fname: 'Kiran',
         lname: 'K K',
         email: 'KK@gmail.com',
         password: 'kiran1234',
         phoneno: '12345678'
        } 
        */

    // converting DTO to Model. So we can get dedicated functions
    // like Model.save(),delete()..etc
    const userDataToModel = new this.uModel(gettingUserData);
    console.log(userDataToModel);
    /*
        output => :
        {
         _id: 61224260bc150c2830bee891, 
         fname: 'Kiran',
         lname: 'K K',
         email: 'KK@gmail.com',
         password: 'kiran1234',
         phoneno: '12345678'
        } 
        */
    return userDataToModel.save();
  }

  // Fetching details of all users in db
  async getAllUsers(limitvalue): Promise<FetchUserDto[]> {
    
    return this.uModel.find({}).limit(limitvalue);
  }

  // Fetching user by his id
  async getUserByID(userid): Promise<UserSchemaClass> {
    return this.uModel.findById(userid);
  }

  // Fetch user by certain conditions
  async getUserByConditons(userQuery): Promise<UserDocument[]> {
    // return this.uModel.find({fname:"sunil",lname:"sunil"},{lname:"kumar",password:"dd@#11f"})
    return this.uModel.find({
      ...userQuery
    });
  }
}
