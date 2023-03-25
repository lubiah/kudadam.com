<script lang="ts">
    import type { PageServerData } from "./$types";

    import BlogCard from "$components/BlogCard";
    
    export let data: PageServerData;
</script>

<main>
    {#each data.articles as article}
        <BlogCard
            title={article.title}
            slug={article.slug}
            date={article.date}
            image={article.image}
            excerpt={article.excerpt}
        />
    {/each}
</main>