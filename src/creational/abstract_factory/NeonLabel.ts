import Label from "./interface/Label";

export default class NeonLabel implements Label {
  color: string;

  constructor () {
    this.color = "green"
  }
}