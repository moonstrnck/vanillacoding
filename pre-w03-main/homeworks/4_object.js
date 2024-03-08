(function () {
  "use strict";

  describe("객체 다루기 🔠", function () {
    describe("코드 에디터에서 homeworks/4_object.js 파일을 열어주세요.", function () {
      /*
       *
       * 단순히 정답을 맞추는 것이 아닌, 이유를 정확히 아는 것이 가장 중요합니다. 💁🏻‍♂️
       *
       */

      it("객체 데이터 다루기 #1", function () {
        const person = {
          name: "leo",
          job: "operations manager",
        };

        person.years = 3;
        person.job = "pm";

        const result = person.job;
        const guess = 바코;

        expect(result).to.eql(guess);
      });

      it("객체 데이터 다루기 #2", function () {
        const person = {
          name: "leo",
        };

        person.name = "dd";
        person.job = "designer";

        const result = person.name;
        const guess = 바코;

        expect(result).to.eql(guess);
      });

      it("객체 데이터 다루기 #3", function () {
        const employee = {
          name: "dm",
          job: "software engineer",
          years: 1,
        };

        const key = "id";
        employee[key] = 4;

        const result = employee.id;
        const guess = 바코;

        expect(result).to.eql(guess);
      });

      it("객체 데이터 다루기 #4", function () {
        const employee = {
          name: "dm",
          job: "software engineer",
          years: 1,
        };

        delete employee.years;

        const result = employee.years;
        const guess = 바코;

        expect(result).to.eql(guess);
      });

      it("중첩된 객체 다루기 #1", function () {
        const result = {
          name: "Vanilla Coding",
          url: "https://www.vanillacoding.co/",
          contact: {
            email: "info@vanillacoding.co",
            phone: "02-6713-7279",
          },
        };

        const guess = {
          name: "Vanilla Coding",
          url: "https://www.vanillacoding.co/",
        };

        guess.contact = 바코;

        expect(result).to.eql(guess);
      });

      it("중첩된 객체 다루기 #2", function () {
        const company = {
          name: "Vanilla Coding",
          url: "https://www.vanillacoding.co/",
          contact: {
            email: "info@vanillacoding.co",
            phone: "02-6713-7279",
          },
        };

        const result = company.contact.email;
        const guess = 바코;

        expect(result).to.eql(guess);
      });

      it("중첩된 객체 다루기 #3", function () {
        const reservation = {
          name: "ken",
          checkInDate: "2024-01-15",
          checkOutDate: "2024-01-16",
          location: {
            country: "South Korea",
            city: "Seoul",
          },
        };

        const countries = ["South Korea", "Japan", "United States"];
        const result = reservation.location[countries[0]];

        const guess = 바코;
        expect(result).to.eql(guess);
      });

      it("중첩된 객체 다루기 #4", function () {
        const reservation = {
          name: "ken",
          checkInDate: "2024-01-15",
          checkOutDate: "2024-01-16",
          location: {
            country: "South Korea",
            city: "Seoul",
          },
        };

        const result = reservation.location;
        const key = "country";
        delete reservation.location[key];

        const guess = 바코;
        expect(result).to.eql(guess);
      });

      it("객체와 함수 실행문", function () {
        function sayHello() {
          console.log("디자인을 합니다.");
        }

        const person = {
          name: "dd",
          job: "designer",
          greeting: sayHello(),
        };

        const result = person.greeting;
        const guess = 바코;

        expect(result).to.eql(guess);
      });

      it("객체와 배열", function () {
        const person = {
          name: "ken",
          job: "ceo",
        };

        person.interests = ["fishing", "coding"];
        person.interests.push("marketing");

        const result = person.interests[2];
        const guess = 바코;

        expect(result).to.eql(guess);
      });
    });
  });
})();
