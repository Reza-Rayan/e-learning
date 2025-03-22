import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { StudentService } from './student.service';
import { StudentType } from './student.type';
import { createStudentInput } from './inputs/create-student.input';

@Resolver()
export class StudentResolver {
  constructor(private readonly studentsService: StudentService) {}

  @Mutation(() => StudentType)
  createStudent(
    @Args('createStudentInput') createStudentInput: createStudentInput,
  ) {
    return this.studentsService.createStudent(createStudentInput);
  }
}
