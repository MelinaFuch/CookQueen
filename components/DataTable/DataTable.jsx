import { paginateOptions } from "@/pages/utils/auxData-table";
import DataTable, {createTheme} from "react-data-table-component";
import { 
    useGetAllRecipesQuery,
    // useGetRecipeQuery,
    // usePostRecipeMutation,
    // useEditRecipeMutation,
    useDeleteRecipeMutation
} from "../../redux/recipes/recipeApi";
import {
    useGetAllUsersQuery,
    useDeleteUserMutation
} from "../../redux/users/userApi"
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

function Datatable() {
    createTheme("solarized", {
        text: {
            primary: "#462C1D",
            secondary: "#462C1D",
        },
        background: {
            default: "rgba(226, 134, 104, 0.383)",
        },
        context: {
            // background: "rgba(226, 134, 104, 0.428)",
            text: "#FFFFFF",
        },
        divider: {
            default: "rgb(226, 134, 104)",
        },
        button: {
            default: "rgb(226, 134, 104)",
            hover: "rgba(0,0,0,.08)",
            focus: "rgba(255,255,255,.12)",
            disabled: "rgba(255, 255, 255, .34)",
        },
        sortFocus: {
            default: "rgb(226, 134, 104)",
        },
    });

    const { data: allRecipes, isLoading, isFetching, error } = useGetAllRecipesQuery();
    const [deleteRecipe] = useDeleteRecipeMutation();

    const { data: allUsers } = useGetAllUsersQuery();
    const [deleteUser] = useDeleteUserMutation();
    
    const [deletedRecipes, setDeletedRecipes] = useState({});
    const [typeUser, setTypeUser] = useState({});
    const [statusUser, setStatusUser] = useState({});

    const handleSelectDeletedRecipes = async (row, event) => {
        const deleted = event.target.value;
        const recipeId = row._id;

        try {
            await deleteRecipe({ id: recipeId, deleted: deleted });
            setDeletedRecipes((prevDeletedRecipes) => ({
                ...prevDeletedRecipes,
                [recipeId]: deleted,
            }));
        } catch (error) {
            console.log("Error:", error);
        }
    };
    
    useEffect(() => {
        if (allUsers) {
            const updateTypeUser = {};
            allUsers.data.forEach((user) => {
                updateTypeUser[user._id] = user.tipo;
            });
            setTypeUser(updateTypeUser);

            const updateStatusUser = {};
            allUsers.data.forEach((user) => {
                updateStatusUser[user._id] = user.status;
            });
            setStatusUser(updateStatusUser);
        }
        if (allRecipes) {
            const updatedDeletedRecipes = {};
            allRecipes.data.forEach((recipe) => {
                updatedDeletedRecipes[recipe._id] = recipe.deleted;
            });
            setDeletedRecipes(updatedDeletedRecipes);
        }
    }, [allRecipes, allUsers]);

    const columnsRecipes = [
        { name: 'Título', selector: (row) => row.title, sortable: true },
        { name: 'Categoría', selector: (row) => row.category.map(category =><p>{category}</p>), sortable: true },
        { name: 'Imagen', selector: (row) => <img src={row.image} width={50} height={40}/> },
        {
            name: "Eliminado",
            cell: (row) => (
                <select
                    onChange={(event) => handleSelectDeletedRecipes(row, event)}
                    value={deletedRecipes[row._id] || row.deleted}
                >
                    <option value="Si">Sí</option>
                    <option value="No">No</option>
                </select>
            ),
        },
        {
            name: "Detalles",
            cell: (row) => (
                <button
                // onClick={() => handleClickDetailRecipe(row)}
                >
                    Ver
                </button>
            ),
        },
        {
            name: "Editar",
            cell: (row) => (
                <button
                // onClick={() => handleClickSix(row)}
                >
                    Editar
                </button>
            )
        },
    ];

    const handleSelectEditTipoUser = async(row, event) => {
        const tipoUser = event.target.value;
        const userId = row._id;
        const status = row.status

        try {
            await deleteUser({id: userId, tipo: tipoUser, status});
            setTypeUser((prevTypeUser) => ({
                ...prevTypeUser,
                [userId]: tipoUser,
            }));
        } catch (error) {
            console.log("Error:", error);
        }
    }

    const handleSelectEditStatusUser = async(row, event) => {
        const statusUser = event.target.value;
        const userId = row._id;
        const tipo = row.tipo;

        try {
            await deleteUser({id: userId, tipo, status: statusUser})
            setStatusUser((prevStatusUser) => ({
                ...prevStatusUser,
                [userId]: statusUser,
            }));
        } catch (error) {
            console.log("Error:", error);
        }
    }

    const columnsUsers = [
        { name: 'Nombre', selector: (row) => row.name },
        { name: 'Mail', selector: (row) => row.mail },
        { name: 'Imagen', selector: (row) => <img src={row.image} width={50} height={40}/> },
        { name: 'Tipo', cell: (row) => (
            <select
            onChange={(event) => handleSelectEditTipoUser(row, event)}
            value={typeUser[row._id] || row.tipo}
            >
                <option value="user">Usuarix</option>
                <option value="admin">Administradorx</option>
            </select>
        )},
        { name: 'Status', cell: (row) => (
            <select
            onChange={(event) => handleSelectEditStatusUser(row, event)}
            value={statusUser[row._id] || row.status}
            >
                <option value="activo">Activo</option>
                <option value="inactivo">Inactivo</option>
                <option value="baneado">Baneado</option>
            </select>
        )},
    ];
    

    if (isLoading || isFetching) return (
        <div>
            ...Loading
        </div>
    )

    if (error) return (
        <div>
            {console.log(allRecipes)}
            Error: {error.message}
        </div>
    )

    return (
        <div>
            <DataTable
                title="Recetas"
                columns={columnsRecipes}
                data={allRecipes && allRecipes.data}
                pagination
                paginationComponentOptions={paginateOptions}
                theme="solarized"
                // fixedHeader
                // fixedHeaderScrollHeight="500px"
                // highlightOnHover
            />
            <DataTable
                title="Usuarixs"
                columns={columnsUsers}
                data={allUsers && allUsers.data}
                pagination
                paginationComponentOptions={paginateOptions}
                theme="solarized"
                // fixedHeader
                // fixedHeaderScrollHeight="500px"
                // highlightOnHover
            />
        </div>
    )
}

export default Datatable;