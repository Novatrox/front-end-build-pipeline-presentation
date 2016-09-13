import { IGreetingService } from './Services/GreetingService';

export class MyController {
    //@ngInject
    constructor(greetingService: IGreetingService) {
        this.greeting = greetingService.getGreeting();
    }

    greeting:string;
}