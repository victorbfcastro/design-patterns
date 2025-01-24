import Participant from "./Participant";

export default class Channel {
  participants: Participant[]

  constructor() {
    this.participants = []
  }

  register (participant: Participant) {
    this.participants.push(participant)
  }

  broadcast (sender: Participant, message: string) {
    for (const participant of this.participants) {
      if (sender.name === participant.name) continue;
      participant.receive(sender, message)
    }
  }
}