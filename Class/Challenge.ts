namespace Challenge {
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
            if (this.wordList[word.term] === undefined) {
                this.wordList[word.term] = word.definition;
                return;
            }
            console.log("[단어 추가 실패] 이미 존재하는 단어 입니다.");
        }

        get(word: string) {
            if (this.wordList[word]) {
                return this.wordList[word];
            }
            return "[단어 검색 실패] 입력하신 단어가 존재하지 않습니다.";
        }

        delete(word: string) {
            if (this.wordList[word]) {
                delete this.wordList[word];
                return;
            }
            console.log(
                `[단어 삭제 실패] 입력하신 단어 ${word}가 존재하지 않아 삭제에 실패했습니다.`
            );
            return;
        }

        update(word: Word) {
            if (this.wordList[word.term]) {
                this.wordList[word.term] = word.definition;
                return;
            }
            return "[단어 업데이트 실패] 입력하신 단어가 존재하지 않아 업데이트에 실패했습니다.";
        }

        showAll() {
            const wordCount: number = Object.keys(this.wordList).length;
            console.log("[Dictionary]");
            console.log(
                "--------------------------------------------------------"
            );
            if (wordCount === 0) {
                console.log("저장된 단어가 존재하지 않습니다.");
                return;
            }
            for (const word in this.wordList) {
                console.log(`${word}: ${this.wordList[word]}`);
            }
            console.log(
                "--------------------------------------------------------"
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

        bulkDelete(words: string[]) {
            words.forEach((word) => {
                this.delete(word);
            });
        }
    }
}
