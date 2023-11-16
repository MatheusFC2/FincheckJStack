/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class AuthenticateDto {
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  // Caso queira alterar o texto quando e feito uma req @IsString({ mensage: "texto em portugues"} )
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  password: string;
}
