(function () {
  "use strict";

  describe("숫자 다루기 🎲", function () {
    describe("코드 에디터에서 homeworks/2_number.js 파일을 열어주세요.", function () {
      /*
       *
       * 단순히 정답을 맞추는 것이 아닌, 이유를 정확히 아는 것이 가장 중요합니다. 💁🏻‍♂️
       *
       */

      it("나머지 연산자", function () {
        const result = 10 % 2;
        const guess = 1;

        expect(result).to.equal(guess);
      });

      it("나머지 연산자, 대입 연산자, 후위 증감 연산자", function () {
        let a = 10 % 3;
        const result = a++;
        const guess = 바코;

        expect(result).to.equal(guess);
      });

      it("나머지 연산자, 대입 연산자, 전위 증감 연산자", function () {
        let a = 10 % 3;
        const result = ++a;
        const guess = 바코;

        expect(result).to.equal(guess);
      });

      it("나머지 연산자, 산술 대입 연산자, 전위 증감 연산자", function () {
        let a = 10;
        a -= 5;

        const result = ++a;
        const guess = 바코;

        expect(result).to.equal(guess);
      });

      it("나머지 연산자, 산술 대입 연산자, 비교 연산자", function () {
        let a = 10;
        a = a / 5;

        const result = a > 2;
        const guess = 바코;

        expect(result).to.equal(guess);
      });

      it("나머지 연산자, 대입 연산자, 숫자 변환", function () {
        const a = "2";
        const result = Number(a);
        const guess = 바코;

        expect(result).to.equal(guess);
      });

      it("NOT 논리 연산자", function () {
        const a = 45;
        const result = !a;
        const guess = 바코;

        expect(result).to.equal(guess);
      });

      it("NOT 논리 연산자", function () {
        const a = 45;
        const result = !!a;
        const guess = 바코;

        expect(result).to.equal(guess);
      });

      it("NOT 논리 연산자", function () {
        const a = 0;
        const result = !!a;
        const guess = 바코;

        expect(result).to.equal(guess);
      });

      it("NOT 논리 연산자", function () {
        const a = -0;
        const result = !!a;
        const guess = 바코;

        expect(result).to.equal(guess);
      });

      it("&& 논리 연산자", function () {
        const result = 30 && 0;
        const guess = 바코;

        expect(result).to.equal(guess);
      });

      it("&& 논리 연산자", function () {
        const result = 0 && 10;
        const guess = 바코;

        expect(result).to.equal(guess);
      });

      it("|| 논리 연산자", function () {
        const result = 7 || 3;
        const guess = 바코;

        expect(result).to.equal(guess);
      });

      it("|| 논리 연산자", function () {
        const result = NaN || 3;
        const guess = 바코;

        expect(result).to.equal(guess);
      });

      it("||, && 논리 연산자", function () {
        const result = 7 || (3 && 10);
        const guess = 바코;

        expect(result).to.equal(guess);
      });
    });
  });
})();
