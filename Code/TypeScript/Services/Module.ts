/// <reference path="../typings/angularjs/angular.d.ts" />
import * as angular from 'angular';
import { GreetingService } from './GreetingService'

angular.module('Demo.Services', [])
    .service('greetingService', GreetingService);
