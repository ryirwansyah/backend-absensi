export const dateIso = (datetime) => {
  let date = new Date(datetime)
  date = new Date(date - date.getTimezoneOffset() * 60000)
  const iso = date.toISOString().split('T')[0]
  return iso
}