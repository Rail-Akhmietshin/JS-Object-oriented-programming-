class EditString {
    constructor(string) {
        this.string = string;
    }

    getLowerCase() {
        return this.string.at(0).toUpperCase() + this.string.slice(1).toLowerCase();
    }

    getNormalText() {
        return this.string.split(" ").filter( item => item != "" ).join(" ")
                          .split(".").map( item => item.trim()).join(". ")
                          .split(",").map( item => item.trim()).join(", ");
    }

    getLengthString() {
        return this.string.length;
    }

    getUniqueWords() {
        let regExp = new RegExp(/([а-яА-Я]+)/gm);
        return this.string.toLowerCase()
                          .match(regExp)
                          .reduce( (unique, word) => {
                                                    if ( word in unique ) {
                                                        unique[word] += 1;
                                                    } else {
                                                        unique[word] = 1;
                                                    }
                                                    return unique;
                                                    }, 
                                                    {});
    }
    
}

// Текст, в котором слово текст несколько раз встречается и слово тоже
let cls = new EditString("Вот пример строки,в которой     используются знаки препинания.После знаков должны стоять пробелы , а перед знаками их быть не должно .    Если есть лишние подряд идущие пробелы, они должны быть устранены.");

//console.log(cls.getLowerCase());

// for (let key in cls.getUniqueWords()) {
//     console.log(key)
// }
console.log(cls.getNormalText());

