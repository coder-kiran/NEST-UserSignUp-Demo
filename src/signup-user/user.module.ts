import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UserSchema, UserSchemaClass } from "./schemas/user-schema.schema";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";

@Module({
    imports: [

        // registering Models.
        // forFeature() method helps to configure the module,
        // including defining which models should be
        // registered in the current scope.

        // Here I created a model 'UserModel' with shape UserSchema.
        // And also registered

        MongooseModule.forFeature([{name:'Usermodel' , schema: UserSchema}])
    ],
    controllers: [UserController],
    providers: [UserService]
})
 
export class UserModule {}