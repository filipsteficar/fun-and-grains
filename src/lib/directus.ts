import { createDirectus, rest } from '@directus/sdk';

type Post = {
    id: string;
    title: string;
    slug: string;
    author: Author;
    cover: string;
    body: string;
    date_updated: string;
    date_created: string;
    status: string;
}

type Recipe = {
    id: string;
    title: string;
    slug: string;
    // Relational Authors
    author: Author;
    cover: string;
    cover_alt_text: string;
    prep_time: number;
    difficulty: string;
    portions: number;
    // Ingredients Repeater
    ingredients: Ingredient[];
    // Steps Repeater
    steps: Step[];
    // Long Text
    body: string;
    // Relational Tags
    tags: Recipe_Tags[];
    date_updated: string;
    date_created: string;
    status: string;
}

type Ingredient = {
    // Part Of Recipe Repeater Field
    ingredient: string;
}

type Step = {
    // Part Of Recipe Repeater Field
    step: string;
}

type Recipe_Tags = {
    id: string;
    name: string;
    slug: string;
}

type Author = {
    id: string;
    avatar: string;
    name: string;
    slug: string;
    bio: string;
}

type Schema = {
    // Key Must Match Directus 100%
    posts: Post[];
    recipes: Recipe[];
    recipe_tags: Recipe_Tags[];
    authors: Author[];
}

const directus = createDirectus<Schema>('https://directus-v0gswo0csw84sck0cc8c4oo0.apollo.filipsteficar.com').with(rest());

export default directus;