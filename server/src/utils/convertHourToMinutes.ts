export default function convertHourToMinutes(time: string) {
  //Transforma a hora em string (8:00) em numeros no array (8 e 00)
  const [hour, minutes] = time.split(':').map(Number);
  const timeInMinutes = (hour * 60) + minutes;

  return timeInMinutes;
}