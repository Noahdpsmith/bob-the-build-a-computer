import db from '../db/index.js';
import auth from '../utils/auth.js';

const resolvers = {
  Query: {
    builds: async (parent, args, context) => {
      console.log(context);
      if (!context.user) throw new Error('Unauthenticated user');
      return await db.models.Build.find({}).populate('User');
    },
    parts: async () => {
      return db.models.Part.find()
    },
    users: async () => {
      return db.models.User.find()
        .select('-__v -password')
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await db.models.User.create(args);
      const token = auth.signToken(user);

      return { token, user };
    },
    login: async (parent, args) => {
      try {
        const user = await db.models.User.findOne({ name: args.name });

        if (!user) throw new Error('No user found');

        const token = auth.signToken({ _id: user._id, name: user.name });
        console.log(token);

        return { token, user };
      } catch (error) {
        console.log(error);
      }
    },
    addBuild: async (parent, args, context) => {
      if (context.user) {
        const build = await db.models.Build.create({ ...args, username: context.user.username });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { builds: build._id } },
          { new: true }
        );

        return build;
      }

      throw new Error('You need to be logged in!');
    },
    addPart: async (parent, args) => {
      const part = await db.models.Part.create(args);
      return { part };
    },
    // deleteBuild: async (parent, args, context) => {
    //   if (context.user) {
    //     const build = await db.models.Build.deleteOne({ ...args, username: context.user.username });

    //     await User.findByIdAndUpdate(
    //       { _id: context.user._id },
    //       { $push: { builds: build._id } },
    //       { new: true }
    //     );

    //     return build;
    //   }
    //   throw new Error('You need to be logged in!');
    // },
  }

};

export default resolvers;