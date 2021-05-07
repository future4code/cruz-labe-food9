export const ConvertTimestampToDate = (timestamp) => {
  const newDate = new Date(timestamp);
  const day = newDate.getDate();
  const month = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ][newDate.getMonth()];
  const year = newDate.getFullYear();
  return `${day} de ${month} de ${year}`;
};

export default ConvertTimestampToDate;
