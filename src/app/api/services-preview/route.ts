import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Server-side fetch avoids CORS issues
    const res = await fetch(
      "https://rizwani-admin.vercel.app/api/client-services",
      { 
        cache: "no-store",
        next: { revalidate: 0 }
      }
    );
    
    if (!res.ok) {
      return NextResponse.json([], { status: 200 });
    }
    
    const categorized = await res.json();
    
    // Transform the data to match the API structure
    const items = Object.entries(categorized).flatMap(
      ([categoryName, categoryData]) => {
        const services = (categoryData as any)?.services || [];
        return services.map((svc: any, idx: number) => ({
          id: `${categoryName}-${idx}`,
          categoryID: String(categoryName),
          title: String(svc?.title ?? "Untitled"),
          description: String(svc?.description ?? ""),
          keys: Array.isArray(svc?.keys)
            ? svc.keys.map((k: any) => ({
                name: String(k?.name ?? ""),
                desc: String(k?.desc ?? ""),
              }))
            : [],
        }));
      }
    );

    // Return first 6 services for preview
    return NextResponse.json(items.slice(0, 6));
  } catch (error) {
    console.error('Services preview API error:', error);
    return NextResponse.json([], { status: 200 });
  }
}
