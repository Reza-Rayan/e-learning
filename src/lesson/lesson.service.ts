import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuid } from "uuid";
import { CreateLessonDTO } from './dtos/create-lesson.dto';
import { Lesson } from './lesson.entity';

@Injectable()
export class LessonService {
    constructor(
        @InjectRepository(Lesson) private lessonRepository:Repository<Lesson>
    ){}

     async lessons(){
        const lessons = await  this.lessonRepository.find()

        if(lessons.length===0){
            throw new NotFoundException("There is no lessons")
        }
        return lessons;
    }

    async lesson(id:string){
        const lesson = await this.lessonRepository.findOne({where:{id}})
        if(!lesson){
            throw new NotFoundException("The lesson did'nt found")
        }
        return lesson
    }

    createLesson(createLessonDTO:CreateLessonDTO):Promise<Lesson>{
        const {endDate,startDate,title}= createLessonDTO
        const newLesson = this.lessonRepository.create({
            id:uuid(),
            title,
            startDate,
            endDate
        });
        return this.lessonRepository.save(newLesson)
    }
}
