# Background Music

This directory contains background music for the Turbo Race game.

## Adding Your Music

To add background music to the game, place an MP3 file named `race-theme.mp3` in this directory.

The audio file should be:
- **Format**: MP3 (or any format supported by HTML5 Audio)
- **Name**: `race-theme.mp3`
- **Recommended size**: Keep under 5MB for optimal loading
- **Recommended bitrate**: 128-192 kbps

### Alternative File Names

If you want to use a different filename, update the following line in `src/services/audio.ts`:

```typescript
this.bgm = new Audio('/music/race-theme.mp3');
```

Replace `race-theme.mp3` with your desired filename.

### Music Features

The background music will:
- Loop continuously during gameplay
- Have a default volume of 30%
- Be mutable via the mute button in the top-right corner of the game screen
- Pause when you leave the game scene
