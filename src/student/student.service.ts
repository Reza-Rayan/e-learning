import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './student.entity';
import { Repository } from 'typeorm';
import { createStudentInput } from './inputs/create-student.input';
import { v4 as uuid } from 'uuid';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student) private studentsRepository: Repository<Student>,
  ) {}
  //   Create Student
  createStudent(createStudentInput: createStudentInput) {
    const { firstName, lastName } = createStudentInput;
    const student = this.studentsRepository.create({
      id: uuid(),
      firstName,
      lastName,
    });

    return this.studentsRepository.save(student);
  }

  //   Show All Students
  async students() {
    const students = await this.studentsRepository.find();
    if (students.length === 0) {
      throw new NotFoundException('There is not any student');
    }
    return students;
  }

  // Get One Student
  async student(id: string) {
    const student = await this.studentsRepository.findOne({ where: { id } });
    if (!student) {
      throw new NotFoundException("The Student did'not found");
    }
    return student;
  }
}
