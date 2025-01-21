import Button from "../interface/Button";
import Label from "../interface/Label";
import WidgetFactory from "../interface/WidgetFactory";
import LightButton from "../LightButton";
import LightLabel from "../LightLabel";

export default class LightWidgetFactory implements WidgetFactory {
  createLabel(): Label
  {
    return new LightLabel()
  }
  createButton(): Button
  {
    return new LightButton()
  }

}