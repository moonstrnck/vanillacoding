(function () {
  "use strict";

  describe("끝판왕 깨기 👑", function () {
    describe("코드 에디터에서 homeworks/5_advanced.js 파일을 열어주세요.", function () {
      /*
       *
       * 단순히 정답을 맞추는 것이 아닌, 이유를 정확히 아는 것이 가장 중요합니다. 💁🏻‍♂️
       *
       */

      it("객체의 동적 키값 다루기", function () {
        const puzzle = {}; // 객체

        function sayHello(num) {
          return num + 2;
        }

        puzzle[sayHello(1)] = 1; // puzzle[3] = 1;
        puzzle[sayHello(2)] = 2; // puzzle[4] = 2;

        const result = puzzle;
        const guess = {
          '3': 1,
          '4': 2
        };

        expect(result).to.eql(guess);
      });

      it("중첩된 객체 다루기", function () {
        const student = {
          name: "jj",
          age: 20,
          grades: {
            math: 70,
            science: 85,
            history: 92,
          },
        };

        function getPassedSubjects(student) {
          const passedSubjects = [];

          for (const subject in student.grades) {
            if (student.grades[subject] >= 80) {
              passedSubjects.push(subject);
            }
          }

          return passedSubjects;
        }

        const result = getPassedSubjects(student);
        const guess = ["science", "history"];

        expect(result).to.eql(guess);
      });

      it("배열의 요소인 함수 다루기", function () {
        function double(x) {
          return x * 2;
        }

        function square(y) {
          return y * y;
        }

        function subtractFive(z) {
          return z - 5;
        }

        const functionArray = [double, square, subtractFive];

        const result = functionArray[2](functionArray[1](3));
        const guess = 4;

        expect(result).to.eql(guess);
      });

      it("배열의 요소인 객체 다루기", function () {
        const arr = [
          {
            name: "ken",
            job: "ceo",
          },
          {
            name: "leo",
            job: "pm",
          },
          {
            name: "dd",
            job: "designer",
          },
        ];

        for (let i = 0; i < arr.length; i++) {
          if (arr[i].name.length >= 3) {
            arr[i].job = "software engineer";
          }
        }

        const result = arr[2].job;
        const guess = "designer";

        expect(result).to.eql(guess);
      });

      it("객체 내부의 배열 다루기", function () {
        function calculateTotalProfit(account) {
          let totalProfit = 0;

          for (let i = 0; i < account.portfolio.length; i++) {
            totalProfit += account.portfolio[i].profit;
          }

          return totalProfit;
        }

        const account = {
          name: "ken",
          portfolio: [
            {
              name: "samsung",
              profit: -200,
            },
            {
              name: "apple",
              profit: 1000,
            },
            {
              name: "nike",
              profit: 100,
            },
          ],
        };

        const result = calculateTotalProfit(account);
        const guess = 900;

        expect(result).to.eql(guess);
      });

      it("배열 요소 제거하기", function () {
        /* (참고) Math.floor (https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)
        const a = Math.floor(2.1); // 2
        const b = Math.floor(2.6); // 2
         */

        const result = [1, 2, 3];
        const midIndex = Math.floor(result.length / 2); // 1

        result.splice(midIndex, 1); // result.splice(1, 1);, 1번 인덱스부터 1개 요소 삭제

        const guess = [1, 3];

        expect(result).to.eql(guess);
      });

      it("배열 순회하기 #1", function () {
        const arr = [4, 9, 12];
        let result;

        for (let i = 0; i < arr.length; i++) {
          if (i % 2 === 1) {
            result = arr[i];
          }
        }

        const guess = 9;

        expect(result).to.eql(guess);
      });

      it("배열 순회하기 #2", function () {
        const arr = ["h", "e", "l", "l", "o"];

        function reverseArr(arr) {
          const newArr = [];

          for (let i = arr.length - 1; i >= 0; i--) {
            newArr.push(arr[i]);
          }

          return newArr;
        }

        const result = reverseArr(arr);
        const guess = ["o", "l", "l", "e", "h"];

        expect(result).to.eql(guess);
      });

      it("배열 순회하기 #3", function () {
        const arr = [1, 4, 5, 8, 9, 12, 15];
        const result = [];

        for (let i = 0; i < arr.length; i++) { // 0 1 2 3 4 5 6
          if (i % 2 == 0) { // arr[i]가 아닌 i % 2 !!! / 0 2 4 6
            result.push(arr[i]);
          }
        }
        console.log(0 % 2);
        const guess = [1, 5, 9, 15];

        expect(result).to.eql(guess);
      });

      it("배열 순회하기 #4", function () {
        const arr = [1, 4, 5, 8, 9, 12, 15];
        const result = [];

        for (let i = arr.length - 1; i >= 0; i--) {
          if (i % 2 == 0) {
            result.push(arr[i]);
          }
        }

        const guess = [15, 9, 5, 1];

        expect(result).to.eql(guess);
      });

      describe("indexOf 함수 직접 만들어보기", function () {
        /*
         *
         * indexOf 함수 내부 로직을 수정하여
         * indexOf 관련 테스트가 모두 통과되도록 완성해주세요.
         *
         */
        function indexOf(list, target) {
          // [시작] 여러분의 로직을 아래에 작성해주세요.
          for (let i = 0; i < list.length; i++) {
            if (list[i] === target) {
              return i;
            }
          }
          return -1;
          // [끝] 여러분의 로직을 위에 작성해주세요.
        }

        it("주어진 배열에 원하는 요소가 존재할 경우, 해당 요소의 인덱스를 반환해야 한다.", function () {
          const numbers1 = [10, 20, 30, 40, 50];
          const result1 = indexOf(numbers1, 40);

          expect(result1).to.eql(3);

          const numbers2 = [88, 37, 10, 9, 100, 40, 1, 11, 43, 89];
          const result2 = indexOf(numbers2, 1);

          expect(result2).to.eql(6);

          const numbers3 = [
            100, -100, -200, -300, 400, 30, 0, 70, 3, 1000, 90, 1,
          ];
          const result3 = indexOf(numbers3, 1);

          expect(result3).to.eql(11);
        });

        it("주어진 배열에 원하는 요소가 존재하지 않을 경우, -1을 반환해야 한다.", function () {
          const numbers1 = [10, 20, 30, 40, 50];
          const result1 = indexOf(numbers1, 3);

          expect(result1).to.eql(-1);

          const numbers2 = [88, 37, 10, 9, 100, 40, 1, 11, 43, 89];
          const result2 = indexOf(numbers2, 0);

          expect(result2).to.eql(-1);

          const numbers3 = [
            100, -100, -200, -300, 400, 30, 0, 70, 3, 1000, 90, 1,
          ];
          const result3 = indexOf(numbers3, 999);

          expect(result3).to.eql(-1);
        });
      });
    });
  });
})();
