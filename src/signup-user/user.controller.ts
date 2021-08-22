import { Body, Controller, Get,Post } from "@nestjs/common";
import { UserDTO } from "./dto/user-dto.dto";
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
        this.userService.putUserDetails(gettingUserData)
    }
}