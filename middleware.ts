import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest ,NextResponse} from "next/server";


export async function middleware(req: NextRequest) {
    const res= NextResponse.next();
    const supabase= createMiddlewareClient({
        req,
        res
    });

    await supabase.auth.getSession();
    return res;
}

// this file exist because we did not add ant restriction for authentication user to able to load song
// but this way if you change it going to work with authenticaiton users