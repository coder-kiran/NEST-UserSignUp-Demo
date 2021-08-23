import {
    IsEmail,  
    IsString,
    Length,
    IsNotEmpty,
    Contains,
  } from 'class-validator';
  
  export class UpdateUserDto {
    @IsString()
    @IsNotEmpty()    
    readonly fname: string;
  
    @IsString()
    @IsNotEmpty()
    readonly lname: string;
  
    @IsEmail()
    readonly email: string;  
   
  
    @Length(10)
    readonly phoneno: number;
  }
  