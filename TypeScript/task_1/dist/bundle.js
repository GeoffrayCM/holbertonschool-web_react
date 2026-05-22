/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/

var teacher3 = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};
console.log(teacher3);
var director1 = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};
console.log(director1);
var printTeacher = function (firstName, lastName) {
    return "".concat(firstName[0], ". ").concat(lastName);
};
console.log(printTeacher("John", "Doe"));
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return 'Currently working';
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
var student = new StudentClass('John', 'Doe');
console.log(student.displayName());
console.log(student.workOnHomework());

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQVNBLElBQU0sUUFBUSxHQUFZO0lBQ3hCLFNBQVMsRUFBRSxNQUFNO0lBQ2pCLGdCQUFnQixFQUFFLEtBQUs7SUFDdkIsUUFBUSxFQUFFLEtBQUs7SUFDZixRQUFRLEVBQUUsUUFBUTtJQUNsQixRQUFRLEVBQUUsS0FBSztDQUNoQixDQUFDO0FBRUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQU10QixJQUFNLFNBQVMsR0FBYztJQUMzQixTQUFTLEVBQUUsTUFBTTtJQUNqQixRQUFRLEVBQUUsS0FBSztJQUNmLFFBQVEsRUFBRSxRQUFRO0lBQ2xCLGdCQUFnQixFQUFFLElBQUk7SUFDdEIsZUFBZSxFQUFFLEVBQUU7Q0FDcEIsQ0FBQztBQUVGLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7QUFNdkIsSUFBTSxZQUFZLEdBQXlCLFVBQUMsU0FBUyxFQUFFLFFBQVE7SUFDN0QsT0FBTyxVQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsZUFBSyxRQUFRLENBQUUsQ0FBQztBQUN4QyxDQUFDLENBQUM7QUFFRixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztBQVV6QztJQUlFLHNCQUFZLFNBQWlCLEVBQUUsUUFBZ0I7UUFDN0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDM0IsQ0FBQztJQUVELHFDQUFjLEdBQWQ7UUFDRSxPQUFPLG1CQUFtQixDQUFDO0lBQzdCLENBQUM7SUFFRCxrQ0FBVyxHQUFYO1FBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFDSCxtQkFBQztBQUFELENBQUM7QUFFRCxJQUFNLE9BQU8sR0FBRyxJQUFJLFlBQVksQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztBQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvLi9qcy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBUZWFjaGVyIHtcbiAgcmVhZG9ubHkgZmlyc3ROYW1lOiBzdHJpbmc7XG4gIHJlYWRvbmx5IGxhc3ROYW1lOiBzdHJpbmc7XG4gIGZ1bGxUaW1lRW1wbG95ZWU6IGJvb2xlYW47XG4gIHllYXJzT2ZFeHBlcmllbmNlPzogbnVtYmVyO1xuICBsb2NhdGlvbjogc3RyaW5nO1xuICBbcHJvcE5hbWU6IHN0cmluZ106IHVua25vd247XG59XG5cbmNvbnN0IHRlYWNoZXIzOiBUZWFjaGVyID0ge1xuICBmaXJzdE5hbWU6ICdKb2huJyxcbiAgZnVsbFRpbWVFbXBsb3llZTogZmFsc2UsXG4gIGxhc3ROYW1lOiAnRG9lJyxcbiAgbG9jYXRpb246ICdMb25kb24nLFxuICBjb250cmFjdDogZmFsc2UsXG59O1xuXG5jb25zb2xlLmxvZyh0ZWFjaGVyMyk7XG5cbmludGVyZmFjZSBEaXJlY3RvcnMgZXh0ZW5kcyBUZWFjaGVyIHtcbiAgbnVtYmVyT2ZSZXBvcnRzOiBudW1iZXI7XG59XG5cbmNvbnN0IGRpcmVjdG9yMTogRGlyZWN0b3JzID0ge1xuICBmaXJzdE5hbWU6ICdKb2huJyxcbiAgbGFzdE5hbWU6ICdEb2UnLFxuICBsb2NhdGlvbjogJ0xvbmRvbicsXG4gIGZ1bGxUaW1lRW1wbG95ZWU6IHRydWUsXG4gIG51bWJlck9mUmVwb3J0czogMTcsXG59O1xuXG5jb25zb2xlLmxvZyhkaXJlY3RvcjEpO1xuXG5pbnRlcmZhY2UgcHJpbnRUZWFjaGVyRnVuY3Rpb24ge1xuICAoZmlyc3ROYW1lOiBzdHJpbmcsIGxhc3ROYW1lOiBzdHJpbmcpOiBzdHJpbmc7XG59XG5cbmNvbnN0IHByaW50VGVhY2hlcjogcHJpbnRUZWFjaGVyRnVuY3Rpb24gPSAoZmlyc3ROYW1lLCBsYXN0TmFtZSkgPT4ge1xuICByZXR1cm4gYCR7Zmlyc3ROYW1lWzBdfS4gJHtsYXN0TmFtZX1gO1xufTtcblxuY29uc29sZS5sb2cocHJpbnRUZWFjaGVyKFwiSm9oblwiLCBcIkRvZVwiKSk7XG5pbnRlcmZhY2UgU3R1ZGVudENvbnN0cnVjdG9yIHtcbiAgbmV3IChmaXJzdE5hbWU6IHN0cmluZywgbGFzdE5hbWU6IHN0cmluZyk6IFN0dWRlbnRDbGFzc0ludGVyZmFjZTtcbn1cblxuaW50ZXJmYWNlIFN0dWRlbnRDbGFzc0ludGVyZmFjZSB7XG4gIHdvcmtPbkhvbWV3b3JrKCk6IHN0cmluZztcbiAgZGlzcGxheU5hbWUoKTogc3RyaW5nO1xufVxuXG5jbGFzcyBTdHVkZW50Q2xhc3MgaW1wbGVtZW50cyBTdHVkZW50Q2xhc3NJbnRlcmZhY2Uge1xuICBmaXJzdE5hbWU6IHN0cmluZztcbiAgbGFzdE5hbWU6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihmaXJzdE5hbWU6IHN0cmluZywgbGFzdE5hbWU6IHN0cmluZykge1xuICAgIHRoaXMuZmlyc3ROYW1lID0gZmlyc3ROYW1lO1xuICAgIHRoaXMubGFzdE5hbWUgPSBsYXN0TmFtZTtcbiAgfVxuXG4gIHdvcmtPbkhvbWV3b3JrKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICdDdXJyZW50bHkgd29ya2luZyc7XG4gIH1cblxuICBkaXNwbGF5TmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmZpcnN0TmFtZTtcbiAgfVxufVxuXG5jb25zdCBzdHVkZW50ID0gbmV3IFN0dWRlbnRDbGFzcygnSm9obicsICdEb2UnKTtcbmNvbnNvbGUubG9nKHN0dWRlbnQuZGlzcGxheU5hbWUoKSk7XG5jb25zb2xlLmxvZyhzdHVkZW50LndvcmtPbkhvbWV3b3JrKCkpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9