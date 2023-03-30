import { load } from "cheerio";
import type { Cheerio, AnyNode } from "cheerio";

const generateTableOfContents = (html: string) => {
    const $ = load(html);
    const HEADINGS = $("h2,h3,h4,h5,h6");
    const TOC_CONTAINER = $("<nav></nav>");
    const UL_ELEMENT = $("<ul></ul>");

    let first: Cheerio<AnyNode>;
    let second: Cheerio<AnyNode>;
    let third: Cheerio<AnyNode>;
    let fourth: Cheerio<AnyNode>;


    HEADINGS.each(heading => {
        const ELEMENT = HEADINGS[heading];
        const ID = $(ELEMENT).attr("id");
        const LEVEL = parseInt($(ELEMENT).prop('tagName').replace(/h/gi,''));
        const TITLE = $(ELEMENT).text();
        
        const LI_ELEMENT = $("<li></li>");
        const LINK_ELEMENT = $("<a></a>");

        LINK_ELEMENT.html(TITLE)


        switch (LEVEL){
            case 2:
                LI_ELEMENT.append(LINK_ELEMENT);
                UL_ELEMENT.append(LINK_ELEMENT);
                break;
            
            case 3:
                first = $("<ul></ul>");
                LI_ELEMENT.append(LINK_ELEMENT);
                first.append(LI_ELEMENT);
                UL_ELEMENT.append(first);
                break;
            
            case 4:
                second = $("<ul></ul>");
                LI_ELEMENT.append(LINK_ELEMENT);
                second.append(LI_ELEMENT);
                LI_ELEMENT.append(LINK_ELEMENT);
                second.append(LI_ELEMENT);
                first.append(second);
                break;

            case 5:
                third = $("<ul></ul>");
                LI_ELEMENT.append(LINK_ELEMENT);
                third.append(LI_ELEMENT);
                second.append(third);
                break;
            
            case 6:
                fourth = $("<ul></ul>");
                LI_ELEMENT.append(LINK_ELEMENT);
                fourth.append(LI_ELEMENT);
                third.append(fourth);
                second.append(first);
                break;
                
        }
        

    })

    TOC_CONTAINER.append(UL_ELEMENT);

    return TOC_CONTAINER.html()

}

export default generateTableOfContents