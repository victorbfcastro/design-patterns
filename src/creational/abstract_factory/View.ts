import Button from "./interface/Button"
import Label from "./interface/Label"
import WidgetFactory from "./interface/WidgetFactory"

export default class View {
  label: Label
  button: Button

  constructor(widgetFactory: WidgetFactory) {
    this.label = widgetFactory.createLabel()
    this.button = widgetFactory.createButton()
  }
}