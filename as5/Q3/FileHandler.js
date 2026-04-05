const fs = require('fs')
const path = require('path')

class FileHandler {
  constructor(filePath) {
    this.filePath = filePath
  }

  write(content, cb) {
    fs.writeFile(this.filePath, content, 'utf8', cb)
  }

  read(cb) {
    fs.readFile(this.filePath, 'utf8', cb)
  }

  append(content, cb) {
    fs.appendFile(this.filePath, content, 'utf8', cb)
  }

  delete(cb) {
    fs.unlink(this.filePath, cb)
  }

  writeSync(content) {
    fs.writeFileSync(this.filePath, content, 'utf8')
  }

  readSync() {
    return fs.readFileSync(this.filePath, 'utf8')
  }

  appendSync(content) {
    fs.appendFileSync(this.filePath, content, 'utf8')
  }

  exists() {
    return fs.existsSync(this.filePath)
  }
}

module.exports = FileHandler