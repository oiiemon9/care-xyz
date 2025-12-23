'use server';

import bcrypt from 'bcryptjs';

import { connect } from '@/app/lib/dbConnect';

export const postUser = async (payload) => {
  const { email, password, name } = payload;
  if (!email || !password) return null;

  const isExist = await connect('users').findOne({ email });
  if (isExist) {
    return null;
  }
  const newUser = {
    provider: 'credentials',
    name,
    email,
    password: await bcrypt.hash(password, 14),
    role: 'user',
    createAt: new Date(),
  };

  const result = await connect('users').insertOne(newUser);
  if (result.acknowledged) {
    return { ...result, insertedId: result.insertedId.toString() };
  }
};

export const loginUser = async (payload) => {
  const { email, password } = payload;
  if (!email || !password) return null;
  const user = await connect('users').findOne({ email });

  if (!user) return null;
  const isPassword = await bcrypt.compare(password, user.password);
  if (isPassword) {
    return user;
  } else {
    return null;
  }
};
