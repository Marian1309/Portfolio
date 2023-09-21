import { NextResponse } from 'next/server';

export const GET = () => {
  return NextResponse.json({ name: 'Marian' }, { status: 200 });
};
