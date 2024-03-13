(function () {
  "use strict";

  describe("[연습게임] 과제방식 맛보기 🍽️", function () {
    describe("코드 에디터에서 homeworks/1_practice.js 파일을 열어주세요.", function () {
      it("모르는 문법은 크게 신경쓰지 않아도 됩니다. 하나의 테스트 시작과 끝 지점 내에 있는 내용에만 집중하세요.", function () {
        /*   하나의 테스트 시작 지점   */
        const result = 1;
        const guess = 1;

        expect(result).to.equal(guess);
        /*   하나의 테스트 끝 지점     */
      });

      it("`result` 변수에 할당되고 있는 연산 구문의 '최종 결과값'을 유추하여 `guess` 변수에 대입해주세요.", function () {
        /*   하나의 테스트 시작 지점   */

        // `result` 변수에는 1 + 1이 할당되고 있습니다.
        // 1 + 1 연산의 최종 결과값은 2입니다.
        // 그러므로 '바코'를 지우고 2를 입력합니다.
        // 그 후, 과제 HTML 페이지를 새로고침 하고 테스트가 통과되는지 확인합니다.
        const result = 1 + 1;
        const guess = 2;

        expect(result).to.equal(guess);

        /*   하나의 테스트 끝 지점     */
      });

      it("위와 동일하게, `result`에 할당되는 연산 구문의 결과값을 유추하여 `guess` 변수에 대입해주세요.", function () {
        // 7 < 5 연산의 결과는 `false입니다. 그러므로 '바코'를 지우고 false를 입력합니다.
        // 그 후, 과제 HTML 페이지를 새로고침 하고 테스트가 통과되는지 확인합니다.
        const result = 7 < 5;
        const guess = false;

        expect(result).to.equal(guess);
      });
    });
  });
})();
