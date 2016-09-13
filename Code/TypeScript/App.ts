/// <reference path="typings/angularjs/angular.d.ts" />
import * as angular from 'angular';
import { MyController } from "./MyController";

angular.module('Demo', ['Demo.Services'])
    .controller("MyCtrl", MyController);

angular.element(document).ready(() => {
    angular.bootstrap(document, ['Demo']);
});