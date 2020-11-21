export const capitalize = (text: string) => { 
    return text.charAt(0).toLocaleUpperCase() + text.slice(1);
}

export const formattedHeight = (height: number) => { 
    return height < 100 ? `${height}cm` : `${(height / 100).toFixed(2)}m`
}

export const formattedMass = (mass: number) => { 
    return `${mass}kg`;
}