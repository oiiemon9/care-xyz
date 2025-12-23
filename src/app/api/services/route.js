import { connect } from '@/app/lib/dbConnect';

export async function GET(request) {
  const serviceCollection = connect('services');
  const services = await serviceCollection.find().toArray();
  return Response.json(services);
}
