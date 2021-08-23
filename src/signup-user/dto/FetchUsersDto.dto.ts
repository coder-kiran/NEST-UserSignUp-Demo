import {
    IsEmail,  
    IsString,
    Length,
    IsNotEmpty,
  } from 'class-validator';
  
  export class FetchUserDto {
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
  