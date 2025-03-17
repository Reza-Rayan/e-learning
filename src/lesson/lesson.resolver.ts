import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { LessonType } from "./lesson.type";
import { LessonService } from "./lesson.service";

@Resolver(_of=>LessonType)
export class LessonResolver{
    constructor(
        private lessonService: LessonService
    ){}

@Query(returns=>LessonType)
lessons(){
    return  this.lessonService.lessons()
}


@Query(returns=>LessonType)
lesson(
    @Args("id")id: string){
    return  this.lessonService.lesson(id)
}

@Mutation(returns=>LessonType)
createLesson(
    @Args("title") title:string,
    @Args("startDate") startDate:string,
    @Args("endDate") endDate:string,
){
    return this.lessonService.createLesson({title,startDate,endDate})
}
}
