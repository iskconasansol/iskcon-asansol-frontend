export async function GET(request: Request) {
  console.log(request, 'request');
  return Response.json({
    status: 'success',
  });
}
