import Label from "./interface/Label";

export default class DarkLabel implements Label {
  color: string;

  constructor () {
    this.color = "white"
  }
}