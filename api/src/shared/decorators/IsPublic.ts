/* eslint-disable prettier/prettier */
import { SetMetadata } from '@nestjs/common';

// const IsPublic = () => SetMetadata('IS_PUBLIC', true);

export const IS_PUBLIC_KEY = 'IS_PUBLIC';

export const IsPublic = () => SetMetadata(IS_PUBLIC_KEY, true);
