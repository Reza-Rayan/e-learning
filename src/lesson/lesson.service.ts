import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { CreateLessonInput } from './inputs/create-lesson.input';
import { Lesson } from './lesson.entity';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(Lesson) private lessonRepository: Repository<Lesson>,
  ) {}

  async lesson(id: string) {
    const lesson = await this.lessonRepository.findOne({ where: { id } });
    if (!lesson) {
      throw new NotFoundException("The lesson did'nt found");
    }
    return lesson;
  }

  createLesson(createLessonInput: CreateLessonInput): Promise<Lesson> {
    const { endDate, startDate, title } = createLessonInput;
    const newLesson = this.lessonRepository.create({
      id: uuid(),
      title,
      startDate,
      endDate,
    });
    return this.lessonRepository.save(newLesson);
  }
}
