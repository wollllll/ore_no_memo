export const stringHelper = {
  omittedText(text, length) {
    return length <= text.length ? `${text.slice(0, length)}...` : text
  },
}
