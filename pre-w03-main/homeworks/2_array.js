(function () {
  "use strict";

  describe("배열 다루기 📶", function () {
    describe("코드 에디터에서 homeworks/2_array.js 파일을 열어주세요.", function () {
      /*
       *
       * 단순히 정답을 맞추는 것이 아닌, 이유를 정확히 아는 것이 가장 중요합니다. 💁🏻‍♂️
       *
       */

      it("배열 만들기 #1", function () {
        const result = [1, 2, 3];
        const guess = [1, 2, 3];

        expect(result).to.eql(guess);
      });

      it("배열 비우기 #2", function () {
        const result = [];

        let guess = [1, 2, 3];
        guess = [];

        expect(result).to.eql(guess);
      });

      it("배열 비우기 #3", function () {
        const result = [];

        const guess = [1, 2, 3];
        guess.length = 0;

        expect(result).to.eql(guess);
      });

      it("배열 비우기 #4", function () {
        const result = [];

        const guess = [1, 2, 3];
        guess.splice(0, guess.length);

        expect(result).to.eql(guess);

        // splice() 메서드는 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경한다. 
        // arry.splice(시작 인덱스, 제거할 요소의 수, 추가할 요소)
        // splice : 겹쳐 잇다
      });

      it("배열 요소 추가하기", function () {
        const result = [1, 2, 3, 4];

        const guess = [1, 2, 3];
        guess.push(4);

        expect(result).to.eql(guess);
      });

      it("배열 요소 추가하기", function () {
        const result = [1, 2, 3];
        result.unshift(5);

        const guess = [5, 1, 2, 3];

        expect(result).to.eql(guess);
      });

      it("배열 요소 제거하기", function () {
        const result = [1, 2, 3];
        result.pop();

        const guess = [1, 2];

        expect(result).to.eql(guess);

        // pop() 메서드는 배열에서 마지막 요소를 제거하고 그 요소를 반환한다.
      });

      it("배열 요소 제거하기", function () {
        const result = [1, 2, 3];
        result.shift();

        const guess = [2, 3];

        expect(result).to.eql(guess);

        // shift() 메서드는 배열에서 첫 번째 요소를 제거하고, 제거된 요소를 반환한다.
      });

      it("배열에서 원하는 요소 인덱스 찾기", function () {
        const arr = [1, 2, 3, 4, 5, 2, 10, 13, 2];
        const result = arr.indexOf(2, 2); // 2번 인덱스부터 요소 2 찾기
        const guess = 5;

        expect(result).to.eql(guess);

        // indexOf() 메서드는 배열에서 주어진 요소를 찾을 수 있는 첫 번째 인덱스를 반환하고, 찾을 수 없는 경우 -1을 반환
      });

      it("배열에서 원하는 요소 찾기", function () {
        const arr = [1, 2, 3, 4, 5, 2, 10, 13, 2];
        const result = arr.includes(2, 2); // 2번 인덱스부터 요소 2가 있는지 없는지
        const guess = true;

        expect(result).to.eql(guess);

        // includes() 메서드는 배열의 항목에서 특정 값이 포함되어 있는 지를 판단하여 적절히 true 또는 false를 반환
      });

      it("배열 합치기", function () {
        const arr1 = [1, 2, 3];
        const arr2 = [1, 4, 2];
        const result = arr1.concat(arr2);

        const guess = [1, 2, 3, 1, 4, 2];

        expect(result).to.eql(guess);

        // concat() 메서드는 두 개 이상의 배열을 병합하는 데 사용된다. 기존 배열을 변경하지 않고, 새 배열을 반환
      });

      it("배열 여부 확인하기", function () {
        const arr = [1, 2, 3];
        const result = Array.isArray(arr);
        const guess = true;

        expect(result).to.eql(guess);

        // isArray() 정적 메서드는 전달된 값이 Array인지 판단 
      });

      it("배열 요소 문자열로 만들기", function () {
        const arr = ["010", 1234, 5678];
        const result = arr.join("-");

        const guess = "010-1234-5678";

        expect(result).to.eql(guess);

        // join() 메서드는 배열의 모든 요소를 쉼표나 지정된 구분 "문자열"로 구분하여 연결한 새 문자열을 만들어 반환
        // 배열에 항목이 하나만 있는 경우, 해당 항목은 구분 기호를 사용하지 않고 반환
      });

      it("배열 뒤집기", function () {
        const arr = ["셋", "둘", "하나"];
        const result = arr.reverse();

        const guess = ["하나", "둘", "셋"];

        expect(result).to.eql(guess);

        // reverse() 메서드는 배열의 순서를 반전한다. 
        // 첫 번째 요소는 마지막 요소가 되며, 마지막 요소는 첫 번째 요소가 된다.
      });
    });
  });
})();
