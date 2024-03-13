(function () {
  "use strict";

  describe("문자열 다루기 🔠", function () {
    describe("코드 에디터에서 homeworks/4_string.js 파일을 열어주세요.", function () {
      /*
       *
       * 단순히 정답을 맞추는 것이 아닌, 이유를 정확히 아는 것이 가장 중요합니다. 💁🏻‍♂️
       *
       */

      it("문자열 만들기", function () {
        const today = "토요일";
        const result = "나는" + today + "에 일한다!";
        const guess = "나는토요일에 일한다!";

        expect(result).to.equal(guess);
      });

      it("문자열 만들기", function () {
        const today = "토요일";
        const result = `나는 ${today}에 일한다!`;
        const guess = "나는 토요일에 일한다!";

        expect(result).to.equal(guess);
      });

      it("문자열 길이", function () {
        const word = "word";
        const result = `word는 ${word.length}글자입니다.`;
        const guess = "word는 4글자입니다.";

        expect(result).to.equal(guess);
      });

      it("문자열 인덱스", function () {
        const str = "something";
        const result = `${str[0]}${str[3]}${str[1]}`;
        const guess = "seo";

        expect(result).to.equal(guess);
      });

      it("문자열 인덱스", function () {
        const str = "hello world";
        const result = str[100];
        const guess = undefined;

        expect(result).to.equal(guess);
      });

      it("문자열 인덱스", function () {
        const str = "I am a student";
        const result = str[-1];
        const guess = undefined;

        expect(result).to.equal(guess);
      });

      it("문자열 인덱스", function () {
        const str = "I am a student";
        const result = str.indexOf("a");
        const guess = 2;

        expect(result).to.equal(guess);
      });

      it("문자열 소문자 변환", function () {
        const str = "HunGry?";
        const result = str.toLowerCase();
        const guess = "hungry?";

        expect(result).to.equal(guess);
      });

      it("문자열 반복", function () {
        const str = "ha";
        const result = str.repeat(5);
        const guess = "hahahahaha";

        expect(result).to.equal(guess);
      });

      it("문자열 자르기", function () {
        const str = "hello, kenny";
        const result = str.slice(7, 10);
        const guess = "ken";

        expect(result).to.equal(guess);
      });
    });
  });
})();
