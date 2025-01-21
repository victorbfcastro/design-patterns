import Button from "./interface/Button";
import Label from "./interface/Label";

export default class DarkButton implements Button {
  color: string;
  backgroundColor: string;

  constructor () {
    this.color = "white"
    this.backgroundColor = "black"
  }
}