const { exec, log, prompt, confirm } = require('./helpers')
const fs = require('fs-extra')
const path = require('path')

// String replacement using regex groups
String.prototype.replaceGroup = function (regex, replacement) {
  return this.replace(regex, (match, group) => match.replace(group, replacement))
}

async function main () {
  log('Running client template setup script...')
  const confirmed = await confirm('This script will clear the git history of this project. Do you want to proceed? (Y/N) ')
  if (!confirmed) return 
  const projectName = await prompt('What is the name of this project? (e.g. my-project-client) ')
  const displayTitle = await prompt('What is the display title of this project? (e.g. My Project) ')
  log('Reinitializing git repo...')
  exec('rm -rf .git && git init')
  if (projectName) {
    log('Updating package.json with project name...')
    updatePackageJson(projectName)
    log('package.json updated!', 'green')
    log('Updating readme with project name...')
    updateReadme(projectName)
    log('README.md updated!', 'green')
  }
  if (displayTitle) {
    log('Updating index.html with display title...')
    updateHtmlTitle(displayTitle)
    log('index.html updated!', 'green')
  }
}

function updatePackageJson (projectName) {
  const packageString = fs.readFileSync(path.resolve('package.json'), 'utf8')
  const nameRegex = /^{[^{]*"name"\s*:\s*"(client-template)"/
  const versionRegex = /^{[^{]*"version"\s*:\s*"([^"]+)"/
  const newPackageString = packageString
    .replaceGroup(nameRegex, projectName)
    .replaceGroup(versionRegex, '1.0.0')
  fs.writeFileSync(path.resolve('package.json'), newPackageString)
}

function updateReadme (projectName) {
  const readmeString = fs.readFileSync(path.resolve('README.md'), 'utf8')
  const nameRegex = /^# (client-template)/
  const newReadmeString = readmeString.replaceGroup(nameRegex, projectName)
  fs.writeFileSync(path.resolve('README.md'), newReadmeString)
}

function updateHtmlTitle (displayTitle) {
  const htmlString = fs.readFileSync(path.resolve('public', 'index.html'), 'utf8')
  const titleRegex = /<title> (Client Template) <\/title>/
  const newHtmlString = htmlString.replaceGroup(titleRegex, displayTitle)
  fs.writeFileSync(path.resolve('public', 'index.html'), newHtmlString)
}

if (!module.parent) main()
