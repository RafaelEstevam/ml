export const translateStatus = (status) => {
  switch (status) {
    case "new":
      return "Novo";
    case "used":
      return "Usado";
    default:
      return ""
  }
}