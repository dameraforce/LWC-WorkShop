import { LightningElement, api } from 'lwc';
export default class VideoPlayer extends LightningElement {
 @api videoUrl;
 @api
 play() {
 const player = this.template.querySelector('video');
 // the player might not be in the DOM just yet
 if (player) {
 player.play();
 }
 }
 get videoType() {
 return 'video/' + this.videoUrl.split('.').pop();
 }
}
