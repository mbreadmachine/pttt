import { error } from "@sveltejs/kit";
import { supabase } from "$lib/supabase";

export const load = async ({ params }) => {
    const { data, queryError } = await supabase.from("places").select().textSearch("name", `${params.query}`);

    if (queryError) {
        error(500, { message: queryError.message });
    }

    return {
        results: data
    }
}