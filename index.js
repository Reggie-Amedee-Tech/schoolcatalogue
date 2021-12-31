class School {

    constructor(name, level, numberOfStudents) {
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    }

    get name() {
        return this._name
    }

    get level() {
        return this._level
    }

    get numberOfStudents() {
        return this._numberOfStudents
    }

    set numberOfStudents(students) {
        if (typeof students === number) {
            this._numberOfStudents = number
        } else {
            console.log('Invalid Input: numberOfStudents must be set to a Number.')
        }
    }

    quickFacts() {
        console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`)
    }

    static pickSubstituteTeacher(arr) {
        const result = arr[Math.floor(Math.random() * arr.length)]
        return result
    }
}

class Primary extends School {

    constructor(name, level, numberOfStudents, pickupPolicy) {
        super(name, level, numberOfStudents);
        this._pickupPolicy = pickupPolicy
    }

    get pickupPolicy() {
        return this._pickupPolicy
    }


}

class Middle extends School {

    constructor(name, numberOfStudents) {
        super(name, numberOfStudents);

    }

}

class High extends School {

    constructor(name, level, numberOfStudents, sportsTeams) {
        super(name, level, numberOfStudents);
        this._sportsTeams = sportsTeams
    }

    get sportsTeams() {
        console.log(this._sportsTeams)
    }


}

const lorraineHansbury = new Primary('Lorraine Hansbury', 'Primary', 514, "Students must be picked up by a parent, gaurdian, or a family member ver the age of 13")

const alSmith = new High('Al E. Smith', 'High', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field'])


console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']))

alSmith.sportsTeams


console.log(lorraineHansbury.quickFacts())
























