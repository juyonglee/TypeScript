class Word {
    constructor(public term: string, public definition: string) {}
}

type WordList = {
    [key: string]: string;
};

class Dict {
    private wordList: WordList;

    constructor() {
        this.wordList = {};
    }

    add(word: Word) {
        if (this.exists(word.term)) {
            this.wordList[word.term] = word.definition;
            return;
        }
        console.log("이미 존재하는 단어입니다.");
    }

    get(word: string) {
        if (this.exists(word)) {
            return this.wordList[word];
        }
        return "입력하신 단어가 존재하지 않습니다.";
    }

    delete(word: string) {
        if (this.exists(word)) {
            const { word, ...rest } = this.wordList;
            return rest;
        }
        console.log("입력하신 단어가 존재하지 않아 삭제에 실패했습니다.");
        return;
    }

    update(word: Word) {
        if (this.exists(word.term)) {
            this.wordList[word.term] = word.definition;
        }
        return "입력하신 단어가 존재하지 않아 업데이트에 실패했습니다.";
    }

    showAll() {
        const wordCount: number = Object.keys(this.wordList).length;
        console.log("[Dictionary]");
        if (wordCount === 0) {
            console.log("저장된 단어가 존재하지 않습니다.");
            return;
        }
        for (const [term, deffinition] of Object.entries(this.wordList)) {
            console.log(`${term}: ${deffinition}`);
        }
        console.log("--------------------------------------------------------");
        console.log(
            `총 ${Object.keys(this.wordList).length}개의 단어가 존재합니다.`
        );
    }

    count() {
        return Object.keys(this.wordList).length;
    }

    upsert(word: Word) {
        this.wordList[word.term] = word.definition;
    }

    exists(word: string) {
        if (this.wordList[word]) {
            console.log(`입력하신 ${word}가 존재합니다.`);
            return true;
        }
        console.log(`입력하신 ${word}가 존재하지 않습니다.`);
        return false;
    }

    bulkAdd(words: Word[]) {
        words.forEach((word) => {
            this.wordList[word.term] = word.definition;
        });
    }

    bulkDelete(words: Word[]) {}
}

const myDictionary = new Dict();
myDictionary.showAll();
