import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({

    apiVersion: '2022-02-01',
    projectId: '3uoyxf42',
    dataset: 'production',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
    ignoreBrowserTokenWarning: true,

});
 
const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

