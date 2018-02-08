const chalk = require('chalk')
const { execSync } = require('child_process')
const CLIPrompt = require('cli-prompt')

// Execute synchronous commands and output to terminal
function exec (command) {
  return execSync(command, { stdio: 'inherit' })
}

// Wrapper for console log
function log (message, color='yellow') {
  return console.log(chalk[color](message)) // eslint-disable-line no-console
}

// Promise-based prompt function
function prompt (message) {
  return new Promise(resolve => CLIPrompt(message, resolve))
}

// Y/N confirmation
async function confirm (message) {
  const answer = await prompt(message)
  if (answer.toLowerCase() === 'y') return true
  if (answer.toLowerCase() === 'n') return false
  log(`Sorry, I don't understand that answer. Please answer Y or N.`, 'black')
  return confirm(message)
}

module.exports = { exec, log, prompt, confirm }