(function () {
  "use strict";

  describe("끝판왕 깨기 👑", function () {
    describe("코드 에디터에서 homeworks/5_advanced.js 파일을 열어주세요.", function () {
      /*
       *
       * 단순히 정답을 맞추는 것이 아닌, 이유를 정확히 아는 것이 가장 중요합니다. 💁🏻‍♂️
       *
       */

      it("다른 자료형을 더하는 경우의 형변환", function () {
        const result = 7 + "3"; // String을 만나기 전까지 형변환 x 
        const guess = "73"; // 7 + "3"

        expect(result).to.equal(guess);

        // + 연산자의 형변환 우선순위: Boolan < Number < String  
      });

      it("다른 자료형을 더하는 경우의 형변환", function () {
        const result = "7" + 3; // String을 만나는 순간 형변환 
        const guess = "73"; // "7" + "3"

        expect(result).to.equal(guess);
      });

      it("다른 자료형을 빼는 경우의 형변환", function () {
        const result = "7" - 3; // + 이외의 산술 연산자는 모든 자료형을 Number로 형변환
        const guess = 4; // 7 - 3

        expect(result).to.equal(guess);
      });

      it("||, && 논리 연산자", function () {
        const result = ("0" && 30) || false; // &&은 falsy부터, || truthy 부터
        const guess = 30;

        expect(result).to.equal(guess);
      });

      it("반복문 #1", function () {
        let a = 0;

        for (let i = 0; i < 10; i += 2) {
          a += i;
        }

        const result = a;
        const guess = 20;

        expect(result).to.equal(guess);
      });

      it("반복문 #2", function () {
        const str = "gnidoC allinaV";
        let result = "";

        for (let i = str.length - 1; i >= 0; i--) {
          result += str[i];
        }

        const guess = "Vanilla Coding";

        expect(result).to.equal(guess);
      });

      it("문자열 반복, 자르기, 붙이기", function () {
        const a = "ha".repeat(3); //hahaha
        const b = a.split("a"); // ['h','h','h','']
        const result = b.join(":"); // h:h:h: 
        const guess = 'h:h:h:';
        /*
         * 문자열에서 separator가 등장하면 해당 부분은 삭제되고 남은 문자열이 배열로 반환된다.
         * separator가 등장하지 않거나 생략될 경우, 배열은 원본 문자열을 유일한 원소로 가진다.
         * separator가 빈 문자열일 경우, 원본 문자열의 모든 문자를 원소로 가지는 배열로 변환된다.
         ** separator가 원본 문자열의 처음이나 끝에 등장할 경우 반환되는 배열도 빈 문자열로 시작하거나 끝난다. **
         */
        expect(result).to.equal(guess);
      });

      it("반복문, 조건문", function () {
        let a = 0;

        for (let i = 0; i < 10; i += 2) {
          if (i % 4 === 0) {
            a += i; // 4 + 8
          }
        }

        const result = a;
        const guess = 12;

        expect(result).to.equal(guess);
      });

      it("반복문, 조건문, 논리 연산자", function () {
        let a = 0;

        for (let i = 0; i < 10; i++) {
          if (i % 3 === 0 || i % 4 === 0) {
            a += i; // 3 + 4 + 6 + 8 + 9
          }
        }

        const result = a;
        const guess = 30;

        expect(result).to.equal(guess);
      });

      it("비교 연산자, 연산자 우선순위, 소수점 다루기 (부동 소수점)", function () {
        /*
         * 부동 소수점에 대한 내용과 함께
         * 아래 연산 결과에 대한 자세한 원리를 최대한 정확히 조사해보세요.
         * 
         * 컴퓨터는 모든 데이터를 이진법으로 표현한다. 
         * 이진법을 사용해서 모든 숫자를 정확하게 표현할 수 없다. (십진법도 마찬가지)
         * 컴퓨터에서 실수를 이진수로 표현하는 방법 중 하나가 "부동소수점 방식" (컴퓨터는 항상 효율적으로 메모리를 저장하려고함)
         * IEEE 754 표준에 따라 대부분의 컴퓨터는 실수를 부동소수점 방식으로 표현한다. 
         * 부동소수점 방식은 실수를 부호, 지수, 가수로 표현하는데
         * 실수를 이진수로 변환 후 소수점 왼쪽에 한 자리 숫자만 남도록 소수점을 이동시킨다. (정규화)
         * 이때 이동한 소수점 자릿수를 지수로 표현하고, 정규화된 숫자에서 소수점 오른쪽 부분을 가수로 표현한다.
         * 고정 소수점 방식보다 크고 정밀한 실수 표현이 가능하다.
         */
        const a = 0.1;
        const b = 0.2;
        console.log(0.1 + 0.2) // 0.30000000000000004
        const result = a + b === 0.3; 
        const guess = false;

        expect(result).to.equal(guess);
      });

      it("글자 수 세기", function () {
        /*
         *
         * 지금까지 배운 반복문과 조건문 등을 활용하여
         * 주어진 target 문자열에 "코"라는 글자가 몇 번 나타나는지
         * 총 횟수를 세어 그 결과를 result 변수에 대입해주세요.
         *
         */
        const target = "코바바코바밥바바코코콬바바코코바바코콬밥빱바밥바코바바";
        let result = 0;

        // [시작] 여러분의 로직을 아래에 작성해주세요.
        for (let i = 0; i < target.length; i++) {
          if (target[i] === "코"){
            result++;
          }
        }
        // [끝] 여러분의 로직을 위에 작성해주세요.

        expect(result).to.equal(8);
      });

      it("소수 판별하기", function () {
        /*
         *
         * 지금까지 배운 반복문과 조건문 등을 활용하여
         * 주어진 target 숫자가 1과 자기 자신 만으로만 나누어 떨어지는 소수인지
         * 판별하여 그에 대한 결과를 불리언 형태로 result 변수에 대입해주세요.
         *
         */
        const target = 11;
        let result = false;

        // [시작] 여러분의 로직을 아래에 작성해주세요.
        for (let i = 2; i < target; i++) {
          if (target % i === 0) {
            result = false;
          }else {
            result = true;
          }
        }
        // [끝] 여러분의 로직을 위에 작성해주세요.

        expect(result).to.equal(true);
      });
    });
  });
})();
