import {Component, Input} from '@angular/core';
import {CardComponent} from "../card/card.component";
import {NgClass, NgFor} from "@angular/common";

@Component({
  selector: 'app-carousel',
    imports: [
        CardComponent,
        NgFor,
        NgClass
    ],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
    @Input() cardList: any[] = [];

    currentIndex = 0;
    cardPositions: { [index: number]: 'left' | 'center' | 'right' | 'hidden' } = {};
    private touchStartX: number = 0;
    private touchEndX: number = 0;

    ngOnInit() {
        this.updateCardPositions();
    }

    updateCardPositions() {
        const total = this.cardList.length;
        const left = (this.currentIndex - 1 + total) % total;
        const center = this.currentIndex;
        const right = (this.currentIndex + 1) % total;

        this.cardPositions = {};

        for (let i = 0; i < total; i++) {
            if (i === left) {
                this.cardPositions[i] = 'left';
            } else if (i === center) {
                this.cardPositions[i] = 'center';
            } else if (i === right) {
                this.cardPositions[i] = 'right';
            } else {
                this.cardPositions[i] = 'hidden';
            }
        }
    }

    getCardClass(i: number): string {
        return this.cardPositions[i] || 'hidden';
    }

    next() {
        this.currentIndex = (this.currentIndex + 1) % this.cardList.length;
        this.updateCardPositions();
    }

    prev() {
        this.currentIndex = (this.currentIndex - 1 + this.cardList.length) % this.cardList.length;
        this.updateCardPositions();
    }

    onTouchStart(event: TouchEvent) {
        this.touchStartX = event.changedTouches[0].screenX;
    }

    onTouchEnd(event: TouchEvent) {
        this.touchEndX = event.changedTouches[0].screenX;
        this.handleSwipeGesture();
    }

    handleSwipeGesture() {
        const delta = this.touchEndX - this.touchStartX;
        const threshold = 50; // Distance minimale pour déclencher le swipe

        if (Math.abs(delta) > threshold) {
            if (delta > 0) {
                this.prev(); // swipe vers la droite → carte précédente
            } else {
                this.next(); // swipe vers la gauche → carte suivante
            }
        }
    }

}

