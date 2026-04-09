import { type RouteConfig, layout, index, route } from "@react-router/dev/routes";

export default [
    layout("./views/RootLayout.tsx", [
        index("./views/Home.tsx"),
        route("movies", "./views/Movies/Movies.tsx"),
        route("movies/:id", "./views/MovieDetail/MovieDetail.tsx"),
    ]),
] satisfies RouteConfig;