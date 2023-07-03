import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({
        baseUrl:"http://localhost:3000"
        // process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
    }),
    endpoints: (builder) => ({
        getAllUsers: builder.query({
            query: () => ({
                url: "/api/users",
            }),
        }),
        getUser: builder.query({
            query: (id) => ({
                url: `/api/users/${id}`
            })
        }),
        postUser: builder.mutation({
            query: (recipe) => ({
                url: '/api/users',
                method: "POST",
                body: recipe,
                headers: { "Content-Type": "application/json" },
            })
        }),
        editUser: builder.mutation({
            query: (id, newRecipe) => ({
                url: `/api/users/${id}`,
                method: "PUT",
                body: newRecipe,
                headers: { "Content-Type": "application/json" },
            })
        }),
        deleteUser: builder.mutation({
            query: (id, data) => ({
                url: `/api/users/${id}`,
                method: "DELETE",
                body: data,
                headers: { "Content-Type": "application/json" },
            }),
        }),
    }),
});

export const {
    useGetAllUsersQuery, 
    useGetUserQuery, 
    usePostUserMutation,
    useEditUserMutation,
    useDeleteUserMutation
} = userApi