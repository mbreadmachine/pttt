import { error } from "@sveltejs/kit";
import { supabase } from "$lib/supabase";
import Fuse from 'fuse.js'

export const load = async ({ params }) => {
    const { data, queryError } = await supabase.from("places").select("*")

    if (queryError) {
        error(500, { message: queryError.message });
    }

    const fuse = new Fuse(data, {
        keys: ["name", "alsoknown", "country"]
    })

    const search = fuse.search(params.query)
    
    let searchResults = []
    search.forEach(element => {
        searchResults.push(element.item)
    });

    return {
        results: searchResults
    }
}