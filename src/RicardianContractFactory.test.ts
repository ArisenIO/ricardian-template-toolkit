import { RicardianContractFactory } from './RicardianContractFactory'
import {
  complexArisenTokenAbi,
  complexExpectedHtml,
  complexExpectedMetadata,
  complexTransferTransaction,
} from './testfixtures/complex-fixtures'

const complexMetadata = JSON.parse(complexExpectedMetadata)
const complexTransaction = JSON.parse(complexTransferTransaction)
const complexAbi = JSON.parse(complexArisenTokenAbi)

describe('RicardianContractFactory', () => {

  it('successfully selects processor to create RicardianContract', () => {
    const factory = new RicardianContractFactory()
    const complexRc = factory.create({
      abi: complexAbi,
      transaction: complexTransaction,
      actionIndex: 0,
    })
    expect(complexRc.getMetadata()).toEqual(complexMetadata)
    expect(complexRc.getHtml()).toEqual(complexExpectedHtml)
  })
})
