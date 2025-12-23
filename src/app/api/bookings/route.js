import { connect } from '@/app/lib/dbConnect';

export async function GET(request) {
  const email = new URL(request.url).searchParams.get('email');
  const serviceCollection = connect('bookings');
  const query = { email: email };
  const result = await serviceCollection.find(query).toArray();
  return Response.json(result);
}

export async function POST(request) {
  const info = await request.json();
  const serviceCollection = connect('bookings');
  const service = await serviceCollection.insertOne(info);
  return Response.json(service);
}
