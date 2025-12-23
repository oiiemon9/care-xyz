'use server';

import { connect } from '@/app/lib/dbConnect';
import { ObjectId } from 'mongodb';
import { notFound } from 'next/navigation';

export const getSingleService = async (id) => {
  let objectId;
  try {
    objectId = new ObjectId(id);
  } catch (error) {
    notFound();
  }
  const query = { _id: objectId };
  const service = await connect('services').findOne(query);
  return service;
};
