export const ApiQuery = `
  # public
  users: [User]

  # private
  user: User
  settings(pagination: PaginationInput): [Setting]!
`

export const ApiMutation = `
  # public
  createUser(input: UserInput!): User
  createJwtToken(input: JwtTokenInput!): JwtToken

  # pirvate
  updateUser(input: UserInput!): User
  createSetting(input: SettingInput!): Setting
  updateSetting(input: SettingInput!): Setting
`

export const ApiModels = `
  type JwtToken {
    token: String
  }

  type User {
    id: ID
    name: String
    email: String @isUnique
    password: String
  }

  type Setting {
    id: ID
    name: String
    value: String
    createdAt: String
    updatedAt: String
  }
`

export const ApiInputs = `
  input SettingInput {
    name: String
    value: String
  }

  input UserInput {
    name: String
    email: String @isUnique
    password: String
  }

  input JwtTokenInput {
    email: String @isUnique
    password: String
  }

  input IdInput {
    id: ID!
  }

  input PaginationInput {
    limit: Int
    offset: Int
  }
`
