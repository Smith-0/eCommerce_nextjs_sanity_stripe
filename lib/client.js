import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: '3uoyxf42',
    dataset: 'production',
    apiiVersion: '2022-07-13',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN

});
 
const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);