class MemoryGame {

    constructor(images, blank) {
        this.images = images;
        this.blank = blank;
        this.canClick = true;
    }

    build(div) {
        for (let i = 0; i < this.images.length; i++) {
            div.innerHTML += "<div><a href='#' onclick='retourne(" + i + ");'><img id='" + i + "' src='" + this.blank + "'></a></div>"
        }
    }

    retourne(index) {
        if (!document.getElementById(index).src.endsWith(this.blank) || !this.canClick) return;

        document.getElementById(index).src = this.images[index];

        if (this.lastImage === undefined) this.lastImage = index;
        else {
            if (this.images[this.lastImage] === this.images[index]) this.lastImage = undefined;
            else {
                this.canClick = false;
                setTimeout(() => {
                    document.getElementById(this.lastImage).src = this.blank;
                    document.getElementById(index).src = this.blank;
                    this.lastImage = undefined;
                    this.canClick = true;
                }, 500);

            }
        }
    }

}

function shuffleCards(array) {
    let cards = [];
    for (let i = 0; i < array.length; i++) {
        cards.push(array[i]);
        cards.push(array[i]);
    }
    console.log(cards);
    for (let i = 0; i < cards.length; i++) {
        let j = Math.floor((cards.length - 1) * Math.random());
        let temp = cards[i];
        cards[i] = cards[j];
        cards[j] = temp;
    }
    console.log(cards);
    return cards;
}
