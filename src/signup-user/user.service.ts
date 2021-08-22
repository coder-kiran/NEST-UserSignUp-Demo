import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService{

    getUserDetails(): string {
        return 'hello world';
    }
}