class documentCard{
    title: string;
    contents: string;

    get length() {

        console.info("For each is running");
        
        return this.contents.length;
        
        
    }

    constructor(title: string, contents: string) {
        this.title = title;
        this.contents = contents;

        console.log(this.contents)
    }
}