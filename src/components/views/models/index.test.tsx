import ListViewModel from '.'

it('creates list view model', () => {
  const id = 1
  const name = 'test'
  const image = './logo192.png'
  const color = 'red'
  const obj = new ListViewModel(id, name, image, color)
  expect(obj.id).toBe(id)
  expect(obj.name).toBe(name)
  expect(obj.image).toBe(image)
  expect(obj.color).toBe(color)
})
