import DarkButton from "../DarkButton";
import DarkLabel from "../DarkLabel";
import Button from "../interface/Button";
import Label from "../interface/Label";
import WidgetFactory from "../interface/WidgetFactory";

export default class DarkWidgetFactory implements WidgetFactory {
  createLabel(): Label
  {
    return new DarkLabel()
  }
  createButton(): Button
  {
    return new DarkButton()
  }

}