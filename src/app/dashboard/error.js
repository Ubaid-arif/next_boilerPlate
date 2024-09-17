'use client'

export default function Error(props) {
    console.log('props--->', props.error.message)
    return <div>
        <h1>Error ha bhai...</h1>
        <h2>{props.error.message}</h2>
    </div>
}