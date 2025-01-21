import Button from "../interface/Button";
import Label from "../interface/Label";
import WidgetFactory from "../interface/WidgetFactory";
import NeonButton from "../NeonButton";
import NeonLabel from "../NeonLabel";

export default class NeonWidgetFactory implements WidgetFactory {
  createLabel(): Label
  {
    return new NeonLabel()
  }
  createButton(): Button
  {
    return new NeonButton()
  }

}