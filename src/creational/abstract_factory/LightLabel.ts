import Label from "./interface/Label";

export default class LightLabel implements Label {
  color: string;

  constructor () {
    this.color = "black"
  }
}