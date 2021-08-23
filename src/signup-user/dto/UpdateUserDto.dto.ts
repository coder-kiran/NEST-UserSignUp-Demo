import {
    IsEmail,  
    IsString,
    Length,
    IsNotEmpty,
    IsOptional,
  } from 'class-validator';
  
  export class UpdateUserDto {

    @IsOptional()
    @IsString()
    @IsNotEmpty()    
    readonly fname: string;

    @IsOptional()  
    @IsString()
    @IsNotEmpty()
    readonly lname: string;
  
    @IsOptional()
    @IsEmail()
    readonly email: string;  
   
    @IsOptional()
    @IsOptional()
    @Length(10)
    readonly phoneno: number;
  }
  