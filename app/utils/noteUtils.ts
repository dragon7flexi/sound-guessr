const allNotes = [
  'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'
];

const NUM_NOTES = 10;

// 音名を10個ランダムに抽出して返す
export function fetchRandomNotes(): string[] {
    return [...allNotes]
        .sort(() => Math.random() - 0.5)
        .slice(0, NUM_NOTES)
}

// utils/audioHelper.ts

const noteFrequencies: { [key: string]: number } = {
    'C': 261.63,  // ド
    'C#': 277.18, // ド#
    'D': 293.66,  // レ
    'D#': 311.13, // レ#
    'E': 329.63,  // ミ
    'F': 349.23,  // ファ
    'F#': 369.99, // ファ#
    'G': 392.00,  // ソ
    'G#': 415.30, // ソ#
    'A': 440.00,  // ラ
    'A#': 466.16, // ラ#
    'B': 493.88,  // シ
};

// 音を再生するヘルパー関数
export function playNote(note: string) {
    const frequency = noteFrequencies[note];

    if (frequency) {
        const audioContext = new (window.AudioContext)();
        const oscillator = audioContext.createOscillator();
        
        oscillator.type = 'sine'; // 音の波形を指定（sine, square, sawtooth, triangle）
        oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime); // 周波数を設定
        oscillator.connect(audioContext.destination); // 出力先を接続
        oscillator.start(); // 音を再生開始
        
        // 指定した時間後に音を停止
        oscillator.stop(audioContext.currentTime + 1); // 1秒間再生
    } else {
        console.warn("Invalid note:", note);
    }
}