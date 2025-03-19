function intro() {
    const o1 = {
        fName: 'vishal',
        lName: 'prajapati',
        age: 22,
        get getAge() {
            return this.age;
        },
        set getAge(age) {
            // Ideally, you might want to set this.age to the provided value
            this.age = age;
        }
    };

    o1.dept = 'web';

    const desc_for_one_field = Object.getOwnPropertyDescriptor(o1, 'fName');
    console.log('desc for one field', desc_for_one_field);

    const desc_for_all_fields = Object.getOwnPropertyDescriptors(o1);
    console.log('desc for all fields', desc_for_all_fields);

    // what is the error (this text is now commented out)
}

intro();
