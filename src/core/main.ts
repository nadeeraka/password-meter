import { regex } from "../util/const";
export class Main {
  input: string;
  score: number = 0;
  // basic password length  p >6 = 1
  // specal keys =1
  // numbers = 1
  // comman password = -1

  constructor(input: string) {
    this.input = input;
  }

  private setInput(x: string): void {
    this.input = x;
  }

  private setScore(plus: number): number {
    if (plus > 0) {
      this.score + plus;
    }
    if (this.score > 0 && this.score > plus) {
      this.score - plus;
    }
    return this.score;
  }

  private getScore(): number {
    return this.score;
  }

  validate(arg: string) {
    if (arg) {
      return true;
    }
    return false;
  }
  hasSpecialChar(arg: string) {
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
  // make this function to do all the checking things
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

  //  main methods
  basicPasswordLength(arg: string) {
    if (this.convertToArray(arg).length > 6) {
      return this.setScore(1);
    } else if (this.convertToArray(arg).length > 8) {
      return this.setScore(2);
    }
    return this.setScore(-1);
  }
  simple(arg: string) {
    if (this.validate(arg)) {
      this.basicPasswordLength(arg);
      return this.getScore();
    }
    return -1;
  }
  advance(arg: string, email: string, name: string) {
    this.basic(arg);
    //  then do check advance checks
    // ...
    return this.getScore();
  }

  basic(arg: string) {
    if (!this.validate(arg)) {
      return -1;
    }
    this.basicPasswordLength(arg);
    this.hasNumber(arg);
    this.hasSpecialChar(arg);
    return this.getScore();
  }
}
