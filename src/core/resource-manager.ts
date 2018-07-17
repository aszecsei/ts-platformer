const images = new Map<string, HTMLImageElement>()

export function getImage(name: string) {
  return images.get(name)
}

export function loadImage(name: string, path: string) {
  const img = new Image()
  img.src = path
  images.set(name, img)
}
