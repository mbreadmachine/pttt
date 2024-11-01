import { error } from "@sveltejs/kit";
import { supabase } from "$lib/supabase";

export const load = async ({ params }) => {
    const { data, queryError } = await supabase.from("places").select("*").eq("id", params.id);

    if (queryError) {
        error(500, { message: queryError.message });
    }

    return {
        result: data[0]
    }
}