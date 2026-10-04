import {NextResponse} from 'next/server';export async function GET(){return NextResponse.json({ok:true,service:'green-board',timestamp:new Date().toISOString()})}
