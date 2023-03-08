const updateRemoteStudents = require('../04-update-remote-students/04-update-remote-students');

describe('updateRemoteStudents', () => {
    it('should return a new empty array when passed an empty array', () => {
        expect(updateRemoteStudents([])).toEqual([]);
    });

    it('should not mutate the original array of objects', () => {
        const originalArray = [];

        expect(updateRemoteStudents(originalArray)).not.toBe(originalArray);
    });

    it('should not make any changes to the location property of the object being passed if it has one - SINGLE-OBJECT ARRAY', () => {
        const students = [{ name: 'Hypatia', age: 31, location: 'leeds' }];
        const expected = [{ name: 'Hypatia', age: 31, location: 'leeds' }];

        testUpdateStudents = updateRemoteStudents(students);

        expect(testUpdateStudents).toEqual(expected);
    });

    it('should not make any changes to the location property of the objects being passed if they have one - MULTIPLE-OBJECT ARRAY', () => {
        const students = [{ name: 'Hypatia', age: 31, location: 'leeds' },
        { name: 'Tao', age: 47, location: 'manchester' },
        { name: 'John', age: 25, location: 'leeds' }];
        const expected = [{ name: 'Hypatia', age: 31, location: 'leeds' },
        { name: 'Tao', age: 47, location: 'manchester' },
        { name: 'John', age: 25, location: 'leeds' }];

        testUpdateStudents = updateRemoteStudents(students);

        expect(testUpdateStudents).toEqual(expected);
    });

    it('should add a location property with the value "remote" to the given object if it doesn\'t have one - SINGLE-OBJECT ARRAY', () => {
        const students = [{ name: 'Euler', age: 27 }];
        const expected = [{ name: 'Euler', age: 27, location: 'remote' }];

        testUpdateStudents = updateRemoteStudents(students);

        expect(testUpdateStudents).toEqual(expected);
    });

    it('should add a location property with the value "remote" to the given objects if they don\'t have one whilst keeping the ones that do untouched - MULTIPLE-OBJECT ARRAY', () => {
        const students = [
            { name: 'Hypatia', age: 31, location: 'leeds' },
            { name: 'Ramanujan', age: 22 },
            { name: 'Tao', age: 47, location: 'manchester' }
        ];
        const expected = [
            { name: 'Hypatia', age: 31, location: 'leeds' },
            { name: 'Ramanujan', age: 22, location: 'remote' },
            { name: 'Tao', age: 47, location: 'manchester' }
        ];

        testUpdateStudents = updateRemoteStudents(students);

        expect(testUpdateStudents).toEqual(expected);
    });
});