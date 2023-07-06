import DataTable from "react-data-table-component";
import { 
    useGetAllRecipesQuery,
    // useGetRecipeQuery,
    // usePostRecipeMutation,
    // useEditRecipeMutation,
    useDeleteRecipeMutation
} from "../../redux/recipes/recipeApi";
import {
    useGetAllUsersQuery
} from "../../redux/users/userApi"
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

function Datatable() {
    const dispatch = useDispatch();
    const [reset, setReset] = useState([])

    const { data: allRecipes, isLoading, isFetching, error } = useGetAllRecipesQuery();
    const { data: allUsers } = useGetAllUsersQuery();
    
    const [deleteRecipe] = useDeleteRecipeMutation();

    const handleSelectDeletedRecipes = (row, event) => {
        const deleted = event.target.value
        const recipeId = row._id;

        deleteRecipe({id: recipeId, deleted: deleted})
        // setReset(`${deleted}`);
          const reset = { ...row, deleted: deleted };
            setReset((prevState) => ({
            ...prevState,
            [recipeId]: reset,
            }));
    }

    useEffect(() => {
        setReset(null);
    }, [reset]);
    
    const handleClickFive = () => {}
    const handleClickSix = () => {}
    
    const columnsRecipes = [
        { name: 'Título', selector: (row) => row.title, sortable: true },
        { name: 'Categoría', selector: (row) => row.category, sortable: true },
        { name: 'Imagen', selector: (row) => <img src={row.image} width={50} height={40}/> },
        { name: 'Eliminado', selector: (row) => row.deleted, sortable: true },
        {
            name: "Cambiar eliminacion",
            cell: (row) => (
                <select
                onChange={(event) => handleSelectDeletedRecipes(row, event)}
                value={row.deleted}
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
                // onClick={() => handleClickFive(row)}
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
    
    const columnsUsers = [
        { name: 'Nombre', selector: (row) => row.name },
        { name: 'Mail', selector: (row) => row.mail },
        { name: 'Imagen', selector: (row) => <img src={row.image} width={50} height={40}/> },
        { name: 'Tipo', selector: (row) => row.tipo },
        { name: 'Status', selector: (row) => row.status }
    ];
    
    const paginateOptions = {
        rowsPerPageText: "Filas por página",
        rangeSeparatorText: "de",
        selectAllRowsItem: true,
        selectAllRowsItemText: "Todos",
    };

    if (isLoading || isFetching) return (
        <div>
            ...Loading
        </div>
    )

    if (error) return (
        <div>
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