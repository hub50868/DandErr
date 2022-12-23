var documentCard = /** @class */ (function () {
    function documentCard(title, contents) {
        this.title = title;
        this.contents = contents;
        console.log(this.contents);
    }
    Object.defineProperty(documentCard.prototype, "length", {
        get: function () {
            console.info("For each is running");
            return this.contents.length;
        },
        enumerable: false,
        configurable: true
    });
    return documentCard;
}());
//# sourceMappingURL=documentCard.js.map