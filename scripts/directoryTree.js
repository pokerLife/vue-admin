#!/usr/bin/env node
/**
 * @description 项目结构生成脚本
 * @author mr_zhaojie
 */

const fs = require('fs')
const path = require('path')
const exec = require('child_process').exec

const fileName = 'directoryList.md'
const copyPath = 'docs/tree.md'

console.log(`Generate file path: ${path.resolve(copyPath)}`)
// 先安装 npm install -g
exec('mddir', function () {
  fs.writeFileSync(path.resolve(copyPath), fs.readFileSync(fileName))
  fs.unlink(fileName, () => { })
})
