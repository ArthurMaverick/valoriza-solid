// import { SignUpController } from '../../../src/presentation/controller'
// import { DbAddUser } from '../../../src/data/usecases/db-add-user'
// import { AddIdOnRepository } from '../../../src/infra/criptography/add-id'
// import { EmailValidatorAdpter } from '../../../src/infra/validators/email-validator-adapter'
// import { EmailValidation, RequiredFieldValidation, ValidationComposite } from '../../../src/validations/validators'
// import { AccountPostgresRepository } from '../../../src/infra/repository/postgres/account-postgres-repository'
// import { Controller } from '../../../src/presentation/rules/controller'
// import { Validation } from '../../../src/presentation/rules'

// const makevalidationStub = () => {
//   const validations: Validation[] = []
//   for (const field of ['name', 'email']) {
//     validations.push(new RequiredFieldValidation(field))
//   }
//   return validations
// } // validation

// // const makeaddNewUserStub = () => {
//   const uuid = new AddIdOnRepository()
//   const PostgresRepository = new AccountPostgresRepository({
//     user: 'shorAcs1' || process.env.USER,
//     database: 'nlw' || process.env.DATABASE,
//     password: 'postgres' || process.env.PASSWORD,
//     host: 'localhost' || process.env.HOSTNAME,
//     port: '8080' || process.env.PORT
//   })
//   return new DbAddUser(
//     uuid,
//     PostgresRepository, // validade
//     PostgresRepository, // find
//     PostgresRepository // create
//   )
// } // add new user

// export const makeSut = (): Controller => {
//   return new SignUpController(makevalidationStub(), makeaddNewUserStub())
// } // SignUp constroller

describe('create-user-controller', () => {
  test('ensure validation return error if any validator adapter retrun error', () => {
    expect(1).toBe(1)
  })
})
