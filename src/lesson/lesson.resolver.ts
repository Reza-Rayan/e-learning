import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LessonType } from './lesson.type';
import { LessonService } from './lesson.service';
import { CreateLessonInput } from './inputs/create-lesson.input';

@Resolver((_of) => LessonType)
export class LessonResolver {
  constructor(private lessonService: LessonService) {}

  @Query(() => [LessonType])
  async lessons() {
    return await this.lessonService.getLessons();
  }

  @Query(() => LessonType)
  lesson(@Args('id') id: string) {
    return this.lessonService.lesson(id);
  }

  @Mutation(() => LessonType)
  createLesson(
    @Args('createLessonInput') createLessonInput: CreateLessonInput,
  ) {
    return this.lessonService.createLesson(createLessonInput);
  }
}
