


export function Cell({ songs }: any) {
    return (
        <tr>
            <th>{songs.id_cancion}</th>
            <td>{songs.titulo}</td>
            <td>{songs.duracion}</td>
            {/* <td>{songs.artist}</td>
            <td>{songs.album}</td>
            <td>{songs.genre}</td>
            <td>{songs.release}</td> */}
            <td>
                <div className="flex justify-center gap-2">
                    <button className="btn btn-warning">Update</button>
                    <button className="btn btn-error">Delete</button>
                </div>
            </td>
        </tr>
    )
}



export default function AllMusic({ props }: any) {

    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table table-zebra table-compact w-[100%] table-fixed text-center">
                    <thead>
                        <tr>
                            <th className="w-[5%]"></th>
                            <th className="w-[10%]">Title</th>
                            <th className="w-[10%]">Time</th>
                            <th className="w-[15%]">Artist</th>
                            <th className="w-[15%]">Album</th>
                            <th className="w-[10%]">Genre</th>
                            <th className="w-[10%]">Release Date</th>
                            <th className="w-[25%]">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {props && props.map((songs: any) => (
    <Cell songs={songs} />
  ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}