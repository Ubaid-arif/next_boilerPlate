import Detail from './Detail'

export default async function DetailContainer(props) {
    const { id } = props.params
    const res = await fetch('https://dummyjson.com/products/' + id)
    const response = await res.json()


    return <Detail response={response} />
}