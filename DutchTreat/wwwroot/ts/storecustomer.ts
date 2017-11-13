export class StoreCustomer {

    constructor(private firstName: string, private lastName:string) {
    }

    public visists: number = 0;
    private ourName: string;

    public showName() {
        this.firstName + " " + this.lastName;
    }   

}

