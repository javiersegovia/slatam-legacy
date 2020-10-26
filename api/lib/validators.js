const validator = require('validator')

class Validation {
  validate(word) {
    this.word = word
    return this
  }
  trim() {
    this.word = validator.trim(this.word)
    this.backupWord = this.word
    return this
  }

  normalizeEmail() {
    this.word = validator.normalizeEmail(this.word)
    this.backupWord = this.word
    return this
  }

  isEmail() {
    this.word = validator.isEmail(this.word)
    if (!this.word) {
      throw new Error('This is not an email')
    }
    if (this.backupWord) {
      return this.backupWord
    }
    return this.word
  }
}

const validation = new Validation()

module.exports = {
  validation,
}
