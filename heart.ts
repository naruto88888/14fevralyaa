// heart.ts
export function getHeartSize(time: f64): f64 {
    const scale: f64 = Math.sin(time) * 0.3 + 1.0;  // Синус времени для анимации
    return scale;
}
