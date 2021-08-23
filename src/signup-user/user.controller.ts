import { Body, Controller, Get,Post } from "@nestjs/common";
import { getFileInfo } from "prettier";
import { UserDTO } from "./dto/user-dto.dto";
import { UserSchemaClass } from "./schemas/user-schema.schema";
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

    @Get('userdetails')
    async getAllUsers(): Promise<UserSchemaClass[]> {
        return this.userService.getAllUsers();
    }
}