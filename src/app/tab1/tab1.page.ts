import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  messages: Array<string>;

  constructor(public navCtrl: NavController) {
    this.messages = [
      "Trying some ways, to check if that works!",
      "Your limitation—it's only your imagination.",
      "Great things never come from comfort zones.",
      "Let's try to focus, let's have a goal! Be it for a near future, or far - however it suits you..",
      "Success doesn't just find you. ...",
      "Keep on the fire within you, let others burn..",
      "The harder you work for something, the greater you'll feel when you achieve it.",
      "Wake up with determination. Go to bed with satisfaction.",
      "Don’t wait for opportunity. Create it.",
      "The key to success is to focus on goals, not obstacles.",
      "Dream it. Believe it. Build it.",
      "Don’t stop when you’re tired. Stop when you’re done.",
      "Be transparent, but do not let others see your soul!",
      "The harder you work for something, the greater you’ll feel when you achieve it."
    ]
  }

}
