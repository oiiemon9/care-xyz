'use server';

import { connect } from '@/app/lib/dbConnect';
import { ObjectId } from 'mongodb';

export const getSingleService = async (id) => {
  if (id.length !== 24) {
    return {};
  }
  const query = { _id: new ObjectId(id) };
  const service = await connect('services').findOne(query);
  return service || {};
};
