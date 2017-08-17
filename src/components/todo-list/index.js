'use strict';
var angular = require('angular');
var template = require('./template.html');
var styles = require('./styles.css');
var globalStyles = require('styles/global.css');
require('components/todo-header');
require('components/todo-item');
require('services/todo-store');

angular
    .module('todos.todo-list', [
        'todos.todo-header',
        'todos.todo-item',
        'todos.todo-store'
    ])
    .directive('todoList', function(todoStore) {
        function link(scope, element, attrs) {
            scope.styles = styles;
            scope.store = todoStore;
            scope.getTodos = function() {
                return todoStore.todos;
            };
            scope.toggleAllCompleted = function() {

            };
        }

        return {
            restrict: 'AE',
            templateUrl: template,
            scope: {},
            link: link
        };
    });
