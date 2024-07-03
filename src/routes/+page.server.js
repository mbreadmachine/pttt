import { error } from "@sveltejs/kit";
import { supabase } from "../lib/supabase";

/** @type {import('./$types').PageServerLoad} */
export async function load() {

    const { data, queryError } = await supabase.from("places").select()

    if (queryError) { 
        error(500, error.message)
    }

    return {results: data};
};