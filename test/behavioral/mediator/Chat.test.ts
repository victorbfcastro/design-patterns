import Channel from "../../../src/behavioral/mediator/Channel";
import Participant from "../../../src/behavioral/mediator/Participant";

test('Deve criar um chat entre participantes', () => {
  const participantA = new Participant("A")
  const participantB = new Participant("B")
  const participantC = new Participant("C")

  participantB.receive(participantA, "Hello")
  participantC.receive(participantA, "Hello")

  expect(participantB.messages[0]).toBe('Participante B recebeu a mensagem: "Hello" do participante: A')
  expect(participantC.messages[0]).toBe('Participante C recebeu a mensagem: "Hello" do participante: A')
});

test('Deve criar uma sala de chat entre participantes', () => {
  const participantA = new Participant("A")
  const participantB = new Participant("B")
  const participantC = new Participant("C")
  const channel = new Channel();
  channel.register(participantA)
  channel.register(participantB)
  channel.register(participantC)
  channel.broadcast(participantA, 'Hello Mr. A!')
  expect(participantB.messages[0]).toBe('Participante B recebeu a mensagem: "Hello Mr. A!" do participante: A')
  expect(participantC.messages[0]).toBe('Participante C recebeu a mensagem: "Hello Mr. A!" do participante: A')
});