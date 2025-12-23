import { connect } from '@/app/lib/dbConnect';
import { ObjectId } from 'mongodb';

export async function GET(request, { params }) {
  const { id } = await params;
  const query = { _id: new ObjectId(id) };
  const serviceCollection = connect('services');
  const service = await serviceCollection.findOne(query);
  return Response.json(service);
}
