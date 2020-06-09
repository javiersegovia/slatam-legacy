/* eslint-disable node/no-unpublished-require */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable func-names */
/* eslint-disable no-console */

const path = require('path')
const { table } = require('table')

function pluralize(word, count) {
  return count === 1 ? word : `${word}s`
}

function drawTable(messages) {
  const rows = []

  if (messages.length === 0) {
    return ''
  }

  rows.push(['Line', 'Column', 'Type', 'Message', 'Rule ID'])

  messages.forEach((message) => {
    let messageType

    if (message.fatal || message.severity === 2) {
      messageType = 'error'
    } else {
      messageType = 'warning'
    }

    rows.push([
      message.line || 0,
      message.column || 0,
      messageType,
      message.message,
      message.ruleId || '',
    ])
  })

  return table(rows, {
    columns: {
      0: {
        width: 8,
        wrapWord: true,
      },
      1: {
        width: 8,
        wrapWord: true,
      },
      2: {
        width: 8,
        wrapWord: true,
      },
      3: {
        paddingRight: 5,
        width: 50,
        wrapWord: true,
      },
      4: {
        width: 20,
        wrapWord: true,
      },
    },
    drawHorizontalLine(index) {
      return index === 1
    },
  })
}

function drawReport(results) {
  let files

  files = results.map((result) => {
    if (!result.messages.length) {
      return ''
    }

    return `\n${result.filePath}\n\n${drawTable(result.messages)}`
  })

  files = files.filter((content) => content.trim())

  return files.join('')
}

module.exports = function(report) {
  let result
  let errorCount
  let warningCount

  result = ''
  errorCount = 0
  warningCount = 0

  report.forEach((fileReport) => {
    errorCount += fileReport.errorCount
    warningCount += fileReport.warningCount
  })

  if (errorCount || warningCount) {
    result = drawReport(report)
  }

  let output = `\n${table(
    [
      [pluralize(`${errorCount} Error`, errorCount)],
      [pluralize(`${warningCount} Warning`, warningCount)],
    ],
    {
      columns: {
        0: {
          width: 110,
          wrapWord: true,
        },
      },
      drawHorizontalLine() {
        return true
      },
    }
  )}`

  console.log(`${output} \n
  See the complete report at ${path.join(
    __dirname,
    'tmp/eslint_api_results.txt'
  )}
  `)

  output += result

  return output
}
