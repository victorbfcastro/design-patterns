import Button from "./interface/Button";
import Label from "./interface/Label";

export default class LightButton implements Button {
  color: string;
  backgroundColor: string;

  constructor () {
    this.color = "white"
    this.backgroundColor = "blue"
  }
}