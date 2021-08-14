/* Условия для логотипа:
размер канваса — 400x400px;
толщина линий — 16px;
длина вертикальной линии — 150px;
длина горизонтальной линии — 100px;
цвет фона — чёрный;
цвет линии — белый;
расстояние по оси X от вертикальной до горизонтальной линии (ближайшие друг к другу границы) — 22px;
расстояние по оси Y от вертикальной до горизонтальной линии — 22px;
логотип должен располагаться по центру.
Условия для анимации:
	логотип передвигается по нажатию стрелок на клавиатуре: вверх, вниз, вправо, влево;
	каждое передвижение смещает логотип целиком на 25px;
	передвижение логотипа должно быть цикличным — если логотип выходит за пределы канваса, то исчезнувшая часть должна появиться с противоположной стороны.
  
Боковые поля от границ канваса должны быть по 112px.
Вертикальные поля от границ канваса должны быть по 106px.
*/

import './style.css';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
document.addEventListener('keydown', moveRect);

const WIDTH = 400;
const HEIGHT = 400;

canvas.width = WIDTH;
canvas.height = HEIGHT;
ctx.fillStyle = '#fff';

const HORIZONTAL_LINE_WIDTH = 100;
const VERTICAL_LINE_HEIGHT = 150;
const MARGIN = 22;
const LINE_WIDTH = 16;
const VERTICAL_OFFSET = 106;
const HORIZONTAL_OFFSET = 112;
const COMMON_OFFSET = MARGIN + LINE_WIDTH;

const squares = [
  // top squares
  {
    minX: HORIZONTAL_OFFSET + COMMON_OFFSET,
    minY: VERTICAL_OFFSET,
    width: 25,
    height: LINE_WIDTH,
  },
  {
    minX: HORIZONTAL_OFFSET + COMMON_OFFSET + 25,
    minY: VERTICAL_OFFSET,
    width: 25,
    height: LINE_WIDTH,
  },
  {
    minX: HORIZONTAL_OFFSET + COMMON_OFFSET + 25 * 2,
    minY: VERTICAL_OFFSET,
    width: 25,
    height: LINE_WIDTH,
  },
  {
    minX: HORIZONTAL_OFFSET + COMMON_OFFSET + 25 * 3,
    minY: VERTICAL_OFFSET,
    width: 25,
    height: LINE_WIDTH,
  },
  // left squares
  {
    minX: HORIZONTAL_OFFSET,
    minY: VERTICAL_OFFSET + COMMON_OFFSET,
    width: LINE_WIDTH,
    height: 25,
  },
  {
    minX: HORIZONTAL_OFFSET,
    minY: VERTICAL_OFFSET + COMMON_OFFSET + 25,
    width: LINE_WIDTH,
    height: 25,
  },
  {
    minX: HORIZONTAL_OFFSET,
    minY: VERTICAL_OFFSET + COMMON_OFFSET + 25 * 2,
    width: LINE_WIDTH,
    height: 25,
  },
  {
    minX: HORIZONTAL_OFFSET,
    minY: VERTICAL_OFFSET + COMMON_OFFSET + 25 * 3,
    width: LINE_WIDTH,
    height: 25,
  },
  {
    minX: HORIZONTAL_OFFSET,
    minY: VERTICAL_OFFSET + COMMON_OFFSET + 25 * 4,
    width: LINE_WIDTH,
    height: 25,
  },
  {
    minX: HORIZONTAL_OFFSET,
    minY: VERTICAL_OFFSET + COMMON_OFFSET + 25 * 5,
    width: LINE_WIDTH,
    height: 25,
  },
  // right squares
  {
    minX: HORIZONTAL_OFFSET + LINE_WIDTH + MARGIN * 2 + HORIZONTAL_LINE_WIDTH,
    minY: VERTICAL_OFFSET + COMMON_OFFSET,
    width: LINE_WIDTH,
    height: 25,
  },
  {
    minX: HORIZONTAL_OFFSET + LINE_WIDTH + MARGIN * 2 + HORIZONTAL_LINE_WIDTH,
    minY: VERTICAL_OFFSET + COMMON_OFFSET + 25,
    width: LINE_WIDTH,
    height: 25,
  },
  {
    minX: HORIZONTAL_OFFSET + LINE_WIDTH + MARGIN * 2 + HORIZONTAL_LINE_WIDTH,
    minY: VERTICAL_OFFSET + COMMON_OFFSET + 25 * 2,
    width: LINE_WIDTH,
    height: 25,
  },
  {
    minX: HORIZONTAL_OFFSET + LINE_WIDTH + MARGIN * 2 + HORIZONTAL_LINE_WIDTH,
    minY: VERTICAL_OFFSET + COMMON_OFFSET + 25 * 3,
    width: LINE_WIDTH,
    height: 25,
  },
  {
    minX: HORIZONTAL_OFFSET + LINE_WIDTH + MARGIN * 2 + HORIZONTAL_LINE_WIDTH,
    minY: VERTICAL_OFFSET + COMMON_OFFSET + 25 * 4,
    width: LINE_WIDTH,
    height: 25,
  },
  {
    minX: HORIZONTAL_OFFSET + LINE_WIDTH + MARGIN * 2 + HORIZONTAL_LINE_WIDTH,
    minY: VERTICAL_OFFSET + COMMON_OFFSET + 25 * 5,
    width: LINE_WIDTH,
    height: 25,
  },
];

const init = () => updateRect(squares);

// первая отрисовка фигур
init();

const clearRect = () => ctx.clearRect(0, 0, WIDTH, HEIGHT);

function moveRect(event) {
  console.log(event);
  switch (event.keyCode) {
    // left
    case 37:
      clearRect();

      squares.forEach((square) => {
        if (square.minX - 25 < 12) {
          square.minX = 400 - 16;
        } else {
          square.minX -= 25;
        }
      });

      updateRect(squares);
      break;
    // up
    case 38:
      clearRect();

      squares.forEach((square) => {
        if (square.minY - 25 < 12) {
          square.minY = 400 - 25;
        } else {
          square.minY -= 25;
        }
      });

      updateRect(squares);
      break;
    // right
    case 39:
      clearRect();

      squares.forEach((square) => {
        if (square.minX + 25 > 400 - 12) {
          square.minX = 12;
        } else {
          square.minX += 25;
        }
      });

      updateRect(squares);
      break;
    // down
    case 40:
      clearRect();

      squares.forEach((square) => {
        if (square.minY + 25 > 400) {
          square.minY = 0;
        } else {
          square.minY += 25;
        }
      });

      updateRect(squares);
      break;
    default:
      break;
  }
}

function updateRect(squares) {
  //console.log(squares)
  squares.forEach((square) => {
    ctx.fillRect(square.minX, square.minY, square.width, square.height);
  });
}
