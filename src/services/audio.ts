/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

class AudioManager {
  private bgm: HTMLAudioElement | null = null;
  private isMuted = false;

  constructor() {
    // Initialize audio element - use new URL for asset imports
    const audioUrl = new URL('./Ratata.mp3', import.meta.url).href;
    this.bgm = new Audio(audioUrl);
    this.bgm.loop = true;
    this.bgm.volume = 0.3;
  }

  playBackgroundMusic() {
    if (this.bgm && this.bgm.paused) {
      this.bgm.play().catch(err => {
        console.warn('Could not play background music:', err);
      });
    }
  }

  pauseBackgroundMusic() {
    if (this.bgm && !this.bgm.paused) {
      this.bgm.pause();
    }
  }

  toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    if (this.bgm) {
      this.bgm.muted = this.isMuted;
    }
    return this.isMuted;
  }

  setVolume(volume: number) {
    if (this.bgm) {
      this.bgm.volume = Math.max(0, Math.min(1, volume));
    }
  }

  getMuted(): boolean {
    return this.isMuted;
  }

  destroy() {
    if (this.bgm) {
      this.bgm.pause();
      this.bgm.src = '';
    }
  }
}

export const audioManager = new AudioManager();
