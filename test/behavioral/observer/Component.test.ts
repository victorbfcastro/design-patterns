import InputText from "../../../src/behavioral/observer/InputText";
import Label from "../../../src/behavioral/observer/Label";

test('Deve criar um componente reativo ', () => {
  const inputText = new InputText("country"); // inputText deve ser observado por Label, logo ele é um Observable
  const labelPT = new Label("País: {{country}}"); // Label deve observar inputText para se atualizar automaticamente, logo ele é um Observer
  const labelEN = new Label("Country: {{country}}");  // Desejamos que quando o field 'country' for atualizado, os label sejam atualizados automaticamente através do padrao observer
  inputText.register(labelPT) // Registrando labelPT como observer de inputText
  inputText.register(labelEN) // Registrando labelEN como observer de inputText

  inputText.setValue("Brasil") // Ao chamar setValue(), este irá notificar os observadores para se atualizarem.

  expect(labelPT.getValue()).toBe("País: Brasil")
  expect(labelEN.getValue()).toBe("Country: Brasil")
});