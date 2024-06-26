export type Rate = {
  date: string;
  rate: number;
};

export const rates: Rate[] = [
  { date: '2024-05-01', rate: 0.72 },
  { date: '2024-05-02', rate: 2.66 },
  { date: '2024-05-03', rate: 7.3 },
  { date: '2024-05-04', rate: 1.63 },
  { date: '2024-05-05', rate: 5.98 },
  { date: '2024-05-06', rate: 3.57 },
  { date: '2024-05-07', rate: 9.49 },
  { date: '2024-05-08', rate: 5.94 },
  { date: '2024-05-09', rate: 1.27 },
  { date: '2024-05-10', rate: 6.57 },
  { date: '2024-05-11', rate: 8.48 },
  { date: '2024-05-12', rate: 9.01 },
  { date: '2024-05-13', rate: 0.73 },
  { date: '2024-05-14', rate: 1.07 },
  { date: '2024-05-15', rate: 5.02 },
  { date: '2024-05-16', rate: 0.45 },
  { date: '2024-05-17', rate: 9.39 },
  { date: '2024-05-18', rate: 8.27 },
  { date: '2024-05-19', rate: 9.26 },
  { date: '2024-05-20', rate: 3.16 },
  { date: '2024-05-21', rate: 4.45 },
  { date: '2024-05-22', rate: 7.2 },
  { date: '2024-05-23', rate: 0.68 },
  { date: '2024-05-24', rate: 3.55 },
  { date: '2024-05-25', rate: 3.71 },
  { date: '2024-05-26', rate: 1.98 },
  { date: '2024-05-27', rate: 9.47 },
  { date: '2024-05-28', rate: 1.07 },
  { date: '2024-05-29', rate: 3.43 },
  { date: '2024-05-30', rate: 9.8 },
  { date: '2024-05-31', rate: 8.23 },
];


function generateMayRates() {
  const rates = [];
  const daysInMay = 31;

  for (let day = 1; day <= daysInMay; day++) {
      const date = `2024-05-${day.toString().padStart(2, '0')}`;
      const rate = (Math.random() * 10).toFixed(2); // Генерация случайного значения rate
      rates.push({ date, rate: parseFloat(rate) });
  }

  return rates;
}

// const mayRates = generateMayRates();
