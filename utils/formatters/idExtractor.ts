export const idFromLink = (link: string) => { 
    return parseInt(link.split('/')[5]);
}