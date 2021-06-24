const API_KEY = "cf433e64ed418f74af30e93ad36f8f4b";
const API_BASE = "https://api.themoviedb.org/3";

/*
- originais netflix
-recomendados (trending)
- em alta (top rated) 
- ação
- comédia
- terror
- romance
- documentários
*/

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getHomeList: async () => {
        return [
            {
                slug: "originals",
                title: "Originais Netflix",
                Items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`),
            },
            {
                slug: "trending",
                title: "Recomendados para você",
                Items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`),
            },
            {
                slug: "toprated",
                title: "Em Alta",
                Items: await basicFetch(`/movie/top_rated?api_key=${API_KEY}&language=pt-BR&page=1`),
            },
            {
                slug: "action",
                title: "Ação",
                Items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`),
            },
            {
                slug: "comedy",
                title: "Comédia",
                Items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`),
            },
            {
                slug: "romance",
                title: "Romance",
                Items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`),
            },
            {
                slug: "horror",
                title: "Terror",
                Items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`),
            },
            {
                slug: "documentary",
                title: "Documentários",
                Items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`),
            },
        ];
    },
};
