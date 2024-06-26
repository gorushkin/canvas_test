console.log('start');

import { Canvas, createCanvas, loadImage } from 'canvas';
import { writeFile } from 'fs/promises';
import { Rate, rates } from './rate';

const drawImage1 = () => {
  const width = 800;
  const height = 600;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Задаем фон
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, width, height);

  // Рисуем прямоугольник
  ctx.fillStyle = '#ff0000';
  ctx.fillRect(100, 100, 200, 200);

  // Рисуем текст
  ctx.fillStyle = '#000000';
  ctx.font = '30px Arial';
  ctx.fillText('Hello, Canvas!', 150, 350);

  return canvas;
};

const drawImage2 = (data: Rate[]) => {
  const width = 800;
  const height = 600;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  const padding = 50;
  const graphWidth = width - 2 * padding;
  const graphHeight = height - 2 * padding;
  const maxRate = Math.max(...data.map((d) => d.rate));
  const minRate = Math.min(...data.map((d) => d.rate));

  // Фон
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, width, height);

  // Рисуем оси
  ctx.strokeStyle = '#000000';
  ctx.lineWidth = 2;

  // Вертикальная ось
  ctx.beginPath();
  ctx.moveTo(padding, padding);
  ctx.lineTo(padding, height - padding);
  ctx.stroke();

  // Горизонтальная ось
  ctx.beginPath();
  ctx.moveTo(padding, height - padding);
  ctx.lineTo(width - padding, height - padding);
  ctx.stroke();

  // Подписи на осях
  ctx.fillStyle = '#000000';
  ctx.font = '16px Arial';
  ctx.fillText('Date', width / 2, height - padding / 2);
  ctx.save();
  ctx.rotate(-Math.PI / 2);
  ctx.fillText('Rate', -height / 2, padding / 2);
  ctx.restore();

  // Масштабирование данных
  const xStep = graphWidth / (data.length - 1);
  const yScale = graphHeight / (maxRate - minRate);

  // Рисуем график
  ctx.strokeStyle = '#ff0000';
  ctx.lineWidth = 2;
  ctx.beginPath();
  data.forEach((point, index) => {
    const x = padding + index * xStep;
    const y = height - padding - (point.rate - minRate) * yScale;
    if (index === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  });
  ctx.stroke();

  return canvas;
};

const image1 = drawImage1();
const image2 = drawImage2(rates);

const saveImage = async (image: Canvas) => {
  try {
    const buffer = image.toBuffer('image/png');
    writeFile('image.png', buffer).then((e) => {
      console.log('e: ', e);
      console.log('The PNG file was created.');
    });
  } catch (e) {}
};

saveImage(image2);

const getCanvasParams = (rates: Rate[]) => {
  const result = rates.reduce(
    (acc, rate) => {
      if (rate.rate < acc.minRate) {
        acc.minRate = rate.rate;
      }

      if (rate.rate > acc.maxRate) {
        acc.maxRate = rate.rate;
      }

      return acc;
    },
    {
      minRate: rates[0].rate,
      maxRate: rates[0].rate,
    }
  );

  console.log('result: ', result);
  return result;
};

getCanvasParams(rates);
