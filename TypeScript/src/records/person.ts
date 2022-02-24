
class Person {
	firstName: string;
	lastName: string;
	phoneNumber: string;
	zipCode: string;
	state: string;
	gender: string

	constructor(firstName: string, lastName: string, phoneNumber: string, zipCode: string, state: string, gender: string) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.phoneNumber = phoneNumber;
		this.zipCode = zipCode;
		this.state = state;
		this.gender = gender;
	}

	public equals(other: Person): boolean {
		return this.firstName === other.firstName && this.lastName === other.lastName && this.phoneNumber === other.phoneNumber
			&& this.zipCode === other.zipCode && this.state === other.state && this.gender === other.gender;
	}
}