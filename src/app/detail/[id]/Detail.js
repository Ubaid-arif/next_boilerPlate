'use client'

export default async function Detail(props) {
    const { response } = props
    return <div>
    <h2>Detail</h2>

    <h2>{response.title}</h2>

    {response.images.map(item => {
        return <img src={item} />
    })}
    </div>
}