export const sliceEmail = (email: string) => {
  const sliceIndex = email.indexOf('@')

  return '@' + email.slice(0, sliceIndex)
}
