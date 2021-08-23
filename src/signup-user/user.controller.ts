import { Body, Controller, Get,Param,ParseIntPipe,Post, Query, Req, Res } from "@nestjs/common";
import { getFileInfo } from "prettier";
import { identity } from "rxjs";
import { UserDTO } from "./dto/user-dto.dto";
import { UserDocument, UserSchemaClass } from "./schemas/user-schema.schema";
import { UserService } from "./user.service";

@Controller('userroute')
export class UserController{
    constructor(private readonly userService: UserService){}
    
    @Get()
    getUserDetails(): string {
        return this.userService.getUserDetails()
    }

    @Post()
    putUserDetails(@Body() gettingUserData: UserDTO) {
       this.userService.putUserDetails(gettingUserData);
    }

    @Get('findall')
    async getAllUsers(@Query('limit',ParseIntPipe) limitvalue): Promise<UserSchemaClass[]> {  
        console.log(limitvalue);
        return this.userService.getAllUsers(limitvalue);

    }

    @Get('findbyid/:id')
    async getUserByID(@Param() params): Promise<UserSchemaClass> {
        console.log(params) // => { id: '612338923988df2f7c47d719' }
        let userid = params.id;
        return this.userService.getUserByID(userid);
    }

    @Get('findby')
    async getUserByConditons(@Query() userQuery): Promise<UserDocument[]> {
        console.log(userQuery);
        
        return this.userService.getUserByConditons(userQuery);
    }
}