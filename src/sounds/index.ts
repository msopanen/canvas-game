import { Direction } from "../types";
import hitWav from "./hit.wav";
import hit2Wav from "./hit2.wav";

export class SoundPlayer {
  private oobSound: HTMLAudioElement;
  private collisionSound: HTMLAudioElement;
  private prevDirection: Direction = Direction.UNSET;
  private play = false;

  constructor() {
    this.oobSound = new Audio(hitWav);
    this.collisionSound = new Audio(hit2Wav);
  }

  public resetOutOfBounds = (direction: Direction) => {
    if (this.play === false && this.prevDirection !== direction) {
      this.prevDirection = direction;
      this.play = true;
    }
  };

  public playOutOfBounds = () => {
    if (this.play) {
      this.oobSound.play();
      this.play = false;
    }
  };

  public playCollision = () => {
    if (this.play) {
      this.collisionSound.play();
      this.play = false;
    }
  };
}

// Free sounds -> https://mixkit.co/free-sound-effects/impact/
