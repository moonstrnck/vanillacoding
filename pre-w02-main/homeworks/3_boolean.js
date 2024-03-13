(function () {
  "use strict";

  describe("불리언 다루기 🟢 ⚫️", function () {
    describe("코드 에디터에서 homeworks/3_boolean.js 파일을 열어주세요.", function () {
      /*
       *
       * 단순히 정답을 맞추는 것이 아닌, 이유를 정확히 아는 것이 가장 중요합니다. 💁🏻‍♂️
       *
       */

      it("NOT 논리 연산자", function () {
        const result = !false;
        const guess = true;

        expect(result).to.equal(guess);
      });

      it("NOT 논리 연산자", function () {
        const result = !!true;
        const guess = true;

        expect(result).to.equal(guess);
      });

      it("Truthy/Falsy 판별", function () {
        const result = Boolean(NaN);
        const guess = false;

        expect(result).to.equal(guess);
      });

      it("Truthy/Falsy 판별", function () {
        const result = Boolean(undefined + 20);
        const guess = false;

        expect(result).to.equal(guess);
      });

      it("Truthy/Falsy 판별", function () {
        const result = Boolean("hello");
        const guess = true;

        expect(result).to.equal(guess);
      });

      it("Truthy/Falsy 판별", function () {
        const result = Boolean("   ");
        const guess = true;

        expect(result).to.equal(guess);
      });

      it("Truthy/Falsy 판별", function () {
        const result = Boolean("");
        const guess = false;

        expect(result).to.equal(guess);
      });

      it("Truthy/Falsy 판별", function () {
        const result = Boolean(-0);
        const guess = false;

        expect(result).to.equal(guess);
      });

      it("Truthy/Falsy 판별", function () {
        const result = Boolean("null"); // 문자열
        const guess = true;

        expect(result).to.equal(guess);
      });

      it("Truthy/Falsy 판별", function () {
        const result = Boolean(null);
        const guess = false;

        expect(result).to.equal(guess);
      });
    });
  });
})();
