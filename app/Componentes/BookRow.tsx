export default function ExamRow(props: any) {
    return (
        <>
            <tr>
                <td className="w-14" ><div className="w-4 h-4 bg-bluefigma1 rounded-full"></div></td>
                <td className="font-bold" >{props.titulo}</td>
                <td className="text-greenfigma font-bold">{props.autor_id}</td>
                <td className="font-bold">{props.stock}</td>
            </tr>
        </>
    )

}