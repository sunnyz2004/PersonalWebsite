import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: "z1dckf42",
    dataset:"production",
    apiVersion:"2022-02-01",
    usecdn: true,
    token: "skupGoThjUgiXSDLhaw11Eim7pLBeXWYZYuw1e1PXxpGxQIV1JdeDXYt8QuDAB6IeqwkweEQneci84uxkbATRXxgbuX13ZZersrIsFNXnzhS2Am13fU99yXMd21Ip4wI6vXhAc9kq6xuHan3MAGCGUTuwgcaUUfWhNyeac1TgI3qbsNW0kBA"
});   


const builder = imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source);