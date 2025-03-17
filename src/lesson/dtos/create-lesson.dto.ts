import { IsNotEmpty } from "class-validator";

export class CreateLessonDTO{
    @IsNotEmpty()
    title: string;


    @IsNotEmpty()
    startDate: string;


    @IsNotEmpty()
    endDate: string;
};
