const FileHandler = require('./FileHandler.js')
const path = require('path')

console.log('Start')

const filePath = path.join(__dirname, 'info.txt')
const fh = new FileHandler(filePath)

fh.write('Hello from nodejs', (err) => {
  if (err) {
    console.error('Write error:', err)
    return
  }
  console.log('Content Written')

  fh.read((err, data) => {
    if (err) {
      console.error('Read error:', err)
      return
    }
    console.log('Read:', data)

    fh.append('\nAppended line', (err) => {
      if (err) {
        console.error('Append error:', err)
        return
      }
      console.log('Appended')

      fh.read((err, data2) => {
        if (err) {
          console.error('Read after append error:', err)
          return
        }
        console.log('Read after append:', data2)

        fh.delete((err) => {
          if (err) {
            console.error('Delete error:', err)
            return
          }
          console.log('File deleted')
          console.log('End')
        })
      })
    })
  })
})