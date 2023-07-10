import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const recipeApi = createApi({
    reducerPath: "recipeApi",
    baseQuery: fetchBaseQuery({
        baseUrl:"http://localhost:3000"
        // process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
    }),
    endpoints: (builder) => ({
        getAllRecipes: builder.query({
            query: ({title, ingredients}) => ({
                url: "/api/recipes",
                params: {title, ingredients}
            }),
        }),
        getRecipe: builder.query({
            query: (id) => ({
                url: `/api/recipes/${id}`
            })
        }),
        postRecipe: builder.mutation({
            query: (recipe) => ({
                url: '/api/recipes',
                method: "POST",
                body: recipe,
                headers: { "Content-Type": "application/json" },
            })
        }),
        editRecipe: builder.mutation({
            query: (id, newRecipe) => ({
                url: `/api/recipes/${id}`,
                method: "PUT",
                body: newRecipe,
                headers: { "Content-Type": "application/json" },
            })
        }),
        deleteRecipe: builder.mutation({
            query: ({ id, deleted }) => ({
                url: `/api/recipes/${id}`,
                method: "DELETE",
                params: { deleted },
                headers: { "Content-Type": "application/json" },
            }),
        }),
    }),
});

export const {
    useGetAllRecipesQuery, 
    useGetRecipeQuery, 
    usePostRecipeMutation,
    useEditRecipeMutation,
    useDeleteRecipeMutation
} = recipeApi