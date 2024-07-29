export const toggleNoScroll = (isActive: boolean) => {
  if (isActive) {
    document.body.classList.add('no-scroll')
  } else {
    document.body.classList.remove('no-scroll')
  }
}
