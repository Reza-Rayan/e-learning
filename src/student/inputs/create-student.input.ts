import { Field, InputType } from '@nestjs/graphql';
import { MinLength } from 'class-validator';

@InputType()
export class createStudentInput {
  @MinLength(3)
  @Field()
  firstName: string;

  @MinLength(3)
  @Field()
  lastName: string;
}
