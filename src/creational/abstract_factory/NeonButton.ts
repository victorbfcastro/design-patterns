import Button from "./interface/Button";
import Label from "./interface/Label";

export default class NeonButton implements Button {
  color: string;
  backgroundColor: string;

  constructor () {
    this.color = "blue"
    this.backgroundColor = "black"
  }
}