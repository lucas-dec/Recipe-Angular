export interface SearchRecipes {
    results: Result[];
    baseUri: string;
    offset: number;
    number: number;
    totalResults: number;
    processingTimeMs: number;
    expires: number;
    isStale: boolean;
}

export interface Result {
    id: number;
    title: string;
    readyInMinutes: number;
    servings: number;
    sourceUrl: string;
    openLicense: number;
    image: string;
}
