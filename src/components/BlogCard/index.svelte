<script lang="ts">
    export let title: string;
    export let excerpt: string;
    export let image: string;
    export let slug: string;
    export let date: Date;
</script>

<article class="w-80">
    <div>
        <img class="h-40 w-full object-cover" src={image} alt="" width="320" height="160"/>
    </div>
    <div class="py-2 px-1 flex flex-col gap-y-3">
        <h2 class="text-lg font-extrabold leading-tight"><a href="/blog/{slug}">{title}</a></h2>
        <p class="text-xs leading-normal text-gray-500">{excerpt}</p>
        <div class="text-xs text-gray-500">
            <p><time>{new Date().toLocaleString('en-US', { dateStyle: 'long' })}</time></p>
        </div>
    </div>
</article>