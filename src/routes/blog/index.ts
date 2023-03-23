export const getArticlesList = async () : Promise<BlogPost[]> => {
    const _import = import.meta.glob("./posts/**/*.md", {
        import: "metadata"
    });
    const files: BlogPost[] = [];

    for (const path in _import){
        let slug = path.split("/")[2];
        let index: any = await _import[path]();
        const metadata: BlogPost = {...index!, slug }
        files.push(metadata);
    }

    return files;
}