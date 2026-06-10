export interface SpringState {
  x: number; // Текущая позиция / значение
  v: number; // Текущая скорость
  target: number; // Целевое значение, к которому стремится пружина
}

export interface RippleState {
  active: boolean;
  time: number; // Время жизни волны в секундах
}
