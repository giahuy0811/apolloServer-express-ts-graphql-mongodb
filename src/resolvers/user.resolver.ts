import { User } from '../entity/user.entity';






export const userResolvers = {
  Query: {
    users: () => User.find().exec()
  },
  Mutation: {
    createUser: async (_: any,{email}: {email: string}) => {
      const user = new User({email})
      await user.save()
      return user
    }
  }
}