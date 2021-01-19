class demoqa_homepage {
    open(){
        'https://www.demoqa.com'
    };
    get elements() {return $('.card-body').$('h5=Elements')}
    get textBox() {return $('#item-0')}
    get fullName() {return $('#userName')}
    get email() {return $('#userEmail')}
    get currentAddress() {return $('#currentAddress')}
    get permanentAddress() {return $('#permanentAddress')}
    get submitButton() {return $('#submit')}

    fillTextboxes(fullName, email, cAddress, pAddress) {
        this.fullName.setValue(fullName);
        this.email.setValue(email);
        this.currentAddress.setValue(cAddress);
        this.permanentAddress.setValue(pAddress);
    }
}
module.exports = new demoqa_homepage();