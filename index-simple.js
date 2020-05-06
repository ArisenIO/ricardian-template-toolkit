const { RicardianContractFactory } = require('./dist/RicardianContractFactory')
const { arisenTokenAbi, transferTransaction } = require('./dist/testfixtures/fixtures')

const transaction = JSON.parse(transferTransaction)
const abi = JSON.parse(arisenTokenAbi)

/* eslint-disable no-console */
const factory = new RicardianContractFactory()
const rc = factory.create({
  abi,
  transaction,
  actionIndex: 0,
})

console.log('\n\n***** Simple Transfer Example *****')
console.log('\n\n~~~~~METADATA~~~~~')
console.log(rc.getMetadata())
console.log('\n\n~~~~~HTML~~~~~')
console.log(rc.getHtml())
