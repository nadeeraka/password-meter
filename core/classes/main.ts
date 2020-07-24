class Main {
  input: string;
  score: number = 0;
  // basic password length  p >6 = 1
  // specal keys =1
  // numbers = 1
  // comman password = -1

  constructor(input?: string) {
    this.input = input;
  }

  setInput(x: string): void {
    this.input = x;
  }

  setScore(plus?: number) {
    if (plus > 0) {
      this.score + plus;
    }
    if (this.score > 0 && this.score > plus) {
      this.score - plus;
    }
    return this.score;
  }
  hasSpecialChar(arg: string) {
    const regex: string = "/^[a-zA-Z0-9!@#$%^&*)(+=._-]+$/g";
    if (arg.search(regex) > 0) {
      return this.setScore(1);
    } else if (arg.search(regex) > 2) {
      return this.setScore(2);
    }
    return this.setScore(-1);
  }
  convertToArray(arg: string) {
    return arg.split("");
  }
  hasNumber(arg: string) {
    let count: number = 0;
    const array = this.convertToArray(arg);
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      if (typeof parseInt(element) === "number") {
        count++;
      }
    }
    if (count > 3) {
      return this.setScore(2);
    } else if (count > 0) {
      return this.setScore(1);
    }
    return this.setScore(-1);
  }

  basicPasswordLength(arg: string) {
    if (this.convertToArray(arg).length > 6) {
      return this.setScore(1);
    } else if (this.convertToArray(arg).length > 8) {
      return this.setScore(2);
    }
    return this.setScore(-1);

  }
}
