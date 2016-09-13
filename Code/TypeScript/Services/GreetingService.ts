export interface IGreetingService {
    getGreeting(): string;
}

export class GreetingService implements IGreetingService {
    getGreeting(): string {
        return "Hello from service!";
    }
}